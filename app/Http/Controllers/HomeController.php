<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\CouponItems;
use App\Models\Coupon;
use App\Models\ReachUs;
use App\Models\ReachUsItems;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Rules\GoogleRecaptcha;
use Illuminate\Support\Facades\Validator;


class HomeController extends Controller
{


    public function sendEmail(Request $request)
    {


        $reachUsItems = DB::table('reachus_items')
            ->where('mobile_no', $request->post('phone'))
            ->where('otp', $request->post('otp'))
            ->where('status', 'N')->first();


        $OTP = !empty($reachUsItems) ? $reachUsItems->otp : "";

        $enteredOtp = $request->post('otp');


        // if (!empty($reachUsItems) || !empty($enteredOtp)) {

        // if ($enteredOtp || $OTP) {

        $reachUs = new ReachUs();
        $reachUs->name = $request->post('name');
        $reachUs->countryCode = $request->post('country_code');
        $reachUs->phone = $request->post('phone');
        $reachUs->email = $request->post('email');
        $reachUs->help = $request->post('help');
        $reachUs->inquiry = $request->post('inquiry');
        $reachUs->domain = $request->post('domain');
        $reachUs->page_title = $request->post('page_title');
        $reachUs->ip_address = request()->ip();
        $reachUs->country = $request->post('country_name');
        $reachUs->save();

        Mail::to($request->post('email'))
            ->cc('support@wigomania.com')
            ->send(new \App\Mail\WigoMail($request->input('name'),
                $request->input('country_code'),
                $request->input('phone'),
                $request->input('email'),
                $request->input('help'),
                $request->input('inquiry'),
                $request->input('domain'),
                $request->input('page_title'),
                $request->post('country_name')

            ));

        // where('otp', $enteredOtp)->

        DB::table('reachus_items')->where('mobile_no', $request->input('phone'))->update(array('status' => 'Y'));

        return view('thankyou.index');
        // return response(['message' => 'Success'], 200)->withCookie(cookie('isCouponFilled', 'Yes', 525600));

        // }
        // } else {
        // return response(['message' => 'Falied'], 200)->withCookie(cookie('isCouponFilled', 'Yes', 525600));
        // return response(['message' => 'Success'], 200)->withCookie(cookie('isCouponFilled', 'Yes', 525600));
        // }
    }

