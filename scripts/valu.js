//-----valUser-----------------------
/**
	Function to validate login input
	@param object oForm form object from index/Log.html
	@returns boolean 
**/

function valUser(oForm)
{
    var dat= "1234";
    var showErr=0;

    var usr= oForm.elements['youre'].value;
    var usrf= oForm.elements['yournamef'].value;
    var usrl= oForm.elements['yournamel'].value;
	//mobile phone
    var usrm= oForm.elements['yourmp'].value;
	//phone
    var usrp= oForm.elements['yourp'].value;
	//password
    var usrpw= oForm.elements['yourpw'].value;
	//password confirm/authenticate
    var usrpwa= oForm.elements['yourpwa'].value;

	//   email reg

    var regm=/^[0-9]@[A-Za-z]+[\.][A-Za-z]{3}$/;

	//  mobile/phone reg

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
//alert("Errpw"+showErr);	
	if (usrpw=="")
	    {

		window.document.getElementById("espanPass").innerHTML="* Required";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanPass").innerHTML="";

	}
//alert("Err"+showErr);	

	//If there's any errors then return false

	if (showErr==1)
	{
		//alert("Err"+showErr);	

        	return false;
	}


        	return true;




}
//-----end valUser


//-----valUserLog-----------------------
/**
	Function to validate login input
	@param object oForm form object form Log.html
	@returns boolean 
**/
function valUserLog(oForm)
{
    var dat= "1234";
    var showErr=0;

    var usr= oForm.elements['youre'].value;

    var usrpw= oForm.elements['yourpw'].value;
	//email reg
    var regm=/^[0-9]@[A-Za-z]+[\.][A-Za-z]{3}$/;
	//mobile phone or phone reg
    var regmp=/^(\([0-9]{3}\)-|[0-9]{3}[-])?[0-9]{3}-[0-9]{4}$/;

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



	if (usrpw=="")
	    {

		window.document.getElementById("espanPass").innerHTML="* Required";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanPass").innerHTML="";

	}
//alert("Err"+showErr);	

	//If there's any errors then return false

	if (showErr==1)
	{
		//do not proceed to Log.php
        	return false;
	}

		//else proceed to Log.php
        	return true;




}
//------end valUserLog


/**
------------valNum function----------
	function to validate number input
	@param object el form element object name
	@param string msgg error message string  
*/
function valNum(el,msgg)
{
     var regm=/^[0-9]+$/;
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

//----end valNum function---------------



/**
*-----------JQuery handlers 
*--> quickflip wrappers
*--> table deletion
*--> carousel mouse hover effecting picture opacity 
*
**/

$(function(){
$('#tabs').tabs();

$('.quickflip-wrapper').quickFlip();
$('.quickflip-wrapper2').quickFlip();
//$('.quickflip-wrapper3').quickFlip();

$('.butdelc').live('click',function(){

//delete parent row containing button selected

$(this).parent().parent().remove();




alert($(this).parent().parent().find("td:eq(1)").text());

//call json function getListDel to handle database delete
//of first name text

getListDel($(this).parent().parent().find("td:eq(0)").text());

//display in last name in red if table row not removed

$(this).parent().parent().find("td:eq(1)").css('background-color','red');
});

//attempt to gracefully slide div#dis row:--doesnt seem to work for table

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
