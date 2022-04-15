var german = true;  /* display title and search in german */
var displayable = database; /* display everything on page load */
var typingTimeout;  /* timer variable */
var publicSuggestions = [];
var generalSuggestions = [];
var screen = "covers";
var recFactorRating = 2;
var recFactorAge = 0.05;
var recFactorCount = 1;
var recMinRating = 5;
var restrictLoading = true;
var maxCovers = 50;
var searchedDate = "01 " + monthname(new Date().getMonth()+1) + " " + new Date().getFullYear();

/* constants */
var maxCoversInit = 50;
var maxCoversInc = 50;
var limitTop = 2;   /* max 2 suggestion per category */
var typingWaitTime = 400; /* time to wait after typing before searching in ms */
/* icon urls */
var iconFilm = "https://64.media.tumblr.com/4f813b56fb51059359e859b2096218f7/94b15482565b3989-40/s250x400/d43c19dd70f554c70f9daf3556b24003dac84c37.png";
var iconBook = "https://64.media.tumblr.com/8088c06257464b9728bf9b39e4fb79a5/fcb69dc87414c75c-6b/s250x400/49ef0e716a5b22907b4d28606aed2fdc7655a9b4.png";
var iconAudiobook = "https://64.media.tumblr.com/11eb1d1c428e429362d17725859e2ac1/8aba3a46d89f88ac-25/s250x400/02b18208d5c6ba72da517496967e629430991dcd.png";
var iconSeries = "https://64.media.tumblr.com/aef2a41ea01f1939ebf996fa2cb9d41f/8f8ff42874454fad-70/s250x400/806b79349e8bad01832fb657b9a11c0f6275861c.png";
var iconShort = iconFilm;
var iconStar = "https://64.media.tumblr.com/3692c562e47929d4643f1070ee079b2c/3a9ce815f074f938-9d/s250x400/431ac08c75d15d9acc2db36cd44dcd191a7d595f.png";
var iconHalfStar = "https://64.media.tumblr.com/52da2580411d6a3859afe84d9ae70dfc/3a9ce815f074f938-a1/s250x400/db2dbb2e3a4c76c94a5438f4a43caf12d67c58bf.png";
//neue bildbreite: var iconHalfStar = "https://64.media.tumblr.com/9b0ee0c38aba8ec6ea435d26a0bdfd03/3a9ce815f074f938-2d/s100x200/6fbc9707b064f20fd49367dc2854eebc30e996b4.png";
/* positions in entry */
var idType = 0;
var idTitle = 1;
var idYear = 2;
var idDate = 3;
var idRating = 4;
var idLang = 5;
var idGenre = 6;
var idWatchedWith = 7;
var idTag = 8;
var idCreator = 9;
var idActor = 10;
var idImage = 11;
var idResults = 12;


function init() {
	if (window.location.host == "aki-108.github.io") {
	    let url = window.location.search.substring(1);
	    let q = "";
	    let s = "covers";
	    let searchSet = "cut";
	    let options = "111111111";
	    let order = "11";
	    let lang = "ger";

	    if (url.search("q=") > -1) {
		q = url.substring(url.search("q=")+2);
		if (q.search("&") > -1) {
		    q = q.substring(0, q.search("&"));
		}
	    }
	    q = q.replaceAll("%20", " ");
	    q = q.replaceAll("%22", "\"");
	    document.getElementById("searchBox").value = q;

	    if (url.search("s=") > -1) {
		s = url.substring(url.search("s=")+2);
		if (s.search("&") > -1) {
		    s = s.substring(0, s.search("&"));
		}
	    }
	    screen = s;

	    if (url.search("set=") > -1) {
		searchSet = url.substring(url.search("set=")+4);
		if (searchSet.search("&") > -1) {
		    searchSet = searchSet.substring(0, searchSet.search("&"));
		}
		if (searchSet === "union") document.getElementById("searchAdd").checked = true;
	    }

	    if (url.search("i=") > -1) {
		options = url.substring(url.search("i=")+2);
		if (options.search("&") > -1) {
		    options = options.substring(0, options.search("&"));
		}
		document.getElementById("checkMovies").checked = options[0] === "1";
		document.getElementById("checkSeries").checked = options[1] === "1";
		document.getElementById("checkBooks").checked = options[2] === "1";
		document.getElementById("checkTitle").checked = options[3] === "1";
		document.getElementById("checkDate").checked = options[4] === "1";
		document.getElementById("checkRating").checked = options[5] === "1";
		document.getElementById("checkInfo").checked = options[6] === "1";
		document.getElementById("checkActors").checked = options[7] === "1";
		document.getElementById("checkTags").checked = options[8] === "1";
	    }

	    if (url.search("b=") > -1) {
		order = url.substring(url.search("b=")+2);
		if (order.search("&") > -1) {
		    order = order.substring(0, order.search("&"));
		}
		document.getElementById("sortInvert").checked = order[0] !== "0";
		document.getElementById("radioDateFirst").checked = order[1] === "0";
		document.getElementById("radioDateLast").checked = order[1] === "1";
		document.getElementById("radioRating").checked = order[1] === "2";
		document.getElementById("radioTitle").checked = order[1] === "3";
		document.getElementById("radioCount").checked = order[1] === "4";
		document.getElementById("radioYear").checked = order[1] === "5";
		document.getElementById("radioTyp").checked = order[1] === "6";
	    }

	    if (url.search("l=") > -1) {
		lang = url.substring(url.search("l=")+2);
		if (lang.search("&") > -1) {
		    lang = lang.substring(0, lang.search("&"));
		}
		document.getElementById("radioEnglish").checked = lang === "eng";
	    }
	}

	document.addEventListener("wheel", loadmore);

	search(); /* start displaying */
}

/* wait some time to finish typing a search query before running search function */
function typing() {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(search, typingWaitTime);
}

function loadmore() {
    if (document.getElementsByClassName("loadMoreTitle").length > 0) {
        let bottom = document.body.getClientRects()[0].height;
        let load = document.getElementsByClassName("loadMoreTitle")[0].getClientRects()[0].y
        if (bottom-load > 0) {
            maxCovers += maxCoversInc;
            covers();
        }
    }
}

/* clear main-frame and add media entries */
function display() {
    document.getElementsByTagName("main-frame")[0].scrollIntoView();
    let select = document.getElementById("selectMore");
    let whatShouldBeSelected = "more";
    if (screen == "stats") {
        whatShouldBeSelected = "stats";
        graphs();
    } else if (screen == "recs") {
        whatShouldBeSelected = "recs";
        recommend();
    } else if (screen == "comp") {
        whatShouldBeSelected = "comp";
        compareScreen();
    } else {
        screen = "covers";
        covers();
    }
    if (select.value != whatShouldBeSelected) {
        let options = select.getElementsByTagName("option");
        for (let opt of options)
            if (opt.value == whatShouldBeSelected) opt.selected = true;
    }
    let result = document.getElementById("resultCount");
    result.innerHTML = displayable.length;
    result.innerHTML += displayable.length == 1 ? " result" : " results";
    result.innerHTML += " | ";
    result.innerHTML += avrRating() + " ★";
}

function avrRating() {
    let sum = 0;
    let count = 0;
    for (let entry of displayable) {
        if (entry[idRating] === 0) continue;
        sum += entry[idRating];
        count++;
    }
    if (count == 0) return "-";
    return (sum/count).toFixed(2);
}

function covers() {
    clear();
    for (let index in displayable) {
        if (index < maxCovers || !restrictLoading) {
            addEntry(displayable[index]);
        } else {
            addLoadMore();
            break;
        }
    }
}

/* assemble html element for "load more" button */
function addLoadMore() {
    /* create sub elements */
    let frame = document.getElementsByTagName("main-frame")[0];
    let entry = document.createElement("div");
    let title = document.createElement("div");
    let loading = document.createElement("div");
    let one = document.createElement("div");
    let two = document.createElement("div");
    let three = document.createElement("div");
    
    /* add standard classes */
    entry.classList.add("entry");
    title.classList.add("loadMoreTitle");
    loading.classList.add("loadMoreLoading");
    one.classList.add("loadMoreLoadingOne");
    two.classList.add("loadMoreLoadingTwo");
    three.classList.add("loadMoreLoadingThree");
    
    title.innerHTML = "loading more...";
    loading.appendChild(one);
    loading.appendChild(two);
    loading.appendChild(three);
    
    /* add standard classes */
    entry.appendChild(title);
    entry.appendChild(loading);
    frame.appendChild(entry);
    
    entry.addEventListener("click", loadmore);
}

/* remove everything from main-frame */
function clear() {
    document.getElementsByTagName("main-frame")[0].innerHTML = "";
}