    public function sendOTP(Request $request)
    {


        if (!empty($request->post('Reachusphone')) && !empty($request->post('Reachusemail'))) {
            $countryCode = !empty($request->post('countryCode')) ? $request->post('countryCode') : "92";
            $phoneNo = $countryCode . $request->post('Reachusphone');
            $OTP = rand(1000, 5000);

            $ReachUsItem = new ReachUsItems();
            $ReachUsItem->mobile_no = $request->post('Reachusphone');
            $ReachUsItem->otp = $OTP;
            $ReachUsItem->save();

            // send mail from user
            Mail::to($request->post('Reachusemail'))
                ->cc('support@wigomania.com')
                ->send(new \App\Mail\ReachUsMail($request->input('Reachusphone'),
                    $OTP,
                    $request->input('Reachusemail'),
                ));


            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.chat-api.com/instance141854/sendTemplate?token=a86bzwc058inrbm3&type=body',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_POSTFIELDS => '{
    "template": "otp",
    "language": {
        "policy": "deterministic",
        "code": "en"
    },
    "namespace": "8766454e_d470_4d2f_9fcb_4044c74634fa",
    "params": [

        {
            "type": "body",
            "parameters": [
                {
                    "type": "text",
                    "text": "' . $OTP . '"
                }
            ]
        }
    ],
    "phone": "' . $phoneNo . '"
}',
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                ),
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            return response(array('result' => $response));
        } else {
            return response(array('result' => [], 'OTP' => null));
        }
    }

    public function couponOTP(Request $request)
    {

        $messages = [

            'phone.required' => 'Please Enter Phone No',
            'g_recaptcha.required' => 'Please Select Google Recaptcha',
        ];
        $rules = [

            'phone' => 'required|min:11|numeric',
            'g_recaptcha' => 'required'
        ];


        $validator = Validator::make($request->all(), $rules, $messages);

        if (!$request->ajax()) {
            $validator->validate();
        } else {
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()]);
            }
        }


        if (!empty($request->post('phone'))) {
            $countryCode = !empty($request->post('country_code')) ? $request->post('country_code') : "92";
            $phoneNo = $countryCode . $request->post('phone');


            $OTP = rand(1000, 5000);


            DB::table('coupon_items')->insert(
                array(
                    'mobile_no' => $request->post('phone'),
                    'otp' => $OTP
                ));


            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.chat-api.com/instance141854/sendTemplate?token=a86bzwc058inrbm3&type=body',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_POSTFIELDS => '{
                "template": "otp",
                "language": {
                        "policy": "deterministic",
                        "code": "en"
                },
                "namespace": "8766454e_d470_4d2f_9fcb_4044c74634fa",
                "params": [
                {
                        "type": "body",
                        "parameters": [
                              {
                                    "type": "text",
                                    "text": "' . $OTP . '"
                              }
                        ]
                }
            ],
                "phone": "' . $phoneNo . '"

            }',

                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                ),
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            return response(array('result' => $response));
        } else {
            return response(array('result' => []));
        }
    }

    public function sendCoupon(Request $request)
    {


        $countryCode = $request->post('country_code');


        request()->validate([
            'phone' => 'required|digits:10',
            'email' => 'required|email',
            'name' => 'required',
            'country_name' => 'required',
        ],
            [
                'name.required' => 'Please Enter Name',
                'email.required' => 'Please Enter Email',
                'phone.required' => 'Please Enter Phone No',
                'country_name.required' => 'Please Select Country Name',
            ]);


        $enteredOtp = $request->input('OTP');
        $phone = $request->input('phone');

        $couponItems = DB::table('coupon_items')->where('mobile_no', $phone)->where('otp', $enteredOtp)->where('status', 'N')->first();

        $OTP = !empty($couponItems) ? $couponItems->otp : '';

        $couponCODE = $this->generateRandomString(6);

        $phoneNo = $countryCode . $request->post('phone');

        $message = [
            'success' => true,
            'phone' => $phoneNo,
            'body' => "Dear " . $request->input('name') . "
Thank you for completing the coupon. We are happy to offer you 15% discount at any of our hair studios. Kindly present code 15%coupon *" . $couponCODE . "* to avail of it.
Kindly note this discount cannot be used with any other discount or offers
Wig-O-Mania Management",
        ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.chat-api.com/instance141854/sendTemplate?token=a86bzwc058inrbm3&type=body',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_POSTFIELDS => '{
    "template": "coupan",
    "language": {
        "policy": "deterministic",
        "code": "en"
    },
    "namespace": "8766454e_d470_4d2f_9fcb_4044c74634fa",
    "params": [

        {
            "type": "body",
            "parameters": [
                {
                    "type": "text",
                    "text": "' . $request->input('name') . '"
                },
                {
                    "type": "text",
                    "text": "' . $couponCODE . '"
                }
            ]
        }
    ],
           "phone": "' . $phoneNo . '"
}',
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);


        $coupon = new Coupon();
        $coupon->name = $request->input('name');
        $coupon->mobile_no = $request->input('phone');
        $coupon->email = $request->input('email');
        $coupon->description = $request->input('helpus');
        $coupon->coupon_code = $couponCODE;
        $coupon->ip_address = request()->ip();
        $coupon->domain = $request->input('domain');
        $coupon->page_title = $request->input('page_title');
        $coupon->country = $request->input('country_name');
        $coupon->save();


        Mail::to($request->post('email'))
            ->cc('support@wigomania.com')
            ->send(new \App\Mail\WigoCouponMail($request->input('name'),
                $couponCODE,
                $countryCode,
                $request->input('phone'),
                $request->input('email'),
                $request->input('helpus'),
                $request->input('domain'),
                $request->input('page_title'),
                $request->input('country_name')
            ));


        return view('thankyou.index');


    }

    public function generateRandomString($length = 20)
    {
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function reviewDetails(Request $request)
    {

        $Reviews = DB::table('reviews')->select(DB::raw('DATE_FORMAT(date, "%d-%b-%Y") as review_date'), 'client_review', 'owner_response', 'name')->where('reviews_id', $request->post('review_id'))->first();
        return \response(['reviews' => $Reviews], 200);
    }
}
