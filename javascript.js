$(document).ready(function() {
    if ($('.wrong-device').css('display') === 'block') {
        $('body').css('background-color', '#7f143c'); // uses plain redwine background for wrong device message
    }
    
    if ($('.launch').css('display') === 'block') {
        $('body').addClass('redwine-gradient'); // uses redwine gradient background for launch screen
    }
});


// LAUNCH SCREEN (Caitlin)

// hide launch screen after 5 seconds
setTimeout (function() {
	$(".launch").fadeOut("slow"); 
}, 500); // <-- time in milliseconds (was 5000)
	  

// fade in user onboarding screen after 5.3 seconds
$(function(){
    if ($('.launch').css('display') === 'block') { // only if the launch screen is displayed - don't want it to fade in if wrong device message is displayed
        setTimeout (function() {
            $("#onboarding1").fadeIn("slow");
            $('body').removeClass('redwine-gradient');
            $('body').addClass('gold-gradient'); // use gold gradient background for onboarding screens
        }, 700); //(was 5300)
    }
});


// USER ONBOARDING SCREENS (Steph)

// 1st user onboarding screen, moving to 2nd user onboarding screen
$('#first-next').on('click', function() {
    $('#onboarding1').hide();
    $('#onboarding2').show();
});

// enable swiping left
$('#onboarding1').on('swipeleft', function() {
    $('#onboarding1').hide();
    $('#onboarding2').show();
});

// 2nd user onboarding screen, moving to 3rd user onboarding screen
$('#second-next').on('click', function() {
    $('#onboarding2').hide();
    $('#onboarding3').show();
});

// enable swiping right
$('#onboarding2').on('swiperight', function() {
    $('#onboarding2').hide();
    $('#onboarding1').show();
});

// enable swiping left
$('#onboarding2').on('swipeleft', function() {
    $('#onboarding2').hide();
    $('#onboarding3').show();
});

// 3rd user onboarding screen, moving to 4th (and final) user onboarding screen
$('#third-next').on('click', function() {
    $('#onboarding3').hide();
    $('#onboarding4').show();
});

// enable swiping right
$('#onboarding3').on('swiperight', function() {
    $('#onboarding3').hide();
    $('#onboarding2').show();
});

// enable swiping left
$('#onboarding3').on('swipeleft', function() {
    $('#onboarding3').hide();
    $('#onboarding4').show();
});

// when the begin button is selected, the last onboarding screen fades out
$('#begin').on('click', function() {
    $('#onboarding4').fadeOut('fast');
    $('body').removeClass('redwine-gradient');
    $('body').removeClass('gold-gradient');
    $('#home').show();
});

// enable swiping right
$('#onboarding4').on('swiperight', function() {
    $('#onboarding4').hide();
    $('#onboarding3').show();
});


// Top Navigation Grace

var isActive = false;

// toggle display for menu and changing shape of bars when menu is open
$('.js-menu').on('click', function() {
	
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
		$('nav').slideToggle('swing'); 

	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
		$('nav').slideToggle('swing'); 
	}

	isActive = !isActive;
});

$('#home-link').click(function() {
	$('#main-screen').css('display', 'block');
});

// Bottom Navigation Grace

var $li = $('.bottom-menu li').click(function() {
	$(this).toggleClass('selected'); // toggles fill
    $li.removeClass('selected'); //this changes when another element is clicked, but doesn't toggle fill
    $(this).addClass('selected');
});


// Building and Architecture - bottom nav

$('.building').click(function(){
    $('.map').removeClass('selected'); // ensure map tab isn't selected
    $('#build-map').hide(); // hide map content
    $('.favourites').removeClass('selected'); // ensure favourites tab isn't selected
    $('#building-info').toggle();
	$('#main-screen').hide();
    
    if ($('#building-info').css('display') === 'none') {
        $(this).removeClass('selected');
		$('#main-screen').show();
    }

$('#home-link').click(function() {
	$('#building-info').css('display', 'none');
	$('#main-screen').css('display', 'block');
	$('.building').removeClass('selected');
});
});

