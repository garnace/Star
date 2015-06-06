<?php 
include ('./headerg.php');
?>
<div id="hero" class="hero-unit" >
<!--h1>Flickr</h1-->


<!--div id="yCarousel" -->

<!--  /div> <yCarousel-->


<!--p>hi</p-->




<div id="imdiv" style="display:none;">
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

<div id="imdivp" style="display:none;">


<div id="imagesp">
</div><!--imdiv imagesp-->

</div><!--imdiv-->




<!--a id="fb2" class="btn btn-large btn-success" style="padding:15px 10 8px 10; padding-top:20;" onclick="getSitesM(2);">Banner</a-->
<!--a id="fb3" class="btn btn-large btn-success" style="padding:15px 10 8px 10; padding-top:20;" onclick="getAniM(2);">Animate</a-->
<!--a class="btn btn-large btn-success" onclick="setTim(0);">Start</a-->

        

</div> <!--end hero-->
			<!-- Header Start -->
			

<!-- ############# TABS ############################-->
<div id="tabs" >
<ul>
	<li style="display:none;"><a href="#tabs-h">Welcome</a></li>
	<li style="display:none;"><a href="#tabs-1">Administrator</a></li>
	<li style="display:none;"><a href="#tabs-2">Choose Meal & Time</a></li>
	<li style="display:none;"><a href="#tabs-3">Upload</a></li>
	<li style="display:none;"><a href="#tabs-4">Login</a></li>
</ul>

<div id="tabs-1">First container

<!-- # dbTable start-->

<div id="dbTable" >

<BR/>

			<!-- Header Start -->
			
			<div class="header">
				<div class="container">
					<!-- Header top area content -->
					<div class="header-top">
						<div class="row">
							<div class="col-md-4 col-sm-4">
								<!-- Button Kart -->
								<div class="btn-cart-md">
									<a class="cart-link" href="#">
										<!-- Image -->
										<img class="img-responsive" src="images/Yoursky.gif" alt="" />
										<!-- Heading -->
										<h4>Shopping Cart</h4>
										<span>3 items $489/-</span>
										<div class="clearfix"></div>
									</a>
									<ul class="cart-dropdown" role="menu">
										<li>
											<!-- Cart items for shopping list -->
											<div class="cart-item">
												<!-- Item remove icon -->
												<a href="#"><i class="fa fa-times"></i></a>
												<!-- Image -->
												<img class="img-responsive img-rounded" src="img/nav-menu/nav1.jpg" alt="" />
												<!-- Title for purchase item -->
												<span class="cart-title"><a href="#">Exception Reins Evocative</a></span>
												<!-- Cart item price -->
												<span class="cart-price pull-right red">$200/-</span>
												<div class="clearfix"></div>
											</div>
										</li>
										<li>
											<!-- Cart items for shopping list -->
											<div class="cart-item">
												<!-- Item remove icon -->
												<a href="#"><i class="fa fa-times"></i></a>
												<!-- Image -->
												<img class="img-responsive img-rounded" src="img/nav-menu/nav2.jpg" alt="" />
												<!-- Title for purchase item -->
												<span class="cart-title"><a href="#">Taut Mayorefffss Alias Appendicitis</a></span>
												<!-- Cart item price -->
												<span class="cart-price pull-right red">$190/-</span>
												<div class="clearfix"></div>
											</div>
										</li>
										<li>
											<!-- Cart items for shopping list -->
											<div class="cart-item">
												<!-- Item remove icon -->
												<a href="#"><i class="fa fa-times"></i></a>
												<!-- Image -->
												<img class="img-responsive img-rounded" src="img/nav-menu/nav3.jpg" alt="" />
												<!-- Title for purchase item -->
												<span class="cart-title"><a href="#">Sinter et Molests Perfectionist</a></span>
												<!-- Cart item price -->
												<span class="cart-price pull-right red">$99/-</span>
												<div class="clearfix"></div>
											</div>
										</li>
										<li>
											<!-- Cart items for shopping list -->
											<div class="cart-item">
												<a class="btn btn-danger" data-toggle="modal" href="#shoppingcart1">Checkout</a>
											</div>
										</li>
									</ul>
									<div class="clearfix"></div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div><!--   row-->
					</div><!--top-->
