//Course:  CS3210
//Name:  Aikan Van Spyk
//ID: 0099364


//Project: Star Advisor
//----------------------------


var serverLocOrig="http://localhost:8280/StarServer/";
var serverLoc="http://localhost:8280/StarServer/";
var blog1="blogs.html";
var cornell="journals-and-newsletters.html";
var starg="stargazing.htm";
var yours="Yoursky(cityname).htm";
var cityRes="";
var ht="";
var hpb="";
var htSarr=[];
var htReal=[];
var siteCount=3;
var arrCount = 0;

htSarr=new Array();
htReal= new Array();


htSarr[0]=serverLoc+cornell;
htSarr[1]=serverLoc+blog1;
htSarr[2]=serverLoc+starg;
htSarr[3]=serverLoc+yours;

htReal[0]="http://astro.cornell.edu/journals-and-newsletters.html";

htReal[1]="http://www.strudel.org.uk/spacebuzz/blogs.html";
htReal[2]="http://www.stargazing.net/naa/sotw.htm";
htReal[3]="http://www.fourmilab.ch/yoursky";    





function setMap(mapId)
{

var htmap="<img alt=\"cralt\" src=\"http:localhost:8280/StarServer/YourskyGuelph_files/Yoursky.gif\" title=\"titles\" />";

}


/** ************* #setCarousel
*
*   Function to set caousel pictures
*
*
**/

function setCarousel(pId)
{

var csl= "<div id=\"myCarousel\" class=\"carousel slide\">";
csl +="<div class=\"carousel-inner\">";
 
csl+= "<div class=\"active item\">";
csl += "<img src=\"images/Yoursky.gif\" width=\"200px\" height=\"200px\" alt=\"sky scape\"/>";

csl +="</div>";
csl +="</div>";

csl +="<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">&lsaquo;</a>";
csl +="<a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">&rsaquo;</a>";


csl +="</div>";



var csm= "<div class=\"item\">";
csm += "<img src=\"images/Yoursky.gif\"  alt=\"sky scape\"/>";

csm +="</div>";



//-------------------------

//Flikr Example taken from

//http://api.jquery.com/jQuery.getJSON/

//------------------


$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
 },
  function(data) {

      $("#yCarousel").html(csl);      


      $.each(data.items, function(i,item){

      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#yCarousel #myCarousel .carousel-inner");


      if ( i == 8 ) 
      {

     	 $("#yCarousel #myCarousel .carousel-inner > img").each(function()
	 {

		    var iE=$(this);

		    iE.wrap("<div class=\"item\"><a href=\" "+iE.attr("src")+"\"> </a></div>");

	});//each img

	//set carousel to not rotate: false

	$("#myCarousel").carousel({interval:false});

	//return from json site
	return false;
     }//i==8

    });//each
  });//json




}
//----end setCarousel-----------------



/**  #setCarPic
*Function to set caousel pictures
*
*
**/
function setCarPic(pId)
{


$(document).ready(function(){
//-------------------------

//Flikr Example taken from

//http://api.jquery.com/jQuery.getJSON/

//------------------


$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
 },
  function(data) {
      $("#images").html("");
      $.each(data.items, function(i,item){
//alert ("ho");
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");

      if ( i == 8 ) 
	  {
        $("#images> img").each(function()
		{
		  //  alert ("IIimage:"+this.src);
		    var iE=$(this);
		//    iE.wrap("<a href=' "+iE.attr("src")+"' </a>");
		    iE.wrap("<a href=\" "+iE.attr("src")+"\"> </a>");
		});
	  return false;
          }
    });
  });


});//document.ready

}
//-----end setCarPic----------------------



/**  #setPic
*Function to set #images flickr pictures
*
*@param array pR
*@param integer randY
**/
function setPic(pId,pR,randY)
{

//-------------------------

//Flikr Example taken from

//http://api.jquery.com/jQuery.getJSON/

//------------------

var pRay=new Array();
pRay=pR;



$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
 },
  function(data) {
      $("#images").html("");
      $.each(data.items, function(i,item){

      pRay.push(item);

      $("<img/>").attr("src", pRay[i].media.m).attr("title",pRay[i].title).appendTo("#images");
      if ( i == 8 ) 

      {
	   $("#images> img").each(function()
	   {
		  //  alert ("IIimage:"+this.src);

		    var iE=$(this);
	

		    iE.wrap("<a href=\" "+iE.attr("src")+"\"> </a>");
	    });


	boardDoubler(pRay);
	  return false;
     }
    });//$.each
  });//json

}

/**  #boardDoubler
*Function to double number of images on board
*
*@param array pI
*
**/


function boardDoubler(pI)
{
	var rAA = new Array();
	var track= new Array();
	var ranP=null;
	var tempP = null;
	var tempR=null;

	

//	alert("return"+pI);
	var pAA = null;
	pAA = new Array();

	document.getElementById("imagesp").innerHTML="";


	$.each(pI, function (i,item){
		pAA.push(item);
	});

	$.each(pI, function (i,item){
		pAA.push(item);
	});

	//randomize pics

	$.each(pAA, function (i,item){

		ranP= Math.floor(Math.random()*pAA.length) 
		{
			tempP=item;
			tempR=pAA[ranP];
			pAA[i]=tempR;          //pAA[ranP];
			pAA[ranP]=tempP;       //item;
//			rAA.push(pAA(ranP));
		}

	});

	//try to randomize pictures that ended up side by side

	$.each(pAA, function(i,item){
		if ( ( (pAA[i+1]!=null) &&(pAA[i].media.m== pAA[i+1].media.m)) || ((pAA[i-1]!=null)&&(pAA[i].media.m== pAA[i-1].media.m)))
		{

		ranP= Math.floor(Math.random()*pAA.length) 
		{
			tempP=item;
			tempR=pAA[ranP];
			pAA[i]=tempR;          //pAA[ranP];
			pAA[ranP]=tempP;       //item;
//			rAA.push(pAA(ranP));
		}
			
		}

	});//each randomizer

	$.each(pAA, function (i,item){


	        var iiD=$("<br style=\"clear:both;\"/>");


		//card element
		var iD="<div class=\"quickflip-wrapper3 qw"+i+"\" style=\"float:left;display:inline;\">";


		iD=iD+"<div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"> <img src=\"images/Yoursky.gif\"  /></a>  </div>";
		iD=iD+"<div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>";

		iD=iD+"</div>";
		iD=$(iD);

		//testing
		if(i==4){
		var ele= $(iD.children()[0]).children();


		//(1st wrapper div)->anchor->image
		//	var ele= $(iD.children()[0]).children().children();
		alert ("id:"+$(ele[0]).attr("class"));	
		}

		iD.quickFlip();
//		    iD.bind("quickFlip",{pId:"src"},checkPic);
//working		    iD.bind("click",{pId:iD},clickPic);
	        iD.bind("click",{pId:iD},clickPicQF);

		if (i%4==0 && i!=0){		//break lines but not the first

			iiD.appendTo("#imagesp");
		}

		iD.appendTo("#imagesp");

//	$('.'+iD.attr("src")).quickFlip();

	});//each flipper wrapper

}

