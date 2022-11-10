<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ReachUsItems extends Model
{

    protected $table = 'reachus_items';
    protected $primaryKey = 'id';
    protected $fillable = ['mobile_no', 'otp','status'];
    use HasFactory;
}
