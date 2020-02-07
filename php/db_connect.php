<?php 
    $dbconn = pg_connect("host=localhost port=5433 dbname=ISPRS user=postgres password=postgres") or die('Connexion impossible : ' . pg_last_error());
    //echo "1"
?>