function boardToubler(pI)
{
	var rAA = new Array();
	var track= new Array();
	var ranP=null;
	var tempP = null;
	var tempR=null;

	

//	alert("return"+pI);
	var pAA = null;
	pAA = new Array();

	document.getElementById("imagesp").innerHTML="";
	var i =0;
	for (i=0;i<9;i++)
	{
//	for (i=0;i<pI.length;i++){
//      $("<img/>").attr("src", pAA[i].media.m).attr("title",pAA[i].title).appendTo("#imagesp");
//	if (i == 4)
	        var iiD=$("<br style=\"clear:both;\"/>");
//	if (i==0)
//		var iD="<div class=\"quickflip-wrapper3 qw"+i+"\" style=\"float:left;display:inline;\">";
//	else
		var iD="<div class=\"flipbox-container qw"+i+"\" style=\"float:left;display:inline;\">";


//		var iD="<div class=\"quickflip-wrapper3\" >";
//	iD=iD+"<div ><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" width=\"50px\" height=\"50px\"/></a></div>";
//flipbox	iD=iD+"<div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>";
//	iD=iD+"<div class=\"flipbox di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>";
//	iD=iD+"<div class=\"flipbox di1\"><a href=\"#\" id=\"FlipCta\"> <img src=\"images/Yoursky.gif\"  /></a>  </div>";
//	iD=iD+"<div class=\"flipbox di1\"><a href=\"#\" id=\""+pAA[i].media.m+"\"> <img src=\"images/Yoursky.gif\"  /></a>  </div>";
	iD=iD+"<div class=\"flipbox di1\"><a href=\"#\" id=\"images/Yoursky.gif\"> <img src=\"images/Yoursky.gif\"  /></a>  </div>";

//	iD=iD+"<div ><a href=\"#\" class=\"quickFlipCta\"> <img src=\"images/ss036.gif\" /></a>  </div>";
	iD=iD+"</div>";
	iD=$(iD);
	if(i==4){
//	if(i%5==0){
//	alert ("id:"+iD.attr("class"));	
	var ele= $(iD.children()[0]).children().children();
//	alert ("id:"+ ele[1].nodeName);	
//good	alert ("id:"+ $(ele[1]).attr("class"));	
//	iD=$("<br style=\"clear:both;\"/>");
	alert ("id:"+ $(ele[0]).attr("src"));	
//	alert ("id:"+iD.children().attr("class"));	
//	alert ("id:"+iD.children().length);	
	}

//	alert ("id:"+iD);	
//---------replace img iE with string iD

//      var iE=$("<img/>").attr("src", pAA[i].media.m).attr("title",pAA[i].title);


//	}
		//    iE.wrap("<a href=' "+iE.attr("src")+"' </a>");
//		    iE.wrap("<a href=\""+iE.attr("src")+"\"> </a>");
//		    iE.wrap("<p></p>");

//__switch		   iE=iE.wrap($("<div id=\"headp\"> </div>"));
//		   iE=iE.wrap($("<div id=\"hea\"> </div>"));

//			iE.wrap("<p></p>");		    
							//change to img
//		    iE=iE.wrap($("<a href=\" "+iE.attr("src")+"\" />"));

//not used		    iE.bind("click",{pId:iE.attr("src")},clickPic);


//++++++++++++++++++was used for iE
//		    iE.bind("click",{pId:iE},clickPic);
//			iE=iE.wrap



//insetead of--     iE.wrap("<a href=\""+iE.attr("src")+"\"   />");
//			iE.wrap("<div id=\"head\"></div>");

//comment out green on top
//			iE.after($("<div id=\"tailp\"></div>"))

//		    iE.bind("click",{pId:"src"},checkPic);
//		    iD.bind("quickflip",{pId:"src"},checkPic);
//______________compete click________________
//		    iD.bind("click",{pId:iD)},checkPic);
//--switch to div		iE.parent().appendTo("#imagesp");
//			($("<div id=\"tailp\"></div>")).appendTo('#imagesp");

//++++++++++++++replace with iD
//		iE.appendTo("#imagesp");
//		document.getElementById("imagesp").append(iD);
//		$("#imagesp").append(iD);
//		$("#imdiv").append(iD);

//______________compete click________________
//try to remove click flip		iD.quickFlip();
//		iD.quickFlipper({panelWidth:60,panelHeight:60});
//		iD.quickFlipper();
//		iD.quickFlipper();
//		    iD.bind("quickFlip",{pId:"src"},checkPic);
//working		    iD.bind("click",{pId:iD},clickPic);
		    iD.bind("click",{pId:iD},clickPic);

		if (i%4==0 && i!=0){		//break lines but not the first

			iiD.appendTo("#imagesp");
		}

		iD.appendTo("#imagesp");
//		$("<div id=\"headp\"></div>").append(iE.parent()).appendTo("#imagesp");
//		$("<div id=\"headp\"></div>").appendTo("#imagesp");
//		$("<div id=\"tailp\"></div>").appendTo("#imagesp");
		//    iE.trigger("click",checkPic,{pId:iE.attr("src")});
//	$('.'+iD.attr("src")).quickFlip();

}
//).done(
//function(){$('.quickflip-wrapper3').quickFlipper();}
//);


/*
$("#imagesp> img").each(function(i,item){
	$(this).wrap("<a href=\" "+ $(this).attr("src") +"\" </a>");

});
*/
//$('.quickflip-wrapper3').quickFlipper();

}




function setPicP(pId,pRay)
{

//-------------------------

//Flikr Example taken from

//http://api.jquery.com/jQuery.getJSON/

//------------------

alert("here");


//$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
var pA =new Array();
pA=pRay;
alert("done"+pRay);
//$(document).ready(function(){

      $("#imagesp").html("");
//---------------------------------------

//$.each(pA, function (i,item){

      $("<img/>").attr("src", pA[0].media.m).attr("title",pA[0].title).appendTo("#imagesp");



//}):

//alert ("done");
return;

alert ("afterdone");
//---------------------------------------
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
 },
  function(data) {
      $("#imagesp").html("");
      $.each(data.items, function(i,item){
//alert ("ho");
//	pA[i]=item;
//      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#imagesp");

//      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
// var imAp=$("<img/>").attr("src", item.media.m).attr("title",item.title);
//	  var $anchor = $("<a></a>").attr("href",imAp.attr("src")).attr("target","_blank");
	//j  var $anchor = $("<a></a>").attr("href","http://www.google.com").attr("target","_blank");
	  //imAp.wrap($anchor).appendTo("#images");
//	  imAp.wrap("<a href=\""+imAp.attr("src")+"\" </a>").appendTo("#images");
	/*  var anch=("<a></a>").attr("href",item.media.m);
	 $("<img/>").attr("src", item.media.m).attr("title",item.title).wrap($anch).appendTo("#images");
*/
//	  imAp.parent().attr("href",item.media.m).appendTo("#images");
//      if ( i == 8 ) return false;
//	  var  currentImage = $(this);
//	  currentImage.wrap("<a href='" + currentImage.attr("src") + "' </a>");
//	  $(this).parent().attr("href", this.src);
//	  $(this).parent().attr("href", this.src);
      if ( i == 8 ) 
	  {
        $("#imagesp> img").each(function()
		{
		  //  alert ("IIimage:"+this.src);
		    var iE=$(this);
		//    iE.wrap("<a href=' "+iE.attr("src")+"' </a>");
		//    iE.bind("click",{pId:iE.attr("src")},checkPic);
		//    iE.trigger("click",checkPic,{pId:iE.attr("src")});
		});
	  return false;
          }
    });
  });

//$('#yCarousel #myCarousel .carousel-inner .item img').live('hover',(function(){
//$(this).css('opacity','0.9');
//});




//});
//document.ready

}

/*
function checkMatch(event)
{



}

*/

//function checkPic(picId)
function clickPicQF(event){
//	alert("clickPic"+event.data.pId)
//	$(document).trigger("checkEv",{pId:"pId"});
//	$(document).trigger("quickFlip");
//	$(document).setTimeout(alert("hey"),5000);

//	$(".flipbox").flippy({
//	$(event.data.pId).flippy({
//	$(event.data.pId).flippy({
//	$(".flippy").flippy({
//		direction:"right",
//		duration:"750",
//		verso:" <span class=\"big\">GRAT</span>",
//flipbox	iD=iD+"<div class=\"di2\"><a href=\"#\" id=\"FlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>" ;
//	});
//	event.preventDefault();
//	if ($(event.data.pId).hasClass("headp"))
//	{
//		$(event.data.pId).removeClass("headp");	
//		$(event.data.pId).quickFlipper();	
//		$(event.data.pId).quickFlipper();	
//	}
//	else
//	{

		//triggers check event
		$(document).trigger("checkEv",{pId: event.data.pId});
//	}
//	alert("done");
}

function clickPic(event){
//	alert("clickPic"+event.data.pId)
//	$(document).trigger("checkEv",{pId:"pId"});
//	$(document).trigger("quickFlip");
//	$(document).setTimeout(alert("hey"),5000);

//	$(".flipbox").flippy({
//	$(event.data.pId).flippy({
	$(event.data.pId).flippy({
//	$(".flippy").flippy({
		direction:"right",
		duration:"750",
		verso:" <span class=\"big\">GRAT</span>",
//flipbox	iD=iD+"<div class=\"di2\"><a href=\"#\" id=\"FlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>" ;
	});
	event.preventDefault();
	$(document).trigger("checkEv",{pId: event.data.pId});
//	alert("done");
}


function setTim()
{
	setTimeout(matchAlert,5000);
}

/**

checkPic 

Function to check 2 picture cards
with helper functions for match events
*/

function checkPic(event,data)
{
//	alert("bind"+data.pId);
//	alert("bind");
//	data.pId.quickFlipper();
	var ch=0;
//	else
//	{	
//	alert("shouldnt wrk" + ch);
	
	//turn down if pic already faced up; then exit with nothing further

	if (data.pId.hasClass("headp"))
	{
		data.pId.removeClass("headp");	
//		$(event.data.pId).quickFlipper();	
		exit();
	}

	//tag pic as faced up if not already
	data.pId.addClass("headp");


//	$("#imdivp #imagesp img .head").addClass("head");
//	$("#imdivp #imagesp img .head").addClass("head");

//	$("#imdivp #imagesp img").show();
//	$("#imdivp #imagesp img").trigger(checkBoard);
//	$(document).trigger(checkBoard);
//	$("#imdivp #imagesp img .head:visible").each(function (i,items){
//	alert ("cP:::"+$($(data.pId.children()[1]).children().children()).attr("src")  );
	var heads=$("#imdivp #imagesp .headp");

//	var headsv=$("#imdivp #imagesp .headp");
//-----change to hidy
//	var headsv=$("#imdivp #imagesp .headp:visible");
//	var total=$("#imdivp #imagesp img:visible").length;
//-----change to hidy
//	var headsv=$("#imdivp #imagesp .headp .hidy");
	var headsv=$("#imdivp #imagesp .headp");
//	var total=$("#imdivp #imagesp ").length;




//falert		setTimeout(function(){alert("found"+total+"VIS"+headsv.length);},1000);

	//go through upturned cards
	$("#imdivp #imagesp .headp").each(function (i,item){
//	data.pId.each(function (i,item){

		//check if only 2 turned up cards
		if (headsv.length==2)
		{
//			alert ("two"+heads.slice(0).attr("src"));

//			if (headsv.slice(0).attr("src") == headsv.slice(1).attr("src"))
//switch child			if ($($(headsv.slice(0).children()[1]).children().children()).attr("src") == $($(headsv.slice(1).children()[1]).children().children()).attr("src"))
			
			//compare images of child wrapper nodes

			if ($($(headsv.slice(0).children()[1]).children().children()).attr("src") == $($(headsv.slice(1).children()[1]).children().children()).attr("src"))
			{
//				alert("match");
//				return false;
//hidy				headsv.slice(0).hide(5000);
//				headsv.slice(1).hide(5000).trigger(function(){matchAlert(0)});
//				headsv.slice(1).hide(5000).trigger("matchEv",5000);
//hidy				headsv.slice(1).hide(5000);
//				setTimeout(matchAlert,3000);
				var z=0;
//				setTimeout(function(){matchAlert(z);},3000);
				setTimeout(function(){matchAlert(headsv);},3000);
				
				exit();
//				return false;
			}
			else
			{
//				alert ("nomatch"+headsv.slice(0).attr("class"));
//				alert ("nomatch"+headsv.slice(1).attr("class"));
//				setTimeout(function(){alert ("nomatch");},1500);
				setTimeout(function(){noMatch (headsv);},1500);

//pass these slices into nomatch
//				headsv.slice(0).removeClass("headp");
//				headsv.slice(1).removeClass("headp");




//				return false;
//				headsv.slice(0).quickFlip().flip();

				exit();
			}
		}
//		if ($(this).attr("src").text() == data.picId)
//		if ($(this).attr("src").text() == data.picId)

//		{
//			$(this).bind("click",checkMatch());
//			$(document).bind("matching",checkMatch());
//			$(this).trigger(checkMatch);
//			$(document).trigger(checkMatch);


///		}

	});
	//}    else hasClass
}

