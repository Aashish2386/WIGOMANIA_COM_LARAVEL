<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WigoMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;
    protected $countryCode;
    protected $phone;
    protected $email;
    protected $help;
    protected $inquiry;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $countryCode, $phone, $email, $help, $inquiry)
    {
        

        $this->name=$name;
        $this->countryCode=$countryCode;
        $this->phone=$phone;
        $this->email=$email;
        $this->help=$help;
        $this->inquiry=$inquiry;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.reachus')
            ->subject('Wig-O-Mania Reach us')
            ->with('name', $this->name)
            ->with('phone', $this->phone)
            ->with('countryCode',$this->countryCode)
            ->with('email',$this->email)
            ->with('help',$this->help)
            ->with('inquiry',$this->inquiry);
    }
}