// Building map - bottom nav
$('.map').click(function(){
    $('.building').removeClass('selected');
    $('#building-info').hide();
    $('.favourites').removeClass('selected');
    $('#build-map').toggle();
    $('#main-screen').hide();
	
    if ($('#build-map').css('display') === 'none') {
        $(this).removeClass('selected');
		$('#main-screen').show();
    }
    
	$('#home-link').click(function() {
	$('#build-map').css('display', 'none');
	$('#main-screen').css('display', 'block');
	$('.map').removeClass('selected');
});
});
	

// Circle (feature) navigation
var screenWidth = window.innerWidth; // used to scale with different resolutions

$(document).ready(function(){
	$("#right-button").click(function(){
	    $(".quest-gallery").animate({
			scrollLeft: "+=" + screenWidth
			}, "slow");
	});
});
		
$(document).ready(function(){
    $("#left-button").click(function(){
        $(".quest-gallery").animate({
			scrollLeft: "-=" + screenWidth
			}, "slow");	  
	});
});

// using jquery-scrollsnap-plugin for chrome compatibility. Source:https://github.com/benoitpointet/jquery-scrollsnap-plugin */		
$(document).ready(function() {
	$('.quest-gallery').scrollsnap({
		direction: 'x',
		snaps: 'img',
		proximity: screenWidth*0.5
	});
});

// dark dot indicates visible quest
$(".quest-gallery").scroll(function(){
	
	var dotCount = $('.quest-progress').children().length;
	// applies styles to hide buttons and darken dots based on scroll distance
	jQuery.fn.darkDot = function(parameter) {
		$('.quest-progress > div').css('opacity', '0.3');	
		$('div.quest-progress div:nth-child(' + parameter + ')').css('opacity', '1');	
		if (parameter < dotCount && parameter > 0) {$('#right-button').show();	$('#left-button').show();}
		if (parameter == dotCount) {
			$('#right-button').hide(); 
		}
	}
	
    // for first feature
    if ($(".quest-gallery").scrollLeft() < 0.25*window.innerWidth) {      
    $().darkDot(1);
	$('#left-button').hide();
	$('#white-box-left').show();	
    }
	
	//white boxs covering line left of first quest cirle and right of last quest circle
	if ($(".quest-gallery").scrollLeft() > 0.25*window.innerWidth && $(".quest-gallery").scrollLeft() < ((dotCount-1.25)*window.innerWidth)) {      
	$('#white-box-left').hide();
	$('#white-box-right').hide();	
    }
	if ($(".quest-gallery").scrollLeft() > ((dotCount-1.25)*window.innerWidth)) {      
	$('#white-box-right').show();	
    }
	
	// scroll to next feature travels window.innerWidth pixels.
	// eg. scroll to third feature takes 3 * window.innerWidth pixels
	for (i = 0; i < dotCount; i++) { 
		if ($(".quest-gallery").scrollLeft() > (i+0.75)*window.innerWidth){       
		$().darkDot(2+i);
		}
	}	
});





//Quest - click to open feature 
$('#quest1-open').click(function(){
	$('#home').css('display', 'none'); 
	$('#clue-1').css('display', 'block');  
	
	$('.clue-header li img').click(function() {
	$('#clue-1').css('display', 'none');
	$('#home').css('display', 'block');
}); 
});

$('#quest2-open').click(function(){
	$('#home').css('display', 'none'); 
	$('#clue-2').css('display', 'block');   
	
	$('.clue-header li img').click(function() {
	$('#clue-2').css('display', 'none');
	$('#home').css('display', 'block');
});
});

$('#quest3-open').click(function(){
	$('#home').hide(); 
	$('#clue-3').css('display', 'block');   
	
	$('.clue-header li img').click(function() {
	$('#clue-3').css('display', 'none');
	$('#home').css('display', 'block');
});
});

$('#quest4-open').click(function(){
	$('#home').hide(); 
	$('#clue-4').css('display', 'block'); 
	
	$('.clue-header li img').click(function() {
	$('#clue-4').css('display', 'none');
	$('#home').css('display', 'block');
});  
});

$('#quest5-open').click(function(){
	$('#home').hide(); 
	$('#clue-5').css('display', 'block'); 
	
	$('.clue-header li img').click(function() {
	$('#clue-5').css('display', 'none');
	$('#home').css('display', 'block');
});  
});

$('#quest6-open').click(function(){
	$('#home').hide(); 
	$('#clue-6').css('display', 'block'); 
	
	$('.clue-header li img').click(function() {
	$('#clue-6').css('display', 'none');
	$('#home').css('display', 'block');
});  
});