function matchAlert(pId)
{
	alert("found match"+pId);
//	$(pId[0]).hide(2000);
//	$(pId[1]).hide(2000);

	//first remove headp class

	$(pId[0]).removeClass("headp");
//	alert("no");
	$(pId[1]).removeClass("headp");

	//next add hidy class to  hide by css
	$(pId[0]).addClass("hidy");
	$(pId[1]).addClass("hidy");

}

function noMatch(pId)
{
//	alert("no match"+pId);
//	pId.slice(0).trigger("click");
//	pId.slice(1).trigger("click");
//	alert("wok");

//	pId.slice(0).trigger("click",{pId:pId.slice(0)});
//	pId.slice(1).trigger("click",{pId:pId.slice(1)});

	//remove headp class
	$(pId[0]).removeClass("headp");
//	alert("no");
	$(pId[1]).removeClass("headp");

//------probably not individually removed
//	pId.slice(0).removeClass("headp");
//	pId.slice(1).removeClass("headp");


//	pId.slice(0).quickFlipper({refresh:true});
//	pId.slice(1).quickFlipper({refresh:true});


	//check make sure not child as in raasch example for quickflip
	//http://dev.jonraasch.com/quickflip/examples/hover-quickflips
//	if (!pId.slice(0).hasClass("quickflip-wrapper3"))
	if (!$(pId[0]).hasClass("quickflip-wrapper3"))
	{
		//flip back parent
		$($(pId[0]).parent()).quickFlipper();

//		alert("noclass");

//		$($(pId[1]).parent()).quickFlipper();
//		$(pId.slice(0).parent()).quickFlipper();
//		$(pId.slice(1).parent()).quickFlipper();


	}
	else
	{
		//flip back element
		$(pId[0]).quickFlipper();		

//		alert("class"+$(pId[0]).attr("class"));

//		$(pId[1]).quickFlipper();		
//		$(pId).slice(0).quickFlipper();
//		$(pId.slice(0)).quickFlipper();
//		$(pId.slice(1)).quickFlipper();
	}

	//again for the 2nd pic
	//check make sure not child as in raasch example for quickflip
	if (!$(pId[1]).hasClass("quickflip-wrapper3"))
	{
		//flip parent
		$($(pId[1]).parent()).quickFlipper();

//		alert("noclass");
//		$($(pId[0]).parent()).quickFlipper();

//		$(pId.slice(0).parent()).quickFlipper();
//		$(pId.slice(1).parent()).quickFlipper();


	}
	else
	{
		//flip 2nd pic element
		$(pId[1]).quickFlipper();		

//		alert("class"+$(pId[1]).attr("class"));
//		$(pId[0]).quickFlipper();		



//		$(pId).slice(0).quickFlipper();
//		$(pId.slice(0)).quickFlipper();
//		$(pId.slice(1)).quickFlipper();
	}



//	pId.slice(0).quickFlipper();
//	pId.slice(1).quickFlipper();

}



function setRPic(pId)
{
$(document).ready(function(){

	//bind events for match and check picture events

	$(document).bind("checkEv",checkPic);
	$(document).bind("matchEv",matchAlert);
    var srpA= new Array();

    var arrPic=["galaxy","star night","sky","observatory","nebula","moon","asteroid","meteor","telescope"];
    var randI=Math.floor(Math.random()*(arrPic.length));
//	$('.quickflip-wrapper3').quickFlip();
//	srpA.push("hello");
    setPic(arrPic[randI],srpA,randI);
//	alert("+");
//    setPicP(arrPic[randI],srpA);
    setCarousel(arrPic[randI]);
});

//--------------------------------------

//$("#yCarousel #myCarousel .carousel-inner .item img").hover( function(){
//$("#yCarousel #myCarousel .carousel-inner .item img").css({opacity:"0.7"});
//alert ("hi");
//});
//});

//$(document).ready(function(){
//setCarousel(0);
//setRPic(0);

//$('.carousel').carousel();
//$("#myCarousel").carousel({interval:3000,cycle:true});

//put in script
//$("#myCarousel").carousel({interval:false});
//$("#yCarousel #myCarousel a").hover( function(){
//$("#yCarousel #myCarousel .carousel-inner .item img").css({"opacity","0.4"});
//});

//$("#yCarousel #myCarousel .carousel-inner .item img").hover( function(){
//$("#yCarousel #myCarousel .carousel-inner .item img").css("opacity","0.8");
//alert ("hi");
//});


//});



}
function setRPicP(pId)
{


    var arrPic=["galaxy","star night","sky","observatory","nebula","moon","asteroid","meteor","telescope"];
    var randI=Math.floor(Math.random()*(arrPic.length));

    setPic(arrPic[randI]);
    setCarousel(arrPic[randI]);


//--------------------------------------

//$("#yCarousel #myCarousel .carousel-inner .item img").hover( function(){
//$("#yCarousel #myCarousel .carousel-inner .item img").css({opacity:"0.7"});
//alert ("hi");
//});
//});

//$(document).ready(function(){
//setCarousel(0);
//setRPic(0);

//$('.carousel').carousel();
//$("#myCarousel").carousel({interval:3000,cycle:true});

//put in script
//$("#myCarousel").carousel({interval:false});
//$("#yCarousel #myCarousel a").hover( function(){
//$("#yCarousel #myCarousel .carousel-inner .item img").css({"opacity","0.4"});
//});

//$("#yCarousel #myCarousel .carousel-inner .item img").hover( function(){
//$("#yCarousel #myCarousel .carousel-inner .item img").css("opacity","0.8");
//alert ("hi");
//});


//});



}

function getSFeedTerm(tId)
{
//***********************************************
//Get search term for Lookup service

//***********************************************    
    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";


    document.getElementById("son").innerHTML="";


    hpb="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p><input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
//     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"setSFeed(document.getElementById('sbox').value);\">Search LookUP</button>";
    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"setLFeed(document.getElementById('sbox').value);\">Search LookUP</button>";
    hpb=hpb+"</div></div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    document.getElementById("searchDi").style.display="";

}

function listSites(pId)
{
/*
List sites being used on cache as well as listing the cached locations.

*/


    /*    var htSarr=[];
    var htReal=[];
	 var siteCount=0;
	var arrCount = 0;

	 htSarr=new Array();



	 htSarr[0]=serverLoc+cornell;
	 htSarr[1]=serverLoc+blog1;
	 htSarr[2]=serverLoc+starg;
	 
	 htReal[0]="http://astro.cornell.edu/journals-and-newsletters.html";

	 htReal[1]="http://www.strudel.org.uk/spacebuzz/blogs.html";
    htReal[2]="http://www.stargazing.net/naa/sotw.htm";
    */

	//	 alert("higain");
    var htsamp="<BR><p><b><font color=#00ee22 size=\"4\" >Cached on Server:</b></p></font><BR>";

    htsamp=htsamp +"<ul type=\"square\" color=\"blue\">";
    for (arrCount=0;arrCount<4;arrCount++)
    {

	htsamp=htsamp+"<li><p><b><font color =#ffee22  > <a href=\""+  htSarr[arrCount]+"\">"+"<font color=#008822>"+htSarr[arrCount]+"</font>"+"</a>"+ "</font></b></p><p><b> <font color=#0044ff> <a href=\""+htReal[arrCount]+"\">"+htReal[arrCount]+"</a></font></b></p></li>"   ;
	//	htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htSarr[arrCount]+ "</font></b></p></li>"   ;
	//	htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htSarr[arrCount]+ "</foynt></b></p></li>"   ;

    }
    document.getElementById("journ").innerHTML=htsamp;
    document.getElementById("journ").style.display="";
    document.getElementById("pageBar").style.display="";
    document.getElementById("pageBar").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("imagesky").style.display="none";


	//	alert ("hi");
    siteCount=arrCount+1;
}


//----wrap setSFeed

function setSSFeed(pId)
{
//----wrap setSFeed

//    alert("ss");
//    document.getElementById("loadson").style.display="";
//    document.getElementById("fbox").style.display="";
    setSFeed(pId);
//    wait(3000);
//    document.getElementById("loadson").style.display="none";
//    document.getElementById("fbox").style.display="none";
}