/* assemble html element for one media entry */
function addEntry(data) {
    /* create sub elements */
    let frame = document.getElementsByTagName("main-frame")[0];
    let entry = document.createElement("div");
    let cover = document.createElement("div");
    let image = document.createElement("img");
    let titleFrame = document.createElement("div");
    let title = document.createElement("div");
    let subtitle = document.createElement("div");
    let secondTitle = document.createElement("div");
    let creator = document.createElement("div");
    let info = document.createElement("div");
    let year = document.createElement("div");
    let date = document.createElement("div");
    let dateTable = document.createElement("table");
    let rating = document.createElement("a");
    let typeBubble = document.createElement("div");
    let bubbleIcon = document.createElement("img");
    let moreInfo = document.createElement("div");
    let moreInfoIcon = document.createElement("div");
    let infoActors = document.createElement("div");
    let infoGenre = document.createElement("div");
    let infoTags = document.createElement("div");
    let infoLang = document.createElement("div");
    let infoWatchedWith = document.createElement("div");
    let foundIn = document.createElement("div");
    
    /* add standard classes */
    entry.classList.add("entry");
    cover.classList.add("cover");
    image.classList.add("coverImage");
    for (let index in data[idTag]) {
        if (data[idTag][index] == "dropped") {
            image.classList.add("dropped");
            break;
        }
    }
    titleFrame.classList.add("titleFrame");
    title.classList.add("title");
    subtitle.classList.add("subtitle");
    secondTitle.classList.add("infoTitle");
    creator.classList.add("creator");
    info.classList.add("info");
    year.classList.add("year");
    date.classList.add("date");
    rating.classList.add("rating");
    typeBubble.classList.add("typeBubble");
    bubbleIcon.classList.add("bubbleIcon");
    moreInfo.classList.add("moreInfo");
    moreInfoIcon.classList.add("moreInfoIcon");
    infoActors.classList.add("infoItem");
    infoGenre.classList.add("infoItem");
    infoTags.classList.add("infoItem");
    infoLang.classList.add("infoItem");
    infoWatchedWith.classList.add("infoItem");
    foundIn.classList.add("foundIn");
    
    /* add type bubble */
    switch (data[idType]) {
        case "film":
            bubbleIcon.src = iconFilm;
            bubbleIcon.setAttribute("where", "null,true,false,false,null,null,null,null,null,null");
            break;
        case "short":
            bubbleIcon.src = iconShort;
            bubbleIcon.setAttribute("where", "null,true,false,false,null,null,null,null,null,null");
            break;
        case "series":
            bubbleIcon.src = iconSeries;
            bubbleIcon.setAttribute("where", "null,false,true,false,null,null,null,null,null,null");
            break;
        case "book":
            bubbleIcon.src = iconBook;
            bubbleIcon.setAttribute("where", "null,false,false,true,null,null,null,null,null,null");
            break;
        case "audiobook":
            bubbleIcon.src = iconAudiobook;
            bubbleIcon.setAttribute("where", "null,false,false,true,null,null,null,null,null,null");
            break;
    }
    bubbleIcon.addEventListener("click", function(){
        searchThis(this);
    });
    typeBubble.appendChild(bubbleIcon);
    typeBubble.title = data[idType];
    
    /* add stars */
    if (data[idRating] > 0) {
        for (let a = data[idRating]; a > 0; a -= 2) {
            if (a >= 2) {
                let star = document.createElement("img");
                star.classList.add("star");
                star.src = iconStar;
                rating.appendChild(star);
            } else if (a == 1) {
                let half = document.createElement("img");
                half.classList.add("star");
                half.src = iconHalfStar;
                rating.appendChild(half);
            }
        }
    } else {
        rating.innerHTML = "unrated";
    }
    rating.setAttribute("where", "null,null,null,null,false,false,true,false,false,false");
    rating.setAttribute("search", data[idRating]);
    rating.addEventListener("click", function(){
        searchThis(this);
    }); 
    
    /* add displayed info */
    for (let index in data[idDate]) {
        date.innerHTML += formDate(data[idDate][index]);
        if (index < data[idDate].length-1) date.innerHTML += "<br>";
    }
    if (typeof(data[idYear]) == "object") {
        year.innerHTML = data[idYear][0] + " - " + data[idYear][1];
        let years = "";
        for (let a = data[idYear][0]*1; a <= data[idYear][1]*1; a++) {
            years += a+"";
            if (a < data[idYear][1]*1) years += ",";
        }
        year.setAttribute("search", years);
    } else if (data[idYear] != null) {
        year.innerHTML = data[idYear];
        year.setAttribute("search", data[idYear]);
    }
    year.setAttribute("where", "false,null,null,null,false,false,false,true,false,false");
    year.addEventListener("click", function(){
        searchThis(this);
    });
    if (german && data[idTitle].length > 1) {
        title.innerHTML = data[idTitle][1];
        secondTitle.innerHTML = data[idTitle][1];
        if (data[idTitle][0] != data[idTitle][1]) subtitle.innerHTML = data[idTitle][0];
    } else {
        title.innerHTML = data[idTitle][0];
        secondTitle.innerHTML = data[idTitle][0];
        if (data[idTitle].length > 1 && data[idTitle][0] != data[idTitle][1]) subtitle.innerHTML = data[idTitle][1];
    }
    
    /* add info bubble and its content */
    moreInfoIcon.innerHTML = "i";
    moreInfo.appendChild(moreInfoIcon);
    
    for (let categoryIndex = 0; categoryIndex < 5; categoryIndex++) {
        let id;
        let heading;
        let div;
        let attr;
        switch (categoryIndex) {
            case 0: 
                id = idActor; 
                heading = "<a>actors</a>";
                div = infoActors;
                attr = "false,false,false,false,true,false";
                break;
            case 1: 
                id = idGenre; 
                heading = "<a>genre</a>";
                div = infoGenre;
                attr = "false,false,false,true,false,false";
                break;
            case 2: 
                id = idTag; 
                heading = "<a>tags</a>";
                div = infoTags;
                attr = "false,false,false,false,false,true";
                break;
            case 3: 
                id = idLang; 
                heading = "<a>languages</a>";
                div = infoLang;
                attr = "false,false,false,false,false,true";
                break;
            case 4: 
                id = idWatchedWith; 
                heading = "<a>watched with</a>";
                div = infoWatchedWith;
                attr = "false,false,false,false,false,true";
                break;
        }
        if (data[id].length > 0) {
            div.innerHTML = heading;
            let searchString = "";
            for (let itemIndex in data[id]) {
                let item = document.createElement("div");
                item.classList.add("infoSubitem");
                item.innerHTML = data[id][itemIndex];
                item.setAttribute("where", "null,null,null,null,"+attr);
                item.addEventListener("click", function(){
                    searchThis(this);
                }); 
                if (data[id][itemIndex] != "") div.appendChild(item);
                searchString += "\""+data[id][itemIndex]+"\"";
                if (itemIndex < data[id].length-1) searchString += ",";
            }
            div.children[0].setAttribute("where", "false,null,null,null,"+attr);
            div.children[0].setAttribute("search", searchString);
            div.children[0].addEventListener("click", function() {
                searchThis(this);
            });
            moreInfo.appendChild(div);
        }
    }
    
    if (data[idResults]) {
        let maxShow = 2;
        for (let a = 0; a < data[idResults].length && a < maxShow; a++) {
            foundIn.innerHTML += data[idResults][a];
            if (a <= data[idResults].length-1 && a < maxShow) foundIn.innerHTML += "<br>";
            if (a < data[idResults].length-1 && a == maxShow-1) foundIn.innerHTML += "...";
        }
    }
    
    /* put all elements together as one */
    if (foundIn.innerHTML.length > 0) titleFrame.appendChild(foundIn);
    titleFrame.appendChild(title);
    info.appendChild(secondTitle);
    info.appendChild(subtitle);
    creator.innerHTML = typeof(data[idCreator]) == "object" ? data[idCreator][0] || "": "";
    if (data[idCreator].length > 1) creator.innerHTML += ", ...";
    creator.setAttribute("where", "false,null,null,null,false,false,false,true,false,false");
    let creatorString = "";
    for (let a = 0; a < data[idCreator].length; a++) {
        creatorString += "\""+data[idCreator][a]+"\"";
        if (a < data[idCreator].length-1) creatorString += ",";
    }
    creator.setAttribute("search", creatorString);
    creator.addEventListener("click", function(){
        searchThis(this);
    });
    info.appendChild(creator);
    info.appendChild(year);
    info.appendChild(rating);
    info.appendChild(date);
    image.src = data[idImage];
    cover.appendChild(image);
    entry.appendChild(cover);
    entry.appendChild(typeBubble);
    entry.appendChild(moreInfo);
    entry.appendChild(titleFrame);
    entry.appendChild(info);
    
    /* add entry to main-frame */
    frame.appendChild(entry);
}

function monthname(value) {
    if (isNaN(value)) {
        value = value.toLowerCase();
        switch (value) {
            case "jan": return "01";
            case "feb": return "02";
            case "mar": return "03";
            case "apr": return "04";
            case "may": return "05";
            case "jun": return "06";
            case "jul": return "07";
            case "aug": return "08";
            case "sep": return "09";
            case "oct": return "10";
            case "nov": return "11";
            case "dec": return "12";
        }
    } else {
        switch (value) {
            case 1: return "Jan";
            case 2: return "Feb";
            case 3: return "Mar";
            case 4: return "Apr";
            case 5: return "May";
            case 6: return "Jun";
            case 7: return "Jul";
            case 8: return "Aug";
            case 9: return "Sep";
            case 10: return "Oct";
            case 11: return "Nov";
            case 12: return "Dec";
        }
    }
}

