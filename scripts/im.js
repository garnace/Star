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
htReal[4]="http://www.seasky.org/astronomy/astronomy-calendar-2015.html";






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
csl += "<img src=\"i/img/dish/dish2.jpg\" width=\"200px\" height=\"200px\" alt=\"sky scape\"/>";
csl +="<div class=\"carousel-caption\"><p style=\"font-size:200%;text-align:left;color:#FFFFFF;\">Try New Food</p><p style=\"font-size:220%;color:#225555;text-align:right;font-family:Poster,serif;\">With Someone New &hearts;</p></div>";
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
//    tagmode: "any",
    tagmode: "all",
    format: "json"
 },
  function(data) {

      $("#yCarousel").html(csl);      


      $.each(data.items, function(i,item){
	$("<img/>").attr("src", "i/img/dish/dish"+(i+1)+".jpg").attr("title",item.title).appendTo("#yCarousel #myCarousel .carousel-inner");

      //$("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#yCarousel #myCarousel .carousel-inner");


      if ( i == 8 ) 
      {
	  var ji=0;

     	 $("#yCarousel #myCarousel .carousel-inner > img").each(function()
	 {
		

		    var iE=$(this);

		    iE.wrap("<div class=\"item\"><a href=\"i/img/dish/dish"+ji+".jpg\"> </a> <div class=\"carousel-caption\"><p style=\"font-size:240%;text-align:left;color:#FFFF11;\">Try New Food</p><p style=\"font-size:220%;color:#FF5588;text-align:right;font-family:Poster,serif;\">With Someone New &hearts;</p></div>  </div>");
//		    iE.wrap("<div class=\"item\"><a href=\"i/img/dish/dish"+ji+".jpg\"> </a></div>");
		   // iE.wrap("<div class=\"item\"><a href=\" "+iE.attr("src")+"\"> </a></div>");
			ji=ji+1;
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
		    iE.wrap("<a href=\"i/img/dish/dish4.jpg \"> </a>");
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


//alert("flickr setPic");
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId+",nasa",
//    tagmode: "any",
    tagmode: "all",
    l:"4",
    format: "json"
 },
  function(data) {
      $("#images").html("");
	alert("hello"+pId);
      $.each(data.items, function(i,item){

      pRay.push(item);

      $("<img/>").attr("src", pRay[i].media.m).attr("title",pRay[i].title).appendTo("#images");
      if ( i == 8 ) 

      {
	   $("#images> img").each(function()
	   {
		    alert ("IIimage:"+this.src);

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
*Function to double number of images on board for memory game
*Game code idea modeled from http://webdevplayground.com/2009/09/a-basic-memory-game-with-jquery-and-php/
*
*The use of quickflip was decided  after experimenting between quickflip and flipbox
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


//		iD=iD+"<div class=\"di1\"><div class=\"img-frame\"> <img src=\"images/Yoursky.gif\" class=\"img-responsive\" /><div class=\"img-frame-hover\"><a href=\"#\" class=\"quickFlipCta\"><i class=\"fa fa-play-circle\"></i></a></div> </div> </div>";
		iD=iD+"<div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive\" /></a></div>";
		iD=iD+"<div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>";

		iD=iD+"</div>";
		iD=$(iD);

		//testing
		if(i==4){
		var ele= $(iD.children()[0]).children();


		//(1st wrapper div)->anchor->image
		//	var ele= $(iD.children()[0]).children().children();
//flickran		alert ("id:"+$(ele[0]).attr("class"));	
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
//  end boardDoubler



/**  #boardToubler
*Function to double number of images on board
*using flipbox instead of quickFlip

*Status: non functional
*/

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
// end  #boardToubler


/**  #setPicP
*Function to populated imagesp div
*
*status: non functional
*/

function setPicP(pId,pRay)
{

//-------------------------

//Flikr Example taken from

//http://api.jquery.com/jQuery.getJSON/

//------------------

alert("here picP");


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

/*function clickPicQF(picId)
*
*Function that listens to click event
*User click is used to trigger checkEv function
*
*Used with quickflip
**/

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


/*function clickPic(picId)
*
*Function that listens to click event with flipbox
*User click is used to trigger checkEv function
*
*Status: non functional
**/

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
//end clickPic


/**  function setTim
*
*Used to wrap setTimeout
*
*Status: not used
**/

function setTim()
{
	setTimeout(matchAlert,5000);
}

/** function checkPic 

Function to check 2 picture cards
with helper functions for match events
*
*
**/

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
				
				exit();//use exit instead of return false
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
//  end checkPic


/** function matchAlert
*
*Function to alert a match
*
*
**/

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
//end matchAlert


/** function noMatch
*
*  Function to handle non matching card select
*
**/

function noMatch(pId)
{

	//remove headp class
	$(pId[0]).removeClass("headp");
//	alert("no");
	$(pId[1]).removeClass("headp");


	//check make sure not child as in raasch example for quickflip
	//http://dev.jonraasch.com/quickflip/examples/hover-quickflips
//	if (!pId.slice(0).hasClass("quickflip-wrapper3"))
	if (!$(pId[0]).hasClass("quickflip-wrapper3"))
	{
		//flip back parent
		$($(pId[0]).parent()).quickFlipper();

//		alert("noclass");



	}
	else
	{
		//flip back element
		$(pId[0]).quickFlipper();		

//		alert("class"+$(pId[0]).attr("class"));

	}

	//again for the 2nd pic
	//check make sure not child as in raasch example for quickflip
	if (!$(pId[1]).hasClass("quickflip-wrapper3"))
	{
		//flip parent
		$($(pId[1]).parent()).quickFlipper();



	}
	else
	{
		//flip 2nd pic element
		$(pId[1]).quickFlipper();		

	}




}
// end noMatch

/** function setRPic
*
* Function to setup random picture cards for quickflip
*
**/
function setRPic(pId)
{
$(document).ready(function(){

	//bind events for match and check picture events

	$(document).bind("checkEv",checkPic);
	$(document).bind("matchEv",matchAlert);
    var srpA= new Array();

//    var arrPic=["galaxy","star night","sky","observatory","nebula","moon","asteroid","meteor","telescope"];
    var arrPic=["galaxy","star","comet","nebula","moon"];
    var randI=Math.floor(Math.random()*(arrPic.length));
//	$('.quickflip-wrapper3').quickFlip();
//	srpA.push("hello");
//	alert("fLICKCK setRPIC");

//	alert("+");
//    setPicP(arrPic[randI],srpA);
//    setCarousel(arrPic[randI]);
    setPic(arrPic[randI],srpA,randI);
});



}
/*********************load()---------------
*Function to set-up page elements on load
*initializing divs and json requests
*
*
**/
function load()
    {

alert("what");
    setRPic(0);


















//    setRPic(0);



}
//--end  load()---------------
$(function(){



});
