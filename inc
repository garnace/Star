<!--CTYPE html-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>

<head>
<title>StarAdvisor</title>
<link href="css/style.css" rel="stylesheet" type="text/css" title="starA">
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.css" rel="stylesheet">
<!--link type="text/css" href="css/bootstrap.min.css" rel="stylesheet">

<link type="text/css" href="css/jasny-bootstrap.min.css" rel="stylesheet"-->


<link type="text/css" href="css/ui-lightness/jquery-ui-1.8.23.custom.css" rel="stylesheet" title="starA">




<!--style type='text/css'>
    body {
      background-color: #CCC;
    }
    #content {
      background-color: #FFF;
      border-radius: 5px;
    }
    #content .main {
      padding: 20px;
    }
    #content .sidebar {
      padding: 10px;
    }
    #content p {
      line-height: 30px;
    }
</style-->
<!--script type="text/javascript"  src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.js" ></script-->

<!--script type="text/javascript" src="scripts/bootstrap.min.js"></script-->
<script type="text/javascript" src="scripts/jquery.tools.min.js"></script>
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/script.js"></script>


  <!--style>img{ height: 100px; float: left; }</style  -->
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="scripts/jquery.tools.min.js"></script>
<!--   -------------------------------------------->
<!--   -------------Make tabs------>

<script type="text/javascript" src="scripts/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="scripts/jquery-ui-1.8.23.custom.min.js"></script>
<!--script type="text/javascript"  src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.js" ></script-->
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<!--script type="text/javascript" src="scripts/jasny-bootstrap.min.js"></script-->

<script>

var $= jQuery.noConflict();
$(document).ready(function(){
//setCarousel(0);
//setRPic(0);

//$('.carousel').carousel();
//$("#myCarousel").carousel({interval:3000,cycle:true});

//put in script
//$("#myCarousel").carousel({interval:false});

});

</script>

<script language="JavaScript" type="text/javascript">
<!------------------------------------------->
<!--http://www.go4expert.com/articles/form-validation-php-javascript-t438/-->
function valUser(oForm)
{
    var dat= "1234";
    var usr= oForm.elements['yourname'].value;
/*	    alert ("error");
    oForm.onsubmit=function(){
	if (usr != dat)
	    alert ("error2");
    }
hello ther vi*/
}




<!------------------------------------------->


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



$('.butdelc').live('click',function(){
//$(".butdelc").click(function(){

//$(this).parent().parent().remove();
$(this).parent().parent().slideUp("slow");

}

);

//setPic("nebula");
</script>



</head>
<body>
  <div class='container'>
    <!--TWITTER BOOTSTRAP TUTORIAL</h1-->
<div id="head" style="text-align: center;" >Star Advisor<br>
<!--div id="head" style="text-align: center;"><big style="color: rgb(204, 0, 0);"><big><big>Star Advisor</big></big></big><br-->
</div>


    <div class='navbar navbar-inverse'>
      <div class='navbar-inner nav-collapse' style="height: auto;">
        <ul class="nav">
          <li class="active"><a href="#" onclick="load(0);"> Home</a></li>
          <li><a href="#pageBar" onclick="getSFeedTerm(0);">Use LookUP</a></li>
          <li><a href="#pageBar" onclick="listSites(0);">Sites on Server</a></li>
          <li><a href="#pageBar" onclick="listSites(0);">Page Two</a></li>
        </ul>
      </div>
    </div>
    <div id='content' class='row-fluid'>
      <div class='span9 main'>
        <h2>Main Content Section</h2>

<p>

<!--div id="befoursel" >
<img src="images/Yoursky.gif" width="200" height="200"/>
</div-->

<div id="myCarousel" class="carousel slide">
<div class="carousel-inner">
 
<div class="active item">
<img src="images/Yoursky.gif"  alt="sky scape"/>
<div class="carousel-caption">
  <h4>Project</h4>
  <p>cras cras cras </p>
</div><!--cap-->
</div><!--item-->

<div class="item">
<img src="images/Yoursky.gif"   alt="sky scape"/>
<div class="carousel-caption">
  <h4>Project</h4>
  <p>cras cras cras </p>
</div><!--cap-->
</div><!--item-->



</div><!--carinner-->

<a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
<a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>



</div><!--slide-->



<div class="hero-unit">
<h1>Stuff</h1>
<p>hi</p>




<div id="imdiv">


<div id="images">
</div>

</div><!--imdiv-->

<!--a id="fb1" class="btn btn-large btn-success" style="padding:15px 0 8px 0;" onclick="setRPic(0);">Fickr Random!</a-->
<a id="fb2" class="btn btn-large btn-success" style="padding:15px 10 8px 10; padding-top:20;" onclick="setRPic(0);">Fickr Random!!!!!</a>
<a href="#" class="btn btn-large btn-success">Start</a>
</div> <!--hero-->


