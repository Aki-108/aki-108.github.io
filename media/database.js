var database = [
	        /*typ, title [eng, ger, org], watch count, pub year, watch dates, rating, languages, genre, watched with, tags, director, actors, image
	        

["short", ["Unser Vater Markus Specht"], "2017", ["2017 12 28"], 1, ["ger"], [], [], [], ["Josef Boltz"], [], "https://66.media.tumblr.com/402dce37f1f0ad1cd5c8f4b4602a31e1/8c22b7b053542efe-27/s250x400/904c39bae710d34ddee4d2ad4ab53c7765ec616d.jpg"],
	        
["series", ["The Monkees"], "1966 - 1968", ["", "", "S1 - S1E8"], 0, ["eng"], ["comedy", "music"], [], [], ["Paul Mazursky", "Larry Tucker"], [], "https://66.media.tumblr.com/5f2c55240dffd0f9ac3b2ade18ddafe6/tumblr_of31ovPvOi1v2s5upo1_250.jpg"],
	        
["series", ["Pingu"], "1986 - 2010", ["", "", "S1 - S1E19"], 0, ["ger"], ["animation"], [], [], ["Graham Alborough", "Erika Brueggeman", "Jackie Cockle"], [], "https://68.media.tumblr.com/c9ce3e098537062e390f963a021d3333/tumblr_of32gcVYcL1v2s5upo1_250.jpg"],
	        
["series", ["Ned's Declassified School Survival Guide", "Neds ultimativer Schulwahnsinn"], "2004 - 2007", ["", "", "S1 - S1E10"], 0, ["ger"], ["comedy", "family"], [], [], ["Scott Fellows"], [], "https://66.media.tumblr.com/98d116d1af1413c9a23d050738cc6a6a/tumblr_of4trzKh931v2s5upo1_250.jpg"],
	        
["series", ["The War at Home", "Hinterm Sofa an der Front"], "2005 - 2007", [], 0, ["ger"], ["comedy", "romance"], [], [], ["Rob Lotterstein"], ["Michael Rapaport", "Anita Barone", "Rami Malek"], "https://68.media.tumblr.com/bb00730e6a8bd5ad27b2c4a97f0c9e2c/tumblr_ofm8q4bjOO1v2s5upo1_250.jpg"],
	        
["series", ["The Joy of Painting", "Bob Ross: The Joy of Painting"], "1983 - 1994", [["2017 04 23", "", ""]], 0, ["eng"], ["documentary", "family"], [], [], [], [], "https://68.media.tumblr.com/4f4717472d53b3a8a561e4a6a62e96b4/tumblr_oovi0qZw3z1v2s5upo1_250.jpg"],
	        
["series", ["The Astronaut Wives Club"], "2015", [["2016 10 09", "", "S1- S1E5"]], 0, ["eng"], ["drama"], [], [], ["Stephanie Savage"], [], "https://66.media.tumblr.com/fed4b9c511a0e8751101d05c44078579/tumblr_oes5tnCZHx1v2s5upo1_250.jpg"],
	        
["series", ["The Nine Lives of Chloe King"], "2011", [["2016 06", "", "S1 - "]], 0, ["eng"], ["action", "adventure"], [], [], ["Joe Lazarov", "Chris Grismer", "Guy Norman Bee"], ["Skyler Samuels"], "https://68.media.tumblr.com/6f51fd4728bc74667dcf2365d018c711/tumblr_oov0p0FPBM1v2s5upo1_250.jpg"],
	        
["series", ["MythBusters", "MythBusters - Die Wissensjäger"], "2003 - ", [], 0, ["ger"], ["documentary", "mystery"], [], [], ["Peter Rees"], [], "https://68.media.tumblr.com/e0afaae383fed8ecc9e625444a06c618/tumblr_oov10gocsR1v2s5upo1_250.jpg"],
	        
["series", ["The Legend of Korra", "Die Legende von Korra"], "2012 - 2014", [], 0, ["ger"], ["animation", "action"], [], [], ["Michael Dante DiMartino", "Bryan Konietzko"], [], "https://66.media.tumblr.com/0965a0c472ec082166ab735d1e2c9a17/tumblr_ofm9jr2WK81v2s5upo1_250.jpg"]



,
	        
["type", ["title"], "pub year", ["dates"], rating, ["lang"], ["genre"], ["watched with"], ["tags"], ["director"], ["actors"], "image"]
	        
	        */
["film", ["When Marnie Was There", "Erinnerungen an Marnie", "Omoide no Marnie"], "2014", ["2015 05 16", "2015 12 18", "2016 05 22", "2020 05 30"], 8, ["ger"], ["mystery", "psychological", "anime"], ["bini", "nico", "jessie"], ["Ghibli", "Kino"], ["Hiromasa Yonebayashi"], [], "https://40.media.tumblr.com/f1e9673500d6bb13f2e9d51250bbe44b/tumblr_nznjljf6Mc1v2s5upo1_250.jpg"],

["film", ["The Wind Rises", "Wie der Wind sich hebt", "Kaze tachinu"], "2013", ["2014 07 22", "2016 10 03", "2018 06 05"], 8, ["ger"], ["drama", "historical", "romance", "anime"], ["bini", "nico"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/52114f2eab008848e4cd72e12a31119d/tumblr_nznk3gE3mZ1v2s5upo1_250.jpg"],
	        
["film", ["My Neighbor Totoro", "Mein Nachbar Totoro", "Tonari no Totoro"], "1988", ["2014 12 22", "2016 11 12"], 6, ["ger"], ["adventure", "comedy", "fantasy", "supernatural", "anime"], ["bini", "nico"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://49.media.tumblr.com/f8bff8e14844d21b2747f92ca04d2069/tumblr_nznkefPLf91v2s5upo1_250.jpg"],
	        
["film", ["Kiki's Delivery Service", "Kikis kleiner Lieferservice", "Majo no takkyûbin"], "1989", ["2014 12 27", "2015 08 22", "2016 11 12", "2017 04 10", "2019 03 05", "2020 02 08"], 8, ["ger"], ["anime", "adventure", "drama", "fantasy", "supernatural"], ["bini"], ["Netflix", "Ghibli"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/0353a3e154f25023fcb174e18e6009c3/tumblr_nzo8vdVWgT1v2s5upo1_250.jpg"],

["film", ["Wolf Children", "Ame & Yuki - Die Wolfskinder", "Ookami kodomo no Ame to Yuki"], "2012", ["2014 12 29", "2015 08 01"], 6, ["ger"], ["fantasy", "slice of life", "anime", "supernatural"], ["bini", "nico"], [], ["Mamoru Hosoda"], [], "https://40.media.tumblr.com/23024810eaa823c153ea551c001316a1/tumblr_nzrl3cDpKW1v2s5upo1_250.jpg"],

["film", ["Children who Chase Lost Voices", "Die Reise nach Agartha", "Hoshi o ou kodomo"], "2011", ["2015 01 01"], 7, ["ger"], ["adventure", "fantasy", "romance", "anime", "supernatural"], ["bini"], [], ["Makoto Shinkai"], [], "https://37.media.tumblr.com/7717647ddc7f8cf7f8fa3a9b1bb6ddc5/tumblr_nzo8ybWoC91v2s5upo1_250.jpg"],
	        
["film", ["Summer Wars", "Summer Wars", "Samâ uôzu"], "2009", ["2015 02 01", "2015 06 14", "2015 12 08", "2016 09 13", "2017 06 05", "2017 08 01", "2019 09 28"], 10, ["eng", "ger"], ["anime", "adventure", "sci-fi", "comedy"], ["jenny", "sai", "nico", "bini"], ["Netflix", "fav"], ["Mamoru Hosoda"], [], "https://49.media.tumblr.com/2ef91628fe0cf3666f1d96f01d991ec2/tumblr_nzo92zrQyJ1v2s5upo1_250.jpg"],
	        
["film", ["Evangelion: 3.0 You Can (Not) Redo", "Evangelion: 3.0 You Can (Not) Redo", "Evangelion Shin Gekijôban: Kyu"], "2012", ["2015 02 07", "2015 12 29"], 5, ["ger"], ["action", "mecha", "sci-fi", "fantasy", "anime"], ["bini", "nico"], ["Evangelion"], ["Hideaki Anno"], [], "https://40.media.tumblr.com/c4861977cc5b73586035c35c35aa6a84/tumblr_nzo97zbRtJ1v2s5upo1_250.jpg"],
	        
["film", ["The Girl Who Leapt Through Time", "Das Mädchen, das durch die Zeit sprang", "Toki wo Kakeru Shoujo"], "2006", ["2015 03 21", "2015 06 13", "2016 09 14", "2018 09 22", "2020 09 10"], 10, ["ger"], ["adventure", "drama", "romance", "anime", "sci-fi", "supernatural"], ["bini", "nico"], ["DVD"], ["Mamoru Hosoda"], [], "https://49.media.tumblr.com/d972105e1178eb2706ce0640f892ce2a/tumblr_nzo9b6u9xp1v2s5upo1_250.jpg"],
	        
["film", ["Spirited Away", "Chihiros Reise ins Zauberland", "Sen to Chihiro no kamikakushi"], "2001", ["2015 03 21", "2017 01 14", "2018 07 27"], 7, ["ger"], ["adventure", "drama", "fantasy", "supernatural", "anime"], ["bini", "nico"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/dddca9742f78242e54a915d5032dadb8/tumblr_nzo9e7W3zv1v2s5upo1_250.jpg"],

["film", ["The Cat Returns", "Das Königreich der Katzen", "Neko no ongaeshi"], "2002", ["2015 03 21"], 7, ["ger"], ["adventure", "drama", "supernatural", "fantasy", "anime"], ["bini", "nico"], ["Ghibli"], ["Hiroyuki Morita"], [], "https://40.media.tumblr.com/f437c65df4d8a4104bd7de30a74a79d7/tumblr_nzo9jc5SIf1v2s5upo1_r1_250.jpg"],
	        
["film", ["The Secret World of Arrietty", "Arrietty - Die wundersame Welt der Borger", "Kari-gurashi no Arietti"], "2010", ["2015 03 22", "2018 02 05"], 7, ["ger"], ["fantasy", "anime", "supernatural"], ["bini"], ["Ghibli"], ["Hiromasa Yonebayashi"], [], "https://40.media.tumblr.com/bbc33259d5fadd3dd45a64b94af0d0a2/tumblr_nzq20u75lY1v2s5upo1_250.jpg"],
	        
["film", ["Castle in the Sky", "Das Schloss im Himmel", "Tenkuu no Shiro Laputa"], "1986", ["2015 03 22", "2015 08 24", "2016 04 15", "2016 09 30", "2017 11 11", "2018 12 28"], 9, ["ger", "jap"], ["adventure", "fantasy", "romance", "anime", "supernatural", "sci-fi"], ["bini", "nico"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/5fc30a3c889881fd54c01f94cc600c6c/tumblr_nzq21ylFD21v2s5upo1_250.jpg"],
	        
["film", ["Detective Conan 1: The Time Bombed Skyscraper", "Detektiv Conan 1: Der tickende Wolkenkratzer", "Meitantei Conan 1: Tokei-jikake no matenrou"], "1997", ["2015 05 24"], 7, ["ger"], ["anime", "adventure", "comedy", "mystery", "police", "shounen"], ["bini"], ["Conan"], ["Kenji Kodama"], [], "https://40.media.tumblr.com/6f621a6b3a3ccf6ebac81850ce4ec9e0/tumblr_o06rwc2RnN1v2s5upo1_250.jpg"],
	        
["film", ["Rock 'n' Roll Highschool"], "1979", ["2015 05 30"], 7, ["ger"], ["comedy", "music"], [], [], ["Allen Arkush", "Joe Dante"], [], "https://49.media.tumblr.com/0fd703677687acef7e505383ed6100f5/tumblr_nzq22qUlxe1v2s5upo1_250.jpg"],
	        
["film", ["Ongaku Shoujo"], "2015", ["2015 05 31"], 7, ["jap"], ["anime", "music"], ["bini"], [], ["Kenichi Ishigura"], [], "https://40.media.tumblr.com/a24461a431dac16d4777d417644c8d4a/tumblr_nzq2d62JNv1v2s5upo1_250.jpg"],
	        
["short", ["Aki no Kanade"], "2015", ["2015 05 31"], 8, ["jap"], ["music", "school", "slice of life", "anime"], [], [], ["Youhei Suzuki"], [], "https://40.media.tumblr.com/8efe3f15f247a9faa8fb870d7b5d4ea1/tumblr_nzq2dmhmI11v2s5upo1_250.jpg"],
	        
["film", ["Push"], "2009", ["2015 06 16", "2015 10 02", "2016 04 15", "2016 10 19", "2017 08 23", "2018 06 20", "2018 12 03", "2019 12 27"], 10, ["ger", "eng"], ["action", "sci-fi", "supernatural", "thriller"], ["bini"], ["fav", "bby"], ["Paul McGuigan"], ["Dakota Fanning", "Chris Evans", "Corey Stoll", "Camilla Belle", "Nate Mooney"], "https://49.media.tumblr.com/44b7c67f39a406c7e084609086802bb7/tumblr_nzq2e1Jocf1v2s5upo1_250.jpg"],
	        
["film", ["Shaun of the Dead"], "2004", ["2015 06 24", "2017 12 17", "2018 09 20"], 7, ["ger"], ["comedy", "horror"], ["lukas", "bini", "nico"], ["Blood and Ice Cream"], ["Edgar Wright"], ["Simon Pegg", "Bill Nighy", "Martin Freeman"], "https://49.media.tumblr.com/9f4ab1d647d50d031dd3a3ee5cd5d91d/tumblr_nzq2o2wMIN1v2s5upo1_250.jpg"],

["film", ["Submarine"], "2010", ["2015 06 24", "2015 09 24"], 8, ["ger"], ["comedy", "drama", "romance"], [], [], ["Richard Ayoade"], ["Noah Taylor"], "https://40.media.tumblr.com/7d0c3deba109f7639140c1156434d51a/tumblr_nzq2ojum4c1v2s5upo1_250.jpg"],
	        
["film", ["50/50", "50/50: Freunde fürs (Über)Leben"], "2011", ["2015 07 12"], 6, ["ger"], ["comedy", "drama"], [], [], ["Jonathan Levine"], ["Joseph Gordon-Levitt", "Seth Rogen", "Anna Kendrick"], "https://40.media.tumblr.com/b0e652531c5a3953a573b8b41344a3ca/tumblr_nzq2qbuRr31v2s5upo1_250.jpg"],
	        
["film", ["Moonrise Kingdom"], "2012", ["2015 07 14", "2015 12 31", "2017 06 28"], 9, ["ger"], ["adventure", "comedy", "drama"], [], ["bby"], ["Wes Anderson"], ["Bruce Willis", "Bill Murray", "Frances McDormand", "Tilda Swinton", "Kara Hayward"], "https://49.media.tumblr.com/fcfcc34b3812b98c7d186f946afd3b81/tumblr_nzq314u33r1v2s5upo1_250.jpg"],
	        
["film", ["Inside Llewyn Davis"], "2013", ["2015 07 16"], 5, ["ger"], ["drama", "music"], [], [], ["Joel Coen", "Ethan Coen"], ["Carey Mulligan", "Justin Timberlake"], "https://40.media.tumblr.com/038fd2c392a204190449e3a371e5200c/tumblr_nzq31kt6AG1v2s5upo1_250.jpg"],
	        
["film", ["Tales from Earthsea", "Die Chroniken von Erdsee", "Gedo senki"], "2006", ["2015 07 19"], 5, ["ger"], ["adventure", "fantasy", "magic", "anime"], ["bini"], ["Ghibli"], ["Gorô Miyazaki"], [], "https://40.media.tumblr.com/561178e59629591bc8c5b8a5f2da5d16/tumblr_nzq32e8sT21v2s5upo1_250.jpg"],
	        
["film", ["The Secret Life of Walter Mitty", "Das erstaunliche Leben des Walter Mitty"], "2013", ["2015 07 20", "2015 12 05", "2020 05 08"], 10, ["ger"], ["adventure", "comedy", "drama"], [], ["Kino"], ["Ben Stiller"], ["Ben Stiller", "Kristen Wiig", "Ólafur Darri Ólafsson"], "https://37.media.tumblr.com/010b794dc1548291f5c4dc21156153bb/tumblr_nzq3dqgJO81v2s5upo1_250.jpg"],
	        
["film", ["Hot Fuzz", "Hot Fuzz - Zwei abgewichste Profis"], "2007", ["2015 07 23", "2017 12 17"], 7, ["ger"], ["comedy", "action"], ["lukas"], ["Blood and Ice Cream"], ["Edgar Wright"], ["Simon Pegg", "Martin Freeman", "Bill Nighy", "Nick Frost"], "https://40.media.tumblr.com/beb889f85fafd83eeb8c1da42843e1e1/tumblr_nzq3e7k1lV1v2s5upo1_250.jpg"],
	        
["film", ["Adventureland"], "2009", ["2015 07 25"], 5, ["ger"], ["comedy", "drama", "romance"], [], [], ["Greg Mottola"], ["Jesse Eisenberg", "Kristen Wiig", "Kristen Stewart"], "https://40.media.tumblr.com/f725d47f73576dd8b4006228c6c36771/tumblr_nzq3eq10eq1v2s5upo1_250.jpg"],
	        
["film", ["Nim's Island", "Die Insel der Abenteuer"], "2008", ["2015 07 27"], 7, ["ger"], ["adventure", "comedy"], ["bini", "syl", "je"], ["Kino"], ["Jennifer Flackett", "Mark Levin"], ["Jodie Foster", "Gerard Butler", "Judi Dench"], "https://49.media.tumblr.com/d0a05c388d8628e6a74e45b67dd6680a/tumblr_nzrigiYpDm1v2s5upo1_250.jpg"],
	        
["film", ["The Incredibles", "Die Unglaublichen"], "2004", ["2015 07 29", "2018 10 01"], 8, ["ger"], ["animation", "adventure", "supernatural"], ["bini", "syl", "je"], ["Kino", "bby"], ["Brad Bird"], [], "https://49.media.tumblr.com/53c82380bc36735eb002f097151f9351/tumblr_nzrigzOaEW1v2s5upo1_250.jpg"],
	        
["film", ["A Perfect Getaway"], "2009", ["2015 07 30", "2016 04 12", "2016 07 02", "2020 10 01"], 10, ["ger"], ["drama", "mystery"], ["bini", "syl"], ["fav", "DVD"], ["David Twohy"], ["Steve Zahn", "Timothy Olyphant", "Milla Jovovich", "Kiele Sanchez", "Chris Hemsworth"], "https://40.media.tumblr.com/3f89fb73e6d5aad59eb9df373880e399/tumblr_nzrihekfQ71v2s5upo1_250.jpg"],
	        
["film", ["From Up on Poppy Hill", "Der Mohnblumenberg", "Kokuriko-zaka kara"], "2011", ["2015 08 03", "2016 10 16", "2018 02 05", "2020 06 07"], 7, ["ger"], ["historical", "romance", "school", "shoujo", "anime", "drama"], ["bini", "nico"], ["Netflix", "Ghibli"], ["Gorô Miyazaki"], [], "https://40.media.tumblr.com/788cd358bdf0f75292475a20f56598e9/tumblr_nzrl3vOfeI1v2s5upo1_250.jpg"],
	        
["film", ["Stardust", "Der Sternwanderer"], "2007", ["2015 08 04", "2018 01 05", "2020 01 11"], 8, ["ger"], ["adventure", "fantasy", "supernatural"], ["bini"], ["Netflix"], ["Matthew Vaughn"], ["David Kelly", "Ben Barnes", "Kate Magowan", "Michelle Pfeiffer"], "https://40.media.tumblr.com/ba6c7b3010ea06d6a0d7fa801acf7762/tumblr_nzrl4dRhTZ1v2s5upo1_250.jpg"],
	        
["film", ["Joe", "Joe - Die Rache ist sein"], "2013", ["2015 08 05"], 8, ["ger"], ["drama"], [], [], ["David Gordon Green"], ["Nicolas Cage"], "https://40.media.tumblr.com/3faca0156b89ffcbc8d181c7b48d373a/tumblr_nzt4vh86e61v2s5upo1_250.jpg"],
	        
["film", ["National Treasure: Book of Secrets", "Das Vermächtnis des geheimen Buches"], "2007", ["2015 08 06", "2017 07 01", "2019 04 21"], 7, ["ger"], ["action", "adventure", "mystery"], ["bini"], [], ["Jon Turteltaub"], ["Nicolas Cage", "Justin Bartha", "Diane Kruger", "Ed Harris", "Bruce Greenwood", "Ty Burrell"], "https://49.media.tumblr.com/5cc058eb90952375b9951efb094038b4/tumblr_nzt4vyVgnZ1v2s5upo1_250.jpg"],
	        
["film", ["Far Cry"], "2008", ["2015 08 07"], 2, ["ger"], ["action", "adventure", "sci-fi"], [], [], ["Uwe Boll"], ["Til Schweiger"], "https://40.media.tumblr.com/1d83eab289438010b087990fb76f1c65/tumblr_nzt4wfQvhj1v2s5upo1_250.jpg"],
	        
["film", ["National Treasure", "Das Vermächtnis der Tempelritter"], "2004", ["2015 08 08"], 7, ["ger"], ["action", "adventure", "mystery"], ["bini"], [], ["Jon Turteltaub"], ["Nicolas Cage", "Diane Kruger", "Justin Bartha", "Sean Bean", "Mark Pellegrino"], "https://40.media.tumblr.com/d5f1a3f558ffe2fa131bc3e6647f3b58/tumblr_nzt9ucKTJd1v2s5upo1_250.jpg"],
	        
["book", ["Cold Turkey"], "1994", [""], 5, ["ger"], [], [], ["Schule"], ["Angelika Mechtel"], [], "https://68.media.tumblr.com/249a138ced967735a049eec963d20726/tumblr_odcmepFwLd1v2s5upo2_r1_250.jpg"],
	        
["book", ["Kratzer im Lack"], "1981", [""], 4, ["ger"], [], [], ["Schule"], ["Mirjam Pressler"], [], "https://66.media.tumblr.com/dbdc0a665d157d32d94b54a3b20fd57c/tumblr_odcmukT2zg1v2s5upo2_r1_250.jpg"],
	        
["book", ["The Metamorphosis", "Die Verwandlung"], "1915", [""], 5, ["ger"], [], [], ["Schule"], ["Franz Kafka"], [], "https://66.media.tumblr.com/bd91c57058cf2997017d93e8c7322bd2/tumblr_odckvmnaeU1v2s5upo2_r1_250.jpg"],
	        
["audiobook", ["Of Mice and Men", "Von Mäusen und Menschen"], "1937", [["2016 06 20", "2016 07 12"]], 8, ["ger"], [], [], [], ["John Steinbeck"], [], "https://66.media.tumblr.com/2c9eca143441603db2a66aeed3674496/tumblr_odcl9l8fY51v2s5upo2_r1_250.jpg"],
	        
["audiobook", ["At the Mountains of Madness", "Berge des Wahnsinns"], "1931", [["2016 08 22", "2016 09 08"], ["2018 01 04", "2018 02 04"]], 10, ["ger"], [], [], ["fav"], ["H. P. Lovecraft"], [], "https://66.media.tumblr.com/d469a2f9e1a1e32f297e6265ece473fc/tumblr_odcjbtcCGk1v2s5upo2_r1_250.jpg"],
	        
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
	        
["audiobook", ["Day by day Armageddon", "Tagebuch der Apokalypse"], "2007", ["2017 06 15", ["2019 05 22", "2019 05 28"]], 8, ["ger"], [], [], [], ["J. L. Bourne"], [], "https://68.media.tumblr.com/299413fd5822a5338ef788dde2dfbd68/tumblr_os7wq5JYIy1v2s5upo1_250.jpg"],
	        
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
	        
["audiobook", ["Anne of Green Gables", "Anne auf Green Gables"], "1908", [["2019 05 03", "2019 05 10"]], 10, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/679d639b8b39436b1ad25e6245672092/d591ea85407c16e2-c0/s250x400/7a272d4c1fabda215d19b5e23e1b4702bdcce985.jpg"],
	        
["audiobook", ["Needful Things", "In einer kleinen Stadt"], "1991", [["2019 05 13", "2019 05 20"]], 0, ["ger"], [], [], ["dropped"], ["Stephen King"], [], "https://66.media.tumblr.com/5841ff354531eac535c0e9cae41d51cf/50f28ee209bd1926-72/s250x400/fa3a77ce0195953afa47d06f5ab465e724510e09.jpg"],
	        
["audiobook", ["Day by Day Armageddon: Beyond Exile", "Tagebuch der Apokalypse 2"], "2010", [["2019 06 03", "2019 06 12"]], 6, ["ger"], [], [], [], ["J. L. Bourne"], [], "https://66.media.tumblr.com/8c494e7feff7b46b1d6e9338dad01ed2/2377c8de205f15cd-41/s250x400/470f9a24ffe69b42f910ec1be58d44626717a165.jpg"],
	        
["audiobook", ["The Golden Compass", "Der Goldene Kompass"], "1995", [["2019 10 01", "2019 11 05"]], 8, ["ger"], [], [], ["His Dark Materials"], ["Philip Pullman"], [], "https://66.media.tumblr.com/b432a7f45cbb58a2a70a69b5f5426046/2dc3929cff47cfff-ca/s250x400/2f6a6fb41c2c2417285a733182cb4f1243b8256f.jpg"],
	        
["audiobook", ["The Subtle Knife", "Das Magische Messer"], "1997", [["2019 11 06", "2019 11 19"]], 9, ["eng"], [], [], ["His Dark Materials"], ["Philip Pullman"], [], "https://66.media.tumblr.com/0020d596377879b7a5f41ec561061bdf/17eb0eecfeb04300-8c/s250x400/7b328cd64feecab2b4bb061f3d2399e052b7b18a.jpg"],
	        
["audiobook", ["The Amber Spyglass", "Das Bernstein-Teleskop"], "2000", [["2019 11 20", "2020 01 02"]], 8, ["ger"], [], [], ["His Dark Materials"], ["Philip Pullman"], [], "https://66.media.tumblr.com/4db7b730ee17b939fc06d3281cd3ef98/31ac6656dc2ceebe-c0/s250x400/aa24d9a6d8bd5a824c315de9ec241451b0dcf0c4.jpg"],
	        
["audiobook", ["Stardust", "Sternwanderer"], "1997", [["2020 01 02", "2020 01 10"]], 8, ["ger"], ["fantasy"], [], [], ["Neil Gaiman"], [], "https://66.media.tumblr.com/89ea26539e874d0fd7e3b4ba1d751126/d084428b0567585c-f0/s250x400/1c9ed2eb813acd63c2f6ebd7ebbdb324552c3700.jpg"],
	        
["audiobook", ["The Wave", "Die Welle"], "1981", [["2020 01 13", "2020 01 16"]], 7, ["ger"], [], [], [], ["Todd Strasser"], [], "https://66.media.tumblr.com/7364a31adf585ba02dc50060dd22cc10/fbbf3b3cd6670c35-82/s250x400/2c21fe0b6bee44c86e54f3923a8f60cc00d3fe8f.jpg"],
	        
["film", ["Work It"], "2020", ["2020 08 24"], 6, ["ger"], ["comedy", "music"], [], ["Netflix"], ["Laura Terruso"], ["Liza Koshy", "Sabrina Carpenter"], "https://64.media.tumblr.com/5f3091b1f3e687adf828702120cb4499/663c58ba70735ee3-ed/s250x400/424ad335d88e8a0ee456da0f69280490e5ca0904.jpg"],
	        
["film", ["A Whisker Away", "Um ein Schnurrhaar", "Nakitai watashi wa neko wo kaburu"], "2020", ["2020 08 24"], 5, ["ger"], ["anime", "adventure"], [], ["Netflix"], ["Jun'ichi Satô", "Tomotaka Shibayama"], [], "https://64.media.tumblr.com/3b8c3215d38b8b05c6eabb4e39bdbc9a/e399c74ab27ede07-ca/s250x400/a5c8c48d8664f303442d69e99d0e8fd36409f2a2.jpg"],
	        
["film", ["Leave No Trace"], "2018", ["2020 08 24"], 6, ["ger"], ["drama"], [], ["Netflix"], ["Debra Granik"], ["Thomasin McKenzie"], "https://64.media.tumblr.com/a5ca20a4e6af5ac50978c26d2246e5f5/e6ba7407a4bdb518-07/s250x400/01386c222c067d3bd67361fec6f7c2c86ea1e6ca.jpg"],
	        
["film", ["The Gambler"], "2014", ["2017 12 17", "2020 08 25"], 6, ["ger"], ["crime", "drama"], ["syl"], ["Netflix"], ["Rupert Wyatt"], ["Mark Wahlberg", "Brie Larson"], "https://64.media.tumblr.com/59cf82bb84efbd634c6c8761158b6bf2/583455e823677e36-a7/s250x400/af609f8d1fcea387763918adc60780bec89e5358.jpg"],
	        
["film", ["Little Women"], "2019", ["2020 08 25"], 7, ["ger"], ["drama", "romance"], ["syl"], ["Kino", "March-Trilogie"], ["Greta Gerwig"], ["Saoirse Ronan", "Emma Watson", "Florence Pugh", "Laura Dern", "Timothée Chalamet", "Bob Odenkirk"], "https://64.media.tumblr.com/e3f467bff2248eb7b30836a5e2ac65fb/396d88ffa1c90001-e5/s250x400/3de3c348f0a2305e3b8cc594f3accf60005f92c0.jpg"],
	        
["series", ["Love, Chunibyo & Other Delusions", "Trotz Chūnibyō will ich mich verlieben!", "Chuunibyou demo Koi ga Shitai!"], "2012", [["2016 04 30", "S1E1-S1E3"], ["2020 08 20", "2020 08 24", "S1"]], 7, ["jap"], ["slice of life", "comedy", "drama", "romance", "school", "anime"], [], ["Chuunibyou"], ["Katelyn Barr", "Jukki Hanada", "Lainee Hooks"], [], "https://64.media.tumblr.com/92552cbd930a297548aeee4c833a93ff/6482341bf7df8348-72/s250x400/3a40be7e25c20f7790af98846c3abf7db1c65cfa.jpg"],
	        
["book", ["Ein Fall für dich und das Tiger-Team: An der Knochenküste"], "2008", [["2020 08 28", "2020 09 04"]], 6, ["ger"], [], [], [], ["Thomas Brezina"], [], "https://64.media.tumblr.com/17c27a9ef3c235c996169de20ec663a6/4afe09f262fa464e-5a/s250x400/41b6a7112d4d1d57302dd3a02af320fe7262360c.jpg"],
	        
["film", ["Pirates of the Caribbean: At World's End", "Pirates of the Caribbean - Am Ende der Welt"], "2007", ["2016 03 22", "2020 09 01"], 8, ["ger"], ["action", "adventure", "fantasy"], [], ["DVD"], ["Gore Verbinski"], ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Bill Nighy", "Martin Klebba"], "https://64.media.tumblr.com/e28a26238a9e44437d65a27aa6f1dfa8/ad861de3fc9e6317-02/s250x400/30e11ca933e0e1d3e3b73cafc7a8d4f95ceda302.jpg"],
	        
["series", ["Teenage Bounty Hunters"], "2020", [["2020 09 02", "2020 09 03", "S1"]], 7, ["ger"], ["comedy", "crime"], [], ["Netflix"], ["Kathleen Jordan"], ["Haroon Khan"], "https://64.media.tumblr.com/f2879b4e88027d2f63f435ddc839d51e/ced119bf04ce9ebd-8f/s250x400/2f89bd05f5171e617038649490aa3bb3dbfd5dc9.jpg"],
	        
["film", ["What Happened to Monday", "What Happened to Monday?"], "2017", ["2020 09 05"], 7, ["ger"], ["action", "adventure"], ["syl"], ["Netflix"], ["Tommy Wirkola"], ["Noomi Rapace", "Willem Dafoe", "Marwan Kenzari"], "https://64.media.tumblr.com/de05eee06fdc8769637827199fb24ed2/9d69a5cc9bdb41e7-62/s250x400/c6e9fb7e5eaa5d0b2a16460e5022e3e826863392.jpg"],
	        
["series", ["Lost"], ["2004", "2010"], [["2017 08 08", "2017 10 01", "S1-S6"], ["2019 02 15", "2019 07 01", "S1-S6"]], 10, ["ger"], ["adventure", "drama"], ["bini"], ["fav"], ["J.J. Abrams", "Jeffrey Lieber", "Damon Lindelof"], ["Jorge Garcia", "Josh Holloway", "Yunjin Kim", "Evangeline Lilly", "Terry O'Quinn", "Naveen Andrews", "Matthew Fox", "Daniel Dae Kim", "Emilie de Ravin", "Michael Emerson", "Henry Ian Cusick", "Dominic Monaghan", "Elizabeth Mitchell", "Ken Leung", "Nestor Carbonell", "Maggie Grace", "Jeremy Davies", "Ian Somerhalder", "Michelle Rodriguez", "Cynthia Watros", "Rebecca Mader", "Sam Anderson", "Tania Raymonde", "John Terry", "Alan Dale", "William Mapother", "Kevin Durand", "Rodrigo Santoro", "Mark Pellegrino", "Jeff Fahey", "Andrea Gabriel", "Andrew Divoff", "Titus Welliver", "Fionnula Flanagan", "Kevin Tighe"], "https://68.media.tumblr.com/b5d291cc94cf3d575bdce3c73ab8b82a/tumblr_odg5nyKL9D1v2s5upo1_250.jpg"],
	        
["series", ["Avatar: The Last Airbender", "Avatar - Der Herr der Elemente"], ["2005", "2008"], [["2018 05 29", "2018 06 15", "S1-S3"], ["2019 08 04", "2019 08 13", "S1-S3"]], 10, ["ger"], ["animation", "action"], [], ["Netflix"], ["Michael Dante DiMartino", "Bryan Konietzko"], [], "https://66.media.tumblr.com/3de0da47230c294434b12590e405d438/tumblr_odg6dwq4Ib1v2s5upo1_250.jpg"],
	        
["series", ["Fillmore!"], ["2002", "2004"], [""], 7, ["ger"], ["action", "animation"], [], [], ["Scott M. Gimple"], [], "https://66.media.tumblr.com/0680c158ca4b17248fbd2e5c5d797290/tumblr_odg6ow0rlI1v2s5upo1_250.jpg"],
	        
["series", ["That '70s Show", "Die wilden 70er"], ["1998", "2006"], [""], 0, ["ger"], ["comedy", "romance"], [], ["dropped"], ["Mark Brazill", "Bonnie Turner", "Terry Turner"], ["Mila Kunis", "Laura Prepon", "Kurtwood Smith"], "https://66.media.tumblr.com/84b3c69ca0af1edd1859dadf7cab4891/tumblr_oeu5lv9u611v2s5upo1_250.jpg"],
	        
["book", ["Night School"], "2012", [["2020 07 06", "2020 08 07"]], 7, ["eng"], [], [], ["Night School"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/cebea2f804aa63da452512cfcc5aedda/9aa3cc75dcd3ca59-28/s250x400/8064e892565da9e205bda114424dfd59e4a5dde0.jpg"],
	        
["audiobook", ["Endurance: Shackleton's Incredible Voyage"], "1959", [["2020 06 15", "2020 06 20"]], 7, ["eng"], [], [], [], ["Alfred Lansing"], [], "https://66.media.tumblr.com/b5df0d66dd388711a3457c388179528b/ed0904bc0d493248-ca/s250x400/badd02339b4c4a71f41c429cffa3a7b27d4c3ba3.jpg"],
	        
["audiobook", ["The Fault in Our Stars", "Das Schicksal ist ein mieser Verräter"], "2012", [["2020 06 11", "2020 06 15"]], 6, ["eng"], [], [], [], ["John Green"], [], "https://66.media.tumblr.com/39ba75a7b01954fcc20d319030ea40fe/85cedb8a8a2ae325-81/s250x400/b8f4f644b5f2e5e9c164e94ada878c0db4d3787f.jpg"],
	        
["film", ["Inglourious Basterds"], "2009", ["2015 11 15", "2017 07 18", "2020 09 07"], 8, ["ger"], ["adventure", "drama", "war"], [], ["Netflix"], ["Quentin Tarantino"], ["Brad Pitt", "Christoph Waltz", "Michael Fassbender", "Diane Kruger", "Daniel Brühl", "Til Schweiger", "August Diehl", "Arndt Schwering-Sohnrey"], "https://66.media.tumblr.com/ab8929345ac1ca2ddd4fbb4b4c5e17b3/tumblr_ppuwii750k1v2s5upo1_250.jpg"],
	        
["film", ["The Theory of Everything", "Die Entdeckung der Unendlichkeit"], "2014", ["2016 01 14", "2020 09 08"], 8, ["ger"], ["biography", "drama"], [], ["Netflix"], ["James Marsh"], ["Tom Prior", "Eddie Redmayne", "Felicity Jones"], "https://49.media.tumblr.com/14456fa07bb7d6cfa722c290f70507b7/tumblr_o103rxZoXN1v2s5upo1_250.jpg"],
	        
["film", ["Jurassic Park III"], "2001", ["2016 01 15"], 6, ["ger"], ["action", "adventure", "supernatural", "sci-fi"], ["bini"], ["Jurassic Park"], ["Joe Johnston"], ["Sam Neill", "Laura Dern"], "https://40.media.tumblr.com/44108748425d63232777ca718af0bafb/tumblr_o11raddsIz1v2s5upo1_250.jpg"],
	        
["film", ["A Girl Walks Home Alone at Night"], "2014", ["2016 01 16", "2016 01 23", "2016 10 20", "2018 02 16", "2020 04 13"], 9, ["eng", "ger"], ["drama", "horror"], ["bini"], ["fav", "bby"], ["Ana Lily Amirpour"], [], "https://49.media.tumblr.com/7dd4f5f52754e21efb1093fb15dcbd34/tumblr_o11rky2LQA1v2s5upo1_250.jpg"],
	        
["film", ["The Fall"], "2006", ["2016 01 05"], 4, ["ger"], ["adventure", "drama"], [], [], ["Tarsem Singh"], [], "https://40.media.tumblr.com/0965f1cf108f29eb077042e443f17795/tumblr_o0jgx6WCAA1v2s5upo1_250.jpg"],
	        
["film", ["The Lost World: Jurassic Park", "Vergessene Welt: Jurassic Park"], "1997", ["2016 01 08"], 6, ["ger"], ["action", "adventure"], ["bini"], ["Jurassic Park"], ["Steven Spielberg"], ["Jeff Goldblum", "Pete Postlethwaite", "Vince Vaughn", "Julianne Moore"], "https://49.media.tumblr.com/a306e128099355cd16b0cfb6383206e6/tumblr_o0oqicb9Zm1v2s5upo1_250.jpg"],
	        
["film", ["Heathers"], "1989", ["2016 01 18"], 7, ["ger"], ["comedy", "crime", "drama"], [], [], ["Michael Lehmann"], ["Winona Ryder"], "https://49.media.tumblr.com/100a748a21b585157e4fdb11d5eb56a2/tumblr_o15y52Sy5G1v2s5upo1_250.jpg"],
	        
["series", ["Heidi, Girl of the Alps", "Heidi", "Arupusu no shôjo Haiji"], "1974", [["2020 06 12", "2020 08 04"]], 8, ["ger"], ["anime", "adventure"], ["bini"], ["DVD"], ["Isao Matsuki", "Mamoru Sasaki", "Johanna Spyri"], [], "https://64.media.tumblr.com/633d7ce92ce4fb252374925ca7c30dc0/1f5af48daf2e552d-44/s250x400/fd1a405b1be1a0ddc46325b3559f531059adee2a.jpg"],
	        
["series", ["I Am Not Okay with This"], "2020", [["2020 05 16", "S1"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Jonathan Entwistle", "Christy Hall"], ["Sophia Lillis", "Wyatt Oleff", "Sofia Bryant"], "https://66.media.tumblr.com/44b4f9bd825c20433e75d2209ac04b19/89ef296f3f805f90-d3/s250x400/c449eb2ffe2cf0c480fa743e9919be66ece79652.jpg"],
	        
["film", ["Now You See Me", "Die Unfassbaren - Now You See Me"], "2013", ["2020 07 21"], 7, ["ger"], ["crime", "mystery"], [], ["Netflix"], ["Louis Leterrier"], ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Dave Franco", "Morgan Freeman", "Michael Caine", "Conan O'Brien", "Isla Fisher", "Adam Shapiro"], "https://64.media.tumblr.com/579eb50480441126196e34bf6cf51e27/ea53e3de429b80e0-27/s250x400/32999b74d6b72c25cac8cc7b0f245b9e4cb54d9e.jpg"],
	        
["film", ["Now You See Me 2", "Die Unfassbaren 2"], "2016", ["2020 07 22"], 6, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Jon M. Chu"], ["Jesse Eisenberg", "Mark Ruffalo", "Woody Harrelson", "Dave Franco", "Daniel Radcliffe", "Lizzy Caplan", "Michael Caine", "Morgan Freeman", "Isla Fisher"], "https://64.media.tumblr.com/ee5451844e81b6cc0fb69e364ac75ab9/a63e0ea7c891ea49-d7/s250x400/0910a3c45b5ebd6630a04281f5ab6364ecccec5e.jpg"],
	        
["film", ["The Martian", "Der Marsianer: Rettet Mark Watney"], "2015", ["2016 07 07", "2019 10 21", "2020 05 17"], 8, ["ger"], ["adventure", "drama", "sci-fi"], [], ["Netflix", "Schule"], ["Ridley Scott"], ["Matt Damon", "Kristen Wiig", "Jeff Daniels", "Sean Bean", "Chiwetel Ejiofor", "Donald Glover", "Jessica Chastain", "Michael Peña", "Mackenzie Davis"], "https://66.media.tumblr.com/1df268dfeaac539844517e25e5c83fc7/tumblr_o9ydqujhi01v2s5upo1_250.jpg"],
	        
["film", ["Sing Street"], "2016", ["2016 06 28", "2016 10 24", "2018 05 04"], 9, ["ger"], ["comedy", "drama", "music"], ["syl"], ["Kino"], ["John Carney"], ["Lucy Boynton"], "https://68.media.tumblr.com/1327081731d4fd04cb8616747d4b355e/tumblr_o9hsr5EvO21v2s5upo1_250.jpg"],
	        
["audiobook", ["The Martian", "Der Marsianer"], "2011", [["2020 05 11", "2020 05 13"]], 8, ["ger"], ["sci-fi", "adventure", "drama"], [], [], ["Andy Weir"], [], "https://66.media.tumblr.com/c5cae2bb1ba141c4afb7597bd4d005c0/7bfe50ac60286d75-73/s250x400/f2a83950de8ab5804d8880081e016493c11adfae.jpg"],
	        
["audiobook", ["Harry Potter and the Philosopher's Stone", "Harry Potter und der Stein der Weisen"], "1997", [["2020 04 06", "2020 04 09"]], 6, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/64f165cb5e2e4c9d2e1bead3cfcd97a7/346e79630c860467-3b/s250x400/6eb5f3e57ef1e42074360b06f89021ce61c4d10c.jpg"],
	        
["audiobook", ["Harry Potter and the Chamber of Secrets", "Harry Potter und die Kammer des Schreckens"], "1998", [["2020 04 14", "2020 04 16"]], 8, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/e86674abc78e31b494c0eaa2e62cde5f/fa58b33070ccf734-3e/s250x400/f6c19f8c41fa2c37f5a15a6f09b53c7680524067.jpg"],
	        
["audiobook", ["Harry Potter and the Prisoner of Azkaban", "Harry Potter und der Gefangene von Askaban"], "1999", [["2020 04 16", "2020 04 20"]], 7, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/78fbdc3412e763a17de094424ce355e7/9862fefdfb24969d-49/s250x400/6c0a3289da29b8ba63c7df54d9ea48d8e6ae6cd8.jpg"],
	        
["audiobook", ["Harry Potter and the Goblet of Fire", "Harry Potter und der Feuerkelch"], "2000", [["2020 04 20", "2020 04 28"]], 8, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/98513d3fa323b1e7173bc6cf0084c141/647f7d9154339e1c-35/s250x400/9443bafcfec3da25fb6ea229572e1153aa4de7a6.jpg"],
	        
["audiobook", ["Harry Potter and the Order of the Phoenix", "Harry Potter und der Orden des Phönix"], "2003", [["2020 04 28", "2020 05 15"]], 7, ["ger"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/b7a65bfb1d5dc1f44303c244a35ea738/67abaad83c1f411b-15/s250x400/30116d554837ac504bc72be30ea922ce5f2423fd.jpg"],
	        
["audiobook", ["Harry Potter and the Half-Blood Prince", "Harry Potter und der Halbblutprinz"], "2005", [["2020 05 15", "2020 05 27"]], 6, ["ger"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/7c88e1423dbcad32c0138ec5e5ea4213/4c8bf75d1a62570c-6f/s250x400/f6efb9f2a2500cfece817aad5d4416c016ae3809.jpg"],
	        
["audiobook", ["Harry Potter and the Deathly Hallows", "Harry Potter und die Heiligtümer des Todes"], "2007", [["2020 05 27", "2020 06 08"]], 8, ["eng"], ["fantasy"], [], ["Harry Potter"], ["J. K. Rowling"], [], "https://66.media.tumblr.com/d4bd058969e0a06d883977fa863b3f4a/cd592c8a6bab77fb-94/s250x400/c3eeefce6afd279a5943cb589771aaf4cc2acdda.jpg"],
	        
["film", ["Harry Potter and the Philosopher's Stone", "Harry Potter und der Stein der Weisen"], "2001", ["2015 08 28", "2017 08 02", "2020 04 05"], 6, ["ger"], ["adventure", "family", "fantasy"], ["bini"], ["Harry Potter"], ["Chris Columbus"], ["Robbie Coltrane", "Daniel Radcliffe", "Fiona Shaw", "Harry Melling", "Bonnie Wright", "Rupert Grint", "Emma Watson", "Matthew Lewis", "Tom Felton", "David Bradley", "Richard Griffiths"], "https://40.media.tumblr.com/af5141e46638c0b31f53e4f799903f74/tumblr_o0owmoz4Al1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Chamber of Secrets", "Harry Potter und die Kammer des Schreckens"], "2002", ["2015 09 11", "2017 08 04", "2020 04 10"], 8, ["ger"], ["adventure", "family", "fantasy"], [], ["Harry Potter"], ["Chris Columbus"], ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Fiona Shaw", "Harry Melling", "Toby Jones", "Bonnie Wright", "Tom Felton", "Matthew Lewis", "David Bradley", "Richard Griffiths"], "https://49.media.tumblr.com/5e740d07e42297613a9195a341579b76/tumblr_o0sv2mr1Jk1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Prisoner of Azkaban", "Harry Potter und der Gefangene von Askaban"], "2004", ["2015 10 10", "2020 04 11"], 8, ["ger"], ["adventure", "family", "fantasy"], [], ["Harry Potter"], ["Alfonso Cuarón"], ["Daniel Radcliffe", "Fiona Shaw", "Harry Melling", "Rupert Grint", "Emma Watson", "Bonnie Wright", "David Bradley", "Matthew Lewis", "Tom Felton", "Timothy Spall", "David Thewlis", "Richard Griffiths"], "https://66.media.tumblr.com/ccc4f0131595f22c3f74355a0ca536d4/tumblr_ppxzmkT5Vj1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Goblet of Fire", "Harry Potter und der Feuerkelch"], "2005", ["2015 10 15", "2017 08 06", "2020 04 19"], 7, ["ger"], ["adventure", "family", "fantasy"], ["bini", "syl"], ["Harry Potter"], ["Mike Newell"], ["David Tennant", "Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Bonnie Wright", "Robert Pattinson", "Tom Felton", "Matthew Lewis", "David Bradley", "Timothy Spall"], "https://66.media.tumblr.com/914b2ae8eeaf9f949494cc727b8cd1b3/tumblr_ppxzshcSUS1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Order of the Phoenix", "Harry Potter und der Orden des Phönix"], "2007", ["2015 10 18", "2017 08 08", "2020 05 04"], 8, ["ger"], ["action", "adventure", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Robert Pattinson", "Emma Watson", "Rupert Grint", "Bonnie Wright", "Tom Felton", "Matthew Lewis", "David Bradley", "Helena Bonham Carter", "Daniel Radcliffe", "Harry Melling", "Fiona Shaw", "Evanna Lynch", "Timothy Spall", "David Thewlis", "Richard Griffiths"], "https://66.media.tumblr.com/8aa503970211b4b13fd18eed66ac70b1/tumblr_pvntch53YQ1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Half-Blood Prince", "Harry Potter und der Halbblutprinz"], "2009", ["2015 10 21", "2020 05 16"], 7, ["ger"], ["action", "adventure", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Daniel Radcliffe", "Bonnie Wright", "Rupert Grint", "Emma Watson", "Helena Bonham Carter", "Tom Felton", "David Bradley", "Matthew Lewis", "Evanna Lynch", "Timothy Spall", "David Thewlis", "Jim Broadbent"], "https://66.media.tumblr.com/0d1ae9d827f91b1c56e4ce9aa3e56463/tumblr_pwf7x3nXGP1v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Deathly Hallows: Part 1", "Harry Potter und die Heiligtümer des Todes - Teil 1"], "2010", ["2015 10 22", "2020 06 21"], 8, ["ger"], ["adventure", "family", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Bill Nighy", "Emma Watson", "Harry Melling", "Daniel Radcliffe", "Bonnie Wright", "Rupert Grint", "Fiona Shaw", "Helena Bonham Carter", "Tom Felton", "Evanna Lynch", "Matthew Lewis", "Timothy Spall", "David Thewlis", "Domhnall Gleeson"], "https://66.media.tumblr.com/0d3ca130fc2bb52f85b0fbb124e53a08/tumblr_pwf7zg59X81v2s5upo1_250.jpg"],
	        
["film", ["Harry Potter and the Deathly Hallows: Part 2", "Harry Potter und die Heiligtümer des Todes - Teil 2"], "2011", ["2015 10 27"], 8, ["ger"], ["adventure", "drama", "fantasy"], ["bini"], ["Harry Potter"], ["David Yates"], ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Evanna Lynch", "Helena Bonham Carter", "Tom Felton", "Matthew Lewis", "Bonnie Wright", "David Bradley", "Timothy Spall", "David Thewlis", "Richard Griffiths", "Domhnall Gleeson", "Jim Broadbent", "Bertie Gilbert"], "https://66.media.tumblr.com/65fb7bf305be439f86267538404cf805/tumblr_pwko808afN1v2s5upo1_250.jpg"],
	        
["film", ["Up", "Oben"], "2009", ["2018 09 02"], 6, ["ger"], ["animation", "adventure"], ["syl"], [], ["Pete Docter", "Bob Peterson"], [], "https://66.media.tumblr.com/b9a91f5e56a47e9548d83ba23197594e/a4d1b298889a6619-5c/s250x400/3ca8114b46862cafb0c42443333f7f9fb0b5965f.jpg"],
	        
["film", ["Porco Rosso", "Porco Rosso", "Kurenai no buta"], "1992", ["2018 08 24"], 7, ["ger"], ["anime", "adventure", "action", "comedy", "drama", "historical", "military", "romance"], ["bini"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://66.media.tumblr.com/6b7d41d98f247b2d0f68424994f47a73/8011242748b7c88b-db/s250x400/28631996e515c7b6508891587ce5d9e8cc7d2540.jpg"],
	        
["film", ["Mary and the Witch's Flower", "Mary und die Blume der Hexen"], "2017", ["2018 09 16", "2020 05 30"], 7, ["ger"], ["anime", "adventure", "fantasy", "magic"], ["jessie", "bini"], ["Kino"], ["Hiromasa Yonebayashi", "Giles New"], [], "https://66.media.tumblr.com/488bb63b833cdae503b4808199fb2793/056621b7d0317fd8-e3/s250x400/681e38786b8a993803ed50b8c2bd8ede83b50443.jpg"],
	        
["film", ["Incredibles 2", "Die Unglaublichen 2"], "2018", ["2018 10 03"], 9, ["ger"], ["animation", "action"], ["bini", "syl", "je"], ["Kino"], ["Brad Bird"], [], "https://66.media.tumblr.com/f53783d0216f90049e0d16e21bceb5c3/ab6fe84773d9f443-3e/s250x400/7dd8c0b91e691270c3ccfea386f1be575d81ad4e.jpg"],
	        
["film", ["Moana", "Vaiana - Das Paradies hat einen Haken"], "2016", ["2019 01 12"], 7, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Ron Clements", "John Musker", "Don Hall"], [], "https://66.media.tumblr.com/a02e2a8ed04dc229ec61995a4802d3e4/ba5b0a9895db30ce-bf/s250x400/054cbd04c4fa1743f964303f83ae279c0b546143.jpg"],
	        
["audiobook", ["Anne of Avonlea", "Anne in Avonlea"], "1909", [["2020 02 02", "2020 02 05"]], 8, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/541c459bbee026004c174ba3426322bc/c80eb27a46f7c867-cf/s250x400/ba718acb6fae50237689168e20bdcb230f085d97.jpg"],
	        
["audiobook", ["Anne of the Island", "Anne in Kingsport"], "1915", [["2020 02 05", "2020 02 08"]], 7, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/af044ff0799cb8c3d49ee463c2309b9c/dab999156a16b84b-f4/s250x400/dcd81ad5a92b2b6a0e00f45b910b869cb0e65391.jpg"],
	        
["audiobook", ["Anne of Windy Willows", "Anne in Windy Willows"], "1936", [["2020 02 09", "2020 02 13"]], 6, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/1ed1f46af2f8a7f7ef68a0353c189755/ccf1b183b753ce5d-84/s250x400/cf29c12e2ac281b31f0b403389cae5045ac946ac.jpg"],
	        
["audiobook", ["Anne's House of Dreams", "Anne in Four Winds"], "1917", [["2020 02 13", "2020 02 18"]], 8, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/3163ed2f582a938e54439bf5f2b64186/bc0dd6887965e7b3-a1/s250x400/ccc775cb9cfc86901c55ae63f27e0a97b95f898b.jpg"],
	        
["audiobook", ["Anne of Ingleside", "Anne in Ingleside"], "1939", [["2020 02 18", "2020 02 24"]], 6, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/bd065f2950e1bf733067859b11fbb12c/f8a410a953867e0e-1b/s250x400/c3f04db4681d0b468b3abd8ff024d392de885764.jpg"],
	        
["audiobook", ["Rainbow Valley", "Anne im Rainbow Valley"], "1919", [["2020 02 24", "2020 02 26"]], 7, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/e34cda1241e11def480e4dbaebc6f02e/a7ff05d68242607e-6f/s250x400/df03bd39c15598a537da4781644f3b71ae5e7dfb.jpg"],
	        
["audiobook", ["Rilla of Ingleside", "Anne und Rilla: Der Weg ins Glück"], "1921", [["2020 02 26", "2020 03 04"]], 10, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/17a64fbe793045b6c03328a1e0a7c5c2/8c5979514c8acded-c9/s250x400/8180a4469ae1d944ae2a7bcb2025783b1ab2de6d.jpg"],
	        
["audiobook", ["Chronicles of Avonlea", "Geschichten aus Avonlea"], "1912", [["2020 03 04", "2020 03 10"]], 6, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/59ff89aeb07e919fc39660590ac15116/5367de076266db9e-ea/s250x400/c5d4e832c16b00db5ff572d4d1437181be1fc537.jpg"],
	        
["audiobook", ["Further Chronicles of Avonlea", "Neues aus Avonlea"], "1920", [["2020 03 10", "2020 03 13"]], 5, ["eng"], [], [], ["Anne"], ["Lucy Maud Montgomery"], [], "https://66.media.tumblr.com/24f21cd324fdeb60c36031ba459ce97f/e3168d1a30fd8e3a-33/s250x400/9c36845f76f76ed789c6e6c7626df9ff0b1a8dc2.jpg"],
	        
["audiobook", ["Howl's Moving Castle", "Sophie im Schloss des Zauberers"], "1986", [["2020 01 16", "2020 01 24"]], 7, ["eng"], ["fantasy"], [], [], ["Diana Wynne Jones"], [], "https://66.media.tumblr.com/c45dcacd614a17a14bf864b54eed715f/53f4483e0c763ded-2a/s250x400/278c71476a2ec8ec9629a6df32d9706fd9be4c35.jpg"],
	        
["film", ["Project Power"], "2020", ["2020 08 21"], 7, ["ger"], ["action", "crime"], [], ["Netflix"], ["Henry Joost", "Ariel Schulman"], ["Jamie Foxx", "Joseph Gordon-Levitt", "Rodrigo Santoro", "Casey Neistat"], "https://64.media.tumblr.com/839621d06e31e60f3dacd6df4aaa4ea0/5a4a32d998cfdaa5-95/s250x400/981dbde98d53aed73a0bd155e73e347a388478f6.jpg"],
	        
["film", ["Nerve"], "2016", ["2017 01 23"], 6, ["ger"], ["adventure", "crime"], [], [], ["Henry Joost", "Ariel Schulman"], ["Emma Roberts", "Dave Franco", "Samira Wiley", "Casey Neistat", "Miles Heizer"], "https://68.media.tumblr.com/df54a4ed23cbe1738a7c346bfa8e4782/tumblr_okc8orMOiT1v2s5upo1_250.jpg"],
	        
["film", ["Jurassic World"], "2015", ["2017 01 24", "2019 04 27"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Jurassic Park"], ["Colin Trevorrow"], ["Chris Pratt", "Vincent D'Onofrio", "Jake Johnson", "Omar Sy", "Judy Greer", "BD Wong", "Nick Robinson"], "https://68.media.tumblr.com/192dd7ebda074ade64f0bc5b5aceb29e/tumblr_okjlsiKiZK1v2s5upo1_250.jpg"],
	        
["film", ["Once"], "2007", ["2017 01 30"], 8, ["ger"], ["drama", "music", "romance"], [], [], ["John Carney"], [], "https://68.media.tumblr.com/1ceaa86559b1a5833900a857847214f0/tumblr_oklwsdRnuh1v2s5upo1_250.jpg"],
	        
["film", ["Girl Asleep"], "2015", ["2017 02 24"], 6, ["ger"], ["comedy", "family"], [], [], ["Rosemary Myers"], ["Bethany Whitmore"], "https://68.media.tumblr.com/afbb7c94ecd96d7835c0d9f8b84f1b4b/tumblr_om8zdtE3ON1v2s5upo1_250.jpg"],
	        
["film", ["Gran Torino"], "2009", ["2015 08 12", "2016 06 26"], 10, ["ger"], ["drama"], ["bini"], [], ["Clint Eastwood"], ["Clint Eastwood", "Dreama Walker"], "https://49.media.tumblr.com/d4ce9304acfc345d741c221c83eee477/tumblr_nztmnvyAlL1v2s5upo1_250.jpg"],
	        
["film", ["Lord of War", "Lord of War - Händler des Todes"], "2005", ["2015 08 23"], 7, ["ger"], ["action", "crime"], ["bini"], [], ["Andrew Niccol"], ["Nicolas Cage"], "https://40.media.tumblr.com/a72f4c5c01427f40efcfeb25513562c8/tumblr_o0dudgW3l41v2s5upo1_250.jpg"],
	        
["film", ["Rage", "Tokarev – Die Vergangenheit stirbt niemals"], "2014", ["2015 08 13", "2015 10 26"], 9, ["ger"], ["action", "crime"], ["bini"], [], ["Paco Cabezas"], ["Nicolas Cage"], "https://40.media.tumblr.com/1499feec57bd41adad70e3d63ceca4bb/tumblr_o0c9nmHtJ91v2s5upo1_250.jpg"],
	        
["film", ["Knowing", "Know1ng - Die Zukunft endet jetzt"], "2009", ["2016 03 06"], 7, ["ger"], ["action", "drama"], [], [], ["Alex Proyas"], ["Nicolas Cage"], "https://49.media.tumblr.com/032600b0c9befc1c95999569de5d941d/tumblr_o3u55x8Zzt1v2s5upo1_250.jpg"],
	        
["film", ["Next"], "2007", ["2016 06 03"], 6, ["ger"], ["action", "sci-fi"], [], [], ["Lee Tamahori"], ["Nicolas Cage", "Julianne Moore"], "https://66.media.tumblr.com/34f51670d16d5eb4dc2cb159cc70d2ec/tumblr_o88xd1Ndzz1v2s5upo1_250.jpg"],
	        
["film", ["Snowden"], "2016", ["2016 11 29", "2019 09 07"], 7, ["ger"], ["biography", "crime"], ["syl"], ["Kino"], ["Oliver Stone"], ["Joseph Gordon-Levitt", "Nicolas Cage", "Timothy Olyphant"], "https://66.media.tumblr.com/b37aa4091b390785cdb5639a3361f65e/tumblr_ohf6nbgGlW1v2s5upo1_250.jpg"],
	        
["film", ["The Walk"], "2015", ["2017 10 26"], 7, ["ger"], ["adventure", "biography"], [], ["Netflix"], ["Robert Zemeckis"], ["Joseph Gordon-Levitt", "Ben Kingsley"], "https://66.media.tumblr.com/764d97b4a28744ce992be1ba95d22d9a/tumblr_py7vpvHz8R1v2s5upo1_250.jpg"],
	        
["film", ["The Perks of Being a Wallflower", "Vielleicht lieber morgen"], "2012", ["2017 11 22"], 9, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Stephen Chbosky"], ["Johnny Simmons", "Emma Watson", "Joan Cusack", "Kate Walsh", "Logan Lerman", "Mae Whitman"], "https://66.media.tumblr.com/993796638f9b7c93316a8a993ca05ccf/tumblr_pyefmgAgvd1v2s5upo1_250.jpg"],
	        
["series", ["The Weekenders", "Disneys Wochenend-Kids"], ["2000", "2004"], ["2015 05 27", "2016 10 20"], 9, ["ger"], ["animation", "comedy"], [], [], ["Doug Langdale"], [], "https://66.media.tumblr.com/1e12113b066f40e5123afb60d500a3a5/tumblr_of327bfUJf1v2s5upo1_r2_250.jpg"],
	        
["series", ["Kim Possible"], ["2002", "2007"], [["2016 10 22", "2016 11 06"]], 10, ["ger"], ["animation", "action", "comedy"], [], [], ["Mark McCorkle", "Bob Schooley"], [], "https://66.media.tumblr.com/6683ccbc9909e6c1a4fe409cb47c7b98/tumblr_ofm7qqD87l1v2s5upo1_250.jpg"],
	        
["series", ["Westworld"], "2016", [["2016 11 05", "2016 12 30", "S1"]], 10, ["eng"], ["drama", "mystery", "sci-fi"], [], [], ["Lisa Joy", "Jonathan Nolan"], ["Ed Harris", "James Marsden", "Anthony Hopkins", "Rodrigo Santoro", "Talulah Riley"], "https://66.media.tumblr.com/09f5995b48f9e6a1bccc4abf37de4f73/tumblr_og5z0kJktJ1v2s5upo1_250.jpg"],
	        
["series", ["Limitless"], ["2015", "2016"], [["2017 01 04", "2017 03 19", "S1"], ["2019 01 04", "2019 01 09", "S1"]], 8, ["ger"], ["comedy", "crime", "sci-fi"], ["syl"], ["Netflix"], ["Craig Sweeny"], ["Bradley Cooper"], "https://68.media.tumblr.com/4fba47babc7bea678547165f35723ba2/tumblr_on22pnO7ao1v2s5upo1_250.jpg"],
	        
["series", ["Attack on Titan", "Attack on Titan", "Shingeki no kyojin"], "2013", [["", "2014 12 25", "S1E1-S1E3"], ["2017 06 18", "S2"]], 7, ["jap"], ["anime", "action"], ["bini", "nico"], ["Attack on Titan"], ["Hajime Isayama", "Yasuko Kobayashi", "Hiroshi Seko"], [], "https://66.media.tumblr.com/83d37f42ada8c1406d9365e30cb566c0/bda8d962eea2ca43-78/s250x400/bd3432e2c98813f8bdd15fa4f38ebe7248acfa18.jpg"],
	        
["series", ["Mind Field"], "2017", [["2017 07 21", "2017 07 22", "S1 - S2"], ["2019 10 09", "S3"]], 10, ["eng"], ["documentary"], [], [], ["Andy Wood", "Michael Stevens"], ["Michael Stevens", "Trin Miller"], "https://66.media.tumblr.com/ef8f3173576f3583f44f212977fe2b72/b890db991dd36500-46/s250x400/2c9befd9d5126d96102729603801f56d95f82feb.jpg"],
	        
["series", ["Stranger Things"], "2016", [["2017 09 30", "2017 10 01", "S1"], ["2017 10 28", "2017 10 29", "S2"], ["2019 07 05", "2019 07 09", "S3"]], 8, ["ger"], ["drama", "fantasy", "horror", "mystery", "thriller"], ["bini"], ["Netflix"], ["Matt Duffer", "Ross Duffer"], ["Winona Ryder", "David Harbour", "Millie Bobby Brown", "Sean Astin"], "https://66.media.tumblr.com/c8b627f6c4e359d3e447107df3fbf426/67ddec5eb9eb235d-ed/s250x400/d663062da2fa7916f4f53c57f65e0a4898097490.jpg"],
	        
["series", ["13 Reasons Why", "Tote Mädchen lügen nicht"], ["2017", "2020"], [["2017 10 02", "2017 10 09", "S1"], ["2019 08 31", "2019 09 13", "S2 - S3"]], 8, ["ger"], ["drama", "mystery"], ["bini"], ["Netflix"], ["Brian Yorkey"], ["Dylan Minnette", "Katherine Langford", "Kate Walsh", "Mark Pellegrino"], "https://66.media.tumblr.com/66c23a646b8a91e06b604ad64e8bef29/a0d7e77933f70105-ea/s250x400/235e7b223e4fdf3bbc91a3392990eabfa3d4e25b.jpg"],
	        
["series", ["The Gay and Wondrous Life of Caleb Gallo"], "2016", [["2017 11 13", "S1"]], 9, ["eng"], ["comedy"], [], [], ["Brian Jordan Alvarez"], ["Stephanie Koenig"], "https://66.media.tumblr.com/97c1954bda4e7b0b57b0319e5e81122b/2f29f380c419c57b-6e/s250x400/699fdf7706dedfa3e63fc76ba474408ea3e3fd06.jpg"],
	        
["series", ["Sense8"], ["2015", "2018"], [["2017 11 22", "2018 01 08", "S1-S2E11"], ["2018 06 20", "S2E12"]], 10, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["J. Michael Straczynski", "Lana Wachowski", "Lilly Wachowski"], ["Doona Bae", "Naveen Andrews", "Lucas Jade Zumann", "Adam Shapiro"], "https://66.media.tumblr.com/fe621b191d84e2bbe1aba5ebe2a07f66/09a111a49814a1f3-e9/s250x400/d3d1227dfa741e11309c553ea5b18b6c97ca4d8a.jpg"],
	        
["series", ["Dark"], ["2017", "2020"], [["2017 12 22", "2017 12 24", "S1"], ["2019 08 02", "2019 08 19", "S2"]], 9, ["ger"], ["crime", "drama"], ["bini", "syl"], ["Netflix", "dropped"], ["Baran bo Odar", "Jantje Friese", "Lisa Vicari"], [], "https://66.media.tumblr.com/531d646040cf4d9601928b8831aa7245/09369d9c4c925cd5-a5/s250x400/1a50d68dc6061c00c9275c2b1625fed0831e9d47.jpg"],
	        
["series", ["Atypical"], "2017", [["2017 12 29", "2018 01 01", "S1"], ["2018 09 07", "2018 09 08", "S2"], ["2019 11 01", "2019 11 16", "S3"], ["2020 07 09", "2020 07 20", "S1 - S3"]], 7, ["ger"], ["comedy", "drama"], ["bini"], ["Netflix"], ["Robia Rashid"], ["Jennifer Jason Leigh", "Brigette Lundy-Paine", "Michael Rapaport", "Nik Dodani", "Amy Okuda", "Sara Gilbert"], "https://66.media.tumblr.com/061499d98f1a404ceb3cb290ec08e58c/bdaa33086c3fdc3d-e2/s250x400/57c82fdf9d317f70486282f02a4c7da7925edf67.jpg"],
	        
["series", ["Girlboss"], "2017", [["2018 01 10", "2018 01 21", "S1"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Kay Cannon"], ["Johnny Simmons", "Dean Norris"], "https://66.media.tumblr.com/aa0af156b2442fa58f69815b03f895be/c571ce21637e84b9-a2/s250x400/361be4d6838b0b47071a95bef200427e26fe9b20.jpg"],
	        
["series", ["Money Heist", "Haus des Geldes", "La Casa de Papel"], "2017", [["2018 02 09", "2018 02 10", "S1 - S2"], ["2019 07 22", "2019 07 26", "S3"], ["2020 05 22", "2020 05 23", "S4"]], 9, ["ger"], ["action", "crime"], [], ["Netflix"], ["Álex Pina"], [], "https://66.media.tumblr.com/2ce7367fd5753cc03b95df9b7775419e/8bb4ebe063f69423-c4/s250x400/72bdf60d06590238da922be712cf24058c903ffb.jpg"],
	        
["series", ["Everything Sucks!"], "2018", [["2018 03 03", "S1"]], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ben York Jones", "Michael Mohan"], [], "https://66.media.tumblr.com/00834a505b1a15380f43c1ba9a03e624/7f30d92d8ec0d64b-4b/s250x400/a6c3207f6999ed4b4be0d910dc2253a302be124f.jpg"],
	        
["series", ["The End of the F***ing World"], ["2017", "2019"], [["2018 03 03", "S1"], ["2018 08 17", "S1"], ["2019 11 17", "2019 11 25", "S2"]], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Andy Baker", "Charlie Covell", "Charles S. Forsman"], ["Jessica Barden", "Alex Lawther"], "https://66.media.tumblr.com/bdfdaab15c2747ca07c828520df4d3fa/76c84ffa259dd5e0-6f/s250x400/20d7001b24c8d58f3a62774b638c1816332be6d5.jpg"],
	        
["series", ["H2O: Just Add Water", "H2O - Plötzlich Meerjungfrau"], ["2006", "2010"], [["2018 05 18", "2018 05 22", "S1 - S3"], ["2019 05 25", "2019 08 23", "S1 - S3"]], 9, ["ger"], ["drama", "family", "fantasy"], [], ["Netflix", "fav"], ["Jonathan M. Shiff"], ["Cariba Heine", "Phoebe Tonkin", "Claire Holt", "Indiana Evans"], "https://66.media.tumblr.com/dd4dd59e04c6965186e9147f356c2dc1/6daa9043f5b3866d-63/s250x400/77e39644fb331ad6c1a8dc85607f85e70562bb9e.jpg"],
	        
["series", ["On My Block"], "2018", [["2018 06 22", "2018 06 25", "S1"], ["2019 04 08", "S2"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Eddie Gonzalez", "Jeremy Haft", "Lauren Iungerich"], ["Jason Genao"], "https://66.media.tumblr.com/384a526e9c6dfc3097d09037c23c2321/780f95d2760b1c1c-fa/s250x400/9b732304f983d1435622dd8df7de7dc89991e2fd.jpg"],
	        
["series", ["Anne", "Anne with an E"], ["2017", "2019"], [["2018 06 28", "2018 07 16", "S1 - S2"], ["2019 05 07", "2019 05 29", "S1 - S2"], ["2020 01 03", "2020 01 13", "S3"]], 9, ["ger"], ["drama"], [], ["Anne", "Netflix", "fav"], ["Moira Walley-Beckett"], ["Amybeth McNulty", "Dalila Bela", "Kyla Matthews", "Lucas Jade Zumann"], "https://66.media.tumblr.com/8266f1a5adb1b67ecbef6aa92fe0c973/4e7bf0fc5f10f7cc-29/s250x400/3b065f5a3c31379d01b763d7c2c281f9bbb6d233.jpg"],
	        
["series", ["Chilling Adventures of Sabrina"], ["2018", "2020"], [["2018 10 29", "2018 11 12", "S1"], ["2019 09 18", "2019 12 23", "S2"]], 0, ["ger"], ["drama", "fantasy"], [], ["Netflix"], ["Roberto Aguirre-Sacasa"], ["Kiernan Shipka", "Spencer Treat Clark"], "https://66.media.tumblr.com/b25e392bd773de76617cb1a05dbcb3af/eac2f8bae7a8a303-ae/s250x400/6a012fa79493463d7cb66fa8677db31bb14d19a5.jpg"],
	        
["series", ["You", "You: Du wirst mich lieben"], "2018", [["2019 01 01", "2019 01 03", "S1"], ["2019 12 26", "2020 01 03", "S2"], ["2020 10 23", "2020 11 14", "S1"], ["2020 11 16", "2020 12 01", "S2E1-S2E2"]], 8, ["ger"], ["crime", "drama"], ["syl", "bini"], ["Netflix"], ["Sera Gamble", "Greg Berlanti"], ["Victoria Pedretti", "Jenna Ortega"], "https://66.media.tumblr.com/11e496a30095a63ee91bc61b20404387/86460cd1faf80a44-80/s250x400/d76521b06d1eaed24cbe0ecb36c15a3d1991b669.jpg"],
	        
["series", ["Love, Death & Robots"], "2019", [["2019 04 06", "S1"]], 7, ["ger"], ["animation"], [], ["Netflix"], ["Tim Miller"], [], "https://66.media.tumblr.com/5331b164c8cfac716c03ce7eca1d51dc/fe2409a39ecc2f2e-c4/s250x400/d65945fdda9dee05781d957d0a2bb6da467e4466.jpg"],
	        
["series", ["Hilda"], ["2018", "2020"], [["2019 08 21", "2019 08 27", "S1"], ["2020 08 30", "S1"], ["2020 12 15", "", "S2"]], 8, ["ger"], ["animation", "adventure"], ["bini", "jani", "sai"], ["Netflix", "watching"], ["Kurt Mueller", "Luke Pearson", "Stephanie Simpson"], [], "https://66.media.tumblr.com/3945796a427172ab48d56b4504101249/710bd787409c9bc9-2f/s250x400/8e66f0a422ba79d724f8c494c9b9a12321eb0b94.jpg"],
	        
["series", ["Titans"], "2018", [["2019 09 14", "2019 09 17", "S1"]], 6, ["ger"], ["adventure", "action", "fantasy"], [], ["Netflix"], ["Greg Berlanti", "Akiva Goldsman", "Geoff Johns"], ["Jeni Ross"], "https://66.media.tumblr.com/eec95a4a451c575fd05587f42f112134/744d9581cf761ac1-65/s250x400/6612ea5ab6e72fb662880f717ce5e680031c5a34.jpg"],
	        
["series", ["You vs. Wild", "Du gegen die Wildnis"], "2019", [["2019 08 27", "2019 10 31", "S1"]], 7, ["eng", "ger"], ["adventure", "reality-tv"], [], ["Netflix"], ["Robert Buchta", "Bear Grylls", "Delbert Shoopman"], ["Bear Grylls"], "https://66.media.tumblr.com/43f93550a28aa5e4d2f14c6a0f239fda/f6466c2243f4e2bf-14/s250x400/dbaeaa142382ac62089b92b66933be282fd402a3.jpg"],
	        
["series", ["The World's Most Extraordinary Homes"], ["2017", "2018"], [["2020 01 28", "2020 02 19", "S1 - S2"]], 6, ["ger"], ["documentary"], [], ["Netflix"], [], [], "https://66.media.tumblr.com/68660e690b214ad2c20f9f4ff67f52b5/385ad0cd815a120f-6c/s250x400/adadec0c15f43fe4afbc95ddc24dff5a207882c6.jpg"],
	        
["series", ["We Are the Wave", "Wir sind die Welle"], "2019", [["2020 07 03", "2020 07 07", "S1"]], 7, ["ger"], ["drama"], [], ["Netflix"], ["Jan Berger", "Dennis Gansel", "Peter Thorwarth"], [], "https://66.media.tumblr.com/7a2c5a828658b59173ccc0a2a2483519/27a6e4cd0ec9f54a-5a/s250x400/6ee2c1e4e8abbd85940ca307701fd85d6c197978.jpg"],
	        
["series", ["Terrace House Boys x Girls Next Door"], "2012", [["2019 10 13", "2019 12 24", "S1"]], 4, ["jap"], ["reality-tv"], [], ["Netflix"], ["Masato Maeda"], [], "https://64.media.tumblr.com/dc96a41efcde322ebdd67f4205a4866a/95c8f7faf9c9026e-88/s250x400/6132e1085b759b2b17ac7a2b99bd5cca09b1f3a9.jpg"],
	        
["series", ["The Umbrella Academy"], "2019", [["2020 08 05", "2020 08 15", "S1"], ["2020 10 17", "2020 10 30", "S2"]], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Steve Blackman", "Jeremy Slater"], ["Ellen Page", "Kate Walsh", "Adam Godley"], "https://64.media.tumblr.com/b5ed5269616d02fb18efc291045bedd5/36d8ed15d27df2ff-1a/s250x400/4bcce2e2fd2493e604208f974ac75822129df3e6.jpg"],
	        
["film", ["Princess Mononoke"], "1997", ["2015 08 22", "2016 06 19", "2019 01 25"], 9, ["ger", "jap"], ["anime", "adventure", "fantasy"], ["bini"], ["Ghibli", "fav", "bby"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/b65d33b18937b9e0d46918deaf9afad4/tumblr_o0du7hYEVy1v2s5upo1_250.jpg"],
	        
["film", ["Upside Down"], "2012", ["2015 08 29", "2016 08 24"], 8, ["ger"], ["drama", "fantasy", "romance"], [], [], ["Juan Solanas"], ["Kirsten Dunst", "Timothy Spall"], "https://40.media.tumblr.com/aeb1b722f05e75d7cff4b96730e0a2ed/tumblr_o0owvvwqg11v2s5upo1_250.jpg"],
	        
["film", ["A Series of Unfortunate Events", "Lemony Snicket - Rätselhafte Ereignisse"], "2004", ["2016 04 09"], 7, ["ger"], ["adventure", "comedy"], ["bini"], ["Schule"], ["Brad Silberling"], ["Jim Carrey", "Emily Browning", "Timothy Spall", "Meryl Streep", "Jennifer Coolidge", "Helena Bonham Carter"], "https://49.media.tumblr.com/f07b1105a5e8ad1283ddacf62198965b/tumblr_o5drctmQW41v2s5upo1_250.jpg"],
	        
["short", ["Friend Like Me"], "2016", ["2016 04 05"], 6, ["eng"], ["comedy"], [], [], ["Sammy Paul"], ["Bertie Gilbert"], "https://40.media.tumblr.com/b68fa01942abe81fdff8d88987444fb7/tumblr_o5d0416srT1v2s5upo1_250.jpg"],
	        
["film", ["Kick-Ass"], "2010", ["2016 04 14"], 7, ["ger"], ["action", "comedy"], ["bini"], [], ["Matthew Vaughn"], ["Christopher Mintz-Plasse", "Chloë Grace Moretz"], "https://40.media.tumblr.com/50091ac45e1d0d7d73fee6abb55a0020/tumblr_o5mvk0MA5b1v2s5upo1_250.jpg"],
	        
["film", ["Kick-Ass 2"], "2013", ["2016 04 14"], 7, ["ger"], ["action", "comedy"], [], [], ["Jeff Wadlow"], ["Chloë Grace Moretz", "John Leguizamo", "Jim Carrey", "Ella Purnell"], "https://40.media.tumblr.com/4bbb2e53f36fc274d645007c32b45568/tumblr_o5mwb2cDB91v2s5upo1_250.jpg"],
	        
["film", ["Brain on Fire", "Feuer im Kopf"], "2016", ["2018 07 23"], 7, ["ger"], ["biography", "drama"], [], ["Netflix"], ["Gerard Barrett"], ["Chloë Grace Moretz", "Thomas Mann"], "https://66.media.tumblr.com/a289242ec9258da8d7bae2d525f96a5d/2376b81d083bf343-08/s250x400/9b3af989b942eb390622492f92bbab1850daae4f.jpg"],
	        
["film", ["The 5th Wave", "Die 5. Welle"], "2016", ["2018 07 06"], 6, ["ger"], ["action", "adventure"], ["bini", "syl"], [], ["J Blakeson"], ["Chloë Grace Moretz", "Liev Schreiber", "Nick Robinson", "Talitha Eliana Bateman"], "https://66.media.tumblr.com/9cb3e7e82efbf5299adf7912baeb5315/tumblr_pzpw10Fffl1v2s5upo1_250.jpg"],
	        
["film", ["Dark Places", "Dark Places: Gefährliche Erinnerung"], "2015", ["2018 06 12"], 6, ["ger"], ["crime", "drama"], ["bini", "syl"], [], ["Gilles Paquet-Brenner"], ["Nicholas Hoult", "Corey Stoll", "Tye Sheridan", "Chloë Grace Moretz"], "https://66.media.tumblr.com/a5fecf93e6b3f0a6c131d6032d9e7927/tumblr_pzkto1tZzN1v2s5upo1_250.jpg"],
	        
["film", ["If I Stay", "Wenn ich bleibe"], "2014", ["2015 09 05", "2018 12 30"], 10, ["ger"], ["drama"], ["bini", "syl"], [], ["R.J. Cutler"], ["Chloë Grace Moretz", "Liana Liberato"], "https://49.media.tumblr.com/c9121cf07174d12aeec35c7b2949a93a/tumblr_o0p4bhoGha1v2s5upo1_250.jpg"],
	        
["film", ["Carrie"], "2013", ["2016 08 30"], 5, ["ger"], ["drama", "horror"], [], [], ["Kimberly Peirce"], ["Julianne Moore", "Chloë Grace Moretz", "Judy Greer", "Barry Shabaka Henley"], "https://66.media.tumblr.com/e7523b19ec43bdffb2bc66952ab39339/tumblr_ocqfd7eZte1v2s5upo1_250.jpg"],
	        
["film", ["Miss Peregrine's Home for Peculiar Children", "Die Insel der besonderen Kinder"], "2016", ["2016 10 27", "2018 05 05"], 7, ["ger"], ["adventure", "drama", "fantasy"], ["syl", "bini"], ["Kino"], ["Tim Burton"], ["Eva Green", "Samuel L. Jackson", "Ella Purnell", "Ella Wahlestedt"], "https://66.media.tumblr.com/664df1da5d5559371f0254140ed3b1b9/tumblr_ofq4ddLAra1v2s5upo1_250.jpg"],
	        
["film", ["Wildlike"], "2014", ["2015 10 28"], 5, ["ger"], ["adventure", "drama"], [], [], ["Frank Hall Green"], ["Ella Purnell", "Bruce Greenwood"], "https://66.media.tumblr.com/36cca66f36079fa889751477367cd757/tumblr_pwoou5t3Cc1v2s5upo1_250.jpg"],
	        
["film", ["Never Let Me Go", "Alles, was wir geben mussten"], "2010", ["2016 06 06"], 6, ["ger"], ["drama", "romance"], ["syl"], [], ["Mark Romanek"], ["Carey Mulligan", "Andrew Garfield", "Ella Purnell", "Keira Knightley", "Domhnall Gleeson"], "https://68.media.tumblr.com/1d757c9083bbf6aafb1effb0f24ee5ec/tumblr_o8d331zSF31v2s5upo1_250.jpg"],
	        
["film", ["Begin Again", "Can a Song Save Your Life?"], "2013", ["2015 09 09", "2017 04 10"], 7, ["ger"], ["comedy", "drama", "music"], ["syl", "bini"], ["Kino"], ["John Carney"], ["Keira Knightley", "Mark Ruffalo", "Hailee Steinfeld"], "https://40.media.tumblr.com/1dc96583f8a5a59dc6958028ab8cc320/tumblr_o0p6mtqfT31v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: Dead Man's Chest", "Fluch der Karibik 2"], "2006", ["2016 02 13"], 7, ["ger"], ["action", "adventure"], [], [], ["Gore Verbinski"], ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Bill Nighy", "Martin Klebba"], "https://40.media.tumblr.com/4c3f36b5422097df9ff201a5d6db0ef3/tumblr_o2hi1zHxzw1v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: The Curse of the Black Pearl", "Fluch der Karibik"], "2003", ["2016 01 01"], 7, ["ger"], ["action", "adventure"], [], [], ["Gore Verbinski"], ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom", "Keira Knightley", "Martin Klebba"], "https://49.media.tumblr.com/af3b1288f9a294ce4dde9c78130fe348/tumblr_o0aoerwUJW1v2s5upo1_250.jpg"],
	        
["film", ["Lord of the Rings: The Fellowship of the Ring", "Der Herr der Ringe: Die Gefährten"], "2001", ["2015 12 06", "2016 12 17"], 7, ["ger"], ["action", "adventure", "fantasy"], [], ["Middle Earth"], ["Peter Jackson"], ["Sean Astin", "Sean Bean", "Cate Blanchett", "Orlando Bloom", "Ian McKellen", "Dominic Monaghan", "Viggo Mortensen", "Elijah Wood", "Christopher Lee"], "https://49.media.tumblr.com/9eba6052112edcedbcd28bf485170ed2/tumblr_o0cggdNfkK1v2s5upo1_250.jpg"],
	        
["film", ["The Lord of the Rings: The Two Towers", "Der Herr der Ringe: Die zwei Türme"], "2002", ["2016 01 04", "2016 12 17"], 6, ["ger"], ["action", "adventure", "fantasy"], [], ["Middle Earth"], ["Peter Jackson"], ["Sean Astin", "Cate Blanchett", "Orlando Bloom", "Ian McKellen", "Dominic Monaghan", "Viggo Mortensen", "Miranda Otto", "Elijah Wood", "Sean Bean", "Christopher Lee"], "https://40.media.tumblr.com/0c4330abd747db58db95ace6790a689d/tumblr_o0g28sodpV1v2s5upo1_250.jpg"],
	        
["film", ["The Lord of the Rings: The Return of the King", "Der Herr der Ringe: Die Rückkehr des Königs"], "2003", ["2016 02 13", "2016 12 18"], 6, ["ger"], ["action", "adventure", "fantasy"], [], ["Middle Earth"], ["Peter Jackson"], ["Sean Astin", "Sean Bean", "Cate Blanchett", "Orlando Bloom", "Ian McKellen", "Dominic Monaghan", "Viggo Mortensen", "Miranda Otto", "Elijah Wood", "Christopher Lee"], "https://49.media.tumblr.com/e79056db9dd93cc65ac09ee280ed973c/tumblr_o2j5yuqU8n1v2s5upo1_250.jpg"],
	        
["film", ["Elizabethtown"], "2005", ["2015 08 25"], 8, ["ger"], ["comedy", "drama"], [], [], ["Cameron Crowe"], ["Orlando Bloom", "Kirsten Dunst", "Alec Baldwin", "Judy Greer", "Paul Schneider"], "https://49.media.tumblr.com/04848757c806d3f770ff9451e851dc3a/tumblr_o0dvucxTZA1v2s5upo1_250.jpg"],
	        
["film", ["Kingdom of Heaven", "Königreich der Himmel"], "2005", ["2015 12 28"], 9, ["ger"], ["action", "adventure"], [], [], ["Ridley Scott"], ["David Thewlis", "Orlando Bloom", "Eva Green"], "https://49.media.tumblr.com/3be01f4735a5d74e5c36ef0349fd379e/tumblr_o036jydUC71v2s5upo1_250.jpg"],
	        
["film", ["The Hobbit: The Desolation of Smaug", "Der Hobbit: Smaugs Einöde"], "2013", ["2015 12 13", "2016 12 16", "2018 03 10", "2020 01 17"], 8, ["ger"], ["adventure", "fantasy"], [], ["Middle Earth"], ["Peter Jackson"], ["Ian McKellen", "Martin Freeman", "Orlando Bloom", "Evangeline Lilly", "Cate Blanchett"], "https://49.media.tumblr.com/67800ee6e25ae78e36fcd512a8e0a570/tumblr_o0cfd7jSK91v2s5upo1_250.png"],
	        
["film", ["The Hobbit: The Battle of the Five Armies", "Der Hobbit: Die Schlacht der fünf Heere"], "2014", ["2016 01 02", "2016 12 17", "2018 03 11", "2020 01 27"], 8, ["ger"], ["adventure", "fantasy"], [], ["Middle Earth"], ["Peter Jackson"], ["Ian McKellen", "Martin Freeman", "Orlando Bloom", "Evangeline Lilly", "Cate Blanchett", "Thomasin McKenzie", "Christopher Lee"], "https://40.media.tumblr.com/237cae545a3d283f66e4e54339b8c59f/tumblr_o0cahcr4aK1v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: Dead Men Tell No Tales", "Pirates of the Caribbean: Salazars Rache"], "2017", ["2017 06 04"], 7, ["ger"], ["action", "adventure"], ["syl"], ["Kino"], ["Joachim Rønning", "Espen Sandberg"], ["Johnny Depp", "Geoffrey Rush", "Kaya Scodelario", "Martin Klebba", "Orlando Bloom", "Keira Knightley"], "https://68.media.tumblr.com/2fd84cd5e84c264842c089683fe913d0/tumblr_os7wkmjCQH1v2s5upo1_250.jpg"],
	        
["film", ["Fear and Loathing in Las Vegas", "Angst und Schrecken in Las Vegas"], "1998", ["2017 04 05"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Terry Gilliam"], ["Johnny Depp", "Tobey Maguire", "Mark Harmon", "Christopher Meloni", "Christina Ricci"], "https://68.media.tumblr.com/683b4dbbaf0b150c1ea757c9d2481f9b/tumblr_oo36eerF4m1v2s5upo1_250.jpg"],
	        
["film", ["Chocolat", "Chocolat... ein kleiner Biss genügt"], "2000", ["2018 10 01"], 7, ["ger"], ["drama", "romance"], [], [], ["Lasse Hallström"], ["Peter Stormare", "Johnny Depp"], "https://66.media.tumblr.com/64481288d6a83c431ad88edf2f0b26e3/6768264a0bfb34cb-55/s250x400/f3c99d3c802b8ad08ab4bdafba49f9c6202a04af.jpg"],
	        
["film", ["Secret Window", "Das geheime Fenster"], "2004", ["2016 03 25", "2017 06 27"], 8, ["ger"], ["drama", "mystery", "thriller"], [], [], ["David Koepp"], ["Johnny Depp"], "https://40.media.tumblr.com/e699e44bdff276b33e491e321d24b7c1/tumblr_o4lrviw58Y1v2s5upo1_250.jpg"],
	        
["film", ["Charlie and the Chocolate Factory", "Charlie und die Schokoladenfabrik"], "2005", ["2016 07 19", "2016 12 30", "2019 10 21"], 7, ["ger"], ["adventure", "comedy"], [], ["Netflix"], ["Tim Burton"], ["Johnny Depp", "Helena Bonham Carter", "Christopher Lee", "Freddie Highmore"], "https://66.media.tumblr.com/d634714520bf786d7b4b71f4527de9d8/tumblr_oakuocubQO1v2s5upo1_250.jpg"],
	        
["film", ["Pirates of the Caribbean: On Stranger Tides", "Pirates of the Caribbean - Fremde Gezeiten"], "2011", ["2016 03 23"], 8, ["ger"], ["action", "adventure"], [], [], ["Rob Marshall"], ["Johnny Depp", "Geoffrey Rush", "Judi Dench", "Richard Griffiths", "Gemma Ward", "Astrid Bergès-Frisbey"], "https://49.media.tumblr.com/2220dcaf321ba3de02635574eaf4925c/tumblr_o4jewhpfkM1v2s5upo1_250.jpg"],
	        
["film", ["Dark Shadows"], "2012", ["2016 10 19", "2017 10 31"], 7, ["ger"], ["comedy", "fantasy"], ["bini", "nico", "sai"], ["Netflix"], ["Tim Burton"], ["Johnny Depp", "Michelle Pfeiffer", "Helena Bonham Carter", "Eva Green", "Chloë Grace Moretz", "Hannah Murray", "Christopher Lee"], "https://66.media.tumblr.com/72d7e1d695f1143db14cbb78f9caf1c0/tumblr_ofc9wvl12p1v2s5upo1_250.jpg"],
	        
["film", ["Transcendence"], "2014", ["2017 01 27", "2020 06 13"], 7, ["ger"], ["action", "drama", "sci-fi"], [], ["Netflix"], ["Wally Pfister"], ["Johnny Depp", "Morgan Freeman", "Clifton Collins Jr."], "https://68.media.tumblr.com/e20c6018d6932df10e90da04ffe4e8cd/tumblr_okjl5qW5Ou1v2s5upo1_250.jpg"],
	        
["film", ["The Lone Ranger", "Lone Ranger"], "2013", ["2016 05 18"], 7, ["ger"], ["action", "adventure"], [], ["Kino"], ["Gore Verbinski"], ["Johnny Depp", "Helena Bonham Carter"], "https://66.media.tumblr.com/b72b7ac883c73df6095b029a50c90714/tumblr_o7dqnaXYUS1v2s5upo1_250.jpg"],
	        
["film", ["Into the Woods"], "2014", ["2015 11 08"], 6, ["ger"], ["adventure", "comedy", "musical"], [], [], ["Rob Marshall"], ["Anna Kendrick", "James Corden", "Emily Blunt", "Meryl Streep", "Johnny Depp"], "https://66.media.tumblr.com/5fa624946c153eb5d4f26a51df4a3d23/tumblr_px6zzvV1dl1v2s5upo1_250.jpg"],
	        
["film", ["Fantastic Beasts and Where to Find Them", "Phantastische Tierwesen und wo sie zu finden sind"], "2016", ["2017 04 09"], 7, ["ger"], ["adventure", "family", "fantasy"], [], ["Harry Potter"], ["David Yates"], ["Eddie Redmayne", "Johnny Depp", "Carmen Ejogo", "Alison Sudol"], "https://68.media.tumblr.com/d4343ba1c8e8316a0c092f6ab0c428e9/tumblr_ooakfjefTV1v2s5upo1_250.jpg"],
	        
["film", ["The Edge of Seventeen", "The Edge of Seventeen: Das Jahr der Entscheidung"], "2016", ["2017 10 03", "2020 07 06"], 8, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], ["Netflix"], ["Kelly Fremon Craig"], ["Hailee Steinfeld", "Woody Harrelson", "Haley Lu Richardson"], "https://66.media.tumblr.com/5f5cdec2a2fa0ccc7d0edc0896df9451/tumblr_pxxedmrifD1v2s5upo1_250.jpg"],
	        
["film", ["Ant-Man"], "2015", ["2016 05 21", "2018 04 01"], 8, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Marvel"], ["Peyton Reed"], ["Paul Rudd", "Evangeline Lilly", "Corey Stoll", "Anthony Mackie", "Judy Greer", "Michael Peña", "Chris Evans"], "https://68.media.tumblr.com/b70bf1e59eaffd22e771eec8025d4215/tumblr_o7jla3gTae1v2s5upo1_250.jpg"],
	        
["film", ["God Help the Girl"], "2014", ["2016 04 20", "2016 09 03", "2017 04 10"], 8, ["ger", "eng"], ["drama", "music", "musical"], [], [], ["Stuart Murdoch"], ["Emily Browning", "Hannah Murray"], "https://49.media.tumblr.com/d9c5fb1e63952082b53bb165a9948432/tumblr_o5y1djrjlO1v2s5upo1_250.jpg"],
	        
["film", ["The Golden Compass", "Der goldene Kompass"], "2007", ["2015 11 23", "2020 01 06"], 6, ["ger"], ["adventure", "family", "fantasy"], ["bini"], ["His Dark Materials"], ["Chris Weitz"], ["Nicole Kidman", "Daniel Craig", "Dakota Blue Richards", "Ian McKellen", "Eva Green", "Christopher Lee"], "https://66.media.tumblr.com/58e999a51e7baea5ccd8cb4d6b0a0054/tumblr_ppuwcejZDQ1v2s5upo1_250.jpg"],
	        
["film", ["The Hobbit: An Unexpected Journey", "Der Hobbit: Eine unerwartete Reise"], "2012", ["2015 11 07", "2016 12 16", "2018 03 09", "2019 12 26"], 7, ["ger"], ["adventure", "fantasy"], [], ["Middle Earth"], ["Peter Jackson"], ["Ian McKellen", "Martin Freeman", "Elijah Wood", "Cate Blanchett", "Christopher Lee"], "https://66.media.tumblr.com/b7a9b2f4a431a9d83aced6b3133d8302/tumblr_px6zyfkIt91v2s5upo1_250.jpg"],
	        
["audiobook", ["The Hunger Games", "Die Tribute von Panem"], "2008", [["2020 03 16", "2020 03 20"]], 9, ["eng"], [], [], ["Hunger Games"], ["Suzanne Collins"], [], "https://66.media.tumblr.com/2261cca058e61a683ae41bbcdd232eaf/9b90b0ce00f51e9f-87/s250x400/37e9d5379c435623b318d62cab3834386646f41f.jpg"],
	        
["audiobook", ["Catching Fire", "Die Tribute von Panem – Gefährliche Liebe"], "2009", [["2020 03 23", "2020 03 27"]], 9, ["eng"], [], [], ["Hunger Games"], ["Suzanne Collins"], [], "https://66.media.tumblr.com/e006761fbac221d0e5ee08b95365a0e4/ca93cd8ec6bdd962-ce/s250x400/2773dfefe2e92a4d84113fb69ace9be09dcdb2ef.jpg"],
	        
["audiobook", ["Mockingjay", "Die Tribute von Panem – Flammender Zorn"], "2010", [["2020 03 30", "2020 04 03"]], 7, ["eng"], [], [], ["Hunger Games"], ["Suzanne Collins"], [], "https://66.media.tumblr.com/a29684a87ede1c4134c9f75cd88b0f3b/43e0030ae8bafdef-ea/s250x400/140444d4f310e4261f80f455eba0a97055bd65e9.jpg"],
	        
["film", ["The Hunger Games", "Die Tribute von Panem - The Hunger Games"], "2012", ["2015 11 08", "2016 10 10"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Hunger Games"], ["Gary Ross"], ["Stanley Tucci", "Jennifer Lawrence", "Liam Hemsworth", "Elizabeth Banks", "Woody Harrelson", "Isabelle Fuhrman", "Josh Hutcherson", "Mackenzie Lintz", "Sandra Ellis Lafferty"], "https://66.media.tumblr.com/a24245b34e92ec6447ebf36186441831/tumblr_px704ncX2r1v2s5upo1_250.jpg"],
	        
["film", ["The Hunger Games: Catching Fire", "Die Tribute von Panem - Catching Fire"], "2013", ["2015 11 12", "2016 10 11"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Hunger Games"], ["Francis Lawrence"], ["Jennifer Lawrence", "Liam Hemsworth", "Woody Harrelson", "Josh Hutcherson", "Elizabeth Banks", "Stanley Tucci", "Jena Malone", "Sandra Ellis Lafferty"], "https://66.media.tumblr.com/f7b4170e92e5bc06aaee4193e449a0c9/tumblr_ppuwk10qr21v2s5upo1_250.jpg"],
	        
["film", ["The Hunger Games: Mockingjay - Part 1", "Die Tribute von Panem - Mockingjay: Teil 1"], "2014", ["2016 10 13"], 7, ["ger"], ["action", "adventure"], [], ["Hunger Games"], ["Francis Lawrence"], ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Julianne Moore", "Elizabeth Banks", "Stanley Tucci", "Jena Malone"], "https://68.media.tumblr.com/e43757394967e00f9c522eddb839f143/tumblr_of03elLgxw1v2s5upo1_250.jpg"],
	        
["film", ["The Hunger Games: Mockingjay - Part 2", "Die Tribute von Panem - Mockingjay: Teil 2"], "2015", ["2016 10 14"], 8, ["ger"], ["action", "adventure"], [], ["Hunger Games"], ["Francis Lawrence"], ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Julianne Moore", "Elizabeth Banks", "Stanley Tucci", "Jena Malone"], "https://68.media.tumblr.com/fbc3f18858c714b0e7b247f74b711b6d/tumblr_of1sxh8yGO1v2s5upo1_250.jpg"],
	        
["audiobook", ["Lord of the Flies", "Herr der Fliegen"], "1954", [["2020 06 09", "2020 06 11"]], 4, ["eng"], [], [], [], ["William Golding"], [], "https://66.media.tumblr.com/29c9aac93e71d25a89ad3d626686c06b/4c0a0ed205b7aa97-0b/s250x400/7d746a247d63ef5f91f4c55bc201127710d39df1.jpg"],
	        
["audiobook", ["Treasure Island", "Die Schatzinsel"], "1883", ["2020 06 08"], 6, ["ger"], ["adventure"], [], [], ["Robert Louis Stevenson"], [], "https://66.media.tumblr.com/bb20bcc783835dc94cc8af42a84e2bc0/07170f29590fd68b-0a/s250x400/c491d31f7d0ad6d2ad0296219ceb6db17927c058.jpg"],
	        
["audiobook", ["Every Day", "Letztendlich sind wir dem Universum egal"], "2012", [["2020 05 06", "2020 05 07"]], 6, ["eng"], ["fantasy", "romance"], [], [], ["David Levithan"], [], "https://66.media.tumblr.com/6683e3ee9b2406579c4ba0061633a06e/3d1911ab8ffaefd0-b8/s250x400/85f597d35cbea8f7f46ff03e625deca3eca56b9e.jpg"],
	        
["film", ["The Intern", "Man lernt nie aus"], "2015", ["2020 08 16"], 8, ["ger"], ["comedy", "drama"], ["syl", "bini"], [], ["Nancy Meyers"], ["Robert De Niro", "Anne Hathaway"], "https://64.media.tumblr.com/dc8010cface983725a5ac4c33af808c1/2bcf8e78f7bf2566-66/s250x400/c3350890d5325425a288bfdffc3aa9c4a2aece3a.jpg"],
	        
["film", ["The Wolf of Wall Street"], "2013", ["2020 08 15"], 4, ["ger"], ["biography", "crime"], [], ["Netflix"], ["Martin Scorsese"], ["Leonardo DiCaprio", "Jonah Hill", "Matthew McConaughey", "Kyle Chandler", "Cristin Milioti"], "https://64.media.tumblr.com/54310010e9b3fedc33a567b3b4daffd5/4c0160ebbd8aee76-64/s250x400/3e43425a185a9cf709f2db7c42335c8fc2eb9d1d.jpg"],
	        
["film", ["Emma", "Jane Austens Emma"], "1996", ["2020 08 09"], 7, ["ger"], ["comedy", "drama"], ["syl"], [], ["Douglas McGrath"], ["Gwyneth Paltrow"], "https://64.media.tumblr.com/f7aabbfb3b3224f5a7a3d3337c14ffee/102d17d08a5983ba-de/s250x400/af5a2953ad7c0682cb8c26770124879c57d515fe.jpg"],
	        
["film", ["The Devil Wears Prada", "Der Teufel trägt Prada"], "2006", ["2020 08 06"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["David Frankel"], ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci", "Heidi Klum", "Rebecca Mader"], "https://64.media.tumblr.com/c5a17e909446962af1897d7f79496706/1d5d0f2d0ae4153e-29/s250x400/e27cec18309f3b2ded894f104412cb724dca0fb1.jpg"],
	        
["film", ["Radio Rebel", "Radio Rebel - Unüberhörbar"], "2012", ["2020 08 06"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Peter Howitt"], ["Debby Ryan"], "https://64.media.tumblr.com/85bc4ec44c34a3f37e54eef13cdbbadd/3c19601c082c6958-e2/s250x400/8db97eddc8dd3185a7106260a78854dc299f84e3.jpg"],
	        
["film", ["Three Billboards Outside Ebbing, Missouri"], "2017", ["2020 08 03"], 7, ["ger"], ["comedy", "crime"], ["syl"], [], ["Martin McDonagh"], ["Frances McDormand", "Woody Harrelson", "Abbie Cornish", "Zeljko Ivanek", "Peter Dinklage", "Kathryn Newton", "Samara Weaving", "Abbie Cornish", "Sam Rockwell"], "https://64.media.tumblr.com/34eef63c97addadebfe4c53d416722b9/6e93d58244ffce44-76/s250x400/87367eb91105532cbecd9f146b64d0767b9aadc6.jpg"],
	        
["film", ["Emma.", "Emma"], "2020", ["2020 07 27"], 6, ["ger"], ["comedy", "drama"], ["syl"], ["Kino"], ["Autumn de Wilde"], ["Anya Taylor-Joy", "Bill Nighy", "Tanya Reynolds", "Callum Turner"], "https://64.media.tumblr.com/b0483e91677af92641a1d11663da2aef/ae5c907a9b320a83-7e/s250x400/4b3012c6be8d4118ec14688c5096aa081b3eebc0.jpg"],
	        
["film", ["The Old Guard"], "2020", ["2020 07 27"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Gina Prince-Bythewood"], ["Chiwetel Ejiofor", "Harry Melling"], "https://64.media.tumblr.com/89ad420fc18f829fdc232cc078a87e4f/6a3b04b9ffb46ba4-e0/s250x400/e002ec38f2252118eb151df79eadaf794c231b0d.jpg"],
	        
["film", ["17 Again", "17 Again - Back to High School"], "2009", ["2020 07 25"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Burr Steers"], ["Zac Efron", "Matthew Perry", "Michelle Trachtenberg", "Michelle Trachtenberg"], "https://64.media.tumblr.com/0d4b4127a01f8d85f22ea9e8504476cf/e253c3091319ef95-91/s250x400/c0c7bc733244a81b173fadde533e8288b7974113.jpg"],
	        
["film", ["Catch Me If You Can"], "2002", ["2020 07 21"], 8, ["ger"], ["biography", "crime"], [], ["Netflix"], ["Steven Spielberg"], ["Leonardo DiCaprio", "Tom Hanks", "Christopher Walken", "Amy Adams", "Jennifer Garner", "Ellen Pompeo", "Elizabeth Banks"], "https://64.media.tumblr.com/93357d4f48df3e0b2b0dfc95e82bcbcc/ff023cbce9ed2f16-8c/s250x400/7b7873def851e0fb4c04653412b4cdaab1303f9e.jpg"],
	        
["film", ["Stitch! The Movie", "Stitch & Co. – Der Film"], "2003", ["2020 09 14"], 7, ["ger"], ["animation", "adventure"], [], ["DVD"], ["Tony Craig", "Roberts Gannaway"], [], "https://64.media.tumblr.com/7c664cd9f211dba1d0888af946e6cb35/4b3de6d48ceb0f31-cc/s250x400/fe674abada469721c2c1d3a49e2645f55ab35a1b.jpg"],
	        
["film", ["The Girl with Nine Wigs", "Heute bin ich blond"], "2013", ["2020 09 14"], 6, ["ger"], ["biography", "comedy"], [], ["DVD"], ["Marc Rothemund"], ["Daniel Zillmann"], "https://64.media.tumblr.com/d2873bc102bc01289ae24f7d3dd8f008/060e3a6108445317-b9/s250x400/9e04e09f6a5fd1aea7d2854821f71f11533db4ce.jpg"],
	        
["film", ["All the Bright Places", "All die verdammt perfekten Tage"], "2020", ["2020 06 13"], 7, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Brett Haley"], ["Elle Fanning", "Justice Smith"], "https://66.media.tumblr.com/4234402071d21b4ad20bbc81763f21ed/e281213a508bcd3d-7d/s250x400/b70ea8db842311cd587b0b85ba7e42c90d88ce95.jpg"],
	        
["film", ["Tigermilch"], "2017", ["2020 05 31"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ute Wieland"], ["Emily Kusche"], "https://66.media.tumblr.com/81b55aa9054bce909909a7a43fe58e51/2012c6606283f3ab-4e/s250x400/c949a2422bf2f82cb85b9e3552f6b785eaf6ff18.jpg"],
	        
["film", ["20th Century Women", "Jahrhundertfrauen"], "2016", ["2017 06 26"], 8, ["ger"], ["comedy", "drama"], ["syl", "je"], ["Kino"], ["Mike Mills"], ["Elle Fanning", "Lucas Jade Zumann"], "https://66.media.tumblr.com/57ae9062e00bd63a7387cd5e6c39fcc0/tumblr_ppuvm1QCdV1v2s5upo1_250.jpg"],
	        
["film", ["Super 8"], "2011", ["2015 11 29", "2017 10 31"], 8, ["ger"], ["action", "adventure", "mystery", "supernatural"], ["bini", "nico", "sai"], ["Netflix"], ["J.J. Abrams"], ["Joel Courtney", "Joel McKinnon Miller", "Kyle Chandler", "Ron Eldard", "AJ Michalka", "Elle Fanning", "Bruce Greenwood", "Gabriel Basso"], "https://66.media.tumblr.com/f0888bfa7aa54ee046dca2f4dbd84875/tumblr_pxbeljkoEG1v2s5upo1_250.jpg"],
	        
["film", ["Howl's Moving Castle", "Das wandelnde Schloss"], "2004", ["2015 11 28", "2017 09 25", "2020 01 26"], 8, ["ger"], ["anime", "adventure"], ["bini"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://66.media.tumblr.com/516d88be925b2846b0f1d32947e4740c/tumblr_ppuw8wVHkw1v2s5upo1_250.jpg"],
	        
["film", ["Nausicaä of the Valley of the Wind", "Nausicaä - Prinzessin aus dem Tal der Winde", "Kaze no tani no Naushika"], "1984", ["2015 11 28", "2016 04 22", "2017 01 25", "2018 03 28", "2019 02 22"], 10, ["ger", "eng"], ["anime", "adventure"], ["bini"], ["fav", "Ghibli"], ["Hayao Miyazaki"], [], "https://49.media.tumblr.com/88924fe72fd0946794f8eb060337d51f/tumblr_o650uy0P9B1v2s5upo1_250.jpg"],
	        
["film", ["The Breakfast Club", "Der Frühstücksclub"], "1985", ["2015 11 11", "2016 03 24", "2016 10 08", "2019 03 31"], 10, ["ger", "eng"], ["comedy", "drama"], ["bini", "nico"], ["Schule", "bby"], ["John Hughes"], ["Molly Ringwald"], "https://40.media.tumblr.com/48d4ae2ab7ffb3b3fc7ac1af5bd5329e/tumblr_o4l8hmypvm1v2s5upo1_250.jpg"],
	        
["film", ["Inside Out", "Alles steht Kopf"], "2015", ["2015 11 01", "2016 06 03", "2017 04 13"], 9, ["ger"], ["animation", "adventure"], ["jani", "nico"], ["Kino"], ["Pete Docter", "Ronnie Del Carmen"], [], "https://66.media.tumblr.com/a840925f557f695bd1b80d95fa381fdd/tumblr_pwvsgw1Q9d1v2s5upo1_250.jpg"],
	        
["film", ["Three Wishes for Cinderella", "Drei Haselnüsse für Aschenbrödel", "Tri orísky pro Popelku"], "1973", ["2015 12 24", "2016 12 24", "2017 12 24", "2017 12 25", "2018 12 24", "2019 12 24"], 6, ["ger"], ["drama"], ["bini", "syl", "je"], ["Netflix"], ["Václav Vorlícek"], [], "https://49.media.tumblr.com/423c432c7706d2941a0e314cb118b444/tumblr_nzvr95nGyQ1v2s5upo1_250.jpg"],
	        
["film", ["The Truman Show", "Die Truman Show"], "1998", ["2015 10 29", "2018 02 02", "2018 02 23", "2019 07 15"], 8, ["eng", "ger"], ["comedy", "drama"], ["bini"], ["Schule", "Netflix"], ["Peter Weir"], ["Jim Carrey", "Laura Linney", "Natascha McElhone", "Holland Taylor", "Ed Harris"], "https://66.media.tumblr.com/7d347849969f5725f06f51dd2e26a13f/tumblr_pwoovrE4HJ1v2s5upo1_250.jpg"],
	        
["film", ["Attack the Block"], "2011", ["2015 09 13", "2016 08 05", "2017 08 01"], 9, ["ger"], ["action", "adventure", "supernatural"], ["jenny", "sai", "nico", "bini"], [], ["Joe Cornish"], ["Jodie Whittaker", "Nick Frost"], "https://66.media.tumblr.com/fb54890b2b79db8103192263b20c50ee/tumblr_of8pvlIKlk1v2s5upo1_250.jpg"],
	        
["film", ["St. Trinian's", "Die Girls von St. Trinian"], "2007", ["2016 08 16"], 7, ["ger"], ["comedy", "family"], [], [], ["Oliver Parker", "Barnaby Thompson"], ["Talulah Riley", "Rupert Everett", "Jodie Whittaker", "Lily Cole", "Russell Brand", "Toby Jones", "Stephen Fry"], "https://66.media.tumblr.com/e3c36d1794d30a5e2b309e0cd5db6184/tumblr_oc0jl912841v2s5upo1_250.jpg"],
	        
["film", ["St Trinian's 2: The Legend of Fritton's Gold", "Die Girls von St. Trinian 2 - Auf Schatzsuche"], "2009", ["2016 08 17"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Oliver Parker", "Barnaby Thompson"], ["Rupert Everett", "Colin Firth", "David Tennant", "Talulah Riley", "Jodie Whittaker", "Toby Jones"], "https://66.media.tumblr.com/fe1587ac46120a50e94b3f9639d8a456/tumblr_oc1xcaTf2X1v2s5upo1_250.jpg"],
	        
["film", ["Steinzeit – Das Experiment: Steinzeit-Kinder"], "2007", ["2020 09 14"], 5, ["ger"], ["reality-tv", "documentary"], [], ["DVD"], [], [], "https://64.media.tumblr.com/8bb35e0c8e0aabdde9b04cbf5c90ee94/dabfd6ff7b8b7930-bb/s250x400/092f4f016e091d45e0ac36f95806b311eebccfae.jpg"],
	        
["film", ["Transformers: The Last Knight", "Transformers 5: The Last Knight"], "2017", ["2017 07 19"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Transformers", "Kino"], ["Michael Bay"], ["Mark Wahlberg", "Anthony Hopkins", "Josh Duhamel", "Stanley Tucci", "Steve Buscemi", "John Goodman", "Omar Sy"], "https://66.media.tumblr.com/aeaef5ce22de525ce1bdf7e9d1e811d9/tumblr_pxnkebxWTN1v2s5upo1_250.jpg"],
	        
["film", ["Zombieland"], "2009", ["2017 07 31"], 7, ["ger"], ["adventure", "comedy", "fantasy", "horror"], ["nico", "sai", "jenny"], [], ["Ruben Fleischer"], ["Jesse Eisenberg", "Woody Harrelson", "Emma Stone", "Abigail Breslin", "Bill Murray"], "https://66.media.tumblr.com/6b6285b5a200e3a84ba7b3255787e593/tumblr_pxnkhdoJuQ1v2s5upo1_250.jpg"],
	        
["film", ["Shutter Island"], "2010", ["2017 07 16"], 7, ["ger"], ["mystery", "thriller"], [], [], ["Martin Scorsese"], ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley", "Max von Sydow", "Emily Mortimer", "Jackie Earle Haley", "Michelle Williams"], "https://66.media.tumblr.com/0a0558c0082ac5412934349b70f824e4/tumblr_ppuvzheK9N1v2s5upo1_250.jpg"],
	        
["film", ["Who Am I", "Who Am I - Kein System ist sicher"], "2014", ["2017 07 03", "2019 01 29", "2020 06 13"], 9, ["ger"], ["crime", "drama"], ["syl"], ["Netflix"], ["Baran bo Odar"], ["Tom Schilling", "Elyas M'Barek", "Wotan Wilke Möhring", "Antoine Monot Jr.", "Hannah Herzsprung", "Stephan Kampwirth", "Arndt Schwering-Sohnrey"], "https://66.media.tumblr.com/30c001dd83c4c23870490c20aa6f56a6/tumblr_ppuvvqZRf51v2s5upo1_250.jpg"],
	        
["film", ["Die Vorstadtkrokodile"], "1977", ["2015 08 11"], 6, ["ger"], ["family", "adventure"], [], [], ["Wolfgang Becker"], [], "https://49.media.tumblr.com/bec2fd9059b81e005cfcb4c3a793ade6/tumblr_nztao7NoRR1v2s5upo2_r1_250.png"],
	        
["film", ["Whisper of the Heart", "Stimme des Herzens", "Mimi wo sumaseba"], "1995", ["2015 08 26", "2020 12 12"], 5, ["ger"], ["anime", "drama", "romance"], ["bini"], ["Ghibli"], ["Yoshifumi Kondô"], [], "https://49.media.tumblr.com/d9f5ec0c7b5e004e756df9a23cd3885a/tumblr_o0dwdeGGtP1v2s5upo1_250.jpg"],
	        
["film", ["The Virgin Suicides", "The Virgin Suicides - Verlorene Jugend"], "1999", ["2015 08 30", "2016 08 13"], 9, ["ger"], ["drama", "romance"], [], [], ["Sofia Coppola"], ["Kirsten Dunst", "Danny DeVito"], "https://40.media.tumblr.com/71765bd581b584f16cddae7574c9eeff/tumblr_o0p1t2Azpk1v2s5upo1_250.jpg"],
	        
["film", ["The Lovely Bones", "In meinem Himmel"], "2009", ["2015 09 05"], 9, ["ger"], ["drama"], ["bini", "syl"], [], ["Peter Jackson"], ["Mark Wahlberg", "Stanley Tucci", "Saoirse Ronan", "AJ Michalka", "Peter Jackson"], "https://40.media.tumblr.com/59174cdcb45dae0ee391972f62671a27/tumblr_o0p4w7xCtV1v2s5upo1_250.jpg"],
	        
["film", ["Stand by Me", "Stand by Me: Das Geheimnis eines Sommers"], "1986", ["2015 09 10", "2016 09 25"], 9, ["ger"], ["adventure", "drama"], ["bini", "nico"], [], ["Rob Reiner"], [], "https://40.media.tumblr.com/bba18c1a5b52bf684b609263c5975760/tumblr_o0suhzhX1C1v2s5upo1_250.jpg"],
	        
["film", ["Pacific Rim"], "2013", ["2015 09 12", "2017 05 08"], 7, ["ger"], ["action", "adventure", "sci-fi"], ["bini", "nico"], [], ["Guillermo del Toro"], ["Clifton Collins Jr.", "Ron Perlman", "Burn Gorman"], "https://37.media.tumblr.com/a3c61f7b93f5a2d2e91773e76711125d/tumblr_o3kcz4exSZ1v2s5upo1_250.jpg"],
	        
["film", ["Holes", "Das Geheimnis von Green Lake"], "2003", ["2015 09 26"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Andrew Davis"], ["Sigourney Weaver", "Jon Voight", "Shia LaBeouf", "Dulé Hill"], "https://66.media.tumblr.com/ffc06fb1af6193586005bb6513d1568e/tumblr_ppxzedeXjF1v2s5upo1_250.jpg"],
	        
["film", ["Surrogates", "Surrogates - Mein zweites Ich"], "2009", ["2015 09 27"], 6, ["ger"], ["action", "sci-fi"], ["bini"], [], ["Jonathan Mostow"], ["Bruce Willis", "Radha Mitchell", "Rosamund Pike", "Helena Mattsson"], "https://68.media.tumblr.com/e41a682957e9496e378c5d5f02a47bb1/tumblr_oov2hahWrr1v2s5upo1_250.jpg"],
	        
["film", ["Jumper"], "2008", ["2015 09 28"], 5, ["ger"], ["action", "adventure", "supernatural"], ["bini"], [], ["Doug Liman"], ["Samuel L. Jackson", "AnnaSophia Robb", "Kristen Stewart"], "https://66.media.tumblr.com/c127204bd7ac8dcca93909069de581d5/tumblr_pp184vymaZ1v2s5upo1_250.jpg"],
	        
["film", ["Bridge to Terabithia", "Brücke nach Terabithia"], "2007", ["2015 09 29"], 10, ["ger"], ["drama", "family", "fantasy"], ["bini"], [], ["Gabor Csupo"], ["Josh Hutcherson", "AnnaSophia Robb", "Zooey Deschanel", "Bailee Madison"], "http://40.media.tumblr.com/52f1c5ef8620ef3043c42c3dce1d5fb5/tumblr_nl6wmnrheq1rcb0d2o3_1280.jpg"],
	        
["film", ["Gravity"], "2013", ["2015 10 06"], 4, ["ger"], ["drama", "sci-fi"], [], [], ["Alfonso Cuarón"], ["Sandra Bullock", "George Clooney", "Ed Harris"], "https://66.media.tumblr.com/d2714e00070ea5f11edf134e82c8bc87/tumblr_ppxzgfr8Yw1v2s5upo1_250.jpg"],
	        
["film", ["Wild", "Der große Trip - Wild"], "2014", ["2015 10 07", "2016 06 04"], 10, ["ger"], ["biography", "drama"], [], ["fav"], ["Jean-Marc Vallée"], ["Reese Witherspoon", "Laura Dern", "Nick Eversman"], "https://66.media.tumblr.com/7b8d0edfa836f6cf0366bfaea15da033/tumblr_ppxzhwNov81v2s5upo1_250.jpg"],
	        
["film", ["Stuck in Love.", "Love Stories - Erste Lieben, zweite Chancen"], "2012", ["2015 10 12"], 10, ["ger"], ["comedy", "drama", "romance"], [], [], ["Josh Boone"], ["Jennifer Connelly", "Lily Collins", "Nat Wolff", "Logan Lerman", "Liana Liberato"], "https://66.media.tumblr.com/d771c3ef8d3f38f954628e082f9cf66a/tumblr_ppxznwHOLZ1v2s5upo1_250.jpg"],
	        
["film", ["To the Bone"], "2017", ["2018 05 27"], 7, ["ger"], ["drama"], [], ["Netflix"], ["Marti Noxon"], ["Lily Collins", "Liana Liberato", "Kathryn Prescott"], "https://66.media.tumblr.com/13c6660c42ed48eefa171e8a4cb7e4e0/tumblr_pzkte3xLEG1v2s5upo1_250.jpg"],
	        
["film", ["Dear Eleanor"], "2016", ["2016 07 23"], 7, ["ger"], ["comedy", "drama"], [], [], ["Kevin Connolly"], ["Liana Liberato", "Isabelle Fuhrman", "Joel Courtney"], "https://66.media.tumblr.com/94aa99a8ea17c76654947f69eb3b3ecf/tumblr_oarexdQ1XY1v2s5upo1_250.jpg"],
	        
["film", ["The Kissing Booth"], "2018", ["2018 06 20"], 7, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Vince Marcello"], ["Joey King", "Joel Courtney", "Jacob Elordi", "Molly Ringwald"], "https://66.media.tumblr.com/c125317b2cb407a22928e269ac80703f/tumblr_pzpvueGPeX1v2s5upo1_250.jpg"],
	        
["film", ["The Kissing Booth 2"], "2020", ["2020 08 01"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Vince Marcello"], ["Joey King", "Joel Courtney", "Jacob Elordi", "Molly Ringwald"], "https://64.media.tumblr.com/eb8453dac338e1f0f169f98ecf59317b/f7e42343a8e68929-ea/s250x400/d699de0a61ad4491f216cdceb941bd10fe3a6fb0.jpg"],
	        
["film", ["Sixteen Candles", "Das darf man nur als Erwachsener"], "1984", ["2020 07 29"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["John Hughes"], ["Molly Ringwald", "Justin Henry", "Michael Schoeffling", "John Cusack", "Joan Cusack"], "https://64.media.tumblr.com/16308ea24a67114d79485312c4fdb99b/54d87be6a8f5b0e9-c0/s250x400/9b52c13205076e3c4fdf64c8d514164cc5a2e5ea.jpg"],
	        
["film", ["The Imitation Game", "The Imitation Game - Ein streng geheimes Leben"], "2014", ["2020 07 02"], 6, ["ger"], ["biography", "drama"], [], ["Netflix"], ["Morten Tyldum"], ["Benedict Cumberbatch", "Keira Knightley", "Alex Lawther"], "https://66.media.tumblr.com/46be14000a201a456d04df27f8f2ef3b/48c0da0f92e7a2b7-98/s250x400/0ecb35fbfdbbc1429ab5b3188d2c38e6ca8ae108.jpg"],
	        
["film", ["Tall Girl", "Wie Jodi über sich hinauswuchs"], "2019", ["2019 09 14", "2020 08 16"], 7, ["ger"], ["comedy", "drama"], ["syl", "bini"], ["Netflix"], ["Nzingha Stewart"], ["Ava Michelle", "Sabrina Carpenter", "Paris Berelc", "Steve Zahn"], "https://66.media.tumblr.com/d3fbcb8643059f746e3689ffe685cfa6/2ad3b0f691c1dcbf-8a/s250x400/9ed24ca38ebc71186b19f0c1554e23dfa1fc307a.jpg"],
	        
["film", ["The Dark Tower", "Der Dunkle Turm"], "2017", ["2019 07 16"], 4, ["ger"], ["action", "adventure"], ["nico"], ["Dark Tower", "Netflix"], ["Nikolaj Arcel"], ["Matthew McConaughey", "Idris Elba", "Claudia Kim", "Jackie Earle Haley", "Abbey Lee", "Katheryn Winnick"], "https://66.media.tumblr.com/2717e0e9fcbcba95671053401df4a244/33834b775e3b9f2f-0c/s250x400/697e435d5346a24b31eefc99498863b4a4e4b208.jpg"],
	        
["film", ["Five Feet Apart", "Drei Schritte zu dir"], "2019", ["2019 07 07"], 8, ["ger"], ["drama", "romance"], ["syl"], ["Kino"], ["Justin Baldoni"], ["Haley Lu Richardson", "Ariana Guerra", "Moises Arias"], "https://66.media.tumblr.com/9a0b9f9be370c06d273db093f9ce7e81/ca58850e02f4cfa4-99/s250x400/778f94e4fd66b54b3facc5c5b8bddb5883bacdde.jpg"],
	        
["film", ["Split"], "2016", ["2017 02 04", "2019 02 02", "2020 09 28"], 8, ["ger", "eng"], ["horror", "thriller"], ["syl"], ["Eastrail 177", "Kino", "DVD"], ["M. Night Shyamalan"], ["James McAvoy", "Anya Taylor-Joy", "Betty Buckley", "Bruce Willis"], "https://68.media.tumblr.com/c97742e705faeb4107c44333b6d08407/tumblr_okvc0ubTvD1v2s5upo1_250.jpg"],
	        
["film", ["Pretty in Pink"], "1986", ["2017 02 04"], 6, ["ger"], ["comedy", "drama"], [], [], ["Howard Deutch"], ["Molly Ringwald", "Jon Cryer"], "https://68.media.tumblr.com/536a8daae8af15bd330e30d2f20b2a1c/tumblr_okvc3qB3zY1v2s5upo1_250.jpg"],
	        
["film", ["Avatar", "Avatar - Aufbruch nach Pandora"], "2009", ["2017 02 13", "2018 07 14"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], [], ["James Cameron"], ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Michelle Rodriguez", "Giovanni Ribisi"], "https://68.media.tumblr.com/b624a80e83ee671903da746329d4eea1/tumblr_olj7dc7cje1v2s5upo1_250.jpg"],
	        
["film", ["Logan", "Logan: The Wolverine"], "2017", ["2017 03 02", "2020 03 02"], 8, ["ger"], ["action", "drama", "supernatural"], ["nico"], ["Kino", "X-Men", "Marvel"], ["James Mangold"], ["Hugh Jackman", "Patrick Stewart", "Dafne Keen", "Stephen Merchant"], "https://68.media.tumblr.com/42f0e6d37b2f98c78afda5b69edaf6d5/tumblr_om8zfwTnMX1v2s5upo1_250.jpg"],
	        
["film", ["The Space Between Us", "Den Sternen so nah"], "2017", ["2017 03 04"], 7, ["ger"], ["drama", "romance", "sci-fi"], ["je", "syl"], ["Kino"], ["Peter Chelsom"], ["Gary Oldman", "BD Wong", "Asa Butterfield"], "https://68.media.tumblr.com/514a1e7f63f97208cde10e75312227b2/tumblr_omeq8dnfiM1v2s5upo1_250.jpg"],
	        
["film", ["Jurassic World: Fallen Kingdom", "Jurassic World: Das gefallene Königreich"], "2018", ["2018 06 07", "2020 11 26"], 8, ["ger"], ["action", "adventure"], ["bini", "je", "syl"], ["Kino", "Jurassic Park", "DVD"], ["J.A. Bayona"], ["Chris Pratt", "Bryce Dallas Howard", "Toby Jones", "Jeff Goldblum", "BD Wong", "Justice Smith"], "https://66.media.tumblr.com/2e331c74b66d28043538fe0e9ffb0e23/tumblr_pzktkmJCIo1v2s5upo1_250.jpg"],
	        
["film", ["Lilo & Stitch"], "2002", ["2018 06 14"], 8, ["ger"], ["animation", "adventure"], ["bini"], [], ["Dean DeBlois", "Chris Sanders"], [], "https://66.media.tumblr.com/686b5039acaf7c0c922cb82dedc322ef/tumblr_pzktqh53nE1v2s5upo1_250.jpg"],
	        
["film", ["The Fault in Our Stars", "Das Schicksal ist ein mieser Verräter"], "2014", ["2018 05 27"], 7, ["ger"], ["drama", "romance"], ["syl"], [], ["Josh Boone"], ["Shailene Woodley", "Ansel Elgort", "Nat Wolff", "Laura Dern", "Willem Dafoe"], "https://66.media.tumblr.com/9d2ff6a174443bf31ae6cea3328fcf01/tumblr_pzktgoXS3g1v2s5upo1_250.jpg"],
	        
["film", ["Mean Girls", "Girls Club - Vorsicht bissig!"], "2004", ["2018 06 16"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["Mark Waters"], ["Lindsay Lohan", "Rachel McAdams", "Amy Poehler", "Lizzy Caplan", "Neil Flynn", "Amanda Seyfried"], "https://66.media.tumblr.com/ed6968420c5a469bc3013dde5b8eb11a/tumblr_pzktt21Nry1v2s5upo1_250.jpg"],
	        
["film", ["How It Ends"], "2018", ["2018 07 30"], 3, ["ger"], ["action", "adventure"], ["nico", "bini"], ["Netflix"], ["David M. Rosenthal"], ["Theo James"], "https://66.media.tumblr.com/1662f74fc5325dd41902574e60108f9d/3489b61bacf3339a-4e/s250x400/bd14b214f49d1f37eb2ed46d06eda3e8a206f3ba.jpg"],
	        
["film", ["The Last Airbender", "Die Legende von Aang"], "2010", ["2018 07 27"], 6, ["ger"], ["action", "adventure"], ["nico", "bini"], [], ["M. Night Shyamalan"], [], "https://66.media.tumblr.com/a5737692ac0c44f8573596a7ca795177/42e8ec65f7daa84a-d5/s250x400/12040d0e5aa0b3d896d713094f305b961e71a76c.jpg"],
	        
["film", ["Jimmy Neutron: Boy Genius", "Jimmy Neutron: Der mutige Erfinder"], "2001", ["2018 08 22", "2020 10 10"], 7, ["ger"], ["animation", "action"], ["bini", "je"], ["Jimmy Neutron", "DVD"], ["John A. Davis"], [], "https://66.media.tumblr.com/86736ebfdedf622454d9d4015d0d04ad/15d070d8838a05e9-cc/s250x400/ac60e735a11226d4cd88ac8e49233626cf4483c8.jpg"],
	        
["film", ["Scott Pilgrim vs. the World", "Scott Pilgrim gegen den Rest der Welt"], "2010", ["2018 09 08"], 8, ["ger"], ["action", "comedy"], ["bini"], ["Netflix"], ["Edgar Wright"], ["Michael Cera", "Anna Kendrick", "Aubrey Plaza", "Jason Schwartzman", "Johnny Simmons", "Chris Evans", "Brie Larson", "Clifton Collins Jr."], "https://66.media.tumblr.com/8a0082a8d6861ccb645fceb705b547e2/b68f346e81d22b95-31/s250x400/47f779811fd6877145f526d9f908202623d704e1.jpg"],
	        
["film", ["Shrek the Third", "Shrek der Dritte"], "2007", ["2018 09 17"], 5, ["ger"], ["animation", "adventure"], [], ["Shrek", "Netflix"], ["Chris Miller", "Raman Hui"], [], "https://66.media.tumblr.com/05bccd541bd2abb4c592d8a48dcb559d/61b6313c2fbfea8d-62/s250x400/e4cfdc96073cb66ce3dcd92498c5fd26477e1583.jpg"],
	        
["film", ["To All the Boys I've Loved Before"], "2018", ["2018 09 19"], 7, ["ger"], ["comedy", "drama"], ["bini"], ["Netflix"], ["Susan Johnson"], ["Lana Condor", "Noah Centineo", "Anna Cathcart", "Andrew Bachelor"], "https://66.media.tumblr.com/ecfc3cf7c712bc3d71788d01747bd9f2/c49d9445953e0db3-a1/s250x400/6dae5add106f53bac18a8f32c26b296fad92d964.jpg"],
	        
["film", ["Candy Jar"], "2018", ["2018 10 19", "2019 10 02", "2020 12 14"], 8, ["ger"], ["comedy"], [], ["fav", "Netflix"], ["Ben Shelton"], ["Jacob Latimore", "Sami Gayle", "Ariana Guerra"], "https://66.media.tumblr.com/066c667345c10ff88cb86d7616fe701c/ae892af51cbc7500-47/s250x400/183cd2e5c8c1d5bc9986c8aba9b95be73f7038dd.jpg"],
	        
["film", ["Pippi Longstocking", "Pippi Langstrumpf", "Pippi Långstrump"], "1969", ["2018 12 26"], 6, ["ger"], ["adventure", "comedy"], ["bini"], ["Pippi"], ["Olle Hellbom"], ["Inger Nilsson", "Maria Persson", "Pär Sundberg"], "https://66.media.tumblr.com/c09ac61ff3510f4e06c0b83b5d8f5da4/2eb32da8fb15f7e4-6e/s250x400/6bd28405ca7fadace0552b2547b12a878035bce0.jpg"],
	        
["film", ["The Little Mermaid"], "2018", ["2018 12 26"], 5, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["Blake Harris", "Chris Bouchard"], ["Poppy Drayton", "Loreto Peralta"], "https://66.media.tumblr.com/4fa42fd71622af1bf9779fa3abdfa89d/3b0c21b75636e5e2-b9/s250x400/0cb6885d0337a3e39e588821de3ad6c87a16d216.jpg"],
	        
["series", ["Doctor Who"], "2005 - ", [["2017 01 02", "S1E1"]], 0, ["ger"], ["adventure", "drama", "sci-fi"], [], ["dropped"], ["Sydney Newman"], ["Christopher Eccleston", "Billie Piper"], "https://68.media.tumblr.com/1fcaf0edf6ae993fec5ede671b1116c3/tumblr_oj5jth9HOh1v2s5upo1_250.jpg"],
	        
["series", ["Forever"], ["2015", "2015"], [["2016 12 26", "S1"]], 8, ["ger"], ["crime", "drama"], [], [], ["Matthew Miller"], ["Ioan Gruffudd"], "https://68.media.tumblr.com/8306e6ace81387c7bc50a8ad140ea069/tumblr_ofmdmlJQCS1v2s5upo1_250.jpg"],
	        
["film", ["The Terminal", "Terminal"], "2004", ["2020 07 22"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Steven Spielberg"], ["Tom Hanks", "Catherine Zeta-Jones", "Stanley Tucci", "Zoe Saldana"], "https://64.media.tumblr.com/f6406991a6a0dc060c8ac0ef105049d0/e2446da1d1fe6a2f-9a/s250x400/2aecc9e2da824b7b9aa08cb34f92636db7399409.jpg"],
	        
["film", ["The House Bunny", "House Bunny"], "2008", ["2020 07 15"], 3, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Fred Wolf"], ["Anna Faris", "Colin Hanks", "Emma Stone", "Kat Dennings", "Hugh Hefner", "Katharine McPhee", "Rumer Willis", "Rachel Specter", "Emily Wilson"], "https://64.media.tumblr.com/309f622a3da6799587df7fa540037991/f122f6f0665b5c19-cf/s250x400/5652c3f21e9f28f1730b370a0e8b124696a779c8.jpg"],
	        
["film", ["Heavy Trip", "Heavy Trip", "Hevi reissu"], "2018", ["2020 05 31"], 6, ["ger"], ["comedy", "music"], ["syl", "je"], ["DVD"], ["Juuso Laatio", "Jukka Vidgren"], [], "https://66.media.tumblr.com/74693cbef6632708b889a9ab760da36a/ac02361d3d84cb1e-de/s250x400/432934756fe38c1ae41986f3f2a6cba3cab8cc3c.jpg"],
	        
["film", ["Every Day", "Letztendlich sind wir dem Universum egal"], "2018", ["2020 05 22"], 4, ["ger"], ["drama", "fantasy"], ["syl"], [], ["Michael Sucsy"], ["Angourie Rice", "Jeni Ross", "Lucas Jade Zumann", "Justice Smith"], "https://66.media.tumblr.com/0bfa9c19b7cb0ba0cf0511afa1e77f8d/e34dee8f5dc329bf-28/s250x400/7e39471427e2c327ebc5be055f02656bf5f8dd01.jpg"],
	        
["film", ["To All the Boys: P.S. I Still Love You", "To All the Boys I've Loved Before 2"], "2020", ["2020 05 08"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Michael Fimognari"], ["Lana Condor", "Noah Centineo", "Jordan Fisher", "Anna Cathcart", "Ross Butler", "Holland Taylor"], "https://66.media.tumblr.com/9e25c39bb7f9e1657a62ad3154442813/df0cf4bb7c0fe088-ce/s250x400/201f0cb2903604f92144b379d20a2fcd5142fdd1.jpg"],
	        
["film", ["Pippi on the Run", "Pippi außer Rand und Band", "På rymmen med Pippi Långstrump"], "1970", ["2020 05 22"], 7, ["ger"], ["adventure", "comedy"], ["bini"], ["Pippi"], ["Olle Hellbom"], ["Inger Nilsson", "Maria Persson", "Pär Sundberg"], "https://66.media.tumblr.com/53ca94050bc073f56333c98888564b18/c520be69b33b5418-df/s250x400/5ea0ea64168412beb8579c0a38631e2e5fd7b3ac.jpg"],
	        
["film", ["The Half of It", "Nur die halbe Geschichte"], "2020", ["2020 05 15"], 6, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], ["Netflix"], ["Alice Wu"], ["Leah Lewis", "Daniel Diemer"], "https://66.media.tumblr.com/bc4d97781ba36fa83812d1a371da39b2/c039f77f563a91ce-0f/s250x400/1f5b9944f8affb4f7fa34dbb02809379985deaf7.jpg"],
	        
["film", ["6 Underground"], "2019", ["2020 01 31"], 5, ["ger"], ["action", "thriller"], [], ["Netflix"], ["Michael Bay"], ["Ryan Reynolds", "Mélanie Laurent", "Dave Franco"], "https://66.media.tumblr.com/b53a443d88cf76f081441443502fe8f8/3d806c3e2fe172ec-4b/s250x400/9f93adcda729ae4e9e48bda869f3df541d6b574f.jpg"],
	        
["film", ["The Family", "Malavita - The Family"], "2013", ["2020 01 29"], 9, ["ger"], ["comedy", "crime"], [], ["Netflix", "bby"], ["Luc Besson"], ["Robert De Niro", "Michelle Pfeiffer", "Dianna Agron", "Tommy Lee Jones"], "https://66.media.tumblr.com/0f27115fbd083328a3f6e526d5e1fc83/4c3103e169298be5-3e/s250x400/2e76361e8f5b723c2ca95e545e3de3bd0a1790af.jpg"],
	        
["film", ["Valerian and the City of a Thousand Planets", "Valerian - Die Stadt der tausend Planeten"], "2017", ["2020 01 11"], 5, ["ger"], ["action", "adventure"], ["syl", "bini"], [], ["Luc Besson"], ["Dane DeHaan", "Cara Delevingne", "Rihanna", "Elizabeth Debicki"], "https://66.media.tumblr.com/a9e37d9528bdba8e52ffc5c16e48f5db/8db875a518a406bf-42/s250x400/c5de1b90dccfef805a15029062c1608c94f99b06.jpg"],
	        
["film", ["Just One of the Guys"], "1985", ["2019 12 23"], 7, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Lisa Gottlieb"], ["Joyce Hyser", "Toni Hudson"], "https://66.media.tumblr.com/c49928dc9dad0bcfeaeccfbc2e36b1a6/3cd0efa077cc60c1-9c/s250x400/1dec9a586f3a5420aca1bcd4f0ac756a7f5bad4b.jpg"],
	        
["film", ["Jumanji: The Next Level", "Jumanji - The Next Level"], "2019", ["2019 12 20"], 6, ["ger"], ["action", "adventure"], ["syl"], ["Jumanji", "Kino"], ["Jake Kasdan"], ["Dwayne Johnson", "Kevin Hart", "Jack Black", "Karen Gillan", "Nick Jonas", "Danny DeVito", "Colin Hanks", "Marin Hinkle", "Awkwafina", "Alex Wolff"], "https://66.media.tumblr.com/ea4b5e9f34bda142f1d4519f7f21bf6d/b7764fc968a010b6-50/s250x400/bb711697fe7fcb9eb32c4e4acd9bf84fd6253a15.jpg"],
	        
["film", ["Lucy"], "2014", ["2019 11 28", "2020 04 07"], 5, ["ger"], ["action", "sci-fi"], ["je", "bini", "sai"], [], ["Luc Besson"], ["Scarlett Johansson", "Morgan Freeman", "Analeigh Tipton"], "https://66.media.tumblr.com/291bf0625b585189996dfd18406cf80c/9b48e21e15cb8ecc-d7/s250x400/a09dce28ec36eb246961b9522e70cb04853602f7.jpg"],
	        
["film", ["The Iron Giant", "Der Gigant aus dem All"], "1999", ["2019 10 31"], 7, ["ger"], ["animation", "action"], [], ["Netflix"], ["Brad Bird"], [], "https://66.media.tumblr.com/b3c3a93f0aaa17e5f8be77d8eb4ec4b2/8ab55f8f380c586f-86/s250x400/63f707d730e0f9fa00b1fdaa7bb15531a29e48e0.jpg"],
	        
["film", ["Rim of the World"], "2019", ["2019 09 05"], 7, ["ger"], ["action", "adventure"], [], ["Netflix"], ["McG"], ["Miya Cech", "Lynn Collins", "Andrew Bachelor"], "https://66.media.tumblr.com/219cfc51dd2f09d1700d8a09fc07f3c3/ebeac420d95890b8-b2/s250x400/bc242a51725e2594aa1059d8de317684b6b6e25a.jpg"],
	        
["film", ["The Da Vinci Code", "The Da Vinci Code - Sakrileg"], "2006", ["2019 09 04"], 6, ["ger"], ["mystery", "thriller"], [], ["Netflix"], ["Ron Howard"], ["Tom Hanks", "Audrey Tautou", "Ian McKellen", "Jean Reno"], "https://66.media.tumblr.com/4226b356eedbfd45d02cb40f745326b5/121691ebc2228547-e4/s250x400/e387d1d8d839ed603f3825ff09a6fb2515434ba4.jpg"],
	        
["film", ["The Secret of NIMH", "Mrs. Brisby und das Geheimnis von NIMH"], "1982", ["2019 08 30"], 6, ["ger"], ["animation", "adventure"], ["bini"], [], ["Don Bluth"], [], "https://66.media.tumblr.com/0e33dd6077b9ef8e355f82e742344dce/a57416a665d4f1b6-53/s250x400/21ef60ab67d11732c744e15f3ecf7b0913d60bde.jpg"],
	        
["film", ["303"], "2018", ["2019 08 24"], 6, ["ger"], ["comedy", "drama"], ["syl"], [], ["Hans Weingartner"], ["Mala Emde", "Anton Spieker", "Arndt Schwering-Sohnrey"], "https://66.media.tumblr.com/00ac9eb8c20bebbc9de24a25bda1a961/ff680b1405ede290-02/s250x400/c677f4cb7644c573dcad58c53453a2e74880cc43.jpg"],
	        
["film", ["Gerald's Game", "Das Spiel"], "2017", ["2019 08 02"], 4, ["ger"], ["drama", "horror"], [], ["Netflix"], ["Mike Flanagan"], ["Carla Gugino", "Bruce Greenwood", "Chiara Aurelia"], "https://66.media.tumblr.com/14ecb4a72c058171dc68ce15ccbf516f/1c01262559945241-c2/s250x400/86ea4abb98bfcad7bf6982a58edba93e66fc19f6.jpg"],
	        
["film", ["Easy A", "Einfach zu haben"], "2010", ["2019 07 27"], 7, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Will Gluck"], ["Emma Stone", "Penn Badgley", "Lisa Kudrow", "Aly Michalka", "Stanley Tucci", "Juliette Goglia"], "https://66.media.tumblr.com/32ad8270169a9425990b1bd171944b22/ff73cad90b44297e-a2/s250x400/7ca66d8a3d7214953b57a25790a595c20541548c.jpg"],
	        
["film", ["Systemfehler - Wenn Inge tanzt"], "2013", ["2019 06 11"], 6, ["ger"], ["comedy", "music"], [], [], ["Wolfgang Groos"], ["Tim Oliver Schultz", "Paula Kalenberg"], "https://66.media.tumblr.com/6436e98854e8c3bf766b0e5c5334f1b1/14ef7ec696234ff6-a0/s250x400/8d5c18fac64d1c4ca6e04453a39d2ecf97e647d6.jpg"],
	        
["film", ["I Kill Giants"], "2017", ["2019 05 31"], 7, ["ger"], ["drama", "fantasy"], [], ["Netflix"], ["Anders Walter"], ["Madison Wolfe", "Zoe Saldana", "Imogen Poots", "Sydney Wade"], "https://66.media.tumblr.com/7198cd9b34c6d1e2e4e7cadd4429cd42/b84c5c3124169851-b1/s250x400/eda490d0ba338c4ec1f62cbf1225848ab1580ed8.jpg"],
	        
["film", ["IO"], "2019", ["2019 01 23"], 6, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["Jonathan Helpert"], ["Margaret Qualley", "Anthony Mackie"], "https://66.media.tumblr.com/5a5a5e98abfe1b101136425a0bdfdc06/8b43f1d110e154ad-d5/s250x400/308bfad8a1c7deb8d5bea59ef9d39c8d5db731fa.jpg"],
	        
["film", ["Limitless", "Ohne Limit"], "2011", ["2019 01 10"], 7, ["ger"], ["sci-fi", "thriller"], [], ["Netflix"], ["Neil Burger"], ["Bradley Cooper", "Robert De Niro", "Abbie Cornish", "Rebecca Dayan"], "https://66.media.tumblr.com/edf1deeef391fc2a72e7af7ea115d770/c8c1637adf0de038-a9/s250x400/d6fc6994716197dc43f0cc6374c0fab755cfeb13.jpg"],
	        
["film", ["The Art of Getting By", "Von der Kunst, sich durchzumogeln"], "2011", ["2018 12 31"], 6, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Gavin Wiesen"], ["Freddie Highmore", "Emma Roberts"], "https://66.media.tumblr.com/41ffd479d2cc4bdb545b0bcd5ded20c1/28f62fea1ae95aae-54/s250x400/08bf2beec24816d6678e52c161d84beb7d557d27.jpg"],
	        
["film", ["The Host", "Seelen"], "2013", ["2018 11 18"], 5, ["ger"], ["action", "adventure"], [], [], ["Andrew Niccol"], ["Saoirse Ronan", "Diane Kruger"], "https://66.media.tumblr.com/208934ed9ed7177ad61b9df5a240d04c/d8c3938ac8c8ff06-f9/s250x400/239e7f0a8f31d65ec8a8ac8325f9ecbc97e7f1ac.jpg"],
	        
["film", ["The Darkest Minds", "The Darkest Minds - Die Überlebenden"], "2018", ["2018 08 27"], 6, ["ger"], ["action", "adventure"], ["syl"], ["Kino"], ["Jennifer Yuh Nelson"], ["Miya Cech"], "https://66.media.tumblr.com/2016ca026121bebfe7d9dd3d525acc3d/2b089a31b846d5ba-f4/s250x400/4a8d5c87e2a362dbe0ed1e8fc87f2759ae53a6bb.jpg"],
	        
["film", ["Ein Fall für TKKG: Drachenauge"], "1992", ["2018 08 09"], 6, ["ger"], ["family", "action"], ["bini"], [], ["Ulrich König"], ["Sanny van Heteren"], "https://66.media.tumblr.com/3d33772db952ff1263fdc5f481f8a851/c5260f95078c7f4e-a1/s250x400/8a094bf7b2822fd101c404eef32ff43fb95065c6.jpg"],
	        
["film", ["Recess: School's Out", "Disneys grosse Pause - Die geheime Mission"], "2001", ["2018 07 30"], 6, ["ger"], ["animation", "comedy"], ["bini", "nico", "sai"], ["Netflix"], ["Chuck Sheetz"], [], "https://66.media.tumblr.com/edaef6de653e74fdc003656e3103b5a5/affbe6cef9b8520a-21/s250x400/be9c9b0d8ae2de2f3ab40b23846ef8042ecbe944.jpg"],
	        
["film", ["Battleship"], "2012", ["2018 07 14"], 6, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Peter Berg"], ["Rihanna", "Adam Godley", "Joe Chrest", "Rami Malek", "Barack Obama"], "https://66.media.tumblr.com/09f75b8a09bed0b34c713fbee62edb0e/1533baebb5af6fe6-6b/s250x400/411d7f201ac7fd47442bb46356f76eb35275b7ed.jpg"],
	        
["film", ["13 Going on 30", "30 über Nacht"], "2004", ["2018 05 27"], 6, ["ger"], ["comedy", "fantasy"], [], ["Netflix"], ["Gary Winick"], ["Jennifer Garner", "Mark Ruffalo", "Judy Greer", "Lynn Collins", "Brie Larson"], "https://66.media.tumblr.com/7f0776ebdab6327f2f77cbd0b6617f68/tumblr_pzktb5ghav1v2s5upo1_250.jpg"],
	        
["film", ["The Babysitter"], "2017", ["2018 05 23", "2020 10 31"], 7, ["ger"], ["comedy", "horror"], ["bini"], ["Netflix"], ["McG"], ["Samara Weaving", "Robbie Amell", "Emily Alyn Lind", "Andrew Bachelor", "Judah Lewis", "Bella Thorne", "Hana Mae Lee"], "https://66.media.tumblr.com/945e69d735b3f15ae8bb96233081c04e/tumblr_pzkt7faJcw1v2s5upo1_250.jpg"],
	        
["film", ["Lady Bird"], "2017", ["2018 05 22"], 7, ["ger"], ["comedy", "drama"], ["syl"], ["Kino"], ["Greta Gerwig"], ["Saoirse Ronan", "Timothée Chalamet", "Kathryn Newton", "Odeya Rush"], "https://66.media.tumblr.com/b84196ccf9d098be5b45373b14925706/tumblr_pzkt5n4zW21v2s5upo1_250.jpg"],
	        
["film", ["Interstellar"], "2014", ["2016 10 18", "2017 03 27"], 7, ["ger"], ["adventure", "drama"], ["bini", "syl"], [], ["Christopher Nolan"], ["Timothée Chalamet", "Matthew McConaughey", "Mackenzie Foy", "John Lithgow", "Anne Hathaway", "Michael Caine", "Jessica Chastain", "Matt Damon"], "https://68.media.tumblr.com/c6a73d7ad753da57f16b5b6392587458/tumblr_of8pl59vIY1v2s5upo1_250.jpg"],
	        
["film", ["Don't Breathe"], "2016", ["2016 10 16", "2018 11 15"], 8, ["ger", "eng"], ["crime", "horror", "thriller"], [], [], ["Fede Alvarez"], ["Jane Levy", "Dylan Minnette", "Stephen Lang"], "https://66.media.tumblr.com/15be9872384ea5e85ede4c9200c46f5b/tumblr_of5ococ5Et1v2s5upo1_250.jpg"],
	        
["film", ["When We First Met"], "2018", ["2018 03 03"], 5, ["ger"], ["comedy", "fantasy"], [], ["Netflix"], ["Ari Sandel"], ["Adam Devine", "Alexandra Daddario", "Andrew Bachelor", "Robbie Amell"], "https://66.media.tumblr.com/e950878e2feddcc0ad5b0645f5653cd2/tumblr_pz9bnx7u9b1v2s5upo1_250.jpg"],
	        
["film", ["Jumanji: Welcome to the Jungle", "Jumanji: Willkommen im Dschungel"], "2017", ["2018 02 03", "2019 11 22"], 7, ["ger"], ["action", "adventure"], ["syl"], ["Netflix"], ["Jake Kasdan"], ["Dwayne Johnson", "Kevin Hart", "Jack Black", "Karen Gillan", "Nick Jonas", "Marin Hinkle", "Missi Pyle", "Alex Wolff"], "https://66.media.tumblr.com/b565faed79276eab292d60ebb1263730/tumblr_pz9blxIeSw1v2s5upo1_250.jpg"],
	        
["film", ["The Open House", "Open House"], "2018", ["2018 01 27"], 4, ["ger"], ["horror", "thriller"], [], ["Netflix"], ["Matt Angel", "Suzanne Coote"], ["Dylan Minnette"], "https://66.media.tumblr.com/cbec013e3520b4f63d6356c9bf1e6934/tumblr_pz45ssAoIw1v2s5upo1_250.jpg"],
	        
["film", ["Escape Plan"], "2013", ["2018 01 26"], 7, ["ger"], ["action", "thriller"], ["syl", "je"], [], ["Mikael Håfström"], ["Sylvester Stallone", "Arnold Schwarzenegger", "Vincent D'Onofrio"], "https://66.media.tumblr.com/316ab8735ddc59fdb7e478d9042f094c/tumblr_pz45qtQEfW1v2s5upo1_250.jpg"],
	        
["film", ["Your Name.", "Your Name.", "Kimi no na wa."], "2016", ["2018 01 14", "2019 02 08", "2020 08 22"], 9, ["ger"], ["anime", "drama"], ["syl", "bini", "jani"], ["Netflix", "Kino"], ["Makoto Shinkai"], [], "https://66.media.tumblr.com/449da3bb98c093ddaec2b0d469e09ab9/tumblr_pz45nofOoA1v2s5upo1_250.jpg"],
	        
["film", ["Cast Away", "Cast Away - Verschollen"], "2000", ["2017 12 28"], 7, ["ger"], ["adventure", "drama"], [], ["Netflix"], ["Robert Zemeckis"], ["Tom Hanks"], "https://66.media.tumblr.com/1a94ff2cb7f22a363b31500084c6d248/tumblr_pz09dafkFb1v2s5upo1_250.jpg"],
	        
["film", ["Baby Driver"], "2017", ["2017 12 28", "2019 09 06"], 8, ["ger"], ["action", "crime"], ["bini", "syl"], ["Netflix"], ["Edgar Wright"], ["Ansel Elgort", "Jon Bernthal", "Jon Hamm", "Eiza González", "Lily James", "Jamie Foxx"], "https://66.media.tumblr.com/745cd51b615cd39f90313c39ce24b30f/tumblr_pz09brrS6Y1v2s5upo1_250.jpg"],
	        
["film", ["Warm Bodies", "Warm Bodies - Zombies mit Herz"], "2013", ["2017 12 27"], 6, ["ger"], ["comedy", "horror"], [], [], ["Jonathan Levine"], ["Nicholas Hoult", "Teresa Palmer", "Analeigh Tipton", "Dave Franco"], "https://66.media.tumblr.com/e633a766e57bab060096239984b503b4/tumblr_pz0978Xvhy1v2s5upo1_250.jpg"],
	        
["film", ["Ancien and the Magic Tablet", "Ancien und das magische Königreich", "Hirune-hime: Shiranai watashi no monogatari"], "2017", ["2017 11 19"], 7, ["jap"], ["anime", "adventure"], [], [], ["Kenji Kamiyama"], [], "https://66.media.tumblr.com/c432532b0023c3c427e947858e9503a9/tumblr_pyefimt1Ri1v2s5upo1_250.jpg"],
	        
["film", ["iBoy"], "2017", ["2017 11 12"], 9, ["eng"], ["action", "crime"], [], ["Netflix"], ["Adam Randall"], ["Bill Milner", "Maisie Williams"], "https://66.media.tumblr.com/ebad39a93f934135b50d9e1acd4e699a/tumblr_pyefh34Fxj1v2s5upo1_250.jpg"],
	        
["film", ["Monster House"], "2006", ["2017 10 31"], 6, ["ger"], ["animation", "comedy", "horror"], ["bini", "nico", "sai", "jessie"], ["Netflix"], ["Gil Kenan"], [], "https://66.media.tumblr.com/6f0da5aa05bce6187230f6823c99f351/tumblr_py7vrzOlss1v2s5upo1_250.jpg"],
	        
["film", ["Kingsman: The Golden Circle"], "2017", ["2017 10 25"], 8, ["ger"], ["action", "adventure"], ["je", "syl"], ["Kino"], ["Matthew Vaughn"], ["Taron Egerton", "Mark Strong", "Hanna Alström", "Julianne Moore", "Colin Firth", "Elton John", "Halle Berry"], "https://66.media.tumblr.com/74ee32181531a812107b28237f3e32f9/tumblr_py7vo3upAv1v2s5upo1_250.jpg"],
	        
["film", ["Memento"], "2000", ["2017 10 21"], 8, ["ger"], ["mystery", "thriller"], [], ["Netflix"], ["Christopher Nolan"], ["Carrie-Anne Moss"], "https://66.media.tumblr.com/43a64523f24563f2c5a27733e605d7a7/tumblr_pxxeihgpJj1v2s5upo1_250.jpg"],
	        
["short", ["Welcome"], "2015", ["2017 10 02"], 8, ["eng"], ["drama"], [], [], ["Serena Dykman"], ["Nick Adamson"], "https://66.media.tumblr.com/a9f60c2619f40d1f754f3366d26aa666/44e6399594d9d5aa-c4/s250x400/ff4b3d49fb8736ef8784f6c9ebbb756cf6337eb9.jpg"],
	        
["short", ["Imperfect"], "2012", ["2017 09 26"], 8, ["eng"], ["crime"], [], [], ["Michael Tucker"], [], "https://66.media.tumblr.com/1e2195d8ddfb89e797feecc726012bb7/1eea43eb86a28ea2-1c/s250x400/ae6032cb7f6d2dc1cc48636dc6201faf3c7b1d75.jpg"],
	        
["short", ["Nadia"], "2017", ["2017 08 29"], 7, ["eng"], ["drama"], [], [], ["Teddy Nygh"], [], "https://66.media.tumblr.com/24596f2fa7ff7c79d68666fac01c87fc/tumblr_pxxdoctuP51v2s5upo1_250.jpg"],
	        
["film", ["Paper Towns", "Margos Spuren"], "2015", ["2017 08 21"], 7, ["ger"], ["comedy", "drama"], ["bini"], [], ["Jake Schreier"], ["Nat Wolff", "Cara Delevingne", "Halston Sage", "Justice Smith"], "https://66.media.tumblr.com/1bb188e3d02f1ef8732f69e9b728d7d7/tumblr_pxrg5ou3NN1v2s5upo1_250.jpg"],
	        
["film", ["A Silent Voice", "A Silent Voice", "Koe no katachi"], "2016", ["2017 08 13", "2019 06 14"], 9, ["ger", "jap"], ["anime", "drama"], ["bini", "nico"], [], ["Naoko Yamada"], [], "https://66.media.tumblr.com/e3d7c4d7eeb7602fc67b563d98cea366/tumblr_pxrfysKjNY1v2s5upo1_250.jpg"],
	        
["film", ["2 Guns"], "2013", ["2017 08 06"], 6, ["ger"], ["action", "comedy"], [], [], ["Baltasar Kormákur"], ["Mark Wahlberg", "James Marsden"], "https://66.media.tumblr.com/ccbf8641297e401fa21e4b80f57c10f5/tumblr_pxrfvzPsqq1v2s5upo1_250.jpg"],
	        
["film", ["We're the Millers", "Wir sind die Millers"], "2013", ["2020 09 19"], 7, ["ger"], ["comedy", "crime"], [], ["Netflix"], ["Rawson Marshall Thurber"], ["Jennifer Aniston", "Jason Sudeikis", "Emma Roberts", "Will Poulter", "Nick Offerman", "Kathryn Hahn", "Molly C. Quinn", "Luis Guzmán"], "https://64.media.tumblr.com/ee930350436633e134094138bb5b2c13/0b77504b8d09586d-14/s250x400/1c5f83b8477616f13f6f8ba2553e9ff659d4783b.jpg"],
	        
["film", ["The LEGO Movie"], "2014", ["2017 07 16"], 7, ["ger"], ["animation", "action", "comedy"], ["bini"], ["LEGO"], ["Christopher Miller", "Phil Lord"], [], "https://66.media.tumblr.com/8a4ec55d291de283e5130d1d06e00fb2/tumblr_pxnk9mcF8i1v2s5upo1_250.jpg"],
	        
["film", ["East Is East"], "1999", ["2017 06 14"], 5, ["ger"], ["comedy", "drama"], [], ["Schule"], ["Damien O'Donnell"], [], "https://68.media.tumblr.com/3ee2921c4ae16670e0bfcade2399074b/tumblr_os7wmtfn8p1v2s5upo1_250.jpg"],
	        
["film", ["Mortdecai", "Mortdecai - Der Teilzeitgauner"], "2015", ["2017 06 02"], 6, ["ger"], ["action", "adventure"], ["syl"], [], ["David Koepp"], ["Johnny Depp", "Gwyneth Paltrow", "Jeff Goldblum"], "https://68.media.tumblr.com/e9fdb1b27e365a3858ba2d95fd157732/tumblr_os7wilOFWX1v2s5upo1_250.jpg"],
	        
["film", ["Shrek 2", "Shrek 2 - Der tollkühne Held kehrt zurück"], "2004", ["2017 05 01", "2018 09 17"], 7, ["ger"], ["animation", "adventure", "comedy"], [], ["Netflix", "Shrek"], ["Andrew Adamson", "Kelly Asbury", "Conrad Vernon"], [], "https://68.media.tumblr.com/e23642a17742f11ff60c8655c6ea5600/tumblr_oqu1cffUwd1v2s5upo1_250.jpg"],
	        
["film", ["Arrival"], "2016", ["2017 04 23"], 8, ["ger"], ["drama", "mystery"], [], [], ["Denis Villeneuve"], ["Amy Adams", "Jeremy Renner"], "https://68.media.tumblr.com/d2d8214d708299c7122cd40bdc6c788c/tumblr_oovk0rrHb11v2s5upo1_250.jpg"],
	        
["film", ["Tangled"], "2010", ["2017 04 17"], 7, ["ger"], ["animation", "adventure"], [], [], ["Nathan Greno", "Byron Howard"], [], "https://68.media.tumblr.com/b533482ed1218266106a3ca0ba880619/tumblr_oor74rJGZc1v2s5upo1_250.jpg"],
	        
["film", ["The Girl with the Dragon Tattoo", "Verblendung"], "2011", ["2017 04 17"], 8, ["ger"], ["crime", "drama", "thriller"], [], [], ["David Fincher"], ["Daniel Craig", "Rooney Mara"], "https://68.media.tumblr.com/501e722a8df0c5354b24a62b6c5c1ec4/tumblr_oor774khJ41v2s5upo1_250.jpg"],
	        
["film", ["Hunt for the Wilderpeople", "Wo die wilden Menschen jagen"], "2016", ["2017 04 13"], 8, ["ger"], ["adventure", "comedy"], [], [], ["Taika Waititi"], ["Sam Neill"], "https://68.media.tumblr.com/5eb0b72a042e1a59b4960ebbb9b01a49/tumblr_oor79j7Xly1v2s5upo1_250.jpg"],
	        
["film", ["Tschick"], "2016", ["2017 04 12"], 8, ["ger"], ["comedy", "drama"], [], [], ["Fatih Akin"], [], "https://68.media.tumblr.com/b4118a44f06f7f29091a368b6d46064c/tumblr_oor7blm2k71v2s5upo1_250.jpg"],
	        
["film", ["Juno"], "2007", ["2017 04 11"], 7, ["ger"], ["comedy", "drama"], [], [], ["Jason Reitman"], ["Ellen Page", "Michael Cera", "Jennifer Garner", "Jason Bateman", "J.K. Simmons", "Rainn Wilson", "Allison Janney"], "https://68.media.tumblr.com/4da555244f94995b2bef97c07f0ee676/tumblr_ooakvic2MF1v2s5upo1_250.jpg"],
	        
["film", ["Steamboy", "Steamboy", "Suchîmubôi"], "2004", ["2017 04 09"], 7, ["eng"], ["anime", "action", "sci-fi"], [], [], ["Katsuhiro Ôtomo"], [], "https://68.media.tumblr.com/6a7ef35dc28a683e77d4c4e6d30eac86/tumblr_ooakjqPI7W1v2s5upo1_250.jpg"],
	        
["film", ["Tokyo Godfathers", "Tokyo Godfathers", "Tôkyô goddofâzâzu"], "2003", ["2017 04 09"], 9, ["jap"], ["anime", "adventure"], [], [], ["Satoshi Kon", "Shôgo Furuya"], [], "https://68.media.tumblr.com/a6d29e77e1e4de54cf0cfe0a63560d45/tumblr_ooakh7ZDJs1v2s5upo1_250.jpg"],
	        
["film", ["Passengers"], "2016", ["2017 04 08", "2019 05 12"], 8, ["ger"], ["drama", "romance", "sci-fi"], ["bini"], [], ["Morten Tyldum"], ["Jennifer Lawrence", "Chris Pratt", "Laurence Fishburne"], "https://68.media.tumblr.com/a31580f1e17ac6277625026905cb2a4d/tumblr_ooakd7xiDr1v2s5upo1_250.jpg"],
	        
["film", ["Doctor Strange"], "2016", ["2017 04 07"], 8, ["ger"], ["action", "adventure"], [], ["Marvel"], ["Scott Derrickson"], ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Benedict Wong", "Mads Mikkelsen", "Tilda Swinton", "Stan Lee", "Chris Hemsworth"], "https://68.media.tumblr.com/32e45aa113b702804b73dafda1710cf5/tumblr_oo37120MiT1v2s5upo1_250.jpg"],
	        
["film", ["Assassin's Creed"], "2016", ["2017 04 04"], 5, ["ger"], ["action", "adventure"], [], [], ["Justin Kurzel"], ["Michael Fassbender", "Marion Cotillard", "Charlotte Rampling", "Callum Turner"], "https://68.media.tumblr.com/88119bf4c44da511899c78867bd47590/tumblr_oo35ctGwfI1v2s5upo1_250.jpg"],
	        
["film", ["Sucker Punch"], "2011", ["2017 04 04"], 6, ["ger"], ["action", "adventure"], [], [], ["Zack Snyder"], ["Emily Browning", "Abbie Cornish", "Jena Malone"], "https://68.media.tumblr.com/8d84a8b4fa6abff9a2ccde557d8feec0/tumblr_oo35apbtWI1v2s5upo1_250.jpg"],
	        
["film", ["Into the Wild"], "2007", ["2016 04 03"], 10, ["ger"], ["adventure", "biography"], [], [], ["Sean Penn"], ["Vince Vaughn", "Kristen Stewart", "Zach Galifianakis", "Jena Malone"], "https://49.media.tumblr.com/36d4aec8cd538e62c39b4b9b335eeb4d/tumblr_o54b5pxSCx1v2s5upo1_250.jpg"],
	        
["film", ["District 9"], "2009", ["2017 04 03"], 7, ["ger"], ["action", "sci-fi"], [], [], ["Neill Blomkamp"], [], "https://68.media.tumblr.com/1364359ae7d145a5abb85f1bd9574e7d/tumblr_oo34xuBkeg1v2s5upo1_250.jpg"],
	        
["film", ["Spaceballs"], "1987", ["2017 02 25"], 7, ["ger"], ["adventure", "comedy"], ["jani", "bini", "jessie", "lilly", "linh", "sai"], [], ["Mel Brooks"], ["Rick Moranis"], "https://68.media.tumblr.com/4d4a93287ef19a56c6c3da621835cd86/tumblr_om8zwca8MR1v2s5upo1_250.jpg"],
	        
["film", ["Westworld"], "1973", ["2017 02 15"], 5, ["ger"], ["action", "sci-fi", "western"], [], [], ["Michael Crichton"], [], "https://68.media.tumblr.com/755e731a8e09ad3f8407ed69925d548e/tumblr_olj7gwzEU61v2s5upo1_250.jpg"],
	        
["film", ["Microbe & Gasoline", "Mikro & Sprit", "Microbe et Gasoil"], "2015", ["2017 01 26"], 7, ["ger"], ["adventure", "comedy"], [], [], ["Michel Gondry"], ["Audrey Tautou"], "https://68.media.tumblr.com/a59f468cf12d4a2a7e49ce52fddd6265/tumblr_okelj2Mz7N1v2s5upo1_250.jpg"],
	        
["short", ["Playground"], "2017", ["2017 01 26"], 7, ["eng"], [], [], [], ["Bertie Gilbert", "Sammy Paul"], [], "https://68.media.tumblr.com/c28aa1a5b17ab8fff2a17659be4d59ee/tumblr_okel1dh5nC1v2s5upo1_250.jpg"],
	        
["film", ["Zapped", "Ferngesteuert"], "2014", ["2017 01 22"], 5, ["ger"], ["comedy", "family"], [], [], ["Peter DeLuise"], ["Zendaya", "Emilia McCarthy"], "https://68.media.tumblr.com/c4cafb6e37adc2da5849ec9681cab0ac/tumblr_ok8d66VULO1v2s5upo1_250.jpg"],
	        
["film", ["Me Before You", "Ein ganzes halbes Jahr"], "2016", ["2017 01 21", "2019 01 03"], 8, ["ger"], ["drama", "romance"], ["syl"], [], ["Thea Sharrock"], ["Sam Claflin", "Vanessa Kirby", "Emilia Clarke", "Matthew Lewis"], "https://68.media.tumblr.com/2614c0a7f5ecdc90fa9709c537519bd9/tumblr_ok5g3f6oIg1v2s5upo1_250.jpg"],
	        
["film", ["Edge of Tomorrow", "Edge of Tomorrow - Live. Die. Repeat"], "2014", ["2017 01 10"], 8, ["ger"], ["action", "adventure", "sci-fi"], [], [], ["Doug Liman"], ["Tom Cruise", "Emily Blunt", "Noah Taylor", "Hillary Clinton"], "https://68.media.tumblr.com/9b746359461b357738288b49fe826bd4/tumblr_ojmer7q46Q1v2s5upo1_250.jpg"],
	        
["film", ["Shrek", "Shrek - Der tollkühne Held"], "2001", ["2017 01 02", "2018 09 17"], 6, ["ger"], ["animation", "adventure"], [], ["Netflix", "Shrek"], ["Andrew Adamson", "Vicky Jenson"], [], "https://68.media.tumblr.com/d606e296abec939adf2de3e1a897f8a9/tumblr_oj5w7jmq3Q1v2s5upo1_250.jpg"],
	        
["film", ["Mr. Magorium's Wonder Emporium", "Mr. Magoriums Wunderladen"], "2007", ["2016 12 29"], 6, ["ger"], ["comedy", "family"], [], [], ["Zach Helm"], ["Dustin Hoffman", "Jason Bateman"], "https://68.media.tumblr.com/7cff0890eacf1cecdb6fc02b85df87f3/tumblr_oiyn496nsc1v2s5upo1_250.jpg"],
	        
["film", ["Intouchables", "Ziemlich beste Freunde"], "2011", ["2016 12 27"], 8, ["ger"], ["biography", "comedy"], [], [], ["Olivier Nakache", "Éric Toledano"], ["François Cluzet", "Omar Sy"], "https://68.media.tumblr.com/3a8da47322f01802e81ffe766939879c/tumblr_oiv17pGnzL1v2s5upo1_250.jpg"],
	        
["short", ["Fan-o-rama"], "2016", ["2016 12 23"], 6, ["eng"], ["sci-fi"], [], [], ["Dan Lanigan"], [], "https://68.media.tumblr.com/4f5f23e9d76dfad8e7b8c6a1992dd17d/tumblr_oinbx6wPvv1v2s5upo1_250.jpg"],
	        
["film", ["The Perfect Date"], "2019", ["2020 09 20"], 6, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Chris Nelson"], ["Noah Centineo", "Laura Marano", "Camila Mendes", "Joe Chrest"], "https://64.media.tumblr.com/8c9c6bca2102fdcc48f3c4d251507c81/90af1c41b99146f9-2a/s250x400/efd03e6ad8723bb8fc534f1cf9c021bcb3aad3a5.jpg"],
	        
["film", ["Millennium Actress", "Millennium Actress", "Sennen joyû"], "2001", ["2016 12 13"], 8, ["ger"], ["anime", "drama"], [], [], ["Satoshi Kon"], [], "https://68.media.tumblr.com/9deb090d38f93a7093de537f463f7d6d/tumblr_oi6svhBI7j1v2s5upo1_250.jpg"],
	        
["film", ["Mirror Mirror", "Spieglein Spieglein - Die wirklich wahre Geschichte von Schneewittchen"], "2012", ["2016 12 10", "2018 05 12", "2019 08 14"], 7, ["ger"], ["adventure", "comedy", "fantasy"], ["syl"], ["Netflix", "DVD"], ["Tarsem Singh"], ["Julia Roberts", "Lily Collins", "Martin Klebba"], "https://68.media.tumblr.com/85e6af5ca1ea499e7e2559c88bf40bac/tumblr_ohzs6oEFYx1v2s5upo1_250.jpg"],
	        
["film", ["The Great Gatsby", "Der große Gatsby"], "2013", ["2016 12 04", "2018 03 22"], 7, ["ger"], ["drama", "romance"], [], [], ["Baz Luhrmann"], ["Amitabh Bachchan", "Elizabeth Debicki", "Leonardo DiCaprio", "Isla Fisher", "Tobey Maguire", "Carey Mulligan", "Gemma Ward", "Callan McAuliffe", "Joel Edgerton"], "https://68.media.tumblr.com/dab91bb769730f950891cdd9f7ebd2e3/tumblr_ohnriy3QpA1v2s5upo1_250.jpg"],
	        
["film", ["The Prestige", "Prestige - Die Meister der Magie"], "2006", ["2016 12 02"], 9, ["ger"], ["drama", "mystery"], [], [], ["Christopher Nolan"], ["Hugh Jackman", "Christian Bale", "Michael Caine", "Scarlett Johansson"], "https://68.media.tumblr.com/c93c2fbf56473180ef3305bfa33f3a18/tumblr_ohkqlhJj9Z1v2s5upo1_250.jpg"],
	        
["film", ["Perfect Blue", "Perfect Blue", "Pâfekuto burû"], "1997", ["2016 11 28"], 7, ["ger"], ["anime", "crime", "horror"], [], [], ["Satoshi Kon"], [], "https://66.media.tumblr.com/e445a75c4d4db34800f642e133a79d2e/tumblr_ohdfnkvBJw1v2s5upo1_250.jpg"],
	        
["film", ["Paprika", "Paprika", "Papurika"], "2006", ["2016 11 26", "2016 12 18", "2017 01 23", "2017 10 23"], 9, ["ger"], ["anime", "drama", "fantasy"], ["sai"], ["fav"], ["Satoshi Kon"], [], "https://68.media.tumblr.com/803a0a4b26b858c7421be4593aefab4a/tumblr_oh9mc8lS681v2s5upo1_250.jpg"],
	        
["film", ["Lost in Translation", "Lost in Translation: Zwischen den Welten"], "2003", ["2016 11 25"], 9, ["ger"], ["comedy", "drama"], [], [], ["Sofia Coppola"], ["Scarlett Johansson", "Bill Murray", "Giovanni Ribisi", "Anna Faris"], "https://66.media.tumblr.com/090b03507e69fdb40e0c2bbf8b5b5d0f/tumblr_oh80i6KYvM1v2s5upo1_250.jpg"],
	        
["film", ["Bibi Blocksberg and the Secret of the Blue Owls", "Bibi Blocksberg und das Geheimnis der blauen Eulen"], "2004", ["2016 11 10", "2018 03 10"], 7, ["ger"], ["family", "fantasy"], ["bini"], ["Bibi Blocksberg"], ["Franziska Buch"], ["Sidonie von Krosigk", "Frederick Lau"], "https://68.media.tumblr.com/a0de0fa678d6e81a7567b271f3e67b31/tumblr_ogjsiuLQPR1v2s5upo1_250.jpg"],
	        
["film", ["Kim Possible: So the Drama", "Kim Possible - Der Film: Invasion der Roboter"], "2005", ["2016 11 03"], 7, ["ger"], ["animation", "action"], [], [], ["Steve Loter"], [], "https://68.media.tumblr.com/e388d46edd65dc4d4a03f6f017c69e6f/tumblr_og4nw3DkbE1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible - Rogue Nation"], "2015", ["2016 10 22"], 8, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["Christopher McQuarrie"], ["Tom Cruise", "Jeremy Renner", "Simon Pegg", "Alec Baldwin"], "https://66.media.tumblr.com/d6416db392a7792d623ee68bc37a9a36/tumblr_ofgql1ZojC1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible - Ghost Protocol", "Mission: Impossible - Phantom Protokoll"], "2011", ["2016 10 22"], 7, ["ger"], ["action", "adventure"], [], ["Mission Impossible", "Netflix"], ["Brad Bird"], ["Tom Cruise", "Simon Pegg", "Jeremy Renner", "Josh Holloway"], "https://66.media.tumblr.com/34fa1e7eeb82c4c9a46a5f3c44f8e6fd/tumblr_ofglkprp2V1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible III"], "2006", ["2016 10 22"], 7, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["J.J. Abrams"], ["Tom Cruise", "Philip Seymour Hoffman", "Simon Pegg", "Laurence Fishburne"], "https://68.media.tumblr.com/41874302cbda630faef2db3242c8643e/tumblr_ofge46WvyA1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible II"], "2000", ["2016 10 22"], 5, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["John Woo"], ["Tom Cruise", "Ving Rhames", "Brendan Gleeson", "William Mapother", "Anthony Hopkins"], "https://68.media.tumblr.com/d45839929f432af8d837a550b10680cf/tumblr_ofg8xpnLBx1v2s5upo1_250.jpg"],
	        
["film", ["Mission: Impossible"], "1996", ["2016 10 22"], 5, ["ger"], ["action", "adventure"], [], ["Mission Impossible"], ["Brian De Palma"], ["Tom Cruise", "Jon Voight", "Jean Reno", "Ving Rhames"], "https://66.media.tumblr.com/91631d8d0dd4bc59b6becdc2106b1c13/tumblr_ofg39sMxJr1v2s5upo1_250.jpg"],
	        
["film", ["Invisible Sister", "Überraschend unsichtbar"], "2015", ["2016 10 21"], 7, ["ger"], ["comedy"], [], [], ["Paul Hoen"], ["Rowan Blanchard", "Paris Berelc"], "https://66.media.tumblr.com/70e6e70f96a83c55bc2bce7401348575/tumblr_ofez6snN8w1v2s5upo1_250.jpg"],
	        
["film", ["X-Men: Apocalypse"], "2016", ["2016 10 21"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Nicholas Hoult", "Evan Peters", "Tye Sheridan", "Lana Condor", "Stan Lee", "Zeljko Ivanek", "Hugh Jackman", "Alexandra Shipp"], "https://66.media.tumblr.com/7f10be72d9112640fb906a002ccfd4f6/tumblr_ofehce2Pw51v2s5upo1_250.jpg"],
	        
["film", ["Ex Machina"], "2014", ["2016 10 15"], 7, ["ger"], ["drama", "sci-fi"], [], [], ["Alex Garland"], ["Domhnall Gleeson", "Oscar Isaac"], "https://68.media.tumblr.com/97dab00446b2dfe145915ab8e67df8ac/tumblr_of3rnupqdD1v2s5upo1_250.jpg"],
	        
["film", ["Finding Dory", "Findet Dorie"], "2016", ["2016 10 07", "2018 09 21"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl", "je"], ["Kino"], ["Andrew Stanton", "Angus MacLane"], [], "https://68.media.tumblr.com/ca3b3ee1d96b008e6a6fc90aacd3fda1/tumblr_oep4xmPIY01v2s5upo1_250.jpg"],
	        
["film", ["You Get Me"], "2017", ["2020 09 20"], 4, ["ger"], ["crime", "drama"], [], ["Netflix"], ["Brent Bonacorso"], ["Bella Thorne", "Halston Sage", "Anna Akana"], "https://64.media.tumblr.com/2447db536bda941afdaa1c6d0e1adcde/b44634d5f611e1ee-f0/s250x400/5be897c9d949b233f856d39edc9b64958e6d77ef.jpg"],
	        
["film", ["Mohabbatein", "Denn meine Liebe ist unsterblich", "Mohabbatein"], "2000", ["2016 09 26"], 8, ["ger"], ["musical", "drama", "bollywood"], [], [], ["Aditya Chopra"], ["Amitabh Bachchan", "Shah Rukh Khan", "Anupam Kher", "Archana Puran Singh", "Rushad Rana"], "https://66.media.tumblr.com/15545424a452a0ff2c74e33e3632cae8/tumblr_oe4hvjAV0t1v2s5upo1_250.jpg"],
	        
["film", ["Hounddog"], "2007", ["2016 09 21"], 7, ["ger"], ["drama", "music"], [], [], ["Deborah Kampmeier"], ["Dakota Fanning", "Isabelle Fuhrman"], "https://68.media.tumblr.com/12126caa72ffce453ab734560bbc2a65/tumblr_odz6joyjlK1v2s5upo1_250.jpg"],
	        
["film", ["The Royal Tenenbaums", "Die Royal Tenenbaums"], "2001", ["2016 09 14"], 8, ["ger"], ["comedy", "drama"], [], [], ["Wes Anderson"], ["Anjelica Huston", "Ben Stiller", "Gwyneth Paltrow", "Owen Wilson", "Bill Murray", "Alec Baldwin"], "https://66.media.tumblr.com/84d4ea019f8ee088f8074a6832d5ee0a/tumblr_odi6ykVqks1v2s5upo1_250.jpg"],
	        
["film", ["Mothers and Daughters", "Mütter & Töchter"], "2016", ["2016 09 12"], 1, ["ger"], ["drama"], [], [], ["Paul Duddridge", "Nigel Levy"], ["Luke Mitchell", "Christina Ricci"], "https://68.media.tumblr.com/e00a28ba032e45c5e0e259da42653b1e/tumblr_odeh2z2o191v2s5upo1_250.jpg"],
	        
["film", ["In Our Nature"], "2012", ["2016 09 10"], 2, ["ger"], ["drama"], [], [], ["Brian Savelson"], ["Jena Malone", "John Slattery"], "https://68.media.tumblr.com/fa8be94eaa137dc1884d349c9c1a5e35/tumblr_odb5kbPpSI1v2s5upo1_250.jpg"],
	        
["film", ["Prelude to a Kiss", "Zauberhafte Zeiten"], "1992", ["2016 09 09"], 6, ["ger"], ["comedy", "fantasy"], [], [], ["Norman René"], ["Alec Baldwin", "Stanley Tucci"], "https://68.media.tumblr.com/849640b404d1c168ac1aea26804ebb7b/tumblr_oday6c9wjH1v2s5upo1_250.jpg"],
	        
["film", ["Family Weekend"], "2013", ["2016 09 07"], 8, ["ger"], ["comedy", "drama"], [], [], ["Benjamin Epps"], ["Olesya Rulin", "Joey King"], "https://66.media.tumblr.com/30f31de3c44b1d47267571c159c6affd/tumblr_od5adzpUoA1v2s5upo1_250.jpg"],
	        
["film", ["Come Out and Play", "Come Out and Play - Kinder des Todes"], "2012", ["2016 08 31"], 4, ["ger"], ["horror"], [], [], ["Makinov"], [], "https://68.media.tumblr.com/44f485550d069bff8f3a9d24d62ca59c/tumblr_ocw13mFiRD1v2s5upo1_250.jpg"],
	        
["film", ["Jane Eyre"], "2011", ["2016 08 29"], 6, ["ger"], ["drama", "romance"], [], [], ["Cary Joji Fukunaga"], ["Mia Wasikowska", "Sally Hawkins", "Simon McBurney", "Judi Dench", "Michael Fassbender"], "https://68.media.tumblr.com/c1d3cf9a743e40ea158b0c8cd87e2588/tumblr_ocoertqVvM1v2s5upo1_250.jpg"],
	        
["film", ["How I Live Now"], "2013", ["2016 08 28"], 9, ["ger"], ["romance", "sci-fi", "war"], [], [], ["Kevin Macdonald"], ["Saoirse Ronan", "Tom Holland", "George MacKay"], "https://68.media.tumblr.com/b59ca86a6fe971bc23438f35d30a1783/tumblr_ocmgz37wr41v2s5upo1_250.jpg"],
	        
["film", ["Captain Fantastic", "Captain Fantastic: Einmal Wildnis und zurück"], "2016", ["2016 08 26", "2016 10 11", "2018 01 14"], 10, ["ger"], ["comedy", "drama"], ["bini", "syl", "je"], ["fav", "Kino"], ["Matt Ross"], ["Viggo Mortensen", "George MacKay", "Annalise Basso", "Trin Miller", "Kathryn Hahn", "Steve Zahn", "Missi Pyle", "Frank Langella", "Erin Moriarty"], "https://66.media.tumblr.com/f65ff8a4e2345be785047f360d1d3bae/tumblr_ocjc36yGOA1v2s5upo1_250.jpg"],
	        
["film", ["Freaky Friday", "Freaky Friday - Ein voll verrückter Freitag"], "2003", ["2016 08 25"], 7, ["ger"], ["comedy", "family"], [], [], ["Mark Waters"], ["Mark Harmon", "Stephen Tobolowsky"], "https://68.media.tumblr.com/3b60ed12f22ca201b3ceb0e3f32bc77b/tumblr_ochc8xXkiT1v2s5upo1_250.jpg"],
	        
["film", ["The Boat That Rocked", "Radio Rock Revolution"], "2009", ["2016 08 21"], 10, ["ger"], ["comedy", "drama"], [], [], ["Richard Curtis"], ["Philip Seymour Hoffman", "Bill Nighy", "Nick Frost", "Talulah Riley"], "https://66.media.tumblr.com/bf1e8c5bd9fe2a32ca038d73cc485315/tumblr_oca1x7IiK21v2s5upo1_250.jpg"],
	        
["film", ["Inception"], "2010", ["2016 08 21", "2017 04 11"], 10, ["ger"], ["action", "adventure", "sci-fi"], [], ["fav"], ["Christopher Nolan"], ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Marion Cotillard", "Pete Postlethwaite", "Michael Caine", "Talulah Riley"], "https://66.media.tumblr.com/2f08ef49b7a55d03cd39e0311d41ddc7/tumblr_oc9otorDMl1v2s5upo1_250.jpg"],
	        
["film", ["A Clockwork Orange", "Uhrwerk Orange"], "1971", ["2016 08 19"], 8, ["ger"], ["crime", "drama"], [], [], ["Stanley Kubrick"], ["Malcolm McDowell"], "https://68.media.tumblr.com/d9549beb63328ea8e846d6cfcc129c14/tumblr_oc5wqv0JLZ1v2s5upo1_250.jpg"],
	        
["film", ["Addams Family Values", "Die Addams Family in verrückter Tradition"], "1993", ["2016 08 19", "2017 04 16"], 9, ["ger"], ["comedy", "fantasy"], [], ["bby"], ["Barry Sonnenfeld"], ["Anjelica Huston", "Joan Cusack", "Christina Ricci", "Tony Shalhoub"], "https://66.media.tumblr.com/f2118bddeb6e01d3b3c0c656cab3f1d9/tumblr_oc5whsPtHQ1v2s5upo1_250.jpg"],
	        
["film", ["The Addams Family", "Die Addams Family"], "1991", ["2016 08 17"], 7, ["ger"], ["comedy", "fantasy"], [], ["bby"], ["Barry Sonnenfeld"], ["Anjelica Huston", "Christina Ricci"], "https://66.media.tumblr.com/05eeacc2b74df121d74ae629e382d374/tumblr_oc2jdzhNpG1v2s5upo1_250.jpg"],
	        
["film", ["Let's Be Evil"], "2016", ["2016 08 13", "2017 10 10"], 6, ["eng"], ["horror", "sci-fi"], [], ["Netflix"], ["Martin Owen"], ["Elizabeth Morris"], "https://68.media.tumblr.com/df71a78d4180d65f56e29ad0a425a190/tumblr_obuqhe5Amh1v2s5upo1_250.jpg"],
	        
["film", ["Mr. & Mrs. Smith"], "2005", ["2016 07 27"], 7, ["ger"], ["action", "comedy"], [], [], ["Doug Liman"], ["Brad Pitt", "Angelina Jolie", "Vince Vaughn"], "https://66.media.tumblr.com/a23237a0b2b955cfc19d98af96c4069f/tumblr_oazr45ZLBo1v2s5upo1_250.jpg"],
	        
["film", ["The Revenant", "The Revenant - Der Rückkehrer"], "2015", ["2016 07 26"], 6, ["ger"], ["action", "adventure"], [], [], ["Alejandro G. Iñárritu"], ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson", "Will Poulter"], "https://68.media.tumblr.com/cbe5b2e2db515627e52b5ec2de329592/tumblr_oazdwtn3HW1v2s5upo1_250.jpg"],
	        
["film", ["All the Wilderness"], "2014", ["2016 07 20"], 9, ["eng"], ["drama"], [], [], ["Michael James Johnson"], ["Danny DeVito", "Isabelle Fuhrman"], "https://66.media.tumblr.com/7625ac901a8eb637a79dedded990127e/tumblr_oamolvm9JT1v2s5upo1_250.jpg"],
	        
["film", ["The Hundred-Year-Old Man Who Climbed Out the Window and Disappeared", "Der Hundertjährige, der aus dem Fenster stieg und verschwand", "Hundraåringen som klev ut genom fönstret och försvann"], "2013", ["2016 07 08"], 6, ["ger"], ["adventure", "comedy"], ["syl"], [], ["Felix Herngren"], [], "https://66.media.tumblr.com/e05fea93fcdd5ed58b66c5f9555b0677/tumblr_oa061s5o271v2s5upo1_250.jpg"],
	        
["film", ["The F Word", "The F-Word"], "2013", ["2016 07 08"], 8, ["ger"], ["comedy", "romance"], [], [], ["Michael Dowse"], ["Daniel Radcliffe", "Zoe Kazan", "Adam Driver"], "https://66.media.tumblr.com/6c70884519cc03202838cf0fed9d21a7/tumblr_oa05ixc5DB1v2s5upo1_250.jpg"],
	        
["film", ["Zootopia", "Zoomania"], "2016", ["2016 06 29"], 6, ["ger"], ["animation", "adventure"], [], [], ["Byron Howard", "Rich Moore", "Jared Bush"], [], "https://68.media.tumblr.com/c1e7ff1ec44d0ec8b1da5cf4033ad427/tumblr_o9llty3OxE1v2s5upo1_250.jpg"],
	        
["film", ["Orphan", "Orphan - Das Waisenkind"], "2009", ["2016 06 20", "2016 07 02", "2016 07 10", "2016 12 05"], 10, ["ger"], ["horror", "mystery"], ["bini"], ["fav", "bby"], ["Jaume Collet-Serra"], ["Peter Sarsgaard", "Isabelle Fuhrman", "CCH Pounder", "Vera Farmiga"], "https://66.media.tumblr.com/77030656f845b49936c308b742d82dac/tumblr_o92y034WXY1v2s5upo1_250.jpg"],
	        
["film", ["Standing Up"], "2013", ["2016 06 17"], 9, ["ger"], ["drama"], [], [], ["D.J. Caruso"], ["Annalise Basso"], "https://66.media.tumblr.com/dd75d5b1552c6c2308ca925c4cd139b9/tumblr_o8xhkhJqgc1v2s5upo1_250.jpg"],
	        
["film", ["The Sound of Music", "Meine Lieder, meine Träume"], "1965", ["2016 06 15"], 8, ["ger"], ["biography", "drama", "music"], [], [], ["Robert Wise"], [], "https://66.media.tumblr.com/5262e2c4b18c22f1dc0f966195120fa4/tumblr_o8twjmVmli1v2s5upo1_250.jpg"],
	        
["film", ["Forrest Gump"], "1994", ["2016 06 13"], 6, ["ger"], ["drama", "romance"], [], [], ["Robert Zemeckis"], ["Tom Hanks", "Sam Anderson", "John F. Kennedy", "John Lennon", "Richard Nixon"], "https://66.media.tumblr.com/eeb123f80cdb0bf25e3d0cccea3bc930/tumblr_o8q1umC0Ey1v2s5upo1_250.jpg"],
	        
["film", ["Bee Movie", "Bee Movie - Das Honigkomplott"], "2007", ["2016 06 12"], 4, ["ger"], ["animation", "adventure"], [], [], ["Simon J. Smith", "Steve Hickner"], [], "https://66.media.tumblr.com/3b38bf4c8872c24754cf7cb447f7bb75/tumblr_o8ptkg6gG41v2s5upo1_250.jpg"],
	        
["short", ["Mara & Chen"], "2016", ["2016 06 09"], 5, ["eng"], ["action", "comedy"], [], [], ["Shawna Howson"], ["Shawna Howson"], "https://68.media.tumblr.com/6d0fefc5389726bdd4a4f102698bed06/tumblr_o8ijlhIRsl1v2s5upo1_250.jpg"],
	        
["film", ["Chronicle", "Chronicle - Wozu bist du fähig?"], "2012", ["2016 05 31", "2017 08 21"], 8, ["ger"], ["drama", "sci-fi"], ["bini"], [], ["Josh Trank"], ["Dane DeHaan", "Michael Kelly"], "https://66.media.tumblr.com/efb2369a7db1ef6c490302c4bc58ff7d/tumblr_o81un96nwU1v2s5upo1_250.jpg"],
	        
["film", ["Return to Nim's Island", "Die Rückkehr zur Insel der Abenteuer"], "2013", ["2016 05 29"], 4, ["ger"], ["adventure", "family"], [], [], ["Brendan Maher"], ["Bindi Irwin"], "https://66.media.tumblr.com/a3915284b36d4cb24840fb33f52e5627/tumblr_o7y03q9Hm11v2s5upo1_250.jpg"],
	        
["film", ["Very Good Girls", "Very Good Girls - Die Liebe eines Sommers"], "2013", ["2016 05 19"], 7, ["ger"], ["drama", "romance"], [], [], ["Naomi Foner"], ["Dakota Fanning", "Elizabeth Olsen", "Peter Sarsgaard"], "https://68.media.tumblr.com/3ef793e9ef1bd966c5f227a3f682a51c/tumblr_o7ha22aUeu1v2s5upo1_250.jpg"],
	        
["film", ["The DUFF", "Duff: Hast du keine, bist du eine"], "2015", ["2016 05 13"], 8, ["ger"], ["comedy", "romance"], [], [], ["Ari Sandel"], ["Mae Whitman", "Robbie Amell", "Skyler Samuels", "Nick Eversman", "Ken Jeong", "Allison Janney", "Bella Thorne"], "https://66.media.tumblr.com/305931819a8c22125b3d42a306382f64/tumblr_o74issy9JA1v2s5upo1_250.jpg"],
	        
["film", ["Footloose"], "1984", ["2016 05 13"], 8, ["ger"], ["drama", "music"], [], [], ["Herbert Ross"], ["Kevin Bacon", "John Lithgow", "Sarah Jessica Parker"], "https://68.media.tumblr.com/7577b6ec5b2e40f7a1b060a897f5723c/tumblr_o73x2xlfc61v2s5upo1_250.jpg"],
	        
["short", ["Ruin"], "2011", ["2016 05 12", "2017 08 06"], 5, [], ["animation"], ["nico", "sai", "jessie"], [], ["Wes Ball"], [], "https://66.media.tumblr.com/7f0c303dbf6f13683118f60ea10d8e2d/tumblr_o72wkpwjpa1v2s5upo1_250.jpg"],
	        
["film", ["The Accidental Spy"], "2001", ["2016 05 09"], 7, ["ger"], ["action", "comedy"], [], [], ["Teddy Chan"], ["Jackie Chan"], "https://66.media.tumblr.com/95e4f5efb2cbc9faebbeef37f644c44c/tumblr_o6x5ufY4th1v2s5upo1_250.jpg"],
	        
["film", ["The Chronicles of Narnia: Prince Caspian", "Die Chroniken von Narnia - Prinz Kaspian von Narnia"], "2008", ["2016 05 07"], 6, ["ger"], ["action", "adventure"], [], ["Narnia"], ["Andrew Adamson"], ["Ben Barnes", "Georgie Henley", "Skandar Keynes", "William Moseley", "Anna Popplewell", "Peter Dinklage", "Tilda Swinton"], "https://66.media.tumblr.com/977c1e07e988c3c871f04ba658a40489/tumblr_o6tmgrkwqY1v2s5upo1_250.jpg"],
	        
["film", ["Godzilla"], "2014", ["2016 04 30", "2017 11 01"], 7, ["ger"], ["action", "adventure"], ["bini", "nico"], ["Netflix"], ["Gareth Edwards"], ["Ken Watanabe", "Bryan Cranston", "Sally Hawkins"], "https://68.media.tumblr.com/b9aa36ed56992b0c873cf485152a891b/tumblr_o6tletji011v2s5upo1_250.jpg"],
	        
["film", ["Fight Club"], "1999", ["2016 04 28", "2016 09 17"], 9, ["ger"], ["drama"], [], [], ["David Fincher"], ["Edward Norton", "Brad Pitt", "Helena Bonham Carter"], "https://66.media.tumblr.com/96175385d3dd724e655069a52b115138/tumblr_o6tkxx0u6w1v2s5upo1_250.jpg"],
	        
["film", ["The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "Die Chroniken von Narnia - Der König von Narnia"], "2005", ["2016 04 24"], 6, ["ger"], ["adventure", "family", "fantasy"], [], ["Narnia"], ["Andrew Adamson"], ["Georgie Henley", "Skandar Keynes", "Anna Popplewell", "Tilda Swinton", "James McAvoy", "Jim Broadbent"], "https://66.media.tumblr.com/bb9c49e547897ce1c90b8a25060d202a/tumblr_o6tkbenbzc1v2s5upo1_250.jpg"],
	        
["film", ["The Name of the Rose", "Der Name der Rose"], "1986", ["2016 04 25"], 7, ["ger"], ["crime", "drama"], [], ["Schule"], ["Jean-Jacques Annaud"], ["Ron Perlman"], "https://49.media.tumblr.com/02ec09e71b0728dff02597e98be2a4d4/tumblr_o672zqoEyK1v2s5upo1_250.jpg"],
	        
["film", ["WALL·E", "WALL·E - Der Letzte räumt die Erde auf"], "2008", ["2016 04 18"], 6, ["ger"], ["animation", "adventure"], ["bini"], [], ["Andrew Stanton"], [], "https://49.media.tumblr.com/786da0f609805cfac614bc391af0918c/tumblr_o5w8c393DH1v2s5upo1_250.jpg"],
	        
["film", ["Kingsman: The Secret Service"], "2014", ["2016 04 09", "2016 12 27"], 8, ["ger"], ["action", "adventure"], [], [], ["Matthew Vaughn"], ["Colin Firth", "Mark Strong", "Jack Davenport", "Samuel L. Jackson", "Michael Caine", "Taron Egerton"], "https://37.media.tumblr.com/27f85a150777cb16f3416c448e2f99ac/tumblr_o5dszzs1JV1v2s5upo1_250.jpg"],
	        
["film", ["The Boy and the Beast", "Der Junge und das Biest", "Bakemono no Ko"], "2015", ["2016 03 29", "2016 08 23", "2019 01 14"], 8, ["eng", "ger"], ["anime", "action"], ["bini"], ["Netflix"], ["Mamoru Hosoda"], [], "https://37.media.tumblr.com/26289f709e7c8d21acf26dd9b0da597d/tumblr_o4ugnaAky01v2s5upo1_250.jpg"],
	        
["film", ["Tomboy"], "2011", ["2016 03 27"], 10, ["ger"], ["drama"], [], [], ["Céline Sciamma"], [], "https://40.media.tumblr.com/ab9303ef2abad33c6edea025ab75a135/tumblr_o4pcejHKF61v2s5upo1_250.jpg"],
	        
["film", ["Monsters University", "Die Monster Uni"], "2013", ["2016 03 24", "2018 11 05"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl"], [], ["Dan Scanlon"], [], "https://49.media.tumblr.com/2c0b2f8cd0a2487f07e96a40e39ca044/tumblr_o4l919vmI71v2s5upo1_250.jpg"],
	        
["film", ["Total Recall"], "2012", ["2016 03 22"], 6, ["ger"], ["action", "adventure"], [], [], ["Len Wiseman"], ["Bryan Cranston", "Bill Nighy", "John Cho"], "https://40.media.tumblr.com/5af192a4a523870818ea6faa1bacf210/tumblr_o4fxwjs8gh1v2s5upo1_250.jpg"],
	        
["film", ["The Number 23", "Nummer 23"], "2007", ["2016 03 21"], 6, ["ger"], ["crime", "mystery"], [], [], ["Joel Schumacher"], ["Jim Carrey", "Logan Lerman", "Lynn Collins", "Mark Pellegrino", "Corey Stoll"], "https://49.media.tumblr.com/3c7321cbaff0b315fcdf8a6bd07e24de/tumblr_o4eoq9puyk1v2s5upo1_250.jpg"],
	        
["film", ["Flipped", "Verliebt und ausgeflippt"], "2010", ["2016 03 10"], 9, ["ger"], ["comedy", "drama"], [], [], ["Rob Reiner"], ["Madeline Carroll", "Callan McAuliffe"], "https://37.media.tumblr.com/3c2e7263a22d1ba38cd090ee41cd97bb/tumblr_o3u9u0Glug1v2s5upo1_250.jpg"],
	        
["short", ["let it be"], "2016", ["2016 03 03", "2016 03 03", "2016 05 23", "2016 08 15"], 9, ["ger"], ["drama"], [], [], ["Bertie Gilbert"], ["Savannah Brown", "Dodie Clark", "Bertie Gilbert"], "https://49.media.tumblr.com/f13dbddd6ed0936f77c3742e0863ac76/tumblr_o3h6pmEfPg1v2s5upo1_250.jpg"],
	        
["film", ["Picture Day"], "2012", ["2016 02 20"], 7, ["ger"], ["comedy", "drama"], [], [], ["Kate Melville"], [], "https://40.media.tumblr.com/04c1baca3ce09a08b233c034e829db58/tumblr_o2wmomkPuK1v2s5upo1_250.jpg"],
	        
["film", ["Ponyo on the Cliff by the Sea", "Ponyo: Das grosse Abenteuer am Meer", "Gake no ue no Ponyo"], "2008", ["2016 02 16", "2016 11 13", "2019 03 29", "2020 01 26"], 8, ["ger", "jap"], ["anime", "adventure"], ["bini"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://40.media.tumblr.com/b3acd6f7057c9ad0e6d070de0f7be079/tumblr_o2tg72sErg1v2s5upo1_250.jpg"],
	        
["short", ["Lost: Final Chapter"], "2010", ["2016 02 14"], 7, ["ger"], ["adventure"], [], [], [], ["Michael Emerson", "Naveen Andrews", "Nestor Carbonell", "Jeremy Davies", "Henry Ian Cusick", "Emilie de Ravin", "Jeff Fahey", "Matthew Fox", "Andrea Gabriel", "Jorge Garcia", "Josh Holloway", "Daniel Dae Kim", "Yunjin Kim", "Ken Leung", "Evangeline Lilly", "Rebecca Mader", "Elizabeth Mitchell", "Terry O'Quinn"], "https://49.media.tumblr.com/be71a3578d9d2dd6ba7a960a5be9378f/tumblr_o2j8inuVTJ1v2s5upo1_250.jpg"],
	        
["film", ["The Girl on the Train", "Girl on the Train"], "2014", ["2017 12 27"], 4, ["ger"], ["action", "thriller"], ["syl"], [], ["Larry Brand"], ["Henry Ian Cusick", "Stephen Lang"], "https://66.media.tumblr.com/39f5ff81ecf2cc7825f48dc3bfaaf468/tumblr_pz094mrgnR1v2s5upo1_250.jpg"],
	        
["film", ["World War Z"], "2013", ["2015 10 19"], 7, ["ger"], ["action", "adventure"], ["bini", "nico"], ["tags"], ["Marc Forster"], ["Brad Pitt", "Matthew Fox", "Peter Capaldi", "Moritz Bleibtreu"], "https://66.media.tumblr.com/5af707872333f256249dd4658efe8217/tumblr_pwf7ox03WC1v2s5upo1_250.jpg"],
	        
["short", ["A Matter of Loaf and Death", "Auf Leben und Brot"], "2008", ["2016 04 01"], 7, ["ger"], ["animation"], ["bini"], [], ["Nick Park"], [], "https://40.media.tumblr.com/68818624c709029001b9937282b7e7fe/tumblr_o4ybt204nn1v2s5upo1_250.jpg"],
	        
["film", ["The Garden of Words"], "2013", ["2016 03 30"], 7, ["jap"], ["anime", "drama"], ["bini"], [], ["Makoto Shinkai"], [], "https://40.media.tumblr.com/785c031bb41f3d37bb25f602aebcaf43/tumblr_o4velsP8Nw1v2s5upo1_250.jpg"],
	        
["film", ["Indiana Jones and the Kingdom of the Crystal Skull", "Indiana Jones und das Königreich des Kristallschädels"], "2008", ["2016 03 21", "2017 11 01"], 8, ["ger"], ["action", "adventure"], ["bini"], ["Indiana Jones", "Netflix"], ["Steven Spielberg"], ["Harrison Ford", "Cate Blanchett", "Shia LaBeouf", "Andrew Divoff", "Alan Dale", "Neil Flynn"], "https://40.media.tumblr.com/7ac811363dde5fb36742145ff5a077c0/tumblr_o4eot320G31v2s5upo1_250.jpg"],
	        
["film", ["Indiana Jones and the Last Crusade", "Indiana Jones und der letzte Kreuzzug"], "1989", ["2016 02 13"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Indiana Jones"], ["Steven Spielberg"], ["Harrison Ford"], "https://49.media.tumblr.com/46dcb49054fe63c9596e759f92207ef9/tumblr_o2j6kc2glH1v2s5upo1_250.jpg"],
	        
["film", ["The Falling"], "2014", ["2016 01 29"], 8, ["ger"], ["drama", "mystery"], [], [], ["Carol Morley"], ["Maisie Williams", "Florence Pugh"], "https://49.media.tumblr.com/2ea7f2b5367a91d098bd3d5b679f099c/tumblr_o1q7miQoB91v2s5upo1_250.jpg"],
	        
["film", ["Burnt", "Im Rausch der Sterne"], "2015", ["2016 01 20"], 5, ["ger"], ["comedy", "drama"], ["syl"], ["Kino"], ["John Wells"], ["Bradley Cooper", "Daniel Brühl", "Omar Sy", "Uma Thurman", "Lily James"], "https://40.media.tumblr.com/e7aff9b959e9260c6daeb477d8b1b965/tumblr_o1bafkydum1v2s5upo1_250.jpg"],
	        
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
	        
["film", ["Raiders of the Lost Ark", "Jäger des verlorenen Schatzes"], "1981", ["2015 09 23"], 6, ["ger"], ["action", "adventure"], ["bini"], ["Indiana Jones"], ["Steven Spielberg"], ["Harrison Ford"], "https://66.media.tumblr.com/99f8c6fe7649d8071d7eefa3158199c8/tumblr_ppxzblvnCt1v2s5upo1_250.jpg"],
	        
["film", ["Indiana Jones and the Temple of Doom", "Indiana Jones und der Tempel des Todes"], "1984", ["2015 11 10"], 5, ["ger"], ["action", "adventure"], ["bini"], ["Indiana Jones"], ["Steven Spielberg"], ["Harrison Ford"], "https://66.media.tumblr.com/20b2adb7329022b1b43f3eee1a3342f9/tumblr_px706pD5dM1v2s5upo1_250.jpg"],
	        
["film", ["X-Men"], "2000", ["2016 02 21", "2017 07 22"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "James Marsden", "Halle Berry", "Stan Lee"], "https://49.media.tumblr.com/36b6998db751be2c82f725d09c720e84/tumblr_o2ygwyADor1v2s5upo1_250.jpg"],
	        
["film", ["X2", "X-Men 2"], "2003", ["2016 02 27", "2017 07 22"], 8, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["Patrick Stewart", "Hugh Jackman", "Ian McKellen", "Halle Berry", "James Marsden"], "https://40.media.tumblr.com/b8ef727ee3a072eaa1a9823f144c1f09/tumblr_o395j9bRxr1v2s5upo1_250.jpg"],
	        
["film", ["X-Men: The Last Stand", "X-Men: Der letzte Widerstand"], "2006", ["2016 02 28"], 8, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Brett Ratner"], ["Hugh Jackman", "Halle Berry", "Ian McKellen", "Patrick Stewart", "James Marsden", "Ellen Page", "Stan Lee", "Ken Leung"], "https://40.media.tumblr.com/ba8f0dcf563bf457159cb1b1e6b4e914/tumblr_o39hglQYA21v2s5upo1_250.jpg"],
	        
["film", ["X-Men Origins: Wolverine"], "2009", ["2016 03 03"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Gavin Hood"], ["Hugh Jackman", "Liev Schreiber", "Will.i.am", "Lynn Collins", "Dominic Monaghan", "Ryan Reynolds", "Patrick Stewart"], "https://40.media.tumblr.com/b5468276ef5005807899a1a2ad4445be/tumblr_o3hezvpYLa1v2s5upo1_250.jpg"],
	        
["film", ["X: First Class", "X-Men: Erste Entscheidung"], "2011", ["2016 03 04", "2017 07 22"], 8, ["ger"], ["action", "adventure", "supernatural"], ["nico", "sai"], ["X-Men", "Marvel"], ["Matthew Vaughn"], ["James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Nicholas Hoult", "Hugh Jackman"], "https://37.media.tumblr.com/015833008c28c8bfb1fd9866f74c1ab7/tumblr_o3jcz7QiOQ1v2s5upo1_250.jpg"],
	        
["film", ["The Wolverine", "Wolverine: Weg des Kriegers"], "2013", ["2016 03 05", "2017 07 18"], 8, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["James Mangold"], ["Hugh Jackman", "Ian McKellen", "Patrick Stewart"], "https://49.media.tumblr.com/264f3a962c02c1111dfc98b562fa3f54/tumblr_o3mabcUxiF1v2s5upo1_250.jpg"],
	        
["film", ["X-Men: Days of Future Past", "X-Men: Zukunft ist Vergangenheit"], "2014", ["2016 03 06"], 7, ["ger"], ["action", "adventure", "supernatural"], [], ["X-Men", "Marvel"], ["Bryan Singer"], ["Hugh Jackman", "James McAvoy", "Michael Fassbender", "Jennifer Lawrence", "Halle Berry", "Nicholas Hoult", "Ellen Page", "Peter Dinklage", "Omar Sy", "Ian McKellen", "Patrick Stewart", "James Marsden"], "https://40.media.tumblr.com/0078e739ad92ce6b6af8d0659fd0cee3/tumblr_o3u4pxeQuh1v2s5upo1_250.jpg"],
	        
["film", ["Deadpool"], "2016", ["2016 07 16", "2016 10 21"], 8, ["ger"], ["action", "adventure", "comedy"], [], ["X-Men", "Marvel"], ["Tim Miller"], ["Ryan Reynolds", "Stan Lee"], "https://68.media.tumblr.com/72f4e55f3867399b6805a20c07d199c7/tumblr_oagky8I8Ie1v2s5upo1_250.jpg"],
	        
["film", ["Branded"], "2012", ["2015 08 21"], 2, ["ger"], ["drama", "fantasy"], ["bini"], [], ["Jamie Bradshaw", "Aleksandr Dulerayn"], ["Max von Sydow"], "https://37.media.tumblr.com/b36ce8ab795822aecddac917e31b060d/tumblr_o0dstzSlJZ1v2s5upo1_250.jpg"],
	        
["film", ["Meet the Spartans", "Meine Frau, die Spartaner und ich"], "2008", ["2015 08 27"], 6, ["ger"], ["comedy"], ["bini"], [], ["Jason Friedberg", "Aaron Seltzer"], ["Carmen Electra", "Emily Wilson"], "https://40.media.tumblr.com/41bb51f582690306d2134a81268acf2e/tumblr_o0dwkojSGF1v2s5upo1_250.jpg"],
	        
["film", ["(500) Days of Summer"], "2009", ["2015 08 31"], 1, ["ger"], ["comedy", "drama"], [], [], ["Marc Webb"], ["Joseph Gordon-Levitt", "Zooey Deschanel", "Geoffrey Arend", "Chloë Grace Moretz", "Matthew Gray Gubler"], "https://40.media.tumblr.com/6762ed316c12eb69646967f4b931c84d/tumblr_o0p36rb1hy1v2s5upo1_250.jpg"],
	        
["film", ["10 Things I Hate About You", "10 Dinge, die ich an Dir hasse"], "1999", ["2016 01 01"], 8, ["ger"], ["comedy", "drama"], [], [], ["Gil Junger"], ["Heath Ledger", "Julia Stiles", "Joseph Gordon-Levitt", "Allison Janney"], "https://40.media.tumblr.com/4511565b6cc1d3d74f43361c03a1d010/tumblr_o0a8khuM2X1v2s5upo1_250.jpg"],
	        
["film", ["Mysterious Skin", "Mysterious Skin - Unter die Haut"], "2004", ["2015 09 03"], 6, ["ger"], ["drama"], [], [], ["Gregg Araki"], ["Joseph Gordon-Levitt", "Michelle Trachtenberg"], "https://40.media.tumblr.com/1340c2434d09e867bc754da506827cff/tumblr_o0p3pd3sxX1v2s5upo1_250.jpg"],
	        
["film", ["Premium Rush"], "2012", ["2016 01 03"], 6, ["ger"], ["action"], [], [], ["David Koepp"], ["Joseph Gordon-Levitt"], "https://49.media.tumblr.com/9c9c47850b8f913d1a118d22c6c47dd0/tumblr_o0e0ylPes51v2s5upo1_250.jpg"],
	        
["film", ["Looper"], "2012", ["2016 01 07"], 9, ["ger"], ["action", "drama", "sci-fi"], ["bini"], [], ["Rian Johnson"], ["Joseph Gordon-Levitt", "Bruce Willis", "Emily Blunt", "Paul Dano", "Jeff Daniels"], "https://40.media.tumblr.com/16bcaeee0c0977a6b21a3b8b0ece8512/tumblr_o0n7utSozh1v2s5upo1_250.jpg"],
	        
["film", ["The Interview"], "2014", ["2016 01 28"], 2, ["ger"], ["action", "adventure", "comedy"], [], [], ["Evan Goldberg", "Seth Rogen"], ["Seth Rogen", "James Franco", "Lizzy Caplan", "Randall Park", "Joseph Gordon-Levitt", "Eminem", "Emma Stone"], "https://49.media.tumblr.com/229979bb34bf3d9e30e912e6df5719e7/tumblr_o1ohkdxqmf1v2s5upo1_250.jpg"],
	        
["film", ["Hick", "Runaway Girl"], "2011", ["2015 09 02"], 5, ["ger"], ["comedy", "drama"], [], [], ["Derick Martini"], ["Chloë Grace Moretz", "Eddie Redmayne", "Alec Baldwin"], "https://37.media.tumblr.com/533f1e086c366988b8c1900ee0c5ef2e/tumblr_o0p3bzW7ZY1v2s5upo1_250.jpg"],
	        
["film", ["Amélie", "Die fabelhafte Welt der Amelie", "Le fabuleux destin d'Amélie Poulain"], "2001", ["2015 09 14", "2017 09 16"], 10, ["ger"], ["comedy", "romance"], ["syl"], [], ["Jean-Pierre Jeunet"], ["Audrey Tautou"], "https://66.media.tumblr.com/b3a1d3e14c3667279bf48b3b0ffbf342/tumblr_of8q3n1X8H1v2s5upo1_250.jpg"],
	        
["film", ["The World's End"], "2013", ["2015 09 19", "2017 12 17"], 9, ["ger"], ["comedy", "sci-fi"], ["lukas"], ["Blood and Ice Cream"], ["Edgar Wright"], ["Pierce Brosnan", "Simon Pegg", "David Bradley", "Nick Frost", "Martin Freeman", "Paddy Considine", "Bill Nighy"], "https://68.media.tumblr.com/fce244f2c822c5849567263e3ff8b5c7/tumblr_oov1mqp1RR1v2s5upo1_250.jpg"],
	        
["film", ["Patema Inverted", "Patema Inverted", "Sakasama no Patema"], "2013", ["2015 09 19"], 7, ["jap"], ["anime", "adventure"], ["bini"], [], ["Yasuhiro Yoshiura"], [], "https://68.media.tumblr.com/40449edb9184fd52fcde85b36fdb6a9c/tumblr_oov2d15BDT1v2s5upo1_250.jpg"],
	        
["film", ["Ice Age: The Meltdown", "Ice Age 2 - Jetzt taut's"], "2006", ["2015 10 10"], 3, ["ger"], ["animation", "adventure"], ["bini"], [], ["Carlos Saldanha"], [], "https://66.media.tumblr.com/145d5770045c5a147c2a0b9f51776b7b/tumblr_ppxzlddnCE1v2s5upo1_250.jpg"],
	        
["film", ["How to Lose Friends & Alienate People", "New York für Anfänger"], "2008", ["2015 09 20"], 6, ["ger"], ["biography", "comedy"], [], [], ["Robert B. Weide"], ["Simon Pegg", "Megan Fox", "Kirsten Dunst", "Daniel Craig"], "https://66.media.tumblr.com/e25c13ef11b7ba8ef8b3d3b787960c0a/tumblr_ppxz5xX3wp1v2s5upo1_250.jpg"],
	        
["film", ["Pain & Gain"], "2013", ["2015 09 21"], 4, ["ger"], ["action", "comedy"], ["bini"], [], ["Michael Bay"], ["Mark Wahlberg", "Dwayne Johnson", "Anthony Mackie", "Tony Shalhoub", "Ed Harris", "Ken Jeong", "Peter Stormare"], "https://66.media.tumblr.com/a8b015b73adfb7e1571797ac1e0ca38a/tumblr_ppxz7cPxSj1v2s5upo1_250.jpg"],
	        
["film", ["Heil"], "2015", ["2015 09 23"], 4, ["ger"], ["comedy"], ["nico"], ["Kino", "Schule"], ["Dietrich Brüggemann"], ["Benno Fürmann", "Daniel Zillmann", "Angela Merkel", "Thees Uhlmann"], "https://66.media.tumblr.com/6285f982882737ada035ff0f5b4f459f/tumblr_ppxz9hhsRK1v2s5upo1_250.jpg"],
	        
["film", ["I, Robot"], "2004", ["2015 09 25"], 5, ["ger"], ["action", "drama"], ["bini"], [], ["Alex Proyas"], ["Will Smith", "Alan Tudyk", "Bruce Greenwood", "Shia LaBeouf"], "https://66.media.tumblr.com/77b0c2f02a5a9786cd573d76fb79fbb6/tumblr_ppxzd1WNaY1v2s5upo1_250.jpg"],
	        
["series", ["Der Wedding kommt"], "2016", [["2020 09 21", "2020 09 24", "S1"]], 4, ["ger"], ["comedy"], [], [], ["Rebecca Ahlen", "Martje Friedrich", "Melina Voss"], ["Kazim Akboga", "Alice Phoebe Lou"], "https://64.media.tumblr.com/9b47d9ffa35b63775f8af6595b81e79e/b8579c67b26a00af-cc/s250x400/0f928a81f3da55d98eac3639b8307c9942038367.jpg"],
	        
["film", ["Land of the Dead"], "2005", ["2015 10 02"], 6, ["ger"], ["horror", "sci-fi"], [], [], ["George A. Romero"], ["Simon Baker", "John Leguizamo", "Simon Pegg"], "https://37.media.tumblr.com/afc7c7273e593ec70887c5d63d260898/tumblr_o2j9a3HOcv1v2s5upo1_250.jpg"],
	        
["film", ["Notting Hill"], "1999", ["2015 10 04"], 6, ["ger"], ["comedy", "drama"], [], [], ["Roger Michell"], ["Julia Roberts", "Hugh Grant", "Alec Baldwin"], "https://40.media.tumblr.com/07f0a4c01ba9b8eb11418ed48c602d36/tumblr_o2j9cbapLd1v2s5upo1_250.jpg"],
	        
["film", ["Léon", "Léon: Der Profi"], "1994", ["2015 10 05", "2017 06 10"], 9, ["ger"], ["action", "crime"], ["bini"], [], ["Luc Besson"], ["Jean Reno", "Gary Oldman", "Natalie Portman"], "https://66.media.tumblr.com/4eb8c96f9dd91511df0c0b42d6020087/tumblr_o7n7anEJJv1v2s5upo1_250.jpg"],
	        
["film", ["Kal Ho Naa Ho", "Indian Love Story - Kal Ho Naa Ho"], "2003", ["2015 10 13"], 7, ["ger"], ["comedy", "drama", "bollywood"], ["bini"], [], ["Nikkhil Advani"], ["Shah Rukh Khan"], "https://66.media.tumblr.com/fa97aade2783dadd0e6f37e80ee9d2f7/tumblr_ppxzwbAISQ1v2s5upo1_250.jpg"],
	        
["film", ["The Taste of Apple Seeds", "Der Geschmack von Apfelkernen"], "2013", ["2015 10 16"], 5, ["ger"], ["drama"], [], [], ["Vivian Naefe"], ["Hannah Herzsprung"], "https://68.media.tumblr.com/e6ca21b973e84d36883546c9f0dc5c43/tumblr_oov2lnvYGR1v2s5upo1_250.jpg"],
	        
["film", ["Jonas"], "2011", ["2015 10 17"], 1, ["ger"], ["comedy"], [], [], ["Robert Wilde"], [], "https://66.media.tumblr.com/159854b4ad7473e81b684f0b61661b61/tumblr_pvnt77Yaa71v2s5upo1_250.jpg"],
	        
["film", ["Tracks", "Spuren"], "2013", ["2015 10 17"], 8, ["ger"], ["adventure", "biography"], [], [], ["John Curran"], [], "https://66.media.tumblr.com/82d7eeab98956e9ccfd3d3a8ea30aac8/tumblr_pvnta0gdws1v2s5upo1_250.jpg"],
	        
["film", ["Splice", "Splice - Das Genexperiment"], "2009", ["2015 10 19"], 7, ["ger"], ["drama", "horror"], ["nico"], [], ["Vincenzo Natali"], ["Adrien Brody"], "https://66.media.tumblr.com/75ce7e9eaa79a42b197cc800b74ff1ed/tumblr_pw4iu1i7iZ1v2s5upo1_250.jpg"],
	        
["film", ["John Dies at the End"], "2012", ["2015 10 19"], 9, ["ger"], ["comedy", "fantasy"], ["nico"], [], ["Don Coscarelli"], ["Clancy Brown"], "https://66.media.tumblr.com/a0fe77f4e3b86e16f7c308438faec781/tumblr_pw4ivxWM921v2s5upo1_250.jpg"],
	        
["film", ["The Fifth Element", "Das fünfte Element"], "1997", ["2015 10 20"], 6, ["ger"], ["action", "adventure", "sci-fi"], ["bini"], [], ["Luc Besson"], ["Bruce Willis", "Gary Oldman", "Milla Jovovich"], "https://66.media.tumblr.com/c2b9366f5a0a8ce5ab56c6da9553790c/tumblr_pwf7roRFyr1v2s5upo1_250.jpg"],
	        
["film", ["Kuch Kuch Hota Hai", "Kuch Kuch Hota Hai - Und ganz plötzlich ist es Liebe"], "1998", ["2015 10 23"], 5, ["ger"], ["comedy", "drama", "bollywood"], ["bini"], [], ["Karan Johar"], ["Shah Rukh Khan", "Anupam Kher"], "https://66.media.tumblr.com/5c85abbf91995378d4363a9bdbdec0d8/tumblr_pwko1ihh061v2s5upo1_250.jpg"],
	        
["film", ["Happy New Year", "Happy New Year - Herzensdiebe"], "2014", ["2015 10 25"], 4, ["ger"], ["action", "comedy", "bollywood"], ["bini"], [], ["Farah Khan"], ["Shah Rukh Khan"], "https://66.media.tumblr.com/c1f84054992fbd681072778a2f35c657/tumblr_pwko56FXy31v2s5upo1_250.jpg"],
	        
["film", ["Signs", "Signs - Zeichen"], "2002", ["2015 10 28"], 1, ["ger"], ["drama", "mystery"], [], [], ["M. Night Shyamalan"], ["Abigail Breslin"], "https://66.media.tumblr.com/9c14f12fbc6adb2065a42ee3855c7b51/tumblr_pwkoaywx8n1v2s5upo1_250.jpg"],
	        
["film", ["The Illusionist", "The Illusionist - Nichts ist wie es scheint"], "2006", ["2015 10 29"], 7, ["ger"], ["drama", "fantasy"], [], [], ["Neil Burger"], ["Edward Norton"], "https://66.media.tumblr.com/a49e9f17f896342ec02e98b44587a3b3/tumblr_pwopp8zpV21v2s5upo1_250.jpg"],
	        
["film", ["The Sorcerer's Apprentice", "Duell der Magier"], "2010", ["2015 10 30"], 8, ["ger"], ["action", "adventure", "supernatural"], ["bini"], [], ["Jon Turteltaub"], ["Nicolas Cage"], "https://66.media.tumblr.com/997c05a47135e5e70482c6d39aff2387/tumblr_pwoptpHPND1v2s5upo1_250.jpg"],
	        
["film", ["Cirque du Freak: The Vampire's Assistant", "Mitternachtszirkus - Willkommen in der Welt der Vampire"], "2009", ["2015 10 31"], 9, ["ger"], ["action", "adventure"], ["bini"], [], ["Paul Weitz"], ["John C. Reilly", "Josh Hutcherson", "Ken Watanabe", "Willem Dafoe"], "https://66.media.tumblr.com/596c42a4dc98f6c95cf99c77892fefd4/tumblr_pwvsf2qlSl1v2s5upo1_250.jpg"],
	        
["film", ["Oblivion"], "2013", ["2015 11 02"], 7, ["ger"], ["action", "adventure"], [], [], ["Joseph Kosinski"], ["Tom Cruise", "Morgan Freeman"], "https://66.media.tumblr.com/e76cfa3878cc2e800ec29ddf946b5c61/tumblr_pwvsijeH3W1v2s5upo1_250.jpg"],
	        
["film", ["Hanna", "Wer ist Hanna?"], "2011", ["2015 11 04", "2016 09 02"], 8, ["ger"], ["action", "drama"], ["bini", "nico"], [], ["Joe Wright"], ["Saoirse Ronan", "Cate Blanchett"], "https://66.media.tumblr.com/4ccfdad96cbd37814b45e90af37299b3/tumblr_pwvsjzq2xF1v2s5upo1_250.jpg"],
	        
["film", ["A Lonely Place to Die"], "2011", ["2015 11 05"], 6, ["ger"], ["crime", "thriller"], [], [], ["Julian Gilbey"], [], "https://66.media.tumblr.com/a83c0f222e35f53dc7dd193f0960d540/tumblr_pwzsuwXloR1v2s5upo1_250.jpg"],
	        
["film", ["Sunshine"], "2007", ["2015 11 07"], 5, ["ger"], ["sci-fi", "thriller"], [], [], ["Danny Boyle"], ["Cillian Murphy", "Benedict Wong", "Chris Evans", "Mark Strong"], "https://66.media.tumblr.com/5df6aafe488d5d4e0905f3b3c0f481b5/tumblr_pwzswsjyiR1v2s5upo1_250.jpg"],
	        
["film", ["Om Shanti Om"], "2007", ["2015 11 18"], 7, ["ger"], ["action", "comedy", "bollywood"], ["bini"], [], ["Farah Khan"], ["Shah Rukh Khan", "Deepika Padukone", "Amitabh Bachchan"], "https://66.media.tumblr.com/f32aa12392c699236b0f466dcbd19ea2/tumblr_ppuwhbyaIO1v2s5upo1_250.jpg"],
	        
["film", ["The Shining", "Shining"], "1980", ["2015 11 21", "2016 07 01"], 7, ["ger"], ["drama", "horror"], [], [], ["Stanley Kubrick"], ["Jack Nicholson"], "https://66.media.tumblr.com/371c47ac4587f0a15a60cf0c1b11bd9b/tumblr_ppuwfk8EEg1v2s5upo1_250.jpg"],
	        
["film", ["10,000 BC", "10.000 BC"], "2008", ["2015 11 22"], 6, ["ger"], ["action", "adventure"], [], [], ["Roland Emmerich"], ["Camilla Belle"], "https://66.media.tumblr.com/d176fa5aa81e4abd194deac4b880d7eb/tumblr_ppuwdtsSG71v2s5upo1_250.jpg"],
	        
["film", ["Red Cliff", "Red Cliff", "Chi bi"], "2008", ["2015 11 24"], 9, ["ger"], ["action", "adventure"], [], [], ["John Woo"], [], "https://66.media.tumblr.com/f0ae3fd7451c93f313326fa483cbc721/tumblr_ppuwb1FgOf1v2s5upo1_250.jpg"],
	        
["short", ["Typhoon Noruda", "Typhoon Noruda", "Taifuu no Noruda"], "2015", ["2015 11 29"], 6, ["jap"], ["anime"], ["bini"], [], ["Yôjirô Arai"], [], "https://66.media.tumblr.com/69fddd5b6b1d3f0de3cbab8908116a61/tumblr_pxbek6avXC1v2s5upo1_250.jpg"],
	        
["film", ["Laura"], "1944", ["2015 12 01"], 6, ["eng"], ["drama", "film-noir"], [], [], ["Otto Preminger"], [], "https://66.media.tumblr.com/52365365a32335ed6e1265d19744051e/tumblr_pxkfgb08nY1v2s5upo1_250.jpg"],
	        
["film", ["The Kings of Summer", "Kings of Summer"], "2013", ["2015 12 03"], 7, ["ger"], ["adventure", "comedy"], [], [], ["Jordan Vogt-Roberts"], ["Nick Robinson", "Gabriel Basso", "Moises Arias", "Nick Offerman", "Erin Moriarty"], "https://66.media.tumblr.com/a66746ac954067a5ce8994d288b0dc2c/tumblr_pxkfhx1Htq1v2s5upo1_250.jpg"],
	        
["film", ["Love, Simon"], "2018", ["2019 06 28"], 9, ["ger"], ["comedy", "drama"], ["bini", "syl"], [], ["Greg Berlanti"], ["Nick Robinson", "Jennifer Garner", "Josh Duhamel", "Katherine Langford", "Alexandra Shipp", "Logan Miller", "Talitha Eliana Bateman", "Miles Heizer", "Mackenzie Lintz", "Haroon Khan"], "https://66.media.tumblr.com/f4e181afba29f847ddc6b367e222828a/d2d5beef5dff587c-00/s250x400/83a3348833d686e0e502f99b0b7001866117a64b.jpg"],
	        
["film", ["Ruby Sparks", "Ruby Sparks - Meine fabelhafte Freundin"], "2012", ["2015 12 04"], 9, ["ger"], ["comedy", "drama"], [], [], ["Jonathan Dayton", "Valerie Faris"], ["Paul Dano", "Zoe Kazan"], "https://37.media.tumblr.com/7403301c936e6fb4bb7954de598bb5ca/tumblr_o0cgu1Zcpn1v2s5upo1_250.jpg"],
	        
["film", ["Dope"], "2015", ["2015 12 05"], 7, ["ger"], ["comedy", "crime"], [], [], ["Rick Famuyiwa"], [], "https://49.media.tumblr.com/3c559c30c9c6a213be91b79b96cd5e04/tumblr_o0cgpsyONU1v2s5upo1_250.jpg"],
	        
["film", ["Transformers"], "2007", ["2015 12 07"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Transformers"], ["Michael Bay"], ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "Jon Voight", "John Turturro"], "https://40.media.tumblr.com/ed2b735c8d94867aa44c3062ca01335d/tumblr_o0cg96aS281v2s5upo1_250.jpg"],
	        
["film", ["Transformers: Revenge of the Fallen", "Transformers: Die Rache"], "2009", ["2015 12 07"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Transformers"], ["Michael Bay"], ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "John Turturro", "Rainn Wilson"], "https://49.media.tumblr.com/a454bf84cd4ae6e2dc0be89ebea113b1/tumblr_o0cg3vdgy81v2s5upo1_250.jpg"],
	        
["film", ["Transformers: Age of Extinction", "Transformers 4: Ära des Untergangs"], "2014", ["2016 03 31", "2019 02 20"], 6, ["ger"], ["action", "adventure"], ["bini"], ["Transformers"], ["Michael Bay"], ["Mark Wahlberg", "Stanley Tucci", "Titus Welliver", "John Goodman", "Sophia Myles"], "https://40.media.tumblr.com/8afe89c1f124be181009b615b0da3b8d/tumblr_o4x4hbXTS61v2s5upo1_250.jpg"],
	        
["film", ["Iron Man"], "2008", ["2016 03 27", "2017 02 01"], 9, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Jon Favreau"], ["Robert Downey Jr.", "Jeff Bridges", "Gwyneth Paltrow", "Stan Lee", "Samuel L. Jackson"], "https://49.media.tumblr.com/5017d31b1dd6842686512928527710a3/tumblr_o4rininmoe1v2s5upo1_250.jpg"],
	        
["film", ["Iron Man 2"], "2010", ["2016 03 28", "2017 02 22"], 9, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Jon Favreau"], ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Scarlett Johansson", "Sam Rockwell", "Samuel L. Jackson", "Clark Gregg", "Stan Lee"], "https://40.media.tumblr.com/7260c61ced9afbc0d92a70dc7bd21281/tumblr_o4rip3fHdH1v2s5upo1_250.jpg"],
	        
["film", ["Iron Man Three", "Iron Man 3"], "2013", ["2016 03 28"], 9, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Shane Black"], ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle", "Ben Kingsley", "James Badge Dale", "Stan Lee", "Mark Ruffalo", "Jenna Ortega"], "https://49.media.tumblr.com/c864b3a35eab7507f075ec58e6ebac0e/tumblr_o4ririDQ7k1v2s5upo1_250.jpg"],
	        
["film", ["The Incredible Hulk", "Der unglaubliche Hulk"], "2008", ["2016 03 28"], 6, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Louis Leterrier"], ["Edward Norton", "Ty Burrell", "Robert Downey Jr.", "Stan Lee"], "https://40.media.tumblr.com/aa18fbc04b06b5a539d26518bfe21a27/tumblr_o4rq5d438j1v2s5upo1_250.jpg"],
	        
["film", ["Thor"], "2011", ["2016 03 29"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Marvel", "Adventure"], ["Kenneth Branagh"], ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Kat Dennings", "Clark Gregg", "Stan Lee", "Samuel L. Jackson", "Jeremy Renner"], "https://49.media.tumblr.com/fd9020e7fe419b7fbe02f78f08454657/tumblr_o4srz0TS7k1v2s5upo1_250.jpg"],
	        
["film", ["Thor: The Dark World", "Thor: The Dark Kingdom"], "2013", ["2016 03 29"], 7, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Alan Taylor"], ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Kat Dennings", "Stan Lee", "Talulah Riley", "Chris Evans"], "https://40.media.tumblr.com/31124e18faba414366fcb1b123bae479/tumblr_o4ss148JH71v2s5upo1_250.jpg"],
	        
["film", ["Captain America: The First Avenger"], "2011", ["2016 03 29"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Marvel", "Avengers"], ["Joe Johnston"], ["Chris Evans", "Tommy Lee Jones", "Stanley Tucci", "Samuel L. Jackson", "Toby Jones", "David Bradley", "Stan Lee"], "https://49.media.tumblr.com/d795348c9ba0e4483f05147201ef6b24/tumblr_o4ugvkeV8b1v2s5upo1_250.jpg"],
	        
["film", ["Captain America: The Winter Soldier", "The Return of the First Avenger"], "2014", ["2016 03 30"], 7, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Anthony Russo", "Joe Russo"], ["Chris Evans", "Samuel L. Jackson", "Scarlett Johansson", "Anthony Mackie", "Toby Jones", "Stan Lee", "Alan Dale"], "https://37.media.tumblr.com/7d801f011251aefaa3be6a9e224190ca/tumblr_o4v7w80vDb1v2s5upo1_250.jpg"],
	        
["film", ["The Avengers"], "2012", ["2016 03 30"], 8, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Joss Whedon"], ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Samuel L. Jackson", "Gwyneth Paltrow", "Stan Lee"], "https://40.media.tumblr.com/e839ece28b91eb39db84c65d6f91ce90/tumblr_o4vbcpBprV1v2s5upo1_250.jpg"],
	        
["film", ["Avengers: Age of Ultron"], "2015", ["2016 03 30"], 8, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Joss Whedon"], ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Jeremy Renner", "Samuel L. Jackson", "Anthony Mackie", "Stan Lee", "Claudia Kim"], "https://49.media.tumblr.com/79f9900b954e67779949aa03af22e694/tumblr_o4wt23eSX41v2s5upo1_250.jpg"],
	        
["film", ["Guardians of the Galaxy"], "2014", ["2016 05 09", "2016 10 16", "2017 12 26"], 7, ["ger"], ["action", "adventure"], ["bini"], ["Marvel"], ["James Gunn"], ["Chris Pratt", "Zoe Saldana", "Bradley Cooper", "Karen Gillan", "Wyatt Oleff", "Stan Lee"], "https://66.media.tumblr.com/5c4b5e161e5cf33b47ac14fab0f17a16/tumblr_o6xep3SJwt1v2s5upo1_250.jpg"],
	        
["film", ["Captain America: Civil War", "The First Avenger: Civil War"], "2016", ["2016 10 02"], 9, ["ger"], ["action", "adventure"], [], ["Marvel", "Avengers"], ["Anthony Russo", "Joe Russo"], ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Anthony Mackie", "Jeremy Renner", "Tom Holland", "Daniel Brühl", "Martin Freeman", "Stan Lee"], "https://68.media.tumblr.com/be2186b86b191e56ae46a67bd8e13bb7/tumblr_oegv4tGrCT1v2s5upo1_250.jpg"],
	        
["series", ["Lego Jurassic World: The Indominus Escape", "Lego Jurassic World: Flucht des Indominus Rex"], "2016", [["2017 10 13", "S1"]], 9, ["ger"], ["animation", "action"], ["bini"], ["Jurassic Park", "Netflix"], ["Michael D. Black"], [], "https://66.media.tumblr.com/fe7acab7ce2bbe3569c84be0a02ad6e4/tumblr_pxxegmWanX1v2s5upo1_250.jpg"],
	        
["film", ["Enola Holmes"], "2020", ["2020 09 25"], 7, ["ger"], ["adventure", "crime"], [], ["Netflix"], ["Harry Bradbeer"], ["Millie Bobby Brown", "Sam Claflin", "Helena Bonham Carter", "Burn Gorman", "Fiona Shaw"], "https://64.media.tumblr.com/a6e1b5b4d92ff144ebfc8523e3d2dfd6/237a739cc3a6e9fa-13/s250x400/4da4bc2c50782d46ea0a2799194a4c7934c82c5d.jpg"],
	        
["film", ["The Last Summer"], "2019", ["2020 09 25"], 6, ["ger"], ["comedy"], [], ["Netflix"], ["William Bindley"], ["Maia Mitchell", "Halston Sage"], "https://64.media.tumblr.com/341a11f6cfdd916580db8695c1f3d157/78ab0a97c0633405-07/s250x400/04f5e80e1aedd0009183a33e770d397cf34bdfd7.jpg"],
	        
["series", ["Love, Chunibyo & Other Delusions!: Heart Throb", "Trotz Chūnibyō will ich mich verlieben!: Herzklopfen", "Chuunibyou demo Koi ga Shitai! Ren"], "2014", [["2020 08 28", "2020 09 25", "S1"]], 8, ["jap"], ["anime"], [], ["Chuunibyou"], ["Katelyn Barr", "Jukki Hanada", "Lainee Hooks"], [], "https://64.media.tumblr.com/f9719faa8fc264701c355114a68cdc07/a48da2de1ad3b7f5-8e/s250x400/2e48e21ed61ed18734f85b127d4c714e24ddbaba.jpg"],
	        
["film", ["Unbreakable", "Unbreakable - Unzerbrechlich"], "2000", ["2020 09 27"], 4, ["ger"], ["drama", "mystery"], ["bini", "syl", "je"], ["Eastrail 177", "DVD"], ["M. Night Shyamalan"], ["Bruce Willis", "Samuel L. Jackson", "Spencer Treat Clark", "Michael Kelly"], "https://64.media.tumblr.com/670ef74788029cdbdec61ebc9ad9b800/dcf01c6c54ab2e98-dd/s250x400/ce4a00f5cc7858471a9ceb94f1ce4248b727fa30.jpg"],
	        
["series", ["The Adventures of Jimmy Neutron, Boy Genius", "Jimmy Neutron - Jimmy, der Fernsehstar"], ["2002", "2006"], [["2020 09 29", "S1E13-S1E17"]], 6, ["ger"], ["comedy"], ["bini", "syl", "je"], ["DVD", "Jimmy Neutron"], ["John A. Davis", "Steve Oedekerk"], [], "https://64.media.tumblr.com/e4d40502d6419fe3f90f4a8967115e68/1ee86a0d4773b82f-d8/s250x400/de10efbb5ffbb8f8be9187b48ff65ca18e03bc59.jpg"],
	        
["film", ["Glass"], "2019", ["2019 02 23", "2020 09 30"], 8, ["ger"], ["drama"], ["syl", "bini", "je"], ["Eastrail 177", "Kino", "DVD"], ["M. Night Shyamalan"], ["James McAvoy", "Bruce Willis", "Anya Taylor-Joy", "Sarah Paulson", "Spencer Treat Clark"], "https://66.media.tumblr.com/f3ee0e01ef65a7cb2b71e714510c00da/105064cff59d6cef-73/s250x400/91ab466e6818b14eada3f585717c3f411619d591.jpg"],
	        
["audiobook", ["Little Women"], "1868", [["2020 10 05", "2020 10 21"]], 9, ["eng"], [], [], ["Little Women", "March-Trilogie"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/898f2fcc7489dafce9b4bad176a822d2/6431d3cb351f91f9-f0/s250x400/3bcaa864990fd0e56da4353db71c930d8d952496.jpg"],
	        
["book", ["Night School: Legacy"], "2013", [["2020 09 04", "2020 11 14"]], 8, ["eng"], [], [], ["Night School"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/fc69578e397f3a7dc5c75060f04d60e6/c09d64f12fa351b2-f8/s250x400/61fd6b4031fa085f2663b86c0ea222d8aaaff442.jpg"],
	        
["film", ["Zathura: A Space Adventure", "Zathura - Ein Abenteuer im Weltraum"], "2005", ["2015 12 09"], 7, ["ger"], ["action", "adventure"], ["bini"], [], ["Jon Favreau"], ["Josh Hutcherson", "Kristen Stewart"], "https://49.media.tumblr.com/6b40c0b2911ab1a4e065c67ff0f820ce/tumblr_o0cfz8HMmz1v2s5upo1_250.jpg"],
	        
["film", ["Big"], "1988", ["2015 12 10"], 8, ["ger"], ["comedy", "drama"], [], [], ["Penny Marshall"], ["Tom Hanks"], "https://40.media.tumblr.com/784e9a2679b971aa69054de63ce3e5ed/tumblr_o0cfowua8F1v2s5upo1_250.jpg"],
	        
["film", ["Frozen", "Frozen - Eiskalter Abgrund"], "2010", ["2015 12 13"], 6, ["ger"], ["adventure", "drama"], [], [], ["Adam Green"], [], "https://40.media.tumblr.com/cf2e43e4b55298beb29a920da8800b92/tumblr_o0cfhujXFc1v2s5upo1_250.png"],
	        
["film", ["The Pianist", "Der Pianist"], "2002", ["2015 12 17"], 7, ["ger"], ["biography", "drama"], [], [], ["Roman Polanski"], ["Adrien Brody"], "https://40.media.tumblr.com/ae6121711b216d0736e739521189b369/tumblr_o0cf57h3JY1v2s5upo1_250.jpg"],
	        
["film", ["The Last Station", "Ein russischer Sommer"], "2009", ["2015 12 21"], 6, ["ger"], ["biography", "drama"], [], ["Schule"], ["Michael Hoffman"], ["Helen Mirren", "James McAvoy"], "https://49.media.tumblr.com/910dd0be251f1768d118460bfdc696c7/tumblr_nzq1a3b6Wk1v2s5upo1_250.jpg"],
	        
["film", ["Dead Poets Society", "Der Club der toten Dichter"], "1989", ["2015 12 22"], 8, ["ger"], ["comedy", "drama"], [], [], ["Peter Weir"], ["Robin Williams"], "https://40.media.tumblr.com/4ef53f4ffdb4ff8ce75ec0afd1850b93/tumblr_nzs3t3Nuux1v2s5upo1_250.jpg"],
	        
["film", ["Oz the Great and Powerful", "Die fantastische Welt von Oz"], "2013", ["2015 12 22"], 4, ["ger"], ["adventure", "family"], [], [], ["Sam Raimi"], ["James Franco", "Mila Kunis", "Michelle Williams", "Zach Braff", "Joey King"], "https://49.media.tumblr.com/d2b287563da1b159da5b84126e2fc939/tumblr_nzs58qzhJX1v2s5upo1_250.jpg"],
	        
["film", ["My Fair Lady"], "1964", ["2015 12 23"], 7, ["ger"], ["drama", "family", "musical"], [], [], ["George Cukor"], ["Audrey Hepburn"], "https://40.media.tumblr.com/df7a7ee51c81342fd6592e421ee704dc/tumblr_nzv4p6keYJ1v2s5upo1_250.jpg"],
	        
["film", ["Yes Man", "Der Ja-Sager"], "2008", ["2015 12 23"], 8, ["ger"], ["comedy", "romance"], [], [], ["Peyton Reed"], ["Jim Carrey", "Zooey Deschanel", "Bradley Cooper", "John Michael Higgins", "Fionnula Flanagan", "Luis Guzmán"], "https://49.media.tumblr.com/c8b4c11db85879275c2c36de71dada3c/tumblr_nzv666XF4h1v2s5upo1_250.jpg"],
	        
["film", ["Dreamer: Inspired by a True Story", "Dreamer - Ein Traum wird wahr"], "2005", ["2015 12 27"], 6, ["ger"], ["drama", "family"], [], [], ["John Gatins"], ["Dakota Fanning", "Luis Guzmán"], "https://40.media.tumblr.com/d8582e48c22d0f3284ca20ecf66b7315/tumblr_o00ocw9pIp1v2s5upo1_250.jpg"],
	        
["film", ["Night Moves"], "2013", ["2015 12 27"], 6, ["ger"], ["drama", "thriller"], [], [], ["Kelly Reichardt"], ["Jesse Eisenberg", "Dakota Fanning", "Nate Mooney"], "https://49.media.tumblr.com/707dd6cf89a0a2e9bb57e4ebe1381ff3/tumblr_o00wiwKTpp1v2s5upo1_250.jpg"],
	        
["film", ["Ghost World"], "2001", ["2015 12 27"], 6, ["ger"], ["comedy", "drama"], [], [], ["Terry Zwigoff"], ["Scarlett Johansson", "Steve Buscemi"], "https://40.media.tumblr.com/cc96e5953ab6ca47055bf70c574a55db/tumblr_o019966Kof1v2s5upo1_250.jpg"],
	        
["film", ["Evangelion: 1.0 - You Are (Not) Alone", "Evangelion: 1.0 - You Are (Not) Alone", "Evangelion Shin Gekijôban: Jo"], "2007", ["2015 12 29"], 6, ["ger"], ["anime", "action"], ["bini"], ["Evangelion"], ["Masayuki", "Kazuya Tsurumaki", "Hideaki Anno"], [], "https://49.media.tumblr.com/6ff2b3129c09c8777eae5d8609018c3c/tumblr_o04mrbA4bo1v2s5upo1_250.jpg"],
	        
["film", ["Evangelion: 2.0: You Can (Not) Advance", "Evangelion: 2.0: You Can (Not) Advance", "Evangerion shin gekijôban: Ha"], "2009", ["2015 12 29"], 7, ["ger"], ["anime", "action"], ["bini", "nico"], ["Evangelion"], ["Masayuki", "Kazuya Tsurumaki", "Hideaki Anno"], [], "https://40.media.tumblr.com/bbf8cf700689a6ee0360f9814b981929/tumblr_o04seyfmI71v2s5upo1_250.jpg"],
	        
["film", ["The Nightmare Before Christmas", "Nightmare Before Christmas"], "1993", ["2016 01 02", "2017 10 31"], 6, ["ger"], ["animation", "family"], ["bini", "nico", "jessie", "sai"], ["Netflix"], ["Henry Selick"], [], "https://49.media.tumblr.com/aabd229a21c1f022d7531cc62126752d/tumblr_o0cab7OkQj1v2s5upo1_250.jpg"],
	        
["film", ["Tintin and the Lake of Sharks", "Tim und der Haifischsee", "Tintin et le lac aux requins"], "1972", ["2016 03 19"], 5, ["ger"], ["animation", "adventure"], ["bini"], [], ["Raymond Leblanc"], [], "https://40.media.tumblr.com/a42960e63754a4c2f67ef2ce840ef23f/tumblr_o4a7m3xZuf1v2s5upo1_250.jpg"],
	        
["short", ["Someone's Gaze", "Someone's Gaze", "Dareka no Manazashi"], "2013", ["2016 05 11"], 7, ["ger"], ["anime", "drama"], [], [], ["Makoto Shinkai"], [], "https://68.media.tumblr.com/5cd1eb74b050bcb0c5bc5cc9ad7d8ad1/tumblr_o70vz7g2gN1v2s5upo1_250.jpg"],
	        
["film", ["Enter the Void"], "2009", ["2015 12 29"], 1, ["ger"], ["drama", "fantasy"], ["bini", "nico"], [], ["Gaspar Noé"], ["Emily Alyn Lind"], "https://40.media.tumblr.com/54d46dc32be4e80b485a671c9473ed00/tumblr_o05lhwYqvQ1v2s5upo1_250.jpg"],
	        
["film", ["Hero", "Hero", "Ying xiong"], "2002", ["2016 01 03"], 7, ["ger"], ["action", "adventure"], [], [], ["Yimou Zhang"], [], "https://49.media.tumblr.com/9270e1c01726347cce0df515d3427613/tumblr_o0domo2eyr1v2s5upo1_500.jpg"],
	        
["film", ["Blue Valentine"], "2010", ["2016 01 11"], 3, ["ger"], ["drama", "romance"], [], [], ["Derek Cianfrance"], ["Ryan Gosling", "Michelle Williams"], "https://49.media.tumblr.com/3ffd25c757166219c8cdeb7e063a451c/tumblr_o0sw4676fJ1v2s5upo1_250.jpg"],
	        
["film", ["Carol"], "2015", ["2016 06 27"], 7, ["ger"], ["drama", "romance"], [], [], ["Todd Haynes"], ["Cate Blanchett", "Rooney Mara", "Kyle Chandler", "Sarah Paulson"], "https://66.media.tumblr.com/b9c5f989d5955964de7b7bc26584ea9c/tumblr_o9fzljBmU61v2s5upo1_250.jpg"],
	        
["film", ["Independence Day"], "1996", ["2016 01 04"], 4, ["ger"], ["action", "adventure"], ["bini"], [], ["Roland Emmerich"], ["Will Smith", "Jeff Goldblum"], "https://40.media.tumblr.com/1c241f9742132261647f8c95854d70b1/tumblr_o0hue6vBOk1v2s5upo1_250.jpg"],
	        
["film", ["Big Fish", "Big Fish - Der Zauber, der ein Leben zur Legende macht"], "2003", ["2016 01 08"], 7, ["ger"], ["adventure", "drama"], [], [], ["Tim Burton"], ["Jessica Lange", "Helena Bonham Carter", "Alison Lohman", "Marion Cotillard", "Missi Pyle", "Steve Buscemi", "Danny DeVito", "Miley Cyrus"], "https://49.media.tumblr.com/410a7be367e3e6c243cc122e68efbcf3/tumblr_o0osoajt031v2s5upo1_250.jpg"],
	        
["film", ["Eternal Sunshine of the Spotless Mind", "Vergiss mein nicht"], "2004", ["2016 01 09"], 5, ["ger"], ["drama", "romance"], [], [], ["Michel Gondry"], ["Jim Carrey", "Elijah Wood", "Mark Ruffalo", "Kirsten Dunst"], "https://37.media.tumblr.com/d371732634e0cc95062c3334342f1ef6/tumblr_o0p8m8QQo61v2s5upo1_250.jpg"],
	        
["film", ["Walk the Line"], "2005", ["2016 01 12", "2016 11 22"], 8, ["ger"], ["drama", "biography", "music"], [], [], ["James Mangold"], ["Reese Witherspoon", "Sandra Ellis Lafferty"], "https://49.media.tumblr.com/32dd2ca4acef9d612c5c483155af3959/tumblr_o0weanHCtx1v2s5upo1_250.jpg"],
	        
["film", ["Crouching Tiger, Hidden Dragon", "Tiger & Dragon", "Wo hu cang long"], "2000", ["2016 01 17"], 6, ["ger"], ["action", "adventure"], [], [], ["Ang Lee"], ["Ziyi Zhang"], "https://49.media.tumblr.com/29dcb9d9ecff20273762c3061405d32a/tumblr_o147difiGI1v2s5upo1_250.jpg"],
	        
["film", ["Dear John", "Das Leuchten der Stille"], "2010", ["2016 01 21"], 6, ["ger"], ["drama", "romance"], [], [], ["Lasse Hallström"], ["Channing Tatum", "Amanda Seyfried"], "https://49.media.tumblr.com/f1b40222d5f523fe444ba928a2f3f496/tumblr_o1yznn7qzM1v2s5upo1_250.jpg"],
	        
["film", ["What Dreams May Come", "Hinter dem Horizont - Das Ende ist nur der Anfang"], "1998", ["2016 01 30"], 6, ["ger"], ["drama", "fantasy"], [], [], ["Vincent Ward"], ["Robin Williams", "Max von Sydow"], "https://40.media.tumblr.com/e216e013520b6116ad8b4d36c6f0023d/tumblr_o1rvcqKgiv1v2s5upo1_250.jpg"],
	        
["film", ["Atonement", "Abbitte"], "2007", ["2016 02 10"], 6, ["ger"], ["drama", "mystery"], [], [], ["Joe Wright"], ["Saoirse Ronan", "James McAvoy", "Keira Knightley", "Benedict Cumberbatch"], "https://40.media.tumblr.com/2deb07b8a05805b2e8926115fdcf600b/tumblr_o2hfskemJP1v2s5upo1_250.jpg"],
	        
["film", ["My Sister's Keeper", "Beim Leben meiner Schwester"], "2009", ["2016 04 19"], 6, ["ger"], ["drama", "family"], [], [], ["Nick Cassavetes"], ["Abigail Breslin", "Cameron Diaz", "Alec Baldwin", "Joan Cusack"], "https://40.media.tumblr.com/fd594d0c2034d9c88c0e13b0c14ad765/tumblr_o5w8qh6D1r1v2s5upo1_250.jpg"],
	        
["film", ["Outlander"], "2008", ["2016 05 15"], 7, ["ger"], ["action", "adventure"], [], [], ["Howard McCain"], ["Jim Caviezel", "Ron Perlman", "Sophia Myles"], "https://68.media.tumblr.com/8826e1d24b95fb98cb5858ea2286bbda/tumblr_o77ygqP46X1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil"], "2002", ["2016 05 17"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Paul W.S. Anderson"], ["Milla Jovovich", "Michelle Rodriguez", "Heike Makatsch"], "https://68.media.tumblr.com/30a629ad38171e2f1328a705820e7a59/tumblr_o7ha4kM0VN1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Apocalypse"], "2004", ["2016 05 18"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Alexander Witt"], ["Milla Jovovich", "Jared Harris"], "https://68.media.tumblr.com/74b3bd9b1e5ea10546f82246f8db8486/tumblr_o7dquiGTOf1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Extinction"], "2007", ["2016 05 20"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Russell Mulcahy"], ["Milla Jovovich"], "https://68.media.tumblr.com/01cba57bbafa5401ff6e0364fd264942/tumblr_o7he6dAvhd1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Afterlife"], "2010", ["2016 05 22"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Paul W.S. Anderson"], ["Milla Jovovich"], "https://68.media.tumblr.com/0379678b089cac47253be929ce11389d/tumblr_o7kvnp6QsR1v2s5upo1_250.jpg"],
	        
["film", ["Resident Evil: Retribution"], "2012", ["2016 05 25"], 8, ["ger"], ["action", "horror"], [], ["Resident Evil"], ["Paul W.S. Anderson"], ["Milla Jovovich", "Kevin Durand"], "https://68.media.tumblr.com/49b938188ffd8e03c02329cce7bddf28/tumblr_o7u9thZguG1v2s5upo1_250.jpg"],
	        
["film", ["Laggies", "Grow Up!? - Erwachsen werd' ich später"], "2014", ["2016 05 28"], 7, ["ger"], ["comedy", "drama"], [], [], ["Lynn Shelton"], ["Keira Knightley", "Jeff Garlin", "Chloë Grace Moretz", "Sam Rockwell"], "https://68.media.tumblr.com/029332ab558404bc2721c93c84d88730/tumblr_o7wh4hPXdb1v2s5upo1_250.jpg"],
	        
["film", ["Goodbye to All That", "Suddenly Single"], "2014", ["2016 06 19"], 3, ["ger"], ["comedy", "drama"], [], [], ["Angus MacLachlan"], ["Paul Schneider"], "https://68.media.tumblr.com/2b52387fb84ce6f9e1e0ab7b2f54910b/tumblr_o90ykbAJXr1v2s5upo1_250.jpg"],
	        
["film", ["I'm Off Then", "Ich bin dann mal weg"], "2015", ["2016 06 29"], 7, ["ger"], ["comedy"], [], [], ["Julia von Heinz"], [], "https://68.media.tumblr.com/9b18cf3ed6bb1b7708cb6660243b2bbc/tumblr_o9jsra3R5u1v2s5upo1_250.jpg"],
	        
["film", ["Rush Hour"], "1998", ["2019 07 08"], 5, ["ger"], ["action", "comedy"], [], ["Netflix"], ["Brett Ratner"], ["Ken Leung", "Jackie Chan", "Chris Tucker"], "https://66.media.tumblr.com/9d176e93e4c29e946dc1c2a258c39944/f244781f2db8bae3-3f/s250x400/46441916585879a5b8546c60f85cabdebca7a220.jpg"],
	        
["film", ["Godzilla: King of the Monsters", "Godzilla II: King of the Monsters"], "2019", ["2019 06 05"], 7, ["ger"], ["action", "adventure"], ["bini", "je"], ["Godzilla", "Kino"], ["Michael Dougherty"], ["Kyle Chandler", "Vera Farmiga", "Millie Bobby Brown", "Ken Watanabe", "Sally Hawkins"], "https://66.media.tumblr.com/c5817466fb41929749ffef31976696b4/54fb646f9f71a893-39/s250x400/e417d96a4c1fc5d7e7aba55905b8d0c7d8624199.jpg"],
	        
["film", ["Blackfish", "Der Killerwal"], "2013", ["2019 05 19"], 7, ["eng"], ["documentary"], [], [], ["Gabriela Cowperthwaite"], ["Whoopi Goldberg"], "https://66.media.tumblr.com/ee6cc26548f145015e6100a1cff2a21a/89f4a86e93f73e5a-cf/s250x400/3d2424c9c7fedd905a7d6465de7b3e77cd91c811.jpg"],
	        
["film", ["Black Mirror: Bandersnatch"], "2018", ["2019 02 07"], 5, ["ger"], ["drama", "mystery"], [], ["Black Mirror", "Netflix"], ["David Slade"], ["Fionn Whitehead"], "https://66.media.tumblr.com/c2c0b579e17edf051150c80dd5b85356/9529b0306515b777-12/s250x400/c09d309a79004a523f85482a53874fd1a01087e1.jpg"],
	        
["film", ["Rachel, Jack and Ashley Too"], "2019", ["2019 06 08"], 7, ["ger"], ["drama", "sci-fi"], [], ["Black Mirror", "Netflix"], ["Anne Sewitsky"], ["Miley Cyrus"], "https://66.media.tumblr.com/78d54d2c85af58f64694a071c70762a8/5092cb42d5fa2c4a-e8/s250x400/5b3f74aa43ce285d726ad0bcbe49ca759363947b.jpg"],
	        
["film", ["Brave", "Merida - Legende der Highlands"], "2012", ["2019 02 04"], 0, ["ger"], ["animation", "adventure"], [], ["Netflix"], ["Mark Andrews", "Brenda Chapman", "Steve Purcell"], [], "https://66.media.tumblr.com/727f235707969cd043cf44d2caaddc41/e7d4e1a7d35df1b3-3a/s250x400/aa20386ab6ee4dd5e75d606030abdd93b6d896ce.jpg"],
	        
["film", ["Manitou's Shoe", "Der Schuh des Manitu"], "2001", ["2018 12 31"], 0, ["ger"], ["comedy", "western"], ["bini", "je", "syl"], [], ["Michael Herbig"], ["Michael Herbig", "Christian Tramitz", "Sky du Mont", "Anke Engelke"], "https://66.media.tumblr.com/899949bcc615eb9887a21c1c933e72a9/0e254a87d252aa9e-18/s250x400/f204eb29a54bed604c4ff8d377f866b3cb8f72a7.jpg"],
	        
["film", ["Tallulah"], "2016", ["2019 02 06"], 5, ["ger"], ["comedy", "drama"], ["syl"], ["Netflix"], ["Sian Heder"], ["Ellen Page", "Allison Janney"], "https://66.media.tumblr.com/45372bd3f0bea634489c09b4d8722d27/1656aa640b97294b-50/s250x400/080bfe59734373d9e5427dec2b14b955c2109d07.jpg"],
	        
["film", ["The Curse of the Were-Rabbit", "Wallace & Gromit: The Curse of the Were-Rabbit"], "2005", ["2018 12 31"], 7, ["ger"], ["animation", "adventure"], ["bini", "je", "syl"], ["Wallace & Gromit", "Netflix"], ["Steve Box", "Nick Park"], [], "https://66.media.tumblr.com/59b787795933b4e3beffe681c760c499/c52e2afd454d86d4-a2/s250x400/e9dcf4f9fe4970b0372a3ff484186ba7e9dc555c.jpg"],
	        
["film", ["Nanny McPhee", "Eine zauberhafte Nanny"], "2005", ["2018 09 18"], 6, ["ger"], ["comedy", "family"], ["bini"], ["Netflix"], ["Kirk Jones"], ["Colin Firth", "Thomas Brodie-Sangster", "Adam Godley"], "https://66.media.tumblr.com/bb9eff003493e7c9a7ea7f2a0cdd7eea/6f75485fa561d4ff-68/s250x400/9a3068debcdcaa98d16c6816eab43ebb8545d428.jpg"],
	        
["film", ["The Package"], "2018", ["2018 09 05"], 6, ["ger"], ["comedy", "thriller"], ["bini"], ["Netflix"], ["Jake Szymanski"], ["Daniel Doheny"], "https://66.media.tumblr.com/7622b740247f1a4c1b7dd85dfb794b78/6dac7a859b43c095-c7/s250x400/83db237d3ffce0cf27ffac155064d057bb6f89e7.jpg"],
	        
["film", ["Scary Movie"], "2000", ["2018 07 30"], 4, ["ger"], ["comedy"], ["bini", "nico"], ["Netflix"], ["Keenen Ivory Wayans"], ["Carmen Electra", "Anna Faris"], "https://66.media.tumblr.com/8f00a5b43934233c812fb5925d2cd8cf/e0f715bbea917071-ab/s250x400/a2cb6d0ae31256ace13fa5dcd02b96c9bc3ae413.jpg"],
	        
["film", ["Extinction"], "2018", ["2018 07 30"], 7, ["ger"], ["action", "drama"], ["nico", "bini"], ["Netflix"], ["Ben Young"], ["Michael Peña", "Lizzy Caplan", "Amelia Crouch"], "https://66.media.tumblr.com/e1a775a0b08d385d677e03b0309360a9/e02e042615a1c3c1-79/s250x400/45322cb0d200a9a51e4202de1a62a9082a45fec5.jpg"],
	        
["film", ["Hush", "Still"], "2016", ["2018 06 26"], 6, ["ger"], ["horror", "thriller"], [], ["Netflix"], ["Mike Flanagan"], [], "https://66.media.tumblr.com/80e3a1b9fff0084cd34701f871adcd85/tumblr_pzpvznTPCq1v2s5upo1_250.jpg"],
	        
["film", ["Freche Mädchen"], "2008", ["2018 06 18"], 6, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Ute Wieland"], ["Anke Engelke", "Anna Böttcher", "Christian Tramitz", "Wilson Gonzalez"], "https://66.media.tumblr.com/8faea0ec081e5bd5cf57b650c4ca294d/tumblr_pzktvjfw161v2s5upo1_250.jpg"],
	        
["film", ["Dude"], "2018", ["2018 05 16"], 6, ["ger"], ["comedy", "drama"], [], [], ["Olivia Milch"], ["Kathryn Prescott", "Awkwafina", "Alex Wolff"], "https://66.media.tumblr.com/702308077be02f4b8fa5db3a9615e29d/tumblr_pzfebsZgCo1v2s5upo1_250.jpg"],
	        
["film", ["Bibi Blocksberg"], "2002", ["2018 03 10"], 5, ["ger"], ["comedy", "family"], ["bini"], ["Bibi Blocksberg"], ["Hermine Huntgeburth"], ["Sidonie von Krosigk"], "https://66.media.tumblr.com/ce02de8e989f7fec97130e504c9fed6b/tumblr_pzdf4jmvOy1v2s5upo1_250.jpg"],
	        
["film", ["Expedition Happiness"], "2017", ["2018 03 07"], 6, ["ger"], ["documentary"], [], ["Netflix"], ["Felix Starck"], [], "https://66.media.tumblr.com/4dfaca1c577a75909bad003c4eba4eee/tumblr_pz9f25Jwgu1v2s5upo1_250.jpg"],
	        
["film", ["Bright"], "2017", ["2018 03 03"], 5, ["ger"], ["action", "fantasy"], [], ["Netflix"], ["David Ayer"], ["Will Smith", "Noomi Rapace"], "https://66.media.tumblr.com/51bd109621dbaaa9172d711da9552660/tumblr_pz9ezksISP1v2s5upo1_250.jpg"],
	        
["film", ["Abschussfahrt"], "2015", ["2018 01 27"], 5, ["ger"], ["comedy"], [], [], ["Tim Trachte"], ["Alexander Schubert"], "https://66.media.tumblr.com/f649717a44fd34c4e907eb876a2d5245/tumblr_pz45uwfDfB1v2s5upo1_250.jpg"],
	        
["film", ["Lolita"], "1997", ["2017 12 31"], 6, ["eng"], ["drama", "romance"], [], [], ["Adrian Lyne"], [], "https://66.media.tumblr.com/fb1992636dde93620075c0016b49ea92/tumblr_pz09jaSIay1v2s5upo1_250.jpg"],
	        
["film", ["New Year's Eve", "Happy New Year"], "2011", ["2017 12 30"], 6, ["ger"], ["comedy", "romance"], ["syl"], [], ["Garry Marshall"], ["Michelle Pfeiffer", "Zac Efron", "Robert De Niro", "Halle Berry", "Sarah Paulson", "Til Schweiger", "Abigail Breslin", "Sarah Jessica Parker", "Nat Wolff", "Josh Duhamel"], "https://66.media.tumblr.com/bcca202bf53c8cd5acc0c75e97d20245/tumblr_pz09fjq4Cx1v2s5upo1_250.jpg"],
	        
["film", ["The Tinder Box", "Das Feuerzeug"], "1959", ["2017 12 25"], 5, ["ger"], ["drama", "fantasy"], ["bini", "syl", "je"], [], ["Siegfried Hartmann"], [], "https://66.media.tumblr.com/3cf29a9c4546a7dfa8966d7a37d38000/tumblr_pyv18ySN0z1v2s5upo1_250.jpg"],
	        
["film", ["Jessica Darling's It List"], "2016", ["2017 12 22"], 6, ["eng"], ["family"], [], ["Netflix"], ["Ali Scher"], ["Emma Rayne Lyle", "Jacob Melton"], "https://66.media.tumblr.com/705d2c57406fdab72a2e4880385cf25d/tumblr_pyv16udwDi1v2s5upo1_250.jpg"],
	        
["film", ["One Night"], "2016", ["2017 12 09"], 6, ["ger"], ["drama", "romance"], [], ["Netflix"], ["Minhal Baig"], ["Isabelle Fuhrman"], "https://66.media.tumblr.com/d6a901f32b26e881ea5f4acb09835a4b/tumblr_pyqyl3sLfF1v2s5upo1_250.jpg"],
	        
["film", ["Tramps"], "2016", ["2017 12 06"], 7, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Adam Leon"], ["Callum Turner", "Grace Van Patten"], "https://66.media.tumblr.com/6a3f92af483ba944d9507c89e204be3e/tumblr_pyqygl4GOI1v2s5upo1_250.jpg"],
	        
["short", ["Little Witch Academia"], "2013", ["2017 09 29"], 7, ["jap"], ["anime"], ["nico", "bini"], [], ["Yô Yoshinari"], [], "https://66.media.tumblr.com/9f4565eb9e24653aca832b8dab1416f2/tumblr_pxxeb9Fe3O1v2s5upo1_250.jpg"],
	        
["film", ["Frozen", "Die Eiskönigin: Völlig unverfroren"], "2013", ["2017 09 10"], 6, ["ger"], ["animation", "adventure"], ["sai", "jessie", "bini", "nico", "jani"], [], ["Chris Buck", "Jennifer Lee"], [], "https://66.media.tumblr.com/95836cc9a45f12d8e38b111a19665449/tumblr_pxxdwqKch51v2s5upo1_250.jpg"],
	        
["film", ["The Bélier Family", "Verstehen Sie die Béliers?", "La famille Bélier"], "2017", ["2017 08 27"], 8, ["ger"], ["comedy", "drama"], ["syl"], [], ["Eric Lartigau"], [], "https://66.media.tumblr.com/b9a070ea18e44e3956905565b594e697/tumblr_pxrganJH7c1v2s5upo1_250.jpg"],
	        
["film", ["Shaun the Sheep Movie", "Shaun das Schaf - Der Film"], "2015", ["2017 08 20"], 7, ["ger"], ["animation", "adventure"], ["bini", "syl"], [], ["Mark Burton", "Richard Starzak"], [], "https://66.media.tumblr.com/59ef436b9c93433054b57aab12e159e0/tumblr_pxrg3l15zf1v2s5upo1_250.jpg"],
	        
["film", ["A Million Ways to Die in the West", "A Million Ways To Die In The West"], "2014", ["2017 07 18"], 2, ["ger"], ["comedy", "western"], [], ["dropped"], ["Seth MacFarlane"], ["Amanda Seyfried", "Giovanni Ribisi", "Neil Patrick Harris", "John Michael Higgins", "Ryan Reynolds", "Mae Whitman"], "https://66.media.tumblr.com/e97c0bb242864440c2466af33b4b86f5/tumblr_pxnkbvYJJy1v2s5upo1_250.jpg"],
	        
["film", ["Central Intelligence"], "2016", ["2017 07 06"], 5, ["ger"], ["action", "comedy"], [], ["Schule"], ["Rawson Marshall Thurber"], ["Dwayne Johnson", "Kevin Hart", "Jason Bateman", "Aaron Paul"], "https://66.media.tumblr.com/9f093ced17b179c56ab64b0e590886ae/tumblr_ppuvxgQHe01v2s5upo1_250.jpg"],
	        
["film", ["Welcome to the Sticks", "Willkommen bei den Sch'tis", "Bienvenue chez les Ch'tis"], "2008", ["2017 07 03"], 7, ["ger"], ["comedy", "romance"], ["jenny"], ["Schule"], ["Dany Boon"], [], "https://66.media.tumblr.com/b1ae0738fbde9f1847042a91efd02a96/tumblr_ppuvo9umAb1v2s5upo1_250.jpg"],
	        
["film", ["The Shamer's Daughter", "Die Hüterin der Wahrheit - Dinas Bestimmung"], "2015", ["2017 04 12"], 6, ["ger"], ["adventure", "drama"], [], [], ["Kenneth Kainz"], [], "https://68.media.tumblr.com/b3e358060648c9ec15625ff3d0054917/tumblr_oor7e2Ysld1v2s5upo1_250.jpg"],
	        
["film", ["The Outcasts", "Cool Girls"], "2017", ["2017 04 12"], 6, ["ger"], ["comedy"], [], [], ["Peter Hutchings"], ["Victoria Justice", "Eden Sher", "Ashley Rickards"], "https://68.media.tumblr.com/e6327793474b955c81a45668f851beb2/tumblr_oor7gqtm3K1v2s5upo1_250.jpg"],
	        
["film", ["Purple Rain"], "1984", ["2017 04 11"], 5, ["ger"], ["drama", "music"], [], [], ["Albert Magnoli"], [], "https://68.media.tumblr.com/e0742cbb1503c1a17d3ecf69b1d11c90/tumblr_ooakqtqUFA1v2s5upo1_250.jpg"],
	        
["short", ["Your Old Man"], "2016", ["2017 04 10"], 8, ["eng"], ["comedy"], [], [], ["Tim Hautekiet"], [], "https://68.media.tumblr.com/8cf42f2b2f364940319fb2b5da635fe9/tumblr_ooakohySDI1v2s5upo1_250.jpg"],
	        
["film", ["Vanilla Sky"], "2001", ["2017 04 04"], 5, ["ger"], ["fantasy", "mystery"], [], [], ["Cameron Crowe"], ["Tom Cruise", "Cameron Diaz", "Noah Taylor", "Timothy Spall", "Tilda Swinton", "Johnny Galecki", "Ken Leung", "Conan O'Brien"], "https://68.media.tumblr.com/059128a6d2421cf302c6a7293db49992/tumblr_oo357ab8GS1v2s5upo1_250.jpg"],
	        
["film", ["Moms' Night Out", "Mom's Night Out"], "2014", ["2017 02 02"], 5, ["ger"], ["comedy"], [], [], ["Andrew Erwin", "Jon Erwin"], ["Sean Astin"], "https://68.media.tumblr.com/75f3cfff878cc9e176ba26d614f39740/tumblr_okvbyxTTE51v2s5upo1_250.jpg"],
	        
["film", ["The Muppets", "Die Muppets"], "2011", ["2017 01 31"], 6, ["ger"], ["adventure", "comedy"], [], [], ["James Bobin"], ["Jason Segel", "Amy Adams", "Zach Galifianakis", "Donald Glover", "Emily Blunt", "Whoopi Goldberg", "Neil Patrick Harris", "Jack Black"], "https://68.media.tumblr.com/008bc1b05945243180cb1c24c587b564/tumblr_oknz2tBBJF1v2s5upo1_250.jpg"],
	        
["film", ["Philadelphia"], "1993", ["2017 01 30"], 5, ["ger"], ["drama"], [], [], ["Jonathan Demme"], ["Tom Hanks"], "https://68.media.tumblr.com/7a5725faa25413da5b5e0d04118174f4/tumblr_oknyysJ2bN1v2s5upo1_250.jpg"],
	        
["film", ["The Dictator", "Der Diktator"], "2012", ["2017 01 16"], 5, ["ger"], ["comedy"], [], [], ["Larry Charles"], ["Sacha Baron Cohen", "Ben Kingsley", "Megan Fox", "Anna Faris", "Chris Parnell", "Hillary Clinton", "Edward Norton", "John C. Reilly"], "https://68.media.tumblr.com/f0055cb58ccffd7855d7c76d4924a36a/tumblr_ojvtgqr9Pc1v2s5upo1_250.jpg"],
	        
["film", ["Miracle on 34th Street", "Das Wunder von Manhattan"], "1994", ["2016 12 19"], 6, ["ger"], ["family", "fantasy"], [], ["Schule"], ["Les Mayfield"], ["Richard Attenborough", "Mara Wilson", "Allison Janney"], "https://68.media.tumblr.com/40f397e7c379ef376e1879ab421ebcd2/tumblr_oifqxvLLsZ1v2s5upo1_250.jpg"],
	        
["film", ["The Graduate", "Die Reifeprüfung"], "1967", ["2016 12 16"], 6, ["eng"], ["comedy", "drama"], [], ["Schule"], ["Mike Nichols"], ["Dustin Hoffman", "Kevin Tighe"], "https://68.media.tumblr.com/8586dc1f3d876a1855b98ad679c34411/tumblr_oibsbkL5Pf1v2s5upo1_250.jpg"],
	        
["film", ["The Odd Life of Timothy Green", "Das wundersame Leben von Timothy Green"], "2012", ["2016 12 04"], 6, ["ger"], ["comedy", "drama"], [], [], ["Peter Hedges"], ["Jennifer Garner", "Joel Edgerton", "Odeya Rush"], "https://68.media.tumblr.com/56ecbddc631f535930a5913aa806a1a2/tumblr_oho7x2dqVL1v2s5upo1_250.jpg"],
	        
["film", ["Ghost in the Shell"], "2017", ["2020 10 10"], 5, ["ger"], ["action", "crime"], ["bini", "je"], [], ["Rupert Sanders"], ["Scarlett Johansson"], "https://64.media.tumblr.com/074261e36481e42821a3d357e9b222d4/4564edd2920cb435-9b/s250x400/cd7b749772a67894aed6a162117f54f288f34891.jpg"],
	        
["film", ["Monty Python and the Holy Grail", "Die Ritter der Kokosnuß"], "1975", ["2016 11 13"], 8, ["ger"], ["adventure", "comedy"], [], ["Monty Python"], ["Terry Gilliam", "Terry Jones"], [], "https://68.media.tumblr.com/40352374760c676b6d5c4f7802885774/tumblr_ogn2bl2vs91v2s5upo1_250.jpg"],
	        
["film", ["Life of Brian", "Das Leben des Brian"], "1979", ["2016 11 09"], 8, ["ger"], ["comedy"], [], ["Monty Python"], ["Terry Jones"], [], "https://66.media.tumblr.com/ea8d7f2e69f0c11cdfadd136936636a7/tumblr_ogn26cpceW1v2s5upo1_250.jpg"],
	        
["film", ["Joshua", "Joshua - Der Erstgeborene"], "2007", ["2016 10 21"], 4, ["ger"], ["drama", "horror"], [], [], ["George Ratliff"], ["Sam Rockwell", "Vera Farmiga"], "https://66.media.tumblr.com/b1913f8aff2ea592eca0f32fdd451c00/tumblr_ofeivrEhpu1v2s5upo1_250.jpg"],
	        
["film", ["Veer-Zaara"], "2004", ["2016 10 01"], 7, ["ger"], ["drama", "family", "bollywood"], [], [], ["Yash Chopra"], ["Shah Rukh Khan", "Preity Zinta", "Amitabh Bachchan", "Anupam Kher", "Rushad Rana"], "https://66.media.tumblr.com/8f872d6e0d0c5f35877272caed3038a7/tumblr_oee351MXEg1v2s5upo1_250.jpg"],
	        
["film", ["Super", "Super - Shut Up, Crime!"], "2010", ["2016 09 29"], 6, ["ger"], ["action", "comedy"], [], [], ["James Gunn"], ["Rainn Wilson", "Ellen Page", "Kevin Bacon", "Nathan Fillion"], "https://68.media.tumblr.com/debffe5d7b143c820f1f0c12de1e964c/tumblr_oe9xktVkAY1v2s5upo1_250.jpg"],
	        
["film", ["Blue Is the Warmest Colour", "Blau ist eine warme Farbe", "La vie d'Adèle"], "2013", ["2016 09 19"], 7, ["ger"], ["drama", "romance"], [], [], ["Abdellatif Kechiche"], [], "https://66.media.tumblr.com/eb6ccc87222129a2138074e4d3a27083/tumblr_odt62sCRSG1v2s5upo1_250.jpg"],
	        
["film", ["Hardcore Henry", "Hardcore"], "2015", ["2016 09 11"], 7, ["ger"], ["action", "adventure"], [], [], ["Ilya Naishuller"], [], "https://66.media.tumblr.com/66dc8a312a00f29372cc05321fc9e7d5/tumblr_odcnp7iODM1v2s5upo1_250.jpg"],
	        
["film", ["About Cherry", "Cherry - Wanna Play?"], "2012", ["2016 09 04"], 6, ["ger"], ["drama"], [], [], ["Stephen Elliott"], ["James Franco", "Heather Graham"], "https://66.media.tumblr.com/1d6000d43a86c4364f58eec847febbb4/tumblr_od1bg7QjIB1v2s5upo1_250.jpg"],
	        
["film", ["Sharktopus vs. Pteracuda", "Sharktopus vs Pteracuda - Kampf der Urzeitgiganten"], "2014", ["2016 09 03"], 3, ["ger"], ["action", "adventure"], ["nico", "bini"], [], ["Kevin O'Neill"], ["Conan O'Brien"], "https://68.media.tumblr.com/a26a61f047b584c808a0ee0acfc22033/tumblr_ocxur4PcNU1v2s5upo1_250.jpg"],
	        
["film", ["Salvation Boulevard"], "2011", ["2016 08 30"], 5, ["ger"], ["comedy", "crime"], [], [], ["George Ratliff"], ["Pierce Brosnan", "Ed Harris", "Isabelle Fuhrman"], "https://66.media.tumblr.com/7a4eee571605ac8cdf99589a7c2ca1ab/tumblr_ocqewzYPmG1v2s5upo1_250.jpg"],
	        
["film", ["The Secret Garden", "Der geheime Garten"], "1993", ["2016 08 29"], 5, ["eng"], ["drama", "family"], [], [], ["Agnieszka Holland"], [], "https://68.media.tumblr.com/a3e22e815c94bfe5314ba8b5e3458e54/tumblr_ocpwshuUAn1v2s5upo1_250.jpg"],
	        
["film", ["Matilda"], "1996", ["2016 08 28"], 6, ["ger"], ["comedy", "family"], [], [], ["Danny DeVito"], ["Mara Wilson", "Danny DeVito"], "https://68.media.tumblr.com/c05cb3395191a69956c56c2111ca85ec/tumblr_ocmxg7gkO31v2s5upo1_250.jpg"],
	        
["film", ["The Liability", "Last Hitman - 24 Stunden in der Hölle"], "2012", ["2016 08 28"], 6, ["ger"], ["comedy", "crime"], [], [], ["Craig Viveiros"], ["Talulah Riley", "Tim Roth"], "https://66.media.tumblr.com/5bf3231fbb7eec82bdf731fdd8f5fc8b/tumblr_ocmr22dNg71v2s5upo1_250.jpg"],
	        
["film", ["Just Like Heaven", "Solange Du da bist"], "2005", ["2016 08 28"], 8, ["ger"], ["comedy", "drama"], [], [], ["Mark Waters"], ["Reese Witherspoon", "Mark Ruffalo"], "https://68.media.tumblr.com/81f9db966bb110bf534ff802d1576034/tumblr_ocmmitLNan1v2s5upo1_250.jpg"],
	        
["film", ["Aquamarine", "Aquamarine - Die vernixte erste Liebe"], "2006", ["2016 08 28"], 6, ["ger"], ["comedy", "family"], [], [], ["Elizabeth Allen Rosenbaum"], ["Emma Roberts"], "https://68.media.tumblr.com/d841a8e6283e6f4f70a0b209bdd6b69d/tumblr_ocmb0hO1xW1v2s5upo1_250.jpg"],
	        
["film", ["Singin' in the Rain", "Du sollst mein Glücksstern sein"], "1952", ["2016 08 20"], 3, ["eng"], ["comedy", "musical"], [], [], ["Stanley Donen", "Gene Kelly"], [], "https://68.media.tumblr.com/32b79a6cf3055503dea1aaf8b96cf76c/tumblr_oc7tik0ovg1v2s5upo1_250.jpg"],
	        
["short", ["Sense8: Creating the World", "Sense8: Eine Welt wird Erschaffen"], "2015", ["2020 10 11"], 5, ["ger"], ["documentary"], [], ["Netflix"], ["Josh Oreck", "Lana Wachowski"], ["Naveen Andrews", "Doona Bae", "Jamie Clayton", "Tina Desai", "Daryl Hannah", "Alfonso Herrera", "Eréndira Ibarra", "Miguel Ángel Silvestre", "Brian J. Smith"], "https://66.media.tumblr.com/2298a164c04d888fcb8365b04bb45291/tumblr_pzpvx4YMJg1v2s5upo1_250.jpg"],
	        
["film", ["Grease"], "1978", ["2016 08 12"], 8, ["ger"], ["musical", "romance"], [], [], ["Randal Kleiser"], ["John Travolta"], "https://66.media.tumblr.com/822a31454b0d5a53c1b0f758e0f0e2e1/tumblr_obuc7zYHyV1v2s5upo1_250.jpg"],
	        
["film", ["The Goonies", "Die Goonies"], "1985", ["2016 08 11", "2018 09 07"], 6, ["ger"], ["adventure", "comedy"], ["bini"], [], ["Richard Donner"], ["Sean Astin"], "https://66.media.tumblr.com/381d8e5ba4392d9e142d9de538795d79/tumblr_obpt57vtBP1v2s5upo1_250.jpg"],
	        
["film", ["Ballet Shoes"], "2007", ["2016 08 01"], 7, ["ger"], ["drama", "family"], [], [], ["Sandra Goldbacher"], ["Emma Watson", "Richard Griffiths", "Lucy Boynton"], "https://66.media.tumblr.com/17ef638bc1cbb1b06f2225b8b443c707/tumblr_ob9xdm3HXS1v2s5upo1_250.jpg"],
	        
["film", ["Goosebumps", "Gänsehaut"], "2015", ["2016 08 01"], 7, ["ger"], ["adventure", "comedy"], [], [], ["Rob Letterman"], ["Jack Black", "Dylan Minnette", "Odeya Rush", "Halston Sage", "Ella Wahlestedt"], "https://66.media.tumblr.com/950658e4f27fe37c0ea0b9d043f43cd3/tumblr_ob8tv872gs1v2s5upo1_250.jpg"],
	        
["film", ["Esther", "Die Bibel - Esther"], "1999", ["2016 07 27"], 5, ["eng"], ["biography", "drama"], [], [], ["Raffaele Mertes"], [], "https://66.media.tumblr.com/507e1e2b919157a0f78da9765e82b233/tumblr_oaze55JB9l1v2s5upo1_250.jpg"],
	        
["film", ["Wanted"], "2008", ["2016 07 25"], 7, ["ger"], ["action", "crime"], [], [], ["Timur Bekmambetov"], ["James McAvoy", "Morgan Freeman", "Angelina Jolie", "Thomas Kretschmann"], "https://68.media.tumblr.com/1c74b22af3d4da828e4a144dd7b156c9/tumblr_oavolpeJA11v2s5upo1_250.jpg"],
	        
["film", ["Abraham Lincoln: Vampire Hunter", "Abraham Lincoln Vampirjäger"], "2012", ["2016 07 23"], 7, ["ger"], ["action", "fantasy"], ["bini", "nico"], [], ["Timur Bekmambetov"], ["Anthony Mackie", "Alan Tudyk"], "https://66.media.tumblr.com/62901b32be451057ccb328ef425ed181/tumblr_oatwuuuvHR1v2s5upo1_250.jpg"],
	        
["film", ["Willy Wonka & the Chocolate Factory", "Charlie und die Schokoladenfabrik"], "1971", ["2016 07 18"], 7, ["eng"], ["family", "fantasy"], [], [], ["Mel Stuart"], [], "https://68.media.tumblr.com/3422aa25c752288b822ab2ef39e3fc20/tumblr_oakqccD51R1v2s5upo1_250.jpg"],
	        
["film", ["Breathe In", "Breathe in - Eine unmögliche Liebe"], "2013", ["2016 07 15"], 6, ["ger"], ["drama", "romance"], [], [], ["Drake Doremus"], ["Felicity Jones", "Mackenzie Davis", "Kyle MacLachlan"], "https://68.media.tumblr.com/b366d841f21174e3b85e5712ebfad4f8/tumblr_oadik4Kw0Y1v2s5upo1_250.jpg"],
	        
["film", ["Furry Vengeance", "Reine Fellsache"], "2010", ["2016 07 11"], 4, ["ger"], ["comedy", "family"], [], [], ["Roger Kumble"], ["Ken Jeong", "Skyler Samuels"], "https://68.media.tumblr.com/3b829b8924dc4221103ecee71d2ec658/tumblr_oa5wk2Pqth1v2s5upo1_250.jpg"],
	        
["film", ["Rise of the Planet of the Apes", "Planet der Affen: Prevolution"], "2011", ["2016 07 07"], 6, ["ger"], ["action", "drama"], [], ["Schule"], ["Rupert Wyatt"], ["James Franco", "John Lithgow", "Tom Felton"], "https://66.media.tumblr.com/aa56c2e79aed175254aaceab7be2be11/tumblr_o9yohyAAGo1v2s5upo1_250.jpg"],
	        
["film", ["The Book Thief", "Die Bücherdiebin"], "2013", ["2016 07 06", "2017 07 06"], 7, ["ger"], ["drama", "war"], [], ["Schule"], ["Brian Percival"], ["Heike Makatsch", "Geoffrey Rush"], "https://66.media.tumblr.com/41580d73f60910f1bd75dfb1f312f77e/tumblr_o9wl5j6aLu1v2s5upo1_250.jpg"],
	        
["film", ["The Gallows", "Gallows - Jede Schule hat ein Geheimnis"], "2015", ["2016 07 05"], 6, ["ger"], ["horror", "mystery"], [], ["Schule"], ["Travis Cluff", "Chris Lofing"], [], "https://66.media.tumblr.com/374675b1811304c46c9b4d3e7d31c8e8/tumblr_o9ulzkN3qm1v2s5upo1_250.jpg"],
	        
["film", ["On the Road", "On the Road - Unterwegs"], "2012", ["2016 07 04"], 5, ["ger"], ["adventure", "drama"], [], [], ["Walter Salles"], ["Kristen Stewart", "Amy Adams", "Kirsten Dunst", "Viggo Mortensen", "Steve Buscemi", "Joe Chrest"], "https://66.media.tumblr.com/56800f1b6f21a576eaa6963587b426e7/tumblr_o9t15mYCXt1v2s5upo1_250.jpg"],
	        
["film", ["The Kite Runner", "Drachenläufer"], "2007", ["2016 06 29"], 5, ["ger"], ["drama"], [], ["Schule"], ["Marc Forster"], [], "https://66.media.tumblr.com/5d2ca6e91a55c7e9a3e562e568fb3e4f/tumblr_o9jfzdjo4F1v2s5upo1_250.jpg"],
	        
["film", ["Ultraviolet"], "2006", ["2016 06 23"], 3, ["ger"], ["action", "sci-fi"], [], [], ["Kurt Wimmer"], ["Milla Jovovich"], "https://68.media.tumblr.com/fedb289a623c7464d3303623b002a0c1/tumblr_o98se0VCyy1v2s5upo1_250.jpg"],
	        
["film", ["Maladies"], "2012", ["2016 06 18"], 7, ["ger"], ["drama"], [], [], ["Carter"], ["James Franco"], "https://68.media.tumblr.com/99cac7c6187c59b01a6d23b018194843/tumblr_o8zhqkzeLG1v2s5upo1_250.jpg"],
	        
["film", ["Pan's Labyrinth", "Pans Labyrinth", "El laberinto del fauno"], "2006", ["2016 06 18"], 6, ["ger"], ["drama", "fantasy"], [], [], ["Guillermo del Toro"], [], "https://66.media.tumblr.com/f269f3a35bd8919e82df825cd358cec4/tumblr_o8z0mqMjv51v2s5upo1_250.jpg"],
	        
["film", ["Zombeavers", "Zombiber"], "2014", ["2016 06 04"], 5, ["ger"], ["comedy", "horror"], ["nico"], [], ["Jordan Rubin"], [], "https://68.media.tumblr.com/bee0a9364e93fa8ce39557e2e5cfcea2/tumblr_o88xiomdvq1v2s5upo1_250.jpg"],
	        
["film", ["Rock of Ages"], "2012", ["2016 05 29"], 4, ["ger"], ["comedy", "drama"], [], [], ["Adam Shankman"], ["Russell Brand", "Alec Baldwin", "Bryan Cranston", "Tom Cruise"], "https://68.media.tumblr.com/ade55257d8a736975114a26a1c4ba3a4/tumblr_o7xsn9n5XC1v2s5upo1_250.jpg"],
	        
["film", ["Paranoia", "Paranoia - Riskantes Spiel"], "2013", ["2016 05 28"], 5, ["ger"], ["drama", "thriller"], [], [], ["Robert Luketic"], ["Liam Hemsworth", "Gary Oldman", "Harrison Ford", "Josh Holloway"], "https://66.media.tumblr.com/8f905afb816032aacf9c357539a0d5c6/tumblr_o7whiospqw1v2s5upo1_250.jpg"],
	        
["film", ["Elysium"], "2013", ["2016 05 27"], 7, ["ger"], ["action", "drama"], [], [], ["Neill Blomkamp"], ["Matt Damon", "Jodie Foster"], "https://66.media.tumblr.com/17faa8ffb2d7c9f8a3cdfd6ac87ff25b/tumblr_o7urf54ndb1v2s5upo1_250.jpg"],
	        
["film", ["Whip It", "Roller Girl"], "2009", ["2016 05 16"], 7, ["ger"], ["drama", "sport"], [], [], ["Drew Barrymore"], ["Ellen Page", "Kristen Wiig"], "https://66.media.tumblr.com/49a0d8801f2b44f4d4d432931b15b335/tumblr_o7a034Btf01v2s5upo1_250.jpg"],
	        
["film", ["Neighbors", "Bad Neighbors"], "2014", ["2016 05 16"], 6, ["ger"], ["comedy"], ["bini", "nico"], [], ["Nicholas Stoller"], ["Seth Rogen", "Rose Byrne", "Zac Efron", "Dave Franco", "Halston Sage", "Christopher Mintz-Plasse", "Jake Johnson"], "https://68.media.tumblr.com/e6fc6fa6313076ac4eb4ae6a16b5ba57/tumblr_o7a00dR6lX1v2s5upo1_250.jpg"],
	        
["film", ["Divergent", "Die Bestimmung - Divergent"], "2014", ["2016 05 14"], 7, ["ger"], ["action", "adventure"], [], ["Divergent"], ["Neil Burger"], ["Shailene Woodley", "Ansel Elgort"], "https://68.media.tumblr.com/5b1ddf86ce07ab2e01dc47a8a3c48d27/tumblr_o76acxxLVg1v2s5upo1_250.jpg"],
	        
["film", ["Angels of Sex", "The Sex of Angels", "El sexo de los ángeles"], "2012", ["2016 05 14"], 8, ["eng"], ["drama", "romance"], [], [], ["Xavier Villaverde"], ["Astrid Bergès-Frisbey"], "https://66.media.tumblr.com/41cf57b607cdaa52fbf9ea602251f397/tumblr_o768kbs4zP1v2s5upo1_250.jpg"],
	        
["short", ["Camp Belvidere"], "2014", ["2016 05 05"], 4, ["eng"], ["drama"], [], [], ["Astrid Ovalles", "Oriana Oppice"], [], "https://68.media.tumblr.com/8e7b75da97aae419159417f7e4064a12/tumblr_o6tlq7XLU51v2s5upo1_250.jpg"],
	        
["film", ["Mr. Peabody & Sherman", "Die Abenteuer von Mr. Peabody & Sherman"], "2014", ["2016 04 24"], 4, ["ger"], ["animation", "adventure"], [], [], ["Rob Minkoff"], [], "https://40.media.tumblr.com/33bdc0cf239628096c59a2c25fc3b22c/tumblr_o651m9EXn41v2s5upo1_250.jpg"],
	        
["film", ["Kick Ass Girls", "Kick Ass Girls", "Bao 3 qiao jiao wa"], "2013", ["2016 04 17"], 3, ["eng"], ["action", "comedy"], [], [], ["Goo-Bi GC"], [], "https://49.media.tumblr.com/99be78c896d4d7cebe6d9383e3a6ada0/tumblr_o5ru0pOWL91v2s5upo1_250.jpg"],
	        
["film", ["Perfume: The Story of a Murderer", "Das Parfum - Die Geschichte eines Mörders"], "2006", ["2016 04 04"], 4, ["ger"], ["crime", "drama"], [], ["Schule"], ["Tom Tykwer"], ["Dustin Hoffman", "Alan Rickman"], "https://40.media.tumblr.com/112deec925dd6a5aa2ede7e8cab5a7ae/tumblr_o5czaumakV1v2s5upo1_250.jpg"],
	        
["film", ["John Carter", "John Carter: Zwischen zwei Welten"], "2012", ["2016 03 19"], 4, ["ger"], ["action", "adventure"], [], [], ["Andrew Stanton"], ["Lynn Collins", "Willem Dafoe", "Mark Strong", "Bryan Cranston"], "https://49.media.tumblr.com/272b42cd23289f7af00995004400e462/tumblr_o4aex2y82i1v2s5upo1_250.jpg"],
	        
["film", ["Detachment"], "2011", ["2016 01 31"], 10, ["ger"], ["drama"], [], [], ["Tony Kaye"], ["Adrien Brody", "Bryan Cranston"], "https://49.media.tumblr.com/2afb69904baeee9d3b9f3823b3730403/tumblr_o1ticajuTx1v2s5upo1_250.jpg"],
	        
["film", ["It Follows"], "2014", ["2016 01 29"], 7, ["ger"], ["horror", "mystery"], [], [], ["David Robert Mitchell"], [], "https://49.media.tumblr.com/ac52b4abe789a78e992f6b673a73b1c7/tumblr_o1pw5sLA821v2s5upo1_250.jpg"],
	        
["film", ["The Happening"], "2008", ["2016 01 23"], 5, ["ger"], ["drama", "mystery"], ["bini", "nico", "sai"], [], ["M. Night Shyamalan"], ["Mark Wahlberg", "Zooey Deschanel", "John Leguizamo", "Betty Buckley"], "https://49.media.tumblr.com/132bbe9011223cd8d579661ba92f90ff/tumblr_o1gxahtSj81v2s5upo1_250.jpg"],
	        
["film", ["Election"], "1999", ["2015 09 16"], 5, ["ger"], ["comedy", "drama"], [], [], ["Alexander Payne"], ["Reese Witherspoon"], "https://68.media.tumblr.com/fa1e69953d869a5150eedd91475ba5cb/tumblr_oov15yd3271v2s5upo1_250.jpg"],
	        
["film", ["Ocean's Eleven"], "2001", ["2016 02 04"], 7, ["ger"], ["crime", "thriller"], [], ["Ocean's"], ["Steven Soderbergh"], ["George Clooney", "Bernie Mac", "Brad Pitt", "Matt Damon", "Julia Roberts", "Don Cheadle"], "https://49.media.tumblr.com/1811709df5b6221319bdcada72df6b3a/tumblr_o21hgqinxh1v2s5upo1_250.jpg"],
	        
["film", ["Ocean's Twelve"], "2004", ["2016 02 04"], 7, ["ger"], ["crime", "thriller"], [], ["Ocean's"], ["Steven Soderbergh"], ["Brad Pitt", "George Clooney", "Julia Roberts", "Bernie Mac", "Don Cheadle", "Jared Harris", "Matt Damon", "Bruce Willis"], "https://40.media.tumblr.com/2531d637ad743bbba5177ba59889c334/tumblr_o21hjmuplI1v2s5upo1_250.jpg"],
	        
["film", ["Ocean's Thirteen", "Ocean's 13"], "2007", ["2016 02 06"], 7, ["ger"], ["action", "crime"], [], ["Ocean's"], ["Steven Soderbergh"], ["George Clooney", "Brad Pitt", "Matt Damon", "Don Cheadle", "Bernie Mac", "Joe Chrest"], "https://49.media.tumblr.com/c8c5ad3dfafd2f2b605241b993cdb55f/tumblr_o2aq5llQgm1v2s5upo1_250.jpg"],
	        
["film", ["The Maze Runner", "Maze Runner - Die Auserwählten im Labyrinth"], "2014", ["2016 05 10", "2016 09 10", "2017 08 05"], 8, ["ger"], ["action", "mystery"], ["jessie", "sai", "bini", "nico"], ["Maze Runner"], ["Wes Ball"], ["Thomas Brodie-Sangster", "Will Poulter", "Kaya Scodelario"], "https://68.media.tumblr.com/e5cd215db485cdb5865fdd9f7529b0bb/tumblr_o6z0u5t3D31v2s5upo1_250.jpg"],
	        
["film", ["Maze Runner: The Scorch Trials", "Maze Runner - Die Auserwählten in der Brandwüste"], "2015", ["2016 05 10", "2017 08 06", "2018 06 02"], 7, ["ger"], ["action", "adventure"], ["jessie", "sai", "bini", "nico"], ["Maze Runner"], ["Wes Ball"], ["Kaya Scodelario", "Thomas Brodie-Sangster", "Alan Tudyk"], "https://68.media.tumblr.com/e2867a17875db4aa5373064363b8cae8/tumblr_o70vs8dZgP1v2s5upo1_250.jpg"],
	        
["film", ["Sherlock Holmes"], "2009", ["2016 05 29", "2016 10 19", "2017 07 20", "2018 03 07"], 9, ["ger"], ["action", "adventure"], [], ["Sherlock Holmes", "fav"], ["Guy Ritchie"], ["Robert Downey Jr.", "Rachel McAdams", "Mark Strong", "Jude Law"], "https://66.media.tumblr.com/3b03ca044ab3248a0e4b4292ff22e9a7/tumblr_o7zwr8yEKB1v2s5upo1_250.jpg"],
	        
["film", ["Sherlock Holmes: A Game of Shadows", "Sherlock Holmes - Spiel im Schatten"], "2011", ["2016 05 30", "2018 07 26", "2019 09 18"], 9, ["ger", "eng"], ["action", "adventure"], [], ["Sherlock Holmes", "Netflix", "fav"], ["Guy Ritchie"], ["Robert Downey Jr.", "Jude Law", "Noomi Rapace", "Rachel McAdams", "Jared Harris", "Stephen Fry"], "https://68.media.tumblr.com/a6f4f97c4a99d895cf50feb151c7623c/tumblr_o81o7cc2WL1v2s5upo1_250.jpg"],
	        
["film", ["Isi & Ossi"], "2020", ["2020 10 12"], 8, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["Oliver Kienle"], ["Lisa Vicari"], "https://64.media.tumblr.com/0185fee186caed73f134c23cd9c0691f/0d23c573ff9d8992-aa/s250x400/19becf5a1ae3e47aeb60c082833b927057e4f9d2.jpg"],
	        
["film", ["High School Musical"], "2006", ["2016 09 05"], 6, ["ger"], ["comedy", "drama"], ["bini"], ["High School Musical"], ["Kenny Ortega"], ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale", "Olesya Rulin"], "https://66.media.tumblr.com/aa5a0ebff5a9eae7c2caf2afa49d9cd8/tumblr_od1c4pCH8s1v2s5upo1_250.jpg"],
	        
["film", ["High School Musical 2", "High School Musical 2: Singt alle oder keiner!"], "2007", ["2016 09 06"], 6, ["ger"], ["comedy", "drama"], ["bini"], ["High School Musical"], ["Kenny Ortega"], ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale", "Olesya Rulin", "Miley Cyrus"], "https://66.media.tumblr.com/d751a95748c33aa4f43fb7a108c05ea6/tumblr_od3kchP53O1v2s5upo1_250.jpg"],
	        
["film", ["Pippi in the South Seas", "Pippi in Taka-Tuka-Land", "Pippi Långstrump på de sju haven"], "1970", ["2017 04 11"], 7, ["ger"], ["adventure", "comedy"], [], ["Pippi"], ["Olle Hellbom"], ["Inger Nilsson", "Maria Persson", "Pär Sundberg"], "https://68.media.tumblr.com/bdacbc0341f6ded654556499df5fb2aa/tumblr_ooaksmvW5V1v2s5upo1_250.jpg"],
	        
["film", ["Night at the Museum: Secret of the Tomb", "Nachts im Museum - Das geheimnisvolle Grabmal"], "2014", ["2017 01 01"], 5, ["ger"], ["adventure", "comedy"], [], [], ["Shawn Levy"], ["Ben Stiller", "Robin Williams", "Owen Wilson", "Rami Malek", "Ben Kingsley", "Hugh Jackman"], "https://68.media.tumblr.com/e6a602c17edbef249f4d973e1945dfb3/tumblr_oj4eruClkU1v2s5upo1_250.jpg"],
	        
["film", ["Attack on Titan Crimson Bow and Arrow", "Attack on Titan: Crimson Arrows", "Gekijouban Shingeki no kyojin Zenpen: Guren no yumiya"], "2014", ["2017 06 18"], 7, ["jap"], ["anime", "action"], ["nico", "sai", "bini"], ["Attack on Titan"], ["Tetsurô Araki"], [], "https://68.media.tumblr.com/d33f4d29a7b2cc7d9b8abd168e62c00b/tumblr_os7woeG3Cs1v2s5upo1_250.jpg"],
	        
["film", ["Attack on Titan: The Wings of Freedom", "Attack on Titan: The Wings of Freedom", "Gekijôban Shingeki no Kyojin Kôhen: Jiyû no tsubasa"], "2015", ["2017 06 18"], 7, ["jap"], ["anime", "action"], ["nico", "bini", "sai"], ["Attack on Titan"], ["Tetsurô Araki"], [], "https://66.media.tumblr.com/883e0c0794a764ff31ebb003e82fce26/tumblr_ppuve2w4Ks1v2s5upo1_250.jpg"],
	        
["film", ["Attack on Titan Part 1", "Attack on Titan - Film 1", "Shingeki no kyojin"], "2015", ["2017 06 18"], 3, ["ger"], ["action", "adventure"], ["bini", "sai", "nico"], ["Attack on Titan"], ["Shinji Higuchi"], [], "https://66.media.tumblr.com/28637a05483a4ba3afcb3fa1bb4686de/tumblr_ppuvhvjDCI1v2s5upo1_250.jpg"],
	        
["film", ["The Three Investigators and the Secret of Skeleton Island", "Die drei ??? - Das Geheimnis der Geisterinsel"], "2007", ["2017 08 20"], 6, ["ger"], ["adventure", "family"], ["bini", "syl"], ["Die Drei ???"], ["Florian Baxmeyer"], [], "https://66.media.tumblr.com/7545efb0d0d18a27af7cc8f6deac9754/tumblr_pxrg1vlgSh1v2s5upo1_250.jpg"],
	        
["film", ["The Three Investigators and the Secret of Terror Castle", "Die drei ??? - Das verfluchte Schloss"], "2009", ["2017 08 21"], 6, ["ger"], ["adventure", "family"], ["bini", "syl"], ["Die Drei ???"], ["Florian Baxmeyer"], [], "https://66.media.tumblr.com/a7946d483045d65949db9904cd1ba015/tumblr_pxrg81cI4y1v2s5upo1_250.jpg"],
	        
["film", ["Hilfe, wir sind offline!"], "2016", ["2017 10 23"], 5, ["ger"], ["comedy"], [], [], ["Ingo Rasper"], [], "https://66.media.tumblr.com/6aa4e7b05a285f119e0e2599dd9f0312/462a8354759e7b65-f8/s250x400/a69ee17be24929225689f8d9df7a6c462ece598a.jpg"],
	        
["film", ["Vor Sonnenaufgang"], "1979", ["2017 11 05"], 5, ["ger"], ["drama"], [], [], ["Oswald Döpke"], [], "https://66.media.tumblr.com/c3bb4ae9a6cd1dc5d4fff276c52cdc76/6df7fc9c5e397263-3b/s250x400/e7757befebb8f27b2a8fce39e1f8dd7f3ec2f972.jpg"],
	        
["film", ["Frau Müller muss weg!"], "2015", ["2017 11 25"], 6, ["ger"], ["comedy"], ["je"], [], ["Sönke Wortmann"], ["Anke Engelke"], "https://66.media.tumblr.com/841deafeaca2817ca1025bb032efbb35/tumblr_pyefojnGEl1v2s5upo1_250.jpg"],
	        
["film", ["Die Feuerzangenbowle"], "1944", ["2017 12 20"], 6, ["ger"], ["comedy"], [], ["Schule"], ["Helmut Weiss"], [], "https://66.media.tumblr.com/8e29c18b3a25115f7dc328df1f731112/tumblr_pyv14dONDH1v2s5upo1_250.jpg"],

["film", ["Suicide Squad"], "2016", ["2018 07 15"], 6, ["ger"], ["action", "adventure"], ["nico"], ["Netflix"], ["David Ayer"], ["Will Smith", "Cara Delevingne"], "https://66.media.tumblr.com/421f26e9ea5188dec595e2d4ab38c04c/12e861d9046b93f6-91/s250x400/ab3f7a4448815f4d76dbd2774d3c573fba07bd4a.jpg"],

["film", ["The Chronicles of Narnia: The Voyage of the Dawn Treader", "Die Chroniken von Narnia - Die Reise auf der Morgenröte"], "2010", ["2019 04 06"], 6, ["ger"], ["adventure", "family"], [], ["Narnia", "Netflix"], ["Michael Apted"], ["Georgie Henley", "Skandar Keynes", "Ben Barnes", "Will Poulter", "Tilda Swinton", "Anna Popplewell"], "https://66.media.tumblr.com/24f7268b3298dbf4c4ae1a9122a2f3dd/0256992eb45e03c8-21/s250x400/bbb6924c2653086ef668b58fdb3f53e157a57de1.jpg"],

["series", ["Orange Is the New Black"], ["2013", "2019"], [["2018 03 04", "2019 04 29", "S1 - S6"]], 7, ["ger"], ["comedy", "crime"], [], ["Netflix", "dropped"], ["Jenji Kohan"], ["Laura Prepon", "Samira Wiley"], "https://66.media.tumblr.com/33e78130beb5a208717c0614aaf330d7/dbcf5d5d4b548d18-86/s250x400/b72bd942e9c00f9a4cbc70a7465d8f10ee4e0bc2.jpg"],

["series", ["Between"], ["2015", "2016"], [["2018 06 27", "2018 07 05", "S1 - S2"]], 5, ["ger"], ["drama", "mystery"], [], ["Netflix"], ["Michael McGowan"], ["Jennette McCurdy"], "https://66.media.tumblr.com/72d4b759d273d97b4514ac79d6a2d284/4ab65324a2a042c1-25/s250x400/36f43d8d6925a44cdded25548b7914ebe5c9623d.jpg"],

["series", ["Good Witch"], "2015 - ", [["2018 07 05", "S1E1"]], 0, ["ger"], ["comedy", "drama"], [], ["Netflix", "dropped"], ["Craig Pryce", "Sue Tenney"], ["Bailee Madison"], "https://66.media.tumblr.com/788055bf59238f8c19186a65ecd9eed8/4b4adcea981e78c4-f7/s250x400/3e8fbc39c032f5f7486494b7bfb0d452b2d1d5d0.jpg"],

["series", ["The Innocents"], "2018", [["2018 11 15", "S1E1"]], 0, ["ger"], ["drama", "horror"], [], ["Netflix", "dropped"], ["Hania Elkington", "Simon Duric"], ["Sorcha Groundsell"], "https://66.media.tumblr.com/00841169158b4d584dd0135f7718e501/39f8ca6a64a2394b-e5/s250x400/71c8460fcc77519a4e6526889e19324fef427325.jpg"],

["series", ["Better Than Us"], ["2018", "2019"], [["2019 08 27", "2019 08 31", "S1 - S1E6"]], 0, ["ger"], ["drama", "sci-fi"], [], ["Netflix", "dropped"], ["Alexander Kessel"], [], "https://66.media.tumblr.com/bf2da911b6f2cb7fd7345b679e165b69/b5e067530df585bc-5e/s250x400/c634aa8600ffcc168b260d25f13328fcbadd222b.jpg"],

["series", ["Mako Mermaids"], "2013 - ", [["2018 05 26", "S1 - S1E17"]], 4, ["ger"], ["adventure", "comedy"], ["bini"], ["Netflix", "dropped"], ["Jonathan M. Shiff", "Mark Shirrefs", "Sam Carroll"], ["Cariba Heine"], "https://66.media.tumblr.com/bcde6533a1d1b0660c5237ee6c88cb6c/cbe8ae356f8c7c34-2c/s250x400/2294dd1add5abccc35d92fdddb951ac8578da344.jpg"],

["series", ["Dear White People"], "2017", [["2018 05 23", "S1 - S1E3"]], 0, ["ger"], ["comedy", "drama"], [], ["Netflix", "dropped"], ["Justin Simien"], [], "https://64.media.tumblr.com/805f0ab7c862905d53e8b0cf3ca47edf/09ea76a0ccac52c2-1d/s250x400/f61732a5b86074e72c2b02d92d582c3acb72ad9f.jpg"],

["series", ["Orphan Black"], ["2013", "2017"], [["2018 01 22", "2018 01 28", "S1 - S1E4"]], 0, ["ger"], ["action", "drama"], [], ["Netflix", "dropped"], ["Kim Coghill", "Andrew De Angelis", "Jeff Detsky"], [], "https://66.media.tumblr.com/cd51d1188604f65b71ec5abbf1cae81d/fcee7ff769440fc9-b3/s250x400/9488c5e38f6aaf328bfd49bcff1ba457f916f28c.jpg"],

["series", ["A Series of Unfortunate Events", "Eine Reihe betrüblicher Ereignisse"], ["2017", "2019"], [["2017 10 10", "2017 10 12", "S1 - S1E2"]], 0, ["ger"], ["adventure", "comedy"], [], ["Netflix", "dropped"], ["Joshua Conkel", "Emily Fox", "Sigrid Gilmer"], ["Neil Patrick Harris", "Malina Weissman", "Matty Cardarople", "Nathan Fillion", "Joan Cusack", "Robbie Amell"], "https://66.media.tumblr.com/4099693c83184c7a15126d1235986716/fbfd34dd316c53c2-16/s250x400/8bccea571ca270d687c2d09319dfc61cad206e68.jpg"],

["film", ["The Last Witch Hunter"], "2015", ["2020 10 15"], 4, ["ger"], ["action", "adventure"], [], ["Netflix"], ["Breck Eisner"], ["Vin Diesel", "Rose Leslie", "Elijah Wood", "Ólafur Darri Ólafsson", "Michael Caine"], "https://64.media.tumblr.com/34529c008dba10e1a52d3464eccddd29/187a9419e6f17ebb-90/s250x400/a25c4b8527f8750d37c6204cab5b63a77f244754.jpg"],

["series", ["Candy Online"], "2019", [["2020 10 16", "2020 11 18", "S1E1-S1E2"]], 0, ["man"], [], [], ["Netflix", "dropped"], [], [], "https://64.media.tumblr.com/6f875a83a6e380cba20e1e5fce74070f/b4e9753e631c19a2-fa/s250x400/2c8032825e6bd6566cd9f7a1d291e5d98e15f22b.jpg"],

["film", ["Fantastic Beasts: The Crimes of Grindelwald", "Phantastische Tierwesen: Grindelwalds Verbrechen"], "2018", ["2020 10 16"], 6, ["ger"], ["adventure", "family"], [], ["Harry Potter", "Netflix"], ["David Yates"], ["Johnny Depp", "Carmen Ejogo", "Eddie Redmayne", "Callum Turner", "Jude Law", "Alison Sudol", "Claudia Kim", "Ólafur Darri Ólafsson"], "https://64.media.tumblr.com/7d27499772f45466df494174c9b0affa/adccec2fb135d417-ad/s250x400/4d8c0d5b74a03b5b413dcceeaa5942e219ed1bc6.jpg"],

["film", ["365 Days", "365 Days", "365 dni"], "2020", ["2020 10 16"], 3, ["ger"], ["drama", "romance"], [], ["Netflix", "dropped"], ["Barbara Bialowas", "Tomasz Mandes"], [], "https://64.media.tumblr.com/2c85edd45ebeb256d326495aabbd856a/eb98e46994706b23-cc/s250x400/cbcb89dbd1400195572e5190bbcf56acfd0fe402.jpg"],

["audiobook", ["Good Wives"], "1869", [["2020 10 21", "2020 11 23"]], 8, ["eng"], [], [], ["March-Trilogie"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/7f3d6feda05afd7018598432df30ad8f/b01ae36c85f5a2b5-80/s250x400/0246a1075a03acf0565518bfd1ab3fe41e9b8128.jpg"],

["film", ["I am here", "Ich bin immer für dich da!", "Main Hoon Na"], "2004", ["2020 10 26"], 6, ["hin"], ["action", "comedy", "bollywood"], ["bini"], [], ["Farah Khan"], ["Shah Rukh Khan", "Sushmita Sen", "Amrita Rao"], "https://64.media.tumblr.com/b0cdd5b36ab21c7927472b0ba3f26df2/c77b1b7cbfb69703-e8/s250x400/2d79b6abe2f007b1006bc4b51bf715a594b89ca5.jpg"],

["film", ["The Babysitter: Killer Queen"], "2020", ["2020 10 31"], 6, ["ger"], ["comedy", "horror"], ["bini"], ["Netflix"], ["McG"], ["Judah Lewis", "Samara Weaving", "Jenna Ortega", "Emily Alyn Lind", "Andrew Bachelor", "Robbie Amell", "Bella Thorne", "Hana Mae Lee"], "https://64.media.tumblr.com/2fdddf667d194b1d6b4e632f01f954ed/bcccd7b7533c156e-20/s250x400/25f93e87fbf70d5d90142d5451c5e48d2c03024d.jpg"],

["film", ["This Crazy Heart", "Dieses bescheuerte Herz"], "2017", ["2020 11 06"], 6, ["ger"], ["comedy", "drama"], ["syl", "bini"], ["Netflix"], ["Marc Rothemund"], ["Elyas M'Barek"], "https://64.media.tumblr.com/f2e2519180de5df4fa39242eb4f044e7/b586f67d0e2637a2-eb/s250x400/787ab39392e449537936e477573dd28a343e41bc.jpg"],

["film", ["Firebringer"], "2016", ["2020 11 10"], 9, ["eng"], ["comedy", "history", "musical"], [], ["StarKid"], ["Julia Albain", "Nick Lang"], ["Lauren Lopez", "Meredith Stepien", "Denise Donovan", "Lauren Walker", "Rachael Soglin", "Joey Richter", "Jaime Lyn Beatty", "Joe Walker", "Tiffany Williams", "Brian Holden", "Jamie Burns", "Clark Baxtresser"], "https://64.media.tumblr.com/de4235c06a4bfde26f73c7ee29dacb2d/95e669e372833627-2a/s250x400/05edbe20a3de0c564ed48caff5a01eeeb7d607e3.jpg"],

["film", ["Holidate"], "2020", ["2020 11 11"], 5, ["ger"], ["comedy", "romance"], [], ["Netflix"], ["John Whitesell"], ["Emma Roberts", "Luke Bracey", "Kristin Chenoweth", "Frances Fisher", "Andrew Bachelor", "Jessica Capshaw", "Jake Manley", "Nicola Peltz"], "https://64.media.tumblr.com/dcb8fa00f16bec72503da7d6fb6be81b/25377e20660de32b-5e/s250x400/8e48a77a3baff68647ece9ac1d753c7141d9299d.jpg"],

["series", ["Monthly Girls' Nozaki-kun", "Shojo-Mangaka Nozaki-kun", "Gekkan Shoujo Nozaki-kun"], "2014", [["2014 12 23", "2015 03 01", "S1"]], 9, ["jap"], ["comedy", "romance", "anime"], [], ["GSNK"], ["Ryohei Takeshita", "Mitsue Yamazaki", "Geisei Morita"], [], "https://64.media.tumblr.com/b598b8f848c18943eab0e96e647162f5/8d3e2767707880b4-6a/s250x400/5a6aaf80bbcf3f594024fabbcdbfa45b9b1b7ae8.jpg"],

["series", ["Wandering Son", "Hourou Musuko", "Hourou Musuko"], "2011", [["2014 12 25", "2015 03 29", "S1"]], 9, ["jap"], ["anime", "drama"], [], [], ["Mari Okada", "Takako Shimura"], [], "https://64.media.tumblr.com/c14508b3671445d20cd6179c829ae90a/968e5f4256cd086a-8a/s250x400/32f583523263058bfd029fdd38bb2190f3664595.jpg"],

["series", ["Haikyuu!!"], ["2014", "2020"], [["2015 02 03", "2016 05 31", "S1"], ["2015 10 03", "", "S2E1-S2E19"]], 8, ["jap"], ["comedy", "drama", "anime"], [], ["dropped"], ["Haruichi Furudate"], [], "https://64.media.tumblr.com/838d9259500a3249f3ef5fad98e8cb73/3594fd2da779e5d0-62/s250x400/92d839170c270cc8e5f14518b8000ab147e0b828.jpg"],

["short", ["On Your Mark"], "1995", ["2017 01 15"], 6, ["jap"], ["anime"], ["bini"], ["Ghibli"], ["Hayao Miyazaki"], [], "https://64.media.tumblr.com/284f6e9df40de551249740993dac0026/de6f2e4ba9ff6a98-c9/s250x400/c29878fc959b894e60eeff8cf71a7e413bc11eef.jpg"],

["series", ["Oban Star-Racers"], "2006", [["2015 03 15", "2015 05 03", "S1"]], 7, ["ger"], ["anime", "action"], [], [], ["Savin Yeatman-Eiffel"], [], "https://64.media.tumblr.com/5a69f68482000c3d3bc49e1d9f913bfa/8778f65fc372df03-37/s250x400/66f4dc32f1ab67c74827bf8abb8310d191667d34.jpg"],

["series", ["Kantai Collection: Kan Colle"], "2015", [["2015 03 01", "2015 03 27", "S1"]], 9, ["jap"], ["anime", "action"], [], [], ["Jukki Hanada", "Kristen McGuire"], [], "https://64.media.tumblr.com/9f432ee003542cc7d6f1aea7c42d8b79/ec48220645d3149f-09/s250x400/a0cc00bcc3c5eb8d310df89fd2463d9fb89e96df.jpg"],

["series", ["I Can't Understand What My Husband Is Saying", "I Can't Understand What My Husband Is Saying", "Danna ga Nani wo Itteiru ka Wakaranai Ken"], "2014", [["2015 02 14", "S1"], ["2015 04 04", "2015 07 12", "S2"]], 7, ["jap"], ["anime", "comedy"], [], [], ["Coolkyoushinja", "Itsuki Imazaki", "Shinpei Nagai"], [], "https://64.media.tumblr.com/0e5b0afd03becd284c943e574eb98a43/151c681fed742ec8-d6/s250x400/29c2159837f4eb6a6d3b5403930058081d0dbf91.jpg"],

["series", ["Urawa no Usagi-chan"], "2015", [["2015 05 30", "2015 07 12", "S1"]], 6, ["jap"], ["anime"], [], [], ["Mitsuyuki Ishibashi"], [], "https://64.media.tumblr.com/138523f7dcac0bff42e51167e93c64b3/5c3f7950b1d65006-07/s250x400/28adc52e874231d80b4d390d2490bac48e4bffc7.jpg"],

["series", ["Hibike! Euphonium"], "2015", [["2015 04 07", "2015 07 20", "S1"]], 7, ["jap"], ["anime", "comedy"], [], [], ["Jukki Hanada", "Ayano Takeda"], [], "https://64.media.tumblr.com/26f7c0fdd8d665f681708799f91d7d63/eaecc5d8fff6b344-2b/s250x400/6ab13912d0b5885e9c1feef226500204ed638220.jpg"],

["series", ["Kabaneri of the Iron Fortress", "Kabaneri of the Iron Fortress", "Kotetsujo no Kabaneri"], "2016", [["2016 04 10", "2017 02 03", "S1"]], 8, ["jap"], ["anime", "action"], [], [], ["Tetsurô Araki", "Hiroyuki Tanaka", "Hironori Aoyagi"], [], "https://64.media.tumblr.com/48ed858b3e8721211736ec06ac2e0dd5/99dcf775ae6fe13e-12/s250x400/3c556ee7e8021028154bb4fc65a40c76eeefe381.jpg"],

["series", ["Mikagura School Suite", "Mikagura School Suite", "Mikagura Gakuen Kumikyoku"], "2015", [["2015 05 25", "2015 08 30", "S1"]], 8, ["jap"], ["anime", "comedy"], [], [], ["John Burgmeier", "Jamie Marchi", "Monica Rial"], [], "https://64.media.tumblr.com/f18b2f93083f0f9f39d2a847d781413c/787d439623105281-41/s250x400/1f0aa0d87ce6d2e480760f0487ba3de185d777f1.jpg"],

["series", ["Himouto! Umaru-chan"], "2015", [["2015 10 02", "2016 06 03", "S1"]], 8, ["jap"], ["anime", "comedy"], [], [], ["Takashi Aoshima", "Kyle Jones", "Takamitsu Kono"], [], "https://64.media.tumblr.com/32f78a3543976f5b4ba1c30e09be5945/f4dbef4cf751ea95-d0/s250x400/2ec358178b196caba1561388a68b558dca03e538.jpg"],

["series", ["One Punch Man"], "2015", [["2015 09 20", "2015 12 20", "S1"]], 8, ["jap"], ["anime", "action"], [], [], ["Mike McFarland", "One", "Tomohiro Suzuki"], [], "https://64.media.tumblr.com/3870f2fafbd87c0b787641fbeeaa6ebc/93576afc0500227c-dc/s250x400/2c2e8a4dfd303b2a6df6ad5cd17c38a3445c9545.jpg"],

["series", ["Nichijou: My Ordinary Life", "Nichijou"], "2011", [["2013 12 27", "2015 02 01", "S1"], ["2017 08 02", "2017 10 02", "S1E1-S1E8"], ["2020 11 18", "2020 11 24", "S1E9-S1E26"]], 10, ["jap"], ["anime", "comedy"], [], ["fav"], ["Keiichi Arai", "Jukki Hanada", "Katsuhiko Muramoto"], [], "https://64.media.tumblr.com/fe21469e3477f89e8b85a683bc38ff38/7d30ed1865b4e8e5-d4/s250x400/492525bb7c4103ea6894612c5c0f73e8a6ec95a3.jpg"],

["series", ["Hori-san to Miyamura-kun"], ["2012", "2018"], [["2015 07 12", "S1E1-S1E3"], ["2020 11 16", "S1E4"]], 10, ["jap"], ["anime"], [], [], ["Shingo Natsume", "Erukin Kawabata", "Tetsuo Hirakawa", "Kazuya Aiura"], [], "https://64.media.tumblr.com/a63f24baf4a10788b522ac82e1f0decf/58b8ce4c7e33aac4-22/s250x400/b0dedd1a547ad15b09c4197cb48d90e8b8a897f6.jpg"],

["series", ["One Week Friends", "One Week Friends", "Isshuukan Friends"], "2014", [["2016 02 08", "2016 03 12", "S1E1-S1E3"], ["2020 11 29", "2020 12 18", "S1E4-S1E12"]], 5, ["jap"], ["anime", "comedy"], [], [], ["Matcha Hazuki", "Mariko Kunisawa", "Megumi Shimizu"], [], "https://64.media.tumblr.com/c45981d0156b292095493dc7e02b5c3b/4c81f18d50d51493-0d/s250x400/89cea57a9158f5abc7fc8e1efb321d5895f31c92.jpg"],

["series", ["Magi: The Labyrinth of Magic"], ["2012", "2014"], [["2017 04 07", "S1E1-S1E4"]], 0, ["jap"], ["anime", "action"], [], [], ["Shinobu Ohtaka", "Hiroyuki Yoshino"], [], "https://64.media.tumblr.com/5fd55c2beb6ba4fe885c143c2ebc5fc9/0cd2344305584ae0-57/s250x400/98e904a74e6b5689483e4b73b6e43f2d2ceb2218.jpg"],

["film", ["Black Friday"], "2020", ["2020 11 14"], 6, ["eng"], ["musical"], [], ["StarKid"], ["Nick Lang"], ["Dylan Saunders", "Angela Giarratana", "Lauren Lopez", "Joey Richter", "Kim Whalen", "Curt Mega", "Robert Manion", "Jon Matteson", "Kendall Nicole Yakshe", "Jeff Blim", "Corey Dorris", "Jaime Lyn Beatty", "James Tolbert"], "https://64.media.tumblr.com/32a75a345342182f94075acbf8caa03d/ffda59dd14b00a3c-a2/s250x400/288d97765a786cb5bc09505eb17b3fa5d5e76737.jpg"],

["book", ["Night School: Fracture"], "2013", [["2020 11 15", ""]], 6, ["eng"], [], [], ["Night School", "watching"], ["CJ Daugherty"], [], "https://64.media.tumblr.com/a9e7699368387bde78a2ec5b4423bdda/d19b697075db8b14-5f/s250x400/c4a95809ab88d6f3b7fd3efd34cdc9022c81fa56.jpg"],

["series", ["WataMote: No Matter How I Look at It, It's You Guys' Fault I'm Not Popular!", "WataMote: No Matter How I Look at It, It's You Guys' Fault I'm Not Popular!", "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!"], "2013", [["2018 01 01", "2018 01 02", "S1E1-S1E2"]], 0, ["jap"], ["anime", "comedy"], [], ["WataMote"], ["Nico Tanigawa"], [], "https://64.media.tumblr.com/ff06d00c8ead8c163f08a6503d734ad9/09b887819a34bada-42/s250x400/2c5b15b3bc8013d37cc94117e72192636c45dc5a.jpg"],

["series", ["Terror in Resonance", "Terror in Tokio", "Zankyô no teroru"], "2014", [["2014 11 14", "2015 05 14", "S1E1-S1E3"]], 5, ["jap"], ["anime", "drama"], [], ["dropped"], ["Shin'ichirô Watanabe", "Sayo Aoi", "Yuzuru Tachikawa"], [], "https://64.media.tumblr.com/829fa42796f294a0988732be1400fc03/726a3bdb7a4dc9b2-00/s250x400/25d871934b9c3d5fcb5834b26656cfe67857be87.jpg"],

["series", ["My Teen Romantic Comedy SNAFU", "My Teen Romantic Comedy SNAFU", "Yahari ore no seishun rabukome wa machigatteiru."], "2013 - ", [["2015 05 28", "S2E1"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Touko Machida", "Shotaro Suga", "Katsuhiko Takayama"], [], "https://64.media.tumblr.com/68cca8602889690dd8d4e65a2ae1bef4/397133657a1cee8f-b5/s250x400/ff61f2e1af4b58fb1fd4cfb768e4f04aa6a7f066.jpg"],

["series", ["Un-Go"], "2011", [["2015 03 26", "S1E1"]], 0, ["jap"], ["anime", "crime"], [], ["dropped"], ["Shô Aikawa", "Ango Sakaguchi"], [], "https://64.media.tumblr.com/48622d170422a1bb6a561701988fb573/645879eb4ce5390e-bf/s250x400/7a25eaa9c1524343d2df1275c17522f4e1b6393f.jpg"],

["series", ["Sword Art Online"], "2012 - ", [["2015 03 29", "S1E1-S1E2"]], 0, ["jap"], ["anime", "action"], [], ["dropped"], ["Reki Kawahara", "Yukito Kizawa", "Muneo Nakamoto"], [], "https://64.media.tumblr.com/e5c63a45a6e5be91b2d88dd669c14df6/982ea7955d630d47-32/s250x400/71cb72ae8e686f73faa3a7e17350992b53bc0e6b.jpg"],

["series", ["Strike Witches"], "2008 - ", [["2015 05 30", "S1E1"]], 0, ["jap"], ["anime", "action"], [], ["dropped"], ["Fumikane Shimada"], [], "https://64.media.tumblr.com/da489d574d78db238ee0f1baf3854358/38d6e9f055f5403a-28/s250x400/3d71d95c234efaf8fac6b7ffb02a7efd408d0e65.jpg"],

["series", ["Plastic Memories"], "2015", [["2015 04 06", "2015 04 24", "S1E1-S1E2"]], 5, ["jap"], ["anime", "drama"], [], ["dropped"], ["Naotaka Hayashi"], [], "https://64.media.tumblr.com/27ae58069b730dfba2b29e0ce05b2415/9988f5b368cd721e-75/s250x400/9b3a4db7f4b7913b8b039787182f0109573ff0da.jpg"],

["series", ["Monster Musume: Everyday Life with Monster Girls", "Die Monster Mädchen", "Monster Musume no Iru Nichijou"], "2015", [["2015 07 12", "2016 04 01", "S1E1-S1E6"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Kazuyuki Fudeyasu"], [], "https://64.media.tumblr.com/8806189b238b85a3aeedda058d570fdb/6308f7db1afef86a-59/s250x400/24a401e7355720cc92d031e3184db4f549817d97.jpg"],

["series", ["The Lost Village", "The Lost Village", "Mayoiga"], "2016", [["2016 04 03", "2017 02 03", "S1E1-S1E10"]], 5, ["jap"], ["anime", "drama"], [], ["dropped"], ["Keigo Koyanagi", "Mari Okada", "Shinsuke Ônishi"], [], "https://64.media.tumblr.com/d54950fe49ce36aa833de87b1fda7976/8974d9f479872b8b-8f/s250x400/b185c79e4d0f1e278e171e65fb5e9de2c759970e.jpg"],

["series", ["The Hentai Prince and the Stony Cat.", "The Hentai Prince and the Stony Cat.", "Hentai ôji to warawanai neko."], "2013", [["2016 04 17", "2016 12 28", "S1E1-S1E2"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Michiko Itô", "Sou Sagara"], [], "https://64.media.tumblr.com/f7675ce0d8fb40ce75664ef8b3931edf/b9ec8e91b2c2ef9c-8d/s250x400/84b3b84bda253093a98e39ed1c5effb47dfa4c7a.jpg"],

["series", ["My First Girlfriend Is a Gal", "My First Girlfriend Is a Gal", "Hajimete No Gal"], "2017", [["2017 08 02", "S1E1"]], 6, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Hiroyuki Furukawa", "Daiji Iwanaga", "Yusaku Saotome"], [], "https://64.media.tumblr.com/262115bcaad0a61f44f5fe996639cadd/99562305c8e34483-10/s250x400/8d09dca3ceea99e6637830210d54c11667310d5c.jpg"],

["series", ["Girls & Panzer", "Girls und Panzer", "Girls & Panzer"], ["2012", "2013"], [["2015 08 03", "S1E1"]], 0, ["jap"], ["anime", "action"], [], ["dropped"], ["Reiko Yoshida"], [], "https://64.media.tumblr.com/362e77173e0f8570ddb7f4f16e71782b/e7778c1b0f7ec43b-6e/s250x400/a390c025159e1c67c08c6d5c786d861b2dca40fd.jpg"],

["series", ["Flying Witch"], "2016", [["2016 05 11", "2017 02 03", "S1E1-S1E9"]], 6, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Chihiro Ishizuka", "Hitomi Mieno", "Hiroko Fukuda"], [], "https://64.media.tumblr.com/132f04d0308530b9053af9ba069ce4e0/2b353153c44817d5-17/s250x400/4029f782ed2e39ae57f50a89ae580e18abb8fdf7.jpg"],

["series", ["Death Parade"], "2015", [["2015 02 14", "S1E1"]], 0, ["jap"], ["anime", "drama"], [], ["dropped"], ["Yuzuru Tachikawa", "Jun Shishido", "Yosuke Hatta"], [], "https://64.media.tumblr.com/296f32c126174753e7692be8c479d7ab/d10c4480e080cf8c-bc/s250x400/b85e478d975d255835960ff9ba39ab546f9ff5ae.jpg"],

["series", ["My Hero Academia", "Boku no Hero Academia", "Boku no hîrô akademia"], "2016 - ", [["2016 06 25", "S1E1-S1E11"]], 5, ["jap"], ["anime", "action"], [], ["dropped"], ["Kôhei Horikoshi", "Yôsuke Kuroda"], [], "https://64.media.tumblr.com/3e8c6c2183a038483327f89fb2b9ae7b/d58f2168d28d9ea7-11/s250x400/6e86c07dda557cb35009c3751dcd82ade473aa0e.jpg"],

["series", ["Barakamon"], "2014 - ", [["2015 08 14", "S1E1-S1E5"]], 0, ["jap"], ["anime", "comedy"], [], ["dropped"], ["Masaki Tachibana", "Taketomo Ishikawa", "Shinya Iino"], [], "https://64.media.tumblr.com/30f10afd707bb167b644f9e136e9d086/d928de7b354c7061-0a/s250x400/7295fef336a4b2c076bac675efd4169a4a797e9c.jpg"],

["film", ["Anohana the Movie: The Flower We Saw That Day", "AnoHana: Die Blume, die wir an jenem Tag sahen", "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai. Movie"], "2013", ["2015 05 01"], 0, ["jap"], ["anime", "adventure"], [], ["dropped"], ["Tatsuyuki Nagai"], [], "https://64.media.tumblr.com/7b1e42c832534272149b1c1441c5fd01/1395997a92e7cab4-66/s250x400/d451ed89ed47c501602354f05ef998048e112038.jpg"],

["series", ["Wakaba Girl", "Wakaba Girl", "Wakaba*Girl"], "2015 - ", [["2015 07 13", "S1E1-S1E2"]], 0, ["jap"], ["anime"], [], [], ["Jukki Hanada", "Yui Hara"], [], "https://64.media.tumblr.com/ae906e19fd97dd516ea1797ab4aea0e5/cc07ea1f72301543-08/s250x400/e660b2066331d9f1aeaab4e2282b2473d75c0676.jpg"],

["series", ["Stella Women's Academy, High School Division Class C³", "Stella Women's Academy, High School Division Class C³", "Stella Jogakuin Koutou-ka C³-bu"], "2013", [["2015 05 31", "2015 09 23", "S1E1-S1E7"]], 9, ["jap"], ["anime", "comedy"], [], [], ["Ikoma"], [], "https://64.media.tumblr.com/5228bc36987a92888e88f83db0f3aa7f/167e37f41252d532-ad/s250x400/9ee7dd11d193fe6b1cdbcad10bcfbcab9c7cdce3.jpg"],

["series", ["Sound of the Sky", "Sound of the Sky", "So Ra No Wo To"], "2010", [["2015 05 29", "S1E1"]], 0, ["jap"], ["anime", "comedy"], [], [], ["Paradores", "Hiroyuki Yoshino"], [], "https://64.media.tumblr.com/4ffaa8b5c41543c296f6e9b9652f8e87/58849f268738b7fb-ca/s250x400/4224abae1d720f6441bdc674732dc7a54ac9b78d.jpg"],

["series", ["God Eater"], "2015", [["2015 10 22", "2015 11 08", "S1E1-S1E2"]], 0, ["jap"], ["anime", "action"], [], [], ["Takayuki Hirao", "Kei Tsunematsu"], [], "https://64.media.tumblr.com/613a8b0bdc557edbbeca8c1421ab5d9f/b6c7d20e3f6a4431-cd/s250x400/c667a2cc7f5953ee5b45251d86d17ce84419b501.jpg"],

["series", ["Bakemonogatari"], "2009", [["2015 04 02", "2015 04 11", "S1E1-S1E5"]], 0, ["jap"], ["anime", "action"], [], [], ["Nisio Isin", "Yukito Kizawa", "Muneo Nakamoto"], [], "https://64.media.tumblr.com/bbe2cedeb36c20e65809a0d481529585/e94f9507e4dea04a-f8/s250x400/72d51f0654873f768b8f5cb26bb83c2572774ea6.jpg"],

["series", ["Million Doll"], "2015", [["2015 07 12", "S1E1"]], 0, ["jap"], ["anime", "music"], [], ["dropped"], [], [], "https://64.media.tumblr.com/272565aee1cb0cb11ec8d832d15cda8f/724265a84be421cf-58/s250x400/a840334da5e6174681c474c85450d89005f295f2.jpg"],

["series", ["One Punch Man Specials"], ["2015", "2016"], [["2016 04 10", "2016 05 14", "S1E1-S1E2"]], 4, ["jap"], ["anime"], [], ["dropped"], [], [], "https://64.media.tumblr.com/fa1470b3e4e03fc2b9cf32bfc5e7685b/9995305b89b2349e-0a/s250x400/c1dcef14024253c9746382de46660e8f774d774e.jpg"],

["series", ["Sound! Euphonium Specials", "Hibike! Euphonium: Suisougaku-bu no Nichijou", "Hibike! Euphonium: Suisougaku-bu no Nichijou"], "2015", [["2015 09 26", "S1E1-S1E2"], ["2020 11 26", "2020 11 29", "S1E3-S1E7"]], 7, ["jap"], ["anime"], [], [], [], [], "https://64.media.tumblr.com/543032b98e59a7967966999c2978873e/563804548e67c0ba-d4/s250x400/b3c1b24e221ad898de46432f3770f0296af6acb1.jpg"],

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

["audiobook", ["Little Men"], "1871", [["2020 11 30", ""]], 8, ["eng"], [], [], ["March-Trilogie", "watching"], ["Louisa May Alcott"], [], "https://64.media.tumblr.com/183bf87c0b1f3f8ca48b176b2ff3851c/a06c379b6c7a588c-e0/s250x400/bddf48ffc7d64ce47f8f25fa27a580ca0efb5952.jpg"],

["series", ["Dash & Lily"], "2020", [["2020 11 27", "2020 11 30", "S1"]], 8, ["ger"], ["comedy", "drama"], [], ["Netflix"], ["Rachel Cohn", "David Levithan", "Lauren Moon"], ["Austin Abrams", "Midori Francis", "Dante Brown", "Troy Iwata", "Keana Marie", "Patrick Vaill", "Michael Park"], "https://64.media.tumblr.com/009e36fbb4c3a950d53376fa4810855c/bdf61e2f07ebd615-8d/s250x400/bca2ea4bb589a8eb190267b3e4cfe399acb3e40b.jpg"],

["series", ["Never Have I Ever", "Noch nie in meinem Leben ..."], "2020", [["2020 12 01", "2020 12 07", "S1"]], 7, ["ger"], ["comedy"], [], ["Netflix"], ["Lang Fisher", "Mindy Kaling"], ["Maitreyi Ramakrishnan", "Darren Barnet", "Adam Shapiro", "Iqbal Theba"], "https://64.media.tumblr.com/0ab55504d8cb69c49a4e329cff0bea82/ea32689669f5c17a-58/s250x400/509388dce734b2135fa474ff2839329cd1285968.jpg"],

["film", ["Jurassic Park"], "1993", ["2020 12 03"], 7, ["ger"], ["action", "adventure"], ["bini", "syl", "je"], ["Jurassic Park", "DVD"], ["Steven Spielberg"], ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "BD Wong", "Samuel L. Jackson"], "https://64.media.tumblr.com/677119acfe9761f64d9adf79ad569595/297f5ab82df6a1a2-07/s250x400/9f34de7bcafefe97dd99a3d0c2f4df93468175d2.jpg"],

["series", ["Dragon's Dogma"], "2020", [["2020 12 09", "S1"]], 4, ["ger"], ["animation", "action"], [], ["Netflix"], ["Kurasumi Sunayama"], [], "https://64.media.tumblr.com/8d0f03e343dbc153bd123f2e032085a5/e3df557906169e51-99/s250x400/09bcf1a00a3c92a47e3e05dcdaaaeaa868dd3686.jpg"],
	        
["film", ["Detective Conan 22: Zero The Enforcer", "Detektiv Conan 22: Zero der Vollstrecker", "Meitantei Conan 22: Zero no Shikkônin"], "2018", ["2020 12 13"], 5, ["ger"], ["anime", "action", "drama", "mystery", "police", "shounen"], ["bini"], ["Conan"], ["Yuzuru Tachikawa"], [], "https://64.media.tumblr.com/24895b09f7df697c27748979c6f86c74/51797da93d38f44c-1e/s250x400/570b9e7bd006cbdca545aa628151923bd390e6e1.jpg"],

["series", ["Baby"], ["2018", "2020"], [["2020 12 14", "", "S1"]], 0, ["ger"], ["drama"], [], ["Netflix", "watching"], ["Antonio Le Fosse", "Giacomo Mazzariol", "Marco Raspanti"], ["Benedetta Porcaroli", "Alice Pagani", "Riccardo Mandolini", "Chabeli Sastre"], "https://64.media.tumblr.com/0d4d0459f10a1ef78a1ad6db491e148b/3857c16f19c89358-10/s250x400/2b9f864c0edddfd1731a09a28714c82e65adf724.jpg"],

["film", ["Rose Island", "Die unglaubliche Geschichte der Roseninsel", "L'incredibile storia dell'Isola delle Rose"], "2020", [], 0, ["ger"], ["adventure", "comedy"], ["syl", "bini"], ["Netflix", "watching"], ["Sydney Sibilia"], ["Matilda De Angelis", "François Cluzet", "Luca Zingaretti", "Leonardo Lidi"], "https://64.media.tumblr.com/e2a9b804d3d5898daea12c880856049d/64e2e546ac07227e-3c/s250x400/23a9587d1f2864291d87d0ee2418b793f99fa3f9.jpg"]


/*
,

["type", ["title"], "pub year", ["dates"], rating, ["lang"], ["genre"], ["watched with"], ["tags"], ["director"], ["actors"], "image"]
*/
	        
];