function formDate(dateString) {
    if (dateString == null) return "";
    if (typeof(dateString) == "string" || (typeof(dateString) == "object" && dateString.length == 1)) {
        if (dateString.length == 0) return "";
        let date = new Date(dateString);
        let day = date.getDate();
        let month = (date.getMonth()+1);
        let year = date.getFullYear();
        
        if (day < 10) {
            day = "0" + day;
        }
        month = monthname(month);
        
        let string = "<div class='dateDiv'><div class='dateDiv' onmouseenter='hoverDate(this)' onmouseleave='unhoverDate(this)' onclick='searchThis(this)' search='"+day+" "+month+" "+year+"' where='null,null,null,null,false,true,false,false,false,false'>"+day+" </div><div class='dateDiv'><div class='dateDiv' onmouseenter='hoverDate(this)' onmouseleave='unhoverDate(this)' onclick='searchThis(this)' search='"+month+" "+year+"' where='null,null,null,null,false,true,false,false,false,false'>"+month+" </div><div class='dateDiv'><div class='dateDiv' onmouseenter='hoverDate(this)' onmouseleave='unhoverDate(this)' onclick='searchThis(this)' search='"+year+"' where='null,null,null,null,false,true,false,false,false,false'>"+year+"</div></div></div></div>";
        
        return string;
        //return day + " " + month + " " + year;
    } else if (typeof(dateString) == "object") {
        let season = false;
        let dayOne = isDate(dateString[0]) ? formDate(dateString[0]) : false;
        let dayTwo = false;
        let returnString = "";
        if (isDate(dateString[1]) || dateString[1].length == 0) {
            dayTwo = formDate(dateString[1]);
            if (dayTwo.length == 0) dayTwo = " ";
        } else {
            season = dateString[1];
        }
        if (dateString.length >= 3) season = dateString[2];
        
        if (season) returnString += season + ": ";
        if (dayOne) returnString += dayOne;
        if (dayTwo) returnString += " - " + dayTwo;
        return returnString;
    } else {
        return "";
    }
}

function hoverDate(el) {
    el.parentNode.classList.add("hoverDate");
}

function unhoverDate(el) {
    el.parentNode.classList.remove("hoverDate");
}

/* return a date string */
/*function formDate(dateString) {
    if (dateString == null) return "";
    if (typeof(dateString) == "string") {
        if (dateString.length == 0) return "";
        let date = new Date(dateString);
        let day = date.getDate();
        let month = (date.getMonth()+1);
        let year = date.getFullYear();
        
        if (day < 10) {
            day = "0" + day;
        }
        month = monthname(month);
        
        return day + " " + month + " " + year;
    } else if (typeof(dateString) == "object") {
        let season = false;
        let dayOne = isDate(dateString[0]) ? formDate(dateString[0]) : false;
        let dayTwo = false;
        let returnString = "";
        if (isDate(dateString[1]) || dateString[1].length == 0) {
            dayTwo = formDate(dateString[1]);
            if (dayTwo.length == 0) dayTwo = " ";
        } else {
            season = dateString[1];
        }
        if (dateString.length >= 3) season = dateString[2];
        
        if (season) returnString += season + ": ";
        if (dayOne) returnString += dayOne;
        if (dayTwo) returnString += " - " + dayTwo;
        return returnString;
    } else {
        return "";
    }
}*/

/* prepare variables from selection for sort function */
function sort() {
    let dir = document.getElementById("sortInvert").checked ? 1 : -1;
    let index = idType;
    let position = "first";
    if (document.getElementById("radioDateFirst").checked) {
        index = idDate;
    } else if (document.getElementById("radioDateLast").checked) {
        index = idDate;
        position = "last";
    } else if (document.getElementById("radioRating").checked) {
        index = idRating;
    } else if (document.getElementById("radioTitle").checked) {
        index = idTitle;
    } else if (document.getElementById("radioCount").checked) {
        index = idDate;
        position = "length";
    } else if (document.getElementById("radioYear").checked) {
        index = idYear;
    } else if (document.getElementById("radioTyp").checked) {
        index = idType;
    }
    
    sortBy(displayable, dir, index, position);
    display();
}

function sortBy(data, dir, index) {
    sortBy(data, dir, index, "first");
}

/* bubble sort elements by selection */
function sortBy(data, dir, index, position) {
    if (data.length > 0) {
        if (typeof(data[0][index]) == "object") {
            //sort subarray
            if (position == null) position = "first";
            for (let a in data) {
                for (let b = 0; b < data.length-1; b++) {
                    left = null;
                    right = null;
                    if (index == idTitle) {
                        //title
                        left = german && data[b][1].length > 1 ? data[b][1][1] : data[b][1][0];
                        right = german && data[b+1][1].length > 1 ? data[b+1][1][1] : data[b+1][1][0];
                    } else {
	                    switch (position) {
	                        case "first":
	                            left = data[b][index][0];
	                            right = data[b+1][index][0];
	                            break;
	                        case "second":
	                            left = data[b][index][1];
	                            right = data[b+1][index][1];
	                            break;
	                        case "last":
	                            left = data[b][index][data[b][index].length-1];
	                            right = data[b+1][index][data[b+1][index].length-1];
	                            break;
	                       case "length":
	                            left = data[b][index].length;
	                            right = data[b+1][index].length;
	                            break;
	                    }
                    }
                    if (typeof(left) == "object") left = index == idDate ? isDate(left[1]) ? left[1] : left [0] : left[0];
                    if (left != null && position != "length") left = left.toUpperCase();
                    if (typeof(right) == "object") right = index == idDate ? isDate(right[1]) ? right[1] : right[0] : right[0];
                    if (right != null && position != "length") right = right.toUpperCase();
                    if (dir == -1) {
	                    if (left > right) swap(data, b, b+1);
                    } else {
                        if (left < right) swap(data, b, b+1);
                    }
                }
            }
        } else {
            //sort number and string
            for (let a in data) {
                for (let b = 0; b < data.length-1; b++) {
                    left = data[b][index];
                    right = data[b+1][index];
                    if (dir == -1) {
	                    if (left > right) swap(data, b, b+1);
                    } else {
                        if (left < right) swap(data, b, b+1);
                    }
                }
            }
        }
    }
}

function quicksort(data, dir, index, position, start, end) {
    if (position == null) position = "first";
    if (start == null) start = 0;
    if (end == null) end = data.length-1;
    if (start < end) {
        let wasSorted = false;
        let center = Math.floor((start+end)/2);
        let pivot = getElementData(data, center, index, position);
        let left = start;
        let right = end;
        let leftData = getElementData(data, left, index, position);
        let rightData = getElementData(data, right, index, position);
        
        while (left <= right) {
            leftData = getElementData(data, left, index, position);
            while (leftData < pivot) {
                leftData = getElementData(data, left, index, position);
                left++;
            }
            rightData = getElementData(data, right, index, position);
            while (rightData >= pivot) {
                rightData = getElementData(data, right, index, position);
                right--;
            }
            if (left <= right) {
                swap(data, left, right);
                left++;
                right--;
                wasSorted = true;
            }
        }
        if (wasSorted) {
            if (start < right) quicksort(data, dir, index, position, start, right);
            if (left < end) quicksort(data, dir, index, position, left, end);
        }
    }
}

function getElementData(data, index1, index2, position) {
    /*let returnData = null;
    if (index2 == idTitle) {
        //title
        returnData = 
            german && data[index1][idTitle].length > 1 ? 
            data[index1][idTitle][1] : data[index1][idTitle][0];
    } else {
        if (typeof(data[index1][index2]) == "object") {
            switch (position) {
                case "first":
                    returnData = data[index1][index2][0];
                    break;
                case "second":
                    returnData = data[index1][index2][1];
                    break;
                case "last":
                    returnData = data[index1][index2][data[index1][index2].length-1];
                    break;
               case "length":
                    returnData = data[index1][index2].length;
                    break;
            }
        } else {
            returnData = data[index1][index2];
        }
    }
    if (typeof(returnData) == "object") returnData = index2 == idDate ? isDate(returnData[1]) ? returnData[1] : returnData[0] : returnData[0];
	if (returnData != null && position != "length") returnData = returnData.toUpperCase();*/
	return data[index1];
}

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

/* sort strings by number of occurrence */
function countSortStrings(data) {
    let newData = [];
    for (let index in data) {
        let found = search2D(newData, data[index]);
        if (found == -1) {
            newData.push([data[index], 1]);
        } else {
            newData[found][1] += 1;
        }
    }
    sortBy(newData, 1, 1);
    return newData;
}

/* sort arrays by number of sub-data occurrence */
function countSortElements(data, index) {
    let newData = [];
    for (let a in data) {
        if (!!index || index == idType) {
            if (typeof(data[a][index]) == 'object') {
                for (let b in data[a][index]) {
                    let found = search2D(newData, data[a][index][b]);
                    if (found == -1) {
                        newData.push([data[a][index][b], 1]);
                    } else {
                        newData[found][1] += 1;
                    }
                }
            } else {
                let found = search2D(newData, data[a][index]);
                if (found == -1) {
                    newData.push([data[a][index], 1]);
                } else {
                    newData[found][1] += 1;
                }
            }
        } else {
            let found = search2D(newData, data[a]);
            if (found == -1) {
                newData.push([data[a], 1]);
            } else {
                newData[found][1] += 1;
            }
        }
    }
    sortBy(newData, 1, 1);
    return newData;
}

/* search a term inside a 2d-array */
function search2D(data, term) {
    for (let a in data) 
        for (let b in data[a]) 
            if (data[a][b] == term) return a;
    return -1;
}

/* remove spaces from beginning and end of a string */
function removeSpaces(string) {
    let one = "";
    let two = "";
    for (let a = string.length-1; a >= 0; a--) {
        if (one.length != 0 || string[a] != " ") one += string[a];
    }
    for (let a = one.length-1; a >= 0; a--) {
        if (two.length != 0 || one[a] != " ") two += one[a];
    }
    return two;
}

function search() {
    searchSeperate();
    sort();
}

