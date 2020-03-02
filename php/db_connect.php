<?php 
    $dbconn = pg_connect("host=localhost port=5432 dbname=ISPRS user=postgres password=ladygaga005@") or die('Connexion impossible : ' . pg_last_error());
    //echo "1"
?>