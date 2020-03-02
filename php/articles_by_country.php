<?php 
header("Access-Control-Allow-Origin: *");
include_once("db_connect.php");
$id_country = $_POST['id'];
$query = "SELECT ST_AsGeojson(geom) as geom FROM country WHERE id='$id_country'";
$result = pg_query($query) or die('Échec de la requête : ' . pg_last_error());
$data=array();
while ($row = pg_fetch_object($result)) {
    $data[]=$row;
}
echo json_encode($data);
pg_free_result($result);
pg_close($dbconn);
?>