/* new search function */
function searchSeperate() {
    maxCovers = maxCoversInit;
    german = document.getElementById("radioGerman").checked;
    let dbCopy = [...database];
    displayable = [];
    publicSuggestions = [];
    generalSuggestions = [];
    
    let query = document.getElementById("searchBox").value;
    let word = "";
    let termsAll = [];
    let termsM = [];
    let termsP = [];
    let selectedWord = "";
    if (query.length == 0) {
        for (let entry of dbCopy)
            if (searchEntry(entry, "")) {
                entry[idResults] = [];
                displayable.push(entry);
            }
    } else {
        query += ",";
        for (let letterIndex in query) {
            if (query[letterIndex] == ",") {
                word = removeSpaces(word);
                if (word != "") termsAll.push(word);
                if (letterIndex >= document.getElementById("searchBox").selectionStart && selectedWord == "") {
                    selectedWord = word;
                }
                word = "";
            } else {
                word += query[letterIndex];
            }
        }
        for (let termIndex in termsAll) {
            if (termsAll[termIndex][0] == "-") {
                termsM.push(termsAll[termIndex].slice(1));
            } else {
                termsP.push(termsAll[termIndex]);
            }
        }
        
        //suche nach positiven begriffen
        let output = [];
        let didNotFit = [];
        if (termsP.length > 0) {
            for (let a in termsP) {
                term = termsP[a];
                
                if (isDate(term) || isDate("01 " + term)) searchedDate = term;
                
                for (let entry of dbCopy) {
                    let result = searchEntry(entry, term);
                    if (result == false) {
                        didNotFit.push(entry);
                    } else {
                        /*if (!entry[idResults])*/ entry[idResults] = [];
                        if (term[0] != "\"") 
                            entry[idResults].push("\"" + term.toLowerCase() + "\"" + result);
                        else
                            entry[idResults].push(term.toLowerCase() + result);
                        output.push(entry);
                    }
                }
                if (document.getElementById("searchAdd").checked) {
                    dbCopy = [...didNotFit];
                    didNotFit = [];
                } else if (a != termsP.length-1) {
                    dbCopy = [...output];
                    output = [];
                }
            }
        } else {
            output = dbCopy;
        }
        //suche nach negativen begriffen
        if (termsM.length > 0) {
            dbCopy = [...output];
            output = [];
            for (let a in termsM) {
                term = termsM[a];
                for (let entry of dbCopy) {
                    let result = searchEntry(entry, term);
                    if (result != false) {
                        didNotFit.push(entry);
                    } else {
                        output.push(entry);
                    }
                }
                if (a != termsM.length-1) {
                    dbCopy = [...output];
                    output = [];
                }
            }
        }
        displayable = output;
    }
    
    if (screen != "recs") {
        displaySuggestions();
    }
}

function searchEntry(entry, term) {
    let returnString = "";
    let generalSuggestionsTemp = [];
    term = term.toUpperCase();
    
    let exact = false;
    if (term[0] == "\"" && term[term.length-1] == "\"") {
        exact = true;
        term = term.slice(1, term.length-1);
    }
    if (!publicSuggestions[term]) publicSuggestions[term] = [];
    
    //filter type
    if (!document.getElementById("checkMovies").checked)
        if (entry[idType] == "film" || entry[idType] == "short") 
            return false;
    if (!document.getElementById("checkBooks").checked)
        if (entry[idType] == "book" || entry[idType] == "audiobook") 
            return false;
    if (!document.getElementById("checkSeries").checked)
        if (entry[idType] == "series")
            return false;
            
    if (term != "") {
        //search type
        if (entry[idType].toUpperCase() == term)
            if (returnString.length == 0) returnString = " in type";
            
        //search title
        if (document.getElementById("checkTitle").checked) {
            let titles = entry[idTitle];
            for (let a = 0; a < titles.length; a++) {
                title = titles[a].toUpperCase();
                generalSuggestionsTemp.push(title);
                let found = exact ? title == term ? 0 : -1 : title.search(term);
                if (found != -1) {
                    if (returnString.length == 0) returnString = " in title";
                    publicSuggestions[term].push(title);
                }
            }
        }
        
        //search date
        if (document.getElementById("checkDate").checked) {
            if (term.search("-") >= 0) {
                //search time frame
                if (dateframeFits(entry[idDate], term.split("-")[0], term.split("-")[1])) 
                    if (returnString.length == 0) returnString = " in date";
            } else if (term.length == 4 && isDate(term)) {
                //YYYY
                if (exact) {
                    for (let watch of entry[idDate]) {
                        if (typeof(watch) == "object") {
                            for (let date of watch) {
                                if (term == date.slice(0,4))
                                    if (returnString.length == 0) returnString = " in date";
                            }
                        } else if (typeof(watch) == "string") {
                            if (term == watch.slice(0,4)) 
                                if (returnString.length == 0) returnString = " in date";
                        }
                    }
                } else if (dateframeFits(entry[idDate], term)) 
                    if (returnString.length == 0) returnString = " in date";
            } else if (term.length == 8) {
                //MMM YYYY
                let searchMonth = term.slice(0, 3).toLowerCase();
                let searchYear = term.slice(4);
                if (isNaN(searchMonth) && !isNaN(searchYear)) {
                    let monthNumber = monthname(searchMonth);
                    let searchDate = searchYear + " " + monthNumber;
                    
                    if (exact) {
                        for (let watch of entry[idDate]) {
                            if (typeof(watch) == "object") {
                                for (let date of watch) {
                                    if (searchDate == date.slice(0,7))
                                        if (returnString.length == 0) returnString = " in date";
                                }
                            } else if (typeof(watch) == "string") {
                                if (searchDate == watch.slice(0,7)) 
                                    if (returnString.length == 0) returnString = " in date";
                            }
                        }
                    } else if (dateframeFits(entry[idDate], searchDate)) 
                        if (returnString.length == 0) returnString = " in date";
                }
            } else if (term.length == 11) {
                //DD MMM YYYY
                let searchDay = term.slice(0, 2);
                let searchMonth = term.slice(3, 6).toLowerCase();
                let searchYear = term.slice(7);
                if (isNaN(searchMonth) && !isNaN(searchYear)) {
                    let monthNumber = monthname(searchMonth);
                    let searchDate = searchYear + " " + monthNumber + " " + searchDay;
                    if (exact) {
                        for (let watch of entry[idDate]) {
                            if (typeof(watch) == "object") {
                                for (let date of watch) {
                                    if (searchDate == date)
                                        if (returnString.length == 0) returnString = " in date";
                                }
                            } else if (typeof(watch) == "string") {
                                if (searchDate == watch) 
                                    if (returnString.length == 0) returnString = " in date";
                            }
                        }
                    } else if (dateframeFits(entry[idDate], searchDate)) 
                        if (returnString.length == 0) returnString = " in date";
                }
            }
            //possible terms:
            //full year (2017)
            //full date (20 Jul 2019)
            //TODO
            //month as word (april / mai)
            //DD MMM
            //DD
            //MMM
            //YYYY-YYYY
            //MMM YYYY-MMM YYYY
        }
        
        //search rating
        if (document.getElementById("checkRating").checked) {
            if (!isNaN(term)) 
                if (term == entry[idRating]) {
                    if (returnString.length == 0) returnString = " in rating";
                }
        }
        
        //search info
        // pub year 2, genre 6, creator 9
        if (document.getElementById("checkInfo").checked) {
            //year
            let year = entry[idYear];
            if (typeof(year) == "object") {
                if (term >= year[0] && year[1] >= term) {
                    if (returnString.length == 0) returnString = " in year";
                }
            } else {
                if (year == term) {
                    if (returnString.length == 0) returnString = " in year";
                }
            }
            
            //genre
            let genres = entry[idGenre];
            for (let a in genres) {
                let genre = genres[a].toUpperCase();
                generalSuggestionsTemp.push(genre);
                let found = genre.search(term);
                if (found != -1) {
                    if (returnString.length == 0) returnString = " in genres"
                    publicSuggestions[term].push(genre);
                }
            }
            
            //creator
            let creators = entry[idCreator];
            for (let a in creators) {
                let creator = creators[a].toUpperCase();
                generalSuggestionsTemp.push(creator);
                let found = exact ? creator == term ? 0 : -1 : creator.search(term);
                if (found != -1) {
                    if (returnString.length == 0) returnString = " in creators";
                    publicSuggestions[term].push(creator);
                }
            }
        }
        
        //search actors
        if (document.getElementById("checkActors").checked) {
            let actors = entry[idActor];
            for (let a in actors) {
                let actor = actors[a].toUpperCase();
                generalSuggestionsTemp.push(actor);
                let found = exact ? actor == term ? 0 : -1 : actor.search(term);
                if (found != -1) {
                    if (returnString.length == 0) returnString = " in actors";
                    publicSuggestions[term].push(actor);
                }
            }
        }
        
        //search tags
        //lang 5, watched with 7, tags 8
        if (document.getElementById("checkTags").checked) {
            //lang
            for (let lang of entry[idLang]) {
                if (lang.toUpperCase() == term) {
                    if (returnString.length == 0) returnString = " in languages";
                }
            }
            
            //watched with
            for (let person of entry[idWatchedWith]) {
                if (person.toUpperCase() == term) {
                    if (returnString.length == 0) returnString = " in watched-with";
                }
            }
            
            //tags
            for (let tag of entry[idTag]) {
                tag = tag.toUpperCase();
                generalSuggestionsTemp.push(tag);
                let found = exact ? tag == term ? 0 : -1 : tag.search(term);
                if (found >= 0) {
                    if (returnString.length == 0) returnString = " in tags";
                    publicSuggestions[term].push(tag);
                }
            }
        }
        if (returnString.length > 0) {
            generalSuggestions = generalSuggestions.concat(generalSuggestionsTemp);
            return returnString;
        }
        return false;
    } else {
        //filter type
        if (document.getElementById("checkMovies").checked) {
            if (entry[idType] == "film" || entry[idType] == "short")
                return true;
        }
        if (document.getElementById("checkBooks").checked) {
            if (entry[idType] == "book" || entry[idType] == "audiobook")
                return true;
        }
        if (document.getElementById("checkSeries").checked) {
            if (entry[idType] == "series")
                return true;
        }
    }
    return false;
}

