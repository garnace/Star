var position=0;
var listsPos=1;
var ht="";
var totalToGenerate=32;
var prefix="images/";
var totalList=["page1.png","page2.png","page3.png","page4.png","page5.png","page6.png",
"page7.png","page8.png","page9.png","page10.png","page11.png","page12.png","page13.png",
"page14.png","page15.png","page16.png","page17.png","page18.png","page19.png","page20.png",
"page21.png","page22.png","page23.png","page24.png","page25.png",
"page26.png","page27.png","page28.png","page29.png","page30.png","page31.png","page32.png"];

var sectionDT=["page4",
"page5"];
var sectionDONT=["page12",
"page13",
"page14",
"page15",
"page16",
"page17"];
var sectionCaution=["page27"];
var sectionEnviron=["page18",
"page19",
"page20",
"page21",
"page26"];
var sectionLoadDens=["page22",
"page23",
"page24",
"page25"];
var sectionBWellFare=["page6",
"page7",
"page8","page9","page10","page11",
"page28","page29","page30","page31"];
//var sectionSelect=0;
var sectionSelect=1;
var totalSections=6;
var listSectionsStr=["sectionDT","sectionDONT","sectionCaution","sectionEnviron","sectionLoadDens","sectionBWellFare"];
var listSections=[sectionDT,sectionDONT,sectionCaution,sectionEnviron,sectionLoadDens,sectionBWellFare];

var arrAllPages=[];
var rayProve=[];
var arrpictest=["samplepage.png","icon.png","back.png"];
//var arrpic=arrpictest;
var arrpic=totalList;
var totalpic=arrpic.length;


//var arrpicNames=sectionDT;
var arrpicNames=listSections[sectionSelect];
var totalpicNames=arrpicNames.length
totalpic=totalpicNames;
//arrpic=arrAllPages;

//next section, start at first page of section
function getSection(sId)
{//alert("gets");

location.href = "book.html?key="+sId; 
//arrpicNames=listSections(sId);
//totalpicName=arrpicNames.length;
//totalpic=totalpicNames;
}

function nextSection()
{
position=0;

if (sectionSelect < totalSections-1)
	{
	sectionSelect++;
	}else{sectionSelect=0;}
	arrpicNames=listSections[sectionSelect];
	totalpicNames=arrpicNames.length;
	totalpic=totalpicNames;
	pagebyNames(arrpicNames[position]);
	position=0;
}


function nextSectionPage(intposition)
{
if (intposition < totalpic-1){
intposition++;}else {intposition=0;}
//alert ("intposition"+intposition);
pagebyNames(arrpicNames[intposition]);
//var html="<center><a href="+prefix+ arrpic[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
//alert ("h:" +html);
//document.getElementById("page").innerHTML = html;
position=intposition;

}

//previous section, start at first page of section
function prevSection()
{
position=0;
if (sectionSelect > 0)
	{
	sectionSelect--;
	}else{sectionSelect=totalSections-1;}
	arrpicNames=listSections[sectionSelect];
	totalpicNames=arrpicNames.length;
	totalpic=totalpicNames;
	pagebyNames(arrpicNames[position]);
	position=0;
}


//get previous page in section
function prevSectionPage(intposition)
{
if (intposition > 0){
intposition--;}else {intposition= totalpic-1;}
//alert ("intposition"+intposition);
pagebyNames(arrpicNames[intposition]);

//var html="<center><a href="+prefix+ arrpic[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
//alert ("h:" +html);
//document.getElementById("page").innerHTML = html;
position=intposition;

}





/*section search NOT implemented yet
var sectionNames = ["Decision Tree",
"Welfare Definition",
"Federal Regulations",
"Identify - Cull - Dispose",
"Handling Guidelines for Catching Crews",
"DO NOT LOAD Conditions",
"CAUTION Conditions",
"Definitions",
"References",
"Contacts"];

0) Decision Tree (pages 4-5)
1) Do Not Load (pages 12-17)
2) Caution Conditions (page 27)
3) Environment Conditions (pages 18 – 21, 26)
4) Loading Densities (pages 22-25)
5) Bird Welfare Information (pages 6 – 11, 28 – 31)
*/