function setSFeed(pId)
{
    //----------------------------------------------
    //
    //Grabbing JSON into div #son is based on sample code from:
    //http://brightscape.net/blog/display-rss-feed-jquery-json/

    //------------------------------------------------------------


    var htfeed;
//    document.getElementById("fbox").innerHTML="none";

    document.getElementById("imagesky").innerHTML="";

    document.getElementById("son").innerHTML="";
    document.getElementById("son").style.display="";
//    document.getElementById("loadson").style.display="";

    var desc="NO DESC";
    htfeed=htfeed +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("son").innerHTML="";
    document.getElementById("loadson").style.display="";
//    document.writleln("<p>YYYYYYYYYYYYY</p>");
    $(document).ready(function() {
	//	    var url = "http://www.google.com/reader/public/javascript/feed/http://www.google.com/reader/public/atom/user%2F13279602483212565421%2Fstate%2Fcom.google%2Fbroadcast?callback=?";
	//	    var url="http://www.strudel.org.uk/lookUP/json/?name=m51&callback=?";
	var url="http://www.strudel.org.uk/lookUP/json/?name="+pId+"&callback=?";
 // http://www.strudel.org.uk/lookUP/json/?name=m51&callback=lk
//    document.getElementById("loadson").style.display="";
    $.getJSON(url,
         function(data) {
	     //clear loading icon

	     document.getElementById("loadson").style.display="none";
	   //  document.getElementById("fbox").style.display="none";
		  
//	     $('#son').append("<p><b><font color=#ffee22>Search Results for '"+pId+"' </font></b></p>");
	     $('#son').append("<p><b><font color=#224488>Search Results for '"+pId+"' </font></b></p>");
	   //    var htski="<p><b><font color=#fe2>"+skId+"</font></b></p><BR><BR>";
	   //	   	   $('#son').append("<ul>");
	     $('#son').append("<li>"+"<p>"+"Category: "+"<em>"+data.category.avmdesc+"</em>"+"</p>"+" </li>");
	     $('#son').append("<li>"+"<p>"+"Right Ascension: "+"<em>"+data.ra.h+"</em> hours"+":"+"<em> "+data.ra.m+"</em> minutes "+": "+"<em> "+data.ra.s+" </em> seconds "+"</p>"+" </li>");
	     $('#son').append("<li>"+"<p>"+"Declination: "+"<em>"+data.dec.d+"</em> dec "+": "+"<em> "+data.dec.m+"</em> min "+":"+"<em> "+data.dec.s+"</em> sec "+"</p>"+" </li>");
	     $('#son').append("<li>"+"<p>"+"Galactic Longitude: <em>"+data.galactic.lon+"</em>     Latitude: <em>"+data.galactic.lat+"</em></p>"+" </li>");
	     $('#son').append("<li>"+"<p>"+"Coordsys: <em>"+data.coordsys+"</em>     Equinox: <em>"+data.equinox+"</em>  JD: <em>"+data.jd+"</em> AVM: <em>" +data.category.avmcode+"</em> </p>"+" </li>");
	     $('#son').append("<li>"+"<p>"+"Services: <em>"+data.service.name+"</em>     Service href: <em><a href=\""+data.service.href+"\">"+data.service.name+"  </a></em></p>"+" </li>");
	     $('#son').append("<li>"+"<p>"+"itemcount:"+data.items+"</p> </li>");

		   //	   	   $('#grJSON').append("<li>"+"<p>"+"Coord Sys: "+data.coordsys+"</p>"+" </li>");
		   //	   	   $('#grJSON').append("<li>"+"<p>"+"Equinox: "+data.equinox+"</p>"+" </li>");
		   //	   	   $('#grJSON').append("<li>"+"<p>"+"Category: "+data.category.avmdesc+"</p>"+" </li>");

	   //    $.each(data.items, function(i,item){
		   //   $('#grJSON').append("</ul> <BR>");
             $('#son').wrapInner('<ul type=\"square\"></ul>');
	     $("<img/>").attr("src",data.image.src).attr("title",data.target.name).appendTo("#son");
	   	
      //      if ( i == 3 ) return false;



	   //	         $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");

	window.console.log("doneaae");

/*
             for(var i = 0; i < data.items.length && i < 3; i += 1)
		 $('#son').append('<li>' + '<h5>' + '<a href="' + data.items[i].alternate.href + '">' + data.items[i].title + '</a>' + '</h5>' + '<br />' + data.items[i].content);
             $('#son').append('<li>' + '<a href="http://www.google.com/reader/shared/yourusername">Subscribe to my Google Reader shared items &raquo;</a>' + '</li>');
             $('#son').wrapInner('<ul></ul>');
*/
	     //             $('#grJSON').before("<h4>Articles I\'m Reading</h4>\n<br />");
	window.console.log("doneaae");

         }).always(function()
{
	alert("com ");
	window.console.log("donee");
//    document.getElementById("loadson").style.display="none";
  //  document.getElementById("fbox").style.display="none";
}
);
		//document.ready
//}).complete(function()
//{
    //document.getElementById("loadson").style.display="none";
    //document.getElementById("fbox").style.display="none";
}
);



//$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      if ( i == 3 ) return false;
    });
  });

*/



//    document.getElementById("loadson").style.display="none";
}
function setLFeed(pId)
{
    
    //----------------------------------------------
    //
    //Grabbing JSON into div #son is based on sample code from:
    //http://brightscape.net/blog/display-rss-feed-jquery-json/

    //------------------------------------------------------------



    document.getElementById("pageBar").innerHTML="";
    document.getElementById("pageBar").style.display="none";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").style.display="";

    document.getElementById("son").before="";
      //      document.getElementById("grJSON").style.display="none";

    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";

    
    $(document).ready(function() {
	//   var url = "http://www.google.com/reader/public/javascript/feed/http://www.google.com/reader/public/atom/user%2F13279602483212565421%2Fstate%2Fcom.google%2Fbroadcast?callback=?";
	//    var url = "http://www.google.com/reader/view/feed/http://cosmicdiary.org/feed/?source=ignitionfork#stream/feed%2Fhttp%3A%2F%2Fwww.stellarium.org%2Fwiki%2Findex.php%3Ftitle%3DSpecial%3ARecentChanges%26feed%3Datom?callback=?";
	//This feed		var url="http://www.google.com/reader/view/user/-/state/com.google/broadcast#stream/feed%2Fhttp%3A%2F%2Fwww.astro.lsa.umich.edu%2Fvgn-ext-templating%2Fresources%2Ftemplates%2Fnews%2Frss.jsp%3FcurSiteName%3Dastro%26channelId%3Ddd3cb959f1965310VgnVCM10000055b1d38dRCRD?callback=?";
	//another feed http://www.google.com/reader/view/user/-/state/com.google/broadcast#stream/feed%2Fhttp%3A%2F%2Fwww.stellarium.org%2Fwiki%2Findex.php%3Ftitle%3DSpecial%3ARecentChanges%26feed%3Datom
	//		var url="http://www.google.com/reader/view/user/-/state/com.google/broadcast#stream/feed%2Fhttp%3A%2F%2Fwww.astro.lsa.umich.edu%2Fvgn-ext-templating%2Fresources%2Ftemplates%2Fnews%2Frss.jsp%3FcurSiteName%3Dastro%26channelId%3Ddd3cb959f1965310VgnVCM10000055b1d38dRCRD?callback=?";
	//This reader	var url="http://www.google.com/reader/view/user/-/state/com.google/broadcast#stream/user%2F06266038723582344455%2Fstate%2Fcom.google%2Fbroadcast?callback=?";



	//This reader	var url="http://www.google.com/reader/view/user/-/state/com.google/broadcast#stream/user%2F06266038723582344455%2Fstate%2Fcom.google%2Fbroadcast?callback=?";

//--------URL change

//	var url="http://www.google.com/reader/view/#stream/user%2F06266038723582344455%2Flabel%2Fsoftware?callback=?";


//	var url="http://www.strudel.org.uk/lookUP/json/?name="+pId+"&callback=?";

//http://www.google.com/reader/view/#stream/feed%2Fhttp%3A%2F%2Ffeeds.feedburner.com%2FElegantCode;



//-------URL change

//var url="http://www.google.com/reader/view/#stream/feed%2Fhttp%3A%2F%2Ffeeds.feedburner.com%2FElegantCode"+"";
var url="http://www.strudel.org.uk/lookUP/json/?name="+pId+"&callback=?";


    $.getJSON(url,
         function(data) {
	   $('#son').append("<h4>AArticles I\'m Reading</h4>\n<br />");

           for(var i = 0; i < data.items.length && i < 5; i += 1)
             $('#son').append('<li>' + '<h5>' + '<a href="' + data.items[i].alternate.href + '">' + data.items[i].title + '</a>' + '</h5>' + '<br />' + data.items[i].content);
             $('#son').append('<li>' + '<a href="http://www.google.com/reader/shared/yourusername">Subscribe to my Google Reader shared items &raquo;</a>' + '</li>');
             $('#son').wrapInner('<ul></ul>');
	     //             $('#grJSON').before("<h4>Articles I\'m Reading</h4>\n<br />");
         });
});

    
//$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
/*
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      if ( i == 3 ) return false;
    });
  });

*/


}
//---------------------------------------------------

function getMatchCi(mId)

