<?php 
include ('./header.php');  

    if (isset($_POST['action']))
        {
            $action=$_POST['action'];
        }else if (isset($_GET['action']))
        {
            $action=$_GET['action'];
        } else
        {
            $action='none';
        }
    //(isset($_POST['action'])) ? $action=$_POST['action']: $action=$_p

?>
<div id="hero" class="hero-unit" >
<!--h1>Flickr</h1-->


<!--div id="yCarousel" -->

<!--  /div> <yCarousel-->


<!--p>hi</p-->




<div id="imdiv">
	<!--div class="quickflip-wrapper"-->
	<!--div ><a href="#" class="quickFlipCta"><img src="images/Yoursky.gif" /></a></div-->
	<!--div ><a href="#" class="quickFlipCta"> <img src="images/ss036.gif" /></a>  </div-->
	<!--/div-->
<!--img src="i/img/dish/dish1.jpg" width="50" height="50"/-->

</br>
<div id="images" >
</div><!--imdiv images-->

</div><!--imdiv-->

<div class="simple_overlay"  id="mies">
	<div class="details">
	</div>
</div>

<div id="imdivp" >


<div id="imagesp">
</div><!--imdiv imagesp-->

</div><!--imdiv-->




<a id="fb2" class="btn btn-large btn-success" style="padding:15px 10 8px 10; padding-top:20;" onclick="setRPic(0);">Banner</a>
<!--a class="btn btn-large btn-success" onclick="setTim(0);">Start</a-->

        

</div> <!--end hero-->



<!-- ############# TABS ############################-->
<div id="tabs" >
<ul>
	<li><a href="#tabs-h">Welcome</a></li>
	<li><a href="#tabs-1">Administrator</a></li>
	<li><a href="#tabs-2">Choose Meal & Time</a></li>
	<li><a href="#tabs-3">Survey</a></li>
	<li><a href="#tabs-4">Login</a></li>
</ul>

<div id="tabs-1">First container

<!-- # dbTable start-->

<div id="dbTable" >

<BR/>
<BR/>
<h3>DATA</h3>
<table id="tableDB" cellpadding="2" cellspacing="2" style="text-align: left;  color:rgb(5,25,215);" border="1" cellpadding="2" cellspacing="2">

  <thead>
    <tr>
      <th>First</th>
      <th>Last&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>Phone</th>
      <th>Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>Row Deletion</th>
    </tr>
  </thead>


  <tbody>
    
    
    <tr>
      <!-- FIRST, LAST fields -->
      <td >First

      </td>

      <td >Last&nbsp;RSS
      </td>
      <!--End  FIRST, LAST fields -->
      <td >Phone&nbsp;RSS
      </td>

      <td >Mobile&nbsp;RSS
      </td>
      <td ><button id="dbR1" class="butdelc">Delete</button>
      </td>



    </tr>
    <!--End HEADERS-------------------->

    <!--Start ROWS--------------------->

    <tr>

      <td >&nbsp;

      </td>
      <td >&nbsp;
      </td>

      <td >&nbsp;

      </td>
      <td >&nbsp;
      </td>
      <td ><button id="dbR2" class="butdelc">Delete</button>&nbsp;
      </td>



    </tr>
<!-- Second row------------->
    <tr>

      <td >&nbsp;

      </td>
      <td >&nbsp;
      </td>

      <td >&nbsp;

      </td>
      <td >&nbsp;
      </td>
      <td ><button id="dbR3" class="butdelc">Delete</button>&nbsp;
      </td>



    </tr>


<!--End Second row------------->

      </tbody>
</table>


  




<!--img  alt="cralt" src="http://localhost:8280/ss/YourskyGuelph_files/Yoursky.gif" alt="aa" title="titles" /-->

</div>
<!--dbTable END-->
<div id="aftTable"></div>

