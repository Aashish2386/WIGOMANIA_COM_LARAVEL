<?php

namespace App\Http\Controllers;

use App\Models\ReviewIndex;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $sql = ReviewIndex::all();
        $root = '/home/wigomani/public_html';
        $REVPATH = $root . '/assets/customer-reviews/REV/';
        $DATA = $REVPATH . 'indexName.json';
        $dir = $root . '/assets/customer-reviews/REV/new';

        $ALLFloders = array();

        $REVIEWS = array();

        $Weburl = $REVPATH . 'new';

        $ffs = scandir($dir);
        unset($ffs[array_search('.', $ffs, true)]);
        unset($ffs[array_search('..', $ffs, true)]);

        if (count($ffs) < 1) {
            return 0;
        }
        foreach ($ffs as $ff) {
            $ALLFloders[] = $ff;
        }
        $removed = array_pop($ALLFloders);
        foreach ($ALLFloders as $SubFolder) {
            if ($SubFolder <= 2) {
                $filePAth = $dir . '/' . $SubFolder . '/audio.m4a';
                if (file_exists($filePAth)) {
                    $REVIEWS[$SubFolder]['audio'] = $Weburl . '/' . $SubFolder . '/audio.m4a';
                }
                $REVIEWS[$SubFolder]['img'] = $Weburl . '/' . $SubFolder . '/img.jpg';
                $REVIEWS[$SubFolder]['meta'] = $Weburl . '/' . $SubFolder . '/meta.json';
            }
        }
        $TotalPages = count($ALLFloders);

        $TotalPages = $TotalPages * 2 + 2;

        return view('customer-reviews.index')->with(compact('sql', 'TotalPages', 'removed', 'DATA'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getSortedReviews($page)
    {

        $root = $_SERVER['DOCUMENT_ROOT'];
        $newdata = $root . '/customer-reviews/REV/new/';
        $revdata = file_get_contents($newdata . 'revdata.json');
        $revdata = json_decode($revdata, true);
        $newdates = array();
        foreach ($revdata as $dt => $revs) {
            $newdates[strtotime($dt)] = $revs;
        }
        krsort($newdates);
        $daterev = array();
        $i = 1;
        foreach ($newdates as $newdate) {
            foreach ($newdate as $nrev) {
                $daterev[$i] = $nrev;
                $i++;
            }

        }
        return $daterev[$page];
    }

    public function getReviews(Request $request)
    {
        $PageNo = $request['page'];

        $Review = $PageNo / 2 - 1;


        $sql = ReviewIndex::all();
           $root = '/home/wigomani/public_html';
        $dir = $root . '/assets/customer-reviews/REV/new';
        $FolderNumber = $request['FolderNumber'];
//        print_r($Review);exit();
        if ($FolderNumber == '') {
            $revindx = $Review;
            $FolderNumber = $sql[$revindx]['review_folder'];
        }

        $REVIEWS = array();

        $Weburl = asset('assets/customer-reviews/REV/new');

        $SubFolder = $FolderNumber;


        $asset = asset('assets/customer-reviews/img/');

        $NewusedPages[] = $SubFolder;

        $filePAth = $dir . '/' . $SubFolder . '/audio.m4a';
        if (file_exists($filePAth)) {
            $REVIEWS[$SubFolder]['audio'] = $Weburl . '/' . $SubFolder . '/audio.m4a';
        }
        $REVIEWS[$SubFolder]['img'] = $Weburl . '/' . $SubFolder . '/img.jpg';
        $REVIEWS[$SubFolder]['meta'] = $dir . '/' . $SubFolder . '/meta.json';

        $HTML1 = '';
        $HTML2 = '';
        if (!empty($REVIEWS)) {
            foreach ($REVIEWS as $Reviews) {
                if (file_exists($Reviews['meta'])) {
                    $data = file_get_contents($Reviews['meta']);
                    $DataValue1 = json_decode($data);
                    if ($Reviews['audio'] != '') {
                        $dataaudio = 1;
                    } else {
                        $dataaudio = 0;
                    }
                    $HTML1 = '<div data-background-image="" id="PageNo_' . $PageNo . '" class="BackImage ContentOnMobile">
			<div class="twitterLoader HidethisLoader"><span class="loading_spinner"></span></div>
			<div class="HeaderReview">
				<div class="ProfilePic">
					<span class="Intialchacter">' . $DataValue1->userimage . '</span>
				</div>
				<div class="ProfileText">
					<div class="PROTXT1">
						<span class="fcg">
						  <span class="fwb">
						  <a class="profileLink" >' . $DataValue1->username . '</a>
						  </span> reviewed
						  <a class="profileLink" >Wig-O-Mania</a> — <i class="_51mq img sp_D5dzHsjx1TM sx_6e0e26"><u>' . $DataValue1->revstar . ' star</u></i>
						</span>
					</div>
					<div class="PROTXT2">
						<span class="fsm fwn fcg">' . $DataValue1->revdate . '</span>
					</div>
				</div>
			 </div>
			<div class="BodyCOntent">
				<div id="ReviewTextShow_' . $PageNo . '" class="REVIEWCLS" data-complete="0" data-audio=' . $dataaudio . ' data-response="0" data-pause="0" data-length="0"></div>
				<div id="ReviewTextHide_' . $PageNo . '" style="display:none;">' . html_entity_decode($DataValue1->revtext) . '</div>
				<div class="RplyTEXTSytle RplyTextLAbel_' . $PageNo . '" style="display:none;">Wigomania Response</div>
				<div id="ReviewRplyTextHide_' . $PageNo . '" class="REVIEWRplyCLS" style="display:none;">' . html_entity_decode($DataValue1->revreply) . '</div>
			</div>

			<div style="display:none;">
				<audio controls id="Audio_' . $PageNo . '">
				  <source src="' . $Reviews['audio'] . '" type="audio/ogg">
				  <source src="' . $Reviews['audio'] . '" type="audio/mpeg">
				</audio>
				<script>
					var page = ' . $PageNo . ';
					var audioPlay = document.getElementById("Audio_"+page);
					ALLAUDIOS["Audio_"+page] = audioPlay;
					ALLAUDIOS["Audio_"+page].addEventListener("timeupdate", function(event){
					  showMeTheTime();
					});
				</script>
			</div>
			<div class="BottomTools">
			<div style="display:none;width: 20px;">' . $PageNo . '</div>
			<div class="MuteAudioright MuteImgDiv MuteAUDIO_' . $PageNo . '" onclick="MuteAudio(\'' . $PageNo . '\');"><img class="my_image_' . $PageNo . '" src="' . $asset . '/speaker.png"></div>

			<div class="PauseAudioright PauseImg PauseAudio_' . $PageNo . '" onclick="PauseAudio(\'' . $PageNo . '\');"><img class="Pause_' . $PageNo . '" src="' . $asset . '/pause.png"></div>
			</div>
		</div>';

                    $HTML2 = $Reviews['img'];

                    $LASTPAGE = 0;
                } else {
                    $HTML1 = '';
                    $HTML2 = "'. $asset .'/lastcover.jpg";
                    $LASTPAGE = 1;
                }
            }
        } else {
            $HTML1 = "";
            $HTML2 = "'. $asset .'/lastcover.jpg";
            $LASTPAGE = 1;
        }

        return response(array('HTML1' => $HTML1, 'HTML2' => $HTML2, 'LASTPAGE' => $LASTPAGE, 'SubFolder' => $SubFolder, 'Review' => $Review), 200);

    }
}
