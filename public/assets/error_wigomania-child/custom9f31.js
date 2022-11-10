var pre_cus_chat_name1 = '';
var pre_cus_chat_email1 = '';
var mycrnturl = '';
var mycrnturl = window.location.href;
 jQuery(function(){
	 var ChatWindow = window.sessionStorage.getItem('ChatWindow');
	/* pre_cus_chat_name1 = window.sessionStorage.getItem('pre_cus_chat_name');
	pre_cus_chat_email1 = window.sessionStorage.getItem('pre_cus_chat_email'); */

	/* if(pre_cus_chat_name1 != null && pre_cus_chat_email1 != null){
		tawkapi(pre_cus_chat_name1,pre_cus_chat_email1);
		jQuery('.chaticon').hide();
		jQuery('.trans').hide();
	} */
	setTimeout(function(){
		jQuery('#about,#forte,#oppertunity,#brochure,#reach,#expert,#bestNav').css({'opacity':'1','visibility':'visible'});
	},500);
	setTimeout(function(){
		//jQuery('.howcnihelp').show();
		jQuery('.ChatbubbleHi').show();
		setTimeout(function(){
			jQuery('.Chatbubble').show();
		},5200);
		setTimeout(function(){
			jQuery('.ChatbubbleUser').show();
			//window.sessionStorage.setItem('ChatWindow',1);
		},6500);
	},5000);
	jQuery('#Cphone').attr('type', 'number');
	jQuery('#Cphone').attr('maxlength', '10');
	jQuery('#Cphone').click(function(){
		Reachcheck();
	});
	var popup = window.localStorage.getItem('popup');
	var popupCloseCount = window.sessionStorage.getItem('popupClose');
	 if(popup != 1){
		 if(popupCloseCount == 1 || popupCloseCount > 1){
			 jQuery('.popup').hide();
		 }else{
			setTimeout(function(){
				jQuery('.popup').show();
			},3000);
		 }
	 }
	 jQuery('#VideosImgOne').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoOne').html('');
		jQuery('#VideoOne').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoOne").html('<iframe class="mobile_videos" width="800" height="400" src="https://www.youtube.com/embed/5Vm-zMrT0XA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#VideosImgTwo').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwo').html('');
		jQuery('#VideoTwo').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwo").html('<iframe class="mobile_videos" width="800" height="400" src="https://www.youtube.com/embed/3RJ6HGivjqM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#VideosImgThree').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoThree').html('');
		jQuery('#VideoThree').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoThree").html('<iframe class="mobile_videos" width="800" height="400" src="https://www.youtube.com/embed/Xdco_D5HTGc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#VideosImgFour').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoFour').html('');
		jQuery('#VideoFour').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoFour").html('<iframe class="mobile_videos" width="800" height="400" src="https://www.youtube.com/embed/AgTeaTkI518" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#VideosImgFive').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoFive').html('');
		jQuery('#VideoFive').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoFive").html('<iframe class="mobile_videos" width="800" height="400" src="https://www.youtube.com/embed/s9ZK3wW1VJQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#VideosImgSix').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoSix').html('');
		jQuery('#VideoSix').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoSix").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/SHlW5RTpp7g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs1').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoSeven').html('');
		jQuery('#VideoSeven').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoSeven").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/elQQN6C4-vk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs2').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoEight').html('');
		jQuery('#VideoEight').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoEight").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/hmmgd5b24Hw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs3').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoNine').html('');
		jQuery('#VideoNine').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoNine").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/nS3ibew3wt4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs4').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTen').html('');
		jQuery('#VideoTen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/wglKI-3XDmw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs5').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoEleven').html('');
		jQuery('#VideoEleven').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoEleven").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/EyOqtCil5sc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs6').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwelve').html('');
		jQuery('#VideoTwelve').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwelve").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/zmCuxCtfaE8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs7').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoThirteen').html('');
		jQuery('#VideoThirteen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoThirteen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/BzTmr2EcsaU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs8').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoFourteen').html('');
		jQuery('#VideoFourteen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoFourteen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/Sxe543-iW14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigs9').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoFifteen').html('');
		jQuery('#VideoFifteen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoFifteen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/i_H65qWdqV4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigsten').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoSixteen').html('');
		jQuery('#VideoSixteen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoSixteen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/jHOyk24gAoo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigselvn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoSeventeen').html('');
		jQuery('#VideoSeventeen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoSeventeen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/pRp0nviKIvQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigstwlv').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoEighteen').html('');
		jQuery('#VideoEighteen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoEighteen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/SHlW5RTpp7g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigsthrtn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoNineteen').html('');
		jQuery('#VideoNineteen').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoNineteen").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/F671F0-w4Jo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigsfourtn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwenty').html('');
		jQuery('#VideoTwenty').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwenty").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/CXhCXrKy1FM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigsfiftn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentyOne').html('');
		jQuery('#VideoTwentyOne').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentyOne").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/yRONXYk-d4k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigssixtn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentyTwo').html('');
		jQuery('#VideoTwentyTwo').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentyTwo").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/eweUKlHpLqA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigssevntn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentyThree').html('');
		jQuery('#VideoTwentyThree').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentyThree").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/XW7Ocxm_RfM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigseighttn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentyFour').html('');
		jQuery('#VideoTwentyFour').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentyFour").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/-wo3dUbnH4o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigsninetn').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentyFive').html('');
		jQuery('#VideoTwentyFive').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentyFive").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/pAmNTf54z4o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigstwnty').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentySix').html('');
		jQuery('#VideoTwentySix').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentySix").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/RYI801zQYHI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('#wigstwntyOne').click(function(){
		jQuery('.vidoespopup').show();
		jQuery('#VideoTwentySeven').html('');
		jQuery('#VideoTwentySeven').show();
		setTimeout(function(){
			jQuery('.vidoespopupscreen').addClass('reset_scale_size');
		},500);
		jQuery("#VideoTwentySeven").html('<iframe width="800" height="400" src="https://www.youtube.com/embed/ITzGUgbZif0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		setTimeout(function(){
			jQuery('.loading_spinner').hide();
		},2000);
	});
	jQuery('.wpcf7-submit').click(function(){
		jQuery('.transparentLayer').show();
	});
});
var SocialType = '';
function ShareSocial(type){
	var code = DiscountCode;
	SocialType = type;
	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		data: {
			'action'	  :'ShareSocial',
			'SocialType'  : SocialType,
			'name'		  : name,
			'phone'		  : phone,
			'email'		  : email,
			'code'		  : code
		},
		success:function(response) {
			//alert(JSON.stringify(response));
			jQuery('.SocialSharepopupscreen').removeClass('reset_scale_size');
			setTimeout(function(){
				jQuery('.SocialSharepopup').hide();
			},500);
			if(response == 1){
				jQuery.ajax({
					url :'https://karachi.wigomania.com/Prato/index.php/Websitedata/SocialDataFromWebsite',
					type:'post',
					data: {
						'SocialType'  : SocialType,
						'name'		  : name,
						'phone'		  : phone,
						'email'		  : email
					},
					success:function(response) {
						console.log(response);
					},
					error: function(errorThrown){
						//console.log(errorThrown);
					}
				});
			}
		},
		error: function(errorThrown){

		}
	});
}
/* function ShareSocialCoim(type){
	var code = DiscountCode;
	SocialType = type;
	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		data: {
			'action'	  :'ShareSocialCoim',
			'SocialType'  : SocialType,
			'name'		  : name,
			'phone'		  : phone,
			'email'		  : email,
			'code'		  : code
		},
		success:function(response) {
			//alert(JSON.stringify(response));
			jQuery('.SocialSharepopupscreen').removeClass('reset_scale_size');
			setTimeout(function(){
				jQuery('.SocialSharepopup').hide();
			},500);
			if(response == 1){
				jQuery.ajax({
					url :'https://wigomania.com/Prato/Coimbatore/index.php/Websitedata/SocialDataFromWebsite',
					type:'post',
					data: {
						'SocialType'  : SocialType,
						'name'		  : name,
						'phone'		  : phone,
						'email'		  : email
					},
					success:function(response) {
						console.log(response);
					},
					error: function(errorThrown){
						//console.log(errorThrown);
					}
				});
			}
		},
		error: function(errorThrown){

		}
	});
} */
function closeChat(){
	jQuery('.howcnihelp').hide();
}
function ChatbubbleUser(){
	//console.log('ritu');
	//jQuery('#chatnowClick')[0].click();
	jQuery('#tawkchat-minified-box').click();
	jQuery('.howcnihelp').hide();
}
function toggleChat() {
	/* console.log('toggleChat');
	//$("#tawkchat-status-middle").click();
	//Tawk_API.toggle();
	//return false;
	if (typeof Tawk_API !== 'undefined') {
		console.log(JSON.stringify(Tawk_API));
		Tawk_API.toggle();
	}
	jQuery('.howcnihelp').hide(); */

}