<!---***********************Initialize*******************-->
<div id="formstarini">
<form class="form-inline" action="initfo.php" method="post" name="userChecki">

	<div class="controls-row">


	<!--input type="submit" value="Send it!" onclick=" valUser(document.forms["user_check"]) ;"-->

	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<input class="btn btn-large btn-success" type="submit" value="Init!" />



		</div><!--controls-->
	</div><!--form-group-->

	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<!--input class="btn btn-large btn-err" type="submit" value="Init it!" -->

		<input class="btn btn-success col-sm-12"  value="Display it!" onclick="getListDB(0);"/>


		</div><!--controls-->
	</div><!--form-group-->


	</div><!--row-->
	<!--row rw db-->
	<div class="controls-row">


	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<!--input class="btn btn-large btn-success" type="submit" value="Submit!" -->
		<input class="btn btn-large btn-success col-sm-12" value="readDB !" onclick="loadDBB(0);">
		<!--input class="btn btn-large btn-success"  value="Check it!" onclick="getListDBB(0);"-->


		</div><!--controls-->
	</div><!--form-group-->


	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<!--input class="btn btn-large btn-success" type="submit" value="Submit!" -->
		<!--input class="btn btn-large btn-success"  value="Display it!" onclick="getListDBB(0);"-->
		<input class="btn btn-large btn-success col-sm-12" value="WriteDB!" onclick="writeDBB(0);">


		</div><!--controls-->
	</div><!--form-group-->
	</div><!--row-->
	<div class="controls-row">

	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<!--input class="btn btn-large btn-success" type="submit" value="Submit!" -->
		<!--input class="btn btn-large btn-success"  value="Display it!" onclick="getListDBB(0);"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfDBB('co.txt');"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfjtDBB('co.txt');"-->
		<input class="btn btn-large btn-success col-sm-12" value="ReadF!" onclick="readfjTest('co.txt');">


		</div><!--controls-->
	</div><!--form-group-->



	</div><!--row-->

</form>
	</br>
</div>
<!--*****************END formstarini ****************-->


</div>
<!--end first tab-->

<div id="tabs-2"><a href="#" class="tooltipp"><strong>Days Available next 2 weeks </strong><span>Tools and tips</span></a>
</br>
<div class="dih"><div class="img-frame"> <img src="images/Yoursky.gif" class="img-responsive" /><div class="img-frame-hover"><a href="#"><i class="fa fa-cutlery"></i></a></div> </div> </div>


<!--# img src="images/Yoursky.gif" width="50" height="50" /-->

<!--***************** cal ****************-->
<div id="cal">&nbsp;</div>

<div id="chkRes">
<form action="insertfos.php" class="form-inline" method="post"  id="chkResf" name="chkResf">
<fieldset>
<legend>Chek your reservations</legend>
	<div class="controls-row">

	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<input class="btn btn-large btn-success" type="submit" value="Show res" />
		<!--input class="btn btn-large btn-success"  value="Display it!" onclick="getListDBB(0);"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfDBB('co.txt');"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfjtDBB('co.txt');"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadF!" onclick="readfjTest('co.txt');"-->


		</div><!--controls-->
	</div><!--form-group-->



	</div><!--row-->
</fieldset>
</form>
</div>

<h3>hello</h3>




<div id="formres" >
<form  action="insertres.php" method="post" id="regform" name="regform"
onsubmit="return valReservation(this)">

<!--*****************formres field 0 ****************-->
<div id="field0">
	<fieldset>
	<legend>Details By Day Selected<span><i class="fa fa-phone fa-red">88</i></span> </legend>












	</fieldset>
</div> <!-- /#field0-->

