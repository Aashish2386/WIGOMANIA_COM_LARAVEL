<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $table='coupon';
    protected $primaryKey='id';
    protected $fillable=['page_title','name','mobile_no','email','description','coupon_code','ip_address'];
    use HasFactory;
}
