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
});
   

$('#home-link').click(function() {
	$('#building-info').css('display', 'none');
	$('#main-screen').css('display', 'block');
	$('.building').removeClass('selected');
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




// Quest - click to open feature 
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


// Hints
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
	//add this to generate distance
	getLocation();
	coordA[1]; // using 1 as test. feature 1 is array[0] so fix when adding more 
	$('.distance-image').slideToggle('swing');
});

$('.room').click(function() {
	$('.hint-room').slideToggle('swing');
});
// above are just placeholder text/examples for content 

// Arc Cinema page - menu Caitlin
$('#arc-cinema-open').click(function(){
	$('#home').hide(); 
	$('#arc-cinema').show();  
	
	$('.menu-header img').click(function() {
	   $('#arc-cinema').hide();
	   $('#home').show();
    }); 
});


// Geolocation
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


// Confirmation Screens
$('.found-it').click(function() {
	$('#confirm-found').show();
});

$('#confirm-found .no').click(function() {
	$('#confirm-found').hide();
}); 

$('.show-me').click(function() {
	$('#confirm-show').show();
});

$('#confirm-show .no').click(function(){
	$('#confirm-show').hide();
});







