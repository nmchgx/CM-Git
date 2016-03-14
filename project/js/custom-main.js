/*--------------------------------------------*/
/*	Fire up functions on $(document).ready()
/*--------------------------------------------*/
jQuery(document).ready(function () {
	truethemes_SuperFish();
	truethemes_MobileMenu();
	truethemes_NavSetup();
	truethemes_Nav();
	jQuery("#menu-main-nav li:has(ul)").addClass("parent");
	truethemes_Sliders();
	jQuery('.slider-content-video').fitVids();
    truethemes_StickyMenu();
	truethemes_Gallery();
	truethemes_KeyboardTab();
	jQuery('div.mc_signup_submit input#mc_signup_submit').removeClass('button'); //remove ".button" from MailChimp to avoid WooCommerce CSS conflict
	
});

/*--------------------------------------------*/
/*	Fire up functions on $(window).load()
/*--------------------------------------------*/
jQuery(window).load(function () {
	truethemes_Fadeimages();
	truethemes_MobileSubs();
	truethemes_LightboxHover();
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook:"data-gal"});
	truethemes_ScrollTop();
	truethemes_Tabs();
	if (jQuery(window).width() > 1024) { //only load sticky on non-mobile devices
		truethemes_StickySidebar();
	}
});

/*---------------------------------------------------------------------------*/
/*
/* Note to developers:
/* Easily uncompress any functions below using: http://jsbeautifier.org/
/*
/*---------------------------------------------------------------------------*/
 
/*--------------------------------------*/
/*	Superfish - Top Toolbar Dropdown
/*--------------------------------------*/
function truethemes_SuperFish(){
//only activate if child <ul> is present
jQuery(".top-block ul:has(ul)").addClass("sf-menu");
jQuery('ul.sf-menu').superfish({
    delay: 100,
    animation: {
        opacity: 'show',
        height: 'show'
    },
    speed: 'fast',
    autoArrows: true,
    dropShadows: false
})
}

/*---------------------------*/
/* Sliders + Testimonials
/*---------------------------*/
function truethemes_Sliders(){

	
//karma jquery sliders
jQuery('.jquery1-slider-wrap, .jquery2-slider-bg, .jquery3-slider-wrap').flexslider({
	slideshowSpeed: 80000000,
	pauseOnHover:   true,
	randomize:      false,
	directionNav:   true,
	animation:      'fade',
	animationSpeed: 600,
	smoothHeight: true
});

//testimonial shortcode
jQuery('.testimonials').flexslider({
	slideshowSpeed: 80000000,
	pauseOnHover:   true,
	randomize:      false,
	directionNav:   true,
	animation:      'fade',
	animationSpeed: 600,
	controlsContainer: ".testimonials",
	smoothHeight: true
});
}

/*----------------------*/
/* Tabs
/*----------------------*/
function truethemes_Tabs(){
//Added since 3.0.2 dev 4. 
//tabs init code, added with browser url sniff to get tab id to allow activating tab via link
//example url http://localhost:8888/karma-experimental/shortcodes/tabs-accordion/?tab=2

var tab_id = window.location.search.split('?tab=');
if (tab_id) {
    var tab_index = tab_id[1] - 1;
    jQuery('.tabs-area').tabs({
        show: { effect: "fadeIn" },
        hide: { effect: "fadeOut" },
        selected: tab_index
    })
} else {
    jQuery('.tabs-area').tabs({
        show: { effect: "fadeIn" },
        hide: { effect: "fadeOut" },
        selected: 0
    })
}


}


/*--------------------------------------*/
/*	Main Navigation
/*--------------------------------------*/
function truethemes_NavSetup(){var mainNav=jQuery("#menu-main-nav");var lis=mainNav.find("li");var shownav=jQuery("#menu-main-nav");lis.children("ul").wrap('<div class="c" / >');var cElems=jQuery(".c");cElems.wrap('<div class="drop" / >');jQuery(shownav).find(".sub-menu").css({display:"block"})}

