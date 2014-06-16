/** Date calender based on Ralph Steyer*/


/* Global vars
*/

var calDay;
var calMonth;
var calYear;
var calStartMD;

/*
@param {Object} --date object
*/
function calendarInit(d){
	var day;

/*	if (d ==null)
		day = new Date();

	calDay = day.getDate();
	calMonth = day.getMonth();
	calYear = day.getFullYear();
	alert("cal");	
*/	var curMonthStart = new Date(calYear,calMonth,1);
//	calStartMD = curMonthStart.getDay();
	alert("cal");	
//	$("#cal").append("<table id=\"tabCal\" style=\"width:200;height:100;color:#3344ff;\" border=\"1\" cellspacing=\"2\" cellpadding=\"2\" >");
	$('<table id="tabCal" width="277" height="100" style="color:#3344ff;" border="1" cellspacing="2" cellpadding="2" ></table>').appendTo('#cal');
	$('<thead></thead> ').appendTo('#cal table');

	$('<th>Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th> ').appendTo("#cal table thead");
//	$append('</tr></thead><tbody></tbody>').appendTo('#cal');
	$('<tbody></tbody>').appendTo('#cal');
	for (var j=0;j<4;j++)
	{
		$('<tr>').appendTo('#cal table tbody');		
		for (var i=0;i<7;i++)
		{
		
			$('<td>hi'+i+'</td>').appendTo('#cal tbody');
//			$("#cal tbody").append("<td></td>");
		}//cols
		$('</tr>').appendTo('#cal tbody');
	}//rows

}

$(function(){
alert("cal");
calendarInit(new Date());
alert("ccal");



});
