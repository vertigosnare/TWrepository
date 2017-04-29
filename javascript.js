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
}, 5000); // <-- time in milliseconds
	  

// fade in user onboarding screen after 5.3 seconds
$(function(){
    if ($('.launch').css('display') === 'block') { // only if the launch screen is displayed - don't want it to fade in if wrong device message is displayed
        setTimeout (function() {
            $("#onboarding1").fadeIn("slow");
            $('body').removeClass('redwine-gradient');
            $('body').addClass('gold-gradient'); // use gold gradient background for onboarding screens
        }, 5300);
    }
});


// USER ONBOARDING SCREENS (Steph)

// 1st user onboarding screen, moving to 2nd user onboarding screen
$('#first-next').on('click', function() {
    $('#onboarding1').css('display', 'none');
    $('#onboarding2').css('display', 'block');
});

// enable swiping left
$('#onboarding1').on('swipeleft', function() {
    $('#onboarding1').hide();
    $('#onboarding2').show();
});

// 2nd user onboarding screen, moving to 3rd user onboarding screen
$('#second-next').on('click', function() {
    $('#onboarding2').css('display', 'none');
    $('#onboarding3').css('display', 'block');
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
    $('#onboarding3').css('display', 'none');
    $('#onboarding4').css('display', 'block');
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
    $('#home').css('display', 'block');
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
    
    if ($('#building-info').css('display') === 'none') {
        $(this).removeClass('selected');
    }
    
});

// Building map - bottom nav
$('.map').click(function(){
    $('.building').removeClass('selected');
    $('#building-info').hide();
    $('.favourites').removeClass('selected');
    $('#build-map').toggle();
    
    if ($('#build-map').css('display') === 'none') {
        $(this).removeClass('selected');
    }
    
});

