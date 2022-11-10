<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewIndex extends Model
{
    protected $table='review_index';
    protected $primaryKey='id';
    protected $fillable=['review_folder','review_date','review_name','review_added_by'];
    use HasFactory;
}
