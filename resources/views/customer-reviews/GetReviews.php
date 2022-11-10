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
$sql = "SELECT * FROM Review_index order by review_date DESC";
$result = $conn->query($sql);
$ALLINDEXNAMES = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$ALLINDEXNAMES[] =  $row; 
    }
} else {
    echo "0 results";
}
function getSortedReviews($page){
	$root = $_SERVER['DOCUMENT_ROOT'];
	$newdata = $root.'/customer-reviews/REV/new/';
	$revdata = file_get_contents($newdata.'revdata.json');
	$revdata = json_decode($revdata,true);
	$newdates = array();
	foreach($revdata as $dt => $revs){
		$newdates[strtotime($dt)] = $revs;
	}
	krsort($newdates);
	$daterev = array();
	$i = 1;
	foreach($newdates as $newdate){
		foreach($newdate as $nrev){
			$daterev[$i] = $nrev;
			$i++;
		}
		
	}
	return $daterev[$page];
}
$PageNo = $_POST['page'];

$Review = $PageNo;
$Review = floor($Review/2);
$root = $_SERVER['DOCUMENT_ROOT'];
$dir = $root.'/customer-reviews/REV/new';
$FolderNumber = $_POST['FolderNumber'];
//echo $_POST['FolderNumber'];
if($FolderNumber == ''){
	$revindx = $Review - 1;
	$FolderNumber = $ALLINDEXNAMES[$revindx]['review_folder'];
}
$ALLFloders = array();
$REVIEWS = array();
//echo $FolderNumber;die;
$Weburl = 'https://wigomania.com/customer-reviews/REV/new';
//$SubFolder = getSortedReviews($Review);
$SubFolder = $FolderNumber;

$NewusedPages[] = $SubFolder;
$filePAth = $dir.'/'.$SubFolder.'/audio.m4a';
if(file_exists($filePAth)){
	$REVIEWS[$SubFolder]['audio'] = $Weburl.'/'.$SubFolder.'/audio.m4a';
}
$REVIEWS[$SubFolder]['img'] =  $Weburl.'/'.$SubFolder.'/img.jpg';
$REVIEWS[$SubFolder]['meta'] = $dir.'/'.$SubFolder.'/meta.json';

/* $ffs = scandir($dir);

unset($ffs[array_search('.', $ffs, true)]);
unset($ffs[array_search('..', $ffs, true)]);

if (count($ffs) < 1){
	return;
}
foreach($ffs as $ff){
	$ALLFloders[] = $ff;
}
$SubFolder = getSortedReviews($Review);
$i = 1;
foreach($ALLFloders as $SubFolder){
		if($i == $Review){
			$NewusedPages[] = $SubFolder;
			$filePAth = $dir.'/'.$SubFolder.'/audio.m4a';
			if(file_exists($filePAth)){
				$REVIEWS[$SubFolder]['audio'] = $Weburl.'/'.$SubFolder.'/audio.m4a';
			}
			$REVIEWS[$SubFolder]['img'] =  $Weburl.'/'.$SubFolder.'/img.jpg';
			$REVIEWS[$SubFolder]['meta'] = $dir.'/'.$SubFolder.'/meta.json';
		}
		$i++;
} */

$HTML1 = '';
$HTML2 = '';
if(!empty($REVIEWS)){
	foreach($REVIEWS as $Reviews){
		if(file_exists($Reviews['meta'])){
			$data = file_get_contents($Reviews['meta']);
			$DataValue1 = json_decode($data);
			if($Reviews['audio'] !=''){
					$dataaudio = 1;
				}else{
					$dataaudio = 0;
				}
		$HTML1 = '<div data-background-image="" id="PageNo_'.$PageNo.'" class="BackImage ContentOnMobile">
			<div class="twitterLoader HidethisLoader"><span class="loading_spinner"></span></div>
			<div class="HeaderReview">
				<div class="ProfilePic">
					<span class="Intialchacter">'.$DataValue1->userimage.'</span>
				</div>
				<div class="ProfileText">
					<div class="PROTXT1">
						<span class="fcg">
						  <span class="fwb">
						  <a class="profileLink" >'.$DataValue1->username.'</a>
						  </span> reviewed 
						  <a class="profileLink" >Wig-O-Mania</a> — <i class="_51mq img sp_D5dzHsjx1TM sx_6e0e26"><u>'.$DataValue1->revstar.' star</u></i>
						</span>
					</div>
					<div class="PROTXT2">
						<span class="fsm fwn fcg">'.$DataValue1->revdate.'</span>
					</div>
				</div>
			 </div>
			<div class="BodyCOntent">
				<div id="ReviewTextShow_'.$PageNo.'" class="REVIEWCLS" data-complete="0" data-audio='.$dataaudio.' data-response="0" data-pause="0" data-length="0"></div>
				<div id="ReviewTextHide_'.$PageNo.'" style="display:none;">'.html_entity_decode($DataValue1->revtext).'</div>
				<div class="RplyTEXTSytle RplyTextLAbel_'.$PageNo.'" style="display:none;">Wigomania Response</div>
				<div id="ReviewRplyTextHide_'.$PageNo.'" class="REVIEWRplyCLS" style="display:none;">'.html_entity_decode($DataValue1->revreply).'</div>
			</div>
			
			<div style="display:none;">
				<audio controls id="Audio_'.$PageNo.'">
				  <source src="'.$Reviews['audio'].'" type="audio/ogg">
				  <source src="'.$Reviews['audio'].'" type="audio/mpeg">
				</audio>
				<script>
					var page = '.$PageNo.';
					var audioPlay = document.getElementById("Audio_"+page);
					ALLAUDIOS["Audio_"+page] = audioPlay;
					ALLAUDIOS["Audio_"+page].addEventListener("timeupdate", function(event){
					  showMeTheTime();
					});
				</script>
			</div>
			<div class="BottomTools">
			<div style="display:none;width: 20px;">'.$PageNo.'</div>
			<div class="MuteAudioright MuteImgDiv MuteAUDIO_'.$PageNo.'" onclick="MuteAudio(\''.$PageNo.'\');"><img class="my_image_'.$PageNo.'" src="img/speaker.png"></div>
			
			<div class="PauseAudioright PauseImg PauseAudio_'.$PageNo.'" onclick="PauseAudio(\''.$PageNo.'\');"><img class="Pause_'.$PageNo.'" src="img/pause.png"></div>
			</div>
		</div>';
		$HTML2= $Reviews['img'];

		$LASTPAGE = 0;
		}else{
			$HTML1 = '';
			$HTML2 = 'https://wigomania.com/customer-reviews/img/lastcover.jpg';
			$LASTPAGE = 1;
		}
	}
}else{
	$HTML1 = "";
	$HTML2 = 'https://wigomania.com/customer-reviews/img/lastcover.jpg';
	$LASTPAGE = 1;
}

$return = array('HTML1'=>$HTML1,'HTML2'=>$HTML2,'LASTPAGE' => $LASTPAGE,'SubFolder' => $SubFolder,'Review' => $Review);
echo json_encode($return);
 ?>

