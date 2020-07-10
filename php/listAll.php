<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

$stmt = mysqli_prepare($conn, "select * from listings");
$result = $stmt->execute();
$response['listings'] = $stmt->get_result()->fetch_all();
mysqli_stmt_close($stmt);

if($result > 0)
    $response['responseCode'] = 200;
else
    $response['responseCode'] = 401;

echo json_encode($response);
