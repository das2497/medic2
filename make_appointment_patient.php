<?php
session_start();

require 'connection.php';

$rs = Database::search("SELECT * FROM patient_channels WHERE patient_id='".$_POST["chnlid"]."' AND chnl_id='".$_POST["pid"]."';");

if ($rs->num_rows > 0) {
 echo "You already made this appointment";
} else {
    Database::iud("INSERT INTO (patient_id,chnl_id,`status`,paid) VALUES ('".$_POST["pid"]."','".$_POST["chnlid"]."','1','1');");
    echo "Successfully";
    echo "INSERT INTO (patient_id,chnl_id,`status`,paid) VALUES ('".$_POST["pid"]."','".$_POST["chnlid"]."','1','1');";
}