function truethemes_Nav(){var e=jQuery("#menu-main-nav");var t=260;jQuery(e).find(".sub-menu").css({left:0});jQuery(e).find("> li").each(function(){var e=jQuery(this).find("> .drop").height();jQuery(this).find("> .drop").css({display:"none",height:0,overflow:"hidden"});jQuery(this).find(".drop li > .drop").css({display:"none",width:0});if(!navigator.appName=="Microsoft Internet Explorer"){jQuery(this).find("> .drop").css({opacity:0});jQuery(this).find(".drop li > .drop").css({opacity:0})}jQuery(this).mouseenter(function(){jQuery(this).addClass("hover");var n=jQuery(this).find("> .drop");if(navigator.appName=="Microsoft Internet Explorer")jQuery(n).css({display:"block"}).stop().animate({height:e},t,function(){jQuery(this).css({overflow:"visible"})});else jQuery(n).css({display:"block"}).stop().animate({height:e,opacity:1},t,function(){jQuery(this).css({overflow:"visible"})})}).mouseleave(function(){var e=jQuery(this);if(navigator.appName=="Microsoft Internet Explorer")jQuery(this).find("> .drop").stop().css({overflow:"hidden"}).animate({height:0},t,function(){jQuery(e).removeClass("hover")});else jQuery(this).find("> .drop").stop().css({overflow:"hidden"}).animate({height:0,opacity:0},t,function(){jQuery(e).removeClass("hover")})});jQuery(this).find(".drop ul > li ").mouseenter(function(){jQuery(this).addClass("hover");var e=getPageSize()[2];if(e<jQuery(this).offset().left+236*2)jQuery(this).find("> .drop").css({left:"auto",right:236});if(navigator.appName=="Microsoft Internet Explorer")jQuery(this).find("> .drop").css({display:"block"}).stop().animate({width:236},t,function(){jQuery(this).css({overflow:"visible"})});else jQuery(this).find("> .drop").css({display:"block"}).stop().animate({width:236,opacity:1},t,function(){jQuery(this).css({overflow:"visible"})})}).mouseleave(function(){jQuery(this).removeClass("hover");if(navigator.appName=="Microsoft Internet Explorer")jQuery(this).find("> .drop").stop().css({overflow:"hidden"}).animate({width:0},t,function(){jQuery(this).css({display:"none"})});else jQuery(this).find("> .drop").stop().css({overflow:"hidden"}).animate({width:0,opacity:0},t,function(){jQuery(this).css({display:"none"})})})})}function getPageSize(){var e,t;if(window.innerHeight&&window.scrollMaxY){e=document.body.scrollWidth;t=window.innerHeight+window.scrollMaxY}else if(document.body.scrollHeight>document.body.offsetHeight){e=document.body.scrollWidth;t=document.body.scrollHeight}else if(document.documentElement&&document.documentElement.scrollHeight>document.documentElement.offsetHeight){e=document.documentElement.scrollWidth;t=document.documentElement.scrollHeight}else{e=document.body.offsetWidth;t=document.body.offsetHeight}var n,r;if(self.innerHeight){n=self.innerWidth;r=self.innerHeight}else if(document.documentElement&&document.documentElement.clientHeight){n=document.documentElement.clientWidth;r=document.documentElement.clientHeight}else if(document.body){n=document.body.clientWidth;r=document.body.clientHeight}if(t<r)pageHeight=r;else pageHeight=t;if(e<n)pageWidth=n;else pageWidth=e;return[pageWidth,pageHeight,n,r]}



/*--------------------------------------*/
/*  Sticky MenuBar
/*--------------------------------------*/
function truethemes_StickyMenu() {
    jQuery('#menu-main-nav').scrollWatch(function(s) {
        s.hidden_top < 0 ? (jQuery('#B_sticky_menu').length === 0 && truethemes_doStickyMenu()) : truethemes_undoStickyMenu();
    });
}

function truethemes_doStickyMenu() {
    var $ = jQuery;
    var container = $('<div id="B_sticky_menu"></div>'),
        tool_bar_clone = $('#header .top-block').clone(true);
        header_clone = $('#header .header-holder').clone(true);

    container.append(tool_bar_clone).append(header_clone);
    container.css({
        position: 'fixed',
        left: 0,
        top: -100,
        width: '100%',
        zIndex: 100,
        opacity: 0,
        boxShadow: '0 0 4px #000',
    });
    container.find('.header-area').css({
        maxWidth: 980,
        padding: '20px 20px',
        margin: 'auto'
    });
    container.find('.logo').css({
        'float': 'left',
    });
    container.find('.header-area').children().each(function() {
        !($(this).hasClass('logo') || $(this).is('nav')) && $(this).remove();
    });
    $('body').append(container);
    container.animate({
        top: $('#wpadminbar').length === 0 ? 0 : $('#header .top-block').offset().top,
        opacity: 1
    }, 500);
}

