<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$con = mysqli_connect('localhost', 'root', '','faculty');






// $allUsers = mysqli_query($con, "SELECT * FROM `faculty_member`");
$allUsers = mysqli_query($con, "SELECT * FROM faculty_member, qualification where faculty_member.fm_id = qualification.q_id");


    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "users" => $all_users]);


?>