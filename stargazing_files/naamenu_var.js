	var NoOffFirstLineMenus=6;		// Number of first level items
	var LowBgColor='#445590';		// Background color when mouse is not over
	var LowSubBgColor='#4E60AA';		// Background color when mouse is not over on subs
	var HighBgColor='#4E60C4';		// Background color when mouse is over
	var HighSubBgColor='#4E60E0';		// Background color when mouse is over on subs
	var FontLowColor='#D4D4D4';		// Font color when mouse is not over
	var FontSubLowColor='#D4D4D4';	// Font color subs when mouse is not over
	var FontHighColor='#CDCDCD';		// Font color when mouse is over
	var FontSubHighColor='#D4D4D4';	// Font color subs when mouse is over
	var BorderColor='#C4C4C4';		// Border color
	var BorderSubColor='#D4D4D4';		// Border color for subs
	var BorderWidth=4;			// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,verdana,technical"	// Font family menu items
	var FontSize=10;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='center';	// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';		// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';	// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;			// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;		// vertical overlap child/ parent
	var StartTop=180;				// Menu offset x coordinate
	var StartLeft=12;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=0;				// Left padding
	var TopPaddng=7;				// Top padding
	var FirstLineHorizontal=0;		// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;		// Frames in cols or rows 1 or 0
	var DissapearDelay=1300;		// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';		// Frame where first level appears
	var SecLineFrame='space';		// Frame where sub levels appear
	var DocTargetFrame='space';		// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;			// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['menu/tri.gif',5,10,'menu/tridown.gif',10,5,'menu/trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","index.html","",0,30,154);

Menu2=new Array("About The Club","","",7);
	Menu2_1=new Array("General Info","pamphlet.htm","",0,30,154);	
	Menu2_2=new Array("Observatories","gdro.htm","",0);
	Menu2_3=new Array("Maps & Directions","map.htm","",0);
	Menu2_4=new Array("Contact Us","contacts.htm","",0);
	Menu2_5=new Array("Membership Info","member.htm","",0);
	Menu2_6=new Array("Photo Gallery","gallery.htm","",0);
	Menu2_7=new Array("Website Info","siteinfo.htm","",0);

Menu3=new Array("Current","","",4);
	Menu3_1=new Array("NAA News/Calendar","current.htm","",0,30,154);
	Menu3_2=new Array("Public Events","public.htm","",0);
	Menu3_3=new Array("Astronomy News","news.htm","",0);
	Menu3_4=new Array("Astronomy Data","cool2.htm","",0);

Menu4=new Array("Club Resources","","",5);
	Menu4_1=new Array("Observing Plans","observingtonight.shtml","",0,30,154);
	Menu4_2=new Array("Message Board","ygroup.htm","",0,30,154);
	Menu4_3=new Array("NAA Logo Store","store.htm","",0);
	Menu4_4=new Array("Library","books.htm","",0);
	Menu4_5=new Array("Meeting Minutes","minutes.htm","",0);

Menu5=new Array("Weather Resources","","",4);
	Menu5_1=new Array("Current Conditions","weather.htm","",0,30,154);
	Menu5_2=new Array("Forecast Tools","weather2.htm","",0);
	Menu5_3=new Array("Storm Monitor","storm.htm","",0);
	Menu5_4=new Array("Space Weather","cool.htm","",0);

Menu6=new Array("More Resources","","",6);
	Menu6_1=new Array("Astro-Ads","ads.htm","",0,30,154);
	Menu6_2=new Array("Boy Scout Merit Badge","meritbadge.htm","",0);
	Menu6_3=new Array("About Telescopes","","",3);
		Menu6_3_1=new Array("How Telescopes Work","scope2.htm","",0,30,164);
		Menu6_3_2=new Array("'Scope Computer","scopemath.htm","",0);
		Menu6_3_3=new Array("Choosing A 'Scope","scope3.htm","",0);
	Menu6_4=new Array("Gravity Wave Hunt","einstein.htm","",0);
	Menu6_5=new Array("Links","links.htm","",0);
	Menu6_6=new Array("Podcasts", "podcasts.htm", "", 0);
	Menu6_7=new Array("Best Websites","sotw.htm","",0);