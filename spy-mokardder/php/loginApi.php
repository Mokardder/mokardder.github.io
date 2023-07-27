<?php
include_once "config.php";

// Get the request body data and decode it as JSON
$bodyData = file_get_contents('php://input');
$data = json_decode($bodyData, true);

// Check if the 'key' is present in the request data
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($data['key'])) {
    $key = $data['key'];

    // Use prepared statements to prevent SQL injection
    $sql = "SELECT * FROM UserMobiles WHERE UserID = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $key);
    mysqli_stmt_execute($stmt);
    $queryResult = mysqli_stmt_get_result($stmt);

    if ($queryResult) {
        if (mysqli_num_rows($queryResult) > 0) {
            $row = mysqli_fetch_assoc($queryResult);
            $key = $row['UserID'];
            $response = array("status" => "success", "key" => $key);
            http_response_code(200);
        } else {
            $response = array("status" => "failed", "key" => $key);
            http_response_code(404); // Not Found
        }
    } else {
        $response = array("status" => "SQL Error", "message" => mysqli_error($conn));
        http_response_code(500); // Internal Server Error
    }
} else {
    $response = array("status" => "Failed", "Type" => "");
    http_response_code(400); // Bad Request
}

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
