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

	var zer=0;
	if (d ==null)
	{
//	alert("da  undef");
		day = new Date();
	}else{
		day=d;
	}
//	alert("da  "+day.toDateString()+"");
	var calMonth = day.getMonth();
	var calDay = day.getDate();
	var calYear = day.getFullYear();
/*


	calYear = day.getFullYear();
	alert("cal");	
*/
	var curMonthStart = new Date(calYear,calMonth,1);
	var curMonthStartDay = curMonthStart.getDay();
	var monthName;
	var dayName=day.toDateString().split(" ").slice(0,1);

	alert("mon"+calMonth.toString());
//	alert("calSD"+curMonthStartDay+"::"+curMonthStart.toDateString());	
//	alert("calSD"+calDay);	
//	$("#cal").append("<table id=\"tabCal\" style=\"width:200;height:100;color:#3344ff;\" border=\"1\" cellspacing=\"2\" cellpadding=\"2\" >");
//	$('<table id="tabCal" width="277" height="100" style="color:#3344ff;" border="1" cellspacing="2" cellpadding="2" ></table>').appendTo('#cal');
//	$('<table id="tabCal"  style="color:#3344ff; border:1px solid black;" border="1" cellspacing="2" cellpadding="2" ></table>').appendTo('#cal');
	$('<table id="tabCal"  style="color:#3344ff; border:1px solid black;" cellspacing="2" cellpadding="2" ></table>').appendTo('#cal');
	$('<thead><tr></tr></thead> ').appendTo('#cal table');


	$('<th sytle="border: 1px solid white;"><a onclick="prevMon(0);">&lt;</a></th><th colspan="5" style="text-align:center;">'+day.toDateString().split(" ").slice(1,2)+'</th><th>&gt;</th>').appendTo("#cal table thead tr");

//	$('<thead><tr></tr></thead> ').appendTo('#cal table');
	$('<tr></tr>').appendTo('#cal table thead');

//	$('<th >Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th> ').appendTo("#cal table thead:eq(1) tr");
	$('<th >Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th> ').appendTo("#cal table thead tr:eq(1)");
//	$append('</tr></thead><tbody></tbody>').appendTo('#cal');
	$('<tbody style="border:1px solid blue;"></tbody>').appendTo('#cal table');
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
			$("#cal table tbody tr:eq("+j+")").append('<td>hif'+(++startMCount)+'</td>');
			}
			else if (startMCount > 0)
			{
				if(calDay==(startMCount+1))//check current day
				{
					$("#cal table tbody tr:eq("+j+")").append('<td><span style="opacity:0.5;">no'+(++startMCount)+'</span></td>');
				}

				else
					$("#cal table tbody tr:eq("+j+")").append('<td>hi'+(++startMCount)+'</td>');


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

function nextMon(mId)
{
//	mId--;
	var monat=new Array("january","february","march","april","may","june","july","august","september","october","november","december");
	alert("m"+mId);
}
function prevMon(mId)
{
//	mId--;
//	alert("m"+mId.getMonth());
//	alert("m"+mId);
	var curM=0;
	var monat=new Array("january","february","march","april","may","june","july","august","september","october","november","december");
	var tabH=$("#cal table thead tr:eq(0) th:eq(1)").text();

	for (i=0;i++;i< monat.length)
	{
		if ($("#cal table thead tr:eq(0) th:eq(1):contains("+monat[i]+")").text().length >0)
			curM=i;	
	}
	alert("m"+curM+tabH);


//	alert("hello");
}

$(function(){
$(document).ready(function(){
var dd= new Date();
//alert("cal"+dd);
calendarInit(dd);
//alert("ccal");

});//doc ready

});
