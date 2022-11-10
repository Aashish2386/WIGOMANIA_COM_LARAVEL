<style>
    button {
        background-color: #ee4695;
        margin-top: 10px;
        color: white;
        padding: 7px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border: 1px solid white;
        margin-left: 67px;
    }
</style>
<div class="popup">

    <div class="center_popup">
        <div class="popupscreen">
                    <span class="closePop" onclick="closePop();"><img  alt="closepopup"
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            data-lazy-src="{{asset('assets/error_wigomania-child/images/closePop.png')}}" alt="closePopImage"><noscript><img
                                src="{{asset('assets/error_wigomania-child/images/closePop.png')}}" alt="closePopImage"></noscript></span>
            <div class="coupontxt">
                <p style="color: black; font-weight: bold">We offer you 15% DISCOUNT OFF MRP + FREE DEMO AND
                    CONSULTATION at any of our hair studios. Kindly
                    complete the form</p></div>
            <div class="DiscountCoupon">
                <div class="imageDiv">
                    <div class="mySlides">
                        <img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            data-lazy-src="{{asset('assets/error_wigomania-child/images/21.jpg')}}" alt="coupon">
                        <noscript><img src="{{asset('assets/error_wigomania-child/images/21.jpg')}}" alt="coupon">
                        </noscript>
                    </div>
                </div>

                <div class="leftdiv">
                    <div class="rightdiv">
                        <form class="contactForm" method="post" action="{{ url('send-coupon') }}" id="contactForm"
                              name="contactForm">
                            @csrf
                            <div class="formfield">
                                <label>Name: </label><input type="text" name="name" id="coupon_name"/>
                            </div>
                            <div class="formfield PhonECode">
                                <label>Phone: </label>
                                <select class="CountryCode" id="CountryCode" name="Country">
                                    <option data-countryCode="IN" value="91">(+91)</option>
                                </select>
                                <input type="number" name="phone" id="coupon_phone" maxlength="10" />
                            </div>

                            <div class="formfield">
                                <label>Email: </label><input type="text" name="email" id="coupon_email"/>
                            </div>
                            <div class="formfield">
                                <label>What are looking for:</label><textarea rows="5" col="50" name="helpus"
                                                                              id="coupon_helpus"></textarea>
                            </div>
                            <div class="OTPMessage coupon_otp_box" >An OTP has sent on your Mobile.</div>

                            <div class="formfield coupon_otp_box"  style="display: none;margin-top:5px;"><label
                                    style="color: white;">OTP</label>


                                <input type="number" name="OTP" class="contactFormInp" id="otp" autocomplete="off"
                                       required/></div>


                            <div id="OTPDIV">
                                <input type="button" name="input" class="contactFormSubmit" id="sendCouponOTP"
                                       value="Send OTP"/>
                            </div>
                            <div id="SubmitDIV" style="display: none;">
                                <input type="submit" name="input"  style="background-color: white;color: black;font-weight: bold" class="contactFormSubmit" id="sendOTP"
                                       value="Get Coupon"/>


                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



