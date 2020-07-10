<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

if((isset($_GET['title']) && $_GET['title'] != "") &&
(isset($_GET['description']) && $_GET['description'] != "") &&
(isset($_GET['type']) && $_GET['type'] != "") &&
(isset($_GET['address']) && $_GET['address'] != "") &&
(isset($_GET['price']) && $_GET['price'] != "") &&
(isset($_GET['phone']) && $_GET['phone'] != "") &&
(isset($_GET['photos']) && $_GET['photos'] != "")) {

    $title = $_GET['title'];
    $description = $_GET['description'];
    $type = $_GET['type'];
    $address = $_GET['address'];
    $price = $_GET['price'];
    $phone = $_GET['phone'];
    $photos = $_GET['photos'];

    $count = count(explode(",", $photos));

    $stmt = mysqli_prepare($conn, "insert into listings (title, description, rooms, address, price, phone, photos)
                            values (?, ?, ?, ?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt,"ssisiss", $title, $description, $type, $address, $price, $phone, $photos);
    $result = $stmt->execute();
    mysqli_stmt_close($stmt);
    
    if($result > 0)
        $response['responseCode'] = 200;
    else
        $response['responseCode'] = 401;
    echo json_encode($response);

}
else {
    $response['responseCode'] = 400;
    echo json_encode($response);
}