function ChatbubbleUserCoim(){
	jQuery('#chatnowClick')[0].click();
	jQuery('.howcnihelp').hide();

}
function CloseChatForm(){
	jQuery('.chatform').hide();
}

var chatname = '';
var chatphone ='';
var chatemail = '';
var chathelpus = '';
function ChatbubbleUsertwo(){
	jQuery('.howcnihelp').hide();
	jQuery('.emailError').remove();
	jQuery("#chatname").removeClass('Error');
	jQuery("#chatphone").removeClass('Error');
	jQuery("#chatemail").removeClass('Error');
	jQuery("#chathelpus").removeClass('Error');
	jQuery('#chatphonevaild').remove();
	jQuery('.transparentLayer').show();
	chatname = jQuery('#chatname').val();
	chatphone = jQuery('#chatphone').val();
	chatemail = jQuery('#chatemail').val();
	chathelpus = jQuery('#chathelpus').val();
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(chatname == ''){
		jQuery("#chatname").addClass('Error');
		jQuery('#chatname').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(chatphone == ''){
		jQuery("#chatphone").addClass('Error');
		jQuery('#chatphone').after('<span class="emailError" id="chatphonevaild" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(chatphone.length < 10 || chatphone.length >10){
		var chatmobileNUmber = chatphone.length;
		jQuery('#chatphone').after('<span class="emailError" id="chatphonevaild" style="color:red;background:#fff;width:100%;text-align:left;">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(chatemail == ''){
		jQuery("#chatemail").addClass('Error');
		jQuery('#chatemail').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(chatemail != '' && !email_regex.test(chatemail)){
		jQuery('#chatemail').addClass('Error');
		jQuery('#chatemail').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">Email needs to be in valid format.</span>');
		return false;
	}else if(chathelpus == ''){
		jQuery("#chathelpus").addClass('Error');
		jQuery('#chathelpus').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else{
		jQuery(".formfield.SENDOTP").css('display','block');
		jQuery(".OTPMessage").css('display','block');
		generateChatOTP();
		jQuery("#chatSubmit").attr('onclick','VerifyChatCouponSUbmit();');
	}
}
var ClickOnce = 0
function VerifyChatCouponSUbmit(){
	var CountryCode = jQuery('.CountryCode').val();
	var OTP = jQuery('#Chatotp_code').val();
	jQuery('.howcnihelp').hide();
	jQuery('.emailError').remove();
	jQuery("#chatname").removeClass('Error');
	jQuery("#chatphone").removeClass('Error');
	jQuery("#chatemail").removeClass('Error');
	jQuery("#chathelpus").removeClass('Error');
	jQuery('#chatphonevaild').remove();
	jQuery('.transparentLayer').hide();
	chatname = jQuery('#chatname').val();
	chatphone = jQuery('#chatphone').val();
	chatemail = jQuery('#chatemail').val();
	chathelpus = jQuery('#chathelpus').val();
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(chatname == ''){
		jQuery("#chatname").addClass('Error');
		jQuery('#chatname').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(chatphone == ''){
		jQuery("#chatphone").addClass('Error');
		jQuery('#chatphone').after('<span class="emailError" id="chatphonevaild" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(chatphone.length < 10 || chatphone.length >10){
		var chatmobileNUmber = chatphone.length;
		jQuery('#chatphone').after('<span class="emailError" id="chatphonevaild" style="color:red;background:#fff;width:100%;text-align:left;">Phone Number should be a 10 digit number.</span>');
		return false;
	}else if(chatemail == ''){
		jQuery("#chatemail").addClass('Error');
		jQuery('#chatemail').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(chatemail != '' && !email_regex.test(chatemail)){
		jQuery('#chatemail').addClass('Error');
		jQuery('#chatemail').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">Email needs to be in valid format.</span>');
		return false;
	}else if(chathelpus == ''){
		jQuery("#chathelpus").addClass('Error');
		jQuery('#chathelpus').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;">This value is required.</span>');
        return false;
	}else if(OTP == ''){
		jQuery("#Chatotp_code").addClass('Error');
		jQuery('#Chatotp_code').after('<span class="emailError" style="color:red;background:#fff;width:100%;text-align:left;>Enter OTP.</span>');
		return false;
	}else{
		if(ClickOnce == 0){
			ClickOnce = 1;
			jQuery.ajax({
				url: my_ajax_object.ajax_url,
				data: {
					'action'	  		:'VerifyOTP',
					'phone'   			: chatphone,
					'CountryCode'   	: CountryCode,
					'OTPCOde'   		: OTP
				},
				success:function(response) {
					console.log('OTPRESPONSE');
					console.log(response);
					if(response == 1){
						precustomchat(chatname,chatphone,chatemail,chathelpus);
						window.sessionStorage.setItem('pre_cus_chat_name',chatname);
						window.sessionStorage.setItem('pre_cus_chat_email',chatemail);
						/* jQuery.ajax({
							url: my_ajax_object.ajax_url,
							//dataType:'json',
							data: {
								'action'	  		:'SubmitThisForm',
								'name'   			: chatname,
								'phone'   			: chatphone,
								'email'   			: chatemail,
								'helpus'   			: chathelpus
							},
							success:function(response) {
								alert('res2');
								console.log(response);
								jQuery('.chatform').hide();
								alert('hide');
								jQuery('#chatnowClickM')[0].click();
								alert('click');
								jQuery('.transparentLayer').hide();
								tawkapi();
								Tawk_API.visitor = {
									name : chatname,
									email : chatemail
								};
								var Tawk_LoadStart=new Date();
							},error: function(errorThrown){
								jQuery('.transparentLayer').hide();
							}
						}); */
					}else{
						jQuery(".loadingSpinnerBox").hide();
						jQuery(".OTPMessage").html('Please enter valid OTP');
						jQuery(".OTPMessage").addClass('error');
						ClickOnce = 0;
					}
				},
				error: function(errorThrown){
					//alert('eerr');
					jQuery(".loadingSpinnerBox").hide();
					ClickOnce = 0;
				}
			});
		}
	}
}
function ChatUserForm(){
	jQuery('#chatform').show();
	jQuery('.howcnihelp').hide();
}
/* function SharePopupFB(){
	jQuery('#u_0_2').click();
} */

function closeVideoPop(){
	jQuery('.vidoespopupscreen').removeClass('reset_scale_size');
	setTimeout(function(){
		jQuery('.vidoespopup').hide();
		jQuery('.loading_spinner').show();
		jQuery('.VideosPopupOfWig').hide();
		jQuery("#VideoFive").html('');
		jQuery("#VideoFour").html('');
		jQuery("#VideoThree").html('');
		jQuery("#VideoTwo").html('');
		jQuery("#VideoOne").html('');
	},500);


}
function CloseSocialSharepopup(){
	jQuery('.SocialSharepopupscreen').removeClass('reset_scale_size');
	setTimeout(function(){
		jQuery('.SocialSharepopup').hide();
	},500);
}
function closePop(){
	jQuery('.popup').hide();
	var popupClose = window.sessionStorage.getItem('popupClose');
	if(popupClose==undefined || popupClose=='' || popupClose==null){
		window.sessionStorage.setItem('popupClose',1);
	}else{
		popupClose = parseInt(popupClose)+1;
		window.sessionStorage.setItem('popupClose',popupClose);
	}
}
var ClickOnce = 0;
var name = '';
var phone = '';
var email = '';
var DiscountCode = '';
function SubmitThisForm(){
	jQuery('.emailError').remove();
	jQuery("#name").removeClass('Error');
	jQuery("#phone").removeClass('Error');
	jQuery("#email").removeClass('Error');
	jQuery("#helpus").removeClass('Error');
	jQuery('#phonevaild').remove();

	name = jQuery('#name').val();
	phone = jQuery('#phone').val();
	email = jQuery('#email').val();
	var helpus = jQuery('#helpus').val();
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

	if(name == ''){
		jQuery("#name").addClass('Error');
		jQuery('#name').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(phone == ''){
		jQuery("#phone").addClass('Error');
		jQuery('#phone').after('<span class="emailError" id="phonevaild">This value is required.</span>');
        return false;
	}else if(phone.length < 10 || phone.length >10){
		var mobileNUmber = phone.length;
		jQuery('#phone').after('<span class="emailError" id="phonevaild">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(email == ''){
		jQuery("#email").addClass('Error');
		jQuery('#email').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(email != '' && !email_regex.test(email)){
		jQuery('#email').addClass('Error');
		jQuery('#email').after('<span class="emailError">Email needs to be in valid format.</span>');
		return false;
	}else if(helpus == ''){
		jQuery("#helpus").addClass('Error');
		jQuery('#helpus').after('<span class="emailError">This value is required.</span>');
        return false;
	}else{
		/* console.log(mycrnturl);
		if(mycrnturl == 'https://wigomania.com/15percent-off/'){
			console.log('saa');
			console.log(mycrnturl);
			jQuery(".SubmitThisForm").text('Get Quote');
		} */
		jQuery(".formfield.SENDOTP").css('display','block');
		jQuery(".OTPMessage").css('display','block');
		generateOTP();
		jQuery(".SubmitThisForm").attr('onclick','VerifyCouponSUbmit();');
	}
}
function VerifyCouponSUbmit(){
	jQuery('.emailError').remove();
	jQuery("#name").removeClass('Error');
	jQuery("#phone").removeClass('Error');
	jQuery("#email").removeClass('Error');
	jQuery("#helpus").removeClass('Error');
	jQuery('#phonevaild').remove();

	name = jQuery('#name').val();
	phone = jQuery('#phone').val();
	email = jQuery('#email').val();

	var CountryCode = jQuery('.CountryCode').val();
	var OTP = jQuery('#otp_code').val();

	var helpus = jQuery('#helpus').val();
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

	if(name == ''){
		jQuery("#name").addClass('Error');
		jQuery('#name').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(phone == ''){
		jQuery("#phone").addClass('Error');
		jQuery('#phone').after('<span class="emailError" id="phonevaild">This value is required.</span>');
        return false;
	}else if(phone.length < 10 || phone.length >10){
		var mobileNUmber = phone.length;
		jQuery('#phone').after('<span class="emailError" id="phonevaild">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(email == ''){
		jQuery("#email").addClass('Error');
		jQuery('#email').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(email != '' && !email_regex.test(email)){
		jQuery('#email').addClass('Error');
		jQuery('#email').after('<span class="emailError">Email needs to be in valid format.</span>');
		return false;
	}else if(helpus == ''){
		jQuery("#helpus").addClass('Error');
		jQuery('#helpus').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(OTP == ''){
		jQuery("#otp_code").addClass('Error');
		jQuery('#otp_code').after('<span class="emailError">Enter OTP.</span>');
        return false;
	}else{
		jQuery(".loadingSpinnerBox").show();
		if(ClickOnce == 0){
			ClickOnce = 1;
			jQuery.ajax({
				url: my_ajax_object.ajax_url,
				data: {
					'action'	  		:'VerifyOTP',
					'phone'   			: phone,
					'CountryCode'   	: CountryCode,
					'OTPCOde'   		: OTP
				},
				success:function(response) {
					console.log('OTPRESPONSE');
					console.log(response);

					if(response == 1){
						jQuery.ajax({
							url: my_ajax_object.ajax_url,
							//dataType:'json',
							data: {
								'action'	  		:'SubmitThisForm',
								'name'   			: name,
								'phone'   			: phone,
								'email'   			: email,
								'CountryCode'   	: CountryCode,
								'helpus'   			: helpus
							},
							success:function(response) {
								//alert(JSON.stringify(response));
								console.log('Couponresponse');
								DiscountCode = response;
								console.log(DiscountCode);
								if(DiscountCode != ''){
									jQuery.ajax({
										url :'https://karachi.wigomania.com/Prato/index.php/Websitedata/DataFromWebsite',
										type:'post',
										data: {
											'name'   			: name,
											'phone'   			: phone,
											'email'   			: email,
											'helpus'   			: helpus,
											'form'				: 'Register Form',
											'DiscountCode'   	: response
										},
										success:function(response) {
											jQuery(".loadingSpinnerBox").hide();
											console.log(response);
											//gtag_report_conversion();
										},
										error: function(errorThrown){
											console.log('errorThrown');
											console.log(errorThrown);
										}
									});
								}
								jQuery('.popup').hide();
								window.localStorage.setItem('popup',1);
								jQuery('.transparentLayer').hide();
								jQuery('.SocialSharepopup').show();
								jQuery('.SocialSharepopupscreen').addClass('reset_scale_size');
							},
							error: function(errorThrown){
							}
						});
					}else{
						jQuery(".loadingSpinnerBox").hide();
						jQuery(".OTPMessage").html('Please enter valid OTP');
						jQuery(".OTPMessage").addClass('error');
						ClickOnce = 0;
					}
				},
				error: function(errorThrown){
					jQuery(".loadingSpinnerBox").hide();
					ClickOnce = 0;
				}
			});
		}
	}
}


function generateOTP(){
	console.log('generateOTP');
	var PhoneNumber = jQuery('#phone').val();
	var CountryCode = jQuery('.CountryCode').val();

	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		data: {
			'action'	  		:'GenerateOTP',
			'phone'   			: PhoneNumber,
			'CountryCode'   	: CountryCode
		},
		success:function(response) {
			console.log('response');
			console.log(response);
		},
		error: function(errorThrown){
		}
	});
}
function generateChatOTP(){
	var PhoneNumber = jQuery('#chatphone').val();
	var CountryCode = jQuery('.CountryCode').val();
	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		data: {
			'action'	  		:'GenerateOTP',
			'phone'   			: PhoneNumber,
			'CountryCode'   	: CountryCode
		},
		success:function(response) {
		},
		error: function(errorThrown){
		}
	});
}




function SubmitThisFormCoim(){
	jQuery('.emailError').remove();
	jQuery("#name").removeClass('Error');
	jQuery("#phone").removeClass('Error');
	jQuery("#email").removeClass('Error');
	jQuery("#helpus").removeClass('Error');
	jQuery('#phonevaild').remove();

	name = jQuery('#name').val();
	phone = jQuery('#phone').val();
	email = jQuery('#email').val();
	var helpus = jQuery('#helpus').val();
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

	if(name == ''){
		jQuery("#name").addClass('Error');
		jQuery('#name').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(phone == ''){
		jQuery("#phone").addClass('Error');
		jQuery('#phone').after('<span class="emailError" id="phonevaild">This value is required.</span>');
        return false;
	}else if(phone.length < 10 || phone.length >10){
		var mobileNUmber = phone.length;
		jQuery('#phone').after('<span class="emailError" id="phonevaild">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(email == ''){
		jQuery("#email").addClass('Error');
		jQuery('#email').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(email != '' && !email_regex.test(email)){
		jQuery('#email').addClass('Error');
		jQuery('#email').after('<span class="emailError">Email needs to be in valid format.</span>');
		return false;
	}else if(helpus == ''){
		jQuery("#helpus").addClass('Error');
		jQuery('#helpus').after('<span class="emailError">This value is required.</span>');
        return false;
	}else{
		jQuery(".formfield.SENDOTP").css('display','block');
		jQuery(".OTPMessage").css('display','block');
		generateOTP();
		jQuery(".SubmitThisForm.CoMBITORESUBMIT").attr('onclick','VerifyCouponSUbmit();');
	}
}


/* function VerifyCouponSUbmitComb(){
	jQuery('.emailError').remove();
	jQuery("#name").removeClass('Error');
	jQuery("#phone").removeClass('Error');
	jQuery("#email").removeClass('Error');
	jQuery("#helpus").removeClass('Error');
	jQuery('#phonevaild').remove();

	name = jQuery('#name').val();
	phone = jQuery('#phone').val();
	email = jQuery('#email').val();

	var CountryCode = jQuery('.CountryCode').val();
	var OTP = jQuery('#otp_code').val();

	var helpus = jQuery('#helpus').val();
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

	if(name == ''){
		jQuery("#name").addClass('Error');
		jQuery('#name').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(phone == ''){
		jQuery("#phone").addClass('Error');
		jQuery('#phone').after('<span class="emailError" id="phonevaild">This value is required.</span>');
        return false;
	}else if(phone.length < 10 || phone.length >10){
		var mobileNUmber = phone.length;
		jQuery('#phone').after('<span class="emailError" id="phonevaild">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(email == ''){
		jQuery("#email").addClass('Error');
		jQuery('#email').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(email != '' && !email_regex.test(email)){
		jQuery('#email').addClass('Error');
		jQuery('#email').after('<span class="emailError">Email needs to be in valid format.</span>');
		return false;
	}else if(helpus == ''){
		jQuery("#helpus").addClass('Error');
		jQuery('#helpus').after('<span class="emailError">This value is required.</span>');
        return false;
	}else if(OTP == ''){
		jQuery("#otp_code").addClass('Error');
		jQuery('#otp_code').after('<span class="emailError">Enter OTP.</span>');
        return false;
	}else{
		jQuery(".loadingSpinnerBox").show();
		if(ClickOnce == 0){
			ClickOnce = 1;
			jQuery.ajax({
				url: my_ajax_object.ajax_url,
				data: {
					'action'	  		:'VerifyOTP',
					'phone'   			: phone,
					'CountryCode'   	: CountryCode,
					'OTPCOde'   		: OTP
				},
				success:function(response) {
					console.log('OTPRESPONSE');
					console.log(response);

					if(response == 1){
						jQuery.ajax({
							url: my_ajax_object.ajax_url,
							//dataType:'json',
							data: {
								'action'	  		:'SubmitThisFormCoim',
								'name'   			: name,
								'phone'   			: phone,
								'email'   			: email,
								'helpus'   			: helpus
							},
							success:function(response) {
								DiscountCode = response;
								jQuery('.SocialSharepopup').show();
								jQuery('.SocialSharepopupscreen').addClass('reset_scale_size');
								console.log('response');
								console.log(response);
								if(response != ''){
									jQuery.ajax({
										url :'https://wigomania.com/Prato/Coimbatore/index.php/Websitedata/DataFromWebsite',
										type:'post',
										data: {
											'name'   			: name,
											'phone'   			: phone,
											'email'   			: email,
											'helpus'   			: helpus,
											'DiscountCode'   	: response
										},
										success:function(response) {
											console.log(response);
										},
										error: function(errorThrown){
											//console.log(errorThrown);
										}
									});
								}
								jQuery('.popup').hide();
								window.localStorage.setItem('popup',1);
								jQuery('.transparentLayer').hide();
							},
							error: function(errorThrown){
							}
						});
					}else{
						jQuery(".loadingSpinnerBox").hide();
						jQuery(".OTPMessage").html('Please enter valid OTP');
						jQuery(".OTPMessage").addClass('error');
						ClickOnce = 0;
					}
				},
				error: function(errorThrown){
					jQuery(".loadingSpinnerBox").hide();
					ClickOnce = 0;
				}
			});

		}
	}
} */

function check(){
	jQuery('#phonevaild').remove();
	var phonechk = jQuery('#phone').val();
	if(phonechk.length < 7 || phonechk.length >12){
		jQuery('#phone').after('<span class="emailError" id="phonevaild">Please enter valid Phone Number with country code.</span>');
		//jQuery('#phone').focus();
		return false;
	}else{
		jQuery('#phonevaild').remove();
	}
}
function Reachcheck(){
	jQuery('#phonevaild').remove();
	var phonechk = jQuery('#Cphone').val();
	if(phonechk.length < 10 || phonechk.length >10){
		jQuery('#Cphone').after('<span class="emailError" id="phonevaild" style="margin-top: -25px;border: 1px solid #ff0000;background: transparent;color: #ff0000;">Phone Number should be a 10 digit number.</span>');
		//jQuery('#phone').focus();
		return false;
	}else{
		jQuery('#phonevaild').remove();
	}
}
/* function SubmitReachUsCoim() {
	var name = jQuery('#Cname').val();
	var phone = jQuery('#Cphone').val();
	var email = jQuery('#Cemail').val();
	var helpus = jQuery('#Cenquiry').val();
	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		//dataType:'json',
		data: {
			'action'	  		:'SubmitThisFormCoim',
			'name'   			: name,
			'phone'   			: phone,
			'email'   			: email,
			'helpus'   			: helpus
		},
		success:function(response) {
			//return false;
			if(response != ''){
				jQuery.ajax({
					url :'https://wigomania.com/Prato/Coimbatore/index.php/Websitedata/DataFromWebsite',
					type:'post',
					data: {
						'name'   			: name,
						'phone'   			: phone,
						'email'   			: email,
						'helpus'   			: helpus,
						'DiscountCode'   	: response
					},
					success:function(response) {
						location = 'https://wigomania.com/thank-you/';
						console.log(response);
					},
					error: function(errorThrown){
						//console.log(errorThrown);
					}
				});
			}
			jQuery('.popup').hide();
			window.localStorage.setItem('popup',1);
			jQuery('.transparentLayer').hide();
		},
			error: function(errorThrown){
		}
	});
 } */
 function SubmitReachUs() {
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	jQuery('.emailErrorReachus').remove();
	jQuery("#Cname").removeClass('Error');
	jQuery("#Reachusphone").removeClass('Error');
	jQuery("#Cemail").removeClass('Error');
	jQuery("#Chelpus").removeClass('Error');
	jQuery('#phonevaild').remove();
	var name = jQuery('#Cname').val();
	var phone = jQuery('#Reachusphone').val();
	var email = jQuery('#Cemail').val();
	var helpus = jQuery('#Cenquiry').val();
	if(name == ''){
		jQuery("#Cname").addClass('Error');
		jQuery('#Cname').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else if(phone == ''){
		jQuery("#Reachusphone").addClass('Error');
		jQuery('#Reachusphone').after('<span class="emailErrorReachus" id="phonevaild">This value is required.</span>');
        return false;
	}else if(phone.length < 10 || phone.length >10){
		var mobileNUmber = phone.length;
		jQuery('#Reachusphone').after('<span class="emailErrorReachus" id="phonevaild">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(email == ''){
		jQuery("#Cemail").addClass('Error');
		jQuery('#Cemail').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else if(email != '' && !email_regex.test(email)){
		jQuery('#Cemail').addClass('Error');
		jQuery('#Cemail').after('<span class="emailErrorReachus">Email needs to be in valid format.</span>');
		return false;
	}else if(helpus == ''){
		jQuery("#Cenquiry").addClass('Error');
		jQuery('#Cenquiry').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else{
		jQuery(".contactForm .formfield.ReachusSENDOTP").css('display','block');
		jQuery(".OTPMessage").css('display','block');
		generateOTPReachus();
		//alert('generateOTPReachus');
		jQuery(".contactFormSubmit").attr('onclick','GenerateOTPREACHUS();');
	}
}

function GenerateOTPREACHUS(){
	//alert('GenerateOTPREACHUS');
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	jQuery('.emailErrorReachus').remove();
	jQuery("#Cname").removeClass('Error');
	jQuery("#Reachusphone").removeClass('Error');
	jQuery("#Cemail").removeClass('Error');
	jQuery("#Chelpus").removeClass('Error');
	jQuery('#phonevaild').remove();

	var name = jQuery('#Cname').val();
	var phone = jQuery('#Reachusphone').val();
	var email = jQuery('#Cemail').val();
	var helpus = jQuery('#Cenquiry').val();
	var OTP = jQuery('#reachusotp_code').val();
	var CountryCode = jQuery('#reachusCOuntryID').val();

	if(name == ''){
		jQuery("#Cname").addClass('Error');
		jQuery('#Cname').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else if(phone == ''){
		jQuery("#Reachusphone").addClass('Error');
		jQuery('#Reachusphone').after('<span class="emailErrorReachus" id="phonevaild">This value is required.</span>');
        return false;
	}else if(phone.length < 10 || phone.length >10){
		var mobileNUmber = phone.length;
		jQuery('#Reachusphone').after('<span class="emailErrorReachus" id="phonevaild">Phone Number should be a 10 digit number.</span>');
		return false;
	}
	else if(email == ''){
		jQuery("#Cemail").addClass('Error');
		jQuery('#Cemail').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else if(email != '' && !email_regex.test(email)){
		jQuery('#Cemail').addClass('Error');
		jQuery('#Cemail').after('<span class="emailErrorReachus">Email needs to be in valid format.</span>');
		return false;
	}else if(helpus == ''){
		jQuery("#Cenquiry").addClass('Error');
		jQuery('#Cenquiry').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else if(OTP == ''){
		jQuery("#reachusotp_code").addClass('Error');
		jQuery('#reachusotp_code').after('<span class="emailErrorReachus">This value is required.</span>');
        return false;
	}else{
		jQuery(".loadingSpinnerBox").show();
		jQuery(".contactFormSubmit").val();
		if(ClickOnce == 0){
			ClickOnce = 1;
			jQuery.ajax({
				url: my_ajax_object.ajax_url,
				data: {
					'action'	  		:'VerifyOTP',
					'phone'   			: phone,
					'CountryCode'   	: CountryCode,
					'OTPCOde'   		: OTP
				},
				success:function(response) {
					console.log('OTPRESPONSE');
					console.log(response);
					if(response == 1){
						jQuery.ajax({
							url: my_ajax_object.ajax_url,
							//dataType:'json',
							data: {
								'action'	  		:'SubmitThisForm',
								'name'   			: name,
								'phone'   			: phone,
								'email'   			: email,
								'CountryCode'   	: CountryCode,
								'helpus'   			: helpus
							},
							success:function(response) {
								//alert(response);
							 	if(response != ''){
									jQuery.ajax({
										url :'https://wigomania.com/Websitedata/Reach_US_DataFromWebsite',
										type:'post',
										data: {
											'name'   			: name,
											'phone'   			: phone,
											'email'   			: email,
											'helpus'   			: helpus,
											'form'				: 'Reach Us',
											'DiscountCode'   	: response
										},
										success:function(response) {
											location = 'https://wigomania.com/thankyou/';
											console.log(response);
										},
										error: function(errorThrown){
											//console.log(errorThrown);
										}
									});
								}
								jQuery('.popup').hide();
								window.localStorage.setItem('popup',1);
								jQuery('.transparentLayer').hide();
							},
								error: function(errorThrown){
							}
						});
					}else{
						//alert('not verified');
						jQuery(".loadingSpinnerBox").hide();
						jQuery(".contactFormSubmit").val('Send');
						jQuery(".OTPMessage").css('display','block');
						jQuery(".OTPMessage").html('Please enter valid OTP');
						jQuery(".OTPMessage").addClass('error');
						ClickOnce = 0;
					}
				},
				error: function(errorThrown){
					jQuery(".loadingSpinnerBox").hide();
					jQuery(".contactFormSubmit").val('Send');
					ClickOnce = 0;
				}
			});
		}
	}
}

function generateOTPReachus(){
	var PhoneNumber = jQuery('#Reachusphone').val();
	var CountryCode = jQuery('#reachusCOuntryID').val();
	jQuery.ajax({
		url: my_ajax_object.ajax_url,
		data: {
			'action'	  		:'GenerateOTP',
			'phone'   			: PhoneNumber,
			'CountryCode'   	: CountryCode
		},
		success:function(response) {
		},
		error: function(errorThrown){
		}
	});
}
