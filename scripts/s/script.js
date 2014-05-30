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




/*function valUser(oForm)
{
    var dat= "1234";
    var usr= oForm.elements['yourname'].value;
	    alert ("error");
    oForm.onsubmit=function(){
	if (usr != dat)
	    alert ("error2");
    }

}
*/

function setMap(mapId)
{

var htmap="<img alt=\"cralt\" src=\"http:localhost:8280/StarServer/YourskyGuelph_files/Yoursky.gif\" title=\"titles\" />";

}

function setPic(pId)
{


//-------------------------

//Flikr Example taken from

//http://api.jquery.com/jQuery.getJSON/

//------------------



    //    document.getElementById("#images").innerHTML="";
//$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: pId,
    tagmode: "any",
    format: "json"
  },
  function(data) {
      $("#images").html("");
      $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");
      if ( i == 8 ) return false;
    });
  });




}

function setRPic(pId)
{
    var arrPic=["galaxy","star night","sky","observatory","nebula","moon","asteroid","meteor","telescope"];
    var randI=Math.floor(Math.random()*(arrPic.length));

    setPic(arrPic[randI]);
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


function setSSFeed(pId)
{
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
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").style.display="";
//    document.getElementById("loadson").style.display="";

    var desc="NO DESC";
    htfeed=htfeed +"<ul type=\"square\" color=\"blue\">";
    document.getElementById("son").innerHTML="";
    document.getElementById("loadson").style.display="";
    
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
	     document.getElementById("fbox").style.display="none";
		  
	     $('#son').append("<p><b><font color=#ffee22>Search Results for '"+pId+"' </font></b></p>");
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
             $('#son').wrapInner('<ul></ul>');
	     $("<img/>").attr("src",data.image.src).attr("title",data.target.name).appendTo("#son");
	   	
      //      if ( i == 3 ) return false;



	   //	         $("<img/>").attr("src", item.media.m).attr("title",item.title).appendTo("#images");



             for(var i = 0; i < data.items.length && i < 3; i += 1)
		 $('#son').append('<li>' + '<h5>' + '<a href="' + data.items[i].alternate.href + '">' + data.items[i].title + '</a>' + '</h5>' + '<br />' + data.items[i].content);
             $('#son').append('<li>' + '<a href="http://www.google.com/reader/shared/yourusername">Subscribe to my Google Reader shared items &raquo;</a>' + '</li>');
             $('#son').wrapInner('<ul></ul>');
	     //             $('#grJSON').before("<h4>Articles I\'m Reading</h4>\n<br />");
         }).complete(function()
{
    document.getElementById("loadson").style.display="none";
    document.getElementById("fbox").style.display="none";
}
);
}).complete(function()
{
    document.getElementById("loadson").style.display="none";
    document.getElementById("fbox").style.display="none";
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
//***********************************************
//Input from user is used to find city by name and display link name
//to the user

//***********************************************


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

				 {doubleFlag=1;break;}
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
         htsamp=htsamp+"<ul type=\"circle\">";
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
			     htsamp=htsamp+"<li><p><b><font color =#ffee22  >"+  htarr[arrCount]+ "</font></b></p></li>"   ;
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
    document.getElementById("son").before="";


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


    hpb="<div id=\"searchDi\"><p>Enter terms to list blog sites listed on StarServer's cached site for Strudel.net </p> <input type=\"text\" id=\"sbox\" onkeypress=\"handleKeyPressBl(event,this.form)\"/>";
    //    hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchJ(document.getElementById(\"sbox\").value)\">Search Now</button>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Search Now</button>";
     hpb=hpb+"<div id=\"sbutton\"> <button onclick=\"getMatchBl(document.getElementById('sbox').value);\">Display All Data</button>";

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
	document.getElementById("imagesky").style.display="none";
	document.getElementById("pageBar").style.display="none";
	document.getElementById("journ").style.display="none";
	document.getElementById("son").style.display="none";
	document.getElementById("fbox").style.display="none";
//	document.getElementById("loadson").style.display="";

	document.getElementById("imagesky").innerHTML="";
	document.getElementById("pageBar").innerHTML="";
	document.getElementById("journ").innerHTML="";
	document.getElementById("son").innerHTML="";
//	document.getElementById("fbox").innerHTML="";
//P	document.getElementById("loadson").innerHTML="";
	setMap();



    }
function getSectionSky(dId)
{

    document.getElementById("pageBar").style.display="";
    document.getElementById("imagesky").innerHTML="";
    document.getElementById("son").innerHTML="";
    document.getElementById("son").before="";
    document.getElementById("son").style.display="none";


    document.getElementById("imagesky").innerHTML="";
    document.getElementById("journ").style.display="none";
    hpb="<div id=\"searchSki\"><p>Enter Capitalized city name (Canadian cities work best):<p><p>Degree sign may show up as question mark. </p> <input type=\"text\" id=\"skbox\"  onkeypress=\"handleKeyPressSki(event,this.form)\" />";
    hpb=hpb+"<div id=\"skbutton\"> <button onclick=\"getMatchSky(document.getElementById('skbox').value)\">Search Now</button>";
    hpb=hpb+"</div></div>";
    //    alert("pageBar");
    document.getElementById("pageBar").innerHTML=hpb;


    document.getElementById("imagesky").style.display="";
    //    document.getElementById("pageBar").innerHTML = "<p><b><font color =#ffee22> BUTTON PRESSSSSSSSEdddddddddddddddddddddddddddbbbb dddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddD</font></b></p>";
//getElementByID.

}


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




function handleKeyPressFeed(e,form){

	var key=e.keyCode;
	if (key==13)
	    {//alert("HiJ");




//     setSFeed(document.getElementById('sbox').value);
     setSSFeed(document.getElementById('sbox').value);


	}
}