/*
var sectionPages=["page4",
"page6",
"page7",
"page8",
"page10",
"page12",
"page18",
"page28",
"page30",
"page31"];
function getV()
 {//alert("hi");
 document.getElementById("labox").value=80;
 }
*/
//var positionname="sample.png";
function generatePages(){
var ray=[];
var rayproof="";
var rayItem="";

	for(var i=1;i<totalToGenerate+1;i++)
	{ 

	rayItem="page"+i+".png";
	ray[i-1]=rayItem;
	rayproof=rayproof+ray[i-1];
    
   }
   alert ("proof:"+ray[totalToGenerate-1]+rayproof);
   rayProve=rayproof;
   return ray;
}

/*arrAllPages: maybe should be placed in book.html but works this way anyways*/
//arrAllPages=generatePages();
arrAllPages=totalList;
arrpic=arrAllPages;




//alert("prove:"+arrAllPages[totalToGenerate-1]+rayProve);


/*get position of element name without png ending
i.e page1 not page1.png*/
function getpos(ray,rayItem){
rayItem=rayItem+".png";
for(var i=0;i<ray.length;i++){ 
    if(ray[i]==rayItem)
   {return i;}
   }
   return -1;
   }
   
/*pagebyName
input:itemName
find page by name without .png
for purposes of index or search
output: display png found
*/
function pagebyName(itemName){alert("byname");
//itemName=itemName+".png";
//arrAllPages=generatePages();
var intposition=getpos(arrpic,itemName);
var html="<center><a href="+prefix+ arrpic[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
//alert ("h:" +html);
document.getElementById("page").innerHTML = html;
position=intposition;
}

/*pagebyNames ---for sections---
input:itemNames
find page by name without .png
for purposes of index or search
output: display png found
*/
function pagebyNames(itemName){//alert("bynames" +itemName);
//itemName=itemName+".png";
//arrAllPages=generatePages();
var intposition=getpos(totalList,itemName);
//alert("tot"+totalList[intposition]);
var html="<center><a href="+prefix+ totalList[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
ht="<center><a href="+prefix+ totalList[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";

//alert ("h:" +html);
//alert ("ht:"+ht);
window.document.getElementById("page").innerHTML = ht;
//position=intposition;
return html;
}
/*pagebyPosition
input:intposition
find page by element position
for purposes of index or search
output: display png found
*/
function pagebyPosition(intposition){//alert("here");
//itemName=itemName+".png";
//var intposition=getpos(arrpic,itemName);
var html="<center><a href="+prefix+ arrpic[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
//alert ("h:" +html);
document.getElementById("page").innerHTML = html;
position=intposition;
}


function nextpage(intposition)
{//alert("count"+prefix+arrpic[1]);
if (intposition < totalpic-1){
intposition++;}else {intposition=0;}
//alert ("intposition"+intposition);

var html="<center><a href="+prefix+ arrpic[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
//alert ("h:" +html);
document.getElementById("page").innerHTML = html;
position=intposition;
}



function prevpage(intposition)
{//alert("count"+prefix+arrpic[1]);
/*var where=getpos(arrpic,"icon");
if (where !=-1){alert ("found"+where);}
where=getpos(arrpic,"samplepage");
if (where !=-1){alert ("found"+where);}
*/
if (intposition > 0){
intposition--;}else {intposition=totalpic-1;}
//alert ("intposition"+intposition);

var html="<center><a href="+prefix+ arrpic[intposition]+"><img src = "+prefix+arrpic[intposition]+" height=\"300\" width=\"229\" style=\"border:3px solid black\"></a><center>";
//alert ("h:" +html);
document.getElementById("page").innerHTML = html;
position=intposition;
}


function test()
{
	/*This is esentially just a test function for when the button clicks.
	* If you go into calc.html you'll find some buttons at the bottom of the form.
	* These buttons have the "onclick" property which you can change from test()
	* to the relevant function call.
	*/
	alert("This isn't implemented.");
}

function icount()

{
alert("count");
}

function calculate()
{
	/*Here's all the values from the form.*/
	var bird = document.calcform.birdtype.value;
	var load = document.calcform.loadtype.value;
	var temp = document.calcform.temperature.value;
	var humid = document.calcform.humidity.value;
	var weight = document.calcform.weight.value;
	
	alert("Bird: " + bird + " Load: " + load + " Temp: " + temp + " Humidity: " + humid + " Weight: " + weight);
}