<div id="fieldSeat">

	<fieldset>
	<legend>Narrow By Seat Preference<span><i class="fa fa-phone red"> 88</i></span> </legend>

	<div class="regChex0">
		<input type="checkbox" id="prefwin" name="prefChk[]" value="win"/>	
		<label for="prefwin" style="display:inline;">window seating</label>
		<br/>
		<input type="checkbox" id="prefbench" name="prefChk[]" value="bench"/>	
		<label for="prefbench" style="display:inline;">bench seating</label>
		<br/>
		<input type="checkbox" id="prefdisplay" name="prefChk[]" value="display"/>	
		<label for="prefdisplay" style="display:inline;">display seating (ie. fishtank)</label>

	</div><!-- /.regChex0-->
	<div class="regChex1">
		<input type="checkbox" id="prefcasual" name="prefChk[]" value="casual"/>	
		<label for="prefcasual" style="display:inline;">casual seating</label>
		<br/>
		<input type="checkbox" id="prefbusiness" name="prefChk[]" value="business"/>	
		<label for="prefbusiness" style="display:inline;">business seating</label>
		<br/>
		<input type="checkbox" id="addguest" name="prefChk[]" value="guest">
		<label for="addguest" style="display:inline;" > add guest</label>
		<br/>
	<!--select id="guestNum" name="guestNum" style="display:none;"-->
		<label for="guestNum" id="guestLab" class="guestC" style="display:none;" for="guestNum">party of</label>
		<!--select id="guestNum" class="guestC" name="guestNum" style="display:none;"-->
		<select id="guestNum" class="guestC" name="guestNum" style="opacity:0;">
		<!--option value="0" selected="selected">0</option-->
			<option value="2" selected="selected">2</option>
			<option value="3" >3</option>
		<select>
		<br/>
		<br/>
	</div><!-- /.regChex1-->
	<div class="regPrRadx2">
		<input type="radio" id="prefcasual" name="prefBC" value="casual"/>	
		<label for="prefcasual" style="display:inline;">casual seating</label>
		<br/>
		<input type="radio" id="prefbusiness" name="prefBC" value="business"/>	
		<label for="prefbusiness" style="display:inline;">business seating</label>
		<br/>
		<input type="button" id="about" name="about" value="about" rel="#mies"/>
		<label for="about" style="display:inline;" > about seat</label>
		<br/>
		<br/>
		<input type="button" id="avail" name="about" value="about" onclick="getSectionT(0);"/>
		<label for="about" style="display:inline;" > available</label>
		<br/>

		<br/>
	</div><!-- /.regPrRadx2-->




	</fieldset>
</div>

<!--                     ############################-->

<div id="fieldT1" style="display:none;">
	<fieldset>
	<legend>Tables Available</legend>

	<div class="regTRadx0">

	  <p  class="tbl">
		<input type="radio" id="regTRad0" name="regTable" value="black" checked="checked" />
		<label for="regTRad0" style="display:inline;" id="lblTR0">Table 1 (1 seat left)</label>
</br>
</br>
	   </p>
	  <p class="tbl">
		<input type="radio" id="regTRad1" name="regTable" value="white" />
		<label for="regTRad1" style="display:inline;" id="lblTR1">Table 2 </label>
</br>
		<br/>
	   </p>
		<!--input type="button" id="regTxBut0" name="regTxBut0" value="Select Dish" style="font-size:12px;" /-->
	


	
	




	</div><!-- /.regRadx0-->
	<div class="regTRadx1">
	  <p  class="tbl">
		<input type="radio" id="regTRad2" name="regTable" value="yellow"  />
		<label for="regTRad2" style="display:inline;" id="lblTR2">Table 3(2 seats left)</label>

</br>
</br>
	</p>
	  <p  class="tbl">
		<input type="radio" id="regTRad3" name="regTable" value="orange" />
		<label for="regTRad3" style="display:inline;" id="lblTR3">Table 4 (3 Seats Left)</label>

		<br/>
		<br/>
	</p>

		<!--input type="button" id="regTxBut1" name="regTxBut1" value="Select Dish" onclick="getSectionLO(0);" style="font-size:12px;"/-->







	</div><!-- .regRadx1-->
	<div class="regTRadx2">

		<input type="radio" id="regTRad4" name="regTable" value="yellow2"  />
		<label for="regTRad4" style="display:inline;" id="lblTR4">Table 3(2 seats left)</label>

</br>
</br>
		<input type="radio" id="regTRad5" name="regTable" value="orange2" />
		<label for="regTRad5" style="display:inline;" id="lblTR5">Table 4 (3 Seats Left)</label>

		<br/>
		<br/>

		<input type="button" id="regTxBut2" name="regTxBut2" value="Select Dish" onclick="getSectionLO(0);" style="font-size:12px;" />

		<!--input class="btn btn-large btn-success" type="button" value="Submit!" id="subR" onclick="return valReservation(this);" /-->





	</div><!-- .regRadx2-->



	</fieldset>
</div> <!--field3-->


