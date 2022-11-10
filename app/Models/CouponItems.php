<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponItems extends Model
{
   
    use HasFactory;
     protected $table = 'coupon_items';
    protected $primaryKey = 'id';
    protected $fillable = ['mobile_no', 'otp','status'];
}
