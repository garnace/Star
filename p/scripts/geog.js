
/**geo variables*/
var sclatitude=0;
 var sclongitude=0;
 var clatitude=0;
 var clongitude=0;
 
 var startTime=0;
 var lati=0;
 var longi=0;
 /***end geos*/



function getV()
 {alert("lat="+lati+"long="+longi);
 //document.getElementById("labox").value=lati;
 //document.getElementById("lobox").value=longi;
 }
/*generate all 32 automatically...page1.png,page2.png into array*/
function getPosition(params)
{//alert("position");
	try
	{
	
		//clearOutput();
		//document.getElementById("labox").value=80;
		//Save timestamp to measure how long it takes to get geolocation info
		//alert("positionz");
		startTime = new Date();	
		//alert("positionz");
//window.document.getElementById("labox").value=80;
		//First test to see that the browser supports the Geolocation API
		if (navigator.geolocation !== null)
		{
			//Configure optional parameters:
			var options;
			if (params)
			{
				//displayOutput("Retrieving Geographic information using parameters: " + params + " ..." );
				options = eval("options = " + params + ";");
			} 
			else {
				// Uncomment the following line to retrieve the most accurate coordinates available
				//
				//   options = { enableHighAccuracy : true, timeout : 60000, maximumAge : 0 };
				//
				//displayOutput("Retrieving Geographic information using default parameters");
			}
			navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, options);
		} 
		else {
			errorMessage("HTML5 geolocation is not supported.");
		}
	} 
	catch (e) {
		errorMessage("exception (getPosition): " + e);
	}
}

function geolocationError(posError)
{
	try
	{
		//displayOutput("Geolocation request took " + (getDuration(startTime) / 1000) + " seconds to respond.");
		
		if (posError)
		{
			switch(posError.code)
			{
				case posError.TIMEOUT:
					errorMessage("TIMEOUT: " + posError.message);
					break;
				case posError.PERMISSION_DENIED:
					errorMessage("PERMISSION DENIED: " + posError.message);
					break;
				case posError.POSITION_UNAVAILABLE:
					errorMessage("POSITION UNAVAILABLE: " + posError.message);
					break;
				default:
					errorMessage("UNHANDLED MESSAGE CODE (" + posError.code + "): " + posError.message);
					break;
			}
		}
	} 
	catch (e) {
		errorMessage("Exception (geolocationError): " + e);
	}
}
	function errorMessage(msg)
		{
			displayOutput("<span class='color:red'><b>Error</b>:" + msg + "</span>");
		}

function geolocationSuccess(position) 
{alert("suc");
	try
	{
		//displayOutput("Geolocation request took " + (getDuration(startTime) / 1000) + " seconds to respond.");
		
		// The Position object contains the following parameters:
		//	coords - geographic information such as GPS coordinates, accuracy, and optional attributes (altitude and speed).
		//  timestamp - 
		var coordinates = position.coords;
		var gpsTime = position.timestamp;
		//sclatitude =position.coords.latitude;
		//sclongitude=position.coords.longitude;
		lati =position.coords.latitude *1;
		longi=position.coords.longitude *1;
		//document.getElementById("lobox").value=sclongitude;
		//document.getElementById("labox").value=80;
		//window.clatitude = (position.coords.latitude);
		//window.clongitude=(position.coords.longitude);
		//clatitude = 40;
		//clongitude=40;
		alert ("lcale:" +position.coords.latitude +"and" +lati );
		
		//Now that we have the geographic information, what are some useful things that can be done with this info?
		
		//1) Display current GPS information:
		//displayLocationInfo(gpsTime, coordinates);
		
		//2) Display content relevant to the users current location:
		//	 Identify whether a user is within range of a given location. This can be done by calculating their 
		//      distance from a known location (within an allowable threshold of accuracy).
		//displayContentForLocation(coordinates);
		
		//3) Calculate relative direction to a point of interest
		//displayDirections(coordinates);
		
	} 
	catch (e) {
		errorMessage("exception (geolocationSuccess): " + e);
	}
}