</div><!--container-->
</div>

<BR/>


<div data-role="page" >
<div data-role="header">
<h1>first</h1>
</div>


<div data-role="content">
<ul data-role="listview" data-split-icon="gear">
<li><a href="#">one</a><a href="#">button</a></li>
<li><a href="#" id="m">twoo</a><a href="#">button</a></li>
<li id ="b3"><a href="#" id="a3">threewo</a><a href="#">button</a></li>
</ul>
<p>hello world<a href="#second" data-transition="pop">go second</a></p>
<p>hello world<a href="#third" onclick="getM();">go second</a></p>

</div>

</div><!--page-->


<div data-role="page" id="second">
<div data-role="header">
<h1>second</h1>
</div>


<div data-role="content">
<p>hello world</p>
</div>
</div>
<div class="btn-car-md" id="cartd" style="width:200px;">

									<ul class="car-dropdown" role="menu">

										<li>
											<!-- Cart items for shopping list -->
											<div class="cart-item" id="cartButton">
												<a class="btn btn-danger"  href="#cartd" onclick="getEvents(1)">Checkout</a>
												<div class="clearfix"></div>
											</div>
    <div class="clearfix"></div>
										</li>
									</ul>

</div>

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

<div id="tabs-2">

<!--a href="#" class="tooltipe"><strong>--Days Available next 2 weeks </strong><span>Tools and tippppppppptidds</span></a-->
<!--/br-->
<!--div class="dih"><div class="img-frame"> <img src="images/Yoursky.gif" class="img-responsive" /><div class="img-frame-hover"><a href="#"><i class="fa fa-cutlery"></i></a></div> </div> </div-->


<!--# img src="images/Yoursky.gif" width="50" height="50" /-->

<!--***************** cal ****************-->
<div id="cal">&nbsp;</div>
<div id="calm"> 
   <label id="ldshow" for="dshow">date pickeddd:</label>
    <input id="dshow"></input>
     <div id="cmpick">
     <!--input type="text" id="cmpick"></input-->
    </div>
</div>
<hr/>
<div id="chkRes">
<form action="tag.php" class="form-inline" method="post"  id="chkResf" name="chkResf">
<fieldset>
<legend>Chek your reservations</legend>
	<div class="controls-row">

	<div  class="form-group col-sm-3"  >

		<div class="controls">
		<input type="hidden" name="action" value="showres">
		<input class="btn btn-large btn-success" type="submit" value="Show res" />

		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfDBB('co.txt');"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfjtDBB('co.txt');"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadF!" onclick="readfjTest('co.txt');"-->


		</div><!--controls-->
	</div><!--form-group-->
	<div  class="form-group col-sm-3"  >

		<div class="controls">
		<input type="hidden" name="action" value="showres">
		<!--input class="btn btn-large btn-success" type="submit" value="Show res" /-->

		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfDBB('co.txt');"-->
		<!--input class="btn btn-large btn-success col-sm-12" value="ReadFF!" onclick="readfjtDBB('co.txt');"-->
		<input class="btn btn-large btn-success col-sm-12" value="htref res" onclick="getLoc();">


		</div><!--controls-->
	</div><!--form-group-->



	</div><!--row-->
</fieldset>
</form>
</div>

<?php 
      if ($action == "shwres"):
?>

<div id="shwRes" style="display:none;">

<?php  else: ?>
<div id="shwRes" >
<?php  endif; ?>


<?php
     if ($action == "showres")
     {
//         echo "<h3>show::".print_r($_SESSION["user"])."</h3>";
         echo "<h3>".$_SERVER["DOCUMENT_ROOT"].PATH_SEPARATOR."show".$user."i::".print_r($user,1)."</h3>";
         echo "<h3>show::".$_SESSION["user"]["email"]."</h3>";
     }
?>
<?php
    if ($action == "shwres"):
