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
$data = json_decode(file_get_contents("php://input"));

$sql = "DELETE FROM faculty_member WHERE fm_id = '$data->fm_id'";
$sql1 = "DELETE FROM qualification WHERE q_id = '$data->q_id'";

$rs = mysqli_query($con, $sql);
$rs1 = mysqli_query($con, $sql1);

if($rs)
{
	echo json_encode(["success" => 1, "msg" => "User deleted."]);

}
else{
	echo json_encode(["success" => 0, "msg" => "User Not deleted!"]);

}

?>