{
/***********************************************
Input from user is used to find city by name and display link name
to the user

**********************************************/


    //    	  alert("BLOG");
    var urlArr=[];
    var urlAL=0;

    var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    var urlA="http://localhost:8280/StarServer/stargazing.htm";


    //    var urlM=htSarr[0];
    //    var urlA=htSArr[2];

	  //	  	    var urlBl=htSarr[1];
    var urlBl="http://localhost:8280/StarServer/cities.html";
    var htr="";
    //        var term="ature";
    var term=mId;
     //    var htTok="<li><a href=\"http://";
     //         var htTok="<a href=\"http://";
    var htTok="<a href";
     //          var htTok="cgi-bin";

    var htTokE="</a>";
    var htStart="<a hre";
    //    var htStart=mId;
    var htEnd="</a>";
    var dLen=0;
    var htcount=0;
    var htarr=[];
    var htsamp="";
    //    var htsamp="<BR><p><b><font color=#ffee22 size=\"2\" >Blogs Found (may just say RSS):</b></p></font><BR>";
    //    var htsamp="<BR><p><b><font color=#ffee22 size=\"2\" >Blogs Found (may just say RSS):</b></p></font><BR>";
    var htleft="";
    var htout="";
    var htsub="";
    var htTotal="";
    var htsubLen=0,htleftLen=0;
    var htele;
    var cc=0;
    var rPos;
	     //	     var aPos=data.search("htt");
    var aPos;
    var htleft;
    var arrCount=0;
    var doubleFlag=0;
    var htsho;
    var htshow;
    var htshow;
	  //urlArr=[urlM,urlA];
    urlArr=[urlBl];
    urlAL=urlArr.length;


	  //	  htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >from: "+htarr[arrCount]+":</b></p></font>";

    htsamp=htsamp +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("journ").innerHTML="";
			// htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >FROM: </b></p></font>";


    /**  Loop through URLs for city names **/


    for (cc=0;cc<urlAL;cc++)
    {
		  //alert(urlArr[cc]);
		  //}
	if (cc>urlAL)
	{
	//dont exceed array length
	    break;
	}
		  //	   htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" > "+urlArr[cc]+":</b></p></font>";
			//$.each(urlArr){
        $.get(urlArr[cc],function(data)
     {



	 //	 var rPos=data.toUpperCase().search(term);
	 //	 	       $("<ul >").appendTo("#journ");		
	 htarr=new Array();
	 htcount =0;

	 // rPos returns search position for term

	  rPos=data.toLowerCase().search(term.toLowerCase());
	     //	     var aPos=data.search("htt");
	      aPos;
	      htleft=data;
	      arrCount=0;
	      doubleFlag=0;
	     //	     alert ("herae:"+htleft);
	     //	     aPos=htleft.syearch("htt");
	     while ((aPos=htleft.toLowerCase().search(htTok.toLowerCase())) != -1)
		     {
			 //alert("Ffound"+aPos);
			 //			 			  var htsho=htleft.substr(aPos+htTok.length,80);
			  htsho=htleft.substr(aPos,120);
			  //			  alert("loop");
			  //			 alert(htsho);
//			  var htshow=htsho.substr(0,htsho.search(htTokE));


			 /* Search term city name surrounded by anchors*/

			  htshow=htsho.substr(0,htsho.toLowerCase().search(htTokE.toLowerCase())+htTokE.length);
			 //			 var htshow=htleft.substr(aPos+htTok.length,htleft.search("/a>"));

			 htleft=htleft.substr(aPos+htTok.length,htleft.length - aPos -htTok.length);
			 for (arrCount=0;arrCount<htarr.length;arrCount++){
			     //			     htarr[htcount]=htshow;
			     if (htarr[arrCount]==htshow) //check for duplicate array element

				 {
				 //flag it and break loop

				     doubleFlag=1;
				     break;
				 }
			 }
			 //			 if (doubleFlag==1 || (htshow.search("ornel") == -1)){doubleFlag=0;}



			 if (doubleFlag==1 || (htshow.toLowerCase().search("ornel") != -1)){doubleFlag=0;}  //check for redundant cornell term or duplicate entry

			 else {
			     //get termy
			     if (htsho.toLowerCase().search(term.toLowerCase()) != -1)
				 {
				     // alert(htsho);
				     htarr[htcount]=htsho+"</a>";htcount++
				 }
			 }
			 //alert(htshow);
		     }
	     


		
	 for (arrCount=0;arrCount<htcount;arrCount++)
	 {


			     //	           $("<li><p><b><font color =#ffee22  >x-"+  htarr[arrCount]+ "</font></b></p></li>"  ).appendTo("#journ");		
			      htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			      //			      htsamp=htsamp+"<li><p><b><font color =#ffee22 size=22px >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
	 }
		     //	     document.getElementById("journ").innerHTML="<p><b><font color =#ffee22>HI"+htsamp+"</font></b></p><BR>";
		     // $("</ul>").appendTo("#journ");		

	 htsamp=htsamp+"</ul>";
         htsamp=htsamp+"<ul type=\"circle\">";
		     //		        document.getElementById("journ").innerHTML=htsamp;

		     //		     $(htsamp).appendTo("#imagesky");
		     //		     		     $("<P).appendTo("#imagesky");
		     //		     alert(htsamp);

	 document.getElementById("journ").style.display="";
	 document.getElementById("journ").innerHTML=htsamp;

			//      $("<p><b><font color=#ffee22 >hello</font></b></p>").appendTo("#journ");		

						    //		    		    document.getElementById("imagesky").style.display="none";
				    //NO ALERalert(htsamp);
	      }).error(function(){alert("An error has occurred");return;}).complete(function()
	     {    });
	      }
	//		     htsamp=htsamp+"</ul>";
	//htele=document.getElementById("journ");

	//htele=htele.add(document.createTextNode("<ul><li>hello</li></ul>"));
	//NOALERalert( htsamp);

		     // document.getElementById("journ").innerHTML=htele;
				  //	document.getElementById("journ").style.display="";

	//    alert ("getMatch");
}





//------------------------------------------------------
function getMatchBl(mId)

