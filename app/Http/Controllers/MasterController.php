<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MasterController extends Controller
{
    public function Dashboard()
    {
        return view('dashboard');
    }

    public function Coupon()
    {
        $coupon = DB::table('coupon')->select('coupon.*')->orderBy('coupon.id','DESC')->paginate(10);
        return view('master.coupon.index')->with(compact('coupon'));
    }

    public function reachUs()
    {
        $reachUS = DB::table('reach_us')->select('reach_us.*')->orderBy('reach_us.id','DESC')->paginate(10);
        return view('master.reachUs.index')->with(compact('reachUS'));

    }
}