/* validates a string to be a date or not */
function isDate(string) {
    return (!isNaN(new Date(string).getFullYear()));
}

function displaySuggestions() {
    let query = document.getElementById("searchBox").value;
    let word = "";
    let selectedWord = "";
    if (query.length == 0) {
        displayTop();
    } else {
        query += ",";
        for (let letterIndex in query) {
            if (query[letterIndex] == ",") {
                word = removeSpaces(word);
                if (letterIndex >= document.getElementById("searchBox").selectionStart && selectedWord == "") {
                    selectedWord = word.toUpperCase();
                }
                word = "";
            } else {
                word += query[letterIndex];
            }
        }
    
        if (!!publicSuggestions[selectedWord]) {
            let suggestions = countSortElements(publicSuggestions[selectedWord]);
            let displayDiv = document.getElementById("suggestions");
            displayDiv.innerHTML = "";
            for (let a = 0; a < 10 && a < suggestions.length; a++) {
                let suggest = document.createElement("div");
                suggest.classList.add("topItem");
                suggest.innerHTML = suggestions[a][0].toLowerCase();
                suggest.title = suggestions[a][0];
                suggest.setAttribute("where", "null,null,null,null,null,null,null,null,null,null");
                suggest.addEventListener("click", function(){
                    searchSuggestion(this);
                }); 
                displayDiv.appendChild(suggest);
            }
        } else {
            let suggestions = countSortElements(generalSuggestions);
            let displayDiv = document.getElementById("suggestions");
            displayDiv.innerHTML = "";
            for (let a = 0; a < 10 && a < suggestions.length; a++) {
                let suggest = document.createElement("div");
                suggest.classList.add("topItem");
                suggest.innerHTML = suggestions[a][0].toLowerCase();
                suggest.title = suggestions[a][0];
                suggest.setAttribute("where", "null,null,null,null,null,null,null,null,null,null");
                suggest.addEventListener("click", function(){
                    searchSuggestion(this);
                }); 
                displayDiv.appendChild(suggest);
            }
        }
    }
}

/* add suggestion items to display-list */
/*function displaySuggestions(suggestions) {
    let displayDiv = document.getElementById("suggestions");
    displayDiv.innerHTML = "";
    for (let a = 0; a < 10 && a < suggestions.length; a++) {
        let suggest = document.createElement("div");
        suggest.classList.add("topItem");
        suggest.innerHTML = suggestions[a][0].toLowerCase();
        suggest.title = suggestions[a][0];
        suggest.setAttribute("where", "null,null,null,null,null,null,null,null,null,null");
        suggest.addEventListener("click", function(){
            searchThis(this);
        }); 
        displayDiv.appendChild(suggest);
    }
}*/

/* reset search selection */
function clearSearch() {
    searchedDate = "01 " + monthname(new Date().getMonth()+1) + " " + new Date().getFullYear();
    document.getElementById("searchBox").value = "";
    document.getElementById("searchSub").checked = true;
    document.getElementById("checkMovies").checked = true;
    document.getElementById("checkBooks").checked = true;
    document.getElementById("checkSeries").checked = true;
    document.getElementById("checkTitle").checked = true;
    document.getElementById("checkDate").checked = true;
    document.getElementById("checkRating").checked = true;
    document.getElementById("checkInfo").checked = true;
    document.getElementById("checkActors").checked = true;
    document.getElementById("checkTags").checked = true;
    search();
}

/* generate suggestions based on occurrence */
function displayTop() {
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    
    let watching = document.createElement("div");
    watching.classList.add("topItem");
    watching.innerHTML = "watching";
    watching.title = "watching";
    watching.setAttribute("where", "null,null,null,null,false,false,false,false,false,true");
    watching.addEventListener("click", function(){
        searchThis(this);
    }); 
    suggestions.appendChild(watching);
    
    topGenres();
    topActors();
    topAuthors();
}

function topGenres() {
    let genres = countSortElements(database, idGenre);
    let suggestions = document.getElementById("suggestions");
    for (let a = 0; a < limitTop; a++) {
        let genre = document.createElement("div");
        genre.classList.add("topItem");
        genre.innerHTML = genres[a][0].toLowerCase();
        genre.title = genres[a][0];
        genre.setAttribute("where", "null,null,null,null,false,false,false,true,false,false");
        genre.addEventListener("click", function(){
            searchThis(this);
        }); 
        suggestions.appendChild(genre);
    }
}

function topActors() {
    let actors = countSortElements(database, idActor);
    let suggestions = document.getElementById("suggestions");
    for (let a = 0; a < limitTop; a++) {
        let actor = document.createElement("div");
        actor.classList.add("topItem");
        actor.innerHTML = actors[a][0].toLowerCase();
        actor.title = actors[a][0];
        actor.setAttribute("where", "null,null,null,null,false,false,false,false,true,false");
        actor.addEventListener("click", function(){
            searchThis(this);
        }); 
        suggestions.appendChild(actor);
    }
}

function topAuthors() {
    let authors = countSortElements(database, idCreator);
    let suggestions = document.getElementById("suggestions");
    for (let a = 0; a < limitTop; a++) {
        let author = document.createElement("div");
        author.classList.add("topItem");
        author.innerHTML = authors[a][0].toLowerCase();
        author.title = authors[a][0];
        author.setAttribute("where", "null,null,null,null,false,false,false,true,false,false");
        author.addEventListener("click", function(){
            searchThis(this);
        }); 
        suggestions.appendChild(author);
    }
}

function searchSuggestion(el) {
    let query = document.getElementById("searchBox").value;
    let wordBegin = 0;
    let wordEnd = query.length;
    let cursor = document.getElementById("searchBox").selectionStart;
    if (query.length == 0) {
        document.getElementById("searchBox").value = el.innerHTML;
    } else {
        for (let down = cursor; down >= 0; down--) {
            if (query[down] == "," || down == 0) {
                if (query[down] == ",") down++;
                if (query[down] == "-") down++;
                wordBegin = down;
                break;
            }
        }
        for (let up = cursor; up <= query.length; up++) {
            if (query[up] == "," || up == query.length) {
                wordEnd = up;
                break;
            }
        }
        if (query[wordBegin] == "\"" && query[wordEnd-1] == "\"") {
            wordBegin++;
            wordEnd--;
        }
        let newQuery = query.slice(0, wordBegin);
        newQuery += el.innerHTML;
        newQuery += query.slice(wordEnd);
        document.getElementById("searchBox").value = newQuery;
        search();
    }
}

/* add clicked word as search */
function searchThis(element, where) {
    where = where || element.getAttribute("where").split(",") || [];
    for (let a in where) {
        switch (where[a]) {
            case "": where[a] = null; break;
            case "null": where[a] = null; break;
            case "true": where[a] = true; break;
            case "false": where[a] = false; break;
        }
    }
    document.getElementById("searchBox").value = element.getAttribute("search") || element.innerHTML;
    if (where[0]) {
        document.getElementById("searchSub").checked = true;
    } else if (where[0] == false) {
        document.getElementById("searchAdd").checked = true;
    }
    for (let a = 1; a <= 9; a++) {
        let box;
        switch (a) {
            case 1: box = document.getElementById("checkMovies"); break;
            case 2: box = document.getElementById("checkSeries"); break;
            case 3: box = document.getElementById("checkBooks"); break;
            case 4: box = document.getElementById("checkTitle"); break;
            case 5: box = document.getElementById("checkDate"); break;
            case 6: box = document.getElementById("checkRating"); break;
            case 7: box = document.getElementById("checkInfo"); break;
            case 8: box = document.getElementById("checkActors"); break;
            case 9: box = document.getElementById("checkTags"); break;
        }
        box.checked = 
            where[a] == true || where[a] == false ? 
            where[a] : box.checked;
    }
    search();
}

/*toggles between statics and normal view*/
function selectTrigger() {
    let selected = get("selectMore").selectedOptions[0].value;
    if (selected == "save") {
        selectSave();
    } else screen = selected
    if (screen == "covers") {
        let options = document.getElementById("selectMore").getElementsByTagName("option");
        for (let opt of options)
            if (opt.value == "more") opt.selected = true;
    }
    search();
}

function selectSave() {
    let url = "https://aki-108.github.io/media?";
    
    //save search terms
    let q = "q=" + get("searchBox").value;
    q = q.replaceAll(" ", "%20");
    q = q.replaceAll("\"", "%22");
    if (get("searchBox").value !== "") url += q + "&";
    //save screen
    let s = "s=" + screen;
    if (screen !== "covers") url += s + "&";
    //save union set / cut set
    if (get("searchAdd").checked) url += "set=union&";
    //save search in
    let options = "i=" + (get("checkMovies").checked === true ? "1" : "0");
    options += (get("checkSeries").checked === true ? "1" : "0");
    options += (get("checkBooks").checked === true ? "1" : "0");
    options += (get("checkTitle").checked === true ? "1" : "0");
    options += (get("checkDate").checked === true ? "1" : "0");
    options += (get("checkRating").checked === true ? "1" : "0");
    options += (get("checkInfo").checked === true ? "1" : "0");
    options += (get("checkActors").checked === true ? "1" : "0");
    options += (get("checkTags").checked === true ? "1" : "0");
    if (options !== "i=111111111") url += options + "&";
    //save order by
    let order = "b=" + (get("sortInvert").checked === true ? "1" : "0");
    let a = 0
    for (; a < 7; a++) {
        if (get("sortRadio").children[4+a*3].checked) break;
    }
    order += a;
    if (order !== "b=11") url += order + "&";
    //save language
    if (get("radioEnglish").checked) url += "l=eng&";
    url = url.slice(0, url.length-1);
    
    //url += "?" + q + "&" + s + "&" + searchSet + "&" + options + "&" + order + "&" + lang;
    window.open(url, "_self");
}

