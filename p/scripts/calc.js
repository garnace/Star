var intenseTemp=0;
/*unit kg/(m^2) (mass per volume)*/
var chickenModerate=63;
var chickenExtreme=54;
var turkeyModerate=98;
var turkeyExtreme=83;
/*unit m^2 (size of crate)*/
var angliaDrawers = 0.79;
var lincoDrawers = 1.3;
var chickenCrates = 0.5;
var baskets = 0.46;
var largeLiners=1.32;
var smallLiners=1.09;
var ulr="";
function return10()
{
	return 10;
}

function test()
{
	/*This is esentially just a test function for when the button clicks.
	* If you go into calc.html you'll find some buttons at the bottom of the form.
	* These buttons have the "onclick" property which you can change from test()
	* to the relevant function call.
	*/
	alert("This isn't implemented.");
}

//Calculates the humidex value
function calculateHumidex(tempString, RHString)
{
	var temp=parseFloat(tempString);
	var RH =parseInt(RHString);
	
	if( isNaN(RH))// if it is not a number
	{
		alert("You did not enter a number in the humidity field. Please try again.");
		return null;
	}
	if(isNaN(temp))// not a number
	{
		alert("You did not enter a number in the temperature field. Please try again.");
		return null;
	}
        // pressure
    var kelvin=temp + 273;
	var eTs=Math.pow(10,((-2937.4 /kelvin)-4.9283* Math.log(kelvin)/Math.LN10 +23.5471));
    var eTd=eTs * RH /100;
   //calculate the humidex
   var humidexValue=Math.round(temp + ((eTd-10)*5/9));
    if (humidexValue < temp)//It is impossible to be colder because of the humidex
    {
        humidexValue=temp;
    }
	
	return humidexValue;
}

function calculate()
{
	/*Here's all the values from the form.*/
	var bird = document.calcform.birdtype.value;
	var load = document.calcform.loadtype.value;
	var temp = document.calcform.temperature.value;
	var humid = document.calcform.humidity.value;
	var weight = document.calcform.weight.value;
	var numOfChickens;
	var avgWeight = parseFloat(weight);
	if(bird=="null")
	{
		alert("Please select the type of bird.");
		return;
	}
	if(load =="null")
	{
		alert("Please select the type of Crate.");
		return;
	}
	if(weight=="")
	{
		alert("Please enter the bird's average weight");
		return;
	}
	
	if(isNaN(avgWeight))
	{
		alert("You did not enter a number in the weight field. Please try again.");
		return;
	}
	if(temp=="")
	{
		alert("Please enter the temperature");
		return;
	}
	if(humid=="")
	{
		alert("Please enter the humidity");
		return;
	}
	
	var humidexValue=calculateHumidex(temp,humid);	
	
	if(humidexValue==null)
	{
		return;
	}
	

	if(bird=="chicken" && load=="anglia")
	{
		if(humidexValue>intenseTemp)
		{
			numOfChickens= angliaDrawers*chickenExtreme/avgWeight;		
		}
		else
		{
			numOfChickens= angliaDrawers*chickenModerate/avgWeight;
		}
	}
	else if(bird=="chicken" && load=="linco")
	{
		if(humidexValue>intenseTemp)
		{
			numOfChickens= lincoDrawers*chickenExtreme/avgWeight;		
		}
		else
		{
			numOfChickens= lincoDrawers*chickenModerate/avgWeight;
		}
	}
	else if(bird=="chicken" && load=="crate")
	{
		if(humidexValue>intenseTemp)
		{
			numOfChickens= chickenCrates*chickenExtreme/avgWeight;			
		}
		else
		{
			numOfChickens= chickenCrates*chickenModerate/avgWeight;
		}
	}
	else if(bird=="hen" && load=="basket")
	{
		if(humidexValue>intenseTemp)
		{
			numOfChickens= baskets*chickenExtreme/avgWeight;		
		}
		else
		{
			numOfChickens= baskets*chickenModerate/avgWeight;
		}
	}
	else if(bird=="turkey" && load=="lliner")
	{
		if(humidexValue>intenseTemp)
		{
			numOfChickens= largeLiners*chickenExtreme/avgWeight;		
		}
		else
		{
			numOfChickens= largeLiners*chickenModerate/avgWeight;
		}
	}
	else if(bird=="turkey" && load=="sliner")
	{
		if(humidexValue>intenseTemp)
		{
			numOfChickens= smallLiners*chickenExtreme/avgWeight;		
		}
		else
		{
			numOfChickens= smallLiners*chickenModerate/avgWeight;
		}
	}
	else
	{
		//TODO: Adam, you made the interface, if you can get this message your not done. xD
		alert("Error: The crate size and bird type do not match. Please try again. ");
		return;
		//todo: figure out what they could have to do to preform this magic.
	}
	
	alert("The maximum recomended number of chickens is " + Math.round(numOfChickens));
}



function getPosition()
{
	try
	{
		//First test to see that the browser supports the Geolocation API
		if (navigator.geolocation != null)
		{
			var options;
			navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, options);
		}
		else
		{
			alert("HTML5 geolocation is not supported.");
			return;
		}
	}
	catch(failure)
	{
		alert("HTML5 geolocation is not supported.");
		return;
	}
}

function geolocationError(error)
{
   alert("An unexpected error occurred [" + error.code + "]: " + error.message);
}

function geolocationSuccess(position)
{
   //Extract information about the users current position:
   var coordinates = position.coords;

   //Retrieve geographic information about the GPS fix:
   var lat = coordinates.latitude;
   var lon = coordinates.longitude;

   if(lat>=90 || lat<=-90 || lon>=90 || lon <=-90)
   {
		alert("Error: Your location could not be found. Please try again or enter information manualy.");
		return;
   }
   url="http://free.worldweatheronline.com/feed/weather.ashx?q="+lat+"," +lon+"\&format=xml\&num_of_days=2\&key=7d62397355021850122303";
  // url="http://free.worldweatheronline.com/feed/weather.ashx?q="+lat.toString()+","+lon.toString()+"&format=json&num_of_days=2&key=7d62397355021850122303";
  
	var xmlHttp = null;
try{
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );	
	//parses xml file and recives temperature
	var pre="<temp_C>";
	var post="</temp_C>"; 
	var resultPre = xmlHttp.responseText.search(pre)+pre.length;
	var resultPost = xmlHttp.responseText.search(post);
	
	if(xmlHttp.responseText.search(pre)==-1|| xmlHttp.responseText.search(post) ==-1)
	{
		alert("Error: Your location could not be found. Please try again or enter information manualy.");
		return;
	}
		//parses xml file and recives humidity
	var resultLength = resultPost - resultPre;
	document.calcform.temperature.value= xmlHttp.responseText.substr(resultPre, resultLength);
	var pre="<humidity>";
	var post="</humidity>"; 
		if(xmlHttp.responseText.search(pre)==-1|| xmlHttp.responseText.search(post) ==-1)
	{
		alert("Error: Your location could not be found. Please try again or enter information manualy.");
		return;
	}
	var resultPre = xmlHttp.responseText.search(pre)+pre.length;
	var resultPost = xmlHttp.responseText.search(post);
	var resultLength = resultPost - resultPre;
   document.calcform.humidity.value= xmlHttp.responseText.substr(resultPre, resultLength);
   }
   catch(failed)
   {
		alert("Error: platform does not support XML. Please try again or enter information manualy ");
		return;
   }
}

