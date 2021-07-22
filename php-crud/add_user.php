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
$rand = rand();

// database insert SQL code
$sql = "INSERT INTO `faculty_member` (`fm_id`,`fm_name`, `fm_address`, `fm_designation`, `fm_salary`) 
VALUES ( '$rand','$data->name', '$data->address', '$data->designation', '$data->salary')";
// insert in database 
$sql1 = "INSERT INTO `qualification` (`q_id`, `degree_tittle`, `year_of_passing`, `institute_attended`)
 VALUES ('$rand','$data->degree','$data->year','$data->institute')";
if(!($data->name == "")){
	$rs = mysqli_query($con, $sql);
	$rs1 = mysqli_query($con, $sql1);
}

if($rs)
{
	echo json_encode(["success" => 1, "msg" => "User Inserted."]);

}
else{
	echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);

}

?>