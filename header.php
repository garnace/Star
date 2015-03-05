<?php 
//include ('./header.php');  

    if (isset($_POST['action']))
        {
            $action=$_POST['action'];
//            if ($action)
        }else if (isset($_GET['action']))
        {
            $action=$_GET['action'];
        } else
        {
            $action='shwres';
        }
    //(isset($_POST['action'])) ? $action=$_POST['action']: $action=$_p
/*    if (($_SERVER[REQUEST_METHOD]=="POST") && ($action == "showres"))
        {

            header("Location:index.php#imagesp");
        }
*/

?>
<!--CTYPE html-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


<head>
<title>StarAdvisor</title>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
<link href="css/style.css" rel="stylesheet" type="text/css" title="starA">
<link href="cf/theme/css/less-style.css" rel="stylesheet" type="text/css">
<link href="cf/theme/css/bootstrap.css" rel="stylesheet" type="text/css" title="starA">
<link href="b320/css/bootstrap.css" rel="stylesheet" type="text/css" title="starvA">
<!--link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.css" rel="stylesheet"-->

<!--################################3##3##########33#####33#-->
<!--link href="b320/css/bootstrap.css" rel="stylesheet" type="text/css" -->

<!--link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.0/css/bootstrap-combined.min.css" rel="stylesheet"-->

<!--link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" rel="stylesheet"-->
<!--################################3##3##########33#####33#-->

<link type="text/css" href="css/ui-lightness/jquery-ui-1.8.23.custom.css" rel="stylesheet" title="starA">
<!-- ********************cake links**********************************-->

<link href="cf/theme/css/flexslider.css" rel="stylesheet">
<link href="css/prettyPhoto.css" rel="stylesheet">
<link href="cf/theme/css/font-awesome.min.css" rel="stylesheet">
<!--link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet"-->
<link href="css/bootstrap-glyphicons.css" rel="stylesheet">
<!--link href="css/jqm/jquery.mobile-1.4.5.min.css" rel="stylesheet"-->
<!-- ********************end cake links**********************************-->

<!--link rel="shortcut icon" href="#"-->
<!--link rel="shortcut icon" href="twitter-bootstrap-v2/docs/examples/images/favicon.ico"-->
<!--link rel="shortcut icon" href="http://glyphicons.com/wp-content/themes/glyphicons/sk/public/favicon.ico"-->






<script type="text/javascript" src="scripts/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="scripts/jquery-ui-1.8.23.custom.min.js"></script>
<script type="text/javascript" src="scripts/custom.js"></script>
<script type="text/javascript" src="scripts/jquery.tools.min.js"></script>
<!--script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.js"></script-->
<!--script type="text/javascript" src="scripts/jqm/jquery.mobile-1.4.5.min.js"></script-->


<!--################################3##3##########33#####33#-->
<script type="text/javascript" src="cf/theme/js/bootstrap.js"></script>
<script type="text/javascript" src="b320/js/bootstrap.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>

<!--   -------------------------------------------->
<!--   -------------Make random flickr pics------>

<script>

//var $= jQuery.noConflict();
$(document).ready(function(){
	var blis= "b1news b2headline";
	var bray = (blis).split(' ');
	var uline = $('#m');
	var lcount = 0;
    var mtimer =0;


//	("#b1 a").click(function(){alert('jquery');});
	$("#a3").click(function(){alert('jquery'); if (mtimer) clearInterval(mtimer);});
//	$("#m").click(function(){alert(bray[1]);
	uline.click(function(){alert(bray[1]);
	mtimer =setInterval(function(){
//		alert("hi");
		lcount = (lcount +1) % (bray.length) ;
		uline.fadeOut();


//		uline.html('yello'+lcount);
		uline.html(bray[lcount]+bray.length+lcount);
		uline.fadeIn();

	},1500);


});


});
function getM()
{
	alert('button');
}

</script>
<!--   -------------------------------------------->
<?php
     if ($action == "showres")
         {
         echo("<script type=\"text/javascript\">");
//         echo("alert (\"hi\");");
         echo("$(function(){");
         echo("$('#tabs').tabs({selected:2});");
         echo("});");
         echo("</script>");
         }
?>
<!--   -------------Make tabs------>

<script type="text/javascript">
//$(function(){
//$("#tabs").tabs();

//});
</script>



