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
$old = $data->old;
$new = $data->new;
// echo json_encode(["success" => 1, "users" => $new->name]);
// echo json_encode(["success" => 1, "users2" => $obj2]);
$sql = "UPDATE `faculty_member` SET `fm_name` = '$new->name', `fm_address` = '$new->address', `fm_designation`='$new->designation', `fm_salary`='$new->salary' WHERE `fm_id`='$old->fm_id'";

$sql1 = "UPDATE `qualification` SET `degree_tittle`='$new->degree', `year_of_passing` ='$new->year', `institute_attended`='$new->institute'WHERE `q_id`='$old->q_id'";

$rs = mysqli_query($con, $sql);
$rs1 = mysqli_query($con, $sql1);

if($rs)
{
	echo json_encode(["success" => 1, "msg" => "User Inserted."]);

}
else{
	echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
}

?>