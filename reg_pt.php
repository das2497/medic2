<?php

require 'connection.php';

$date = '2000-04-22';
$formattedDate = date('Y-m-d', strtotime($date));


Database::iud("INSERT INTO patient(preg_no,uname,NAME,gender,nic,dob,address,contact,notes,responsible,pass) 
VALUES ('".$_POST["rpreg_no"]."','".$_POST["rpuname"]."','".$_POST["rpname"]."','".$_POST["rpgender"]."','".$_POST["rpnic"]."','".$_POST["rpdob"]."',
'".$_POST["rpaddress"]."','".$_POST["rpcontact"]."','".$_POST["rpnotes"]."','".$_POST["rpperson"]."','".$_POST["rppass"]."');");

echo "INSERT INTO patient(preg_no,uname,NAME,gender,nic,dob,address,contact,notes,responsible,pass) 
VALUES ('".$_POST["rpreg_no"]."','".$_POST["rpuname"]."','".$_POST["rpname"]."','".$_POST["rpgender"]."','".$_POST["rpnic"]."','".$_POST["rpdob"]."',
'".$_POST["rpaddress"]."','".$_POST["rpcontact"]."','".$_POST["rpnotes"]."','".$_POST["rpperson"]."','".$_POST["rppass"]."');";