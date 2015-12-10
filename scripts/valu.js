//-----valUser-----------------------
/**
	Function to validate login input
	@param object oForm form object from index/Log.html
	@returns boolean 
**/

function valReservation(oForm)
{
	var showErr = 0;
	var cxPref = null;

	var errPrefBC=0;
	cxPref = new Array();

//	with (oForm.formreg.regform  regTRadx0)
//	with (oForm.regform prefChk)
//	{
	with (oForm)
	{
		for (var i = 0;i<prefChk.length;i++)
		{
			if (prefChk[i].checked==true)
			{
				cxPref.push(prefChk[i].value);
			}
		}
	}
	for (i=0;i<cxPref.length -1;i++)
	{

		if (cxPref[i] == 'business' || cxPref[i] =='casual')
			for (j=0;j<cxPref.length ;j++)
			{

				if ((cxPref[j] == 'business' || cxPref[j] =='casual') && i!=j)
					errPrefBC=1;
			}
	}







	if (showErr==1)
	{
		alert("Err"+showErr);	

        	return false;
	}

	getSectionLO(0);
       	return true;


}


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
    var usrgen=oForm.elements['orientationx'].selectedIndex;
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
//function valUserLog(oForm,usr,usrpw)
function valUserLog(usr,usrpw)
{
    var dat= "1234";
    var showErr=0;

//    var usr= oForm.elements['yourle'].value;

  //  var usrpw= oForm.elements['yourlps'].value;
	//email reg
    var regm=/^([0-9A-Za-z]+)@[A-Za-z]+[\.][A-Za-z]{3}$/;
	//mobile phone or phone reg
    var regmp=/^(\([0-9]{3}\)-|[0-9]{3}[-])?[0-9]{3}-[0-9]{4}$/;

//	if (usr != dat)
	$(document).ready(function(){
//	alert("valul::"+usr+":"+usrpw);
	if (!regm.test(usr) || usr=="")
	    {
//	        window.document.starform.yournamel.value="lastVal";
		window.document.getElementById("espanle").innerHTML="* Invalid";

		showErr=1;

            }
	else
	{
		window.document.getElementById("espanle").innerHTML="";

	}



	if (usrpw=="")
	    {

		window.document.getElementById("espanlps").innerHTML="* Required";


		showErr=1;

            }
	else
	{
		window.document.getElementById("espanlps").innerHTML="";

	}
//alert("Err"+showErr);	

	//If there's any errors then return false

	if (showErr==1)
	{
		//do not proceed to Log.php
        	return false;
	}

		//else proceed to Log.php
//        	return true;

	$.getJSON("http://localhost:8280/StarAdvisor/adminperm.php?emaild="+usr+"&pass="+usrpw+"&callback=?",
	function(data){

		$.each(data.admins,function(i,item){//should only show error item


//			$("#espanle").html(item.message);
			$("#espanle").html(item[0]+":"+item[1]);
		
		});

			



	});

	});//document ready




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

//$('input[checkbox]')
//$('#addguest').toggle('#guestNum');
//$('#addguest').click(function(){$('#guestNum').toggle();});
//$('#addguest').click(function(){$('#guestNum').css({display:'inline',opacity:0.4});});

/*$('#addguest:checked').toggle(function()
	{
	$('#guestNum').css({display:'inline',opacity:0.4});
	$('#addguest').attr("checked","checked").css({display:'block',opacity:0.4});

	},function()
	{
	$('#addguest').css({display:'block',opacity:0.4});
	$('#guestNum').css({display:'none'});
	}

	);

*/
//overlay for about
$("input[rel]").overlay();


// Quiz timer
$("#gQ").click(function(){

	var qb = $('input[class*=qin]');

	var qblen= $(qb).length;	
//	var qblen= qb.length;	

	var i=0;
	var j=0;
	var t=0;
	var l=0;
	var th;
	alert('length'+qblen+':'+$(this).val());
//	hideQuiz();
	for (i=0;i<qblen;i++)
	{

		if ($((qb)[i]).hasClass('hidy'))
		{
			$((qb)[i]).removeClass('hidy');
		}
	}

	// reset counter

	i=0;
	th=this;
//	$(th).timer =setInterval(function(){
//	$('#gQ').timer =setInterval(function(){
//	$('#gQ').dataset.timer =setInterval(function(){
	$('#gQ').data('timer',setInterval(function(){

			l=$(qb).length;

			//elongate to place then set size to normal width
			$((qb)[i]).animate({left :'+=8'}).animate({marginLeft : '-=700',width: '+=700'},200).animate({width: '-=700'});

			//check mod count of list length of inputs reaches 0
			i= ((i+1)%(l));
			if (i==0) 
			{
//				clearInterval($(th).timer);
//				clearInterval($('#gQ').timer);
				clearInterval($('#gQ').data('timer'));
				getQuizTimer();
			}
//		},500);
		},500));


//	});

}); // --.gQ
//display addition addguest info checkboxes
$('#addguest').click(function()
	{
	if ($('#addguest:checked').length == 1)
	{

	$('#addguest').css({display:'inline'});
//	$('#addguest').css({display:'inline',opacity:0.4});

	$('#guestNum').css({display:'inline',opacity:1.0});
	$('#guestLab').css({display:'inline',opacity:1.0});
	}
	else
	{
//	$('#addguest').css({display:'inline',opacity:0.8});
	$('#addguest').css({display:'inline'});
	$('#guestNum').css({display:'none',opacity:0.0});
	$('#guestLab').css({display:'none',opacity:0.0});
	}

	});//------/--#addguest checked----------- 




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