{
    //    	  alert("BLOG");
    var urlArr=[];
    var urlAL=0;

    var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    var urlA="http://localhost:8280/StarServer/stargazing.htm";


    //    var urlM=htSarr[0];
    //    var urlA=htSArr[2];

    var urlBl=htSarr[1];
    var htr="";
    //        var term="ature";
    var term=mId;
     //    var htTok="<li><a href=\"http://";
    var htTok="<a href=\"http://";

    var htTokE="</a>";
    var htStart="<li><a href=\"http://";
    var htEnd="</a></li>";
    var dLen=0;
    var htcount=0;
    var htarr=[];
    var htsamp="<BR><p><b><font color=#ffee22 size=\"2\" >Blogs Found (may just say RSS):</b></p></font><BR>";
    var htleft="";
    var htout="";
    var htsub="";
    var htTotal="";
    var htsubLen=0,htleftLen=0;
    var htele;
    var cc=0;
    var rPos;
	     //	     var aPos=data.search("htt");
    var aPos;
    var htleft;
    var arrCount=0;
    var doubleFlag=0;
    var htsho;
    var htshow;
    var htshow;
	  //urlArr=[urlM,urlA];
    urlArr=[urlBl];
    urlAL=urlArr.length;


	  //	  htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >from: "+htarr[arrCount]+":</b></p></font>";

    htsamp=htsamp +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("journ").innerHTML="";
    htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >FROM: </b></p></font>";

    //Cycle through blogs


    for (cc=0;cc<urlAL;cc++)
    {
		  //alert(urlArr[cc]);
		  //}
	if (cc>urlAL)
	{
	    break;
	}
	htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" > "+urlArr[cc]+":</b></p></font>";
			//$.each(urlArr){
	//Get log url through Ajax
        $.get(urlArr[cc],function(data)
     {



	 //	 var rPos=data.toUpperCase().search(term);
	 //	 	       $("<ul >").appendTo("#journ");		
	 htarr=new Array();
	 htcount =0;
	 rPos=data.toLowerCase().search(term.toLowerCase());
	     //	     var aPos=data.search("htt");
	 aPos;
	 htleft=data;
	 arrCount=0;
	 doubleFlag=0;
	     //	     alert ("herae:"+htleft);
	     //	     aPos=htleft.syearch("htt");
	     while ((aPos=htleft.toLowerCase().search(htTok.toLowerCase())) != -1)
		     {
			 //alert("Ffound"+aPos);
			 //			 			  var htsho=htleft.substr(aPos+htTok.length,80);
			  htsho=htleft.substr(aPos,80);
//			  var htshow=htsho.substr(0,htsho.search(htTokE));
			  htshow=htsho.substr(0,htsho.toLowerCase().search(htTokE.toLowerCase())+htTokE.length);
			 //			 var htshow=htleft.substr(aPos+htTok.length,htleft.search("/a>"));

			 htleft=htleft.substr(aPos+htTok.length,htleft.length - aPos -htTok.length);
			 for (arrCount=0;arrCount<htarr.length;arrCount++){
			     //			     htarr[htcount]=htshow;
			     if (htarr[arrCount]==htshow)
				 {doubleFlag=1;break;}
			 }
			 //			 if (doubleFlag==1 || (htshow.search("ornel") == -1)){doubleFlag=0;}
			 if (doubleFlag==1 || (htshow.toLowerCase().search("ornel") != -1)){doubleFlag=0;}
			 else {
			     //get termy to find
			     if (htshow.toLowerCase().search(term.toLowerCase()) != -1)
				 {
				     htarr[htcount]=htshow;
				     htcount++;
			       }
			 }
			 //alert(htshow);
		     }
	     


		
		     for (arrCount=0;arrCount<htcount;arrCount++)
			 {


			     //	           $("<li><p><b><font color =#ffee22  >x-"+  htarr[arrCount]+ "</font></b></p></li>"  ).appendTo("#journ");		
			     htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			      //			      htsamp=htsamp+"<li><p><b><font color =#ffee22 size=22px >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			 }
		     //	     document.getElementById("journ").innerHTML="<p><b><font color =#ffee22>HI"+htsamp+"</font></b></p><BR>";
		     // $("</ul>").appendTo("#journ");		

	 htsamp=htsamp+"</ul>";
//         htsamp=htsamp+"<ul type=\"circle\">";
         htsamp=htsamp+"<ul type=\"square\">";
	 document.getElementById("journ").innerHTML=htsamp;
			//		     alert(htsamp);

		    //		    		    document.getElementById("images").style.display="none";

			//      $("<p><b><font color=#ffee22 >hello</font></b></p>").appendTo("#journ");		

	 document.getElementById("imagesky").style.display="none";
				    //NO ALERalert(htsamp);
	      }).error(function(){alert("An error has occurred");return;}).complete(function()
	     {    });


	      } //while

	//		     htsamp=htsamp+"</ul>";
	//htele=document.getElementById("journ");

	//htele=htele.add(document.createTextNode("<ul><li>hello</li></ul>"));
	//NOALERalert( htsamp);

		     // document.getElementById("journ").innerHTML=htele;
	document.getElementById("journ").style.display="";

	//    alert ("getMatch");
}


//-------------------------------------------------------
function getMatchJ(mId)
{
    var urlArr=[];
    var urlAL=0;
    var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    var urlA="http://localhost:8280/StarServer/stargazing.htm";
    
    var htr="";
    //        var term="ature";
    var term=mId;
     //    var htTok="<li><a href=\"http://";
    var htTok="<a href=\"http://";
    var htTokE="</a>";
    var htStart="<li><a href=\"http://";
    var htEnd="</a></li>";
    var dLen=0;
    var htcount=0;
    var htarr=[];
    var htsamp="<BR><p><b><font color=#ffee22 size=\"2\" >RESULTS FOUND:</b></p></font><BR>";
    var htleft="";
    var htout="";
    var htsub="";
    var htTotal="";
    var htsubLen=0,htleftLen=0;
    var htele;
    var cc=0;
    var rPos;
	     //	     var aPos=data.search("htt");
    var aPos;
    var htleft;
    var arrCount=0;
    var doubleFlag=0;
    var htsho;
    var htshow;
    var htshow;


    urlArr=[urlM,urlA];
    urlAL=urlArr.length;
    //	  htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >from: "+htarr[arrCount]+":</b></p></font>";

    htsamp=htsamp +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("journ").innerHTML="";
    htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >FROM: </b></p></font>";
    for (cc=0;cc<urlAL;cc++)
    {
		  //alert(urlArr[cc]);
		  //}
	if (cc>urlAL)
	{
	    break;
	}
	htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" > "+urlArr[cc]+":</b></p></font>";
			//$.each(urlArr){
        $.get(urlArr[cc],function(data)
	      {



	 //	 var rPos=data.toUpperCase().search(term);
	 //	 	       $("<ul >").appendTo("#journ");		
		  htarr=new Array();
		  htcount =0;
		  rPos=data.toLowerCase().search(term.toLowerCase());
	     //	     var aPos=data.search("htt");
		  aPos;
		  htleft=data;
		  arrCount=0;
		  doubleFlag=0;
	     //	     alert ("herae:"+htleft);
	     //	     aPos=htleft.syearch("htt");
		  while ((aPos=htleft.toLowerCase().search(htTok.toLowerCase())) != -1)
		     {
			 //alert("Ffound"+aPos);
			 //			 			  var htsho=htleft.substr(aPos+htTok.length,80);
			  htsho=htleft.substr(aPos,80);
//			  var htshow=htsho.substr(0,htsho.search(htTokE));
			  htshow=htsho.substr(0,htsho.toLowerCase().search(htTokE.toLowerCase())+htTokE.length);
			 //			 var htshow=htleft.substr(aPos+htTok.length,htleft.search("/a>"));

			 htleft=htleft.substr(aPos+htTok.length,htleft.length - aPos -htTok.length);
			 for (arrCount=0;arrCount<htarr.length;arrCount++){
			     //			     htarr[htcount]=htshow;
			     if (htarr[arrCount]==htshow)
				 {doubleFlag=1;break;}
			 }
			 //			 if (doubleFlag==1 || (htshow.search("ornel") == -1)){doubleFlag=0;}
			 if (doubleFlag==1 || (htshow.toLowerCase().search("ornel") != -1)){doubleFlag=0;}
			 else {
			     //get termy
			     if (htshow.toLowerCase().search(term.toLowerCase()) != -1)
			     {
				 //update array result and imcrement

				 htarr[htcount]=htshow;htcount++
			     }
			 }
			 //alert(htshow);
		     }
	     


		
		     for (arrCount=0;arrCount<htcount;arrCount++)
			 {
			     //display array results

			     //	           $("<li><p><b><font color =#ffee22  >x-"+  htarr[arrCount]+ "</font></b></p></li>"  ).appendTo("#journ");		
//			     htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			     htsamp=htsamp+"<li><p><b><font color =#2211ff  >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			      //			      htsamp=htsamp+"<li><p><b><font color =#ffee22 size=22px >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			 }
		     //	     document.getElementById("journ").innerHTML="<p><b><font color =#ffee22>HI"+htsamp+"</font></b></p><BR>";
		     // $("</ul>").appendTo("#journ");		

		  htsamp=htsamp+"</ul>";
                  htsamp=htsamp+"<ul type=\"circle\">";
		  document.getElementById("journ").innerHTML=htsamp;


		    //		    		    document.getElementById("images").style.display="none";

			//      $("<p><b><font color=#ffee22 >hello</font></b></p>").appendTo("#journ");		

		    		    document.getElementById("imagesky").style.display="none";
				    //NO ALERalert(htsamp);
	      }).error(function(){alert("An error has occurreddddd");return;}).complete(function()
	     {    });
    }
	//		     htsamp=htsamp+"</ul>";
	//htele=document.getElementById("journ");

	//htele=htele.add(document.createTextNode("<ul><li>hello</li></ul>"));
	//NOALERalert( htsamp);

		     // document.getElementById("journ").innerHTML=htele;
    // display in journ

    document.getElementById("journ").style.display="";

	//    alert ("getMatch");
}


/*function getMatch(mId)
{
    var urlM="http://localhost:8280/journals-and-newsletters.html";
    var htr="";
    var term="astro";
    var tok="htt";
    var dLen=0;
    var htcount=0;
    var htarr=[];
    var htsamp="";
    var htleft="";
    var htout="";
    var htsub="";
    var htsubLen=0,htleftLen=0;

    alert("MATCH");
    .get(urlM,function(data)
	 {
	     var rPos=data.search(term);
	     //	     var aPos=data.search("htt");
	     var aPos;
	     var htleft=data;
	     while ((aPos=htleft.search("htt")) != -1)
		 {
		     htleft=htleft.substr(aPos,htleft.length -aPos);
		     if ((rPos=htleft.search(term) != -1)
			 {
			     htleft=htleft.substr(rPos,htleft.length-rPos);
			     htarr[htcount]=rPos.substr(0,term.length);
			     alert("Found"+htarr[htcount]);
			     htsamp=htarr[htcount];
			 }
		     htcount++;
		 }
             document.getElementById("journ").innerHTML="<p><b><font color =#ffee22>HI"+htsamp+"</font></b></p>";
	 });

}
*/


function getSectionO(dId)
{
//----------------------------------
//
//Get journal results from search terms
//------------------------------------

    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
//    document.getElementById("son").before="";
  //  document.getElementById("fbox").style.display="none";

    hpb="<div id=\"searchDi\"><p>Enter terms to list sites listed on StarServer's cached sites:  Cornell.edu and Stargazing.net</p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressJ(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById('sbox').value);\">Search Now</button>";
    hpb=hpb+"</div></div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.

}
/********************************
getSectionDB(dbId)

display data base contents

********************************/
function getSectionDB(dbId)
{
//-----------------------------------
//Gets blog entries from search terms
//
//-----------------------------------

    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";

    document.getElementById("fbox").style.display="";

    hpb="<div id=\"searchDi\"><p>Enter terms to list blog sites listed on StarServer's cached site for Strudel.net </p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressBl(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Search Now</button> </div><BR/>";
     hpb=hpb+"<div id=\"tbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Display All Data</button></div>";

    hpb=hpb+"</div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.


}
//----------------------------------------------
//Original function
/*


*/
//----------------------------------------------
function getListDel(dbId)
{

	//$.getJSON("http://localhost:8280/StarAdvisor/myf3.php?callback=?",
	$.getJSON("http://localhost:8280/StarAdvisor/del.php?emaild="+dbId+"&callback=?",
	function(data){
	});
}
function loadDBB(dbId)
{
	$.getJSON("http://localhost:8280/StarAdvisor/read.php?emaild="+dbId+"&callback=?",
	function(data){
		$.each(data.users ,function(i,item){
			$("#espanEmail").html(item.message);
		});//each
	});//json


}
function writeDBB(dbId)
{
	var errLabel;

	alert("write");
	$(document).ready(function(){
	$.getJSON("http://localhost:8280/StarAdvisor/write.php?emaild="+dbId+"&callback=?",
	function(data){
//$("#espanEmail").append("item.message");	
		$.each(data.users,function(i,item){//should only show error item
//			$("#espanEmail").append(item.message);
//			$("#espanEmail").append(item.message);
			$("#espanEmail").html(item.message);
		
		});

			



	});

	});//document ready
}

function getListDBB(dbId)
{
				//table cells

	var tabP;
	var tab1;
	var tab2;
	var tab3;
				//variable determines whether to append.
				//0:dont change, 2:insert cell values, 1:append
	var pending = 0;

	alert("pre jquery");
  // document.starformLog.youre.value="null";
  document.starform.youre.value="null";
/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: dbId,
    tagmode: "any",
    format: "json"
 },
  function(data) {

$("#yournamea").val("hello");


      $("#images").html("");
      $.each(data.items, function(i,item){

      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      if ( i == 8 ) 
	  {
        $("#images> img").each(function()
		{

		    var iE=$(this);

		    iE.wrap("<a href=\" "+iE.attr("src")+"\"> </a>");
		});
	  return false;
          }
    });
  });

*/
//--------------------------------------

$(document).ready(function(){
//	location.href="index.html";
alert ("here");
//--alert ("ehire");
$("#yourname").html("hello");
$("#yournameb").val("hello");

$("#yournamea").val("hello");
//$phURL="http://localhost:8280/myf3.php?jsoncallback=?";
//$phURL="http://localhost:8280/displayfo.php?jsoncallback=?";


//$.getJSON($phURL,function(data){
//$.getJSON("http://localhost:8280/StarAdvisor/myf3.php",
$.getJSON("http://localhost:8280/StarAdvisor/myf3.php?callback=?",
function(data){
//    $.each(data.items,function(i,item){
//$("#yournamea").val("hello");
   alert ("hi");
//    $o=eval('('+data+')');
  //  alert (data.first);
  //  $tusers=data.users.length;
    $.each(data.users,function(i,item){
	pending=1;
	//item =array_values(item);
//	$("#dbTable").addRow({
//	newRow:"<tr><td>"+item.first+" </td><td> "+item.last+"</td> <td>"+item.phone+"</td><td>"+item.mobile+"</td> </tr>", addTop: false , removeTop:false});


//	$("<tr><td>"+item.first+" </td><td> "+item.last+"</td> <td>"+item.phone+"</td><td>"+item.mobile+"</td> </tr>").appendTo("#dbTable tbody");


/*******************  i3********************************
	if (i <3)
	    {
	$("#dbTable tbody tr:eq("+i+") td:eq(0)").html(item.first);
	$("#dbTable tbody tr:eq("+i+") td:eq(1)").html(item.last);
	$("#dbTable tbody tr:eq("+i+") td:eq(2)").html(item.phone);
	$("#dbTable tbody tr:eq("+i+") td:eq(3)").html(item.mobile);
	} else if (i >= 3)
	    {

*******************************************************/

//	$("#dbTable tbody tr:eq("+i+") td:not('"+item.first+"')").map(function()
//	$("#dbTable tbody tr:eq("+i+") td:contains('"+item.first+"')").map(function()
//	$("#dbTable tbody tr:eq("+i+") td:eq(0):not('"+item.first+"')").map(function()

//	$("#dbTable tbody tr:eq("+i+") td:not(contains('"+item.first+"'))").map(function()


	tabP=$("#dbTable tbody tr:eq("+i+") td:eq(0)");
	//if (tabP.text().length > 1)
    if (tabP.text().length > 0)
    {//--alert (tabP.text());
	$("#dbTable tbody tr:eq("+i+") td:eq(0):contains('"+item[1]+"')").map(function()
	{//--alert (item.first + $(this).text());
		tab1=$("#dbTable tbody tr:eq("+i+") td:eq(1)");
		tab2=$("#dbTable tbody tr:eq("+i+") td:eq(2)");
		tab3=$("#dbTable tbody tr:eq("+i+") td:eq(3)");

		//match all cells

		if (($("#dbTable tbody tr:eq("+i+") td:eq(1):contains("+item[2]+")").text().length >0) && ($("#dbTable tbody tr:eq("+i+") td:eq(2):contains("+item[3]+")").text().length > 0 ) && ($("#dbTable tbody tr:eq("+i+") td:eq(3):contains("+item[4]+")").text().length > 0))
		{
			//--alert ("matchp:"+$("#dbTable tbody tr:eq("+i+") td:eq(1)").text()+$("#dbTable tbody tr:eq("+i+") td:eq(2)").text()+$("#dbTable tbody tr:eq("+i+") td:eq(3)").text()+":"+item.last+item.phone+item.mobile);//+item.phone+tab2.text());
			pending=0;
		}else//match all
		{
//		alert ("nomatch"+item.phone +$("#dbTable tbody tr:eq("+i+") td:eq(2)").text());
	//	alert ("nomatch"+item.phone +tab2.text());
		alert ("nomatch"+$("#dbTable tbody tr:eq("+i+") td:eq(1)").text()+$("#dbTable tbody tr:eq("+i+") td:eq(2)").text()+$("#dbTable tbody tr:eq("+i+") td:eq(3)").text()+":"+item[2]+item[3]+item[4]);//+item.phone +tab2.text()+tab3.text()+tab1.text());
	//	alert ("nomatch"+item.phone +tab2.text());


		pending=2;
//("nomatch:"+item.phone+$tab2.txt()+"at"+i);
		}//else match all
//	$pending=0;

	});//map first item

	if ( pending ==1)  //since table cell exists
	{
		//--alert(""+i+"");
		pending=2;		//dont append
	}
//	$pending=0;
	}  //tabP length

//	$("<tr><td>"+item.first+" </td><td> "+item.last+"</td> <td>"+item.phone+"</td><td>"+item.mobile+"</td> </tr>").appendTo("#dbTable tbody");
/*	if ($("#dbTable tbody tr:eq("+i+") td:eq(0)").contains(item.first))
	{alert (item.first);
	$("#dbTable tbody tr:eq("+i+") td:eq(0)").html(item.first);
	$("#dbTable tbody tr:eq("+i+") td:eq(1)").html(item.last);
	$("#dbTable tbody tr:eq("+i+") td:eq(2)").html(item.phone);
	$("#dbTable tbody tr:eq("+i+") td:eq(3)").html(item.mobile);
		
	}else
	{
*/	
	if (pending == 1)
	{	//alert ("pendLine:"+$tabP);
	$("<tr><td>"+item[6]+" </td><td> "+item[2]+"</td> <td>"+item[3]+"</td><td>"+item[4]+"</td><td><button class=\"butdelc\">Delete</button></td> </tr>").appendTo("#dbTable tbody");
	}else if (pending==2)
	{	
	alert("itemii:"+item.phone);
		//alert("itemii:"+item.getPhone());
		//alert ("item"+item.last);
	$("#dbTable tbody tr:eq("+i+") td:eq(0)").html(item[6]);
	$("#dbTable tbody tr:eq("+i+") td:eq(1)").html(item[2]);
	$("#dbTable tbody tr:eq("+i+") td:eq(2)").html(item[3]);
	$("#dbTable tbody tr:eq("+i+") td:eq(3)").html(item[4]);
			
	}//pending==0


//	}


//		return false;



//	    }  i>=3



	});//each json


});//json

});//doc.ready
}//end of getListDBB

