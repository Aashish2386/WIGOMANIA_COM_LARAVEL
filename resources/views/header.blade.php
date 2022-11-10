<header class="innerPage clearfixer">
    <div class="SocialSharepopup">
        <div class="SocialSharecenter_popup">
            <div class="SocialSharepopupscreen">
                <span class="closePop" onclick="CloseSocialSharepopup();"><img
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"  alt="behind-the-brand"
                        data-lazy-src="{{asset('images/closePop.png')}}"><noscript><img
                            src="{{asset('images/closePop.png')}}"   alt="behind-the-brand"></noscript></span>
                <div class="coupontxt"><p>Your coupon has been emailed to you.<br/> <strong>Sharing is
                            caring.</strong><br/> As a gesture we would like to offer you another <strong>5% discount</strong>
                        if you click the below link and share the same on any of your social media pages.</p></div>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://wigomania.com/share.php" target="_blank">
                    <div class="facebookShare" onclick="ShareSocial('Facebook');"><img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            alt="behind-the-brand"
                            data-lazy-src="{{asset('images/ShareFb.png')}}">
                        <noscript><img src="{{asset('images/ShareFb.png')}}"   alt="behind-the-brand"></noscript>
                        <span>Share</span></div>
                </a>

                <a href="https://pinterest.com/pin/create/bookmarklet/?&amp;url=https://wigomania.com/share.php"
                   target="_blank">
                    <div class="facebookShare" onclick="ShareSocial('Pinterest');"><img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            alt="behind-the-brand"
                            data-lazy-src="{{asset('images/ShareP.png')}}">
                        <noscript><img src="{{asset('images/ShareP.png')}}"   alt="behind-the-brand"></noscript>
                        <span>Share</span></div>
                </a>

                <a href="https://twitter.com/share?url=https://wigomania.com/share.php" target="_blank">
                    <div class="facebookShare" onclick="ShareSocial('Twitter');"><img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            alt="behind-the-brand"
                            data-lazy-src="{{asset('images/ShareTw.png')}}">
                        <noscript><img src="{{asset('images/ShareTw.png')}}"   alt="behind-the-brand"></noscript>
                        <span>Share</span></div>
                </a>

                <a href="https://plus.google.com/share?url=https://wigomania.com/share.php" target="_blank">
                    <div class="facebookShare" onclick="ShareSocial('GooglePlus+');"><img
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            alt="behind-the-brand"
                            data-lazy-src="{{asset('images/ShareGplus.png')}}">
                        <noscript><img src="{{asset('images/ShareGplus.png')}}"   alt="behind-the-brand">
                        </noscript>
                        <span>Share</span></div>
                </a>
            </div>
        </div>
    </div>
    <div class="Imgpopup">
        <div class="Imgcenter_popup">
            <div class="Imgpopupscreen">
                <span class="closePop" onclick="closeImgPop();"><img
                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                        alt="behind-the-brand"
                        data-lazy-src="{{asset('assets/error_wigomania-child/images/closePop.png')}}"><noscript><img
                            src="{{asset('assets/error_wigomania-child/images/closePop.png')}}"   alt="behind-the-brand"> </noscript></span>
                <div class="ShowImg">
                </div>
            </div>
        </div>
    </div>

    <div class="howcnihelp">
        <span class="closeChat" onclick="closeChat();">×</span>
        <span class="chatterImg"><img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                alt="behind-the-brand"
                data-lazy-src="{{asset('assets/error_wigomania-child/images/IMG-20180827-WA0017.jpg')}}"/><noscript><img
                    src="{{asset('assets/error_wigomania-child/images/IMG-20180827-WA0017.jpg')}}"   alt="behind-the-brand"/></noscript></span>
        <span class="ChatbubbleHi">Hi...I am Aysha</span>
        <span class="Chatbubble">How can i help you?</span>
        <a id="chatnowClick" href="javascript:void(Tawk_API.toggle())" class="ChatbubbleUser" id="ChatbubbleUser"
           onclick="ChatbubbleUser();"/>Click here to reply...</a>
        <a id="chatnowClick" href="javascript:void(0)" class="trans" onclick="showprecustomchat();"
           style="display: none;border-color: transparent;background: transparent;box-shadow: 0 0 0 0;height: 35px;margin-top: -33px;"></a>
    </div>
    <div class="chaticon"
         style="position:fixed;bottom: 20px;right: 20px;background: #76B51B;width: 60px;height: 60px;border-radius: 100%;cursor:pointer;display:none;"
         onclick="showprecustomchat();">
        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
             alt="behind-the-brand"
             style="margin-top: 11px;" data-lazy-src="{{asset('images/chatpng.png')}}"/>
        <noscript><img src="{{asset('images/chatpng.png')}}"    alt="behind-the-brand" style="margin-top: 11px;"/>
        </noscript>
    </div>
    <div class="chatform">
        <div class="online">Online</div>
        <div class="chathead" onclick="CloseChatForm();">×</div>
        <div class="form_chat">
            <div class="welcome_text">Thank you for connecting with Wig-O-Mania. Kindly complete the form for us to
                serve you better.
            </div>
            <div class="formfield">
                <label>Name: </label><input type="text" name="name" id="chatname"/>
            </div>
            <div class="formfield">
                <label>Phone: </label>
                <div class="codeouter" style="position: relative;"><span class="CodePlus"
                                                                         style="padding-left: 10px;padding-top: 12px;font-size: 28px;">+</span><select
                        class="CountryCode"
                        style="height: 40px;border: 3px solid #ccc;border-radius: 4px;border-right: 0;border-top-right-radius: 0;border-bottom-right-radius: 0;"></select>
                </div>
                <input type="number" name="phone" id="chatphone" maxlength="10" onblur="check();"
                       style="width: 80%;border-bottom-left-radius: 0;border-top-left-radius: 0;"/>
            </div>
            <div class="formfield">
                <label>Email: </label><input type="text" name="email" id="chatemail"/>
            </div>
            <div class="formfield">
                <label>What are looking for: </label><textarea rows="5" col="50" name="helpus"
                                                               id="chathelpus"></textarea>
            </div>
            <div class="formfield SENDOTP" style="display:none;margin-top:0px;">
                <label>Enter OTP</label>
                <div class="OTPRESEND" style="width:100%">
                    <input type="text" name="otp_code" id="Chatotp_code" style="height:40px;"/>
                    <a href="javascript:void(0);" class="resend" style="color:#EA4291;float:left;"
                       onclick="generateOTP();">Resend OTP</a>
                </div>
                <div id="submit_mobile" onclick="VerifyOTP();" style="display:none;">VERIFY
                </div>
            </div>
            <a id="chatnowClickM" href="javascript:void(Tawk_API.toggle())"
               style="color:#000; display:none;float:left;width:20px;">chat</a>
            <div class="SubmitThisForm" id="chatSubmit" onclick="ChatbubbleUsertwo()">Start chat</div>
        </div>
    </div>

    <div class="PhoneNumbers">

        <!--	<span class="call" id="chatnow" style="color:#000;box-shadow:2px 2px 2px rgba(0, 0, 0, 0.3)"><a id="chatnowClick" href="javascript:void(Tawk_API.toggle())" style="color:#000" ><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" data-lazy-src="https://wigomania.com/wp-content/themes/wigomania-child/chatB.png"><noscript><img src="https://wigomania.com/wp-content/themes/wigomania-child/chatB.png"></noscript> Live Chat</a></span>!-->
        <span class="numbers" style="color:#000;box-shadow:2px 2px 2px rgba(0, 0, 0, 0.3)"><img
                alt="behind-the-brand"
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                data-lazy-src="{{asset('assets/wigomania-child/phone2.png')}}"><noscript><img
                    alt="behind-the-brand"

                    src="{{asset('assets/wigomania-child/phone2.png')}}"></noscript> <a href="tel:+919962831281"
                                                                                        style="color:#000">+91-99628-31281</a><span
                class="slash"> / </span><a href="tel:04445579229" style="color:#000"> 044-4557-9229</a></span>
        <span class="call" id="chatnow"
              style="width:125px !important; border:none; height:34px !important; padding:0px 10px; margin:0px; box-shadow: none;"><a
                href="{{url('customer-review')}}" style="color:#000"><img

                    alt="behind-the-brand"
                    style="width:125px !important; border:none; padding:0px; margin:0px; height: 32px;"
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20125%2032'%3E%3C/svg%3E"
                    width="125" height="32" data-lazy-src="{{asset('assets/wigomania-child/images/review1.gif')}}"><noscript><img
                        style="width:125px !important; border:none; padding:0px; margin:0px;     height: 32px;"
                        alt="behind-the-brand"
                        src="{{asset('assets/wigomania-child/images/review1.gif')}}" width="125"
                        height="32"></noscript></a></span>

    </div>

    <a href="{{url('/')}}" class="logo"><img
            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"

            alt="behind-the-brand" data-lazy-src="{{asset('images/logo.png')}}">
        <noscript><img src="{{asset('images/logo.png')}}" alt="behind-the-brand"></noscript>
    </a>

    <nav id="bestNav" class="mainNav">
        <li class="menu-item menu-item-submenu"
            aria-haspopup="true"
            data-menu-toggle="hover">
        <div class="menuWrapper">
            <ul id="menu-inner-menu" class="menu">
                <li id="menu-item-124"
                    class="menu-item menu-item-type-post_type menu-item-object-page  page_item page-item-56 current_page_item menu-item-124 {{ request()->is('behind-the-brand') ? 'current-menu-item' : '' }}">
                    <a href="{{url('behind-the-brand')}}" aria-current="page">Behind The Brand</a></li>
                <li id="menu-item-405"
                    class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-405" {{ request()->is('semi-permanent-extension') ? 'current-menu-item' : '' }}><a
                        href="{{url('semi-permanent-extension')}}">Our Forte</a></li>
                <li id="menu-item-1192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1192 {{ request()->is('our-studios') ? 'current-menu-item' : '' }}" >
                    <a href="{{url('our-studios')}}">Our Studios</a></li>
                <li id="menu-item-1479" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1479 {{ request()->is('reviews') ? 'current-menu-item' : '' }}">
                    <a href="{{url('reviews')}}">Reviews</a></li>
                <li id="menu-item-250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250 {{ request()->is('partner-opportunity') ? 'current-menu-item' : '' }}"><a
                        href="{{url('partner-opportunity')}}">Partner Opportunity</a></li>
                <li id="menu-item-1476" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1476 {{ request()->is('videos') ? 'current-menu-item' : '' }}">
                    <a href="{{url('videos')}}">Videos</a></li>
                    <li id="menu-item-1477" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1476 {{ request()->is('https://blog.wigomania.com') ? 'current-menu-item' : '' }}">
                    <a href="https://blog.wigomania.com" target="_blank">Blog</a></li>
                <li id="menu-item-123" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-123 {{ request()->is('csr') ? 'current-menu-item' : '' }}"><a
                        href="{{url('csr')}}">CSR</a></li>
                <li id="menu-item-149"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-149"><a
                        href="{{url('/')}}#reach">Reach Us</a></li>
            </ul>
        </div>
    </nav>

</header>

@push('scripts')

@endpush
