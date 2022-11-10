/**
 * BEST NAVIGATION
 * @version 2.0.3
 * @author Senthil Kumar
 */
 (function ( $ ) {
 
    $.fn.bestnav = function( options ) {
		
		//DEFAULT VALUES
        var defaults = {
			breakpoint : 1023,
			dropDownWidth : 200,
			customUlClass : "menu",
			linkArrow : true,
			mobileBtnCustom : false,
			mobileBtnClass : "navBtn",
			mobiSelfClose : false
        };
		//OVERIDE DEFAULT VALUES
		var settings = $.extend({}, defaults, options);
		
		//MAIN VARIABLES
		var $selector = $(this);
		var winWidth = $(window).width();
		var handheld = false;
		var breakpoint = settings.breakpoint;
		var dropDownWidth = settings.dropDownWidth;
		var linkArrow = settings.linkArrow;
		var mobileBtnCustom = settings.mobileBtnCustom;
		var mobileBtnClass =  settings.mobileBtnClass;
		var mobiSelfClose = settings.mobiSelfClose;
		
		var $navBtn = $('.'+settings.mobileBtnClass);
		
		var $menuWrapper =  $selector.find(' > .menuWrapper');
		var customUlClass = settings.customUlClass;
		var $primaryUL = $selector.find('ul.'+customUlClass);
		var $primaryItems = $primaryUL.find(' > li');
		var $allUl = $selector.find('ul');
		var $allItems = $primaryUL.find('li');
		
		var currentNavPos = 0;
		
		//ADDING HANDHELD NAVBTN
		if(!mobileBtnCustom){
			$selector.prepend('<div class="'+ mobileBtnClass +'"></div>');
			$navBtn = $('.'+settings.mobileBtnClass);
		}
		
		//HANDHELD CHECK FUNCTION
		function handheldChk(){
			if(winWidth > breakpoint && breakpoint !== 0){ 
				handheld = false; 
				$selector.removeClass('handheld');
				//POSITIONING SUBNAV CONTAINERS
				$primaryUL.find('ul').css({'width':dropDownWidth+'px'}).find('ul').css({'left':dropDownWidth+'px'});
				//alert($primaryUL('ul ul'));
			}else if(winWidth <= breakpoint || breakpoint === 0){ 
				handheld = true; 
				$selector.addClass('handheld'); 
				//POSITIONING SUBNAV CONTAINERS
				var mobiUlWidth = $primaryUL.width();
				$primaryUL.find('ul').css({'width':''}).find('ul').css({'left':mobiUlWidth+'px'});
			}
		}
		handheldChk();
		
		
		//WINDOW RESIZE FUNCTIONS
		$(window).resize(function(){
			winWidth = $(window).width();
			
			handheldChk();
			$menuWrapper.css({'height':''});
			
			if(!handheld){
				$allUl.css({'display':''});
				$navBtn.removeClass('navActive');
				currentNavPos = 0;
			}else if(handheld){
				$allUl.css('display','none');
				$navBtn.removeClass('navActive');
			}
			
		});
		
		
		//DESKTOP DROPDOWN NAV FUNCTION
		$selector.on({
			mouseenter : function(){ 
				if(!handheld && $(this).find(' > ul').length > 0){ dropDown($(this),true); }
			},
			mouseleave : function(){ 
				if(!handheld && $(this).find(' > ul').length > 0){ dropDown($(this),false); }
			}
		},'li');
		
		//DROPDOWN FUNCTIONS
		function dropDown(elm,action){
			var $subNav = elm.find(' > ul');
			if(action){
				//CALCULATING WINDOW WIDTH AGAINST DD MENU WIDTH, THEN DECIDE WHERE TO DISPLAY DD MENU (LEFT OR RIGHT)
				var subNavLft = $subNav.css({'display':'block','opacity':'0'}).offset().left;
				var subNavWidth = $subNav.css({'display':'block','opacity':'0'}).width();
				
				if(subNavWidth + subNavLft > winWidth){ $subNav.css({'left':"-"+(dropDownWidth)+'px'}); 
				}else{ $subNav.css({'left':dropDownWidth+'px'}); }
				
				$primaryUL.find(' > li > ul').css({'left':''});
				
				$subNav.css({'display':'block','opacity':'0','margin-top':'10px'}).stop()
				.animate({'opacity':'1','margin-top':'0'},'fast'); 
			}else{
				$subNav.stop().animate({'opacity':'0','margin-top':'10px'},0,function(){
					$(this).css({'display':'none','opacity':'1','margin-top':'','left':''});
					$subNav.css({'left':dropDownWidth+'px'});
				});
				
			}
		}
		
		//ADDING ARROWS FOR SUBNAV CONTAINERS
		function addArrow(){
			if(!linkArrow){
				$allItems.has('ul').find('> a').addClass('subNavArrow');
			}else{
				$allItems.has('ul').addClass('subNavParent').prepend('<span class="subNavArrow"></span>');
			}
			$primaryItems.find('ul').prepend('<li class="backArrow"><a href="#">Back</a></li>');
		}
		
		addArrow();
		
		
		//HANDHELD NAV BUTTON FUNCTION
		$navBtn.on('click',function(){
			handHeldNavFunc();
		});
		
		function handHeldNavFunc(){
			var navActive = $navBtn.hasClass('navActive');
			if(!navActive){
				var navHeight = $primaryUL.outerHeight();
				$menuWrapper.height(navHeight);
				
				$navBtn.addClass('navActive');
				$primaryUL.css({'left':'0'});
				currentNavPos = 0;
			}else if(navActive){
				$navBtn.removeClass('navActive');
			}
			
			$primaryUL.fadeToggle(function(){
				if(navActive){ $menuWrapper.height(0); }
			});
		}
		
		//CLOSE NAV WHEN CLICK OUTSIDE OR NAV LINKS
		$(document).on('click',function(e){
			if(handheld && !mobiSelfClose){
				var selId = $selector.attr('id');
				if(!$(e.target).is('.'+settings.mobileBtnClass+',#'+selId+' *')){
					$navBtn.removeClass('navActive');
					$primaryUL.fadeOut(function(){ $menuWrapper.height(0); });
				}
			}else if(handheld){
				if(!$(e.target).is('.'+settings.mobileBtnClass)){
					$navBtn.removeClass('navActive');
					$primaryUL.fadeOut(function(){ $menuWrapper.height(0); });
				}
			}
		});
		
		
		//SUBNAV ARROW CLICK FUNCTION
		$selector.on('click','.subNavArrow',function(e){
			e.preventDefault();
			if(handheld){
				
				var navScrollPos = $navBtn.offset().top;
				var bodyScrollPos = $(window).scrollTop();
				var navHeight = $(this).parent().find(' > ul').outerHeight();
				if(bodyScrollPos > navScrollPos){ $('html, body').animate({scrollTop : navScrollPos},500); }
					
				var linkWidth = $(this).parent().width();
				
				//alert(currentNavPos);
				$menuWrapper.animate({'height':navHeight});
				$primaryUL.animate({'left':currentNavPos-linkWidth});
				currentNavPos-=linkWidth;
				$(this).parent().find(' > ul').fadeIn(300);
			}
		});
		
		$selector.on('click','.backArrow a',function(e){
			e.preventDefault();
			if(handheld){
				
				var linkWidth = $(this).parent().parent().width();
				var navHeight = $(this).parent().parent().parent().parent().outerHeight();
				
				$menuWrapper.height(navHeight);
				$primaryUL.animate({'left':currentNavPos+linkWidth});
				currentNavPos+=linkWidth;
				$(this).parent().parent().fadeOut(300);
			}
		});
		
		
		
 		//RETURN THIS OBJECT FOR CHAINABLITY
        return this;
 
    };
	
	
	/**
	 * BEST TABS
	 * @version 3.0.1
	 * @author Senthil Kumar
	 */
 
 
	$.fn.besttabs = function( options ) {
		
		//DEFAULT VALUES
        var defaults = {
			breakpoint:767, // You can also use HTML5 data attribute in the main container( ex: data-breakPoint="991" ) IMPORTANT: data attribute overides jquery breakpoint.
			effect:'none',
			tabNavClass:'tabsNav',
			tabCntClass:'tabContnt',
			tabSecondaryNavElem:'.tabsSecNav a',
			urlChange:true,
			scrollToNav:true,
			scrollToElem:'',
			scrollTopOffsetTab:0,
			scrollTopOffsetAccord:0,
			selfClose:false,
			changedToSmall: function(){},
			changedToLarge: function(){},
			beforeChange: function(){},
			afterChange: function(){}
		};
	   
		//OVERIDE DEFAULT VALUES
		var settings = $.extend({}, defaults, options);
		
		//MAIN VARIABLES
		var $selector = $(this);
		var breakpoint = settings.breakpoint;
		
		if($selector.attr('data-breakPoint')){
			breakpoint = $selector.attr('data-breakPoint');
		}
		
		var effect = settings.effect;
		var urlChange = settings.urlChange;
		
		var tabNavClass = '.'+settings.tabNavClass;
		var $tabNav = $(tabNavClass);
		
		var tabSecNavElem = settings.tabSecondaryNavElem;
		
		var tabCntClass = '.'+settings.tabCntClass;
		var $tabCnt = $(tabCntClass);
		
		var urlMatch = false;
		
		var scrollToNav = settings.scrollToNav;
		var $scrollToElem = (settings.scrollToElem === "")? $tabNav: $(settings.scrollToElem) ;
		var scrollToPos = $scrollToElem.offset().top;
		var scrollTopOffsetTab = settings.scrollTopOffsetTab;
		var scrollTopOffsetAccord = settings.scrollTopOffsetAccord;
		
		var selfClose = settings.selfClose;
		
		//var changeUrl;	
		var istabs = true;
		var breakLarge, breakSmall = false;
		
		//METHOD FOR CREATING ACCORDION LINKS
		function createAccodianLinks(){
			$tabNav.find('a').each(function(){
				var id = $(this).attr('href');
				var accordLabel = $(this).text();
				var accordAnchor = '<a href="'+id+'" class="tabsAccordLink">'+accordLabel+'</a>';
				var elem = $(this).attr('href');
				$selector.find(elem).prepend(accordAnchor);
			});
		}
		createAccodianLinks();
		
		//METHOD FOR CHANGING EVERYTHING BETWEEEN TABS AND ACCORDION
		function checkTabs(){
			var winWidth = $(window).width();
			if(winWidth > breakpoint){ 
				istabs = true;
				$selector.removeClass('accordion');
				if(!breakLarge){ settings.changedToLarge(); breakLarge = true; breakSmall = false; }
				
				if(selfClose && $selector.find('.currentTab').length <= 0){
					var url = window.location.href;
					showTabByURL(url);
				}
			}else{
				istabs = false;
				$selector.addClass('accordion');
				if(!breakSmall){ settings.changedToSmall(); breakSmall = true; breakLarge = false; }
			}
			$selector.animate({'opacity':'1'});
		}
		checkTabs();
		
		//WINDOW RESIZE MTHOD
		$(window).resize(function(){
			checkTabs();
		});
		
		//CAPTURE URL TO CHANGE THE TABS
		if(urlChange){ 
			var url = window.location.href;
			showTabByURL(url);
		}
		//LISTEN HASH CHANGE IN URL TO CHANGE THE TABS (ESPECIALY FOR SAME PAGE SECONDARY LINKS)
		/*$(window).on('hashchange', function() {
		  	var url = window.location.href;
			showTabByURL(url);
		});*/
		
		
		//ACCORDION NAV CLICK METHOD
		$tabCnt.on('click','a.tabsAccordLink',function(e){
			e.preventDefault();
			var id = $(this).attr('href');
			
			$(this).toggleClass('active').parent().siblings().find('a.tabsAccordLink').removeClass('active');
			
			//CHANGING TABS NAV FROM ACCORDIAN FOR RESPONSIVENESS
			$tabNav.find('a[href="'+id+'"]').parent().addClass('active').siblings().removeClass('active');
			
			changeUrl(this.hash);
			switchTabs(id);
			
		});
		
		//TABS NAV CLICK METHOD
		$tabNav.on('click','a',function(e){
			e.preventDefault();
			var id = $(this).attr('href');
			
			var tabsCntHeight = $selector.find(tabCntClass+id).innerHeight();
			$tabCnt.parent().css({'height':tabsCntHeight});
			
			//CHANGING ACCORDIAN NAV FROM TABS FOR RESPONSIVENESS
			$selector.find(tabCntClass+id).find('a.tabsAccordLink').addClass('active').parent().siblings().find('a.tabsAccordLink').removeClass('active');
			
			$(this).parent().addClass('active').siblings().removeClass('active');
			$tabCnt.removeClass('currentTab');
			
			changeUrl(this.hash);
			switchTabs(id);
			
			scrollToPlace();
			
		});
		
		//TABS SECONDARY NAV CLICK METHOD
		$(tabSecNavElem).on('click',function(e){
			
			var url = window.location.href;
			var urlId = url.split('#');
			
			var secNavUrl = $(this).prop('href');
			var secNavId = secNavUrl.split('#');
			
			if(secNavId[0] === urlId[0]){
				e.preventDefault();
				
				if(istabs){
					var tabsCntHeight = $selector.find(tabCntClass+"#"+secNavId[1]).innerHeight();
					$tabCnt.parent().css({'height':tabsCntHeight});
					$tabCnt.removeClass('currentTab');
					scrollToPlace();
				}
				
				$tabNav.find('a[href="#'+secNavId[1]+'"]').parent().addClass('active').siblings().removeClass('active');
				$selector.find(tabCntClass+"#"+secNavId[1]).find('a.tabsAccordLink').addClass('active').parent().siblings().find('a.tabsAccordLink').removeClass('active');
				
				changeUrl(this.hash);
				switchTabs("#"+secNavId[1]);
			}
		});
		
		//METHOD FOR CHANGE THE TABS BY URL
		function showTabByURL(url){
			var id = url.split('#');
			
			//MAKING TAB SELECTION
			$tabNav.find('a').each(function() {
				var tabLinks = $(this).attr('href');
				tabLinks = tabLinks.replace('#','');
				
				if(id[1] === tabLinks){
					urlMatch = true;
					$tabNav.find('a').parent().removeClass('active');
					$(this).parent().addClass('active');
					//DISPLAY APPROPRIATE TAB 
					$tabCnt.removeClass('currentTab');
					
					switchTabs("#"+id[1]);
				}
				$selector.find(tabCntClass+"#"+id[1]).find('a.tabsAccordLink').addClass('active').parent().siblings().find('a.tabsAccordLink').removeClass('active');
			});
			
			if(urlMatch && istabs){
				scrollToPlace();
			}
			
		}
			
		//TABS SWITCHING METHOD
		function switchTabs(tabId){
			settings.beforeChange();
			if(istabs){
				switch(effect){
					case "fade": fadeTabs(tabCntClass+tabId);
					break;
					case "fadingSlide": fadeSlideTabs(tabCntClass+tabId);
					break;
					case "none": chngTabs(tabCntClass+tabId);
					break;
					default: chngTabs(tabCntClass+tabId);
				}	
			}else{
				slideAccordian(tabCntClass+tabId);
			}
		}
		
		//EFFECTS METHODS
		//NO EFFECT METHOD
		function chngTabs(elem){
			$selector.find(elem).addClass('currentTab');
			removeTabParentHeight();
			settings.afterChange();
		}
		//FADE METHOD
		function fadeTabs(elem){
			$selector.find(elem).addClass('currentTab').css({'opacity':'0'})
			.animate({'opacity':'1'},function(){
				$(this).css({'opacity':''});
				removeTabParentHeight();
				settings.afterChange();
			});
		}
		//FADE WITH SLIDING METHOD
		function fadeSlideTabs(elem){
			$selector.find(elem).addClass('currentTab').css({'opacity':'0','right':'-50px'})
			.animate({'opacity':'1','right':'0px'},function(){
				$(this).css({'opacity':'','right':''});
				removeTabParentHeight();
				settings.afterChange();
			});
		}
		
		//ACCORDION METHOD
		function slideAccordian(elem){
			if($(elem).hasClass('currentTab') && selfClose){
				$(elem+' .tabsContetBody').slideUp(function(){
					$(elem).removeClass('currentTab');
					$(this).css({'display':''});
				});
			}else if(!$(elem).hasClass('currentTab')){
				$tabCnt.find('.tabsContetBody').slideUp();
				$selector.find(elem+' .tabsContetBody').slideUp(0).slideDown(function(){
					$tabCnt.removeClass('currentTab');
					$selector.find(elem).addClass('currentTab');
					$selector.find('.tabsContetBody').css({'display':''});
					
					var accordTop = $selector.find(elem).offset().top;
					scrollToPlace(accordTop);
					settings.afterChange();
				});
			}
		}
		
		//REMOVING TABS CONTENT CONTAINER HEIGHT FOR RESPONSIVENESS
		function removeTabParentHeight(){
			if(istabs){
				$tabCnt.parent().css({'height':''});
			}
		}
		
		function changeUrl(url){
			var pos = $(window).scrollTop();
			window.location.hash = url;
			$(window).scrollTop(pos);	
		}
		
		//METHOD FOR SMOOTH SCROLL TABS TO DEFIENED POSITION
		function scrollToPlace(accordTop){
			if(scrollToNav){
				if(istabs){
					scrollToPos = $scrollToElem.offset().top+scrollTopOffsetTab;
					$('html, body').animate({scrollTop:scrollToPos});
				}else{
					scrollToPos = accordTop+scrollTopOffsetAccord;
					if(scrollToPos < $(window).scrollTop()){
						$('html, body').animate({scrollTop:scrollToPos});
					}
				}
			}
		}
		
 		//RETURN THIS OBJECT FOR CHAINABLITY
        return this;
 
    };
	
	$.fn.bestprodtabs = function( options ) {
		
		//DEFAULT VALUES
        var defaults = {
			effect:'none',
			tabNavContainer:'',
			tabCntClass:'tabContnt',
			urlChange:false,
			scrollToNav:true,
			disableTab:false,
			scrollToElem:'',
			scrollTopOffset:0,
                        afterLoad:function(){}
		};
	   
		//OVERIDE DEFAULT VALUES
		var settings = $.extend({}, defaults, options);
		
		//MAIN VARIABLES
		var $selector = $(this);
		var effect = settings.effect;
		var urlChange = settings.urlChange;
		
		var tabNavContainer = settings.tabNavContainer;
		var tabNavClass = '.tabsNav';
		if(tabNavContainer != ""){
			var $tabNav = $selector.find(' > '+tabNavContainer+' '+tabNavClass);
		}else{
			var $tabNav = $selector.find(' > '+tabNavClass);
		}
		
		var tabCntClass = '.'+settings.tabCntClass;
		var $tabCnt = $selector.find(' > .tabsContWrapper > '+tabCntClass);
		
		var urlMatch = false;
		
		var scrollToNav = settings.scrollToNav;
		var $scrollToElem = (settings.scrollToElem === "")? $tabNav: $(settings.scrollToElem) ;
		var scrollToPos = $scrollToElem.offset().top;
		var scrollTopOffset = settings.scrollTopOffset;
		
		var disableTab = settings.disableTab;
		
		
		
		//CAPTURE URL TO CHANGE THE TABS
		if(urlChange){ 
			var url = window.location.href;
			showTabByURL(url);
		}
		
		//TABS SCRIPT
		$tabNav.on('click','a',function(e){
			if(disableTab){ return; }
			e.preventDefault();
			
			$selector.find('video').each(function(){
				//var vidId = $(this).attr('id');
				//console.log(vidId);
				$(this).get(0).pause();	
			});
			
			if($(this).parent().hasClass('selected')){ return; }
			var id = $(this).attr('href');
			
			//FIXING TABS CONTENT CONTAINER HEIGHT FOR JUMPING PROBLEM, THEN REMOVE IT IN THE BOTTOM (INSIDE EFFECTS)
			var tabsCntHeight = $tabCnt.find(' > '+tabCntClass+id).innerHeight();
			$tabCnt.parent().css({'height':tabsCntHeight});
			
			$(this).parent().addClass('selected').siblings().removeClass('selected');
			$tabCnt.removeClass('currentTab');
			
			//history.pushState(null, null, this.hash);
			//scrollToPlace();
			
			switch(effect){
				case "fade": fadeTabs(tabCntClass+id);
				break;
				case "fadingSlide": fadeSlideTabs(tabCntClass+id);
				break;
				case "none": chngTabs(tabCntClass+id);
				break;
				default: chngTabs(tabCntClass+id);
			}
		});	
		
		//FUNCTION FOR CHANGE THE TABS BY URL
		function showTabByURL(url){
			if(disableTab){ return; }
			var id = url.split('#');
			//MAKING TAB SELECTION
			$tabNav.find('a').each(function() {
				var tabLinks = $(this).attr('href');
				tabLinks = tabLinks.replace('#','');
				if(id[1] === tabLinks){
					urlMatch = true;
					$tabNav.find('a').removeClass('selected');
					$(this).addClass('selected');
					//DISPLAY APPROPRIATE TAB 
					$tabCnt.removeClass('currentTab');
					$selector.find('#'+id[1]).addClass('currentTab').css({'opacity':'0'})
					.animate({'opacity':'1'},function(){
						$(this).css({'opacity':''});
					});
				}
			});
			if(urlMatch){
				scrollToPlace();
			}
			
		}
		
		
		function scrollToPlace(){
			if(scrollToNav){
				scrollToPos = $scrollToElem.offset().top+scrollTopOffset;
				$('html, body').animate({scrollTop:scrollToPos-10+'px'});
			}
		}
			
		
		//EFFECTS
		//NO EFFECT
		function chngTabs(elem){
			$selector.find(elem).addClass('currentTab');
			removeTabParentHeight();
		}
		//FADE
		function fadeTabs(elem){
			$selector.find(elem).addClass('currentTab').css({'opacity':'0'})
			.animate({'opacity':'1'},function(){
				$(this).css({'opacity':''});
				removeTabParentHeight();
			});
		}
		//FADE WITH SLIDING
		function fadeSlideTabs(elem){
			$selector.find(elem).addClass('currentTab').css({'opacity':'0','right':'-50px'})
			.animate({'opacity':'1','right':'0px'},function(){
				$(this).css({'opacity':'','right':''});
				removeTabParentHeight();
			});
		}
		
		//REMOVING TABS CONTENT CONTAINER HEIGHT FOR RESPONSIVENESS
		function removeTabParentHeight(){
			$tabCnt.parent().css({'height':''});	
		}
 		//RETURN THIS OBJECT FOR CHAINABLITY
        settings.afterLoad();
        return this;
 
    };
	
 
}( jQuery ));
