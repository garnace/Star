/** Date calender based on Ralph Steyer*/


/* Global vars
*/

var calDay;
var calMonth;
var calYear;
var calStartMD;
//var dd;
/*
@param {Object} --date object
*/
function calendarInit(d){
	var day;

	if (d ==null)
	{
	alert("da  undef");
		day = new Date();
	}else{
		day=d;
	}
	alert("da  "+day.toDateString()+"");
	var calMonth = day.getMonth();
	var calDay = day.getDate();
	var calYear = day.getFullYear();
/*


	calYear = day.getFullYear();
	alert("cal");	
*/
	var curMonthStart = new Date(calYear,calMonth,1);
	var curMonthStartDay = curMonthStart.getDay();
//	calStartMD = curMonthStart.getDay();
	alert("calSD"+curMonthStartDay+"::"+curMonthStart.toDateString());	
//	$("#cal").append("<table id=\"tabCal\" style=\"width:200;height:100;color:#3344ff;\" border=\"1\" cellspacing=\"2\" cellpadding=\"2\" >");
//	$('<table id="tabCal" width="277" height="100" style="color:#3344ff;" border="1" cellspacing="2" cellpadding="2" ></table>').appendTo('#cal');
	$('<table id="tabCal"  style="color:#3344ff;" border="1" cellspacing="2" cellpadding="2" ></table>').appendTo('#cal');
	$('<thead></thead> ').appendTo('#cal table');

	$('<th>Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th> ').appendTo("#cal table thead");
//	$append('</tr></thead><tbody></tbody>').appendTo('#cal');
	$('<tbody></tbody>').appendTo('#cal table');
	var startMCount=0;
	for (var j=0;j<4;j++)
	{
//		$('<tr></tr>').appendTo('#cal table tbody');		
		$('<tr></tr>').appendTo('#cal table tbody');		
		for (var i=0;i<7;i++)
		{
		
//			$('<td>hi'+i+'</td>').appendTo('#cal tbody');
			if (curMonthStartDay == i && j==0)
			{
			$("#cal table tbody tr:eq("+j+")").append('<td>hi'+(startMCount++)+'</td>');
			}
			else if (startMCount > 0)
			{
			if(calDay==startMCount)//check current day
				$("#cal table tbody tr:eq("+j+")").append('<td><span style="opacity:0.5;">no'+(startMCount++)+'</span></td>');
			else
				$("#cal table tbody tr:eq("+j+")").append('<td>hi'+(startMCount++)+'</td>');
			}

			else 
			{
			$("#cal table tbody tr:eq("+j+")").append('<td>hi</td>');
			}

//			$("#cal table").append('<td>hi'+i+'</td>');
		}//cols
//		$('</tr>').appendTo('#cal table tbody');
	}//rows

}

$(function(){
$(document).ready(function(){
var dd= new Date();
alert("cal"+dd);
calendarInit(dd);
alert("ccal");

});//doc ready

});
