<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReachUs extends Model
{
    protected $table='reach_us';
    protected $primaryKey='id';
    protected $fillable=['name','countryCode','phone','email','help','inquiry','ip_address'];
    use HasFactory;
}
