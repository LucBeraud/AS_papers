<?php
header("Access-Control-Allow-Origin: *");
//session_start();
include_once('db_connect.php');
$query = 'SELECT DISTINCT paper_contribution_type AS themee FROM theme ORDER BY paper_contribution_type ASC';
$result = pg_query($query) or die('Query execution failed : ' . pg_last_error());
$data=array();
while ($row = pg_fetch_object($result)) {
    $data[]=$row;
}
echo json_encode($data);
pg_free_result($result);
pg_close($dbconn);
?>