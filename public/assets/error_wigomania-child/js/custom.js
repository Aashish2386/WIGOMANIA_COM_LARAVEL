jQuery( document ).ready(function( $ ) {
	
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var winTop = $(window).scrollTop();
	if($('#menu-product-menu').length > 0){
		var prodNav = $('#menu-product-menu ul li').css('display');
	}
	
	
	$(window).resize(function(){
		winWidth = $(window).width();
		winHeight = $(window).height();
		if($('#menu-product-menu').length > 0){
			prodNav = $('#menu-product-menu ul li').css('display');
			prodNavTgl();
		}

		if($('.teamWrapper').length > 0 && winWidth > 767){
			$('.teamPic figure').first().addClass('active').siblings().removeClass('active');
			$('.teamCnt').hide(0).first().show(0).css({"display":"inline-block"});
			$('.overlay').hide(0);
		}else if($('.teamWrapper').length > 0 && winWidth < 767){
			$('.familyPopBox, .overlay ,.teamDtl .teamCnt').hide(0);
		}
	});
	
	$(window).scroll(function(){
		winTop = $(window).scrollTop();
	});
	
	if($('.teamWrapper').length > 0){
		
		if( winWidth > 767){
			$('.teamCnt').first().fadeIn(1000).css("display","inline-block");
		}
		
		var changing = false;
		$('.teamPic figure').on('click',function(){
			if(!changing && winWidth > 767){
				var lastPos = $('.teamPic figure.active').index();
				var pos = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				if(lastPos != pos){
					changing = true;
					$('.teamDtl .teamCnt').fadeOut(300);
					setTimeout(function(){
						$('.teamDtl .teamCnt').eq(pos).fadeIn().css("display","inline-block");
						$.fn.matchHeight._update();
					},350);
					setTimeout(function(){ changing = false; },700);
				}
			}else if(!changing && winWidth < 767){
				var pos = $(this).index();
				
				$(this).removeClass('active').siblings().removeClass('active');
				var cnt = $('.teamDtl .teamCnt').eq(pos).html();
				$('.familyPopBox').html(cnt).css('top',winTop+50).fadeIn();
				$('.overlay').fadeIn();
				
			}
		});
		
		$(document).on('click','.overlay, .closeTeam',function(){
			$('.familyPopBox, .overlay').fadeOut(500);
		});
		
	}
	
	function prodNavTgl(){
		if(prodNav != 'block'){
			$('#menu-product-menu > li.current-menu-ancestor').addClass('active').siblings().removeClass('active');
		}else{
			$('#menu-product-menu > li').removeClass('active');
		}
	}
	if($('#menu-product-menu').length > 0){
		prodNavTgl();
	}
	
	$(document).on('click',function(e){
		if(!$(e.target).is('#menu-product-menu, #menu-product-menu *') && prodNav == 'block'){
			$('#menu-product-menu > li').removeClass('active');
		}
	});
	
	/*$('#menu-product-menu > li > a').on('click',function(e){
		e.preventDefault();
		prodNav = $('#menu-product-menu ul li').css('display');
		if(prodNav == 'block'){
			$(this).parent().toggleClass('active').siblings().removeClass('active');
		}else{
			$(this).parent().addClass('active').siblings().removeClass('active');
		}
	});*/
	$('#menu-product-menu > li > a').on('click',function(e){
		prodNav = $('#menu-product-menu ul li').css('display');
		if(prodNav == 'block'){
		console.log('a');
			e.preventDefault();
		}
	});
	$('#menu-product-menu > li > a').on('mouseenter',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	}).on('mouseleave',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	

});