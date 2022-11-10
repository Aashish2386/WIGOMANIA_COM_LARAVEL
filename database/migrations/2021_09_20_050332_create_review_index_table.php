<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewIndexTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_index', function (Blueprint $table) {
            $table->id();
            $table->integer('review_folder')->nullable();
            $table->dateTime('review_date')->nullable();
            $table->string('review_name')->nullable();
            $table->string('review_added_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_index');
    }
}