<div id="field2" style="display:none;">
	<fieldset>
	<legend>Select Dish</legend>

	<div class="regDRadx0">
		<p>
		<input type="radio" id="regDRad0" name="regDish" value="Italian" checked="checked" />
		<label for="regDRad0" style="display:inline;">Italian</label>
		</p>

		<p>
		<input type="radio" id="regDRad1" name="regDish" value="Thai" />
		<label for="regDRad1" style="display:inline;">Tai</label>
		</p>
		<br/>
		<br/>
		<br/>




	</div><!-- .regRadx0-->
	<div class="regDRadx1">

		<input type="radio" id="regDRad4" name="regDish" value="Veg"  />
		<label for="regRad4" style="display:inline;">Vegetarian</label>


		<input type="radio" id="regDRad5" name="regDish" value="Mex" />
		<label for="regDRad5" style="display:inline;">Mexican</label>

		<br/>
	
		<br/>
		<br/>

		<input type="button" id="regDBut1" name="regDBut1" value="Go To PayOut" onclick="getSectionPLO(0);" />


	</div><!-- .regRadx1-->



	</fieldset>
</div> <!--field2-->
<div id="field3" style="display:none;">
	<fieldset>
	<legend>Select Payment Method</legend>

	<div class="regPRadx0">

		<input type="radio" id="regPRad0" name="regPay" value="Visa" checked="checked" />
		<label for="regPRad0" style="display:inline;">Visa</label>
</br>
</br>

		<input type="radio" id="regPRad1" name="regPay" value="Master" />
		<label for="regPRad1" style="display:inline;">Master Card</label>
</br>
		<br/>

	


	
	




	</div><!-- .regRadx0-->
	<div class="regPRadx1">

		<input type="radio" id="regPRad4" name="regPay" value="paypal"  />
		<label for="regRad4" style="display:inline;">Paypal</label>

</br>
</br>
		<input type="radio" id="regRad5" name="regPay" value="mo" />
		<label for="regRad5" style="display:inline;">Money Order</label>

		<br/>
		<br/>









	</div><!-- .regRadx1-->



	</fieldset>
</div> <!--field1-->


<!--                                 #####################-->



	<br/>

	<div class="controls-row">




	<div  class="form-group col-sm-3"  >

		<div class="controls">

		<input class="btn btn-large btn-success" type="submit" value="Submit!" id="subR" >
		<!--input class="btn btn-large btn-success" type="button" value="Submit!" id="subR" onclick="return getReg(this);" -->




		</div><!--/controls-->
	</div><!--/form-group-->

	</div><!--/row-->


</form><!--regform-->
</div><!--formreg-->



</div>
<!--end second tab-->
<div id="tabs-3">Survey
</div>
<!--end second tab-->
<div id="tabs-4">Login


<!--************************formstar starform****************************-->
<div id="formstar" name="formstar">

<form id="user_check" class="form-inline" action="insertfo.php" method="post" name="starform" onsubmit="return valUser(this);" role="form">


	<fieldset>
	<legend>Names</legend>
	<div id="rw1"  class="row"  >
	<div  class="form-group col-sm-3"  >

		<label class="control-label" for="yournamef"> First Name:<span class="espan" id="espanFirst"></span> </label> 
		<div class="input-group">
		<input id="yournamef" class="form-control col-sm-12" type="text"  name="yournamef" placeholder="Your Name:" />
		</div><!--cntrls input-group-->

	</div><!--form-group-->

	<div  class="form-group col-sm-3"  >

		<label class="control-label" for="yournamel"> Last Name:<span class="espan" id="espanLast"></span> </label> 
		<div class="controls">
		<input id="yournamel" class="form-control col-sm-12" type="text"  name="yournamel" placeholder="Your Name:" />
		</div><!--cntrls-->

	</div><!--form-group-->


	<div  class="form-group col-sm-3"  >

		<label class="control-label" for="yourp"> Phone:<span id="espanPhone" class="espan" ></span> </label> 
		<div class="controls">
		<input id="yourp" class="form-control col-sm-12" type="text"  name="yourp" placeholder="Phone:" />
		</div><!--controls-->

	</div><!--form-group-->




	<div  class="form-group col-sm-3"  >

		<label class="control-label" for="youre"> Your Email:<span id="espanEmail" class="espan" ></span></label> 
		<div class="controls">
		<input id="youre" class="form-control col-sm-12" type="text"  name="youre" placeholder="Your Email" />
		</div><!--controls-->

	</div><!--form-group-->

	</div><!--row-->

	<div id="rw2"  class="row"  >


	<div  class="form-group col-sm-3"  >

		<label class="control-label" for="yourmp"> Mobile Phone:<span id="espanMobile" class="espan" ></span> </label> 
		<div class="controls">
		<input id="yourmp" class="form-control col-sm-12" type="text"  name="yourmp" placeholder="Mobile" />
		</div><!--controls-->

	</div><!--form-group-->


	<div  class="form-group col-sm-3"  >

		<label class="control-label" for="yourx"> Fax:<span id="espanFax" class="espan" ></span></label> 
		<div class="controls">
		<input id="yourx" class="form-control col-sm-12" type="text"  name="yourx" placeholder="Your Fax:" />
		</div><!--controls-->

	</div><!--form-group-->


	</div><!--row-->


	<div id="rw3"  class="row"  >

