<?php # User.php

//Defines user class
//@var first
class Table {

private $id=NULL;
private $tableN=NULL;
private $seatN=NULL;
private $seatAvail=NULL;





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
function getId()
{
	return $this->id;	
}


function getSeatN()
{
	return $this->seatN;	
}
function getTableN()
{
	return $this->tableN;	
}
function getSeatAvail()
{
	return $this->seatAvail;	
}




function setTableN( $fn)
{
	$this->tableN=$fn;
}
function setSeatN( $fn)
{
	$this->seatN=$fn;
}

function setSeatAvail( $fn)
{
	$this->seatAvail=$fn;
}


}