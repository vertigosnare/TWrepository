$(document).ready(function() {
    if ($('.wrong-device').css('display') === 'block') {
        $('body').css('background-color', '#7f143c'); // uses plain redwine background for wrong device message
    }
    
    if ($('.launch').css('display') === 'block') {
        $('body').addClass('redwine-gradient'); // uses redwine gradient background for launch screen
    }
});


// LAUNCH SCREEN
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


// USER ONBOARDING SCREENS

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


// Top Navigation - hamburger menu

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


// Close opened hamburger menu when clicking outside of it - Rob
$(document).ready(function() {
    $('body').click(function(event){ //click event
        if ( ($(event.target).parents('#main-screen').length > 0) && (isActive == true) ){ // open burger menu, click on main-screen div and all children 
			$('.js-menu').removeClass('active');
			$('body').removeClass('menu-open');
			$('nav').slideToggle('swing');
			isActive = false; // returns to correct state
        } 
 });   
});


// Bottom Navigation - tab menu
var $li = $('.bottom-menu li').click(function() {
	$(this).toggleClass('selected'); // toggles fill
    $li.removeClass('selected'); //this changes when another element is clicked, but doesn't toggle fill
    $(this).addClass('selected');
});


// Building and Architecture - bottom nav
$('.building').click(function() {
    $('.map').removeClass('selected'); // ensure map tab isn't selected
    $('.favourites').removeClass('selected'); // ensure favourites tab isn't selected
    $('#favourites-content').hide(); // hide favourites content
    $('#build-map').hide(); // hide map content
    $('#main-screen').hide();
    
    $('#history-content').hide(); // hide the history content if shown
    // the following 'resets' the history tab within the building tab
    $('#history').removeClass('gold'); // remove gold background from architecture button
    $('#history-button').css('color', '#91732b'); // change architecture button text to black
    
    $('#architecture-content').hide(); // hide the architecture content if shown
    // the following 'resets' the architecture tab within the building tab
    $('#architecture').removeClass('gold'); // remove gold background from architecture button
    $('#architecture-button').css('color', '#91732b'); // change architecture button text to black
    
    $('#building-overview').show(); // ensures main building overview content is shown (not history/architecture content)
    $('#building-info').toggle(); // toggles the building info div (which holds the history/architecture content)
    
    // if the building info isn't displayed anymore due to toggle above
    if ($('#building-info').css('display') === 'none') {
        $(this).removeClass('selected'); // hide the building info
		$('#main-screen').show(); // show the main screen
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
    $('#favourites-content').hide();
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

// FAVOURITES TAB - bottom nav
$('.favourites').click(function() {
    $('.building').removeClass('selected');
    $('#building-info').hide();
    $('.map').removeClass('selected');
    $('#build-map').hide();
    $('#favourites-content').toggle();
    $('#main-screen').hide();
    
    if ($('#favourites-content').css('display') === 'none') {
        $(this).removeClass('selected');
		$('#main-screen').show();
    }
    
    $('#home-link').click(function() {
        $('#favourites-content').hide();
        $('#main-screen').show();
        $('.favourites').removeClass('selected');
    });
});


// History timeline - within building tab
$('#history').click(function() {
    $('#building-overview').hide(); // hide building overview section
    $('#architecture-content').hide(); // hide architecture section if shown
    // 'deselect' architecture button if selected
    $('#architecture').removeClass('gold');
    $('#architecture-button').css('color', '#91732b');
    
    $('#history').addClass('gold'); // change architecture background tab colour to dark gold
    $('#history-button').css('color', '#fff'); // change the button text to white
    
    $('#history-content').toggle();
    
    // if architecture content is not shown
    if ($('#history-content').css('display') === 'none') {
        $('#building-overview').show(); // show the main building content
        // the following 'resets' the history tab
        $('#history').removeClass('gold');
        $('#history-button').css('color', '#91732b');
    }
});

// History timeline navigation

// TIMELINE ITEM 1
$('#timeline1-right').click(function() {
    $('#timeline1').hide();
    $('#timeline2').show();
    $('#timeline1-dot').addClass('low-opacity');
    $('#timeline2-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline1').on('swipeleft', function() {
    $('#timeline1').hide();
    $('#timeline2').show();
    $('#timeline1-dot').addClass('low-opacity');
    $('#timeline2-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 2
$('#timeline2-left').click(function() {
    $('#timeline2').hide();
    $('#timeline1').show();
    $('#timeline2-dot').addClass('low-opacity');
    $('#timeline1-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline2').on('swiperight', function() {
    $('#timeline2').hide();
    $('#timeline1').show();
    $('#timeline2-dot').addClass('low-opacity');
    $('#timeline1-dot').removeClass('low-opacity');
});

$('#timeline2-right').click(function() {
    $('#timeline2').hide();
    $('#timeline3').show();
    $('#timeline2-dot').addClass('low-opacity');
    $('#timeline3-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline2').on('swipeleft', function() {
    $('#timeline2').hide();
    $('#timeline3').show();
    $('#timeline2-dot').addClass('low-opacity');
    $('#timeline3-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 3
$('#timeline3-left').click(function() {
    $('#timeline3').hide();
    $('#timeline2').show();
    $('#timeline3-dot').addClass('low-opacity');
    $('#timeline2-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline3').on('swiperight', function() {
    $('#timeline3').hide();
    $('#timeline2').show();
    $('#timeline3-dot').addClass('low-opacity');
    $('#timeline2-dot').removeClass('low-opacity');
});

$('#timeline3-right').click(function() {
    $('#timeline3').hide();
    $('#timeline4').show();
    $('#timeline3-dot').addClass('low-opacity');
    $('#timeline4-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline3').on('swipeleft', function() {
    $('#timeline3').hide();
    $('#timeline4').show();
    $('#timeline3-dot').addClass('low-opacity');
    $('#timeline4-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 4
$('#timeline4-left').click(function() {
    $('#timeline4').hide();
    $('#timeline3').show();
    $('#timeline4-dot').addClass('low-opacity');
    $('#timeline3-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline4').on('swiperight', function() {
    $('#timeline4').hide();
    $('#timeline3').show();
    $('#timeline4-dot').addClass('low-opacity');
    $('#timeline3-dot').removeClass('low-opacity');
});

$('#timeline4-right').click(function() {
    $('#timeline4').hide();
    $('#timeline5').show();
    $('#timeline4-dot').addClass('low-opacity');
    $('#timeline5-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline4').on('swipeleft', function() {
    $('#timeline4').hide();
    $('#timeline5').show();
    $('#timeline4-dot').addClass('low-opacity');
    $('#timeline5-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 5
$('#timeline5-left').click(function() {
    $('#timeline5').hide();
    $('#timeline4').show();
    $('#timeline5-dot').addClass('low-opacity');
    $('#timeline4-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline5').on('swiperight', function() {
    $('#timeline5').hide();
    $('#timeline4').show();
    $('#timeline5-dot').addClass('low-opacity');
    $('#timeline4-dot').removeClass('low-opacity');
});

$('#timeline5-right').click(function() {
    $('#timeline5').hide();
    $('#timeline6').show();
    $('#timeline5-dot').addClass('low-opacity');
    $('#timeline6-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline5').on('swipeleft', function() {
    $('#timeline5').hide();
    $('#timeline6').show();
    $('#timeline5-dot').addClass('low-opacity');
    $('#timeline6-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 6
$('#timeline6-left').click(function() {
    $('#timeline6').hide();
    $('#timeline5').show();
    $('#timeline6-dot').addClass('low-opacity');
    $('#timeline5-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline6').on('swiperight', function() {
    $('#timeline6').hide();
    $('#timeline5').show();
    $('#timeline6-dot').addClass('low-opacity');
    $('#timeline5-dot').removeClass('low-opacity');
});

$('#timeline6-right').click(function() {
    $('#timeline6').hide();
    $('#timeline7').show();
    $('#timeline6-dot').addClass('low-opacity');
    $('#timeline7-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline6').on('swipeleft', function() {
    $('#timeline6').hide();
    $('#timeline7').show();
    $('#timeline6-dot').addClass('low-opacity');
    $('#timeline7-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 7
$('#timeline7-left').click(function() {
    $('#timeline7').hide();
    $('#timeline6').show();
    $('#timeline7-dot').addClass('low-opacity');
    $('#timeline6-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline7').on('swiperight', function() {
    $('#timeline7').hide();
    $('#timeline6').show();
    $('#timeline7-dot').addClass('low-opacity');
    $('#timeline6-dot').removeClass('low-opacity');
});

$('#timeline7-right').click(function() {
    $('#timeline7').hide();
    $('#timeline8').show();
    $('#timeline7-dot').addClass('low-opacity');
    $('#timeline8-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline7').on('swipeleft', function() {
    $('#timeline7').hide();
    $('#timeline8').show();
    $('#timeline7-dot').addClass('low-opacity');
    $('#timeline8-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 8
$('#timeline8-left').click(function() {
    $('#timeline8').hide();
    $('#timeline7').show();
    $('#timeline8-dot').addClass('low-opacity');
    $('#timeline7-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline8').on('swiperight', function() {
    $('#timeline8').hide();
    $('#timeline7').show();
    $('#timeline8-dot').addClass('low-opacity');
    $('#timeline7-dot').removeClass('low-opacity');
});

$('#timeline8-right').click(function() {
    $('#timeline8').hide();
    $('#timeline9').show();
    $('#timeline8-dot').addClass('low-opacity');
    $('#timeline9-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline8').on('swipeleft', function() {
    $('#timeline8').hide();
    $('#timeline9').show();
    $('#timeline8-dot').addClass('low-opacity');
    $('#timeline9-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 9
$('#timeline9-left').click(function() {
    $('#timeline9').hide();
    $('#timeline8').show();
    $('#timeline9-dot').addClass('low-opacity');
    $('#timeline8-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline9').on('swiperight', function() {
    $('#timeline9').hide();
    $('#timeline8').show();
    $('#timeline9-dot').addClass('low-opacity');
    $('#timeline8-dot').removeClass('low-opacity');
});

$('#timeline9-right').click(function() {
    $('#timeline9').hide();
    $('#timeline10').show();
    $('#timeline9-dot').addClass('low-opacity');
    $('#timeline10-dot').removeClass('low-opacity');
});

// enable swiping left
$('#timeline9').on('swipeleft', function() {
    $('#timeline9').hide();
    $('#timeline10').show();
    $('#timeline9-dot').addClass('low-opacity');
    $('#timeline10-dot').removeClass('low-opacity');
});

// TIMELINE ITEM 10
$('#timeline10-left').click(function() {
    $('#timeline10').hide();
    $('#timeline9').show();
    $('#timeline10-dot').addClass('low-opacity');
    $('#timeline9-dot').removeClass('low-opacity');
});

// enable swiping right
$('#timeline10').on('swiperight', function() {
    $('#timeline10').hide();
    $('#timeline9').show();
    $('#timeline10-dot').addClass('low-opacity');
    $('#timeline9-dot').removeClass('low-opacity');
});




// Architecture - within building tab
$('#architecture').click(function() {
    $('#building-overview').hide(); // hide building overview section
    $('#history-content').hide(); // hide architecture section if shown
    // 'deselect' architecture button if selected
    $('#history').removeClass('gold');
    $('#history-button').css('color', '#91732b');
    
    $('#architecture').addClass('gold'); // change architecture background tab colour to dark gold
    $('#architecture-button').css('color', '#fff'); // change the button text to white
    
    $('#architecture-content').toggle();
    
    // if architecture content is not shown
    if ($('#architecture-content').css('display') === 'none') {
        $('#building-overview').show(); // show the main building content
        // the following 'resets' the architecture tab
        $('#architecture').removeClass('gold');
        $('#architecture-button').css('color', '#91732b');
    }                         
});


	
// Circle (feature) navigation - Rob
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




// Click to open features

// Feature 1
$('#quest1-open').click(function() {
    
    // determine whether to show clue or 'features found' page
    if ($('#redwine-circle1').css('display') === 'none') { // if the red circle is not displaying (meaning the gold is showing because the features already been found)
        $('#home').hide(); // hide home screen
        $('#feature1-found').show(); // go straight to 'features found' page
    } else {
        $('#home').hide(); // hide the home screen
        $('#clue-1').show(); // display feature 1 clue
    }
	
	$('.clue-header li img').click(function() { // if back arrow is clicked
        $('#clue-1').hide(); // hide the feature 1 clue
        $('#confirm-show').hide(); // hide the 'are you sure you want to be shown the feature' screen
        $('#confirm-found').hide(); // hide the 'are you sure you've found the feature' screen
        $('#home').show(); // show the home screen
    });
});

// Feature 2
$('#quest2-open').click(function() {
	if ($('#redwine-circle2').css('display') === 'none') {
        $('#home').hide();
        $('#feature2-found').show();
    } else {
        $('#home').hide();
        $('#clue-2').show();
    }  
	
	$('.clue-header li img').click(function() {
        $('#clue-2').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });
});

// Feature 3
$('#quest3-open').click(function() {
	if ($('#redwine-circle3').css('display') === 'none') {
        $('#home').hide();
        $('#feature3-found').show();
    } else {
        $('#home').hide();
        $('#clue-3').show();
    }    
	
	$('.clue-header li img').click(function() {
        $('#clue-3').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });
});

// Feature 4
$('#quest4-open').click(function() {
	if ($('#redwine-circle4').css('display') === 'none') {
        $('#home').hide();
        $('#feature4-found').show();
    } else {
        $('#home').hide();
        $('#clue-4').show();
    }
	
	$('.clue-header li img').click(function() {
        $('#clue-4').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });  
});

// Feature 5
$('#quest5-open').click(function() {
	if ($('#redwine-circle5').css('display') === 'none') {
        $('#home').hide();
        $('#feature5-found').show();
    } else {
        $('#home').hide();
        $('#clue-5').show();
    } 
	
	$('.clue-header li img').click(function() {
        $('#clue-5').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });  
});

// Feature 6
$('#quest6-open').click(function() {
	if ($('#redwine-circle6').css('display') === 'none') {
        $('#home').hide();
        $('#feature6-found').show();
    } else {
        $('#home').hide();
        $('#clue-6').show();
    }  
	
	$('.clue-header li img').click(function() {
        $('#clue-6').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });  
});

// Feature 7
$('#quest7-open').click(function() {
	if ($('#redwine-circle7').css('display') === 'none') {
        $('#home').hide();
        $('#feature7-found').show();
    } else {
        $('#home').hide();
        $('#clue-7').show();
    }  
	
	$('.clue-header li img').click(function() {
        $('#clue-7').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });  
});

// Feature 8
$('#quest8-open').click(function() {
	if ($('#redwine-circle8').css('display') === 'none') {
        $('#home').hide();
        $('#feature8-found').show();
    } else {
        $('#home').hide();
        $('#clue-8').show();
    }   
	
	$('.clue-header li img').click(function() {
        $('#clue-8').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });  
});

// Feature 9
$('#quest9-open').click(function() {
	if ($('#redwine-circle9').css('display') === 'none') {
        $('#home').hide();
        $('#feature9-found').show();
    } else {
        $('#home').hide();
        $('#clue-9').show();
    }  
	
	$('.clue-header li img').click(function() {
        $('#clue-9').hide();
        $('#confirm-show').hide();
        $('#confirm-found').hide();
        $('#home').show();
    });  
});


// Hints

// Hints for Feature 1
$('#clue-1 .hint').click(function() {
	$('#clue-1').hide();
	$('#hint-1').show();
	
    $('.hint-header li img').click(function() {
        $('#hint-1').hide();
	    $('#clue-1').show();
        $('.distance-image').hide(); // hide the distance hint if shown
        $('.hint-room').hide(); // hide the location hint if shown
        $('.blurred-photo').hide(); // hide the blurred photo hint if shown
	    $('#clue-2, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').hide();
        // previously selected divs were appearing when clicking on the 'back' image
        // not a great solution but only one I could get to work 
    });  
});

// Hints for Feature 2
$('#clue-2 .hint').click(function() {
	$('#clue-2').hide();
	$('#hint-2').show();
	
    $('.hint-header li img').click(function() {
        $('#hint-2').hide();
        $('#clue-2').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
        $('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').hide();
    });  
});

// Hints for Feature 3
$('#clue-3 .hint').click(function() {
	$('#clue-3').hide();
	$('#hint-3').show();
	
    $('.hint-header li img').click(function() {
        $('#hint-3').hide();
        $('#clue-3').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
        $('#clue-1, #clue-2, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').hide();
    });  
});

// Hints for Feature 4
$('#clue-4 .hint').click(function() {
	$('#hint-4').show();
	$('#clue-4').hide();
	
    $('.hint-header li img').click(function() {
        $('#hint-4').hide();
        $('#clue-4').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
        $('#clue-1, #clue-3, #clue-2, #clue-5, #clue-6, #clue-7, #clue-8, #clue-9').hide();
    });  
});

// Hints for Feature 5
$('#clue-5 .hint').click(function() {
	$('#hint-5').show();
	$('#clue-5').hide();
	
    $('.hint-header li img').click(function() {
        $('#hint-5').hide();
	    $('#clue-5').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
	    $('#clue-1, #clue-3, #clue-4, #clue-2, #clue-6, #clue-7, #clue-8, #clue-9').hide();
    });  
});

// Hints for Feature 6
$('#clue-6 .hint').click(function() {
	$('#hint-6').show();
	$('#clue-6').hide();
	
    $('.hint-header li img').click(function() {
        $('#hint-6').hide();
        $('#clue-6').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
        $('#clue-1, #clue-3, #clue-4, #clue-5, #clue-2, #clue-7, #clue-8, #clue-9').hide();
    });  
});

// Hints for Feature 7
$('#clue-7 .hint').click(function() {
	$('#hint-7').show();
	$('#clue-7').hide();
	
    $('.hint-header li img').click(function() {
        $('#hint-7').hide();
	    $('#clue-7').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
	    $('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-2, #clue-8, #clue-9').hide();
    });  
});

// Hints for Feature 8
$('#clue-8 .hint').click(function() {
	$('#hint-8').show();
	$('#clue-8').hide();
	
    $('.hint-header li img').click(function() {
        $('#hint-8').hide();
        $('#clue-8').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
        $('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-2, #clue-9').hide();
    });  
});

// Hints for Feature 9
$('#clue-9 .hint').click(function() {
	$('#hint-9').show();
	$('#clue-9').hide();
	
    $('.hint-header li img').click(function() {
        $('#hint-9').hide();
	    $('#clue-9').show();
        $('.distance-image').hide();
        $('.hint-room').hide();
        $('.blurred-photo').hide();
	    $('#clue-1, #clue-3, #clue-4, #clue-5, #clue-6, #clue-7, #clue-8, #clue-2').hide();
    });  
});


// DISTANCE HINT
$('.distance').click(function() {
	//add this to generate distance
	getLocation();
	coordA[1]; // using 1 as test. feature 1 is array[0] so fix when adding more 
	$('.distance-image').slideToggle('swing');
});

// LOCATION HINT
$('.room').click(function() {
	$('.hint-room').slideToggle('swing');
});

//BLURRED PHOTO HINT
$('.photo').click(function() {
    $('.blurred-photo').slideToggle('swing');
});


// HAMBURGER MENU PAGES

// Arc Cinema page
$('#arc-cinema-open').click(function() {
	$('#home').hide(); // hide the home screen
	$('#arc-cinema').show(); // show the arc cinema page
    // hide the hamburger menu if item within it is clicked - IMPORTANT for user experience
    $('.js-menu').removeClass('active');
    $('body').removeClass('menu-open');
    $('nav').slideToggle('swing');
    isActive = false; // returns to correct state
	
	$('.menu-header img').click(function() { // if cross is clicked
	   $('#arc-cinema').hide(); // hide the arc cinema page
	   $('#home').show(); // show the home screen
    }); 
});

// Ghost Tour page


// About the NFSA page


// Contact page



// GEOLOCATION

var myCoordAB = document.getElementById("distance-calculation");
// coordinates for features - replace these and add the coordinatates of the 9 features to this array 
var coordA = [-35.192001999999995, -35.1813205, -35.1813467];
var coordB = [149.1149054, 149.0901401, 149.0900963];


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        myCoordAB.innerHTML = "Geolocation is unavailable.";
    }
}

// formula from http://www.geodatasource.com/developers/javascript under LGPLv3 licence
// tested coordA[1] coordB[1] & coordA[2] coordB[2], 5 meters within my house. checked on online calculator aswell
function showPosition(position) {
	
	var radlat1 = Math.PI * position.coords.latitude/180
	var radlat2 = Math.PI * coordA[1]/180
	var theta = position.coords.longitude-coordB[1]
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515 * 1.609344 * 1000
	// math.round can be applied here	
	myCoordAB.innerHTML = Math.round(dist) + " meters"; 
}
	
// http://andrew.hedges.name/experiments/haversine/
// Haversine Formula. will try this formula as an alternative
/*
function showPosition(position) {
	
var dlon = position.coords.longitude - coordB[1]
var dlat = position.coords.latitude - coordA[1]
var a = Math.pow((Math.sin(dlat*0.5)), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow((Math.sin(dlon*0.5)), 2)
var c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1-a) )
var d = 6373 * c

myCoordAB.innerHTML = d;

}
*/


// Confirmation Screens - 'are you sure' screens for found it and show me options

// FOUND IT FROM THE CLUE SCREEN

$('.found-it').click(function() {
	$('#confirm-found').show(); // show confirmation screen
});

// if not found (answer 'no'), hide confirmation screen
$('#confirm-found .no').click(function() {
	$('#confirm-found').hide();
});

// if confirm 'yes' found
$('#confirm-found .yes').click(function() {
    
    // if clue for Feature 1 is shown   
    if ($('#clue-1').css('display') === 'block') {
        $('#feature1-found').show();
        $('#clue-1').hide();
        $('#confirm-found').hide();
        
        // update redwine circle feature to show as gold - 'unlocked'
        $('#redwine-circle1').hide();
        $('#gold-circle1').show();
        $('#h2-feature1').html('1<br>Frilled neck lizards in boomerangs'); // update h2 text on the circle to read this instead of 'feature 1'
        $('#h2-feature1').addClass('update-text'); // add new CSS to the h2 text
        $('#encourage').html("That's it!"); // update the encourage <p> underneath 'make these walls talk'
    }
    
    // if clue for Feature 2 is shown
    if ($('#clue-2').css('display') === 'block') {
        $('#feature2-found').show();
        $('#clue-2').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle2').hide();
        $('#gold-circle2').show();
        $('#h2-feature2').html('2<br>Suspended light fittings');
        $('#h2-feature2').addClass('update-text feature2-position-update');
        $('#encourage').html('Well spotted!');
    }
    
    // if clue for Feature 3 is shown
    if ($('#clue-3').css('display') === 'block') {
        $('#feature3-found').show();
        $('#clue-3').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle3').hide();
        $('#gold-circle3').show();
        $('#h2-feature3').html('3<br>Geometrically patterned marble floor');
        $('#h2-feature3').addClass('update-text feature3-position-update');
        $('#encourage').html('Good find!');
    }
    
    // if clue for Feature 4 is shown
    if ($('#clue-4').css('display') === 'block') {
        $('#feature4-found').show();
        $('#clue-4').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle4').hide();
        $('#gold-circle4').show();
        $('#h2-feature4').html('4<br>Stained glass platypus skylight');
        $('#h2-feature4').addClass('update-text feature4-position-update');
        $('#encourage').html("You're pretty good at this!");
    }
    
    // if clue for Feature 5 is shown
    if ($('#clue-5').css('display') === 'block') {
        $('#feature5-found').show();
        $('#clue-5').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle5').hide();
        $('#gold-circle5').show();
        $('#h2-feature5').html('5<br>Sir Colin MacKenzie plaque');
        $('#h2-feature5').addClass('update-text feature5-position-update');
        $('#encourage').html('Seems like this is too easy for you!');
    }
    
    // if clue for Feature 6 is shown
    if ($('#clue-6').css('display') === 'block') {
        $('#feature6-found').show();
        $('#clue-6').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle6').hide();
        $('#gold-circle6').show();
        $('#h2-feature6').html('6<br>Bronze cast scupltures');
        $('#h2-feature6').addClass('update-text feature6-position-update');
        $('#encourage').html('How are your photos looking?');
    }
    
    // if clue for Feature 7 is shown
    if ($('#clue-7').css('display') === 'block') {
        $('#feature7-found').show();
        $('#clue-7').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle7').hide();
        $('#gold-circle7').show();
        $('#h2-feature7').html('7<br>Theatrette');
        $('#h2-feature7').addClass('update-text feature7-position-update');
        $('#encourage').html("Didn't realise it was this cool, huh?");
    }
    
    // if clue for Feature 8 is shown
    if ($('#clue-8').css('display') === 'block') {
        $('#feature8-found').show();
        $('#clue-8').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle8').hide();
        $('#gold-circle8').show();
        $('#h2-feature8').html('8<br>Memorial fishpond');
        $('#h2-feature8').addClass('update-text feature8-position-update');
        $('#encourage').html("Nice out here, isn't it?");
    }
    
    // if clue for Feature 9 is shown
    if ($('#clue-9').css('display') === 'block') {
        $('#feature9-found').show();
        $('#clue-9').hide();
        $('#confirm-found').hide();
        
        $('#redwine-circle9').hide();
        $('#gold-circle9').show();
        $('#h2-feature9').html('9<br>Wombat heads within plaques');
        $('#h2-feature9').addClass('update-text feature9-position-update');
        $('#encourage').html("C'mon, share your photos!");
    }
    
});


// SHOW ME FROM THE CLUE SCREEN

$('.show-me').click(function() {
	$('#confirm-show').show(); // show confirmation screen
});

// if don't want to be shown (answer 'no'), hide confirmation screen
$('#confirm-show .no').click(function(){
	$('#confirm-show').hide();
});

// if confirm 'yes' show me
$('#confirm-show .yes').click(function() {
    
    // if clue for Feature 1 is shown   
    if ($('#clue-1').css('display') === 'block') {
        $('#feature1-found').show();
        $('#clue-1').hide();
        $('#confirm-show').hide();
        
        // update redwine circle feature to show as gold - 'unlocked'
        $('#redwine-circle1').hide();
        $('#gold-circle1').show();
        $('#h2-feature1').html('1<br>Frilled neck lizards in boomerangs');
        $('#h2-feature1').addClass('update-text');
        $('#encourage').html("That's it!"); // update the encourage <p> underneath 'make these walls talk'
    }
    
    // if clue for Feature 2 is shown
    if ($('#clue-2').css('display') === 'block') {
        $('#feature2-found').show();
        $('#clue-2').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle2').hide();
        $('#gold-circle2').show();
        $('#h2-feature2').html('2<br>Suspended light fittings');
        $('#h2-feature2').addClass('update-text feature2-position-update');
        $('#encourage').html('Well spotted!');
    }
    
    // if clue for Feature 3 is shown
    if ($('#clue-3').css('display') === 'block') {
        $('#feature3-found').show();
        $('#clue-3').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle3').hide();
        $('#gold-circle3').show();
        $('#h2-feature3').html('3<br>Geometrically patterned marble floor');
        $('#h2-feature3').addClass('update-text feature3-position-update');
        $('#encourage').html('Good find!');
    }
    
    // if clue for Feature 4 is shown
    if ($('#clue-4').css('display') === 'block') {
        $('#feature4-found').show();
        $('#clue-4').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle4').hide();
        $('#gold-circle4').show();
        $('#h2-feature4').html('4<br>Stained glass platypus skylight');
        $('#h2-feature4').addClass('update-text feature4-position-update');
        $('#encourage').html("You're pretty good at this!");
    }
    
    // if clue for Feature 5 is shown
    if ($('#clue-5').css('display') === 'block') {
        $('#feature5-found').show();
        $('#clue-5').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle5').hide();
        $('#gold-circle5').show();
        $('#h2-feature5').html('5<br>Sir Colin MacKenzie plaque');
        $('#h2-feature5').addClass('update-text feature5-position-update');
        $('#encourage').html('Seems like this is too easy for you!');
    }
    
    // if clue for Feature 6 is shown
    if ($('#clue-6').css('display') === 'block') {
        $('#feature6-found').show();
        $('#clue-6').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle6').hide();
        $('#gold-circle6').show();
        $('#h2-feature6').html('6<br>Bronze cast scupltures');
        $('#h2-feature6').addClass('update-text feature6-position-update');
        $('#encourage').html('How are your photos looking?');
    }
    
    // if clue for Feature 7 is shown
    if ($('#clue-7').css('display') === 'block') {
        $('#feature7-found').show();
        $('#clue-7').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle7').hide();
        $('#gold-circle7').show();
        $('#h2-feature7').html('7<br>Theatrette');
        $('#h2-feature7').addClass('update-text feature7-position-update');
        $('#encourage').html("Didn't realise it was this cool, huh?");
    }
    
    // if clue for Feature 8 is shown
    if ($('#clue-8').css('display') === 'block') {
        $('#feature8-found').show();
        $('#clue-8').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle8').hide();
        $('#gold-circle8').show();
        $('#h2-feature8').html('8<br>Memorial fishpond');
        $('#h2-feature8').addClass('update-text feature8-position-update');
        $('#encourage').html("Nice out here, isn't it?");
    }
    
    // if clue for Feature 9 is shown
    if ($('#clue-9').css('display') === 'block') {
        $('#feature9-found').show();
        $('#clue-9').hide();
        $('#confirm-show').hide();
        
        $('#redwine-circle9').hide();
        $('#gold-circle9').show();
        $('#h2-feature9').html('9<br>Wombat heads within plaques');
        $('#h2-feature9').addClass('update-text feature9-position-update');
        $('#encourage').html("C'mon, share your photos!");
    }
    
});


// FAVOURITING FEATURES

var numberOfFav = 0; // variable to determine the number of favourited items

// favourite Feature 1
$('#favourite-no-fill-feature1').click(function() {
    $(this).hide(); // hide the heart with no fill
    $('#favourite-fill-feature1').show(); // show the filled heart to indicate this has been favourited
    $('#fav-feature1').show(); // add feature 1 to favourites list
    numberOfFav++; // add one to number of favourites
    noFav();
});

// favourite Feature 2
$('#favourite-no-fill-feature2').click(function() {
    $(this).hide();
    $('#favourite-fill-feature2').show();
    $('#fav-feature2').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 3
$('#favourite-no-fill-feature3').click(function() {
    $(this).hide();
    $('#favourite-fill-feature3').show();
    $('#fav-feature3').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 4
$('#favourite-no-fill-feature4').click(function() {
    $(this).hide();
    $('#favourite-fill-feature4').show();
    $('#fav-feature4').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 5
$('#favourite-no-fill-feature5').click(function() {
    $(this).hide();
    $('#favourite-fill-feature5').show();
    $('#fav-feature5').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 6
$('#favourite-no-fill-feature6').click(function() {
    $(this).hide();
    $('#favourite-fill-feature6').show();
    $('#fav-feature6').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 7
$('#favourite-no-fill-feature7').click(function() {
    $(this).hide();
    $('#favourite-fill-feature7').show();
    $('#fav-feature7').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 8
$('#favourite-no-fill-feature8').click(function() {
    $(this).hide();
    $('#favourite-fill-feature8').show();
    $('#fav-feature8').show();
    numberOfFav++;
    noFav();
});

// favourite Feature 9
$('#favourite-no-fill-feature9').click(function() {
    $(this).hide();
    $('#favourite-fill-feature9').show();
    $('#fav-feature9').show();
    numberOfFav++;
    noFav();
});


// UNFAVOURITING FEATURES

// Unfavouriting from 'features found' page

// unfavourite Feature 1
$('#favourite-fill-feature1').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature1').show();
    $('#fav-feature1').hide(); // hide feature 1 from favourites list
    numberOfFav--; // subtract one from number of favourites
    noFav(); // run no favourites function to see if there are now 0 favourites, if there are none, the function will show the 'no favourites' div
});

// unfavourite Feature 2
$('#favourite-fill-feature2').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature2').show();
    $('#fav-feature2').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 3
$('#favourite-fill-feature3').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature3').show(); 
    $('#fav-feature3').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 4
$('#favourite-fill-feature4').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature4').show();
    $('#fav-feature4').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 5
$('#favourite-fill-feature5').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature5').show();
    $('#fav-feature5').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 6
$('#favourite-fill-feature6').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature6').show();
    $('#fav-feature6').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 7
$('#favourite-fill-feature7').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature7').show();
    $('#fav-feature7').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 8
$('#favourite-fill-feature8').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature8').show();
    $('#fav-feature8').hide();
    numberOfFav--;
    noFav();
});

// unfavourite Feature 9
$('#favourite-fill-feature9').click(function() {
    $(this).hide();
    $('#favourite-no-fill-feature9').show();
    $('#fav-feature9').hide();
    numberOfFav--;
    noFav();
});

// Unfavouriting directly from favourites list

// Unfavouriting Feature 1 from list
$('#favourite-list-fill-feature1').click(function() {
    $('#fav-feature1').hide(); // hide feature 1 from favourites list
    $('#favourite-fill-feature1').hide(); // hide fill heart on 'features found' page
    $('#favourite-no-fill-feature1').show(); // show no-fill heart on 'features found' page
    event.stopPropagation(); // to stop the event bubbling to the parent div
    numberOfFav--; // subtract one from number of favourites
    noFav(); // run no favourites function to see if there are now 0 favourites, if there are none, the function will show the 'no favourites' div
});

// Unfavouriting Feature 2 from list
$('#favourite-list-fill-feature2').click(function() {
    $('#fav-feature2').hide();
    $('#favourite-fill-feature2').hide();
    $('#favourite-no-fill-feature2').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 3 from list
$('#favourite-list-fill-feature3').click(function() {
    $('#fav-feature3').hide();
    $('#favourite-fill-feature3').hide();
    $('#favourite-no-fill-feature3').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 4 from list
$('#favourite-list-fill-feature4').click(function() {
    $('#fav-feature4').hide();
    $('#favourite-fill-feature4').hide();
    $('#favourite-no-fill-feature4').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 5 from list
$('#favourite-list-fill-feature5').click(function() {
    $('#fav-feature5').hide();
    $('#favourite-fill-feature5').hide();
    $('#favourite-no-fill-feature5').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 6 from list
$('#favourite-list-fill-feature6').click(function() {
    $('#fav-feature6').hide();
    $('#favourite-fill-feature6').hide();
    $('#favourite-no-fill-feature6').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 7 from list
$('#favourite-list-fill-feature7').click(function() {
    $('#fav-feature7').hide();
    $('#favourite-fill-feature7').hide();
    $('#favourite-no-fill-feature7').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 8 from list
$('#favourite-list-fill-feature8').click(function() {
    $('#fav-feature8').hide();
    $('#favourite-fill-feature8').hide();
    $('#favourite-no-fill-feature8').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});

// Unfavouriting Feature 9 from list
$('#favourite-list-fill-feature9').click(function() {
    $('#fav-feature9').hide();
    $('#favourite-fill-feature9').hide();
    $('#favourite-no-fill-feature9').show();
    event.stopPropagation();
    numberOfFav--;
    noFav();
});


// FAVOURITES FUNCTION

// show 'no favourites' div if no features are favourited
function noFav() {
    if (numberOfFav === 0) {
        $('#no-fav').show();    
    } else {
        $('#no-fav').hide();
    }
}


// FAVOURITES LIST AS A SHORTCUT TO 'FEATURES FOUND' INFO PAGE

// Clicking Feature 1 from favourites list
$('#fav-feature1').click(function() {
    $('#home').hide(); // hide the home screen
    $('#feature1-found').show(); // show the features found page for Feature 1
});

// Clicking Feature 2 from favourites list
$('#fav-feature2').click(function() {
    $('#home').hide();
    $('#feature2-found').show();
});

// Clicking Feature 3 from favourites list
$('#fav-feature3').click(function() {
    $('#home').hide();
    $('#feature3-found').show();
});

// Clicking Feature 4 from favourites list
$('#fav-feature4').click(function() {
    $('#home').hide();
    $('#feature4-found').show();
});

// Clicking Feature 5 from favourites list
$('#fav-feature5').click(function() {
    $('#home').hide();
    $('#feature5-found').show();
});

// Clicking Feature 6 from favourites list
$('#fav-feature6').click(function() {
    $('#home').hide();
    $('#feature6-found').show();
});

// Clicking Feature 7 from favourites list
$('#fav-feature7').click(function() {
    $('#home').hide();
    $('#feature7-found').show();
});

// Clicking Feature 8 from favourites list
$('#fav-feature8').click(function() {
    $('#home').hide();
    $('#feature8-found').show();
});

// Clicking Feature 9 from favourites list
$('#fav-feature9').click(function() {
    $('#home').hide();
    $('#feature9-found').show();
});


// CLOSE FEATURES FOUND PAGE using x

$('.close-found').click(function() {
    
    // Close 'feature 1 found' screen if shown
    if ($('#feature1-found').css('display') === 'block') {
        $('#feature1-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 2 found' screen if shown
    if ($('#feature2-found').css('display') === 'block') {
        $('#feature2-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 3 found' screen if shown
    if ($('#feature3-found').css('display') === 'block') {
        $('#feature3-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 4 found' screen if shown
    if ($('#feature4-found').css('display') === 'block') {
        $('#feature4-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 5 found' screen if shown
    if ($('#feature5-found').css('display') === 'block') {
        $('#feature5-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 6 found' screen if shown
    if ($('#feature6-found').css('display') === 'block') {
        $('#feature6-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 7 found' screen if shown
    if ($('#feature7-found').css('display') === 'block') {
        $('#feature7-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 8 found' screen if shown
    if ($('#feature8-found').css('display') === 'block') {
        $('#feature8-found').hide();
        $('#home').show();
    }
    
    // Close 'feature 9 found' screen if shown
    if ($('#feature9-found').css('display') === 'block') {
        $('#feature9-found').hide();
        $('#home').show();
    }
});



//INSTAFEED FOR FEATURES FOUND

//Feature 1
var NFSAfrontFeed = new Instafeed({
    target: 'NFSAfront',
    get: 'tagged',
    tagName: 'NFSAfront',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAfrontFeed.run();

//Feature 2
var NFSAgeometricFeed = new Instafeed({
    target: 'NFSAgeometric',
    get: 'tagged',
    tagName: 'NFSAgeometric',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAgeometricFeed.run();

//Feature 3
var NFSAquarryFeed = new Instafeed({
    target: 'NFSAquarry',
    get: 'tagged',
    tagName: 'NFSAquarry',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAquarryFeed.run();

//Feature 4
var NFSAluxferFeed = new Instafeed({
    target: 'NFSAluxfer',
    get: 'tagged',
    tagName: 'NFSAluxfer',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAluxferFeed.run();

//Feature 5
var NFSAcolinFeed = new Instafeed({
    target: 'NFSAcolin',
    get: 'tagged',
    tagName: 'NFSAcolin',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAcolinFeed.run();

//Feature 6
var NFSAbronzeFeed = new Instafeed({
    target: 'NFSAbronze',
    get: 'tagged',
    tagName: 'NFSAbronze',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAbronzeFeed.run();

//Feature 7
var NFSAredFeed = new Instafeed({
    target: 'NFSAred',
    get: 'tagged',
    tagName: 'NFSAred',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAredFeed.run();

//Feature 8
var NFSAladyFeed = new Instafeed({
    target: 'NFSAlady',
    get: 'tagged',
    tagName: 'NFSAlady',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAladyFeed.run();

//Feature 9 
var NFSAarchFeed = new Instafeed({
    target: 'NFSAarch',
    get: 'tagged',
    tagName: 'NFSAarch',
    clientId: '1cb4e751c51849d6b9c31feb243d0582',
    accessToken: '14121461.ba4c844.7650653627624e89a5b92ab26e839094',
    limit: 10,
});
    NFSAarchFeed.run();