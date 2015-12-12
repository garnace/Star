//Course:  CS3210
//Name:  Aikan Van Spyk
//ID: 0099364


//Project: Star Advisor
//----------------------------

hostUrl = window.location.href.split('\/')[2];

//var serverLocOrig="http://localhost:8280/StarServer/";
var serverLocOrig="http://"+hostUrl+"/StarServer/";
//var serverLoc="http://localhost:8280/StarServer/";
var serverLoc="http://"+hostUrl+"/StarServer/";
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
//	alert("hello"+pId);
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

function setPicB(pId,pR,randY)
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
//      $("#images").html("");
//	alert("hello"+pId);
      $.each(data.items, function(i,item){

      pRay.push(item);

//      $("<img/>").attr("src", pRay[i].media.m).attr("title",pRay[i].title).appendTo("#images");
      if ( i == 8 ) 

      {
/*	   $("#images> img").each(function()
	   {
		    var iE=$(this);
		    iE.wrap("<a href=\" "+iE.attr("src")+"\"> </a>");
	    });
*/

//	boardDoubler(pRay);
	boardDoublerCF(pRay);
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

		ranP= Math.floor(Math.random()*pAA.length); 
//		{
			tempP=item;
			tempR=pAA[ranP];
			pAA[i]=tempR;          //pAA[ranP];
			pAA[ranP]=tempP;       //item;
//			rAA.push(pAA(ranP));
//		}

	});

	//try to randomize pictures that ended up side by side

	$.each(pAA, function(i,item){
		if ( ( (pAA[i+1]!=null) &&(pAA[i].media.m== pAA[i+1].media.m)) || ((pAA[i-1]!=null)&&(pAA[i].media.m== pAA[i-1].media.m)) || ((pAA[i+4]!=null)&&(pAA[i].media.m== pAA[i+4].media.m)))
		{

		ranP= Math.floor(Math.random()*pAA.length); 
//		{
			tempP=item;
			tempR=pAA[ranP];
			pAA[i]=tempR;          //pAA[ranP];
			pAA[ranP]=tempP;       //item;
//			rAA.push(pAA(ranP));
//		}
			
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


/**  #   boardDoublerCF ******************************

*Function to double number of images on board using
*CakeFactory layout for memory game
*Game code idea modeled from http://webdevplayground.com/2009/09/a-basic-memory-game-with-jquery-and-php/
*
*The use of quickflip was decided  after experimenting between quickflip and flipbox
*
*@param array pI
*
**/


function boardDoublerCF(pI)
{
	var rAA = new Array();
	var track= new Array();
	var ranP=null;
	var tempP = null;
	var tempR=null;

	

//	alert("return"+pI);
	var pAA = null;
	pAA = new Array();
/*
	if (typeof(document.getElementById("imagesp"))!=null)
	{	document.getElementById("imagesp").innerHTML="";
	}
*/

	//clear div if filled

	if (window.document.getElementById("imagesp")!=undefined)
	{	document.getElementById("imagesp").innerHTML="";
	}



	$.each(pI, function (i,item){
		pAA.push(item);
	});

	$.each(pI, function (i,item){
		pAA.push(item);
	});

	//randomize pics

	$.each(pAA, function (i,item){

		ranP= Math.floor(Math.random()*pAA.length); 

			tempP=item;
			tempR=pAA[ranP];
			pAA[i]=tempR;          //pAA[ranP];
			pAA[ranP]=tempP;       //item;



	});

	//try to randomize pictures that ended up side by side

	$.each(pAA, function(i,item){
		if ( ( (pAA[i+1]!=null) &&(pAA[i].media.m== pAA[i+1].media.m)) || ((pAA[i-1]!=null)&&(pAA[i].media.m== pAA[i-1].media.m)) || ((pAA[i+4]!=null)&&(pAA[i].media.m== pAA[i+4].media.m)))
		{

		ranP= Math.floor(Math.random()*pAA.length); 

			tempP=item;
			tempR=pAA[ranP];
			pAA[i]=tempR;          //pAA[ranP];
			pAA[ranP]=tempP;       //item;


			
		}

	});//each randomizer

	$.each(pAA, function (i,item){


	        var iiD=$("<br style=\"clear:both;\"/>");
	        var iiDCF=$("<div class=\"row\">");
	        var iiDCFall=$("<div class=\"row\"></div>");
	        var iiDCEnd=$("</div>");


//var iD="<div class=\"col-md-3 col-sm-4 qww"+i+"  \"><!-- Separate gallery element --><div class=\"element\"><div class=\"quickflip-wrapper8 qw"+i+"\"><div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div></div></div>";

/*var iD="<div class=\"col-md-3 col-sm-4 qww"+i+" quickflip-wrapper8 qw"+i+"  \"><!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";*/

var iD_AA="<div class=\"col-md-3 col-sm-4 qww"+i+"\"> <div class=\" quickflip-wrapper8 qw"+i+"  \"><!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div></div>";
var iD_AB="<div class=\"col-md-3 col-sm-4 qww"+i+" quickflip-wrapper5 qw"+i+"  \"><!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";

var iD_A="<div class=\"col-md-3 col-sm-4 qww"+i+"\">";
var iD_A2=" <div class=\" quickflip-wrapper8 qw"+i+"  \"><!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";
var iD_B2=" <div class=\" quickflip-wrapper5 qw"+i+" \"><!-- Separate gallery element --><div class=\"di1\"><a href=\"#\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div ></div>";
var iD_A2o=" <div class=\" quickflip-wrapper3 qw"+i+"  \"><!-- Separate gallery element --><div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";
var iD_A2op=" <div class=\"quickflip-wrapper5 qw"+i+"  element \"><!-- Separate gallery element --><div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";
var iD_A1="<div class=\" quickflip-wrapper3 qw"+i+" col-md-3 col-sm-4 qww"+i+" \"> <!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";
var iD_A2oo=" <div class=\" quickflip-wrapper5 qw"+i+"  \"><!-- Separate gallery element --><div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";
var iD_A3="</div>";
var iD_A4="<div class=\"col-md-3 col-sm-4 qww"+i+"  \"></div>";
var iD_A5="<div class=\"col-md-3 col-sm-4 qww"+i+"\"><div class=\"element\"></div></div>";

var iD_B="<div class=\"col-md-3 col-sm-4 qww"+i+" quickflip-wrapper8 qw"+i+"  \"><!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";

var iD_C="<div class=\"col-md-3 col-sm-4 qww"+i+" quickflip-wrapper8 qw"+i+"  \"><!-- Separate gallery element --><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div>";


		//card element
/*		var iD="<div class=\"quickflip-wrapper3 qw"+i+"\" style=\"float:left;display:inline;\">";
		iD=iD+"<div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive\" /></a></div>";
		iD=iD+"<div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>";

		iD=iD+"</div>";
*/



	var iD="<div class=\"quickflip-wrapper3 qw"+i+"\" style=\"float:left;display:inline;\">";
		iD=iD+"<div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive\" /></a></div>";
		iD=iD+"<div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div>";

		iD=iD+"</div>";






/* CF works var iD="<div class=\"col-md-3 col-sm-4 qw"+i+"\"><!-- Separate gallery element --><div class=\"element\"><!-- Image --><img class=\"img-responsive img-thumbnail\" src=\"../cf/theme/img/dish/dish1.jpg\" alt=\"\"/><!-- Gallery Image Hover Effect --><span class=\"gallery-img-hover\"></span><!-- Gallery Image Hover Icon --><a href=\"../cf/theme/img/dish/dish1.jpg\" class=\"gallery-img-link\"><i class=\"fa fa-search-plus hover-icon icon-left\"></i></a><a href=\"#\"><i class=\"fa fa-link hover-icon icon-right\"></i></a></div></div>";
*/





//var iD="<div class=\"col-md-3 col-sm-4 qww"+i+"  \"><!-- Separate gallery element --><div class=\"element\">< div class=\"quickflip-wrapper3 qw"+i+"\"><div class=\"element di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" /></a></div><div class=\"element di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"../cf/theme/img/dish/dish1.jpg\" class=\"img-responsive img-thumbnail\" title=\""+pAA[i].title+"\" /></a></div></div> </div></div>";




//var iD="<div class=\"col-md-3 col-sm-4 qww"+i+"  \"><!-- Separate gallery element --><div class=\"element\">< div class=\"quickflip-wrapper3 qw"+i+"\"><div class=\"di1\"><a href=\"#\" class=\"quickFlipCta\"><img src=\"images/Yoursky.gif\" class=\"img-responsive\" /></a></div><div class=\"di2\"><a href=\"#\" class=\"quickFlipCta\"><img src=\""+pAA[i].media.m+"\" title=\""+pAA[i].title+"\" /></a></div></div> </div></div>";




		iD=$(iD);
		iD_AA=$(iD_AA);
		iD_A1=$(iD_A1);
		iD_AB=$(iD_AB);
		iD_A1=$(iD_A1);
		iD_A2o=$(iD_A2o);
		iD_A2op=$(iD_A2op);
		//testing
		if(i==4){
		var ele= $(iD.children()[0]).children();


		//(1st wrapper div)->anchor->image
		//	var ele= $(iD.children()[0]).children().children();
//flickran		alert ("id:"+$(ele[0]).attr("class"));	
//		alert ("id:"+$(ele[0]).attr("class"));	
		}

/*		iD.quickFlip();


	        iD.bind("click",{pId:iD},clickPicQF);
*/
		iD_A2op.quickFlip();


//	        iD_A1.bind("click",{pId:iD},clickPicQF);
	        iD_A2op.bind("click",{pId:iD_A2op},clickPicQF);





//		iD=$(iD_A2o).wrapInner(iD_A4);


		if (i%4==0 ){		//break lines but not the first

//			iiD.appendTo("#imagesp");
//			iiD.appendTo(".board");
//			iiDCFall.appendTo(".gallery-content .board");
//			alert($(iD).html());
			iiDCFall.appendTo(".board");
//			iiDCF.appendTo(".gallery-content-board");
		}
		/*else if (i%4==0 && i==0){	

			iiDCF.appendTo(".gallery-content-board");
		}*/

//		iD.appendTo("#imagesp");
//		iD.appendTo(".gallery-content .board .row");
//		iD_AA.appendTo(".gallery-content .board .row");
//			$('#cartd ul').append(liString+$(item).html()+liStringEt +"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span></span>").html()+"</a></li>");

//CHANGE		iD.appendTo(".board .row:last");
//		iD.appendTo(".board .row:last");
//		$(".board .row:last").append($(iD));
//		$(".board .row:last").append($(iD).wrapInner(iD_A4));
//		$(".board .row:last").append($(iD_A).html()+$(iD_A2).html()+$(iD_A3).html());
//	$(".board .row:last").append(iD);
//		$(".board .row:last").append(iD_A+$(iD_A2o).html()+iD_A3);
//		$(".board .row:last").append($(iD).html());
//		$(".board .row:last").append($(iD_A2o));
		$(".board .row:last").append(iD_A4);
//		$(".board .row:last").append(iD_A1);
		$(".board .row:last div[class*=qww]:last").append($(iD_A2op));
//		$(".board .row:last .element:last").append($(iD_A2o));
//		$(".board .row:last .element:last").append($(iD_B2));

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
//	alert("bind"+$($(data.pId).parent()).html());
//	alert("bind"+$(data.pId).html());
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
//--less spec	var heads=$("#imdivp #imagesp .headp");
//	var heads=$("#imdivp #imagesp .headp");
	var heads=$(".headp");
//alert($(".headp").length);
//	var headsv=$("#imdivp #imagesp .headp");
//-----change to hidy
//	var headsv=$("#imdivp #imagesp .headp:visible");
//	var total=$("#imdivp #imagesp img:visible").length;
//-----change to hidy
//	var headsv=$("#imdivp #imagesp .headp .hidy");
//-less spec	var headsv=$("#imdivp #imagesp .headp");
//	var headsv=$("#imdivp #imagesp .headp");
	var headsv=$(".headp");
//	var total=$("#imdivp #imagesp ").length;




//falert		setTimeout(function(){alert("found"+total+"VIS"+headsv.length);},1000);

	//go through upturned cards
//less spec	$("#imdivp #imagesp .headp").each(function (i,item){
	$(".headp").each(function (i,item){
//	data.pId.each(function (i,item){

		//check if only 2 turned up cards
		if (headsv.length==2)
		{
//			alert ("two"+heads.slice(0).attr("src"));
//			alert ("two"+$($(headsv.slice(0).children()[1]).children().children()).attr("src"));

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

	//next add hidy class to  hide by css
//	$(pId[0]).hide();
//	$(pId[1]).hide();


	//next disable
	$(pId[0]).prop('disabled',true);
	$(pId[1]).prop('disabled',true);


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
	alert("no");
	$(pId[1]).removeClass("headp");


	//check make sure not child as in raasch example for quickflip
	//http://dev.jonraasch.com/quickflip/examples/hover-quickflips
//	if (!pId.slice(0).hasClass("quickflip-wrapper3"))
	if (!$(pId[0]).hasClass("quickflip-wrapper5"))
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
	if (!$(pId[1]).hasClass("quickflip-wrapper5"))
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

    setCarousel(arrPic[randI]);
    setPic(arrPic[randI],srpA,randI);
});



}

/** function setRPik
*
* Function to setup random picture cards for quickflip
*
**/
function setRPik(pId)
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
//    setPic(arrPic[randI],srpA,randI);
    setPicB(arrPic[randI],srpA,randI);
});



}


/** function setRP
*
* Function to setup random picture cards for quickflip
*
*Status: not used
**/

function setRP(pId)
{


    var arrPic=["galaxy","star night","sky","observatory","nebula","moon","asteroid","meteor","telescope"];
    var randI=Math.floor(Math.random()*(arrPic.length));
	alert("rick");

//    setCarousel(arrPic[randI]);
    setPic(arrPic[randI]);

//--------------------------------------




}

function siteQuiz()
{
	window.location.href="quiz.php?action=showQ";
}

function getNextQuest()
{

}

function getLoc(tId)
{
/* ****************************************
 based on jquery game example: http://code.tutsplus.com/tutorials/jquery_android--mobile-4720
http://code.tutsplus.com/tutorials/use-jquery-mobile-to-build-a-native-android-news-reader-app-part-2--mobile-4775
http://code.tutsplus.com/tutorials/use-jquery-mobile-to-build-a-native-android-news-reader-app-part-3--mobile-4886

********************************************/
//	alert("hello");

	$(function (){
	var EMPTY = '';
//	alert ("echange");
//	$('#tabs').tabs({selected:1});		
	if (tId ==null)
	{
		location.href="index.php?action=showres&n="+new Date().getTime()+"#shwres";
//		$.get(EMPTY,function(){
//		location.href="index.php?action=showres#chkRes";

//		});
	}
	else
	{
//	location.href="#fieldT1";
//	location.href="index.php?action=showres"+tId+"";
	location.href="index.php?action="+tId+"";
//	location.href="index.php?action="+tId+"&n="+new Date().getTime();
//		$.get(EMPTY,function(){
//		location.href="index.php?action=showresT"+tId+"";
//		});
	}
//	$("#tabs").tabs({selected:2});
	});
//	$("#tabs").tabs({selected:'2'});
//	location.href="index.php?action=showres#chkRes";

}
function getEvents(tId)
{
//***********************************************
//Get search term for Lookup service

//***********************************************    

/*

    hpab="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";






    hpab=hpab+"<div class=\"row\">";





hpab=hpab+"<div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpab=hpab+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpab=hpab+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sibox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";

hpab=hpab+"<span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getMatchJE(document.getElementById('sibox').value);\"><i class=\"fa fa-search\"></i>Press</button> </span>";
hpab=hpab+" <span class=\"in-sp\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getScrollAn('sibox');\"><i class=\"fa fa-search\"></i>Scrolle</button> </span><br>";



hpab=hpab+"</div></form></div></div></div>";
hpab=hpab+"</div>";


*/

    hpab="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";






    hpab=hpab+"<div class=\"row\">";





hpab=hpab+"<div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpab=hpab+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpab=hpab+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sibox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";

hpab=hpab+"<span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getMatchJE(document.getElementById('sibox').value);\"><i class=\"fa fa-search\"></i>Press</button> </span>";
hpab=hpab+" <span class=\"in-sp\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getScrollAn('sibox');\"><i class=\"fa fa-search\"></i>Scrolle</button> </span><br>";



hpab=hpab+"</div></form></div></div></div>";
hpab=hpab+"</div>";




//hold string

    hpxb="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";



    hpxb=hpxb+"<div class=\"row\">";
hpxb=hpxb+"<div class=\"col-md-4 col-sm-4\">";
hpxb=hpxb+"<!-- Header top left content contact -->";
hpxb=hpxb+"<div class=\"header-contact\">";
hpxb=hpxb+"<!-- Contact number -->";
hpxb=hpxb+"<span><i class=\"fa fa-phone red\"></i> 888-888-8888</span>";
hpxb=hpxb+"</div></div><div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpxb=hpxb+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpxb=hpxb+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";
hpxb=hpxb+" <span class=\"input-group-btn in-sp\"><button class=\"btn btn-default\" type=\"button\" onclick=\"setSSFeed(document.getElementById('sbox').value);\"><i class=\"fa fa-search\"></i>searchsearchsearchsearch</button> </span>";
hpxb=hpxb+"</div></form></div></div></div>";
hpxb=hpxb+"</div>";


//alt strings
    hpb="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";
//hpb=hpb+"<input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\"/>";
/*
    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"setLFeed(document.getElementById('sbox').value);\">Search LookUP</button>";
    hpb=hpb+"</div></div>";
*/

    hpb=hpb+"<div class=\"row\">";





hpb=hpb+"<div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpb=hpb+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpb=hpb+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sibox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";
//hpb=hpb+" <span class=\"input-group-btn in-sp\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getMatchJE(document.getElementById('sibox').value);\"><i class=\"fa fa-search\"></i>Press</button> </span>";
hpb=hpb+"<span class=\"in-sp input-group-btn \"><button class=\"btn btn-default\" type=\"button\" onclick=\"getMatchJE(document.getElementById('sibox').value);\"><i class=\"fa fa-search\"></i>Press</button> </span>";
hpb=hpb+" <span class=\" in-sp input-group-btn \"><button class=\"btn btn-default\" type=\"button\" onclick=\"getScrollAn('sibox');\"><i class=\"fa fa-search\"></i>Scrolle</button> </span><br>";



hpb=hpb+"</div></form></div></div></div>";
hpb=hpb+"<div class=\"clearfix\"></div>  </div>";
    document.getElementById("cartButton").innerHTML=hpb;




    document.getElementById("searchDi").style.display="";
	$(document).ready(function(){
		$('#tabs').tabs({selected:tId});
//		location.href("b/index.html#tabs-2");
	});


}
//end getEvents



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

    hpxb="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";



    hpxb=hpxb+"<div class=\"row\">";
hpxb=hpxb+"<div class=\"col-md-4 col-sm-4\">";
hpxb=hpxb+"<!-- Header top left content contact -->";
hpxb=hpxb+"<div class=\"header-contact\">";
hpxb=hpxb+"<!-- Contact number -->";
hpxb=hpxb+"<span><i class=\"fa fa-phone red\"></i> 888-888-555</span>";
hpxb=hpxb+"</div></div><div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpxb=hpxb+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpxb=hpxb+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";
hpxb=hpxb+" <span class=\"input-group-btn \"><button class=\"btn btn-default\" type=\"button\" onclick=\"setSSFeed(document.getElementById('sbox').value);\"><i class=\"fa fa-search\"></i>se</button> </span>";
hpxb=hpxb+" <span class=\"in-sp input-group-btn \"><button class=\"btn btn-default\" type=\"button\" onclick=\"setSSFeed(document.getElementById('sbox').value);\"><i class=\"fa fa-search\"></i>se</button> </span>";

hpxb=hpxb+"</div></form></div></div></div>";
hpxb=hpxb+"</div>";


    hpab="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";


/*

    hpxb="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";



    hpxb=hpxb+"<div class=\"row\">";
hpxb=hpxb+"<div class=\"col-md-4 col-sm-4\">";
hpxb=hpxb+"<!-- Header top left content contact -->";
hpxb=hpxb+"<div class=\"header-contact\">";
hpxb=hpxb+"<!-- Contact number -->";
hpxb=hpxb+"<span><i class=\"fa fa-phone red\"></i> 888-888-8888</span>";
hpxb=hpxb+"</div></div><div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpxb=hpxb+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpxb=hpxb+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";
hpxb=hpxb+" <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"setSSFeed(document.getElementById('sbox').value);\"><i class=\"fa fa-search\"></i>se</button> </span>";
hpxb=hpxb+"</div></form></div></div></div>";
hpxb=hpxb+"</div>";


*/
//alt string

    hpab=hpab+"<div class=\"row\">";





hpab=hpab+"<div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpab=hpab+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpab=hpab+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sibox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";

hpab=hpab+"<span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getMatchJE(document.getElementById('sibox').value);\"><i class=\"fa fa-search\"></i>Press</button> </span>";
hpab=hpab+" <span class=\"in-sp\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getScrollAn('sibox');\"><i class=\"fa fa-search\"></i>Scrolle</button> </span><br>";



hpab=hpab+"</div></form></div></div></div>";
hpab=hpab+"</div>";



//hold string
    hpb="<div id=\"searchDi\"> <p>Search for terms via http://www.strudel.org.uk/lookUP</p>";
//hpb=hpb+"<input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\"/>";
/*
    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"setLFeed(document.getElementById('sbox').value);\">Search LookUP</button>";
    hpb=hpb+"</div></div>";
*/

    hpb=hpb+"<div class=\"row\">";
hpb=hpb+"<div class=\"col-md-4 col-sm-4\">";
hpb=hpb+"<!-- Header top left content contact -->";
hpb=hpb+"<div class=\"header-contact\">";
hpb=hpb+"<!-- Contact number -->";
hpb=hpb+"<span><i class=\"fa fa-phone red\"></i> 888-888-8888</span>";
hpb=hpb+"</div></div><div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpb=hpb+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpb=hpb+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sbox\" onkeypress=\"handleKeyPressFeed(event,this.form)\">";
hpb=hpb+" <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"setSSFeed(document.getElementById('sbox').value);\"><i class=\"fa fa-search\"></i>se</button> </span>";
hpb=hpb+"</div></form></div></div></div>";
hpb=hpb+"</div>";
    document.getElementById("pageBar").innerHTML=hpxb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    document.getElementById("searchDi").style.display="";
	$(document).ready(function(){
		$('#tabs').tabs({selected:tId});
//		location.href("b/index.html#tabs-2");
	});


}
//end getSFeedTerm


/** function listSites
*
*List sites being used on cache as well as listing the cached locations.
*
*/

function listSites(pId)
{




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
// end listSites


/** function setSSFeed
*
*Function to wrap setSFeed
*
*
**/
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
//end setSSFeed



/** function setSFeed
*
*
*----------------------------------------------
Grabbing JSON into div #son is based on sample code from:
http://brightscape.net/blog/display-rss-feed-jquery-json/
*
*
**/

function setSFeed(pId)
{


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

	     //             $('#grJSON').before("<h4>Articles I\'m Reading</h4>\n<br />");
	window.console.log("doneaae");

         }).always(function()
{
//	alert("com ");
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



//    document.getElementById("loadson").style.display="none";
}
// end setSFeed



/** function setLFeed
*
*Function to read google blog
*
*Status: non functional
*
**/


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
//end setLFeed (nf)---------------------------


/***function getMatchCi

Input from user is used to find city by name and display link name
to the user

*****/

function getMatchCi(mId)

{


    //    	  alert("BLOG");
    var urlArr=[];
    var urlAL=0;

  //  var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    var urlM="http://"+hostUrl+"/StarServer/journals-and-newsletters.html";
//    var urlA="http://localhost:8280/StarServer/stargazing.htm";
    var urlA="http://"+hostUrl+"/StarServer/stargazing.htm";


    //    var urlM=htSarr[0];
    //    var urlA=htSArr[2];

	  //	  	    var urlBl=htSarr[1];
  //  var urlBl="http://localhost:8280/StarServer/cities.html";
    var urlBl="http://"+hostUrl+"/StarServer/cities.html";
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
	 document.getElementById("journ").innerHTML =htsamp;

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
//---end getMatchCi


/***function getMatchBl

Input from user is used to find blog link name
to the user

*****/

function getMatchBl(mId)

{
    //    	  alert("BLOG");
    var urlArr=[];
    var urlAL=0;

  //  var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    var urlM="http://"+hostUrl+"/StarServer/journals-and-newsletters.html";
//    var urlA="http://localhost:8280/StarServer/stargazing.htm";
    var urlA="http://"+hostUrl+"/StarServer/stargazing.htm";


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
//---end getMatchBl-
function getSitesM(sId)
{
//	getCach(htReal[2]);
	getCachM(htReal);
}
function getAniM(sId)
{

	var ln;
	var divv;
	var lastp;
        var qwray= new Array();
	var turnbp=1;
	var turntp=1;
	var turnlp=1;
	var turn=5;
	var leftS=null;
	var topS=null;
	var l=0,t=0;

//	var turnn=1;
//	ln=$("div[id*=qw]").length();
	ln=$("div[class*=qww]").length;

//	alert("length qww:"+ln);
	divv =$("div[class*=qww]");
//	$(divv).each(function(i,v){$(v).addClass('hidy'); $(v).find('a').attr('style','auto');});
	$(divv).each(function(i,v){$(v).addClass('hidy'); $(v).filter('a').each($(this).hover($(this).css({cursor:'crosshair'})));});
//	$(divv).each(function(i,v){ $(i).hover($(this).unwrap('<a></a>'));});
//        $(divv).map(function(i,v){qwray.push([i,$($(divv)[i]).css("left")]);});
//	alert("last qw:"+qwray);
//	alert("last qw:"+$(qwray[6])[0]+"::"+qwray[6][1]);
//	alert("last qw:"+$($(divv)[0]).attr("class")+$($(divv)[0]).css("top"));
	ln=ln-1;
	lastp=$($(divv)[0]).css("top");
//	alert("lasddt qw:"+$($(divv)[ln]).attr("class")+$($(divv)[0]).css("top")+$($(divv)[5]).css("top")+"left"+$($(divv)[0]).css("left"));
//	$($(divv)[ln]).animate({bottom: '-=140'},200);
//	$($(divv)[ln]).animate({top: '10',left:'10'},200);


	//attempt to randmize direction of flying card animations
	for (i=0;i<ln+1;i++)
	{
		
		turntp = (turntp+1) % turn;
		turntp = Math.floor(Math.random()* (turn-1))+2;
		if (turntp < 3 || turnlp >3)
		{
			l = (-100)* turnlp*2; 
			t = (-100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}
		else if (turnlp < 3 && turntp > 4)
		{
			l = (100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}

		else{
			l = (-100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 

		}
		$($(divv)[i]).animate({top:topS,left:leftS},1200);

		turnlp = (turnlp) %turn;
		turnlp = Math.floor(Math.random()* (turn-1))+2;
	}
//	$(divv).each(function(i,v){$(v).removeClass('hidy'); $(v).filter('a').each($(this).hover($(this).css({cursor:'crosshair'})));});
	for (i=0;i<ln+1;i++)
	{

//		$($(divv)[i]).animate({top:'0',left:'0',visibilty:'visible',opacity:'1.0'},1200,function(){$(this).removeClass('hidy');});
		$($(divv)[i]).animate({top:'+=0',left:'+=0',visibilty:'visible',opacity:'1.0'},12,function(){$(this).removeClass('hidy');}).animate({top:'0',left:'0',visibilty:'visible',opacity:'1.0'},1200);
//		$($(divv)[i]).animate({top:'0',left:'0',visibilty:'visible',opacity:'1.0'},1200).removeClass('hidy');
//		$($(divv)[i]).animate({top:'0',left:'0'},1200);
	}



//	alert("length qw:");

//	getCach(htReal[2]);
//--	getCachM(htReal);
}

function getAniMPos(sId)
{

	var ln;
	var divv;
	var lastp;
	var lastpos;
        var qwray= new Array();
	var turnbp=1;
	var turntp=1;
	var turnlp=1;
	var turn=5;
	var leftS=null;
	var topS=null;
	var l=0,t=0;
	var vHide=0;
//	var turnn=1;
//	ln=$("div[id*=qw]").length();
	ln=$("div[class*=qww]").length;

//	alert("length qww:"+ln);
	divv =$("div[class*=qww]");
//	$(divv).each(function(i,v){$(v).addClass('hidy'); $(v).find('a').attr('style','auto');});
	$(divv).each(function(i,v)
		{
			if (!$(v).hasClass('hidy'))
			{
				$(v).addClass('hidy');
			}else
			{
				vHide=1;
			} 
			$(v).filter('a').each(
				$(this).hover(
					$(this).css({cursor:'crosshair'})));
	}); 
	//alert('hidden::'+vHide);
//	$(divv).each(function(i,v){ $(i).hover($(this).unwrap('<a></a>'));});
//        $(divv).map(function(i,v){qwray.push([i,$($(divv)[i]).css("left")]);});
//	alert("last qw:"+qwray);
//	alert("last qw:"+$(qwray[6])[0]+"::"+qwray[6][1]);
//	alert("last qw:"+$($(divv)[0]).attr("class")+$($(divv)[0]).css("top"));
	ln=ln-1;
	lastp=$($(divv)[0]).css("top");
	lastpos=$($(divv)[0]).position();
//	alert("lasddt qw:"+$($(divv)[ln]).attr("class")+"top:"+lastpos.top+":");
//	alert("lasddt qw:"+$($(divv)[ln]).attr("class")+$($(divv)[0]).css("top")+$($(divv)[5]).css("top")+"left"+$($(divv)[0]).css("left"));
//	$($(divv)[ln]).animate({bottom: '-=140'},200);
//	$($(divv)[ln]).animate({top: '10',left:'10'},200);
	for (i=0;i<ln+1;i++)
	{
		//use turnt(op)p turnl(eft)p variable to randomize in 4 directions relative to top and left.	
		turntp = (turntp+1) % turn;
		turntp = Math.floor(Math.random()* (turn-1))+2;
		if (turntp < 3 || turnlp >3)
		{
			l = (-100)* turnlp*2; 
			t = (-100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}
		else if (turnlp < 3 && turntp > 4)
		{
			l = (100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}

		else{
			l = (-100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 

		}
		$($(divv)[i]).animate({top:topS,left:leftS},1200);

		turnlp = (turnlp) %turn;
		turnlp = Math.floor(Math.random()* (turn-1))+2;
	}
//	$(divv).each(function(i,v){$(v).removeClass('hidy'); $(v).filter('a').each($(this).hover($(this).css({cursor:'crosshair'})));});
	for (i=0;i<ln+1;i++)
	{

//		$($(divv)[i]).animate({top:'0',left:'0',visibilty:'visible',opacity:'1.0'},1200,function(){$(this).removeClass('hidy');});
		$($(divv)[i]).animate({top:'+=0',left:'+=0',visibilty:'visible',opacity:'1.0'},12,function(){$(this).removeClass('hidy');}).animate({top:'0',left:'0',visibilty:'visible',opacity:'1.0'},1200);
//		$($(divv)[i]).animate({top:'0',left:'0',visibilty:'visible',opacity:'1.0'},1200).removeClass('hidy');
//		$($(divv)[i]).animate({top:'0',left:'0'},1200);
	}



//	alert("length qw:");

//	getCach(htReal[2]);
//--	getCachM(htReal);
}

function hideQuiz()
{
	var qb = $('input[class*=qin]');
	var qblen = $(qb).length;

	var i=0,j=0;

	for (i=0;i<qblen;i++)
	{
		if (!$((qb)[i]).hasClass('inDeck'))
		{
		$((qb)[i]).animate({left:'+=700'},function(){
//			if (!$((qb)[i]).hasClass('hidy'))
			if (!$(this).hasClass('hidy'))
				{
//					$((qb)[i]).addClass('hidy');			
					$(this).addClass('hidy');							$(this).addClass('inDeck');	
				}
		
		});
		}//deck
	}//for

}

/**getQuizTimer
*
*Function to initialize quiz with timer
*
*Adds 'hiddy class with animation for list of input buttons.
*
*@param dbId -- text file name to read from
*
*@var qb list of inputs for question
*/


function getQuizTimer()
{

	//input button
	var qb = $('input[class*=qin]');

	//input framed in div
	var qbd= $('div[class*=regTRadx99]');
	var qs= $('.spinn');
//	var qso= $('.spout');


	var qso= $('.spoutt');
	var qsoi= $('.spouti'); //spouti class within spoutt

	var qblen= $(qb).length;	
//	var qblen= qb.length;	
	var dne=0;
	var i=0;
	var ij=0;
	var j=0;
	var t=0;
	var l=0;
	var lj=5;
	var cd = 0;

//	alert('length'+qblen);
//	hideQuiz();
	for (i=0;i<qblen;i++)
	{

		if ($((qb)[i]).hasClass('hidy'))
		{
			$((qb)[i]).removeClass('hidy');
		}
	}
//	$(qb).lenth=qblen;
//		$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});
//		$((qb)[i]).timer= setTimeout(function(){$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'})},500);
//		t= setTimeout(function(){$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'})},500);
//		t= setInterval(function(){$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});i= (i+1) %lblen;if (i==0) clearInterval(t);},500);
		i=0;

		//30 seconds
//		l=$(qb).length *10;
		l=$(qb).length *50;

		//count down to be 30
		cd = (l/10);


//		t= setInterval(function(){i= (i+1) %lblen; if (i==0){clearInterval(t);exit();}$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});},500);
		t= setInterval(function(){
			
			//elongate to place then set size to normal width
//			$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});
//			$(qs).animate({width: '-=5'},200).animate({width:'-=20'},200);
//			$(qs).animate({width: '-=5'},200);
			if (dne ==0)
				$(qbd).animate({width: '-=2'});
//				$(qs).animate({width: '-=2'});


			// check mod count of list length of inputs reaches 0
			// every 30 (or 150) pseudoseconds
			i= ((i+1)%(l));
			
			// counter decrements every 5 seconds.
			ij = ( i % lj);
//			$(qs).html(i.toString());
			if (ij == 0)
			{
//				$(qso).html(i.toString()).wrapInner("<center></center>");
//				$(qso).html(cd.toString()).wrapInner("<center></center>");
			$(qsoi).html(cd.toString()).wrapInner("<center></center>");

				cd--;
			}
//			$(qsoi).html(i.toString()).wrapInner("<center></center>");
			if (i==0) 
			{
//			$(qs).animate({width: '-=5'},200).animate({width:'+=20'},200);
				dne=1;
				alert("done");

				clearInterval(t);
			}
			if (dne == 1)
			{
				alert("dne");
			}
//		},500);
		},100);
//t=setTimeout(2200);
//	if (t) t=clearTimeout(t);

//	wait(20);
//	}

}






/**
* Intialize hiding of cards
*
**/
function getIniAniM(sId)
{

	var ln;
	var divv;
	var lastp;
        var qwray= new Array();
	var turnbp=1;
	var turntp=1;
	var turnlp=1;
	var turn=5;
	var leftS=null;
	var topS=null;
	var l=0,t=0;

//	var turnn=1;
//	ln=$("div[id*=qw]").length();
	ln=$("div[class*=qww]").length;

//	alert("length qww:"+ln);
	divv =$("div[class*=qww]");
//        $(divv).map(function(i,v){qwray.push([i,$($(divv)[i]).css("left")]);});
	$(divv).each(function(i,v){$(v).addClass('hidy'); $(v).filter('a').each($(this).hover($(this).css({cursor:'crosshair'})));});
//	alert("last qw:"+qwray);
//	alert("last qw:"+$(qwray[6])[0]+"::"+qwray[6][1]);
//	alert("last qw:"+$($(divv)[0]).attr("class")+$($(divv)[0]).css("top"));
//	ln=ln-1;
//	lastp=$($(divv)[0]).css("top");
//	alert("lasddt qw:"+$($(divv)[ln]).attr("class")+$($(divv)[0]).css("top")+$($(divv)[5]).css("top")+"left"+$($(divv)[0]).css("left"));
//	$($(divv)[ln]).animate({bottom: '-=140'},200);
//	$($(divv)[ln]).animate({top: '10',left:'10'},200);
/*	for (i=0;i<ln+1;i++)
	{
		
		turntp = (turntp+1) % turn;
		turntp = Math.floor(Math.random()* (turn-1))+2;
		if (turntp < 3 || turnlp >3)
		{
			l = (-100)* turnlp*2; 
			t = (-100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}
		else if (turnlp < 3 && turntp > 4)
		{
			l = (100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}

		else{
			l = (-100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 

		}
		$($(divv)[i]).animate({top:topS,left:leftS},1200);

		turnlp = (turnlp) %turn;
		turnlp = Math.floor(Math.random()* (turn-1))+2;
	}
*/
/*	for (i=0;i<ln+1;i++)
		$($(divv)[i]).animate({top:'0',left:'0'},1200);
*/



//	alert("length qw:");

//	getCach(htReal[2]);
//--	getCachM(htReal);
}

/**
* End animation of flying cards by unhiding and specifying final
* positions.(generic 0,0 seems to work)
*
**/
function getEndAniM(sId)
{

	var ln;
	var divv;
	var lastp;
        var qwray= new Array();
	var turnbp=1;
	var turntp=1;
	var turnlp=1;
	var turn=5;
	var leftS=null;
	var topS=null;
	var l=0,t=0;

//	var turnn=1;
//	ln=$("div[id*=qw]").length();
	ln=$("div[class*=qww]").length;

//	alert("length qww:"+ln);
	divv =$("div[class*=qww]");
//        $(divv).map(function(i,v){qwray.push([i,$($(divv)[i]).css("left")]);});
//	alert("last qw:"+qwray);
//	alert("last qw:"+$(qwray[6])[0]+"::"+qwray[6][1]);
//	alert("last qw:"+$($(divv)[0]).attr("class")+$($(divv)[0]).css("top"));
	ln=ln-1;
	lastp=$($(divv)[0]).css("top");
//	alert("lasddt qw:"+$($(divv)[ln]).attr("class")+$($(divv)[0]).css("top")+$($(divv)[5]).css("top")+"left"+$($(divv)[0]).css("left"));
//	$($(divv)[ln]).animate({bottom: '-=140'},200);
//	$($(divv)[ln]).animate({top: '10',left:'10'},200);
/*	for (i=0;i<ln+1;i++)
	{
		
		turntp = (turntp+1) % turn;
		turntp = Math.floor(Math.random()* (turn-1))+2;
		if (turntp < 3 || turnlp >3)
		{
			l = (-100)* turnlp*2; 
			t = (-100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}
		else if (turnlp < 3 && turntp > 4)
		{
			l = (100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 



		}

		else{
			l = (-100)* turnlp*2; 
			t = (100)* turntp*2; 
			leftS = l.toString(); 
			topS = t.toString(); 

		}
		$($(divv)[i]).animate({top:topS,left:leftS},1200);

		turnlp = (turnlp) %turn;
		turnlp = Math.floor(Math.random()* (turn-1))+2;
	}
*/

	for (i=0;i<ln+1;i++)
		$($(divv)[i]).animate({top:'0',left:'0'},1200);




//	alert("length qw:");

//	getCach(htReal[2]);
//--	getCachM(htReal);
}

function getTokenToFile(tId)
{
	$.getJSON("http://"+hostUrl+"/StarAdvisor/axtok.php?tkName="+tId+"&callback=?",function(data){

		$.each(data.users,function(i,item){
			$('#espanCart').html("M"+item.message);
		});

	});

}

/**
* Use list of site names to pass to json php bridge file to acquire
* site text data and keep on server up to date.
*
**/
function getCachM(sId)
{
//	alert(htReal[2].substr(0,-1));
	alert(hostUrl+htReal[2].substr(0,htReal[2].length-1));

	var urlTerms = '';
	for (var i=0;i< sId.length;i++)
	{ 
		urlTerms += 'sName[]='+sId[i]+'&';
	}	
	if (urlTerms.substr(-1) == '&')
		urlTerms = urlTerms.substr(0,urlTerms.length-1);
	alert("TERMS"+urlTerms+"::"+hostUrl);
//	return;
//	$.getJSON("http://localhost:8280/StarAdvisor/sites.php?"+urlTerms+"&callba//ck=?",function(data){
	$.getJSON("http://"+hostUrl+"/StarAdvisor/sites.php?"+urlTerms+"&callback=?",function(data){

//	$.getJSON("http://localhost:8280/StarAdvisor/sites.php?sName="+sId+"&cal//lback=?",function(data){
//	$.GETJSON("HTTP://:8280/StarAdvisor/sites.php?sName="+sId+"&callback=?",function(data){
		alert(hostUrl+data.users);

	});

}

//--end getCachM
function getSites(sId)
{
	getCach(htReal[2]);
//	getCach(htReal);
}

function getCach(sId)
{
//	alert(htReal[2].substr(0,-1));
	alert(htReal[2].substr(0,htReal[2].length-1));

/*	var urlTerms = '';
	for (var i=0;i< sId.length,i++)
	{ 
		urlTerms += 'sName[]='+sId[i]+'&';
	}	
	if (urlTerms.substr(-1) == '&')
		urlTerms = urlTerms.substr(0,urlTerms.length-1);
	alert(urlTerms);
	$.getJSON("http://localhost:8280/StarAdvisor/sites.php?"+urlTerms+"&callback=?",function(data){
*/
	$.getJSON("http://localhost:8280/StarAdvisor/sites.php?sName="+sId+"&callback=?",function(data){
		alert(data.users);

	});

}

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
    var htsamp="<BR><p><b><font color=#00ee22 size=\"2\" >RESULTS FOUND:</b></p></font><BR>";
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

//  getCache();
    urlArr=[urlM,urlA];
    urlAL=urlArr.length;
    //	  htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >from: "+htarr[arrCount]+":</b></p></font>";

    htsamp=htsamp +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("journ").innerHTML="";
    htsamp=htsamp+"<p><b><font color=#ff0000 size=\"2\" >FROM: </b></p></font>";
    for (cc=0;cc<urlAL;cc++)
    {
		  //alert(urlArr[cc]);
		  //}
	if (cc>urlAL)
	{
	    break;
	}
	htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" > site:"+urlArr[cc]+":</b></p></font>";
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
			     htsamp=htsamp+"<li><p><b><font color =#221100  >site:"+  htarr[arrCount]+ "</font></b></p></li>"   ;
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

/**getQuiz
*
*Function to initialize quiz with timer
*
*Adds 'hiddy class with animation for list of input buttons.
*
*@param dbId -- text file name to read from
*
*@var qb list of inputs for question
*/


function getQuiz()
{

	var qb = $('input[class*=qin]');

	var qblen= $(qb).length;	
//	var qblen= qb.length;	

	var i=0;
	var j=0;
	var t=0;
	var l=0;
//	alert('length'+qblen);
	for (i=0;i<qblen;i++)
	{

		if ($((qb)[i]).hasClass('hidy'))
		{
			$((qb)[i]).removeClass('hidy');
		}
	}
//	$(qb).lenth=qblen;
//		$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});
//		$((qb)[i]).timer= setTimeout(function(){$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'})},500);
//		t= setTimeout(function(){$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'})},500);
//		t= setInterval(function(){$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});i= (i+1) %lblen;if (i==0) clearInterval(t);},500);
		i=0;
//		t= setInterval(function(){i= (i+1) %lblen; if (i==0){clearInterval(t);exit();}$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});},500);
		t= setInterval(function(){
			l=$(qb).length;

			//elongate to place then set size to normal width
			$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});

			//check mod count of list length of inputs reaches 0
			i= ((i+1)%(l));
			if (i==0) 
			{
				clearInterval(t);
				//getQuizTimer();
			}
		},500);
//t=setTimeout(2200);
//	if (t) t=clearTimeout(t);

//	wait(20);
//	}

}


/*****************************************
Function: getMatchJE:

Description: Retrieves astro events with date and description:

Status:  Working.  
*********************************************************/

function getMatchJE(mId)
{
    var urlArr=[];
    var urlAL=0;
    var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
//    var urlA="http://localhost:8280/StarServer/stargazing.htm";
//    var urlA="http://localhost:8280/StarAdvisor/calendr.html";
//    var urlA="http://54.68.234.173:8280/StarAdvisor/calendr.html";
    var urlA="http://"+hostUrl+"/StarAdvisor/calendr.html";
	    
    var htr="";
    //        var term="ature";
    var term=mId;
     //    var htTok="<li><a href=\"http://";
    var htTok="<a href=\"http://";
    var htTokE="</a>";
    var htToks=$("li p > span");
    var htToksE="</a>";

    var htStart="<li><a href=\"http://";
    var htEnd="</a></li>";
    var dLen=0;
    var htcount=0;
    var htarr=[];
    var htsamp="<BR><p><b><font color=#00ee22 size=\"2\" >RESULTS FOUND:</b></p></font><BR>";
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
	var datA={};
	var datB={};
	var datC;
	var elemr=null;
	var elemc=null;
	var elema=null;
//alert(":::");
//  getCache();
//    urlArr=[urlM,urlA];
//    var liString= "<li><div class=\"car-item\"><!-- Item remove icon --><a href=\"#\"><i class=\"fa fa-times\"></i></a><!-- Image --><img class=\"img-responsive img-rounded\" src=\"img/nav-menu/nav2.jpg\" alt=\"\" /><!-- Title for purchase item --><span class=\"car-title\"><a href=\"#\">";
    var liString= "<li><div class=\"car-item carni\"><!-- Item remove icon --><a href=\"#\"><i class=\"fa fa-times\"></i></a><!-- Image --><img class=\"img-responsive img-rounded\" src=\"img/nav-menu/nav2.jpg\" alt=\"\" /><!-- Title for purchase item --><span class=\"car-title\">";

var liStringE="</span><span class=\"cart-price pull-right red\">$190/-</span><div class=\"clearfix\"></div></div></li>";
	//+-End liString
var liStringEt="</span><span class=\"cart-price pull-right red\">$190/-</span><div class=\"clearfix\"></div></div>";
var liStringESpan="</span>";
var liStringEtt="<span class=\"cart-price pull-right red\">detail/-</span><div class=\"clearfix\"></div></div>";
var liStringEtta="<span class=\"cart-price pull-right red\"><a class=\"tooltipp red\">detail/-";
var liStringEttb="-</a></span><div class=\"clearfix\"></div></div>";
	//+- End liString with tooltipp

    var liStrin= "<div class=\"car-item\"><!-- Item remove icon --><a href=\"#\"><i class=\"fa fa-times\"></i></a><!-- Image --><img class=\"img-responsive img-rounded\" src=\"img/nav-menu/nav2.jpg\" alt=\"\" /><!-- Title for purchase item --><span class=\"car-title\"><a href=\"#\">haha</a></span><span class=\"cart-price pull-right red\">$190/-</span><div class=\"clearfix\"></div></div>";

//workz full text		  //		datC=datC.map(function(){$($(this).children()[0].children()[0]).attr({"text":"hi"});});

    urlArr=[urlA];
    urlAL=urlArr.length;
    //	  htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" >from: "+htarr[arrCount]+":</b></p></font>";

    htsamp=htsamp +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("journ").innerHTML="";
    htsamp=htsamp+"<p><b><font color=#ff0000 size=\"2\" >FROM: </b></p></font>";
    for (cc=0;cc<urlAL;cc++)
    {
		  //alert(urlArr[cc]);
		  //}
	if (cc>urlAL)
	{
	    break;
	}
	htsamp=htsamp+"<p><b><font color=#ffee22 size=\"2\" > site:"+urlArr[cc]+":</b></p></font>";
			//$.each(urlArr){
        $.get(urlArr[cc],function(data)
	      {


		//datC=$(data).find('p > ');
		datC=$(data).find('li');
//		datA=jQuery.extend($(datA),$(datC));
//		$(datC).clone().map(function(i,v){});
//		datC=$.map(datC,function(value,index){return $(value).children().children()[1];});
//+-+-+-
//		alert($($(datC).slice(0).children().children("span")).html());
//lert		alert($($(datC).slice(0).children("p").children("span")).html());
//		alert($(datC).slice(0).children("p").filter("span").get(0));
//		$(datC).map(function(value,index){ return $(index).find("p").children("span").remove().end().html();});
//good p		$(datC).map(function(value,index){ return $(index).find("p").children("span").remove().end().html();});
//		$(datC).map(function(value,index){ return $(index).html($(index).find("p").children("span"));});
//		$(datC).map(function(value,index){ return $(index).html($(index).children("p").children("span").html() +":"+ $(index).clone().find("p").children("span").remove().end().html());});
//		$(datC).map(function(value,index){ return $($(index).html($(index).children("p").children("span"))).html($(this).html() +":"+ $(index).find("p").children("span").remove().end().html());});
//		$(datC).map(function(value,index){ elemr= $(index).clone(); return $($(index).html($(index).children("p").children("span"))).html($(elemr).html() +":"+ $(index).html());});
//		$(datC).map(function(value,index){ elemr= $(index).clone(); return $($(index).html($(index).children("p").children("span"))).html($(index).html()+":"+$($(elemr).find("p").children("span").remove().end()).wrapInner("<p></p>").html());});
//		$(datC).map(function(value,index){ elemr= $(index).clone(); return $($(index).html($(index).children("p").children("span"))).html($(index).wrapInner("<p></p>").html()+":"+$($(elemr).find("p").children("span").remove().end()).wrapInner("<p></p>").html());});
//works has p span		$(datC).map(function(value,index){ elemr= $(index).clone();elemc= $(index).clone(); return $($(index).html($(index).children("p").children("span"))).html($(index).wrapInner("<p></p>").html()+":"+ $($(elemc).find("p").children("span").remove().end()).wrapInner("<p></p>").html().split(" ").slice(0,20).join("+")+":"+$($(elemr).find("p").children("span").remove().end()).wrapInner("<p></p>").html());});
//		$(datC).map(function(value,index){ elemr= $(index).clone();elemc= $(index).clone(); return $($(index).html($(index).children("p").children("span"))).html($(index).wrapInner("<p></p>").html()+":"+ $($(elemc).find("p").children("span").remove().end()).wrapInner("<p></p>").html().split(" ").slice(0,20).join("+")+":"+$($(elemr).find("p").children("span").remove().end()).wrapInner("<p></p>").html());});

	//seperate heading spans and description paragraph
	//produce summary of paragraph with toggle for full description.

	$(datC).map(function(value,index){ 
		//clone values for later usages/manipulations.

		elemr= $(index).clone();
		elema= $(index).clone();
		elemk= $(index).clone();
		elemc= $(index).clone();
		//index contains 2 spans (date,title) in p plus extra text within p describing event.

		//return value (labeled index for some reason) with spans removed, but broken with <br> delimiters like an array with the description hidden for later use in callout.
		 return $($(index).html($(index).children("p").children("span"))).html($(index).children("span:first").html()+"<br/>"+$(index).children("span:last").html()+":<br/>"+ $($(elemc).find("p").children("span").remove().end()).unwrap("<span></span>").html().split(" ").slice(0,20).join(" ")+"<a href=\"#\"  onclick=\"return getTog("+value+");\"><i class=\"fa fa-plus sen\">...</i></a>:<br/>"+$($(elemr).find("p").children("span").remove().end()).wrapInner("<div class=\"hidden ftx"+value+"\"></div>").html());

	});  //  $(datC).map
/*############with tooltipp
	$(datC).map(function(value,index){ elemr= $(index).clone();elema= $(index).clone();elemc= $(index).clone(); return $($(index).html($(index).children("p").children("span"))).html($(index).children("span:first").html()+"<br/>"+$(index).children("span:last").html()+":<br/>"+ $($(elemc).find("p").children("span").remove().end()).unwrap("<span></span>").html().split(" ").slice(0,20).join(" ")+"<a href=\"#\" class=\"tooltipp\" onclick=\"return getTog("+value+");\"><i class=\"fa fa-plus sen\">...</i>"+ $($(elema).find("p").children("span").remove().end()).wrapInner("<span></span>").html()+"</a>:<br/>"+$($(elemr).find("p").children("span").remove().end()).wrapInner("<div class=\"hidden ftx"+value+"\"></div>").html());});




#########################*/

//		$(datC).map(function(value,index){ return $(index).html($(index).children("p").children("span") );});
//		$(datB).map(function(value,index){ return $(index).find("p").children("span").remove();});
//		$(datC).map(function(value,index){ return [$(index).clone().find("p").children("span").remove(),$(index).clone().find("p").children("span").remove().end().html()];});
//lert		alert($(datC).slice(3).html());

//		$(datC).map(function(value,index){ return $(index).html($(index).html().split(" ").slice(0,20).join("+"));});
//--causes outside inside span		$(datC).map(function(value,index){ return $(index).html($(index).html().split(" ").slice(0,4).join("+"));});

//		$(datB).map(function(value,index){ return $(index).html($(index).html().split(" ").slice(0,12).join("-"));});
//		$(datC).map(function(value,index){ return $(index).slice(2).html($(index).slice(2).html().split(" ").slice(0,20).join("+"));});
//alert($(datC).slice(1).html());
//lert alert($(datC).slice(1).html());
//alert($(datC).html()+"::"+$(datB).html());


//+-+-+-

//mwork		$(datC).map(function(){return $(this).find("p").children("span").remove().end().html();});
//worksz		alert($(datC).slice(1,2).find("p").children("span").remove().end().text());
//workz full text		  //		datC=datC.map(function(){$($(this).children()[0].children()[0]).attr({"text":"hi"});});
//		datC=datC.map(function(value,index){return $(value).children().children()[0];});
		//get p span span
//		alert($($(datC).slice(0).children().children()[1]).html());
//		alert($($(datC).slice(0).children().children()[1]).html());
//		alert($($(datC).slice(1).children().children()[1]).text());
//		alert($($(datC).slice(1).clone().children("span").remove().end()).text());
//		alert($("span:eq(1)",$(datC)).html());
//		alert($($(datC).clone().find("p").children("span")).text());
//workz		alert($($(datC).clone().find("p").children("span").remove().end()).text());
//worksz		alert($(datC).slice(1,2).find("p").children("span").remove().end().text());
//workz full text		  //		datC=datC.map(function(){$($(this).children()[0].children()[0]).attr({"text":"hi"});});

//		$('#cartd').append('<br/><ul class="car-dropdown" role="menu">');
		datC.each(function(i,item){
//			var ite=item.getElementByTagName("span")[0]substr(0,20);
//			var ite=item.getElementByTagName("span")[0];
//			$('#cartd').append(liString+item+liStringE);
			elemk=$(item).clone();
//uncomment to limmit results
//			if (i == 5){ return false;}




//startgood			$('#cartd').append($(liStrin).children().children()[0]);
//			$('#cartd').append($(liStrin).children().children()[0]);
//			$('#cartd').append($(liStrin).children().children()[0]);
/*
			$('#cartd ul').append(liString);
			$('#cartd ul').append("<p>hi</p>");
			$('#cartd ul').append(liStringE);
*/
//--			$('#cartd').append(item);

//			$('#cartd ul').append(item);
//			$('#cartd').append($(item).children().children()[0]);
//			$('#cartd').append($("<li><p>"+$(item.children().children()[0]).text()+"</p></li>"));


//			$('#cartd ul').append(liString+"<span>hello hello hello<span>"+liStringE);
//dont tooltipp			$('#cartd ul').append(liString+$(item).html()+liStringE);
//			$('#cartd ul').append(liString+$(item).html()+liStringE);
//try add tooltipp			$('#cartd ul').append(liString+$(item).html()+liStringE +$($(elema).find("p").children("span").remove().end()).wrapInner("<span></span>").html());
//CHANGE-Detail			$('#cartd ul').append(liString+$(item).html()+liStringEt +"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span></span>").html()+"</a></li>");
//			$('#cartd ul').append(liString+$(item).html()+liStringEt +"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span></span>").html()+"</a></li>");

//replace with div p			$('#cartd ul').append(liString+$(item).html() +liStringESpan+"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span></span>").html()+"</a>"+liStringEtt+"</li>");
//change details			$('#cartd ul').append(liString+$(item).html() +liStringESpan+"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+"</a>"+liStringEtt+"</li>");
//change elemk			$('#cartd ul').append(liString+$(item).html() +liStringESpan+"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+"</a>"+liStringEtta+ $($(elemk).find("p").children("span").remove().end()).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+liStringEttb+"</li>");
//poposite			$('#cartd ul').append(liString+$(item).html() +liStringESpan+"<a class=\"tooltipp\">detail"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+"</a>"+liStringEtta+ $($(elemk).children("div[class*=ftx]").remove().end()).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+liStringEttb+"</li>");
			$('#cartd ul').append(liString+$(item).html() +liStringESpan+"<a class=\"tooltipp\">detaill"+$($(elema).find("p").children("span").remove().end()).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+"</a>"+liStringEtta+ $($(elemk).children("div[class*=ftx]")).wrapInner("<span><span style=\"display:block;\"></span></span>").html()+liStringEttb+"</li>");
//			$('#cartd ul').append(liString+$(item).html()+liStringEt +$($(elema).find("p").children("span").remove().end()).wrapInner("<a class=\"tooltipp\">detail<span></span></a>").html()+"</li>");
//			$('#cartd ul').append(liString+"hello"+liStringE);
//			$('#cartd ul').append(liStrin);
		}); //datC each
//		$('#cartd').append('</ul><br/>');
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

				 htarr[htcount]=htshow;htcount++;
			     }
			 }
			 //alert(htshow);
		     }
	     


		
		     for (arrCount=0;arrCount<htcount;arrCount++)
			 {
			     //display array results

			     //	           $("<li><p><b><font color =#ffee22  >x-"+  htarr[arrCount]+ "</font></b></p></li>"  ).appendTo("#journ");		
//			     htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
			     htsamp=htsamp+"<li><p><b><font color =#221100  >site:"+  htarr[arrCount]+ "</font></b></p></li>"   ;
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
//	      }).error(function(){alert("An ror has occurreddddd");return;}).complete(function()
	      }).fail(function(xhr,text,error){alert("An "+xhr.status+"rordd"+error);return;}).always(function()
	     {    });  // $.get

    }   // for urlArr


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

function getScrollAni(dId)
{
$(document).ready(function(){



/***********************************************/
	var blis= "b1news b2headline";
	var lis= "xc1news cb2headline";
	var bray = blis.split(' ');
	var bay = lis.split(' ');
	var lb = new Array(bray,bay);
	var lbcount = 0;
	var uline = $('#b1 a');
	var lcount = 0;
	
	var t = 0;//uline;
	var th = 0;
//	("#b1 a").click(function(){alert('jquery');});
//	$("#a1").click(function(){
	$("#b1 a").click(function(){
	th=$(this);
	lbcount = (lbcount+1)%2;
//	alert (th.timer);
		if (t) clearInterval(t);
//		if (uline.timer) alert('time'+uline.timer);
		if (uline.timer) {//alert('time'+uline.timer);
			clearInterval(uline.timer);
		}
//		if (th.timer) alert('time');
//		if ($(this).timer) alert('time');
//clearInterval(th.timer);

//	$(this).timer=$(this).setInterval(function(){
//	$(this).timer=setInterval(function(){
	th.timer=setInterval(function(){
//		alert("hi"+th.timer);
//		alert("hi"+th.timer);
		lcount = (lcount +1) % bay.length ;
		th.parent().slideUp(function(){


	//		uline.html(bay[lcount]);
			uline.html(lb[lbcount][lcount]);
			uline.parent().slideDown();});
			uline.timer=th.timer
	},2200);
		

		//alert('jquery');

	});
	$("#m").click(function(){alert('jquery');if (t) clearInterval(t);});
	t=setInterval(function(){
//		alert("hi");
		lcount = (lcount +1) % bray.length ;
		uline.fadeOut(function(){


		uline.html(bray[lcount]);
		uline.fadeIn();});

	},2200);


});


}

function getScrollAn(dId)
{
$(document).ready(function(){



/***********************************************/
	var blis= "b1news b2headline";
	var lis= "xc1news cb2headline";
	var klis=null;
	var bray = blis.split(' ');
	var bay = lis.split(' ');
//	var lb = new Array(bray,bay);
	var lb = new Array();
	var lbcount = 0;
//	var uline = $('#b1 a');
//	var uline = $('li .carni:first');
	var uline = $('li .carni:eq(2)');

	var lcount = 0;
	
	var t = 0;//uline;
	var th = 0;


//	$("#b1 a").click(function(){
//	th=$(this);
	th=$(uline);
//	lb = new Array(bray,bay);	
	lbcount = (lbcount+1)%2;
//	alert (th.timer);
		if (t) clearInterval(t);
//		if (uline.timer) alert('time'+uline.timer);
		if (uline.timer) {//alert('time'+uline.timer);
			clearInterval(uline.timer);
		}






	th.timer=setInterval(function(){


		lcount = (lcount +1) % bay.length ;
		th.parent().slideUp(function(){


	//		uline.html(bay[lcount]);
//			uline.html(lb[lbcount][lcount]);
			uline.parent().slideDown();});
			uline.timer=th.timer
	},2200);
		

		//alert('jquery');
	//click
//	});
/*
	$("#m").click(function(){alert('jquery');if (t) clearInterval(t);});
	t=setInterval(function(){

		lcount = (lcount +1) % bray.length ;
		uline.fadeOut(function(){


		uline.html(bray[lcount]);
		uline.fadeIn();});

	},2200);
*/

});


}

function getTog(dId)
{
	$(function(){
//		alert("hi");
		$("div .ftx"+dId+"").toggleClass("hidden");
	});	
	return false;
}
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
    


}
//-----End getSectionO
function getSectionLO(dId)
{
//----------------------------------
//
//Get journal results from search terms
//------------------------------------

    document.getElementById("field2").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
//    document.getElementById("son").before="";
  //  document.getElementById("fbox").style.display="none";

    hpb="<div id=\"searchDi\"><p>Enter terms to list sites listed on StarServer's cached sites:  Cornell.edu and Stargazing.net</p>";
// <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressJ(event,this.form)\"/>";

//     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById('sbox').value);\">Search Now</button>";
  //  hpb=hpb+"</div></div>";



    hpb=hpb+"<div class=\"row\">";
hpb=hpb+"<div class=\"col-md-4 col-sm-4\">";
hpb=hpb+"<!-- Header top left content contact -->";
hpb=hpb+"<div class=\"header-contact\">";
hpb=hpb+"<!-- Contact number -->";
hpb=hpb+"<span><i class=\"fa fa-phone red\"></i> 888-888-8888</span>";
hpb=hpb+"</div></div><div class=\"col-md-4 col-sm-4\"><!-- Header top right content search box --><div class=\" header-search\">";
hpb=hpb+"<form class=\"form\" role=\"form\"><div class=\"input-group\">";
hpb=hpb+"<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"sbox\" onkeypress=\"handleKeyPressJ(event,this.form)\">";
hpb=hpb+" <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"getMatchJ(document.getElementById('sbox').value);\"><i class=\"fa fa-search\"></i></button> </span>";
hpb=hpb+"</div></form></div></div></div>";
hpb=hpb+"</div>";

    document.getElementById("pageBar").innerHTML=hpb;
    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";
    


}

function getSectionT(tId)
{
//----------------------------------
//
//Get section for tables available
//------------------------------------

    document.getElementById("fieldT1").style.display="";

//--    document.getElementById("imagesky").innerHTML="";
//--    document.getElementById("son").innerHTML="";
//    document.getElementById("son").before="";
  //  document.getElementById("fbox").style.display="none";

//--    hpb="<div id=\"searchDi\"><p>Enter terms to list sites listed on StarServer's cached sites:  Cornell.edu and Stargazing.net</p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressJ(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
//--     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById('sbox').value);\">Search Now</button>";
//--    hpb=hpb+"</div></div>";
    //    alert("pageBar");
//--    document.getElementById("pageBar").innerHTML=hpb;
//--    document.getElementById("journ").innerHTML="";
//--    document.getElementById("imagesky").innerHTML="";
//--    document.getElementById("journ").style.display="none";
//--    document.getElementById("imagesky").style.display="none";

	$(function(){
    		getListTable(0);	    
//		return false;
	});
//		return false;
}



function getSectionPLO(dId)
{
//----------------------------------
//
//Get journal results from search terms
//------------------------------------

    document.getElementById("field3").style.display="";
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
    


}



/**************getSectionDB(dbId)**********

Gets blog entries from search terms


********************************/
function getSectionDB(dbId)
{

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
    




}


/*************getListDel
*Function to delete database contact entry by way of
*json helper file del.php using email
*
**/

function getListDel(dbId)
{

	//$.getJSON("http://localhost:8280/StarAdvisor/myf3.php?callback=?",
	$.getJSON("http://localhost:8280/StarAdvisor/del.php?emaild="+dbId+"&callback=?",
	function(data){
	});
}
//--End getListDel

function sendM()
{
//	$(function(){
var dbId=0;
	alert("hit");
//	$.getJSON("http://"+hostUrl+"/StarAdvisor/read.php?emaild="+dbId+"&callback=?",	
	$.getJSON("http://"+hostUrl+"/StarAdvisor/smail.php?emaild="+dbId+"&callback=?",
        function(data)
        {
//	alert("hi");
//		$('#espanEmail').html("hi");
	$.each(data.admins,function(i,item)

 	   {
		$('#espanEmail').html("hi"+item[1]+item[4]);
           });
	    
        });

//	});
}

function Xlogout()
{
//	$(function(){
var dbId=0;
	alert("hit");
//	$.getJSON("http://"+hostUrl+"/StarAdvisor/read.php?emaild="+dbId+"&callback=?",	
	$.getJSON("http://"+hostUrl+"/StarAdvisor/Xlogout.php?emaild="+dbId+"&callback=?",
        function(data)
        {
//	alert("hi");
//		$('#espanEmail').html("hi");
	$.each(data.sessions,function(i,item)

 	   {
		$('#espanEmail').html("hi"+item.message);
		$('#espanCart').html("hi"+item.message);

           });
//        location.href="index.php";
	
	    
        });

//	});
}



/*************loadDBB
*Function to load database contact entry by way of
*json helper read.php 
*reads from files co.txt and ac.txt
*
**/

function loadDBB(dbId)
{
//	var hostUrl = substr(window.location.href());
	alert ("here");
//	var hostUrl = window.location.href.split('\/')[2];
	
	alert (hostUrl);
//	$.getJSON("http://localhost:8280/StarAdvisor/read.php?emaild="+dbId+"&callback=?",
	$.getJSON("http://"+hostUrl+"/StarAdvisor/read.php?emaild="+dbId+"&callback=?",	
//	$.getJSON("http://54.68.234.173:8280/StarAdvisor/read.php?emaild="+dbId+"&callback=?",
	function(data){
		$.each(data.users ,function(i,item){
			$("#espanEmail").html(item.message);
		});//each
	});//json


}
//--End loadDBB---------------------



/**readfjTest
*
*Function to read from text file via xhr connection object
*and fill in table in admin section of website
*
*
*param dbId -- text file name to read from
*
*
*/

function readfjTest(dbId)
{

	$(function(){
//	$("#aftTable").html("helloooooo");
	try{
		var j = 0;
 		var file = new XMLHttpRequest();
		var fdbRay= new Array();
		var lineRay = new Array();
		var rx = /\"/g;
// 		file.open("get","co.txt",false);
 		file.open("get","co.txt",true);


 		file.onreadystatechange=function()
 		{
 			if (file.readyState == 4)
 			{
// 				alert("ready");
 				if (file.status == 200 || file.status==0)
 				{
 					var text = file.responseText;
 					alert(text);
					fdbRay = text.split('\n');
					

					for (j = 0; j<fdbRay.length -1 ;j++)

					{
						//if (rx.test(fdbRay[j])){alert("match");}
						fdbRay[j]=fdbRay[j].replace(rx,"");
						fdbRay[j]=fdbRay[j].split(',');
						tableFill(j,fdbRay[j]);
//					$("#aftTable").append(fdbRay[j][3]+"<br/>");						
//					$("#aftTable").append("line<br/>");
					}




					alert(text);

 				}
 	
 			}

 		}
 		file.send(null);
 		}catch(failed)
 		{
 			alert("xhr not supported");
 		}


});



}
/**********readfjDBB*****
The readfjDBB reads saved files such as co.txt: reading database info using php
in the event of the database being down.
Uses php helper file

--readph.php


*/
function readfjDBB(dbId)
{
/*
if (window.File && window.FileReader && window.Blob)
{

	var f = new FileReader();
	if (f)
	{
		var r = new FileReader();
	}

}


	var file = new XMLHttpRequest();
	file = open("GET","co.txt",false);
	file.onreadystatechange=function()
	{
		if (file.readystate == 4)
		{
			if (file.status == 200 || file.status==0)
			{
				var text = file.responseText;
				alert(text);
			}

		}
	}

*/
//	$.getJSON("http://localhost:8280/StarAdvisor/readph.php?fName="+dbId+"&callback=?",function(data){
	$.getJSON("http://"+hostUrl+"/StarAdvisor/readph.php?fName="+dbId+"&callback=?",function(data){
   alert ("hi");
		$.each(data.file,function(i,item){
			



	var pending=1;





	tabP=$("#dbTable tbody tr:eq("+i+") td:eq(0)");
	//if (tabP.text().length > 1)
    if (tabP.text().length > 0)
    {//--alert (tabP.text());

	//map as alternative to if td contains item conditional
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






	});//each json


	});	//json
}
//-- End readfjDBB()

/**********readfjtDBB*****
The readfjtDBB reads saved files such as co.txt: reading database info using php
in the event of the database being down.
Uses php helper file

--readph.php


*/
function readfjtDBB(dbId)
{
/*
if (window.File && window.FileReader && window.Blob)
{

	var f = new FileReader();
	if (f)
	{
		var r = new FileReader();
	}

}


	var file = new XMLHttpRequest();
	file = open("GET","co.txt",false);
	file.onreadystatechange=function()
	{
		if (file.readystate == 4)
		{
			if (file.status == 200 || file.status==0)
			{
				var text = file.responseText;
				alert(text);
			}

		}
	}
*/

//	$.getJSON("http://localhost:8280/StarAdvisor/readph.php?fName="+dbId+"&callback=?",function(data){
	$.getJSON("http://"+hostUrl+"/StarAdvisor/readph.php?fName="+dbId+"&callback=?",function(data){
   alert ("hi");
		$.each(data.file,function(i,item){
			
		tableFill(i,item);

	});//each json


	});	//json
}
//-- End readfjtDBB()


function tableFillT(i,item)
{
//		alert("table");
//		$('#lblTR'+i+'').append('tbl'+item[i]);	
//		$('#lblTR'+i).html('table'+(i+1)+':('+item[1]+'seats left)');	
/*		if (item[3] == 'N')
		$('#lblTR'+i).html('table'+(i+1)+':('+item[2]+'seats left)');	
		else
		$('#lblTR'+i).html('table'+(i+1)+':(0 seats left)');	
*/

		//seat(s) instead of seats
		if (item[1] == 1)
		{
			$('#lblTR'+i).html('<span class=\"price-tag br-white\">table'+(i+1)+': ('+item[1]+'<br/>seat left) </span>');	
		}
		else
		{
			$('#lblTR'+i).html('<span class=\"price-tag br-white\">table'+(i+1)+': ('+item[1]+'<br/>seatsz left) </span>');	
		}
}

function tableFill(i,item)
{



	var pending=1;





	tabP=$("#dbTable tbody tr:eq("+i+") td:eq(0)");
	//if (tabP.text().length > 1)
    if (tabP.text().length > 0)
    {alert (tabP.text());

	//map as alternative to if td contains item conditional
	$("#dbTable tbody tr:eq("+i+") td:eq(0):contains('"+item[1]+"')").map(function()
	{//--alert (item.first + $(this).text());
		tab1=$("#dbTable tbody tr:eq("+i+") td:eq(1)");
		tab2=$("#dbTable tbody tr:eq("+i+") td:eq(2)");
		tab3=$("#dbTable tbody tr:eq("+i+") td:eq(3)");

		//match all cells

		if (($("#dbTable tbody tr:eq("+i+") td:eq(1):contains("+item[2]+")").text().length >0) && ($("#dbTable tbody tr:eq("+i+") td:eq(2):contains("+item[3]+")").text().length > 0 ) && ($("#dbTable tbody tr:eq("+i+") td:eq(3):contains("+item[4]+")").text().length > 0))
		{

			pending=0;
		}else//match all
		{


		alert ("nomatch"+$("#dbTable tbody tr:eq("+i+") td:eq(1)").text()+$("#dbTable tbody tr:eq("+i+") td:eq(2)").text()+$("#dbTable tbody tr:eq("+i+") td:eq(3)").text()+":"+item[2]+item[3]+item[4]);




		pending=2;

		}// endif else match all


	});//map first item

	if ( pending ==1)  //since table cell exists
	{
		//--alert(""+i+"");
		pending=2;		//dont append
	}
//	$pending=0;


	}  //tabP length

	//check pending flag

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
			
	}//pending==2











}


//--readfDBB

function readFooStar(dbId)
{
	var m=2,t=2,e=1;

	var ranInput="mood="+m+"&time="+t+"&expertise="+e;

//	$.ajax({url:"http://"+hostUrl+"/api/v1/recipes?"+ranInput, dataType:'json'}).done(function(data){
	$.ajax({url:"http://"+hostUrl+"/StarAdvisor/model/recipeStar.json", dataType:'json'}).done(function(data){
		$.each(data,function(i,item){
			alert(item.ingredients[0]+"hi"+JSON.stringify(item)+"");
		});//each json

	}).fail(function(data){
		alert('fail'+hostUrl+"/model/recipeStar.json");

	});
}

function readfDBB(dbId)
{



//	$.getJSON("http://localhost:8280/StarAdvisor/co.txt?fName="+dbId+"&callback=?",function(data){
	$.getJSON("http://localhost:8280/StarAdvisor/readph.php?fName="+dbId+"&callback=?",function(data){
   alert ("hi");
		$.each(data.file,function(i,item){
			



//	var pending=1;
	var  pending=1;





	var tabP=$("#dbTable tbody tr:eq("+i+") td:eq(0)");
	//if (tabP.text().length > 1)
    if (tabP.text().length > 0)
    {//--alert (tabP.text());

	//map as alternative to if td contains item conditional
	$("#dbTable tbody tr:eq("+i+") td:eq(0):contains('"+item[1]+"')").map(function()
	{//--alert (item.first + $(this).text());
		var tab1=$("#dbTable tbody tr:eq("+i+") td:eq(1)");
		var tab2=$("#dbTable tbody tr:eq("+i+") td:eq(2)");
		var tab3=$("#dbTable tbody tr:eq("+i+") td:eq(3)");

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






	});//each json


	});	//json
}

/*************writeDBB
*Function to write database contact entry by way of
*json helper file write.php using email
*
**/


function writeDBB(dbId)
{
	var errLabel;

	alert("writedb");
	$(document).ready(function(){
//	$.getJSON("http://localhost:8280/StarAdvisor/write.php?emaild="+dbId+"&callback=?",
	$.getJSON("http://"+hostUrl+"/StarAdvisor/write.php?emaild="+dbId+"&callback=?",
	function(data){

		$.each(data.users,function(i,item){//should only show error item


			$("#espanEmail").html(item.message);
		
		});

			



	});

	});//document ready
}
//--End writeDBB---------------------------


/*************getAdminSession
*Function to write database contact entry by way of
*json helper file write.php using email
*
**/


function getAdminSession(dbId,passId)
{
	var errLabel;

//	alert("writedb");
	$(document).ready(function(){
//	$.getJSON("http://localhost:8280/StarAdvisor/admintag.php?emaild="+dbId+"&pass="+passId+"&callback=?",
	$.getJSON("http://"+hostUrl+"/StarAdvisor/admintag.php?emaild="+dbId+"&pass="+passId+"&callback=?",
	function(data){

		$.each(data.admins,function(i,item){//should only show error item


			$("#espanEmail").html(item.message);
		
		});

			



	});

	});//document ready
}
//--End writeDBB---------------------------



/**************getListTable*************************
*
*Function to read table of reservations and count
*how many seats/table are available
*
**/

function getListTable(dbID)
{
	$(document).ready(function(){
//	alert("listtable");
//	getLoc('#fieldT1');
//	$.getJSON("http://localhost:8280/StarAdvisor/readTable.php?callback=?",
	$.getJSON("http://"+hostUrl+"/StarAdvisor/readTable.php?callback=?",
		function(data){
			$.each(data.tables,function(i,item){
//			alert("talist");
				tableFillT(i,item);
			});
//	return false;			
		});	
//	return false;
	});
//	getLoc();

//	getLoc('showTab#fieldT1');

//	getLoc('?action=showTab#fieldT1');

//	return false;
}// end getListTable


/**************getListDB*************************
*
*Function to read contacts database and display
*Administration table
*
**/
function getListDB(dbId)
{
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

$(document).ready(function(){
//	location.href="index.html";
alert ("here");
//--alert ("ehire");
$("#yourname").html("hello");
$("#yournameb").val("hello");

$("#yournamea").val("hello");


//$.getJSON("http://localhost:8280/StarAdvisor/myf3.php?callback=?",
$.getJSON("http://"+hostUrl+"/StarAdvisor/myf3.php?callback=?",
function(data){



    $.each(data.users,function(i,item){
	tableFill(i,item);
    });//each
});//getJSON
});//doc ready

}// end getListDB


/**************getListDBB*************************
*
*Function to read contacts database and display
*Administration table
*
**/

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
//$.getJSON("http://localhost:8280/StarAdvisor/myf3.php?callback=?",
$.getJSON("http://"+hostUrl+"/StarAdvisor/myf3.php?callback=?",
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

	//map as alternative to if td contains item conditional
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






	});//each json


});//json

});//doc.ready
}//end of getListDBB

//---End--getListDBB--------------------------------------



/**************getSectionDBB*************************
*
*Function to set up database search by user name
*
**/

function getSectionDBB(dbId)
{



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
    

}
//-------------End SectionDBB---------------


/********************SectionLogin()-----------------
*
**/
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


    document.getElementById("journ").innerHTML="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("hero").style.display="none";
    document.getElementById("journ").style.display="none";
    document.getElementById("imagesky").style.display="none";



}

//---End SectionLogin



/*******************SectionInsertDB()--------------
*
*Gets blog entries from search terms
*
**/

function getSectionInsertDB(dbId)
{

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
    
}



//--End SectionInsertDB-------


/*********************getSectionBlog()------------------
*Gets blog entries from search terms
*
**/

function getSectionBlog(dId)
{

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
    

}
//--End getSectionBlog---------------------------


/*********************load()---------------
*Function to set-up page elements on load
*initializing divs and json requests
*
*
**/
function load()
    {

//alert("what");
//    setRPic(0);
    setRPik(0);
    document.getElementById("hero").style.display="";
    document.getElementById("dbTable").style.display="";

    document.getElementById("formstar").style.display="";
//    document.getElementById("forma").style.display="";

    document.getElementById("pageBar").style.display="";
    document.getElementById("pageBar").innerHTML="";

    document.getElementById("journ").style.display="";
    document.getElementById("journ").innerHTML="";

    document.getElementById("son").innerHTML="";
    document.getElementById("imagesky").style.display="";

    document.getElementById("imagesky").innerHTML="";

//	getEvents("hi");
//    setRPic(0);
/*	$(function(){
	$('#tabs').tabs({selected:0});
	});
*/
}
//--end  load()---------------


/*********************getSectionSky()---------------
*Function to set up div to handle sky by city search
*
*
**/

function getSectionSky(dId)
{

    document.getElementById("pageBar").style.display="";



    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";

    document.getElementById("son").style.display="";

    document.getElementById("pageBar").innerHTML="";

    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    hpb="<div id=\"searchSki\" ><p>Enter Capitalized city name (Canadian cities work best):Degree sign may show up as question mark.</p>  <input type=\"text\" id=\"skbox\"  onkeypress=\"handleKeyPressSki(event,this.form)\" />";
    hpb=hpb+"<div id=\"skbutton\"> <button onclick=\"getMatchSky(document.getElementById('skbox').value)\">dSearch Now</button>";
    hpb=hpb+"</div></div>";

    $(hpb).appendTo("#content .main #pageBar");

    document.getElementById("imagesky").style.display="";

	$('#tabs').tabs({selected:0});

}
//---end getSectionSky--------------------

function getLoginphp (lId)
{
	$('#tabs').tabs({selected:1});

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


//    var urlM="http://localhost:8280/StarServer/journals-and-newsletters.html";
    var urlM="http://"+hostUrl+"/StarServer/journals-and-newsletters.html";
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
function handleKeyPressFeedz(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiJ");




//     setSFeed(document.getElementById('sbox').value);
     setSSFeed(document.getElementById('zbox').value);


	}
}

