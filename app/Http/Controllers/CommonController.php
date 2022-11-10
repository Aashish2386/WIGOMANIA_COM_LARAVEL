<?php

namespace App\Http\Controllers;

use App\Models\Reviews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommonController extends Controller
{
     public function reachUs()
    {
      
        return view('reach-us');
    }
    public function index()
    {   
        $country = DB::table('countries')->get();
        $reviews = Reviews::orderBy('reviews_id', 'DESC')->limit(6)->get();
        return view('index')->with(compact('reviews','country'));
    }
    
    public function l1()
    {
         $country = DB::table('countries')->get();
        $reviews = Reviews::orderBy('reviews_id', 'DESC')->limit(6)->get();
        return view('l1')->with(compact('reviews','country'));
    }
     public function l2()
    {
         $country = DB::table('countries')->get();
        $reviews = Reviews::orderBy('reviews_id', 'DESC')->limit(6)->get();
        return view('l2')->with(compact('reviews','country'));
    }
    public function l3()
    {
         $country = DB::table('countries')->get();
        $reviews = Reviews::orderBy('reviews_id', 'DESC')->limit(6)->get();
        return view('l3')->with(compact('reviews','country'));
    }
    public function l4()
    {
         $country = DB::table('countries')->get();
        $reviews = Reviews::orderBy('reviews_id', 'DESC')->limit(6)->get();
        return view('l4')->with(compact('reviews','country'));
    }
    public function home()
    {
        $review = Reviews::all();
        return view('home')->with(compact('review'));
    }

    public function behindTheBrand()
    {
        return view('behind-the-brand.index');
    }

    public function ourStudio()
    {
        return view('our_studios.index');
    }

    public function thankYou()
    {
        return view('thankyou.index');
    }

    public function semiIndex()
    {
        return view('product-category.fashion.semi-permanent-extension.index');
    }

    public function reviews()
    {
        return view('reviews.index');
    }

    public function partnerOppo()
    {
        return view('partner-opportunity.index');
    }

    public function videos()
    {
        return view('videos.index');
    }

    public function csr()
    {
        return view('csr.index');
    }

    public function mensHairSystems()
    {
        return view('product-category.necessity-wearers.mens-hair-systems.index');
    }

    public function clipGoExtension()
    {
        return view('product-category.fashion.clip-go-extensions.index');
    }

    public function Vpatch()
    {
        return view('product-category.fashion.v-patch.index');
    }

    public function wigs()
    {
        return view('product-category.fashion.wigs.index');
    }

    public function ponyTails()
    {
        return view('product-category.fashion.pony-tails.index');
    }

    public function closuresForScantyHair()
    {
        return view('product-category.necessity-wearers.closures-for-scanty-hair.index');
    }

    public function ladiesToupeeForAlopecia()
    {
        return view('product-category.necessity-wearers.ladies-toupee-for-alopecia.index');
    }

    public function wigsNecessityWearers ()
    {
        return view('product-category.necessity-wearers.wigs-necessity-wearers.index');
    }


    public function necessityWearers()
    {
        return view('product-category.necessity-wearers.index');
    }

    public function showReviewBook()
    {
        return view('show-review-book.index');
    }

    public function daniHiswani()
    {
        return view('dani-hiswani.index');
    }

    public function advices()
    {
        return view('expert-advice.advices.index');
    }

    public function extensions()
    {
        return view('expert-advice.extensions.index');
    }

    public function hairSystems()
    {
        return view('expert-advice.hair-systems.index');
    }

    public function eaWigs()
    {
        return view('expert-advice.wigs.index');
    }

    public function privacyPolicy()
    {
        return view('privacy-policy.index');
    }

    public function customerReviews()
    {
        return view('customer-reviews.index');
    }

    public function siteMap()
    {
        return view('site-map.index');
    }

    public function customerReview()
    {
        $review = Reviews::all();

    }
}
