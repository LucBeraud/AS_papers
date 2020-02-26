<?php 
    $dbconn = pg_connect("host=localhost port=5432 dbname=ISPRS user=postgres password=postgres") or die('Connexion impossible : ' . pg_last_error());
    //echo "1"
?>