?>
<h3>showif</h3>
<?php endif; ?>
<form action="." class="form-inline" method="post"  id="shwResf" name="shwResf">
<fieldset>
<legend>Your reservation listings</legend>
	<div class="controls-row">

	<div  class="form-group col-sm-3"  >

		<div class="controls">
		<input type="hidden" name="action" value="upres">
		<input class="btn btn-large btn-success" type="submit" value="Update res" />

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
<form  action="insertres.php" method="post" id="regform" name="regform" onsubmit="return valReservation(this)">
<!--form  action="insertres.php" method="post" id="regform" name="regform" -->

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
		<input type="button" id="avail" name="about" value="aboutT" onclick=" getSectionT(0); return false;">
		<label for="about" style="display:inline;" > available</label>
		<br/>

		<br/>
	</div><!-- /.regPrRadx2-->




	</fieldset>
</div>

<!--                     ############################-->

<?php if ($action != "showTab"): ?>
<div id="fieldT1" style="display:none;">
<?php else: ?>
<div id="fieldT1" >
<?php endif; ?>
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

<br/>
<br/>
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
<div id="tabs-3">Upload

<div id="frmUpload">
<form action = "." method="post" id="starUp" name="starUp" enctype="multipart/form-data">
    <fieldset>
        <legend>Upload picture</legend>
	        <p>
			<input type="file" name="file1"><br/>
			<input type="submit" value="upload">			
	        </p>
    </fieldset>
</form>

</div>

</div>
<!--end second tab-->


<div id="tabs-4">Login

<!--************************formlog ****************************-->

<div id="formlog" name="formlog">

<!--form id="user_log" class="form-inline" action="adminperm.php" method="post" name="logform" onsubmit="return valUserLog(this);" role="form"-->

<form id="user_log" class="form-inline" action="adminpermf.php" method="post" name="logform" role="form">

<fieldset>
<legend>Login Existing</legend>
<div id="rwL1" class="row">
    <div class="form-group col-sm-3">
        <label class="control-label" for="yourle">Email ID:<span class="espan" id="espanle"></span></label>                          
        <div class="controls">                           
             <input id="yourle" type="text" class="form-control col-sm-12" name="yourle">                         
        </div><!--input group-->


    </div>                      
    <div class="form-group col-sm-3">

        <label class="control-label" for="yourlps">password<span class="espan" id="espanlps"></span> </label>     
        <div class="controls">                                     
             <input id="yourlps" type="text" class="form-control col-sm-12" name="yourlps">                         
        </div><!--input group-->                           

    </div>                      
	<div  class="form-group col-sm-3"  >

		

		<!--input class="btn btn-large btn-success" type="submit" value="Submit!" -->
		<!--input class="btn btn-large btn-success col-sm-12" value="Display it!" onclick="getListDBB(0);"-->
		<input class="btn btn-large btn-success"  value="Check Log" onclick="valUserLog(document.getElementById('yourle').value,document.getElementById('yourlps').value);">


		
	</div><!--form-group-->
	<div  class="form-group col-sm-3"  >

		

		<input class="btn btn-large btn-success" type="submit" value="Submit!">
		<!--input class="btn btn-large btn-success col-sm-12" value="Display it!" onclick="getListDBB(0);"-->
		<!--input class="btn btn-large btn-success"  value="Check Log" onclick="valUserLog(document.getElementById('yourle').value,document.getElementById('yourlps').value);"-->


		
	</div><!--form-group-->


</div><!--row-->
</fieldset>
</form>
</div><!--formlog-->
<!--************************formstar starform****************************-->

<div id="formstar" name="formstar">

<form id="user_check" class="form-inline" action="insertfo.php" method="post" name="starform" onsubmit="return valUser(this);" role="form">


	<fieldset>
	<legend>Register New Account</legend>
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

		<input  type="checkbox" name="membChk[]" id="chk1" value="classic">


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
<!--img src="images/ajax-loader.gif" height="1000px" width="400px"/-->

</div><!--loadson-->



<div id="imagesky">

</div> <!--imagesky-->









<?php include ('./footerg.php')  ?>