function truethemes_undoStickyMenu() {
    jQuery('#B_sticky_menu').animate({
        top: -300,
        opacity: 0
    }, 900, function() {
        jQuery(this).remove();
    });
}


/*--------------------------------------*/
/*	Accessible Keyboard Tabbing
/*--------------------------------------*/
function truethemes_KeyboardTab() {
jQuery(function(){
    var lastKey = new Date(),
        lastClick = new Date();

    jQuery(document).on( "focusin", function(e){
        jQuery(".non-keyboard-outline").removeClass("non-keyboard-outline");
        var wasByKeyboard = lastClick < lastKey
        if( wasByKeyboard ) {
            jQuery( e.target ).addClass( "non-keyboard-outline");
        }
        
    });
    
    jQuery(document).on( "click", function(){
        lastClick = new Date();
    });
    jQuery(document).on( "keydown", function() {
        lastKey = new Date();
    });
});
}


/*--------------------------------------*/
/*	Image Fade-in
/*--------------------------------------*/
function truethemes_Fadeimages() {
    jQuery('[class^="attachment"]').each(function (index) {
        var t = jQuery('[class^="attachment"]').length;
        if (t > 0) {
            jQuery(this).delay(160 * index).fadeIn(400)
        }
    })
}


/*--------------------------------------*/
/*	Lightbox hover
/*--------------------------------------*/
function truethemes_LightboxHover(){jQuery('.lightbox-img').hover(function(){jQuery(this).children().first().children().first().stop(true);jQuery(this).children().first().children().first().fadeTo('normal',.90)},function(){jQuery(this).children().first().children().first().stop(true);jQuery(this).children().first().children().first().fadeTo('normal',0)})}


/*--------------------------------------*/
/*	Scroll to Top
/*--------------------------------------*/
function truethemes_ScrollTop() {
    jQuery('a.link-top').click(function () {
            jQuery('body').animate({
                scrollTop: 0
            }, {
                queue: false,
                duration: 1200
            });
        jQuery('html').animate({
            scrollTop: 0
        }, {
            queue: false,
            duration: 1200
        });
        return false
    })
}


/*--------------------------------------*/
/*	Sticky Sidebar
/*--------------------------------------*/
function truethemes_StickySidebar() {
/*
 Sticky-kit v1.0.2 | WTFPL | Leaf Corcoran 2013 | http://leafo.net
*/
(function(){var b,q;b=this.jQuery;q=b(window);b.fn.stick_in_parent=function(e){var u,m,f,r,B,l,C;null==e&&(e={});r=e.sticky_class;u=e.inner_scrolling;f=e.parent;m=e.offset_top;null==m&&(m=0);null==f&&(f=void 0);null==u&&(u=!0);null==r&&(r="is_stuck");B=function(a,e,l,v,y,n,s){var t,z,h,w,c,d,A,x,g,k;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);d=a.parent();null!=f&&(d=d.closest(f));if(!d.length)throw"failed to find stick parent";h=!1;g=b("<div />");A=function(){var c,b;c=parseInt(d.css("border-top-width"),
10);b=parseInt(d.css("padding-top"),10);e=parseInt(d.css("padding-bottom"),10);l=d.offset().top+c+b;v=d.height();c=h?(h=!1,a.insertAfter(g).css({position:"",top:"",width:""}),g.detach(),!0):void 0;y=a.offset().top-parseInt(a.css("margin-top"),10)-m;n=a.outerHeight(!0);s=a.css("float");g.css({width:a.outerWidth(!0),height:n,display:a.css("display"),"vertical-align":a.css("vertical-align"),float:s});if(c)return k()};A();if(n!==v)return t=!1,w=void 0,c=m,k=function(){var b,k,p,f;p=q.scrollTop();null!=
w&&(k=p-w);w=p;h?(f=p+n+c>v+l,t&&!f&&(t=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom")),p<y&&(h=!1,c=m,"left"!==s&&"right"!==s||a.insertAfter(g),g.detach(),b={position:"",width:"",top:""},a.css(b).removeClass(r).trigger("sticky_kit:unstick")),u&&(b=q.height(),n>b&&!t&&(c-=k,c=Math.max(b-n,c),c=Math.min(m,c),h&&a.css({top:c+"px"})))):p>y&&(h=!0,b={position:"fixed",top:c},b.width=a.width()+"px",a.css(b).addClass(r).after(g),"left"!==s&&"right"!==s||g.append(a),a.trigger("sticky_kit:stick"));
if(h&&(null==f&&(f=p+n+c>v+l),!t&&f))return t=!0,"static"===d.css("position")&&d.css({position:"relative"}),a.css({position:"absolute",bottom:e,top:""}).trigger("sticky_kit:bottom")},x=function(){A();return k()},z=function(){q.off("scroll",k);b(document.body).off("sticky_kit:recalc",x);a.off("sticky_kit:detach",z);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:""});d.position("position","");if(h)return a.insertAfter(g).removeClass(r),g.remove()},q.on("scroll",k),q.on("resize",x),b(document.body).on("sticky_kit:recalc",
x),a.on("sticky_kit:detach",z),setTimeout(k,0)}};l=0;for(C=this.length;l<C;l++)e=this[l],B(b(e));return this}}).call(this);