/* generate generic graphs */
function graphs() {
    screen = "stats";
    let data = displayable;
    clear();
    let mainframe = document.getElementsByTagName("main-frame")[0];
    //types per month
    //mainframe.appendChild(typePerMonth(data, 0));
    /*TODO */mainframe.appendChild(generateTimelineChart(data));
    //types per day
    mainframe.appendChild(typePerSingleMonth(data, searchedDate));
    //rating per month
    mainframe.appendChild(typePerMonth(data, 1));
    //type
    mainframe.appendChild(generateBarChart(data, idType, "types", 5, false));
    //year
    mainframe.appendChild(generateBarChart(data, idYear, "publishing years", 999, false));
    //rating
    mainframe.appendChild(generateBarChart(data, idRating, "ratings", 11, false));
    //lang
    mainframe.appendChild(generateBarChart(data, idLang, "languages", 10, true));
    //genre
    mainframe.appendChild(generateBarChart(data, idGenre, "genres", 10, true));
    //watched with
    mainframe.appendChild(generateBarChart(data, idWatchedWith, "watched with", 15, true));
    //tag
    mainframe.appendChild(generateBarChart(data, idTag, "tags", 11, true));
    //creator
    mainframe.appendChild(generateBarChart(data, idCreator, "creators", 11, true));
    //actor
    mainframe.appendChild(generateBarChart(data, idActor, "actors", 20, true));
}

function map(value, start1, stop1, start2, stop2) {
    let y = (value - start1) / stop1 + start1;
    let z = (stop2 - start2) * y + start2;
    return z;
}

function generateTimelineChart(data) {
    let frame = document.createElement("div");
    frame.classList.add("graphFrame");
    let heading = document.createElement("div");
    heading.innerHTML = "types per month";
    heading.classList.add("graphHeading");
    frame.appendChild(heading);
    let legend = document.createElement("div");
    legend.classList.add("graphLegend");
    for (let a = 0; a < 5; a++) {
        let element = document.createElement("div");
        element.classList.add("graphLegendElement");
        switch (a) {
            case 0:
                element.classList.add("graphFilm");
                element.innerHTML = "Movie";
                break;
            case 1:
                element.classList.add("graphShort");
                element.innerHTML = "Short";
                break;
            case 2:
                element.classList.add("graphSeries");
                element.innerHTML = "Series";
                break;
            case 3:
                element.classList.add("graphBook");
                element.innerHTML = "Book";
                break;
            case 4:
                element.classList.add("graphAudiobook");
                element.innerHTML = "Audiobook";
                break;
        }
        legend.appendChild(element);
    }
    frame.appendChild(legend);
    let grid = document.createElement("table");
	grid.style.borderSpacing = "3px";
	grid.style.lineHeight = "5px";
	for (let year = 2015; year <= new Date().getFullYear(); year++) {
		for (let month = 1; month <= 12; month++) {
			if (year == new Date().getFullYear() && month > new Date().getMonth()+1) break;
			entries = getEntriesFromTime(data, year + " " + (month < 10 ? "0" : "") + month);
			entries.sort(function(x, y) {
				let order = [];
				order["film"] = 3;
				order["short"] = 4;
				order["series"] = 0;
				order["book"] = 1;
				order["audiobook"] = 2;
				if (order[x[idType]] < order[y[idType]]) {
					return -1;
				}
				if (order[x[idType]] > order[y[idType]]) {
					return 1;
				}
				return 0;
			});
			
			let row = document.createElement("tr");
			
			let title = document.createElement("td");
			title.innerHTML = monthname(month) + " " + year;
			title.classList.add("graphTitle");
            title.setAttribute("where", "null,null,null,null,false,true,false,false,false,false");
            title.setAttribute("search", title.innerHTML);
            title.addEventListener("click", function(){
                searchThis(this);
            });
			row.appendChild(title);
			
			for (let entry of entries) {
				let start;
				let end;
				let watchNote = "";
				if (entry[idDate].length >= 1) {	//wenn mindestens ein datum eingetragen ist
					for (let date of entry[idDate]) {
						if (typeof(date) == "string") {	//wenn einzelnes datum ist, keine spanne
							if (new Date(date).getMonth() == (month-1)
								&& new Date(date).getFullYear() == year) {
									start = end = date;
									if (start == undefined) continue;
						            row.appendChild(createTimelineCell(entry, start, end, watchNote));
							}
						} else {	//wenn watchdate eine spanne ist
							if (new Date(date[0]).getMonth() == (month-1)
								&& new Date(date[0]).getFullYear() == year) {
									start = date[0];
									if (isDate(date[date.length-1])) {
										end = date[date.length-1];
									} else {
										end = date[date.length-2];
										watchNote = date[date.length-1];
									}
									if (start == undefined) continue;
						            row.appendChild(createTimelineCell(entry, start, end, watchNote));
							}
						}
					}
				}
			}
			grid.appendChild(row);
		}
	}
	frame.appendChild(grid);
	return frame;
}

function createTimelineCell(entry, start, end, watchNote) {
	if (isDate(start) && end == "") {
		if (entry[idTag][entry[idTag].length-1] == "watching") {
			end = new Date().getFullYear() + " " + new Date().getMonth() + " " + new Date().getDate();
		} else {
			end = start;
		}
	}
	let span = new Date(end).getMonth() - new Date(start).getMonth() + 1;
	span += (new Date(end).getFullYear() - new Date(start).getFullYear())*12;
	if (end == undefined) span = 1;
	
	let cell = document.createElement("td");
	cell.setAttribute("rowspan", span);
	cell.title = getTitle(entry);
	if (watchNote != "") cell.title += ": " + watchNote;
	if (entry[idType] == "book" || entry[idType] == "audiobook") cell.title += " - " + entry[idCreator];
	cell.style.width = "5px";
	switch (entry[idType]) {
		case "film": cell.classList.add("graphFilm"); break;
		case "short": cell.classList.add("graphShort"); break;
		case "series": cell.classList.add("graphSeries"); break;
		case "book": cell.classList.add("graphBook"); break;
		case "audiobook": cell.classList.add("graphAudiobook"); break;
	}
	return cell;
}

function getTitle(entry) {
	if (get("radioGerman").checked && entry[idTitle].length >= 2) return entry[idTitle][1];
	return entry[idTitle][0];
}

/* make html element of a graph */
function generateBarChart(data, index, title, limit, indipendent) {
    let heading = document.createElement("div");
    heading.innerHTML = title;
    heading.classList.add("graphHeading");
    let bars = countSortElements(data, index);
    if (bars.length > 0) {
        let maximum = bars[0][1];
        if (index == idRating) {
            let newBars = [["unrated",0],["1",0],["2",0],["3",0],["4",0],["5",0],["6",0],["7",0],["8",0],["9",0],["10",0]];
            for (let bar of bars) newBars[bar[0]][1] = bar[1];
            bars = newBars;
        }
        if (index == idYear) bars.sort();
        let frame = document.createElement("div");
        frame.classList.add("graphFrame");
        frame.appendChild(heading);
        let totalCount = data.length;
        if (limit > 0) bars = bars.slice(0, limit);
        let used = 0;
        for (let a in bars) {
            if (index == idYear && bars[a][0].length != 4) continue;
            let bar = document.createElement("div");
            bar.classList.add("graphBar");
            let percent = (bars[a][1]/totalCount*100).toFixed(1);
            used += bars[a][1];
            bar.style.width = map(bars[a][1], 0, maximum, 0, 100) + "%";
            if (percent < 10) percent = "0" + percent;
            bar.innerHTML = percent + "% - ";
            bar.innerHTML += index == 4 && bars[a][0] == "0" ? "unrated" : bars[a][0];
            bar.setAttribute("where", "null,null,null,null,null,null,null,null,null,null");
            bar.setAttribute("search", bars[a][0]);
            bar.addEventListener("click", function(){
                searchThis(this);
            }); 
            frame.appendChild(bar);
        }
        if (totalCount-used > 0 && !indipendent) {
            let bar = document.createElement("div");
            bar.classList.add("graphBar");
            let percent = ((totalCount-used)/totalCount*100).toFixed(1);
            bar.style.width = map(totalCount-used, 0, bars[0][1], 0, 100) + "%";
            if (percent < 10) percent = "0" + percent;
            bar.innerHTML = percent + " % - <i>other</i>";
            bar.style.border = "1px #0f0f0f solid";
            frame.appendChild(bar);
        }
        return frame;
    } else {
        return document.createElement("div");
    }
}

function getEntriesFromTime(data, date) {
    let returnArray = [];
    for (let a in data) {
        if (dateframeFits(data[a][idDate], date))
            returnArray.push(data[a]);
    }
    return returnArray;
}

