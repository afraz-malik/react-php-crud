<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$con = mysqli_connect('localhost', 'root', '','faculty');
$data = json_decode(file_get_contents("php://input"));
// $year = $_POST['year']; 

// database insert SQL code
$obj1 = $data[0]
$obj2 = $data[1]
echo json_encode(["success" => 1, "users" => $obj1]);
echo json_encode(["success" => 1, "users2" => $obj2]);
// insert in database 
// $sql = "UPDATE `faculty_member` SET `fm_name` = '$data[1]->name', `fm_address` = '$data[1]->address', `fm_designation`='$data[1]->designation', `fm_salary`='$data[1]->salary' WHERE `fm_id`='$data[0]->fm_id'";
// insert in data[1]base 
// $sql1 = "UPDATE `qualification` SET `degree_tittle`='$data[1]->degree', `year_of_passing` ='$data[1]->year', `institute_attended`='$data[1]->institute'WHERE `q_id`='$data[0]->q_id'";

// if(!($data->name == "")){
// 	$rs = mysqli_query($con, $sql);
// 	$rs1 = mysqli_query($con, $sql1);
// }

// if($rs)
// {
// 	echo json_encode(["success" => 1, "msg" => "User Inserted."]);

// }
// else{
// 	echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);

// }

?>