<?php # User.php

//Defines user class
//@var first
class User {

private $id=NULL;
private $first=NULL;
private $last=NULL;
private $email=NULL;
private $phone=NULL;
private $mobile=NULL;
private $fax=NULL;
private $web=NULL;

/*function __construct($i, $f,$l,$p,$m,$f,$e,$w){
	$this->id=$i;
	$this->first=$f;
	$this->last=$l;
	$this->phone=$p;
	$this->mobile=$m;
	$this->fax=$f;
	$this->email=$e;
	$this->web=$w;
}
*/
function getFirst()
{
	return $this->first;	
}
function getLast()
{
	return $this->last;	
}
function getPhone()
{
	return $this->phone;	
}
function getMobile()
{
	return $this->mobile;	
}
function getFax()
{
	return $this->fax;	
}
function getEmail()
{
	return $this->email;	
}
function getWeb()
{
	return $this->web;	
}
function getId()
{
	return $this->id;	
}




function setFirst( $fn)
{
	$this->first=$fn;
}



}