<!--Validate input as well as handle table events with jquery (like deletes)-->
<script type="text/javascript" src="scripts/jquery.quickflip.min.js"></script>

<!--script type="text/javascript" src="scripts/jquery.flippy.js"></script-->


<script type="text/javascript" src="scripts/script.js"></script>
<script type="text/javascript" src="scripts/valu.js"></script>
<script type="text/javascript" src="scripts/calender.js"></script>


</head>

<!--do on load events-->

<body onload="load();"  >



    <!--TWITTER BOOTSTRAP TUTORIAL</h1-->
<div id="head" style="text-align: center;" >FoodieSsf<br>
<div id="yCarousel" >

</div> <!--yCarousel-->

</div>

			
		<!-- Shopping cart Modal -->
		<div class="modal fade" id="shoppingcart1" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title">Shopping Cart</h4>
					</div>
					<div class="modal-body">
						<!-- Items table -->
						<table class="table table-striped">
							<thead>
								<tr>
									<th>Name</th>
									<th>Quantity</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a href="#">Exception Reins Evocative</a></td>
									<td>2</td>
									<td>$200</td>
								</tr>
								<tr>
									<td><a href="#">Taut Mayoress Alias Appendicitis</a></td>
									<td>1</td>
									<td>$190</td>
								</tr>
								<tr>
									<td><a href="#">Sinter et Molests Perfectionist</a></td>
									<td>4</td>
									<td>$99</td>
								</tr>
								<tr>
									<th></th>
									<th>Total</th>
									<th>$489</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Continue Shopping</button>
						<button type="button" class="btn btn-info">Checkout</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		<!-- Model End -->
		
		<!-- Page Wrapper -->
		<div class="wrapper">
		
			<!-- Header Start -->
			
			<div class="header">
				<div class="container">
					<!-- Header top area content -->
					<div class="header-top">
						<div class="row">
							<div class="col-md-4 col-sm-4">
								<!-- Header top left content contact -->
								<div class="header-contact">
									<!-- Contact number -->
									<span><i class="fa fa-phone red"></i> 888-888-8888</span>
								</div>
							</div>
							<div class="col-md-4 col-sm-4">
								<!-- Header top right content search box -->
								<div class=" header-search">
									<form class="form" role="form">
										<div class="input-group">
										  <input type="text" class="form-control" placeholder="Search...">
										  <span class="input-group-btn">
											<button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
										  </span>
										</div>
									</form>
								</div>
							</div>
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
												<span class="cart-title"><a href="#">Taut Mayoress Alias Appendicitis</a></span>
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
						</div>
					</div><!--   row-->
</div><!--top-->
</div><!--container-->
</div><!--header-->
<!--  END CAKE header                  -->


<!--twitter bootstrap top menu followed by bootstrap containers-->

    <div class='navbar fixed-top navbar-inverse' role="navigation">
      <div class='container' >
      <div class='navbar-header' >
       
          <a href="#" onclick="load(0);" class="navbar-brand"><i class="glyphicon glyphicon-leaf "></i> Home</a><
       
      </div><!--head-->
      <div class='collapse navbar-collapse' >
        <ul class="nav navbar-nav">
          <li class="active"><a href="#" onclick="load(0);"><span class="glyphicon glyphicon-leaf"></span> Home</a></li>
          <li><a href="#tabs-2" onclick="getSFeedTerm(2);"><span class="glyphicon glyphicon-glass"> </span>Choose Meal</a></li>
          <li><a href="#tabs-2" onclick="getSFeedTerm(2);"><span class="glyphicon glyphicon-glass"> </span>Choose Meal</a></li>

          <li><a href="#tabs-2" onclick="listSites(0);"><span class="glyphicon glyphicon-pencil"> </span> Meal List Events</a></li>
          <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <li><a href="#formstar" onclick="getSFeedTerm(4);" style="float:right;"><span class="glyphicon glyphicon-user"> Login/Sign-up</a></li>

        </ul>
      </div><!--nav-collapse-->

    </div><!--container-->
    </div><!--navbar-->
  <div class='container'>
  <!--div class='container'-->
<!-- #content div -->
    <!--div id='content' class='row-fluid'-->
    <div id='content' class='row row-offcanvas row-offcanvas-right'>
      <div class='col-sm-9 main'>
        <!--h2>Main Content Section</h2-->
