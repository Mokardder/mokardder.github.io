<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if the file is an actual image or fake image
if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        $uploadOk = 0;
    }
}

// Check if the file already exists
if (file_exists($targetFile)) {
    $uploadOk = 0;
}

// Check file size (optional)
// if ($_FILES["image"]["size"] > 500000) {
//     $uploadOk = 0;
// }

// Allow certain file formats (optional)
// if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
//     && $imageFileType != "gif") {
//     $uploadOk = 0;
// }

if ($uploadOk == 0) {
    $response = array("success" => false, "message" => "Sorry, your file was not uploaded.");
} else {
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        $response = array("success" => true, "message" => "The file " . basename($_FILES["image"]["name"]) . " has been uploaded.");
    } else {
        $response = array("success" => false, "message" => "Sorry, there was an error uploading your file.");
    }
}

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
