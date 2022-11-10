<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WigoCouponMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;
    protected $phone;
    protected $email;
    protected $help;
    protected $coupon;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $coupon, $phone, $email, $help,$page_title,$domain,$countryCode,$countryName)
    {
        $this->name = $name;
        $this->phone = $phone;
        $this->email = $email;
        $this->help = $help;
        $this->coupon = $coupon;
        $this->page_title=$page_title;
        $this->domain=$domain;
        $this->country_code=$countryCode;
        $this->country_name=$countryName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.coupon')
            ->subject('Wig-O-Mania Coupon ')
            ->with('coupon', $this->coupon)
            ->with('name', $this->name)
            ->with('phone', $this->phone)
            ->with('countryCode',$this->country_code)
            ->with('email', $this->email)
            ->with('help', $this->help)
            ->with('page_title', $this->page_title)
            ->with('domain', $this->domain)
            ->with('country_name', $this->country_name);
            
    }
}
