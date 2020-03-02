<?php 
header("Access-Control-Allow-Origin: *");
include_once("db_connect.php");
$id_theme = $_POST['id_theme'];
$query = "SELECT ST_X(ST_Transform(geom, 3857)) AS x, ST_Y(ST_Transform(geom, 3857)) AS y FROM article WHERE id_theme='$id_theme'";
$result = pg_query($query) or die('Échec de la requête : ' . pg_last_error());
$data=array();
while ($row = pg_fetch_object($result)) {
    $data[]=$row;
}
echo json_encode($data);
pg_free_result($result);
pg_close($dbconn);
?>