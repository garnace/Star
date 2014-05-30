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

	if (d ==null)
		day = new Date();
	
	calDay = day.getDate();
	calMonth = day.getMonth();
	calYear = day.getFullYear();
	
	var curMonthStart = new Date(calYear,calMonth,1);
	calStartMD = curMonthStart.getDay();

	
}

$(function()(
calendarInit(new Date());




});