<!------------------password row-------------------------------------------->

	<div class="form-group col-sm-3">
		<label class="control-label" for="yourpw">Choose Password<span id="espanPass" class="espan" ></span></label>
		<div class="controls">
		<input id="yourpw" class="form-control col-sm-12" type="password" name="yourpw" />
		</div><!--controls-->

	</div><!--form-group-->



	<div class="form-group col-sm-3">
		<label class="control-label" for="yourpwa">Re-enter Pass <span id="espanPassa" class="espan" ></span></label>
		<div class="controls">
		<input id="yourpwa" class="form-control col-sm-12" type="password" name="yourpwa" />
		</div><!--controls-->

	</div><!--form-group-->

	<div  class="form-group col-sm-3"  >
		<label class="control-label" for="countryx">City</label>
		<div class="controls">

		<select name="countryx" id="countryx"  style="width:90px;">
			<option value="oC">Ontario</option>
			<option value="oA" selected="selected">Kitchener</option>
			<option value="oS">Brampton</option>
			<option value="oB">Hamilton</option>
			<option value="oO">Elora</option>
		</select>



<!--input class="btn btn-large btn-success col-sm-12" value="Check it!" onclick="getListDBB(0);"-->
		</div><!--controls-->
	</div><!--form-group-->


<!----------------------end password row-------------------------------->

	</div><!--row-->

<!----------# Extra Row ##################################-Extra row------->

	<div class="row">
	<p>Membership:</p>


	<div class="form-group">
		<!--div class="controls"-->
		<input  type="checkbox" name="membChk[]" id="chk0" value="trial"/>
		<label class="control-label mem" for="chk0">Trial</label>
		<!--controls-->


	</div><!--group-->

	<p>

		<input  type="checkbox" name="membChk[]" id="chk1" value="classic"/>


		<label class="mem" for="chk1">Classic</label>
	</p>



	<div class="form-group">
	<!--div class="controls form-inline"-->
		<!--div class="controls form-inline"-->
		<input  type="checkbox" name="membChk[]" id="chk2" value="ultimate">
		<label class="control-label mem" for="chk2">Ultimate</label>
		<!--controls-->


	</div><!--group-->


	</div><!--row-->

	<div class="row">




	<div  class="form-group col-sm-3"  >

		

		<input class="btn btn-large btn-primary" type="submit" value="Submit!" id="subM" >




		<!--controls-->
	</div><!--form-group-->


	<div  class="form-group col-sm-3"  >

		

		<!--input class="btn btn-large btn-success" type="submit" value="Submit!" -->
		<input class="btn btn-large btn-success col-sm-12" value="Display it!" onclick="getListDBB(0);">
		<!--input class="btn btn-large btn-success"  value="Check it!" onclick="getListDBB(0);"-->


		
	</div><!--form-group-->


	<div  class="form-group col-sm-3"  >

		

		<!--input class="btn btn-large btn-success col-sm-12" value="Check it!" onclick="getListDBB(0);"-->
		
	</div><!--form-group-->



	</div><!--row-->






	</fieldset>
</form>
</div>
<!-----------*********END formstar starform********************---------------------->




</div>



<!--end third tab-->

</div><!--divtabs-->

<!-- ############# END TABS ############################-->



<div id="pageBar" >


</div><!--pagebar-->
</p>

<div id="journ">

</div><!--journ-->


<div id="son">
</div><!--son-->

<div id="loadson" style="display:none;">
<img src="images/loading.gif" height="200px" width="200px"/>

</div><!--loadson-->



<div id="imagesky">

</div> <!--imagesky-->









<?php include ('./footer.php')  ?>