/* 
checks if a date fits between any of the dates from an array

input dates: ["2020 10 15", ["2020 10 16", "2020 10 17", "S1"]] 
input date: "2020" || "2020 10" || "2020 10 15"
*/
function dateframeFits(dates, date1, date2) {
    if (date2 == undefined) {
        for (let a in dates) {
            if (isDate(dates[a])) {
                if (dates[a].slice(0, date1.length) == date1)
                    return true;
            } else {
                if (isDate(dates[a][0])) {
                    let first = dates[a][0].slice(0,date1.length);
                    if (isDate(dates[a][1])) {
                        let second = dates[a][1].slice(0,date1.length);
                        if (first <= date1 && date1 <= second)
                            return true;
                    } else {
                        if (first == date1)
                            return true;
                    }
                }
            }
        }
    } else {
        date1 = isDate(date1) ? new Date(date1) : new Date("01 "+date1);
        date2 = isDate(date2) ? new Date(date2) : new Date("01 "+date2);
        for (let a in dates) {
            if (isDate(dates[a])) {
                if (new Date(dates[a]) >= date1 && new Date(dates[a]) <= date2)
                    return true;
            } else {
                if (isDate(dates[a][0])) {
                    let first = dates[a][0].slice(0,date1.length);
                    first = isDate(first) ? new Date(first) : new Date("01 "+first);
                    if (isDate(dates[a][1])) {
                        let second = dates[a][1].slice(0,date1.length);
                        second = isDate(second) ? new Date(second) : new Date("01 "+second);
                        if ((first <= date1 && second >= date1 && second <= date2)
                        || (first <= date1 && second >= date2)
                        || (first >= date1 && first <= date2 && second >= date2)
                        || (first >= date1 && second <= date2))
                            return true;
                    } else {
                        if (first >= date1 && first <= date2)
                            return true;
                    }
                }
            }
        }
    }
    return false;
}

/* generate graph */
function typePerMonth(data, which) {
    // get the data
    let today = new Date();
    let datapoints = [];
    let maximum = 0;
    for (let loopYear = 2015; loopYear <= today.getFullYear(); loopYear++) {
        for (let loopMonth = 1; loopMonth <= 12; loopMonth++) {
            if (loopYear == today.getFullYear() && loopMonth > today.getMonth()+1) break;
            if (loopYear == 2015 && loopMonth < 7) continue;
            let month = loopMonth;
            if (month < 10) month = "0" + month;
            
            let results = getEntriesFromTime(data, loopYear + " " + month);
            let newData = [];
            newData.push(monthname(loopMonth) + " " + loopYear, 0, 0, 0, 0, 0, 0, 0);
            for (let a in results) {
                switch (results[a][idType]) {
                    case "film": 
                        newData[1]++;
                        break;
                    case "short":
                        newData[2]++;
                        break;
                    case "series":
                        newData[3]++;
                        break;
                    case "book":
                        newData[4]++;
                        break;
                    case "audiobook":
                        newData[5]++;
                        break;
                    default:
                        console.log("error 01: unknow type " + results[a][idType]);
                        break;
                }
                newData[6]++;
                newData[7] += results[a][idRating];
            }
            if (results.length > maximum) maximum = results.length;
            datapoints.push(newData);
        }
    }
    
    //create the graph
    if (which == 0) {
        let frame = document.createElement("div");
        frame.classList.add("graphFrame");
        var title = document.createElement("div");
        title.classList.add("graphHeading");
        title.innerHTML = "types per month";
        frame.appendChild(title);
        let legend = document.createElement("div");
        legend.classList.add("graphLegend");
        for (let a = 0; a < 5; a++) {
            let element = document.createElement("div");
            element.classList.add("graphLegendElement");
            switch (a) {
                case 0:
                    element.classList.add("graphFilm");
                    element.innerHTML = "Movie";
                    break;
                case 1:
                    element.classList.add("graphShort");
                    element.innerHTML = "Short";
                    break;
                case 2:
                    element.classList.add("graphSeries");
                    element.innerHTML = "Series";
                    break;
                case 3:
                    element.classList.add("graphBook");
                    element.innerHTML = "Book";
                    break;
                case 4:
                    element.classList.add("graphAudiobook");
                    element.innerHTML = "Audiobook";
                    break;
            }
            legend.appendChild(element);
        }
        frame.appendChild(legend);
        for (let a in datapoints) {
            let month = document.createElement("div");
            var title = document.createElement("div");
            title.innerHTML = datapoints[a][0];
            title.classList.add("graphTitle");
            title.setAttribute("where", "null,null,null,null,false,true,false,false,false,false");
            title.setAttribute("search", datapoints[a][0]);
            title.addEventListener("click", function(){
                searchThis(this);
            });
            month.appendChild(title);
            month.style.display = "block";
            month.style.width = "100%";
            month.style.height = "10px";
            for (let b = 1; b < 6; b++) {
                if (datapoints[a][b] == 0) continue;
                let bar = document.createElement("div");
                var title = "";
                switch (b) {
                    case 1: title = "Movie"; break;
                    case 2: title = "Short"; break;
                    case 3: title = "Series"; break;
                    case 4: title = "Book"; break;
                    case 5: title = "Audiobook"; break;
                }
                bar.title = title + ": " + datapoints[a][b] + " / " + datapoints[a][6];
                let widthTotal = map(datapoints[a][6], 0, maximum, 0, 87);
                let width = map(datapoints[a][b], 0, datapoints[a][6], 0, widthTotal);
                bar.style.width = width + "%";
                bar.classList.add("graphBar2");
                switch (b) {
                    case 1: bar.classList.add("graphFilm"); break;
                    case 2: bar.classList.add("graphShort"); break;
                    case 3: bar.classList.add("graphSeries"); break;
                    case 4: bar.classList.add("graphBook"); break;
                    case 5: bar.classList.add("graphAudiobook"); break;
                }
                month.appendChild(bar);
            }
            frame.appendChild(month);
        }
        return frame;
    } else if (which == 1) {
        
        let frame = document.createElement("div");
        frame.classList.add("graphFrame");
        var title = document.createElement("div");
        title.classList.add("graphHeading");
        title.innerHTML = "average rating per month";
        frame.appendChild(title);
        for (let a in datapoints) {
            let month = document.createElement("div");
            var title = document.createElement("div");
            title.innerHTML = datapoints[a][0];
            title.classList.add("graphTitle");
            title.setAttribute("where", "null,null,null,null,false,true,false,false,false,false");
            title.setAttribute("search", datapoints[a][0]);
            title.addEventListener("click", function(){
                searchThis(this);
            });
            month.appendChild(title);
            month.style.display = "block";
            month.style.width = "100%";
            month.style.height = "10px";
            let bar = document.createElement("div");
            let rating = datapoints[a][7] / datapoints[a][6];
            let width = map(rating, 0, 10, 0, 87);
            bar.style.width = width + "%";
            bar.title = rating.toFixed(1);
            bar.classList.add("graphBar2");
            bar.style.background = "#f0f0f0";
            month.appendChild(bar);
            frame.appendChild(month);
        }
        return frame;
    }
}

/* generate graph */
function typePerSingleMonth(data, searchDate) {
    // get the data
    let today = new Date();
    let datapoints = [];
    let maximum = 0;
    if (!isDate(searchDate)) searchDate = "01 " + searchDate;
    let month = new Date(searchDate).getMonth();
    let year = new Date(searchDate).getFullYear();
    for (let loopDate = new Date(year + " " + (month+1) + " 01"); 
         loopDate.getMonth() == month && loopDate.getTime() <= today.getTime(); 
         loopDate = new Date(loopDate.getTime() + 86400000)) {
             
             let tMonth = loopDate.getMonth()+1;
             let tDay = loopDate.getDate();
             let results = getEntriesFromTime(data, loopDate.getFullYear() + (tMonth < 10 ? " 0" : " ") + tMonth + (tDay < 10 ? " 0" : " ") + tDay);
             let newData = [(tDay < 10 ? "0" : "") + tDay + " " + monthname(tMonth) + " " + loopDate.getFullYear(), 0, 0, 0, 0, 0, results.length];
             for (let result of results) {
                switch (result[idType]) {
                    case "film": 
                        newData[1]++;
                        break;
                    case "short":
                        newData[2]++;
                        break;
                    case "series":
                        newData[3]++;
                        break;
                    case "book":
                        newData[4]++;
                        break;
                    case "audiobook":
                        newData[5]++;
                        break;
                }
             }
             if (results.length > maximum) maximum = results.length;
             datapoints.push(newData);
        
    }
    
    //create the graph
    let frame = document.createElement("div");
    frame.classList.add("graphFrame");
    var title = document.createElement("div");
    title.classList.add("graphHeading");
    title.innerHTML = "types per day";
    frame.appendChild(title);
    let legend = document.createElement("div");
    legend.classList.add("graphLegend");
    for (let a = 0; a < 5; a++) {
        let element = document.createElement("div");
        element.classList.add("graphLegendElement");
        switch (a) {
            case 0:
                element.classList.add("graphFilm");
                element.innerHTML = "Movie";
                break;
            case 1:
                element.classList.add("graphShort");
                element.innerHTML = "Short";
                break;
            case 2:
                element.classList.add("graphSeries");
                element.innerHTML = "Series";
                break;
            case 3:
                element.classList.add("graphBook");
                element.innerHTML = "Book";
                break;
            case 4:
                element.classList.add("graphAudiobook");
                element.innerHTML = "Audiobook";
                break;
        }
        legend.appendChild(element);
    }
    frame.appendChild(legend);
    for (let a in datapoints) {
        let month = document.createElement("div");
        var title = document.createElement("div");
        title.innerHTML = datapoints[a][0];
        title.classList.add("graphTitleDay");
        title.setAttribute("where", "null,null,null,null,false,true,false,false,false,false");
        title.setAttribute("search", datapoints[a][0]);
        title.addEventListener("click", function(){
            searchThis(this);
        });
        month.appendChild(title);
        month.style.display = "block";
        month.style.width = "100%";
        month.style.height = "10px";
        for (let b = 1; b < 6; b++) {
            if (datapoints[a][b] == 0) continue;
            let bar = document.createElement("div");
            var title = "";
            switch (b) {
                case 1: title = "Movie"; break;
                case 2: title = "Short"; break;
                case 3: title = "Series"; break;
                case 4: title = "Book"; break;
                case 5: title = "Audiobook"; break;
            }
            bar.title = title + ": " + datapoints[a][b] + " / " + datapoints[a][6];
            let widthTotal = map(datapoints[a][6], 0, maximum, 0, 84);
            let width = map(datapoints[a][b], 0, datapoints[a][6], 0, widthTotal);
            bar.style.width = width + "%";
            bar.classList.add("graphBar2");
            switch (b) {
                case 1: bar.classList.add("graphFilm"); break;
                case 2: bar.classList.add("graphShort"); break;
                case 3: bar.classList.add("graphSeries"); break;
                case 4: bar.classList.add("graphBook"); break;
                case 5: bar.classList.add("graphAudiobook"); break;
            }
            month.appendChild(bar);
        }
        frame.appendChild(month);
    }
    return frame;
}

