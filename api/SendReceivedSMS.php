<?php
include_once "config.php";

$bodyData = file_get_contents('php://input');
$data = json_decode($bodyData, true);

$uid = $data['uid'];
$sms = $data['smses'];

// Prepare the SQL statement using placeholders
$insertSms = "INSERT INTO UserSms (SenderID, SMS) VALUES (?, ?)";

// Create a prepared statement
$stmt = mysqli_prepare($conn, $insertSms);

if ($stmt) {
    // Bind parameters to the placeholders
    mysqli_stmt_bind_param($stmt, 'ss', $uid, $sms);

    // Execute the prepared statement
    $insertQuery = mysqli_stmt_execute($stmt);

    if ($insertQuery) {
        echo json_encode(array("status" => "Success", "data" => "Token Inserted"));
    } else {
        echo json_encode(array("status" => "Error", "data" => "Can't Execute Insert: " . mysqli_error($conn)));
    }
} else {
    echo json_encode(array("status" => "Error", "data" => "Can't Prepare Statement: " . mysqli_error($conn)));
}

// Close the prepared statement and database connection
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