//************  Start SectionDBB
function getSectionDBB(dbId)
{
//-----------------------------------
//Gets blog entries from search terms
//


/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
 },
  function(data) {
      $("#images").html("");
      $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      if ( i == 8 ) 
	  {
        $("#images> img").each(function()
		{
		  //  alert ("IIimage:"+this.src);
		    var iE=$(this);
		//    iE.wrap("<a href=' "+iE.attr("src")+"' </a>");
		    iE.wrap("<a href=\" "+iE.attr("src")+"\"> </a>");
		});
	  return false;
          }
    });
  });




*/

//-----------------------------------

    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";

    document.getElementById("fbox").style.display="";

    hpb="<div id=\"searchDi\"><p>Enter terms to list DB entries </p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressDBB(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getListDBB(document.getElementById('sbox').value);\">Search Noww</button> </div>";
     hpb=hpb+"<div id=\"tbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Display All Data</button></div>";

    hpb=hpb+"</div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.


}
//-------------End SectionLogin---------------
//-------------SectionLogin-----------------
function getSectionLogin(dbId)
{

    document.getElementById("pageBar").style.display="none";
    document.getElementById("formstar").style.display="";
    document.getElementById("forma").style.display="none";
    document.getElementById("dbTable").style.display="none";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";
    document.getElementById("son").style.display="none";

  //  document.getElementById("fbox").style.display="";


    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";




    //    alert("pageBar");
//    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("hero").style.display="none";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";



}


//--------------End SectionLogin
//-------------SectionInsertDB--------------
function getSectionInsertDB(dbId)
{
//-----------------------------------
//Gets blog entries from search terms
//


/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
 },
  function(data) {
      $("#images").html("");
      $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      if ( i == 8 ) 
	  {
        $("#images> img").each(function()
		{
		  //  alert ("IIimage:"+this.src);
		    var iE=$(this);
		//    iE.wrap("<a href=' "+iE.attr("src")+"' </a>");
		    iE.wrap("<a href=\" "+iE.attr("src")+"\"> </a>");
		});
	  return false;
          }
    });
  });