function recommend() {
    recommendSorting();
    
    //display settings
    let settingsDiv = document.getElementById("suggestions");
    settingsDiv.innerHTML = "";
    for (let a = 0; a < 4; a++) {
        let name = "";
        let min = 0;
        let max = 0;
        let steps = 0;
        let value = 0;
        let id = "";
        switch (a) {
            case 0: 
                name = "rating importance"; 
                min = 0;
                max = 5;
                steps = 0.5;
                value = recFactorRating;
                id = "recFactorRating";
                break;
            case 1: 
                name = "time since last watch importance"; 
                min = 0;
                max = 0.1;
                steps = 0.01;
                value = recFactorAge;
                id = "recFactorAge";
                break;
            case 2: 
                name = "times rewatched importance"; 
                min = 0;
                max = 5;
                steps = 0.5;
                value = recFactorCount;
                id = "recFactorCount";
                break;
            case 3: 
                name = "minimal rating"; 
                min = 0;
                max = 10;
                steps = 1;
                value = recMinRating;
                id = "recMinRating";
                break;
        }
        let slider = document.createElement("input");
        slider.type = "range";
        slider.min = min;
        slider.max = max;
        slider.step = steps;
        slider.value = value;
        slider.id = id;
        slider.title = name + ": " + value;
        slider.classList.add("recommendSlider");
        slider.addEventListener("change", function(){
            search(); 
            recommendChangeSettings(this);
        });
        settingsDiv.appendChild(slider);
    }
}

function recommendChangeSettings(el) {
    screen = "recs";
    switch (el.id) {
        case "recFactorRating": recFactorRating = el.value; break;
        case "recFactorAge": recFactorAge = el.value; break;
        case "recFactorCount": recFactorCount = el.value; break;
        case "recMinRating": recMinRating = el.value; break;
    }
    display();
}

function recommendSorting() {
    let scoresList = [];
    for (let entry of displayable) {
        if (entry[idRating] < recMinRating) continue;
        let dropped = false;
        for (let tags of entry[idTag]) {
            if (tags == "dropped") {
                dropped = true;
                break;
            }
        }
        if (dropped) continue;
        let score = entry[idRating] * recFactorRating;
        let lastWatch = entry[idDate][entry[idDate].length-1];
        if (typeof(lastWatch) == "object") lastWatch = isDate(lastWatch[lastWatch.length-2]) ? lastWatch[lastWatch.length-2] : lastWatch[0];
        if (isDate(lastWatch)) score += daysSince(new Date(lastWatch)) * recFactorAge;
        score += entry[idDate].length * recFactorCount;
        scoresList.push([score, entry]);
    }
    scoresList.sort(function(a, b) {
        return b[0] - a[0];
    });
    displayable = [];
    for (let a in scoresList) {
        displayable.push(scoresList[a][1]);
    }
    covers();
}

function daysSince(date) {
    if (typeof(date) == "object" && isDate(date)) {
        let today = new Date();
        let dif = today-date;
        dif /= 1000*60*60*24;
        dif = Math.floor(dif);
        return dif;
    } else return -1;
}

function allButThis(el, group) {
    if (group == "type") {
        let typeEls = [
            document.getElementById("checkMovies"),
            document.getElementById("checkSeries"),
            document.getElementById("checkBooks")];
        for (let obj of typeEls) if (obj != el) obj.checked = !obj.checked;
    } else if (group == "cat") {
        let catEls = [
            document.getElementById("checkTitle"),
            document.getElementById("checkDate"),
            document.getElementById("checkRating"),
            document.getElementById("checkInfo"),
            document.getElementById("checkActors"),
            document.getElementById("checkTags")];
        for (let obj of catEls) if (obj != el) obj.checked = !obj.checked;
    }
    search();
}

function checkAll() {
    let catEls = [
        document.getElementById("checkTitle"),
        document.getElementById("checkDate"),
        document.getElementById("checkRating"),
        document.getElementById("checkInfo"),
        document.getElementById("checkActors"),
        document.getElementById("checkTags")];
    for (let obj of catEls) obj.checked = true;
    search();
}

function compareScreen() {
    let mainframe = document.getElementsByTagName("main-frame")[0];
    mainframe.innerHTML = "";
    for (let a = 0; a < 8; a++) {
        let frame = document.createElement("div");
        frame.classList.add("compareFrame");
        
        let select = document.createElement("select");
        select.classList.add("compareSelect");
        for (let a = 0; a < 9; a++) {
            let opt = document.createElement("option");
            switch (a) {
                case 0: opt.innerHTML = "actors"; opt.value = idActor; break;
                case 1: opt.innerHTML = "creators"; opt.value = idCreator; break;
                case 2: opt.innerHTML = "genres"; opt.value = idGenre; break;
                case 3: opt.innerHTML = "languages"; opt.value = idLang; break;
                case 4: opt.innerHTML = "tags"; opt.value = idTag; break;
                case 5: opt.innerHTML = "titles"; opt.value = idTitle; break;
                case 6: opt.innerHTML = "watch dates"; opt.value = idDate; break;
                case 7: opt.innerHTML = "watched with"; opt.value = idWatchedWith; break;
                case 8: opt.innerHTML = "years"; opt.value = idYear; break;
            }
            select.appendChild(opt);
        }
        frame.appendChild(select);
        let left = document.createElement("input");
        left.classList.add("compareLeft");
        left.placeholder = "search";
        frame.appendChild(left);
        let button = document.createElement("button");
        button.classList.add("compareButton");
        button.innerHTML = "compare";
        button.addEventListener("click", function(){
            compareTags(this); 
        });
        frame.appendChild(button);
        let right = document.createElement("input");
        right.classList.add("compareRight");
        right.placeholder = "search";
        frame.appendChild(right);
        let graph = document.createElement("div");
        graph.classList.add("compareGraph");
        frame.appendChild(graph);
        mainframe.appendChild(frame);
    }
}

function compareTags(el) {
    let frame = el.parentNode;
    let category = frame.children[0].value*1;
    let queryOne = frame.children[1].value;
    let queryTwo = frame.children[3].value;
    let graph = frame.children[4];
    graph.innerHTML = "";
    document.getElementById("searchBox").value = queryOne;
    searchSeperate();
    let lengthOne = displayable.length;
    document.getElementById("searchBox").value = queryTwo;
    searchSeperate();
    let lengthTwo = displayable.length;
    document.getElementById("searchBox").value = queryOne+","+queryTwo;
    searchSeperate();
    let lengthBoth = displayable.length;
    document.getElementById("searchBox").value = "";
    lengthOne -= lengthBoth;
    lengthTwo -= lengthBoth;
    let total = lengthOne + lengthBoth + lengthTwo;
    let blockOne = document.createElement("div");
    blockOne.style.width = lengthOne*100/total + "%";
    blockOne.classList.add("compareGraphOne");
    blockOne.innerHTML = (lengthOne*100/total).toFixed(1) + "%<br>" + lengthOne;
    let blockBoth = document.createElement("div");
    blockBoth.style.width = lengthBoth*100/total + "%";
    blockBoth.classList.add("compareGraphBoth");
    blockBoth.innerHTML = (lengthBoth*100/total).toFixed(1) + "%<br>" + lengthBoth;
    let blockTwo = document.createElement("div");
    blockTwo.style.width = lengthTwo*100/total + "%";
    blockTwo.classList.add("compareGraphTwo");
    blockTwo.innerHTML = (lengthTwo*100/total).toFixed(1) + "%<br>" + lengthTwo;
    graph.appendChild(blockOne);
    graph.appendChild(blockBoth);
    graph.appendChild(blockTwo);
}

function get(id) {
    return document.getElementById(id) || document.getElementsByClassName(id) || document.getElementsByTagName(id);
}
	    
	    /*TODO
	    charts:
	        bewertungsverteilung als kreis diagram
	        pub year verteilung als seulen diagram
	        genre verteilung als säulen diagram
	        sprachen verteilung als seulen
	        absolute werte anzeigen
	        begriffe clickbar für suche
	        durchschnittsbewertung pro year & watch date
	        bewertung sortiert nach wert
	        film, serien, buch mengen verteilung als kreis diagram
	        
	        quicksort
	        cover blöcke mit sortierter eigenschaft und anzahl der elemente mit dieser eigenschaft
	        suche nach länge von eigenschaften (zB watched 4)
	        suche nach idYear geht nicht, wenn ongoing (e.g. ["2015",""])
	    */
		
