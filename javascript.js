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
            $('body').addClass('gold-gradient'); // use gold gradient background for onboarding screens
        }, 5300);
    }
});


// USER ONBOARDING SCREENS (Steph)

// 1st user onboarding screen, moving to 2nd user onboarding screen
$('#first-next').on('click touchstart', function() {
    $('#onboarding1').css('display', 'none');
    $('#onboarding2').css('display', 'block');
});

// swiping left is also an acceptable way to navigate
$('#onboarding1').on('swipeleft', function(){
    this.hide('slide', {direction: 'left'}, 1000);
    $('#onboarding2').show('slide', {direction: 'right'}, 1000);
});


// 2nd user onboarding screen, moving to 3rd user onboarding screen
$('#second-next').on('click touchstart', function() {
    $('#onboarding2').css('display', 'none');
    $('#onboarding3').css('display', 'block');
});

// 3rd user onboarding screen, moving to 4th (and final) user onboarding screen
$('#third-next').on('click touchstart', function() {
    $('#onboarding3').css('display', 'none');
    $('#onboarding4').css('display', 'block');
});

// when the begin button is selected, the last onboarding screen fades out
$('#begin').on('click touchstart', function() {
    $('#onboarding4').fadeOut();
    $('body').removeClass('redwine-gradient');
    $('body').removeClass('gold-gradient');
});