<?php
include_once "config.php";

header("Access-Control-Allow-Origin: *");

// Allow the following HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Allow the following headers to be sent with the request
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$key = "";
if (isset($_GET['key'])) {
    $key = $_GET['key'];
}

// Check if the 'key' is present in the request data
if ($_SERVER["REQUEST_METHOD"] === "GET" ) {

    // Use prepared statements to prevent SQL injection
    $sql = "SELECT * FROM UserMobiles WHERE UserID = '$key'";

    $queryResult = mysqli_query($conn, $sql);

$device = array();
    if ($queryResult) {
        if (mysqli_num_rows($queryResult) > 0) {
            $row = $queryResult->fetch_assoc();
            $device [] = $row;
            $response = array("status" => "success", "data" => $device);
            http_response_code(200);

        
    } else {
        $response = array("status" => "failed", "key" => 'Key Not Match');
        http_response_code(404); // Not Found
    }
} else {
    $response = array("status" => "SQL Error", "Type" => mysqli_error($conn));
    http_response_code(404);
}



}else {
    $response = array("status" => "Failed", "Type" => "Invalid Method");
    http_response_code(400); // Bad Request
}
header('Content-Type: application/json');

echo json_encode($response);
?>
