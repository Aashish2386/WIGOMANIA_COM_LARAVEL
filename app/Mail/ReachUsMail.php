<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class ReachUsMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $phone;
    protected $email;
    protected $otp;

    public function __construct($phone,$otp, $email)
    {

        $this->phone = $phone;
        $this->otp = $otp;
        $this->email = $email;


    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.reachus_otp')
            ->subject('Wig-O-Mania Reach us')
            ->with('phone', $this->phone)
            ->with('countryCode', '91')
            ->with('email', $this->email)
            ->with('otp', $this->otp);
    }
}
