
function valUser(oForm)
{
    var dat= "1234";
    var showErr=0;

    var usr= oForm.elements['youre'].value;
    var usrf= oForm.elements['yournamef'].value;
    var usrl= oForm.elements['yournamel'].value;
    var usrm= oForm.elements['yourmp'].value;
    var usrp= oForm.elements['yourp'].value;
    var usrpw= oForm.elements['yourpw'].value;
    var usrpwa= oForm.elements['yourpwa'].value;
    var regm=/^[0-9]@[A-Za-z]+[\.][A-Za-z]{3}$/;
    var regmp=/^(\([0-9]{3}\)-|[0-9]{3}[-])?[0-9]{3}-[0-9]{4}$/;
//    var regmp=/^([0-9]{3}-)?[0-9]{3}-[0-9]{4}$/;
//     if (el.value.match(regm))

	if ( usrl=="")
	    {
//	        window.document.starform.yournamel.value="lastVal";
		window.document.getElementById("espanLast").innerHTML="* Invalid";

		showErr=1;

            }
	else
	{
		window.document.getElementById("espanLast").innerHTML="";

	}
//alert("Errl"+showErr);	
	if ( usrf=="")
	    {
//	        window.document.starform.yournamel.value="lastVal";
		window.document.getElementById("espanFirst").innerHTML="* Invalid";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanFirst").innerHTML="";

	}
//alert("Errf"+showErr);	
	if (!regmp.test(usrp) || usrp=="")
	    {
//	        window.document.starform.yournamel.value="lastVal";
		window.document.getElementById("espanPhone").innerHTML="* Invalid";

		showErr=1;

            }
	else
	{
		window.document.getElementById("espanPhone").innerHTML="";

	}
//alert("Errph"+showErr);	
	if (!regmp.test(usrm) || usrm=="")
	    {

		window.document.getElementById("espanMobile").innerHTML="* Invalid";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanMobile").innerHTML="";

	}

//alert("Errpmo"+showErr);	

//	if (usr != dat)
	if (!regm.test(usr) || usr=="")
	    {
//	        window.document.starform.yournamel.value="lastVal";
		window.document.getElementById("espanEmail").innerHTML="* Invalid";

		showErr=1;

            }
	else
	{
		window.document.getElementById("espanEmail").innerHTML="";

	}
//alert("Errm"+showErr);	

	if (usrpw != usrpwa || usrpwa=="")
	    {

		window.document.getElementById("espanPassa").innerHTML="* Retry";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanPassa").innerHTML="";

	}
alert("Errpw"+showErr);	
	if (usrpw=="")
	    {

		window.document.getElementById("espanPass").innerHTML="* Required";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanPass").innerHTML="";

	}
alert("Err"+showErr);	

	//If there's any errors then return false

	if (showErr==1)
	{

        	return false;
	}


        	return true;




}

//-----valUserLog-----------------------

function valUserLog(oForm)
{
    var dat= "1234";
    var showErr=0;

    var usr= oForm.elements['youre'].value;

    var usrpw= oForm.elements['yourpw'].value;

    var regm=/^[0-9]@[A-Za-z]+[\.][A-Za-z]{3}$/;
    var regmp=/^(\([0-9]{3}\)-|[0-9]{3}[-])?[0-9]{3}-[0-9]{4}$/;
//    var regmp=/^([0-9]{3}-)?[0-9]{3}-[0-9]{4}$/;
//     if (el.value.match(regm))


//alert("Errf"+showErr);	

//	if (usr != dat)
	if (!regm.test(usr) || usr=="")
	    {
//	        window.document.starform.yournamel.value="lastVal";
		window.document.getElementById("espanEmail").innerHTML="* Invalid";

		showErr=1;

            }
	else
	{
		window.document.getElementById("espanEmail").innerHTML="";

	}
//alert("Errm"+showErr);	

alert("Errpw"+showErr);	
	if (usrpw=="")
	    {

		window.document.getElementById("espanPass").innerHTML="* Required";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanPass").innerHTML="";

	}
alert("Err"+showErr);	

	//If there's any errors then return false

	if (showErr==1)
	{

        	return false;
	}


        	return true;




}





function valNum(el,msgg)
{
     var regm=/^[0-9]$/;
     if (el.value.match(regm))
     {

	return true;
	
     }else
	{
		alert(msgg);
		el.focus();
		return false;	
	}
     
}







/*
//$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "galaxy",
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



//Table Delete jsond
$(function(){
/*	var headc=0;
for (var i=0;i < $.quickFlip.wrappers.length;i++)
{
	
for (var j=0;j < $.quickFlip.wrappers.length;j++)
{
	var current= $.quickFlip.wrappers[i];
	$(current.wrapper).click(function(){
		
	});
}
}
*/
$('.quickflip-wrapper').quickFlip();
$('.quickflip-wrapper2').quickFlip();
//$('.quickflip-wrapper3').quickFlip();

$('.butdelc').live('click',function(){


$(this).parent().parent().remove();




alert($(this).parent().parent().find("td:eq(1)").text());
getListDel($(this).parent().parent().find("td:eq(0)").text());


$(this).parent().parent().find("td:eq(1)").css('background-color','red');
});

$('#dis').live('click',function(){
$(this).slideUp("slow");
});

//so that hover anchor doesnt effect pic opacity
$('#yCarousel #myCarousel a').live('hover',function(){

$('#yCarousel #myCarousel .carousel-inner .item img').css('opacity','0.9');

});

//so that hover anchor doesnt effect pic opacity
$('#yCarousel #myCarousel a').live('mouseleave',function(){
//$(this).css('opacity','0.9');
$('#yCarousel #myCarousel .carousel-inner .item img').css('opacity','0.4');

});


//'live' sort of works (definitly at first load)
$('#yCarousel #myCarousel .carousel-inner .item img').live('hover',function(){
$(this).css('opacity','0.9');
});






//this works
$('#yCarousel #myCarousel .carousel-inner .item img').live('mouseleave',function(){
$(this).css({opacity:0.4});

});












});