$('#quest7-open').click(function(){
	$('#home').hide(); 
	$('#clue-7').css('display', 'block'); 
	
	$('.clue-header li img').click(function() {
	$('#clue-7').css('display', 'none');
	$('#home').css('display', 'block');
});  
});

$('#quest8-open').click(function(){
	$('#home').hide(); 
	$('#clue-8').css('display', 'block'); 
	
	$('.clue-header li img').click(function() {
	$('#clue-8').css('display', 'none');
	$('#home').css('display', 'block');
});  
});

$('#quest9-open').click(function(){
	$('#home').hide(); 
	$('#clue-9').css('display', 'block'); 
	
	$('.clue-header li img').click(function() {
	$('#clue-9').css('display', 'none');
	$('#home').css('display', 'block');
});  
});

// hints

$('#clue-1 .hint').click(function() {
	$('#clue-1').hide();
	$('#hint-1').show();
	
$('.hint-header li img').click(function() {
	$('#hint-1').hide();
	$('#clue-1').show();
	$('#clue-2, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').css('display', 'none');
// previously selected divs were appearing when clicking on the 'back' image
// not a great solution but only one I could get to work 
});  
});


$('#clue-2 .hint').click(function() {
	$('#clue-2').hide();
	$('#hint-2').show();
	
$('.hint-header li img').click(function() {
	$('#hint-2').hide();
	$('#clue-2').show();
	$('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').css('display', 'none');
});  
});


$('#clue-3 .hint').click(function() {
	$('#clue-3').hide();
	$('#hint-3').show();
	
$('.hint-header li img').click(function() {
	$('#hint-3').hide();
	$('#clue-3').show();
	$('#clue-1, #clue-2, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').css('display', 'none');
});  
});


$('#clue-4 .hint').click(function() {
	$('#hint-4').show();
	$('#clue-4').hide();
	
$('.hint-header li img').click(function() {
	$('#hint-4').hide();
	$('#clue-4').show();
	$('#clue-1, #clue-3, #clue-2, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').css('display', 'none');
});  
});


$('#clue-5 .hint').click(function() {
	$('#hint-5').show();
	$('#clue-5').hide();
	
$('.hint-header li img').click(function() {
	$('#hint-5').hide();
	$('#clue-5').show();
	$('#clue-1, #clue-3, #clue-4, #clue-2, #clue-6, #clue-7, #clue-8, #clue-9').css('display', 'none');
});  
});


$('#clue-6 .hint').click(function() {
	$('#hint-6').show();
	$('#clue-6').hide();
	
$('.hint-header li img').click(function() {
	$('#hint-6').hide();
	$('#clue-6').show();
	$('#clue-1, #clue-3, #clue-4, #clue-5, #clue-2, #clue-7, #clue-8, #clue-9').css('display', 'none');

});  
});


$('#clue-7 .hint').click(function() {
	$('#hint-7').show();
	$('#clue-7').hide();
	
$('.hint-header li img').click(function() {
	$('#hint-7').hide();
	$('#clue-7').show();
	$('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-2, #clue-8, #clue-9').css('display', 'none');
});  
});


$('#clue-8 .hint').click(function() {
	$('#hint-8').show();
	$('#clue-8').hide();
	
$('.hint-header li img').click(function() {
	$('#hint-8').hide();
	$('#clue-8').show();
	$('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-2, #clue-9').css('display', 'none');
});  
});


$('#clue-9 .hint').click(function() {
	$('#hint-9').show();
	$('#clue-9').hide();
	
$('.hint-header li img').click(function() {
	$('#hint-9').hide();
	$('#clue-9').show();
	$('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-2').css('display', 'none');
});  
});

$('.distance').click(function() {
	$('.distance-image').slideToggle('swing');
});

$('.room').click(function() {
	$('.hint-room').slideToggle('swing');
});
// above are just placeholder text/examples for content 

// menu Caitlin
$('#arc-cinema-open').click(function(){
	$('#home').hide(); 
	$('#arc-cinema').css('display', 'block');  
	
	$('.menu-header img').click(function() {
	$('#arc-cinema').css('display', 'none');
	$('#home').css('display', 'block');
}); 
});