//make em' stick
jQuery("#sidebar").stick_in_parent(); //sidebar
jQuery("#sub_nav").stick_in_parent(); //sub navigation
}


/*--------------------------------------*/
/*  Mobile Menu
/*--------------------------------------*/
function truethemes_MobileMenu(){var mobileMenuClone=jQuery("#menu-main-nav").clone().attr("id","tt-mobile-menu-list");function truethemes_MobileMenu(){var windowWidth=jQuery(window).width();if(windowWidth<=767)if(!jQuery("#tt-mobile-menu-button").length){jQuery('<a id="tt-mobile-menu-button" href="#tt-mobile-menu-list"><span>Main Menu</span></a>').prependTo("#header");mobileMenuClone.insertAfter("#tt-mobile-menu-button").wrap('<div id="tt-mobile-menu-wrap" />');tt_menu_listener()}else jQuery("#tt-mobile-menu-button").css("display",
"block");else{jQuery("#tt-mobile-menu-button").css("display","none");mobileMenuClone.css("display","none")}}truethemes_MobileMenu();function tt_menu_listener(){jQuery("#tt-mobile-menu-button").click(function(e){if(jQuery("body").hasClass("ie8")){var mobileMenu=jQuery("#tt-mobile-menu-list");if(mobileMenu.css("display")==="block")mobileMenu.css({"display":"none"});else{var mobileMenu=jQuery("#tt-mobile-menu-list");mobileMenu.css({"display":"block","height":"auto","z-index":999,"position":"absolute"})}}else jQuery("#tt-mobile-menu-list").stop().slideToggle(500);
e.preventDefault()});jQuery("#tt-mobile-menu-list").find("> .menu-item").each(function(){var $this=jQuery(this),opener=$this.find("> a"),slide=$this.find("> .sub-menu")})}jQuery(window).resize(function(){truethemes_MobileMenu()});jQuery(window).load(function(){jQuery("#tt-mobile-menu-list").hide()});jQuery(document).ready(function(){jQuery("#tt-mobile-menu-list").hide()})};


/*--------------------------------------*/
/*  Mobile Menu - Left/Right Nav
/*--------------------------------------*/
function truethemes_MobileSubs(){jQuery("<select />").appendTo("#sub_nav");jQuery("<option />",{"selected":"selected","value":"","text":"Main Menu"}).appendTo("#sub_nav select");jQuery("#sub_nav a").each(function(){var el=jQuery(this);jQuery("<option />",{"value":el.attr("href"),"text":el.text()}).appendTo("#sub_nav select")});jQuery("#sub_nav select").change(function(){window.location=jQuery(this).find("option:selected").val()})};


/*--------------------------------------*/
/*	Gallery Filtering
/*--------------------------------------*/
function truethemes_Gallery() {
    jQuery('#tt-gallery-iso-wrap').isotope({
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
    jQuery('#tt-gallery-iso-wrap').isotope({
        layoutMode: 'fitRows'
    });
    jQuery('#tt-gallery-nav a').click(function () {
        var selector = jQuery(this).attr('data-filter');
        jQuery('#tt-gallery-iso-wrap').isotope({
            filter: selector
        });
        return false
    });
    jQuery('#tt-gallery-nav li > a').click(function () {
        jQuery('#tt-gallery-nav li').removeClass();
        jQuery(this).parent().addClass('active')
    })
}