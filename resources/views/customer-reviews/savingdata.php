<?php
$servername = "localhost";
$username = "wigomaniaDB";
$password = "u?DV.[n_?v]c";
$dbname = "wigomani_new2017";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 
$root = $_SERVER['DOCUMENT_ROOT'];
$newdata = $root.'/customer-reviews/REV/new/';
$revdata = file_get_contents($newdata.'revdata.json');
$revdata = json_decode($revdata,true);
$Weburl = 'https://karachi.wigomania.com/customer-reviews/REV/new';

foreach($revdata as $key=>$data){
	foreach($data as $FolderNumber){
		$ReviewData = file_get_contents($Weburl.'/'.$FolderNumber.'/meta.json');
		$ReviewData = json_decode($ReviewData,true);
		$review_folder = $FolderNumber;
		$username =  trim(str_replace("&nbsp;", "", $ReviewData['username']));
		$ReviewDate = date('Y-m-d',strtotime($ReviewData['revdate']));
		$sql = "INSERT INTO Review_index (review_folder, review_date, review_name,review_added_by) VALUES ('$review_folder','$ReviewDate','$username','ritu')";
		echo $sql.'<br/><br/>';
		/* if ($conn->query($sql) === TRUE) {
			echo "New record created successfully";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		} */
 
		//$conn->close();
		//echo '<pre>';print_r($sql);die;
	}
}

?>