<div id="pageBar" >

        <!--p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.<p--> 


</div><!--pagebar-->
</p>

<div id="journ">

</div><!--journ-->


<div id="son">
</div><!--son-->

<div id="loadson" style="display:none;">
<img src="images/loading.gif" height="200px" width="200px"/>

</div><!--loadson-->


<!--dbTable start-->

<div id="dbTable" >

<!--table id="tableB" style="text-align: left; width: 592px; height: 79px;" border="1" cellpadding="2" cellspacing="2"-->
<table id="tableDB" cellpadding="6" cellspacing ="2" style="text-align: left; width: 62px; height: 79px; color:rgb(5,5,5);" border="1" cellpadding="2" cellspacing="2">
  <thead>
    <tr>
      <th>First</th>
      <th>Last</th>
      <th>Phone</th>
      <th>Moobile</th>
      <th>Row Deletion</th>
    </tr>
  </thead>


  <tbody>
    
    
    <tr>
      <!-- FIRST, LAST fields -->
      <td style="vertical-align: top; color: rgb(5,5,5);" >First

      </td>

      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >Last&nbsp;RSS
      </td>
      <!--End  FIRST, LAST fields -->
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >Phone&nbsp;RSS
      </td>

      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >Mobile&nbsp;RSS
      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" ><button class="butdelc">Delete</button>
      </td>



    </tr>
    <!--End HEADERS-------------------->

    <!--Start ROWS--------------------->

    <tr>

      <td style="vertical-align: top; color: rgb(5,5,5);" >&nbsp

      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >&nbsp;
      </td>

      <td style="vertical-align: top; color: rgb(5,5,5);" >&nbsp

      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >&nbsp;
      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" ><button class="butdelc">Delete</button>&nbsp;
      </td>



    </tr>
<!-- Second row------------->
    <tr>

      <td style="vertical-align: top; color: rgb(5,5,5);" >&nbsp

      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >&nbsp;
      </td>

      <td style="vertical-align: top; color: rgb(5,5,5);" >&nbsp

      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" >&nbsp;
      </td>
      <td style="vertical-align: top; color: rgb(5,5,5); cursor:pointer;" ><button class="butdelc">Delete</button>&nbsp;
      </td>



    </tr>


<!--End Second row------------->

      </tbody>
</table>

<!--dbTable END-->
  




<!--img  alt="cralt" src="http://localhost:8280/ss/YourskyGuelph_files/Yoursky.gif" alt="aa" title="titles" /-->

</div>


<div id="imagesky">

</div> <!--imagesky-->


<div id="formstarini">
<form class="form-inline" action="initfo.php" method="post" name="user_check">

<div class="controls-row">

<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->
<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->

<div  class="control-group"  >

<div class="controls">

<input class="btn btn-large btn-success" type="submit" value="Init!" >



</div><!--controls-->
</div><!--control-group-->





</div><!--row-->


</form>
</div><!--formstarini -->


<div id="formstar">

<form class="form-inline" action="insert.php" method="post" name="user_check" >


<fieldset>
<legend>Names</legend>
<div id="rw1"  class="controls-row"  >
<div  class="control-group span3"  >

<label class="control-label" for="yournamef"> Your First Name:</label> 
<div class="controls">
  <input id="yournamef" class="span12" type="text"  name="yournamef" placeholder="Your Name:" />
</div><!--controls-->

</div><!--control-group-->

<div  class="control-group span3"  >

<label class="control-label" for="yournamel"> Last Name:</label> 
<div class="controls">
  <input id="yournamel" class="span12" type="text"  name="yournamel" placeholder="Your Name:" />
</div><!--controls-->

</div><!--control-group-->


<div  class="control-group span3"  >

<label class="control-label" for="yourp"> Phone:</label> 
<div class="controls">
  <input id="yourp" class="span12" type="text"  name="yourp" placeholder="Phone:" />
</div><!--controls-->

</div><!--control-group-->


</div><!--row-->

<div id="rw2"  class="controls-row"  >
<div  class="control-group span3"  >

<label class="control-label" for="youre"> Your Email:</label> 
<div class="controls">
  <input id="youre" class="span12" type="text"  name="youre" placeholder="Your Email" />
</div><!--controls-->

</div><!--control-group-->

<div  class="control-group span3"  >

<label class="control-label" for="yourmp"> Mobile Phone:</label> 
<div class="controls">
  <input id="yourmp" class="span12" type="text"  name="yourmp" placeholder="Mobile" />
</div><!--controls-->

</div><!--control-group-->


<div  class="control-group span3"  >

<label class="control-label" for="yourx"> Fax:</label> 
<div class="controls">
  <input id="yourx" class="span12" type="text"  name="yourx" placeholder="Your Fax:" />
