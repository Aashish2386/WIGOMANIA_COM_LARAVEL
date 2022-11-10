<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReachUsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reach_us', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('countryCode')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->longText('help')->nullable();
            $table->longText('inquiry')->nullable();
            $table->string('ip_address')->nullable();
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
        Schema::dropIfExists('reach_us');
    }
}