*/

//-----------------------------------

    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";

    document.getElementById("fbox").style.display="";

    hpb="<div id=\"searchDi\"><p>Enter terms to list DB entries </p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressDBB(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getListDBB(document.getElementById('sbox').value);\">Search Noww</button> </div>";
     hpb=hpb+"<div id=\"tbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Display All Data</button></div>";

    hpb=hpb+"</div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.


}



//-------------End SectionInsertDB-------



//--------------------------------------------
function getSectionBlog(dId)
{
//-----------------------------------
//Gets blog entries from search terms
//
//-----------------------------------

    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";
 //   document.getElementById("fbox").style.display="none";

    hpb="<div id=\"searchDi\"><p>Enter terms to list blog sites listed on StarServer's cached site for Strudel.net </p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressBl(event,this.form)\"/>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
    hpb=hpb+"</div>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Search New</button>";
    hpb=hpb+"</div></div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.

}


    function load()
    {
//	document.getElementById("imagesky").style.display="none";
//	document.getElementById("pageBar").style.display="none";
//	document.getElementById("journ").style.display="none";
//	document.getElementById("son").style.display="none";
//	document.getElementById("fbox").style.display="none";

//	document.getElementById("loadson").style.display="";

    document.getElementById("pageBar").style.display="";
    document.getElementById("formstar").style.display="";
    document.getElementById("forma").style.display="";
    document.getElementById("dbTable").style.display="";

    document.getElementById("journ").style.display="";
    document.getElementById("imagesky").style.display="";

    document.getElementById("hero").style.display="";

    document.getElementById("imagesky").style.display="";


	document.getElementById("imagesky").innerHTML="";
	document.getElementById("pageBar").innerHTML="";
	document.getElementById("journ").innerHTML="";
	document.getElementById("son").innerHTML="";



//	document.getElementById("fbox").innerHTML="";
//P	document.getElementById("loadson").innerHTML="";
	setMap();
	
//	$('.quickflip-wrapper3').quickFlip();
	setRPic(0);



    }
function getSectionSky(dId)
{

    document.getElementById("pageBar").style.display="";
//    document.getElementById("pageBar").innerHTML="ddddd";


    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
//    document.getElementById("son").before="";
    document.getElementById("son").style.display="";
   // document.getElementById("fbox").style.display="none";
    document.getElementById("pageBar").innerHTML="";

    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    hpb="<div id=\"searchSki\" ><p>Enter Capitalized city name (Canadian cities work best):Degree sign may show up as question mark.</p>  <input type=\"text\" id=\"skbox\"  onkeypress=\"handleKeyPressSki(event,this.form)\" />";
    hpb=hpb+"<div id=\"skbutton\"> <button onclick=\"getMatchSky(document.getElementById('skbox').value)\">dSearch Now</button>";
    hpb=hpb+"</div></div>";
    //    alert("pageBar");
    


//    document.getElementById("pageBar").innerHTML=hpb;
    $(hpb).appendTo("#content .main #pageBar");

    document.getElementById("imagesky").style.display="";

    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.

}

/*****************************************
Function: getMatchSky:

Description: Tries to get simple sky image  page data from sky site:

Status:  working.  Currently replaces  getMatchSkyFull
*********************************************************/



function getMatchSky(skId)
{
    var htski="<p><b><font color=#fe2>"+skId+"</font></b></p><BR><BR>";
    
    //capitalize substring

    var skCap= skId.substr (0,1);
    var skRest= skId.substr (1,skId.length -1);
    var skIdFull ="";

    skIdFull=skCap.toUpperCase()+skRest.toLowerCase();

    alert(skIdFull);
    htski=htski+"<img alt=\"alter\" src=\""+serverLoc+"Yoursky"+skIdFull+"_files/Yoursky.gif\" height=\"340\" width=\"340\"/>";
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";

    document.getElementById("imagesky").innerHTML=htski;
    getMatchCi(skIdFull);
    //    alert(htski+"340");

}

/*****************************************
Function: getMatchSkyFull:

Description: Tries to get fuller sky image page data from sky site:

Status: Non working.  Currently replaced by simpler function getMatchSky
*********************************************************/

function getMatchSkyFull(skId)
{
    var htski="";
    //    var htski="<p><b><font color=#fe2>"+skId+"</font></b></p><BR><BR>";
    //    alert(skId);
    //    htski=htski+"<img alt=\"alter\" src=\""+serverLoc+"Yoursky"+skId+"_files/Yoursky.gif\" height=\"340\" width=\"340\"/>";


    var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    //    var urlSk="http://localhost:8280/s/journals-and-newsletters.html";
    var urlSk=serverLoc+"Yoursky"+skId+".html";
    var htr="";
    //        var term="ature";
     var termMap="<map";
     //     var termImg="<img";
          var termImg="/map>";
     //var termImg="</font></em></a><br />";
    var htTok="<li><a href=\"http://";
    var htTokE="</a>";
    var htStart="<li><a href=\"http://";
    var htEnd="</a></li>";
    var dLen=0;
    var htcount=0;
    var htarr=[];
    var htsamp="<BR><p><b><font color=#fe2 size=22px >RESULTS FOUND:</b></p></font><BR>";
    var htleft="";
    var htout="";
    var htsub="";
    var htTotal="";
    var htsubLen=0,htleftLen=0;
	 var rPos;
	     //	     var aPos=data.search("htt");
	     var aPos;
	     var htleft;
	     var arrCount=0;
	     var doubleFlag=0;
	     var htsho="";
	     var htshow="";


        $.get(urlSk,function(data)
     {

	     htleft=data;
	  rPos=data.toLowerCase().search(termMap.toLowerCase());
	  // alert ("here");
	 //	 var rPos=data.toUpperCase().search(term);
	     //	     	     alert ("herae:"+htleft);
	     //	     aPos=htleft.syearch("htt");
	     //	     while ((aPos=htleft.toLowerCase().search(htTok.toLowerCase())) != -1)
	     /*
	       while ((mPos=htleft.toLowerCase().search(termArea.toLowerCase())) != -1)
	       {
	       
	       }



	      */



	     if ((aPos=htleft.toLowerCase().search(termImg.toLowerCase())) != -1)
	          {
			 //alert("Ffound"+aPos);
			 //			 			  var htsho=htleft.substr(aPos+htTok.length,80);
		      //	 			   htsho=htleft.substr(rPos-1,203);
		      //Change		       htsho=htleft.substr(rPos-1,aPos-1);
		      //		 htsho=htleft.substr(rPos-1,aPos+termImg.length+1);
		      //	       htsho=htleft.substr(rPos-1,aPos-1);

		 htsho=htleft.substr(rPos-1,aPos+1+termImg.length);
		 //		 alert(htsho.substr(htsho.length-10,htsho.length);
		  }
//			  var htshow=htsho.substr(0,htsho.search(htTokE));
	     //alert("MAP--"+htsho);
//						   htshow=htsho.substr(0,htsho.toLowerCase().search(htTokE.toLowerCase())+htTokE.length);
			 //			 var htshow=htleft.substr(aPos+htTok.length,htleft.search("/a>"));

	     //			 htleft=htleft.substr(aPos+htTok.length,htleft.length - aPos -htTok.length);

	     //     htsamp=htsamp+"</ul>";
	     //    document.getElementById("journ").innerHTML=htsamp;
		    //		    		    document.getElementById("images").style.display="none";
	     //-------------------------------------------


	document.getElementById("journ").style.display="none";



	htski=htski+htsho;

	//	htski=htski.replace('°'.charCode(),"&deg;");
	
	//	htski=htski.replace("/Yoursky.gif",serverLoc+"Yoursky.gif");
	//		htski=htski.replace("above","&deg;");
		//alert (htski);
		htski=htski+"</map>";

    htski=htski+"<p><b><font color=#ffee22>"+skId+"</font></b></p><BR><BR>";
    //        alert(htski);
	//    htski=htski+"<img usemap=\"#telmap\" ismap=\"ismap\" alt=\"alter\" src=\""+serverLoc+"Yoursky"+skId+"_files/Yoursky.gif\" height=\"340\" width=\"340\"/>";
	    htski=htski+"<img usemap=\"#telmap\" ismap=\"ismap\" alt=\"alter\" src=\""+serverLoc+"Yoursky"+skId+"_files/Yoursky.gif\" /><BR><BR><BR><BR>";


	    //        document.getElementById("imagesky").innerHTML=htski;
	    //	$('#imagesky').html(htski);
		    		    document.getElementById("imagesky").style.display="";

	      }).error(function(){alert("An error has occurred");return;}).complete(function()
	     {    });

    //    alert(htski+"340");

}





function handleKeyPressSki(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiSki");




   getMatchSky(document.getElementById('skbox').value);


	    //load();
	}
}


function handleKeyPressJ(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiJ");



     getMatchJ(document.getElementById('sbox').value);


	}
}


function handleKeyPressBl(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiJ");



     getMatchBl(document.getElementById('sbox').value);


	}
}


function handleKeyPressDBB(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiJ");


		getListDBB("meteor");
//     getMatchBl(document.getElementById('sbox').value);
		
		

	}
}


function handleKeyPressFeed(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiJ");




//     setSFeed(document.getElementById('sbox').value);
     setSSFeed(document.getElementById('sbox').value);


	}
}