</div><!--controls-->

</div><!--control-group-->


</div><!--row-->


<div id="rw3"  class="controls-row"  >
<div  class="control-group span3"  >

<label class="control-label" for="yourws"> Web Site:</label> 
<div class="controls">
  <input id="yourws" class="span12" type="text"  name="yourws" placeholder="web" />
</div><!--controls-->

</div><!--control-group-->

<!--div  class="control-group span3"  >

<label class="control-label" for="yournamel"> Comments:</label> 
<div class="controls">
  <input id="yourc" class="span12" type="text"  name="yourc" placeholder="Mobile" />
</div>

</div><control-group-->


<div  class="control-group span3"  >
<label class="control-label" for="yourc"> comments</label> 
<div class="controls">
<textarea id="yourc"  name="yourc" rows="3" cols="40"></textarea>
</div><!--controls-->
</div><!--control-group-->


</div><!--row-->
<div class="controls-row">

<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->
<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->

<div  class="control-group"  >

<div class="controls">

<input class="btn btn-large btn-success" type="submit" value="Submit!" >
<input class="btn btn-large btn-success"  value="Display it!" onclick="getListDBB(0);">


</div><!--controls-->
</div><!--control-group-->





</div><!--row-->






</fieldset>
</form>
</div>
<!--------------------------------->


<div id="forma" style="display:none;">

<form class="form-horizontal" action="insertfos.php" method="post" name="user_check" >
<!-- div class="controls-row "-->
<!--div id="q1" class="span3"-->

<div  class="control-group "  >

<label class="control-label" for="yourname"> Your Name:</label> 
<div class="controls">
  <input id="yourname"  type="text"  name="yourname" placeholder="Your Name:" />
</div><!--controls-->

</div><!--control-group-->


<div  class="control-group ">
<label  class="control-label" for="first"> First:</label> 
<div class="controls">

 <input  type="text" name="first" id="first" placeholder="First"/>
</div><!--controls-->

</div><!--control-group-->
<!--/div><--row-->

<!--/div><--shorter q1 -->

<div  class="control-group"  >
<label class="control-label" for="last"> Last:</label> 
<div class="controls">

 <input type="text" id="last" name="last" placeholder="last"/>
</div><!--controls-->

</div><!--control-group-->

<div  class="control-group"  >
<label class="control-label" for="email"> Email:</label> 
<div class="controls">

 <input id="email" type="text" name="email" />

</div><!--controls-->
</div><!--control-group-->

<div  class="control-group"  >
<label class="control-label" for="phone">Phone:</label> 
<div class="controls">

 <input id="phone" type="text" name="phone"/>
</div><!--controls-->
</div><!--control-group-->

<div  class="control-group"  >
<label class="control-label" for="mobile"> Mobile:</label> 
<div class="controls">

 <input id="mobile" type="text" name="mobile"/>
</div><!--controls-->
</div><!--control-group-->


<div  class="control-group"  >
<label class="control-label" for="fax"> fax</label> 
<div class="controls">

 <input id="fax" type="text" name="fax"/>
</div><!--controls-->
</div><!--control-group-->

<div  class="control-group"  >
<label class="control-label" for="web"> web</label> 
<div class="controls">

WEB <input id="web" type="text" name="web"/>

</div><!--controls-->
</div><!--control-group-->
  


<div  class="control-group"  >
<label class="control-label" for="comments"> comments</label> 
<div class="controls">

Your comments:
<textarea id="comments" name="comments" rows="10" cols="40"></textarea>
</div><!--controls-->
</div><!--control-group-->

<p>
<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->
<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->

<div  class="control-group"  >

<div class="controls">

<input class="btn" type="submit" value="Submit!" >
<input class="btn"  value="Display it!" onclick="getListDBB(0);">


</div><!--controls-->
</div><!--control-group-->

</p>




</form>
</div><!--div a-->




        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.<p> 

        <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
      </div>
      <div class='span3 sidebar'>
        <h2>Sidebar</h2>
        <ul class="nav nav-tabs nav-stacked">
          <li><a href='#' onclick="load(0);">Home</a></li>
          <li><a href='#pageBar' onclick="getSFeedTerm('nebula');">Use LookUP</a></li>
          <li><a href='#' onclick="getSectionO(0);">News</a></li>
          <li><a href='#' onclick="getSectionSky(0);">Sky Maps</a></li>
          <li><a href='#' onclick="getSectionO(0);">Search Cornell</a></li>
          <li><a href='#' onclick="getSectionBlog(0);">Search Blogs</a></li>
          <li><a href='#' onclick="getSectionInsertDB(0);">Insert DB</a></li>
          <li><a href='#' onclick="getSectionDBB(0);">Search DB</a></li>
        </ul>
      </div>


    </div>


  </div>
</body>
</html>
