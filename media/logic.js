var german = true;  /* display title and search in german */
var displayable = database; /* display everything on page load */
var typingTimeout;  /* timer variable */
var publicSuggestions = [];
var screen = "covers";
var recFactorRating = 2;
var recFactorAge = 0.05;
var recFactorCount = 1;
var recMinRating = 5;
var restrictLoading = true;
var maxCovers = 50;

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
var idDirector = 9;
var idActor = 10;
var idImage = 11;


if (window.location.host == "aki108.tumblr.com") {
    let url = window.location.search.substring(1);
    let q = "";
    let s = "covers";
    if (url.search("q=") > -1) {
        q = url.substring(url.search("q=")+2);
        if (q.search("&") > -1) {
            q = q.substring(0, q.search("&"));
        }
    }
    q = q.replace("%20", " ");
    document.getElementById("searchBox").value = q;
    if (url.search("s=") > -1) {
        s = url.substring(url.search("s=")+2);
        if (s.search("&") > -1) {
            s = s.substring(0, q.search("&"));
        }
    }
    screen = s;
}

document.addEventListener("scroll", scroll);

search(); /* start displaying */

/* wait some time to finish typing a search query before running search function */
function typing() {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(search, typingWaitTime);
}

function scroll() {
    let bottom = document.body.getClientRects()[0].height;
    if (document.getElementsByClassName("loadMoreTitle").length > 0) {
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
    if (screen == "stats") {
        document.getElementById("statsButton").classList.add("selected");
        document.getElementById("recommendButton").classList.remove("selected");
        graphs();
    } else if (screen == "recs") {
        document.getElementById("recommendButton").classList.add("selected");
        document.getElementById("statsButton").classList.remove("selected");
        recommend();
    } else {
        screen = "covers";
        document.getElementById("statsButton").classList.remove("selected");
        document.getElementById("recommendButton").classList.remove("selected");
        covers();
    }
}

function covers() {
    clear();
    for (b = 0; b < displayable.length; b++) {
        if (b < maxCovers || !restrictLoading) {
            addEntry(displayable[b]);
        } else {
            addLoadMore();
            break;
        }
    }
    let result = document.getElementById("resultCount");
    result.innerHTML = displayable.length;
    if (displayable.length == 1) {
        result.innerHTML += " result";
    } else {
        result.innerHTML += " results";
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
    
    /*title.innerHTML = "load all covers<br><br>warning: this will drastically reduce performance";
    title.addEventListener("click", function() {
        restrictLoading = false;
        covers();
    });*/
    title.innerHTML = "loading more...";
    loading.appendChild(one);
    loading.appendChild(two);
    loading.appendChild(three);
    
    /* add standard classes */
    entry.appendChild(title);
    entry.appendChild(loading);
    frame.appendChild(entry);
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
    
    /* add standard classes */
    entry.classList.add("entry");
    cover.classList.add("cover");
    image.classList.add("coverImage");
    for (aq = 0; aq < data[idTag].length; aq++) {
        if (data[idTag][aq] == "dropped") {
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
    year.addEventListener("click", function(){
        searchTop(this);
    }); 
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
    
    /* add type bubble */
    switch (data[idType]) {
        case "film":
            bubbleIcon.src = iconFilm;
            break;
        case "short":
            bubbleIcon.src = iconShort;
            break;
        case "series":
            bubbleIcon.src = iconSeries;
            break;
        case "book":
            bubbleIcon.src = iconBook;
            break;
        case "audiobook":
            bubbleIcon.src = iconAudiobook;
            break;
    }
    typeBubble.appendChild(bubbleIcon);
    typeBubble.title = data[idType];
    
    /* add stars */
    if (data[idRating] > 0) {
        for (w = data[idRating]; w > 0; w -= 2) {
            if (w >= 2) {
                let star = document.createElement("img");
                star.classList.add("star");
                star.src = iconStar;
                rating.appendChild(star);
            } else if (w == 1) {
                let half = document.createElement("img");
                half.classList.add("star");
                half.src = iconHalfStar;
                rating.appendChild(half);
            }
        }
    } else {
        rating.innerHTML = "unrated";
    }
    
    /* add displayed info */
    for (a = 0; a < data[idDate].length; a++) {
        date.innerHTML += formDate(data[idDate][a]);
        if (a < data[idDate].length-1) date.innerHTML += "<br>";
    }
    if (typeof(data[idYear]) == "object") {
        year.innerHTML = data[idYear][0] + " - " + data[idYear][1];
    } else {
        year.innerHTML = data[idYear];
    }
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
    if (data[idActor].length > 0) {
        infoActors.innerHTML = "<a>actors</a>";
        for (w = 0; w < data[idActor].length; w++) {
            let actor = document.createElement("div");
            actor.classList.add("infoSubitem");
            actor.innerHTML = data[idActor][w];
            actor.addEventListener("click", function(){
                searchTop(this);
            }); 
            infoActors.appendChild(actor);
        }
        moreInfo.appendChild(infoActors);
    }
    if (data[idGenre].length > 0) {
        infoGenre.innerHTML = "<a>genre</a>";
        for (x = 0; x < data[idGenre].length; x++) {
            let genre = document.createElement("div");
            genre.classList.add("infoSubitem");
            genre.innerHTML = data[idGenre][x];
            genre.addEventListener("click", function(){
                searchTop(this);
            }); 
            infoGenre.appendChild(genre);
        }
        moreInfo.appendChild(infoGenre);
    }
    if (data[idTag].length > 0) {
        infoTags.innerHTML = "<a>tags</a>";
        for (y = 0; y < data[idTag].length; y++) {
            let tag = document.createElement("div");
            tag.classList.add("infoSubitem");
            tag.innerHTML = data[idTag][y];
            tag.addEventListener("click", function(){
                searchTop(this);
            }); 
            infoTags.appendChild(tag);
        }
        moreInfo.appendChild(infoTags);
    }
    if (data[idLang].length > 0) {
        infoLang.innerHTML = "<a>languages</a>";
        for (z = 0; z < data[idLang].length; z++) {
            let lang = document.createElement("div");
            lang.classList.add("infoSubitem");
            lang.innerHTML = data[idLang][z];
            lang.addEventListener("click", function(){
                searchTop(this);
            }); 
            infoLang.appendChild(lang);
        }
        moreInfo.appendChild(infoLang);
    }
    if (data[idWatchedWith].length > 0) {
        infoWatchedWith.innerHTML = "<a>watched with</a>";
        for (aa = 0; aa < data[idWatchedWith].length; aa++) {
            var watched = document.createElement("div");
            watched.classList.add("infoSubitem");
            watched.innerHTML = data[idWatchedWith][aa];
            watched.addEventListener("click", function(){
                searchTop(this);
            }); 
            infoWatchedWith.appendChild(watched);
        }
        moreInfo.appendChild(infoWatchedWith);
    }
    
    /* put all elements together as one */
    titleFrame.appendChild(title);
    info.appendChild(secondTitle);
    info.appendChild(subtitle);
    if (data[idType] == "book" || data[idType] == "audiobook") {
        creator.innerHTML = data[idDirector][0];
        creator.addEventListener("click", function(){
            searchTop(this);
        });
        info.appendChild(creator);
    }
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
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
        }
    }
}

/* return a date string */
function formDate(dateString) {
    if (dateString == null) return "";
    if (typeof(dateString) == "string") {
        if (dateString.length == 0) return "";
        var date = new Date(dateString);
        var day = date.getDate();
        var month = (date.getMonth()+1);
        var year = date.getFullYear();
        
        if (day < 10) {
            day = "0" + day;
        }
        month = monthname(month);
        
        return day + " " + month + " " + year;
    } else if (typeof(dateString) == "object") {
        var season = false;
        var dayOne = false;
        var dayTwo = false;
        var returnString = "";
        if (isDate(dateString[0])) dayOne = formDate(dateString[0]);
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

/* prepare variables from selection for sort function */
function sort() {
    var dir = -1;
    if (document.getElementById("sortInvert").checked) dir = 1;
    var index = idType;
    var position = "first";
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
            for (c = 0; c < data.length; c++) {
                for (d = 0; d < data.length-1; d++) {
                    left = null;
                    right = null;
                    if (index == idTitle) {
                        //title
                        if (german && data[d][1].length > 1) {
                            left = data[d][1][1];
                        } else {
                            left = data[d][1][0];
                        }
                        if (german && data[d+1][1].length > 1) {
                            right = data[d+1][1][1];
                        } else {
                            right = data[d+1][1][0];
                        }
                    } else {
	                    switch (position) {
	                        case "first":
	                            left = data[d][index][0];
	                            right = data[d+1][index][0];
	                            break;
	                        case "second":
	                            left = data[d][index][1];
	                            right = data[d+1][index][1];
	                            break;
	                        case "last":
	                            left = data[d][index][data[d][index].length-1];
	                            right = data[d+1][index][data[d+1][index].length-1];
	                            break;
	                       case "length":
	                            left = data[d][index].length;
	                            right = data[d+1][index].length;
	                            break;
	                    }
                    }
                    if (typeof(left) == "object") {
                        if (index == idDate) {
                            if (isDate(left[1])) {
                                left = left[1];
                            } else {
                                left = left[0];
                            }
                        } else {
                            left = left[0];
                        }
                    }
                    if (left != null && position != "length") left = left.toUpperCase();
                    if (typeof(right) == "object") {
                        if (index == idDate) {
                            if (isDate(right[1])) {
                                right = right[1];
                            } else {
                                right = right[0];
                            }
                        } else {
                            right = right[0];
                        }
                    }
                    if (right != null && position != "length") right = right.toUpperCase();
                    if (dir == -1) {
	                    if (left > right) {
	                        swap(data, d, d+1);
	                    } 
                    } else {
                        if (left < right) {
	                        swap(data, d, d+1);
	                    } 
                    }
                }
            }
        } else {
            //sort number and string
            for (c = 0; c < data.length; c++) {
                for (d = 0; d < data.length-1; d++) {
                    left = data[d][index];
                    right = data[d+1][index];
                    if (dir == -1) {
	                    if (left > right) {
	                        swap(data, d, d+1);
	                    } 
                    } else {
                        if (left < right) {
	                        swap(data, d, d+1);
	                    } 
                    }
                }
            }
        }
    }
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

/* sort strings by number of occurrence */
function countSortStrings(data) {
    var newData = [];
    for (u = 0; u < data.length; u++) {
        var found = search2D(newData, data[u]);
        if (found == -1) {
            newData.push([data[u], 1]);
        } else {
            newData[found][1] += 1;
        }
    }
    sortBy(newData, 1, 1);
    return newData;
}

/* sort arrays by number of sub-data occurrence */
function countSortElements(data, index) {
    var newData = [];
    for (f = 0; f < data.length; f++) {
        if (typeof(data[f][index]) == 'object') {
            for (g = 0; g < data[f][index].length; g++) {
                var found = search2D(newData, data[f][index][g]);
                if (found == -1) {
                    newData.push([data[f][index][g], 1]);
                } else {
                    newData[found][1] += 1;
                }
            }
        } else {
            var found = search2D(newData, data[f][index]);
            if (found == -1) {
                newData.push([data[f][index], 1]);
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
    for (h = 0; h < data.length; h++) {
        for (i = 0; i < data[h].length; i++) {
            if (data[h][i] == term) {
                return h;
            }
        }
    }
    return -1;
}

/* remove spaces from beginning and end of a string */
function removeSpaces(string) {
    var one = "";
    var two = "";
    for (af = string.length-1; af >= 0; af--) {
        if (one.length != 0 || string[af] != " ") {
            one += string[af];
        }
    }
    for (ag = one.length-1; ag >= 0; ag--) {
        if (two.length != 0 || one[ag] != " ") {
            two += one[ag];
        }
    }
    return two;
}

/* run search on database */
function search() {
    maxCovers = maxCoversInit;
    german = document.getElementById("radioGerman").checked;
    
    var tempData = [].concat(database);
    displayable = [];
    publicSuggestions = [];
    
    
    //analyse query and separet into terms
    var query = document.getElementById("searchBox").value.toUpperCase();
    var word = "";
    var termsAll = [];
    var termsM = [];
    var termsP = [];
    if (query.length == 0) {
        displayable = [].concat(database);
    } else {
        query += ",";
        for (ae = 0; ae < query.length; ae++) {
            if (query[ae] == "," || ae == query.length-1) {
                word = removeSpaces(word);
                if (word != "") termsAll.push(word);
                word = "";
            } else {
                word += query[ae];
            }
        }
    }
    
    for (ah = 0; ah < termsAll.length; ah++) {
        if (termsAll[ah][0] == "-") {
            termsM.push(termsAll[ah].slice(1));
        } else {
            termsP.push(termsAll[ah]);
        }
    }
    
    var inP = [].concat(database);
    var outP = [];
    var nextPass = [];
    if (termsP.length > 0) {
        for (ad = 0; ad < termsP.length; ad++) {
            for (ai = 0; ai < inP.length; ai++) {
                var fits = subSearch(termsP[ad], [].concat(inP[ai]));
                if (fits) {
                    outP.push(inP[ai]);
                } else {
                    nextPass.push(inP[ai]);
                }
            }
            if (document.getElementById("searchAdd").checked) {
                inP = [].concat(nextPass);
                nextPass = [];
            } else {
                if (ad != termsP.length-1) {
                    inP = [].concat(outP);
                    outP = [];
                }
            }
        }
    } else {
        for (ai = 0; ai < inP.length; ai++) {
            var fits = subSearch("", [].concat(inP[ai]));
            if (fits) {
                outP.push(inP[ai]);
            }
        }
    }
    
    var inM = [].concat(outP);
    var outM = [];
    if (termsM.length > 0) {
        for (j = 0; j < termsM.length; j++) {
            for (aj = 0; aj < inM.length; aj++) {
                var fits = subSearch(termsM[j], [].concat(inM[aj]));
                if (!fits) {
                    outM.push(inM[aj]);
                } else {
                    nextPass.push(inP[ai]);
                }
            }
            if (j != termsM.length-1) {
                inM = [].concat(outM);
                outM = [];
            }
        }
    } else {
        outM = [].concat(inM);
    }
    displayable = [].concat(outM);
    sort();
    
    if (screen != "recs") {
        if (termsAll.length != 0) {
            var finalSuggestions = countSortStrings(publicSuggestions);
            displaySuggestions(finalSuggestions);
            publicSuggestions = [];
        } else {
            displayTop();
        }
    }
}

/* search a single database entry */
function subSearch(term, input) {
    var addToList = false;
    var exact = false;
    
    if (term[0] == "\"" && term[term.length-1] == "\"") {
        exact = true;
        term = term.slice(1, term.length-1);
    }
    
    //filter type
    if (!document.getElementById("checkMovies").checked) {
        if (input[idType] == "film" || input[idType] == "short") {
            return false;
        }
    }
    if (!document.getElementById("checkBooks").checked) {
        if (input[idType] == "book" || input[idType] == "audiobook") {
            return false;
        }
    }
    if (!document.getElementById("checkSeries").checked) {
        if (input[idType] == "series") {
            return false;
        }
    }
    
    if (term != "") {
        
        //search title
        if (document.getElementById("checkTitle").checked) {
            var title = input[idTitle][0].toUpperCase();
            if (german && input[idTitle].length > 1) title = input[idTitle][1].toUpperCase();
            var found = -1;
            if (exact) {
                if (title == term) found = 0;
            } else {
                found = title.search(term);
            }
            if (found != -1) {
                addToList = true;
                
                publicSuggestions.push(title);
            }
        }
        
        //search date
        if (document.getElementById("checkDate").checked && !addToList) {
            if (term.length == 4 && isDate(term)) {
                //YYYY
                var dates = input[idDate];
                if (dateframeFits(dates, term)) {
                    addToList = true;
                }
            } else if (term.length == 8) {
                //MMM YYYY
                var searchMonth = term.slice(0, 3).toLowerCase();
                var searchYear = term.slice(4);
                if (isNaN(searchMonth) && !isNaN(searchYear)) {
                    var monthNumber = "00";
                    switch (searchMonth) {
                        case "jan": monthNumber = "01"; break;
                        case "feb": monthNumber = "02"; break;
                        case "mar": monthNumber = "03"; break;
                        case "apr": monthNumber = "04"; break;
                        case "may": monthNumber = "05"; break;
                        case "jun": monthNumber = "06"; break;
                        case "jul": monthNumber = "07"; break;
                        case "aug": monthNumber = "08"; break;
                        case "sep": monthNumber = "09"; break;
                        case "oct": monthNumber = "10"; break;
                        case "nov": monthNumber = "11"; break;
                        case "dec": monthNumber = "12"; break;
                    }
                    var searchDate = searchYear + " " + monthNumber;
                    
                    var dates = input[idDate];
                    if (dateframeFits(dates, searchDate)) {
                        addToList = true;
                    }
                }
            } else if (term.length == 11) {
                //DD MMM YYYY
                var searchDay = term.slice(0, 2);
                var searchMonth = term.slice(3, 6).toLowerCase();
                var searchYear = term.slice(7);
                if (isNaN(searchMonth) && !isNaN(searchYear)) {
                    var monthNumber = "00";
                    switch (searchMonth) {
                        case "jan": monthNumber = "01"; break;
                        case "feb": monthNumber = "02"; break;
                        case "mar": monthNumber = "03"; break;
                        case "apr": monthNumber = "04"; break;
                        case "may": monthNumber = "05"; break;
                        case "jun": monthNumber = "06"; break;
                        case "jul": monthNumber = "07"; break;
                        case "aug": monthNumber = "08"; break;
                        case "sep": monthNumber = "09"; break;
                        case "oct": monthNumber = "10"; break;
                        case "nov": monthNumber = "11"; break;
                        case "dec": monthNumber = "12"; break;
                    }
                    var searchDate = searchYear + " " + monthNumber + " " + searchDay;
                    
                    var dates = input[idDate];
                    if (dateframeFits(dates, searchDate)) {
                        addToList = true;
                    }
                }
            }
            
            
            //possible terms:
            //full year (2017)
            //month as word (april / mai)
            //full date (20.7.19)
            //TODO
            
        }
        
        //search rating
        if (document.getElementById("checkRating").checked && !addToList) {
            var rating = input[idRating];
            if (!isNaN(term)) {
                if (term == rating) {
                    addToList = true;
                }
            }
        }
        
        //search info
        // pub year 2, genre 6, director 9
        if (document.getElementById("checkInfo").checked) {
            //year
            var year = input[idYear];
            if (typeof(year) == "object") {
                if (term >= year[0] && year[1] >= term) {
                    addToList = true;
                }
            } else {
                if (year == term) {
                    addToList = true;
                }
            }
            
            //genre
            var genres = input[idGenre];
            for (p = 0; p < genres.length; p++) {
                var genre = genres[p].toUpperCase();
                var found = genre.search(term);
                if (genre == term) {
                    addToList = true;
                    
                    publicSuggestions.push(genre);
                }
            }
            
            //director
            var directors = input[idDirector];
            for (q = 0; q < directors.length; q++) {
                var director = directors[q].toUpperCase();
                var found = -1;
                if (exact) {
                    if (director == term) found = 0;
                } else {
                    found = director.search(term)
                }
                if (found != -1) {
                    addToList = true;
            
                    publicSuggestions.push(director);
                }
            }
        }
        
        //search actors
        if (document.getElementById("checkActors").checked) {
            var actors = input[idActor];
            for (k = 0; k < actors.length; k++) {
                var actor = actors[k].toUpperCase();
                var found = -1;
                if (exact) {
                    if (actor == term) found = 0;
                } else {
                    found = actor.search(term);
                }
                if (found != -1) {
                    addToList = true;
                
                    publicSuggestions.push(actor);
                }
            }
        }
        
        //search tags
        //lang 5, watched with 7, tags 8
        if (document.getElementById("checkTags").checked) {
            //lang
            if (!addToList) {
                var langs = input[idLang];
                for (l = 0; l < langs.length; l++) {
                    var lang = langs[l].toUpperCase();
                    if (lang == term) {
                        addToList = true;
                    }
                }
            }
            
            //watched with
            if (!addToList) {
                var people = input[idWatchedWith];
                for (m = 0; m < people.length; m++) {
                    var person = people[m].toUpperCase();
                    if (person == term) {
                        addToList = true;
                    }
                }
            }
            
            //tags
            var tags = input[idTag];
            for (n = 0; n < tags.length; n++) {
                var tag = tags[n].toUpperCase();
                var found = -1;
                if (exact) {
                    if (tag == term) found = 0;
                } else {
                    found = tag.search(term);
                }
                if (found >= 0) {
                    addToList = true;
                    
                    publicSuggestions.push(tag);
                }
            }
        }
        
    } else {
        
        //filter type
        if (document.getElementById("checkMovies").checked && !addToList) {
            if (input[idType] == "film" || input[idType] == "short") {
                addToList = true;
            }
        }
        if (document.getElementById("checkBooks").checked && !addToList) {
            if (input[idType] == "book" || input[idType] == "audiobook") {
                addToList = true;
            }
        }
        if (document.getElementById("checkSeries").checked && !addToList) {
            if (input[idType] == "series") {
                addToList = true;
            }
        }
        
    }
    
    return addToList;
}

/* validates a string to be a date or not */
function isDate(string) {
    return (!isNaN(new Date(string).getFullYear()));
}

/* add suggestion items to display-list */
function displaySuggestions(suggestions) {
    var displayDiv = document.getElementById("suggestions");
    displayDiv.innerHTML = "";
    for (v = 0; v < 10 && v < suggestions.length; v++) {
        var suggest = document.createElement("div");
        suggest.classList.add("topItem");
        suggest.innerHTML = suggestions[v][0].toLowerCase();
        suggest.title = suggestions[v][0];
        suggest.addEventListener("click", function(){
            searchTop(this);
        }); 
        displayDiv.appendChild(suggest);
    }
}

/* reset search selection */
function clearSearch() {
    document.getElementById("searchBox").value = "";
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
    var suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    
    var watching = document.createElement("div");
    watching.classList.add("topItem");
    watching.innerHTML = "watching";
    watching.title = "watching";
    watching.addEventListener("click", function(){
        searchTop(this);
    }); 
    suggestions.appendChild(watching);
    
    topGenres();
    topActors();
    topAuthors();
}

function topGenres() {
    var genres = countSortElements(database, idGenre);
    var suggestions = document.getElementById("suggestions");
    for (o = 0; o < limitTop; o++) {
        var genre = document.createElement("div");
        genre.classList.add("topItem");
        genre.innerHTML = genres[o][0].toLowerCase();
        genre.title = genres[o][0];
        genre.addEventListener("click", function(){
            searchTop(this);
        }); 
        suggestions.appendChild(genre);
    }
}

function topActors() {
    var actors = countSortElements(database, idActor);
    var suggestions = document.getElementById("suggestions");
    for (p = 0; p < limitTop; p++) {
        var actor = document.createElement("div");
        actor.classList.add("topItem");
        actor.innerHTML = actors[p][0].toLowerCase();
        actor.title = actors[p][0];
        actor.addEventListener("click", function(){
            searchTop(this);
        }); 
        suggestions.appendChild(actor);
    }
}

function topAuthors() {
    var authors = countSortElements(database, idDirector);
    var suggestions = document.getElementById("suggestions");
    for (t = 0; t < limitTop; t++) {
        var author = document.createElement("div");
        author.classList.add("topItem");
        author.innerHTML = authors[t][0].toLowerCase();
        author.title = authors[t][0];
        author.addEventListener("click", function(){
            searchTop(this);
        }); 
        suggestions.appendChild(author);
    }
}

/* add clicked word as search */
function searchTop(element) {
    document.getElementById("searchBox").value = element.innerHTML;
    document.getElementById("checkTitle").checked = false;
    document.getElementById("checkDate").checked = false;
    document.getElementById("checkRating").checked = false;
    document.getElementById("checkInfo").checked = false;
    document.getElementById("checkActors").checked = false;
    document.getElementById("checkTags").checked = false;
    switch (element.parentNode.id) {
        case "topRatings":
            document.getElementById("checkRating").checked = true;
            break;
        case "topGenres":
            document.getElementById("checkInfo").checked = true;
            break;
        case "topActors":
            document.getElementById("checkActors").checked = true;
            break;
        case "topAuthors":
            document.getElementById("checkInfo").checked = true;
            break;
        default:
            document.getElementById("checkTitle").checked = true;
            document.getElementById("checkDate").checked = true;
            document.getElementById("checkRating").checked = true;
            document.getElementById("checkInfo").checked = true;
            document.getElementById("checkActors").checked = true;
            document.getElementById("checkTags").checked = true;
            break;
    }
    search();
}

/*toggles between statics and normal view*/
function statsButton() {
    if (screen == "stats") {
        screen = "covers";
    } else {
        screen = "stats";
        document.getElementById("statsButton").classList.add("selected");
    }
    search();
}

function recsButton() {
    if (screen == "recs") {
        screen = "covers";
    } else {
        screen = "recs";
        document.getElementById("recommendButton").classList.add("selected");
    }
    search();
}

/* generate generic graphs */
function graphs() {
    screen = "stats";
    var data = displayable;
    clear();
    var mainframe = document.getElementsByTagName("main-frame")[0];
    //types per month
    mainframe.appendChild(typePerMonth(data, 0));
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
    //director
    mainframe.appendChild(generateBarChart(data, idDirector, "authors & directors", 11, true));
    //actor
    mainframe.appendChild(generateBarChart(data, idActor, "actors", 20, true));
}

function map(value, start1, stop1, start2, stop2) {
    var y = (value - start1) / stop1 + start1;
    var z = (stop2 - start2) * y + start2;
    return z;
}

/* make html element of a graph */
function generateBarChart(data, index, title, limit, indipendent) {
    var heading = document.createElement("div");
    heading.innerHTML = title;
    heading.classList.add("graphHeading");
    var bars = countSortElements(data, index);
    if (bars.length > 0) {
        var maximum = bars[0][1];
        if (index == idRating) {
            var newBars = [["unrated",0],["1",0],["2",0],["3",0],["4",0],["5",0],["6",0],["7",0],["8",0],["9",0],["10",0]];
            for (ar = 0; ar < bars.length; ar++) {
                newBars[bars[ar][0]][1] = bars[ar][1];
            }
            bars = newBars;
        }
        if (index == idYear) bars.sort();
        var frame = document.createElement("div");
        frame.classList.add("graphFrame");
        frame.appendChild(heading);
        var totalCount = data.length;
        if (limit > 0) bars = bars.slice(0, limit);
        var used = 0;
        for (r = 0; r < bars.length; r++) {
            if (index == idYear && bars[r][0].length != 4) continue;
            var bar = document.createElement("div");
            bar.classList.add("graphBar");
            var percent = (bars[r][1]/totalCount*100).toFixed(1);
            used += bars[r][1];
            bar.style.width = map(bars[r][1], 0, maximum, 0, 100) + "%";
            if (percent < 10) percent = "0" + percent;
            bar.innerHTML = percent + " % - ";
            if (index == 4 && bars[r][0] == "0") {
                bar.innerHTML += "unrated";
            } else {
                bar.innerHTML += bars[r][0];
            }
            frame.appendChild(bar);
        }
        if (totalCount-used > 0 && !indipendent) {
            var bar = document.createElement("div");
            bar.classList.add("graphBar");
            var percent = ((totalCount-used)/totalCount*100).toFixed(1);
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
    var returnArray = [];
    for (ak = 0; ak < data.length; ak++) {
        var dates = data[ak][idDate];
        if (dateframeFits(dates, date)) {
            returnArray.push(data[ak]);
        }
    }
    return returnArray;
}

/* 
checks if a date fits between any of the dates from an array

input dates: ["2020 10 15", ["2020 10 16", "2020 10 17", "S1"]] 
input date: "2020" || "2020 10" || "2020 10 15"
*/
function dateframeFits(dates, date) {
    for (al = 0; al < dates.length; al++) {
        if (isDate(dates[al])) {
            if (dates[al].slice(0,date.length) == date) {
                return true;
            }
        } else {
            if (isDate(dates[al][0])) {
                var first = dates[al][0].slice(0,date.length);
                if (isDate(dates[al][1])) {
                    var second = dates[al][1].slice(0,date.length);
                    if (first <= date && date <= second) {
                        return true;
                    }
                } else {
                    if (first == date) {
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
    var today = new Date();
    var datapoints = [];
    var maximum = 0;
    for (loopYear = 2015; loopYear <= today.getFullYear(); loopYear++) {
        for (loopMonth = 1; loopMonth <= 12; loopMonth++) {
            if (loopYear == today.getFullYear() && loopMonth > today.getMonth()+1) break;
            if (loopYear == 2015 && loopMonth < 7) continue;
            var month = loopMonth;
            if (month < 10) month = "0" + month;
            
            var results = getEntriesFromTime(data, loopYear + " " + month);
            var newData = [];
            newData.push(monthname(loopMonth) + " " + loopYear, 0, 0, 0, 0, 0, 0, 0);
            for (am = 0; am < results.length; am++) {
                switch (results[am][idType]) {
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
                        console.log("error 01: unknow type " + results[am][idType]);
                        break;
                }
                //if (results[am][idRating] != 0) {
                    newData[6]++;
                    newData[7] += results[am][idRating];
                //}
            }
            //newData[6] = results.length;
            if (results.length > maximum) maximum = results.length;
            datapoints.push(newData);
        }
    }
    
    //create the graph
    if (which == 0) {
        var frame = document.createElement("div");
        frame.classList.add("graphFrame");
        var title = document.createElement("div");
        title.classList.add("graphHeading");
        title.innerHTML = "types per month";
        frame.appendChild(title);
        var legend = document.createElement("div");
        legend.classList.add("graphLegend");
        for (ap = 0; ap < 5; ap++) {
            var element = document.createElement("div");
            element.classList.add("graphLegendElement");
            switch (ap) {
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
        for (an = 0; an < datapoints.length; an++) {
            var month = document.createElement("div");
            var title = document.createElement("div");
            title.innerHTML = datapoints[an][0];
            title.classList.add("graphTitle");
            month.appendChild(title);
            month.style.display = "block";
            month.style.width = "100%";
            month.style.height = "10px";
            for (ao = 1; ao < 6; ao++) {
                if (datapoints[an][ao] == 0) continue;
                var bar = document.createElement("div");
                var title = "";
                switch (ao) {
                    case 1: title = "Movie"; break;
                    case 2: title = "Short"; break;
                    case 3: title = "Series"; break;
                    case 4: title = "Book"; break;
                    case 5: title = "Audiobook"; break;
                }
                bar.title = title + ": " + datapoints[an][ao] + " / " + datapoints[an][6];
                var widthTotal = map(datapoints[an][6], 0, maximum, 0, 87);
                var width = map(datapoints[an][ao], 0, datapoints[an][6], 0, widthTotal);
                bar.style.width = width + "%";
                bar.classList.add("graphBar2");
                switch (ao) {
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
    } else {
        
        var frame = document.createElement("div");
        frame.classList.add("graphFrame");
        var title = document.createElement("div");
        title.classList.add("graphHeading");
        title.innerHTML = "average rating per month";
        frame.appendChild(title);
        for (an = 0; an < datapoints.length; an++) {
            var month = document.createElement("div");
            var title = document.createElement("div");
            title.innerHTML = datapoints[an][0];
            title.classList.add("graphTitle");
            month.appendChild(title);
            month.style.display = "block";
            month.style.width = "100%";
            month.style.height = "10px";
            var bar = document.createElement("div");
            var rating = datapoints[an][7] / datapoints[an][6];
            var width = map(rating, 0, 10, 0, 87);
            bar.style.width = width + "%";
            bar.title = rating.toFixed(1) + " %";
            bar.classList.add("graphBar2");
            bar.style.background = "#f0f0f0";
            month.appendChild(bar);
            frame.appendChild(month);
        }
        return frame;
    }
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
    for (let a = 0; a < displayable.length; a++) {
        let entry = displayable[a];
        if (entry[idRating] < recMinRating) continue;
        let dropped = false;
        for (let b = 0; b < entry[idTag].length; b++) {
            if (entry[idTag][b] == "dropped") {
                dropped = true;
                break;
            }
        }
        if (dropped) continue;
        let score = entry[idRating] * recFactorRating;
        let lastWatch = entry[idDate][entry[idDate].length-1];
        if (typeof(lastWatch) == "object") {
            if (isDate(lastWatch[lastWatch.length-2])) {
                lastWatch = lastWatch[lastWatch.length-2];
            } else {
                lastWatch = lastWatch[0];
            }
        }
        if (isDate(lastWatch)) {
            score += daysSince(new Date(lastWatch)) * recFactorAge;
        }
        score += entry[idDate].length * recFactorCount;
        scoresList.push([score, entry]);
    }
    scoresList.sort(function(a, b) {
        return b[0] - a[0];
    });
    displayable = [];
    for (let a = 0; a < scoresList.length; a++) {
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
    } else return 0;
}
