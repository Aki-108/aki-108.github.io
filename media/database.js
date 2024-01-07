var database = [
	        /*typ, title [eng, ger, org], watch count, pub year, watch dates, rating, languages, genre, watched with, tags, creator, actors, image
	  
,
	        
["type", ["title"], "pub year", ["dates"], rating, ["lang"], ["genre"], ["watched with"], ["tags"], ["creator"], ["actors"], "image"]
	        
	        */
	        
["film", ["Cell", "Puls"], "2016", [""], 0, ["ger"], ["action", "adventure"], [], [], ["Tod Williams"], ["John Cusack", "Samuel L. Jackson", "Isabelle Fuhrman"], "https://64.media.tumblr.com/57b8fe2a760b849677dc4ff69d48ca85/2298f83200c43de1-90/s250x400/2540ec14d6d248cf7e39371253dc00d5ef9e425b.jpg"],
	        
["film", ["Watchmen", "Watchmen: Die Wächter"], "2009", [""], 0, ["ger"], ["action", "drama"], [], [], ["Zack Snyder"], ["Jackie Earle Haley", "Carla Gugino", "Dan Payne", "Kathryn Hahn", "Matthew Goode"], "https://64.media.tumblr.com/4101f6f80a55955a8d0fd95ac0b2125b/2e9a308c13070f84-32/s250x400/1aa2064dd71b23ac8dea2391fa6cff1802edc6c9.jpg"],

["film", ["Race to Witch Mountain", "Die Jagd zum magischen Berg"], "2009", ["2021 12 16"], 6, ["ger"], ["action", "adventure"], [], [], ["Andy Fickman"], ["Dwayne Johnson", "AnnaSophia Robb", "Alexander Ludwig", "Carla Gugino", "Ciarán Hinds", "Bill Clinton", "Kim Richards", "Ike Eisenmann"], "https://64.media.tumblr.com/a52598667d5ad20820cf180af20c69a8/3e4b29b54dd443af-1e/s250x400/36eefc8c5d161118f934b999b8914a2157dd0ec7.jpg"],

["series", ["The Monkees"], ["1966", "1968"], [["", "S1 - S1E8"]], 0, ["eng"], ["comedy", "music"], [], [], ["Paul Mazursky", "Larry Tucker"], [], "https://66.media.tumblr.com/5f2c55240dffd0f9ac3b2ade18ddafe6/tumblr_of31ovPvOi1v2s5upo1_250.jpg"],  
	        
["series", ["Pingu"], ["1986", "2010"], [["", "S1 - S1E19"]], 0, ["ger"], ["animation"], [], [], ["Graham Alborough", "Erika Brueggeman", "Jackie Cockle"], [], "https://68.media.tumblr.com/c9ce3e098537062e390f963a021d3333/tumblr_of32gcVYcL1v2s5upo1_250.jpg"],   

["series", ["Ned's Declassified School Survival Guide", "Neds ultimativer Schulwahnsinn"], ["2004", "2007"], [["", "S1 - S1E10"]], 0, ["ger"], ["comedy", "family"], [], [], ["Scott Fellows"], [], "https://66.media.tumblr.com/98d116d1af1413c9a23d050738cc6a6a/tumblr_of4trzKh931v2s5upo1_250.jpg"],
	        
["series", ["The War at Home", "Hinterm Sofa an der Front"], ["2005", "2007"], [""], 0, ["ger"], ["comedy", "romance"], [], [], ["Rob Lotterstein"], ["Michael Rapaport", "Anita Barone", "Rami Malek"], "https://68.media.tumblr.com/bb00730e6a8bd5ad27b2c4a97f0c9e2c/tumblr_ofm8q4bjOO1v2s5upo1_250.jpg"],
	        
["series", ["The Joy of Painting", "Bob Ross: The Joy of Painting"], ["1983", "1994"], [["2017 04 23", "", ""]], 0, ["eng"], ["documentary", "family"], [], [], [], [], "https://68.media.tumblr.com/4f4717472d53b3a8a561e4a6a62e96b4/tumblr_oovi0qZw3z1v2s5upo1_250.jpg"],

["film", ["Hugo", "Hugo Cabret"], "2011", ["2018 08 23"], 0, ["ger"], ["drama", "family"], [], [], ["Martin Scorsese"], ["Ben Kingsley", "Sacha Baron Cohen", "Asa Butterfield", "Chloë Grace Moretz", "Christopher Lee", "Richard Griffiths", "Jude Law"], "https://64.media.tumblr.com/8697c67783af5e886b37f5e332670143/0fee979f78900f65-86/s250x400/10de5824d7a8774bebc348d645daf703600d53b5.jpg"],
	        
["film", ["The Mortal Instruments: City of Bones", "Chroniken der Unterwelt - City of Bones"], "2013", [""], 6, ["ger"], ["action", "adventure"], [], [], ["Harald Zwart"], ["Lily Collins", "Jamie Campbell Bower", "Robert Sheehan", "Kevin Durand", "CCH Pounder", "Jared Harris"], "https://64.media.tumblr.com/f1289803c9b579bab2b48c1f4c1b5cf3/81dd404569d04bc1-f4/s250x400/a7ab51a6d7eadb6ae67119628b39be66f3ffee6a.jpg"],

["series", ["The Astronaut Wives Club"], "2015", [["2016 10 09", "", "S1E1- S1E5"]], 0, ["eng"], ["drama"], [], ["dropped"], ["Stephanie Savage"], [], "https://66.media.tumblr.com/fed4b9c511a0e8751101d05c44078579/tumblr_oes5tnCZHx1v2s5upo1_250.jpg"],
	        
["series", ["The Nine Lives of Chloe King"], "2011", [/*["2016 06", "", "S1 - "]*/""], 0, ["eng"], ["action", "adventure"], [], ["dropped"], ["Joe Lazarov", "Chris Grismer", "Guy Norman Bee"], ["Skyler Samuels", "Matthew Willig"], "https://68.media.tumblr.com/6f51fd4728bc74667dcf2365d018c711/tumblr_oov0p0FPBM1v2s5upo1_250.jpg"],
	        
["series", ["MythBusters", "MythBusters - Die Wissensjäger"], ["2003", "2018"], ["", ["2021 08 28", "S12E6,7,2"]], 6, ["ger"], ["documentary"], [], [], ["Peter Rees"], [], "https://68.media.tumblr.com/e0afaae383fed8ecc9e625444a06c618/tumblr_oov10gocsR1v2s5upo1_250.jpg"],
	        
["series", ["The Legend of Korra", "Die Legende von Korra"], "2012 - 2014", ["", ["2022 11 07", "2022 11 21", "S1"], ["2022 11 21", "2022 12 12", "S2"], ["2022 12 12", "2023 01 02", "S3"], ["2023 01 09", "2023 01 23", "S4"]], 5, ["ger"], ["animation", "action"], [], ["dropped", "Netflix"], ["Michael Dante DiMartino", "Bryan Konietzko"], [], "https://66.media.tumblr.com/0965a0c472ec082166ab735d1e2c9a17/tumblr_ofm9jr2WK81v2s5upo1_250.jpg"],

["film", ["The Green Hornet"], "2021", [""], 0, ["ger"], ["action", "comedy"], [], ["DVD"], ["Michel Gondry"], ["Seth Rogen", "Jay Chou", "Cameron Diaz", "Tom Wilkinson", "Christoph Waltz", "David Harbour", "Jamie Harris", "Lio Tipton"], "https://64.media.tumblr.com/91cc77b24afc5dc1177e1247d57c1d69/57f6525693893d37-13/s250x400/3a0995fe87b9dcb027b97a4f49382b828ff67302.jpg"],

["film", ["Night at the Museum", "Nachts im Museum"], "2006", ["", "2023 10 14"], 5, ["ger"], ["adventure", "comedy"], ["bini", "syl", "je"], ["Disney+"], ["Shawn Levy"], ["Ben Stiller", "Carla Gugino", "Bill Cobbs", "Jake Cherry", "Ricky Gervais", "Robin Williams", "Rami Malek", "Mizuo Peck", "Paul Rudd", "Owen Wilson"], "https://64.media.tumblr.com/e0b94add628c5eb57794d77f5925487e/dd6dc35460e3c916-36/s250x400/d8e469f2ebba13cc1a94d62e8ac0cea865df9966.jpg"],

["film", ["A Somewhat Gentle Man", "Ein Mann von Welt", "En ganske snill mann"], "2010", [""], 0, ["ger"], ["comedy", "crime"], ["je"], ["Kino"], ["Hans Petter Moland"], ["Stellan Skarsgård"], "https://64.media.tumblr.com/e9f5a9b9fff0b6cd67ab64c1cf8c4127/6b54742fbe6d3d10-15/s250x400/1d170dd1a9131f5d17297bf943fbf724c69bec44.jpg"],

["film", ["Kong: Skull Island"], "2017", [""], 0, ["ger"], ["action", "adventure"], [], [], ["Jordan Vogt-Roberts"], ["Tom Hiddleston", "Samuel L. Jackson", "Brie Larson", "John C. Reilly", "Tian Jing", "Thomas Mann"], "https://64.media.tumblr.com/072012244af671fbe2283a0ec2745cd9/80cfa34dd92e1131-0d/s250x400/035c6616660b53244044fa554b25b6ef9689815e.jpg"],

["film", ["Ender's Game", "Ender's Game - Das große Spiel"], "2013", [""], 0, ["ger"], ["action", "adventure"], [], [], ["Gavin Hood"], ["Asa Butterfield", "Harrison Ford", "Hailee Steinfeld", "Abigail Breslin", "Ben Kingsley", "Moises Arias"], "https://64.media.tumblr.com/f5c688d9b16e0664fabfa17be5f3abdb/2c9f411ded711288-5f/s250x400/42f0924115dcd3ef7f00d7922d008f96634b69e2.jpg"],
	        
["film", ["Sweeney Todd: The Demon Barber of Fleet Street", "Sweeney Todd"], "2007", [""], 0, ["ger"], ["drama", "horror"], [], [], ["Tim Burton"], ["Johnny Depp", "Helena Bonham Carter", "Alan Rickman", "Timothy Spall", "Sacha Baron Cohen", "Jamie Campbell Bower"], "https://64.media.tumblr.com/32d585f9e6367a84a6b9b86e202fcfd0/c53b446124a09dc7-41/s250x400/a39055d11f6c973160608eb1e0fea89fcc9a6e07.jpg"],
	        
["short", ["Piper"], "2016", [""], 5, [], ["animation"], [], [], ["Alan Barillaro"], [], "https://64.media.tumblr.com/1a4f6635294a1eeba556bebd6d2af559/1b5e5045af0a05c7-b6/s250x400/e2336b082f0edecbad520dc5453d8b71567d9a2a.jpg"],

["short", ["Unser Vater Markus Specht"], "2017", ["2017 12 28"], 1, ["ger"], [], [], [], ["Josef Boltz"], [], "https://66.media.tumblr.com/402dce37f1f0ad1cd5c8f4b4602a31e1/8c22b7b053542efe-27/s250x400/904c39bae710d34ddee4d2ad4ab53c7765ec616d.jpg"],

["film", ["When Marnie Was There", "Erinnerungen an Marnie", "Omoide no Marnie"], "2014", ["2015 05 16", "2015 12 18", "2016 05 22", "2020 05 30", "2022 06 04"], 8, ["ger"], ["mystery", "psychological", "anime"], ["bini", "nico", "jessie", "mai"], ["Ghibli", "Kino", "Netflix"], ["Hiromasa Yonebayashi"], [], "https://40.media.tumblr.com/f1e9673500d6bb13f2e9d51250bbe44b/tumblr_nznjljf6Mc1v2s5upo1_250.jpg"],

["film", ["The Wind Rises", "Wie der Wind sich hebt", "Kaze tachinu"], "2013", ["2014 07 22", "2016 10 03", "2018 06 05", "2022 02 26"], 8, ["ger", "jap"], ["drama", "historical", "romance", "anime", "war"], ["bini", "nico", "mai"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/52114f2eab008848e4cd72e12a31119d/tumblr_nznk3gE3mZ1v2s5upo1_250.jpg"],
	        
["film", ["My Neighbor Totoro", "Mein Nachbar Totoro", "Tonari no Totoro"], "1988", ["2014 12 22", "2016 11 12", "2021 06 26"], 6, ["ger"], ["adventure", "comedy", "fantasy", "supernatural", "anime"], ["bini", "nico", "mai", "syl"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://49.media.tumblr.com/f8bff8e14844d21b2747f92ca04d2069/tumblr_nznkefPLf91v2s5upo1_250.jpg"],
	        
["film", ["Kiki's Delivery Service", "Kikis kleiner Lieferservice", "Majo no takkyûbin"], "1989", ["2014 12 27", "2015 08 22", "2016 11 12", "2017 04 10", "2019 03 05", "2020 02 08", "2021 07 24"], 8, ["ger"], ["anime", "adventure", "drama", "fantasy", "supernatural"], ["bini", "mai"], ["Netflix", "Ghibli"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/0353a3e154f25023fcb174e18e6009c3/tumblr_nzo8vdVWgT1v2s5upo1_250.jpg"],

["film", ["Wolf Children", "Ame & Yuki - Die Wolfskinder", "Ookami kodomo no Ame to Yuki"], "2012", ["2014 12 29", "2015 08 01"], 6, ["ger"], ["fantasy", "slice of life", "anime", "supernatural"], ["bini", "nico"], [], ["Mamoru Hosoda"], [], "https://40.media.tumblr.com/23024810eaa823c153ea551c001316a1/tumblr_nzrl3cDpKW1v2s5upo1_250.jpg"],

["film", ["Children who Chase Lost Voices", "Die Reise nach Agartha", "Hoshi o ou kodomo"], "2011", ["2015 01 01"], 7, ["ger"], ["adventure", "fantasy", "romance", "anime", "supernatural"], ["bini"], [], ["Makoto Shinkai"], [], "https://37.media.tumblr.com/7717647ddc7f8cf7f8fa3a9b1bb6ddc5/tumblr_nzo8ybWoC91v2s5upo1_250.jpg"],
	        
["film", ["Summer Wars", "Summer Wars", "Samâ uôzu"], "2009", ["2015 02 01", "2015 06 14", "2015 12 08", "2016 09 13", "2017 06 05", "2017 08 01", "2019 09 28"], 10, ["eng", "ger"], ["anime", "adventure", "sci-fi", "comedy"], ["jenny", "sai", "nico", "bini"], ["Netflix", "fav"], ["Mamoru Hosoda"], [], "https://49.media.tumblr.com/2ef91628fe0cf3666f1d96f01d991ec2/tumblr_nzo92zrQyJ1v2s5upo1_250.jpg"],
	        
["film", ["Evangelion: 3.0 You Can (Not) Redo", "Evangelion: 3.0 You Can (Not) Redo", "Evangelion Shin Gekijôban: Kyu"], "2012", ["2015 02 07", "2015 12 29", "2021 09 13"], 4, ["ger"], ["action", "mecha", "sci-fi", "fantasy", "anime"], ["bini", "nico"], ["Evangelion"], ["Hideaki Anno"], [], "https://40.media.tumblr.com/c4861977cc5b73586035c35c35aa6a84/tumblr_nzo97zbRtJ1v2s5upo1_250.jpg"],
	        
["film", ["The Girl Who Leapt Through Time", "Das Mädchen, das durch die Zeit sprang", "Toki wo Kakeru Shoujo"], "2006", ["2015 03 21", "2015 06 13", "2016 09 14", "2018 09 22", "2020 09 10", "2022 05 21"], 10, ["ger", "jap"], ["adventure", "drama", "romance", "anime", "sci-fi", "supernatural"], ["bini", "nico", "mai"], ["DVD"], ["Mamoru Hosoda"], [], "https://49.media.tumblr.com/d972105e1178eb2706ce0640f892ce2a/tumblr_nzo9b6u9xp1v2s5upo1_250.jpg"],
	        
["film", ["Spirited Away", "Chihiros Reise ins Zauberland", "Sen to Chihiro no kamikakushi"], "2001", ["2015 03 21", "2017 01 14", "2018 07 27", "2021 01 16", "2022 01 29"], 7, ["ger"], ["adventure", "drama", "fantasy", "supernatural", "anime"], ["bini", "nico", "syl", "je", "mai"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/dddca9742f78242e54a915d5032dadb8/tumblr_nzo9e7W3zv1v2s5upo1_250.jpg"],

["film", ["The Cat Returns", "Das Königreich der Katzen", "Neko no ongaeshi"], "2002", ["2015 03 21", "2022 03 19"], 7, ["ger"], ["adventure", "drama", "supernatural", "fantasy", "anime"], ["bini", "nico", "mai"], ["Ghibli", "Netflix"], ["Hiroyuki Morita"], [], "https://40.media.tumblr.com/f437c65df4d8a4104bd7de30a74a79d7/tumblr_nzo9jc5SIf1v2s5upo1_r1_250.jpg"],
	        
["film", ["The Secret World of Arrietty", "Arrietty - Die wundersame Welt der Borger", "Kari-gurashi no Arietti"], "2010", ["2015 03 22", "2018 02 05", "2021 10 30"], 7, ["ger"], ["fantasy", "anime", "supernatural"], ["bini", "mai", "jani"], ["Ghibli", "Netflix"], ["Hiromasa Yonebayashi"], [], /*"https://40.media.tumblr.com/bbc33259d5fadd3dd45a64b94af0d0a2/tumblr_nzq20u75lY1v2s5upo1_250.jpg"*/ "https://64.media.tumblr.com/846b54eba437b790a6d41fa24e17f382/01c9e11d9cd1a0ab-8c/s250x400/41c8fd4a8956887903da723ccd9d2458783cace4.jpg"],
	        
["film", ["Castle in the Sky", "Das Schloss im Himmel", "Tenkuu no Shiro Laputa"], "1986", ["2015 03 22", "2015 08 24", "2016 04 15", "2016 09 30", "2017 11 11", "2018 12 28", "2021 05 08", "2022 10 07"], 9, ["ger", "jap"], ["adventure", "fantasy", "romance", "anime", "supernatural", "sci-fi"], ["bini", "nico", "mai", "syl", "je"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/5fc30a3c889881fd54c01f94cc600c6c/tumblr_nzq21ylFD21v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 1: The Time Bombed Skyscraper", "Detektiv Conan 1: Der tickende Wolkenkratzer", "Meitantei Conan 1: Tokei-jikake no matenrou"], "1997", ["2015 05 24"], 7, ["ger"], ["anime", "adventure", "comedy", "mystery", "police", "shounen"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://40.media.tumblr.com/6f621a6b3a3ccf6ebac81850ce4ec9e0/tumblr_o06rwc2RnN1v2s5upo1_250.jpg"],
	        
["film", ["Rock 'n' Roll Highschool"], "1979", ["2015 05 30"], 7, ["ger"], ["comedy", "music"], [], [], ["Allen Arkush", "Joe Dante"], [], "https://49.media.tumblr.com/0fd703677687acef7e505383ed6100f5/tumblr_nzq22qUlxe1v2s5upo1_250.jpg"],
	        
["film", ["Ongaku Shoujo"], "2015", ["2015 05 31"], 7, ["jap"], ["anime", "music"], ["bini"], [], ["Kenichi Ishigura"], [], "https://40.media.tumblr.com/a24461a431dac16d4777d417644c8d4a/tumblr_nzq2d62JNv1v2s5upo1_250.jpg"],
	        
["short", ["Aki no Kanade"], "2015", ["2015 05 31"], 8, ["jap"], ["music", "school", "slice of life", "anime"], [], [], ["Youhei Suzuki"], [], "https://40.media.tumblr.com/8efe3f15f247a9faa8fb870d7b5d4ea1/tumblr_nzq2dmhmI11v2s5upo1_250.jpg"],
	        
["film", ["Push"], "2009", ["2015 06 16", "2015 10 02", "2016 04 15", "2016 10 19", "2017 08 23", "2018 06 20", "2018 12 03", "2019 12 27", "2021 12 29", "2023 08 27"], 10, ["ger", "eng"], ["action", "sci-fi", "supernatural", "thriller"], ["bini"], ["fav", "bby", "DVD"], ["Paul McGuigan"], ["Dakota Fanning", "Chris Evans", "Corey Stoll", "Camilla Belle", "Nate Mooney", "Cliff Curtis", "Djimon Hounsou"], "https://49.media.tumblr.com/44b7c67f39a406c7e084609086802bb7/tumblr_nzq2e1Jocf1v2s5upo1_250.jpg"],
	        
["film", ["Shaun of the Dead"], "2004", ["2015 06 24", "2017 12 17", "2018 09 20"], 7, ["ger"], ["comedy", "horror"], ["lukas", "bini", "nico"], ["Blood and Ice Cream"], ["Edgar Wright"], ["Simon Pegg", "Bill Nighy", "Martin Freeman", "Nick Frost"], "https://49.media.tumblr.com/9f4ab1d647d50d031dd3a3ee5cd5d91d/tumblr_nzq2o2wMIN1v2s5upo1_250.jpg"],

["film", ["Submarine"], "2010", ["2015 06 24", "2015 09 24"], 8, ["ger"], ["comedy", "drama", "romance"], [], [], ["Richard Ayoade"], ["Noah Taylor"], "https://40.media.tumblr.com/7d0c3deba109f7639140c1156434d51a/tumblr_nzq2ojum4c1v2s5upo1_250.jpg"],
	        
["film", ["50/50", "50/50: Freunde fürs (Über)Leben"], "2011", ["2015 07 12"], 6, ["ger"], ["comedy", "drama"], [], [], ["Jonathan Levine"], ["Joseph Gordon-Levitt", "Seth Rogen", "Anna Kendrick", "Bryce Dallas Howard"], "https://40.media.tumblr.com/b0e652531c5a3953a573b8b41344a3ca/tumblr_nzq2qbuRr31v2s5upo1_250.jpg"],
	        
["film", ["Moonrise Kingdom"], "2012", ["2015 07 14", "2015 12 31", "2017 06 28"], 9, ["ger"], ["adventure", "comedy", "drama"], [], ["bby"], ["Wes Anderson"], ["Bruce Willis", "Bill Murray", "Frances McDormand", "Tilda Swinton", "Kara Hayward", "Jake Ryan"], "https://49.media.tumblr.com/fcfcc34b3812b98c7d186f946afd3b81/tumblr_nzq314u33r1v2s5upo1_250.jpg"],
	        
["film", ["Inside Llewyn Davis"], "2013", ["2015 07 16"], 5, ["ger"], ["drama", "music"], [], [], ["Joel Coen", "Ethan Coen"], ["Carey Mulligan", "Justin Timberlake", "Jake Ryan", "Adam Driver"], "https://40.media.tumblr.com/038fd2c392a204190449e3a371e5200c/tumblr_nzq31kt6AG1v2s5upo1_250.jpg"],
	        
["film", ["Tales from Earthsea", "Die Chroniken von Erdsee", "Gedo senki"], "2006", ["2015 07 19", "2021 11 27"], 5, ["ger"], ["adventure", "fantasy", "magic", "anime"], ["bini", "mai"], ["Ghibli", "Netflix"], ["Gorô Miyazaki"], [], "https://40.media.tumblr.com/561178e59629591bc8c5b8a5f2da5d16/tumblr_nzq32e8sT21v2s5upo1_250.jpg"],
	        
["film", ["The Secret Life of Walter Mitty", "Das erstaunliche Leben des Walter Mitty"], "2013", ["2015 07 20", "2015 12 05", "2020 05 08"], 10, ["ger"], ["adventure", "comedy", "drama"], [], ["Kino"], ["Ben Stiller"], ["Ben Stiller", "Kristen Wiig", "Ólafur Darri Ólafsson", "Adrian Martinez", "Kathryn Hahn", "Patton Oswalt"], "https://37.media.tumblr.com/010b794dc1548291f5c4dc21156153bb/tumblr_nzq3dqgJO81v2s5upo1_250.jpg"],
	        
["film", ["Hot Fuzz", "Hot Fuzz - Zwei abgewichste Profis"], "2007", ["2015 07 23", "2017 12 17"], 7, ["ger"], ["comedy", "action"], ["lukas"], ["Blood and Ice Cream"], ["Edgar Wright"], ["Simon Pegg", "Martin Freeman", "Bill Nighy", "Nick Frost"], "https://40.media.tumblr.com/beb889f85fafd83eeb8c1da42843e1e1/tumblr_nzq3e7k1lV1v2s5upo1_250.jpg"],
	        
["film", ["Adventureland"], "2009", ["2015 07 25"], 5, ["ger"], ["comedy", "drama", "romance"], [], [], ["Greg Mottola"], ["Jesse Eisenberg", "Kristen Wiig", "Kristen Stewart"], "https://40.media.tumblr.com/f725d47f73576dd8b4006228c6c36771/tumblr_nzq3eq10eq1v2s5upo1_250.jpg"],
	        
["film", ["Nim's Island", "Die Insel der Abenteuer"], "2008", ["2015 07 27", "2021 01 01"], 7, ["ger"], ["adventure", "comedy"], ["bini", "syl", "je"], ["Kino"], ["Jennifer Flackett", "Mark Levin"], ["Abigail Breslin", "Jodie Foster", "Gerard Butler", "Judi Dench"], "https://49.media.tumblr.com/d0a05c388d8628e6a74e45b67dd6680a/tumblr_nzrigiYpDm1v2s5upo1_250.jpg"],
	        
["film", ["The Incredibles", "Die Unglaublichen"], "2004", ["2015 07 29", "2018 10 01", "2021 12 12"], 8, ["ger"], ["animation", "adventure", "supernatural"], ["bini", "syl", "je"], ["Kino", "bby"], ["Brad Bird"], [], "https://49.media.tumblr.com/53c82380bc36735eb002f097151f9351/tumblr_nzrigzOaEW1v2s5upo1_250.jpg"],
	        
["film", ["A Perfect Getaway"], "2009", ["2015 07 30", "2016 04 12", "2016 07 02", "2020 10 01"], 10, ["ger"], ["drama", "mystery"], ["bini", "syl"], ["fav", "DVD"], ["David Twohy"], ["Steve Zahn", "Timothy Olyphant", "Milla Jovovich", "Kiele Sanchez", "Chris Hemsworth"], "https://40.media.tumblr.com/3f89fb73e6d5aad59eb9df373880e399/tumblr_nzrihekfQ71v2s5upo1_250.jpg"],
	        
["film", ["From Up on Poppy Hill", "Der Mohnblumenberg", "Kokuriko-zaka kara"], "2011", ["2015 08 03", "2016 10 16", "2018 02 05", "2020 06 07", "2022 01 15"], 7, ["ger"], ["historical", "romance", "school", "shoujo", "anime", "drama"], ["bini", "nico", "mai"], ["Netflix", "Ghibli"], ["Gorô Miyazaki"], [], "https://40.media.tumblr.com/788cd358bdf0f75292475a20f56598e9/tumblr_nzrl3vOfeI1v2s5upo1_250.jpg"],
	        
["film", ["Stardust", "Der Sternwanderer"], "2007", ["2015 08 04", "2018 01 05", "2020 01 11"], 8, ["ger"], ["adventure", "fantasy", "supernatural"], ["bini"], ["Netflix"], ["Matthew Vaughn"], ["David Kelly", "Ben Barnes", "Kate Magowan", "Michelle Pfeiffer", "Olivia Grant", "Henry Cavill"], "https://40.media.tumblr.com/ba6c7b3010ea06d6a0d7fa801acf7762/tumblr_nzrl4dRhTZ1v2s5upo1_250.jpg"],
	        
["film", ["Joe", "Joe - Die Rache ist sein"], "2013", ["2015 08 05"], 8, ["ger"], ["drama"], [], [], ["David Gordon Green"], ["Nicolas Cage"], "https://40.media.tumblr.com/3faca0156b89ffcbc8d181c7b48d373a/tumblr_nzt4vh86e61v2s5upo1_250.jpg"],
	        
["film", ["National Treasure: Book of Secrets", "Das Vermächtnis des geheimen Buches"], "2007", ["2015 08 06", "2017 07 01", "2019 04 21", ["2022 06 12", "2022 06 13"]], 7, ["ger"], ["action", "adventure", "mystery"], ["bini"], ["Disney+"], ["Jon Turteltaub"], ["Nicolas Cage", "Justin Bartha", "Diane Kruger", "Ed Harris", "Bruce Greenwood", "Ty Burrell", "Timothy V. Murphy"], "https://49.media.tumblr.com/5cc058eb90952375b9951efb094038b4/tumblr_nzt4vyVgnZ1v2s5upo1_250.jpg"],
	        
["film", ["Far Cry"], "2008", ["2015 08 07"], 2, ["ger"], ["action", "adventure", "sci-fi"], [], [], ["Uwe Boll"], ["Til Schweiger"], "https://40.media.tumblr.com/1d83eab289438010b087990fb76f1c65/tumblr_nzt4wfQvhj1v2s5upo1_250.jpg"],
	        
["film", ["National Treasure", "Das Vermächtnis der Tempelritter"], "2004", ["2015 08 08", "2022 04 10"], 7, ["ger"], ["action", "adventure", "mystery"], ["bini", "syl"], ["Disney+"], ["Jon Turteltaub"], ["Nicolas Cage", "Diane Kruger", "Justin Bartha", "Sean Bean", "Mark Pellegrino", "Christopher Plummer"], "https://40.media.tumblr.com/d5f1a3f558ffe2fa131bc3e6647f3b58/tumblr_nzt9ucKTJd1v2s5upo1_250.jpg"],
	        
["book", ["Cold Turkey"], "1994", [""], 5, ["ger"], [], [], ["Schule"], ["Angelika Mechtel"], [], "https://68.media.tumblr.com/249a138ced967735a049eec963d20726/tumblr_odcmepFwLd1v2s5upo2_r1_250.jpg"],
	        
["book", ["Kratzer im Lack"], "1981", [""], 4, ["ger"], [], [], ["Schule"], ["Mirjam Pressler"], [], "https://66.media.tumblr.com/dbdc0a665d157d32d94b54a3b20fd57c/tumblr_odcmukT2zg1v2s5upo2_r1_250.jpg"],
	        
["book", ["The Metamorphosis", "Die Verwandlung"], "1915", [""], 5, ["ger"], [], [], ["Schule"], ["Franz Kafka"], [], "https://66.media.tumblr.com/bd91c57058cf2997017d93e8c7322bd2/tumblr_odckvmnaeU1v2s5upo2_r1_250.jpg"],
	        
["book", ["Of Mice and Men", "Von Mäusen und Menschen"], "1937", [["2016 06 20", "2016 07 12"], ["2021 06 04", "2021 06 17"]], 8, ["ger"], [], [], [], ["John Steinbeck"], [], "https://66.media.tumblr.com/2c9eca143441603db2a66aeed3674496/tumblr_odcl9l8fY51v2s5upo2_r1_250.jpg"],
	        
["audiobook", ["At the Mountains of Madness", "Berge des Wahnsinns"], "1931", [["2016 08 22", "2016 09 08"], ["2018 01 04", "2018 02 04"], ["2022 07 31", "2022 08 01"]], 10, ["ger"], [], [], ["fav"], ["H. P. Lovecraft"], ["David Nathan"], "https://66.media.tumblr.com/d469a2f9e1a1e32f297e6265ece473fc/tumblr_odcjbtcCGk1v2s5upo2_r1_250.jpg"],
	        
["audiobook", ["Demian: The Story of Emil Sinclair's Youth", "Demian. Die Geschichte einer Jugend"], "1919", [["2016 09 09", "2016 09 12"]], 5, ["ger"], [], [], [], ["Hermann Hesse"], [], "https://66.media.tumblr.com/9647d80e3f06bf5feb58d879e3b623eb/tumblr_ode22dK9Oo1v2s5upo2_r1_250.jpg"],
	        
["audiobook", ["Looking for Alaska", "Eine wie Alaska"], "2005", [["2016 09 12", "2016 09 16"]], 7, ["ger"], [], [], [], ["John Green"], [], "https://68.media.tumblr.com/ee543e8a154af39a9258c6df78cc2d4c/tumblr_odlx5cwWOe1v2s5upo1_250.jpg"],
	        
["audiobook", ["Celephaïs"], "1922", ["2016 09 19"], 6, ["ger"], ["fantasy"], [], [], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/7666f41b058d65aee91b273c6b5e6ec8/tumblr_odt457nsAr1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Call of Cthulhu", "Cthulhus Ruf"], "1928", [["2016 09 21", "2016 09 26"]], 6, ["ger"], ["fantasy"], [], [], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/294ac87ce98a4fb3a337f6df3341c20b/tumblr_odvb85grfv1v2s5upo1_250.jpg"],
	        
["audiobook", ["Dagon"], "1917", ["2016 09 26"], 5, ["ger"], ["fantasy"], [], [], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/44009815342439f6e7d216014f12b4e0/tumblr_oe46cgYpqm1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Picture in the House", "Das Bild im Haus"], "1920", ["2016 09 27"], 5, ["ger"], ["fantasy"], [], [], ["H. P. Lovecraft"], [], "https://68.media.tumblr.com/d6555c0d87b329538ef14e04809b2be2/tumblr_oe69ngU1SH1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Thing on the Doorstep", "Das Ding auf der Schwelle"], "1937", ["2016 09 28"], 7, ["ger"], ["fantasy"], [], [], ["H. P. Lovecraft"], [], "https://68.media.tumblr.com/8d46136f55d1a69444e109cda8c6efe6/tumblr_oe8ei3X2ti1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Shunned House", "Das gemiedene Haus"], "1937", [["2016 09 30", "2016 10 06"]], 8, ["ger"], ["fantasy"], [], [], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/01f54cbd69c0413646ddaf3d76f52bb2/tumblr_oefacdqDfm1v2s5upo1_250.jpg"],
	        
["book", ["The Graduate", "Die Reifeprüfung"], "1963", [["2016 11 04", "2016 12 13"]], 6, ["eng"], [], [], ["Schule"], ["Charles Webb"], [], "https://68.media.tumblr.com/2457506f12d4adec0eaa746a736e07fa/tumblr_ogjs8v5opj1v2s5upo1_250.jpg"],
	        
["audiobook", ["Das dritte Auge"], "2005", ["2017 01 28"], 5, ["ger"], [], ["syl", "je"], [], ["Arne Dahl"], [], "https://68.media.tumblr.com/6272e2500d10000418c43f0aa2880dbd/tumblr_okl5ngbVlo1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Shadow Out of Time", "Der Schatten aus der Zeit"], "1936", [["2017 02 17", "2017 02 23"]], 8, ["ger"], ["fantasy", "horror", "sci-fi"], [], [], ["H. P. Lovecraft"], [], "https://68.media.tumblr.com/f8a3374e796bf5e4681ab0a24a21c242/tumblr_olj7aueht51v2s5upo1_250.jpg"],
	        
["audiobook", ["The Case of Charles Dexter Ward", "Der Fall Charles Dexter Ward"], "1927", [["2017 02 24", "2017 04 20"]], 8, ["ger"], ["horror"], [], [], ["H. P. Lovecraft"], [], "https://68.media.tumblr.com/d28982b2978853076dff99287bec69a1/tumblr_olx95w2aR41v2s5upo1_250.jpg"],
	        
["book", ["Emilia Galotti"], "1772", [["2017 03 05", "2017 03 28"]], 5, ["ger"], [], [], ["Schule"], ["Gotthold Ephraim Lessing"], [], "https://68.media.tumblr.com/2d19edad05322a3f69b3612158377530/tumblr_omeq0rY67J1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Hound", "Der Hund"], "1924", ["2017 04 21"], 8, ["ger"], ["horror"], [], [], ["H. P. Lovecraft"], [], "https://68.media.tumblr.com/43d9919316b38e63046c2b88cb830300/tumblr_oost6t5Kg61v2s5upo1_250.jpg"],
	        
["audiobook", ["The Festival", "Das Fest"], "1925", ["2017 04 22"], 6, ["ger"], ["horror"], [], [], ["H. P. Lovecraft"], [], "https://68.media.tumblr.com/c3360b84bf22b39ee22ec78b36dde285/tumblr_oovjuu36vK1v2s5upo1_250.jpg"],
	        
["audiobook", ["Little Zaches, Great Zinnober", "Klein Zaches, genannt Zinnober"], "1819", [["2017 05 24", "2017 05 29"]], 5, ["ger"], [], [], ["Schule"], ["E. T. A. Hoffmann"], [], "https://68.media.tumblr.com/2b31aa897eefd717a7861919fd436ec8/tumblr_oqu0yjJBZN1v2s5upo1_250.jpg"],
	        
["audiobook", ["Day by Day Armageddon", "Tagebuch der Apokalypse"], "2007", ["2017 06 15", ["2019 05 22", "2019 05 28"]], 8, ["ger"], [], [], [], ["J. L. Bourne"], [], "https://68.media.tumblr.com/299413fd5822a5338ef788dde2dfbd68/tumblr_os7wq5JYIy1v2s5upo1_250.jpg"],
	        
["audiobook", ["The Descendant", "Der Nachkomme"], "1938", ["2017 09 11"], 6, ["ger"], ["horror"], [], [], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/57e68d06acd4dcfea851a55c162db5c3/06c7babbf5ff3399-53/s250x400/84a0cee18894b9a1760ef5e75b6616a34844dfd6.jpg"],
	        
["audiobook", ["The Dunwich Horror", "Das Grauen von Dunwich"], "1928", [["2017 09 12", "2017 09 21"]], 9, ["ger"], ["horror"], [], [], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/8a2d3e161e5f8b1e0e7e95a9d014e55d/69b5c4b843be0983-b7/s250x400/0ae17f1ea300924ec0e935a5943e21565d60e9e3.jpg"],
	        
["book", ["Vor Sonnenaufgang"], "1889", ["2017 11 05"], 2, ["ger"], ["drama"], [], ["Schule"], ["Gerhart Hauptmann"], [], "https://66.media.tumblr.com/c3bb4ae9a6cd1dc5d4fff276c52cdc76/6df7fc9c5e397263-3b/s250x400/e7757befebb8f27b2a8fce39e1f8dd7f3ec2f972.jpg"],
	        
["audiobook", ["The Dark Tower: The Gunslinger", "Schwarz"], "1982", [["2018 02 26", "2018 10 02"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/cd533532026b69d3ff8ca584273d7d68/2ec5e66f425a8146-85/s250x400/6c08cba083c0aea7203b7422e90e52703650ea61.jpg"],
	        
["audiobook", ["The Dark Tower II: The Drawing of the Three", "Drei"], "1987", [["2018 10 04", "2018 10 24"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/801256303bcdc8eddf9dff781f450a8b/946f55a028c0b8d4-30/s250x400/89b703c80a8048d55c1c10c03ba2bf53be5d4375.jpg"],
	        
["audiobook", ["The Dark Tower III: The Waste Lands", "Tot"], "1991", [["2018 10 25", "2018 11 07"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/25d57c92ce054a19512b2ee6241063e0/fde37c420cda6bac-bc/s250x400/e57bcf1c9646ed886d6d488a861087fe515a18b2.jpg"],
	        
["audiobook", ["The Dark Tower IV: Wizard and Glass", "Glas"], "1997", [["2018 11 08", "2019 01 08"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/18dbaa0da46d8cc13990c4b7b0cf08f2/5822dfde88ae0125-a0/s250x400/13011c4c4e22ac34e765a990cb7b7ea766bab47f.jpg"],
	        
["audiobook", ["The Dark Tower V: Wolves of the Calla", "Wolfsmond"], "2003", [["2019 01 08", "2019 02 08"]], 9, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/551585122b75e138ec78d61c98f64a46/551c5f8a6ba3d0cf-4b/s250x400/efe1769f29df49b4d553cc0f8a61963aaeae1ca9.jpg"],
	        
["audiobook", ["The Dark Tower VI: Song of Susannah", "Susannah"], "2004", [["2019 02 11", "2019 03 07"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/3dca591d0fa3f5c5bbf6e366de1d0a20/89949ac203cca829-64/s250x400/50f4bfc15aef1ac16d4bc278bbd3a0d50ca8fb73.jpg"],
	        
["audiobook", ["The Dark Tower VII: The Dark Tower", "Der Turm"], "2004", [["2019 03 08", "2019 04 23"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/e9e07f22b3d85b8c27bbb293fc1bd2dd/d737ec1b78c54215-5a/s250x400/082e6d6c9c794ced28b69155db6cbb3c1daf9e80.jpg"],
	        
["audiobook", ["The Dark Tower: The Wind Through the Keyhole", "Wind"], "2012", [["2019 04 23", "2019 05 02"]], 0, ["ger"], [], [], ["Dark Tower"], ["Stephen King"], [], "https://66.media.tumblr.com/0c8eced9a1337968e8e547213931b483/b9148aecbc2d7ef0-40/s250x400/8e67222009461c17a365e412c5d4f21e53eead71.jpg"],
	        
["audiobook", ["Anne of Green Gables", "Anne auf Green Gables"], "1908", [["2019 05 03", "2019 05 10"]], 10, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/679d639b8b39436b1ad25e6245672092/d591ea85407c16e2-c0/s250x400/7a272d4c1fabda215d19b5e23e1b4702bdcce985.jpg"],
	        
["audiobook", ["Needful Things", "In einer kleinen Stadt"], "1991", [["2019 05 13", "2019 05 20"]], 0, ["ger"], [], [], ["dropped"], ["Stephen King"], [], "https://66.media.tumblr.com/5841ff354531eac535c0e9cae41d51cf/50f28ee209bd1926-72/s250x400/fa3a77ce0195953afa47d06f5ab465e724510e09.jpg"],
	        
["audiobook", ["Day by Day Armageddon: Beyond Exile", "Tagebuch der Apokalypse 2"], "2010", [["2019 06 03", "2019 06 12"]], 6, ["ger"], [], [], [], ["J. L. Bourne"], [], "https://66.media.tumblr.com/8c494e7feff7b46b1d6e9338dad01ed2/2377c8de205f15cd-41/s250x400/470f9a24ffe69b42f910ec1be58d44626717a165.jpg"],
	        
["audiobook", ["The Golden Compass", "Der Goldene Kompass"], "1995", [["2019 10 01", "2019 11 05"]], 8, ["ger"], [], [], ["His Dark Materials"], ["Philip Pullman"], [], "https://66.media.tumblr.com/b432a7f45cbb58a2a70a69b5f5426046/2dc3929cff47cfff-ca/s250x400/2f6a6fb41c2c2417285a733182cb4f1243b8256f.jpg"],
	        
["audiobook", ["The Subtle Knife", "Das Magische Messer"], "1997", [["2019 11 06", "2019 11 19"]], 9, ["eng"], [], [], ["His Dark Materials"], ["Philip Pullman"], [], "https://66.media.tumblr.com/0020d596377879b7a5f41ec561061bdf/17eb0eecfeb04300-8c/s250x400/7b328cd64feecab2b4bb061f3d2399e052b7b18a.jpg"],
	        
["audiobook", ["The Amber Spyglass", "Das Bernstein-Teleskop"], "2000", [["2019 11 20", "2020 01 02"]], 8, ["ger"], [], [], ["His Dark Materials"], ["Philip Pullman"], [], "https://66.media.tumblr.com/4db7b730ee17b939fc06d3281cd3ef98/31ac6656dc2ceebe-c0/s250x400/aa24d9a6d8bd5a824c315de9ec241451b0dcf0c4.jpg"],
	        
["audiobook", ["Stardust", "Sternwanderer"], "1997", [["2020 01 02", "2020 01 10"]], 8, ["ger"], ["fantasy"], [], [], ["Neil Gaiman"], [], "https://66.media.tumblr.com/89ea26539e874d0fd7e3b4ba1d751126/d084428b0567585c-f0/s250x400/1c9ed2eb813acd63c2f6ebd7ebbdb324552c3700.jpg"],
	        
["audiobook", ["The Wave", "Die Welle"], "1981", [["2020 01 13", "2020 01 16"]], 7, ["ger"], [], [], [], ["Todd Strasser"], [], "https://66.media.tumblr.com/7364a31adf585ba02dc50060dd22cc10/fbbf3b3cd6670c35-82/s250x400/2c21fe0b6bee44c86e54f3923a8f60cc00d3fe8f.jpg"],
	        
["film", ["Work It"], "2020", ["2020 08 24"], 6, ["ger"], ["comedy", "music"], [], ["Netflix"], ["Laura Terruso"], ["Liza Koshy", "Sabrina Carpenter", "Michelle Buteau", "Khiyla Aynne"], "https://64.media.tumblr.com/5f3091b1f3e687adf828702120cb4499/663c58ba70735ee3-ed/s250x400/424ad335d88e8a0ee456da0f69280490e5ca0904.jpg"],
	        
["film", ["A Whisker Away", "Um ein Schnurrhaar", "Nakitai watashi wa neko wo kaburu"], "2020", ["2020 08 24", "2021 07 17"], 6, ["ger"], ["anime", "adventure"], ["bini", "mai"], ["Netflix"], ["Jun'ichi Satô", "Tomotaka Shibayama"], [], "https://64.media.tumblr.com/3b8c3215d38b8b05c6eabb4e39bdbc9a/e399c74ab27ede07-ca/s250x400/a5c8c48d8664f303442d69e99d0e8fd36409f2a2.jpg"],
	        
["film", ["Leave No Trace"], "2018", ["2020 08 24"], 6, ["ger"], ["drama"], [], ["Netflix"], ["Debra Granik"], ["Thomasin McKenzie", "Ben Foster"], "https://64.media.tumblr.com/a5ca20a4e6af5ac50978c26d2246e5f5/e6ba7407a4bdb518-07/s250x400/01386c222c067d3bd67361fec6f7c2c86ea1e6ca.jpg"],
	        
["film", ["The Gambler"], "2014", ["2017 12 17", "2020 08 25"], 6, ["ger"], ["crime", "drama"], ["syl"], ["Netflix"], ["Rupert Wyatt"], ["Mark Wahlberg", "Brie Larson"], "https://64.media.tumblr.com/59cf82bb84efbd634c6c8761158b6bf2/583455e823677e36-a7/s250x400/af609f8d1fcea387763918adc60780bec89e5358.jpg"],
	        
["film", ["Little Women"], "2019", ["2020 08 25"], 7, ["ger"], ["drama", "romance"], ["syl"], ["Kino", "March-Trilogie"], ["Greta Gerwig"], ["Saoirse Ronan", "Emma Watson", "Florence Pugh", "Laura Dern", "Timothée Chalamet", "Bob Odenkirk", "Sasha Frolova", "Hadley Robinson", "Eliza Scanlen", "Ana Cruz Kayne"], "https://64.media.tumblr.com/e3f467bff2248eb7b30836a5e2ac65fb/396d88ffa1c90001-e5/s250x400/3de3c348f0a2305e3b8cc594f3accf60005f92c0.jpg"],
	        
["series", ["Love, Chunibyo & Other Delusions", "Trotz Chūnibyō will ich mich verlieben!", "Chuunibyou demo Koi ga Shitai!"], "2012", [["2016 04 30", "S1E1-S1E3"], ["2020 08 20", "2020 08 24", "S1"], ["2022 02 22", "2022 03 20", "S1"], ["2022 03 20", "Special"]], 7, ["jap", "ger"], ["slice of life", "comedy", "drama", "romance", "school", "anime"], ["bini", "nico"], ["Chuunibyou"], ["Katelyn Barr", "Jukki Hanada", "Lainee Hooks"], [], "https://64.media.tumblr.com/92552cbd930a297548aeee4c833a93ff/6482341bf7df8348-72/s250x400/3a40be7e25c20f7790af98846c3abf7db1c65cfa.jpg"],
	        
["book", ["Ein Fall für dich und das Tiger-Team: An der Knochenküste"], "2008", [["2020 08 28", "2020 09 04"]], 6, ["ger"], [], [], [], ["Thomas Brezina"], [], "https://64.media.tumblr.com/17c27a9ef3c235c996169de20ec663a6/4afe09f262fa464e-5a/s250x400/41b6a7112d4d1d57302dd3a02af320fe7262360c.jpg"],
	        
["film", ["Pirates of the Caribbean: At World's End", "Pirates of the Caribbean - Am Ende der Welt"], "2007", ["2016 03 22", "2020 09 01", "2021 10 03", ["2024 01 01", "2024 01 02"]], 8, ["ger"], ["action", "adventure", "fantasy"], [], ["Fluch der Karibik", "DVD", "Disney+"], ["Gore Verbinski"], ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Bill Nighy", "Martin Klebba", "Marshall Manesh", "Michelle Lee", "Stellan Skarsgård", "Geoffrey Rush", "Jack Davenport", "Kevin McNally"], "https://64.media.tumblr.com/e28a26238a9e44437d65a27aa6f1dfa8/ad861de3fc9e6317-02/s250x400/30e11ca933e0e1d3e3b73cafc7a8d4f95ceda302.jpg"],
	        
["series", ["Teenage Bounty Hunters"], "2020", [["2020 09 02", "2020 09 03", "S1"], ["2022 01 12", "2022 01 14", "S1"]], 7, ["ger"], ["comedy", "crime"], [], ["Netflix", "LGBT"], ["Kathleen Jordan"], ["Haroon Khan", "Eric Graise"], "https://64.media.tumblr.com/f2879b4e88027d2f63f435ddc839d51e/ced119bf04ce9ebd-8f/s250x400/2f89bd05f5171e617038649490aa3bb3dbfd5dc9.jpg"],
	        
["film", ["What Happened to Monday", "What Happened to Monday?"], "2017", ["2020 09 05"], 7, ["ger"], ["action", "adventure"], ["syl"], ["Netflix"], ["Tommy Wirkola"], ["Noomi Rapace", "Willem Dafoe", "Marwan Kenzari"], "https://64.media.tumblr.com/de05eee06fdc8769637827199fb24ed2/9d69a5cc9bdb41e7-62/s250x400/c6e9fb7e5eaa5d0b2a16460e5022e3e826863392.jpg"],
	        
["series", ["Lost"], ["2004", "2010"], [["2017 08 08", "2017 10 01", "S1-S6"], ["2019 02 15", "2019 07 01", "S1-S6"], ["2021 12 22", "2022 01 07", "S1"], ["2022 01 07", "2022 02 25", "S2"], ["2022 02 25", "2022 04 15", "S3"], ["2022 05 06", "2022 05 15", "S4"], ["2022 05 17", "2022 05 31", "S5"], ["2022 05 31", "2022 06 21", "S6"], ["2023 09 25", "2023 10 13", "S1 Audio"], ["2023 10 13", "2023 11 04", "S2 Audio"], ["2023 11 05", "", "S3 Audio"]], 10, ["ger"], ["adventure", "drama"], ["bini"], ["DVD", "fav", "watching"], ["J.J. Abrams", "Jeffrey Lieber", "Damon Lindelof"], ["Jorge Garcia", "Josh Holloway", "Yunjin Kim", "Evangeline Lilly", "Terry O'Quinn", "Naveen Andrews", "Matthew Fox", "Daniel Dae Kim", "Emilie de Ravin", "Michael Emerson", "Henry Ian Cusick", "Dominic Monaghan", "Elizabeth Mitchell", "Ken Leung", "Nestor Carbonell", "Maggie Grace", "Jeremy Davies", "Ian Somerhalder", "Michelle Rodriguez", "Cynthia Watros", "Rebecca Mader", "Sam Anderson", "Tania Raymonde", "John Terry", "Alan Dale", "William Mapother", "Kevin Durand", "Rodrigo Santoro", "Mark Pellegrino", "Jeff Fahey", "Andrea Gabriel", "Andrew Divoff", "Titus Welliver", "Fionnula Flanagan", "Kevin Tighe", "Samm Levine", "Hiroyuki Sanada", "Kevin Durand", "Julie Bowen", "François Chau", "M.C. Gainey", "Shaun Toub", "Brett Cullen", "Kim Dickens"], "https://68.media.tumblr.com/b5d291cc94cf3d575bdce3c73ab8b82a/tumblr_odg5nyKL9D1v2s5upo1_250.jpg"],
	        
["series", ["Avatar: The Last Airbender", "Avatar - Der Herr der Elemente"], ["2005", "2008"], [["2018 05 29", "2018 06 15", "S1-S3"], /*["2019 08 04", "2019 08 13", "S1-S3"]*/["2019 08 04", "2019 08 06", "S1"], ["2019 08 07", "2019 08 08", "S2"], ["2019 08 08", "2019 08 13", "S3"]], 10, ["ger"], ["animation", "action"], [], ["Netflix"], ["Michael Dante DiMartino", "Bryan Konietzko"], [], "https://66.media.tumblr.com/3de0da47230c294434b12590e405d438/tumblr_odg6dwq4Ib1v2s5upo1_250.jpg"],
	        
["series", ["Fillmore!"], ["2002", "2004"], [""], 7, ["ger"], ["action", "animation"], [], [], ["Scott M. Gimple"], [], "https://66.media.tumblr.com/0680c158ca4b17248fbd2e5c5d797290/tumblr_odg6ow0rlI1v2s5upo1_250.jpg"],
	        
["series", ["That '70s Show", "Die wilden 70er"], ["1998", "2006"], [""], 0, ["ger"], ["comedy", "romance"], [], ["dropped"], ["Mark Brazill", "Bonnie Turner", "Terry Turner"], ["Mila Kunis", "Laura Prepon", "Kurtwood Smith", "Samm Levine", "Nectar Rose"], "https://66.media.tumblr.com/84b3c69ca0af1edd1859dadf7cab4891/tumblr_oeu5lv9u611v2s5upo1_250.jpg"],
	        
["book", ["Night School"], "2012", [["2020 07 06", "2020 08 07"]], 7, ["eng"], ["young adult", "mystery", "romance"], [], ["Night School"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/cebea2f804aa63da452512cfcc5aedda/9aa3cc75dcd3ca59-28/s250x400/8064e892565da9e205bda114424dfd59e4a5dde0.jpg"],
	        
["audiobook", ["Endurance: Shackleton's Incredible Voyage"], "1959", [["2020 06 15", "2020 06 20"]], 7, ["eng"], [], [], [], ["Alfred Lansing"], [], "https://66.media.tumblr.com/b5df0d66dd388711a3457c388179528b/ed0904bc0d493248-ca/s250x400/badd02339b4c4a71f41c429cffa3a7b27d4c3ba3.jpg"],
	        
["audiobook", ["The Fault in Our Stars", "Das Schicksal ist ein mieser Verräter"], "2012", [["2020 06 11", "2020 06 15"]], 6, ["eng"], [], [], [], ["John Green"], [], "https://66.media.tumblr.com/39ba75a7b01954fcc20d319030ea40fe/85cedb8a8a2ae325-81/s250x400/b8f4f644b5f2e5e9c164e94ada878c0db4d3787f.jpg"],
	        
["film", ["Inglourious Basterds"], "2009", ["2015 11 15", "2017 07 18", "2020 09 07"], 8, ["ger"], ["adventure", "drama", "war"], [], ["Netflix"], ["Quentin Tarantino"], ["Brad Pitt", "Christoph Waltz", "Michael Fassbender", "Diane Kruger", "Daniel Brühl", "Til Schweiger", "August Diehl", "Arndt Schwering-Sohnrey", "Sebastian Hülk", "Samm Levine", "Jana Pallaske", "Martin Wuttke", "Gedeon Burkhard", "Mélanie Laurent"], "https://66.media.tumblr.com/ab8929345ac1ca2ddd4fbb4b4c5e17b3/tumblr_ppuwii750k1v2s5upo1_250.jpg"],
	        
["film", ["The Theory of Everything", "Die Entdeckung der Unendlichkeit"], "2014", ["2016 01 14", "2020 09 08"], 8, ["ger"], ["biography", "drama"], [], ["Netflix"], ["James Marsh"], ["Tom Prior", "Eddie Redmayne", "Felicity Jones", "Lucy Chappell"], "https://49.media.tumblr.com/14456fa07bb7d6cfa722c290f70507b7/tumblr_o103rxZoXN1v2s5upo1_250.jpg"],
	        
["film", ["Jurassic Park III"], "2001", ["2016 01 15"], 6, ["ger"], ["action", "adventure", "supernatural", "sci-fi"], ["bini"], ["Jurassic Park"], ["Joe Johnston"], ["Sam Neill", "Laura Dern"], "https://40.media.tumblr.com/44108748425d63232777ca718af0bafb/tumblr_o11raddsIz1v2s5upo1_250.jpg"],
	        
["film", ["A Girl Walks Home Alone at Night"], "2014", ["2016 01 16", "2016 01 23", "2016 10 20", "2018 02 16", "2020 04 13"], 9, ["eng", "ger"], ["drama", "horror"], ["bini"], ["fav", "bby"], ["Ana Lily Amirpour"], ["Sheila Vand", "Marshall Manesh"], "https://49.media.tumblr.com/7dd4f5f52754e21efb1093fb15dcbd34/tumblr_o11rky2LQA1v2s5upo1_250.jpg"],
	        
["film", ["The Fall"], "2006", ["2016 01 05"], 4, ["ger"], ["adventure", "drama"], [], [], ["Tarsem Singh"], [], "https://40.media.tumblr.com/0965f1cf108f29eb077042e443f17795/tumblr_o0jgx6WCAA1v2s5upo1_250.jpg"],
	        
["film", ["The Lost World: Jurassic Park", "Vergessene Welt: Jurassic Park"], "1997", ["2016 01 08", "2020 12 31"], 6, ["ger"], ["action", "adventure"], ["bini", "syl"], ["Jurassic Park"], ["Steven Spielberg"], ["Jeff Goldblum", "Pete Postlethwaite", "Vince Vaughn", "Julianne Moore"], "https://49.media.tumblr.com/a306e128099355cd16b0cfb6383206e6/tumblr_o0oqicb9Zm1v2s5upo1_250.jpg"],
	        
["film", ["Heathers"], "1989", ["2016 01 18"], 7, ["ger"], ["comedy", "crime", "drama"], [], [], ["Michael Lehmann"], ["Winona Ryder"], "https://49.media.tumblr.com/100a748a21b585157e4fdb11d5eb56a2/tumblr_o15y52Sy5G1v2s5upo1_250.jpg"],
	        
["series", ["Heidi, Girl of the Alps", "Heidi", "Arupusu no shôjo Haiji"], "1974", [["2020 06 12", "2020 08 04"]], 8, ["ger"], ["anime", "adventure"], ["bini"], ["Heidi", "DVD"], ["Isao Matsuki", "Mamoru Sasaki", "Johanna Spyri"], [], "https://64.media.tumblr.com/633d7ce92ce4fb252374925ca7c30dc0/1f5af48daf2e552d-44/s250x400/fd1a405b1be1a0ddc46325b3559f531059adee2a.jpg"],
	        
["series", ["I Am Not Okay with This"], "2020", [["2020 05 16", "S1"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Jonathan Entwistle", "Christy Hall"], ["Sophia Lillis", "Wyatt Oleff", "Sofia Bryant"], "https://66.media.tumblr.com/44b4f9bd825c20433e75d2209ac04b19/89ef296f3f805f90-d3/s250x400/c449eb2ffe2cf0c480fa743e9919be66ece79652.jpg"],
	        
["film", ["Now You See Me", "Die Unfassbaren - Now You See Me"], "2013", ["2020 07 21"], 7, ["ger"], ["crime", "mystery"], [], ["Netflix"], ["Louis Leterrier"], ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Dave Franco", "Morgan Freeman", "Michael Caine", "Conan O'Brien", "Isla Fisher", "Adam Shapiro", "Joe Chrest", "Stephanie Honoré", "Mélanie Laurent"], "https://64.media.tumblr.com/579eb50480441126196e34bf6cf51e27/ea53e3de429b80e0-27/s250x400/32999b74d6b72c25cac8cc7b0f245b9e4cb54d9e.jpg"],
	        
["film", ["Now You See Me 2", "Die Unfassbaren 2"], "2016", ["2020 07 22"], 6, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Jon M. Chu"], ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Dave Franco", "Daniel Radcliffe", "Lizzy Caplan", "Michael Caine", "Morgan Freeman", "Isla Fisher", "Jay Chou"], "https://64.media.tumblr.com/ee5451844e81b6cc0fb69e364ac75ab9/a63e0ea7c891ea49-d7/s250x400/0910a3c45b5ebd6630a04281f5ab6364ecccec5e.jpg"],
	        
["film", ["The Martian", "Der Marsianer: Rettet Mark Watney"], "2015", ["2016 07 07", "2019 10 21", "2020 05 17"], 8, ["ger"], ["adventure", "drama", "sci-fi"], [], ["Netflix", "Schule"], ["Ridley Scott"], ["Matt Damon", "Kristen Wiig", "Jeff Daniels", "Sean Bean", "Chiwetel Ejiofor", "Donald Glover", "Jessica Chastain", "Michael Peña", "Mackenzie Davis", "Sebastian Stan"], "https://66.media.tumblr.com/1df268dfeaac539844517e25e5c83fc7/tumblr_o9ydqujhi01v2s5upo1_250.jpg"],
	        
["film", ["Sing Street"], "2016", ["2016 06 28", "2016 10 24", "2018 05 04", "2022 02 19"], 9, ["ger"], ["comedy", "drama", "music"], ["syl", "je", "bini"], ["Kino", "DVD"], ["John Carney"], ["Lucy Boynton", "Aidan Gillen"], "https://68.media.tumblr.com/1327081731d4fd04cb8616747d4b355e/tumblr_o9hsr5EvO21v2s5upo1_250.jpg"],
	        
["audiobook", ["The Martian", "Der Marsianer"], "2011", [["2020 05 11", "2020 05 13"]], 8, ["ger"], ["sci-fi", "adventure", "drama"], [], [], ["Andy Weir"], [], "https://66.media.tumblr.com/c5cae2bb1ba141c4afb7597bd4d005c0/7bfe50ac60286d75-73/s250x400/f2a83950de8ab5804d8880081e016493c11adfae.jpg"],
	        
["audiobook", ["Harry Potter and the Philosopher's Stone", "Harry Potter und der Stein der Weisen"], "1997", [["2020 04 06", "2020 04 09"]], 6, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/64f165cb5e2e4c9d2e1bead3cfcd97a7/346e79630c860467-3b/s250x400/6eb5f3e57ef1e42074360b06f89021ce61c4d10c.jpg"],
	        
["audiobook", ["Harry Potter and the Chamber of Secrets", "Harry Potter und die Kammer des Schreckens"], "1998", [["2020 04 14", "2020 04 16"]], 8, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/e86674abc78e31b494c0eaa2e62cde5f/fa58b33070ccf734-3e/s250x400/f6c19f8c41fa2c37f5a15a6f09b53c7680524067.jpg"],
	        
["audiobook", ["Harry Potter and the Prisoner of Azkaban", "Harry Potter und der Gefangene von Askaban"], "1999", [["2020 04 16", "2020 04 20"]], 7, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/78fbdc3412e763a17de094424ce355e7/9862fefdfb24969d-49/s250x400/6c0a3289da29b8ba63c7df54d9ea48d8e6ae6cd8.jpg"],
	        
["audiobook", ["Harry Potter and the Goblet of Fire", "Harry Potter und der Feuerkelch"], "2000", [["2020 04 20", "2020 04 28"]], 8, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/98513d3fa323b1e7173bc6cf0084c141/647f7d9154339e1c-35/s250x400/9443bafcfec3da25fb6ea229572e1153aa4de7a6.jpg"],
	        
["audiobook", ["Harry Potter and the Order of the Phoenix", "Harry Potter und der Orden des Phönix"], "2003", [["2020 04 28", "2020 05 15"]], 7, ["ger"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/b7a65bfb1d5dc1f44303c244a35ea738/67abaad83c1f411b-15/s250x400/30116d554837ac504bc72be30ea922ce5f2423fd.jpg"],
	        
["audiobook", ["Harry Potter and the Half-Blood Prince", "Harry Potter und der Halbblutprinz"], "2005", [["2020 05 15", "2020 05 27"]], 6, ["ger"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/7c88e1423dbcad32c0138ec5e5ea4213/4c8bf75d1a62570c-6f/s250x400/f6efb9f2a2500cfece817aad5d4416c016ae3809.jpg"],
	        
["audiobook", ["Harry Potter and the Deathly Hallows", "Harry Potter und die Heiligtümer des Todes"], "2007", [["2020 05 27", "2020 06 08"]], 8, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/d4bd058969e0a06d883977fa863b3f4a/cd592c8a6bab77fb-94/s250x400/c3eeefce6afd279a5943cb589771aaf4cc2acdda.jpg"],
	        
["film", ["Harry Potter and the Philosopher's Stone", "Harry Potter und der Stein der Weisen"], "2001", ["2015 08 28", "2017 08 02", "2020 04 05"], 6, ["ger"], ["adventure", "family", "fantasy"], ["bini"], ["Harry Potter"], ["Chris Columbus"], ["Robbie Coltrane", "Daniel Radcliffe", "Fiona Shaw", "Harry Melling", "Bonnie Wright", "Rupert Grint", "Emma Watson", "Matthew Lewis", "Tom Felton", "David Bradley", "Richard Griffiths", "Alan Rickman"], "https://40.media.tumblr.com/af5141e46638c0b31f53e4f799903f74/tumblr_o0owmoz4Al1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Chamber of Secrets", "Harry Potter und die Kammer des Schreckens"], "2002", ["2015 09 11", "2017 08 04", "2020 04 10"], 8, ["ger"], ["adventure", "family", "fantasy"], [], ["Harry Potter"], ["Chris Columbus"], ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Fiona Shaw", "Harry Melling", "Toby Jones", "Bonnie Wright", "Tom Felton", "Matthew Lewis", "David Bradley", "Richard Griffiths", "Alan Rickman"], "https://49.media.tumblr.com/5e740d07e42297613a9195a341579b76/tumblr_o0sv2mr1Jk1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Prisoner of Azkaban", "Harry Potter und der Gefangene von Askaban"], "2004", ["2015 10 10", "2020 04 11"], 8, ["ger"], ["adventure", "family", "fantasy"], [], ["Harry Potter"], ["Alfonso Cuarón"], ["Daniel Radcliffe", "Fiona Shaw", "Harry Melling", "Rupert Grint", "Emma Watson", "Bonnie Wright", "David Bradley", "Matthew Lewis", "Tom Felton", "Timothy Spall", "David Thewlis", "Richard Griffiths", "Alan Rickman"], "https://66.media.tumblr.com/ccc4f0131595f22c3f74355a0ca536d4/tumblr_ppxzmkT5Vj1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Goblet of Fire", "Harry Potter und der Feuerkelch"], "2005", ["2015 10 15", "2017 08 06", "2020 04 19"], 7, ["ger"], ["adventure", "family", "fantasy"], ["bini", "syl"], ["Harry Potter"], ["Mike Newell"], ["David Tennant", "Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Bonnie Wright", "Robert Pattinson", "Tom Felton", "Matthew Lewis", "David Bradley", "Timothy Spall", "Alan Rickman", "Ralph Fiennes"], "https://66.media.tumblr.com/914b2ae8eeaf9f949494cc727b8cd1b3/tumblr_ppxzshcSUS1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Order of the Phoenix", "Harry Potter und der Orden des Phönix"], "2007", ["2015 10 18", "2017 08 08", "2020 05 04"], 8, ["ger"], ["action", "adventure", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Robert Pattinson", "Emma Watson", "Rupert Grint", "Bonnie Wright", "Tom Felton", "Matthew Lewis", "David Bradley", "Helena Bonham Carter", "Daniel Radcliffe", "Harry Melling", "Fiona Shaw", "Evanna Lynch", "Timothy Spall", "David Thewlis", "Richard Griffiths", "Alan Rickman", "Ralph Fiennes"], "https://66.media.tumblr.com/8aa503970211b4b13fd18eed66ac70b1/tumblr_pvntch53YQ1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Half-Blood Prince", "Harry Potter und der Halbblutprinz"], "2009", ["2015 10 21", "2020 05 16"], 7, ["ger"], ["action", "adventure", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Daniel Radcliffe", "Bonnie Wright", "Rupert Grint", "Emma Watson", "Helena Bonham Carter", "Tom Felton", "David Bradley", "Matthew Lewis", "Evanna Lynch", "Timothy Spall", "David Thewlis", "Jim Broadbent", "Anna Shaffer", "Alan Rickman"], "https://66.media.tumblr.com/0d1ae9d827f91b1c56e4ce9aa3e56463/tumblr_pwf7x3nXGP1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Deathly Hallows: Part 1", "Harry Potter und die Heiligtümer des Todes - Teil 1"], "2010", ["2015 10 22", "2020 06 21"], 8, ["ger"], ["adventure", "family", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Bill Nighy", "Emma Watson", "Harry Melling", "Daniel Radcliffe", "Bonnie Wright", "Rupert Grint", "Fiona Shaw", "Helena Bonham Carter", "Tom Felton", "Evanna Lynch", "Matthew Lewis", "Timothy Spall", "David Thewlis", "Domhnall Gleeson", "Ciarán Hinds", "Anna Shaffer", "Jamie Campbell Bower", "Alan Rickman", "Ralph Fiennes"], "https://66.media.tumblr.com/0d3ca130fc2bb52f85b0fbb124e53a08/tumblr_pwf7zg59X81v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Deathly Hallows: Part 2", "Harry Potter und die Heiligtümer des Todes - Teil 2"], "2011", ["2015 10 27"], 8, ["ger"], ["adventure", "drama", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Evanna Lynch", "Helena Bonham Carter", "Tom Felton", "Matthew Lewis", "Bonnie Wright", "David Bradley", "Timothy Spall", "David Thewlis", "Richard Griffiths", "Domhnall Gleeson", "Jim Broadbent", "Bertie Gilbert", "Anna Shaffer", "Alan Rickman", "Ralph Fiennes"], "https://66.media.tumblr.com/65fb7bf305be439f86267538404cf805/tumblr_pwko808afN1v2s5upo1_250.jpg"],
	        
["film", ["Up", "Oben"], "2009", ["2018 09 02"], 6, ["ger"], ["animation", "adventure"], ["syl"], [], ["Pete Docter", "Bob Peterson"], [], "https://66.media.tumblr.com/b9a91f5e56a47e9548d83ba23197594e/a4d1b298889a6619-5c/s250x400/3ca8114b46862cafb0c42443333f7f9fb0b5965f.jpg"],
	        
["film", ["Porco Rosso", "Porco Rosso", "Kurenai no buta"], "1992", ["2018 08 24", "2021 12 11"], 7, ["ger"], ["anime", "adventure", "action", "comedy", "drama", "historical", "military", "romance"], ["bini", "mai"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://66.media.tumblr.com/6b7d41d98f247b2d0f68424994f47a73/8011242748b7c88b-db/s250x400/28631996e515c7b6508891587ce5d9e8cc7d2540.jpg"],
	        
["film", ["Mary and the Witch's Flower", "Mary und die Blume der Hexen"], "2017", ["2018 09 16", "2020 05 30"], 7, ["ger"], ["anime", "adventure", "fantasy", "magic"], ["jessie", "bini"], ["Kino"], ["Hiromasa Yonebayashi", "Giles New"], [], "https://66.media.tumblr.com/488bb63b833cdae503b4808199fb2793/056621b7d0317fd8-e3/s250x400/681e38786b8a993803ed50b8c2bd8ede83b50443.jpg"],
	        
["film", ["Incredibles 2", "Die Unglaublichen 2"], "2018", ["2018 10 03", "2021 12 12"], 9, ["ger"], ["animation", "action"], ["bini", "syl", "je"], ["Kino", "Disney+"], ["Brad Bird"], [], "https://66.media.tumblr.com/f53783d0216f90049e0d16e21bceb5c3/ab6fe84773d9f443-3e/s250x400/7dd8c0b91e691270c3ccfea386f1be575d81ad4e.jpg"],
	        
["film", ["Moana", "Vaiana - Das Paradies hat einen Haken"], "2016", ["2019 01 12"], 7, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Ron Clements", "John Musker", "Don Hall"], [], "https://66.media.tumblr.com/a02e2a8ed04dc229ec61995a4802d3e4/ba5b0a9895db30ce-bf/s250x400/054cbd04c4fa1743f964303f83ae279c0b546143.jpg"],
	        
["audiobook", ["Anne of Avonlea", "Anne in Avonlea"], "1909", [["2020 02 02", "2020 02 05"]], 8, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/541c459bbee026004c174ba3426322bc/c80eb27a46f7c867-cf/s250x400/ba718acb6fae50237689168e20bdcb230f085d97.jpg"],
	        
["audiobook", ["Anne of the Island", "Anne in Kingsport"], "1915", [["2020 02 05", "2020 02 08"]], 7, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/af044ff0799cb8c3d49ee463c2309b9c/dab999156a16b84b-f4/s250x400/dcd81ad5a92b2b6a0e00f45b910b869cb0e65391.jpg"],
	        
["audiobook", ["Anne of Windy Willows", "Anne in Windy Willows"], "1936", [["2020 02 09", "2020 02 13"]], 6, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/1ed1f46af2f8a7f7ef68a0353c189755/ccf1b183b753ce5d-84/s250x400/cf29c12e2ac281b31f0b403389cae5045ac946ac.jpg"],
	        
["audiobook", ["Anne's House of Dreams", "Anne in Four Winds"], "1917", [["2020 02 13", "2020 02 18"]], 8, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], ["Sibella Denton"], "https://66.media.tumblr.com/3163ed2f582a938e54439bf5f2b64186/bc0dd6887965e7b3-a1/s250x400/ccc775cb9cfc86901c55ae63f27e0a97b95f898b.jpg"],
	        
["audiobook", ["Anne of Ingleside", "Anne in Ingleside"], "1939", [["2020 02 18", "2020 02 24"]], 6, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/bd065f2950e1bf733067859b11fbb12c/f8a410a953867e0e-1b/s250x400/c3f04db4681d0b468b3abd8ff024d392de885764.jpg"],
	        
["audiobook", ["Rainbow Valley", "Anne im Rainbow Valley"], "1919", [["2020 02 24", "2020 02 26"]], 7, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/e34cda1241e11def480e4dbaebc6f02e/a7ff05d68242607e-6f/s250x400/df03bd39c15598a537da4781644f3b71ae5e7dfb.jpg"],
	        
["audiobook", ["Rilla of Ingleside", "Anne und Rilla: Der Weg ins Glück"], "1921", [["2020 02 26", "2020 03 04"]], 10, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/17a64fbe793045b6c03328a1e0a7c5c2/8c5979514c8acded-c9/s250x400/8180a4469ae1d944ae2a7bcb2025783b1ab2de6d.jpg"],
	        
["audiobook", ["Chronicles of Avonlea", "Geschichten aus Avonlea"], "1912", [["2020 03 04", "2020 03 10"]], 6, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], ["Sibella Denton"], "https://66.media.tumblr.com/59ff89aeb07e919fc39660590ac15116/5367de076266db9e-ea/s250x400/c5d4e832c16b00db5ff572d4d1437181be1fc537.jpg"],
	        
["audiobook", ["Further Chronicles of Avonlea", "Neues aus Avonlea"], "1920", [["2020 03 10", "2020 03 13"]], 5, ["eng"], [], [], ["Anne", "LibriVox"], ["Lucy Maud Montgomery"], ["Sibella Denton"], "https://66.media.tumblr.com/24f21cd324fdeb60c36031ba459ce97f/e3168d1a30fd8e3a-33/s250x400/9c36845f76f76ed789c6e6c7626df9ff0b1a8dc2.jpg"],
	        
["audiobook", ["Howl's Moving Castle", "Sophie im Schloss des Zauberers"], "1986", [["2020 01 16", "2020 01 24"]], 7, ["eng"], ["fantasy"], [], [], ["Diana Wynne Jones"], [], "https://66.media.tumblr.com/c45dcacd614a17a14bf864b54eed715f/53f4483e0c763ded-2a/s250x400/278c71476a2ec8ec9629a6df32d9706fd9be4c35.jpg"],
	        
["film", ["Project Power"], "2020", ["2020 08 21"], 7, ["ger"], ["action", "crime"], [], ["Netflix"], ["Henry Joost", "Ariel Schulman"], ["Jamie Foxx", "Joseph Gordon-Levitt", "Rodrigo Santoro", "Casey Neistat", "Dominique Fishback"], "https://64.media.tumblr.com/839621d06e31e60f3dacd6df4aaa4ea0/5a4a32d998cfdaa5-95/s250x400/981dbde98d53aed73a0bd155e73e347a388478f6.jpg"],
	        
["film", ["Nerve"], "2016", ["2017 01 23"], 6, ["ger"], ["adventure", "crime"], [], [], ["Henry Joost", "Ariel Schulman"], ["Emma Roberts", "Dave Franco", "Samira Wiley", "Casey Neistat", "Miles Heizer"], "https://68.media.tumblr.com/df54a4ed23cbe1738a7c346bfa8e4782/tumblr_okc8orMOiT1v2s5upo1_250.jpg"],
	        
["film", ["Jurassic World"], "2015", ["2017 01 24", "2019 04 27"], 7, ["ger"], ["action", "adventure", "sci-fi"], ["bini"], ["Jurassic Park"], ["Colin Trevorrow"], ["Chris Pratt", "Vincent D'Onofrio", "Jake Johnson", "Omar Sy", "Judy Greer", "BD Wong", "Nick Robinson", "Irrfan Khan", "Katie McGrath", "Bryce Dallas Howard", "Lauren Lapkus"], "https://68.media.tumblr.com/192dd7ebda074ade64f0bc5b5aceb29e/tumblr_okjlsiKiZK1v2s5upo1_250.jpg"],
	        
["film", ["Once"], "2007", ["2017 01 30", "2022 08 19"], 8, ["ger"], ["drama", "music", "romance"], ["syl"], ["DVD"], ["John Carney"], [], "https://68.media.tumblr.com/1ceaa86559b1a5833900a857847214f0/tumblr_oklwsdRnuh1v2s5upo1_250.jpg"],
	        
["film", ["Girl Asleep"], "2015", ["2017 02 24"], 6, ["ger"], ["comedy", "family"], [], [], ["Rosemary Myers"], ["Bethany Whitmore"], "https://68.media.tumblr.com/afbb7c94ecd96d7835c0d9f8b84f1b4b/tumblr_om8zdtE3ON1v2s5upo1_250.jpg"],
	        
["film", ["Gran Torino"], "2009", ["2015 08 12", "2016 06 26"], 10, ["ger"], ["drama"], ["bini"], [], ["Clint Eastwood"], ["Clint Eastwood", "Dreama Walker"], "https://49.media.tumblr.com/d4ce9304acfc345d741c221c83eee477/tumblr_nztmnvyAlL1v2s5upo1_250.jpg"],
	        
["film", ["Lord of War", "Lord of War - Händler des Todes"], "2005", ["2015 08 23"], 7, ["ger"], ["action", "crime"], ["bini"], [], ["Andrew Niccol"], ["Nicolas Cage"], "https://40.media.tumblr.com/a72f4c5c01427f40efcfeb25513562c8/tumblr_o0dudgW3l41v2s5upo1_250.jpg"],
	        
["film", ["Rage", "Tokarev – Die Vergangenheit stirbt niemals"], "2014", ["2015 08 13", "2015 10 26"], 9, ["ger"], ["action", "crime"], ["bini"], [], ["Paco Cabezas"], ["Nicolas Cage"], "https://40.media.tumblr.com/1499feec57bd41adad70e3d63ceca4bb/tumblr_o0c9nmHtJ91v2s5upo1_250.jpg"],
	        
["film", ["Knowing", "Know1ng - Die Zukunft endet jetzt"], "2009", ["2016 03 06"], 7, ["ger"], ["action", "drama"], [], [], ["Alex Proyas"], ["Nicolas Cage"], "https://49.media.tumblr.com/032600b0c9befc1c95999569de5d941d/tumblr_o3u55x8Zzt1v2s5upo1_250.jpg"],
	        
["film", ["Next"], "2007", ["2016 06 03"], 6, ["ger"], ["action", "sci-fi"], [], [], ["Lee Tamahori"], ["Nicolas Cage", "Julianne Moore"], "https://66.media.tumblr.com/34f51670d16d5eb4dc2cb159cc70d2ec/tumblr_o88xd1Ndzz1v2s5upo1_250.jpg"],
	        
["film", ["Snowden"], "2016", ["2016 11 29", "2019 09 07"], 7, ["ger"], ["biography", "crime"], ["syl"], ["Kino"], ["Oliver Stone"], ["Joseph Gordon-Levitt", "Nicolas Cage", "Timothy Olyphant", "Tom Wilkinson", "Scott Eastwood"], "https://66.media.tumblr.com/b37aa4091b390785cdb5639a3361f65e/tumblr_ohf6nbgGlW1v2s5upo1_250.jpg"],
	        
["film", ["The Walk"], "2015", ["2017 10 26"], 7, ["ger"], ["adventure", "biography"], [], ["Netflix"], ["Robert Zemeckis"], ["Joseph Gordon-Levitt", "Ben Kingsley", "Charlotte Le Bon"], "https://66.media.tumblr.com/764d97b4a28744ce992be1ba95d22d9a/tumblr_py7vpvHz8R1v2s5upo1_250.jpg"],
	        
["film", ["The Perks of Being a Wallflower", "Vielleicht lieber morgen"], "2012", ["2017 11 22"], 9, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Stephen Chbosky"], ["Johnny Simmons", "Emma Watson", "Joan Cusack", "Kate Walsh", "Logan Lerman", "Mae Whitman", "Paul Rudd", "Nina Dobrev"], "https://66.media.tumblr.com/993796638f9b7c93316a8a993ca05ccf/tumblr_pyefmgAgvd1v2s5upo1_250.jpg"],
	        
["series", ["The Weekenders", "Disneys Wochenend-Kids"], ["2000", "2004"], ["2015 05 27", "2016 10 20"], 9, ["ger"], ["animation", "comedy"], [], [], ["Doug Langdale"], [], "https://66.media.tumblr.com/1e12113b066f40e5123afb60d500a3a5/tumblr_of327bfUJf1v2s5upo1_r2_250.jpg"],
	        
["series", ["Kim Possible"], ["2002", "2007"], [["2016 10 22", "2016 11 06"]], 10, ["ger"], ["animation", "action", "comedy"], [], [], ["Mark McCorkle", "Bob Schooley"], [], "https://66.media.tumblr.com/6683ccbc9909e6c1a4fe409cb47c7b98/tumblr_ofm7qqD87l1v2s5upo1_250.jpg"],
	        
["series", ["Westworld"], ["2016", ""], [["2016 11 05", "2016 12 30", "S1"], ["2022 06 22", "2022 06 28", "S1"], ["2022 06 29", "2022 07 10", "S2"], ["2022 07 21", "2022 08 08", "S3"]], 6, ["eng", "ger"], ["drama", "mystery", "sci-fi"], [], ["ongoing", "bibliothek"], ["Lisa Joy", "Jonathan Nolan"], ["Ed Harris", "James Marsden", "Anthony Hopkins", "Rodrigo Santoro", "Talulah Riley", "Hiroyuki Sanada", "Zahn McClarnon", "Lena Waithe", "Ben Barnes", "Booboo Stewart", "Jeffrey Wright", "Luke Hemsworth", "Angela Sarafyan", "Aaron Paul", "Ariana DeBose", "Phoebe Tonkin", "Eddie Shin", "Leonardo Nam", "Thandiwe Newton"], "https://66.media.tumblr.com/09f5995b48f9e6a1bccc4abf37de4f73/tumblr_og5z0kJktJ1v2s5upo1_250.jpg"],
/*S1: 10, S1: 7.4, S2: 6.9, S3: 5*/	        
["series", ["Limitless"], ["2015", "2016"], [["2017 01 04", "2017 03 19", "S1"], ["2019 01 04", "2019 01 09", "S1"]], 8, ["ger"], ["comedy", "crime", "sci-fi"], ["syl"], ["Netflix"], ["Craig Sweeny"], ["Bradley Cooper", "Lio Tipton", "Jake McDorman"], "https://68.media.tumblr.com/4fba47babc7bea678547165f35723ba2/tumblr_on22pnO7ao1v2s5upo1_250.jpg"],
	        
["series", ["Attack on Titan", "Attack on Titan", "Shingeki no kyojin"], "2013", [["", "2014 12 25", "S1E1-S1E3"], ["2017 06 18", "S2"]], 7, ["jap"], ["anime", "action"], ["bini", "nico"], ["Attack on Titan"], ["Hajime Isayama", "Yasuko Kobayashi", "Hiroshi Seko"], [], "https://66.media.tumblr.com/83d37f42ada8c1406d9365e30cb566c0/bda8d962eea2ca43-78/s250x400/bd3432e2c98813f8bdd15fa4f38ebe7248acfa18.jpg"],
	        
["series", ["Mind Field"], "2017", [["2017 07 21", "2017 07 22", "S1 - S2"], ["2019 10 09", "S3"]], 10, ["eng"], ["documentary"], [], [], ["Andy Wood", "Michael Stevens"], ["Michael Stevens", "Trin Miller"], "https://66.media.tumblr.com/ef8f3173576f3583f44f212977fe2b72/b890db991dd36500-46/s250x400/2c9befd9d5126d96102729603801f56d95f82feb.jpg"],
	        
["series", ["Stranger Things"], "2016", [["2017 09 30", "2017 10 01", "S1"], ["2017 10 28", "2017 10 29", "S2"], ["2019 07 05", "2019 07 09", "S3"]], 8, ["ger"], ["drama", "fantasy", "horror", "mystery", "thriller", "sci-fi"], ["bini"], ["Netflix"], ["Matt Duffer", "Ross Duffer"], ["Winona Ryder", "David Harbour", "Millie Bobby Brown", "Sean Astin", "Joe Chrest", "Jamie Campbell Bower", "Maya Hawke"], "https://66.media.tumblr.com/c8b627f6c4e359d3e447107df3fbf426/67ddec5eb9eb235d-ed/s250x400/d663062da2fa7916f4f53c57f65e0a4898097490.jpg"],
	        
["series", ["13 Reasons Why", "Tote Mädchen lügen nicht"], ["2017", "2020"], [["2017 10 02", "2017 10 09", "S1"], ["2019 08 31", "2019 09 08", "S2"], ["2019 09 08", "2019 09 13", "S3"]/*["2019 08 31", "2019 09 13", "S2 - S3"]*/], 8, ["ger"], ["drama", "mystery"], ["bini"], ["Netflix"], ["Brian Yorkey"], ["Dylan Minnette", "Katherine Langford", "Kate Walsh", "Mark Pellegrino", "Andrew McCarthy", "Tyler Barnhardt", "Alisha Boe", "Timothy Granaderos", "Gary Sinise"], "https://66.media.tumblr.com/66c23a646b8a91e06b604ad64e8bef29/a0d7e77933f70105-ea/s250x400/235e7b223e4fdf3bbc91a3392990eabfa3d4e25b.jpg"],
	        
["series", ["The Gay and Wondrous Life of Caleb Gallo"], "2016", [["2017 11 13", "S1"]], 9, ["eng"], ["comedy"], [], ["LGBT"], ["Brian Jordan Alvarez"], ["Stephanie Koenig"], "https://66.media.tumblr.com/97c1954bda4e7b0b57b0319e5e81122b/2f29f380c419c57b-6e/s250x400/699fdf7706dedfa3e63fc76ba474408ea3e3fd06.jpg"],
	        
["series", ["Sense8"], ["2015", "2018"], [["2017 11 22", "2017 12 06", "S1"], ["2021 12 08", "2018 01 08", "S2E1-E11"], ["2018 06 20", "S2E12"]], 10, ["ger"], ["drama", "mystery", "sci-fi"], [], ["Netflix", "LGBT"], ["J. Michael Straczynski", "Lana Wachowski", "Lilly Wachowski"], ["Doona Bae", "Jamie Clayton", "Tina Desai", "Tuppence Middleton", "Miguel Ángel Silvestre", "Brian J. Smith", "Naveen Andrews", "Lucas Jade Zumann", "Adam Shapiro", "Max Riemelt", "Daryl Hannah", "Max Mauff", "Martin Wuttke"], "https://66.media.tumblr.com/fe621b191d84e2bbe1aba5ebe2a07f66/09a111a49814a1f3-e9/s250x400/d3d1227dfa741e11309c553ea5b18b6c97ca4d8a.jpg"],
	        
["series", ["Dark"], ["2017", "2020"], [["2017 12 22", "2018 01 14", "S1"], ["2019 08 02", "2019 08 19", "S2"]], 9, ["ger"], ["crime", "drama", "sci-fi"], ["bini", "syl"], ["Netflix", "dropped"], ["Baran bo Odar", "Jantje Friese"], ["Lisa Vicari", "Louis Hofmann", "Carina Wiese", "Jördis Triebel", "Oliver Masucci", "Moritz Jahn", "Katharina Spiering", "Lea van Acken"], "https://66.media.tumblr.com/531d646040cf4d9601928b8831aa7245/09369d9c4c925cd5-a5/s250x400/1a50d68dc6061c00c9275c2b1625fed0831e9d47.jpg"],
	        
["series", ["Atypical"], ["2017", "2021"], [["2017 12 29", "2018 01 01", "S1"], ["2018 09 07", "2018 09 08", "S2"], ["2019 11 01", "2019 11 16", "S3"], ["2020 07 09", "2020 07 16", "S1"], ["2020 07 16", "2020 07 18", "S2"], ["2020 07 18", "2020 07 20", "S3"], ["2021 07 16", "2021 07 28", "S4"]], 8, ["ger"], ["comedy", "drama"], ["bini"], ["Netflix"], ["Robia Rashid"], ["Keir Gilchrist", "Jennifer Jason Leigh", "Brigette Lundy-Paine", "Michael Rapaport", "Nik Dodani", "Amy Okuda", "Sara Gilbert", "Raúl Castillo"], "https://66.media.tumblr.com/061499d98f1a404ceb3cb290ec08e58c/bdaa33086c3fdc3d-e2/s250x400/57c82fdf9d317f70486282f02a4c7da7925edf67.jpg"],
	        
["series", ["Girlboss"], "2017", [["2018 01 10", "2018 01 21", "S1"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Kay Cannon"], ["Johnny Simmons", "Dean Norris", "Britt Robertson"], "https://66.media.tumblr.com/aa0af156b2442fa58f69815b03f895be/c571ce21637e84b9-a2/s250x400/361be4d6838b0b47071a95bef200427e26fe9b20.jpg"],
	        
["series", ["Money Heist", "Haus des Geldes", "La Casa de Papel"], ["2017", "2021"], [/*["2018 02 09", "2018 02 10", "S1 - S2"]*/["2018 02 09", "2018 02 10", "S1"], ["2018 04 11", "2018 04 15", "S2"], ["2019 07 22", "2019 07 26", "S3"], ["2020 05 22", "2020 05 23", "S4"], ["2021 09 06", "2021 09 11", "S5E1-E5"], ["2021 12 09", "2021 12 28", "S5E6-S5E10"]], 8, ["ger"], ["action", "crime"], [], ["Netflix"], ["Álex Pina"], ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño", "Pedro Alonso", "Miguel Herrán", "Jaime Lorente", "Esther Acebo", "Enrique Arce", "Darko Peric", "Alba Flores", "Rodrigo De la Serna", "Miguel Ángel Silvestre"], "https://66.media.tumblr.com/2ce7367fd5753cc03b95df9b7775419e/8bb4ebe063f69423-c4/s250x400/72bdf60d06590238da922be712cf24058c903ffb.jpg"],
	        
["series", ["Everything Sucks!"], "2018", [["2018 09 10", "S1"]], 8, ["ger"], ["comedy", "drama"], [], ["Netflix", "LGBT"], ["Ben York Jones", "Michael Mohan"], [], "https://66.media.tumblr.com/00834a505b1a15380f43c1ba9a03e624/7f30d92d8ec0d64b-4b/s250x400/a6c3207f6999ed4b4be0d910dc2253a302be124f.jpg"],
	        
["series", ["The End of the F***ing World"], ["2017", "2019"], [["2018 03 03", "S1"], ["2018 08 17", "S1"], ["2019 11 17", "2019 11 25", "S2"]], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Andy Baker", "Charlie Covell", "Charles S. Forsman"], ["Jessica Barden", "Alex Lawther"], "https://66.media.tumblr.com/bdfdaab15c2747ca07c828520df4d3fa/76c84ffa259dd5e0-6f/s250x400/20d7001b24c8d58f3a62774b638c1816332be6d5.jpg"],
	        
["series", ["H2O: Just Add Water", "H2O - Plötzlich Meerjungfrau"], ["2006", "2010"], [["2018 05 18", "2018 05 22", "S1 - S3"], /*["2019 05 25", "2019 08 23", "S1 - S3"]*/["2019 05 25", "2019 07 29", "S1"], ["2019 07 29", "2019 08 13", "S2"], ["2019 08 13", "2019 08 23", "S3"], ["2021 07 07", "2021 09 25", "S1"]], 9, ["ger"], ["drama", "family", "fantasy"], [], ["Netflix", "fav"], ["Jonathan M. Shiff"], ["Cariba Heine", "Phoebe Tonkin", "Claire Holt", "Indiana Evans"], "https://66.media.tumblr.com/dd4dd59e04c6965186e9147f356c2dc1/6daa9043f5b3866d-63/s250x400/77e39644fb331ad6c1a8dc85607f85e70562bb9e.jpg"],
/*S1: 7.0 */
	        
["series", ["On My Block"], "2018", [["2018 06 21", "2018 06 25", "S1"], ["2019 04 08", "S2"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Eddie Gonzalez", "Jeremy Haft", "Lauren Iungerich"], ["Jason Genao"], "https://66.media.tumblr.com/384a526e9c6dfc3097d09037c23c2321/780f95d2760b1c1c-fa/s250x400/9b732304f983d1435622dd8df7de7dc89991e2fd.jpg"],
	        
["series", ["Anne", "Anne with an E"], ["2017", "2019"], [["2018 06 28", "2018 07 16", "S1 - S2"], ["2019 05 07", "2019 05 22", "S1"], ["2019 05 25", "2019 05 29", "S2"], ["2020 01 03", "2020 01 13", "S3"]], 9, ["ger"], ["drama"], [], ["Anne", "Netflix", "fav"], ["Moira Walley-Beckett"], ["Amybeth McNulty", "Dalila Bela", "Kyla Matthews", "Lucas Jade Zumann", "Jonathan Holmes"], "https://66.media.tumblr.com/8266f1a5adb1b67ecbef6aa92fe0c973/4e7bf0fc5f10f7cc-29/s250x400/3b065f5a3c31379d01b763d7c2c281f9bbb6d233.jpg"],
	        
["series", ["Chilling Adventures of Sabrina"], ["2018", "2020"], [["2018 10 29", "2018 11 12", "S1"], ["2019 09 18", "2019 12 23", "S2"]], 0, ["ger"], ["drama", "fantasy"], [], ["Netflix"], ["Roberto Aguirre-Sacasa"], ["Kiernan Shipka", "Spencer Treat Clark", "Miranda Otto", "Heather Doerksen", "Kayla Deorksen", "Ross Lynch"], "https://66.media.tumblr.com/b25e392bd773de76617cb1a05dbcb3af/eac2f8bae7a8a303-ae/s250x400/6a012fa79493463d7cb66fa8677db31bb14d19a5.jpg"],
	        
["series", ["You", "You: Du wirst mich lieben"], "2018", [["2019 01 01", "2019 01 03", "S1"], ["2019 12 26", "2020 01 03", "S2"], ["2020 10 23", "2020 11 14", "S1"], ["2020 11 16", "2020 12 01", "S2E1-S2E2"]], 8, ["ger"], ["crime", "drama"], ["syl", "bini"], ["Netflix"], ["Sera Gamble", "Greg Berlanti"], ["Victoria Pedretti", "Jenna Ortega", "Ayelet Zurer", "Zach Cherry"], "https://66.media.tumblr.com/11e496a30095a63ee91bc61b20404387/86460cd1faf80a44-80/s250x400/d76521b06d1eaed24cbe0ecb36c15a3d1991b669.jpg"],
	        
["series", ["Love, Death & Robots"], ["2019", "2021"], [["2019 04 06", "S1"], ["2021 05 26", "2021 06 09", "S2"], ["2022 08 16", "2022 08 20", "S3"]], 7, ["ger"], ["animation", "sci-fi"], [], ["Netflix"], ["Tim Miller"], [], "https://66.media.tumblr.com/5331b164c8cfac716c03ce7eca1d51dc/fe2409a39ecc2f2e-c4/s250x400/d65945fdda9dee05781d957d0a2bb6da467e4466.jpg"],
	        
["series", ["Hilda"], ["2018", "2023"], [["2019 08 21", "2019 08 27", "S1"], ["2020 08 30", "S1"], ["2020 12 15", "2021 01 04", "S2"], ["2023 12 18", "2023 12 26", "S3"]], 9, ["ger"], ["animation", "adventure"], ["bini", "jani", "sai"], ["Netflix"], ["Kurt Mueller", "Luke Pearson", "Stephanie Simpson"], [], "https://66.media.tumblr.com/3945796a427172ab48d56b4504101249/710bd787409c9bc9-2f/s250x400/8e66f0a422ba79d724f8c494c9b9a12321eb0b94.jpg"],
	        
["series", ["Titans"], "2018", [["2019 09 14", "2019 09 17", "S1"]], 6, ["ger"], ["adventure", "action", "fantasy", "sci-fi"], [], ["Netflix"], ["Greg Berlanti", "Akiva Goldsman", "Geoff Johns"], ["Jeni Ross"], "https://66.media.tumblr.com/eec95a4a451c575fd05587f42f112134/744d9581cf761ac1-65/s250x400/6612ea5ab6e72fb662880f717ce5e680031c5a34.jpg"],
	        
["series", ["You vs. Wild", "Du gegen die Wildnis"], "2019", [["2019 08 27", "2019 10 31", "S1"]], 7, ["eng", "ger"], ["adventure", "reality-tv"], [], ["Netflix"], ["Robert Buchta", "Bear Grylls", "Delbert Shoopman"], ["Bear Grylls"], "https://66.media.tumblr.com/43f93550a28aa5e4d2f14c6a0f239fda/f6466c2243f4e2bf-14/s250x400/dbaeaa142382ac62089b92b66933be282fd402a3.jpg"],
	        
["series", ["The World's Most Extraordinary Homes", "Die außergewöhnlichsten Häuser der Welt"], ["2017", "2018"], [["2018 03 30", "S1E1"], ["2020 01 28", "S1E5"], ["2020 01 31", "2020 02 04", "S1E2-S1E4"], ["2020 02 04", "2020 02 19", "S2"]/*["2020 01 28", "2020 02 19", "S1 - S2"]*/], 6, ["ger"], ["documentary"], [], ["Netflix"], [], [], "https://66.media.tumblr.com/68660e690b214ad2c20f9f4ff67f52b5/385ad0cd815a120f-6c/s250x400/adadec0c15f43fe4afbc95ddc24dff5a207882c6.jpg"],
	        
["series", ["We Are the Wave", "Wir sind die Welle"], "2019", [["2020 07 03", "2020 07 07", "S1"]], 7, ["ger"], ["drama"], [], ["Netflix"], ["Jan Berger", "Dennis Gansel", "Peter Thorwarth"], ["Milena Tscharntke", "Ludwig Simon"], "https://66.media.tumblr.com/7a2c5a828658b59173ccc0a2a2483519/27a6e4cd0ec9f54a-5a/s250x400/6ee2c1e4e8abbd85940ca307701fd85d6c197978.jpg"],
	        
["series", ["Terrace House: Boys & Girls in the City", "Terrace House"], ["2015", "2016"], [["2019 10 13", "2019 12 24", "S1E1-S1E18"], ["2021 07 24", "2021 09 08", "S1E19-E46"]], 8, ["jap"], ["reality-tv"], ["bini"], ["Netflix"], ["Masato Maeda"], [], "https://64.media.tumblr.com/dc96a41efcde322ebdd67f4205a4866a/95c8f7faf9c9026e-88/s250x400/6132e1085b759b2b17ac7a2b99bd5cca09b1f3a9.jpg"],
	        
["series", ["The Umbrella Academy"], "2019", [["2020 08 05", "2020 08 15", "S1"], ["2020 10 17", "2020 10 30", "S2"], ["2022 06 22", "2022 07 01", "S3"]], 6, ["ger"], ["action", "adventure", "sci-fi"], [], ["Netflix", "ongoing", "LGBT"], ["Steve Blackman", "Jeremy Slater"], ["Elliot Page", "Kate Walsh", "Adam Godley", "Robert Sheehan", "Ritu Arya", "Ashley Madekwe"], "https://64.media.tumblr.com/b5ed5269616d02fb18efc291045bedd5/36d8ed15d27df2ff-1a/s250x400/4bcce2e2fd2493e604208f974ac75822129df3e6.jpg"],
	        
["film", ["Princess Mononoke"], "1997", ["2015 08 22", "2016 06 19", "2019 01 25", "2022 03 05"], 9, ["ger", "jap"], ["anime", "adventure", "fantasy"], ["bini", "mai"], ["Ghibli", "fav", "bby", "Netflix"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/b65d33b18937b9e0d46918deaf9afad4/tumblr_o0du7hYEVy1v2s5upo1_250.jpg"],
	        
["film", ["Upside Down"], "2012", ["2015 08 29", "2016 08 24"], 8, ["ger"], ["drama", "fantasy", "romance"], [], [], ["Juan Solanas"], ["Kirsten Dunst", "Timothy Spall"], "https://40.media.tumblr.com/aeb1b722f05e75d7cff4b96730e0a2ed/tumblr_o0owvvwqg11v2s5upo1_250.jpg"],
	        
["film", ["A Series of Unfortunate Events", "Lemony Snicket - Rätselhafte Ereignisse"], "2004", ["2016 04 09"], 7, ["ger"], ["adventure", "comedy"], ["bini"], ["Schule"], ["Brad Silberling"], ["Jim Carrey", "Emily Browning", "Timothy Spall", "Meryl Streep", "Jennifer Coolidge", "Helena Bonham Carter", "Jamie Harris", "Aasif Mandvi"], "https://49.media.tumblr.com/f07b1105a5e8ad1283ddacf62198965b/tumblr_o5drctmQW41v2s5upo1_250.jpg"],
	        
["short", ["Friend Like Me"], "2016", ["2016 04 05"], 6, ["eng"], ["comedy"], [], [], ["Sammy Paul"], ["Bertie Gilbert"], "https://40.media.tumblr.com/b68fa01942abe81fdff8d88987444fb7/tumblr_o5d0416srT1v2s5upo1_250.jpg"],
	        
["film", ["Kick-Ass"], "2010", ["2016 04 14"], 7, ["ger"], ["action", "comedy"], ["bini"], [], ["Matthew Vaughn"], ["Christopher Mintz-Plasse", "Chloë Grace Moretz", "Evan Peters", "Xander Berkeley", "Omari Hardwick"], "https://40.media.tumblr.com/50091ac45e1d0d7d73fee6abb55a0020/tumblr_o5mvk0MA5b1v2s5upo1_250.jpg"],
	        
["film", ["Kick-Ass 2"], "2013", ["2016 04 14"], 7, ["ger"], ["action", "comedy"], [], [], ["Jeff Wadlow"], ["Chloë Grace Moretz", "John Leguizamo", "Jim Carrey", "Ella Purnell", "Iain Glen"], "https://40.media.tumblr.com/4bbb2e53f36fc274d645007c32b45568/tumblr_o5mwb2cDB91v2s5upo1_250.jpg"],
	        
["film", ["Brain on Fire", "Feuer im Kopf"], "2016", ["2018 07 23"], 7, ["ger"], ["biography", "drama"], [], ["Netflix"], ["Gerard Barrett"], ["Chloë Grace Moretz", "Thomas Mann", "Richard Armitage"], "https://66.media.tumblr.com/a289242ec9258da8d7bae2d525f96a5d/2376b81d083bf343-08/s250x400/9b3af989b942eb390622492f92bbab1850daae4f.jpg"],
	        
["film", ["The 5th Wave", "Die 5. Welle"], "2016", ["2017 12 16", "2018 07 06"], 6, ["ger"], ["action", "adventure"], ["bini", "syl"], ["Netflix"], ["J Blakeson"], ["Chloë Grace Moretz", "Liev Schreiber", "Nick Robinson", "Talitha Eliana Bateman", "Maika Monroe"], "https://66.media.tumblr.com/9cb3e7e82efbf5299adf7912baeb5315/tumblr_pzpw10Fffl1v2s5upo1_250.jpg"],
	        
["film", ["Dark Places", "Dark Places: Gefährliche Erinnerung"], "2015", ["2018 06 12"], 6, ["ger"], ["crime", "drama"], ["bini", "syl"], [], ["Gilles Paquet-Brenner"], ["Nicholas Hoult", "Corey Stoll", "Tye Sheridan", "Chloë Grace Moretz"], "https://66.media.tumblr.com/a5fecf93e6b3f0a6c131d6032d9e7927/tumblr_pzkto1tZzN1v2s5upo1_250.jpg"],
	        
["film", ["If I Stay", "Wenn ich bleibe"], "2014", ["2015 09 05", "2018 12 30"], 10, ["ger"], ["drama", "music"], ["bini", "syl"], [], ["R.J. Cutler"], ["Chloë Grace Moretz", "Liana Liberato"], "https://49.media.tumblr.com/c9121cf07174d12aeec35c7b2949a93a/tumblr_o0p4bhoGha1v2s5upo1_250.jpg"],
	        
["film", ["Carrie"], "2013", ["2016 08 30"], 5, ["ger"], ["drama", "horror"], [], [], ["Kimberly Peirce"], ["Julianne Moore", "Chloë Grace Moretz", "Judy Greer", "Barry Shabaka Henley", "Ansel Elgort", "Samantha Weinstein"], "https://66.media.tumblr.com/e7523b19ec43bdffb2bc66952ab39339/tumblr_ocqfd7eZte1v2s5upo1_250.jpg"],
	        
["film", ["Miss Peregrine's Home for Peculiar Children", "Die Insel der besonderen Kinder"], "2016", ["2016 10 27", "2018 05 05"], 7, ["ger"], ["adventure", "drama", "fantasy"], ["syl", "bini"], ["Kino"], ["Tim Burton"], ["Eva Green", "Samuel L. Jackson", "Ella Purnell", "Ella Wahlestedt", "Asa Butterfield", "Kim Dickens"], "https://66.media.tumblr.com/664df1da5d5559371f0254140ed3b1b9/tumblr_ofq4ddLAra1v2s5upo1_250.jpg"],
	        
["film", ["Wildlike"], "2014", ["2015 10 28"], 5, ["ger"], ["adventure", "drama"], [], [], ["Frank Hall Green"], ["Ella Purnell", "Bruce Greenwood"], "https://66.media.tumblr.com/36cca66f36079fa889751477367cd757/tumblr_pwoou5t3Cc1v2s5upo1_250.jpg"],
	        
["film", ["Never Let Me Go", "Alles, was wir geben mussten"], "2010", ["2016 06 06"], 6, ["ger"], ["drama", "romance"], ["syl"], [], ["Mark Romanek"], ["Carey Mulligan", "Andrew Garfield", "Ella Purnell", "Keira Knightley", "Domhnall Gleeson", "Lydia Wilson", "Izzy Meikle-Small"], "https://68.media.tumblr.com/1d757c9083bbf6aafb1effb0f24ee5ec/tumblr_o8d331zSF31v2s5upo1_250.jpg"],
	        
["film", ["Begin Again", "Can a Song Save Your Life?"], "2013", ["2015 09 09", "2017 04 10", "2023 05 19"], 7, ["ger"], ["comedy", "drama", "music"], ["syl", "bini"], ["Kino", "DVD"], ["John Carney"], ["Keira Knightley", "Mark Ruffalo", "Hailee Steinfeld"], "https://40.media.tumblr.com/1dc96583f8a5a59dc6958028ab8cc320/tumblr_o0p6mtqfT31v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: Dead Man's Chest", "Fluch der Karibik 2"], "2006", ["2016 02 13", "2021 10 01", "2023 12 31"], 7, ["ger"], ["action", "adventure"], ["bini", "je", "syl"], ["Fluch der Karibik", "Disney+"], ["Gore Verbinski"], ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Bill Nighy", "Martin Klebba", "Stellan Skarsgård", "Jack Davenport", "Kevin McNally", "Geoffrey Rush"], "https://40.media.tumblr.com/4c3f36b5422097df9ff201a5d6db0ef3/tumblr_o2hi1zHxzw1v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: The Curse of the Black Pearl", "Fluch der Karibik"], "2003", ["2016 01 01", "2021 09 30", ["2023 12 28", "2023 12 29"]], 7, ["ger"], ["action", "adventure"], ["bini", "je"], ["Fluch der Karibik", "Disney+"], ["Gore Verbinski"], ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom", "Keira Knightley", "Martin Klebba", "Jack Davenport", "Kevin McNally", "Zoe Saldana"], "https://49.media.tumblr.com/af3b1288f9a294ce4dde9c78130fe348/tumblr_o0aoerwUJW1v2s5upo1_250.jpg"],
	        
["film", ["Lord of the Rings: The Fellowship of the Ring", "Der Herr der Ringe: Die Gefährten"], "2001", ["2015 12 06", "2016 12 17", ["2022 05 23", "2022 05 25", "Special Extended Edition"]], 7, ["ger"], ["action", "adventure", "fantasy"], [], ["Middle Earth", "bibliothek"], ["Peter Jackson"], ["Sean Astin", "Sean Bean", "Cate Blanchett", "Orlando Bloom", "Ian McKellen", "Dominic Monaghan", "Viggo Mortensen", "Elijah Wood", "Christopher Lee", "Hugo Weaving"], "https://49.media.tumblr.com/9eba6052112edcedbcd28bf485170ed2/tumblr_o0cggdNfkK1v2s5upo1_250.jpg"],
	        
["film", ["The Lord of the Rings: The Two Towers", "Der Herr der Ringe: Die zwei Türme"], "2002", ["2016 01 04", "2016 12 17", ["2022 06 03", "2022 06 06", "Special Extended Edition"]], 7, ["ger"], ["action", "adventure", "fantasy"], [], ["Middle Earth", "bibliothek"], ["Peter Jackson"], ["Sean Astin", "Cate Blanchett", "Orlando Bloom", "Ian McKellen", "Dominic Monaghan", "Viggo Mortensen", "Miranda Otto", "Elijah Wood", "Sean Bean", "Christopher Lee", "Hugo Weaving"], "https://40.media.tumblr.com/0c4330abd747db58db95ace6790a689d/tumblr_o0g28sodpV1v2s5upo1_250.jpg"],
	        
["film", ["The Lord of the Rings: The Return of the King", "Der Herr der Ringe: Die Rückkehr des Königs"], "2003", ["2016 02 13", "2016 12 18", ["2022 06 08", "2022 06 10", "Special Extended Edition"]], 8, ["ger"], ["action", "adventure", "fantasy"], [], ["Middle Earth", "bibliothek"], ["Peter Jackson"], ["Sean Astin", "Sean Bean", "Cate Blanchett", "Orlando Bloom", "Ian McKellen", "Dominic Monaghan", "Viggo Mortensen", "Miranda Otto", "Elijah Wood", "Christopher Lee", "Hugo Weaving"], "https://49.media.tumblr.com/e79056db9dd93cc65ac09ee280ed973c/tumblr_o2j5yuqU8n1v2s5upo1_250.jpg"],
	        
["film", ["Elizabethtown"], "2005", ["2015 08 25"], 8, ["ger"], ["comedy", "drama"], [], [], ["Cameron Crowe"], ["Orlando Bloom", "Kirsten Dunst", "Alec Baldwin", "Judy Greer", "Paul Schneider"], "https://49.media.tumblr.com/04848757c806d3f770ff9451e851dc3a/tumblr_o0dvucxTZA1v2s5upo1_250.jpg"],
	        
["film", ["Kingdom of Heaven", "Königreich der Himmel"], "2005", ["2015 12 28"], 9, ["ger"], ["action", "adventure", "war", "history"], [], [], ["Ridley Scott"], ["David Thewlis", "Orlando Bloom", "Eva Green", "Jeremy Irons", "Iain Glen"], "https://49.media.tumblr.com/3be01f4735a5d74e5c36ef0349fd379e/tumblr_o036jydUC71v2s5upo1_250.jpg"],
	        
["film", ["The Hobbit: The Desolation of Smaug", "Der Hobbit: Smaugs Einöde"], "2013", ["2015 12 13", "2016 12 16", "2018 03 10", "2020 01 17", "2022 04 20"], 8, ["ger"], ["adventure", "fantasy"], [], ["Middle Earth", "Netflix"], ["Peter Jackson"], ["Ian McKellen", "Martin Freeman", "Orlando Bloom", "Evangeline Lilly", "Cate Blanchett", "Richard Armitage"], "https://49.media.tumblr.com/67800ee6e25ae78e36fcd512a8e0a570/tumblr_o0cfd7jSK91v2s5upo1_250.png"],
	        
["film", ["The Hobbit: The Battle of the Five Armies", "Der Hobbit: Die Schlacht der fünf Heere"], "2014", ["2016 01 02", "2016 12 17", "2018 03 11", "2020 01 27", "2022 04 20"], 8, ["ger"], ["adventure", "fantasy"], [], ["Middle Earth", "Netflix"], ["Peter Jackson"], ["Ian McKellen", "Martin Freeman", "Orlando Bloom", "Evangeline Lilly", "Cate Blanchett", "Thomasin McKenzie", "Christopher Lee", "Richard Armitage", "Hugo Weaving"], "https://40.media.tumblr.com/237cae545a3d283f66e4e54339b8c59f/tumblr_o0cahcr4aK1v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: Dead Men Tell No Tales", "Pirates of the Caribbean: Salazars Rache"], "2017", ["2017 06 04", "2021 10 08"], 7, ["ger"], ["action", "adventure"], ["syl"], ["Fluch der Karibik", "Kino", "Disney+"], ["Joachim Rønning", "Espen Sandberg"], ["Johnny Depp", "Geoffrey Rush", "Kaya Scodelario", "Martin Klebba", "Orlando Bloom", "Keira Knightley", "Kevin McNally", "Paul McCartney"], "https://68.media.tumblr.com/2fd84cd5e84c264842c089683fe913d0/tumblr_os7wkmjCQH1v2s5upo1_250.jpg"],
	        
["film", ["Fear and Loathing in Las Vegas", "Angst und Schrecken in Las Vegas"], "1998", ["2017 04 05"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Terry Gilliam"], ["Johnny Depp", "Tobey Maguire", "Mark Harmon", "Christopher Meloni", "Christina Ricci"], "https://68.media.tumblr.com/683b4dbbaf0b150c1ea757c9d2481f9b/tumblr_oo36eerF4m1v2s5upo1_250.jpg"],
	        
["film", ["Chocolat", "Chocolat... ein kleiner Biss genügt"], "2000", ["2018 10 01"], 7, ["ger"], ["drama", "romance"], [], [], ["Lasse Hallström"], ["Peter Stormare", "Johnny Depp"], "https://66.media.tumblr.com/64481288d6a83c431ad88edf2f0b26e3/6768264a0bfb34cb-55/s250x400/f3c99d3c802b8ad08ab4bdafba49f9c6202a04af.jpg"],
	        
["film", ["Secret Window", "Das geheime Fenster"], "2004", ["2016 03 25", "2017 06 27"], 8, ["ger"], ["drama", "mystery", "thriller"], [], [], ["David Koepp"], ["Johnny Depp"], "https://40.media.tumblr.com/e699e44bdff276b33e491e321d24b7c1/tumblr_o4lrviw58Y1v2s5upo1_250.jpg"],
	        
["film", ["Charlie and the Chocolate Factory", "Charlie und die Schokoladenfabrik"], "2005", ["2016 07 19", "2016 12 30", "2019 10 21", "2021 01 25"], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Tim Burton"], ["Johnny Depp", "Helena Bonham Carter", "Christopher Lee", "Freddie Highmore", "AnnaSophia Robb", "Missi Pyle", "Richard Griffiths"], "https://66.media.tumblr.com/d634714520bf786d7b4b71f4527de9d8/tumblr_oakuocubQO1v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: On Stranger Tides", "Pirates of the Caribbean - Fremde Gezeiten"], "2011", ["2016 03 23", ["2021 10 06", "2021 10 07"], "2024 01 07"], 8, ["ger"], ["action", "adventure"], ["bini", "syl"], ["Fluch der Karibik", "Disney+"], ["Rob Marshall"], ["Johnny Depp", "Geoffrey Rush", "Judi Dench", "Richard Griffiths", "Gemma Ward", "Astrid Bergès-Frisbey", "Kevin McNally", "Sam Claflin", "Emilia Jones", "Penélope Cruz"], "https://49.media.tumblr.com/2220dcaf321ba3de02635574eaf4925c/tumblr_o4jewhpfkM1v2s5upo1_250.jpg"],
	        
["film", ["Dark Shadows"], "2012", ["2016 10 19", "2017 10 31", "2023 08 19"], 7, ["ger"], ["comedy", "fantasy"], ["bini", "nico", "sai"], ["Netflix"], ["Tim Burton"], ["Johnny Depp", "Michelle Pfeiffer", "Helena Bonham Carter", "Eva Green", "Chloë Grace Moretz", "Hannah Murray", "Christopher Lee", "Jackie Earle Haley", "Bella Heathcote"], "https://66.media.tumblr.com/72d7e1d695f1143db14cbb78f9caf1c0/tumblr_ofc9wvl12p1v2s5upo1_250.jpg"],
	        
["film", ["Transcendence"], "2014", ["2017 01 27", "2020 06 13"], 7, ["ger"], ["action", "drama", "sci-fi"], [], ["Netflix"], ["Wally Pfister"], ["Johnny Depp", "Morgan Freeman", "Clifton Collins Jr.", "Xander Berkeley", "Rebecca Hall", "Kate Mara"], "https://68.media.tumblr.com/e20c6018d6932df10e90da04ffe4e8cd/tumblr_okjl5qW5Ou1v2s5upo1_250.jpg"],
	        
["film", ["The Lone Ranger", "Lone Ranger"], "2013", ["2016 05 18"], 7, ["ger"], ["action", "adventure"], [], ["Kino"], ["Gore Verbinski"], ["Johnny Depp", "Helena Bonham Carter", "Timothy V. Murphy", "Tom Wilkinson"], "https://66.media.tumblr.com/b72b7ac883c73df6095b029a50c90714/tumblr_o7dqnaXYUS1v2s5upo1_250.jpg"],
	        
["film", ["Into the Woods"], "2014", ["2015 11 08"], 6, ["ger"], ["adventure", "comedy", "musical"], [], [], ["Rob Marshall"], ["Anna Kendrick", "James Corden", "Emily Blunt", "Meryl Streep", "Johnny Depp"], "https://66.media.tumblr.com/5fa624946c153eb5d4f26a51df4a3d23/tumblr_px6zzvV1dl1v2s5upo1_250.jpg"],
	        
["film", ["Fantastic Beasts and Where to Find Them", "Phantastische Tierwesen und wo sie zu finden sind"], "2016", ["2017 04 09"], 7, ["ger"], ["adventure", "family", "fantasy"], [], ["Harry Potter"], ["David Yates"], ["Eddie Redmayne", "Johnny Depp", "Carmen Ejogo", "Alison Sudol"], "https://68.media.tumblr.com/d4343ba1c8e8316a0c092f6ab0c428e9/tumblr_ooakfjefTV1v2s5upo1_250.jpg"],
	        
["film", ["The Edge of Seventeen", "The Edge of Seventeen: Das Jahr der Entscheidung"], "2016", ["2017 10 03", "2020 07 06"], 8, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], ["Netflix"], ["Kelly Fremon Craig"], ["Hailee Steinfeld", "Woody Harrelson", "Haley Lu Richardson", "Hayden Szeto"], "https://66.media.tumblr.com/5f5cdec2a2fa0ccc7d0edc0896df9451/tumblr_pxxedmrifD1v2s5upo1_250.jpg"],
	        
["film", ["Ant-Man"], "2015", ["2016 05 21", "2018 04 01"], 8, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "syl", "je"], ["Marvel"], ["Peyton Reed"], ["Paul Rudd", "Evangeline Lilly", "Corey Stoll", "Anthony Mackie", "Judy Greer", "Michael Peña", "Chris Evans", "Joe Chrest", "Sebastian Stan"], "https://68.media.tumblr.com/b70bf1e59eaffd22e771eec8025d4215/tumblr_o7jla3gTae1v2s5upo1_250.jpg"],
	        
["film", ["God Help the Girl"], "2014", ["2016 04 20", "2016 09 03", "2017 04 10"], 8, ["ger", "eng"], ["drama", "music", "musical"], [], [], ["Stuart Murdoch"], ["Emily Browning", "Hannah Murray", "Sarah Swire"], "https://49.media.tumblr.com/d9c5fb1e63952082b53bb165a9948432/tumblr_o5y1djrjlO1v2s5upo1_250.jpg"],
	        
["film", ["The Golden Compass", "Der goldene Kompass"], "2007", ["2015 11 23", "2020 01 06"], 6, ["ger"], ["adventure", "family", "fantasy"], ["bini"], ["His Dark Materials"], ["Chris Weitz"], ["Nicole Kidman", "Daniel Craig", "Dakota Blue Richards", "Ian McKellen", "Eva Green", "Christopher Lee"], "https://66.media.tumblr.com/58e999a51e7baea5ccd8cb4d6b0a0054/tumblr_ppuwcejZDQ1v2s5upo1_250.jpg"],
	        
["film", ["The Hobbit: An Unexpected Journey", "Der Hobbit: Eine unerwartete Reise"], "2012", ["2015 11 07", "2016 12 16", "2018 03 09", "2019 12 26", "2022 04 20"], 7, ["ger"], ["adventure", "fantasy"], [], ["Middle Earth", "Netflix"], ["Peter Jackson"], ["Ian McKellen", "Martin Freeman", "Elijah Wood", "Cate Blanchett", "Christopher Lee", "Richard Armitage", "Hugo Weaving"], "https://66.media.tumblr.com/b7a9b2f4a431a9d83aced6b3133d8302/tumblr_px6zyfkIt91v2s5upo1_250.jpg"],
	        
["audiobook", ["The Hunger Games", "Die Tribute von Panem"], "2008", [["2020 03 16", "2020 03 20"]], 9, ["eng"], [], [], ["Hunger Games"], ["Suzanne Collins"], [], "https://66.media.tumblr.com/2261cca058e61a683ae41bbcdd232eaf/9b90b0ce00f51e9f-87/s250x400/37e9d5379c435623b318d62cab3834386646f41f.jpg"],
	        
["audiobook", ["Catching Fire", "Die Tribute von Panem – Gefährliche Liebe"], "2009", [["2020 03 23", "2020 03 27"]], 9, ["eng"], [], [], ["Hunger Games"], ["Suzanne Collins"], [], "https://66.media.tumblr.com/e006761fbac221d0e5ee08b95365a0e4/ca93cd8ec6bdd962-ce/s250x400/2773dfefe2e92a4d84113fb69ace9be09dcdb2ef.jpg"],
	        
["audiobook", ["Mockingjay", "Die Tribute von Panem – Flammender Zorn"], "2010", [["2020 03 30", "2020 04 03"]], 7, ["eng"], [], [], ["Hunger Games"], ["Suzanne Collins"], [], "https://66.media.tumblr.com/a29684a87ede1c4134c9f75cd88b0f3b/43e0030ae8bafdef-ea/s250x400/140444d4f310e4261f80f455eba0a97055bd65e9.jpg"],
	        
["film", ["The Hunger Games", "Die Tribute von Panem - The Hunger Games"], "2012", ["2015 11 08", "2016 10 10", "2022 12 10"], 8, ["ger"], ["action", "adventure", "sci-fi"], ["bini"], ["Hunger Games", "Netflix"], ["Gary Ross"], ["Stanley Tucci", "Jennifer Lawrence", "Liam Hemsworth", "Elizabeth Banks", "Woody Harrelson", "Isabelle Fuhrman", "Josh Hutcherson", "Mackenzie Lintz", "Sandra Ellis Lafferty", "Rhoda Griffis", "Alexander Ludwig", "Dayo Okeniyi", "Donald Sutherland"], "https://66.media.tumblr.com/a24245b34e92ec6447ebf36186441831/tumblr_px704ncX2r1v2s5upo1_250.jpg"],
	        
["film", ["The Hunger Games: Catching Fire", "Die Tribute von Panem - Catching Fire"], "2013", ["2015 11 12", "2016 10 11", "2022 12 17"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Hunger Games", "Netflix"], ["Francis Lawrence"], ["Jennifer Lawrence", "Liam Hemsworth", "Woody Harrelson", "Josh Hutcherson", "Elizabeth Banks", "Stanley Tucci", "Jena Malone", "Sandra Ellis Lafferty", "Jeffrey Wright", "Donald Sutherland"], "https://66.media.tumblr.com/f7b4170e92e5bc06aaee4193e449a0c9/tumblr_ppuwk10qr21v2s5upo1_250.jpg"],
	        
["film", ["The Hunger Games: Mockingjay - Part 1", "Die Tribute von Panem - Mockingjay: Teil 1"], "2014", ["2016 10 13", "2022 12 27"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Hunger Games", "Netflix"], ["Francis Lawrence"], ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Julianne Moore", "Elizabeth Banks", "Stanley Tucci", "Jena Malone", "Mahershala Ali", "Elden Henson", "Jeffrey Wright", "Donald Sutherland", "Sarita Choudhury"], "https://68.media.tumblr.com/e43757394967e00f9c522eddb839f143/tumblr_of03elLgxw1v2s5upo1_250.jpg"],
	        
["film", ["The Hunger Games: Mockingjay - Part 2", "Die Tribute von Panem - Mockingjay: Teil 2"], "2015", ["2016 10 14", "2023 02 11"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Hunger Games", "Netflix"], ["Francis Lawrence"], ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Julianne Moore", "Elizabeth Banks", "Stanley Tucci", "Jena Malone", "Joe Chrest", "Mahershala Ali", "Elden Henson", "Jeffrey Wright", "Donald Sutherland", "Sarita Choudhury"], "https://68.media.tumblr.com/fbc3f18858c714b0e7b247f74b711b6d/tumblr_of1sxh8yGO1v2s5upo1_250.jpg"],
	        
["audiobook", ["Lord of the Flies", "Herr der Fliegen"], "1954", [["2020 06 09", "2020 06 11"]], 4, ["eng"], [], [], [], ["William Golding"], [], "https://66.media.tumblr.com/29c9aac93e71d25a89ad3d626686c06b/4c0a0ed205b7aa97-0b/s250x400/7d746a247d63ef5f91f4c55bc201127710d39df1.jpg"],
	        
["audiobook", ["Treasure Island", "Die Schatzinsel"], "1883", ["2020 06 08"], 6, ["ger"], ["adventure"], [], [], ["Robert Louis Stevenson"], [], "https://66.media.tumblr.com/bb20bcc783835dc94cc8af42a84e2bc0/07170f29590fd68b-0a/s250x400/c491d31f7d0ad6d2ad0296219ceb6db17927c058.jpg"],
	        
["audiobook", ["Every Day", "Letztendlich sind wir dem Universum egal"], "2012", [["2020 05 06", "2020 05 07"]], 6, ["eng"], ["fantasy", "romance"], [], ["LGBT"], ["David Levithan"], [], "https://66.media.tumblr.com/6683e3ee9b2406579c4ba0061633a06e/3d1911ab8ffaefd0-b8/s250x400/85f597d35cbea8f7f46ff03e625deca3eca56b9e.jpg"],
	        
["film", ["The Intern", "Man lernt nie aus"], "2015", ["2020 08 16"], 8, ["ger"], ["comedy", "drama"], ["syl", "bini"], [], ["Nancy Meyers"], ["Robert De Niro", "Anne Hathaway", "Andrew Rannells"], "https://64.media.tumblr.com/dc8010cface983725a5ac4c33af808c1/2bcf8e78f7bf2566-66/s250x400/c3350890d5325425a288bfdffc3aa9c4a2aece3a.jpg"],
	        
["film", ["The Wolf of Wall Street"], "2013", ["2020 08 15", "2022 10 21"], 4, ["ger"], ["biography", "crime"], [], ["Netflix"], ["Martin Scorsese"], ["Leonardo DiCaprio", "Jonah Hill", "Matthew McConaughey", "Kyle Chandler", "Cristin Milioti", "Margot Robbie", "Thomas Middleditch"], "https://64.media.tumblr.com/54310010e9b3fedc33a567b3b4daffd5/4c0160ebbd8aee76-64/s250x400/3e43425a185a9cf709f2db7c42335c8fc2eb9d1d.jpg"],
	        
["film", ["Emma", "Jane Austens Emma"], "1996", ["2020 08 09"], 7, ["ger"], ["comedy", "drama"], ["syl"], [], ["Douglas McGrath"], ["Gwyneth Paltrow", "Ewan McGregor"], "https://64.media.tumblr.com/f7aabbfb3b3224f5a7a3d3337c14ffee/102d17d08a5983ba-de/s250x400/af5a2953ad7c0682cb8c26770124879c57d515fe.jpg"],
	        
["film", ["The Devil Wears Prada", "Der Teufel trägt Prada"], "2006", ["2020 08 06"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["David Frankel"], ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci", "Heidi Klum", "Rebecca Mader", "Alexander Blaise", "Tracie Thoms"], "https://64.media.tumblr.com/c5a17e909446962af1897d7f79496706/1d5d0f2d0ae4153e-29/s250x400/e27cec18309f3b2ded894f104412cb724dca0fb1.jpg"],
	        
["film", ["Radio Rebel", "Radio Rebel - Unüberhörbar"], "2012", ["2020 08 06"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Peter Howitt"], ["Debby Ryan"], "https://64.media.tumblr.com/85bc4ec44c34a3f37e54eef13cdbbadd/3c19601c082c6958-e2/s250x400/8db97eddc8dd3185a7106260a78854dc299f84e3.jpg"],
	        
["film", ["Three Billboards Outside Ebbing, Missouri"], "2017", ["2020 08 03"], 7, ["ger"], ["comedy", "crime"], ["syl"], [], ["Martin McDonagh"], ["Frances McDormand", "Woody Harrelson", "Abbie Cornish", "Zeljko Ivanek", "Peter Dinklage", "Kathryn Newton", "Samara Weaving", "Abbie Cornish", "Sam Rockwell", "Clarke Peters"], "https://64.media.tumblr.com/34eef63c97addadebfe4c53d416722b9/6e93d58244ffce44-76/s250x400/87367eb91105532cbecd9f146b64d0767b9aadc6.jpg"],
	        
["film", ["Emma.", "Emma"], "2020", ["2020 07 27"], 6, ["ger"], ["comedy", "drama"], ["syl"], ["Kino"], ["Autumn de Wilde"], ["Anya Taylor-Joy", "Bill Nighy", "Tanya Reynolds", "Callum Turner", "Isis Hainsworth"], "https://64.media.tumblr.com/b0483e91677af92641a1d11663da2aef/ae5c907a9b320a83-7e/s250x400/4b3012c6be8d4118ec14688c5096aa081b3eebc0.jpg"],
	        
["film", ["The Old Guard"], "2020", ["2020 07 27"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Gina Prince-Bythewood"], ["Chiwetel Ejiofor", "Harry Melling", "Matthias Schoenaerts", "Orlando Seale", "Charlize Theron"], "https://64.media.tumblr.com/89ad420fc18f829fdc232cc078a87e4f/6a3b04b9ffb46ba4-e0/s250x400/e002ec38f2252118eb151df79eadaf794c231b0d.jpg"],
	        
["film", ["17 Again", "17 Again - Back to High School"], "2009", ["2020 07 25"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Burr Steers"], ["Zac Efron", "Matthew Perry", "Michelle Trachtenberg", "Michelle Trachtenberg"], "https://64.media.tumblr.com/0d4b4127a01f8d85f22ea9e8504476cf/e253c3091319ef95-91/s250x400/c0c7bc733244a81b173fadde533e8288b7974113.jpg"],
	        
["film", ["Catch Me If You Can"], "2002", ["2020 07 21", "2021 10 09"], 8, ["ger"], ["biography", "crime"], [], ["Netflix"], ["Steven Spielberg"], ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken", "Amy Adams", "Jennifer Garner", "Ellen Pompeo", "Elizabeth Banks"], "https://64.media.tumblr.com/93357d4f48df3e0b2b0dfc95e82bcbcc/ff023cbce9ed2f16-8c/s250x400/7b7873def851e0fb4c04653412b4cdaab1303f9e.jpg"],
	        
["film", ["Stitch! The Movie", "Stitch & Co. – Der Film"], "2003", ["2020 09 14", "2023 02 26"], 7, ["ger"], ["animation", "adventure"], ["bini", "nico"], ["DVD", "Disney+", "Lilo & Stitch"], ["Tony Craig", "Roberts Gannaway"], [], "https://64.media.tumblr.com/7c664cd9f211dba1d0888af946e6cb35/4b3de6d48ceb0f31-cc/s250x400/fe674abada469721c2c1d3a49e2645f55ab35a1b.jpg"],
	        
["film", ["The Girl with Nine Wigs", "Heute bin ich blond"], "2013", ["2020 09 14"], 6, ["ger"], ["biography", "comedy"], [], ["DVD"], ["Marc Rothemund"], ["Daniel Zillmann", "Lisa Tomaschewsky", "Jasmin Gerat"], "https://64.media.tumblr.com/d2873bc102bc01289ae24f7d3dd8f008/060e3a6108445317-b9/s250x400/9e04e09f6a5fd1aea7d2854821f71f11533db4ce.jpg"],
	        
["film", ["All the Bright Places", "All die verdammt perfekten Tage"], "2020", ["2020 06 13", "2022 12 17", "2023 12 07"], 7, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Brett Haley"], ["Elle Fanning", "Justice Smith", "Keegan-Michael Key", "Alexandra Shipp"], "https://66.media.tumblr.com/4234402071d21b4ad20bbc81763f21ed/e281213a508bcd3d-7d/s250x400/b70ea8db842311cd587b0b85ba7e42c90d88ce95.jpg"],
	        
["film", ["Tiger Milk", "Tigermilch"], "2017", ["2020 05 31"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ute Wieland"], ["Emily Kusche", "Milton Welsh", "Flora Li Thiemann"], "https://66.media.tumblr.com/81b55aa9054bce909909a7a43fe58e51/2012c6606283f3ab-4e/s250x400/c949a2422bf2f82cb85b9e3552f6b785eaf6ff18.jpg"],
	        
["film", ["20th Century Women", "Jahrhundertfrauen"], "2016", ["2017 06 26"], 8, ["ger"], ["comedy", "drama"], ["syl", "je"], ["Kino"], ["Mike Mills"], ["Elle Fanning", "Lucas Jade Zumann"], "https://66.media.tumblr.com/57ae9062e00bd63a7387cd5e6c39fcc0/tumblr_ppuvm1QCdV1v2s5upo1_250.jpg"],
	        
["film", ["Super 8"], "2011", ["2015 11 29", "2017 10 31"], 8, ["ger"], ["action", "adventure", "mystery", "supernatural"], ["bini", "nico", "sai"], ["Netflix"], ["J.J. Abrams"], ["Joel Courtney", "Joel McKinnon Miller", "Kyle Chandler", "Ron Eldard", "AJ Michalka", "Elle Fanning", "Bruce Greenwood", "Gabriel Basso"], "https://66.media.tumblr.com/f0888bfa7aa54ee046dca2f4dbd84875/tumblr_pxbeljkoEG1v2s5upo1_250.jpg"],
	        
["film", ["Howl's Moving Castle", "Das wandelnde Schloss"], "2004", ["2015 11 28", "2017 09 25", "2020 01 26", "2021 01 30"], 8, ["ger"], ["anime", "adventure"], ["bini", "mai"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://66.media.tumblr.com/516d88be925b2846b0f1d32947e4740c/tumblr_ppuw8wVHkw1v2s5upo1_250.jpg"],
	        
["film", ["Nausicaä of the Valley of the Wind", "Nausicaä - Prinzessin aus dem Tal der Winde", "Kaze no tani no Naushika"], "1984", ["2015 11 28", "2016 04 22", "2017 01 25", "2018 03 28", "2019 02 22", "2021 05 15"], 10, ["ger", "eng"], ["anime", "adventure"], ["bini", "mai"], ["fav", "Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://49.media.tumblr.com/88924fe72fd0946794f8eb060337d51f/tumblr_o650uy0P9B1v2s5upo1_250.jpg"],
	        
["film", ["The Breakfast Club", "Der Frühstücksclub"], "1985", ["2015 11 11", "2016 03 24", "2016 10 08", "2019 03 31", "2022 03 11"], 10, ["ger", "eng"], ["comedy", "drama"], ["bini", "nico", "sai", "syl"], ["Schule", "bby"], ["John Hughes"], ["Molly Ringwald", "Paul Gleason"], "https://40.media.tumblr.com/48d4ae2ab7ffb3b3fc7ac1af5bd5329e/tumblr_o4l8hmypvm1v2s5upo1_250.jpg"],
	        
["film", ["Inside Out", "Alles steht Kopf"], "2015", ["2015 11 01", "2016 06 03", "2017 04 13"], 9, ["ger"], ["animation", "adventure"], ["jani", "nico"], ["Kino"], ["Pete Docter", "Ronnie Del Carmen"], [], "https://66.media.tumblr.com/a840925f557f695bd1b80d95fa381fdd/tumblr_pwvsgw1Q9d1v2s5upo1_250.jpg"],
	        
["film", ["Three Wishes for Cinderella", "Drei Haselnüsse für Aschenbrödel", "Tri orísky pro Popelku"], "1973", ["2015 12 24", "2016 12 24", "2017 12 24", "2017 12 25", "2018 12 24", "2019 12 24", "2020 12 24", "2021 12 24", "2022 12 24", "2023 12 24"], 6, ["ger"], ["drama"], ["bini", "syl", "je"], ["Netflix"], ["Václav Vorlícek"], [], "https://49.media.tumblr.com/423c432c7706d2941a0e314cb118b444/tumblr_nzvr95nGyQ1v2s5upo1_250.jpg"],
	        
["film", ["The Truman Show", "Die Truman Show"], "1998", ["2015 10 29", "2018 02 02", "2018 02 23", "2019 07 15"], 8, ["eng", "ger"], ["comedy", "drama"], ["bini"], ["Schule", "Netflix"], ["Peter Weir"], ["Jim Carrey", "Laura Linney", "Natascha McElhone", "Holland Taylor", "Ed Harris"], "https://66.media.tumblr.com/7d347849969f5725f06f51dd2e26a13f/tumblr_pwoovrE4HJ1v2s5upo1_250.jpg"],
	        
["film", ["Attack the Block"], "2011", ["2015 09 13", "2016 08 05", "2017 08 01"], 9, ["ger"], ["action", "adventure", "supernatural"], ["jenny", "sai", "nico", "bini"], [], ["Joe Cornish"], ["Jodie Whittaker", "Nick Frost", "John Boyega"], "https://66.media.tumblr.com/fb54890b2b79db8103192263b20c50ee/tumblr_of8pvlIKlk1v2s5upo1_250.jpg"],
	        
["film", ["St. Trinian's", "Die Girls von St. Trinian"], "2007", ["2016 08 16"], 7, ["ger"], ["comedy", "family"], [], [], ["Oliver Parker", "Barnaby Thompson"], ["Talulah Riley", "Rupert Everett", "Jodie Whittaker", "Lily Cole", "Russell Brand", "Toby Jones", "Stephen Fry", "Juno Temple"], "https://66.media.tumblr.com/e3c36d1794d30a5e2b309e0cd5db6184/tumblr_oc0jl912841v2s5upo1_250.jpg"],
	        
["film", ["St Trinian's 2: The Legend of Fritton's Gold", "Die Girls von St. Trinian 2 - Auf Schatzsuche"], "2009", ["2016 08 17"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Oliver Parker", "Barnaby Thompson"], ["Rupert Everett", "Colin Firth", "David Tennant", "Talulah Riley", "Jodie Whittaker", "Toby Jones", "Jessica Henwick"], "https://66.media.tumblr.com/fe1587ac46120a50e94b3f9639d8a456/tumblr_oc1xcaTf2X1v2s5upo1_250.jpg"],
	        
["film", ["Steinzeit – Das Experiment: Steinzeit-Kinder"], "2007", ["2020 09 14"], 5, ["ger"], ["reality-tv", "documentary"], [], ["DVD"], [], [], "https://64.media.tumblr.com/8bb35e0c8e0aabdde9b04cbf5c90ee94/dabfd6ff7b8b7930-bb/s250x400/092f4f016e091d45e0ac36f95806b311eebccfae.jpg"],
	        
["film", ["Transformers: The Last Knight", "Transformers 5: The Last Knight"], "2017", ["2017 07 19"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Transformers", "Kino"], ["Michael Bay"], ["Mark Wahlberg", "Anthony Hopkins", "Josh Duhamel", "Stanley Tucci", "Steve Buscemi", "John Goodman", "Omar Sy", "Martin McCreadie", "Isabela Merced"], "https://66.media.tumblr.com/aeaef5ce22de525ce1bdf7e9d1e811d9/tumblr_pxnkebxWTN1v2s5upo1_250.jpg"],
	        
["film", ["Zombieland"], "2009", ["2017 07 31"], 7, ["ger"], ["adventure", "comedy", "fantasy", "horror"], ["nico", "sai", "jenny"], [], ["Ruben Fleischer"], ["Jesse Eisenberg", "Woody Harrelson", "Emma Stone", "Abigail Breslin", "Bill Murray"], "https://66.media.tumblr.com/6b6285b5a200e3a84ba7b3255787e593/tumblr_pxnkhdoJuQ1v2s5upo1_250.jpg"],
	        
["film", ["Shutter Island"], "2010", ["2017 07 16"], 7, ["ger"], ["mystery", "thriller"], [], [], ["Martin Scorsese"], ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley", "Max von Sydow", "Emily Mortimer", "Jackie Earle Haley", "Michelle Williams", "Ted Levine"], "https://66.media.tumblr.com/0a0558c0082ac5412934349b70f824e4/tumblr_ppuvzheK9N1v2s5upo1_250.jpg"],
	        
["film", ["Who Am I", "Who Am I - Kein System ist sicher"], "2014", ["2017 07 03", "2019 01 29", "2020 06 13", "2021 05 29"], 9, ["ger"], ["crime", "drama"], ["syl", "mai", "bini"], ["Netflix"], ["Baran bo Odar"], ["Tom Schilling", "Elyas M'Barek", "Wotan Wilke Möhring", "Antoine Monot Jr.", "Hannah Herzsprung", "Stephan Kampwirth", "Arndt Schwering-Sohnrey"], "https://66.media.tumblr.com/30c001dd83c4c23870490c20aa6f56a6/tumblr_ppuvvqZRf51v2s5upo1_250.jpg"],
	        
["film", ["Die Vorstadtkrokodile"], "1977", ["2015 08 11", "2021 12 12"], 6, ["ger"], ["family", "adventure"], ["syl", "je"], [], ["Wolfgang Becker"], [], "https://49.media.tumblr.com/bec2fd9059b81e005cfcb4c3a793ade6/tumblr_nztao7NoRR1v2s5upo2_r1_250.png"],
	        
["film", ["Whisper of the Heart", "Stimme des Herzens", "Mimi wo sumaseba"], "1995", ["2015 08 26", "2020 12 12", "2022 09 03"], 5, ["ger"], ["anime", "drama", "romance"], ["bini", "mai"], ["Ghibli", "Netflix"], ["Yoshifumi Kondô"], [], "https://49.media.tumblr.com/d9f5ec0c7b5e004e756df9a23cd3885a/tumblr_o0dwdeGGtP1v2s5upo1_250.jpg"],
	        
["film", ["The Virgin Suicides", "The Virgin Suicides - Verlorene Jugend"], "1999", ["2015 08 30", "2016 08 13"], 9, ["ger"], ["drama", "romance"], [], [], ["Sofia Coppola"], ["Kirsten Dunst", "Danny DeVito"], "https://40.media.tumblr.com/71765bd581b584f16cddae7574c9eeff/tumblr_o0p1t2Azpk1v2s5upo1_250.jpg"],
	        
["film", ["The Lovely Bones", "In meinem Himmel"], "2009", ["2015 09 05"], 9, ["ger"], ["drama"], ["bini", "syl"], [], ["Peter Jackson"], ["Mark Wahlberg", "Stanley Tucci", "Saoirse Ronan", "AJ Michalka", "Peter Jackson", "Rachel Weisz"], "https://40.media.tumblr.com/59174cdcb45dae0ee391972f62671a27/tumblr_o0p4w7xCtV1v2s5upo1_250.jpg"],
	        
["film", ["Stand by Me", "Stand by Me: Das Geheimnis eines Sommers"], "1986", ["2015 09 10", "2016 09 25"], 9, ["ger"], ["adventure", "drama"], ["bini", "nico"], [], ["Rob Reiner"], ["Jerry O'Connell"], "https://40.media.tumblr.com/bba18c1a5b52bf684b609263c5975760/tumblr_o0suhzhX1C1v2s5upo1_250.jpg"],
	        
["film", ["Pacific Rim"], "2013", ["2015 09 12", "2017 05 08"], 7, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "nico"], [], ["Guillermo del Toro"], ["Clifton Collins Jr.", "Ron Perlman", "Burn Gorman", "Cathy Cavadini", "Michelle Lee", "Charlie Hunnam", "Heather Doerksen"], "https://37.media.tumblr.com/a3c61f7b93f5a2d2e91773e76711125d/tumblr_o3kcz4exSZ1v2s5upo1_250.jpg"],
	        
["film", ["Holes", "Das Geheimnis von Green Lake"], "2003", ["2015 09 26"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Andrew Davis"], ["Sigourney Weaver", "Jon Voight", "Shia LaBeouf", "Dulé Hill", "Tim Blake Nelson"], "https://66.media.tumblr.com/ffc06fb1af6193586005bb6513d1568e/tumblr_ppxzedeXjF1v2s5upo1_250.jpg"],
	        
["film", ["Surrogates", "Surrogates - Mein zweites Ich"], "2009", ["2015 09 27"], 6, ["ger"], ["action", "sci-fi"], ["bini"], [], ["Jonathan Mostow"], ["Bruce Willis", "Radha Mitchell", "Rosamund Pike", "Helena Mattsson", "Michelle Lee", "Cody Christian"], "https://68.media.tumblr.com/e41a682957e9496e378c5d5f02a47bb1/tumblr_oov2hahWrr1v2s5upo1_250.jpg"],
	        
["film", ["Jumper"], "2008", ["2015 09 28"], 5, ["ger"], ["action", "adventure", "supernatural"], ["bini"], [], ["Doug Liman"], ["Samuel L. Jackson", "AnnaSophia Robb", "Kristen Stewart", "Jamie Bell"], "https://66.media.tumblr.com/c127204bd7ac8dcca93909069de581d5/tumblr_pp184vymaZ1v2s5upo1_250.jpg"],
	        
["film", ["Bridge to Terabithia", "Brücke nach Terabithia"], "2007", ["2015 09 29"], 10, ["ger"], ["drama", "family", "fantasy"], ["bini"], [], ["Gabor Csupo"], ["Josh Hutcherson", "AnnaSophia Robb", "Zooey Deschanel", "Bailee Madison"], "http://40.media.tumblr.com/52f1c5ef8620ef3043c42c3dce1d5fb5/tumblr_nl6wmnrheq1rcb0d2o3_1280.jpg"],
	        
["film", ["Gravity"], "2013", ["2015 10 06"], 4, ["ger"], ["drama", "sci-fi"], [], [], ["Alfonso Cuarón"], ["Sandra Bullock", "George Clooney", "Ed Harris"], "https://66.media.tumblr.com/d2714e00070ea5f11edf134e82c8bc87/tumblr_ppxzgfr8Yw1v2s5upo1_250.jpg"],
	        
["film", ["Wild", "Der große Trip - Wild"], "2014", ["2015 10 07", "2016 06 04"], 10, ["ger"], ["biography", "drama"], [], ["fav"], ["Jean-Marc Vallée"], ["Reese Witherspoon", "Laura Dern", "Nick Eversman"], "https://66.media.tumblr.com/7b8d0edfa836f6cf0366bfaea15da033/tumblr_ppxzhwNov81v2s5upo1_250.jpg"],
	        
["film", ["Stuck in Love.", "Love Stories - Erste Lieben, zweite Chancen"], "2012", ["2015 10 12"], 10, ["ger"], ["comedy", "drama", "romance"], [], [], ["Josh Boone"], ["Jennifer Connelly", "Lily Collins", "Nat Wolff", "Logan Lerman", "Liana Liberato"], "https://66.media.tumblr.com/d771c3ef8d3f38f954628e082f9cf66a/tumblr_ppxznwHOLZ1v2s5upo1_250.jpg"],
	        
["film", ["To the Bone"], "2017", ["2018 05 27"], 7, ["ger"], ["drama"], [], ["Netflix"], ["Marti Noxon"], ["Lily Collins", "Liana Liberato", "Kathryn Prescott", "Alex Sharp", "Ciara Bravo", "Ziah Colon"], "https://66.media.tumblr.com/13c6660c42ed48eefa171e8a4cb7e4e0/tumblr_pzkte3xLEG1v2s5upo1_250.jpg"],
	        
["film", ["Dear Eleanor"], "2016", ["2016 07 23"], 7, ["ger"], ["comedy", "drama", "history"], [], [], ["Kevin Connolly"], ["Liana Liberato", "Isabelle Fuhrman", "Joel Courtney"], "https://66.media.tumblr.com/94aa99a8ea17c76654947f69eb3b3ecf/tumblr_oarexdQ1XY1v2s5upo1_250.jpg"],
	        
["film", ["The Kissing Booth"], "2018", ["2018 06 20"], 7, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Vince Marcello"], ["Joey King", "Joel Courtney", "Jacob Elordi", "Molly Ringwald"], "https://66.media.tumblr.com/c125317b2cb407a22928e269ac80703f/tumblr_pzpvueGPeX1v2s5upo1_250.jpg"],
	        
["film", ["The Kissing Booth 2"], "2020", ["2020 08 01"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Vince Marcello"], ["Joey King", "Joel Courtney", "Jacob Elordi", "Molly Ringwald"], "https://64.media.tumblr.com/eb8453dac338e1f0f169f98ecf59317b/f7e42343a8e68929-ea/s250x400/d699de0a61ad4491f216cdceb941bd10fe3a6fb0.jpg"],
	        
["film", ["Sixteen Candles", "Das darf man nur als Erwachsener"], "1984", ["2020 07 29"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["John Hughes"], ["Molly Ringwald", "Justin Henry", "Michael Schoeffling", "John Cusack", "Joan Cusack"], "https://64.media.tumblr.com/16308ea24a67114d79485312c4fdb99b/54d87be6a8f5b0e9-c0/s250x400/9b52c13205076e3c4fdf64c8d514164cc5a2e5ea.jpg"],
	        
["film", ["The Imitation Game", "The Imitation Game - Ein streng geheimes Leben"], "2014", ["2020 07 02"], 6, ["ger"], ["biography", "drama", "war"], [], ["Netflix", "LGBT"], ["Morten Tyldum"], ["Benedict Cumberbatch", "Keira Knightley", "Alex Lawther", "Matthew Goode", "Charles Dance"], "https://66.media.tumblr.com/46be14000a201a456d04df27f8f2ef3b/48c0da0f92e7a2b7-98/s250x400/0ecb35fbfdbbc1429ab5b3188d2c38e6ca8ae108.jpg"],
	        
["film", ["Tall Girl", "Wie Jodi über sich hinauswuchs"], "2019", ["2019 09 14", "2020 08 16"], 7, ["ger"], ["comedy", "drama"], ["syl", "bini"], ["Netflix"], ["Nzingha Stewart"], ["Ava Michelle", "Sabrina Carpenter", "Paris Berelc", "Steve Zahn", "Griffin Gluck", "Rico Paris"], "https://66.media.tumblr.com/d3fbcb8643059f746e3689ffe685cfa6/2ad3b0f691c1dcbf-8a/s250x400/9ed24ca38ebc71186b19f0c1554e23dfa1fc307a.jpg"],
	        
["film", ["The Dark Tower", "Der Dunkle Turm"], "2017", ["2019 07 16"], 4, ["ger"], ["action", "adventure"], ["nico"], ["Dark Tower", "Netflix"], ["Nikolaj Arcel"], ["Matthew McConaughey", "Idris Elba", "Claudia Kim", "Jackie Earle Haley", "Abbey Lee", "Katheryn Winnick", "Fran Kranz"], "https://66.media.tumblr.com/2717e0e9fcbcba95671053401df4a244/33834b775e3b9f2f-0c/s250x400/697e435d5346a24b31eefc99498863b4a4e4b208.jpg"],
	        
["film", ["Five Feet Apart", "Drei Schritte zu dir"], "2019", ["2019 07 07"], 8, ["ger"], ["drama", "romance"], ["syl"], ["Kino"], ["Justin Baldoni"], ["Haley Lu Richardson", "Ariana Guerra", "Moises Arias"], "https://66.media.tumblr.com/9a0b9f9be370c06d273db093f9ce7e81/ca58850e02f4cfa4-99/s250x400/778f94e4fd66b54b3facc5c5b8bddb5883bacdde.jpg"],
	        
["film", ["Split"], "2016", ["2017 02 04", "2019 02 02", "2020 09 28"], 8, ["ger", "eng"], ["horror", "thriller"], ["syl"], ["Eastrail 177", "Kino", "DVD"], ["M. Night Shyamalan"], ["James McAvoy", "Anya Taylor-Joy", "Betty Buckley", "Bruce Willis"], "https://68.media.tumblr.com/c97742e705faeb4107c44333b6d08407/tumblr_okvc0ubTvD1v2s5upo1_250.jpg"],
	        
["film", ["Pretty in Pink"], "1986", ["2017 02 04"], 6, ["ger"], ["comedy", "drama"], [], [], ["Howard Deutch"], ["Molly Ringwald", "Jon Cryer"], "https://68.media.tumblr.com/536a8daae8af15bd330e30d2f20b2a1c/tumblr_okvc3qB3zY1v2s5upo1_250.jpg"],
	        
["film", ["Avatar", "Avatar - Aufbruch nach Pandora"], "2009", ["2017 02 13", "2018 07 14"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], [], ["James Cameron"], ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Michelle Rodriguez", "Giovanni Ribisi"], "https://68.media.tumblr.com/b624a80e83ee671903da746329d4eea1/tumblr_olj7dc7cje1v2s5upo1_250.jpg"],
	        
["film", ["Logan", "Logan: The Wolverine"], "2017", ["2017 03 02", "2020 03 02", "2023 12 07"], 8, ["ger"], ["action", "drama", "supernatural"], ["nico"], ["Kino", "X-Men", "Marvel", "Disney+"], ["James Mangold"], ["Hugh Jackman", "Patrick Stewart", "Dafne Keen", "Stephen Merchant", "Boyd Holbrook"], "https://68.media.tumblr.com/42f0e6d37b2f98c78afda5b69edaf6d5/tumblr_om8zfwTnMX1v2s5upo1_250.jpg"],
	        
["film", ["The Space Between Us", "Den Sternen so nah"], "2017", ["2017 03 04"], 7, ["ger"], ["drama", "romance", "sci-fi"], ["je", "syl"], ["Kino"], ["Peter Chelsom"], ["Gary Oldman", "BD Wong", "Asa Butterfield", "Britt Robertson"], "https://68.media.tumblr.com/514a1e7f63f97208cde10e75312227b2/tumblr_omeq8dnfiM1v2s5upo1_250.jpg"],
	        
["film", ["Jurassic World: Fallen Kingdom", "Jurassic World: Das gefallene Königreich"], "2018", ["2018 06 07", "2020 11 26"], 8, ["ger"], ["action", "adventure"], ["bini", "je", "syl"], ["Kino", "Jurassic Park", "DVD"], ["J.A. Bayona"], ["Chris Pratt", "Bryce Dallas Howard", "Toby Jones", "Jeff Goldblum", "BD Wong", "Justice Smith", "Ted Levine", "Isabella Sermon"], "https://66.media.tumblr.com/2e331c74b66d28043538fe0e9ffb0e23/tumblr_pzktkmJCIo1v2s5upo1_250.jpg"],
	        
["film", ["Lilo & Stitch"], "2002", ["2018 06 14", "2023 02 19"], 8, ["ger"], ["animation", "adventure"], ["bini", "nico"], ["Netflix", "Disney+", "Lilo & Stitch"], ["Dean DeBlois", "Chris Sanders"], [], "https://66.media.tumblr.com/686b5039acaf7c0c922cb82dedc322ef/tumblr_pzktqh53nE1v2s5upo1_250.jpg"],
	        
["film", ["The Fault in Our Stars", "Das Schicksal ist ein mieser Verräter"], "2014", ["2018 05 27"], 7, ["ger"], ["drama", "romance"], ["syl"], [], ["Josh Boone"], ["Shailene Woodley", "Ansel Elgort", "Nat Wolff", "Laura Dern", "Willem Dafoe"], "https://66.media.tumblr.com/9d2ff6a174443bf31ae6cea3328fcf01/tumblr_pzktgoXS3g1v2s5upo1_250.jpg"],
	        
["film", ["Mean Girls", "Girls Club - Vorsicht bissig!"], "2004", ["2018 06 16"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["Mark Waters"], ["Lindsay Lohan", "Rachel McAdams", "Amy Poehler", "Lizzy Caplan", "Neil Flynn", "Amanda Seyfried", "Miranda Edwards", "Lacey Chabert"], "https://66.media.tumblr.com/ed6968420c5a469bc3013dde5b8eb11a/tumblr_pzktt21Nry1v2s5upo1_250.jpg"],
	        
["film", ["How It Ends"], "2018", ["2018 07 30"], 3, ["ger"], ["action", "adventure"], ["nico", "bini"], ["Netflix"], ["David M. Rosenthal"], ["Theo James"], "https://66.media.tumblr.com/1662f74fc5325dd41902574e60108f9d/3489b61bacf3339a-4e/s250x400/bd14b214f49d1f37eb2ed46d06eda3e8a206f3ba.jpg"],
	        
["film", ["The Last Airbender", "Die Legende von Aang"], "2010", ["2018 07 27", "2022 02 19"], 5, ["ger"], ["action", "adventure"], ["nico", "bini"], ["DVD", "Avatar"], ["M. Night Shyamalan"], ["Cliff Curtis", "Nicola Peltz", "Jackson Rathbone", "Shaun Toub", "Aasif Mandvi", "Dev Patel"], "https://66.media.tumblr.com/a5737692ac0c44f8573596a7ca795177/42e8ec65f7daa84a-d5/s250x400/12040d0e5aa0b3d896d713094f305b961e71a76c.jpg"],
	        
["film", ["Jimmy Neutron: Boy Genius", "Jimmy Neutron: Der mutige Erfinder"], "2001", ["2018 08 22", "2020 10 10"], 7, ["ger"], ["animation", "action"], ["bini", "je"], ["Jimmy Neutron", "DVD"], ["John A. Davis"], [], "https://66.media.tumblr.com/86736ebfdedf622454d9d4015d0d04ad/15d070d8838a05e9-cc/s250x400/ac60e735a11226d4cd88ac8e49233626cf4483c8.jpg"],
	        
["film", ["Scott Pilgrim vs. the World", "Scott Pilgrim gegen den Rest der Welt"], "2010", ["2018 09 08"], 8, ["ger"], ["action", "comedy"], ["bini"], ["Netflix"], ["Edgar Wright"], ["Michael Cera", "Anna Kendrick", "Aubrey Plaza", "Jason Schwartzman", "Johnny Simmons", "Chris Evans", "Brie Larson", "Clifton Collins Jr.", "Kieran Culkin", "Mary Elizabeth Winstead"], "https://66.media.tumblr.com/8a0082a8d6861ccb645fceb705b547e2/b68f346e81d22b95-31/s250x400/47f779811fd6877145f526d9f908202623d704e1.jpg"],
	        
["film", ["Shrek the Third", "Shrek der Dritte"], "2007", ["2018 09 17"], 5, ["ger"], ["animation", "adventure"], [], ["Shrek", "Netflix"], ["Chris Miller", "Raman Hui"], [], "https://66.media.tumblr.com/05bccd541bd2abb4c592d8a48dcb559d/61b6313c2fbfea8d-62/s250x400/e4cfdc96073cb66ce3dcd92498c5fd26477e1583.jpg"],
	        
["film", ["To All the Boys I've Loved Before"], "2018", ["2018 09 19"], 7, ["ger"], ["comedy", "drama"], ["bini"], ["Netflix"], ["Susan Johnson"], ["Lana Condor", "Noah Centineo", "Anna Cathcart", "Andrew Bachelor", "Madeleine Arthur", "Emilija Baranac"], "https://66.media.tumblr.com/ecfc3cf7c712bc3d71788d01747bd9f2/c49d9445953e0db3-a1/s250x400/6dae5add106f53bac18a8f32c26b296fad92d964.jpg"],
	        
["film", ["Candy Jar"], "2018", ["2018 10 19", "2019 10 02", "2020 12 14", "2021 09 04"], 9, ["ger"], ["comedy"], ["mai", "bini"], ["fav", "Netflix"], ["Ben Shelton"], ["Jacob Latimore", "Sami Gayle", "Ariana Guerra"], "https://66.media.tumblr.com/066c667345c10ff88cb86d7616fe701c/ae892af51cbc7500-47/s250x400/183cd2e5c8c1d5bc9986c8aba9b95be73f7038dd.jpg"],
	        
["film", ["Pippi Longstocking", "Pippi Langstrumpf", "Pippi Långstrump"], "1969", ["2018 12 26"], 6, ["ger"], ["adventure", "comedy"], ["bini"], ["Pippi"], ["Olle Hellbom"], ["Inger Nilsson", "Maria Persson", "Pär Sundberg"], "https://66.media.tumblr.com/c09ac61ff3510f4e06c0b83b5d8f5da4/2eb32da8fb15f7e4-6e/s250x400/6bd28405ca7fadace0552b2547b12a878035bce0.jpg"],
	        
["film", ["The Little Mermaid"], "2018", ["2018 12 26"], 5, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["Blake Harris", "Chris Bouchard"], ["Poppy Drayton", "Loreto Peralta"], "https://66.media.tumblr.com/4fa42fd71622af1bf9779fa3abdfa89d/3b0c21b75636e5e2-b9/s250x400/0cb6885d0337a3e39e588821de3ad6c87a16d216.jpg"],
	        
["series", ["Doctor Who"], ["2005", ""], [["2017 01 02", "S1E1"]], 0, ["ger"], ["adventure", "drama", "sci-fi"], [], ["dropped", "ongoing"], ["Sydney Newman"], ["Christopher Eccleston", "Billie Piper", "Tony Curran"], "https://68.media.tumblr.com/1fcaf0edf6ae993fec5ede671b1116c3/tumblr_oj5jth9HOh1v2s5upo1_250.jpg"],
	        
["series", ["Forever"], ["2015", "2015"], [["2016 12 26", "S1"]], 8, ["ger"], ["crime", "drama"], [], [], ["Matthew Miller"], ["Ioan Gruffudd"], "https://68.media.tumblr.com/8306e6ace81387c7bc50a8ad140ea069/tumblr_ofmdmlJQCS1v2s5upo1_250.jpg"],
	        
["film", ["The Terminal", "Terminal"], "2004", ["2020 07 22"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Steven Spielberg"], ["Tom Hanks", "Catherine Zeta-Jones", "Stanley Tucci", "Zoe Saldana"], "https://64.media.tumblr.com/f6406991a6a0dc060c8ac0ef105049d0/e2446da1d1fe6a2f-9a/s250x400/2aecc9e2da824b7b9aa08cb34f92636db7399409.jpg"],
	        
["film", ["The House Bunny", "House Bunny"], "2008", ["2020 07 15"], 3, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Fred Wolf"], ["Anna Faris", "Colin Hanks", "Emma Stone", "Kat Dennings", "Hugh Hefner", "Katharine McPhee", "Rumer Willis", "Rachel Specter", "Emily Wilson"], "https://64.media.tumblr.com/309f622a3da6799587df7fa540037991/f122f6f0665b5c19-cf/s250x400/5652c3f21e9f28f1730b370a0e8b124696a779c8.jpg"],
	        
["film", ["Heavy Trip", "Heavy Trip", "Hevi reissu"], "2018", ["2020 05 31"], 6, ["ger"], ["comedy", "music"], ["syl", "je"], ["DVD"], ["Juuso Laatio", "Jukka Vidgren"], [], "https://66.media.tumblr.com/74693cbef6632708b889a9ab760da36a/ac02361d3d84cb1e-de/s250x400/432934756fe38c1ae41986f3f2a6cba3cab8cc3c.jpg"],
	        
["film", ["Every Day", "Letztendlich sind wir dem Universum egal"], "2018", ["2020 05 22"], 4, ["ger"], ["drama", "fantasy"], ["syl"], ["LGBT"], ["Michael Sucsy"], ["Angourie Rice", "Jeni Ross", "Lucas Jade Zumann", "Justice Smith"], "https://66.media.tumblr.com/0bfa9c19b7cb0ba0cf0511afa1e77f8d/e34dee8f5dc329bf-28/s250x400/7e39471427e2c327ebc5be055f02656bf5f8dd01.jpg"],
	        
["film", ["To All the Boys: P.S. I Still Love You", "To All the Boys I've Loved Before 2"], "2020", ["2020 05 08"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Michael Fimognari"], ["Lana Condor", "Noah Centineo", "Jordan Fisher", "Anna Cathcart", "Ross Butler", "Holland Taylor", "Emilija Baranac"], "https://66.media.tumblr.com/9e25c39bb7f9e1657a62ad3154442813/df0cf4bb7c0fe088-ce/s250x400/201f0cb2903604f92144b379d20a2fcd5142fdd1.jpg"],
	        
["film", ["Pippi on the Run", "Pippi außer Rand und Band", "På rymmen med Pippi Långstrump"], "1970", ["2020 05 22"], 7, ["ger"], ["adventure", "comedy"], ["bini"], ["Pippi"], ["Olle Hellbom"], ["Inger Nilsson", "Maria Persson", "Pär Sundberg"], "https://66.media.tumblr.com/53ca94050bc073f56333c98888564b18/c520be69b33b5418-df/s250x400/5ea0ea64168412beb8579c0a38631e2e5fd7b3ac.jpg"],
	        
["film", ["The Half of It", "Nur die halbe Geschichte"], "2020", ["2020 05 15"], 6, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], ["Netflix", "LGBT"], ["Alice Wu"], ["Leah Lewis", "Daniel Diemer"], "https://66.media.tumblr.com/bc4d97781ba36fa83812d1a371da39b2/c039f77f563a91ce-0f/s250x400/1f5b9944f8affb4f7fa34dbb02809379985deaf7.jpg"],
	        
["film", ["6 Underground"], "2019", ["2020 01 31"], 5, ["ger"], ["action", "thriller"], [], ["Netflix"], ["Michael Bay"], ["Ryan Reynolds", "Mélanie Laurent", "Dave Franco", "Ben Hardy"], "https://66.media.tumblr.com/b53a443d88cf76f081441443502fe8f8/3d806c3e2fe172ec-4b/s250x400/9f93adcda729ae4e9e48bda869f3df541d6b574f.jpg"],
	        
["film", ["The Family", "Malavita - The Family"], "2013", ["2020 01 29", "2023 04 14"], 9, ["ger", "eng"], ["comedy", "crime"], [], ["Netflix", "bby"], ["Luc Besson"], ["Robert De Niro", "Michelle Pfeiffer", "Dianna Agron", "Tommy Lee Jones", "Moussa Maaskri", "Mario Pecqueur"], "https://66.media.tumblr.com/0f27115fbd083328a3f6e526d5e1fc83/4c3103e169298be5-3e/s250x400/2e76361e8f5b723c2ca95e545e3de3bd0a1790af.jpg"],
	        
["film", ["Valerian and the City of a Thousand Planets", "Valerian - Die Stadt der tausend Planeten"], "2017", ["2020 01 11"], 5, ["ger"], ["action", "adventure"], ["syl", "bini"], [], ["Luc Besson"], ["Dane DeHaan", "Cara Delevingne", "Rihanna", "Elizabeth Debicki", "Sasha Luss"], "https://66.media.tumblr.com/a9e37d9528bdba8e52ffc5c16e48f5db/8db875a518a406bf-42/s250x400/c5de1b90dccfef805a15029062c1608c94f99b06.jpg"],
	        
["film", ["Just One of the Guys"], "1985", ["2019 12 23"], 7, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Lisa Gottlieb"], ["Joyce Hyser", "Toni Hudson"], "https://66.media.tumblr.com/c49928dc9dad0bcfeaeccfbc2e36b1a6/3cd0efa077cc60c1-9c/s250x400/1dec9a586f3a5420aca1bcd4f0ac756a7f5bad4b.jpg"],
	        
["film", ["Jumanji: The Next Level", "Jumanji - The Next Level"], "2019", ["2019 12 20"], 6, ["ger"], ["action", "adventure"], ["syl"], ["Jumanji", "Kino"], ["Jake Kasdan"], ["Dwayne Johnson", "Kevin Hart", "Jack Black", "Karen Gillan", "Nick Jonas", "Danny DeVito", "Colin Hanks", "Marin Hinkle", "Awkwafina", "Alex Wolff", "Madison Iseman"], "https://66.media.tumblr.com/ea4b5e9f34bda142f1d4519f7f21bf6d/b7764fc968a010b6-50/s250x400/bb711697fe7fcb9eb32c4e4acd9bf84fd6253a15.jpg"],
	        
["film", ["Lucy"], "2014", ["2019 11 28", "2020 04 07"], 5, ["ger"], ["action", "sci-fi"], ["je", "bini", "sai"], [], ["Luc Besson"], ["Scarlett Johansson", "Morgan Freeman", "Lio Tipton"], "https://66.media.tumblr.com/291bf0625b585189996dfd18406cf80c/9b48e21e15cb8ecc-d7/s250x400/a09dce28ec36eb246961b9522e70cb04853602f7.jpg"],
	        
["film", ["The Iron Giant", "Der Gigant aus dem All"], "1999", ["2019 10 31"], 7, ["ger"], ["animation", "action"], [], ["Netflix"], ["Brad Bird"], [], "https://66.media.tumblr.com/b3c3a93f0aaa17e5f8be77d8eb4ec4b2/8ab55f8f380c586f-86/s250x400/63f707d730e0f9fa00b1fdaa7bb15531a29e48e0.jpg"],
	        
["film", ["Rim of the World"], "2019", ["2019 09 05"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["McG"], ["Miya Cech", "Lynn Collins", "Andrew Bachelor"], "https://66.media.tumblr.com/219cfc51dd2f09d1700d8a09fc07f3c3/ebeac420d95890b8-b2/s250x400/bc242a51725e2594aa1059d8de317684b6b6e25a.jpg"],
	        
["film", ["The Da Vinci Code", "The Da Vinci Code - Sakrileg"], "2006", ["2019 09 04"], 6, ["ger"], ["mystery", "thriller"], [], ["Netflix"], ["Ron Howard"], ["Tom Hanks", "Audrey Tautou", "Ian McKellen", "Jean Reno"], "https://66.media.tumblr.com/4226b356eedbfd45d02cb40f745326b5/121691ebc2228547-e4/s250x400/e387d1d8d839ed603f3825ff09a6fb2515434ba4.jpg"],
	        
["film", ["The Secret of NIMH", "Mrs. Brisby und das Geheimnis von NIMH"], "1982", ["2019 08 30"], 6, ["ger"], ["animation", "adventure"], ["bini"], [], ["Don Bluth"], [], "https://66.media.tumblr.com/0e33dd6077b9ef8e355f82e742344dce/a57416a665d4f1b6-53/s250x400/21ef60ab67d11732c744e15f3ecf7b0913d60bde.jpg"],
	        
["film", ["303"], "2018", ["2019 08 24"], 6, ["ger"], ["comedy", "drama"], ["syl"], [], ["Hans Weingartner"], ["Mala Emde", "Anton Spieker", "Arndt Schwering-Sohnrey"], "https://66.media.tumblr.com/00ac9eb8c20bebbc9de24a25bda1a961/ff680b1405ede290-02/s250x400/c677f4cb7644c573dcad58c53453a2e74880cc43.jpg"],
	        
["film", ["Gerald's Game", "Das Spiel"], "2017", ["2019 08 02"], 4, ["ger"], ["drama", "horror"], [], ["Netflix"], ["Mike Flanagan"], ["Carla Gugino", "Bruce Greenwood", "Chiara Aurelia", "Carel Struycken", "James Flanagan"], "https://66.media.tumblr.com/14ecb4a72c058171dc68ce15ccbf516f/1c01262559945241-c2/s250x400/86ea4abb98bfcad7bf6982a58edba93e66fc19f6.jpg"],
	        
["film", ["Easy A", "Einfach zu haben"], "2010", ["2019 07 27"], 7, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Will Gluck"], ["Emma Stone", "Penn Badgley", "Lisa Kudrow", "Aly Michalka", "Stanley Tucci", "Juliette Goglia"], "https://66.media.tumblr.com/32ad8270169a9425990b1bd171944b22/ff73cad90b44297e-a2/s250x400/7ca66d8a3d7214953b57a25790a595c20541548c.jpg"],
	        
["film", ["Systemfehler - Wenn Inge tanzt"], "2013", ["2019 06 11"], 6, ["ger"], ["comedy", "music"], [], [], ["Wolfgang Groos"], ["Tim Oliver Schultz", "Paula Kalenberg"], "https://66.media.tumblr.com/6436e98854e8c3bf766b0e5c5334f1b1/14ef7ec696234ff6-a0/s250x400/8d5c18fac64d1c4ca6e04453a39d2ecf97e647d6.jpg"],
	        
["film", ["I Kill Giants"], "2017", ["2019 05 31", "2023 10 12"], 7, ["ger"], ["drama", "fantasy"], [], ["Netflix"], ["Anders Walter"], ["Madison Wolfe", "Zoe Saldana", "Imogen Poots", "Sydney Wade"], "https://66.media.tumblr.com/7198cd9b34c6d1e2e4e7cadd4429cd42/b84c5c3124169851-b1/s250x400/eda490d0ba338c4ec1f62cbf1225848ab1580ed8.jpg"],
	        
["film", ["IO"], "2019", ["2019 01 23"], 6, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["Jonathan Helpert"], ["Margaret Qualley", "Anthony Mackie"], "https://66.media.tumblr.com/5a5a5e98abfe1b101136425a0bdfdc06/8b43f1d110e154ad-d5/s250x400/308bfad8a1c7deb8d5bea59ef9d39c8d5db731fa.jpg"],
	        
["film", ["Limitless", "Ohne Limit"], "2011", ["2019 01 10"], 7, ["ger"], ["sci-fi", "thriller"], [], ["Netflix"], ["Neil Burger"], ["Bradley Cooper", "Robert De Niro", "Abbie Cornish", "Rebecca Dayan"], "https://66.media.tumblr.com/edf1deeef391fc2a72e7af7ea115d770/c8c1637adf0de038-a9/s250x400/d6fc6994716197dc43f0cc6374c0fab755cfeb13.jpg"],
	        
["film", ["The Art of Getting By", "Von der Kunst, sich durchzumogeln"], "2011", ["2018 12 31"], 6, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Gavin Wiesen"], ["Freddie Highmore", "Emma Roberts"], "https://66.media.tumblr.com/41ffd479d2cc4bdb545b0bcd5ded20c1/28f62fea1ae95aae-54/s250x400/08bf2beec24816d6678e52c161d84beb7d557d27.jpg"],
	        
["film", ["The Host", "Seelen"], "2013", ["2018 11 18"], 5, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Andrew Niccol"], ["Saoirse Ronan", "Diane Kruger", "Boyd Holbrook"], "https://66.media.tumblr.com/208934ed9ed7177ad61b9df5a240d04c/d8c3938ac8c8ff06-f9/s250x400/239e7f0a8f31d65ec8a8ac8325f9ecbc97e7f1ac.jpg"],
	        
["film", ["The Darkest Minds", "The Darkest Minds - Die Überlebenden"], "2018", ["2018 08 27"], 6, ["ger"], ["action", "adventure"], ["syl"], ["Kino"], ["Jennifer Yuh Nelson"], ["Miya Cech"], "https://66.media.tumblr.com/2016ca026121bebfe7d9dd3d525acc3d/2b089a31b846d5ba-f4/s250x400/4a8d5c87e2a362dbe0ed1e8fc87f2759ae53a6bb.jpg"],
	        
["film", ["Ein Fall für TKKG: Drachenauge"], "1992", ["2018 08 09"], 6, ["ger"], ["family", "action"], ["bini"], [], ["Ulrich König"], ["Sanny van Heteren"], "https://66.media.tumblr.com/3d33772db952ff1263fdc5f481f8a851/c5260f95078c7f4e-a1/s250x400/8a094bf7b2822fd101c404eef32ff43fb95065c6.jpg"],
	        
["film", ["Recess: School's Out", "Disneys grosse Pause - Die geheime Mission"], "2001", ["2018 07 30"], 6, ["ger"], ["animation", "comedy"], ["bini", "nico", "sai"], ["Netflix"], ["Chuck Sheetz"], [], "https://66.media.tumblr.com/edaef6de653e74fdc003656e3103b5a5/affbe6cef9b8520a-21/s250x400/be9c9b0d8ae2de2f3ab40b23846ef8042ecbe944.jpg"],
	        
["film", ["Battleship"], "2012", ["2018 07 14"], 6, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Peter Berg"], ["Rihanna", "Adam Godley", "Joe Chrest", "Rami Malek", "Barack Obama", "Tadanobu Asano"], "https://66.media.tumblr.com/09f75b8a09bed0b34c713fbee62edb0e/1533baebb5af6fe6-6b/s250x400/411d7f201ac7fd47442bb46356f76eb35275b7ed.jpg"],
	        
["film", ["13 Going on 30", "30 über Nacht"], "2004", ["2018 05 27"], 6, ["ger"], ["comedy", "fantasy"], [], ["Netflix"], ["Gary Winick"], ["Jennifer Garner", "Mark Ruffalo", "Judy Greer", "Lynn Collins", "Brie Larson"], "https://66.media.tumblr.com/7f0776ebdab6327f2f77cbd0b6617f68/tumblr_pzktb5ghav1v2s5upo1_250.jpg"],
	        
["film", ["The Babysitter"], "2017", ["2018 05 23", "2020 10 31"], 7, ["ger"], ["comedy", "horror"], ["bini"], ["Netflix"], ["McG"], ["Samara Weaving", "Robbie Amell", "Emily Alyn Lind", "Andrew Bachelor", "Judah Lewis", "Bella Thorne", "Hana Mae Lee"], "https://66.media.tumblr.com/945e69d735b3f15ae8bb96233081c04e/tumblr_pzkt7faJcw1v2s5upo1_250.jpg"],
	        
["film", ["Lady Bird"], "2017", ["2018 05 22", "2023 01 24"], 7, ["ger"], ["comedy", "drama"], ["syl"], ["Kino", "bibliothek"], ["Greta Gerwig"], ["Saoirse Ronan", "Timothée Chalamet", "Kathryn Newton", "Odeya Rush", "Beanie Feldstein", "Jake McDorman"], "https://66.media.tumblr.com/b84196ccf9d098be5b45373b14925706/tumblr_pzkt5n4zW21v2s5upo1_250.jpg"],
	        
["film", ["Interstellar"], "2014", ["2016 10 18", "2017 03 27"], 7, ["ger"], ["adventure", "drama", "sci-fi"], ["bini", "syl"], [], ["Christopher Nolan"], ["Timothée Chalamet", "Matthew McConaughey", "Mackenzie Foy", "John Lithgow", "Anne Hathaway", "Michael Caine", "Jessica Chastain", "Matt Damon"], "https://68.media.tumblr.com/c6a73d7ad753da57f16b5b6392587458/tumblr_of8pl59vIY1v2s5upo1_250.jpg"],
	        
["film", ["Don't Breathe"], "2016", ["2016 10 16", "2018 11 15"], 8, ["ger", "eng"], ["crime", "horror", "thriller"], [], [], ["Fede Alvarez"], ["Jane Levy", "Dylan Minnette", "Stephen Lang"], "https://66.media.tumblr.com/15be9872384ea5e85ede4c9200c46f5b/tumblr_of5ococ5Et1v2s5upo1_250.jpg"],
	        
["film", ["When We First Met"], "2018", ["2018 03 03"], 5, ["ger"], ["comedy", "fantasy"], [], ["Netflix"], ["Ari Sandel"], ["Adam Devine", "Alexandra Daddario", "Andrew Bachelor", "Robbie Amell"], "https://66.media.tumblr.com/e950878e2feddcc0ad5b0645f5653cd2/tumblr_pz9bnx7u9b1v2s5upo1_250.jpg"],
	        
["film", ["Jumanji: Welcome to the Jungle", "Jumanji: Willkommen im Dschungel"], "2017", ["2018 02 03", "2019 11 22", "2021 12 02", "2022 05 07"], 8, ["ger", "eng"], ["action", "adventure"], ["syl", "je", "bini", "mai"], ["Jumanji", "Netflix"], ["Jake Kasdan"], ["Dwayne Johnson", "Kevin Hart", "Jack Black", "Karen Gillan", "Nick Jonas", "Marin Hinkle", "Missi Pyle", "Alex Wolff", "Marc Evan Jackson", "Madison Iseman"], "https://66.media.tumblr.com/b565faed79276eab292d60ebb1263730/tumblr_pz9blxIeSw1v2s5upo1_250.jpg"],
	        
["film", ["The Open House", "Open House"], "2018", ["2018 01 27"], 4, ["ger"], ["horror", "thriller"], [], ["Netflix"], ["Matt Angel", "Suzanne Coote"], ["Dylan Minnette"], "https://66.media.tumblr.com/cbec013e3520b4f63d6356c9bf1e6934/tumblr_pz45ssAoIw1v2s5upo1_250.jpg"],
	        
["film", ["Escape Plan"], "2013", ["2018 01 26"], 7, ["ger"], ["action", "thriller"], ["syl", "je"], ["Netflix"], ["Mikael Håfström"], ["Sylvester Stallone", "Arnold Schwarzenegger", "Vincent D'Onofrio"], "https://66.media.tumblr.com/316ab8735ddc59fdb7e478d9042f094c/tumblr_pz45qtQEfW1v2s5upo1_250.jpg"],
	        
["film", ["Your Name.", "Your Name.", "Kimi no na wa."], "2016", ["2018 01 14", "2019 02 08", "2020 08 22"], 9, ["ger"], ["anime", "drama"], ["syl", "bini", "jani"], ["Netflix", "Kino"], ["Makoto Shinkai"], [], "https://66.media.tumblr.com/449da3bb98c093ddaec2b0d469e09ab9/tumblr_pz45nofOoA1v2s5upo1_250.jpg"],
	        
["film", ["Cast Away", "Cast Away - Verschollen"], "2000", ["2017 12 28"], 7, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["Robert Zemeckis"], ["Tom Hanks", "Elden Henson"], "https://66.media.tumblr.com/1a94ff2cb7f22a363b31500084c6d248/tumblr_pz09dafkFb1v2s5upo1_250.jpg"],
	        
["film", ["Baby Driver"], "2017", ["2017 12 28", "2019 09 06"], 8, ["ger"], ["action", "crime", "music"], ["bini", "syl"], ["Netflix"], ["Edgar Wright"], ["Ansel Elgort", "Jon Bernthal", "Jon Hamm", "Eiza González", "Lily James", "Jamie Foxx"], "https://66.media.tumblr.com/745cd51b615cd39f90313c39ce24b30f/tumblr_pz09brrS6Y1v2s5upo1_250.jpg"],
	        
["film", ["Warm Bodies", "Warm Bodies - Zombies mit Herz"], "2013", ["2017 12 27"], 6, ["ger"], ["comedy", "horror"], [], [], ["Jonathan Levine"], ["Nicholas Hoult", "Teresa Palmer", "Analeigh Tipton", "Dave Franco", "Lio Tipton"], "https://66.media.tumblr.com/e633a766e57bab060096239984b503b4/tumblr_pz0978Xvhy1v2s5upo1_250.jpg"],
	        
["film", ["Ancien and the Magic Tablet", "Ancien und das magische Königreich", "Hirune-hime: Shiranai watashi no monogatari"], "2017", ["2017 11 19"], 7, ["jap"], ["anime", "adventure"], [], [], ["Kenji Kamiyama"], [], "https://66.media.tumblr.com/c432532b0023c3c427e947858e9503a9/tumblr_pyefimt1Ri1v2s5upo1_250.jpg"],
	        
["film", ["iBoy"], "2017", ["2017 11 12"], 9, ["eng"], ["action", "crime"], [], ["Netflix"], ["Adam Randall"], ["Bill Milner", "Maisie Williams", "Petrice Jones"], "https://66.media.tumblr.com/ebad39a93f934135b50d9e1acd4e699a/tumblr_pyefh34Fxj1v2s5upo1_250.jpg"],
	        
["film", ["Monster House"], "2006", ["2017 10 31"], 6, ["ger"], ["animation", "comedy", "horror"], ["bini", "nico", "sai", "jessie"], ["Netflix"], ["Gil Kenan"], [], "https://66.media.tumblr.com/6f0da5aa05bce6187230f6823c99f351/tumblr_py7vrzOlss1v2s5upo1_250.jpg"],
	        
["film", ["Kingsman: The Golden Circle"], "2017", ["2017 10 25"], 8, ["ger"], ["action", "adventure"], ["je", "syl"], ["Kino"], ["Matthew Vaughn"], ["Taron Egerton", "Mark Strong", "Hanna Alström", "Julianne Moore", "Colin Firth", "Elton John", "Halle Berry", "Edward Holcroft", "Bruce Greenwood", "Poppy Delevingne"], "https://66.media.tumblr.com/74ee32181531a812107b28237f3e32f9/tumblr_py7vo3upAv1v2s5upo1_250.jpg"],
	        
["film", ["Memento"], "2000", ["2017 10 21"], 8, ["ger"], ["mystery", "thriller"], [], ["Netflix"], ["Christopher Nolan"], ["Carrie-Anne Moss"], "https://66.media.tumblr.com/43a64523f24563f2c5a27733e605d7a7/tumblr_pxxeihgpJj1v2s5upo1_250.jpg"],
	        
["short", ["Welcome"], "2015", ["2017 10 02"], 8, ["eng"], ["drama"], [], [], ["Serena Dykman"], ["Nick Adamson"], "https://66.media.tumblr.com/a9f60c2619f40d1f754f3366d26aa666/44e6399594d9d5aa-c4/s250x400/ff4b3d49fb8736ef8784f6c9ebbb756cf6337eb9.jpg"],
	        
["short", ["Imperfect"], "2012", ["2017 09 26"], 8, ["eng"], ["crime", "film-noir"], [], [], ["Michael Tucker"], [], "https://66.media.tumblr.com/1e2195d8ddfb89e797feecc726012bb7/1eea43eb86a28ea2-1c/s250x400/ae6032cb7f6d2dc1cc48636dc6201faf3c7b1d75.jpg"],
	        
["short", ["Nadia"], "2017", ["2017 08 29"], 7, ["eng"], ["drama"], [], [], ["Teddy Nygh"], [], "https://66.media.tumblr.com/24596f2fa7ff7c79d68666fac01c87fc/tumblr_pxxdoctuP51v2s5upo1_250.jpg"],
	        
["film", ["Paper Towns", "Margos Spuren"], "2015", ["2017 08 21"], 7, ["ger"], ["comedy", "drama"], ["bini"], [], ["Jake Schreier"], ["Nat Wolff", "Cara Delevingne", "Halston Sage", "Justice Smith", "Austin Abrams"], "https://66.media.tumblr.com/1bb188e3d02f1ef8732f69e9b728d7d7/tumblr_pxrg5ou3NN1v2s5upo1_250.jpg"],
	        
["film", ["A Silent Voice", "A Silent Voice", "Koe no katachi"], "2016", ["2017 08 13", "2019 06 14"], 9, ["ger", "jap"], ["anime", "drama"], ["bini", "nico"], [], ["Naoko Yamada"], [], "https://66.media.tumblr.com/e3d7c4d7eeb7602fc67b563d98cea366/tumblr_pxrfysKjNY1v2s5upo1_250.jpg"],
	        
["film", ["2 Guns"], "2013", ["2017 08 06"], 6, ["ger"], ["action", "comedy"], [], [], ["Baltasar Kormákur"], ["Mark Wahlberg", "James Marsden"], "https://66.media.tumblr.com/ccbf8641297e401fa21e4b80f57c10f5/tumblr_pxrfvzPsqq1v2s5upo1_250.jpg"],
	        
["film", ["We're the Millers", "Wir sind die Millers"], "2013", ["2020 09 19"], 7, ["ger"], ["comedy", "crime"], [], ["Netflix"], ["Rawson Marshall Thurber"], ["Jennifer Aniston", "Jason Sudeikis", "Emma Roberts", "Will Poulter", "Nick Offerman", "Kathryn Hahn", "Molly C. Quinn", "Luis Guzmán", "Matthew Willig", "Sam Richardson", "Ed Helms"], "https://64.media.tumblr.com/ee930350436633e134094138bb5b2c13/0b77504b8d09586d-14/s250x400/1c5f83b8477616f13f6f8ba2553e9ff659d4783b.jpg"],
	        
["film", ["The LEGO Movie"], "2014", ["2017 07 16", "2021 09 18"], 7, ["ger"], ["animation", "action", "comedy"], ["bini", "mai"], ["LEGO", "Netflix"], ["Christopher Miller", "Phil Lord"], [], "https://66.media.tumblr.com/8a4ec55d291de283e5130d1d06e00fb2/tumblr_pxnk9mcF8i1v2s5upo1_250.jpg"],
	        
["film", ["East Is East"], "1999", ["2017 06 14"], 5, ["ger"], ["comedy", "drama"], [], ["Schule"], ["Damien O'Donnell"], [], "https://68.media.tumblr.com/3ee2921c4ae16670e0bfcade2399074b/tumblr_os7wmtfn8p1v2s5upo1_250.jpg"],
	        
["film", ["Mortdecai", "Mortdecai - Der Teilzeitgauner"], "2015", ["2017 06 02"], 6, ["ger"], ["action", "adventure"], ["syl"], [], ["David Koepp"], ["Johnny Depp", "Gwyneth Paltrow", "Jeff Goldblum"], "https://68.media.tumblr.com/e9fdb1b27e365a3858ba2d95fd157732/tumblr_os7wilOFWX1v2s5upo1_250.jpg"],
	        
["film", ["Shrek 2", "Shrek 2 - Der tollkühne Held kehrt zurück"], "2004", ["2017 05 01", "2018 09 17"], 7, ["ger"], ["animation", "adventure", "comedy"], [], ["Netflix", "Shrek"], ["Andrew Adamson", "Kelly Asbury", "Conrad Vernon"], [], "https://68.media.tumblr.com/e23642a17742f11ff60c8655c6ea5600/tumblr_oqu1cffUwd1v2s5upo1_250.jpg"],
	        
["film", ["Arrival"], "2016", ["2017 04 23"], 8, ["ger"], ["drama", "mystery", "sci-fi"], [], [], ["Denis Villeneuve"], ["Amy Adams", "Jeremy Renner"], "https://68.media.tumblr.com/d2d8214d708299c7122cd40bdc6c788c/tumblr_oovk0rrHb11v2s5upo1_250.jpg"],
	        
["film", ["Tangled"], "2010", ["2017 04 17"], 7, ["ger"], ["animation", "adventure"], [], [], ["Nathan Greno", "Byron Howard"], [], "https://68.media.tumblr.com/b533482ed1218266106a3ca0ba880619/tumblr_oor74rJGZc1v2s5upo1_250.jpg"],
	        
["film", ["The Girl with the Dragon Tattoo", "Verblendung"], "2011", ["2017 04 17"], 8, ["ger"], ["crime", "drama", "thriller"], [], [], ["David Fincher"], ["Daniel Craig", "Rooney Mara", "Stellan Skarsgård", "Christopher Plummer"], "https://68.media.tumblr.com/501e722a8df0c5354b24a62b6c5c1ec4/tumblr_oor774khJ41v2s5upo1_250.jpg"],
	        
["film", ["Hunt for the Wilderpeople", "Wo die wilden Menschen jagen"], "2016", ["2017 04 13"], 8, ["ger"], ["adventure", "comedy"], [], [], ["Taika Waititi"], ["Sam Neill", "Julian Dennison"], "https://68.media.tumblr.com/5eb0b72a042e1a59b4960ebbb9b01a49/tumblr_oor79j7Xly1v2s5upo1_250.jpg"],
	        
["film", ["Tschick"], "2016", ["2017 04 12"], 8, ["ger"], ["comedy", "drama"], [], [], ["Fatih Akin"], [], "https://68.media.tumblr.com/b4118a44f06f7f29091a368b6d46064c/tumblr_oor7blm2k71v2s5upo1_250.jpg"],
	        
["film", ["Juno"], "2007", ["2017 04 11"], 7, ["ger"], ["comedy", "drama"], [], [], ["Jason Reitman"], ["Elliot Page", "Michael Cera", "Jennifer Garner", "Jason Bateman", "J.K. Simmons", "Rainn Wilson", "Allison Janney"], "https://68.media.tumblr.com/4da555244f94995b2bef97c07f0ee676/tumblr_ooakvic2MF1v2s5upo1_250.jpg"],
	        
["film", ["Steamboy", "Steamboy", "Suchîmubôi"], "2004", ["2017 04 09"], 7, ["eng"], ["anime", "action", "sci-fi"], [], [], ["Katsuhiro Ôtomo"], [], "https://68.media.tumblr.com/6a7ef35dc28a683e77d4c4e6d30eac86/tumblr_ooakjqPI7W1v2s5upo1_250.jpg"],
	        
["film", ["Tokyo Godfathers", "Tokyo Godfathers", "Tôkyô goddofâzâzu"], "2003", ["2017 04 09", "2021 12 27"], 9, ["jap"], ["anime", "adventure"], ["bini", "mai"], ["Netflix"], ["Satoshi Kon", "Shôgo Furuya"], [], "https://68.media.tumblr.com/a6d29e77e1e4de54cf0cfe0a63560d45/tumblr_ooakh7ZDJs1v2s5upo1_250.jpg"],
	        
["film", ["Passengers"], "2016", ["2017 04 08", "2019 05 12"], 8, ["ger"], ["drama", "romance", "sci-fi"], ["bini"], [], ["Morten Tyldum"], ["Jennifer Lawrence", "Chris Pratt", "Laurence Fishburne"], "https://68.media.tumblr.com/a31580f1e17ac6277625026905cb2a4d/tumblr_ooakd7xiDr1v2s5upo1_250.jpg"],
	        
["film", ["Doctor Strange"], "2016", ["2017 04 07"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], ["Marvel"], ["Scott Derrickson"], ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Benedict Wong", "Mads Mikkelsen", "Tilda Swinton", "Stan Lee", "Chris Hemsworth"], "https://68.media.tumblr.com/32e45aa113b702804b73dafda1710cf5/tumblr_oo37120MiT1v2s5upo1_250.jpg"],
	        
["film", ["Assassin's Creed"], "2016", ["2017 04 04"], 5, ["ger"], ["action", "adventure"], [], [], ["Justin Kurzel"], ["Michael Fassbender", "Marion Cotillard", "Charlotte Rampling", "Callum Turner", "Jeremy Irons", "Essie Davis"], "https://68.media.tumblr.com/88119bf4c44da511899c78867bd47590/tumblr_oo35ctGwfI1v2s5upo1_250.jpg"],
	        
["film", ["Sucker Punch"], "2011", ["2017 04 04"], 6, ["ger"], ["action", "adventure"], [], [], ["Zack Snyder"], ["Emily Browning", "Abbie Cornish", "Jena Malone", "Carla Gugino"], "https://68.media.tumblr.com/8d84a8b4fa6abff9a2ccde557d8feec0/tumblr_oo35apbtWI1v2s5upo1_250.jpg"],
	        
["film", ["Into the Wild"], "2007", ["2016 04 03"], 10, ["ger"], ["adventure", "biography"], [], [], ["Sean Penn"], ["Vince Vaughn", "Kristen Stewart", "Zach Galifianakis", "Jena Malone", "Marcia Gay Harden"], "https://49.media.tumblr.com/36d4aec8cd538e62c39b4b9b335eeb4d/tumblr_o54b5pxSCx1v2s5upo1_250.jpg"],
	        
["film", ["District 9"], "2009", ["2017 04 03"], 7, ["ger"], ["action", "sci-fi"], [], [], ["Neill Blomkamp"], [], "https://68.media.tumblr.com/1364359ae7d145a5abb85f1bd9574e7d/tumblr_oo34xuBkeg1v2s5upo1_250.jpg"],
	        
["film", ["Spaceballs"], "1987", ["2017 02 25"], 7, ["ger"], ["adventure", "comedy"], ["jani", "bini", "jessie", "lilly", "linh", "sai"], [], ["Mel Brooks"], ["Rick Moranis"], "https://68.media.tumblr.com/4d4a93287ef19a56c6c3da621835cd86/tumblr_om8zwca8MR1v2s5upo1_250.jpg"],
	        
["film", ["Westworld"], "1973", ["2017 02 15"], 5, ["ger"], ["action", "sci-fi", "western"], [], [], ["Michael Crichton"], [], "https://68.media.tumblr.com/755e731a8e09ad3f8407ed69925d548e/tumblr_olj7gwzEU61v2s5upo1_250.jpg"],
	        
["film", ["Microbe & Gasoline", "Mikro & Sprit", "Microbe et Gasoil"], "2015", ["2017 01 26"], 7, ["ger"], ["adventure", "comedy"], [], [], ["Michel Gondry"], ["Audrey Tautou"], "https://68.media.tumblr.com/a59f468cf12d4a2a7e49ce52fddd6265/tumblr_okelj2Mz7N1v2s5upo1_250.jpg"],
	        
["short", ["Playground"], "2017", ["2017 01 26"], 7, ["eng"], [], [], [], ["Bertie Gilbert", "Sammy Paul"], [], "https://68.media.tumblr.com/c28aa1a5b17ab8fff2a17659be4d59ee/tumblr_okel1dh5nC1v2s5upo1_250.jpg"],
	        
["film", ["Zapped", "Ferngesteuert"], "2014", ["2017 01 22"], 5, ["ger"], ["comedy", "family"], [], [], ["Peter DeLuise"], ["Zendaya", "Emilia McCarthy"], "https://68.media.tumblr.com/c4cafb6e37adc2da5849ec9681cab0ac/tumblr_ok8d66VULO1v2s5upo1_250.jpg"],
	        
["film", ["Me Before You", "Ein ganzes halbes Jahr"], "2016", ["2017 01 21", "2019 01 03"], 8, ["ger"], ["drama", "romance"], ["syl"], [], ["Thea Sharrock"], ["Sam Claflin", "Vanessa Kirby", "Emilia Clarke", "Matthew Lewis", "Charles Dance"], "https://68.media.tumblr.com/2614c0a7f5ecdc90fa9709c537519bd9/tumblr_ok5g3f6oIg1v2s5upo1_250.jpg"],
	        
["film", ["Edge of Tomorrow", "Edge of Tomorrow - Live. Die. Repeat"], "2014", ["2017 01 10", "2021 12 17"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], ["Netflix"], ["Doug Liman"], ["Tom Cruise", "Emily Blunt", "Noah Taylor", "Hillary Clinton", "Lara Pulver"], "https://68.media.tumblr.com/9b746359461b357738288b49fe826bd4/tumblr_ojmer7q46Q1v2s5upo1_250.jpg"],
	        
["film", ["Shrek", "Shrek - Der tollkühne Held"], "2001", ["2017 01 02", "2018 09 17"], 6, ["ger"], ["animation", "adventure"], [], ["Netflix", "Shrek"], ["Andrew Adamson", "Vicky Jenson"], [], "https://68.media.tumblr.com/d606e296abec939adf2de3e1a897f8a9/tumblr_oj5w7jmq3Q1v2s5upo1_250.jpg"],
	        
["film", ["Mr. Magorium's Wonder Emporium", "Mr. Magoriums Wunderladen"], "2007", ["2016 12 29"], 6, ["ger"], ["comedy", "family"], [], [], ["Zach Helm"], ["Dustin Hoffman", "Jason Bateman"], "https://68.media.tumblr.com/7cff0890eacf1cecdb6fc02b85df87f3/tumblr_oiyn496nsc1v2s5upo1_250.jpg"],
	        
["film", ["Intouchables", "Ziemlich beste Freunde"], "2011", ["2016 12 27"], 8, ["ger"], ["biography", "comedy"], [], [], ["Olivier Nakache", "Éric Toledano"], ["François Cluzet", "Omar Sy"], "https://68.media.tumblr.com/3a8da47322f01802e81ffe766939879c/tumblr_oiv17pGnzL1v2s5upo1_250.jpg"],
	        
["short", ["Fan-o-rama"], "2016", ["2016 12 23"], 6, ["eng"], ["sci-fi"], [], [], ["Dan Lanigan"], [], "https://68.media.tumblr.com/4f5f23e9d76dfad8e7b8c6a1992dd17d/tumblr_oinbx6wPvv1v2s5upo1_250.jpg"],
	        
["film", ["The Perfect Date"], "2019", ["2020 09 20"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Chris Nelson"], ["Noah Centineo", "Laura Marano", "Camila Mendes", "Joe Chrest", "Rhonda Johnson Dents"], "https://64.media.tumblr.com/8c9c6bca2102fdcc48f3c4d251507c81/90af1c41b99146f9-2a/s250x400/efd03e6ad8723bb8fc534f1cf9c021bcb3aad3a5.jpg"],
	        
["film", ["Millennium Actress", "Millennium Actress", "Sennen joyû"], "2001", ["2016 12 13"], 8, ["ger"], ["anime", "drama"], [], [], ["Satoshi Kon"], [], "https://68.media.tumblr.com/9deb090d38f93a7093de537f463f7d6d/tumblr_oi6svhBI7j1v2s5upo1_250.jpg"],
	        
["film", ["Mirror Mirror", "Spieglein Spieglein - Die wirklich wahre Geschichte von Schneewittchen"], "2012", ["2016 12 10", "2018 05 12", "2019 08 14"], 7, ["ger"], ["adventure", "comedy", "fantasy"], ["syl"], ["Netflix", "DVD"], ["Tarsem Singh"], ["Julia Roberts", "Lily Collins", "Martin Klebba"], "https://68.media.tumblr.com/85e6af5ca1ea499e7e2559c88bf40bac/tumblr_ohzs6oEFYx1v2s5upo1_250.jpg"],
	        
["film", ["The Great Gatsby", "Der große Gatsby"], "2013", ["2016 12 04", "2018 03 22", "2023 01 28"], 7, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Baz Luhrmann"], ["Amitabh Bachchan", "Elizabeth Debicki", "Leonardo DiCaprio", "Isla Fisher", "Tobey Maguire", "Carey Mulligan", "Gemma Ward", "Callan McAuliffe", "Joel Edgerton"], "https://68.media.tumblr.com/dab91bb769730f950891cdd9f7ebd2e3/tumblr_ohnriy3QpA1v2s5upo1_250.jpg"],
	        
["film", ["The Prestige", "Prestige - Die Meister der Magie"], "2006", ["2016 12 02"], 9, ["ger"], ["drama", "mystery", "sci-fi"], [], [], ["Christopher Nolan"], ["Hugh Jackman", "Christian Bale", "Michael Caine", "Scarlett Johansson", "Rebecca Hall", "Jamie Harris"], "https://68.media.tumblr.com/c93c2fbf56473180ef3305bfa33f3a18/tumblr_ohkqlhJj9Z1v2s5upo1_250.jpg"],
	        
["film", ["Perfect Blue", "Perfect Blue", "Pâfekuto burû"], "1997", ["2016 11 28"], 7, ["ger"], ["anime", "crime", "horror"], [], [], ["Satoshi Kon"], [], "https://66.media.tumblr.com/e445a75c4d4db34800f642e133a79d2e/tumblr_ohdfnkvBJw1v2s5upo1_250.jpg"],
	        
["film", ["Paprika", "Paprika", "Papurika"], "2006", ["2016 11 26", "2016 12 18", "2017 01 23", "2017 10 23"], 9, ["ger"], ["anime", "drama", "fantasy"], ["sai"], ["fav"], ["Satoshi Kon"], [], "https://68.media.tumblr.com/803a0a4b26b858c7421be4593aefab4a/tumblr_oh9mc8lS681v2s5upo1_250.jpg"],
	        
["film", ["Lost in Translation", "Lost in Translation: Zwischen den Welten"], "2003", ["2016 11 25"], 9, ["ger"], ["comedy", "drama"], [], [], ["Sofia Coppola"], ["Scarlett Johansson", "Bill Murray", "Giovanni Ribisi", "Anna Faris"], "https://66.media.tumblr.com/090b03507e69fdb40e0c2bbf8b5b5d0f/tumblr_oh80i6KYvM1v2s5upo1_250.jpg"],
	        
["film", ["Bibi Blocksberg and the Secret of the Blue Owls", "Bibi Blocksberg und das Geheimnis der blauen Eulen"], "2004", ["2016 11 10", "2018 03 10", "2022 07 14"], 7, ["ger"], ["family", "fantasy"], ["bini"], ["Bibi Blocksberg", "Disney+"], ["Franziska Buch"], ["Sidonie von Krosigk", "Frederick Lau", "Katja Riemann"], "https://68.media.tumblr.com/a0de0fa678d6e81a7567b271f3e67b31/tumblr_ogjsiuLQPR1v2s5upo1_250.jpg"],
	        
["film", ["Kim Possible: So the Drama", "Kim Possible - Der Film: Invasion der Roboter"], "2005", ["2016 11 03", "2023 05 14"], 7, ["ger"], ["animation", "action"], ["bini", "nico"], ["Disney+"], ["Steve Loter"], [], "https://68.media.tumblr.com/e388d46edd65dc4d4a03f6f017c69e6f/tumblr_og4nw3DkbE1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible - Rogue Nation"], "2015", ["2016 10 22"], 8, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["Christopher McQuarrie"], ["Tom Cruise", "Jeremy Renner", "Simon Pegg", "Alec Baldwin", "Rebecca Ferguson", "Hermione Corfield"], "https://66.media.tumblr.com/d6416db392a7792d623ee68bc37a9a36/tumblr_ofgql1ZojC1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible - Ghost Protocol", "Mission: Impossible - Phantom Protokoll"], "2011", ["2016 10 22", "2018 07 26"], 7, ["ger"], ["action", "adventure"], [], ["Mission Impossible", "Netflix"], ["Brad Bird"], ["Tom Cruise", "Simon Pegg", "Jeremy Renner", "Josh Holloway", "Tom Wilkinson", "Michael Nyqvist"], "https://66.media.tumblr.com/34fa1e7eeb82c4c9a46a5f3c44f8e6fd/tumblr_ofglkprp2V1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible III"], "2006", ["2016 10 22"], 7, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["J.J. Abrams"], ["Tom Cruise", "Philip Seymour Hoffman", "Simon Pegg", "Laurence Fishburne", "Maggie Q", "Aaron Paul"], "https://68.media.tumblr.com/41874302cbda630faef2db3242c8643e/tumblr_ofge46WvyA1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible II"], "2000", ["2016 10 22"], 5, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["John Woo"], ["Tom Cruise", "Ving Rhames", "Brendan Gleeson", "William Mapother", "Anthony Hopkins", "Thandiwe Newton"], "https://68.media.tumblr.com/d45839929f432af8d837a550b10680cf/tumblr_ofg8xpnLBx1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible"], "1996", ["2016 10 22"], 5, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["Brian De Palma"], ["Tom Cruise", "Jon Voight", "Jean Reno", "Ving Rhames"], "https://66.media.tumblr.com/91631d8d0dd4bc59b6becdc2106b1c13/tumblr_ofg39sMxJr1v2s5upo1_250.jpg"],
	        
["film", ["Invisible Sister", "Überraschend unsichtbar"], "2015", ["2016 10 21"], 7, ["ger"], ["comedy"], [], [], ["Paul Hoen"], ["Rowan Blanchard", "Paris Berelc", "Karan Brar"], "https://66.media.tumblr.com/70e6e70f96a83c55bc2bce7401348575/tumblr_ofez6snN8w1v2s5upo1_250.jpg"],
	        
["film", ["X-Men: Apocalypse"], "2016", ["2016 10 21"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Nicholas Hoult", "Evan Peters", "Tye Sheridan", "Lana Condor", "Stan Lee", "Zeljko Ivanek", "Hugh Jackman", "Alexandra Shipp", "Ben Hardy", "Sophie Turner"], "https://66.media.tumblr.com/7f10be72d9112640fb906a002ccfd4f6/tumblr_ofehce2Pw51v2s5upo1_250.jpg"],
	        
["film", ["Ex Machina"], "2014", ["2016 10 15"], 7, ["ger"], ["drama", "sci-fi"], [], [], ["Alex Garland"], ["Domhnall Gleeson", "Oscar Isaac", "Alicia Vikander"], "https://68.media.tumblr.com/97dab00446b2dfe145915ab8e67df8ac/tumblr_of3rnupqdD1v2s5upo1_250.jpg"],
	        
["film", ["Finding Dory", "Findet Dorie"], "2016", ["2016 10 07", "2018 09 21"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl", "je"], ["Kino", "Netflix"], ["Andrew Stanton", "Angus MacLane"], [], "https://68.media.tumblr.com/ca3b3ee1d96b008e6a6fc90aacd3fda1/tumblr_oep4xmPIY01v2s5upo1_250.jpg"],
	        
["film", ["You Get Me"], "2017", ["2020 09 20"], 4, ["ger"], ["crime", "drama"], [], ["Netflix"], ["Brent Bonacorso"], ["Bella Thorne", "Halston Sage", "Anna Akana"], "https://64.media.tumblr.com/2447db536bda941afdaa1c6d0e1adcde/b44634d5f611e1ee-f0/s250x400/5be897c9d949b233f856d39edc9b64958e6d77ef.jpg"],
	        
["film", ["Mohabbatein", "Denn meine Liebe ist unsterblich", "Mohabbatein"], "2000", ["2016 09 26"], 8, ["ger"], ["musical", "drama", "bollywood"], [], [], ["Aditya Chopra"], ["Amitabh Bachchan", "Shah Rukh Khan", "Anupam Kher", "Archana Puran Singh", "Rushad Rana"], "https://66.media.tumblr.com/15545424a452a0ff2c74e33e3632cae8/tumblr_oe4hvjAV0t1v2s5upo1_250.jpg"],
	        
["film", ["Hounddog"], "2007", ["2016 09 21"], 7, ["ger"], ["drama", "music"], [], [], ["Deborah Kampmeier"], ["Dakota Fanning", "Isabelle Fuhrman"], "https://68.media.tumblr.com/12126caa72ffce453ab734560bbc2a65/tumblr_odz6joyjlK1v2s5upo1_250.jpg"],
	        
["film", ["The Royal Tenenbaums", "Die Royal Tenenbaums"], "2001", ["2016 09 14"], 8, ["ger"], ["comedy", "drama"], [], [], ["Wes Anderson"], ["Anjelica Huston", "Ben Stiller", "Gwyneth Paltrow", "Owen Wilson", "Bill Murray", "Alec Baldwin"], "https://66.media.tumblr.com/84d4ea019f8ee088f8074a6832d5ee0a/tumblr_odi6ykVqks1v2s5upo1_250.jpg"],
	        
["film", ["Mothers and Daughters", "Mütter & Töchter"], "2016", ["2016 09 12"], 1, ["ger"], ["drama"], [], [], ["Paul Duddridge", "Nigel Levy"], ["Luke Mitchell", "Christina Ricci"], "https://68.media.tumblr.com/e00a28ba032e45c5e0e259da42653b1e/tumblr_odeh2z2o191v2s5upo1_250.jpg"],
	        
["film", ["In Our Nature"], "2012", ["2016 09 10"], 2, ["ger"], ["drama"], [], [], ["Brian Savelson"], ["Jena Malone", "John Slattery"], "https://68.media.tumblr.com/fa8be94eaa137dc1884d349c9c1a5e35/tumblr_odb5kbPpSI1v2s5upo1_250.jpg"],
	        
["film", ["Prelude to a Kiss", "Zauberhafte Zeiten"], "1992", ["2016 09 09"], 6, ["ger"], ["comedy", "fantasy"], [], [], ["Norman René"], ["Alec Baldwin", "Stanley Tucci"], "https://68.media.tumblr.com/849640b404d1c168ac1aea26804ebb7b/tumblr_oday6c9wjH1v2s5upo1_250.jpg"],
	        
["film", ["Family Weekend"], "2013", ["2016 09 07"], 8, ["ger"], ["comedy", "drama"], [], [], ["Benjamin Epps"], ["Olesya Rulin", "Joey King"], "https://66.media.tumblr.com/30f31de3c44b1d47267571c159c6affd/tumblr_od5adzpUoA1v2s5upo1_250.jpg"],
	        
["film", ["Come Out and Play", "Come Out and Play - Kinder des Todes"], "2012", ["2016 08 31"], 4, ["ger"], ["horror"], [], [], ["Makinov"], [], "https://68.media.tumblr.com/44f485550d069bff8f3a9d24d62ca59c/tumblr_ocw13mFiRD1v2s5upo1_250.jpg"],
	        
["film", ["Jane Eyre"], "2011", ["2016 08 29"], 6, ["ger"], ["drama", "romance"], [], [], ["Cary Joji Fukunaga"], ["Mia Wasikowska", "Sally Hawkins", "Simon McBurney", "Judi Dench", "Michael Fassbender", "Jamie Bell"], "https://68.media.tumblr.com/c1d3cf9a743e40ea158b0c8cd87e2588/tumblr_ocoertqVvM1v2s5upo1_250.jpg"],
	        
["film", ["How I Live Now"], "2013", ["2016 08 28"], 9, ["ger"], ["romance", "sci-fi", "war"], [], [], ["Kevin Macdonald"], ["Saoirse Ronan", "Tom Holland", "George MacKay"], "https://68.media.tumblr.com/b59ca86a6fe971bc23438f35d30a1783/tumblr_ocmgz37wr41v2s5upo1_250.jpg"],
	        
["film", ["Captain Fantastic", "Captain Fantastic: Einmal Wildnis und zurück"], "2016", ["2016 08 26", "2016 10 11", "2018 01 14", "2022 01 01"], 10, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], ["fav", "Kino"], ["Matt Ross"], ["Viggo Mortensen", "George MacKay", "Annalise Basso", "Trin Miller", "Kathryn Hahn", "Steve Zahn", "Missi Pyle", "Frank Langella", "Erin Moriarty"], "https://66.media.tumblr.com/f65ff8a4e2345be785047f360d1d3bae/tumblr_ocjc36yGOA1v2s5upo1_250.jpg"],
	        
["film", ["Freaky Friday", "Freaky Friday - Ein voll verrückter Freitag"], "2003", ["2016 08 25"], 7, ["ger"], ["comedy", "family", "music"], [], [], ["Mark Waters"], ["Mark Harmon", "Stephen Tobolowsky", "Lindsay Lohan"], "https://68.media.tumblr.com/3b60ed12f22ca201b3ceb0e3f32bc77b/tumblr_ochc8xXkiT1v2s5upo1_250.jpg"],
	        
["film", ["The Boat That Rocked", "Radio Rock Revolution"], "2009", ["2016 08 21"], 10, ["ger"], ["comedy", "drama", "music"], [], [], ["Richard Curtis"], ["Philip Seymour Hoffman", "Bill Nighy", "Nick Frost", "Talulah Riley", "Poppy Delevingne", "Tom Sturridge"], "https://66.media.tumblr.com/bf1e8c5bd9fe2a32ca038d73cc485315/tumblr_oca1x7IiK21v2s5upo1_250.jpg"],
	        
["film", ["Inception"], "2010", ["2016 08 21", "2017 04 11", "2022 02 02"], 10, ["ger"], ["action", "adventure", "sci-fi"], [], ["fav", "Netflix"], ["Christopher Nolan"], ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Marion Cotillard", "Pete Postlethwaite", "Michael Caine", "Talulah Riley", "Lukas Haas", "Ken Watanabe", "Cillian Murphy"], "https://66.media.tumblr.com/2f08ef49b7a55d03cd39e0311d41ddc7/tumblr_oc9otorDMl1v2s5upo1_250.jpg"],
	        
["film", ["A Clockwork Orange", "Uhrwerk Orange"], "1971", ["2016 08 19"], 8, ["ger"], ["crime", "drama"], [], [], ["Stanley Kubrick"], ["Malcolm McDowell"], "https://68.media.tumblr.com/d9549beb63328ea8e846d6cfcc129c14/tumblr_oc5wqv0JLZ1v2s5upo1_250.jpg"],
	        
["film", ["Addams Family Values", "Die Addams Family in verrückter Tradition"], "1993", ["2016 08 19", "2017 04 16"], 9, ["ger"], ["comedy", "fantasy"], [], ["bby"], ["Barry Sonnenfeld"], ["Anjelica Huston", "Joan Cusack", "Christina Ricci", "Tony Shalhoub", "Carel Struycken"], "https://66.media.tumblr.com/f2118bddeb6e01d3b3c0c656cab3f1d9/tumblr_oc5whsPtHQ1v2s5upo1_250.jpg"],
	        
["film", ["The Addams Family", "Die Addams Family"], "1991", ["2016 08 17"], 7, ["ger"], ["comedy", "fantasy"], [], ["bby"], ["Barry Sonnenfeld"], ["Anjelica Huston", "Christina Ricci", "Carel Struycken"], "https://66.media.tumblr.com/05eeacc2b74df121d74ae629e382d374/tumblr_oc2jdzhNpG1v2s5upo1_250.jpg"],
	        
["film", ["Let's Be Evil"], "2016", ["2016 08 13", "2017 10 10"], 6, ["eng"], ["horror", "sci-fi"], [], ["Netflix"], ["Martin Owen"], ["Elizabeth Morris"], "https://68.media.tumblr.com/df71a78d4180d65f56e29ad0a425a190/tumblr_obuqhe5Amh1v2s5upo1_250.jpg"],
	        
["film", ["Mr. & Mrs. Smith"], "2005", ["2016 07 27"], 7, ["ger"], ["action", "comedy"], [], [], ["Doug Liman"], ["Brad Pitt", "Angelina Jolie", "Vince Vaughn"], "https://66.media.tumblr.com/a23237a0b2b955cfc19d98af96c4069f/tumblr_oazr45ZLBo1v2s5upo1_250.jpg"],
	        
["film", ["The Revenant", "The Revenant - Der Rückkehrer"], "2015", ["2016 07 26"], 6, ["ger"], ["action", "adventure", "history"], [], [], ["Alejandro G. Iñárritu"], ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson", "Will Poulter"], "https://68.media.tumblr.com/cbe5b2e2db515627e52b5ec2de329592/tumblr_oazdwtn3HW1v2s5upo1_250.jpg"],
	        
["film", ["All the Wilderness"], "2014", ["2016 07 20"], 9, ["eng"], ["drama"], [], [], ["Michael James Johnson"], ["Danny DeVito", "Isabelle Fuhrman"], "https://66.media.tumblr.com/7625ac901a8eb637a79dedded990127e/tumblr_oamolvm9JT1v2s5upo1_250.jpg"],
	        
["film", ["The Hundred-Year-Old Man Who Climbed Out the Window and Disappeared", "Der Hundertjährige, der aus dem Fenster stieg und verschwand", "Hundraåringen som klev ut genom fönstret och försvann"], "2013", ["2016 07 08"], 6, ["ger"], ["adventure", "comedy"], ["syl"], [], ["Felix Herngren"], [], "https://66.media.tumblr.com/e05fea93fcdd5ed58b66c5f9555b0677/tumblr_oa061s5o271v2s5upo1_250.jpg"],
	        
["film", ["The F Word", "The F-Word"], "2013", ["2016 07 08"], 8, ["ger"], ["comedy", "romance"], [], [], ["Michael Dowse"], ["Daniel Radcliffe", "Zoe Kazan", "Adam Driver"], "https://66.media.tumblr.com/6c70884519cc03202838cf0fed9d21a7/tumblr_oa05ixc5DB1v2s5upo1_250.jpg"],
	        
["film", ["Zootopia", "Zoomania"], "2016", ["2016 06 29"], 6, ["ger"], ["animation", "adventure"], [], [], ["Byron Howard", "Rich Moore", "Jared Bush"], [], "https://68.media.tumblr.com/c1e7ff1ec44d0ec8b1da5cf4033ad427/tumblr_o9llty3OxE1v2s5upo1_250.jpg"],
	        
["film", ["Orphan", "Orphan - Das Waisenkind"], "2009", ["2016 06 20", "2016 07 02", "2016 07 10", "2016 12 05", "2021 12 28"], 7, ["ger"], ["horror", "mystery"], ["bini"], ["bby", "DVD"], ["Jaume Collet-Serra"], ["Peter Sarsgaard", "Isabelle Fuhrman", "CCH Pounder", "Vera Farmiga"], "https://66.media.tumblr.com/77030656f845b49936c308b742d82dac/tumblr_o92y034WXY1v2s5upo1_250.jpg"], /*erstbewertung: 10*/
	        
["film", ["Standing Up"], "2013", ["2016 06 17"], 9, ["ger"], ["drama"], [], [], ["D.J. Caruso"], ["Annalise Basso"], "https://66.media.tumblr.com/dd75d5b1552c6c2308ca925c4cd139b9/tumblr_o8xhkhJqgc1v2s5upo1_250.jpg"],
	        
["film", ["The Sound of Music", "Meine Lieder, meine Träume"], "1965", ["2016 06 15", ["2022 03 13", "2022 03 14"]], 8, ["ger", "eng"], ["biography", "drama", "music"], [], ["Disney+"], ["Robert Wise"], [], "https://66.media.tumblr.com/5262e2c4b18c22f1dc0f966195120fa4/tumblr_o8twjmVmli1v2s5upo1_250.jpg"],
	        
["film", ["Forrest Gump"], "1994", ["2016 06 13", "2023 02 19"], 6, ["ger", "eng"], ["drama", "romance"], [], ["Netflix"], ["Robert Zemeckis"], ["Tom Hanks", "Sam Anderson", "John F. Kennedy", "John Lennon", "Richard Nixon", "Gary Sinise"], "https://66.media.tumblr.com/eeb123f80cdb0bf25e3d0cccea3bc930/tumblr_o8q1umC0Ey1v2s5upo1_250.jpg"],
	        
["film", ["Bee Movie", "Bee Movie - Das Honigkomplott"], "2007", ["2016 06 12"], 4, ["ger"], ["animation", "adventure"], [], [], ["Simon J. Smith", "Steve Hickner"], [], "https://66.media.tumblr.com/3b38bf4c8872c24754cf7cb447f7bb75/tumblr_o8ptkg6gG41v2s5upo1_250.jpg"],
	        
["short", ["Mara & Chen"], "2016", ["2016 06 09"], 5, ["eng"], ["action", "comedy"], [], [], ["Shawna Howson"], ["Shawna Howson"], "https://68.media.tumblr.com/6d0fefc5389726bdd4a4f102698bed06/tumblr_o8ijlhIRsl1v2s5upo1_250.jpg"],
	        
["film", ["Chronicle", "Chronicle - Wozu bist du fähig?"], "2012", ["2016 05 31", "2017 08 21"], 8, ["ger"], ["drama", "sci-fi"], ["bini"], [], ["Josh Trank"], ["Dane DeHaan", "Michael Kelly", "Michael B. Jordan"], "https://66.media.tumblr.com/efb2369a7db1ef6c490302c4bc58ff7d/tumblr_o81un96nwU1v2s5upo1_250.jpg"],
	        
["film", ["Return to Nim's Island", "Die Rückkehr zur Insel der Abenteuer"], "2013", ["2016 05 29"], 4, ["ger"], ["adventure", "family"], [], [], ["Brendan Maher"], ["Bindi Irwin", "Toby Wallace"], "https://66.media.tumblr.com/a3915284b36d4cb24840fb33f52e5627/tumblr_o7y03q9Hm11v2s5upo1_250.jpg"],
	        
["film", ["Very Good Girls", "Very Good Girls - Die Liebe eines Sommers"], "2013", ["2016 05 19"], 7, ["ger"], ["drama", "romance"], [], [], ["Naomi Foner"], ["Dakota Fanning", "Elizabeth Olsen", "Peter Sarsgaard", "Boyd Holbrook"], "https://68.media.tumblr.com/3ef793e9ef1bd966c5f227a3f682a51c/tumblr_o7ha22aUeu1v2s5upo1_250.jpg"],
	        
["film", ["The DUFF", "Duff: Hast du keine, bist du eine"], "2015", ["2016 05 13"], 8, ["ger"], ["comedy", "romance"], [], [], ["Ari Sandel"], ["Mae Whitman", "Robbie Amell", "Skyler Samuels", "Nick Eversman", "Ken Jeong", "Allison Janney", "Bella Thorne"], "https://66.media.tumblr.com/305931819a8c22125b3d42a306382f64/tumblr_o74issy9JA1v2s5upo1_250.jpg"],
	        
["film", ["Footloose"], "1984", ["2016 05 13"], 8, ["ger"], ["drama", "music"], [], [], ["Herbert Ross"], ["Kevin Bacon", "John Lithgow", "Sarah Jessica Parker"], "https://68.media.tumblr.com/7577b6ec5b2e40f7a1b060a897f5723c/tumblr_o73x2xlfc61v2s5upo1_250.jpg"],
	        
["short", ["Ruin"], "2011", ["2016 05 12", "2017 08 06"], 5, [], ["animation"], ["nico", "sai", "jessie"], [], ["Wes Ball"], [], "https://66.media.tumblr.com/7f0c303dbf6f13683118f60ea10d8e2d/tumblr_o72wkpwjpa1v2s5upo1_250.jpg"],
	        
["film", ["The Accidental Spy"], "2001", ["2016 05 09"], 7, ["ger"], ["action", "comedy"], [], [], ["Teddy Chan"], ["Jackie Chan"], "https://66.media.tumblr.com/95e4f5efb2cbc9faebbeef37f644c44c/tumblr_o6x5ufY4th1v2s5upo1_250.jpg"],
	        
["film", ["The Chronicles of Narnia: Prince Caspian", "Die Chroniken von Narnia - Prinz Kaspian von Narnia"], "2008", ["2016 05 07", "2021 12 21"], 6, ["ger"], ["action", "adventure"], [], ["Narnia", "Disney+"], ["Andrew Adamson"], ["Ben Barnes", "Georgie Henley", "Skandar Keynes", "William Moseley", "Anna Popplewell", "Peter Dinklage", "Tilda Swinton", "Pierfrancesco Favino"], "https://66.media.tumblr.com/977c1e07e988c3c871f04ba658a40489/tumblr_o6tmgrkwqY1v2s5upo1_250.jpg"],
	        
["film", ["Godzilla"], "2014", ["2016 04 30", "2017 11 01"], 7, ["ger"], ["action", "adventure"], ["bini", "nico"], ["Godzilla", "Netflix"], ["Gareth Edwards"], ["Ken Watanabe", "Bryan Cranston", "Sally Hawkins", "David Strathairn"], "https://68.media.tumblr.com/b9aa36ed56992b0c873cf485152a891b/tumblr_o6tletji011v2s5upo1_250.jpg"],
	        
["film", ["Fight Club"], "1999", ["2016 04 28", "2016 09 17", "2023 07 22"], 9, ["ger"], ["drama"], [], ["Disney+"], ["David Fincher"], ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"], "https://66.media.tumblr.com/96175385d3dd724e655069a52b115138/tumblr_o6tkxx0u6w1v2s5upo1_250.jpg"],
	        
["film", ["The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "Die Chroniken von Narnia - Der König von Narnia"], "2005", ["2016 04 24", "2021 12 20"], 6, ["ger"], ["adventure", "family", "fantasy"], [], ["Narnia", "Disney+"], ["Andrew Adamson"], ["Georgie Henley", "Skandar Keynes", "Anna Popplewell", "Tilda Swinton", "James McAvoy", "Jim Broadbent"], "https://66.media.tumblr.com/bb9c49e547897ce1c90b8a25060d202a/tumblr_o6tkbenbzc1v2s5upo1_250.jpg"],
	        
["film", ["The Name of the Rose", "Der Name der Rose"], "1986", ["2016 04 25"], 7, ["ger"], ["crime", "drama"], [], ["Schule"], ["Jean-Jacques Annaud"], ["Ron Perlman", "Sean Connery"], "https://49.media.tumblr.com/02ec09e71b0728dff02597e98be2a4d4/tumblr_o672zqoEyK1v2s5upo1_250.jpg"],
	        
["film", ["WALL·E", "WALL·E - Der Letzte räumt die Erde auf", "WALL-E"], "2008", ["2016 04 18", "2021 12 26"], 6, ["ger"], ["animation", "adventure"], ["bini"], ["Disney+"], ["Andrew Stanton"], [], "https://49.media.tumblr.com/786da0f609805cfac614bc391af0918c/tumblr_o5w8c393DH1v2s5upo1_250.jpg"],
	        
["film", ["Kingsman: The Secret Service"], "2014", ["2016 04 09", "2016 12 27", "2020 12 27"], 8, ["ger"], ["action", "adventure"], ["syl", "je"], ["DVD"], ["Matthew Vaughn"], ["Colin Firth", "Mark Strong", "Jack Davenport", "Samuel L. Jackson", "Michael Caine", "Taron Egerton", "Edward Holcroft"], "https://37.media.tumblr.com/27f85a150777cb16f3416c448e2f99ac/tumblr_o5dszzs1JV1v2s5upo1_250.jpg"],
	        
["film", ["The Boy and the Beast", "Der Junge und das Biest", "Bakemono no Ko"], "2015", ["2016 03 29", "2016 08 23", "2019 01 14"], 8, ["eng", "ger"], ["anime", "action"], ["bini"], ["Netflix"], ["Mamoru Hosoda"], [], "https://37.media.tumblr.com/26289f709e7c8d21acf26dd9b0da597d/tumblr_o4ugnaAky01v2s5upo1_250.jpg"],
	        
["film", ["Tomboy"], "2011", ["2016 03 27"], 10, ["ger"], ["drama"], [], ["LGBT"], ["Céline Sciamma"], [], "https://40.media.tumblr.com/ab9303ef2abad33c6edea025ab75a135/tumblr_o4pcejHKF61v2s5upo1_250.jpg"],
	        
["film", ["Monsters University", "Die Monster Uni"], "2013", ["2016 03 24", "2018 11 05"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl"], ["Netflix"], ["Dan Scanlon"], [], "https://49.media.tumblr.com/2c0b2f8cd0a2487f07e96a40e39ca044/tumblr_o4l919vmI71v2s5upo1_250.jpg"],
	        
["film", ["Total Recall"], "2012", ["2016 03 22"], 6, ["ger"], ["action", "adventure"], [], [], ["Len Wiseman"], ["Bryan Cranston", "Bill Nighy", "John Cho"], "https://40.media.tumblr.com/5af192a4a523870818ea6faa1bacf210/tumblr_o4fxwjs8gh1v2s5upo1_250.jpg"],
	        
["film", ["The Number 23", "Nummer 23"], "2007", ["2016 03 21"], 6, ["ger"], ["crime", "mystery"], [], [], ["Joel Schumacher"], ["Jim Carrey", "Logan Lerman", "Lynn Collins", "Mark Pellegrino", "Corey Stoll"], "https://49.media.tumblr.com/3c7321cbaff0b315fcdf8a6bd07e24de/tumblr_o4eoq9puyk1v2s5upo1_250.jpg"],
	        
["film", ["Flipped", "Verliebt und ausgeflippt"], "2010", ["2016 03 10"], 9, ["ger"], ["comedy", "drama"], [], [], ["Rob Reiner"], ["Madeline Carroll", "Callan McAuliffe"], "https://37.media.tumblr.com/3c2e7263a22d1ba38cd090ee41cd97bb/tumblr_o3u9u0Glug1v2s5upo1_250.jpg"],
	        
["short", ["let it be"], "2016", ["2016 03 03", "2016 03 03", "2016 05 23", "2016 08 15"], 9, ["ger"], ["drama"], [], [], ["Bertie Gilbert"], ["Savannah Brown", "Dodie Clark", "Bertie Gilbert"], "https://49.media.tumblr.com/f13dbddd6ed0936f77c3742e0863ac76/tumblr_o3h6pmEfPg1v2s5upo1_250.jpg"],
	        
["film", ["Picture Day"], "2012", ["2016 02 20"], 7, ["ger"], ["comedy", "drama"], [], [], ["Kate Melville"], [], "https://40.media.tumblr.com/04c1baca3ce09a08b233c034e829db58/tumblr_o2wmomkPuK1v2s5upo1_250.jpg"],
	        
["film", ["Ponyo on the Cliff by the Sea", "Ponyo: Das grosse Abenteuer am Meer", "Gake no ue no Ponyo"], "2008", ["2016 02 16", "2016 11 13", "2019 03 29", "2020 01 26", "2021 07 10"], 8, ["ger", "jap"], ["anime", "adventure"], ["bini", "mai", "syl"], ["Ghibli", "Netflix"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/b3acd6f7057c9ad0e6d070de0f7be079/tumblr_o2tg72sErg1v2s5upo1_250.jpg"],
	        
["short", ["Lost: Final Chapter"], "2010", ["2016 02 14"], 7, ["ger"], ["adventure"], [], [], [], ["Michael Emerson", "Naveen Andrews", "Nestor Carbonell", "Jeremy Davies", "Henry Ian Cusick", "Emilie de Ravin", "Jeff Fahey", "Matthew Fox", "Andrea Gabriel", "Jorge Garcia", "Josh Holloway", "Daniel Dae Kim", "Yunjin Kim", "Ken Leung", "Evangeline Lilly", "Rebecca Mader", "Elizabeth Mitchell", "Terry O'Quinn"], "https://49.media.tumblr.com/be71a3578d9d2dd6ba7a960a5be9378f/tumblr_o2j8inuVTJ1v2s5upo1_250.jpg"],
	        
["film", ["The Girl on the Train", "Girl on the Train"], "2014", ["2017 12 27"], 4, ["ger"], ["action", "thriller"], ["syl"], [], ["Larry Brand"], ["Henry Ian Cusick", "Stephen Lang", "Rebecca Ferguson", "Edgar Ramírez"], "https://66.media.tumblr.com/39f5ff81ecf2cc7825f48dc3bfaaf468/tumblr_pz094mrgnR1v2s5upo1_250.jpg"],
	        
["film", ["World War Z"], "2013", ["2015 10 19"], 7, ["ger"], ["action", "adventure"], ["bini", "nico"], [], ["Marc Forster"], ["Brad Pitt", "Matthew Fox", "Peter Capaldi", "Moritz Bleibtreu", "Pierfrancesco Favino"], "https://66.media.tumblr.com/5af707872333f256249dd4658efe8217/tumblr_pwf7ox03WC1v2s5upo1_250.jpg"],
	        
["short", ["A Matter of Loaf and Death", "Auf Leben und Brot"], "2008", ["2016 04 01"], 7, ["ger"], ["animation"], ["bini"], [], ["Nick Park"], [], "https://40.media.tumblr.com/68818624c709029001b9937282b7e7fe/tumblr_o4ybt204nn1v2s5upo1_250.jpg"],
	        
["film", ["The Garden of Words"], "2013", ["2016 03 30"], 7, ["jap"], ["anime", "drama"], ["bini"], [], ["Makoto Shinkai"], [], "https://40.media.tumblr.com/785c031bb41f3d37bb25f602aebcaf43/tumblr_o4velsP8Nw1v2s5upo1_250.jpg"],
	        
["film", ["Indiana Jones and the Kingdom of the Crystal Skull", "Indiana Jones und das Königreich des Kristallschädels"], "2008", ["2016 03 21", "2017 11 01", "2023 07 21"], 8, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Indiana Jones", "Netflix"], ["Steven Spielberg"], ["Harrison Ford", "Cate Blanchett", "Shia LaBeouf", "Andrew Divoff", "Alan Dale", "Neil Flynn", "Karen Allen"], "https://40.media.tumblr.com/7ac811363dde5fb36742145ff5a077c0/tumblr_o4eot320G31v2s5upo1_250.jpg"],
	        
["film", ["Indiana Jones and the Last Crusade", "Indiana Jones und der letzte Kreuzzug"], "1989", ["2016 02 13", "2023 07 08"], 7, ["ger"], ["action", "adventure"], ["bini", "syl"], ["Indiana Jones"], ["Steven Spielberg"], ["Harrison Ford", "Sean Connery", "Alison Doody"], "https://49.media.tumblr.com/46dcb49054fe63c9596e759f92207ef9/tumblr_o2j6kc2glH1v2s5upo1_250.jpg"],
	        
["film", ["The Falling"], "2014", ["2016 01 29"], 8, ["ger"], ["drama", "mystery"], [], [], ["Carol Morley"], ["Maisie Williams", "Florence Pugh", "Ellie Bamber"], "https://49.media.tumblr.com/2ea7f2b5367a91d098bd3d5b679f099c/tumblr_o1q7miQoB91v2s5upo1_250.jpg"],
	        
["film", ["Burnt", "Im Rausch der Sterne"], "2015", ["2016 01 20"], 5, ["ger"], ["comedy", "drama"], ["syl"], ["Kino"], ["John Wells"], ["Bradley Cooper", "Daniel Brühl", "Omar Sy", "Uma Thurman", "Lily James", "Alicia Vikander"], "https://40.media.tumblr.com/e7aff9b959e9260c6daeb477d8b1b965/tumblr_o1bafkydum1v2s5upo1_250.jpg"],
	        
["film", ["House of Flying Daggers", "House of Flying Daggers", "Shi mian mai fu"], "2004", ["2016 01 16"], 6, ["eng"], ["action", "adventure"], [], [], ["Yimou Zhang"], ["Ziyi Zhang"], "https://37.media.tumblr.com/7faec558c3eb0e837a5f8065fd210b2c/tumblr_o1245d69he1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 2: The Fourteenth Target", "Detektiv Conan 2: Das 14. Ziel", "Meitantei Conan 2: 14 banme no target"], "1998", ["2015 10 09"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://66.media.tumblr.com/dab1a81557edd7e343851c58667a40c8/tumblr_ppxzjqEf9T1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 3: The Last Wizard of the Century", "Detektiv Conan 3: Der Magier des letzten Jahrhunderts", "Meitantei Conan 3: Seiki matsu no majutsushi"], "1999", ["2015 11 29"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kenji Kodama", "Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/3c9a85f7f4f1914ac7d0c287c89cb471/tumblr_ppuw4pCHGy1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 4: Captured in Her Eyes", "Detektiv Conan 4: Der Killer in ihren Augen", "Meitantei Conan 4: Hitomi no naka no ansatsusha"], "2000", ["2015 12 30"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://37.media.tumblr.com/313f89ab3a660f0a71ae6e320f0eb2d2/tumblr_o06seso1vs1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 5: Countdown to Heaven", "Detektiv Conan 5: Countdown zum Himmel", "Meitantei Conan 5: Tengoku no countdown"], "2001", ["2015 12 30"], 7, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://40.media.tumblr.com/a30fa4405415badc7442367732518280/tumblr_o06xe2YpHN1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 6: The Phantom of Baker Street", "Detektiv Conan 6: Das Phantom der Baker Street", "Meitantei Conan 6: Bekâ Sutorîto no bôrei"], "2002", ["2016 03 19"], 5, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://40.media.tumblr.com/5065bf91f30f5881c1d4b05e584c82c2/tumblr_o4e0llhbK31v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 7: Crossroad in the Ancient Capital", "Detektiv Conan 7: Die Kreuzung des Labyrinths", "Meitantei Conan 7: Meikyuu no crossroad"], "2003", ["2016 04 15"], 5, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://49.media.tumblr.com/26009e8d2a7e3167e583c8158fc5421d/tumblr_o5rnrvJzWY1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 8: Magician of the Silver Sky", "Detektiv Conan 8: Der Magier mit den Silberschwingen"], "2004", ["2016 04 23"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://49.media.tumblr.com/a0a8eb39c5173e9309bb99478c9c11c5/tumblr_o6516kLDjF1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 9: Strategy Above the Depths", "Detektiv Conan 9: Das Komplott über dem Ozean"], "2005", ["2016 07 10"], 5, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://68.media.tumblr.com/ac85f3f37bd217401475e16e7ff3181c/tumblr_oa43jnnxfU1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 10: Requiem of the Detectives", "Detektiv Conan 10: Das Requiem der Detektive", "Meitantei Conan 10: Tanteitachi no requiem"], "2006", ["2016 07 25", "2019 02 20"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/e6b89d61d3bdb508a3bee76abc82fc1e/tumblr_oavyjkJghC1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 11: Jolly Roger in the Deep Azure", "Detektiv Conan 11: Die azurblaue Piratenflagge", "Meitantei Conan 11: Konpeki no hitsugi"], "2007", ["2017 12 10"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/afdfd9bc195c090bd44ef64fe6468651/tumblr_pyqyp3LSLD1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 12: Full Score of Fear", "Detektiv Conan 12: Die Partitur des Grauens", "Meitantei Conan 12: Senritsu no furu sukoa"], "2008", ["2017 12 15"], 5, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/136db777c81b4804bab1beed4fbf366a/tumblr_pyqyrcYtmA1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 13: The Raven Chaser", "Detektiv Conan 13: Der nachtschwarze Jäger", "Meitantei Conan 13: Shikkoku no chaser"], "2009", ["2019 02 12"], 5, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/15e1aeb5b9e41a01d8c2e93e53978298/6b694199e36d780a-83/s250x400/3f4faec6ac5ee5bda3298c91be12f13437fda432.jpg"],
	        
["film", ["Detective Conan 14: The Lost Ship in the Sky", "Detektiv Conan 14: Das verlorene Schiff im Himmel", "Meitantei Conan 14: Tenkuu no rosuto shippu"], "2010", ["2018 05 04"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/647d8f0c2ec662f1df8c6e9e97502ff7/tumblr_pzdf7cZ1oE1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 15: Quarter of Silence", "Detektiv Conan 15: Die 15 Minuten der Stille", "Meitantei Conan 15: Chinmoku no kuôtâ"], "2011", ["2018 05 04", "2020 08 03"], 7, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kôbun Shizuno"], [], "https://66.media.tumblr.com/89ec61f73eefc45628e4c88e5a2749a8/tumblr_pzfe1lJG6i1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 16: The Eleventh Striker", "Detektiv Conan 16: Der 11. Stürmer", "Meitantei Conan 16: Juichi-ninme no Striker"], "2012", ["2018 05 21", "2020 08 04"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kôbun Shizuno"], [], "https://66.media.tumblr.com/82ceb9b1f48988b9f9c5a3e226b0da52/tumblr_pzfefmOcMF1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 17: Private Eye in the Distant Sea", "Detektiv Conan 17: Detektiv auf hoher See", "Meitantei Conan 17: Zekkai no puraibêto ai"], "2013", ["2018 05 21"], 7, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kôbun Shizuno"], [], "https://66.media.tumblr.com/82ddf50cff450da0a8b26abdb0fd6bd3/tumblr_pzfehaFwSv1v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 18: The Sniper from Another Dimension", "Detektiv Conan 18: Der Scharfschütze aus einer anderen Dimension", "Meitantei Conan 18: Ijigen no sunaipâ"], "2014", ["2018 07 10", "2020 11 22"], 6, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kôbun Shizuno"], [], "https://66.media.tumblr.com/b94f2efab4f8e2453714610254adb6ad/c4f5e0e764018b8a-d4/s250x400/bfabe384d9f11174518b63f8591cc9874dcb6bb9.jpg"],
	        
["film", ["Detective Conan 19: Sunflowers of Inferno", "Detektiv Conan 19: Die Sonnenblumen des Infernos", "Meitantei Conan 19: Goka no himawari"], "2015", ["2018 07 11", "2019 04 06"], 7, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kôbun Shizuno"], [], "https://66.media.tumblr.com/48663b339da0f4ee0f7c61248777ec1f/d938a6ccf79cbf6d-84/s250x400/eb31b4017ec9e786b91bf92fddd4fad589680199.jpg"],
	        
["film", ["Detective Conan 20: The Darkest Nightmare", "Detektiv Conan 20: Der dunkelste Albtraum", "Meitantei Conan 20: Junkoku no naitomea"], "2016", ["2018 07 18", "2019 03 31"], 5, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Kôbun Shizuno"], [], "https://66.media.tumblr.com/6bdafcd579921d683ff60da8f8221065/3653abec88129cc4-26/s250x400/531a83c6682635e5fa17dfdfc77ffc9b8b1fb59e.jpg"],
	        
["film", ["Detective Conan 21: Crimson Love Letter", "Detektiv Conan 21: Der purpurrote Liebesbrief", "Meitantei Conan 21: Karakurenai no raburetâ"], "2017", ["2017 05 30"], 7, ["ger"], ["anime", "crime"], ["bini"], ["Conan", "Kino"], ["Kôbun Shizuno"], [], "https://68.media.tumblr.com/6af9c0041d0da848bf0d3d523ff1e5b0/tumblr_oqu1elcCGz1v2s5upo1_250.jpg"],
	        
["film", ["The Disappearance of Conan Edogawa: The Worst Two Days in History", "The Disappearance of Conan Edogawa: The Worst Two Days in History", "Meitantei Konan: Edogawa Konan shissou jiken - Shijou saiaku no 2-kakan"], "2014", ["2019 02 05"], 4, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/7823ca9f9995f4eb5ee3b660a9f956c2/b55ac9531eab4de0-e1/s250x400/1eb7948c94ed884997627623b8fb67eff4766290.jpg"],
	        
["film", ["Detective Conan: Episode One - The Great Detective Turned Small", "Detective Conan: Episode One - The Great Detective Turned Small"], "2016", ["2019 02 05"], 4, ["ger"], ["anime", "crime"], ["bini"], ["Conan"], ["Yasuichirô Yamamoto"], [], "https://66.media.tumblr.com/0f0ce65119f91d1ec5ebbfd047f11353/653d2f4dc433b258-53/s250x400/eccad1615e33024df63b8822e713f37c0004bcf3.jpg"],
	        
["film", ["Raiders of the Lost Ark", "Jäger des verlorenen Schatzes"], "1981", ["2015 09 23", "2023 06 25"], 6, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Indiana Jones"], ["Steven Spielberg"], ["Harrison Ford", "Karen Allen"], "https://66.media.tumblr.com/99f8c6fe7649d8071d7eefa3158199c8/tumblr_ppxzblvnCt1v2s5upo1_250.jpg"],
	        
["film", ["Indiana Jones and the Temple of Doom", "Indiana Jones und der Tempel des Todes"], "1984", ["2015 11 10"], 5, ["ger"], ["action", "adventure"], ["bini"], ["Indiana Jones"], ["Steven Spielberg"], ["Harrison Ford", "Ke Huy Quan"], "https://66.media.tumblr.com/20b2adb7329022b1b43f3eee1a3342f9/tumblr_px706pD5dM1v2s5upo1_250.jpg"],
	        
["film", ["X-Men"], "2000", ["2016 02 21", "2017 07 22"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "James Marsden", "Halle Berry", "Stan Lee", "Anna Paquin", "Famke Janssen"], "https://49.media.tumblr.com/36b6998db751be2c82f725d09c720e84/tumblr_o2ygwyADor1v2s5upo1_250.jpg"],
	        
["film", ["X2", "X-Men 2"], "2003", ["2016 02 27", "2017 07 22"], 8, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["Patrick Stewart", "Hugh Jackman", "Ian McKellen", "Halle Berry", "James Marsden", "Anna Paquin", "Kelly Hu", "Shauna Kain", "Famke Janssen"], "https://40.media.tumblr.com/b8ef727ee3a072eaa1a9823f144c1f09/tumblr_o395j9bRxr1v2s5upo1_250.jpg"],
	        
["film", ["X-Men: The Last Stand", "X-Men: Der letzte Widerstand"], "2006", ["2016 02 28"], 8, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Brett Ratner"], ["Hugh Jackman", "Halle Berry", "Ian McKellen", "Patrick Stewart", "James Marsden", "Elliot Page", "Stan Lee", "Ken Leung", "Anna Paquin", "Shauna Kain", "Vinnie Jones", "Famke Janssen"], "https://40.media.tumblr.com/ba8f0dcf563bf457159cb1b1e6b4e914/tumblr_o39hglQYA21v2s5upo1_250.jpg"],
	        
["film", ["X-Men Origins: Wolverine"], "2009", ["2016 03 03"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Gavin Hood"], ["Hugh Jackman", "Liev Schreiber", "Will.i.am", "Lynn Collins", "Dominic Monaghan", "Ryan Reynolds", "Patrick Stewart", "Kevin Durand"], "https://40.media.tumblr.com/b5468276ef5005807899a1a2ad4445be/tumblr_o3hezvpYLa1v2s5upo1_250.jpg"],
	        
["film", ["X: First Class", "X-Men: Erste Entscheidung"], "2011", ["2016 03 04", "2017 07 22"], 8, ["ger"], ["action", "adventure", "supernatural"], ["nico", "sai"], ["X-Men", "Marvel"], ["Matthew Vaughn"], ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Nicholas Hoult", "Hugh Jackman",  "Tony Curran"], "https://37.media.tumblr.com/015833008c28c8bfb1fd9866f74c1ab7/tumblr_o3jcz7QiOQ1v2s5upo1_250.jpg"],
	        
["film", ["The Wolverine", "Wolverine: Weg des Kriegers"], "2013", ["2016 03 05", "2017 07 18"], 8, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["James Mangold"], ["Hugh Jackman", "Ian McKellen", "Patrick Stewart", "Hiroyuki Sanada", "Famke Janssen"], "https://49.media.tumblr.com/264f3a962c02c1111dfc98b562fa3f54/tumblr_o3mabcUxiF1v2s5upo1_250.jpg"],
	        
["film", ["X-Men: Days of Future Past", "X-Men: Zukunft ist Vergangenheit"], "2014", ["2016 03 06"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["Hugh Jackman", "James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Halle Berry", "Nicholas Hoult", "Elliot Page", "Peter Dinklage", "Omar Sy", "Ian McKellen", "Patrick Stewart", "James Marsden", "Anna Paquin", "Evan Peters", "Booboo Stewart", "Famke Janssen"], "https://40.media.tumblr.com/0078e739ad92ce6b6af8d0659fd0cee3/tumblr_o3u4pxeQuh1v2s5upo1_250.jpg"],
	        
["film", ["Deadpool"], "2016", ["2016 07 16", "2016 10 21"], 8, ["ger"], ["action", "adventure", "comedy", "sci-fi"], [], ["X-Men", "Marvel"], ["Tim Miller"], ["Ryan Reynolds", "Stan Lee", "Morena Baccarin", "Karan Soni", "Brianna Hildebrand", "Ed Skrein", "T.J. Miller"], "https://68.media.tumblr.com/72f4e55f3867399b6805a20c07d199c7/tumblr_oagky8I8Ie1v2s5upo1_250.jpg"],
	        
["film", ["Branded"], "2012", ["2015 08 21"], 2, ["ger"], ["drama", "fantasy"], ["bini"], [], ["Jamie Bradshaw", "Aleksandr Dulerayn"], ["Max von Sydow"], "https://37.media.tumblr.com/b36ce8ab795822aecddac917e31b060d/tumblr_o0dstzSlJZ1v2s5upo1_250.jpg"],
	        
["film", ["Meet the Spartans", "Meine Frau, die Spartaner und ich"], "2008", ["2015 08 27"], 6, ["ger"], ["comedy"], ["bini"], [], ["Jason Friedberg", "Aaron Seltzer"], ["Carmen Electra", "Emily Wilson"], "https://40.media.tumblr.com/41bb51f582690306d2134a81268acf2e/tumblr_o0dwkojSGF1v2s5upo1_250.jpg"],
	        
["film", ["(500) Days of Summer"], "2009", ["2015 08 31"], 1, ["ger"], ["comedy", "drama"], [], [], ["Marc Webb"], ["Joseph Gordon-Levitt", "Zooey Deschanel", "Geoffrey Arend", "Chloë Grace Moretz", "Matthew Gray Gubler"], "https://40.media.tumblr.com/6762ed316c12eb69646967f4b931c84d/tumblr_o0p36rb1hy1v2s5upo1_250.jpg"],
	        
["film", ["10 Things I Hate About You", "10 Dinge, die ich an Dir hasse"], "1999", ["2016 01 01", "2022 12 03"], 8, ["ger"], ["comedy", "drama"], [], ["Disney+"], ["Gil Junger"], ["Heath Ledger", "Julia Stiles", "Joseph Gordon-Levitt", "Allison Janney", "Gabrielle Union"], "https://40.media.tumblr.com/4511565b6cc1d3d74f43361c03a1d010/tumblr_o0a8khuM2X1v2s5upo1_250.jpg"],
	        
["film", ["Mysterious Skin", "Mysterious Skin - Unter die Haut"], "2004", ["2015 09 03"], 6, ["ger"], ["drama"], [], ["LGBT"], ["Gregg Araki"], ["Joseph Gordon-Levitt", "Michelle Trachtenberg"], "https://40.media.tumblr.com/1340c2434d09e867bc754da506827cff/tumblr_o0p3pd3sxX1v2s5upo1_250.jpg"],
	        
["film", ["Premium Rush"], "2012", ["2016 01 03"], 6, ["ger"], ["action"], [], [], ["David Koepp"], ["Joseph Gordon-Levitt", "Aasif Mandvi"], "https://49.media.tumblr.com/9c9c47850b8f913d1a118d22c6c47dd0/tumblr_o0e0ylPes51v2s5upo1_250.jpg"],
	        
["film", ["Looper"], "2012", ["2016 01 07"], 9, ["ger"], ["action", "drama", "sci-fi"], ["bini"], [], ["Rian Johnson"], ["Joseph Gordon-Levitt", "Bruce Willis", "Emily Blunt", "Paul Dano", "Jeff Daniels"], "https://40.media.tumblr.com/16bcaeee0c0977a6b21a3b8b0ece8512/tumblr_o0n7utSozh1v2s5upo1_250.jpg"],
	        
["film", ["The Interview"], "2014", ["2016 01 28"], 2, ["ger"], ["action", "adventure", "comedy"], [], [], ["Evan Goldberg", "Seth Rogen"], ["Seth Rogen", "James Franco", "Lizzy Caplan", "Randall Park", "Joseph Gordon-Levitt", "Eminem", "Emma Stone"], "https://49.media.tumblr.com/229979bb34bf3d9e30e912e6df5719e7/tumblr_o1ohkdxqmf1v2s5upo1_250.jpg"],
	        
["film", ["Hick", "Runaway Girl"], "2011", ["2015 09 02"], 5, ["ger"], ["comedy", "drama"], [], [], ["Derick Martini"], ["Chloë Grace Moretz", "Eddie Redmayne", "Alec Baldwin"], "https://37.media.tumblr.com/533f1e086c366988b8c1900ee0c5ef2e/tumblr_o0p3bzW7ZY1v2s5upo1_250.jpg"],
	        
["film", ["Amélie", "Die fabelhafte Welt der Amelie", "Le fabuleux destin d'Amélie Poulain"], "2001", ["2015 09 14", "2017 09 16"], 10, ["ger"], ["comedy", "romance"], ["syl"], [], ["Jean-Pierre Jeunet"], ["Audrey Tautou"], "https://66.media.tumblr.com/b3a1d3e14c3667279bf48b3b0ffbf342/tumblr_of8q3n1X8H1v2s5upo1_250.jpg"],
	        
["film", ["The World's End"], "2013", ["2015 09 19", "2017 12 17"], 9, ["ger"], ["comedy", "sci-fi"], ["lukas"], ["Blood and Ice Cream"], ["Edgar Wright"], ["Pierce Brosnan", "Simon Pegg", "David Bradley", "Nick Frost", "Martin Freeman", "Paddy Considine", "Bill Nighy", "Samuel Mak"], "https://68.media.tumblr.com/fce244f2c822c5849567263e3ff8b5c7/tumblr_oov1mqp1RR1v2s5upo1_250.jpg"],
	        
["film", ["Patema Inverted", "Patema Inverted", "Sakasama no Patema"], "2013", ["2015 09 19", "2022 06 29"], 7, ["jap"], ["anime", "adventure"], ["bini", "nico", "jessie"], [], ["Yasuhiro Yoshiura"], [], "https://68.media.tumblr.com/40449edb9184fd52fcde85b36fdb6a9c/tumblr_oov2d15BDT1v2s5upo1_250.jpg"],
	        
["film", ["Ice Age: The Meltdown", "Ice Age 2 - Jetzt taut's"], "2006", ["2015 10 10"], 3, ["ger"], ["animation", "adventure"], ["bini"], [], ["Carlos Saldanha"], [], "https://66.media.tumblr.com/145d5770045c5a147c2a0b9f51776b7b/tumblr_ppxzlddnCE1v2s5upo1_250.jpg"],
	        
["film", ["How to Lose Friends & Alienate People", "New York für Anfänger"], "2008", ["2015 09 20"], 6, ["ger"], ["biography", "comedy"], [], [], ["Robert B. Weide"], ["Simon Pegg", "Megan Fox", "Kirsten Dunst", "Daniel Craig", "Ashley Madekwe", "Thandiwe Newton"], "https://66.media.tumblr.com/e25c13ef11b7ba8ef8b3d3b787960c0a/tumblr_ppxz5xX3wp1v2s5upo1_250.jpg"],
	        
["film", ["Pain & Gain"], "2013", ["2015 09 21"], 4, ["ger"], ["action", "comedy"], ["bini"], [], ["Michael Bay"], ["Mark Wahlberg", "Dwayne Johnson", "Anthony Mackie", "Tony Shalhoub", "Ed Harris", "Ken Jeong", "Peter Stormare", "Rebel Wilson"], "https://66.media.tumblr.com/a8b015b73adfb7e1571797ac1e0ca38a/tumblr_ppxz7cPxSj1v2s5upo1_250.jpg"],
	        
["film", ["Heil"], "2015", ["2015 09 23"], 4, ["ger"], ["comedy"], ["nico"], ["Kino", "Schule"], ["Dietrich Brüggemann"], ["Benno Fürmann", "Daniel Zillmann", "Angela Merkel", "Thees Uhlmann", "Jacob Matschenz", "Claudia Eisinger", "Katharina Spiering", "Lea van Acken"], "https://66.media.tumblr.com/6285f982882737ada035ff0f5b4f459f/tumblr_ppxz9hhsRK1v2s5upo1_250.jpg"],
	        
["film", ["I, Robot"], "2004", ["2015 09 25"], 5, ["ger"], ["action", "drama"], ["bini"], [], ["Alex Proyas"], ["Will Smith", "Alan Tudyk", "Bruce Greenwood", "Shia LaBeouf"], "https://66.media.tumblr.com/77b0c2f02a5a9786cd573d76fb79fbb6/tumblr_ppxzd1WNaY1v2s5upo1_250.jpg"],
	        
["series", ["Der Wedding kommt"], "2016", [["2020 09 21", "2020 09 24", "S1"]], 4, ["ger"], ["comedy"], [], [], ["Rebecca Ahlen", "Martje Friedrich", "Melina Voss"], ["Kazim Akboga", "Alice Phoebe Lou"], "https://64.media.tumblr.com/9b47d9ffa35b63775f8af6595b81e79e/b8579c67b26a00af-cc/s250x400/0f928a81f3da55d98eac3639b8307c9942038367.jpg"],
	        
["film", ["Land of the Dead"], "2005", ["2015 10 02"], 6, ["ger"], ["horror", "sci-fi"], [], [], ["George A. Romero"], ["Simon Baker", "John Leguizamo", "Simon Pegg"], "https://37.media.tumblr.com/afc7c7273e593ec70887c5d63d260898/tumblr_o2j9a3HOcv1v2s5upo1_250.jpg"],
	        
["film", ["Notting Hill"], "1999", ["2015 10 04"], 6, ["ger"], ["comedy", "drama"], [], [], ["Roger Michell"], ["Julia Roberts", "Hugh Grant", "Alec Baldwin"], "https://40.media.tumblr.com/07f0a4c01ba9b8eb11418ed48c602d36/tumblr_o2j9cbapLd1v2s5upo1_250.jpg"],
	        
["film", ["Léon", "Léon: Der Profi"], "1994", ["2015 10 05", "2017 06 10"], 9, ["ger"], ["action", "crime"], ["bini"], [], ["Luc Besson"], ["Jean Reno", "Gary Oldman", "Natalie Portman"], "https://66.media.tumblr.com/4eb8c96f9dd91511df0c0b42d6020087/tumblr_o7n7anEJJv1v2s5upo1_250.jpg"],
	        
["film", ["Kal Ho Naa Ho", "Indian Love Story - Kal Ho Naa Ho"], "2003", ["2015 10 13", "2021 12 30"], 7, ["ger"], ["comedy", "drama", "bollywood"], ["bini"], ["DVD"], ["Nikkhil Advani"], ["Shah Rukh Khan", "Sonali Bendre"], "https://66.media.tumblr.com/fa97aade2783dadd0e6f37e80ee9d2f7/tumblr_ppxzwbAISQ1v2s5upo1_250.jpg"],
	        
["film", ["The Taste of Apple Seeds", "Der Geschmack von Apfelkernen"], "2013", ["2015 10 16"], 5, ["ger"], ["drama"], [], [], ["Vivian Naefe"], ["Hannah Herzsprung"], "https://68.media.tumblr.com/e6ca21b973e84d36883546c9f0dc5c43/tumblr_oov2lnvYGR1v2s5upo1_250.jpg"],
	        
["film", ["Jonas"], "2011", ["2015 10 17"], 1, ["ger"], ["comedy"], [], [], ["Robert Wilde"], [], "https://66.media.tumblr.com/159854b4ad7473e81b684f0b61661b61/tumblr_pvnt77Yaa71v2s5upo1_250.jpg"],
	        
["film", ["Tracks", "Spuren"], "2013", ["2015 10 17"], 8, ["ger"], ["adventure", "biography"], [], [], ["John Curran"], ["Mia Wasikowska", "Melanie Zanetti", "Adam Driver"], "https://66.media.tumblr.com/82d7eeab98956e9ccfd3d3a8ea30aac8/tumblr_pvnta0gdws1v2s5upo1_250.jpg"],
	        
["film", ["Splice", "Splice - Das Genexperiment"], "2009", ["2015 10 19"], 7, ["ger"], ["drama", "horror"], ["nico"], [], ["Vincenzo Natali"], ["Adrien Brody"], "https://66.media.tumblr.com/75ce7e9eaa79a42b197cc800b74ff1ed/tumblr_pw4iu1i7iZ1v2s5upo1_250.jpg"],
	        
["film", ["John Dies at the End"], "2012", ["2015 10 19"], 9, ["ger"], ["comedy", "fantasy"], ["nico"], [], ["Don Coscarelli"], ["Clancy Brown", "Paul Giamatti"], "https://66.media.tumblr.com/a0fe77f4e3b86e16f7c308438faec781/tumblr_pw4ivxWM921v2s5upo1_250.jpg"],
	        
["film", ["The Fifth Element", "Das fünfte Element"], "1997", ["2015 10 20", "2021 06 04"], 6, ["ger"], ["action", "adventure", "sci-fi"], ["bini"], [], ["Luc Besson"], ["Bruce Willis", "Gary Oldman", "Milla Jovovich"], "https://66.media.tumblr.com/c2b9366f5a0a8ce5ab56c6da9553790c/tumblr_pwf7roRFyr1v2s5upo1_250.jpg"],
	        
["film", ["Kuch Kuch Hota Hai", "Kuch Kuch Hota Hai - Und ganz plötzlich ist es Liebe"], "1998", ["2015 10 23", ["2023 02 11", "2023 02 18"]], 6, ["ger", "hin"], ["comedy", "drama", "bollywood"], ["bini", "mai"], ["Netflix"], ["Karan Johar"], ["Shah Rukh Khan", "Anupam Kher", "Rani Mukerji"], "https://66.media.tumblr.com/5c85abbf91995378d4363a9bdbdec0d8/tumblr_pwko1ihh061v2s5upo1_250.jpg"],
	        
["film", ["Happy New Year", "Happy New Year - Herzensdiebe"], "2014", ["2015 10 25", "2023 12 03"], 4, ["ger", "hin"], ["action", "comedy", "bollywood", "music"], ["bini"], ["Netflix"], ["Farah Khan"], ["Shah Rukh Khan"], "https://66.media.tumblr.com/c1f84054992fbd681072778a2f35c657/tumblr_pwko56FXy31v2s5upo1_250.jpg"],
	        
["film", ["Signs", "Signs - Zeichen"], "2002", ["2015 10 28"], 1, ["ger"], ["drama", "mystery"], [], [], ["M. Night Shyamalan"], ["Abigail Breslin", "Joaquin Phoenix", "Cherry Jones"], "https://66.media.tumblr.com/9c14f12fbc6adb2065a42ee3855c7b51/tumblr_pwkoaywx8n1v2s5upo1_250.jpg"],
	        
["film", ["The Illusionist", "The Illusionist - Nichts ist wie es scheint"], "2006", ["2015 10 29"], 7, ["ger"], ["drama", "fantasy"], [], [], ["Neil Burger"], ["Edward Norton", "Paul Giamatti"], "https://66.media.tumblr.com/a49e9f17f896342ec02e98b44587a3b3/tumblr_pwopp8zpV21v2s5upo1_250.jpg"],
	        
["film", ["The Sorcerer's Apprentice", "Duell der Magier"], "2010", ["2015 10 30"], 8, ["ger"], ["action", "adventure", "supernatural"], ["bini"], [], ["Jon Turteltaub"], ["Nicolas Cage", "Jake Cherry"], "https://66.media.tumblr.com/997c05a47135e5e70482c6d39aff2387/tumblr_pwoptpHPND1v2s5upo1_250.jpg"],
	        
["film", ["Cirque du Freak: The Vampire's Assistant", "Mitternachtszirkus - Willkommen in der Welt der Vampire"], "2009", ["2015 10 31"], 9, ["ger"], ["action", "adventure"], ["bini"], [], ["Paul Weitz"], ["John C. Reilly", "Josh Hutcherson", "Ken Watanabe", "Willem Dafoe", "Ray Stevenson"], "https://66.media.tumblr.com/596c42a4dc98f6c95cf99c77892fefd4/tumblr_pwvsf2qlSl1v2s5upo1_250.jpg"],
	        
["film", ["Oblivion"], "2013", ["2015 11 02"], 7, ["ger"], ["action", "adventure"], [], [], ["Joseph Kosinski"], ["Tom Cruise", "Morgan Freeman"], "https://66.media.tumblr.com/e76cfa3878cc2e800ec29ddf946b5c61/tumblr_pwvsijeH3W1v2s5upo1_250.jpg"],
	        
["film", ["Hanna", "Wer ist Hanna?"], "2011", ["2015 11 04", "2016 09 02", "2023 12 10"], 8, ["ger"], ["action", "drama"], ["bini", "nico", "syl", "je"], ["Netflix"], ["Joe Wright"], ["Saoirse Ronan", "Cate Blanchett", "Sebastian Hülk", "Gudrun Ritter", "Martin Wuttke", "Jessica Barden"], "https://66.media.tumblr.com/4ccfdad96cbd37814b45e90af37299b3/tumblr_pwvsjzq2xF1v2s5upo1_250.jpg"],
	        
["film", ["A Lonely Place to Die"], "2011", ["2015 11 05"], 6, ["ger"], ["crime", "thriller"], [], [], ["Julian Gilbey"], [], "https://66.media.tumblr.com/a83c0f222e35f53dc7dd193f0960d540/tumblr_pwzsuwXloR1v2s5upo1_250.jpg"],
	        
["film", ["Sunshine"], "2007", ["2015 11 07"], 5, ["ger"], ["sci-fi", "thriller"], [], [], ["Danny Boyle"], ["Cillian Murphy", "Benedict Wong", "Chris Evans", "Mark Strong", "Hiroyuki Sanada", "Cliff Curtis"], "https://66.media.tumblr.com/5df6aafe488d5d4e0905f3b3c0f481b5/tumblr_pwzswsjyiR1v2s5upo1_250.jpg"],
	        
["film", ["Om Shanti Om"], "2007", ["2015 11 18", "2020 12 28"], 7, ["ger", "hin"], ["action", "comedy", "bollywood"], ["bini", "mai"], ["Netflix"], ["Farah Khan"], ["Shah Rukh Khan", "Deepika Padukone", "Amitabh Bachchan"], "https://66.media.tumblr.com/f32aa12392c699236b0f466dcbd19ea2/tumblr_ppuwhbyaIO1v2s5upo1_250.jpg"],
	        
["film", ["The Shining", "Shining"], "1980", ["2015 11 21", "2016 07 01"], 7, ["ger"], ["drama", "horror"], [], [], ["Stanley Kubrick"], ["Jack Nicholson"], "https://66.media.tumblr.com/371c47ac4587f0a15a60cf0c1b11bd9b/tumblr_ppuwfk8EEg1v2s5upo1_250.jpg"],
	        
["film", ["10,000 BC", "10.000 BC"], "2008", ["2015 11 22"], 6, ["ger"], ["action", "adventure", "history"], [], [], ["Roland Emmerich"], ["Camilla Belle", "Cliff Curtis"], "https://66.media.tumblr.com/d176fa5aa81e4abd194deac4b880d7eb/tumblr_ppuwdtsSG71v2s5upo1_250.jpg"],
	        
["film", ["Red Cliff", "Red Cliff", "Chi bi"], "2008", ["2015 11 24"], 9, ["ger"], ["action", "adventure", "war", "history"], [], [], ["John Woo"], [], "https://66.media.tumblr.com/f0ae3fd7451c93f313326fa483cbc721/tumblr_ppuwb1FgOf1v2s5upo1_250.jpg"],
	        
["short", ["Typhoon Noruda", "Typhoon Noruda", "Taifuu no Noruda"], "2015", ["2015 11 29"], 6, ["jap"], ["anime"], ["bini"], [], ["Yôjirô Arai"], [], "https://66.media.tumblr.com/69fddd5b6b1d3f0de3cbab8908116a61/tumblr_pxbek6avXC1v2s5upo1_250.jpg"],
	        
["film", ["Laura"], "1944", ["2015 12 01"], 6, ["eng"], ["drama", "film-noir"], [], [], ["Otto Preminger"], [], "https://66.media.tumblr.com/52365365a32335ed6e1265d19744051e/tumblr_pxkfgb08nY1v2s5upo1_250.jpg"],
	        
["film", ["The Kings of Summer", "Kings of Summer"], "2013", ["2015 12 03"], 7, ["ger"], ["adventure", "comedy"], [], [], ["Jordan Vogt-Roberts"], ["Nick Robinson", "Gabriel Basso", "Moises Arias", "Nick Offerman", "Erin Moriarty", "Hannibal Buress", "Megan Mullally"], "https://66.media.tumblr.com/a66746ac954067a5ce8994d288b0dc2c/tumblr_pxkfhx1Htq1v2s5upo1_250.jpg"],
	        
["film", ["Love, Simon"], "2018", ["2019 06 28"], 9, ["ger"], ["comedy", "drama"], ["bini", "syl"], ["LGBT"], ["Greg Berlanti"], ["Nick Robinson", "Jennifer Garner", "Josh Duhamel", "Katherine Langford", "Alexandra Shipp", "Logan Miller", "Talitha Eliana Bateman", "Miles Heizer", "Mackenzie Lintz", "Haroon Khan", "Jorge Lendeborg Jr."], "https://66.media.tumblr.com/f4e181afba29f847ddc6b367e222828a/d2d5beef5dff587c-00/s250x400/83a3348833d686e0e502f99b0b7001866117a64b.jpg"],
	        
["film", ["Ruby Sparks", "Ruby Sparks - Meine fabelhafte Freundin"], "2012", ["2015 12 04"], 9, ["ger"], ["comedy", "drama"], [], [], ["Jonathan Dayton", "Valerie Faris"], ["Paul Dano", "Zoe Kazan", "Aasif Mandvi"], "https://37.media.tumblr.com/7403301c936e6fb4bb7954de598bb5ca/tumblr_o0cgu1Zcpn1v2s5upo1_250.jpg"],
	        
["film", ["Dope"], "2015", ["2015 12 05"], 7, ["ger"], ["comedy", "crime"], [], [], ["Rick Famuyiwa"], ["Kiersey Clemons"], "https://49.media.tumblr.com/3c559c30c9c6a213be91b79b96cd5e04/tumblr_o0cgpsyONU1v2s5upo1_250.jpg"],
	        
["film", ["Transformers"], "2007", ["2015 12 07"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Transformers"], ["Michael Bay"], ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Jon Voight", "John Turturro"], "https://40.media.tumblr.com/ed2b735c8d94867aa44c3062ca01335d/tumblr_o0cg96aS281v2s5upo1_250.jpg"],
	        
["film", ["Transformers: Revenge of the Fallen", "Transformers: Die Rache"], "2009", ["2015 12 07"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Transformers"], ["Michael Bay"], ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "John Turturro", "Rainn Wilson"], "https://49.media.tumblr.com/a454bf84cd4ae6e2dc0be89ebea113b1/tumblr_o0cg3vdgy81v2s5upo1_250.jpg"],
	        
["film", ["Transformers: Age of Extinction", "Transformers 4: Ära des Untergangs"], "2014", ["2016 03 31", "2019 02 20"], 6, ["ger"], ["action", "adventure"], ["bini"], ["Transformers"], ["Michael Bay"], ["Mark Wahlberg", "Stanley Tucci", "Titus Welliver", "John Goodman", "Sophia Myles", "T.J. Miller", "Nicola Peltz"], "https://40.media.tumblr.com/8afe89c1f124be181009b615b0da3b8d/tumblr_o4x4hbXTS61v2s5upo1_250.jpg"],
	        
["film", ["Iron Man"], "2008", ["2016 03 27", "2017 02 01", "2021 12 03"], 9, ["ger"], ["action", "adventure", "sci-fi"], ["je"], ["Marvel", "Avengers", "Netflix"], ["Jon Favreau"], ["Robert Downey Jr.", "Jeff Bridges", "Gwyneth Paltrow", "Stan Lee", "Samuel L. Jackson", "Shaun Toub"], "https://49.media.tumblr.com/5017d31b1dd6842686512928527710a3/tumblr_o4rininmoe1v2s5upo1_250.jpg"],
	        
["film", ["Iron Man 2"], "2010", ["2016 03 28", "2017 02 22", "2021 12 06"], 9, ["ger"], ["action", "adventure"], ["je"], ["Marvel", "Avengers", "Netflix"], ["Jon Favreau"], ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Scarlett Johansson", "Sam Rockwell", "Samuel L. Jackson", "Clark Gregg", "Stan Lee", "Kate Mara"], "https://40.media.tumblr.com/7260c61ced9afbc0d92a70dc7bd21281/tumblr_o4rip3fHdH1v2s5upo1_250.jpg"],
	        
["film", ["Iron Man Three", "Iron Man 3"], "2013", ["2016 03 28", ["2021 12 07", "2021 12 08"]], 9, ["ger"], ["action", "adventure"], ["je"], ["Marvel", "Avengers", "Netflix"], ["Shane Black"], ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Ben Kingsley", "James Badge Dale", "Stan Lee", "Mark Ruffalo", "Jenna Ortega", "Rebecca Hall", "Shaun Toub"], "https://49.media.tumblr.com/c864b3a35eab7507f075ec58e6ebac0e/tumblr_o4ririDQ7k1v2s5upo1_250.jpg"],
	        
["film", ["The Incredible Hulk", "Der unglaubliche Hulk"], "2008", ["2016 03 28"], 6, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Louis Leterrier"], ["Edward Norton", "Ty Burrell", "Robert Downey Jr.", "Stan Lee", "Tim Blake Nelson"], "https://40.media.tumblr.com/aa18fbc04b06b5a539d26518bfe21a27/tumblr_o4rq5d438j1v2s5upo1_250.jpg"],
	        
["film", ["Thor"], "2011", ["2016 03 29"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Marvel", "Avengers"], ["Kenneth Branagh"], ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Kat Dennings", "Clark Gregg", "Stan Lee", "Samuel L. Jackson", "Jeremy Renner", "Ray Stevenson", "Stellan Skarsgård", "Tadanobu Asano"], "https://49.media.tumblr.com/fd9020e7fe419b7fbe02f78f08454657/tumblr_o4srz0TS7k1v2s5upo1_250.jpg"],
	        
["film", ["Thor: The Dark World", "Thor: The Dark Kingdom"], "2013", ["2016 03 29"], 7, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Alan Taylor"], ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Kat Dennings", "Stan Lee", "Talulah Riley", "Chris Evans", "Ray Stevenson", "Stellan Skarsgård", "Tony Curran", "Tadanobu Asano"], "https://40.media.tumblr.com/31124e18faba414366fcb1b123bae479/tumblr_o4ss148JH71v2s5upo1_250.jpg"],
	        
["film", ["Captain America: The First Avenger"], "2011", ["2016 03 29"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Marvel", "Avengers"], ["Joe Johnston"], ["Chris Evans", "Tommy Lee Jones", "Stanley Tucci", "Samuel L. Jackson", "Toby Jones", "David Bradley", "Stan Lee", "Richard Armitage", "Sebastian Stan", "Hugo Weaving"], "https://49.media.tumblr.com/d795348c9ba0e4483f05147201ef6b24/tumblr_o4ugvkeV8b1v2s5upo1_250.jpg"],
	        
["film", ["Captain America: The Winter Soldier", "The Return of the First Avenger"], "2014", ["2016 03 30"], 7, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Anthony Russo", "Joe Russo"], ["Chris Evans", "Samuel L. Jackson", "Scarlett Johansson", "Anthony Mackie", "Toby Jones", "Stan Lee", "Alan Dale", "Sebastian Stan"], "https://37.media.tumblr.com/7d801f011251aefaa3be6a9e224190ca/tumblr_o4v7w80vDb1v2s5upo1_250.jpg"],
	        
["film", ["The Avengers"], "2012", ["2016 03 30"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], ["Marvel", "Avengers"], ["Joss Whedon"], ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Samuel L. Jackson", "Gwyneth Paltrow", "Stan Lee", "Stellan Skarsgård"], "https://40.media.tumblr.com/e839ece28b91eb39db84c65d6f91ce90/tumblr_o4vbcpBprV1v2s5upo1_250.jpg"],
	        
["film", ["Avengers: Age of Ultron"], "2015", ["2016 03 30"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], ["Marvel", "Avengers"], ["Joss Whedon"], ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Jeremy Renner", "Samuel L. Jackson", "Anthony Mackie", "Stan Lee", "Claudia Kim", "Josh Brolin", "Stellan Skarsgård"], "https://49.media.tumblr.com/79f9900b954e67779949aa03af22e694/tumblr_o4wt23eSX41v2s5upo1_250.jpg"],
	        
["film", ["Guardians of the Galaxy"], "2014", ["2016 05 09", "2016 10 16", "2017 12 26"], 7, ["ger"], ["action", "adventure", "sci-fi"], ["bini"], ["Marvel"], ["James Gunn"], ["Chris Pratt", "Zoe Saldana", "Bradley Cooper", "Karen Gillan", "Wyatt Oleff", "Stan Lee", "Josh Brolin", "Dave Bautista", "Djimon Hounsou"], "https://66.media.tumblr.com/5c4b5e161e5cf33b47ac14fab0f17a16/tumblr_o6xep3SJwt1v2s5upo1_250.jpg"],
	        
["film", ["Captain America: Civil War", "The First Avenger: Civil War"], "2016", ["2016 10 02"], 9, ["ger"], ["action", "adventure", "sci-fi"], [], ["Marvel", "Avengers"], ["Anthony Russo", "Joe Russo"], ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Anthony Mackie", "Jeremy Renner", "Tom Holland", "Daniel Brühl", "Martin Freeman", "Stan Lee", "Sebastian Stan"], "https://68.media.tumblr.com/be2186b86b191e56ae46a67bd8e13bb7/tumblr_oegv4tGrCT1v2s5upo1_250.jpg"],
	        
["series", ["Lego Jurassic World: The Indominus Escape", "Lego Jurassic World: Flucht des Indominus Rex"], "2016", [["2017 10 13", "S1"]], 9, ["ger"], ["animation", "action"], ["bini"], ["Jurassic Park", "Netflix"], ["Michael D. Black"], [], "https://66.media.tumblr.com/fe7acab7ce2bbe3569c84be0a02ad6e4/tumblr_pxxegmWanX1v2s5upo1_250.jpg"],
	        
["film", ["Enola Holmes"], "2020", ["2020 09 25", "2022 09 10"], 7, ["ger", "eng"], ["adventure", "crime"], ["bini", "mai"], ["Netflix"], ["Harry Bradbeer"], ["Millie Bobby Brown", "Sam Claflin", "Helena Bonham Carter", "Burn Gorman", "Fiona Shaw", "Henry Cavill"], "https://64.media.tumblr.com/a6e1b5b4d92ff144ebfc8523e3d2dfd6/237a739cc3a6e9fa-13/s250x400/4da4bc2c50782d46ea0a2799194a4c7934c82c5d.jpg"],
	        
["film", ["The Last Summer"], "2019", ["2020 09 25"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["William Bindley"], ["Maia Mitchell", "Halston Sage"], "https://64.media.tumblr.com/341a11f6cfdd916580db8695c1f3d157/78ab0a97c0633405-07/s250x400/04f5e80e1aedd0009183a33e770d397cf34bdfd7.jpg"],
	        
["series", ["Love, Chunibyo & Other Delusions!: Heart Throb", "Trotz Chūnibyō will ich mich verlieben!: Herzklopfen", "Chuunibyou demo Koi ga Shitai! Ren"], "2014", [["2020 08 28", "2020 09 25", "S1"], ["2022 03 22", "2022 04 19", "S1"]], 7, ["jap", "ger"], ["anime"], ["bini", "nico"], ["Chuunibyou"], ["Katelyn Barr", "Jukki Hanada", "Lainee Hooks"], [], "https://64.media.tumblr.com/f9719faa8fc264701c355114a68cdc07/a48da2de1ad3b7f5-8e/s250x400/2e48e21ed61ed18734f85b127d4c714e24ddbaba.jpg"],
/*first watch: 8, second watch 6*/	        
["film", ["Unbreakable", "Unbreakable - Unzerbrechlich"], "2000", ["2020 09 27", "2023 08 13"], 6, ["ger"], ["drama", "mystery"], ["bini", "syl", "je"], ["Eastrail 177", "DVD", "Disney+"], ["M. Night Shyamalan"], ["Bruce Willis", "Samuel L. Jackson", "Spencer Treat Clark", "Michael Kelly"], "https://64.media.tumblr.com/670ef74788029cdbdec61ebc9ad9b800/dcf01c6c54ab2e98-dd/s250x400/ce4a00f5cc7858471a9ceb94f1ce4248b727fa30.jpg"],
	        
["series", ["The Adventures of Jimmy Neutron, Boy Genius", "Jimmy Neutron - Jimmy, der Fernsehstar"], ["2002", "2006"], [["2020 09 29", "S1E13-S1E17"]], 6, ["ger"], ["comedy"], ["bini", "syl", "je"], ["DVD", "Jimmy Neutron"], ["John A. Davis", "Steve Oedekerk"], [], "https://64.media.tumblr.com/e4d40502d6419fe3f90f4a8967115e68/1ee86a0d4773b82f-d8/s250x400/de10efbb5ffbb8f8be9187b48ff65ca18e03bc59.jpg"],
	        
["film", ["Glass"], "2019", ["2019 02 23", "2020 09 30"], 8, ["ger"], ["drama"], ["syl", "bini", "je"], ["Eastrail 177", "Kino", "DVD"], ["M. Night Shyamalan"], ["James McAvoy", "Bruce Willis", "Anya Taylor-Joy", "Sarah Paulson", "Spencer Treat Clark", "Samuel L. Jackson"], "https://66.media.tumblr.com/f3ee0e01ef65a7cb2b71e714510c00da/105064cff59d6cef-73/s250x400/91ab466e6818b14eada3f585717c3f411619d591.jpg"],
	        
["audiobook", ["Little Women"], "1868", [["2020 10 05", "2020 10 21"]], 9, ["eng"], [], [], ["March-Trilogie", "LibriVox"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/898f2fcc7489dafce9b4bad176a822d2/6431d3cb351f91f9-f0/s250x400/3bcaa864990fd0e56da4353db71c930d8d952496.jpg"],
	        
["book", ["Night School: Legacy"], "2013", [["2020 09 04", "2020 11 14"]], 8, ["eng"], ["young adult", "mystery", "romance"], [], ["Night School"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/fc69578e397f3a7dc5c75060f04d60e6/c09d64f12fa351b2-f8/s250x400/61fd6b4031fa085f2663b86c0ea222d8aaaff442.jpg"],
	        
["film", ["Zathura: A Space Adventure", "Zathura - Ein Abenteuer im Weltraum"], "2005", ["2015 12 09", "2021 02 07"], 7, ["ger"], ["action", "adventure"], ["bini", "je", "syl"], [], ["Jon Favreau"], ["Josh Hutcherson", "Kristen Stewart"], "https://49.media.tumblr.com/6b40c0b2911ab1a4e065c67ff0f820ce/tumblr_o0cfz8HMmz1v2s5upo1_250.jpg"],
	        
["film", ["Big"], "1988", ["2015 12 10", "2022 02 05"], 8, ["ger"], ["comedy", "drama"], [], ["Disney+"], ["Penny Marshall"], ["Tom Hanks"], "https://40.media.tumblr.com/784e9a2679b971aa69054de63ce3e5ed/tumblr_o0cfowua8F1v2s5upo1_250.jpg"],
	        
["film", ["Frozen", "Frozen - Eiskalter Abgrund"], "2010", ["2015 12 13"], 6, ["ger"], ["adventure", "drama"], [], [], ["Adam Green"], [], "https://40.media.tumblr.com/cf2e43e4b55298beb29a920da8800b92/tumblr_o0cfhujXFc1v2s5upo1_250.png"],
	        
["film", ["The Pianist", "Der Pianist"], "2002", ["2015 12 17"], 7, ["ger"], ["biography", "drama", "war", "music"], [], [], ["Roman Polanski"], ["Adrien Brody", "Axel Prahl"], "https://40.media.tumblr.com/ae6121711b216d0736e739521189b369/tumblr_o0cf57h3JY1v2s5upo1_250.jpg"],
	        
["film", ["The Last Station", "Ein russischer Sommer"], "2009", ["2015 12 21"], 6, ["ger"], ["biography", "drama"], [], ["Schule"], ["Michael Hoffman"], ["Helen Mirren", "James McAvoy", "Paul Giamatti", "Christopher Plummer"], "https://49.media.tumblr.com/910dd0be251f1768d118460bfdc696c7/tumblr_nzq1a3b6Wk1v2s5upo1_250.jpg"],
	        
["film", ["Dead Poets Society", "Der Club der toten Dichter"], "1989", ["2015 12 22", "2023 05 26"], 8, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], [], ["Peter Weir"], ["Robin Williams"], "https://40.media.tumblr.com/4ef53f4ffdb4ff8ce75ec0afd1850b93/tumblr_nzs3t3Nuux1v2s5upo1_250.jpg"],
	        
["film", ["Oz the Great and Powerful", "Die fantastische Welt von Oz"], "2013", ["2015 12 22"], 4, ["ger"], ["adventure", "family"], [], ["Oz"], ["Sam Raimi"], ["James Franco", "Mila Kunis", "Michelle Williams", "Zach Braff", "Joey King", "Bill Cobbs", "Rachel Weisz"], "https://49.media.tumblr.com/d2b287563da1b159da5b84126e2fc939/tumblr_nzs58qzhJX1v2s5upo1_250.jpg"],
	        
["film", ["My Fair Lady"], "1964", ["2015 12 23"], 7, ["ger"], ["drama", "family", "musical"], [], [], ["George Cukor"], ["Audrey Hepburn"], "https://40.media.tumblr.com/df7a7ee51c81342fd6592e421ee704dc/tumblr_nzv4p6keYJ1v2s5upo1_250.jpg"],
	        
["film", ["Yes Man", "Der Ja-Sager"], "2008", ["2015 12 23"], 8, ["ger"], ["comedy", "romance"], [], [], ["Peyton Reed"], ["Jim Carrey", "Zooey Deschanel", "Bradley Cooper", "John Michael Higgins", "Fionnula Flanagan", "Luis Guzmán"], "https://49.media.tumblr.com/c8b4c11db85879275c2c36de71dada3c/tumblr_nzv666XF4h1v2s5upo1_250.jpg"],
	        
["film", ["Dreamer: Inspired by a True Story", "Dreamer - Ein Traum wird wahr"], "2005", ["2015 12 27"], 6, ["ger"], ["drama", "family"], [], [], ["John Gatins"], ["Dakota Fanning", "Luis Guzmán", "Rhoda Griffis"], "https://40.media.tumblr.com/d8582e48c22d0f3284ca20ecf66b7315/tumblr_o00ocw9pIp1v2s5upo1_250.jpg"],
	        
["film", ["Night Moves"], "2013", ["2015 12 27"], 6, ["ger"], ["drama", "thriller"], [], [], ["Kelly Reichardt"], ["Jesse Eisenberg", "Dakota Fanning", "Nate Mooney"], "https://49.media.tumblr.com/707dd6cf89a0a2e9bb57e4ebe1381ff3/tumblr_o00wiwKTpp1v2s5upo1_250.jpg"],
	        
["film", ["Ghost World"], "2001", ["2015 12 27"], 6, ["ger"], ["comedy", "drama"], [], [], ["Terry Zwigoff"], ["Scarlett Johansson", "Steve Buscemi", "Joy Bisco"], "https://40.media.tumblr.com/cc96e5953ab6ca47055bf70c574a55db/tumblr_o019966Kof1v2s5upo1_250.jpg"],
	        
["film", ["Evangelion: 1.0 - You Are (Not) Alone", "Evangelion: 1.0 - You Are (Not) Alone", "Evangelion Shin Gekijôban: Jo"], "2007", ["2015 12 29", "2021 08 10"], 5, ["ger"], ["anime", "action"], ["bini"], ["Evangelion"], ["Masayuki", "Kazuya Tsurumaki", "Hideaki Anno"], [], "https://49.media.tumblr.com/6ff2b3129c09c8777eae5d8609018c3c/tumblr_o04mrbA4bo1v2s5upo1_250.jpg"],
	        
["film", ["Evangelion: 2.0: You Can (Not) Advance", "Evangelion: 2.0: You Can (Not) Advance", "Evangerion shin gekijôban: Ha"], "2009", ["2015 12 29", "2021 08 30"], 7, ["ger"], ["anime", "action"], ["bini", "nico"], ["Evangelion"], ["Masayuki", "Kazuya Tsurumaki", "Hideaki Anno"], [], "https://40.media.tumblr.com/bbf8cf700689a6ee0360f9814b981929/tumblr_o04seyfmI71v2s5upo1_250.jpg"],
	        
["film", ["The Nightmare Before Christmas", "Nightmare Before Christmas"], "1993", ["2016 01 02", "2017 10 31"], 6, ["ger"], ["animation", "family"], ["bini", "nico", "jessie", "sai"], ["Netflix"], ["Henry Selick"], [], "https://49.media.tumblr.com/aabd229a21c1f022d7531cc62126752d/tumblr_o0cab7OkQj1v2s5upo1_250.jpg"],
	        
["film", ["Tintin and the Lake of Sharks", "Tim und der Haifischsee", "Tintin et le lac aux requins"], "1972", ["2016 03 19"], 5, ["ger"], ["animation", "adventure"], ["bini"], [], ["Raymond Leblanc"], [], "https://40.media.tumblr.com/a42960e63754a4c2f67ef2ce840ef23f/tumblr_o4a7m3xZuf1v2s5upo1_250.jpg"],
	        
["short", ["Someone's Gaze", "Someone's Gaze", "Dareka no Manazashi"], "2013", ["2016 05 11"], 7, ["ger"], ["anime", "drama"], [], [], ["Makoto Shinkai"], [], "https://68.media.tumblr.com/5cd1eb74b050bcb0c5bc5cc9ad7d8ad1/tumblr_o70vz7g2gN1v2s5upo1_250.jpg"],
	        
["film", ["Enter the Void"], "2009", ["2015 12 29"], 1, ["ger"], ["drama", "fantasy"], ["bini", "nico"], [], ["Gaspar Noé"], ["Emily Alyn Lind"], "https://40.media.tumblr.com/54d46dc32be4e80b485a671c9473ed00/tumblr_o05lhwYqvQ1v2s5upo1_250.jpg"],
	        
["film", ["Hero", "Hero", "Ying xiong"], "2002", ["2016 01 03"], 7, ["ger"], ["action", "adventure", "history"], [], [], ["Yimou Zhang"], [], "https://49.media.tumblr.com/9270e1c01726347cce0df515d3427613/tumblr_o0domo2eyr1v2s5upo1_500.jpg"],
	        
["film", ["Blue Valentine"], "2010", ["2016 01 11"], 3, ["ger"], ["drama", "romance"], [], [], ["Derek Cianfrance"], ["Ryan Gosling", "Michelle Williams", "John Doman"], "https://49.media.tumblr.com/3ffd25c757166219c8cdeb7e063a451c/tumblr_o0sw4676fJ1v2s5upo1_250.jpg"],
	        
["film", ["Carol"], "2015", ["2016 06 27"], 7, ["ger"], ["drama", "romance"], [], ["LGBT"], ["Todd Haynes"], ["Cate Blanchett", "Rooney Mara", "Kyle Chandler", "Sarah Paulson", "Kk Heim"], "https://66.media.tumblr.com/b9c5f989d5955964de7b7bc26584ea9c/tumblr_o9fzljBmU61v2s5upo1_250.jpg"],
	        
["film", ["Independence Day"], "1996", ["2016 01 04"], 4, ["ger"], ["action", "adventure", "sci-fi"], ["bini"], [], ["Roland Emmerich"], ["Will Smith", "Jeff Goldblum", "Nectar Rose"], "https://40.media.tumblr.com/1c241f9742132261647f8c95854d70b1/tumblr_o0hue6vBOk1v2s5upo1_250.jpg"],
	        
["film", ["Big Fish", "Big Fish - Der Zauber, der ein Leben zur Legende macht"], "2003", ["2016 01 08"], 7, ["ger"], ["adventure", "drama"], [], [], ["Tim Burton"], ["Jessica Lange", "Helena Bonham Carter", "Alison Lohman", "Marion Cotillard", "Missi Pyle", "Steve Buscemi", "Danny DeVito", "Miley Cyrus", "Missi Pyle", "Ewan McGregor"], "https://49.media.tumblr.com/410a7be367e3e6c243cc122e68efbcf3/tumblr_o0osoajt031v2s5upo1_250.jpg"],
	        
["film", ["Eternal Sunshine of the Spotless Mind", "Vergiss mein nicht"], "2004", ["2016 01 09"], 5, ["ger"], ["drama", "romance"], [], [], ["Michel Gondry"], ["Jim Carrey", "Elijah Wood", "Mark Ruffalo", "Kirsten Dunst", "David Cross", "Tom Wilkinson"], "https://37.media.tumblr.com/d371732634e0cc95062c3334342f1ef6/tumblr_o0p8m8QQo61v2s5upo1_250.jpg"],
	        
["film", ["Walk the Line"], "2005", ["2016 01 12", "2016 11 22"], 8, ["ger"], ["drama", "biography", "music"], [], [], ["James Mangold"], ["Reese Witherspoon", "Sandra Ellis Lafferty", "Rhoda Griffis", "Kerris Dorsey", "Joaquin Phoenix"], "https://49.media.tumblr.com/32dd2ca4acef9d612c5c483155af3959/tumblr_o0weanHCtx1v2s5upo1_250.jpg"],
	        
["film", ["Crouching Tiger, Hidden Dragon", "Tiger & Dragon", "Wo hu cang long"], "2000", ["2016 01 17"], 6, ["ger"], ["action", "adventure"], [], [], ["Ang Lee"], ["Ziyi Zhang"], "https://49.media.tumblr.com/29dcb9d9ecff20273762c3061405d32a/tumblr_o147difiGI1v2s5upo1_250.jpg"],
	        
["film", ["Dear John", "Das Leuchten der Stille"], "2010", ["2016 01 21"], 6, ["ger"], ["drama", "romance", "war"], [], [], ["Lasse Hallström"], ["Channing Tatum", "Amanda Seyfried"], "https://49.media.tumblr.com/f1b40222d5f523fe444ba928a2f3f496/tumblr_o1yznn7qzM1v2s5upo1_250.jpg"],
	        
["film", ["What Dreams May Come", "Hinter dem Horizont - Das Ende ist nur der Anfang"], "1998", ["2016 01 30"], 6, ["ger"], ["drama", "fantasy"], [], [], ["Vincent Ward"], ["Robin Williams", "Max von Sydow"], "https://40.media.tumblr.com/e216e013520b6116ad8b4d36c6f0023d/tumblr_o1rvcqKgiv1v2s5upo1_250.jpg"],
	        
["film", ["Atonement", "Abbitte"], "2007", ["2016 02 10"], 6, ["ger"], ["drama", "mystery", "war"], [], [], ["Joe Wright"], ["Saoirse Ronan", "James McAvoy", "Keira Knightley", "Benedict Cumberbatch", "Tilly Vosburgh", "Juno Temple"], "https://40.media.tumblr.com/2deb07b8a05805b2e8926115fdcf600b/tumblr_o2hfskemJP1v2s5upo1_250.jpg"],
	        
["film", ["My Sister's Keeper", "Beim Leben meiner Schwester"], "2009", ["2016 04 19"], 6, ["ger"], ["drama", "family"], [], [], ["Nick Cassavetes"], ["Abigail Breslin", "Cameron Diaz", "Alec Baldwin", "Joan Cusack"], "https://40.media.tumblr.com/fd594d0c2034d9c88c0e13b0c14ad765/tumblr_o5w8qh6D1r1v2s5upo1_250.jpg"],
	        
["film", ["Outlander"], "2008", ["2016 05 15"], 7, ["ger"], ["action", "adventure"], [], [], ["Howard McCain"], ["Jim Caviezel", "Ron Perlman", "Sophia Myles"], "https://68.media.tumblr.com/8826e1d24b95fb98cb5858ea2286bbda/tumblr_o77ygqP46X1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil"], "2002", ["2016 05 17"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Paul W.S. Anderson"], ["Milla Jovovich", "Michelle Rodriguez", "Heike Makatsch"], "https://68.media.tumblr.com/30a629ad38171e2f1328a705820e7a59/tumblr_o7ha4kM0VN1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Apocalypse"], "2004", ["2016 05 18"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Alexander Witt"], ["Milla Jovovich", "Jared Harris", "Iain Glen"], "https://68.media.tumblr.com/74b3bd9b1e5ea10546f82246f8db8486/tumblr_o7dquiGTOf1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Extinction"], "2007", ["2016 05 20"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Russell Mulcahy"], ["Milla Jovovich", "Iain Glen"], "https://68.media.tumblr.com/01cba57bbafa5401ff6e0364fd264942/tumblr_o7he6dAvhd1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Afterlife"], "2010", ["2016 05 22"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Paul W.S. Anderson"], ["Milla Jovovich"], "https://68.media.tumblr.com/0379678b089cac47253be929ce11389d/tumblr_o7kvnp6QsR1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Retribution"], "2012", ["2016 05 25"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Paul W.S. Anderson"], ["Milla Jovovich", "Kevin Durand"], "https://68.media.tumblr.com/49b938188ffd8e03c02329cce7bddf28/tumblr_o7u9thZguG1v2s5upo1_250.jpg"],
	        
["film", ["Laggies", "Grow Up!? - Erwachsen werd' ich später"], "2014", ["2016 05 28"], 7, ["ger"], ["comedy", "drama"], [], [], ["Lynn Shelton"], ["Keira Knightley", "Jeff Garlin", "Chloë Grace Moretz", "Sam Rockwell", "Kaitlyn Dever"], "https://68.media.tumblr.com/029332ab558404bc2721c93c84d88730/tumblr_o7wh4hPXdb1v2s5upo1_250.jpg"],
	        
["film", ["Goodbye to All That", "Suddenly Single"], "2014", ["2016 06 19"], 3, ["ger"], ["comedy", "drama"], [], [], ["Angus MacLachlan"], ["Paul Schneider"], "https://68.media.tumblr.com/2b52387fb84ce6f9e1e0ab7b2f54910b/tumblr_o90ykbAJXr1v2s5upo1_250.jpg"],
	        
["film", ["I'm Off Then", "Ich bin dann mal weg"], "2015", ["2016 06 29"], 7, ["ger"], ["comedy"], [], [], ["Julia von Heinz"], ["Katharina Thalbach", "Annette Frier"], "https://68.media.tumblr.com/9b18cf3ed6bb1b7708cb6660243b2bbc/tumblr_o9jsra3R5u1v2s5upo1_250.jpg"],
	        
["film", ["Rush Hour"], "1998", ["2019 07 08"], 5, ["ger"], ["action", "comedy"], [], ["Netflix"], ["Brett Ratner"], ["Ken Leung", "Jackie Chan", "Chris Tucker", "Tom Wilkinson"], "https://66.media.tumblr.com/9d176e93e4c29e946dc1c2a258c39944/f244781f2db8bae3-3f/s250x400/46441916585879a5b8546c60f85cabdebca7a220.jpg"],
	        
["film", ["Godzilla: King of the Monsters", "Godzilla II: King of the Monsters"], "2019", ["2019 06 05", "2021 02 09"], 7, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "je"], ["Godzilla", "Kino", "Netflix"], ["Michael Dougherty"], ["Kyle Chandler", "Vera Farmiga", "Millie Bobby Brown", "Ken Watanabe", "Sally Hawkins", "Thomas Middleditch", "David Strathairn", "Charles Dance"], "https://66.media.tumblr.com/c5817466fb41929749ffef31976696b4/54fb646f9f71a893-39/s250x400/e417d96a4c1fc5d7e7aba55905b8d0c7d8624199.jpg"],
	        
["film", ["Blackfish", "Der Killerwal"], "2013", ["2019 05 19"], 7, ["eng"], ["documentary"], [], [], ["Gabriela Cowperthwaite"], ["Whoopi Goldberg"], "https://66.media.tumblr.com/ee6cc26548f145015e6100a1cff2a21a/89f4a86e93f73e5a-cf/s250x400/3d2424c9c7fedd905a7d6465de7b3e77cd91c811.jpg"],
	        
["film", ["Black Mirror: Bandersnatch"], "2018", ["2019 02 07"], 5, ["ger"], ["drama", "mystery"], [], ["Black Mirror", "Netflix"], ["David Slade"], ["Fionn Whitehead"], "https://66.media.tumblr.com/c2c0b579e17edf051150c80dd5b85356/9529b0306515b777-12/s250x400/c09d309a79004a523f85482a53874fd1a01087e1.jpg"],
	        
["film", ["Rachel, Jack and Ashley Too"], "2019", ["2019 06 08"], 7, ["ger"], ["drama", "sci-fi"], [], ["Black Mirror", "Netflix"], ["Anne Sewitsky"], ["Miley Cyrus", "Angourie Rice"], "https://66.media.tumblr.com/78d54d2c85af58f64694a071c70762a8/5092cb42d5fa2c4a-e8/s250x400/5b3f74aa43ce285d726ad0bcbe49ca759363947b.jpg"],
	        
["film", ["Brave", "Merida - Legende der Highlands"], "2012", ["2019 02 04"], 0, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Mark Andrews", "Brenda Chapman", "Steve Purcell"], [], "https://66.media.tumblr.com/727f235707969cd043cf44d2caaddc41/e7d4e1a7d35df1b3-3a/s250x400/aa20386ab6ee4dd5e75d606030abdd93b6d896ce.jpg"],
	        
["film", ["Manitou's Shoe", "Der Schuh des Manitu"], "2001", ["2018 12 31"], 0, ["ger"], ["comedy", "western"], ["bini", "je", "syl"], [], ["Michael Herbig"], ["Michael Herbig", "Christian Tramitz", "Sky du Mont", "Anke Engelke"], "https://66.media.tumblr.com/899949bcc615eb9887a21c1c933e72a9/0e254a87d252aa9e-18/s250x400/f204eb29a54bed604c4ff8d377f866b3cb8f72a7.jpg"],
	        
["film", ["Tallulah"], "2016", ["2019 02 06"], 5, ["ger"], ["comedy", "drama"], ["syl"], ["Netflix"], ["Sian Heder"], ["Elliot Page", "Allison Janney"], "https://66.media.tumblr.com/45372bd3f0bea634489c09b4d8722d27/1656aa640b97294b-50/s250x400/080bfe59734373d9e5427dec2b14b955c2109d07.jpg"],
	        
["film", ["The Curse of the Were-Rabbit", "Wallace & Gromit: The Curse of the Were-Rabbit"], "2005", ["2018 12 31"], 7, ["ger"], ["animation", "adventure"], ["bini", "je", "syl"], ["Wallace & Gromit", "Netflix"], ["Steve Box", "Nick Park"], [], "https://66.media.tumblr.com/59b787795933b4e3beffe681c760c499/c52e2afd454d86d4-a2/s250x400/e9dcf4f9fe4970b0372a3ff484186ba7e9dc555c.jpg"],
	        
["film", ["Nanny McPhee", "Eine zauberhafte Nanny"], "2005", ["2018 09 18"], 6, ["ger"], ["comedy", "family"], ["bini"], ["Netflix"], ["Kirk Jones"], ["Colin Firth", "Thomas Brodie-Sangster", "Adam Godley"], "https://66.media.tumblr.com/bb9eff003493e7c9a7ea7f2a0cdd7eea/6f75485fa561d4ff-68/s250x400/9a3068debcdcaa98d16c6816eab43ebb8545d428.jpg"],
	        
["film", ["The Package"], "2018", ["2018 09 05"], 6, ["ger"], ["comedy", "thriller"], ["bini"], ["Netflix"], ["Jake Szymanski"], ["Daniel Doheny", "Mary Holland"], "https://66.media.tumblr.com/7622b740247f1a4c1b7dd85dfb794b78/6dac7a859b43c095-c7/s250x400/83db237d3ffce0cf27ffac155064d057bb6f89e7.jpg"],
	        
["film", ["Scary Movie"], "2000", ["2018 07 30"], 4, ["ger"], ["comedy"], ["bini", "nico"], ["Netflix"], ["Keenen Ivory Wayans"], ["Carmen Electra", "Anna Faris"], "https://66.media.tumblr.com/8f00a5b43934233c812fb5925d2cd8cf/e0f715bbea917071-ab/s250x400/a2cb6d0ae31256ace13fa5dcd02b96c9bc3ae413.jpg"],
	        
["film", ["Extinction"], "2018", ["2018 07 30"], 7, ["ger"], ["action", "drama"], ["nico", "bini"], ["Netflix"], ["Ben Young"], ["Michael Peña", "Lizzy Caplan", "Amelia Crouch"], "https://66.media.tumblr.com/e1a775a0b08d385d677e03b0309360a9/e02e042615a1c3c1-79/s250x400/45322cb0d200a9a51e4202de1a62a9082a45fec5.jpg"],
	        
["film", ["Hush", "Still"], "2016", ["2018 06 26"], 6, ["ger"], ["horror", "thriller"], [], ["Netflix"], ["Mike Flanagan"], ["James Flanagan"], "https://66.media.tumblr.com/80e3a1b9fff0084cd34701f871adcd85/tumblr_pzpvznTPCq1v2s5upo1_250.jpg"],
	        
["film", ["Freche Mädchen"], "2008", ["2018 06 18"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ute Wieland"], ["Anke Engelke", "Anna Böttcher", "Christian Tramitz", "Wilson Gonzalez", "Gerda Böken", "Emilia Schüle", "Selina Shirin Müller", "Henriette Nagel"], "https://66.media.tumblr.com/8faea0ec081e5bd5cf57b650c4ca294d/tumblr_pzktvjfw161v2s5upo1_250.jpg"],
	        
["film", ["Dude"], "2018", ["2018 05 16"], 6, ["ger"], ["comedy", "drama"], [], [], ["Olivia Milch"], ["Kathryn Prescott", "Awkwafina", "Alex Wolff", "Alexandra Shipp"], "https://66.media.tumblr.com/702308077be02f4b8fa5db3a9615e29d/tumblr_pzfebsZgCo1v2s5upo1_250.jpg"],
	        
["film", ["Bibi Blocksberg"], "2002", ["2018 03 10"], 5, ["ger"], ["comedy", "family"], ["bini"], ["Bibi Blocksberg"], ["Hermine Huntgeburth"], ["Sidonie von Krosigk", "Katja Riemann"], "https://66.media.tumblr.com/ce02de8e989f7fec97130e504c9fed6b/tumblr_pzdf4jmvOy1v2s5upo1_250.jpg"],
	        
["film", ["Expedition Happiness"], "2017", ["2018 03 07"], 6, ["ger"], ["documentary"], [], ["Netflix"], ["Felix Starck"], [], "https://66.media.tumblr.com/4dfaca1c577a75909bad003c4eba4eee/tumblr_pz9f25Jwgu1v2s5upo1_250.jpg"],
	        
["film", ["Bright"], "2017", ["2018 03 03"], 5, ["ger"], ["action", "fantasy"], [], ["Netflix"], ["David Ayer"], ["Will Smith", "Noomi Rapace", "Lucy Fry", "Edgar Ramírez", "Ike Barinholtz"], "https://66.media.tumblr.com/51bd109621dbaaa9172d711da9552660/tumblr_pz9ezksISP1v2s5upo1_250.jpg"],
	        
["film", ["Abschussfahrt"], "2015", ["2018 01 27"], 5, ["ger"], ["comedy"], [], [], ["Tim Trachte"], ["Alexander Schubert"], "https://66.media.tumblr.com/f649717a44fd34c4e907eb876a2d5245/tumblr_pz45uwfDfB1v2s5upo1_250.jpg"],
	        
["film", ["Lolita"], "1997", ["2017 12 31"], 6, ["eng"], ["drama", "romance"], [], [], ["Adrian Lyne"], [], "https://66.media.tumblr.com/fb1992636dde93620075c0016b49ea92/tumblr_pz09jaSIay1v2s5upo1_250.jpg"],
	        
["film", ["New Year's Eve", "Happy New Year"], "2011", ["2017 12 30"], 6, ["ger"], ["comedy", "romance"], ["syl"], [], ["Garry Marshall"], ["Michelle Pfeiffer", "Zac Efron", "Robert De Niro", "Halle Berry", "Sarah Paulson", "Til Schweiger", "Abigail Breslin", "Sarah Jessica Parker", "Nat Wolff", "Josh Duhamel", "Katherine Heigl"], "https://66.media.tumblr.com/bcca202bf53c8cd5acc0c75e97d20245/tumblr_pz09fjq4Cx1v2s5upo1_250.jpg"],
	        
["film", ["The Tinder Box", "Das Feuerzeug"], "1959", ["2017 12 25"], 5, ["ger"], ["drama", "fantasy"], ["bini", "syl", "je"], [], ["Siegfried Hartmann"], [], "https://66.media.tumblr.com/3cf29a9c4546a7dfa8966d7a37d38000/tumblr_pyv18ySN0z1v2s5upo1_250.jpg"],
	        
["film", ["Jessica Darling's It List"], "2016", ["2017 12 22"], 6, ["eng"], ["family"], [], ["Netflix"], ["Ali Scher"], ["Emma Rayne Lyle", "Jacob Melton"], "https://66.media.tumblr.com/705d2c57406fdab72a2e4880385cf25d/tumblr_pyv16udwDi1v2s5upo1_250.jpg"],
	        
["film", ["One Night"], "2016", ["2017 12 09"], 6, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Minhal Baig"], ["Isabelle Fuhrman"], "https://66.media.tumblr.com/d6a901f32b26e881ea5f4acb09835a4b/tumblr_pyqyl3sLfF1v2s5upo1_250.jpg"],
	        
["film", ["Tramps"], "2016", ["2017 12 06"], 7, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Adam Leon"], ["Callum Turner", "Grace Van Patten"], "https://66.media.tumblr.com/6a3f92af483ba944d9507c89e204be3e/tumblr_pyqygl4GOI1v2s5upo1_250.jpg"],
	        
["short", ["Little Witch Academia"], "2013", ["2017 09 29"], 7, ["jap"], ["anime"], ["nico", "bini"], [], ["Yô Yoshinari"], [], "https://66.media.tumblr.com/9f4565eb9e24653aca832b8dab1416f2/tumblr_pxxeb9Fe3O1v2s5upo1_250.jpg"],
	        
["film", ["Frozen", "Die Eiskönigin: Völlig unverfroren"], "2013", ["2017 09 10"], 6, ["ger"], ["animation", "adventure"], ["sai", "jessie", "bini", "nico", "jani"], [], ["Chris Buck", "Jennifer Lee"], [], "https://66.media.tumblr.com/95836cc9a45f12d8e38b111a19665449/tumblr_pxxdwqKch51v2s5upo1_250.jpg"],
	        
["film", ["The Bélier Family", "Verstehen Sie die Béliers?", "La famille Bélier"], "2017", ["2017 08 27"], 8, ["ger"], ["comedy", "drama", "music"], ["syl"], [], ["Eric Lartigau"], [], "https://66.media.tumblr.com/b9a070ea18e44e3956905565b594e697/tumblr_pxrganJH7c1v2s5upo1_250.jpg"],
	        
["film", ["Shaun the Sheep Movie", "Shaun das Schaf - Der Film"], "2015", ["2017 08 20"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl"], [], ["Mark Burton", "Richard Starzak"], [], "https://66.media.tumblr.com/59ef436b9c93433054b57aab12e159e0/tumblr_pxrg3l15zf1v2s5upo1_250.jpg"],
	        
["film", ["A Million Ways to Die in the West", "A Million Ways To Die In The West"], "2014", ["2017 07 18"], 2, ["ger"], ["comedy", "western"], [], ["dropped"], ["Seth MacFarlane"], ["Amanda Seyfried", "Giovanni Ribisi", "Neil Patrick Harris", "John Michael Higgins", "Ryan Reynolds", "Mae Whitman", "Ewan McGregor", "Charlize Theron"], "https://66.media.tumblr.com/e97c0bb242864440c2466af33b4b86f5/tumblr_pxnkbvYJJy1v2s5upo1_250.jpg"],
	        
["film", ["Central Intelligence"], "2016", ["2017 07 06"], 5, ["ger"], ["action", "comedy"], [], ["Schule"], ["Rawson Marshall Thurber"], ["Dwayne Johnson", "Kevin Hart", "Jason Bateman", "Aaron Paul"], "https://66.media.tumblr.com/9f093ced17b179c56ab64b0e590886ae/tumblr_ppuvxgQHe01v2s5upo1_250.jpg"],
	        
["film", ["Welcome to the Sticks", "Willkommen bei den Sch'tis", "Bienvenue chez les Ch'tis"], "2008", ["2017 07 03"], 7, ["ger"], ["comedy", "romance"], ["jenny"], ["Schule"], ["Dany Boon"], ["Kad Merad"], "https://66.media.tumblr.com/b1ae0738fbde9f1847042a91efd02a96/tumblr_ppuvo9umAb1v2s5upo1_250.jpg"],
	        
["film", ["The Shamer's Daughter", "Die Hüterin der Wahrheit - Dinas Bestimmung"], "2015", ["2017 04 12"], 6, ["ger"], ["adventure", "drama"], [], [], ["Kenneth Kainz"], [], "https://68.media.tumblr.com/b3e358060648c9ec15625ff3d0054917/tumblr_oor7e2Ysld1v2s5upo1_250.jpg"],
	        
["film", ["The Outcasts", "Cool Girls"], "2017", ["2017 04 12"], 6, ["ger"], ["comedy"], [], [], ["Peter Hutchings"], ["Victoria Justice", "Eden Sher", "Ashley Rickards"], "https://68.media.tumblr.com/e6327793474b955c81a45668f851beb2/tumblr_oor7gqtm3K1v2s5upo1_250.jpg"],
	        
["film", ["Purple Rain"], "1984", ["2017 04 11"], 5, ["ger"], ["drama", "music"], [], [], ["Albert Magnoli"], [], "https://68.media.tumblr.com/e0742cbb1503c1a17d3ecf69b1d11c90/tumblr_ooakqtqUFA1v2s5upo1_250.jpg"],
	        
["short", ["Your Old Man"], "2016", ["2017 04 10"], 8, ["eng"], ["comedy"], [], [], ["Tim Hautekiet"], [], "https://68.media.tumblr.com/8cf42f2b2f364940319fb2b5da635fe9/tumblr_ooakohySDI1v2s5upo1_250.jpg"],
	        
["film", ["Vanilla Sky"], "2001", ["2017 04 04"], 5, ["ger"], ["fantasy", "mystery"], [], [], ["Cameron Crowe"], ["Tom Cruise", "Cameron Diaz", "Noah Taylor", "Timothy Spall", "Tilda Swinton", "Johnny Galecki", "Ken Leung", "Conan O'Brien", "Penélope Cruz"], "https://68.media.tumblr.com/059128a6d2421cf302c6a7293db49992/tumblr_oo357ab8GS1v2s5upo1_250.jpg"],
	        
["film", ["Moms' Night Out", "Mom's Night Out"], "2014", ["2017 02 02"], 5, ["ger"], ["comedy"], [], [], ["Andrew Erwin", "Jon Erwin"], ["Sean Astin"], "https://68.media.tumblr.com/75f3cfff878cc9e176ba26d614f39740/tumblr_okvbyxTTE51v2s5upo1_250.jpg"],
	        
["film", ["The Muppets", "Die Muppets"], "2011", ["2017 01 31"], 6, ["ger"], ["adventure", "comedy"], [], [], ["James Bobin"], ["Jason Segel", "Amy Adams", "Zach Galifianakis", "Donald Glover", "Emily Blunt", "Whoopi Goldberg", "Neil Patrick Harris", "Jack Black", "Selena Gomez"], "https://68.media.tumblr.com/008bc1b05945243180cb1c24c587b564/tumblr_oknz2tBBJF1v2s5upo1_250.jpg"],
	        
["film", ["Philadelphia"], "1993", ["2017 01 30"], 5, ["ger"], ["drama"], [], [], ["Jonathan Demme"], ["Tom Hanks"], "https://68.media.tumblr.com/7a5725faa25413da5b5e0d04118174f4/tumblr_oknyysJ2bN1v2s5upo1_250.jpg"],
	        
["film", ["The Dictator", "Der Diktator"], "2012", ["2017 01 16"], 5, ["ger"], ["comedy"], [], [], ["Larry Charles"], ["Sacha Baron Cohen", "Ben Kingsley", "Megan Fox", "Anna Faris", "Chris Parnell", "Hillary Clinton", "Edward Norton", "John C. Reilly", "Kathryn Hahn"], "https://68.media.tumblr.com/f0055cb58ccffd7855d7c76d4924a36a/tumblr_ojvtgqr9Pc1v2s5upo1_250.jpg"],
	        
["film", ["Miracle on 34th Street", "Das Wunder von Manhattan"], "1994", ["2016 12 19"], 6, ["ger"], ["family", "fantasy"], [], ["Schule"], ["Les Mayfield"], ["Richard Attenborough", "Mara Wilson", "Allison Janney"], "https://68.media.tumblr.com/40f397e7c379ef376e1879ab421ebcd2/tumblr_oifqxvLLsZ1v2s5upo1_250.jpg"],
	        
["film", ["The Graduate", "Die Reifeprüfung"], "1967", ["2016 12 16"], 6, ["eng"], ["comedy", "drama"], [], ["Schule"], ["Mike Nichols"], ["Dustin Hoffman", "Kevin Tighe", "William Daniels"], "https://68.media.tumblr.com/8586dc1f3d876a1855b98ad679c34411/tumblr_oibsbkL5Pf1v2s5upo1_250.jpg"],
	        
["film", ["The Odd Life of Timothy Green", "Das wundersame Leben von Timothy Green"], "2012", ["2016 12 04"], 6, ["ger"], ["comedy", "drama"], [], [], ["Peter Hedges"], ["Jennifer Garner", "Joel Edgerton", "Odeya Rush"], "https://68.media.tumblr.com/56ecbddc631f535930a5913aa806a1a2/tumblr_oho7x2dqVL1v2s5upo1_250.jpg"],
	        
["film", ["Ghost in the Shell"], "2017", ["2020 10 10"], 5, ["ger"], ["action", "crime"], ["bini", "je"], [], ["Rupert Sanders"], ["Scarlett Johansson"], "https://64.media.tumblr.com/074261e36481e42821a3d357e9b222d4/4564edd2920cb435-9b/s250x400/cd7b749772a67894aed6a162117f54f288f34891.jpg"],
	        
["film", ["Monty Python and the Holy Grail", "Die Ritter der Kokosnuß"], "1975", ["2016 11 13"], 8, ["ger"], ["adventure", "comedy"], [], ["Monty Python"], ["Terry Gilliam", "Terry Jones"], [], "https://68.media.tumblr.com/40352374760c676b6d5c4f7802885774/tumblr_ogn2bl2vs91v2s5upo1_250.jpg"],
	        
["film", ["Life of Brian", "Das Leben des Brian"], "1979", ["2016 11 09"], 8, ["ger"], ["comedy"], [], ["Monty Python"], ["Terry Jones"], [], "https://66.media.tumblr.com/ea8d7f2e69f0c11cdfadd136936636a7/tumblr_ogn26cpceW1v2s5upo1_250.jpg"],
	        
["film", ["Joshua", "Joshua - Der Erstgeborene"], "2007", ["2016 10 21"], 4, ["ger"], ["drama", "horror"], [], [], ["George Ratliff"], ["Sam Rockwell", "Vera Farmiga"], "https://66.media.tumblr.com/b1913f8aff2ea592eca0f32fdd451c00/tumblr_ofeivrEhpu1v2s5upo1_250.jpg"],
	        
["film", ["Veer-Zaara"], "2004", ["2016 10 01"], 7, ["ger"], ["drama", "family", "bollywood"], [], [], ["Yash Chopra"], ["Shah Rukh Khan", "Preity Zinta", "Amitabh Bachchan", "Anupam Kher", "Rushad Rana"], "https://66.media.tumblr.com/8f872d6e0d0c5f35877272caed3038a7/tumblr_oee351MXEg1v2s5upo1_250.jpg"],
	        
["film", ["Super", "Super - Shut Up, Crime!"], "2010", ["2016 09 29"], 6, ["ger"], ["action", "comedy"], [], [], ["James Gunn"], ["Rainn Wilson", "Elliot Page", "Kevin Bacon", "Nathan Fillion"], "https://68.media.tumblr.com/debffe5d7b143c820f1f0c12de1e964c/tumblr_oe9xktVkAY1v2s5upo1_250.jpg"],
	        
["film", ["Blue Is the Warmest Colour", "Blau ist eine warme Farbe", "La vie d'Adèle"], "2013", ["2016 09 19"], 7, ["ger"], ["drama", "romance"], [], ["LGBT"], ["Abdellatif Kechiche"], [], "https://66.media.tumblr.com/eb6ccc87222129a2138074e4d3a27083/tumblr_odt62sCRSG1v2s5upo1_250.jpg"],
	        
["film", ["Hardcore Henry", "Hardcore"], "2015", ["2016 09 11"], 7, ["ger"], ["action", "adventure"], [], [], ["Ilya Naishuller"], [], "https://66.media.tumblr.com/66dc8a312a00f29372cc05321fc9e7d5/tumblr_odcnp7iODM1v2s5upo1_250.jpg"],
	        
["film", ["About Cherry", "Cherry - Wanna Play?"], "2012", ["2016 09 04"], 6, ["ger"], ["drama"], [], [], ["Stephen Elliott"], ["James Franco", "Heather Graham"], "https://66.media.tumblr.com/1d6000d43a86c4364f58eec847febbb4/tumblr_od1bg7QjIB1v2s5upo1_250.jpg"],
	        
["film", ["Sharktopus vs. Pteracuda", "Sharktopus vs Pteracuda - Kampf der Urzeitgiganten"], "2014", ["2016 09 03"], 3, ["ger"], ["action", "adventure"], ["nico", "bini"], [], ["Kevin O'Neill"], ["Conan O'Brien"], "https://68.media.tumblr.com/a26a61f047b584c808a0ee0acfc22033/tumblr_ocxur4PcNU1v2s5upo1_250.jpg"],
	        
["film", ["Salvation Boulevard"], "2011", ["2016 08 30"], 5, ["ger"], ["comedy", "crime"], [], [], ["George Ratliff"], ["Pierce Brosnan", "Ed Harris", "Isabelle Fuhrman"], "https://66.media.tumblr.com/7a4eee571605ac8cdf99589a7c2ca1ab/tumblr_ocqewzYPmG1v2s5upo1_250.jpg"],
	        
["film", ["The Secret Garden", "Der geheime Garten"], "1993", ["2016 08 29"], 5, ["eng"], ["drama", "family"], [], [], ["Agnieszka Holland"], [], "https://68.media.tumblr.com/a3e22e815c94bfe5314ba8b5e3458e54/tumblr_ocpwshuUAn1v2s5upo1_250.jpg"],
	        
["film", ["Matilda"], "1996", ["2016 08 28"], 6, ["ger"], ["comedy", "family"], [], [], ["Danny DeVito"], ["Mara Wilson", "Danny DeVito"], "https://68.media.tumblr.com/c05cb3395191a69956c56c2111ca85ec/tumblr_ocmxg7gkO31v2s5upo1_250.jpg"],
	        
["film", ["The Liability", "Last Hitman - 24 Stunden in der Hölle"], "2012", ["2016 08 28"], 6, ["ger"], ["comedy", "crime"], [], [], ["Craig Viveiros"], ["Talulah Riley", "Tim Roth"], "https://66.media.tumblr.com/5bf3231fbb7eec82bdf731fdd8f5fc8b/tumblr_ocmr22dNg71v2s5upo1_250.jpg"],
	        
["film", ["Just Like Heaven", "Solange Du da bist"], "2005", ["2016 08 28"], 8, ["ger"], ["comedy", "drama"], [], [], ["Mark Waters"], ["Reese Witherspoon", "Mark Ruffalo", "Kerris Dorsey"], "https://68.media.tumblr.com/81f9db966bb110bf534ff802d1576034/tumblr_ocmmitLNan1v2s5upo1_250.jpg"],
	        
["film", ["Aquamarine", "Aquamarine - Die vernixte erste Liebe"], "2006", ["2016 08 28"], 6, ["ger"], ["comedy", "family"], [], [], ["Elizabeth Allen Rosenbaum"], ["Emma Roberts", "Kevin Jonas", "Jake McDorman"], "https://68.media.tumblr.com/d841a8e6283e6f4f70a0b209bdd6b69d/tumblr_ocmb0hO1xW1v2s5upo1_250.jpg"],
	        
["film", ["Singin' in the Rain", "Du sollst mein Glücksstern sein"], "1952", ["2016 08 20"], 3, ["eng"], ["comedy", "musical"], [], [], ["Stanley Donen", "Gene Kelly"], [], "https://68.media.tumblr.com/32b79a6cf3055503dea1aaf8b96cf76c/tumblr_oc7tik0ovg1v2s5upo1_250.jpg"],
	        
["short", ["Sense8: Creating the World", "Sense8: Eine Welt wird Erschaffen"], "2015", ["2020 10 11"], 5, ["ger"], ["documentary"], [], ["Netflix"], ["Josh Oreck", "Lana Wachowski"], ["Naveen Andrews", "Doona Bae", "Jamie Clayton", "Tina Desai", "Daryl Hannah", "Alfonso Herrera", "Eréndira Ibarra", "Miguel Ángel Silvestre", "Brian J. Smith"], "https://66.media.tumblr.com/2298a164c04d888fcb8365b04bb45291/tumblr_pzpvx4YMJg1v2s5upo1_250.jpg"],
	        
["film", ["Grease"], "1978", ["2016 08 12", "2021 09 06"], 8, ["ger"], ["musical", "romance"], [], ["Netflix"], ["Randal Kleiser"], ["John Travolta"], "https://66.media.tumblr.com/822a31454b0d5a53c1b0f758e0f0e2e1/tumblr_obuc7zYHyV1v2s5upo1_250.jpg"],
	        
["film", ["The Goonies", "Die Goonies"], "1985", ["2016 08 11", "2018 09 07"], 6, ["ger"], ["adventure", "comedy"], ["bini"], [], ["Richard Donner"], ["Sean Astin", "Ke Huy Quan", "Josh Brolin"], "https://66.media.tumblr.com/381d8e5ba4392d9e142d9de538795d79/tumblr_obpt57vtBP1v2s5upo1_250.jpg"],
	        
["film", ["Ballet Shoes"], "2007", ["2016 08 01"], 7, ["ger"], ["drama", "family"], [], [], ["Sandra Goldbacher"], ["Emma Watson", "Richard Griffiths", "Lucy Boynton"], "https://66.media.tumblr.com/17ef638bc1cbb1b06f2225b8b443c707/tumblr_ob9xdm3HXS1v2s5upo1_250.jpg"],
	        
["film", ["Goosebumps", "Gänsehaut"], "2015", ["2016 08 01"], 7, ["ger"], ["adventure", "comedy"], [], [], ["Rob Letterman"], ["Jack Black", "Dylan Minnette", "Odeya Rush", "Halston Sage", "Ella Wahlestedt"], "https://66.media.tumblr.com/950658e4f27fe37c0ea0b9d043f43cd3/tumblr_ob8tv872gs1v2s5upo1_250.jpg"],
	        
["film", ["Esther", "Die Bibel - Esther"], "1999", ["2016 07 27"], 5, ["eng"], ["biography", "drama"], [], [], ["Raffaele Mertes"], [], "https://66.media.tumblr.com/507e1e2b919157a0f78da9765e82b233/tumblr_oaze55JB9l1v2s5upo1_250.jpg"],
	        
["film", ["Wanted"], "2008", ["2016 07 25"], 7, ["ger"], ["action", "crime"], [], [], ["Timur Bekmambetov"], ["James McAvoy", "Morgan Freeman", "Angelina Jolie", "Thomas Kretschmann"], "https://68.media.tumblr.com/1c74b22af3d4da828e4a144dd7b156c9/tumblr_oavolpeJA11v2s5upo1_250.jpg"],
	        
["film", ["Abraham Lincoln: Vampire Hunter", "Abraham Lincoln Vampirjäger"], "2012", ["2016 07 23"], 7, ["ger"], ["action", "fantasy"], ["bini", "nico"], [], ["Timur Bekmambetov"], ["Anthony Mackie", "Alan Tudyk", "Mary Elizabeth Winstead"], "https://66.media.tumblr.com/62901b32be451057ccb328ef425ed181/tumblr_oatwuuuvHR1v2s5upo1_250.jpg"],
	        
["film", ["Willy Wonka & the Chocolate Factory", "Charlie und die Schokoladenfabrik"], "1971", ["2016 07 18"], 7, ["eng"], ["family", "fantasy"], [], [], ["Mel Stuart"], [], "https://68.media.tumblr.com/3422aa25c752288b822ab2ef39e3fc20/tumblr_oakqccD51R1v2s5upo1_250.jpg"],
	        
["film", ["Breathe In", "Breathe in - Eine unmögliche Liebe"], "2013", ["2016 07 15"], 6, ["ger"], ["drama", "romance"], [], [], ["Drake Doremus"], ["Felicity Jones", "Mackenzie Davis", "Kyle MacLachlan"], "https://68.media.tumblr.com/b366d841f21174e3b85e5712ebfad4f8/tumblr_oadik4Kw0Y1v2s5upo1_250.jpg"],
	        
["film", ["Furry Vengeance", "Reine Fellsache"], "2010", ["2016 07 11"], 4, ["ger"], ["comedy", "family"], [], [], ["Roger Kumble"], ["Ken Jeong", "Skyler Samuels"], "https://68.media.tumblr.com/3b829b8924dc4221103ecee71d2ec658/tumblr_oa5wk2Pqth1v2s5upo1_250.jpg"],
	        
["film", ["Rise of the Planet of the Apes", "Planet der Affen: Prevolution"], "2011", ["2016 07 07"], 6, ["ger"], ["action", "drama"], [], ["Schule"], ["Rupert Wyatt"], ["James Franco", "John Lithgow", "Tom Felton"], "https://66.media.tumblr.com/aa56c2e79aed175254aaceab7be2be11/tumblr_o9yohyAAGo1v2s5upo1_250.jpg"],
	        
["film", ["The Book Thief", "Die Bücherdiebin"], "2013", ["2016 07 06", "2017 07 06"], 7, ["ger"], ["drama", "war"], [], ["Schule"], ["Brian Percival"], ["Heike Makatsch", "Geoffrey Rush", "Sebastian Hülk", "Carina Wiese", "Rainer Reiners"], "https://66.media.tumblr.com/41580d73f60910f1bd75dfb1f312f77e/tumblr_o9wl5j6aLu1v2s5upo1_250.jpg"],
	        
["film", ["The Gallows", "Gallows - Jede Schule hat ein Geheimnis"], "2015", ["2016 07 05"], 6, ["ger"], ["horror", "mystery"], [], ["Schule"], ["Travis Cluff", "Chris Lofing"], [], "https://66.media.tumblr.com/374675b1811304c46c9b4d3e7d31c8e8/tumblr_o9ulzkN3qm1v2s5upo1_250.jpg"],
	        
["film", ["On the Road", "On the Road - Unterwegs"], "2012", ["2016 07 04"], 5, ["ger"], ["adventure", "drama"], [], [], ["Walter Salles"], ["Kristen Stewart", "Amy Adams", "Kirsten Dunst", "Viggo Mortensen", "Steve Buscemi", "Joe Chrest", "Alice Braga", "Tom Sturridge"], "https://66.media.tumblr.com/56800f1b6f21a576eaa6963587b426e7/tumblr_o9t15mYCXt1v2s5upo1_250.jpg"],
	        
["film", ["The Kite Runner", "Drachenläufer"], "2007", ["2016 06 29"], 5, ["ger"], ["drama"], [], ["Schule"], ["Marc Forster"], ["Shaun Toub"], "https://66.media.tumblr.com/5d2ca6e91a55c7e9a3e562e568fb3e4f/tumblr_o9jfzdjo4F1v2s5upo1_250.jpg"],
	        
["film", ["Ultraviolet"], "2006", ["2016 06 23"], 3, ["ger"], ["action", "sci-fi"], [], [], ["Kurt Wimmer"], ["Milla Jovovich"], "https://68.media.tumblr.com/fedb289a623c7464d3303623b002a0c1/tumblr_o98se0VCyy1v2s5upo1_250.jpg"],
	        
["film", ["Maladies"], "2012", ["2016 06 18"], 7, ["ger"], ["drama"], [], [], ["Carter"], ["James Franco"], "https://68.media.tumblr.com/99cac7c6187c59b01a6d23b018194843/tumblr_o8zhqkzeLG1v2s5upo1_250.jpg"],
	        
["film", ["Pan's Labyrinth", "Pans Labyrinth", "El laberinto del fauno"], "2006", ["2016 06 18"], 6, ["ger"], ["drama", "fantasy"], [], [], ["Guillermo del Toro"], [], "https://66.media.tumblr.com/f269f3a35bd8919e82df825cd358cec4/tumblr_o8z0mqMjv51v2s5upo1_250.jpg"],
	        
["film", ["Zombeavers", "Zombiber"], "2014", ["2016 06 04"], 5, ["ger"], ["comedy", "horror"], ["nico"], [], ["Jordan Rubin"], [], "https://68.media.tumblr.com/bee0a9364e93fa8ce39557e2e5cfcea2/tumblr_o88xiomdvq1v2s5upo1_250.jpg"],
	        
["film", ["Rock of Ages"], "2012", ["2016 05 29"], 4, ["ger"], ["comedy", "drama"], [], [], ["Adam Shankman"], ["Russell Brand", "Alec Baldwin", "Bryan Cranston", "Tom Cruise", "T.J. Miller", "Julianne Hough"], "https://68.media.tumblr.com/ade55257d8a736975114a26a1c4ba3a4/tumblr_o7xsn9n5XC1v2s5upo1_250.jpg"],
	        
["film", ["Paranoia", "Paranoia - Riskantes Spiel"], "2013", ["2016 05 28"], 5, ["ger"], ["drama", "thriller"], [], [], ["Robert Luketic"], ["Liam Hemsworth", "Gary Oldman", "Harrison Ford", "Josh Holloway", "Angela Sarafyan", "Amber Heard"], "https://66.media.tumblr.com/8f905afb816032aacf9c357539a0d5c6/tumblr_o7whiospqw1v2s5upo1_250.jpg"],
	        
["film", ["Elysium"], "2013", ["2016 05 27"], 7, ["ger"], ["action", "drama"], [], [], ["Neill Blomkamp"], ["Matt Damon", "Jodie Foster", "Alice Braga"], "https://66.media.tumblr.com/17faa8ffb2d7c9f8a3cdfd6ac87ff25b/tumblr_o7urf54ndb1v2s5upo1_250.jpg"],
	        
["film", ["Whip It", "Roller Girl"], "2009", ["2016 05 16"], 7, ["ger"], ["drama", "sport"], [], [], ["Drew Barrymore"], ["Elliot Page", "Kristen Wiig"], "https://66.media.tumblr.com/49a0d8801f2b44f4d4d432931b15b335/tumblr_o7a034Btf01v2s5upo1_250.jpg"],
	        
["film", ["Neighbors", "Bad Neighbors"], "2014", ["2016 05 16"], 6, ["ger"], ["comedy"], ["bini", "nico"], [], ["Nicholas Stoller"], ["Seth Rogen", "Rose Byrne", "Zac Efron", "Dave Franco", "Halston Sage", "Christopher Mintz-Plasse", "Jake Johnson", "Ike Barinholtz", "Hannibal Buress"], "https://68.media.tumblr.com/e6fc6fa6313076ac4eb4ae6a16b5ba57/tumblr_o7a00dR6lX1v2s5upo1_250.jpg"],
	        
["film", ["Divergent", "Die Bestimmung - Divergent"], "2014", ["2016 05 14"], 7, ["ger"], ["action", "adventure"], [], ["Divergent"], ["Neil Burger"], ["Shailene Woodley", "Ansel Elgort", "Ray Stevenson", "Maggie Q", "Jai Courtney", "Miles Teller"], "https://68.media.tumblr.com/5b1ddf86ce07ab2e01dc47a8a3c48d27/tumblr_o76acxxLVg1v2s5upo1_250.jpg"],
	        
["film", ["Angels of Sex", "The Sex of Angels", "El sexo de los ángeles"], "2012", ["2016 05 14"], 8, ["eng"], ["drama", "romance"], [], ["LGBT"], ["Xavier Villaverde"], ["Astrid Bergès-Frisbey"], "https://66.media.tumblr.com/41cf57b607cdaa52fbf9ea602251f397/tumblr_o768kbs4zP1v2s5upo1_250.jpg"],
	        
["short", ["Camp Belvidere"], "2014", ["2016 05 05"], 4, ["eng"], ["drama"], [], [], ["Astrid Ovalles", "Oriana Oppice"], [], "https://68.media.tumblr.com/8e7b75da97aae419159417f7e4064a12/tumblr_o6tlq7XLU51v2s5upo1_250.jpg"],
	        
["film", ["Mr. Peabody & Sherman", "Die Abenteuer von Mr. Peabody & Sherman"], "2014", ["2016 04 24"], 4, ["ger"], ["animation", "adventure"], [], [], ["Rob Minkoff"], [], "https://40.media.tumblr.com/33bdc0cf239628096c59a2c25fc3b22c/tumblr_o651m9EXn41v2s5upo1_250.jpg"],
	        
["film", ["Kick Ass Girls", "Kick Ass Girls", "Bao 3 qiao jiao wa"], "2013", ["2016 04 17"], 3, ["eng"], ["action", "comedy"], [], [], ["Goo-Bi GC"], [], "https://49.media.tumblr.com/99be78c896d4d7cebe6d9383e3a6ada0/tumblr_o5ru0pOWL91v2s5upo1_250.jpg"],
	        
["film", ["Perfume: The Story of a Murderer", "Das Parfum - Die Geschichte eines Mörders"], "2006", ["2016 04 04"], 4, ["ger"], ["crime", "drama"], [], ["Schule"], ["Tom Tykwer"], ["Dustin Hoffman", "Alan Rickman", "Karoline Herfurth"], "https://40.media.tumblr.com/112deec925dd6a5aa2ede7e8cab5a7ae/tumblr_o5czaumakV1v2s5upo1_250.jpg"],
	        
["film", ["John Carter", "John Carter: Zwischen zwei Welten"], "2012", ["2016 03 19"], 4, ["ger"], ["action", "adventure"], [], [], ["Andrew Stanton"], ["Lynn Collins", "Willem Dafoe", "Mark Strong", "Bryan Cranston"], "https://49.media.tumblr.com/272b42cd23289f7af00995004400e462/tumblr_o4aex2y82i1v2s5upo1_250.jpg"],
	        
["film", ["Detachment"], "2011", ["2016 01 31"], 10, ["ger"], ["drama"], [], [], ["Tony Kaye"], ["Adrien Brody", "Bryan Cranston"], "https://49.media.tumblr.com/2afb69904baeee9d3b9f3823b3730403/tumblr_o1ticajuTx1v2s5upo1_250.jpg"],
	        
["film", ["It Follows"], "2014", ["2016 01 29"], 7, ["ger"], ["horror", "mystery"], [], [], ["David Robert Mitchell"], ["Maika Monroe", "Keir Gilchrist"], "https://49.media.tumblr.com/ac52b4abe789a78e992f6b673a73b1c7/tumblr_o1pw5sLA821v2s5upo1_250.jpg"],
	        
["film", ["The Happening"], "2008", ["2016 01 23"], 5, ["ger"], ["drama", "mystery"], ["bini", "nico", "sai"], [], ["M. Night Shyamalan"], ["Mark Wahlberg", "Zooey Deschanel", "John Leguizamo", "Betty Buckley", "Jeremy Strong"], "https://49.media.tumblr.com/132bbe9011223cd8d579661ba92f90ff/tumblr_o1gxahtSj81v2s5upo1_250.jpg"],
	        
["film", ["Election"], "1999", ["2015 09 16"], 5, ["ger"], ["comedy", "drama"], [], [], ["Alexander Payne"], ["Reese Witherspoon"], "https://68.media.tumblr.com/fa1e69953d869a5150eedd91475ba5cb/tumblr_oov15yd3271v2s5upo1_250.jpg"],
	        
["film", ["Ocean's Eleven"], "2001", ["2016 02 04"], 7, ["ger"], ["crime", "thriller"], [], ["Ocean's"], ["Steven Soderbergh"], ["George Clooney", "Bernie Mac", "Brad Pitt", "Matt Damon", "Julia Roberts", "Don Cheadle"], "https://49.media.tumblr.com/1811709df5b6221319bdcada72df6b3a/tumblr_o21hgqinxh1v2s5upo1_250.jpg"],
	        
["film", ["Ocean's Twelve"], "2004", ["2016 02 04"], 7, ["ger"], ["crime", "thriller"], [], ["Ocean's"], ["Steven Soderbergh"], ["Brad Pitt", "George Clooney", "Julia Roberts", "Bernie Mac", "Don Cheadle", "Jared Harris", "Matt Damon", "Bruce Willis", "Cherry Jones"], "https://40.media.tumblr.com/2531d637ad743bbba5177ba59889c334/tumblr_o21hjmuplI1v2s5upo1_250.jpg"],
	        
["film", ["Ocean's Thirteen", "Ocean's 13"], "2007", ["2016 02 06"], 7, ["ger"], ["action", "crime"], [], ["Ocean's"], ["Steven Soderbergh"], ["George Clooney", "Brad Pitt", "Matt Damon", "Don Cheadle", "Bernie Mac", "Joe Chrest"], "https://49.media.tumblr.com/c8c5ad3dfafd2f2b605241b993cdb55f/tumblr_o2aq5llQgm1v2s5upo1_250.jpg"],
	        
["film", ["The Maze Runner", "Maze Runner - Die Auserwählten im Labyrinth"], "2014", ["2016 05 10", "2016 09 10", "2017 08 05"], 8, ["ger"], ["action", "mystery"], ["jessie", "sai", "bini", "nico"], ["Maze Runner"], ["Wes Ball"], ["Thomas Brodie-Sangster", "Will Poulter", "Kaya Scodelario", "Dylan O'Brien"], "https://68.media.tumblr.com/e5cd215db485cdb5865fdd9f7529b0bb/tumblr_o6z0u5t3D31v2s5upo1_250.jpg"],
	        
["film", ["Maze Runner: The Scorch Trials", "Maze Runner - Die Auserwählten in der Brandwüste"], "2015", ["2016 05 10", "2017 08 06", "2018 06 02"], 7, ["ger"], ["action", "adventure"], ["jessie", "sai", "bini", "nico"], ["Maze Runner"], ["Wes Ball"], ["Kaya Scodelario", "Thomas Brodie-Sangster", "Alan Tudyk", "Dylan O'Brien", "Rosa Salazar", "Aidan Gillen", "Katherine McNamara", "Nathalie Emmanuel", "Giancarlo Esposito"], "https://68.media.tumblr.com/e2867a17875db4aa5373064363b8cae8/tumblr_o70vs8dZgP1v2s5upo1_250.jpg"],
	        
["film", ["Sherlock Holmes"], "2009", ["2016 05 29", "2016 10 19", "2017 07 20", "2018 03 07", "2021 05 07", ["2022 10 14", "2022 10 15"]], 9, ["ger"], ["action", "adventure"], ["bini", "syl"], ["Sherlock Holmes", "fav", "Netflix"], ["Guy Ritchie"], ["Robert Downey Jr.", "Rachel McAdams", "Mark Strong", "Jude Law", "Eddie Marsan"], "https://66.media.tumblr.com/3b03ca044ab3248a0e4b4292ff22e9a7/tumblr_o7zwr8yEKB1v2s5upo1_250.jpg"],
	        
["film", ["Sherlock Holmes: A Game of Shadows", "Sherlock Holmes - Spiel im Schatten"], "2011", ["2016 05 30", "2018 07 26", "2019 09 18", ["2022 10 28", "2022 10 29"]], 9, ["ger", "eng"], ["action", "adventure"], ["bini", "syl", "je"], ["Sherlock Holmes", "Netflix", "fav"], ["Guy Ritchie"], ["Robert Downey Jr.", "Jude Law", "Noomi Rapace", "Rachel McAdams", "Jared Harris", "Stephen Fry", "Eddie Marsan"], "https://68.media.tumblr.com/a6f4f97c4a99d895cf50feb151c7623c/tumblr_o81o7cc2WL1v2s5upo1_250.jpg"],
	        
["film", ["Isi & Ossi"], "2020", ["2020 10 12", "2021 02 27"], 8, ["ger"], ["comedy", "romance"], ["bini", "mai"], ["Netflix"], ["Oliver Kienle"], ["Lisa Vicari"], "https://64.media.tumblr.com/0185fee186caed73f134c23cd9c0691f/0d23c573ff9d8992-aa/s250x400/19becf5a1ae3e47aeb60c082833b927057e4f9d2.jpg"],
	        
["film", ["High School Musical"], "2006", ["2016 09 05", "2021 01 10"], 6, ["ger"], ["comedy", "drama"], ["bini"], ["High School Musical"], ["Kenny Ortega"], ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale", "Olesya Rulin"], "https://66.media.tumblr.com/aa5a0ebff5a9eae7c2caf2afa49d9cd8/tumblr_od1c4pCH8s1v2s5upo1_250.jpg"],
	        
["film", ["High School Musical 2", "High School Musical 2: Singt alle oder keiner!"], "2007", ["2016 09 06", "2021 10 30"], 5, ["ger"], ["comedy", "drama"], ["bini"], ["High School Musical"], ["Kenny Ortega"], ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale", "Olesya Rulin", "Miley Cyrus"], "https://66.media.tumblr.com/d751a95748c33aa4f43fb7a108c05ea6/tumblr_od3kchP53O1v2s5upo1_250.jpg"],
	        
["film", ["Pippi in the South Seas", "Pippi in Taka-Tuka-Land", "Pippi Långstrump på de sju haven"], "1970", ["2017 04 11", "2021 12 29"], 7, ["ger"], ["adventure", "comedy"], ["bini"], ["Pippi"], ["Olle Hellbom"], ["Inger Nilsson", "Maria Persson", "Pär Sundberg"], "https://68.media.tumblr.com/bdacbc0341f6ded654556499df5fb2aa/tumblr_ooaksmvW5V1v2s5upo1_250.jpg"],
	        
["film", ["Night at the Museum: Secret of the Tomb", "Nachts im Museum - Das geheimnisvolle Grabmal"], "2014", ["2017 01 01"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Shawn Levy"], ["Ben Stiller", "Robin Williams", "Owen Wilson", "Rami Malek", "Ben Kingsley", "Hugh Jackman", "Alice Eve", "Mizuo Peck", "Rebel Wilson"], "https://68.media.tumblr.com/e6a602c17edbef249f4d973e1945dfb3/tumblr_oj4eruClkU1v2s5upo1_250.jpg"],
	        
["film", ["Attack on Titan Crimson Bow and Arrow", "Attack on Titan: Crimson Arrows", "Gekijouban Shingeki no kyojin Zenpen: Guren no yumiya"], "2014", ["2017 06 18"], 7, ["jap"], ["anime", "action"], ["nico", "sai", "bini"], ["Attack on Titan"], ["Tetsurô Araki"], [], "https://68.media.tumblr.com/d33f4d29a7b2cc7d9b8abd168e62c00b/tumblr_os7woeG3Cs1v2s5upo1_250.jpg"],
	        
["film", ["Attack on Titan: The Wings of Freedom", "Attack on Titan: The Wings of Freedom", "Gekijôban Shingeki no Kyojin Kôhen: Jiyû no tsubasa"], "2015", ["2017 06 18"], 7, ["jap"], ["anime", "action"], ["nico", "bini", "sai"], ["Attack on Titan"], ["Tetsurô Araki"], [], "https://66.media.tumblr.com/883e0c0794a764ff31ebb003e82fce26/tumblr_ppuve2w4Ks1v2s5upo1_250.jpg"],
	        
["film", ["Attack on Titan Part 1", "Attack on Titan - Film 1", "Shingeki no kyojin"], "2015", ["2017 06 18"], 3, ["ger"], ["action", "adventure"], ["bini", "sai", "nico"], ["Attack on Titan"], ["Shinji Higuchi"], [], "https://66.media.tumblr.com/28637a05483a4ba3afcb3fa1bb4686de/tumblr_ppuvhvjDCI1v2s5upo1_250.jpg"],
	        
["film", ["The Three Investigators and the Secret of Skeleton Island", "Die drei ??? - Das Geheimnis der Geisterinsel"], "2007", ["2017 08 20", ["2022 09 22", "2022 09 23"]], 6, ["ger"], ["adventure", "family"], ["bini", "syl", "je"], ["Die drei ???", "bibliothek"], ["Florian Baxmeyer"], [], "https://66.media.tumblr.com/7545efb0d0d18a27af7cc8f6deac9754/tumblr_pxrg1vlgSh1v2s5upo1_250.jpg"],
	        
["film", ["The Three Investigators and the Secret of Terror Castle", "Die drei ??? - Das verfluchte Schloss"], "2009", ["2017 08 21", "2022 10 01"], 6, ["ger"], ["adventure", "family"], ["bini", "syl"], ["Die drei ???", "bibliothek"], ["Florian Baxmeyer"], [], "https://66.media.tumblr.com/a7946d483045d65949db9904cd1ba015/tumblr_pxrg81cI4y1v2s5upo1_250.jpg"],
	        
["film", ["Hilfe, wir sind offline!"], "2016", ["2017 10 23"], 5, ["ger"], ["comedy"], [], [], ["Ingo Rasper"], [], "https://66.media.tumblr.com/6aa4e7b05a285f119e0e2599dd9f0312/462a8354759e7b65-f8/s250x400/a69ee17be24929225689f8d9df7a6c462ece598a.jpg"],
	        
["film", ["Vor Sonnenaufgang"], "1979", ["2017 11 05"], 5, ["ger"], ["drama"], [], [], ["Oswald Döpke"], [], "https://66.media.tumblr.com/c3bb4ae9a6cd1dc5d4fff276c52cdc76/6df7fc9c5e397263-3b/s250x400/e7757befebb8f27b2a8fce39e1f8dd7f3ec2f972.jpg"],
	        
["film", ["Frau Müller muss weg!"], "2015", ["2017 11 25"], 6, ["ger"], ["comedy"], ["je"], [], ["Sönke Wortmann"], ["Anke Engelke", "Alwara Höfels"], "https://66.media.tumblr.com/841deafeaca2817ca1025bb032efbb35/tumblr_pyefojnGEl1v2s5upo1_250.jpg"],
	        
["film", ["Die Feuerzangenbowle"], "1944", ["2017 12 20"], 6, ["ger"], ["comedy"], [], ["Schule"], ["Helmut Weiss"], [], "https://66.media.tumblr.com/8e29c18b3a25115f7dc328df1f731112/tumblr_pyv14dONDH1v2s5upo1_250.jpg"],

["film", ["Suicide Squad"], "2016", ["2018 07 15"], 6, ["ger"], ["action", "adventure", "sci-fi"], ["nico"], ["Netflix"], ["David Ayer"], ["Will Smith", "Cara Delevingne", "Margot Robbie", "David Harbour", "Scott Eastwood", "Ike Barinholtz", "Jai Courtney"], "https://66.media.tumblr.com/421f26e9ea5188dec595e2d4ab38c04c/12e861d9046b93f6-91/s250x400/ab3f7a4448815f4d76dbd2774d3c573fba07bd4a.jpg"],

["film", ["The Chronicles of Narnia: The Voyage of the Dawn Treader", "Die Chroniken von Narnia - Die Reise auf der Morgenröte"], "2010", ["2019 04 06", "2021 12 22"], 7, ["ger"], ["adventure", "family"], [], ["Narnia", "Netflix", "Disney+"], ["Michael Apted"], ["Georgie Henley", "Skandar Keynes", "Ben Barnes", "Will Poulter", "Tilda Swinton", "Anna Popplewell"], "https://66.media.tumblr.com/24f7268b3298dbf4c4ae1a9122a2f3dd/0256992eb45e03c8-21/s250x400/bbb6924c2653086ef668b58fdb3f53e157a57de1.jpg"],

["series", ["Orange Is the New Black"], ["2013", "2019"], [["2018 03 04", "2018 03 06", "S1"], ["2018 03 07", "2018 03 09", "S2"], ["2018 03 09", "2018 04 14", "S3"], ["2018 04 14", "2018 04 22", "S4"], ["2018 04 22", "2018 05 10", "S5"], ["2019 01 22", "2019 04 29", "S6"]/*["2018 03 04", "2019 04 29", "S1 - S6"]*/], 7, ["ger"], ["comedy", "crime"], [], ["Netflix", "LGBT"], ["Jenji Kohan"], ["Laura Prepon", "Samira Wiley", "Laverne Cox", "Isabella Ferreira", "Tyler Alvarez", "Natasha Lyonne", "Lauren Lapkus"], "https://66.media.tumblr.com/33e78130beb5a208717c0614aaf330d7/dbcf5d5d4b548d18-86/s250x400/b72bd942e9c00f9a4cbc70a7465d8f10ee4e0bc2.jpg"],

["series", ["Between"], ["2015", "2016"], [["2018 06 27", "S1"], ["2018 06 27", "2018 07 05", "S2"]], 5, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["Michael McGowan"], ["Jennette McCurdy"], "https://66.media.tumblr.com/72d4b759d273d97b4514ac79d6a2d284/4ab65324a2a042c1-25/s250x400/36f43d8d6925a44cdded25548b7914ebe5c9623d.jpg"],

["series", ["Good Witch"], ["2015", ""], [["2018 07 05", "S1E1"]], 0, ["ger"], ["comedy", "drama"], [], ["Netflix", "dropped", "ongoing"], ["Craig Pryce", "Sue Tenney"], ["Bailee Madison", "Kyana Teresa"], "https://66.media.tumblr.com/788055bf59238f8c19186a65ecd9eed8/4b4adcea981e78c4-f7/s250x400/3e8fbc39c032f5f7486494b7bfb0d452b2d1d5d0.jpg"],

["series", ["The Innocents"], "2018", [["2018 11 15", "S1E1"]], 0, ["ger"], ["drama", "horror"], [], ["Netflix", "dropped"], ["Hania Elkington", "Simon Duric"], ["Sorcha Groundsell"], "https://66.media.tumblr.com/00841169158b4d584dd0135f7718e501/39f8ca6a64a2394b-e5/s250x400/71c8460fcc77519a4e6526889e19324fef427325.jpg"],

["series", ["Better Than Us"], ["2018", "2019"], [["2019 08 27", "2019 08 31", "S1 - S1E6"]], 0, ["ger"], ["drama", "sci-fi"], [], ["Netflix", "dropped"], ["Alexander Kessel"], [], "https://66.media.tumblr.com/bf2da911b6f2cb7fd7345b679e165b69/b5e067530df585bc-5e/s250x400/c634aa8600ffcc168b260d25f13328fcbadd222b.jpg"],

["series", ["Mako Mermaids", "Mako - Einfach Meerjungfrau"], ["2013", "2016"], [["2018 05 26", "S1E1 - S1E8"]], 4, ["ger"], ["adventure", "comedy"], ["bini"], ["Netflix", "dropped"], ["Jonathan M. Shiff", "Mark Shirrefs", "Sam Carroll"], ["Cariba Heine", "Jenna Rosenow", "Lucy Fry"], "https://66.media.tumblr.com/bcde6533a1d1b0660c5237ee6c88cb6c/cbe8ae356f8c7c34-2c/s250x400/2294dd1add5abccc35d92fdddb951ac8578da344.jpg"],

["series", ["Dear White People"], "2017", [["2018 05 23", "S1 - S1E3"]], 0, ["ger"], ["comedy", "drama"], [], ["Netflix", "dropped"], ["Justin Simien"], ["Lena Waithe", "Brant Daugherty"], "https://64.media.tumblr.com/805f0ab7c862905d53e8b0cf3ca47edf/09ea76a0ccac52c2-1d/s250x400/f61732a5b86074e72c2b02d92d582c3acb72ad9f.jpg"],

["series", ["Orphan Black"], ["2013", "2017"], [["2018 01 22", "2018 01 28", "S1 - S1E4"]], 0, ["ger"], ["action", "drama"], [], ["Netflix", "dropped"], ["Kim Coghill", "Andrew De Angelis", "Jeff Detsky"], [], "https://66.media.tumblr.com/cd51d1188604f65b71ec5abbf1cae81d/fcee7ff769440fc9-b3/s250x400/9488c5e38f6aaf328bfd49bcff1ba457f916f28c.jpg"],

["series", ["A Series of Unfortunate Events", "Eine Reihe betrüblicher Ereignisse"], ["2017", "2019"], [["2017 10 10", "2017 10 12", "S1 - S1E2"]], 0, ["ger"], ["adventure", "comedy"], [], ["Netflix", "dropped"], ["Joshua Conkel", "Emily Fox", "Sigrid Gilmer"], ["Neil Patrick Harris", "Malina Weissman", "Matty Cardarople", "Nathan Fillion", "Joan Cusack", "Robbie Amell"], "https://66.media.tumblr.com/4099693c83184c7a15126d1235986716/fbfd34dd316c53c2-16/s250x400/8bccea571ca270d687c2d09319dfc61cad206e68.jpg"],

["film", ["The Last Witch Hunter"], "2015", ["2020 10 15"], 4, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Breck Eisner"], ["Vin Diesel", "Rose Leslie", "Elijah Wood", "Ólafur Darri Ólafsson", "Michael Caine"], "https://64.media.tumblr.com/34529c008dba10e1a52d3464eccddd29/187a9419e6f17ebb-90/s250x400/a25c4b8527f8750d37c6204cab5b63a77f244754.jpg"],

["series", ["Candy Online"], "2019", [["2020 10 16", "2020 11 18", "S1E1-S1E2"]], 0, ["man"], [], [], ["Netflix", "dropped"], [], [], "https://64.media.tumblr.com/6f875a83a6e380cba20e1e5fce74070f/b4e9753e631c19a2-fa/s250x400/2c8032825e6bd6566cd9f7a1d291e5d98e15f22b.jpg"],

["film", ["Fantastic Beasts: The Crimes of Grindelwald", "Phantastische Tierwesen: Grindelwalds Verbrechen"], "2018", ["2020 10 16"], 6, ["ger"], ["adventure", "family"], [], ["Harry Potter", "Netflix"], ["David Yates"], ["Johnny Depp", "Carmen Ejogo", "Eddie Redmayne", "Callum Turner", "Jude Law", "Alison Sudol", "Claudia Kim", "Ólafur Darri Ólafsson", "Jamie Campbell Bower"], "https://64.media.tumblr.com/7d27499772f45466df494174c9b0affa/adccec2fb135d417-ad/s250x400/4d8c0d5b74a03b5b413dcceeaa5942e219ed1bc6.jpg"],

["film", ["365 Days", "365 Days", "365 dni"], "2020", ["2020 10 16"], 3, ["ger"], ["drama", "romance"], [], ["Netflix", "dropped"], ["Barbara Bialowas", "Tomasz Mandes"], [], "https://64.media.tumblr.com/2c85edd45ebeb256d326495aabbd856a/eb98e46994706b23-cc/s250x400/cbcb89dbd1400195572e5190bbcf56acfd0fe402.jpg"],

["audiobook", ["Good Wives"], "1869", [["2020 10 21", "2020 11 23"]], 8, ["eng"], [], [], ["March-Trilogie", "LibriVox"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/7f3d6feda05afd7018598432df30ad8f/b01ae36c85f5a2b5-80/s250x400/0246a1075a03acf0565518bfd1ab3fe41e9b8128.jpg"],

["film", ["I am here", "Ich bin immer für dich da!", "Main Hoon Na"], "2004", ["2020 10 26", ["2023 01 21", "2023 01 28"]], 10, ["hin"], ["action", "comedy", "bollywood"], ["bini", "mai"], ["Netflix"], ["Farah Khan"], ["Shah Rukh Khan", "Sushmita Sen", "Amrita Rao"], "https://64.media.tumblr.com/b0cdd5b36ab21c7927472b0ba3f26df2/c77b1b7cbfb69703-e8/s250x400/2d79b6abe2f007b1006bc4b51bf715a594b89ca5.jpg"],

["film", ["The Babysitter: Killer Queen"], "2020", ["2020 10 31"], 6, ["ger"], ["comedy", "horror"], ["bini"], ["Netflix"], ["McG"], ["Judah Lewis", "Samara Weaving", "Jenna Ortega", "Emily Alyn Lind", "Andrew Bachelor", "Robbie Amell", "Bella Thorne", "Hana Mae Lee"], "https://64.media.tumblr.com/2fdddf667d194b1d6b4e632f01f954ed/bcccd7b7533c156e-20/s250x400/25f93e87fbf70d5d90142d5451c5e48d2c03024d.jpg"],

["film", ["This Crazy Heart", "Dieses bescheuerte Herz"], "2017", ["2020 11 06"], 6, ["ger"], ["comedy", "drama"], ["syl", "bini"], ["Netflix"], ["Marc Rothemund"], ["Elyas M'Barek", "Nadine Wrietz", "Lisa Bitter"], "https://64.media.tumblr.com/f2e2519180de5df4fa39242eb4f044e7/b586f67d0e2637a2-eb/s250x400/787ab39392e449537936e477573dd28a343e41bc.jpg"],

["film", ["Firebringer"], "2016", ["2020 11 10", "2021 02 05"], 9, ["eng"], ["comedy", "history", "musical"], ["jenny", "vin"], ["StarKid"], ["Julia Albain", "Nick Lang"], ["Lauren Lopez", "Meredith Stepien", "Denise Donovan", "Lauren Walker", "Rachael Soglin", "Joey Richter", "Jaime Lyn Beatty", "Joe Walker", "Tiffany Williams", "Brian Holden", "Jamie Burns", "Clark Baxtresser"], "https://64.media.tumblr.com/de4235c06a4bfde26f73c7ee29dacb2d/95e669e372833627-2a/s250x400/05edbe20a3de0c564ed48caff5a01eeeb7d607e3.jpg"],

["film", ["Holidate"], "2020", ["2020 11 11"], 5, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["John Whitesell"], ["Emma Roberts", "Luke Bracey", "Kristin Chenoweth", "Frances Fisher", "Andrew Bachelor", "Jessica Capshaw", "Jake Manley", "Nicola Peltz"], "https://64.media.tumblr.com/dcb8fa00f16bec72503da7d6fb6be81b/25377e20660de32b-5e/s250x400/8e48a77a3baff68647ece9ac1d753c7141d9299d.jpg"],

["series", ["Monthly Girls' Nozaki-kun", "Shojo-Mangaka Nozaki-kun", "Gekkan Shoujo Nozaki-kun"], "2014", [["2014 12 23", "2015 03 01", "S1"]], 9, ["jap"], ["comedy", "romance", "anime"], [], ["GSNK"], ["Ryohei Takeshita", "Mitsue Yamazaki", "Geisei Morita"], [], "https://64.media.tumblr.com/b598b8f848c18943eab0e96e647162f5/8d3e2767707880b4-6a/s250x400/5a6aaf80bbcf3f594024fabbcdbfa45b9b1b7ae8.jpg"],

["series", ["Wandering Son", "Hourou Musuko", "Hourou Musuko"], "2011", [["2014 12 25", "2015 03 29", "S1"]], 9, ["jap"], ["anime", "drama"], [], ["LGBT"], ["Mari Okada", "Takako Shimura"], [], "https://64.media.tumblr.com/c14508b3671445d20cd6179c829ae90a/968e5f4256cd086a-8a/s250x400/32f583523263058bfd029fdd38bb2190f3664595.jpg"],

["series", ["Haikyuu!!"], ["2014", "2020"], [["2015 02 03", "2015 05 29", "S1E1-S1E17"], ["2015 10 03", "2016 01 17", "S2E1-S2E18"], ["2016 04 21", "2016 05 31", "S1E18-S1E25"], ["2017 02 03", "S2E19"]], 8, ["jap"], ["comedy", "drama", "anime"], [], ["dropped"], ["Haruichi Furudate"], [], "https://64.media.tumblr.com/838d9259500a3249f3ef5fad98e8cb73/3594fd2da779e5d0-62/s250x400/92d839170c270cc8e5f14518b8000ab147e0b828.jpg"],

["short", ["On Your Mark"], "1995", ["2017 01 15"], 6, ["jap"], ["anime", "music"], ["bini"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://64.media.tumblr.com/284f6e9df40de551249740993dac0026/de6f2e4ba9ff6a98-c9/s250x400/c29878fc959b894e60eeff8cf71a7e413bc11eef.jpg"],

["series", ["Oban Star-Racers"], "2006", [["2015 03 15", "2015 05 03", "S1"], ["2023 02 13", "2023 03 12", "S1"]], 7, ["ger"], ["anime", "action"], ["bini", "nico"], [], ["Savin Yeatman-Eiffel"], [], "https://64.media.tumblr.com/5a69f68482000c3d3bc49e1d9f913bfa/8778f65fc372df03-37/s250x400/66f4dc32f1ab67c74827bf8abb8310d191667d34.jpg"],

["series", ["Kantai Collection: Kan Colle"], ["2015", "2023"], [["2015 03 01", "2015 03 27", "S1"], ["2023 05 31", "2023 06 07", "S2"]], 9, ["jap"], ["anime", "action", "war"], ["bini", "nico"], ["Kantai Collection", "KanColle"], ["Jukki Hanada", "Kristen McGuire"], [], "https://64.media.tumblr.com/9f432ee003542cc7d6f1aea7c42d8b79/ec48220645d3149f-09/s250x400/a0cc00bcc3c5eb8d310df89fd2463d9fb89e96df.jpg"],

["series", ["I Can't Understand What My Husband Is Saying", "I Can't Understand What My Husband Is Saying", "Danna ga Nani wo Itteiru ka Wakaranai Ken"], "2014", [["2015 02 14", "S1"], ["2015 04 04", "2015 07 12", "S2"]], 7, ["jap"], ["anime", "comedy"], [], [], ["Coolkyoushinja", "Itsuki Imazaki", "Shinpei Nagai"], [], "https://64.media.tumblr.com/0e5b0afd03becd284c943e574eb98a43/151c681fed742ec8-d6/s250x400/29c2159837f4eb6a6d3b5403930058081d0dbf91.jpg"],

["series", ["Urawa no Usagi-chan"], "2015", [["2015 05 30", "2015 07 12", "S1"]], 6, ["jap"], ["anime"], [], [], ["Mitsuyuki Ishibashi"], [], "https://64.media.tumblr.com/138523f7dcac0bff42e51167e93c64b3/5c3f7950b1d65006-07/s250x400/28adc52e874231d80b4d390d2490bac48e4bffc7.jpg"],

["series", ["Hibike! Euphonium"], ["2015", "2016"], [["2015 04 07", "2015 07 20", "S1"], ["2021 09 15", "2021 10 13", "S1"], ["2021 10 13", "Special"], ["2021 10 13", "2021 11 03", "S2"]], 5, ["jap"], ["anime", "comedy", "music"], ["bini", "jani", "nico"], ["Hibike!"], ["Jukki Hanada", "Ayano Takeda"], [], "https://64.media.tumblr.com/26f7c0fdd8d665f681708799f91d7d63/eaecc5d8fff6b344-2b/s250x400/6ab13912d0b5885e9c1feef226500204ed638220.jpg"],/*S1: 6, S2: 4*/

["series", ["Kabaneri of the Iron Fortress", "Kabaneri of the Iron Fortress", "Kotetsujo no Kabaneri"], "2016", [["2016 04 10", "2017 02 03", "S1"]], 8, ["jap"], ["anime", "action"], [], [], ["Tetsurô Araki", "Hiroyuki Tanaka", "Hironori Aoyagi"], [], "https://64.media.tumblr.com/48ed858b3e8721211736ec06ac2e0dd5/99dcf775ae6fe13e-12/s250x400/3c556ee7e8021028154bb4fc65a40c76eeefe381.jpg"],

["series", ["Mikagura School Suite", "Mikagura School Suite", "Mikagura Gakuen Kumikyoku"], "2015", [["2015 05 25", "2015 08 30", "S1"]], 8, ["jap"], ["anime", "comedy"], [], [], ["John Burgmeier", "Jamie Marchi", "Monica Rial"], [], "https://64.media.tumblr.com/f18b2f93083f0f9f39d2a847d781413c/787d439623105281-41/s250x400/1f0aa0d87ce6d2e480760f0487ba3de185d777f1.jpg"],

["series", ["Himouto! Umaru-chan"], "2015", [["2015 10 02", "2016 06 03", "S1"]], 8, ["jap"], ["anime", "comedy"], [], [], ["Takashi Aoshima", "Kyle Jones", "Takamitsu Kono"], [], "https://64.media.tumblr.com/32f78a3543976f5b4ba1c30e09be5945/f4dbef4cf751ea95-d0/s250x400/2ec358178b196caba1561388a68b558dca03e538.jpg"],

["series", ["One Punch Man"], "2015", [["2015 09 20", "2015 12 20", "S1"]], 8, ["jap"], ["anime", "action"], [], [], ["Mike McFarland", "One", "Tomohiro Suzuki"], [], "https://64.media.tumblr.com/3870f2fafbd87c0b787641fbeeaa6ebc/93576afc0500227c-dc/s250x400/2c2e8a4dfd303b2a6df6ad5cd17c38a3445c9545.jpg"],

["series", ["Nichijou: My Ordinary Life", "Nichijou"], "2011", [["2013 12 27", "2015 02 01", "S1"], ["2017 08 02", "2017 10 02", "S1E1-S1E8"], ["2020 11 18", "2020 11 24", "S1E9-S1E26"], ["2022 02 23", "2022 04 13", "S1"]], 10, ["jap"], ["anime", "comedy"], ["bini", "jani", "jessie", "nico"], ["fav"], ["Keiichi Arai", "Jukki Hanada", "Katsuhiko Muramoto"], [], "https://64.media.tumblr.com/fe21469e3477f89e8b85a683bc38ff38/7d30ed1865b4e8e5-d4/s250x400/492525bb7c4103ea6894612c5c0f73e8a6ec95a3.jpg"],

["series", ["Hori-san to Miyamura-kun"], ["2012", "2018"], [["2015 07 12", "S1E1-S1E3"], ["2020 11 16", "S1E4"]], 10, ["jap"], ["anime"], [], [], ["Shingo Natsume", "Erukin Kawabata", "Tetsuo Hirakawa", "Kazuya Aiura"], [], "https://64.media.tumblr.com/a63f24baf4a10788b522ac82e1f0decf/58b8ce4c7e33aac4-22/s250x400/b0dedd1a547ad15b09c4197cb48d90e8b8a897f6.jpg"],

["series", ["One Week Friends", "One Week Friends", "Isshuukan Friends"], "2014", [["2016 02 08", "2016 03 12", "S1E1-S1E3"], ["2020 11 29", "2020 12 18", "S1E4-S1E12"]], 5, ["jap"], ["anime", "comedy"], [], [], ["Matcha Hazuki", "Mariko Kunisawa", "Megumi Shimizu"], [], "https://64.media.tumblr.com/c45981d0156b292095493dc7e02b5c3b/4c81f18d50d51493-0d/s250x400/89cea57a9158f5abc7fc8e1efb321d5895f31c92.jpg"],

["series", ["Magi: The Labyrinth of Magic"], ["2012", "2014"], [["2017 04 07", "S1E1-S1E4"], ["2022 06 14", "2022 06 21", "S1E1-S1E8"]], 4, ["jap"], ["anime", "action"], ["bini", "nico"], ["dropped"], ["Shinobu Ohtaka", "Hiroyuki Yoshino"], [], "https://64.media.tumblr.com/5fd55c2beb6ba4fe885c143c2ebc5fc9/0cd2344305584ae0-57/s250x400/98e904a74e6b5689483e4b73b6e43f2d2ceb2218.jpg"],

["film", ["Black Friday"], "2020", ["2020 11 14"], 6, ["eng"], ["musical"], [], ["StarKid"], ["Nick Lang"], ["Dylan Saunders", "Angela Giarratana", "Lauren Lopez", "Joey Richter", "Kim Whalen", "Curt Mega", "Robert Manion", "Jon Matteson", "Kendall Nicole Yakshe", "Jeff Blim", "Corey Dorris", "Jaime Lyn Beatty", "James Tolbert"], "https://64.media.tumblr.com/32a75a345342182f94075acbf8caa03d/ffda59dd14b00a3c-a2/s250x400/288d97765a786cb5bc09505eb17b3fa5d5e76737.jpg"],

["book", ["Night School: Fracture"], "2013", [["2020 11 15", "2021 01 13"]], 7, ["eng"], ["young adult", "mystery", "romance"], [], ["Night School"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/a9e7699368387bde78a2ec5b4423bdda/d19b697075db8b14-5f/s250x400/c4a95809ab88d6f3b7fd3efd34cdc9022c81fa56.jpg"],

["series", ["WataMote: No Matter How I Look at It, It's You Guys' Fault I'm Not Popular!", "WataMote: No Matter How I Look at It, It's You Guys' Fault I'm Not Popular!", "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!"], "2013", [["2018 01 01", "2018 01 02", "S1E1-S1E2"], ["2021 11 30", "2021 12 07", "S1E1-S1E2"]], 0, ["jap"], ["anime", "comedy"], ["bini", "nico"], ["WataMote", "dropped"], ["Nico Tanigawa"], [], "https://64.media.tumblr.com/ff06d00c8ead8c163f08a6503d734ad9/09b887819a34bada-42/s250x400/2c5b15b3bc8013d37cc94117e72192636c45dc5a.jpg"],

["series", ["Terror in Resonance", "Terror in Tokio", "Zankyô no teroru"], "2014", [["2014 11 14", "2015 05 14", "S1E1-S1E3"]], 5, ["jap"], ["anime", "drama"], [], ["dropped"], ["Shin'ichirô Watanabe", "Sayo Aoi", "Yuzuru Tachikawa"], [], "https://64.media.tumblr.com/829fa42796f294a0988732be1400fc03/726a3bdb7a4dc9b2-00/s250x400/25d871934b9c3d5fcb5834b26656cfe67857be87.jpg"],

["series", ["My Teen Romantic Comedy SNAFU", "My Teen Romantic Comedy SNAFU", "Yahari ore no seishun rabukome wa machigatteiru."], ["2013", ""], [["2015 05 28", "S2E1"], ["2022 10 17", "2022 10 31", "S1"]], 6, ["jap", "ger"], ["anime", "comedy"], ["bini", "nico"], ["ongoing"], ["Touko Machida", "Shotaro Suga", "Katsuhiko Takayama"], [], "https://64.media.tumblr.com/68cca8602889690dd8d4e65a2ae1bef4/397133657a1cee8f-b5/s250x400/ff61f2e1af4b58fb1fd4cfb768e4f04aa6a7f066.jpg"],

["series", ["Un-Go"], "2011", [["2015 03 26", "S1E1"]], 0, ["jap"], ["anime", "crime"], [], ["dropped"], ["Shô Aikawa", "Ango Sakaguchi"], [], "https://64.media.tumblr.com/48622d170422a1bb6a561701988fb573/645879eb4ce5390e-bf/s250x400/7a25eaa9c1524343d2df1275c17522f4e1b6393f.jpg"],

["series", ["Sword Art Online"], ["2012", ""], [["2015 03 29", "S1E1-S1E2"]], 0, ["jap"], ["anime", "action"], [], ["dropped", "ongoing"], ["Reki Kawahara", "Yukito Kizawa", "Muneo Nakamoto"], [], "https://64.media.tumblr.com/e5c63a45a6e5be91b2d88dd669c14df6/982ea7955d630d47-32/s250x400/71cb72ae8e686f73faa3a7e17350992b53bc0e6b.jpg"],

["series", ["Strike Witches"], ["2008", ""], [["2015 05 30", "S1E1"]], 0, ["jap"], ["anime", "action"], [], ["dropped", "ongoing"], ["Fumikane Shimada"], [], "https://64.media.tumblr.com/da489d574d78db238ee0f1baf3854358/38d6e9f055f5403a-28/s250x400/3d71d95c234efaf8fac6b7ffb02a7efd408d0e65.jpg"],

["series", ["Plastic Memories"], "2015", [["2015 04 06", "2015 04 24", "S1E1-S1E2"]], 5, ["jap"], ["anime", "drama"], [], ["dropped"], ["Naotaka Hayashi"], [], "https://64.media.tumblr.com/27ae58069b730dfba2b29e0ce05b2415/9988f5b368cd721e-75/s250x400/9b3a4db7f4b7913b8b039787182f0109573ff0da.jpg"],

["series", ["Monster Musume: Everyday Life with Monster Girls", "Die Monster Mädchen", "Monster Musume no Iru Nichijou"], "2015", [["2015 07 12", "2016 04 01", "S1E1-S1E6"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Kazuyuki Fudeyasu"], [], "https://64.media.tumblr.com/8806189b238b85a3aeedda058d570fdb/6308f7db1afef86a-59/s250x400/24a401e7355720cc92d031e3184db4f549817d97.jpg"],

["series", ["The Lost Village", "The Lost Village", "Mayoiga"], "2016", [["2016 04 03", "2017 02 03", "S1E1-S1E10"]], 5, ["jap"], ["anime", "drama"], [], ["dropped"], ["Keigo Koyanagi", "Mari Okada", "Shinsuke Ônishi"], [], "https://64.media.tumblr.com/d54950fe49ce36aa833de87b1fda7976/8974d9f479872b8b-8f/s250x400/b185c79e4d0f1e278e171e65fb5e9de2c759970e.jpg"],

["series", ["The Hentai Prince and the Stony Cat.", "The Hentai Prince and the Stony Cat.", "Hentai ôji to warawanai neko."], "2013", [["2016 04 17", "S1E1"], ["2016 12 28", "S1E2"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Michiko Itô", "Sou Sagara"], [], "https://64.media.tumblr.com/f7675ce0d8fb40ce75664ef8b3931edf/b9ec8e91b2c2ef9c-8d/s250x400/84b3b84bda253093a98e39ed1c5effb47dfa4c7a.jpg"],

["series", ["My First Girlfriend Is a Gal", "My First Girlfriend Is a Gal", "Hajimete No Gal"], "2017", [["2017 08 02", "S1E1"]], 6, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Hiroyuki Furukawa", "Daiji Iwanaga", "Yusaku Saotome"], [], "https://64.media.tumblr.com/262115bcaad0a61f44f5fe996639cadd/99562305c8e34483-10/s250x400/8d09dca3ceea99e6637830210d54c11667310d5c.jpg"],

["series", ["Girls & Panzer", "Girls und Panzer", "Girls & Panzer"], ["2012", "2013"], [["2015 08 03", "S1E1"]], 0, ["jap"], ["anime", "action"], [], ["dropped"], ["Reiko Yoshida"], [], "https://64.media.tumblr.com/362e77173e0f8570ddb7f4f16e71782b/e7778c1b0f7ec43b-6e/s250x400/a390c025159e1c67c08c6d5c786d861b2dca40fd.jpg"],

["series", ["Flying Witch"], "2016", [["2016 05 11", "2017 02 03", "S1E1-S1E9"]], 6, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Chihiro Ishizuka", "Hitomi Mieno", "Hiroko Fukuda"], [], "https://64.media.tumblr.com/132f04d0308530b9053af9ba069ce4e0/2b353153c44817d5-17/s250x400/4029f782ed2e39ae57f50a89ae580e18abb8fdf7.jpg"],

["series", ["Death Parade"], "2015", [["2015 02 14", "S1E1"]], 0, ["jap"], ["anime", "drama"], [], ["dropped"], ["Yuzuru Tachikawa", "Jun Shishido", "Yosuke Hatta"], [], "https://64.media.tumblr.com/296f32c126174753e7692be8c479d7ab/d10c4480e080cf8c-bc/s250x400/b85e478d975d255835960ff9ba39ab546f9ff5ae.jpg"],

["series", ["My Hero Academia", "Boku no Hero Academia", "Boku no hîrô akademia"], ["2016", ""], [["2016 06 25", "S1E1-S1E11"]], 5, ["jap"], ["anime", "action"], [], ["dropped", "ongoing"], ["Kôhei Horikoshi", "Yôsuke Kuroda"], [], "https://64.media.tumblr.com/3e8c6c2183a038483327f89fb2b9ae7b/d58f2168d28d9ea7-11/s250x400/6e86c07dda557cb35009c3751dcd82ade473aa0e.jpg"],

["series", ["Barakamon"], ["2014", ""], [["2015 08 14", "S1E1-S1E5"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped", "ongoing"], ["Masaki Tachibana", "Taketomo Ishikawa", "Shinya Iino"], [], "https://64.media.tumblr.com/30f10afd707bb167b644f9e136e9d086/d928de7b354c7061-0a/s250x400/7295fef336a4b2c076bac675efd4169a4a797e9c.jpg"],

["film", ["Anohana the Movie: The Flower We Saw That Day", "AnoHana: Die Blume, die wir an jenem Tag sahen", "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai. Movie"], "2013", ["2015 05 01"], 0, ["jap"], ["anime", "adventure"], [], ["dropped"], ["Tatsuyuki Nagai"], [], "https://64.media.tumblr.com/7b1e42c832534272149b1c1441c5fd01/1395997a92e7cab4-66/s250x400/d451ed89ed47c501602354f05ef998048e112038.jpg"],

["series", ["Wakaba Girl", "Wakaba Girl", "Wakaba*Girl"], ["2015", ""], [["2015 07 13", "S1E1-S1E2"]], 0, ["jap"], ["anime"], [], ["ongoing"], ["Jukki Hanada", "Yui Hara"], [], "https://64.media.tumblr.com/ae906e19fd97dd516ea1797ab4aea0e5/cc07ea1f72301543-08/s250x400/e660b2066331d9f1aeaab4e2282b2473d75c0676.jpg"],

["series", ["Stella Women's Academy, High School Division Class C³", "Stella Women's Academy, High School Division Class C³", "Stella Jogakuin Koutou-ka C³-bu"], "2013", [["2015 05 31", "2015 09 23", "S1E1-S1E7"]], 9, ["jap"], ["anime", "comedy"], [], [], ["Ikoma"], [], "https://64.media.tumblr.com/5228bc36987a92888e88f83db0f3aa7f/167e37f41252d532-ad/s250x400/9ee7dd11d193fe6b1cdbcad10bcfbcab9c7cdce3.jpg"],

["series", ["Sound of the Sky", "Sound of the Sky", "So Ra No Wo To"], "2010", [["2015 05 29", "S1E1"]], 0, ["jap"], ["anime", "comedy"], [], [], ["Paradores", "Hiroyuki Yoshino"], [], "https://64.media.tumblr.com/4ffaa8b5c41543c296f6e9b9652f8e87/58849f268738b7fb-ca/s250x400/4224abae1d720f6441bdc674732dc7a54ac9b78d.jpg"],

["series", ["God Eater"], "2015", [["2015 10 22", "2015 11 08", "S1E1-S1E2"]], 0, ["jap"], ["anime", "action"], [], [], ["Takayuki Hirao", "Kei Tsunematsu"], [], "https://64.media.tumblr.com/613a8b0bdc557edbbeca8c1421ab5d9f/b6c7d20e3f6a4431-cd/s250x400/c667a2cc7f5953ee5b45251d86d17ce84419b501.jpg"],

["series", ["Bakemonogatari"], "2009", [["2015 04 02", "2015 04 11", "S1E1-S1E5"], ["2021 01 08", "", "S1E6-"]], 5, ["jap"], ["anime", "action"], [], [], ["Nisio Isin", "Yukito Kizawa", "Muneo Nakamoto"], [], "https://64.media.tumblr.com/bbe2cedeb36c20e65809a0d481529585/e94f9507e4dea04a-f8/s250x400/72d51f0654873f768b8f5cb26bb83c2572774ea6.jpg"],

["series", ["Million Doll"], "2015", [["2015 07 12", "S1E1"]], 0, ["jap"], ["anime", "music"], [], ["dropped"], [], [], "https://64.media.tumblr.com/272565aee1cb0cb11ec8d832d15cda8f/724265a84be421cf-58/s250x400/a840334da5e6174681c474c85450d89005f295f2.jpg"],

["series", ["One Punch Man Specials"], ["2015", "2016"], [["2016 04 10", "2016 05 14", "S1E1-S1E2"]], 4, ["jap"], ["anime"], [], ["dropped"], [], [], "https://64.media.tumblr.com/fa1470b3e4e03fc2b9cf32bfc5e7685b/9995305b89b2349e-0a/s250x400/c1dcef14024253c9746382de46660e8f774d774e.jpg"],

["series", ["Sound! Euphonium Specials", "Hibike! Euphonium: Suisougaku-bu no Nichijou", "Hibike! Euphonium: Suisougaku-bu no Nichijou"], "2015", [["2015 09 26", "S1E1-S1E2"], ["2020 11 26", "2020 11 29", "S1E3-S1E7"]], 7, ["jap"], ["anime", "music"], [], ["Hibike!"], [], [], "https://64.media.tumblr.com/543032b98e59a7967966999c2978873e/563804548e67c0ba-d4/s250x400/b3c1b24e221ad898de46432f3770f0296af6acb1.jpg"],

["series", ["Ancien and the Magic Tablet: Another Story", "Ancien und das magische Königreich: Eine weitere Geschichte"], "2017", [["2017 11 19", "S1"]], 7, ["jap"], ["anime"], [], [], ["Kenji Kamiyama"], [], "https://64.media.tumblr.com/68fa4c29cf907cb2e1613a1a37a83e28/134226e4f12d16c5-4e/s250x400/6242b1462161e9fc78b73a006c96b853e5c16b92.jpg"],

["short", ["My Ordinary Life Episode 0", "Nichijou: Episode 0", "Nichijou: Nichijou no 0-wa"], "2011", ["2015 05 30"], 8, ["jap"], ["anime"], [], [], [], [], "https://64.media.tumblr.com/f89ed52e85c270c56f6fb615843d4beb/b51d313f90da7dd6-5e/s250x400/c9d4c7631ce80f22564d4991c763ef14984d0ec2.jpg"],

["short", ["RS Project: Rebirth Storage", "RS Project: Rebirth Storage", "RS Keikaku: Rebirth Storage"], "2016", ["2016 08 21"], 5, ["jap"], ["anime"], [], [], [], [], "https://64.media.tumblr.com/cbd5269f94ab5d15db7b1b979db95e3a/4a632cc3952150b4-38/s250x400/c0041b702f14d960c1c90754b787bcf1fe0ba3ec.jpg"],

["series", ["Tamayura"], "2010", [["2015 09 05", "2015 09 06", "S1"]], 7, ["jap"], ["anime"], [], [], [], [], "https://64.media.tumblr.com/7094f7e1dc3d22157a42095aaf6c3007/32b2babbf635de5c-cf/s250x400/b5ddc01dc18b8f198641821c17a307c44c27bc46.jpg"],

["short", ["The iDOLM@STER Live For You!"], "2008", ["2015 05 30"], 6, ["jap"], ["anime"], [], [], [], [], "https://64.media.tumblr.com/8ec4f1da749c03f5667c4ccf5e9027ee/18780eb3f298e117-ac/s250x400/c8e7c96a176df8e9e186876260161c39275c7180.jpg"],

["short", ["Upotte!!: Miatte Waratte"], "2012", ["2015 09 06"], 5, ["jap"], ["anime"], [], [], [""], [], "https://64.media.tumblr.com/e009413be6de26faa638e877615f3654/5391a5c38dd30b70-16/s250x400/67e3e229036f9dc8c188f290126b6443d21e516c.jpg"],

["short", ["Since I'm Not Popular, I'll Become an Enigma", "Since I'm Not Popular, I'll Become an Enigma" ,"Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!: Motenaishi, Nazomeite Miru"], "2014", ["2015 09 05"], 7, ["jap"], ["anime"], [], ["WataMote"], [], [], "https://64.media.tumblr.com/fcc95eb1e75dd479c0674ad1779f67e0/707da638da4c5c92-d8/s250x400/b8a17c8b5372cb53f412613ffdbfa43a708923c8.jpg"],

["series", ["Saki - Episode of Side A", "Saki - Episode of Side A", "Saki Achiga-hen: Episode of Side-A Specials"], "2013", [["2015 12 27", "S1E1"]], 0, ["jap"], ["anime"], [], ["dropped"], [], [], "https://64.media.tumblr.com/12c30db5a77ff2d5bce6414b3aee9d4c/2319032ae3e17dc3-47/s250x400/566435ed0785af82c00b9db00b1bcc4ffbf09913.jpg"],

["series", ["Touhou Niji Sousaku Doujin Anime: Musou Kakyou"], "2008", [["2015 09 05", "S1E1"]], 0, ["jap"], ["anime"], [], ["dropped"], [], [], "https://64.media.tumblr.com/62c156ce0e6534c04a90a268945358da/ba8e200f99a44b67-fe/s250x400/f92b619cf372eaf374d84a0891f5f1e63cbb6eff.jpg"],

["film", ["3096 Days", "3096 Tage"], "2013", ["2020 11 04"], 0, ["ger"], ["biography", "crime"], [], ["Netflix", "dropped"], ["Sherry Hormann"], ["Antonia Campbell-Hughes", "Thure Lindhardt"], "https://64.media.tumblr.com/652cab13e7ad0ddba3b5943174ac7240/e56e640487743952-80/s250x400/b8e82c509d07f1a6d9c15a64834cbcad8be2b591.jpg"],

["audiobook", ["Little Men"], "1871", [["2020 11 30", "2021 02 04"]], 8, ["eng"], [], [], ["March-Trilogie", "LibriVox"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/183bf87c0b1f3f8ca48b176b2ff3851c/a06c379b6c7a588c-e0/s250x400/bddf48ffc7d64ce47f8f25fa27a580ca0efb5952.jpg"],

["series", ["Dash & Lily"], "2020", [["2020 11 27", "2020 11 30", "S1"]], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Rachel Cohn", "David Levithan", "Lauren Moon"], ["Austin Abrams", "Midori Francis", "Dante Brown", "Troy Iwata", "Keana Marie", "Patrick Vaill", "Michael Park", "Alexander Blaise", "Kevin Jonas", "Nick Jonas", "Joe Jonas"], "https://64.media.tumblr.com/009e36fbb4c3a950d53376fa4810855c/bdf61e2f07ebd615-8d/s250x400/bca2ea4bb589a8eb190267b3e4cfe399acb3e40b.jpg"],

["series", ["Never Have I Ever", "Noch nie in meinem Leben ..."], ["2020", "2023"], [["2020 12 01", "2020 12 07", "S1"], ["2021 09 10", "2021 09 20", "S2"], ["2023 01 17", "2023 01 21", "S3"]], 7, ["ger"], ["comedy"], [], ["Netflix", "ongoing"], ["Lang Fisher", "Mindy Kaling"], ["Maitreyi Ramakrishnan", "Darren Barnet", "Adam Shapiro", "Iqbal Theba", "Poorna Jagannathan"], "https://64.media.tumblr.com/0ab55504d8cb69c49a4e329cff0bea82/ea32689669f5c17a-58/s250x400/509388dce734b2135fa474ff2839329cd1285968.jpg"],

["film", ["Jurassic Park"], "1993", ["2020 12 03"], 7, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "syl", "je"], ["Jurassic Park", "DVD"], ["Steven Spielberg"], ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "BD Wong", "Samuel L. Jackson"], "https://64.media.tumblr.com/677119acfe9761f64d9adf79ad569595/297f5ab82df6a1a2-07/s250x400/9f34de7bcafefe97dd99a3d0c2f4df93468175d2.jpg"],

["series", ["Dragon's Dogma"], "2020", [["2020 12 09", "S1"]], 4, ["ger"], ["animation", "action"], [], ["Netflix"], ["Kurasumi Sunayama"], [], "https://64.media.tumblr.com/8d0f03e343dbc153bd123f2e032085a5/e3df557906169e51-99/s250x400/09bcf1a00a3c92a47e3e05dcdaaaeaa868dd3686.jpg"],
	        
["film", ["Detective Conan 22: Zero The Enforcer", "Detektiv Conan 22: Zero der Vollstrecker", "Meitantei Conan 22: Zero no Shikkônin"], "2018", ["2020 12 13"], 5, ["ger"], ["anime", "action", "drama", "mystery", "police", "shounen"], ["bini"], ["Conan"], ["Yuzuru Tachikawa"], [], "https://64.media.tumblr.com/24895b09f7df697c27748979c6f86c74/51797da93d38f44c-1e/s250x400/570b9e7bd006cbdca545aa628151923bd390e6e1.jpg"],

["series", ["Baby"], ["2018", "2020"], [["2020 12 14", "2020 12 27", "S1"], ["2021 01 03", "2021 01 30", "S2"], ["2021 01 30", "2021 02 06", "S3"]], 4, ["ger"], ["drama"], [], ["Netflix"], ["Antonio Le Fosse", "Giacomo Mazzariol", "Marco Raspanti"], ["Benedetta Porcaroli", "Alice Pagani", "Riccardo Mandolini", "Chabeli Sastre"], "https://64.media.tumblr.com/0d4d0459f10a1ef78a1ad6db491e148b/3857c16f19c89358-10/s250x400/2b9f864c0edddfd1731a09a28714c82e65adf724.jpg"],

["film", ["Rose Island", "Die unglaubliche Geschichte der Roseninsel", "L'incredibile storia dell'Isola delle Rose"], "2020", ["2020 12 23"], 7, ["ger"], ["adventure", "comedy"], ["syl", "bini"], ["Netflix"], ["Sydney Sibilia"], ["Matilda De Angelis", "François Cluzet", "Luca Zingaretti", "Leonardo Lidi"], "https://64.media.tumblr.com/e2a9b804d3d5898daea12c880856049d/64e2e546ac07227e-3c/s250x400/23a9587d1f2864291d87d0ee2418b793f99fa3f9.jpg"],

["short", ["If Anything Happens I Love You"], "2020", ["2020 12 30"], 8, [], ["animation"], [], ["Netflix"], ["Michael Govier", "Will McCormack"], [], "https://64.media.tumblr.com/68ef38fc329dde23e88a4700cda62102/e50395811689d835-b8/s250x400/0fed1c2aaded4b604425c91e4942c31cda2e5756.jpg"],

["film", ["KanColle: The Movie", "Kantai Collection: KanColle Movie"], "2016", [["2020 12 31", "2021 01 03"]], 7, ["jap"], ["anime", "action"], [], ["Kantai Collection", "KanColle"], ["Keizô Kusakawa"], [], "https://64.media.tumblr.com/a447c9f6d8a7c8d7d0a2a0833c0d282e/b02d8f292f5b4614-e3/s250x400/02d83c1d81f532e207e2a240ad6951157f82212d.jpg"],

["series", ["The Alienist", "Die Einkreisung"], ["2018", "2020"], [["2020 12 31", "2021 01 03", "S1"], ["2021 01 05", "2021 01 14", "S2"], ["2023 12 21", "2023 12 23", "S1"]], 8, ["ger"], ["crime", "drama"], [], ["Kreizler Series", "Netflix"], ["Hossein Amini", "Amy Berg", "Stuart Carolan"], ["Daniel Brühl", "Luke Evans", "Dakota Fanning", "Ted Levine", "Martin McCreadie", "Lara Pulver", "Bill Heck", "Brooke Carter"], "https://64.media.tumblr.com/71ab538cd41671bc3c008d7452b33420/d6035eae3c5d56bf-b7/s250x400/b3e91ecd7b08bee60651d960f8dde88599b41458.jpg"],

["film", ["(T)Raumschiff Surprise - Periode 1"], "2004", ["2020 12 31", "2023 12 31"], 7, ["ger"], ["comedy", "sci-fi"], ["bini", "syl", "je"], ["Netflix"], ["Michael Herbig"], ["Michael Herbig", "Rick Kavanian", "Christian Tramitz", "Anja Kling", "Til Schweiger", "Sky du Mont", "Christoph Maria Herbst"], "https://64.media.tumblr.com/1721a3c2cb768685026d6612f04cec82/6ea36aafa3c6e7ab-ec/s250x400/739b2425416b1467ca52a2be4cb52d42d4e5cdb2.jpg"],

["film", ["Ocean's Eight", "Ocean's 8"], "2018", ["2021 01 01"], 5, ["ger"], ["action", "comedy"], ["bini", "syl", "je"], ["Ocean's"], ["Gary Ross"], ["Sandra Bullock", "Cate Blanchett", "Midori Francis", "Richard Armitage", "Anne Hathaway", "Helena Bonham Carter", "Mindy Kaling", "Rihanna", "Dakota Fanning", "Awkwafina", "Sarah Paulson", "Alexander Blaise", "Heidi Klum"], "https://64.media.tumblr.com/1685ac3e1036f000bab49a983b8e95c8/8ffb91d8fa4aceca-21/s250x400/5ae38d7c2156d517d87e1e4c2bb6b168974b30fc.jpg"],

["series", ["Toradora!"], ["2008", "2009"], [["2021 01 07", "2021 03 04", "S1"]], 5, ["ger"], ["anime", "comedy", "slice of life", "romance", "school"], [], ["Netflix"], ["Tatsuto Higuchi", "Mari Okada", "Junko Okazaki"], [], "https://64.media.tumblr.com/dc150e61e55cdc931c38f27e1708b2c3/7edec0b0c88a870e-60/s250x400/ab102a70b911e96a29eeff7cc1e6ccc613ae7cb2.jpg"],

["film", ["Red Sparrow"], "2018", ["2021 01 09"], 6, ["ger"], ["action", "drama"], ["syl"], ["Netflix"], ["Francis Lawrence"], ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts", "Charlotte Rampling", "Jeremy Irons", "Sasha Frolova", "Sebastian Hülk", "Louis Hofmann", "Mary-Louise Parker"], "https://64.media.tumblr.com/2735570ab96f0356de104d510530bc1b/13a001b3ba68ed9e-de/s250x400/60f555038eb1ef7fb5115cf97c1398a0506795e9.jpg"],

["book", ["Das zweite Buch Otto"], "1984", [["2021 01 13", "2021 01 24"]], 3, ["ger"], [], [], [], ["Otto Waalkes"], [], "https://64.media.tumblr.com/31c1cbdcd43836b6ecaf1cb0d0fef146/c4e9758c62c2f1fd-94/s250x400/1648bcfe15914891f2cfe495bf5e7ed0bcc32189.jpg"],

["film", ["Seven Years in Tibet", "Sieben Jahre in Tibet"], "1997", ["2021 01 15"], 6, ["ger"], ["adventure", "biography", "war", "history"], [], ["Netflix"], ["Jean-Jacques Annaud"], ["Brad Pitt", "David Thewlis", "BD Wong"], "https://64.media.tumblr.com/cc17db779107d0f352635dd66cbb836c/de3f13db62a0d239-4f/s250x400/33cfa36fb11efec9467dd78071eb8a6f5f1dada0.jpg"],

["series", ["Lupin"], "2021", [["2021 01 15", "S1"], ["2021 06 11", "2021 06 15", "S2"], ["2023 10 10", "2023 10 11", "S3"]], 8, ["ger"], ["action", "crime"], [], ["Netflix", "ongoing"], ["George Kay", "François Uzan", "Florent Meyer"], ["Omar Sy"], "https://64.media.tumblr.com/13329024a3f2db9b2cd874c63b0cb1c1/355aa3eb0ea4d2e7-b2/s250x400/2c7e5cfd6c3a5f1eea65d50f0b04404e8ad66338.jpg"],

["film", ["Ni no Kuni"], "2019", ["2021 01 15"], 5, ["ger"], ["anime", "action"], [], ["Netflix"], ["Yoshiyuki Momose"], [], "https://64.media.tumblr.com/9c6cac0c01db052e626942361741ed45/22ad2c7cc4e364ae-b2/s250x400/9f0da76df04a1f30c108bc5928f5b4e99e6349ba.jpg"],

["film", ["Unter Eisbären - Abenteuer in Russlands Arktis"], "2009", ["2021 01 16"], 7, ["ger"], ["documentary"], ["syl"], [], ["Heiko De Groot"], ["Heiko De Groot", "Uwe Anders"], "https://64.media.tumblr.com/48f854aad27cf46b74e5ca19f4ea0a1b/870216caf789db6f-c0/s250x400/affb8c85fe783d4e32eb9ac40a42dc109f36aa82.jpg"],

["series", ["Alias Grace"], "2017", [["2021 01 16", "2021 01 18", "S1"]], 5, ["ger"], ["biography", "crime"], [], ["Netflix"], ["Mary Harron"], ["Edward Holcroft", "Anna Paquin", "Samantha Weinstein"], "https://64.media.tumblr.com/ff300196382d7350f1a78512ee66590f/05df67ccba5f9927-7b/s250x400/5fa553bcd2fd94bcb56d72e610d7116c774d1a9b.jpg"],
	        
["book", ["Night School: Resistance"], "2014", [["2021 01 25", "2021 03 30"]], 8, ["eng"], ["young adult", "mystery", "romance"], [], ["Night School", "bby"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/caf49c4742f96ab0d596bf1376ad4cb4/e4d9eba247c40756-65/s250x400/656b301b81b28434dcfbf0b03516dc6937c9bd2c.jpg"],

["book", ["One Piece"], ["1997", ""], [["", "C1-C136"]], 6, ["ger"], ["action", "adventure", "comedy", "fantasy"], [], ["dropped", "ongoing"], ["Eiichiro Oda"], [], "https://64.media.tumblr.com/c45f994dca62c6f02d9e9f3dd0bf83fa/97b548dade66b0f8-0c/s250x400/a9b1da01c3420527283235512e8247e93c1e2f36.jpg"],

["book", ["Fairy Tail"], ["2006", "2017"], [["", "C1-C29"]], 6, ["ger"], ["action", "adventure", "comedy", "fantasy"], [], ["dropped"], ["Hiro Mashima"], [], "https://64.media.tumblr.com/00f192044dcfc0cc911447cdcebd8fef/423f5868d860d9a2-b8/s250x400/ddf32288e94407f8ef582b589044a652c443376f.jpg"],

["film", ["Finding 'Ohana", "Abenteuer 'Ohana"], "2021", ["2021 02 01", "2022 04 09"], 6, ["ger", "eng"], ["action", "adventure"], ["bini", "mai"], ["Netflix"], ["Jude Weng"], ["Kelly Hu", "Ke Huy Quan", "Chris Parnell", "Marc Evan Jackson", "Owen Vaccaro", "Ricky Garcia"], "https://64.media.tumblr.com/78544ee1bc161c9be4fbad948bee2fd3/ea711346522ca089-04/s400x600/b43a3736f2d5b622c37f2e419ba87ffb1ff39840.jpg"],

["film", ["The Climb", "Der Aufstieg", "L'ascension"], "2017", ["2021 02 02"], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Ludovic Bernard"], ["Ahmed Sylla", "Moussa Maaskri", "Mario Pecqueur"], "https://64.media.tumblr.com/0d952fda503a2fe75024c31a7772f738/7050e5ee38e9b772-06/s250x400/321d75e73bdb0013616658ea52a825c51afb5d0c.jpg"],

["audiobook", ["Jo's Boys"], "1886", [["2021 02 04", "2021 03 15"]], 8, ["eng"], [], [], ["March-Trilogie", "LibriVox"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/2c95760a721ddc546744dde0a847e9cd/086cf60edc83fcb4-8f/s400x600/ba1ec8168f1e4567e0be6f1dd7b84c02eae7e39f.jpg"],

["film", ["Eighth Grade"], "2018", ["2021 02 05"], 5, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Bo Burnham"], ["Jake Ryan", "Imani Lewis"], "https://64.media.tumblr.com/bf3e142a4d848a56aaab6996908a2411/d29826633fcbea74-16/s250x400/33a141e154e645351a2167ee589a53adf3d53177.jpg"],

["series", ["Snowpiercer"], "2020", [["2021 02 05", "2021 02 08", "S1"], ["2021 02 13", "2021 04 02", "S2"]], 5, ["ger"], ["action", "drama", "sci-fi"], [], ["Netflix", "ongoing"], ["Josh Friedman", "Graeme Manson"], ["Sheila Vand", "Annalise Basso", "Miranda Edwards", "Sean Bean", "Timothy V. Murphy", "Madeleine Arthur", "Jennifer Connelly", "Rowan Blanchard", "Shaun Toub", "Kurt Ostlund"], "https://64.media.tumblr.com/3477ca09fd2b3bb5d18fea7d51fa0d40/e3297eb57edd7e85-c9/s250x400/9c46b73e0945e344c59d0fda6ff444734c3b0982.jpg"],

["film", ["How to Lose a Guy in 10 Days", "Wie werde ich ihn los in 10 Tagen"], "2003", ["2021 02 18"], 5, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Donald Petrie"], ["Kate Hudson", "Matthew McConaughey", "Kathryn Hahn"], "https://64.media.tumblr.com/a9ed55c0a0882f0b421242460cb48778/158e9caf790b9ed9-0a/s250x400/119393a1d9f45f43c1566316500391d7b7ee51cf.jpg"],

["series", ["Modest Heroes", "Bescheidene Helden: Ponoc Short Films Theatre", "Chiisana Eiyuu: Kani to Tamago to Toumei Ningen"], "2018", [["2021 02 19", "E1-E3"]], 7, ["ger"], ["anime", "action", "adventure", "drama", "fantasy"], [], ["Netflix"], ["Yoshiyuki Momose", "Akihiko Yamashita", "Hiromasa Yonebayashi"], [], "https://64.media.tumblr.com/34877f375818a100844327579812e396/a9ded0ed44572630-f1/s250x400/60261cdb33b296fe8bd9c6656745188b9bd583b2.jpg"],

["film", ["The Secret Life of Bees", "Die Bienenhüterin"], "2008", ["2021 02 19"], 8, ["ger"], ["drama"], [], ["Netflix"], ["Gina Prince-Bythewood"], ["Dakota Fanning", "Joe Chrest", "Cathy Cavadini", "Amad Jackson", "Sophie Okonedo"], "https://64.media.tumblr.com/9159d7f8341741ca325ac43e73414cce/48b363066c6a6bcf-3d/s250x400/87d909506a6edfcffd75105ee08f32d488cdb3d3.jpg"],

["film", ["I am Legend"], "2007", [["2021 02 19", "2021 02 20"]], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Francis Lawrence"], ["Will Smith", "Alice Braga"], "https://64.media.tumblr.com/cd24f6f796edf4e2ae78934e3cf7fc4a/238a9a623dd81a4e-6c/s250x400/f43c63268b0aca0a5aa3b38235a9a2dc6c116ded.jpg"],

["film", ["The Wandering Earth", "Die wandernde Erde", "Liu lang di qiu"], "2019", ["2021 02 27"], 3, ["eng"], ["action", "sci-fi"], [], ["Netflix"], ["Frant Gwo"], [], "https://64.media.tumblr.com/9d8ddf9b3ad53e45369584426525f3a2/3847bc867dc4a949-25/s250x400/08c3647ab7a8419e910311f0d53a5d437ad8b264.jpg"],

["film", ["Kill Me Three Times", "Kill Me Three Times - Man stirbt nur dreimal"], "2014", ["2021 03 03"], 5, ["ger"], ["action", "comedy"], [], ["Netflix"], ["Kriv Stenders"], ["Simon Pegg", "Alice Braga", "Teresa Palmer", "Luke Hemsworth"], "https://64.media.tumblr.com/d6bcff7fc144f0cb43df03d6f2cc283d/5c106541e0ecee75-1b/s250x400/279c23cde8852c9db7dd57f0a46ce241942e1817.jpg"],

["film", ["How to Be Really Bad", "Meine teuflisch gute Freundin"], "2018", ["2021 03 08"], 6, ["ger"], ["comedy", "family"], [], ["Netflix"], ["Marco Petry"], ["Emma Bading", "Janina Fautz", "Ludwig Simon", "Samuel Finzi", "Joyce Ilg"], "https://64.media.tumblr.com/455bdae11d32a4f33ba4699998af33b6/5fce6e8a4c3d54cf-60/s250x400/3c590ac4817df7cf48abac9e3c1faa4eda9b990c.jpg"],

["film", ["Crazy About Her", "Verrückt nach ihr", "Loco por ella"], "2021", ["2021 03 11"], 8, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Dani de la Orden"], ["Álvaro Cervantes", "Susana Abaitua", "Luis Zahera", "Aixa Villagrán", "Txell Aixendri"], "https://64.media.tumblr.com/0483299bd70b84969627f2afba7b3922/53d6cc0903fad7ea-9b/s250x400/00c4b9b8506457b7835e5289deba4c9696a7a79c.jpg"],

["film", ["About Time", "Alles eine Frage der Zeit"], "2013", ["2021 03 12"], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Richard Curtis"], ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy", "Lydia Wilson", "Margot Robbie", "Richard Griffiths"], "https://64.media.tumblr.com/c13d844436d95670e5639bf50d16f152/bcf8c081e95afbdd-d1/s250x400/4643720df24b3f4aadd9911c903377e76e025679.jpg"],

["film", ["The Breadwinner", "Der Brotverdiener"], "2017", ["2021 03 13"], 6, ["ger"], ["animation", "drama", "war"], [], ["Netflix"], ["Nora Twomey"], [], "https://64.media.tumblr.com/5094ab30126775a21e12825e12798ebe/f441f2a27202ba95-65/s250x400/902b158b3180a19484c19e30e20af50b8743dbdc.jpg"],

["series", ["Locke & Key"], ["2020", "2022"], [["2021 03 14", "2021 03 28", "S1"], ["2021 11 01", "2021 11 19", "S2"], ["2022 08 07", "2022 08 16", "S1"], ["2022 08 21", "2022 09 11", "S2"], ["2022 09 11", "2022 09 26", "S3"]], 7, ["ger"], ["drama", "fantasy"], ["bini", "nico"], ["Netflix"], ["Meredith Averill", "Meredith Averill", "Aron Eli Coleite"], ["Darby Stanchfield", "Connor Jessup", "Emilia Jones", "Jackson Robert Scott", "Petrice Jones", "Bill Heck", "Griffin Gluck", "Kevin Durand", "Eric Graise"], "https://64.media.tumblr.com/fca4ec9110efd06d277632a31ce7d5c3/9fd830e62f280f00-ef/s250x400/08f87b1c54d5994aa1516aff3a2327da36ce6ddc.jpg"],/*S1: 6, S1: 6.8*/

["series", ["The Houseboat", "Das Hausboot"], "2021", [["2021 03 13", "2021 03 21", "S1"]], 5, ["ger"], ["documentary"], ["syl", "je", "bini"], ["Netflix"], [""], [], "https://64.media.tumblr.com/b3878fa50fd2d7d4286af2dd96bdfd06/5eb4e8a877f50e3f-08/s250x400/8fdcc5005f169eb2a6602ac6634f174a37c672b5.jpg"],

["audiobook", ["The Ballad of Songbirds and Snakes", "Die Tribute von Panem X – Das Lied von Vogel und Schlange"], "2020", [["2021 03 19", "2021 04 16"], ["2022 12 16", "2022 12 29"]], 9, ["eng", "ger"], ["adventure", "war", "sci-fi", "action"], [], ["Hunger Games", "bibliothek"], ["Suzanne Collins"], ["Uve Teschner"], "https://64.media.tumblr.com/1da763b32e2e1ed96cb49b78115fdfde/f1521d2ef3ed6937-ed/s250x400/f49c55bbd19de80ba1a4b5e21e5ead3f3adfd225.jpg"],

["film", ["Tomb Raider"], "2018", ["2021 03 23"], 7, ["ger"], ["action", "adventure"], ["bini"], [], ["Roar Uthaug"], ["Alicia Vikander", "Samuel Mak", "Nick Frost", "Hannah John-Kamen"], "https://64.media.tumblr.com/372792c09e88b1a2e5050a14d07c8d28/7390892fff0ee0a8-bc/s250x400/17b02720c477a1a90b24817b4956ddf80f6366b5.jpg"],

["film", ["Deadpool 2"], "2018", [["2021 03 30", "2021 03 31"]], 6, ["ger"], ["action", "adventure", "sci-fi"], [], ["X-Men", "Marvel", "Netflix"], ["David Leitch"], ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin", "Julian Dennison", "Zazie Beetz", "Karan Soni", "Brianna Hildebrand", "Eddie Marsan", "Terry Crews", "Brad Pitt", "Alan Tudyk", "Matt Damon", "Nicholas Hoult", "James McAvoy", "Evan Peters", "Tye Sheridan", "T.J. Miller", "Alexandra Shipp"], "https://64.media.tumblr.com/dd71964ef1a86b54cab0298b59eed681/b3037834c87b497c-92/s250x400/908fe51a4a273d0398cc0d2f9d826453cb436461.jpg"],

["book", ["Percy Jackson & the Olympians: The Lightning Thief", "Percy Jackson: Diebe im Olymp"], "2005", [["2021 03 31", "2021 06 03"]], 5, ["ger"], ["fantasy"], [], ["Percy Jackson"], ["Rick Riordan"], [], "https://64.media.tumblr.com/4098b9175e3b3c8932382b62d6dfba88/7f7426adcf7ee8bd-ec/s250x400/b7c399658eb5a07d777c4ebc6e4e87e02e2be9b0.jpg"],

["series", ["Atiye", "Atiye: Die Gabe"], "2019", [["2021 04 03", "2021 05 30", "S1"]], 3, ["ger"], ["drama", "fantasy"], [], ["Netflix", "ongoing"], ["Sengül Boybas", "Nuran Evren Sit", "Aysin Akbulut"], ["Beren Saat"], "https://64.media.tumblr.com/d82189a43e87ad7d51fcf72c41d55e1c/9685535d011bc603-2f/s250x400/d01f881210035faad0a40c173bb9f534d1520fa1.jpg"],

["film", ["Detective Conan 23: The Fist of Blue Sapphire", "Detektiv Conan 23: Die stahlblaue Faust", "Meitantei Conan 23: Konjo no fisuto"], "2019", ["2021 04 03", "2021 12 29"], 7, ["ger"], ["anime", "action", "mystery", "comedy", "police", "drama", "shounen"], ["bini"], ["Conan"], ["Tomoka Nagaoka"], [], "https://64.media.tumblr.com/1cb91e39e5a42840ba8449f1aeeddf23/31ced0d01c0757e3-75/s250x400/1bcdb67362c88ed99a708c8df2a1b2ba4ea18214.jpg"],

["film", ["Yes Day"], "2021", ["2021 04 03"], 5, ["ger"], ["comedy", "family"], ["bini", "syl"], ["Netflix"], ["Miguel Arteta"], ["Jennifer Garner", "Jenna Ortega", "Tracie Thoms", "Hayden Szeto", "H.E.R.", "June Diane Raphael", "Edgar Ramírez"], "https://64.media.tumblr.com/d10854499df16c7d02faa4d831444a1f/53aed6f5eeff8122-d2/s250x400/4125603c1791cede4fcc939e912fcae95ea2258b.jpg"],

["film", ["Moxie", "Moxie. Zeit, zurückzuschlagen"], "2021", ["2021 04 07", "2023 01 08"], 10, ["ger"], ["comedy", "drama", "music"], [], ["Netflix"], ["Amy Poehler"], ["Hadley Robinson", "Lauren Tsai", "Amy Poehler", "Marcia Gay Harden"], "https://64.media.tumblr.com/49e988bac2688563cfdee5e37fe386a7/be1d77579f1573d6-fe/s250x400/300ec4f841531d4fc8d3ec93c3ce044eb203bca3.jpg"],

["series", ["Ramsay's Kitchen Nightmares", "Gordon Ramsay - Chef ohne Gnade"], ["2004", "2014"], [["2021 04 07", "2021 04 08", "S5E7"]], 0, ["eng"], ["reality-tv"], [], [], [""], ["Gordon Ramsay"], "https://64.media.tumblr.com/eaaa1753ccfa94a2abb3f49458d6fa2c/ea1e16bcf0824d35-12/s250x400/8bd75cd3dece28191e4b0b210afda89c8ecb2b83.jpg"],

["film", ["Red Riding Hood", "Red Riding Hood - Unter dem Wolfsmond"], "2011", ["2021 04 08"], 7, ["ger"], ["fantasy", "horror"], [], ["Netflix"], ["Catherine Hardwicke"], ["Amanda Seyfried", "Gary Oldman", "Billy Burke", "Lukas Haas", "Shauna Kain", "Dalila Bela"], "https://64.media.tumblr.com/7d24827d3ada00ea0932d25fa72e8bb4/0e3fff2872555123-a1/s250x400/26f96954fe5b42a4f2fed72ee726dd81417593a4.jpg"],

["series", ["The Way of the Househusband", "Yakuza goes Hausmann", "Gokushufudo"], "2021", [["2021 04 08", "2021 04 17", "S1E1-E5"], ["2021 10 10", "2021 10 12", "S1E6-E10"]], 7, ["ger"], ["anime", "action", "comedy", "slice of life"], [], ["Netflix", "ongoing"], ["Kousuke Oono"], [], "https://64.media.tumblr.com/31952cb719ccdfae5cddb1c2ea23547f/fb3c05e57cef376a-19/s250x400/2f78eebe5e1f696cc0000cf9fdebe2b97873e96b.jpg"],

["film", ["Girls on Top", "Mädchen Mädchen!"], "2001", ["2021 04 09"], 5, ["ger"], ["comedy"], [], ["Netflix", "bby"], ["Dennis Gansel"], ["Diana Amft", "Felicitas Woll", "Karoline Herfurth", "Max Riemelt", "Florian Lukas", "Henning Baum"], "https://64.media.tumblr.com/26b9f6ff621898e46338d045c03f29a2/623979ca447725b6-e8/s250x400/644a19029a0e69df06e6979e203eb8df820ff52c.jpg"],

["film", ["A Week Away"], "2021", ["2021 04 11"], 4, ["ger"], ["drama", "family"], [], ["Netflix"], ["Roman White"], ["Kevin Quinn", "Bailee Madison", "Jahbril Cook", "Kat Conner Sterling"], "https://64.media.tumblr.com/c650b76d11a28ff9c897b8371b3486bf/995f0c646bb5f793-51/s250x400/f0b69cc270816c936c304351735813a181061241.jpg"],

["audiobook", ["Heidi: Her Years of Wandering and Learning", "Heidis Lehr- und Wanderjahre"], "1880", [["2021 04 16", "2021 05 03"]], 8, ["ger"], [], [], ["Heidi"], ["Johanna Spyri"], [], "https://64.media.tumblr.com/35f971ff055c18b13be4bcc405b00925/7b911e72f7e2b688-e2/s250x400/e453a14ba0a73e797bb2795c98727963f16f40d4.jpg" /*"https://64.media.tumblr.com/daa2e2cd86559cbf48c135d5ed965494/eb0e71810e546466-35/s400x600/45debc3d69776720bc4f847484641ba10c84002e.jpg"*/],

["audiobook", ["Heidi: How She Used What She Learned", "Heidi kann brauchen, was es gelernt hat"], "1881", [["2021 05 04", "2021 05 12"]], 7, ["ger"], [], [], ["Heidi"], ["Johanna Spyri"], [], "https://64.media.tumblr.com/01ff53df23c1d35e5d83ac71b256a809/3fa1395d25de81ca-3e/s250x400/8d3ef86be09fdac244e00f7dbf3ffbc7600629a7.jpg" /*https://64.media.tumblr.com/a20e9525e5ead1685c89f62ba6a0b0bd/d9482dfd9d661a05-1c/s400x600/a2ec6a7e21ceaac99d675673f5b6617a53d17eb7.jpg*/],

["film", ["The Trial of the Chicago 7"], "2020", ["2021 04 16"], 6, ["ger"], ["drama", "history"], [], ["Netflix"], ["Aaron Sorkin"], ["Eddie Redmayne", "Alex Sharp", "Sacha Baron Cohen", "Jeremy Strong", "John Carroll Lynch", "Yahya Abdul-Mateen II", "Mark Rylance", "Joseph Gordon-Levitt", "Frank Langella", "John Doman", "Caitlin FitzGerald"], "https://64.media.tumblr.com/b05681100ee6f2190973b9054e8816e7/01d0c955e4ab05e6-4d/s250x400/dc08b4523dc05709dfaf6955a9e20d181ebf7431.jpg"],

["film", ["Girls On Top 2", "Mädchen Mädchen 2"], "2004", ["2021 04 17"], 5, ["ger"], ["comedy", "romance"], [], ["Netflix", "bby"], ["Peter Gersina"], ["Diana Amft", "Karoline Herfurth", "Max Riemelt", "Florian David Fitz", "Tom Beck", "Jasmin Gerat"], "https://64.media.tumblr.com/b14c241af194d109cd1a9ad8e6bd4731/3068075a65c57590-22/s250x400/7cb07b60767f82fcfe76ad4b5dd09f8a134752dd.jpg"],

["film", ["Thoroughbreds", "Vollblüter"], "2017", [["2021 04 19", "2021 04 21"]], 3, ["ger"], ["comedy", "crime"], [], ["Netflix"], ["Cory Finley"], ["Olivia Cooke", "Anya Taylor-Joy", "Alex Wolff"], "https://64.media.tumblr.com/a75da33f944cda0efcf64577aaa449ec/03aad113dd4c2ef1-d9/s250x400/8dd3e8ccf96b15eb2e31d269b4ac9d46945f9266.jpg"],

["film", ["Year One", "Year One - Aller Anfang ist schwer"], "2009", ["2021 04 21"], 4, ["ger"], ["comedy"], ["bini", "syl", "je"], [], ["Harold Ramis"], ["Jack Black", "Michael Cera", "Oliver Platt", "David Cross", "Christopher Mintz-Plasse", "Vinnie Jones", "Juno Temple", "Olivia Wilde", "June Diane Raphael", "Xander Berkeley", "Matthew Willig", "Rhoda Griffis", "Marshall Manesh", "Paul Rudd"], "https://64.media.tumblr.com/acb888d0a637486983e8c77a91b86f8d/914d704920c46a2b-3f/s250x400/c27db0e1e0bdc9b389e4ffd8e18eb093b706193f.jpg"],

["film", ["Rocca verändert die Welt"], "2019", ["2021 04 22"], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Katja Benrath"], ["Luna Maxeiner", "Nevio Wendt"], "https://64.media.tumblr.com/a46c32e0b16a7dab2510315a652b06c5/92533c010400559b-2c/s250x400/904afe21149e7e960c4fb1eea68f7837b3c2f12e.jpg"],

["film", ["Love and Monsters", "Monster Problems"], "2020", ["2021 04 24"], 5, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "syl"], ["Netflix"], ["Michael Matthews"], ["Dylan O'Brien", "Jessica Henwick"], "https://64.media.tumblr.com/1c691845a3a8d688cafdbfca3891c7dd/603967b5f0a6df28-ee/s250x400/a85b4d8d5840fe986a510bff0d969923257e4c89.jpg"],

["film", ["Replicas"], "2018", [["2021 04 26", "2021 04 27"]], 4, ["ger"], ["drama", "sci-fi"], [], ["Netflix"], ["Jeffrey Nachmanoff"], ["Keanu Reeves", "Alice Eve", "Thomas Middleditch", "John Ortiz", "Emjay Anthony", "Emily Alyn Lind"], "https://64.media.tumblr.com/218af55f7db8c470136c450cc66658a5/de5cd991bd68fc0e-b7/s250x400/bd44650d8a447c245e10f1a05582df48140c2bf5.jpg"],

["film", ["Not Another Teen Movie", "Nicht noch ein Teenie-Film!"], "2001", ["2021 04 27"], 4, ["ger"], ["comedy"], ["je"], ["Netflix"], ["Joel Gallen"], ["Chyler Leigh", "Chris Evans", "Jaime Pressly", "Eric Christian Olsen", "Mia Kirshner", "Deon Richmond", "Lacey Chabert", "Samm Levine", "Paul Gleason", "Mr. T", "Molly Ringwald", "Nectar Rose", "Josh Radnor", "Joy Bisco"], "https://64.media.tumblr.com/facb1c2327b0ec74694779297efd2603/77de2a0db9687b1d-ef/s250x400/b2859e1ca59b6ca128e20126af7aa21a1d8dfe7c.jpg"],

["film", ["Vier gegen die Bank"], "2016", [["2021 05 02", "ab 50min"]], 6, ["ger"], ["comedy", "crime"], ["bini"], [], ["Wolfgang Petersen"], ["Til Schweiger", "Matthias Schweighöfer", "Jan Josef Liefers", "Michael Herbig", "Jana Pallaske"], "https://64.media.tumblr.com/97487db8d9ade43ae67700087b5f95c3/faf9ea56fd12410a-7a/s250x400/4e9cdfaed38ba75761a6ad194773f4cbab97d02c.jpg"],

["series", ["Love on the Spectrum", "Liebe im Spektrum"], ["2019", "2021"], [["2021 05 02", "2021 05 04", "S1"], ["2021 09 23", "2021 10 10", "S2"]], 6, ["eng"], ["documentary", "reality-tv"], [], ["Netflix"], [], [], "https://64.media.tumblr.com/72ce0c0cdf9d20f80dafd14ae88c3561/d7b2978419840e85-c5/s250x400/d471d986f0b33eb1d9fe3eb8d8a0478d0bc982e6.jpg"],
/*S1: 7; S2: 5*/

["film", ["The Silent Revolution", "Das schweigende Klassenzimmer"], "2018", [["2021 05 06", "2021 05 07"]], 6, ["ger"], ["drama", "history"], [], ["Netflix"], ["Lars Kraume"], ["Carina Wiese", "Florian Lukas", "Jördis Triebel", "Rolf Kanies", "Rainer Reiners", "Lena Klenke"], "https://64.media.tumblr.com/b1847768b0301fe7fbf751303f2dd957/e3731d3087eeb68d-b2/s250x400/4b85311eca3e24cc235c6d4af24a73efa493d6d2.jpg"],

["audiobook", ["Bridge to Terabithia", "Die Brücke nach Terabithia"], "1977", [["2021 05 18", "2021 05 25"]], 4, ["ger"], ["drama"], [], [], ["Katherine Paterson"], [], "https://64.media.tumblr.com/e593fb695c3880950db5a8b54cfc76e5/5d759b2bfbae98af-db/s250x400/01e35b58ae28e910be4e3699ed8dd25769e7f9ae.jpg"],

["film", ["50 First Dates", "50 erste Dates"], "2004", ["2021 05 16"], 2, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Peter Segal"], ["Adam Sandler", "Drew Barrymore", "Sean Astin", "Lynn Collins", "Nectar Rose", "Kevin James", "Michelle Lee", "Missi Pyle"], "https://64.media.tumblr.com/27637d40e9886fd82525374ad9f4731d/f0ebbad738a38a47-9a/s250x400/c7cac166eec3ab5f4519444ca90ef77f09fce3f5.jpg"],

["series", ["Cabins in the Wild with Dick Strawbridge"], "2017", [["2021 05 17", "2021 05 25", "S1"]], 5, ["ger"], ["reality-tv"], [], ["Netflix"], [], ["William Hardie", "Dick Strawbridge"], "https://64.media.tumblr.com/dc5b52988d3fd3113578f4119d0e94ea/d346a694ec223f73-7c/s250x400/cb6bc1a7d4d2b928b79ffa876d316934b320e6a0.jpg"],

["series", ["Citation Needed, from the Technical Difficulties"], ["2014", "2018"], [["2021 05 19", "2021 05 30", "S1"], ["2021 05 31", "2021 06 02", "S2"], ["2021 06 02", "2021 06 03", "S3"], ["2021 06 03", "2021 06 05", "S4"], ["2021 06 05", "2021 06 07", "S5"], ["2021 06 08", "2021 06 09", "S6"], ["2021 06 09", "2021 06 11", "S7"], ["2021 06 11", "2021 06 13", "S8"]], 7, ["eng"], ["comedy", "game-show"], [], [], [], ["Tom Scott", "Gary Brannan", "Chris Joel", "Matt Gray"], "https://64.media.tumblr.com/1b56309646a80251e668c13a5edf4717/8f7b634f13dcf93c-1d/s250x400/37b1567f9c308c64cd40bf7cb467f789b17a4206.jpg"]
/* S1: 5,11 ; S2: 5,57 ; S3: 6,00 ; S4: 6,40 ; S5: 6,50 ; S6: 9,33 ; S7: 6,67 ; S8: 6,67 */
,

["film", ["Big Game"], "2014", ["2021 05 25"], 6, ["ger"], ["action", "adventure"], ["syl", "je"], [], ["Jalmari Helander"], ["Samuel L. Jackson", "Ray Stevenson", "Ted Levine", "Jim Broadbent", "Murali Perumal"], "https://64.media.tumblr.com/86e76a41b82a8eb86d84787b97c89623/2755f211831d8d20-91/s250x400/b32fbe294424b8fe10f0734d3e94527d9f27f6f6.jpg"],

["audiobook", ["Why We Took the Car", "Tschick"], "2010", [["2021 05 28", "2021 06 04"]], 8, ["ger"], [], [], [], ["Wolfgang Herrndorf"], ["Marius Clarén"], "https://64.media.tumblr.com/d6971778d4d06b94bcef17b528e344dd/66fbebfcd330c81b-6d/s400x600/473630539f33ab32a06f8399581d801d25c91a70.jpg"],

["film", ["The Spiderwick Chronicles", "Die Geheimnisse der Spiderwicks"], "2008", ["2021 05 28"], 6, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Mark Waters"], ["Freddie Highmore", "Mary-Louise Parker", "Sarah Bolger", "Andrew McCarthy", "David Strathairn"], "https://64.media.tumblr.com/befc77a65efd14225b23f4d177b88be5/199b94c93a4e6816-c3/s250x400/b83034285698128756c72b31a95a0b0b5f44aa7c.jpg"],

["series", ["Firefly Lane", "Immer für dich da"], ["2021", ""], [["2021 06 07", "S1E1"]], 0, ["ger"], ["drama", "romance"], [], ["Netflix", "ongoing", "dropped"], ["Maggie Friedman"], ["Katherine Heigl", "Sarah Chalke", "Ben Lawson", "Ali Skovbye", "Roan Curtis", "Yael Yurman", "Beau Garrett", "Chelah Horsdal", "Jenna Rosenow"], "https://64.media.tumblr.com/f3995e468a2e7cf8ba8f87576991c074/33bed838cf7ac670-73/s250x400/f11ac6e33bdeec9aaf8fa1e796055065c204c4d8.jpg"],

["audiobook", ["Zoo Station: The Story of Christiane F.", "Wir Kinder vom Bahnhof Zoo"], "1978", [["2021 06 07", "2021 06 14"]], 8, ["ger"], ["biography"], [], [], ["Christiane Felscherinow"], ["Anna Thalbach", "Katharina Thalbach", "Dietmar Wunder"], "https://64.media.tumblr.com/accf6bc8d85569e8b423631ef92a4024/d9a67cb3cf888bc7-89/s250x400/17292fe8a8dc53aca756478875b12e642677857d.jpg"],

["film", ["Paheli", "Die Schöne und der Geist"], "2005", ["2021 06 12"], 6, ["hin"], ["comedy", "drama"], ["bini", "mai"], ["Netflix"], ["Amol Palekar"], ["Shah Rukh Khan", "Rani Mukerji", "Anupam Kher", "Amitabh Bachchan", "Juhi Chawla", "Katharina Thalbach"], "https://64.media.tumblr.com/546a93774d947b5124012e78caad98fc/e973c7f4602e0382-cc/s250x400/7abe48177505c255df1d2fa2ae1268e1eaae9753.jpg"],

["series", ["Two of These People Are Lying"], ["2019", "2020"], [["2021 06 15", "S1"], ["2021 06 17", "2021 06 19", "S2E1-S2E3"]], 5, ["eng"], ["comedy", "talk-show"], [], ["dropped"], [], ["Tom Scott", "Chris Joel", "Gary Brannan", "Matt Gray"], "https://64.media.tumblr.com/62dbf1e432551b83cc22aeb40febdf9c/db5d3507ec528688-6f/s250x400/a25de16e13c2cd429755c50b894bd9e5b4d983d5.jpg"],

["audiobook", ["From the Mixed-Up Files of Mrs. Basil E. Frankweiler"], "1967", [["2021 06 16", "2021 06 18"]], 5, ["eng"], ["mystery"], [], [], ["E. L. Konigsburg"], [], "https://64.media.tumblr.com/5718ca30fb3260e66d8948bccc355f82/e422f51698d17e76-71/s250x400/9df03655598f9a908e26ebb6a918a54ff01d4f41.jpg"],

["audiobook", ["The Shadow over Innsmouth", "Schatten über Innsmouth"], "1936", [["2021 06 18", "2021 06 25"]], 7, ["ger"], ["horror"], [], [], ["H. P. Lovecraft"], ["Lutz Riedel"], "https://64.media.tumblr.com/7b6b6d6e6abcb2f067a037c7a7d5f0bb/4acbb5c839ab1917-96/s250x400/a10a541a05640cc8e072fddaa6345c3482f88a31.jpg"],

["book", ["Night School: Endgame"], "2015", [["2021 06 18", "2021 08 14"]], 9, ["eng"], ["young adult", "mystery", "romance"], [], ["Night School"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/4195a47dac8c16f67035995e07264da3/fc7ced809612b613-22/s250x400/613d784f42315957a004afeff6037bb0c721d466.jpg"],

["series", ["The Irregulars", "Die Bande aus der Baker Street"], "2021", [["2021 06 19", "2021 07 06", "S1"]], 7, ["ger"], ["crime", "drama", "horror"], [], ["Netflix"], ["Tom Bidwell", "Tom Bidwell", "Sarah Simmonds"], ["McKell David",  "Thaddea Graham", "Jojo Macari", "Harrison Osterfield", "Darci Shaw", "Clarke Peters", "Olivia Grant", "Brooke Carter"], "https://64.media.tumblr.com/a9f2e257ae0d81c2f46bb5b3d81e342c/1baee5ff8a922616-6e/s250x400/de95dead8e8a00ceadb823187d287eb0597f38d3.jpg"],

["film", ["Army of the Dead"], "2021", ["2021 06 19"], 7, ["ger"], ["action", "crime", "sci-fi"], ["bini", "jessie"], ["Netflix"], ["Zack Snyder"], ["Dave Bautista", "Ella Purnell", "Omari Hardwick", "Ana de la Reguera", "Theo Rossi", "Matthias Schweighöfer", "Nora Arnezeder", "Hiroyuki Sanada", "Garret Dillahunt", "Tig Notaro", "Raúl Castillo"], "https://64.media.tumblr.com/baafff06fae5b6a87510c27cf5107acd/70756af8cab3df54-21/s250x400/dd91cae9affa7412bd7b54ea6a1d0d76ce47f79a.jpg"],

["series", ["Kitchen Nightmares", "In Teufels Küche mit Gordon Ramsay"], ["2007", "2014"], [["2021 06 21", "S1E1"], ["2021 09 30", "S4E11"], ["2021 09 30", "S4E1"], ["2022 03 13", "S7E5-S7E6"]], 0, ["eng"], ["reality-tv"], [], [], [], ["Gordon Ramsay"], "https://64.media.tumblr.com/4e5e581720c7ebaec0bbc8cf352c5cd1/fe6cbd09b9e2c87b-47/s250x400/fb78085b81ef2fe88ae758ef6c196f2fc2669074.jpg"],

["film", ["Gordon Ramsay: Shark Bait"], "2011", ["2021 07 01"], 6, ["eng"], ["documentary"], [], [], ["Helen Simpson"], ["Gordon Ramsay"], "https://64.media.tumblr.com/5a0b8044ac2dd6c007817a14f1a19bd2/510aae076ba80bb2-28/s250x400/66be39b0518696eeb44d7277e3ccc2ab846230af.jpg"],

["series", ["LazyTown"], ["2002", "2014"], [["2021 07 03", "S2E2"]], 0, ["ger"], ["adventure", "comedy", "music"], [], ["dropped"], ["Magnús Scheving"], ["Magnús Scheving", "Stefán Karl Stefánsson", "Julianna Rose Mauriello", "Chloe Lang"], "https://64.media.tumblr.com/9f59cab818faaf9310978404c6ca5d14/46e05a1f81cf7b7d-64/s250x400/e8716b259592473eeb7bc373849b91441163998f.jpg"],

["film", ["The House with a Clock in Its Walls", "Das Haus der geheimnisvollen Uhren"], "2018", ["2021 07 03"], 5, ["ger"], ["comedy", "family"], ["syl"], [], ["Eli Roth"], ["Jack Black", "Cate Blanchett", "Owen Vaccaro", "Kyle MacLachlan"], "https://64.media.tumblr.com/41b834b77924d9865a09d973c529aa23/996820e9b7974f95-db/s250x400/ae6511d52b5e423407da95bfd8a4a622769f1eb0.jpg"],

["film", ["Godzilla vs. Kong"], "2021", ["2021 07 04"], 8, ["ger"], ["action", "sci-fi"], ["bini", "je"], ["Godzilla", "Kino"], ["Adam Wingard"], ["Alexander Skarsgård", "Rebecca Hall", "Brian Tyree Henry", "Shun Oguri", "Eiza González", "Julian Dennison", "Kyle Chandler"], "https://64.media.tumblr.com/77865d8e8b89d62d056cb65881d641a2/269e3a7ef8cd2e81-43/s250x400/15267931c7956b9e99b8b3b09e17975ae2fa9d4b.jpg"],

["series", ["Amish: World's Squarest Teenagers"], "2010", [["2021 07 07", "S1"]], 6, ["eng"], ["documentary"], [], [], [], [], "https://64.media.tumblr.com/9866c3741b4be8364511d8efdaff416f/b1804fae23edbf41-04/s250x400/b30778b482a03f7963c7265106399ea32e31cda9.jpg"],

["series", ["The Disastrous Life of Saiki K.", "The Disastrous Life of Saiki K.", "Saiki Kusuo no Psi Nan"], "2016", [["2021 07 07", "2021 07 23", "S1"]], 7, ["eng"], ["anime", "comedy", "school", "shounen", "slice of life", "supernatural"], [], ["Netflix"], ["Shûichi Asô"], [], "https://64.media.tumblr.com/c2f8049c97a0937d33e1caa13a8c06c5/696e4cf5f235bbef-ff/s250x400/a6a77b003855daafb68ae1dca7fad6895d284c44.jpg"],
/*S1: 6.6 */

["series", ["The Disastrous Life of Saiki K.: Reawakened"], "2019", [["2021 07 07", "S1E1"], ["2021 08 13", "2021 08 27", "S1E2-S1E6"]], 6, ["ger"], ["anime", "comedy"], [], ["Netflix"], [], [], "https://64.media.tumblr.com/1d75af463660e92bb9f01a918b8e6404/f455e50265850a7b-5c/s250x400/979b1d004e3a818b4d392dd81cae6c6709cb0513.jpg"],

["series", ["The World's Most Amazing Vacation Rentals", "Die spektakulärsten Ferienwohnungen der Welt"], "2021", [["2021 07 09", "2021 07 24", "S1"], ["2021 10 16", "2021 11 22", "S2"]], 5, ["ger", "eng"], ["reality-tv"], [], ["Netflix"], [], [], "https://64.media.tumblr.com/bb50de419b2d9e443db093e960a99ce2/8f12e28e1ccf5aab-31/s250x400/99250656bdd317cc3a2a837dbeeff6bc907dacea.jpg"], /*S1: 5.1, S2: 4.7*/

["film", ["Angels & Demons", "Illuminati"], "2009", [["2021 07 11", "2021 07 12"]], 7, ["ger"], ["action", "mystery"], ["bini", "syl"], [], ["Ron Howard"], ["Tom Hanks", "Ewan McGregor", "Ayelet Zurer", "Stellan Skarsgård", "Pierfrancesco Favino", "Ciara Bravo"], "https://64.media.tumblr.com/6d5ad7eaa200afddf3152e4d1e6da853/794a82b0ae61d259-02/s250x400/43baf53018cd2e2ca084f3f4584489f83fb5403b.jpg"],

["film", ["Inferno"], "2016", [["2021 07 18", "2021 07 19"], "2023 04 22"], 6, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Netflix"], ["Ron Howard"], ["Tom Hanks", "Felicity Jones", "Omar Sy", "Irrfan Khan", "Ben Foster"], "https://64.media.tumblr.com/cf1cd3ca332f2a1e37e15b5a56a14d45/b97c74f4bcba63a8-d5/s250x400/6de6fb6b9d229eec1032e3835ea7fccf16be7381.jpg"],

["series", ["Mushishi"], ["2005", "2006"], [["2021 07 20", "2021 07 27", "S1E17-S1E26"]], 7, ["jap"], ["anime", "drama"], ["bini", "nico"], ["Mushishi"], ["John Burgmeier", "Yuki Urushibara", "Mike McFarland"], [], "https://64.media.tumblr.com/57aa60c9b5700e3070d07ec1cad9b6eb/910be819886934da-9c/s250x400/765f70bf5c01ac59687416ee697f2de7f9bd925b.jpg"],

["film", ["Woodstock '69/'89"], "1989", ["2021 07 24"], 5, ["ger"], ["documentary"], [], [], ["Uli Pfau"], [], "https://64.media.tumblr.com/45aa578c971f103efd7ef38bfc7d3515/a72c572e4240ac6d-5e/s250x400/f9fdc3b86bf85dc2dba6167762ca395e7a5968e0.jpg"],

["film", ["Doctor Sleep", "Doctor Sleeps Erwachen"], "2019", ["2021 07 26"], 8, ["ger"], ["drama", "fantasy", "horror"], ["nico"], ["Netflix"], ["Mike Flanagan"], ["Ewan McGregor", "Rebecca Ferguson", "Cliff Curtis", "Zahn McClarnon", "Emily Alyn Lind", "Selena Anduze", "Robert Longstreet", "Carel Struycken", "James Flanagan", "Bruce Greenwood", "Kk Heim"], "https://64.media.tumblr.com/9110e8efd4e3994129be19385174d3bc/7365831aa8d19cd6-ef/s250x400/ba562ba6b6b18ff5ee36d31c07c6c2872065eefc.jpg"],

["series", ["Mushishi: Zoku Shou"], "2014", [["2021 08 03", "2021 08 24", "S1"], ["2021 08 24", "Special"], ["2021 08 24", "2021 09 07", "S2"]], 6, ["jap"], ["anime", "drama", "fantasy", "adventure"], ["bini", "nico"], ["Mushishi"], ["Yuki Urushibara"], [], "https://64.media.tumblr.com/1290719a2a5d2445adc987efd66d03bc/23d2440afd177e2e-26/s250x400/417947440c39b7bcc004b484bc9d9312a8d83af1.jpg"],

["film", ["Words Bubble Up Like Soda Pop", "Words Bubble Up Like Soda Pop", "Cider no yô ni kotoba ga wakiagaru"], "2020", ["2021 08 07"], 9, ["ger"], ["anime", "drama"], ["bini", "mai"], ["Netflix"], ["Kyohei Ishiguro"], [], "https://64.media.tumblr.com/f81417271373a394438577d802e0ef22/cb7279d4e18c381d-fb/s250x400/198503f976fa646cdd3801463916030ec835bf87.jpg"],

["film", ["Alita: Battle Angel"], "2019", ["2021 08 09"], 5, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "je"], [], ["Robert Rodriguez"], ["Rosa Salazar", "Christoph Waltz", "Jennifer Connelly", "Mahershala Ali", "Ed Skrein", "Jackie Earle Haley", "Keean Johnson", "Jorge Lendeborg Jr.", "Lana Condor", "Jeff Fahey", "Eiza González", "Jai Courtney"], "https://64.media.tumblr.com/5fb37fea401bc8b7092db720ec1d6d47/702bf554d4571f42-21/s250x400/fcbbe8384217a6a3025e2ddaeacecef4c5dacb4e.jpg"],

["book", ["Percy Jackson & the Olympians: The Sea of Monsters", "Percy Jackson: Im Bann des Zyklopen"], "2006", [["2021 08 15", "2021 09 30"]], 8, ["ger"], ["fantasy", "adventure"], [], ["Percy Jackson"], ["Rick Riordan"], [], "https://64.media.tumblr.com/ad133bcb587514c7289122c96513447b/5bd70dcbd0936395-d9/s250x400/9d6e51f8b36d6d93e59a096104ad6834965b93fb.jpg"],

["series", ["Die wilden Flüsse Afrikas"], "2021", [["2021 08 16", "Nil"], ["2021 08 16", "Sambesi"], ["2021 08 16", "Hoanib"]], 3, ["ger"], ["documentary"], ["je"], [], [], [], "https://64.media.tumblr.com/bd97e7dd7aabeb6f93769066e2ba4a83/3ed8874e7f45841d-1d/s250x400/8f56a6f7b6f9faebc15947b149b0cda20e13c6ec.jpg"],

["series", ["Bonding"], ["2018", "2021"], [["2021 09 02", "S1E1-E2"]], 3, ["ger"], ["comedy", "drama"], [], ["Netflix", "dropped"], ["Rightor Doyle", "Rightor Doyle", "Nana Mensah"], ["Zoe Levin", "Brendan Scannell"], "https://64.media.tumblr.com/18c8b1dce9ebf0738fe3cf018eccfbd9/10cce270cc72396d-08/s250x400/c3de1fa9e268a7c847f0af4416c3261d706ccd60.jpg"],

["film", ["The Water Man"], "2020", ["2021 09 02"], 6, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["David Oyelowo"], ["Amiah Miller", "Lonnie Chavis", "Amiah Miller"], "https://64.media.tumblr.com/9c2920a48ef1bc8b8d2340b31d717ba5/6c55f388ce7bbef4-06/s250x400/f0dd6b5e4cb3964c5ef285e5fba891a96098dba3.jpg"],

["film", ["King Arthur: Legend of the Sword"], "2017", ["2021 09 06"], 8, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Guy Ritchie"], ["Charlie Hunnam", "Astrid Bergès-Frisbey", "Jude Law", "Djimon Hounsou", "Aidan Gillen", "Poppy Delevingne", "Millie Brady", "Katie McGrath", "Hermione Corfield", "Lucy Chappell"], "https://64.media.tumblr.com/4a897481c8358d9c1e24117a5ccac00e/b1499228b5e33a25-eb/s250x400/d4ff3c4222a6c01e50c24c7f0bee5a7440b62037.jpg"],

["film", ["Caught by a Wave", "Mit den Wellen", "Sulla Stessa Onda"], "2021", ["2021 09 07"], 2, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Massimiliano Camaiti"], ["Elvira Camarrone", "Roberto Christian"], "https://64.media.tumblr.com/252d60de41d472a9167edea312ceb03f/4940661148b56459-d2/s250x400/f699696ffeaaeaac3448612aeddfb716c1cda228.jpg"],

["film", ["Clueless", "Clueless - Was sonst!"], "1995", ["2021 09 10"], 4, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Amy Heckerling"], ["Alicia Silverstone", "Stacey Dash", "Paul Rudd", "Donald Faison", "Brittany Murphy"], "https://64.media.tumblr.com/b374d4e6e5a8e3d84ac01181b87a39e8/fd0dea824f76c34c-d0/s250x400/84512fa639645cbd189ca4952e0c12879390438a.jpg"],

["film", ["Money Heist: From Tokyo to Berlin", "Haus des Geldes: Von Tokio bis Berlin", "La casa de papel: De Tokio a Berlín"], "2021", ["2021 09 11"], 6, ["ger"], ["documentary"], [], ["Netflix"], ["Luis Alfaro", "Javier Gómez Santander", "María Signes"], ["Úrsula Corberó", "Pedro Alonso", "Enrique Arce", "Rodrigo De la Serna", "Itziar Ituño", "Miguel Herrán", "Jaime Lorente", "Darko Peric", "Álvaro Morte"], "https://64.media.tumblr.com/1597849e9594cd8b6bee32a79be8d164/e272d87a1b48bf5f-25/s250x400/40d37bad041433cd61a42687801d2cdf5afdb93d.jpg"],

["short", ["Mushishi: The Shadow That Devours the Sun", "Mushishi: The Shadow That Devours the Sun", "Mushishi: Hihamukage"], "2014", ["2021 09 14"], 6, ["jap"], ["anime", "drama", "adventure", "fantasy"], ["bini", "nico"], ["Mushishi"], ["Hiroshi Nagahama"], [], "https://64.media.tumblr.com/34cd1d750cc77cfcf8e7263c7b451ee6/21c3bf042860459e-1c/s250x400/bd5b67f9b5b550b2c62d7918deb4274562d5a5b6.jpg"],

["short", ["Mushishi: Bell Droplets", "Mushishi: Bell Droplets", "Mushishi Zoku Shou: Suzu no Shizuku"], "2015", ["2021 09 14"], 5, ["jap"], ["anime", "drama", "adventure", "fantasy"], ["bini", "nico"], ["Mushishi"], ["Hiroshi Nagahama"], [], "https://64.media.tumblr.com/b5e32c365619812c89465965c985fd13/892fa30ee5ea16e5-53/s250x400/02b7fc64acd2b6b86132f512487b92fdcbe2ae38.jpg"],

["book", ["Führen mit Werten und Verstand"], "2020", [["2021 09 15", "2021 09 29"]], 0, ["ger"], [], [], ["Schule"], ["Siegmar Nesch"], [], "https://64.media.tumblr.com/5d8b389848acbcb5f97c0fe2d4fd774c/babfb9376a3a32e4-83/s250x400/e4b485f0426ffb297055cd141facbba0d9c743cf.jpg"],

["film", ["A Walk to Remember", "Nur mit Dir - A Walk to Remember"], "2002", ["2021 09 17"], 7, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Adam Shankman"], ["Shane West", "Mandy Moore", "Daryl Hannah"], "https://64.media.tumblr.com/b1dff238b27b1a46fd9ad0a215b00bc8/a0a2ee3195186336-e0/s250x400/6408abf83e913053e331d1a899f7682ec42b0943.jpg"],

["series", ["Machines With Brains"], ["2017", "2018"], [["2021 09 20", "S1-S2"]], 4, ["eng"], ["documentary"], [], [], [], [], "https://64.media.tumblr.com/616e79c31c2afd29b07eee7b328315d0/a6140912e0c6b374-91/s250x400/c61f3f3dbe0560fe69dc3151765e22911ef015cd.jpg"],

["series", ["The Witcher"], ["2019", ""], [["2021 09 21", "2021 11 12", "S1"]], 6, ["ger", "rus"], ["action", "adventure"], [], ["Netflix", "ongoing"], ["Andrzej Sapkowski", "Andrzej Sapkowski", "Lauren Schmidt"], ["Henry Cavill", "Anna Shaffer", "Freya Allan"], "https://64.media.tumblr.com/152bdcf142f9f3304b844ec59c0176d1/f13fc7f950a2f921-e9/s250x400/dc6f276e4fc749fe82f5901f6b69d31d89ab5dfb.jpg"],

["series", ["Beyond the Boundary", "Beyond the Boundary", "Kyoukai no Kanata"], "2013", [["2021 09 21", "2021 10 05", "S1"], ["2021 10 12", "Special"]], 3, ["jap"], ["anime", "action", "fantasy", "supernatural"], ["bini", "nico"], [], ["Jukki Hanada"], [], "https://64.media.tumblr.com/c3cdbfaa625b3375ce1ce9f13adc6e11/b73298e1e507e3ba-40/s250x400/affaa17969b52eb49dfd4d2d707e4b82cef9e0fb.jpg"],

["film", ["Atlantis: The Lost Empire", "Atlantis - Das Geheimnis der verlorenen Stadt"], "2001", ["2021 09 29"], 9, ["ger"], ["animation", "action"], [], ["Disney+"], ["Gary Trousdale", "Kirk Wise"], [], "https://64.media.tumblr.com/90d677b24e095ee170f0763c05d7531e/118cd8b1a9c8be24-2b/s250x400/3d415640e9849b22dfa1e2c15251bbcb6d728bba.jpg"],

["film", ["Atlantis: Milo's Return", "Atlantis - Die Rückkehr"], "2003", ["2021 09 29"], 5, ["ger"], ["animation", "action"], [], ["Disney+"], ["Victor Cook", "Toby Shelton", "Tad Stones"], [], "https://64.media.tumblr.com/6ffc67b7163ad6f3709de3674823018f/4debb06e2b36abaf-03/s250x400/5ccc67b2284580645283f89e863e6cc0799ea519.jpg"],

["film", ["Morgan", "Das Morgan Projekt"], "2016", ["2021 09 29"], 4, ["ger"], ["action", "horror"], [], ["Disney+"], ["Luke Scott"], ["Kate Mara", "Anya Taylor-Joy", "Rose Leslie", "Toby Jones", "Boyd Holbrook", "Jennifer Jason Leigh", "Amybeth McNulty", "Paul Giamatti"], "https://64.media.tumblr.com/0f874abf575b283fc58e5c0fc6461aed/e1e46d4b8e1772e6-0e/s250x400/cb973297485ab721dc77c1c5cd53b52a1b7dd146.jpg"],

["book", ["Gesunde Führung in der VUKA-Welt"], "2020", [["2021 09 29", "2021 10 05"]], 0, ["ger"], [], [], ["Schule"], ["Ruth Maria Sarica"], [], "https://64.media.tumblr.com/5676eddd752de2262c1e8b96d5fea3e8/b722bc72b3185689-0f/s250x400/55ae6d9e63403253ad9fbc84af15e3952b6dc90d.jpg"],

["book", ["The Body", "Die Leiche"], "1982", [["2021 10 01", "2021 10 14"]], 8, ["eng"], ["adventure"], [], [], ["Stephen King"], [], "https://64.media.tumblr.com/507263dc3c894888a0dac0a8b727d9d3/146ac14c5cb4805b-42/s250x400/caafc7957f3578b091d39d5167afe6f5330011ae.jpg"],

["film", ["Snowpiercer"], "2013", ["2021 10 02"], 2, ["ger"], ["action", "drama"], ["bini", "mai"], ["Netflix"], ["Bong Joon Ho"], ["Chris Evans", "Kang-ho Song", "Ed Harris", "Tilda Swinton", "Jamie Bell"], "https://64.media.tumblr.com/77ed0e43de6cabb9b6b2bf2ed5bb9ed1/415c46edfeef99e8-a5/s250x400/69e039c373347357c25b19b8e67c306fcf31bb5e.jpg"],

["film", ["The Nutcracker and the Four Realms", "Der Nussknacker und die vier Reiche"], "2018", ["2021 10 04"], 4, ["ger"], ["adventure", "family"], [], ["Disney+"], ["Lasse Hallström", "Joe Johnston"], ["Mackenzie Foy", "Morgan Freeman", "Helen Mirren", "Keira Knightley", "Jack Whitehall", "Ellie Bamber"], "https://64.media.tumblr.com/36c820f004865c4667025bf0e63bce9f/00b16b7657da95e7-d6/s250x400/078d9e39e7057daf5783a1a198580396a7357725.jpg"],

["film", ["Pacific Rim: Uprising", "Pacific Rim 2: Uprising"], "2018", [["2021 10 04", "1st Half"], ["2021 10 11", "2nd Half"]], 6, ["ger"], ["action", "adventure"], ["bini"], [], ["Steven S. DeKnight"], ["John Boyega", "Scott Eastwood", "Burn Gorman", "Charlie Day", "Tian Jing", "Karan Brar", "Karan Brar"], "https://64.media.tumblr.com/e12b9539d43524c32ecff8cae3f70bd2/7d2d2c172a7742b7-ff/s250x400/f79b7d8599b216e339013c2df41db4d2e09b2520.jpg"],

["film", ["Zombieland: Double Tap", "Zombieland 2: Doppelt hält besser"], "2019", ["2021 10 10"], 8, ["ger"], ["action", "comedy"], ["nico", "vin", "jenny"], ["Netflix"], ["Ruben Fleischer"], ["Woody Harrelson", "Jesse Eisenberg", "Emma Stone", "Abigail Breslin", "Zoey Deutch", "Avan Jogia", "Bill Murray", "Thomas Middleditch"], "https://64.media.tumblr.com/d811256ab5245cfe2ff6f1e15a81c67c/692ced2a74c2d010-53/s250x400/5ae6499d5b5f3ce457d6e4b1c2f0aa6c8775f982.jpg"],

["film", ["Beyond the Boundary: I'll Be Here - Future", "Beyond the Boundary: I'll Be Here - Future", "Kyoukai no Kanata Movie 2: I'll Be Here - Mirai-hen"], "2015", ["2021 10 12"], 4, ["jap"], ["anime", "action"], ["bini", "nico"], [], ["Taichi Ishidate"], [], "https://64.media.tumblr.com/deef995a5f3ee3df1c8fb8e727361244/438efb94a46e8aed-f4/s250x400/48284bc86850737f3aefc728ace17714e3760d8c.jpg"],

["short", ["Auntie Edna", "Tante Edna"], "2018", ["2021 10 13"], 6, ["ger"], ["animation"], [], ["Disney+"], ["Ted Mathot"], [], "https://64.media.tumblr.com/7aa70f25227e6a1067b30d08fdbf28fc/534a4ef43a3ed4ba-12/s250x400/a5392e351a32891450d2db88e65443e9d4ed2be2.jpg"],

["film", ["Girl Vs. Monster", "Monster gegen Mädchen"], "2012", ["2021 10 13"], 3, ["ger"], ["action", "adventure"], [], ["Disney+"], ["Stuart Gillard"], ["Kerris Dorsey", "Katherine McNamara"], "https://64.media.tumblr.com/828365488ca87e39c92eddad3f2e2ea8/e4c7a564522a99eb-b4/s250x400/68b65d22f6cf38891a10370f79555ef79189bc1c.jpg"],

["film", ["The Social Network"], "2010", ["2021 10 15"], 6, ["ger"], ["biography", "drama"], [], ["Netflix"], ["David Fincher"], ["Jesse Eisenberg", "Rooney Mara", "Andrew Garfield", "Justin Timberlake"], "https://64.media.tumblr.com/f2942926279ca0345b51a11602fac10c/abd7b7b3dd87fdc0-09/s250x400/4aafffe5d822e81e377cc4a755b5c7102de5162f.jpg"],

["book", ["Percy Jackson & The Olympians: The Titan's Curse", "Percy Jackson: Der Fluch des Titanen"], "2007", [["2021 10 15", "2021 11 27"]], 6, ["ger"], ["fantasy", "adventure"], [], ["Percy Jackson"], ["Rick Riordan"], [], "https://64.media.tumblr.com/087b28b545b84739e43335a2cf764cfd/4a9f9a0132912e2d-c4/s250x400/90fac8b0a6a847405174e8a6375258f163006de3.jpg"],

["film", ["Exklusive Einblicke: Die Magie von Harry Potter"], "2021", ["2021 10 16"], 4, ["ger"], ["documentary"], ["syl"], [], [], [], "https://64.media.tumblr.com/6e079e96a076a519d7654bc7f2484eb1/94bc22051b3dd95e-b5/s250x400/fc48dfcd3485fd907d3c4fea793e8c8bc30233c4.jpg"],

["film", ["Focus"], "2015", ["2021 10 17"], 4, ["ger"], ["comedy", "crime"], [], ["Netflix"], ["Glenn Ficarra", "John Requa"], ["Will Smith", "Margot Robbie", "Adrian Martinez", "Rodrigo Santoro", "BD Wong", "Stephanie Honoré", "Joe Chrest"], "https://64.media.tumblr.com/e041b73311e80e8075f2bc6f0588c110/6e6950597e1fc5e6-a5/s250x400/3ae7f0c2de89b61a4069c0711769d49a64dfcd2c.jpg"],

["series", ["Monsters at Work", "Monster bei der Arbeit"], "2021", [["2021 10 18", "2021 10 27", "S1"]], 4, ["ger"], ["animation", "adventure"], [], ["Disney+"], ["Bobs Gannaway", "Bobs Gannaway", "Kelsey Mann"], [], "https://64.media.tumblr.com/8fc6ca0d08a2ad23926a7a4cc3200475/6c8f34bd875f0077-84/s250x400/7b96a05d438520246ccd19c413e96c695b00ecd3.jpg"],

["film", ["She's All That", "Eine wie keine"], "1999", ["2021 10 18"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Robert Iscove"], ["Freddie Prinze Jr.", "Rachael Leigh Cook", "Anna Paquin", "Kieran Culkin", "Elden Henson", "Usher", "Gabrielle Union", "Dulé Hill"], "https://64.media.tumblr.com/8198ef919e1554c70567ed51a9b6118a/9d04c4b7bbfe81e0-54/s250x400/716781bd6eeab88a4aec9c2f2aceacf8e414021c.jpg"],

["series", ["Durarara!!"], "2010", [["2021 10 19", "2021 11 30", "S1"]], 6, ["ger"], ["anime", "comedy", "supernatural", "action"], ["bini", "nico"], ["Netflix"], ["Ryôgo Narita"], [], "https://64.media.tumblr.com/51c9abb229aafca6bbc37e7277a29788/6cc294c4ee7c2d5f-ab/s250x400/4a0158973d9797cdbc9ca42c15c79bd80c569219.jpg"],

["film", ["Camp Rock"], "2008", ["2021 10 20"], 5, ["ger"], ["comedy", "drama"], [], ["Disney+"], ["Matthew Diamond"], ["Demi Lovato", "Joe Jonas", "Meaghan Martin", "Maria Canals-Barrera", "Alyson Stoner", "Kevin Jonas", "Nick Jonas"], "https://64.media.tumblr.com/fc7b950dd460e3ac2e51511186439ecc/faf580e125dbe03a-69/s250x400/991e2cf3e2fc739eef66f3f8e1f516c3bb8c98ad.jpg"],

["film", ["Stargirl", "Stargirl: Anders ist völlig normal"], "2020", ["2021 10 21", "2021 11 08", "2022 01 15", "2022 12 03"], 9, ["ger", "eng"], ["comedy", "drama"], [], ["Disney+", "fav", "bby"], ["Julia Hart"], ["Grace VanderWaal", "Graham Verchere", "Darby Stanchfield", "Karan Brar", "Giancarlo Esposito", "Karan Brar"], "https://64.media.tumblr.com/74147c192aabad90a6e15779f039e151/ffb0278dc58df436-39/s250x400/adcb85b2fbba58b564bcd84b131bf57b23f08e38.jpg"],

["film", ["The Parent Trap", "Ein Zwilling kommt selten allein"], "1998", ["2021 10 22"], 4, ["ger"], ["adventure", "comedy"], [], ["Disney+"], ["Nancy Meyers"], ["Lindsay Lohan"], "https://64.media.tumblr.com/f01b241132a4d209bea62ac34fc6db7b/7cb9a6047fbc9973-d4/s250x400/067ce115ab1983ea2cd270ef9fa876da40a0c694.jpg"],

["film", ["Lilo & Stitch 2: Stitch Has a Glitch", "Lilo & Stitch 2 - Stitch völlig abgedreht"], "2005", ["2021 10 22"], 4, ["ger"], ["animation", "comedy"], [], ["Disney+", "Lilo & Stitch"], ["Michael LaBash", "Tony Leondis"], [], "https://64.media.tumblr.com/e3dcfa1acaee06257a763aada0af767e/349576d91dcf714d-7a/s250x400/e29335acf50d200e1cc02bb805ee1b25dc8d5d61.jpg"],

["film", ["Phineas and Ferb the Movie: Across the 2nd Dimension", "Phineas und Ferb: Quer durch die 2. Dimension"], "2011", ["2021 10 23"], 5, ["ger"], ["animation", "action"], [], ["Disney+"], ["Robert Hughes", "Dan Povenmire", "Jay Lender"], [], "https://64.media.tumblr.com/10019d05ef376566b2131bd2f302c11b/267367c4391a3724-a9/s250x400/adee15f6b1020248459d6943fdd8715a2340ae25.jpg"],

["film", ["Sometimes yes, Sometimes no", "Sie liebt mich, sie liebt mich nicht", "Kabhi Haan Kabhi Naa"], "1994", ["2021 10 23"], 2, ["hin"], ["comedy", "drama", "bollywood"], ["bini", "mai"], ["Netflix"], ["Kundan Shah"], ["Shah Rukh Khan", "Suchitra Krishnamoorthi", "Juhi Chawla"], "https://64.media.tumblr.com/3f2159b0ac129dd1c40ac938cc7838dc/1467a8e5373279df-cd/s250x400/2f530ce73dcb1a190edfc468f562aabc982378bc.jpg"],

["film", ["Das schönste Mädchen der Welt"], "2018", ["2021 10 27", "2023 04 01"], 8, ["ger"], ["comedy", "music"], [], ["bibliothek"], ["Aron Lehmann"], ["Anke Engelke", "Heike Makatsch", "Luna Wedler", "Julia Beautx"], "https://64.media.tumblr.com/3936523864d2dc15192a89bc84d7310b/4832cfd7e5ba7f13-01/s250x400/d104e74cd23eef49f45958d1f6dedb83e9aa2999.jpg"],

["film", ["Blue My Mind"], "2017", ["2021 10 28"], 5, ["ger"], ["drama", "fantasy"], [], [], ["Lisa Brühlmann"], ["Luna Wedler"], "https://64.media.tumblr.com/faf24001f1305cfb24b84d879e791a56/d68813486e58bad2-61/s250x400/2103f8a53c36148b007b16cbb1de7f1b3c492d12.jpg"],

["film", ["The Wave", "Die Welle"], "2008", ["2021 11 01"], 7, ["ger"], ["drama", "thriller"], [], ["Netflix"], ["Dennis Gansel"], ["Jürgen Vogel", "Frederick Lau", "Max Riemelt", "Elyas M'Barek", "Jacob Matschenz", "Max Mauff", "Tim Oliver Schultz"], "https://64.media.tumblr.com/22e92cc08046c98c68f0e4778c1fc2a5/a37e1ae2a4afa3cb-5b/s250x400/8debab79dfb2f3b21f632e6feb3e68d1d69910f0.jpg"],

["film", ["Die Wilden Hühner"], "2006", ["2021 11 03"], 5, ["ger"], ["adventure", "family"], [], ["Netflix", "Die Wilden Hühner"], ["Vivian Naefe"], ["Michelle von Treuberg", "Lucie Hollmann", "Paula Romy", "Zsá Zsá Inci", "Benno Fürmann", "Nina Vorbrodt", "Axel Prahl", "Jette Hering"], "https://64.media.tumblr.com/6e75d756d4b66248126c6483b750c971/9f1cc2ad374d9fcc-31/s250x400/3afe75e6d09c1f49f6d9b97433d5d3be22011c7a.jpg"],

["film", ["Die Wilden Hühner und die Liebe"], "2007", ["2021 11 04"], 6, ["ger"], ["comedy", "family"], [], ["Netflix", "LGBT", "Die Wilden Hühner"], ["Vivian Naefe"], ["Michelle von Treuberg", "Paula Romy", "Lucie Hollmann", "Jette Hering", "Zsá Zsá Inci", "Thomas Kretschmann", "Benno Fürmann", "Axel Prahl"], "https://64.media.tumblr.com/1a2776dae54457bcf515edc7356d6768/876998922951938e-05/s250x400/e54e96ceee013d17dbd42f0e1742f718c5b2eb60.jpg"],

["film", ["Die Wilden Hühner und das Leben"], "2009", ["2021 11 05"], 5, ["ger"], ["adventure", "comedy"], [], ["Netflix", "Die Wilden Hühner"], ["Vivian Naefe"], ["Michelle von Treuberg", "Lucie Hollmann", "Jette Hering", "Zsá Zsá Inci", "Benno Fürmann", "Wotan Wilke Möhring", "Milena Tscharntke", "Sonja Gerhardt"], "https://64.media.tumblr.com/87deeb29e6606958a1eb6aea58fb3efc/913287753b1fadec-9b/s250x400/f4ed62e7adbe64210f03f3db21987ae8c57fc06d.jpg"],

["film", ["Die Vorstadtkrokodile"], "2009", ["2021 11 05"], 5, ["ger"], ["adventure", "family"], [], ["Netflix"], ["Christian Ditter"], ["Smudo", "Jacob Matschenz", "Axel Stein"], "https://64.media.tumblr.com/4bdcf49349ca6a11d3660c9b9b50c3d9/1df5e4c42048e73b-43/s250x400/1c6fa4d31eec11353b8c02fd623d9e8607f1bb98.jpg"],

["film", ["Vorstadtkrokodile 2"], "2010", ["2021 11 05"], 5, ["ger"], ["adventure", "family"], [], ["Netflix"], ["Christian Ditter"], ["Smudo"], "https://64.media.tumblr.com/dec3751db50fd50f9e0c1349611a67f8/b665287f830b9556-d4/s250x400/ebd8fb57f83b7d44dc8b66256bede5f27122a7c6.jpg"],

["film", ["Vorstadtkrokodile 3"], "2011", ["2021 11 05"], 5, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Wolfgang Groos"], ["Jacob Matschenz", "Axel Stein", "Joyce Ilg", "Michael Kessler", "Horst Lichter", "Martina Eitner-Acheampong"], "https://64.media.tumblr.com/3950df8a45690ee07d33f427303443fc/897866b78b29aa25-7c/s250x400/19234952292aafd53a58b23ecb4178ebcd81787a.jpg"],

["film", ["Die Vampirschwestern"], "2012", ["2021 11 05"], 3, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Wolfgang Groos"], ["Michael Kessler"], "https://64.media.tumblr.com/8a6eb7ac8ac155b7fe692be11d118dac/5d03daee4cff621c-67/s250x400/1ce2026bd5778c353da6382a56f8a53ff9706256.jpg"],

["film", ["Conni & Co."], "2016", ["2021 11 05"], 3, ["ger"], ["adventure", "family"], [], ["Netflix"], ["Franziska Buch"], ["Emma Schweiger", "Til Schweiger", "Max Mauff", "Nadine Wrietz"], "https://64.media.tumblr.com/54ea5a9a1ce3236a4e84541e3ff7498a/5e4b2f207aa87cbc-e4/s250x400/c5edaf2f552dede1b1e1251e37db8471d9e9ffe4.jpg"],

["film", ["Army of Thieves"], "2021", ["2021 11 06"], 6, ["ger"], ["action", "comedy"], ["bini", "jessie"], ["Netflix"], ["Matthias Schweighöfer"], ["Matthias Schweighöfer", "Nathalie Emmanuel", "Hiroyuki Sanada"], "https://64.media.tumblr.com/13a07fc99d936afdef7f512288731c68/8dba1370be4c13d3-69/s250x400/f94e7907bd342a2902ed0d42c1259d640f18c797.jpg"],

["film", ["Eine wie keiner"], "2008", ["2021 11 08"], 2, ["ger"], ["comedy"], [], [], ["Marco Petry"], ["Josefine Preuß", "Axel Stein"], "https://64.media.tumblr.com/8ec7d8dc7f81240fd87143478a35dc09/6af48899ffd709e3-46/s250x400/5d5da0868b774b78d27e69bc3f8fbbf8325a5c4b.jpg"],

["audiobook", ["World War Z: An Oral History of the Zombie War", "Operation Zombie: Wer länger lebt, ist später tot"], "2006", [["2021 11 10", "2021 12 02"]], 7, ["ger"], ["horror"], [], [], ["Max Brooks"], ["David Nathan"], "https://64.media.tumblr.com/1e25f9928bf597b276bee1f67b938aeb/b150b659157bd69b-be/s250x400/6e8c94227573e62d79d422e473a885adbaacd15f.jpg"],

["film", ["Liz and the Blue Bird", "Liz und der Blaue Vogel", "Rizu to aoi tori"], "2018", ["2021 11 10"], 5, ["jap"], ["anime", "drama"], ["bini", "jani", "nico"], ["Hibike!"], ["Naoko Yamada"], [], "https://64.media.tumblr.com/108aaa460cb0ca0d8d0a650be92a88cc/c62da6da440dde8f-66/s250x400/b2fafefc1263049a0fd4c9d890a115455e408753.jpg"],

["film", ["The League of Extraordinary Gentlemen", "Die Liga der außergewöhnlichen Gentlemen"], "2003", ["2021 11 11"], 5, ["ger"], ["action", "adventure"], [], ["Disney+"], ["Stephen Norrington"], ["Sean Connery", "Shane West", "Tony Curran"], "https://64.media.tumblr.com/d628e719a79ef05f4af08a0238cb7e83/0c12f857e12405fc-97/s250x400/2fd835e77ea9239742c0c65c1adf33d0971bbf7a.jpg"],

["film", ["Shiny_Flakes: The Teenage Drug Lord"], "2021", ["2021 11 12"], 8, ["ger"], ["documentary", "biography"], [], ["Netflix"], ["Eva Müller", "Michael Schmitt"], [], "https://64.media.tumblr.com/d9be6a5ddefc755782275f90d21e448f/65a86788ec91dc3d-c0/s250x400/59f761f879781d81b7a47e50bfee1978a21c3092.jpg"],

["film", ["Sky High", "Sky High - Diese Highschool hebt ab!"], "2005", ["2021 11 12"], 6, ["ger"], ["adventure", "comedy"], [], ["Disney+"], ["Mike Mitchell"], ["Mary Elizabeth Winstead"], "https://64.media.tumblr.com/9955366db588fb0a076d77e6c8e3d9ef/f2e58da49bb9ebb3-19/s250x400/137b59f0440dedede5ac30ec6580dcf5e3c956df.jpg"],

["film", ["Kate"], "2021", ["2021 11 13"], 7, ["ger"], ["action", "adventure"], ["bini", "mai"], ["Netflix"], ["Cedric Nicolas-Troyan"], ["Mary Elizabeth Winstead", "Woody Harrelson", "Tadanobu Asano", "Gemma Brooke Allen"], "https://64.media.tumblr.com/80dc2c5c7a50647e6e6014b58256a3f9/0a6595ac5d88289c-9a/s250x400/5a9e88440e538ed00b2e939827412044f585fb7e.jpg"],

["film", ["Night Teeth"], "2021", ["2021 11 15"], 5, ["ger"], ["action", "crime"], [], ["Netflix"], ["Adam Randall"], ["Jorge Lendeborg Jr.", "Debby Ryan", "Lucy Fry", "Raúl Castillo", "Megan Fox", "Alexander Ludwig"], "https://64.media.tumblr.com/5e666bcbd33f7e70c10c9d06ca55d5e9/7756c53967b823ad-3d/s250x400/621aff22a48aaec2ce1b4b5844ee03fcb3fe421e.jpg"],

["film", ["Ready Player One"], "2018", ["2021 11 17"], 6, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Steven Spielberg"], ["Tye Sheridan", "Olivia Cooke", "Simon Pegg", "Mark Rylance", "Lena Waithe", "T.J. Miller", "Ben Mendelsohn", "Hannah John-Kamen"], "https://64.media.tumblr.com/cdc111a0fe4bfe6d4fc494264ddf6aa7/52d2fac5692e3291-86/s250x400/51190389cd042238f8b0f1346c373075aad7bbfa.jpg"],

["series", ["Explained"], ["2018", ""], [["2019 11 04", "2020 02 01", "S1&S2"]], 0, [], ["documentary"], [], ["Netflix", "ongoing"], ["Joe Posner", "Joss Fong"], [], "https://64.media.tumblr.com/974710ea9cce1c7f8752e13dbe70eea1/3259d75c5b06823b-b9/s250x400/ba2655c584f1b18661819cfd180a72df8e27b7d4.jpg"],

["film", ["Bo Burnham: Make Happy"], "2016", ["2017 12 09"], 0, [], ["comedy", "music"], [], ["Netflix"], ["Bo Burnham", "Christopher Storer"], ["Bo Burnham"], "https://64.media.tumblr.com/7f083e60cf7f87a2d982781a59c99400/9e66cbe44d1fbf49-ea/s250x400/3dd98794c98141e93713970e6d48daff5592a51e.jpg"],

["film", ["Sound! Euphonium: Our Promise: A Brand New Day", "Sound! Euphonium: Our Promise: A Brand New Day", "Hibike! Euphonium Movie 3: Chikai no Finale"], "2019", ["2021 11 17"], 4, ["jap"], ["anime", "drama"], ["bini", "jani", "nico"], ["Hibike!"], ["Tatsuya Ishihara"], [], "https://64.media.tumblr.com/77d20aa7fc92ed0a5885d1872c1a67fb/31cf221810f1ae0f-59/s250x400/8cf4281798a9c16039b83d60c27550b2a8a485f2.jpg"],

["film", ["Stepsister from Planet Weird", "Meine Stiefschwester ist ein Alien"], "2000", ["2021 11 18"], 5, ["eng"], ["comedy", "family"], [], ["Disney+"], ["Steve Boyum"], [], "https://64.media.tumblr.com/67962e9225480db3b6a036c840689e00/223d0a85ec3ad7be-ee/s250x400/ebffcc239ea4fd522d4520819c1aa932584bfab0.jpg"],

["film", ["Jungle Cruise"], "2021", ["2021 11 18"], 7, ["ger"], ["action", "adventure"], [], ["Disney+"], ["Jaume Collet-Serra"], ["Dwayne Johnson", "Emily Blunt", "Edgar Ramírez", "Jack Whitehall", "Paul Giamatti"], "https://64.media.tumblr.com/d2307f1688e7787114c1f606e4d8e301/8394170f9c838101-50/s250x400/8fc65d4bbb4cbf94e80883639faade4b6d68f77f.jpg"],

["film", ["Out of My League", "Out of My League", "Sul più bello"], "2020", ["2021 11 20"], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Alice Filippi"], [], "https://64.media.tumblr.com/f46ab390b650012ab8252bab1a7d91f5/6c1cbb75e41972e6-77/s250x400/2efa4ab643425ac214aa4aa4a8e72ef7e17893fe.jpg"],

["film", ["Kung Fu Panda"], "2008", ["2021 11 20"], 9, ["ger"], ["animation", "action"], ["bini", "mai"], ["Netflix"], ["Mark Osborne", "John Stevenson"], [], "https://64.media.tumblr.com/4cc65fcd8588671bf0f2b68a2a5244ec/8e05298981cd4f0a-d4/s250x400/eea4ca1caaa76bc137e0513cf5eb42b221a26b5e.jpg"],

["film", ["Neighbors 2: Sorority Rising", "Bad Neighbors 2"], "2016", ["2021 11 22"], 4, ["ger"], ["comedy"], ["bini", "syl", "je"], ["Netflix"], ["Nicholas Stoller"], ["Seth Rogen", "Zac Efron", "Rose Byrne", "Chloë Grace Moretz", "Dave Franco", "Christopher Mintz-Plasse", "Awkwafina", "Selena Gomez", "Lisa Kudrow", "Ike Barinholtz", "Kiersey Clemons", "Beanie Feldstein", "Hannibal Buress", "Ciara Bravo", "Sam Richardson"], "https://64.media.tumblr.com/34ba2fe2a94b9e3f3539d451ce8a8cae/2145e1481d31850f-0d/s250x400/a17a441fdabd7f64e4157119ec7b7eebabead837.jpg"],

["series", ["The Bureau of Magical Things", "Club der magischen Dinge"], ["2018", ""], [["2021 11 23", "2021 11 29", "S1E1-S1E9"]], 4, ["ger"], ["family", "fantasy"], [], ["Netflix", "ongoing", "dropped"], ["Chris Anastassiades", "Sam Carroll", "Li-Kim Chuah"], ["Melanie Zanetti"], "https://64.media.tumblr.com/4b05f6c8415c3e4f6553c6deb9d1c204/c9f6af84a4caba57-4c/s250x400/effba562875e2b3763f10c6190aa8c2853c8db9b.jpg"],

["film", ["After Earth"], "2013", ["2021 11 23"], 4, ["ger"], ["action", "adventure"], ["je"], [], ["M. Night Shyamalan"], ["Will Smith", "Isabelle Fuhrman", "Sophie Okonedo"], "https://64.media.tumblr.com/2a89004eaebf8f4c05b4e951b336d12a/66be50de3b41f76b-04/s250x400/f04b5bb1e27b5b3cfe97f5b58f92d7706e1b2b44.jpg"],

["series", ["Soul Eater"], ["2008", "2009"], [["2021 11 24", "2022 02 10", "S1"]], 4, ["jap", "ger"], ["anime", "action"], ["bini", "nico", "jani", "jessie"], [], ["Atsushi Ohkubo", "Akatsuki Yamatoya"], [], "https://64.media.tumblr.com/8b3bb84696e001328a8971552928aa23/653f070bca58c59b-fc/s250x400/d77ba276834e1c531ac5f15491644dfcf4d8b0a8.jpg"],

["film", ["Tau"], "2018", ["2021 11 28"], 4, ["ger"], ["sci-fi", "thriller"], [], ["Netflix"], ["Federico D'Alessandro"], ["Maika Monroe", "Ed Skrein"], "https://64.media.tumblr.com/116dc5213ad24c1f57c2e34e7a135f83/38a7efe8a484730e-d2/s250x400/1db7913f8de174586d73a1b5599a3ec3b55890a4.jpg"],

["book", ["Aristocats"], "1992", [["2021 11 28", "2021 12 01"]], 5, ["ger"], [], [], [], [], [], "https://64.media.tumblr.com/d19a736fe2a000d32b2b67d3d29bf22d/872ce6cbcf86db29-a3/s400x600/22922e3d8786b8f416465b7010a45fc65f248ecb.jpg"],

["series", ["Best Friends Whenever", "Best Friends - Zu jeder Zeit"], ["2015", "2016"], [["2021 11 29", "2021 12 16", "S1"], ["2021 12 21", "2022 01 02", "S2"]], 7, ["ger"], ["comedy", "family"], [], ["Disney+", "fav"], ["Jed Elinoff", "Scott Thomas"], ["Amiah Miller", "Rowan Blanchard", "Lauren Lindsey Donzis", "Ricky Garcia", "Gus Kamp", "Madison Hu"], "https://64.media.tumblr.com/d0b98f93c2c43a71ce50d3a3f23b5268/ce8aee5415160c83-13/s250x400/9f5b858dff619e1bc8a0955ca5f3ff2bb504743b.jpg"],

["series", ["Dig Deeper - Das Verschwinden von Birgit Meier"], "2021", [["2021 11 30", "S1"], ["2021 12 29", "S1E2-S1E4"]], 7, ["ger"], ["documentary", "biography"], ["syl"], ["Netflix"], ["Nicolas Steiner"], [], "https://64.media.tumblr.com/3b91919efb858bcfcf591f9db7c22db9/38b29c14adc3282a-1e/s250x400/78ea2039298c0a08213cd981ca08a3e771419e7b.jpg"],

["film", ["High School Musical 3: Senior Year", "High School Musical 3"], "2008", ["2021 12 01"], 5, ["ger"], ["comedy", "drama"], ["bini", "je"], ["Disney+", "High School Musical"], ["Kenny Ortega"], ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale", "Olesya Rulin"], "https://64.media.tumblr.com/984f686e42109c4ab2b1f8ed42a725b0/7b43f912cdd30802-16/s250x400/409f2a9d7222995e2ece144e65304e3c0107a8fb.jpg"],

["book", ["Antarktis 2020"], "1973", [["2021 12 02", "2021 12 23", "C1-C8"]], 5, ["ger"], ["sci-fi"], [], ["ongoing"], ["Alexander Kröger"], [], "https://64.media.tumblr.com/a705751be543a77dacd8a294771f331f/e250dc98459be546-89/s250x400/ab755f19d9ce88ad2ee3e7f26d4108172e05a305.jpg"],

["audiobook", ["Children of Time"], "2015", [["2021 12 02", "2022 01 18"]], 9, ["eng"], ["sci-fi"], [], [], ["Adrian Tchaikovsky"], [], "https://64.media.tumblr.com/ddec98cdfa1d3732fee5cb268fa310fb/2d0846030b3d1254-29/s250x400/00cf942c1dd731813fc0229abb07e9c939bda326.jpg"],

["film", ["Hotel Transylvania", "Hotel Transsilvanien"], "2012", ["2021 12 02"], 7, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Genndy Tartakovsky"], [], "https://64.media.tumblr.com/bff21f7c403ebbacfecc427c2f43b9fc/146e52f3477e50a5-8f/s250x400/e32a819e418ded636b4b1070769f455c748fc88a.jpg"],

["film", ["Camp Rock 2: The Final Jam"], "2010", ["2021 12 03"], 3, ["ger"], ["comedy", "family"], ["bini"], ["Disney+"], ["Paul Hoen"], ["Demi Lovato", "Joe Jonas", "Nick Jonas", "Kevin Jonas", "Maria Canals-Barrera", "Meaghan Martin", "Alyson Stoner"], "https://64.media.tumblr.com/3c3c5febd9dc33f93569558f3f80c612/baa62ca43b8184dd-2e/s250x400/25305ea34097c4015478421ee1f4b979a8fb225a.jpg"],

["film", ["Hotel Transylvania 2", "Hotel Transsilvanien 2"], "2015", ["2021 12 04"], 3, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Genndy Tartakovsky"], [], "https://64.media.tumblr.com/9e7747fdb21ab019a2e7582471e7cb66/0fc19ca87739bf7a-5c/s250x400/c305dcb3538c28bc7c774ff953b2a4643bff085c.jpg"],

["film", ["Hotel Transylvania 3: Summer Vacation", "Hotel Transsilvanien 3 - Ein Monster Urlaub"], "2018", ["2021 12 05"], 5, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Genndy Tartakovsky"], [], "https://64.media.tumblr.com/5edf2ccb3a5f51ad63d932c94854ce62/e694826ba4fd0a57-6a/s250x400/d0244eeda13eefaac464d3b2f2d68a46008477a8.jpg"],

["series", ["Das Haus Anubis"], ["2009", "2012"], [["2021 12 06", "2022 03 13", "S1"], ["2023 08 06", "", "S2"]], 6, ["ger"], ["adventure", "drama"], ["bini", "nico"], ["Netflix", "watching"], ["Jeroen van der Zee", "Susanne Biesinger"], ["Gerda Böken"], "https://64.media.tumblr.com/b946c528a2016fa0ff60064345fb6a74/5dc3dc2dc2f1ca70-16/s250x400/83249957a03efbec5f394b25e19319acd34fa3a6.jpg"],

["series", ["Ergo Proxy"], "2006", [["2021 12 07", "2022 01 18", "S1"]], 5, ["ger"], ["anime", "mystery", "sci-fi", "action"], ["bini", "nico"], [], ["Yusuke Asayama", "Yûko Kawabe", "Junichi Matsumoto"], [], "https://64.media.tumblr.com/8338120e29832eb7970a5ff97acc0a60/67886bed1b9248af-1e/s250x400/2e90ed293d12c209041394995c06528fc96655df.jpg"],

["film", ["Mixtape"], "2021", ["2021 12 09"], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Valerie Weiss"], ["Gemma Brooke Allen", "Julie Bowen", "Nick Thune", "Jackson Rathbone"], "https://64.media.tumblr.com/42e8d611733928f37a32e519d41a2383/c511d9264cb095a2-a1/s250x400/57c5ae1beef2679110211c06869b52d4264d6cb7.jpg"],

["series", ["Detective Conan", "Detektiv Conan", "Meitantei Conan"], ["1996", ""], [["2021 12 10", "2022 01 06", "E1-E20"], ["2022 01 10", "2022 02 09", "E21-E40"], ["2022 02 09", "2022 03 20", "E41-E60"], ["2022 03 20", "2022 05 05", "E61-E80"], ["2022 05 07", "2022 06 13", "E81-E100"], ["2022 06 14", "2022 06 24", "E101-E120"], ["2022 06 24", "2022 07 07", "E121-E140"], ["2022 07 19", "2022 08 15", "E141-E160"], ["2022 08 15", "2022 09 16", "E161-E180"], ["2022 09 24", "2022 10 15", "E181-E200"], ["2022 10 15", "2022 11 05", "E201-E222"], ["2022 11 08", "2022 11 25", "E434-E440"], ["2022 11 25", "2022 12 18", "E441-E460"], ["2022 12 27", "2023 02 04", "E461-E480"], ["2023 02 04", "2023 02 10", "E481-E483"], ["2023 03 25", "2023 05 15", "E223-E240"], ["2023 05 16", "2023 06 13", "E241-E260"], ["2023 06 13", "2023 07 13", "E261-E280"], ["2023 07 13", "2023 08 13", "E281-E300"], ["2023 08 13", "2023 09 10", "E301-E320"], ["2023 09 30", "2023 10 10", "E321-E340"], ["2023 10 10", "2023 11 13", "E341-E360"], ["2023 11 13", "2023 12 09", "E361-E380"], ["2023 12 09", "", "E381-E400"]], 5, ["ger"], ["anime", "comedy", "crime"], ["bini"], ["Conan", "ongoing", "watching"], ["Gosho Aoyama"], [], "https://64.media.tumblr.com/73aadd9d6cbcf62315c5abd8cb70d059/2685f4921d799787-fd/s250x400/e77d85d7ee42456cc18b8c8c765cc4ef019dc953.jpg"],
/* S1: 5.64; S2: */

["film", ["Babyteeth", "Milla Meets Moses"], "2019", ["2021 12 10"], 5, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Shannon Murphy"], ["Eliza Scanlen", "Toby Wallace", "Essie Davis", "Ben Mendelsohn"], "https://64.media.tumblr.com/6246e2f37663cefdfb3b6208ce2bb5a9/9a2cc3822c29e24a-8d/s250x400/d76a734ed5a02b1263e66a688f943da4fc5835f3.jpg"],

["film", ["I Am Mother"], "2019", ["2021 12 11"], 4, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["Grant Sputore"], [], "https://64.media.tumblr.com/8a05b939260b5faa80a1650c55d81331/460fd6431504d2fa-88/s250x400/fa11b3ff27e38fb94c2b93ad96740f9388074967.jpg"],

["film", ["Love Hard"], "2021", ["2021 12 13"], 5, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Hernan Jimenez"], ["Nina Dobrev", "Darren Barnet"], "https://64.media.tumblr.com/03785b6938252f34f3b38a1ff5a431c5/c87be32c347592ea-65/s250x400/6542447b6e505c68fbbba84cde5ea0bd8d857156.jpg"],

["film", ["Still Out of My League", "Immer noch nicht meine Liga", "Ancora più bello"], "2021", ["2021 12 13"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Claudio Norza"], [], "https://64.media.tumblr.com/0aa4fd98b10748ee7420b2cb7c03dabf/0d0459a80a742b13-37/s250x400/b5f621cc550b2a06337fe547f4ae4fed226ba472.jpg"],

["film", ["Shang-Chi and the Legend of the Ten Rings"], "2021", ["2021 12 14"], 6, ["ger"], ["action", "adventure"], [], ["Disney+", "Marvel"], ["Destin Daniel Cretton"], ["Awkwafina", "Ben Kingsley", "Zach Cherry", "Simu Liu"], "https://64.media.tumblr.com/76929d1573351d3bc442d047e4e6c34b/a5f8ee358500fc51-a2/s250x400/ea97225150bea7e032cbdbe5a571a20fd0a8fd7f.jpg"],

["film", ["Escape to Witch Mountain", "Die Flucht zum Hexenberg"], "1975", ["2021 12 15"], 4, ["ger"], ["adventure", "family"], [], ["Disney+"], ["John Hough"], ["Kim Richards", "Ike Eisenmann"], "https://64.media.tumblr.com/202b050f90d61bf528f7fad447e42483/ebdbb3f0bbc76cd0-ba/s250x400/e1e35daf84c7cd0857734f680e3ae36e9357ec64.jpg"],

["book", ["Stargirl"], "2000", [["2021 12 24", "2022 01 07"]], 8, ["eng"], ["young adult"], [], ["bby", "fav"], ["Jerry Spinelli"], [], "https://64.media.tumblr.com/1bf72185f74c7dafe5f1e08bd511c0ce/7ff8b00c1a4e6934-4f/s250x400/9f480ea947035ab16f7fc335d3e9f4166f1cacaf.jpg"],

["film", ["Die Hard", "Stirb langsam"], "1988", ["2021 12 22"], 6, ["ger"], ["action", "thriller"], ["bini"], ["Disney+"], ["John McTiernan"], ["Bruce Willis", "Paul Gleason", "Alan Rickman"], "https://64.media.tumblr.com/4779a504dcd0811ad7c4b010d39ee857/1252c5e56e34201f-18/s250x400/4032796eba26aa51318639c36925e4c01a7d5683.jpg"],

["film", ["Die Hard 2", "Stirb Langsam 2"], "1990", ["2021 12 23"], 6, ["ger"], ["action", "thriller"], ["bini"], ["Disney+"], ["Renny Harlin"], ["Bruce Willis", "John Leguizamo"], "https://64.media.tumblr.com/172ef8f4ebe200735abad77eedfb1753/140938f65bac720c-45/s250x400/ed535c5317c364dfce9c9f85f2446a5981828284.jpg"],

["film", ["Die Hard: With a Vengeance", "Stirb langsam - Jetzt erst recht"], "1995", ["2021 12 26"], 7, ["ger"], ["action", "adventure"], ["bini", "je"], ["Disney+"], ["John McTiernan"], ["Bruce Willis", "Jeremy Irons", "Samuel L. Jackson"], "https://64.media.tumblr.com/949dc5c5749aee46f6033c16a94d1daf/0202b185d8d30310-7e/s250x400/8665bfb8907c5ee31277c64ebb38a46a0bef6e7a.jpg"],

["film", ["Fünf Freunde 4"], "2015", ["2021 12 27"], 6, ["ger"], ["adventure", "crime"], ["bini"], ["Netflix"], ["Mike Marzuk"], ["Samuel Finzi", "Murali Perumal"], "https://64.media.tumblr.com/a614d4951d251548934559d30c1f71c6/8636fb79387519d7-9c/s250x400/18c23d92f873147ce800e46a0db77ef07b2f99a3.jpg"],

["film", ["Verrückt nach Fixi"], "2016", ["2021 12 27"], 4, ["ger"], ["comedy", "fantasy"], [], ["Netflix"], ["Mike Marzuk"], ["Lisa Tomaschewsky"], "https://64.media.tumblr.com/d2c72b8d2d624ceee2cd8b76ffa743bd/4cd0a1cd3b2657ec-17/s250x400/e8b3b1f40e2b95498493c695f6127f5e462dac4b.jpg"],

["film", ["Live Free or Die Hard", "Stirb langsam 4.0"], "2007", ["2021 12 28"], 8, ["ger"], ["action", "thriller"], ["bini", "je"], ["Disney+"], ["Len Wiseman"], ["Bruce Willis", "Timothy Olyphant", "Cliff Curtis", "Mary Elizabeth Winstead", "Zeljko Ivanek", "Bill Clinton", "John F. Kennedy", "Maggie Q", "Jake McDorman"], "https://64.media.tumblr.com/f9e2d0030430ba09fa9539972138a74d/2b89145ff4fe77bf-c5/s250x400/4a9898658b3f81df4207c3d1f16fd07e93a92d9b.jpg"],

["film", ["Lulli"], "2021", ["2021 12 30"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["César Rodrigues"], [], "https://64.media.tumblr.com/fd1a5478cd94b5a788aed3771deafa60/fa4e2e493c41e540-6a/s400x600/6c0eb040fbf5932e7b84eeb5ebe445f63efdf355.jpg"],

["film", ["Kung Fu Panda 2"], "2011", ["2021 12 30"], 7, ["ger"], ["animation", "action"], ["bini", "mai"], ["Netflix"], ["Jennifer Yuh Nelson"], [], "https://64.media.tumblr.com/3a7ae8eef80511947756bbcea62b120d/b4fe4153a454b1af-28/s250x400/8ed12b98655d069851e6dced21809a50574fb80d.jpg"],

["film", ["Dornröschen"], "1971", ["2021 12 31"], 5, ["ger"], ["family", "fantasy"], ["syl"], [], ["Walter Beck"], [], "https://64.media.tumblr.com/10312410298000fa66f0bcb1609921aa/674e541f9890c99b-4e/s250x400/1c02953a0d736538f97e39c4460e711b52e4e708.jpg"],

["film", ["Not My Day", "Nicht mein Tag"], "2014", ["2021 12 31"], 3, ["ger"], ["action", "adventure"], ["bini", "syl"], ["Netflix"], ["Peter Thorwarth"], ["Moritz Bleibtreu", "Axel Stein", "Jasmin Gerat", "Til Schweiger", "Frederick Lau", "Martina Eitner-Acheampong", "Gizem Emre"], "https://64.media.tumblr.com/ebdd701e31dff417899be9178143a39e/0382a0c0a5166a46-6b/s250x400/998c5e5c8b12693144d6d36a58d4751874edbc5e.jpg"],

["film", ["Fünf Freunde und das Tal der Dinosaurier"], "2018", ["2021 12 31"], 0, ["ger"], ["adventure", "family"], ["bini"], ["Disney+", "dropped"], ["Mike Marzuk"], ["Jacob Matschenz"], "https://64.media.tumblr.com/693e4b5f42f5a8d2fc0623381337b3b3/9afcce6788b9264f-8b/s250x400/ff4b853e917071d90bcf48df3fa2abf557f3b20a.jpg"],

["film", ["Die Drei !!!"], "2019", ["2021 12 31", "2022 07 25"], 6, ["ger"], ["adventure", "family"], ["bini", "syl"], ["Disney+"], ["Viviane Andereggen"], ["Jürgen Vogel"], "https://64.media.tumblr.com/ec2c536ddd16e45fad9951f2969241f6/b74daaef72e2bc55-22/s250x400/ee437f821e2964a3d8b5d0f68aa6b1cb93b8f331.jpg"],

["film", ["Spider-Man"], "2002", ["2022 01 01"], 5, ["ger"], ["action", "adventure"], [], ["Netflix", "Marvel"], ["Sam Raimi"], ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco", "J.K. Simmons", "Elizabeth Banks", "Stan Lee"], "https://64.media.tumblr.com/6b93e3b93d75cdda66853f8766001bf9/cf72e90ec6d33b9c-22/s250x400/c1b398c5909a4a446f7db35942fb5abff8cf82ab.jpg"],

["film", ["Akira"], "1988", [["2022 01 02"]], 4, ["ger"], ["anime", "action"], ["bini"], ["Netflix"], ["Katsuhiro Ôtomo"], [], "https://64.media.tumblr.com/1319e0d2476f70211d0a1e5a87ab9ba6/0cc28f66bcaa51b9-5e/s250x400/81e8aeaf04a2a4bb5d852f710136e171b69fda0f.jpg"],

["film", ["Maquia: When the Promised Flower Blooms", "Maquia: When the Promised Flower Blooms", "Sayonara no asa ni yakusoku no hana o kazarô"], "2018", ["2022 01 02"], 5, ["ger"], ["anime", "adventure"], ["bini"], ["Netflix"], ["Mari Okada"], [], "https://64.media.tumblr.com/2962e57c513b76a1ed35d06059b0b378/76f871cfb77dfdbc-84/s250x400/f4be21a71b8852e9f57c0043e817782e1f5362f7.jpg"],

["film", ["Spin", "Spin - Finde deinen Beat"], "2021", ["2022 01 03"], 5, ["ger"], ["comedy", "family"], [], ["Disney+"], ["Manjari Makijany"], ["Anna Cathcart", "Kyana Teresa", "Avantika", "Kerri Medders"], "https://64.media.tumblr.com/eb69da1a8b6e39e2418307a4406969c9/808eed6eee0a39c3-fa/s250x400/f79104a9d11973b28331a0a446e503c8f2e4f6df.jpg"],

["series", ["No Good Nick", "Nick für ungut"], "2019", [["2022 01 04", "2022 01 07", "S1E1-S1E3"]], 4, ["ger"], ["comedy", "drama"], [], ["Netflix", "dropped"], ["Keetgi Kogan", "Keetgi Kogan", "Emily Schmidt"], ["Lauren Lindsey Donzis", "Sean Astin", "François Chau", "Gus Kamp"], "https://64.media.tumblr.com/702c8ba0508db32d16fb8e70bdbf956c/fb2b74a7c574e552-b2/s250x400/bacb9c440a0f416f6ff586fa6c0e615dc15bd3a1.jpg"],

["film", ["Hilda and the Mountain King", "Hilda und der Bergkönig"], "2021", ["2022 01 06"], 7, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Andy Coyle"], [], "https://64.media.tumblr.com/299b02775621d028149c693d1fa73aaa/48e2ee9fed822400-bf/s250x400/26ae45c86e0b527a178422334b3c4035e01dcc98.jpg"],

["series", ["Girl Meets World", "Das Leben und Riley"], ["2014", "2017"], [["2022 01 08", "2022 01 12", "S1"], ["2022 01 13", "2022 01 28", "S2"], ["2022 01 29", "2022 02 10", "S3"], ["2023 08 21", "2023 09 29", "S1"]], 8, ["ger"], ["comedy", "drama"], [], ["Disney+", "fav"], ["Michael Jacobs", "April Kelly", "Ava Kolker"], ["Rowan Blanchard", "Sabrina Carpenter", "M.C. Gainey", "Ricky Garcia", "Jane Lynch", "Debby Ryan", "Tania Gunadi", "Ben Savage", "William Daniels", "Betsy Randle", "Rider Strong", "William Russ", "Danielle Fishel", "Lindsay Ridgeway", "Anthony Tyler Quinn", "Lily Gibson", "Lee Norris"], "https://64.media.tumblr.com/36187f43acff0bc60164f66ed977e142/e1a8385b51505f2c-13/s250x400/97af5d53aa9a8fbddf77597f0af622893b1a1fd2.jpg"], /* S1: 5.4; S2: 6.3; S3: 6.4 */

["film", ["Friendzone"], "2021", ["2022 01 08"], 5, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Charles Van Tieghem"], [], "https://64.media.tumblr.com/1a21a4d0767564112499f161fac6ed81/e537b0b1bd1b8426-ea/s250x400/22cab9c14e7fb6407cfc43946ceac125b35f23d3.jpg"],

["book", ["Love, Stargirl"], "2007", [["2022 01 08", "2022 02 02"], ["2023 01 01", "2024 01 02"]], 9, ["eng"], ["young adult"], [], ["bby", "fav"], ["Jerry Spinelli"], [], "https://64.media.tumblr.com/b88bf55a159701d2594ed235c80d7f85/8914101fc7d1fd55-92/s250x400/1ec740cecb9c0912da50babb9d991f32d459a7cc.jpg"],

["film", ["Red Notice"], "2021", ["2022 01 08"], 4, ["ger"], ["action", "comedy"], ["bini", "mai"], ["Netflix"], ["Rawson Marshall Thurber"], ["Dwayne Johnson", "Ryan Reynolds", "Ed Sheeran", "Ritu Arya", "Gal Gadot"], "https://64.media.tumblr.com/853d7ca93d2d4254a8dc3fb24a451fb0/fe600e07dca487a5-8f/s250x400/42d55efe3b567cb1382b901e104fed157f18b1f9.jpg"],

["film", ["Ron's Gone Wrong", "Ron läuft schief"], "2021", ["2022 01 16"], 8, ["ger"], ["animation", "adventure"], ["bini", "syl"], ["Disney+"], ["Sarah Smith", "Jean-Philippe Vine", "Octavio E. Rodriguez"], [], "https://64.media.tumblr.com/349a673b0215b8cded23c8313391405a/51c2de9069466510-76/s250x400/df4bd9b063ed2b1e752e2a717eedb65411c2f3b1.jpg"],

["audiobook", ["Don Quixote", "Don Quijote"], ["1605", "1615"], [["2022 01 18", "2022 01 19", "Book 1"], ["2022 01 19", "Book 2"]], 4, ["ger"], [], [], ["ongoing"], ["Miguel de Cervantes"], [], "https://64.media.tumblr.com/b47ceb1b40c0b21623d1e3f36e35103a/1b6de227c20fada4-4f/s250x400/6d85ca2e4b391e74b778fba4a52f43bfa85a3d56.jpg"],

["series", ["Steins;Gate"], "2011", [["2022 01 18", "2022 02 22", "S1"], ["2022 02 22", "Specal"]], 5, ["ger"], ["anime", "drama", "sci-fi", "comedy"], ["bini", "nico"], ["Netflix"], ["Jukki Hanada", "Toshizo Nemoto", "Chiyomaru Shikura"], [], "https://64.media.tumblr.com/7de4b4be257a2e4ce24903abea9f942e/7f5185055f5f03bd-97/s250x400/e598e112b8448156efc171d1d69ca7d445960d54.jpg"],

["film", ["Mirai of the Future", "Mirai - Das Mädchen aus der Zukunft", "Mirai no Mirai"], "2018", ["2022 01 20"], 4, ["ger"], ["anime", "adventure", "drama", "fantasy"], ["bini"], [], ["Mamoru Hosoda"], [], "https://64.media.tumblr.com/4f7882d30ce392eec2e43104be75f696/97569e9c61cc7cc5-b9/s250x400/b4aaf0fa6ab7d91f4eeb8ae86ef33307169421c8.jpg"],

["audiobook", ["Six of Crows"], "2015", [["2022 01 21", "2022 02 01"]], 5, ["eng"], ["fantasy"], [], [], ["Leigh Bardugo"], [], "https://64.media.tumblr.com/a5a7eb1f18617014e10e20bad56abf34/e0ab6df0082fe946-b4/s250x400/1734bf766c91ee7deb7fb32cb135ee9e6ca6d10a.jpg"],

["film", ["Dil Se..", "Dil Se - Von ganzem Herzen"], "1998", ["2022 01 22"], 2, ["hin"], ["drama", "romance", "bollywood"], ["bini", "mai"], ["Netflix"], ["Mani Ratnam"], ["Shah Rukh Khan", "Preity Zinta"], "https://64.media.tumblr.com/57606744c70ca423a97d3562057221b5/2e3ef30aa697e081-98/s250x400/2313e334d5833491e136c84e20fc9ec99fd25d27.jpg"],

["film", ["Confession of an Invisible Girl", "Bekenntnisse eines unsichtbaren Mädchens", "Confissões de uma Garota Excluída"], "2021", ["2022 01 27"], 4, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Bruno Garotti"], [], "https://64.media.tumblr.com/952ab1c21f7ce5cca2980f0f42f106b8/22a569d7be7af168-9e/s250x400/a2efa98842a9a35e356369fa3678a5378d181555.jpg"],

["film", ["Me and Earl and the Dying Girl", "Ich und Earl und das Mädchen"], "2015", ["2022 01 28"], 8, ["ger"], ["comedy", "drama"], [], ["Disney+"], ["Alfonso Gomez-Rejon"], ["Thomas Mann", "Olivia Cooke", "Nick Offerman", "Jon Bernthal"], "https://64.media.tumblr.com/fcbbf0b90a972aed4342e3df35b7b64e/db1c743d0df07a65-8d/s250x400/14aaf7c7e1ec8cca8d86c18b91e15907cd7586fc.jpg"],

["film", ["A Good Day to Die Hard", "Stirb langsam - Ein guter Tag zum Sterben"], "2013", ["2022 01 29"], 3, ["ger"], ["action", "thriller"], ["bini"], ["Disney+"], ["John Moore"], ["Bruce Willis", "Mary Elizabeth Winstead", "Jai Courtney"], "https://64.media.tumblr.com/41094adbec3724a373dd85cbbfdf36be/d65b1ef0b4cbce77-b3/s250x400/39bbf4649f62eaec72aec88fc4a0feaf6440175e.jpg"],

["audiobook", ["The Wonderful Wizard of Oz", "Der Zauberer von Oz"], "1900", [["2022 02 01", "2022 02 03"]], 6, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Sibella Denton", "jenny", "Sibella", "Kaffen", "DSayers", "padraigo", "Annoying Twit", "aradlaw", "Iowajones", "earthcalling", "Ernst Pattynama", "Symmie", "RuthieG", "Hayflake", "jeremiahbritt", "echobase77", "niamh", "joyseternal", "henry", "staticstasy", "victoria_8674", "MHAIJH85", "sadclown", "chris123", "ReadsALott", "Henry Frigon", "David Lawrence", "Patrick", "Jenny Lundak", "Jennifer Stearns", "Mark F. Smith", "Kara Shallenberg", "Denny Sayers", "Padraig O'hIceadha", "Chris Jones", "Linda McDaniel", "David Barnes", "Scotty", "Anna Roberts", "Diane Dunn", "Chris Moerz"], "https://64.media.tumblr.com/ec1e26fe837efe93be3e4d6169ca23e6/ef98f18f18541d8b-e4/s250x400/25b3afd6f429f6f2d018ea254fe405442812cb83.jpg"],

["series", ["The Rope", "Das Seil", "La corde"], "2021", [["2022 02 02", "2022 02 04", "S1"]], 6, ["ger"], ["drama", "fantasy"], [], [], ["Eric Forestier", "Eric Forestier", "Dominique Rocher"], [], "https://64.media.tumblr.com/6f8d18b246c56586e3bc6948d8ccd1d9/b43438f6110ae640-51/s250x400/9577b863f72557baba6b58ff548d59f846796c95.jpg"],

["book", ["Beschützer der Diebe"], "1994", [["2022 02 03", "2022 02 24"]], 9, ["ger"], [], [], ["bibliothek"], ["Andreas Steinhöfel"], [], "https://64.media.tumblr.com/d0995ca0fa2c820b03c5dbaa4c242636/bf39115381e58d42-be/s250x400/8b90554575ed2087d34b8f27399fefd378d549b6.jpg"],

["audiobook", ["The Marvelous Land of Oz", "Im Reich des Zauberers Oz"], "1904", [["2022 02 07", "2022 02 14"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Bob Neufeld", "Charlotte Duckett", "Shauna Kennett", "Jeff K.", "Frances Brown", "Andy Cotterly", "Matthew Walker", "nomorejeffs", "tovarisch", "TriciaG", "Elizabeth Klett", "David Olson", "drakaunus", "Beth Thomas", "thestorygirl", "Elliot Gage", "gloriousjob", "Amanda Friday", "Elli", "Victoria P"], "https://64.media.tumblr.com/14a6e844f510fa7f683616408091322a/08f256bc249c513e-e2/s250x400/e9554b04ed4a013a17ce20e4b9472efe73907f9e.jpg"],

["film", ["JJ+E", "Winterbucht", "Vinterviken"], "2021", ["2022 02 07"], 6, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Alexis Almström"], [], "https://64.media.tumblr.com/de62eeeda5f87c7b94fb0b4d406a9c1b/0f0991b6897ada6b-93/s250x400/fb3f2d2eb1b3589ac49a97796400eff261e393db.jpg"],

["film", ["Through my Window", "Through my Window - Ich sehe nur dich", "A través de mi ventana"], "2022", ["2022 02 08"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Marçal Forés"], [], "https://64.media.tumblr.com/2679a176be647abcdb8a9c00abbb9e3f/01423769ad3f7ffc-11/s250x400/be2a771cf9ac6caacdd1e0ad9949efece8b51180.jpg"],

["series", ["Fire Force"], ["2019", ""], [["2022 02 13", "S1E3-S1E4"]], 0, ["ger"], ["anime", "action"], ["jani", "jessie", "nico"], ["dropped", "ongoing"], ["Yamato Haishima", "Yoriko Tomita", "Atsushi Ohkubo"], [], "https://64.media.tumblr.com/a491166ffc9fef47f86098d989deac22/b1fd1dd7a4b88415-54/s250x400/ba3ca3af3804e84b218aff257b63006a137f401a.jpg"],

["series", ["Demon Slayer: Kimetsu no Yaiba"], ["2019", ""], [["2022 02 13", "S2E18"]], 0, ["jap"], ["anime", "action"], ["jani", "jessie", "nico"], ["dropped", "ongoing"], ["Koyoharu Gotouge", "Koyoharu Gotouge", "Ufotable"], [], "https://64.media.tumblr.com/35ddf0a336e90bc389a72bb97b188305/3b291dc14324f8d2-09/s250x400/91b48afcf78bd486cab3dbcbe945bdd278de271a.jpg"],

["audiobook", ["Ozma of Oz", "Ozma von Oz"], "1907", [["2022 02 14", "2022 02 17"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Paul Harvey", "staticstasy", "David Lawrence", "Kara Shallenberg", "Miriam Esther Goldman", "TriciaG", "rymd80", "Mark F. Smith", "Elizabeth Klett", "Christian Brock", "Raegan Payne", "TriciaG", "David O'Connell", "staticstasy", "Denny Sayers", "Padraig O'hIceadha", "Matt L Speer", "Barry Eads", "Henry Frigon", "Caroline Shapiro", "Beverly Scott"], "https://64.media.tumblr.com/73024276451256c41b93290373223aa7/b8479253ee4696ac-09/s250x400/48876ed60a465f322a86a4751d7a5a9a06e08d89.jpg"],

["film", ["Fullmetal Alchemist", "Fullmetal Alchemist", "Hagane no renkinjutsushi"], "2017", [["2022 02 16", "2022 02 23"]], 5, ["ger"], ["action", "adventure"], ["jani", "jessie", "bini", "nico"], ["Netflix"], ["Fumihiko Sori"], [], "https://64.media.tumblr.com/5ec08b15f649e881843a8e073d5d6f0c/76c478e8be337ece-3f/s250x400/195aebf576ed5a26356c9a609356b745a9893fa3.jpg"],

["audiobook", ["Dorothy and the Wizard in Oz", "Dorothy und der Zauberer in Oz"], "1908", [["2022 02 17", "2022 02 28"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Phil Chenevert"], "https://64.media.tumblr.com/eb57072cab6319fce50981b688e4e272/63ef1d47086265a9-22/s250x400/e9e4b1f6e8268fcc9a43f0d783afde4d68032bcb.jpg"],

["film", ["The F**k-It List", "Die LmaA-Liste"], "2020", ["2022 02 18"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["Michael Duggan"], ["Madison Iseman", "Karan Brar", "Jerry O'Connell"], "https://64.media.tumblr.com/0e4eb544fa55e4ffd2390bb2b884bd79/9d9ae9fbf7b01780-7f/s250x400/6f5ce82c0d01aa71fd45dfb402d50c25ccf23573.jpg"],

["film", ["Next Gen", "Das Mädchen und ihr Roboter - Die nächste Generation"], "2018", ["2022 02 19"], 5, ["ger"], ["animation", "action"], [], ["Netflix"], ["Kevin R. Adams", "Joe Ksander", "Ricardo Curtis"], [], "https://64.media.tumblr.com/39b12b01232b61d0409ce5c7cb9d2a1b/bc155e421d30c65a-e3/s250x400/825c68642c8121ee9e9074d837d77b5eb4bf9145.jpg"],

["series", ["Shadow and Bone", "Shadow and Bone: Legenden der Grisha"], "2021", [["2022 02 20", "2022 05 08", "S1"]], 0, ["ger"], ["action", "adventure"], [], ["Netflix", "ongoing"], ["Leigh Bardugo", "Eric Heisserer"], ["Ben Barnes", "Kit Young"], "https://64.media.tumblr.com/bc8862162e951291eb9c3d7dd90e0a69/e773c915fc14a2c3-1d/s250x400/218ee8b9d290b1317fb16bccb1e4b41434824bde.jpg"],

["book", ["Carrie"], "1974", [["2022 02 25", "2022 03 28"]], 7, ["ger"], ["horror"], [], ["bibliothek"], ["Stephen King"], [], "https://64.media.tumblr.com/b253903cf34e6d32d4bbce97fa14ee42/b12c1c6314c9d139-82/s400x600/25d34acffe31f1ab9fab3d7259252cbdf94d82e2.jpg"],

["audiobook", ["The Road to Oz", "Dorothy auf Zauberwegen"], "1909", [["2022 02 28", "2022 03 03"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Phil Chenevert"], "https://64.media.tumblr.com/5ac3b1890125bcce055155433a1a7813/a8f154d865f31f17-ec/s250x400/ac946ef1b35874ec8f8e02bb8860a4a71cdca4e2.jpg"],

["film", ["Set It Up"], "2018", [["2022 03 01", "2022 03 02"]], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Claire Scanlon"], ["Zoey Deutch"], "https://64.media.tumblr.com/64690bb1c79c7a509cf9243c1e04cb9a/f99d389d2dcc5cc5-9f/s250x400/0883e45fa3ee8afca1712d35f4f637ee369d8b0c.jpg"],

["film", ["Evangelion: 3.0+1.0 Thrice Upon a Time", "Evangelion: 3.0+1.01 – Thrice Upon a Time", "Shin Evangelion Gekijôban"], "2021", [["2022 03 01", "2022 03 06"]], 0, ["ger"], ["anime", "action"], ["bini", "nico"], [], ["Mahiro Maeda", "Katsuichi Nakayama", "Kazuya Tsurumaki"], [], "https://64.media.tumblr.com/b0811d2c775bd9e98a67083361a399bb/26900ef8c60bba61-cb/s250x400/8f43290005a96fa5561c672d080a6cce443243f8.jpg"],

["audiobook", ["The Emerald City of Oz", "Dorothy in der Smaragdenstadt"], "1910", [["2022 03 03", "2022 03 15"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Phil Chenevert"], "https://64.media.tumblr.com/f00e9cc2f5dc679d67d346562c5cc2cd/807948ba7fe0472a-a3/s250x400/bbd62692658cafdbbd654f5cd06af994a44b35e0.jpg"],

["short", ["What on Earth!"], "1967", ["2022 03 07"], 7, ["eng"], ["animation"], [], [], ["Les Drew", "Kaj Pindal"], [], "https://64.media.tumblr.com/b5950ac2bad71418cffdfc77db58b656/e6b5cb6b14e168d6-3d/s250x400/82df65aa62587d08638c55918967e8c67e8d56d9.jpg"],

["film", ["A Jar Full of Life", "Vielmachglas"], "2018", ["2022 03 12"], 5, ["ger"], ["comedy", "drama"], ["syl", "je", "bini"], [], ["Florian Ross"], ["Jella Haase", "Matthias Schweighöfer", "Gerda Böken", "Martina Eitner-Acheampong"], "https://64.media.tumblr.com/76b9004727a1505ce334d2ad672ce0e9/09c952a6927fe17b-34/s250x400/6a2da05d57aa982c32e8d052ac5884bee65c5213.jpg"],

["film", ["Duplicate"], "1998", [["2022 03 12", "2022 03 19"]], 5, ["hin"], ["action", "comedy", "bollywood"], ["bini", "mai"], ["Netflix"], ["Mahesh Bhatt"], ["Shah Rukh Khan", "Juhi Chawla", "Sonali Bendre"], "https://64.media.tumblr.com/14e6bebcea58283750f4ea5b88474d3c/c60e627484aa9ec8-93/s250x400/e43e68f170f47c4930a627869cf257df7012cc53.jpg"],

["audiobook", ["The Patchwork Girl of Oz", "Dorothy und das Patchwork-Mädchen"], "1913", [["2022 03 17", "2022 03 21"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Phil Chenevert"], "https://64.media.tumblr.com/6c55aa3ac9f8a2263a97f103eb98a033/ece92620a95370d9-a5/s250x400/7bd10866d542c0b573c8cf24e0e1a186fea8b7e7.jpg"],

["film", ["Descendants", "Descendants - Die Nachkommen"], "2015", ["2022 03 19"], 4, ["ger"], ["comedy", "family"], [], ["Disney+"], ["Kenny Ortega"], ["Dove Cameron", "Booboo Stewart", "Dan Payne", "Jonathan Holmes"], "https://64.media.tumblr.com/66bed44e8b6ba625d1b0fad7f01cc75a/c163717be4025b70-af/s250x400/a9fdd8be9e6fc1a5b4028cf6d7842212d6dc8753.jpg"],

["audiobook", ["Bees, Shown to the Children"], "1912", [["2022 03 21", "2022 03 23"]], 8, ["eng"], [], [], ["LibriVox"], ["Ellison Hawks"], ["KevinS", "Susan Russell", "roselbex", "Evelyn Lehmann", "Rochelle Berenyi", "MaybeCordelia", "Cindy Winsor", "Owlivia", "crazylemur", "atylerelder", "GreenMagik", "Rachel Costello", "mleigh", "hollyberry", "James R. Hedrick", "Larry Wilson", "Evelyn Lehmann", "atylerelder"], "https://64.media.tumblr.com/c33a6ea066bf58c2c0865683c1bbdae4/861ba8f58a75263b-9b/s250x400/731e59fe92d9636e622ac068996c20112a82b04b.jpg"],

["audiobook", ["Tik-Tok of Oz"], "1914", [["2022 03 23", "2022 04 04"]], 5, ["eng"], ["fantasy"], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Phil Chenevert"], "https://64.media.tumblr.com/9ce32868ae699dde1c24e25f11a453ee/a8f7595e0cbe51c8-ad/s250x400/35cd17a9677da287748473e35b2a77d816beeeab.jpg"],

["film", ["Hamilton"], "2020", [["2022 03 24", "2022 03 27"], "2023 03 26"], 8, ["eng"], ["biography", "drama", "musical"], [], ["Disney+"], ["Thomas Kail"], ["Ariana DeBose", "Leslie Odom Jr."], "https://64.media.tumblr.com/10f8d7e6e0254d58fd414356cefe7438/60e86324d8e92a16-11/s250x400/e5a673f1308e8ea55b6053169a11031e1bba2a3b.jpg"],

["series", ["Terrace House: Aloha State"], ["2016", "2017"], [["2022 03 27", "2022 07 31", "S1"]], 6, ["jap"], ["drama", "reality-tv"], ["bini", "nico"], ["Netflix"], [], ["Lauren Tsai"], "https://64.media.tumblr.com/51c8623c08a7434dcacd613c5ffd704b/b48e302bb9ee65d6-2f/s250x400/5d38d87f7ad136af99762f4c8db0a399681fdcf4.jpg"],

["book", ["Das verdammte Chaos im Mikrokosmos"], "2015", [["2022 03 29", "2022 04 25"]], 7, ["ger"], [], [], ["bibliothek"], ["Anke Weber"], [], "https://64.media.tumblr.com/111a070d053c36be33762fc23b1b66b6/ac743d4e49dec798-5e/s250x400/335d8881a169b5e46c66791c9934ada0c41dd3f9.jpg"],

["series", ["Maya", "Die Biene Maja", "Mitsubachi Mâya no bôken"], ["1975", "1980"], [["2022 03 30", "S1E1-S1E2"], ["2022 04 09", "S1E6"], ["2022 05 11", "S1E9"]], 0, ["ger"], ["anime", "adventure"], ["bini"], ["bibliothek"], ["Waldemar Bonsels", "Marty Murphy", "Niisan Takahashi"], [], "https://64.media.tumblr.com/e14b32ec817851f3e7c921d1527daff4/1d17d47e327c97de-40/s250x400/1590955223962288cce755a68e7988375b643028.jpg"],

["film", ["Child of Kamiari Month", "Child of Kamiari Month", "Kamiarizuki no kodomo"], "2021", ["2022 04 02"], 5, ["ger"], ["anime", "drama"], ["bini", "mai"], ["Netflix"], ["Takana Shirai"], [], "https://64.media.tumblr.com/305b42774e4a4deba2d80d6c2d4b07a0/2fd5727acfd79cba-4a/s250x400/4c2dc9e89be1498ccf33d174a21e22373f45affa.jpg"],

["audiobook", ["Journal of Small Things"], "1917", [["2022 04 04", "C1-C8"]], 0, ["eng"], ["war"], [], ["LibriVox", "dropped"], ["Helen Gansevoort Edwards Mackay"], ["BettyB", "Elroi", "Tatiana Chichilla", "TR Love", "Sarah Rothwell", "Tom Merritt"], "https://64.media.tumblr.com/a0dc1efcf26022a0c1808143869d97b1/1e52f809807cd001-fc/s250x400/3ac2d225f0a2790595e009e5f994595ff72aaba8.jpg"],

["audiobook", ["The Luckiest Girl in the School"], "1916", [["2022 04 05", "C1-C8"]], 0, ["eng"], ["school"], [], ["dropped", "LibriVox"], ["Angela Brazil"], ["Katie Francesca", "Jim Locke"], "https://64.media.tumblr.com/4b2c3d4fb7bcccb8e1bef54b00a4dcda/46547362e4543fb7-2f/s250x400/8ba28ec7f0bb6b1398c0897e64db3ddd0bb729e9.jpg"],

["audiobook", ["Short Ghost and Horror Collection 057"], ["1859", "1933"], [["2022 04 06", "2022 04 12"]], 6, ["eng"], ["horror"], [], ["LibriVox"], ["Algernon Blackwood", "Carl Richard Jacobi", "Francis Marion Crawford", "Arthur Beecher Waltermire", "George Waight", "Clifford Martin Eddy Jr.", "Lal Behari Dey", "William Waldorf Astor", "Sir Arthur Conan Doyle", "Edward Bulwer-Lytton", "Anton Maracek Oliver", "Rudyard Kipling", "John W. Jakes", "R.G. Macready", "William Sanford", "Gertrude Atherton", "Auguste Villiers de l'Isle-Adam"], ["Camryn Blakely", "Colleen", "Andy Sames", "Dale Grothmann", "ChinmayHota", "Neil Jaybe", "Rafe Ball", "David Sweeney-Bear", "Dustin Pete", "Dan Gurzynski", "Paula Messina"], "https://64.media.tumblr.com/bcc432d15e9d1b2ff296056ca57051ae/df2c5aac7d41f092-39/s250x400/1b5d6fe06aaf8c0645abb1cb06fb43acad179b70.jpg"],

["film", ["The Starving Games", "Die Pute von Panem - The Starving Games"], "2013", ["2022 04 09"], 2, ["eng"], ["comedy"], [], [], ["Jason Friedberg", "Aaron Seltzer"], ["Cody Christian", "Brant Daugherty"], "https://64.media.tumblr.com/c6a4afce86622cdd9b5849823e9b6d09/4ee34e3471ae2367-44/s250x400/f19d2ed7a5e3834a1a2f8675851fd49bb9ce3d6b.jpg"],

["film", ["Barbie Diaries", "Das Barbie Tagebuch"], "2006", ["2022 04 09"], 3, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Eric Fogel"], [], "https://64.media.tumblr.com/3ada6b37ebc16bdc160f5dad874cf05d/3eb84b4db0ab9e1e-32/s250x400/e13c8ba8ac296f96b66f0f5208368df3d2b3dce8.jpg"],

["film", ["Barbie in Princess Power", "Barbie in: Die Super-Prinzessin"], "2015", ["2022 04 10"], 4, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Ezekiel Norton"], [], "https://64.media.tumblr.com/c6d658a15c39fd80632ff0a1a2b3bbd8/80157b7fbae0b200-64/s250x400/a1b8e56c9f58fca319ecc98a867f88bce0892810.jpg"],

["film", ["Barbie in Rock 'N Royals", "Barbie - Eine Prinzessin im Rockstar Camp"], "2015", ["2022 04 14"], 4, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Michael Goguen", "Karen J. Lloyd"], [], "https://64.media.tumblr.com/4cc647fe2a70711f3b4ea59e1e05305c/6f77dd794f93c5ab-d5/s250x400/da1cf09fbe4beda04778b5a89dad126ed446979d.jpg"],

["film", ["Barbie in a Mermaid Tale 2", "Barbie und das Geheimnis von Oceana 2"], "2011", ["2022 04 16"], 5, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["William Lau"], [], "https://64.media.tumblr.com/799799ee45daa2ff1ee519ef6d16a9e5/d564703ca8818d88-a5/s250x400/8d3d5de7658c5b029d5bb790c63ab052de81047c.jpg"],

["film", ["Suck Me Shakespeer 2", "Fack ju Göhte 2"], "2015", ["2022 04 16"], 7, ["ger"], ["comedy"], ["bini"], ["Netflix"], ["Bora Dagtekin"], ["Elyas M'Barek", "Jella Haase", "Karoline Herfurth", "Katja Riemann", "Gizem Emre", "Jana Pallaske", "Alwara Höfels"], "https://64.media.tumblr.com/24bfc2000ddb0f5322d8f9d6fc81d329/a4ab170a940b97de-db/s250x400/85083d66274e9050a9af2027bcf8715558a114bd.jpg"],

["film", ["The Peppercorns and the Curse of the Black King", "Die Pfefferkörner und der Fluch des schwarzen Königs"], "2017", ["2022 04 17"], 4, ["ger"], ["adventure", "comedy"], ["bini"], [], ["Christian Theede"], ["Anna Böttcher"], "https://64.media.tumblr.com/fb8771ae098d3d5955d29551e8e2592c/8ae29a96e4b801f9-45/s250x400/927a6f74d420e913e2ea955e41f144391db0ad75.jpg"],

["film", ["Pixel Perfect", "Der perfekte Rockstar"], "2004", ["2022 04 17"], 4, ["eng"], ["family", "sci-fi"], [], ["Disney+"], ["Mark A.Z. Dippé"], ["Brett Cullen", "Tania Gunadi"], "https://64.media.tumblr.com/e8869ae128277ac83f50e377d1dd7ff6/cc2d76ff04dd00db-87/s250x400/e5011576d620d1360f00cd040b4dcd84aa6d9cea.jpg"],

["film", ["Fresh"], "2022", ["2022 04 18"], 6, ["ger"], ["comedy", "horror"], [], ["Disney+"], ["Mimi Cave"], ["Sebastian Stan", "Dayo Okeniyi", "Charlotte Le Bon"], "https://64.media.tumblr.com/8c2dc7679697a4a7c75a5ee0204b9745/26ecd04184bdc377-d6/s250x400/edc2ad347e0a3513b44989b001123d4f41915246.jpg"],

["series", ["Bungou Stray Dogs"], ["2016", ""], [["2022 04 20", "2022 05 11", "S1"], ["2022 05 11", "2022 06 22", "S2"]], 4, ["ger"], ["anime", "action"], ["bini", "nico", "jessie"], ["ongoing", "dropped"], ["Kafka Asagiri", "Rob Blatt", "Lucien Dodge"], [], "https://64.media.tumblr.com/fb07bd593ca68940edb0d886c0258207/31d71ef7e0c0a4f5-c2/s250x400/d6f31d8693d30e7ae96f3b7182795de4daee0aba.jpg"],

["series", ["Ella Schön"], ["2018", ""], [["2022 04 24", "S5E1"]], 6, ["ger"], ["comedy", "drama"], ["syl", "je"], ["ongoing"], ["Simon X. Rost", "Simon X. Rost", "Elke Rössler"], ["Annette Frier"], "https://64.media.tumblr.com/46fc5587af74ddb4f79f0f9dc338e24e/f048541a454c5bad-55/s250x400/46e7350ead1d9e1716c2db6598497e40fb038e27.jpg"],

["book", ["Die drei ??? Kids 7: Gruft der Piraten"], "2000", [["2022 04 25", "2022 05 01"]], 7, ["ger"], [], [], ["Die drei ???", "bibliothek"], ["Ulf Blanck"], [], "https://64.media.tumblr.com/76b1f777dfc0fb89c5ad8c53586721e1/8d07670ca5b77157-68/s250x400/8f912755974d94d3b791d6c40d746c044071c4fb.jpg"],

["film", ["Slumdog Millionaire", "Slumdog Millionär"], "2008", ["2022 04 28"], 0, ["ger"], ["drama", "romance"], [], [], ["Danny Boyle", "Loveleen Tandan"], ["Dev Patel", "Irrfan Khan"], "https://64.media.tumblr.com/8492f47674370ff6d2b90f3c7d0d52b7/8968561d519a3d9b-2d/s250x400/faecb34b9870ccb5fac446f8c79a130ef96150a8.jpg"],

["audiobook", ["Das Haus der Mädchen"], "2018", [["2022 04 30", "2022 05 01", "C2-C3"]], 8, ["ger"], [], ["bini", "syl", "je"], [], ["Andreas Winkelmann"], ["Simon Jäger"], "https://64.media.tumblr.com/0a2b04057cafa5510dc5b7571fb0f7d2/9a81f7692f426342-77/s250x400/06f21c73bc581fa76a2b977657305217277c81be.jpg"],

["book", ["Maniac Magee", "East End, West End und dazwischen Maniac Magee"], "1990", [["2022 05 01", "2022 05 15"]], 6, ["ger"], [], [], ["bibliothek"], ["Jerry Spinelli"], [], "https://64.media.tumblr.com/eba83b6d747fec37902bb193be553839/929dab40af472a01-98/s250x400/5ae720f5de4e6e5986b16bda63a78de08eb41a19.jpg"],

["film", ["Death on the Nile", "Tod auf dem Nil"], "2022", ["2022 05 05"], 7, ["ger"], ["crime", "drama"], [], ["Disney+"], ["Kenneth Branagh"], ["Orlando Seale", "Kenneth Branagh", "Sophie Okonedo", "Russell Brand", "Tom Bateman", "Hayat Kamille", "Emma Mackey", "Gal Gadot"], "https://64.media.tumblr.com/72633d92436cf4de74d217de6c0d4212/2dca79524f634bee-61/s250x400/8775fbd68a8bb15cf1f07008ca90720cb3b4f96c.jpg"],

["film", ["The Craft", "Der Hexenclub"], "1996", ["2022 05 08"], 8, ["ger"], ["drama", "fantasy"], [], ["Netflix"], ["Andrew Fleming"], ["Robin Tunney"], "https://64.media.tumblr.com/3c030d96f34af7187abad628feffb7fb/152a7307000bcfca-da/s250x400/e87c53c238f2e91b4359a42428a5c35df9260498.jpg"],

["series", ["Kuromukuro"], ["2016", ""], [["2022 05 10", "2022 06 14", "S1"]], 5, ["ger"], ["anime", "action", "sci-fi"], ["bini", "nico"], ["Netflix"], ["Ryô Higaki", "Touko Machida", "Shigeru Morita"], [], "https://64.media.tumblr.com/5dc1bba33bc30de0365fb24887f97ba9/8a3a9f83363f8eed-bf/s250x400/7cdebd1b00513201accf4d2a1b83d2f9ed4ba59a.jpg"],

["film", ["Barbie: A Fashion Fairytale", "Barbie - Modezauber in Paris"], "2010", ["2022 05 12"], 4, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["William Lau", "Conrad Helten"], [], "https://64.media.tumblr.com/cfda89295e0993031d7397841042d477/b51b464e46a8d6cf-29/s250x400/1aac97d73f0f2bd853c96b064ddc1a5a6f6f8da2.jpg"],

["film", ["Blutzbrüdaz"], "2011", ["2022 05 13"], 7, ["ger"], ["comedy", "music"], [], ["Netflix"], ["Özgür Yildirim"], ["Sido", "Milton Welsh", "Claudia Eisinger", "Alwara Höfels"], "https://64.media.tumblr.com/4ca559f579d51a92af4a71bc0cbb57fa/03eed2d068ee6165-82/s250x400/88b24e109b1a0de631a6a24a403d6d6ce3bdcc9a.jpg"],

["film", ["Senior Year"], "2022", ["2022 05 14"], 6, ["ger"], ["comedy", "drama"], ["bini"], ["Netflix"], ["Alex Hardcastle"], ["Rebel Wilson", "Angourie Rice", "Mary Holland", "Sam Richardson", "Tyler Barnhardt", "Chris Parnell", "Avantika", "Alicia Silverstone"], "https://64.media.tumblr.com/e4874346bf81cc9e8f2017aea54eea83/93ec6edd830ec73d-68/s250x400/060d5baf0eda3752d987a159a57c14ce6022e8ba.jpg"],

["film", ["Barbie as the Princess and the Pauper", "Barbie als die Prinzessin und das Dorfmädchen"], "2004", ["2022 05 15"], 4, ["ger"], ["animation", "comedy"], ["bini"], ["Barbie"], ["William Lau"], [], "https://64.media.tumblr.com/00fab86fabab0c0afeceaf71b96a095e/367e3e1f7dbd1955-43/s250x400/8a7581a40b3d167fac12f7db960b1e0d43227347.jpg"],

["series", ["Inventing Anna"], "2022", [["2022 05 16", "2022 06 10", "S1"]], 6, ["ger"], ["drama"], [], ["Netflix"], ["Carolyn Ingber", "Carolyn Ingber", "Nicholas Nardini"], ["Laverne Cox", "Caitlin FitzGerald"], "https://64.media.tumblr.com/cb01cf9b83dcf886eda4561f5cc72ec9/9ecbed59f65c1244-02/s250x400/7c85955cda88ca4d587136485d295a1859145dc5.jpg"],

["film", ["Freaks: You're One of Us", "Freaks - Du bist eine von uns"], "2020", ["2022 05 16"], 6, ["ger"], ["action", "drama"], [], ["Netflix"], ["Felix Binder"], ["Tim Oliver Schultz", "Wotan Wilke Möhring", "Daniel Zillmann"], "https://64.media.tumblr.com/11916506c255711cdc60b10c0381c229/2521ff8a2d6612d3-83/s250x400/4c89c54e4a13d0d94e864d2599f8f64f0787b26f.jpg"],

["book", ["Die Wilden Hühner"], "1993", [["2022 05 16", "2022 05 28"]], 5, ["ger"], [], [], ["bibliothek", "Die Wilden Hühner"], ["Cornelia Funke"], [], "https://64.media.tumblr.com/2f6dbd662a2354b7f8eeb43d401bb0f0/7efe93fbfc70075b-84/s250x400/c57bafa9dda3822df617c27adf6d47fc0afad6cb.jpg"],

["film", ["Full Out", "Die unglaubliche Geschichte der Ariana Berlin"], "2015", ["2022 05 20"], 4, ["ger"], ["biography", "drama"], [], ["Netflix"], ["Sean Cisterna"], [], "https://64.media.tumblr.com/e22e07199d69247c076510472ddae940/c0c26183ecffb028-fe/s250x400/7bf505beb989e61d21a0490a0c42403b9f8d4379.jpg"],

["film", ["The Addams Family: A New Musical"], "2021", ["2022 05 25"], 5, ["eng"], ["musical"], [], [], ["Jennifer Anderson Schramm"], [], "https://64.media.tumblr.com/adee1a4f29169493182d590bff539f90/5417c8a267fe85ad-22/s250x400/ae9f38ff2bddaa63a0f885d5eceae04e6100941f.jpg"],

["film", ["Detective Conan 24: The Scarlett Bullet", "Detektiv Conan 24: Die schrlachrote Kugel"], "2021", ["2022 05 25"], 5, ["ger"], ["anime", "action", "comedy", "drama", "mystery"], ["bini", "nico", "jessie"], ["Conan"], ["Tomoka Nagaoka"], [], "https://64.media.tumblr.com/5632929d93defd033fd0524cc84752be/d76168b4d0cc7437-24/s250x400/59140adb7aa1c0e95f2b2b0f00a43e89a6d2566a.jpg"],

["book", ["The Curious Incident of the Dog in the Night-Time", "Supergute Tage oder Die sonderbare Welt des Christopher Boone"], "2003", [["2022 05 29", "2022 06 21"]], 4, ["ger"], ["mystery"], [], ["bibliothek"], ["Mark Haddon"], [], "https://64.media.tumblr.com/caf8a0a7126121c52e7ee77b0f985f2d/33c9768d91bf334e-8c/s250x400/16dc686e160feb5798e42546ab633f5eb0a0910e.jpg"],

["film", ["Detective Conan 24: The Bride of Halloween", "Detektiv Conan 24: Die Braut von Halloween"], "2022", ["2022 05 31"], 7, ["ger"], ["anime", "action"], ["bini", "jessie"], ["Conan", "Kino"], ["Gosho Aoyama"], [], "https://64.media.tumblr.com/43ef2e95c848adcda15b8dae3b936f4b/d6cbbfef6cb475ef-81/s250x400/66157fc6d41342261948178fc66af3a60bc824bf.jpg"],

["film", ["La La Land"], "2016", [["2022 06 01", "2022 06 02"]], 6, ["ger"], ["comedy", "drama", "music"], [], ["bibliothek"], ["Damien Chazelle"], ["Ryan Gosling", "Emma Stone", "J.K. Simmons"], "https://64.media.tumblr.com/14db978cac7fe5d50c13b9a94562f9df/fbbd13374e35ee6c-42/s250x400/9dd4d737c85ab468ed1008d07f509b766471e1de.jpg"],

["film", ["Barbie and the Diamond Castle", "Barbie und das Diamantschloss"], "2008", ["2022 06 02"], 4, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Gino Nichele"], [], "https://64.media.tumblr.com/22bfe2c4377ae7244dee4917f3674765/73270d5b316f6f5d-77/s250x400/9bcfec3f04de7b246f8e18edab51b921287970f8.jpg"],

["short", ["While You Weren't Looking"], "2013", ["2022 06 03"], 6, ["eng"], ["adventure"], [], [], ["Jeremy Mackie"], [], "https://64.media.tumblr.com/dd975ef1817defdb47150a89e2ab5d8c/3216c66d448233fb-86/s250x400/046d53820db01db6284455a238eb4730f947f8ff.jpg"],

["film", ["Barbie: Fairytopia"], "2005", ["2022 06 06"], 3, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Walter P. Martishius", "William Lau"], [], "https://64.media.tumblr.com/e344f6008162a127bc928efe5679d2dd/814a2e186700ddcd-e5/s250x400/a29fceb62f7dc678c4ff4ad1878c01124474ae20.jpg"],

["film", ["Footloose"], "2011", ["2022 06 11"], 7, ["ger"], ["comedy", "drama"], ["syl"], [], ["Craig Brewer"], ["Julianne Hough", "Kim Dickens", "Ziah Colon", "Miles Teller", "Andie MacDowell"], "https://64.media.tumblr.com/4761d8978cb38cfd2e2533f2cda3c8cf/2625b51997a60fb3-2c/s250x400/dea733e5faac1f6dbac55b3c4271bd23252d0b87.jpg"],

["series", ["First Kill"], ["2022", ""], [["2022 06 15", "2022 06 23", "S1"]], 5, ["ger"], ["drama", "horror"], [], ["ongoing", "Netflix", "LGBT"], ["Bryce Ahart", "Bryce Ahart", "Stephanie McFarlane"], ["Imani Lewis", "Elizabeth Mitchell"], "https://64.media.tumblr.com/0bc6e9901559cefc60b3137b72fb599c/0b64e1a325c32917-17/s250x400/7fb33c938817662a452e0a257ae10e20bbd9ae66.jpg"],

["film", ["Ant-Man and the Wasp"], "2018", ["2022 06 16"], 7, ["ger"], ["action", "adventure"], ["je"], ["Marvel", "Disney+"], ["Peyton Reed"], ["Paul Rudd", "Evangeline Lilly", "Michael Peña", "Judy Greer", "Hannah John-Kamen", "Michelle Pfeiffer", "Randall Park", "Laurence Fishburne", "Stan Lee"], "https://64.media.tumblr.com/0b69fefa02c51b1c5e6d23b49db39851/dc3ce41b0c2b7478-df/s250x400/4a664e8059eddaeaeb20ec3bf08d2ef6848d99d8.jpg"],

["film", ["Barbie Fairytopia: Mermaidia", "Barbie - Fairytopia: Mermaidia"], "2006", ["2022 06 19"], 4, ["ger"], ["animation", "adventure"], ["bini"], ["Barbie"], ["William Lau", "Walter P. Martishius"], [], "https://64.media.tumblr.com/0e5ab9df5c76aac66639782b41778c9c/6db65b92cdd70fc3-6b/s250x400/fab5b9e72c80ef5fe6eb83b87f951cfe6c28e72d.jpg"],

["film", ["Hollywood Stargirl"], "2022", ["2022 06 20"], 6, ["ger"], ["comedy", "drama"], [], ["Disney+"], ["Julia Hart"], ["Grace VanderWaal", "Judy Greer", "Uma Thurman"], "https://64.media.tumblr.com/8d5bf17ba1ea5156cc0f58684bc2d676/05e3949bd4a878c7-d0/s250x400/233442e5a464b652671db42e025d4922cc9f0554.jpg"],

["film", ["Ride the Cyclone"], "2019", ["2022 06 20", "2023 07 28"], 9, ["eng"], ["musical"], [], [], ["Jacob Richmond", "Brooke Maxwell"], [], "https://64.media.tumblr.com/6fdde99368c6607bb175488e92bd7c9e/b1393f70ec05ffdc-82/s250x400/3a080007052d45177826e1c64d03e2376e7d68bb.jpg"],

["book", ["Children of Ruin", "Die Erben der Zeit"], "2019", [["2022 06 21", "2022 08 07", "C1.1-C6.3"], ["2022 09 20", "2022 11 06", "C6.4-C8.8"], ["2023 08 08", "2023 09 14", "C8.8-End"]], 0, ["ger"], ["sci-fi"], [], ["bibliothek"], ["Adrian Tchaikovsky"], [], "https://64.media.tumblr.com/2b1ee8a76c3973e12dd3f9cd72e915ab/e6e63613d34ff3fe-3d/s250x400/a24b1d059bd7f8f4f5cf4235184b4b3eb0af0df5.jpg"],

["film", ["Badhaai Do"], "2022", [["2022 06 25", "2022 07 01"]], 8, ["hin"], ["comedy", "crime"], ["bini", "mai"], ["Netflix"], ["Harshavardhan Kulkarni"], [], "https://64.media.tumblr.com/19e098aca5d66b71f930e075026752cc/f9329bfd238d17a4-06/s250x400/929c766a8486a8cd4766a1759fab59ec27788188.jpg"],

["film", ["Jurassic World Dominion", "Jurassic World: Ein neues Zeitalter"], "2022", ["2022 06 27"], 7, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Jurassic Park", "Kino"], ["Colin Trevorrow"], ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Sam Neill", "Jeff Goldblum", "Isabella Sermon", "BD Wong", "Omar Sy", "Justice Smith"], "https://64.media.tumblr.com/a17b5b0f69d8aa483647f331cf9579db/b2e654facb5ceb76-c2/s250x400/62605a9f58fd3a8df44e7aec99ad1b6b97124c3f.jpg"],

["series", ["Encouragement of Climb", "Encouragement of Climb", "Yama no Susume"], ["2013", "2018"], [["2022 06 28", "S1"], ["2022 06 28", "Special"]], 7, ["jap"], ["anime", "adventure"], ["bini", "nico"], ["ongoing"], ["Kazuyuki Fudeyasu", "Yûsuke Yamamoto"], [], "https://64.media.tumblr.com/4b6363e01817e76056f937d9096e7de8/edfa00da095d3fae-fb/s250x400/3ae875cfc0895dec1f00ade6ab41f93a7cac14dd.jpg"],

["series", ["Daily Lives of High School Boys", "Daily Lives of High School Boys", "Danshi Koukousei no Nichijou"], ["2012", ""], [["2022 06 28", "2022 07 12", "S1"]], 8, ["jap"], ["anime", "comedy"], ["bini", "nico"], ["ongoing"], ["Shinji Takamatsu", "Yasunobu Yamauchi"], [], "https://64.media.tumblr.com/26d49f29a8035bc04fdf773a00cd1ab8/6aff97a1f7ecee60-c2/s250x400/34ae2095612fe15bff444eb3cdf112c8f748a6e9.jpg"],

["series", ["Patema Inverted: Beginning of the Day", "Patema Inverted: Beginning of the Day", "Sakasama no Patema: Beginning of the Day"], "2012", [["2022 06 29", "S1"]], 6, ["jap"], ["anime", "sci-fi"], ["bini", "nico"], [], ["Yasuhiro Yoshiura"], [], "https://64.media.tumblr.com/d95f87eb5a5138a7315d2aca3973974b/d0486813ffd5d781-af/s250x400/1751b6f4a282489119769f26e2f800fc1576b012.jpg"],

["film", ["Das Haus der Krokodile"], "2012", ["2022 07 03"], 6, ["ger"], ["adventure", "family"], [], ["Disney+"], ["Cyrill Boss", "Philipp Stennert"], ["Christoph Maria Herbst", "Gudrun Ritter"], "https://64.media.tumblr.com/2f92348d747c323142902a89f73c6dc1/a04e1350014f3bc5-ef/s250x400/495471fe5decd5ac9884dcc310d7233b98825abf.jpg"],

["film", ["Love You To Death"], "2019", ["2022 07 05"], 6, ["eng"], ["drama"], [], ["Netflix"], ["Alex Kalymnios"], ["Marcia Gay Harden", "Heather Doerksen", "Kayla Deorksen", "Kurt Ostlund"], "https://64.media.tumblr.com/e6d8308c4afb8f7d3bac1b967a781b0c/b822db2ee4679eff-93/s250x400/6b17c8cef6117edbf6eda1b48785ca091d533749.jpg"],

["film", ["Resident Evil: The Final Chapter"], "2016", [["2022 07 05", "2022 07 06"]], 4, ["ger"], ["action", "horror"], ["je"], ["Resident Evil", "Netflix"], ["Paul W.S. Anderson"], ["Milla Jovovich", "Iain Glen"], "https://64.media.tumblr.com/3998254cd1aa65fba2d5ba52114f2075/7baf178d5433889e-64/s250x400/b9d52ebce24dbb9ccc53b907e6dc57c8037665e4.jpg"],

["series", ["The Owl House", "Willkommen im Haus der Eulen"], ["2020", ""], [["2022 07 07", "2022 07 28", "S1E1-S1E9"]], 6, ["ger"], ["animation", "action"], [], ["ongoing", "Disney+", "dropped"], ["Dana Terrace"], [], "https://64.media.tumblr.com/57560f9dd0c4ac1af7ab3ca6bfc0b1ee/213ff5737007a5ca-30/s250x400/293183e8f7c50ee152511deaa4635729604edeb4.jpg"],

["film", ["Barbie: Princess Charm School", "Barbie: Die Prinzessinnen-Akademie"], "2011", ["2022 07 08"], 5, ["ger"], ["animation", "family"], ["bini", "je"], ["Barbie"], ["Ezekiel Norton"], [], "https://64.media.tumblr.com/9569406e7c7e191767c2873b3e8b7947/3f54bb043aa7649c-6e/s250x400/30b063e6476d3e8f6eb9dac24063acb38bdb0a0d.jpg"],

["film", ["How I Became A Superhero", "Wie ich ein Superheld wurde", "Comment je suis devenu super-héros"], "2020", ["2022 07 08"], 5, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Douglas Attal"], [], "https://64.media.tumblr.com/faa436e6364e83f2fb3f22181fce4a42/b427591ac125f23d-88/s250x400/c5f5be06553a197182293d8406b3fdaf8e8c1881.jpg"],

["film", ["Snow White and the Huntsman"], "2012", ["2022 07 11"], 5, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Rupert Sanders"], ["Kristen Stewart", "Chris Hemsworth", "Sam Claflin", "Nick Frost", "Eddie Marsan", "Toby Jones", "Izzy Meikle-Small", "Charlize Theron"], "https://64.media.tumblr.com/01a81980c77fffb1db98028e0f4872d6/c72bd3ed735bc05e-ce/s250x400/4183d6fd7abeff0f40329d2325f79836dba86d8f.jpg"],

["film", ["The Prom"], "2020", ["2022 07 12"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ryan Murphy"], ["Meryl Streep", "James Corden", "Nicole Kidman", "Andrew Rannells", "Ariana DeBose"], "https://64.media.tumblr.com/a416609dc8e02442b20d999ca7300bdd/ecdfa9cb8088d2e0-51/s250x400/f219f89f60e6fbda13c0273298977839d0ec8bf5.jpg"],

["film", ["Barbie: Spy Squad"], "2016", ["2022 07 14"], 6, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Michael Goguen", "Conrad Helten"], [], "https://64.media.tumblr.com/9a9bac791815f69afa43ae2a68f1ea8e/0f829cd39c63191f-e6/s250x400/da8898d62860eee6a4434c139f066314b6608c96.jpg"],

["film", ["Sometimes There is Joy, Sometimes There is Sorrow...", "In guten wie in schweren Tagen", "Kabhi Khushi Kabhie Gham..."], "2001", [["2022 07 16", "2022 07 23"]], 8, ["hin"], ["drama", "bollywood"], ["bini", "mai"], ["Netflix"], ["Karan Johar"], ["Amitabh Bachchan", "Jaya Bachchan", "Shah Rukh Khan", "Kajol", "Hrithik Roshan", "Kareena Kapoor", "Farida Jalal", "Jibraan Khan", "Rani Mukerji"], "https://64.media.tumblr.com/9c765020e36e3f5d8e4e15306ab5a24e/db297b34d02b1f44-72/s250x400/3876e7c98b0a916cc29ed12a895d91a9c1e94140.jpg"],

["film", ["Six"], "2017", ["2022 07 21"], 8, ["eng"], ["musical", "comedy"], [], [], ["Toby Marlow", "Lucy Moss"], ["Adrianna Hicks", "Andrea Macasaet", "Abby Mueller", "Brittney Mack", "Samantha Pauly", "Anna Uzele"], "https://64.media.tumblr.com/ec8a47826eb42579aff4cf28007b9fad/209a9ed6b26ef6cb-51/s250x400/7ef1c3d98b0bbe2dc6be451e67147b79f33ae75c.jpg"],

["film", ["Barbie & Her Sisters in a Puppy Chase", "Barbie und ihre Schwestern in Die große Hundesuche"], "2016", ["2022 07 23"], 3, ["ger"], ["animation"], ["bini"], ["Barbie"], ["Ken Cunningham", "Conrad Helten", "Michael Goguen"], [], "https://64.media.tumblr.com/7ac7d3641e607653d29b2616917bc4e4/99a28142e0e2a89c-73/s250x400/39255ccdc274cd6f82a0fdc31a87e49043b8fe40.jpg"],

["film", ["Barbie: Big City, Big Dreams", "Barbie - Bühne frei für große Träume"], "2021", ["2022 07 23"], 3, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Scott Pleydell-Pearce"], [], "https://64.media.tumblr.com/6edd943045dac1367083383ee48c3c86/afdb978a6a9afcb4-ff/s250x400/d89dfbbcd4a114c3e7497c9251143a93c2924d2b.jpg"],

["film", ["Grace VanderWaal: Don't Assume What You Don't Know"], "2022", ["2022 07 17"], 4, ["eng"], ["documentary"], [], [], ["Mark Lalonde", "Clare Weitzel"], ["Grace VanderWaal"], "https://64.media.tumblr.com/d649f74c4ad7417713e55668376ae8bf/f7d787bc456c3b46-41/s250x400/b8d69822ae8d85b95d9fb816551b61f38563b2a2.jpg"],

["film", ["Lupin III vs. Detective Conan: The Movie", "Lupin III vs. Detektiv Conan: The Movie", "Rupan Sansei vs Meitantei Conan: The Movie"], "2013", [["2022 07 24", "2022 07 30"]], 6, ["ger"], ["anime", "action"], ["bini"], ["Conan"], ["Hajime Kamegaki"], [], "https://64.media.tumblr.com/e4d67e2b90f2129d95c8e8beb703f71d/f170322f9a32a754-7e/s250x400/9305129474fddacb2e27e6ac3e6085171c8ff3ce.jpg"],

["series", ["Watashitachi, Luck Logic-bu!"], "2016", [["2022 07 26", "S1"]], 2, ["jap"], ["anime", "comedy"], ["bini", "nico"], [], [], [], "https://64.media.tumblr.com/0d665fc67e8b05a2e45622708d039d03/4cd036f117d446b9-b4/s250x400/1a09f69f4002ea697ecabf99923c0c922021388f.jpg"],

["series", ["This Art Club Has a Problem!", "This Art Club Has a Problem!", "Kono Bijutsubu ni wa Mondai ga Aru!"], "2016", [["2022 07 26", "2022 08 23", "S1"]], 5, ["jap"], ["anime", "comedy"], ["bini", "nico"], [], ["Naruhisa Arakawa"], [], "https://64.media.tumblr.com/fb082eab0ede5084a1255a6b3068f4c7/702040a97ac8e493-6b/s250x400/0ae4fc8e97e0be2ff3b38a638e5aaa578ada92e4.jpg"],

["series", ["Alexa & Katie"], ["2018", "2020"], [["2022 07 28", "2022 08 10", "S1"], ["2022 08 10", "2022 08 11", "S2"], ["2022 08 12", "2022 08 14", "S3"], ["2022 08 15", "S4"]], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Heather Wordham"], ["Eddie Shin", "Kerri Medders", "Ricky Garcia", "Paris Berelc"], "https://64.media.tumblr.com/3523d6c555974fa7204b5415c6ff875f/7e918a340ca5dfb1-25/s250x400/f466cff809df87ba6fab4114501c18f21b084765.jpg"],

["film", ["Murder on the Orient Express", "Mord im Orient-Express"], "2017", ["2022 07 28"], 6, ["ger"], ["crime", "drama"], [], ["Disney+"], ["Kenneth Branagh"], ["Kenneth Branagh", "Johnny Depp", "Lucy Boynton", "Marwan Kenzari", "Michelle Pfeiffer", "Judi Dench", "Willem Dafoe", "Leslie Odom Jr.", "Tom Bateman", "Penélope Cruz", "Hayat Kamille"], "https://64.media.tumblr.com/9098c2a907b25102c1ce4edcea5fb149/98061f95a99e5123-d6/s250x400/39314062321bd07948053cbed8513c02e961d8c7.jpg"],

["film", ["Crush"], "2022", ["2022 07 28"], 6, ["ger"], ["comedy", "romance"], [], ["Disney+"], ["Sammi Cohen"], ["Rowan Blanchard", "Aasif Mandvi", "Isabella Ferreira", "Tyler Alvarez", "Rico Paris", "Michelle Buteau", "Megan Mullally"], "https://64.media.tumblr.com/6e15c717bf94ad2c7be0665a85bea941/51380dfd1d4e9ed4-34/s250x400/34c733526810da4323e9c573c30f6a91bc1c23a2.jpg"],

["film", ["The Magic Kids: Three Unlikely Heroes", "Die Wolf-Gäng"], "2020", ["2022 07 29"], 5, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Tim Trageser"], ["Axel Stein", "Sonja Gerhardt"], "https://64.media.tumblr.com/1431cf5e3c91e8fce062badfc6fd3187/2b631af99ddf4859-a2/s250x400/917b1b19eb30ed7ca5ca5b969eec19566a8b12b9.jpg"],

["film", ["Tall Girl 2", "Wie Jodi über sich hinauswuchs 2"], "2022", ["2022 07 29"], 5, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Emily Ting"], ["Ava Michelle", "Griffin Gluck", "Sabrina Carpenter", "Steve Zahn"], "https://64.media.tumblr.com/b5d6e1a42c33d7f65b48c0bb5118d520/210923677ed7c02d-26/s250x400/ca63dc3eafa64dc64761a45a08853d659e32b52f.jpg"],

["film", ["Tomorrowland", "A World Beyond"], "2015", [["2022 07 29", "2022 07 30"], "2022 12 31"], 8, ["ger"], ["action", "adventure"], ["bini", "je", "syl"], ["Disney+"], ["Brad Bird"], ["George Clooney", "Britt Robertson", "Raffey Cassidy", "Kathryn Hahn", "Keegan-Michael Key", "Judy Greer"], "https://64.media.tumblr.com/10c4b627ffa0808d5ca374041b62b0f6/b4c6bf37c2b96239-cb/s250x400/44c4bef09625d3db3a043e0554779632ef4a481e.jpg"],

["film", ["Parasite", "Parasite", "Gisaengchung"], "2019", ["2022 07 30"], 8, ["kor"], ["comedy", "drama"], ["bini"], ["Netflix"], ["Bong Joon Ho"], [], "https://64.media.tumblr.com/f87320721485509c37e844d78bec3fed/35849b781278970d-7b/s250x400/91412679d247ea28eaf792d4fca21353ef3d4152.jpg"],

["film", ["Horse Girl"], "2020", ["2022 07 30"], 6, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["Jeff Baena"], ["John Ortiz", "Robin Tunney", "Matthew Gray Gubler", "Debby Ryan", "Paul Reiser"], "https://64.media.tumblr.com/8acbb4247ce63564049c0fd063ea91d8/38432b0d8b0f598c-c9/s250x400/b04a79a83f0f8bbc8ff08457c64308dcbcba945a.jpg"],

["film", ["A Bug's Life", "Das große Krabbeln"], "1998", ["2022 07 31"], 5, ["ger"], ["animation", "adventure"], [], ["Disney+"], ["John Lasseter", "Andrew Stanton"], [], "https://64.media.tumblr.com/5e589366d1425845fbbb9441f874597a/72c7db779a56b5db-44/s250x400/6c7a15af865660bd371f20bffd5d347afffd7043.jpg"],

["film", ["Minority Report"], "2002", ["2022 08 01"], 6, ["ger"], ["action", "crime"], [], ["Netflix"], ["Steven Spielberg"], ["Tom Cruise", "Max von Sydow", "Jessica Capshaw", "Peter Stormare", "Tim Blake Nelson"], "https://64.media.tumblr.com/b58c461a00ff5953bbf6c1a916166d56/9e54af70e1d7e586-47/s250x400/ef455ce5678e330de5ad7a6d29cfdbf92c998597.jpg"],

["film", ["The Italian Job", "The Italian Job - Jagd auf Millionen"], "2003", ["2022 08 01"], 7, ["ger"], ["action", "crime"], [], ["Netflix"], ["F. Gary Gray"], ["Mark Wahlberg", "Charlize Theron", "Donald Sutherland", "Edward Norton", "Jason Statham"], "https://64.media.tumblr.com/39836f80ba8b55cc13f6fb749390ec8c/54e6bac5fe283f50-ad/s250x400/5a68a3fb217fc1568f8325313ae9fbc81e8391b9.jpg"],

["film", ["Turning Red", "Rot"], "2022", ["2022 08 01"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl"], ["Disney+"], ["Domee Shi"], [], "https://64.media.tumblr.com/455c642f339aaf38215ad334054d8c4b/454a4340d4d2d671-28/s250x400/b19aa66857ac32e59a77f5b47683dbaa22fc2286.jpg"],

["film", ["Freche Mädchen 2"], "2010", ["2022 08 02"], 5, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ute Wieland"], ["Emilia Schüle", "Selina Shirin Müller", "Henriette Nagel", "Anke Engelke"], "https://64.media.tumblr.com/4426bcb3a3e341d055d9d7a72cf1d10b/286d77f0c07a7261-6a/s250x400/1afcf23b6b986b7865e97edac5f168faa8a5a888.jpg"],

["film", ["Encanto"], "2021", ["2022 08 02", "2022 10 22", "2024 01 02"], 9, ["ger", "eng"], ["animation", "comedy"], ["bini"], ["Disney+"], ["Jared Bush", "Byron Howard", "Charise Castro Smith"], [], "https://64.media.tumblr.com/5f9c13c7445e01de7b382aaae6a31921/4495bb7c932a9f0b-36/s250x400/d129a608a68b4bda3d6ea00d784810ff186f3b04.jpg"],

["film", ["Weathering With You", "Weathering With You - Das Mädchen, das die Sonne berührte", "Tenki no ko"], "2019", ["2022 08 02"], 7, ["ger"], ["anime", "drama"], ["bini", "nico"], ["Netflix"], ["Makoto Shinkai"], [], "https://64.media.tumblr.com/e6e1e85e1f5cc156bc0d9aac743f2b5d/ebd7bb6941348b39-54/s250x400/0d4ad9cfafaaade7bddc118598a88c9dec880be2.jpg"],

["film", ["Fantastic Four"], "2015", ["2022 08 03"], 0, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Josh Trank", "Stephen E. Rivkin"], ["Miles Teller", "Michael B. Jordan", "Kate Mara", "Jamie Bell", "Tim Blake Nelson", "Rhonda Johnson Dents"], "https://64.media.tumblr.com/2f2f2c9ea8280921bc601d2548272953/4dcf1b234a9ba9c8-9d/s250x400/25cde492210a031331ef9907d74f89188f2b2eb1.jpg"],

["film", ["The Gray Man"], "2022", ["2022 08 03"], 7, ["ger"], ["action", "thriller"], [], ["Netflix"], ["Anthony Russo", "Joe Russo"], ["Ryan Gosling", "Chris Evans", "Jessica Henwick", "Ana de Armas"], "https://64.media.tumblr.com/fec6763ab3a8ce4a5296f538b2f4154f/2d214e5956d59396-b0/s250x400/07eb72e38047117024cce961ce8bbf039e578cdf.jpg"],

["film", ["The King's Man"], "2021", [["2022 08 03", "2022 08 05"]], 6, ["ger"], ["action", "adventure"], ["syl"], ["Disney+"], ["Matthew Vaughn"], ["Djimon Hounsou", "Daniel Brühl", "Stanley Tucci", "Ralph Fiennes", "Matthew Goode", "Charles Dance"], "https://64.media.tumblr.com/9dd0fbf74035e880b51f58b8d5b5428d/fd12193843615954-21/s250x400/26ae7e753d9455b229230273372a1740f9923a7b.jpg"],

["audiobook", ["The Scarecrow of Oz", "Die Vogelscheuche von Oz"], "1915", [["2022 08 03", "2022 09 01"]], 4, ["eng"], [], [], ["Oz", "LibriVox"], ["L. Frank Baum"], ["Abigail & Adam Flach", "Robert Flach", "Allyson Hester", "Jamie Wilking", "Kirsten Ferreri", "Chip Joel", "Ezwa", "Claire Goget", "Henry Frigon", "Hugh McGuire", "Stephanie König", "Mark F. Smith", "Kevin McAsh", "Ken Crooker", "Laura Brodrick", "Ada Kerman", "Michael Yard", "Lizzie Driver", "Saul", "Jason Isbell", "Susie G.", "Talia Fishman"], "https://64.media.tumblr.com/ac1c974bedc91e497a918afb6d0aaf28/c73d498d6958fd33-44/s250x400/0b7dbc3a7a93d0b2663af514fcce5e0b796516be.jpg"],

["film", ["The Highwaymen"], "2019", ["2022 08 04"], 7, ["ger"], ["biography", "crime"], [], ["Netflix"], ["John Lee Hancock"], ["Woody Harrelson", "John Carroll Lynch", "Thomas Mann", "Kim Dickens"], "https://64.media.tumblr.com/53e8559fb4f2f8e8a30b6d76ec2e860f/e86a3b2fc061ef5d-6e/s250x400/4a2a064a65a0c8a0e2f02b056e6dc5f3723738ef.jpg"],

["film", ["Bruder vor Luder"], "2015", ["2022 08 04"], 4, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Tomas Erhart", "Heiko Lochmann", "Roman Lochmann"], ["Axel Stein"], "https://64.media.tumblr.com/d8ccda001bad8de850e5cc3efb3f5829/e486b33a47553893-8c/s250x400/1f73464ca8823f5683b2cf2a05b00584f7b7b75d.jpg"],

["film", ["The Adam Project"], "2022", ["2022 08 05"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Shawn Levy"], ["Ryan Reynolds", "Mark Ruffalo", "Jennifer Garner", "Zoe Saldana"], "https://64.media.tumblr.com/2ed029bf80258de07c6f966ab364cdc5/cac206cfe81fb7d2-9a/s250x400/65881d61670bfcd23165c2c2b4989a0b0af02169.jpg"],

["series", ["Heirs of the Night", "Die Erben der Nacht"], ["2019", ""], [["2022 08 08", "2022 08 24", "S1"]], 4, ["ger"], ["fantasy", "horror"], [], ["Disney+", "ongoing"], ["Diederik Van Rooijen"], [], "https://64.media.tumblr.com/105150de39114a96c29cbcb3851954c0/7765bfae6eb4a1ec-e1/s250x400/c0fbd6047dbb2dbdb92bb423b52ba31279c6b144.jpg"],

["film", ["Middle School: The Worst Years of My Life", "School Survival: Die schlimmsten Jahre meines Lebens"], "2016", ["2022 08 09"], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Steve Carr"], ["Griffin Gluck", "Lauren Graham"], "https://64.media.tumblr.com/0ecfefef94c12761e116eb6b73016acf/3d46f6f3e23949b5-26/s250x400/c104eb3cebe152faa199f9072e253f0e30c9ac60.jpg"],

["film", ["The Village", "The Village - Das Dorf"], "2004", ["2022 08 11", "2022 10 23"], 8, ["ger"], ["drama", "mystery", "thriller", "horror"], ["bini", "je"], ["Disney+"], ["M. Night Shyamalan"], ["Bryce Dallas Howard", "Joaquin Phoenix", "Adrien Brody", "Sigourney Weaver", "Brendan Gleeson", "Cherry Jones", "Judy Greer", "Fran Kranz", "Jesse Eisenberg"], "https://64.media.tumblr.com/347c473c43beb5b269fc3db0f8141a85/b1a5697de1a28afe-9d/s250x400/7934131e68cac8d38c565322925e1a266075f434.jpg"],

["film", ["Day Shift"], "2022", ["2022 08 12"], 5, ["ger"], ["action", "comedy"], ["bini"], ["Netflix"], ["J.J. Perry"], ["Jamie Foxx", "Dave Franco", "Oliver Masucci", "Snoop Dogg", "Peter Stormare"], "https://64.media.tumblr.com/0e1d7f73af59409d652a71d0ec66d3a3/dfa390d50b720080-69/s250x400/ff99c65b08eeadc8485a79e7d2cead492f54f600.jpg"],

["book", ["Die Wilden Hühner auf Klassenfahrt"], "1996", [["2022 08 16", "2022 08 30"]], 6, ["ger"], [], [], ["bibliothek", "Die Wilden Hühner"], ["Cornelia Funke"], [], "https://64.media.tumblr.com/80c66240bce785ad40d8beea915c2083/28a794b62581dc6c-da/s250x400/e9050b9aad3148a756541bfae20bb51087831411.jpg"],

["series", ["Boy Meets World", "Das Leben und ich"], ["1993", "2000"], [["2022 08 21", "2022 08 29", "S1"], ["2022 08 29", "2022 09 11", "S2"], ["2022 10 03", "2022 11 06", "S3"], ["2022 11 10", "2022 12 27", "S4"], ["2023 01 29", "2023 02 05", "S5"], ["2023 04 04", "2023 04 10", "S6"], ["2023 08 04", "2023 08 21", "S7"]], 6, ["ger"], ["comedy", "drama"], [], ["Disney+"], ["Michael Jacobs"], ["Ben Savage", "William Daniels", "Betsy Randle", "Rider Strong", "William Russ", "Danielle Fishel", "Lindsay Ridgeway", "Anthony Tyler Quinn", "Lily Gibson", "Lee Norris"], "https://64.media.tumblr.com/fc0d57e3c3386b084d0e89b0456d7b75/6afd8f2f29acf24c-c6/s250x400/6fe3fe1189a4d09a9f5312fe92f9d7a8d33ab169.jpg"],

["film", ["Z-O-M-B-I-E-S", "Zombies - Das Musical"], "2018", ["2022 08 25"], 5, ["ger"], ["family", "musical"], [], ["Disney+"], ["Paul Hoen"], ["Milo Manheim", "Meg Donnelly"], "https://64.media.tumblr.com/872f8f06df5b500939e5870fdd0d4ce4/14a080293eb78a81-04/s250x400/55213a056e85af0b98bb3456d63a3d1cb0a319bc.jpg"],

["film", ["Z-O-M-B-I-E-S 2", "Zombies 2"], "2020", ["2022 08 25"], 5, ["ger"], ["family", "musical"], [], ["Disney+"], ["Paul Hoen"], ["Milo Manheim", "Meg Donnelly"], "https://64.media.tumblr.com/a282988f451a9f32e7216d8b8dcca5bc/5ec189f6287eb689-bc/s250x400/753c6e890b96968a184ec67db5fd407a8d202525.jpg"],

["film", ["Z-O-M-B-I-E-S 3", "Zombies 3"], "2022", ["2022 08 25"], 6, ["ger"], ["family", "musical"], [], ["Disney+"], ["Paul Hoen"], ["Milo Manheim", "Meg Donnelly"], "https://64.media.tumblr.com/89536d3a15adcc5b2049c2ce136f70da/a766474ff10672b0-0a/s250x400/10e1f65145ee97eb63158d33a58140c897055b06.jpg"],

["film", ["Anna and the Apocalypse", "Anna und die Apokalypse"], "2017", ["2022 08 30"], 6, ["ger"], ["comedy", "horror", "musical"], [], ["Netflix"], ["John McPhail"], ["Sarah Swire"], "https://64.media.tumblr.com/7d1d0276848a82ee59621c5795c52a89/805def8d50859b11-05/s250x400/29b9c434c9e67c079f8a927a060157eec00b469e.jpg"],

["film", ["Her"], "2013", ["2022 08 31"], 5, ["eng"], ["drama", "romance"], [], ["bibliothek"], ["Spike Jonze"], ["Joaquin Phoenix", "Amy Adams", "Chris Pratt", "Rooney Mara", "Olivia Wilde"], "https://64.media.tumblr.com/cc8681e22f5f6b7605008667fb5d15ef/152400b51030905c-f6/s250x400/2822127d534d7a110ce8f2dcdf2054f31a8c9e96.jpg"],

["book", ["Turtles All the Way Down", "Schlaft gut, ihr fiesen Gedanken"], "2017", [["2022 08 31", "2022 09 19"]], 7, ["eng"], ["young adult"], [], ["bibliothek"], ["John Green"], [], "https://64.media.tumblr.com/33269ba2a869370b54d6a36d35e767ad/af483c7bc4b54628-95/s250x400/c05977355374b3322ce8ceafb44737fec1f9d288.jpg"],

["film", ["Groundhog Day", "Und täglich grüßt das Murmeltier"], "1993", ["2022 08 31"], 6, ["ger"], ["comedy", "drama"], [], ["bibliothek"], ["Harold Ramis"], ["Bill Murray", "Andie MacDowell"], "https://64.media.tumblr.com/9a33c52b57f56e23e3f51f4a640686f8/24687f4f0ba96df9-b0/s250x400/5bd4b55279d11ae79f31491b66e3e19d1e4d4769.jpg"],

["audiobook", ["Dead Men Tell Tales"], "1939", [["2022 09 02", "2022 09 12"]], 6, ["eng"], [], [], ["LibriVox"], ["Harry Rimmer"], ["Maria Agustina Von", "josephineking", "roselbex", "Owlivia", "Ryan Lohner", "BrandonB", "KHand", "MichelleKinge"], "https://64.media.tumblr.com/cd060d321a7738d9b0f8d103c1ee637b/104fb591d360372b-5c/s400x600/1400b273498cfd6725f6694b8eb596b83c402d39.jpg"],

["film", ["13: The Musical", "13: Das Musical"], "2022", ["2022 09 04"], 6, ["ger"], ["comedy", "drama", "musical"], [], ["Netflix"], ["Tamra Davis"], ["Josh Peck", "Khiyla Aynne"], "https://64.media.tumblr.com/8da84e2fee987a2597a77e797d7de365/98050ca1aac85501-89/s250x400/962eeed633a54075b7a75d06e3d5ead87a1ce500.jpg"],

["series", ["Spare Me, Great Lord!", "Da Wang Rao Ming", "Da Wang Rao Ming"], ["2021", ""], [["2022 09 06", "2022 09 26", "S1"]], 3, ["man"], ["action", "adventure", "animation"], ["bini", "nico"], ["ongoing"], [], [], "https://64.media.tumblr.com/366d6014357ba05e1fc750ba15ffcd02/497b2ccbfbf6dc4e-f0/s250x400/15219bc858f14cfc63f12e88e89f32f5f23d9503.jpg"],

["film", ["Bubble"], "2022", ["2022 09 07"], 6, ["ger"], ["anime", "action"], ["bini", "jessie"], ["Netflix"], ["Tetsurô Araki"], [], "https://64.media.tumblr.com/d7626f3a5032579ef01af7d379539bde/dd55da0ce447a11e-6d/s250x400/2a094b38ee66fb3447d698095d7a95814576a7c4.jpg"],

["audiobook", ["Silber - Das erste Buch der Träume"], "2013", [["2022 09 13", "2022 09 22"]], 7, ["ger"], [], [], ["bibliothek"], ["Kerstin Gier"], ["Simona Pahl"], "https://64.media.tumblr.com/321096c84ee0bc857df885235a44ca5e/b2118a186370cdaf-7e/s400x600/279de0dcee13a4a9b21b0e17a6eff8a9f4d2d421.jpg"],

["film", ["The Takedown", "Ein MordsTeam ermittelt wieder", "Loin du périph"], "2022", [["2022 09 16", "2022 09 17"]], 5, ["ger"], ["action", "comedy"], ["bini", "syl", "je"], ["Netflix"], ["Louis Leterrier"], ["Omar Sy"], "https://64.media.tumblr.com/380466e4210fd631c390c53f78dabfb3/cbe10a080ff5490e-b1/s250x400/eccfdc59427ccc68aa6e7d874ad40423633c75e3.jpg"],

["audiobook", ["Project Hail Mary", "Der Astronaut"], "2021", [["2022 09 22", "2022 10 04"]], 9, ["ger"], ["sci-fi"], [], ["bibliothek"], ["Andy Weir"], ["Richard Barenberg"], "https://64.media.tumblr.com/0ddda7bf2f0b5eee73e72d266acf8087/043eec8401f925e9-e5/s250x400/9a69930348a1851c2f04126c000ffa0250f4a50c.jpg"],

["series", ["Miss Kobayashi's Dragon Maid", "Miss Kobayashi's Dragon Maid", "Kobayashi-san Chi no Maid Dragon"], ["2017", "2022"], [["2022 09 29", "2022 10 19", "S1"]], 0, ["jap"], ["anime", "comedy", "fantasy", "slice of life"], ["bini", "jessie"], [], ["Coolkyoushinja", "Yuka Yamada"], [], "https://64.media.tumblr.com/18ba8f94a8acde4807ae4dabaf0ff8f0/a0fe5779aca8a63a-aa/s250x400/f7c53bdbf9d239f01ba3b916749d3805b9d51c2a.jpg"],

["series", ["Cyberpunk: Edgerunners"], "2022", [["2022 10 03", "2022 10 10", "S1"]], 7, ["ger"], ["anime", "action", "sci-fi"], ["bini", "nico"], ["Netflix"], ["Rafal Jaki"], [], "https://64.media.tumblr.com/e4ed827970b29bb1ec7c6ce446e06109/a79cb184e7fe9ce6-94/s250x400/7ca0f1d7bb23260850c11c0b65b31f1ba8b7e739.jpg"],

["audiobook", ["Silber – Das zweite Buch der Träume"], "2014", [["2022 10 05", "2022 10 12"]], 7, ["ger"], [], [], ["bibliothek"], ["Kerstin Gier"], ["Simona Pahl"], "https://64.media.tumblr.com/697c07780faf1c2bb0fa1e8d85bacf4f/abc93a13bde57ee7-4d/s250x400/cb14e96ee4c939e4713652514507315dab4b22da.jpg"],

["audiobook", ["Travels into Several Remote Nations of the World. In Four Parts. By Lemuel Gulliver, First a Surgeon, and then a Captain of Several Ships", "Gullivers Reisen"], "1726", [["2022 10 12", "2022 10 13"]], 6, ["ger"], ["satire"], [], ["bibliothek"], ["Jonathan Swift"], ["Helmut Krauss", "Friedhelm Ptok", "Joachim Nottke"], "https://64.media.tumblr.com/840c83b2d343ddd670af5973eca3fcb8/40c0d0351b158cfd-00/s250x400/dcf95621efa632238944776f59217b9fa7ba6dac.jpg"],

["audiobook", ["Awaken", "Die Rebellion der Maddie Freeman"], "2011", [["2022 10 13", "2022 10 19"]], 4, ["ger"], [], [], ["bibliothek", "ongoing"], ["Katie Kacvinsky"], ["Marie Bierstedt"], "https://64.media.tumblr.com/f5cfb3744f147ce7594a6c72624528e2/057b8932ae6687b1-1a/s250x400/d1d5db00caa187a49928156e0b7caa39e650b2b5.jpg"],

["film", ["Drifting Home", "Drifting Home", "Ame wo Tsugeru Hyôryû Danchi"], "2022", ["2022 10 15"], 8, ["ger"], ["anime", "adventure"], ["bini", "mai"], ["Netflix"], ["Hiroyasu Ishida"], [], "https://64.media.tumblr.com/1d754688421dd4c63efbf0cb912e99ff/c398be15c965b03b-c6/s250x400/08645cc50d46b1ad7b975fd5b4d9eb96e18f56bc.jpg"],

["series", ["Fakes"], "2022", [["2022 10 16", "2022 10 23", "S1"]], 6, ["ger"], ["comedy"], ["bini", "nico"], ["Netflix"], ["David Turko", "Tabia Lau"], ["Emilija Baranac"], "https://64.media.tumblr.com/4aaa9fb31f42df094b5900a1b5b10ee8/c1b9790c9531b0e1-1b/s250x400/13aff57df0855f1ae37101210c08b317167483c0.jpg"],

["audiobook", ["The Lost Village", "Das Dorf der toten Seelen", "Staden"], "2019", [["2022 10 19", "2022 10 24"]], 5, ["ger"], ["horror", "mystery"], [], ["bibliothek"], ["Camilla Sten"], ["Katja Pilaski"], "https://64.media.tumblr.com/ef7e8c17555f37c69fa12d26df1814b8/c55a9b0b5427dde7-ac/s250x400/3312022cdb744f80de06e53c246ff6b6af0ace90.jpg"],

["film", ["Do Revenge"], "2022", ["2022 10 22"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["Jennifer Kaytin Robinson"], ["Camila Mendes", "Maya Hawke", "Austin Abrams", "Alisha Boe", "Paris Berelc", "Sophie Turner"], "https://64.media.tumblr.com/de614a637a4df381ed7f045087c2c4de/5b169a5927624bab-b0/s250x400/d44b1ee3845732d607f6050acf4eaab9028121fb.jpg"],

["film", ["Rosaline"], "2022", ["2022 10 22"], 6, ["ger"], ["comedy", "romance"], [], ["Disney+"], ["Karen Maine"], ["Kaitlyn Dever", "Isabela Merced", "Minnie Driver"], "https://64.media.tumblr.com/65ff2e4c37b30140025b9a67c743d80e/d66b54865dd0ca32-cb/s250x400/e4214a5a0ad73efdcaec7daf94d3e5578cfbf560.jpg"],

["film", ["OMG: Oh My God!"], "2012", ["2022 10 23"], 7, ["hin"], ["comedy", "drama"], ["bini", "mai"], ["Netflix"], ["Umesh Shukla"], [], "https://64.media.tumblr.com/6c7ba0aa69300318c5c4422000992125/a32f24e90a5db3ce-e4/s250x400/a3543c8066037657a7d3ef2548a12619b4f129c4.jpg"],

["audiobook", ["Alea Aquarius: Der Ruf des Wassers"], "2015", [["2022 10 25", "2022 10 27"]], 6, ["ger"], [], [], ["bibliothek"], ["Tanya Stewner"], ["Laura Maire"], "https://64.media.tumblr.com/caa9e5145169753620f676362da4f43c/f45f07eaf3c47ea6-3b/s250x400/50351f7b08010b4e44fde96c40abaf9da6996a20.jpg"],

["audiobook", ["Alea Aquarius: Die Farben des Meeres"], "2016", [["2022 10 28", "2022 11 02"]], 5, ["ger"], [], [], ["bibliothek"], ["Tanya Stewner"], ["Laura Maire"], "https://64.media.tumblr.com/946e54d4aee6d4587097dc806152ce4c/bf15559b14ab2f45-d0/s250x400/d4fc15cd59959a4d569ef367d7b717ec3833d193.jpg"],

["series", ["Baccano!"], "2007", [["2022 10 31", "S1E1"]], 0, ["jap"], ["anime", "action", "comedy", "mystery", "supernatural"], ["bini", "nico"], ["dropped"], ["Ryôgo Narita"], [], "https://64.media.tumblr.com/ae4eb81e3d895ace6aa26839941c8288/202fcf42d50255a9-2c/s250x400/ac8af8a4f40afd40ceb5c214168d6516344014d8.jpg"],

["audiobook", ["Alea Aquarius: Das Geheimnis der Ozeane"], "2017", [["2022 11 02", "2022 11 07", "Part 1"]], 4, ["ger"], [], [], ["bibliothek", "ongoing", "dropped"], ["Tanya Stewner"], ["Laura Maire"], "https://64.media.tumblr.com/3b57ca27dfd4974bfffd7c3c090e7cec/b4770b033896ca04-73/s250x400/23286b0abe2c574db9a0f41120d914dcba918276.jpg"],

["film", ["Sex Appeal"], "2022", ["2022 11 04"], 5, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Talia Osteen"], [], "https://64.media.tumblr.com/67ca94abcc3f34fb105b898719587697/33a38d0d6b83ab39-00/s250x400/0633a90d76b7800bd5302339eb6d396f2e522aa7.jpg"],

["series", ["Running Wild with Bear Grylls", "Bear Grylls: Stars am Limit"], ["2014", ""], [["2022 11 06", "2022 12 11", "S5"], ["2022 12 11", "2023 01 20", "S6"]], 5, ["ger"], ["adventure", "comedy"], ["bini", "nico"], ["Disney+"], ["Delbert Shoopman"], ["Bear Grylls"], "https://64.media.tumblr.com/bd30ebffcb9207446006f85616a56b4d/98d58338f9bbb26e-89/s250x400/af6e0494495deba03c86befa1cc616477843ce7e.jpg"],

["audiobook", ["John Sinclair: Irrfahrt ins Jenseits"], "2018", ["2022 11 08"], 6, ["ger"], ["horror"], [], ["bibliothek"], ["Jason Dark"], ["Dietmar Wunder", "Alexandra Lange"], "https://64.media.tumblr.com/c104deaeb01805d0a11ce5e88b45c95d/a295795ef81b53cc-49/s250x400/110e135a1cb3e9fcc5c69bd6aff30b2ed711e784.jpg"],

["audiobook", ["Die Geschichte der Bienen"], "2015", [["2022 11 08", "2022 11 09", "1h55min"]], 0, ["ger"], [], [], ["bibliothek", "dropped"], ["Maja Lunde"], ["Thomas M. Meinhardt", "Bibiana Beglau", "Markus Fennert"], "https://64.media.tumblr.com/02d5dc38adb559056de9bc971765e905/eb4d262d191565c5-7c/s400x600/ec2c1641f646c0c3ce8018192e5d1f539cd7d537.jpg"],

["audiobook", ["Numbers", "Numbers: den Tod vor Augen"], "2008", [["2022 11 10", "2022 11 18"]], 6, ["ger"], ["adventure"], [], ["bibliothek"], ["Rachel Ward"], ["Sascha Icks", "Philipp Schepmann"], "https://64.media.tumblr.com/0e2f572287be528e5711dc309457c0e8/aae5be0b66188706-b0/s250x400/9f3adc21045e5a585b164931d8587cc0e8245716.jpg"],

["book", ["Die Wilden Hühner - Fuchsalarm!"], "2006", [["2022 11 14", "2022 12 13"]], 8, ["ger"], [], [], ["bibliothek", "Die Wilden Hühner"], ["Cornelia Funke"], [], "https://64.media.tumblr.com/037d1e5f14c3d48bd77738b29e468817/c8027e028b17de4f-c6/s250x400/ac5dfe31e12ece88e50ce960ca6f480e81bc8118.jpg"],

["audiobook", ["Unsterblich Mein"], "2019", [["2022 11 18", "2022 11 28"]], 5, ["ger"], [], [], ["bibliothek"], ["Emily Bold"], ["Cornelia Dörr", "Pascal Houdus"], "https://64.media.tumblr.com/9d727d06c597a9572f6915f84c2760d6/cda6196b0d95f6f9-32/s250x400/2ae71a9cbd2d15811ef226f2ea8af8ecf1b7f55b.jpg"],

["film", ["Mortal Engines", "Mortal Engines - Krieg der Städte"], "2018", [["2022 11 26", "2022 12 03"]], 6, ["ger"], ["action", "adventure"], ["bini"], [], ["Christian Rivers"], ["Robert Sheehan", "Hugo Weaving"], "https://64.media.tumblr.com/09242d299b0506d4bb67fa2bc81bd748/476b2d1b4df2db9d-67/s250x400/3e90af52bdaf491ead81bfd98b4099f60097eec0.jpg"],

["audiobook", ["Unendlich Dein"], "2019", [["2022 11 29", "2022 12 08"]], 5, ["ger"], [], [], ["bibliothek"], ["Emily Bold"], ["Cornelia Dörr", "Pascal Houdus"], "https://64.media.tumblr.com/e1f8944a297283a791928752ba440569/9bff45cf22f5b48f-c9/s250x400/b28a8e2836c05cb37d6cf9feed862628df3677b8.jpg"],

["audiobook", ["All the bright places", "All die verdammt perfekten Tage"], "2015", [["2022 12 08", "2022 12 15"]], 9, ["ger"], ["drama"], [], ["bibliothek"], ["Jennifer Niven"], ["Patrick Mölleken", "Annina Braunmiller-Jest"], "https://64.media.tumblr.com/4809dd69d67423d65449c16f654c8c0b/110579d9c0ed5fcb-d2/s250x400/cf09d1fbc2214c51d25ec532e837a623b055bb10.jpg"],

["book", ["Für dich soll's tausend Tode regnen"], "2016", [["2022 12 14", "2023 01 25"]], 6, ["ger"], [], [], ["bibliothek"], ["Anna Pfeffer"], [], "https://64.media.tumblr.com/794c5fdf8ce28291d1bd85c65763782f/e392b7f52d948027-66/s250x400/6e0bf3dadc197bb803aff39209b282cb6859de6a.jpg"],

["film", ["Slumberland", "Schlummerland"], "2022", ["2022 12 18"], 6, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Francis Lawrence"], ["Jason Momoa", "Kyle Chandler"], "https://64.media.tumblr.com/58299a55cf8ed36835024a3742ca1cd5/4cad4d54c91d6237-f7/s250x400/2acc5d66adb62bb5cbba2f40a5ad81c1d53ff7e1.jpg"],

["film", ["About a Girl"], "2014", ["2022 12 18"], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Mark Monheim"], ["Heike Makatsch", "Katharina Spiering"], "https://64.media.tumblr.com/bd65711cc46879faa7d65b11ee6833b7/a79aa342df23862c-0e/s250x400/96658ce7ea5d9f97d795fca55a7fdf618b6ccb6d.jpg"],

["film", ["Roald Dahl's Matilda the Musical", "Matilda - Das Musical"], "2022", ["2022 12 25"], 6, ["eng"], ["comedy", "musical"], [], ["Netflix"], ["Matthew Warchus"], [], "https://64.media.tumblr.com/a099fea054157faaa164449f636e8a64/2f7a2a30ed9c4047-9e/s250x400/07084a68c1b0ebdb5a8a1f6c936da80d155ec175.jpg"],

["film", ["Plan B"], "2021", ["2022 12 30"], 5, ["ger"], ["comedy"], [], ["Disney+"], ["Natalie Morales"], ["Timothy Granaderos", "Michael Provost"], "https://64.media.tumblr.com/a4332cf7ea21ef932644cd9d1ea64ffd/dd4341f0d64173dd-95/s250x400/656744220fee6626163e0c064d669318536f5fbf.jpg"],

["audiobook", ["Survival - Überleben in der Natur"], "2022", [["2023 01 02", "2023 01 03"]], 5, ["ger"], [], [], ["bibliothek"], ["Arthur Sennefelder"], ["Lucas Blasius"], "https://64.media.tumblr.com/97eb8afab7b7db1df871f6963d7d147f/d288d88a177c7bb3-4e/s250x400/92de56441deff1978302ebff56ccf2a716ed63e5.jpg"],

["audiobook", ["Der Junge und das Meer"], "1977", [["2023 01 04", "2023 01 06"]], 6, ["ger"], [], [], ["bibliothek"], ["Tschingis Aitmatow"], ["Gert Westphal"], "https://64.media.tumblr.com/7a8c017ccc98a46b3dc53751fa4f11eb/ee980bcdc51352e2-f4/s250x400/dd01d9aefcfd7de2e11fc67c646bb23d6accf382.jpg"],

["film", ["Die Goldfische"], "2019", ["2023 01 06"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["Alireza Golafshan"], ["Tom Schilling", "Lisa Bitter", "Jella Haase", "Axel Stein"], "https://64.media.tumblr.com/f1afa16dd3e66e2c7c03c5ebbb6a1385/6b7b71895365fb42-4a/s250x400/cf75649be1e395a6e892b3543e5c6d81c0010b09.jpg"],

["series", ["The 7 Lives of Lea", "Léas 7 Leben", "Les 7 vies de Léa"], "2022", [["2023 01 07", "S1"]], 7, ["ger"], ["crime", "drama"], [], ["Netflix"], ["Charlotte Sanson", "Déborah Hassoun", "Dorothée Lachaud"], [], "https://64.media.tumblr.com/fec6784453b36c9ddcf21f10b43edda3/92365293b6806dce-c9/s250x400/5f2710afc419d55e143c46b68331600ba61a9080.jpg"],

["film", ["Enola Holmes 2"], "2022", ["2023 01 07"], 7, ["ger"], ["action", "adventure"], ["bini", "mai"], ["Netflix"], ["Harry Bradbeer"], ["Millie Bobby Brown", "Henry Cavill", "David Thewlis", "Helena Bonham Carter"], "https://64.media.tumblr.com/9a8c95ca55ce0117dc592a17873db3eb/fd597d19bb961a4e-44/s250x400/d0390428b405f85a4f8537887c8dffbb2ea4d424.jpg"],

["film", ["Annabelle"], "2014", ["2023 01 08"], 6, ["ger"], ["horror", "mystery"], [], ["Netflix"], ["John R. Leonetti"], [], "https://64.media.tumblr.com/91b131ae1e995e313374cacc096ad6e7/574487038cb4b557-9b/s250x400/2217626dd4ae2505c3708c68353e472e42d480a2.jpg"],

["film", ["Colonia", "Colonia Dignidad - Es gibt kein Zurück"], "2015", ["2023 01 08"], 7, ["ger"], ["biography", "drama"], [], ["Netflix"], ["Florian Gallenberger"], ["Emma Watson", "Daniel Brühl", "Michael Nyqvist", "Martin Wuttke"], "https://64.media.tumblr.com/37753c855a9168f099b62c9f4924b679/85debf1431484e89-0e/s250x400/3a559afb0b29072d130c7b86d597b27e247de945.jpg"],

["audiobook", ["Eine Leiche aus gutem Hause"], "2020", [["2023 01 09", "2023 01 12"]], 7, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/d7db9f91221ca97e0e68aedcece6d5bb/6fbed9588e9daba9-87/s250x400/e0b8d91eaa90659ffe03d1906ca6c582c8eb0172.jpg"],

["series", ["Fate/stay night"], "2006", [["2023 01 11", "S1E1-S1E3"]], 0, ["jap"], ["anime", "action", "fantasy", "romance", "supernatural"], ["bini", "jessie", "nico"], ["dropped"], ["Jukki Hanada", "Kinoko Nasu", "Mari Okada"], [], "https://64.media.tumblr.com/89968cefac4d2fd6d36862a836d56c23/4a000909c1d2566b-77/s250x400/e6d2cd96dd30ab2d51bf87acd7b13fa155032676.jpg"],

["series", ["Fate/stay night: Unlimited Blade Works"], ["2014", "2015"], [["2023 01 11", "2023 02 15", "S1"]], 3, ["ger"], ["anime", "action", "fantasy", "supernatural"], ["bini", "jessie", "nico"], [], ["Akira Hiyama", "Tatsuki Ichinose", "Michael McConnohie"], [], "https://64.media.tumblr.com/5866a2aafe5194abf6b1196395b99ffe/5700d55fc672f13c-f5/s250x400/a9111cac3eda8f0900ad1de2fc31b412f0c1830f.jpg"],

["audiobook", ["Tod zur Mittagsstunde"], "2020", [["2023 01 13", "2023 01 14"]], 7, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/45ebf70f8ab49eab1fb3f7cfad67e9fd/408b18bdf1f11574-4c/s250x400/a5c1afe9bdef0b1e13f045e289000044dbc0f7c5.jpg"],

["series", ["Maggie"], "2022", [["2023 01 13", "2023 01 14", "S1"]], 5, ["ger"], ["comedy", "romance"], [], ["Disney+"], ["Hayley Adams", "Justin Adler"], ["Leonardo Nam"], "https://64.media.tumblr.com/63c83768d810d7a6703bef7b6cdc0d1f/3b15af4b6fd402bb-c9/s250x400/6602d62ec55b41a9292965a53e685a0411f6597f.jpg"],

["film", ["Wedding Season"], "2022", ["2023 01 14"], 6, ["ger"], ["comedy", "romance"], ["bini", "mai"], ["Netflix"], ["Tom Dey"], [], "https://64.media.tumblr.com/17a8c945a15b5edadb3e00205c8be195/4dca76515009c5ab-79/s250x400/56ea53fa24420588f24be7e2d74ae70899648dc2.jpg"],

["audiobook", ["Der Tote am Fluss"], "2020", [["2023 01 16", "2023 01 18"]], 6, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/86f251f21af8ae700eaba30f63e4f731/3fde18ee8c557f8a-0b/s250x400/544b9b82e3051cd1b793da85bae4989dbf0cce71.jpg"],

["series", ["The Baby-Sitters Club", "Der Babysitter-Club"], ["2020", "2021"], [["2023 01 22", "2023 01 25", "S1"], ["2023 01 26", "2023 01 29", "S2"]], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Lisha Brooks"], [], "https://64.media.tumblr.com/977064f8f1e52b790729b0d925f87905/b53de1b33d6ed04f-41/s250x400/6a5ce88b78e25c7b441993f7ac47d693513476b9.jpg"],

["series", ["Wednesday"], ["2022", ""], [["2023 01 22", "2023 02 12", "S1"]], 7, ["ger"], ["comedy", "crime"], ["bini", "nico"], ["Netflix", "ongoing"], ["Charles Addams", "Alfred Gough"], ["Jenna Ortega", "Emma Myers", "Christina Ricci", "Riki Lindhome"], "https://64.media.tumblr.com/2c0de27e286ef85f7feefbadbde28f78/d5c60e11e8a10e79-68/s250x400/f4f3b3b474bddc4148370fb9ebabd4b6c2f9c9b2.jpg"],

["audiobook", ["Eine rätselhafte Beichte"], "2020", [["2023 01 18", "2023 01 23"]], 6, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/4dd1ca534d34b802eebb01f11bfe934e/6cd97adf43d18f43-4d/s250x400/e7ee5fdfe6f986bd032f00c675dbe2e366f4695c.jpg"],

["audiobook", ["Ein geheimnisvoller Gast"], "2020", [["2023 01 23", "2023 01 25"]], 6, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/d13a83d6a25f929b25f030b639bb2c0b/c6eafd855ac4a00d-3f/s250x400/3144cc6a976a628ff84bbdd44ece1f8f6a3032bb.jpg"],

["series", ["Space Dandy"], "2014", [["2023 01 23", "2023 02 06", "S1"]], 6, ["ger"], ["anime", "adventure", "comedy", "sci-fi"], ["bini", "nico"], ["ongoing"], ["John Burgmeier", "Kimiko Ueno"], [], "https://64.media.tumblr.com/1aa1976a698288855a87b3d51cf21883/a9f5bf639d489a7e-6f/s250x400/293d4592923de16cd7426eb7ebae1c5eb18ee12f.jpg"],

["audiobook", ["Lord of the Rings: The Fellowship of the Ring", "Herr der Ringe: Die Gefährten"], "1954", [["2023 01 25", "2023 02 10"]], 8, ["ger"], ["fantasy", "adventure"], [], ["bibliothek", "Middle Earth"], ["J. R. R. Tolkien"], ["Achim Höppner"], "https://64.media.tumblr.com/2f9e8ae5468e0b1c151b17286299bb46/27c5fe3be9216020-46/s400x600/7363fa983b4063e7c1f33681c4c06ba2e8a9cfea.jpg"],

["film", ["Metal Lords"], "2022", ["2023 01 27"], 8, ["ger"], ["comedy", "music"], [], ["Netflix"], ["Peter Sollett"], ["Jaeden Martell", "Isis Hainsworth"], "https://64.media.tumblr.com/f49c52a439b48767af186094f7e466f0/7fcd52d2121c9b2e-27/s250x400/9210b432f16212f36cfba4186369a6491401ed57.jpg"],

["film", ["Knives Out", "Knives Out: Mord ist Familiensache"], "2019", ["2023 01 27", "2023 12 07"], 9, ["ger"], ["comedy", "crime"], ["bini", "syl", "je"], ["Netflix"], ["Rian Johnson"], ["Daniel Craig", "Chris Evans", "Ana de Armas", "Katherine Langford", "Jaeden Martell", "Riki Lindhome", "Christopher Plummer"], "https://64.media.tumblr.com/d2f6d59bdfcc045186007292e7e86315/3e2acbf1c4b693d4-87/s250x400/6d83b8ecf1729f74d4bffc6abec2996716928990.jpg"],

["book", ["Die Wilden Hühner und das Glück der Erde"], "2005", [["2023 01 26", "2023 03 04"]], 7, ["ger"], [], [], ["Die Wilden Hühner", "bibliothek"], ["Cornelia Funke"], [], "https://64.media.tumblr.com/432565b590929b69689205cd479b9c5c/a04add625a1dc6bd-91/s250x400/8e7bcd7bdb1225e169d3bb9c34ec2ccfd015ede0.jpg"],

["film", ["Coraline"], "2009", ["2023 02 04"], 8, ["eng"], ["animation", "drama", "horror"], ["bini", "mai"], ["Netflix"], ["Henry Selick"], [], "https://64.media.tumblr.com/a659e7c43d2a021feeb7d2710f882183/2bcaf717d05a0b16-58/s250x400/3f3e6d39bc6a24f15ed6ce8c7aaaf9405c647b6a.jpg"],

["series", ["Zootopia+"], "2022", [["2023 02 06", "2023 02 07", "S1"]], 4, ["ger"], ["animation", "short"], [], ["Disney+"], ["Trent Correy", "Michael Herrera"], [], "https://64.media.tumblr.com/1e55d1d598db47dc314b37f4ca51b7a4/860eee002bdd99ed-08/s250x400/c64302bee7f889453b00a3afb578e38a18396e02.jpg"],

["series", ["Bizaardvark"], ["2016", "2019"], [["2023 02 08", "2023 02 22", "S1"]], 4, ["ger"], ["comedy", "family"], [], ["Disney+", "ongoing"], ["Josh Lehrman", "Kyle Stegina"], ["Olivia Rodrigo", "Madison Hu"], "https://64.media.tumblr.com/bd816340925118439769e6df6af8397e/723e45e7373120a3-e9/s250x400/0340c2fd74c338c70df32f85781a35acb27e4fd0.jpg"],

["film", ["I'm Thinking of Ending Things"], "2020", ["2023 02 10"], 5, ["ger"], ["drama", "thriller"], [], ["Netflix"], ["Charlie Kaufman"], ["Jesse Plemons", "David Thewlis", "Hadley Robinson"], "https://64.media.tumblr.com/fd8bb502ba097f2d2da43b0fafbb7672/c224734a55112ad3-09/s250x400/6489c037486ae1cba686fb5ebebbe26a52021325.jpg"],

["film", ["Far from the Madding Crowd", "Am grünen Rand der Welt"], "2015", ["2023 02 11"], 7, ["ger"], ["drama", "romance"], [], ["Disney+"], ["Thomas Vinterberg"], ["Carey Mulligan", "Matthias Schoenaerts", "Tilly Vosburgh", "Tom Sturridge", "Juno Temple", "Jessica Barden"], "https://64.media.tumblr.com/72131a35d67743ce1a06cf5fb77c3a03/2e0f287709c1677c-69/s250x400/0f7f53186d2922616741c7be2ed0a47eb1d3b1e6.jpg"],

["audiobook", ["Lord of the Rings: The Two Towers", "Herr der Ringe: Die zwei Türme"], "1954", [["2023 02 11", "2023 03 07"]], 8, ["ger"], ["fantasy", "adventure"], [], ["bibliothek", "Middle Earth"], ["J. R. R. Tolkien"], ["Gert Heidenreich"], "https://64.media.tumblr.com/31307e3563f717fbe1b764bef7e7e617/18d8e44138b72923-fc/s250x400/321d883ea056f22901788f23eb8a52b8548ed7b8.jpg"],

["series", ["Lilo & Stitch: The Series", "Lilo & Stitch"], ["2003", "2006"], [["2023 02 12", "2023 04 16", "S1E1-E29"], ["2023 05 14", "S2E19 & E21"]], 5, ["ger"], ["animation", "action"], ["bini", "nico"], ["Disney+", "dropped", "Lilo & Stitch"], ["Dean DeBlois", "Chris Sanders", "Doug TenNapel"], [], "https://64.media.tumblr.com/d6fbdf35427c2b8b0f173e1767f6f490/1f66ac63513e592b-d7/s250x400/2e80d4291ef2b5764b6f75d9ff412ce8440c03e6.jpg"],

["film", ["Anna"], "2019", ["2023 02 12"], 6, ["ger"], ["action"], [], ["Netflix"], ["Luc Besson"], ["Sasha Luss", "Luke Evans", "Cillian Murphy"], "https://64.media.tumblr.com/efb03aa08974b6ffcedc57e45e925de5/08a27c0b18a0101c-c2/s250x400/4039f426b13f9db327b357ffd38643afb4303528.jpg"],

["film", ["Die Drei ??? - Erbe des Drachen"], "2023", ["2023 02 12"], 6, ["ger"], ["adventure", "family"], ["bini", "syl", "je"], ["Kino", "Die drei ???"], ["Tim Dünschede"], ["Gedeon Burkhard", "Florian Lukas", "Jördis Triebel", "Nevio Wendt"], "https://64.media.tumblr.com/5969b85eae3e6a9595db20cffd59992d/4dc2c025a2d9f5e9-c3/s250x400/e84750a16b1594ba2b46af757afcda2daec632ed.jpg"],

["series", ["Extraordinary"], ["2023", ""], [["2023 02 18", "S1"]], 7, ["ger"], ["comedy", "fantasy"], [], ["Disney+"], ["Emma Moran"], [], "https://64.media.tumblr.com/ef8c670c289e53fd3e9be48d62061457/c7133c0b2e95cfc8-7a/s250x400/6d8017359b3a3f6d22040c33c646a759acffbd65.jpg"],

["film", ["Barbie & Chelsea the Lost Birthday"], "2021", ["2023 02 18"], 6, ["ger"], ["animation", "adventure"], ["bini"], ["Barbie"], ["Cassandra Mackay"], [], "https://64.media.tumblr.com/b21a6920948a97e493cfe6bb304c20ec/c6a80f9486773d4b-b6/s250x400/a10ff7c312232abc3c3de5542fbb5e670a2cd055.jpg"],

["film", ["Barbie Mariposa and Her Butterfly Fairy Friends"], "2008", ["2023 02 18"], 4, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Conrad Helten"], [], "https://64.media.tumblr.com/971ef4d35f41dc6f075601cd772e74b7/1ba642a7315f0465-4f/s250x400/29c291eee5ca881c938b44379bde74f2be6eb97f.jpg"],

["film", ["Fack ju Göhte"], "2013", ["2023 02 18"], 8, ["ger"], ["comedy"], [], ["Netflix"], ["Bora Dagtekin"], ["Elyas M'Barek", "Karoline Herfurth", "Katja Riemann", "Jana Pallaske", "Alwara Höfels", "Jella Haase", "Gizem Emre", "Lena Klenke"], "https://64.media.tumblr.com/7795bba0b0b61bc22748402c46c7bf04/aa6ac7c6aa7708d3-8c/s250x400/a986960e043a8b399dc0fb5a6dd0019bd1a208be.jpg"],

["series", ["Bleach: Thousand Year Blood War", "Bleach: Thousand Year Blood War", "Bleach: Sennen Kessen-hen"], ["2023", ""], [["2023 02 22", "2023 03 29", "S1"]], 5, ["eng"], ["anime", "action"], ["bini", "nico"], ["Disney+", "ongoing"], ["Tite Kubo"], [], "https://64.media.tumblr.com/3197f63ea8fb194f83135447825f4c14/46149f0dc648c47e-7d/s250x400/e1910ca4cb8f2fb81631bacb1fdf22a37997a8fb.jpg"],

["series", ["Insatiable"], ["2018", "2019"], [["2023 02 23", "2023 03 04", "S1"]], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Lauren Gussis", "Jenina Kibuka"], ["Debby Ryan", "Michael Provost"], "https://64.media.tumblr.com/6983029dcbc834c7f4529d5d3a9aa243/1053b374f048c3a9-be/s250x400/72db042f3009202468a9f32a0d5bee76d6c78d4f.jpg"],

["film", ["8 Mile"], "2002", [["2023 02 25", "2023 02 26"]], 6, ["ger"], ["drama", "music"], [], ["Netflix"], ["Curtis Hanson"], ["Eminem", "Brittany Murphy", "Anthony Mackie"], "https://64.media.tumblr.com/0120cf074f65d7d4d2df9789cd0b8191/9c2a7c40e5ab33ab-7d/s250x400/f4fe56ae854cb4ae1793016919f62da7c9f7f8cf.jpg"],

["film", ["Rainbow"], "2022", ["2023 02 26"], 6, ["ger"], ["drama"], [], ["Netflix"], ["Paco León"], [], "https://64.media.tumblr.com/d61c5d3bdeb321978c1fe8b4b7511003/8ad7c51e301e4d19-ec/s250x400/1886095dda37c79100713c199a464ec004a844e7.jpg"],

["film", ["Spiderhead", "Der Spinnenkopf"], "2022", ["2023 02 28"], 6, ["ger"], ["sci-fi"], [], ["Netflix"], ["Joseph Kosinski"], ["Chris Hemsworth", "Miles Teller"], "https://64.media.tumblr.com/2cdc01a722f7dc021ea8cd8771e3e265/fcb39a7f5517ced8-9e/s250x400/270f5ed916819d63be8677d2f89dcf3e2dd4d61c.jpg"],

["film", ["The Circle"], "2017", ["2023 03 04"], 6, ["ger"], ["drama", "sci-fi"], [], ["Netflix"], ["James Ponsoldt"], ["Emma Watson", "Karen Gillan", "Tom Hanks", "Patton Oswalt", "Poorna Jagannathan", "Judy Reyes"], "https://64.media.tumblr.com/35b31298a69367010c00c5b8bf9ce8ea/6215319b73a48620-4f/s250x400/2f52fe2ca0efb3c9141cef2b00a340a579551ef0.jpg"],

["film", ["Gunpowder Milkshake"], "2021", ["2023 03 04"], 8, ["eng"], ["action", "crime"], ["bini", "mai"], ["Netflix"], ["Navot Papushado"], ["Karen Gillan", "Freya Allan", "Paul Giamatti", "Carla Gugino", "Lena Headey"], "https://64.media.tumblr.com/7b5c9fef73a0fcc91a12373ad1e2926e/f4a027b8d5a8b7c9-9e/s250x400/df35dade3800254e90ccaf6de0e7f3f493b8aa6c.jpg"],

["film", ["The Spectacular Now", "The Spectacular Now: Perfekt ist jetzt"], "2013", ["2023 03 05"], 5, ["eng"], ["drama", "romance"], [], ["Netflix"], ["James Ponsoldt"], ["Miles Teller", "Shailene Woodley", "Brie Larson", "Dayo Okeniyi", "Kyle Chandler", "Jennifer Jason Leigh", "Bob Odenkirk"], "https://64.media.tumblr.com/74e8e199645b773fb2473d3d1caef8a3/eae594adfaf8992e-74/s250x400/0b7b3a95616356e9ffd9d1424bd66e5c02120147.jpg"],

["book", ["An Absolutely Remarkable Thing"], "2018", [["2023 03 05", "2023 05 07"]], 7, ["eng"], ["sci-fi"], [], [], ["Hank Green"], [], "https://64.media.tumblr.com/54018f445b51c46b35ab847abc3dfbd1/5454d70268fdf8dd-a6/s250x400/af5bc3daac177e93b8e4dc34c53982b52b18e4ee.jpg"],

["audiobook", ["Gruß aus dem Jenseits"], "2020", [["2023 03 07", "2023 03 09"]], 7, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/3cd5178fe0030b28709c2bc3fb7958b8/dfb91fef40702a7d-8c/s250x400/8f6d5570af4ffb96992278e8138fce26bec755d1.jpg"],

["audiobook", ["Rezept für einen Mord"], "2020", [["2023 03 08", "2023 03 13"]], 6, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/6187aafa82ca2fb15afa7679aa8ca315/888123188985cf8b-83/s250x400/ea789e20ffe0f3c9a0f1262fbab1ba5774d164d4.jpg"],

["film", ["Barbie of Swan Lake", "Barbie in Schwanensee"], "2003", ["2023 03 11"], 5, ["rus"], ["animation", "family"], ["bini"], ["Barbie", "Netflix"], ["Owen Hurley"], [], "https://64.media.tumblr.com/55f258d28757e2243ba5dca401a2a4e8/a3508877869cfe86-a5/s250x400/3a74dc50c99553e7cb37d4c697337e67fe1bc34e.jpg"],

["film", ["Pride and Prejudice and Zombies", "Stolz und Vorurteil & Zombies"], "2016", ["2023 03 13"], 6, ["eng"], ["action", "comedy"], [], ["Netflix"], ["Burr Steers"], ["Lily James", "Bella Heathcote", "Ellie Bamber", "Millie Brady", "Charles Dance", "Lena Headey", "Matt Smith"], "https://64.media.tumblr.com/e3f07639a286f3e586fa9b7384df439f/5c89bab307c114ca-3b/s250x400/084f769b0b06f58c7d0dc40af59c93b07ce11b7a.jpg"],

["film", ["The Matrix", "Matrix"], "1999", ["2023 03 13"], 0, ["ger"], ["action", "sci-fi"], ["bini"], ["Netflix"], ["Lana Wachowski", "Lilly Wachowski"], ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"], "https://64.media.tumblr.com/62d52893ed3f5704dac381b60019624e/a37ecd237192ba73-9f/s250x400/2a340ac1b5a736a8255568c8fcfe332252653225.jpg"],

["audiobook", ["Verrat im Vatikan!"], "2021", ["2023 03 13"], 0, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/bc29bbf52d1d811e607a15d1092e3175/efc04ee001b13040-92/s250x400/71eba2028e4079f9ca96108976df9aadd17dbbf7.jpg"],

["audiobook", ["Das Geheimnis des toten Malers"], "2021", [["2023 03 22", "2023 03 23"]], 0, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/00aa24415b77a1f468e89c198df0370f/d43f83f4ac52a7f2-8f/s250x400/b4613736378bd6a330d804a761f1f46ff95857cf.jpg"],

["audiobook", ["Shatter Me", "Ich fürchte mich nicht"], "2014", [["2023 03 23", "2023 03 28"]], 4, ["ger"], ["sci-fi"], [], ["bibliothek"], ["Tahereh Mafi"], ["Britta Steffenhagen"], "https://64.media.tumblr.com/119c973e13bf6f6bf8acdb8c117f13a9/93ae53e03900339c-81/s250x400/0eed023ed7633c2cc256e40433f762abb838d56e.jpg"],

["series", ["K.C. Undercover"], ["2015", "2018"], [["2023 03 06", "2023 03 13", "S1E1-S1E9"]], 4, ["ger"], ["action", "comedy"], [], ["Disney+", "dropped"], ["Corinne Marshall"], ["Zendaya"], "https://64.media.tumblr.com/1a62a4fda3cd3a6aa788463fb8eb72ce/5b869ff21918a379-73/s250x400/758a5c68b069016b2e2c697e6c0046a1a7b8a747.jpg"],

["series", ["The Finder"], "2012", [["2023 03 26", "2023 04 04", "S1"]], 7, ["ger"], ["comedy", "crime"], [], ["Disney+"], ["Richard Greener", "Hart Hanson"], [], "https://64.media.tumblr.com/6e1a4ef1ddb79bd9f3268b2bb029963a/950df7253383b3f3-8a/s250x400/ad77b9c3cfc974c1e67ad87ee169dfdbc6119d5e.jpg"],

["audiobook", ["Im Reich der Pubertiere"], "2016", [["2023 03 29", "2023 03 30"]], 7, ["ger"], ["comedy"], [], ["bibliothek"], ["Jan Weiler"], ["Jan Weiler"], "https://64.media.tumblr.com/8365aa58c0f05decba5a4d1c27c26375/1fd3da0975fac07b-53/s250x400/16fc2961dbcf0bba49a5a8eafff48e7edb4b526e.jpg"],

["audiobook", ["Lord of the Rings: The Return of the King", "Herr der Ringe: Die Wiederkehr des Königs"], "1955", [["2023 03 31", "2023 04 21"]], 8, ["ger"], ["fantasy", "adventure"], [], ["bibliothek", "Middle Earth"], ["J. R. R. Tolkien"], ["Gert Heidenreich"], "https://64.media.tumblr.com/d233fc1abba4c426fe2e265e4b16b444/ad7f28b3634765ce-46/s250x400/28dfb34371298fe0433eac9561333d31ffd44628.jpg"],

["film", ["Ivy & Bean"], "2022", ["2023 04 02"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["Elissa Down"], [], "https://64.media.tumblr.com/17ed89cba91cae1d88389b8311ea2d23/453ec9efd973dfe5-42/s250x400/ff63e6a87d7b8544262a75b6685d7a0d831c735e.jpg"],

["audiobook", ["Die drei ??? Kids 91: Gefahr im Spiegelkabinett"], "2023", [["2023 04 02", "2023 04 10"]], 0, ["ger"], [], ["bini", "syl", "je"], ["Spotify", "Die drei ???"], ["Boris Pfeiffer"], [], "https://64.media.tumblr.com/8389b5ee49c19e10834ce3953ad40d8d/0cf762a2dd565abb-a4/s250x400/350ed18a84139ef38c5f464db4f6b47e9070dd98.jpg"],

["film", ["Sightless"], "2020", ["2023 04 02"], 7, ["ger"], ["drama", "thriller"], [], ["Netflix"], ["Cooper Karl"], [], "https://64.media.tumblr.com/bb4df154c6aef1f9080f8c1616897329/c33462af5acdec77-fb/s250x400/14fb522683c4a4ecf9f726db78ce4e78c053d949.jpg"],

["series", ["Megalo Box", "Megalo Box", "Megaro bokusu: Megalo Box"], ["2018"], [["2023 04 03", "S1E9-E13"]], 0, ["ger"], ["anime", "action"], ["bini", "nico"], [], ["Ikki Kajiwara", "Kensaku Kojima", "Katsuhiko Manabe"], [], "https://64.media.tumblr.com/3d042c142db025fd0eface0645ae615e/0ffd053bc7f14c8a-e1/s250x400/2f58538cc1038186b8f7d57e7db35df18f740764.jpg"],

["series", ["Bocchi the Rock!"], "2022", [["2023 04 05", "2023 04 19", "S1"]], 7, ["jap"], ["anime", "comedy"], ["bini", "nico"], [], ["Aki Hamaji", "Erika Yoshida"], [], "https://64.media.tumblr.com/d50e36c1ed2a7e4748f7b6f1ff7ec02f/a18455bd23bf84c6-b3/s250x400/a5eb1d6faac41b905a9c1c1391dd8bc702fcf11e.jpg"],

["film", ["Whiplash"], "2014", ["2023 04 06", "2023 08 06"], 8, ["ger"], ["drama", "music"], [], ["Netflix"], ["Damien Chazelle"], ["Miles Teller", "J.K. Simmons", "Paul Reiser", "Melissa Benoist"], "https://64.media.tumblr.com/8195d31808920e07b61a81e25df4ec10/007f98966148ec20-c4/s250x400/7fd9bc716a1c7474c5a8b0e889cf50b828ef817a.jpg"],

["film", ["The Green Knight"], "2021", ["2023 04 09"], 7, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["David Lowery"], ["Dev Patel", "Alicia Vikander", "Sarita Choudhury", "Joel Edgerton"], "https://64.media.tumblr.com/4c6e18013c1927673532b9f0db5cd086/fd2dbb8deefcbfdc-86/s250x400/44417b26ca27ba8b74074533d41447ecfb3c8fd6.jpg"],

["film", ["Girl Gang"], "2022", ["2023 04 10"], 4, ["ger"], ["documentary"], [], ["Netflix"], ["Susanne Regina Meures"], [], "https://64.media.tumblr.com/8e08e94ad683070c69ed449b267a5dc7/a2b0b3ca8e28b89f-3c/s250x400/0ba9743e4058f0153d5b91e80c39b202cfc7aed1.jpg"],

["series", ["Detective Conan: The Culprit Hanzawa"], ["2022", "2023"], [["2023 04 10", "S1"]], 6, ["ger"], ["anime", "comedy"], [], ["Netflix"], [], [], "https://64.media.tumblr.com/aad231c9b45abb0a014953fd3c275f87/5d03a01561d14209-ef/s250x400/42a46b1baa1ee41e92a68853b4d34c6de64ab69b.jpg"],

["series", ["Nomad: Megalo Box 2", "Nomad: Megalo Box 2", "Megalobox 2: Nomad"], "2021", [["2023 04 10", "2023 04 19", "S1"]], 0, ["jap"], ["anime", "sci-fi", "sport"], ["bini", "nico"], [], ["Ikki Kajiwara", "Kensaku Kojima", "Katsuhiko Manabe"], [], "https://64.media.tumblr.com/824832ae5eabffaa1154e1dc17d27cf2/6371363194eaf1e4-52/s250x400/0fd3a35d6942252a1eb9182a538c06cbc7b58884.jpg"],

["series", ["Good Trouble"], ["2019", ""], [["2023 04 11", "2023 04 16", "S1E1-S1E5"]], 0, ["ger"], ["comedy", "drama"], [], ["Disney+", "ongoing", "dropped"], ["Bradley Bredeweg"], ["Maia Mitchell"], "https://64.media.tumblr.com/0e38206405116a7ca78e4b60d604c759/f9470cde4701d11b-11/s250x400/8264cf3362203ff2ae9140c93c430affc574749c.jpg"],

["film", ["Girl, Interrupted", "Durchgeknallt"], "1999", ["2023 04 14"], 0, ["ger"], ["biography", "drama"], [], ["Netflix"], ["James Mangold"], ["Winona Ryder", "Angelina Jolie", "Brittany Murphy", "Whoopi Goldberg"], "https://64.media.tumblr.com/d6fa8cee8e6c7b80b4a4f3caf0e1331d/e2edf5e0b0002cb1-8f/s250x400/a4ad524a5937b6e718b61c4d6b9e180851e546b0.jpg"],

["series", ["Austin & Ally"], ["2011", "2016"], [["2023 04 15", "2023 06 05", "S1"]], 5, ["ger"], ["comedy", "drama"], [], ["Disney+", "ongoing"], ["Kevin Kopelow"], ["Ross Lynch", "Laura Marano"], "https://64.media.tumblr.com/0249a6d48c116caefed14e41f349aa70/8adb5822370b19f8-6a/s250x400/47d63a62a3ab6688747543262a0a741bd606e2fc.jpg"],

["film", ["Glass Onion", "Glass Onion: A Knives Out Mystery"], "2022", ["2023 04 15"], 8, ["ger"], ["comedy", "crime"], ["bini", "mai"], ["Netflix"], ["Rian Johnson"], ["Daniel Craig", "Edward Norton", "Kathryn Hahn", "Leslie Odom Jr.", "Kate Hudson", "Dave Bautista", "Jessica Henwick", "Hugh Grant", "Natasha Lyonne"], "https://64.media.tumblr.com/551fd9a459d760e2d7b577b91e8fcf8b/927f9c1c53016ba6-6d/s250x400/fb15789ba0a974bf3fe28d038031c1070b5b52b6.jpg"],

["audiobook", ["Die drei ??? 221: Manuskript des Satans"], "2022", [["2023 04 16", "2023 05 27"]], 0, ["ger"], ["crime"], ["bini", "syl"], ["Spotify", "Die drei ???"], ["Hendrik Buchna"], [], "https://64.media.tumblr.com/d2ef2dd650388a86a9e5c7881bf2bdbe/60aa32ae7fdb8b6f-ab/s250x400/992103200b2c6ed51ad85d95dd43517ce0bbf4fe.jpg"],

["audiobook", ["Die drei ??? Kids 23: Feuer in Rocky Beach"], "2009", ["2023 04 22"], 0, ["ger"], ["crime"], ["bini", "syl", "je"], ["Die drei ???"], ["Ulf Blanck"], [], "https://64.media.tumblr.com/82bd5cf7d122e03315d9f22e739f85b6/94c4e8e48e64ca28-97/s250x400/eb4440c121233147c18ec470a920c995488dc14d.jpg"],

["audiobook", ["Eine Stimme für den Tod"], "2021", [["2023 04 22", "2023 04 24"]], 0, ["ger"], ["crime"], ["bini", "syl", "je"], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/a6be2a52f30fcb3535389d76d06118a1/5a91df9091a5e415-1b/s250x400/5a4385c7c3efeef8a5c42dbb93265dabe675e8da.jpg"],

["film", ["Aquaman"], "2018", ["2023 04 23"], 4, ["ger"], ["action", "adventure"], ["bini", "je"], [], ["James Wan"], ["Jason Momoa", "Amber Heard", "Willem Dafoe", "Nicole Kidman", "Yahya Abdul-Mateen II"], "https://64.media.tumblr.com/86a1dade50305e323eb28211870af226/84cb510690d7d89b-90/s250x400/f2c5b16dd26d83de668b82c9420352eadfd57930.jpg"],

["audiobook", ["Die drei ??? Kids 1: Panik im Paradies"], "2009", ["2023 04 29"], 0, ["ger"], ["crime"], ["bini", "syl", "je"], ["Die drei ???"], ["Ulf Blanck"], [], "https://64.media.tumblr.com/4a7db1fd1ddf5a5a5878e227ad3f35c3/af17798e2f4ebb84-78/s250x400/f45430b9813cdadbbc51991eebaf57e2484544ab.jpg"],

["series", ["Final Space"], ["2018", "2021"], [["2023 05 02", "2023 05 08", "S1"], ["2023 05 21", "2023 05 29", "S2"], ["2023 05 29", "2023 06 12", "S3"]], 6, ["ger"], ["animation", "action"], ["bini", "nico"], ["Netflix"], ["Olan Rogers"], [], "https://64.media.tumblr.com/c578a4deff97dcf3e3fd8b6c002abb8c/503d75b293ac7774-34/s250x400/7eddf25a9532a9fb1bdbbc2db6732f487ea547db.jpg"],

["audiobook", ["Gerade war der Himmel noch blau"], "2017", [["2023 05 02", "2023 05 10"]], 7, ["ger"], [], [], ["bibliothek"], ["Florian Illies"], ["Ulrich Noethen"], "https://64.media.tumblr.com/d543531beabd7144d6d3939395c96826/ebc9b1915ba7d171-b7/s400x600/30a124f1048cf49dcd91a907d100f2bb9a22717f.jpg"],

["series", ["Die Pfefferkörner"], ["1999", ""], [["2023 05 03", "2023 05 07", "S7"], ["2023 05 17", "2023 06 10", "S8"], ["2023 06 11", "2023 06 20", "S9"], ["2023 07 08", "2023 08 03", "S10"], ["2023 09 30", "2023 10 10", "S11"], ["2023 10 11", "2023 11 06", "S12"], ["2023 11 07", "2023 12 07", "S13"]], 6, ["ger"], ["crime", "family"], [], ["ongoing"], ["Silja Clemens"], ["Moritz Jahn", "Nina Kaiser", "Katharina Spiering", "Steffen Groth"], "https://64.media.tumblr.com/2439c1cb2ff4ad2a5176fcdbc925f255/e02f970f9ab8e581-b1/s250x400/9776c3bae049c4d3620da4343ed12d85b5859dec.jpg"],
/*S7: 5; S8: 6; S10: 6*/
	
["film", ["Pom Poko", "Pom Poko", "Heisei tanuki gassen ponpoko"], "1994", ["2023 05 06"], 6, ["ger"], ["anime", "comedy"], ["bini", "mai"], ["Netflix"], ["Isao Takahata"], [], "https://64.media.tumblr.com/1beb8edfc26020a43aed81edc4e21332/dafcc2886aafff4c-bd/s250x400/77c4a5b5ad990b573aa847915d50a006325e049a.jpg"],

["film", ["Suzume", "Suzume", "Suzume no Tojimari"], "2022", ["2023 05 07"], 7, ["ger"], ["anime", "action"], ["bini"], ["Kino"], ["Makoto Shinkai"], [], "https://64.media.tumblr.com/4de385fd55d6b585ea2474bc40ca957a/fce29d3bb65e46e9-67/s250x400/3141995d91dd369ee93ea90cbca6c90996380238.jpg"],

["film", ["Circle", "Der Kreis"], "2015", ["2023 05 07"], 5, ["eng"], ["drama", "horror"], [], ["Netflix"], ["Aaron Hann", "Mario Miscione"], [], "https://64.media.tumblr.com/7335df07f4b2a1e0d2eb7656c8d2a6cc/ae837cc238c60c8d-66/s250x400/b303629c7b2a9b77f204d9b95b0a012f2b657af2.jpg"],

["book", ["Humble Pi: A Comedy of Maths Errors", "Damit hatte keiner gerechnet! Die größten Mathe-Irrtümer der Menschheit"], "2019", [["2023 05 08", "2023 06 14", "C1-C4"]], 0, ["ger"], ["nonfiction", "science", "comedy"], [], ["bibliothek"], ["Matt Parker"], [], "https://64.media.tumblr.com/87186c514b35c0bd70a4ef3ca4e88b6c/ad9474a7586d88d3-d3/s250x400/2cce4423903d7735db2e43f672e6a791ea91abf6.jpg"],

["audiobook", ["Die Welt der Fabelwesen"], "2018", [["2023 05 11", "2023 05 16"]], 7, ["ger"], [], [], ["bibliothek"], ["Frank Schwieger"], ["Peter Kaempfe"], "https://64.media.tumblr.com/fc05373d2719aaddbcb2e73ad8e61ec0/a106fb3f6019c257-b3/s250x400/8479a2f4677f4b3f2e7595cca589b6d7507edb0c.jpg"],

["film", ["Kung Fu Panda 3"], "2016", ["2023 05 18"], 7, ["ger"], ["animation", "action"], ["bini", "syl"], ["animation", "action"], ["Alessandro Carloni", "Jennifer Yuh Nelson"], [], "https://64.media.tumblr.com/91bdffc2a4f220c05ca47455fa65926a/febc9063cda12962-43/s250x400/4e1c3728c4c97eff1729d0898cda821c76a85974.jpg"],

["audiobook", ["Die Berlinreise"], "2014", [["2023 05 22", "2023 06 01"]], 5, ["ger"], ["biography"], [], ["bibliothek"], ["Hanns-Josef Ortheil"], ["Hanns-Josef Ortheil"], "https://64.media.tumblr.com/4c6e0bf573e6a6bab937ac4fe3eca469/e4b027c28509609b-a0/s250x400/1d29767e3ecb5525d557576020012d787ae59053.jpg"],

["film", ["Renfield"], "2023", ["2023 05 27"], 7, ["ger"], ["comedy", "fantasy"], ["bini", "je"], ["Kino"], ["Chris McKay"], ["Nicholas Hoult", "Nicolas Cage", "Awkwafina", "Adrian Martinez", "Rhonda Johnson Dents"], "https://64.media.tumblr.com/7cad65ce904a305899b71d0f49318b5e/d120a5961e50fc0d-c5/s250x400/91c55c449da80b66c73be9e31c30c2d5b15613b8.jpg"],

["series", ["School of Chocolate"], "2021", [["2023 05 29", "2023 06 01", "S1"]], 7, ["eng"], ["reality-tv"], [], ["Netflix"], [], [], "https://64.media.tumblr.com/22d3931933e733ed9e14c11ae41501ff/d60aae13811c4a5d-b7/s250x400/09e552b62e1983333a95b51ae241016b04b22758.jpg"],

["audiobook", ["My Heart and Other Black Holes", "Mein Herz und andere schwarze Löscher"], "2015", [["2023 06 02", "2023 06 09"]], 8, ["ger"], ["young adult"], [], ["bibliothek"], ["Jasmine Warga"], ["Inka Löwendorf"], "https://64.media.tumblr.com/ac9b8e0de6df3145704e6b8e71610830/98b254b9863d6d78-01/s250x400/2ed8ee7dac608ad82b543bf8890ac15a4afff26b.jpg"],

["audiobook", ["Die drei ??? Kids 77: Die Musikdiebe"], "2018", [["2023 06 03", ""]], 0, ["ger"], ["crime"], ["bini", "syl"], ["Spotify"], ["Boris Pfeiffer"], [], "https://64.media.tumblr.com/42f0829b1e07f8ae3c9b33509e188d5b/9020aac709d46be3-f6/s250x400/671fef06c5407a00446efe1d80796ae8acf4c4b5.jpg"],

["film", ["Airplane II: The Sequel", "Die unglaubliche Reise in einem verrückten Raumschiff"], "1982", ["2023 06 03"], 5, ["ger"], ["comedy"], ["bini", "syl", "je"], [], ["Ken Finkleman"], [], "https://64.media.tumblr.com/d82db766a50555cf4c32e818830ff3f2/f046b65b45e3005b-3b/s250x400/d963e9b2fbcf2236cdeea605f12c83ba1f1684c2.jpg"],

["series", ["Terrace House: Opening New Doors", "Terrace House: Alte und neue Türen"], ["2017", "2019"], [["2023 06 04", "2023 08 06", "S1E1-S1E16"]], 0, ["jap"], ["drama", "reality-tv"], ["bini", "nico"], ["Netflix", "onhold"], ["You", "Reina Triendl", "Yoshimi Tokui"], [], "https://64.media.tumblr.com/bffb937328fc09f84a11421af604934d/6996437739b094e9-0a/s250x400/12fae2bdded8cc427c6b64583118734fbabc4a83.jpg"],

["audiobook", ["The Statistical Probability of Love at First Sight", "Die statische Wahrscheinlichkeit von Liebe auf den ersten Blick"], "2011", [["2023 06 09", "2023 06 19"]], 5, ["ger"], ["young adult"], [], ["bibliothek"], ["Jennifer E. Smith"], ["Anna Carlsson"], "https://64.media.tumblr.com/30f1c5debe7496f02e4449109e258fd9/c74c0b9eca8e6108-89/s250x400/3d69279bc039ef5259ff208a109b17b355a92f27.jpg"],

["book", ["Freche Abenteuer mit Pittiplatsch"], "2018", [["2023 06 14", "2023 06 26"]], 6, ["ger"], [], [], [], ["Ingeborg Feustel"], [], "https://64.media.tumblr.com/3601c974e43dc83e283fd49b489b27c7/c3a3fe95d8903848-1e/s250x400/9a518cb2761faaa7151d3c9b2caaa188cb2a5e8b.jpg"],

["film", ["Transformers: Rise of the Beasts", "Transformers: Aufstieg der Bestien"], "2023", ["2023 06 18"], 7, ["ger"], ["action"], ["bini", "je"], ["Kino", "Transformers"], ["Steven Caple Jr."], ["Dominique Fishback"], "https://64.media.tumblr.com/7c7e0e4d544f32936435f25559faf491/314adb8d5230e9ad-68/s250x400/f4a926919bfbaa2580243e7b764d21d7b1fcc9a9.jpg"],

["book", ["Die Wilden Hühner und die Liebe"], "2007", [["2023 06 19", "2023 08 07"]], 7, ["ger"], [], [], ["Die Wilden Hühner", "bibliothek"], ["Cornelia Funke"], [], "https://64.media.tumblr.com/22ca3ec79801bd0ef54bc80423037991/32f0dacf10219d8e-f5/s250x400/19ac5bbbfbe2054f4e5ba43b4462e70d16106004.jpg"],

["series", ["Hajime no ippo"], ["2000", "2002"], [["2023 06 19", "2023 11 15", "S1"]], 6, ["eng"], ["anime", "action"], ["bini", "nico"], ["Netflix"], ["Kazuyuki Fudeyasu", "Daisuke Aranishi", "Ryosuke Nakamura"], [], "https://64.media.tumblr.com/734502d375e51134ebc6c8f63ce2511b/c7aa3cc407fca320-55/s250x400/1322ef7eab1b97dc737648c693b9dd43252585a0.jpg"],

["short", ["The Crimson Permanent Assurance"], "1983", ["2023 06 23"], 0, ["ger"], ["comedy"], ["bini", "syl", "je"], [], ["Terry Gilliam"], [], "https://64.media.tumblr.com/18f2d7e6ab839689a5e4e6688acefcc6/667c53cc067346d7-5b/s250x400/228b2619cbbc805132cbf305950614810c2b896e.jpg"],

["audiobook", ["Ich, Odin, und die wilden Wikinger. Götter und Helden erzählen nordische Sagen"], "2019", [["2023 06 26", "2023 07 12"]], 6, ["ger"], [], [], ["bibliothek"], ["Frank Schwieger"], ["Peter Kaempfe", "Sabine Falkenberg", "Cathlen Gawlich", "Romanus Fuhrmann", "Frank Bahrenberg", "Ingeborg Wunderlich"], "https://64.media.tumblr.com/693cd21fdaed6589f0cdd78013576b4d/88707d343caee181-13/s250x400/bb5142977d3272be59d0a79dddf08d14f13118e4.jpg"],

["series", ["Saga of Tanya the Evil", "Youjo Senki", "Youjo Senki"], "2017", [["2023 06 07", "2023 07 05", "S1"]], 5, ["ger"], ["action", "fantasy", "anime"], ["bini", "nico"], [], ["Kenta Ihara", "Carlo Zen"], [], "https://64.media.tumblr.com/0bf7f3c6a16b00b6ce2f2e5ce85db319/4809e4c584f7cdff-c7/s250x400/f92e2466c5a2ef4555979f7d035f2359adc14d1f.jpg"],

["series", ["Wandering Witch: The Journey of Elaina", "Wandering Witch: The Journey of Elaina", "Majo no Tabitabi"], "2020", [["2023 07 12", "2023 08 02", "S1"]], 5, ["jap"], ["anime", "adventure", "fantasy"], ["bini", "nico"], [], ["Kazuyuki Fudeyasu", "Jougi Shiraishi"], [], "https://64.media.tumblr.com/bf94b2373e270c9c6fd25b5a14adfa22/00bbb105b7c59f77-73/s250x400/8bd74dc8d8cee2d632271ed8f322f143e80a1825.jpg"],

["film", ["RRR (Rise Roar Revolt)", "RRR"], "2022", [["2023 07 08", "2023 07 15"]], 7, ["eng"], ["action", "drama"], ["bini", "mai"], ["Netflix"], ["S.S. Rajamouli"], ["Ray Stevenson", "Alison Doody"], "https://64.media.tumblr.com/85a55e0ffd218cf5fbf67a71bf209683/4dfbc9a2de55e03e-01/s250x400/c7eb0c80e411f48bcc97f0f486b83bdce4cf25ce.jpg"],

["film", ["Indiana Jones and the Dial of Destiny", "Indiana Jones und das Rad des Schicksals"], "2023", ["2023 07 23"], 6, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Kino", "Indiana Jones"], ["James Mangold"], ["Harrison Ford", "Karen Allen", "Toby Jones"], "https://64.media.tumblr.com/142b7010169555f8e61a8aedf03ed6da/0753295efb7afeb2-31/s250x400/c5c12a91bc1ec41c46729063d9808cc5c4c3108d.jpg"],

["film", ["Nimona"], "2023", ["2023 07 29"], 7, ["ger"], ["animation", "action"], [], ["Netflix"], ["Nick Bruno", "Troy Quane"], [], "https://64.media.tumblr.com/fd7ff063f40ba1ad9103ef4516ffe22a/1a74d43809c95864-40/s250x400/297aca1f1d2892be2a057e10eaccd0035cb9cb3e.jpg"],

["film", ["What a Girl Wants", "Was Mädchen wollen"], "2003", ["2023 07 29"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Dennie Gordon"], ["Kelly Preston", "Colin Firth"], "https://64.media.tumblr.com/21dca32f273be0c5a107b1d0e37152df/c8dd3e609a6531f6-a0/s250x400/7efce46a03da146b562d6ec7f2c398135b159d37.jpg"],

["film", ["Scream"], "2022", ["2023 07 29"], 6, ["ger"], ["horror", "mystery"], [], ["Netflix"], ["Matt Bettinelli-Olpin", "Tyler Gillett"], ["Jenna Ortega", "Dylan Minnette"], "https://64.media.tumblr.com/cefe0dca7ad4397a4e05c963a0ddae3d/095472feee2154cc-aa/s250x400/f1e3254d1a368eb9662c5546ac6f05a077d0ab29.jpg"],

["film", ["Scary Movie 5"], "2013", ["2023 07 30"], 5, ["ger"], ["comedy"], [], ["Netflix"], ["Malcolm D. Lee", "David Zucker"], ["Ashley Tisdale", "Ava Kolker", "Snoop Dogg", "Terry Crews", "Charlie Sheen", "Lindsay Lohan", "Jerry O'Connell", "Usher", "Kate Walsh", "Mike Tyson"], "https://64.media.tumblr.com/e44667ff70f8e6b70b2ad45a03fbc7a8/005926ac54b353e7-a2/s250x400/98b5c85adb17cac0ff3c821066ac07fbe11e735c.jpg"],

["audiobook", ["Das Schweigen der Abtissin"], "2021", [["2023 08 01", "2023 08 02"]], 8, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/452dafb98ce41bd2ba287827c7fe6a10/e6cb6a4f35673c12-97/s250x400/b8306bb86af0b7fef8cf721a9cae4199c305b0de.jpg"],

["audiobook", ["Isottas letzter Wille"], "2022", [["2023 08 02", "2023 08 04"]], 7, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/0d1451a509f894cc513286bc54456baa/54dfb176b1b84358-b4/s250x400/faae64bbb5f8e76dc9703b03ae181e98b2bb3026.jpg"],

["series", ["Wonder Egg Priority"], "2021", [["2023 08 02", "2023 08 30", "S1"], ["2023 08 30", "Watashi no Priority"]], 8, ["jap"], ["anime", "drama", "fantasy", "action"], ["bini", "nico"], [], ["Kristen McGuire", "Shinji Nojima"], [], "https://64.media.tumblr.com/64980883c3720688c45f0553d75febe5/d34e2f0f7c313937-f9/s250x400/fd10173db678295f7be5ab0d470a381f2a2cfe80.jpg"],

["audiobook", ["Sein letztes Abendmahl"], "2022", [["2023 08 05", "2023 08 08"]], 8, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/f3c303d46b2678f903b062e6efaf7d7e/1e501dd28d1de6bc-4a/s250x400/d668761fabbc85477dfd09f6511d31f76ecf8942.jpg"],

["film", ["Barbie"], "2023", ["2023 08 05"], 8, ["ger"], ["comedy"], ["bini", "je"], ["Kino"], ["Greta Gerwig"], ["Margot Robbie", "Alexandra Shipp", "Emma Mackey", "Ana Cruz Kayne", "Ritu Arya", "Dua Lipa", "Ryan Gosling", "Simu Liu", "John Cena", "Michael Cera"], "https://64.media.tumblr.com/339c8e42e8a7ddb06cfa56f7e5f5c353/091dc4ddc628f1a0-1e/s250x400/a53dfe1a3edd09ae6f25ad67236202bce70eb8c0.jpg"],

["comic", ["Homestuck"], ["2009", "2016"], [["2023 08 04", ""]], 0, ["eng"], ["comedy", "adventure"], [], ["watching", "bby"], ["Andrew Hussie"], [], "https://64.media.tumblr.com/dbd56fa57602de75232ea6dc5a9c723a/962912a1219620dc-47/s250x400/341485f84a612c759ae49a8ed3e7a3aa03f86330.pnj"],
/* Act 2 finished 230905 */
/* Act 3 finished 231016 */
	
["film", ["Luckiest Girl Alive", "Ich. Bin. So. Glücklich."], "2022", ["2023 08 06"], 4, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["Mike Barker"], ["Mila Kunis", "Chiara Aurelia"], "https://64.media.tumblr.com/60d090b8498b50dfa20561fa062f6226/eef8d7b6d2a97191-c2/s250x400/2b797da908c27c2ee78d6550ede948af62a33321.jpg"],

["film", ["New York Minute", "Ein verrückter Tag in New York"], "2004", ["2023 08 06"], 4, ["ger"], ["comedy"], [], ["Netflix"], ["Dennie Gordon"], ["Ashley Olsen", "Mary-Kate Olsen"], "https://64.media.tumblr.com/6ba6aaf948c50af73997a2dbd2ec37cb/8e609316e571520e-11/s250x400/e24973425ff6f8e52493d57a18d9a612df79e8d6.jpg"],

["audiobook", ["Alte Geheimnisse schlummern tief"], "2022", [["2023 08 08", "2023 08 12"]], 7, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/0ffba5543925242d49fcfcb47e2cb9ba/8549a79b444c2276-52/s250x400/9d15773c84e98341048f25e1c0c70f25ce15e4f7.jpg"],

["book", ["La sinfonia del tempo breve", "Die Symphonie des Augenblicks", "La sinfonia del tempo breve"], "2009", [["2023 08 09", ""]], 0, ["ger"], [], [], ["watching"], ["Mattia Signorini"], [], "https://64.media.tumblr.com/280cf5ef995af36e96a7b6436eb4b8f0/3680562cf0945c26-f5/s400x600/5e3a0fb07f0a5c9e58cc475dd4822600e57f341c.jpg"],

["film", ["Nellys Abenteuer"], "2016", ["2023 08 12"], 6, ["ger"], ["adventure", "family"], [], ["bibliothek"], ["Dominik Wessely"], ["Flora Li Thiemann"], "https://64.media.tumblr.com/bef01a074ae8d530d9b2e9668eccf0e0/50980d2b1cb1b209-cf/s250x400/fbb4d58ac010b5dae2fb7e4a6557c39fdf9fc97a.jpg"],

["audiobook", ["Das mörderische Manuskript"], "2022", [["2023 08 15", "2023 08 18"]], 9, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/82604a2d83e7863617796d14eb84a0d4/d9ebabab97fbcc29-02/s250x400/bc1813f423f61d082e07235f37dc3c0ffb9dbaa4.jpg"],

["audiobook", ["Das Rätsel des Klosterkellers"], "2023", [["2023 08 19", "2023 08 24"]], 8, ["ger"], ["crime"], [], ["bibliothek", "Kloster, Mord und Dolce Vita - Schwester Isabella ermittelt"], ["Valentina Morelli"], ["Chris Nonnast"], "https://64.media.tumblr.com/6d5292a1bad982e1debffaac7f84318e/76e68c7f27aea97c-c6/s250x400/0cbd529238c7101d51db8a61f64d86003038348c.jpg"],

["film", ["Queen of Niendorf", "Königin von Niendorf"], "2017", ["2023 08 26"], 7, ["ger"], ["family"], [], ["bibliothek"], ["Joya Thome"], [], "https://64.media.tumblr.com/c904abfa9427f6f7e1a13140efe2fd89/dd124705e623c908-9c/s250x400/e7b5590b13cfc43a8a06ce3bdcef20df52cc5067.jpg"],

["film", ["Good Will Hunting", "Good Will Hunting: Der gute Will Hunting"], "1997", ["2023 09 02"], 9, ["eng"], ["drama", "romance"], ["bini", "mai"], ["Netflix"], ["Gus Van Sant"], ["Matt Damon", "Stellan Skarsgård", "Minnie Driver", "Robin Williams"], "https://64.media.tumblr.com/001a30349ff3fbf59832105848e9b8ed/5af3bb044b132d0f-7d/s250x400/62b78d0c1e763a47fec18abd1e6324b3b24c51b2.jpg"],

["series", ["Die drei !!!"], "2023", [["2023 09 07", "2023 09 17", "S1"]], 8, ["ger"], ["crime"], [], ["Disney+"], ["Sina Flammang", "Doris Laske"], [], "https://64.media.tumblr.com/93ceeb11676971f09183ffc8566249b7/cc72d70a7e8c3a83-68/s250x400/9b3e23942e363fc9a2560d955aabd31c7be3f04b.jpg"],

["audiobook", ["V is for Virgin"], "2020", [["2023 09 09", "2023 09 16"]], 6, ["ger"], ["young adult"], [], ["bibliothek"], ["Kelly Oram"], ["Corinna Dorenkamp"], "https://64.media.tumblr.com/f45758bce49e70614ef0900b33a49c9c/b592fedd3e42edfe-ba/s250x400/b28f20aed210908f9f861621608cc83d8138512d.jpg"],

["book", ["Silber – Das dritte Buch der Träume"], "2015", [["2023 09 14", ""]], 0, ["ger"], [], [], ["bibliothek", "watching"], ["Kerstin Gier"], [], "https://64.media.tumblr.com/415bbde9e69a3d43cebcf93262256bd5/e6cbce3d3e2f2456-c1/s250x400/d8b737a4569e3cf708a162c08521d5d5f21b98e6.jpg"],

["film", ["Totally True Love", "Anne liebt Philipp", "Jørgen + Anne = sant"], "2011", ["2023 09 19"], 6, ["ger"], ["family", "mystery"], ["je"], ["bibliothek"], ["Anne Sewitsky"], [], "https://64.media.tumblr.com/61820e53d613f1792ca296698239f24a/13f730cc566dc31e-8a/s400x600/ddaf8b4a9d22692eedfbe9973d1d26580ef429b4.jpg"],

["film", ["Wadjda", "Das Mädchen Wadjda"], "2012", ["2023 09 20"], 6, ["ger"], ["drama"], [], ["bibliothek"], ["Haifaa Al-Mansour"], [], "https://64.media.tumblr.com/3ac8b33856641c426cf2d07257381115/2c3fc800755b5d44-61/s250x400/d1f29ae1f2e7d05e50719e401386d7256e56fe6c.jpg"],

["film", ["Plan A Plan B"], "2022", ["2023 09 23"], 5, ["hin"], ["comedy", "romance"], ["bini", "mai"], ["Netflix"], ["Shashanka Ghosh"], [], "https://64.media.tumblr.com/cd7ec6bede9be59d23560edfce03fce4/0dd939efc75415be-e0/s250x400/430af5b6ef8af7f42359e6da368cd5f506e9499f.jpg"],

["film", ["The Chorus", "Die Kinder des Monsieur Mathieu", "Les choristes"], "2004", ["2023 09 24"], 7, ["ger"], ["drama", "music"], [], ["bibliothek"], ["Christophe Barratier"], ["Kad Merad"], "https://64.media.tumblr.com/de0a57975b9d978981a766ef2badc975/591bf1b64e72c4a4-ea/s250x400/0ba8ad6681bf6d1f339912804c47a85480a58bbb.jpg"],

["film", ["Love at First Sight", "Die statistische Wahrscheinlichkeit von Liebe auf den ersten Blick"], "2023", ["2023 09 24"], 6, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Vanessa Caswill"], ["Haley Lu Richardson", "Ben Hardy"], "https://64.media.tumblr.com/f491162dc045e1000b49e98016652e62/7a58fa4f61d96b9d-e5/s250x400/3aff1a934e79a66f3e25fda44c6f9b2d80546c70.jpg"],

["film", ["Offline: Are You Ready for the Next Level?", "Offline - Das Leben ist kein Bonuslevel"], "2016", ["2023 09 30"], 5, ["ger"], ["adventure", "comedy"], [], ["bibliothek"], ["Florian Schnell"], ["Moritz Jahn", "Mala Emde"], "https://64.media.tumblr.com/f30215fd593b6c2ff33c314b2d7fe7b4/ec8601b8e321c9f0-d8/s250x400/1260165125423288bbb937ccaf06a4e6a82f737b.jpg"],

["film", ["Suck Me Shakespeer 3", "Fack ju Göhte 3"], "2017", ["2023 10 01"], 5, ["ger"], ["comedy"], [], ["Netflix"], ["Bora Dagtekin"], ["Elyas M'Barek", "Jella Haase", "Katja Riemann", "Gizem Emre", "Lena Klenke", "Lea van Acken"], "https://64.media.tumblr.com/6df44b65354b09f7c9df1e60e7a87411/df81f7d35a86e8d2-b4/s250x400/d4aa627f0b1832242abad242d91249b5d1d53a8a.jpg"],

["short", ["From A to Q"], "2021", ["2023 10 02"], 4, ["eng"], [], [], [], ["Emmalie El Fadli"], [], "https://64.media.tumblr.com/a4fd4756b43486977476a10badd53b95/d62775a19eb496a8-59/s250x400/56488016d37e981ec2d9a945524ef2e4a76f695f.jpg"],

["film", ["My Extraordinary Summer with Tess", "Meine wunderbar seltsame Woche mit Tess", "Mijn bijzonder rare week met Tess"], "2019", ["2023 10 02"], 8, ["ger"], ["comedy", "drama"], [], ["bibliothek"], ["Steven Wouterlood"], ["Josephine Arendsen"], "https://64.media.tumblr.com/9f7e6d17289d56215274b40d1e5b3bda/59bdfb580a18fd2f-74/s250x400/0f0c561fc50736cc2a314bb55f027090ab062109.jpg"],

["film", ["My Best Friend Anne Frank", "Meine Beste Freundin Anne Frank", "Mijn beste vriendin Anne Frank"], "2021", ["2023 10 03"], 5, ["ger"], ["drama"], [], ["Netflix"], ["Ben Sombogaart"], ["Josephine Arendsen"], "https://64.media.tumblr.com/c2c2002cc9b91fb7dbe9773aa5fd6cc2/95f0ccfcef5f2f30-d1/s250x400/7f5307aa5c80c39a3cc1b2853599ae63b346e4ea.jpg"],

["film", ["Don't Breathe 2"], "2021", ["2023 10 08"], 8, ["ger"], ["action", "crime"], [], ["Netflix"], ["Rodo Sayagues"], ["Stephen Lang"], "https://64.media.tumblr.com/3bc0b3843a4d70dbf25dd86aa1eeaa7c/f481a0c8f40d5d60-5a/s250x400/1fd71560591568472fd84ed0df171b3fec231b7d.jpg"],

["film", ["Run Rabbit Run"], "2023", ["2023 10 08"], 0, ["ger"], ["horror", "thriller"], [], ["Netflix", "dropped"], ["Daina Reid"], [], "https://64.media.tumblr.com/ed868a3456d0fb5421a37aa1b89e98d5/09aa81c5e63b3aba-34/s250x400/699926324587a0817eb71dac2c52e767878972fc.jpg"],

["film", ["The Strays"], "2023", ["2023 10 09"], 4, ["ger"], ["drama", "thriller"], [], ["Netflix"], ["Nathaniel Martello-White"], ["Ashley Madekwe"], "https://64.media.tumblr.com/ba6b3766808b3ec3bdac52a7ba967291/5247c6fcee3c4514-1c/s250x400/4428c77de7f8c617b42e517f3480744533e7ec29.jpg"],

["film", ["The Mummy", "Die Mumie"], "1999", ["2023 10 09"], 6, ["ger"], ["action", "adventure"], ["je"], ["Netflix"], ["Stephen Sommers"], ["Rachel Weisz"], "https://64.media.tumblr.com/7e9d3ce4e9dde185ea969eebfd64e87e/8a580e0c41a8ea20-cd/s250x400/db472d83a9eea87a555d9162bb277a1d4a80220a.jpg"],

["film", ["Die Wilden Kerle: Alles ist gut, solange du wild bist!"], "2003", ["2023 10 09"], 5, ["ger"], ["family"], [], ["Disney+", "Die Wilden Kerle"], ["Joachim Masannek"], ["Jimi Blue Ochsenknecht", "Sarah Kim Gries"], "https://64.media.tumblr.com/22572c7b8f344487e885fa2de912b413/7cb33ba879c25a00-8c/s250x400/3e322022270464516f92d8a75264561613da9a53.jpg"],

["film", ["Die Wilden Kerle 2"], "2005", ["2023 10 10"], 5, ["ger"], ["family", "comedy"], [], ["Disney+", "Die Wilden Kerle"], ["Joachim Masannek"], ["Jimi Blue Ochsenknecht", "Sarah Kim Gries"], "https://64.media.tumblr.com/6ef10808a66d51aad79d6ed094e63ff3/11b51b4ed8433275-72/s400x600/000c109c4846da53850886d739ff3ccbc0104225.jpg"],

["film", ["The School for Good and Evil"], "2022", ["2023 10 10"], 7, ["ger"], ["action", "comedy"], ["je"], ["Netflix"], ["Paul Feig"], ["Kit Young", "Sophia Anne Caruso", "Cate Blanchett"], "https://64.media.tumblr.com/1d14a63f5cad36093000b5ce82b50a2d/efcbb970819c5032-0c/s250x400/25e6c6eb9cbce573931dccf938d202a3f5193da9.jpg"],

["film", ["Die Wilden Kerle 3"], "2006", ["2023 10 11"], 4, ["ger"], ["comedy", "family"], [], ["Disney+", "Die Wilden Kerle"], ["Joachim Masannek"], ["Jimi Blue Ochsenknecht", "Sarah Kim Gries"], "https://64.media.tumblr.com/b2b9f7f142df4ef19424a41bd2c63e51/5540475b8f8545ca-7b/s250x400/4686beb76ea65c22d1f2bc05bb443808d79f598f.jpg"],

["film", ["The Curse of Bridge Hollow"], "2022", ["2023 10 11"], 7, ["ger"], ["adventure", "comedy"], ["je"], ["Netflix"], ["Jeff Wadlow"], ["Lauren Lapkus"], "https://64.media.tumblr.com/75f465a908efd8a346ddafa437fa1f8c/2733af9ea6032f0e-ad/s250x400/9cbf26c5fb811a4b9c4a1692b3ece1559a0b545a.jpg"],

["series", ["Everything Now"], "2023", [["2023 10 12", "2023 10 19", "S1"]], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ripley Parker", "Roanne Bardsley", "Dylan Brady"], ["Stephen Fry"], "https://64.media.tumblr.com/ff3a9beee0bbc15a2cfa2a5c54d33c3f/c8db776420afd50f-2a/s250x400/4d4a651bd502f7ba5abc52cf339b42e89d94c9e0.jpg"],

["film", ["Die Wilden Kerle 4"], "2007", ["2023 10 12"], 4, ["ger"], ["comedy", "family"], [], ["Disney+", "Die Wilden Kerle"], ["Joachim Masannek"], ["Jimi Blue Ochsenknecht", "Sarah Kim Gries"], "https://64.media.tumblr.com/f9139dc689d8ef7477cdd27cb0351dd7/2a78d46dad8ab572-b8/s250x400/fb6c156b45df7232799cb9e780c1541a24aee112.jpg"],

["film", ["Die Wilden Kerle 5"], "2008", ["2023 10 13"], 5, ["ger"], ["comedy", "family"], [], ["Disney+", "Die Wilden Kerle"], ["Joachim Masannek"], ["Jimi Blue Ochsenknecht", "Sarah Kim Gries"], "https://64.media.tumblr.com/d6f25d88544554fdad112f4e13a01a42/fc1c9a6241260659-b9/s250x400/41d9b4b6ae3391a26d6d9c860bdba0dafa607548.jpg"],

["film", ["Die Wilden Kerle 6 - Die Legende lebt"], "2016", ["2023 10 15"], 4, ["ger"], ["action", "adventure"], [], ["Disney+", "Die Wilden Kerle"], ["Joachim Masannek"], ["Jimi Blue Ochsenknecht", "Sarah Kim Gries"], "https://64.media.tumblr.com/aed131cd1b2b177f60f6b6b74b3a65dc/d8e3eb25910f6365-57/s250x400/c10a5f826aa901b4abb99f56f69ddffe2ad3db8c.jpg"],

["series", ["Silent Witness"], ["1996", ""], [["2023 10 15", "S19E1 & E2"]], 8, ["ger"], ["crime"], ["syl", "je"], [], ["Dudi Appleton"], [], "https://64.media.tumblr.com/6b47476c3e43b3ff19c1caa3a776a304/953b8944c7e523bd-7c/s250x400/e69eeda4277f48e48b8b19349eaa5cb9d6bc061d.jpg"],

["audiobook", ["Vincent flattert ins Abenteuer"], "2022", ["2023 10 17"], 4, ["ger"], ["adventure"], [], ["bibliothek"], ["Sonja Kaiblinger"], ["Christian Rudolf"], "https://64.media.tumblr.com/a6d859ed3e31425871e82434359d5120/e0d9dfe95966bd56-5c/s250x400/61add0a9bb470d2c9c4ef189ceed2a11b2023fdb.jpg"],

["audiobook", ["Vincent und das Geisterlama"], "2022", ["2023 10 17"], 4, ["ger"], ["adventure"], [], ["bibliothek"], ["Sonja Kaiblinger"], ["Christian Rudolf"], "https://64.media.tumblr.com/e4916a2e4b5ede5e45732ba30e2ffc64/476d775c139e021c-5d/s250x400/b6b47552457d9ef113e951fccc9edfe237df2c4b.jpg"],

["film", ["Avatar: The Way of Water"], "2022", [["2023 10 23", "2023 10 25"]], 8, ["ger"], ["action", "adventure"], ["bini", "nico"], ["Disney+"], ["James Cameron"], ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"], "https://64.media.tumblr.com/5d939c5d537f6c78a5358fb7c7b76ce9/3d9c444cb5301eec-20/s250x400/4da20fb477cb01c2057b5bf0a171466eca5ddc0b.jpg"],

["film", ["Of Mice and Men", "Von Mäusen und Menschen"], "1992", ["2023 10 29"], 8, ["ger"], ["drama", "western"], ["bini", "syl"], ["bibliothek"], ["Gary Sinise"], ["Gary Sinise", "John Terry"], "https://64.media.tumblr.com/737fe944e99b4e51575b679c1c4880f1/5380813e916f97ac-b1/s250x400/893e1cce1a3f581c19a0924f75b8086c825d04aa.jpg"],

["film", ["The Greatest Showman", "Greatest Showman"], "2017", ["2023 10 30"], 7, ["ger"], ["biography", "drama", "musical"], [], ["bibliothek"], ["Michael Gracey"], ["Hugh Jackman", "Michelle Williams", "Zac Efron", "Zendaya", "Rebecca Ferguson"], "https://64.media.tumblr.com/7231045286a4f8498f83e7bc7d55ba49/e1bfb7fa3ea2d562-cd/s250x400/581becbad3d15f3fe398e05545c345e8e2931e2f.jpg"],

["film", ["The Imaginarium of Doctor Parnassus"], "2009", ["2023 10 31"], 6, ["ger"], ["adventure", "comedy"], [], ["bibliothek"], ["Terry Gilliam"], ["Andrew Garfield", "Lily Cole", "Johnny Depp", "Jude Law", "Christopher Plummer"], "https://64.media.tumblr.com/4f298d272de1853574e266c6a4b34522/52c67f9b811f4bb4-ef/s250x400/a65b14b439a9c451044e5189651055d7c0fbdbe1.jpg"],

["film", ["Detective Conan 26: Black Iron Submarine", "Detektiv Conan 26: Das schwarze U-Boot"], "2023", ["2023 10 31"], 7, ["ger"], ["anime", "action"], ["bini"], ["Conan", "Kino"], ["Yuzuru Tachikawa"], [], "https://64.media.tumblr.com/fad23462791a0a593a87217fa1994563/e8599ee2825bedf8-d2/s250x400/b7eefa1ae7d1d1fc6d0c625f7750ef8dd337e81c.jpg"],

["film", ["Hook"], "1991", ["2023 11 03"], 6, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Steven Spielberg"], ["Dustin Hoffman", "Robin Williams", "Julia Roberts"], "https://64.media.tumblr.com/47161f7b1af2acb2b589fa33b75a6539/54d9fe5754f76851-c9/s250x400/74b314a13a47eab593423e97ced7aea9f9837771.jpg"],

["film", ["Locked In"], "2023", ["2023 11 04"], 6, ["ger"], ["horror", "mystery"], [], ["Netflix"], ["Nour Wazzi"], ["Famke Janssen"], "https://64.media.tumblr.com/af6f4b13f6156be29fe9716d3ee537cc/14012cd597387057-79/s250x400/2ef6141c25d7cad359122870d509ab4465918895.jpg"],

["film", ["Wingwomen", "Diebinnen", "Voleuses"], "2023", ["2023 11 05"], 4, ["ger"], ["action", "comedy"], [], ["Netflix"], ["Mélanie Laurent"], ["Mélanie Laurent"], "https://64.media.tumblr.com/8a7cdf745c4ef7816d5c096acff8ad23/0475a9098ce0b548-30/s250x400/c2c6c6857826443705dd05d88cb67d89f5aa9e29.jpg"],

["film", ["The Killer", "Der Killer"], "2023", ["2023 11 12"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["David Fincher"], ["Michael Fassbender", "Tilda Swinton"], "https://64.media.tumblr.com/ee16f70c0d886746a59af1dceebb3213/e56fe079d62fafe4-36/s250x400/0217065eb88d26929b02872b1bc2350a785cf5bc.jpg"],

["film", ["Spy Kids"], "2001", ["2023 11 12"], 5, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Robert Rodriguez"], ["Carla Gugino", "Tony Shalhoub"], "https://64.media.tumblr.com/c6c12706a009a6ed8e74790d6b720a99/63b85f74ba0be278-79/s250x400/feb671e632c0ada28da3e3b6673e710b11c03fea.jpg"],

["film", ["Das Leben danach"], "2017", ["2023 11 12"], 5, ["ger"], ["drama"], [], ["Netflix"], ["Nicole Weegmann"], ["Jella Haase", "Martin Brambach"], "https://64.media.tumblr.com/4dcf5814a9e5090bc1739792033bfec2/9a6d3cc9e3a144fd-c8/s250x400/7e6b8335da55fc4ee43d99ffd670fa183ed32584.jpg"],

["film", ["Reminiscence", "Reminiscence: Die Erinnerung stirbt nie"], "2021", ["2023 11 12"], 6, ["ger"], ["mystery", "romance"], [], ["Netflix"], ["Lisa Joy"], ["Hugh Jackman", "Rebecca Ferguson", "Cliff Curtis", "Angela Sarafyan", "Thandiwe Newton"], "https://64.media.tumblr.com/f64c88b789dad29224491c278a3f1a98/fde4ae23810cfba3-c7/s250x400/5bc94ecceca55a70accc8ef4f06a4d953e1ebd63.jpg"],

["series", ["His Dark Materials"], ["2019", "2022"], [["2023 11 17", "", "S1"]], 0, ["ger"], ["adventure", "drama"], ["jessie"], ["watching"], ["Philip Pullman", "Jack Thorne"], ["Dafne Keen"], "https://64.media.tumblr.com/6f5272814abc2f38b3080af92968bca7/2e2f4a1d18bec381-ad/s250x400/56b59e138eaa49256c67483bbe8b73ec7aa9cbd7.jpg"],

["film", ["Cloud Atlas"], "2012", ["2023 11 19"], 4, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["Tom Tykwer", "Lana Wachowski"], ["Tom Hanks", "Halle Berry", "Jim Broadbent", "Hugo Weaving", "Doona Bae", "Hugh Grant", "Martin Wuttke"], "https://64.media.tumblr.com/330046243c0b27ef07718474b6c40be3/920ba7c26833c836-e2/s250x400/2928400ecbbd583050226c6429349707652470c9.jpg"],

["series", ["Toilet-Bound Hanako-kun", "Jibaku Shounen Hanako-kun", "Jibaku Shounen Hanako-kun"], "2020", [["2023 11 20", "2023 12 18", "S1"]], 6, ["ger"], ["anime", "comedy", "supernatural"], ["bini", "nico"], [], ["Iro Aida", "Leah Clark", "Yasuhiro Nakanishi"], [], "https://64.media.tumblr.com/b463e5aeaa179890387de41b69a5087a/463f7646be245d98-b6/s250x400/0814a3824ad0be74a35f44db60634930ebb6c742.jpg"],

["film", ["The Hunger Games: The Ballad of Songbirds & Snakes", "Die Tribute von Panem: The Ballad of Songbirds and Snakes"], "2023", ["2023 11 25"], 6, ["ger"], ["action", "adventure"], ["bini", "je"], ["Kino", "Hunger Games"], ["Francis Lawrence"], ["Fionnula Flanagan", "Flora Li Thiemann", "Jason Schwartzman"], "https://64.media.tumblr.com/779dd9713bb09d2b009655b9bf41d2b3/96683391f2f1cefe-10/s250x400/d9fe6af752dc825f36ad04c1f6b75415e055350f.jpg"],

["series", ["Scott Pilgrim Takes Off", "Scott Pilgrim hebt ab"], "2023", [["2023 11 26", "S1"]], 7, ["ger"], ["animation", "action", "comedy"], [], ["Netflix"], ["BenDavid Grabinski", "Bryan Lee O'Malley"], [], "https://64.media.tumblr.com/1e39c212669001ee8f879a3ca2dc4d81/cdebcf44e0fe3f2f-83/s250x400/fd3aa4466f79ddbcc9ccf46e249bf95212d292a9.jpg"],

["audiobook", ["The Hobbit", "Der Hobbit"], "1937", [["2023 11 27", "2023 12 17"]], 8, ["ger"], ["fantasy", "adventure"], [], ["Middle Earth", "bibliothek"], ["J. R. R. Tolkien"], ["Gert Heidenreich"], "https://64.media.tumblr.com/929959ec765e7d578b0f96b6b8b052c3/e0f51c438a47316d-bb/s250x400/9d85cfb4a3b8f4b3278d648e7da067b5e9c2b776.jpg"],

["film", ["Victoria"], "2015", ["2023 12 04"], 4, ["ger"], ["crime", "drama"], [], ["Netflix"], ["Sebastian Schipper"], ["Frederick Lau", "Max Mauff", "Lena Klenke"], "https://64.media.tumblr.com/37973dd25843eca66662c4a25d96342f/1d8a691b85643fb1-be/s250x400/7cb2dfe4aee1c20e21ded92860dba9e95124db25.jpg"],

["film", ["Family Switch"], "2023", ["2023 12 04"], 5, ["ger"], ["comedy", "family"], ["je"], ["Netflix"], ["McG"], ["Jennifer Garner", "Emma Myers", "Matthias Schweighöfer", "Ed Helms"], "https://64.media.tumblr.com/d027c7e4894bcc8385b4d508287302c8/b228ffbb642bb4b1-e5/s250x400/f45581db79bfaf4684f62cdc171335171954cf34.jpg"],

["film", ["Heart of Stone"], "2023", ["2023 12 04"], 8, ["ger"], ["action", "crime"], ["je"], ["Netflix"], ["Tom Harper"], ["Gal Gadot"], "https://64.media.tumblr.com/a4e1429ffe66e2832311e458b3f7f27c/3a35cf8773813d9a-60/s250x400/3286689dee1e5fd98a5ee8201283776f609bed9c.jpg"],

["film", ["The Rundown", "Welcome to the Jungle"], "2003", ["2023 12 05"], 6, ["ger"], ["action", "adventure"], ["je"], ["Netflix"], ["Peter Berg"], ["Dwayne Johnson", "Christopher Walken"], "https://64.media.tumblr.com/65ec2fbae146f6e591c85da185e3a4b1/55d49577b4ac54d7-ee/s250x400/13084d9d1357d73dad394e1589096e69373fee3b.jpg"],

["film", ["The Mother"], "2023", ["2023 12 05"], 6, ["ger"], ["action", "thriller"], [], ["Netflix"], ["Niki Caro"], ["Omari Hardwick"], "https://64.media.tumblr.com/b1f04bc25768fd9208ea9c4f1bb8bde2/b36bbf8c9d51d7aa-fc/s250x400/442a97012627c3e4f54891915f50b1854fd632c2.jpg"],

["film", ["Dark Phoenix", "X-Men: Dark Phoenix"], "2019", ["2023 12 05"], 8, ["ger"], ["action", "adventure"], [], ["Disney+", "X-Men", "Marvel"], ["Simon Kinberg"], ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Nicholas Hoult", "Tye Sheridan", "Alexandra Shipp", "Evan Peters", "Jessica Chastain", "Sophie Turner"], "https://64.media.tumblr.com/6ef85a6240eb3dff554d8a47f6d03f17/8a80fbe94d900a5f-32/s250x400/a4f35d707b39724889b8a98bb8cf8d72423f4234.jpg"],

["film", ["Mission: Impossible - Fallout"], "2018", ["2023 12 06"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Christopher McQuarrie"], ["Tom Cruise", "Henry Cavill", "Ving Rhames", "Simon Pegg", "Rebecca Ferguson", "Vanessa Kirby"], "https://64.media.tumblr.com/0277077663f088898f1db47d5b5aa496/ee9ddbe48c674792-ba/s250x400/99f981327d53a871ee76ac0cd14fb98041fbf199.jpg"],

["film", ["The Sleepover"], "2020", ["2023 12 06"], 4, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Trish Sie"], [], "https://64.media.tumblr.com/9d5ab7bb26623cadf439e19b81711b62/3e9f77b3a0c67813-ca/s250x400/ac853c2ca4c0aad921f6a91675b5ad58e28b325f.jpg"],

["film", ["Paradise"], "2023", ["2023 12 06"], 7, ["ger"], ["action", "sci-fi"], ["syl", "je"], ["Netflix"], ["Boris Kunz"], [], "https://64.media.tumblr.com/541e803a35bb377951b81d2f734eddb7/a163a022507352f7-07/s250x400/db89fe13590078fa181501d45f978303a77969ab.jpg"],

["film", ["A Haunting in Venice"], "2023", ["2023 12 07"], 5, ["ger"], ["crime", "drama"], [], ["Disney+"], ["Kenneth Branagh"], ["Kenneth Branagh"], "https://64.media.tumblr.com/d6b3e8e7e10fad8415d00b0cddc28ff8/608f583f8045ee27-7c/s250x400/9b98d097c00a9182d4d64d846f2b3f652a3ae867.jpg"],

["film", ["We Have a Ghost"], "2023", ["2023 12 08"], 7, ["ger"], ["adventure", "comedy"], ["je", "syl"], ["Netflix"], ["Christopher Landon"], ["David Harbour", "Anthony Mackie", "Tig Notaro"], "https://64.media.tumblr.com/c2c953087ffd7919ee94d6ea17dfe1d2/70ce5ba714f4c903-cd/s250x400/c32446a5e4bd1dae25f868768ec47cfb625b0518.jpg"],

["film", ["Hubert und Staller - Eine schöne Bescherung"], "2018", [["2023 12 08", "2023 12 09"]], 5, ["ger"], ["comedy", "crime"], ["syl", "je"], ["Netflix"], ["Sebastian Sorger"], ["Christian Tramitz"], "https://64.media.tumblr.com/0c228774887f2e172824a6843cf514ae/52ba274431a12f42-bd/s250x400/f74ceeb33470f431ae21e09de1506e0a51e2cab4.jpg"],

["film", ["Haunted Mansion", "Geistervilla"], "2023", ["2023 12 08"], 6, ["ger"], ["comedy", "drama"], ["je"], ["Netflix"], ["Justin Simien"], ["Owen Wilson", "Danny DeVito"], "https://64.media.tumblr.com/0e4cde94a631c650841e280867497d47/d43079bd6a875237-06/s250x400/b9918588dcc36b6d8f1a4f58c65743ee84321d66.jpg"],

["film", ["The Lego Movie 2: The Second Part", "The Lego Movie 2"], "2019", ["2023 12 08"], 6, ["ger"], ["animation", "action"], ["bini", "je", "syl"], ["Netflix"], ["Mike Mitchell"], [], "https://64.media.tumblr.com/731826dd0727d9e3608903fb5efff483/54d6e5089bd05591-90/s250x400/955369ad23678d74f90f52679461d2c6e5bee2d6.jpg"],

["film", ["Bumblebee"], "2018", ["2023 12 08"], 6, ["ger"], ["action", "adventure"], ["bini"], ["Netflix"], ["Travis Knight"], ["Hailee Steinfeld", "Jorge Lendeborg Jr.", "John Cena"], "https://64.media.tumblr.com/ce8444c96fab06a5bf31633fe8eb7a58/99d486fd2059c64e-6f/s250x400/e9fe6b66c92242a8bb24876e41b693a400555f76.jpg"],

["film", ["Salt"], "2010", ["2023 12 09"], 7, ["ger"], ["action", "thriller"], ["bini", "syl"], ["Netflix"], ["Phillip Noyce"], ["Angelina Jolie", "Liev Schreiber", "Chiwetel Ejiofor", "August Diehl"], "https://64.media.tumblr.com/2b852132be6a8890890ac5f60e57c70b/8ef1c42b387c2598-e4/s250x400/7a835bd00c35da3cc4597aa68439b720465f8b8e.jpg"],

["film", ["The Transporter"], "2002", ["2023 12 09"], 5, ["ger"], ["action", "crime"], ["bini"], ["Netflix"], ["Louis Leterrier", "Corey Yuen"], ["Jason Statham"], "https://64.media.tumblr.com/f2fbe77df38c0d3495c8a83d2ed8f0a9/86d586b5ef660b46-79/s250x400/8857598890cea29c32ca6aa64d9fa13479a08f18.jpg"],

["film", ["Kabhi Alvida Naa Kehna", "Kabhi alvida naa kehna - Never Say Goodbye"], "2006", ["2023 12 10"], 0, ["hin"], ["drama", "romance", "bollywood"], ["bini"], ["Netflix"], ["Karan Johar"], ["Amitabh Bachchan", "Shah Rukh Khan", "Rani Mukerji"], "https://64.media.tumblr.com/05fa9c2f141c703f4a529d0349e8c505/0b4487ef147abeca-8c/s250x400/051b4e6074da5918dcfb4da037377a07b03e8081.jpg"],

["film", ["Invisible Sue"], "2018", ["2023 12 19"], 6, ["ger"], ["adventure", "family"], [], ["bibliothek"], ["Markus Dietrich"], [], "https://64.media.tumblr.com/91f30315c3d0571ccf4bb68712d71d2b/7c7efe2b21663845-cf/s250x400/1f863364cc8768feed73433c256c8098ba104f57.jpg"],

["film", ["Molly Moon and the Incredible Book of Hypnotism", "Molly Moon"], "2015", ["2023 12 21"], 5, ["ger"], ["adventure", "family"], [], ["bibliothek"], ["Christopher N. Rowley"], ["Raffey Cassidy", "Dominic Monaghan"], "https://64.media.tumblr.com/5859ddea36ad039a1f962f2f79068cfc/e68c3b0aed7aa6a2-d2/s250x400/31a54ccbc951ef70e5ddc3b17f51caae321ef21c.jpg"],

["film", ["The Boy and the Heron", "Der Junge und der Reiher", "Kimitachi wa Dou Ikiru ka"], "2023", ["2023 12 21"], 7, ["ger"], ["anime", "adventure"], ["bini"], ["Kino", "Ghibli"], ["Hayao Miyazaki"], [], "https://64.media.tumblr.com/bd0136bea499cbc92aadd81a67f53793/88192662e93d0f81-4b/s250x400/20c12295c6ab3e80fc2bc0eb3c5c5b4487750676.jpg"],

["film", ["Wild Witch", "Wildhexe", "Vildheks"], "2018", ["2023 12 22"], 4, ["ger"], ["adventure", "family"], [], ["bibliothek"], ["Kaspar Munk"], [], "https://64.media.tumblr.com/f2bdb327bf09a40275e8df4e76acb34d/57e7810e94e27be3-79/s250x400/1c3d7e5f33f0304a0e3335846bc855486f0b87f3.jpg"],

["short", ["Shaun the Sheep: The Flight Before Christmas", "Shaun das Schaf - Es ist ein Schaf entsprungen"], "2021", ["2023 12 24"], 7, ["ger"], ["animation", "comedy"], ["syl"], [], ["Steve Cox"], [], "https://64.media.tumblr.com/6f81a153e05bbdb8b325a731c620b937/a90c1b8aec946033-a8/s250x400/1db5ec2aaa3b350f9c5df8b1fbb3275b0fb194e5.jpg"],

["film", ["Barbie in the 12 Dancing Princesses", "Barbie in Die 12 tanzenden Prinzessinnen"], "2006", ["2023 12 25"], 5, ["ger"], ["animation", "family"], ["bini"], ["Barbie"], ["Greg Richardson"], [], "https://64.media.tumblr.com/78203152a9bdb6cba6d679433f6e2535/ec1abf96841f79a0-ca/s250x400/1be84e2163e510a6c7d62851abf46291a8f7576e.jpg"],

["film", ["Anne of Green Gables", "Anne auf Green Gables"], "2016", ["2023 12 27"], 7, ["ger"], ["drama", "family"], [], ["Anne", "bibliothek"], ["John Kent Harrison"], [], "https://64.media.tumblr.com/741bd2efb6f4165f17c8e1f8178377b8/fa1f5baacdd17d51-0a/s250x400/8d3df864719794cea3da81b6a2ba848c5b64f018.jpg"],

["series", ["Kleo"], "2022", [["2023 12 27", "2023 12 29", "S1"]], 8, ["ger"], ["action", "crime"], [], ["Netflix"], ["Hanno Hackfort", "Bob Konrad"], ["Jella Haase"], "https://64.media.tumblr.com/988a0b596a57ed53d8eea42eac099528/bcef51c3a87cafdf-0c/s250x400/6dec8cb4e3e3c42dc28a559cb71897577e7dd857.jpg"],

["film", ["L.M. Montgomery's Anne of Green Gables: The Good Stars", "Anne auf Green Gables - Teil 2"], "2017", ["2023 12 28"], 6, ["ger"], ["family"], [], ["Anne", "bibliothek"], ["John Kent Harrison"], [], "https://64.media.tumblr.com/f456d80c9f445631f7c81332e4cac7bf/ad0bfc3b3c9de16b-b9/s250x400/9734f1cc7e57cf6b7abd640f4821d74e5694a691.jpg"],

["film", ["L.M. Montgomery's Anne of Green Gables: Fire & Dew", "Anne auf Green Gables - Teil 3"], "2017", ["2023 12 29"], 7, ["ger"], ["comedy", "family"], [], ["Anne", "bibliothek"], ["John Kent Harrison"], [], "https://64.media.tumblr.com/ce0ad5b2671e839f49df3437d4e69b14/39c2e1cd16861d61-0b/s250x400/102b49b359812a6cb1247482194b3a7c3600c848.jpg"],

["series", ["Berlín", "Berlín", "Berlin"], "2023", [["2023 12 29", "2023 12 31", "S1"]], 7, ["ger"], ["action", "crime"], [], ["Netflix"], ["Esther Martínez Lobato", "Álex Pina", "David Barrocal"], ["Pedro Alonso", "Itziar Ituño"], "https://64.media.tumblr.com/92ddf93811becd152522203f64bee8ff/4a336de082ed302c-ae/s250x400/65552e6ec6f6aa419adcc2bc5a2b1290c2a08104.jpg"],

["film", ["tick, tick...BOOM!", "tick, tick... Boom!"], "2021", ["2024 01 01"], 4, ["ger"], ["biography", "comedy"], [], ["Netflix"], ["Lin-Manuel Miranda"], ["Andrew Garfield", "Alexandra Shipp", "Vanessa Hudgens"], "https://64.media.tumblr.com/29ced7117df786b46dff3ca55834b060/456bde344e404374-a7/s250x400/3df20e78055960afabb68265b5cf15a8193127f5.jpg"],

["film", ["White Noise", "Weißes Rauschen"], "2022", ["2024 01 02"], 5, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Noah Baumbach"], ["Don Cheadle", "Adam Driver", "Greta Gerwig", "Raffey Cassidy"], "https://64.media.tumblr.com/916c77f9a2c34d4685b8a9bc09de8e14/c893acd7b3493dba-7d/s250x400/d68d629d27cf7104fc0970eec8f6bb86d1139159.jpg"],

["film", ["Mudbound"], "2017", ["2024 01 04"], 7, ["ger"], ["drama", "war"], [], ["Netflix"], ["Dee Rees"], ["Carey Mulligan"], "https://64.media.tumblr.com/a280d79aba676214e7442695b07078bb/bf58dbc204c20552-11/s250x400/64158a5d12a61eb912bdea07f2c7850dd10172b5.jpg"],

["series", ["Bodies"], "2023", [["2024 01 05", "", "S1"]], 0, ["ger"], ["crime", "drama"], [], ["Netflix", "watching"], ["Si Spencer", "Paul Tomalin"], [], "https://64.media.tumblr.com/58873ac18641b2fb44695740f58ef551/1f83ebb6dafa459c-a7/s250x400/be1c1a0faece211e6424f5d92edb9f73741385bd.jpg"]

/*
,

["type", ["title"], "pub year", ["dates"], rating, ["lang"], ["genre"], ["watched with"], ["tags"], ["creator"], ["actors"], "image"]
*/
	        
];
