<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function () {
    Route::get('/admin', [\App\Http\Controllers\MasterController::class,'Dashboard'])->name('dashboard');
    Route::get('/coupons', [\App\Http\Controllers\MasterController::class,'Coupon'])->name('coupon');
    Route::get('/reach-us', [\App\Http\Controllers\MasterController::class,'reachUs'])->name('reachus');
     Route::resource('/review', \App\Http\Controllers\ReviewController::class);

});
require __DIR__.'/auth.php';

Route::get('/', [\App\Http\Controllers\CommonController::class, 'index']);
Route::get('/reach-us', [\App\Http\Controllers\CommonController::class, 'ReachUs']);
Route::get('/home', [\App\Http\Controllers\CommonController::class, 'home']);
Route::get('/hairextension', [\App\Http\Controllers\CommonController::class, 'l1']);
Route::get('/menhairsystems', [\App\Http\Controllers\CommonController::class, 'l2']);
Route::get('/scantyhair', [\App\Http\Controllers\CommonController::class, 'l3']);
Route::get('/hairwigs', [\App\Http\Controllers\CommonController::class, 'l4']);
Route::post('get-review-details', [\App\Http\Controllers\HomeController::class, 'reviewDetails']);
Route::get('our-studios', [\App\Http\Controllers\CommonController::class, 'ourStudio']);
Route::get('behind-the-brand', [\App\Http\Controllers\CommonController::class, 'behindTheBrand']);
Route::get('semi-permanent-extension', [\App\Http\Controllers\CommonController::class, 'semiIndex']);
Route::get('reviews', [\App\Http\Controllers\CommonController::class, 'reviews']);
Route::get('partner-opportunity', [\App\Http\Controllers\CommonController::class, 'partnerOppo']);
Route::get('videos', [\App\Http\Controllers\CommonController::class, 'videos']);
Route::get('csr', [\App\Http\Controllers\CommonController::class , 'csr']);
Route::post('send-email', [\App\Http\Controllers\HomeController::class, 'sendEmail']);
Route::post('send-otp', [\App\Http\Controllers\HomeController::class, 'sendOTP']);
Route::post('send-coupon-otp', [\App\Http\Controllers\HomeController::class, 'couponOTP']);
Route::post('send-coupon', [\App\Http\Controllers\HomeController::class, 'sendCoupon']);
Route::get('thankyou', [\App\Http\Controllers\CommonController::class, 'thankYou']);
Route::get('mens-hair-systems', [\App\Http\Controllers\CommonController::class, 'mensHairSystems']);
Route::get('clip-go-extensions', [\App\Http\Controllers\CommonController::class, 'clipGoExtension']);
Route::get('v-patch', [\App\Http\Controllers\CommonController::class, 'Vpatch']);
Route::get('wigs', [\App\Http\Controllers\CommonController::class, 'wigs']);
Route::get('pony-tails', [\App\Http\Controllers\CommonController::class, 'ponyTails']);
Route::get('necessity-wearers', [\App\Http\Controllers\CommonController::class, 'necessityWearers']);
Route::get('closures-for-scanty-hair', [\App\Http\Controllers\CommonController::class, 'closuresForScantyHair']);
Route::get('ladies-toupee-for-alopecia', [\App\Http\Controllers\CommonController::class, 'ladiesToupeeForAlopecia']);
Route::get('wigs-necessity-wearers', [\App\Http\Controllers\CommonController::class, 'wigsNecessityWearers']);
Route::get('show-review-book', [\App\Http\Controllers\CommonController::class, 'showReviewBook']);
Route::get('dani-hiswani', [\App\Http\Controllers\CommonController::class, 'daniHiswani']);
Route::get('advices', [\App\Http\Controllers\CommonController::class, 'advices']);
Route::get('extensions', [\App\Http\Controllers\CommonController::class, 'extensions']);
Route::get('hair-systems', [\App\Http\Controllers\CommonController::class, 'hairSystems']);
Route::get('expert-advice-wigs', [\App\Http\Controllers\CommonController::class, 'eaWigs']);
Route::get('privacy-policy', [\App\Http\Controllers\CommonController::class, 'privacyPolicy']);
//Route::get('customer-reviews', [\App\Http\Controllers\CommonController::class, 'customerReviews']);
Route::get('customer-review', [\App\Http\Controllers\CustomerReviewController::class, 'index']);
Route::post('get-review', [\App\Http\Controllers\CustomerReviewController::class, 'getReviews']);
Route::get('site-map', [\App\Http\Controllers\CommonController::class, 'siteMap']);
