/*
		 Ahern 
u3120296 Blaszkowski
		 Brink
		 Searson
*/

/* TABLE OF CONTENTS
	0. Local Storage
	1. LAUNCH SCREEN
	2. USER ONBOARDING SCREENS
	3. Top Navigation - hamburger menu 
	4. Bottom Navigation - tab menu 
	5. History timeline - within building tab 
	6. Architecture - within building tab 
	7. Circle (feature) navigation
	9. Click to open features 
	9. HAMBURGER MENU PAGES
	10. Confirmation Screens
	11. SHOW ME FROM THE CLUE SCREEN 
	12. FAVOURITING FEATURES 
	13. CLOSE FEATURES FOUND PAGE using x		
	14. REFERENCES
*/




$(document).ready(function() {
    if ($('.wrong-device').css('display') === 'block') {
        $('body').css('background-color', '#7f143c'); // uses plain redwine background for wrong device message
    }
    
    if ($('.launch').css('display') === 'block') {
        $('body').addClass('redwine-gradient'); // uses redwine gradient background for launch screen
    }
});

//////////////////////////////////////////////////
// Local Storage. Save/Clear Progress - by Rob //
////////////////////////////////////////////////

// SAVE FOUND FEATURES
// 0 = red circle                     
// 1 = gold circle
var featureState = [];
featureState[18] = 0;

// Retrieve Array
// Store array in local storage using JSON.stringify(). Retrieve using JSON.parse()
var storedState = JSON.parse(localStorage.getItem("FeaturesFound")); //featuresFound is name given to what we have stored
// Prepares local storage
if (storedState == null){
		featureState[0] = 0;
		featureState[1] = 0;
		featureState[2] = 0;
		featureState[3] = 0;
		featureState[4] = 0;
		featureState[5] = 0;
		featureState[6] = 0;
		featureState[7] = 0;
		featureState[8] = 0;
		featureState[9] = 0;
		featureState[10] = 0;
		featureState[11] = 0;
		featureState[12] = 0;
		featureState[13] = 0;
		featureState[14] = 0;
		featureState[15] = 0;
		featureState[16] = 0;
		featureState[17] = 0;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
		location.reload();
}
// test saved slots with this window.alert(storedState);
// Apply found/unfound on next loadup
// Feature states are set in 'FOUND IT FROM THE CLUE SCREEN' code section

if(storedState != null){ //chrome does not care, other browsers need this 
    if (storedState[0] == 1){
    //styles feature circle as done in code
		$('#redwine-circle1').hide();
        $('#gold-circle1').show();
        $('#h2-feature1').html('1<br>Frilled neck lizards in boomerangs'); // update h2 text on the circle to read this instead of 'feature 1'
        $('#h2-feature1').addClass('update-text'); // add new CSS to the h2 text
        $('#encourage').html("That's it!"); // update the encourage <p> underneath 'make these walls talk'
    }
	
	if (storedState[1] == 1){
		$('#redwine-circle2').hide();
        $('#gold-circle2').show();
        $('#h2-feature2').html('2<br>Suspended light fittings');
        $('#h2-feature2').addClass('update-text feature2-position-update');
        $('#encourage').html('Well spotted!');	
	}
	if (storedState[2] == 1){
		$('#redwine-circle3').hide();
        $('#gold-circle3').show();
        $('#h2-feature3').html('3<br>Geometrically patterned marble floor');
        $('#h2-feature3').addClass('update-text feature3-position-update');
        $('#encourage').html('Good find!');
	}
	if (storedState[3] == 1){
		$('#redwine-circle4').hide();
        $('#gold-circle4').show();
        $('#h2-feature4').html('4<br>Stained glass platypus skylight');
        $('#h2-feature4').addClass('update-text feature4-position-update');
        $('#encourage').html("You're pretty good at this!");
	}
	if (storedState[4] == 1){
		$('#redwine-circle5').hide();
        $('#gold-circle5').show();
        $('#h2-feature5').html('5<br>Sir Colin MacKenzie plaque');
        $('#h2-feature5').addClass('update-text feature5-position-update');
        $('#encourage').html('Too easy for you?');
	}
	if (storedState[5] == 1){
	    $('#redwine-circle6').hide();
        $('#gold-circle6').show();
        $('#h2-feature6').html('6<br>Bronze cast scupltures');
        $('#h2-feature6').addClass('update-text feature6-position-update');
        $('#encourage').html('How are your photos looking?');
	}
	if (storedState[6] == 1){
	    $('#redwine-circle7').hide();
        $('#gold-circle7').show();
        $('#h2-feature7').html('7<br>Theatrette');
        $('#h2-feature7').addClass('update-text feature7-position-update');
        $('#encourage').html("Pretty cool, huh?");
	}
	if (storedState[7] == 1){
	    $('#redwine-circle8').hide();
        $('#gold-circle8').show();
        $('#h2-feature8').html('8<br>Memorial fishpond');
        $('#h2-feature8').addClass('update-text feature8-position-update');
        $('#encourage').html("Nice out here, isn't it?");
	}
	if (storedState[8] == 1){
	    $('#redwine-circle9').hide();
        $('#gold-circle9').show();
        $('#h2-feature9').html('9<br>Wombat heads within plaques');
        $('#h2-feature9').addClass('update-text feature9-position-update');
        $('#encourage').html("C'mon, share your photos!");
	}
	
// SAVE FAVOURITES
// saved under featureState[9]-[17]
// 0 = not favourited                     
// 1 = favourited


if (storedState[9] == 1){
	$('#favourite-no-fill-1').hide();
	$('#favourite-fill-1').show(); 
    $('#fav-feature1').show(); 
    numberOfFav++; 
    noFav();
	}

if (storedState[10] == 1){
	$('#favourite-no-fill-2').hide();
	$('#favourite-fill-2').show(); 
    $('#fav-feature2').show(); 
    numberOfFav++; 
    noFav();    
	}

if (storedState[11] == 1){
	$('#favourite-no-fill-3').hide();
	$('#favourite-fill-3').show(); 
    $('#fav-feature3').show(); 
    numberOfFav++; 
    noFav();      
	}

if (storedState[12] == 1){
	$('#favourite-no-fill-4').hide();
	$('#favourite-fill-4').show(); 
    $('#fav-feature4').show(); 
    numberOfFav++; 
    noFav();     
	}	
	
if (storedState[13] == 1){
	$('#favourite-no-fill-5').hide();
	$('#favourite-fill-5').show(); 
    $('#fav-feature5').show(); 
    numberOfFav++; 
    noFav();      
	}

if (storedState[14] == 1){
	$('#favourite-no-fill-6').hide();
	$('#favourite-fill-6').show(); 
    $('#fav-feature6').show(); 
    numberOfFav++; 
    noFav();    
	}	
	
if (storedState[15] == 1){
	$('#favourite-no-fill-7').hide();
	$('#favourite-fill-7').show(); 
    $('#fav-feature7').show(); 
    numberOfFav++; 
    noFav();     
	}

if (storedState[16] == 1){
	$('#favourite-no-fill-8').hide();
	$('#favourite-fill-8').show(); 
    $('#fav-feature8').show(); 
    numberOfFav++; 
    noFav();       
	}	
	
if (storedState[17] == 1){
	$('#favourite-no-fill-9').hide();
	$('#favourite-fill-9').show(); 
    $('#fav-feature9').show(); 
    numberOfFav++; 
    noFav();      
	}
}

//CLEAR DATA BUTTON	
$('#reset-open').click(function() {
		featureState[0] = 0;
		featureState[1] = 0;
		featureState[2] = 0;
		featureState[3] = 0;
		featureState[4] = 0;
		featureState[5] = 0;
		featureState[6] = 0;
		featureState[7] = 0;
		featureState[8] = 0;
		featureState[9] = 0;
		featureState[10] = 0;
		featureState[11] = 0;
		featureState[12] = 0;
		featureState[13] = 0;
		featureState[14] = 0;
		featureState[15] = 0;
		featureState[16] = 0;
		featureState[17] = 0;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
		location.reload(); //reload the page to reset
});			



////////////////////
// LAUNCH SCREEN //
//////////////////

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



//////////////////////////////
// USER ONBOARDING SCREENS //
////////////////////////////

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

//////////////////////////////////////
// Top Navigation - hamburger menu //
////////////////////////////////////

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

// Close opened hamburger menu when clicking outside of it - by Rob 
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

///////////////////////////////////
// Bottom Navigation - tab menu //
/////////////////////////////////

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

/////////////////////////////////////////////
// History timeline - within building tab //
///////////////////////////////////////////

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
/////////////////////////////////////////
// Architecture - within building tab //
///////////////////////////////////////

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


///////////////////////////////////////////
// Circle (feature) navigation - by Rob //
/////////////////////////////////////////

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

// to emulate css scroll snap on all browsers
// using jquery-scrollsnap-plugin for chrome compatibility. 
// source(1):https://github.com/benoitpointet/jquery-scrollsnap-plugin		
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


	
/////////////////////////////	
// Click to open features //
///////////////////////////
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


// LOCATION HINT
$('.room').click(function() {
	$('.hint-room').slideToggle('swing');
});

//BLURRED PHOTO HINT
$('.photo').click(function() {
    $('.blurred-photo').slideToggle('swing');
});

///////////////////////////
// HAMBURGER MENU PAGES //
/////////////////////////

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
$('#ghost-tour-open').click(function() {
	$('#home').hide(); // hide the home screen
	$('#ghost-tour').show(); // show the arc cinema page
    // hide the hamburger menu if item within it is clicked - IMPORTANT for user experience
    $('.js-menu').removeClass('active');
    $('body').removeClass('menu-open');
    $('nav').slideToggle('swing');
    isActive = false; // returns to correct state
	
	$('.menu-header img').click(function() { // if cross is clicked
	   $('#ghost-tour').hide(); // hide the arc cinema page
	   $('#home').show(); // show the home screen
    }); 
});



// About the NFSA page
$('#about-open').click(function() {
	$('#home').hide(); // hide the home screen
	$('#about').show(); // show the arc cinema page
    // hide the hamburger menu if item within it is clicked - IMPORTANT for user experience
    $('.js-menu').removeClass('active');
    $('body').removeClass('menu-open');
    $('nav').slideToggle('swing');
    isActive = false; // returns to correct state
	
	$('.menu-header img').click(function() { // if cross is clicked
	   $('#about').hide(); // hide the arc cinema page
	   $('#home').show(); // show the home screen
    }); 
});


// Contact page
$('#contact-open').click(function() {
	$('#home').hide(); // hide the home screen
	$('#contact').show(); // show the arc cinema page
    // hide the hamburger menu if item within it is clicked - IMPORTANT for user experience
    $('.js-menu').removeClass('active');
    $('body').removeClass('menu-open');
    $('nav').slideToggle('swing');
    isActive = false; // returns to correct state
	
	$('.menu-header img').click(function() { // if cross is clicked
	   $('#contact').hide(); // hide the arc cinema page
	   $('#home').show(); // show the home screen
    }); 
});

/////////////////////////
// GEOLOCATION by Rob //
///////////////////////

// coordinates for each feature (lat/long from the NFSA)
var latitude = [-35.282655241584806, -35.28246611126384, -35.283181936745315, -35.283181936745315, -35.28296980359901, -35.28246611126384, -35.2829540144241, -35.28239144458315, -35.283078512819344 ];
var longitude = [149.11541180186788, 149.11613145278247, 149.12283897097055, 149.12283897097055, 149.12166393529665, 149.11613145278247, 149.12167378965185, 149.11543088793593, 149.12182702397993 ];
var myDistance = 0;
var myLatitude = 0;
var myLongitude = 0;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.getElementById(myDistance).innerHTML = "Geolocation is unavailable";
    }
}
// the formula used to calculate shortest distance between 2 points over the earth's surface 
// source(2): http://www.geodatasource.com/developers/javascript (under LGPLv3 licence)
function showPosition(position) {
	var radlat1 = Math.PI * position.coords.latitude/180
	var radlat2 = Math.PI * myLatitude/180
	var theta = position.coords.longitude-myLongitude
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515 * 1.609344 * 1000 //convert to meters
	document.getElementById(myDistance).innerHTML = Math.round(dist) + " meters"; 	
}

// DISTANCE every click calculates distance
$('#distance1').click(function() {
	myLatitude = latitude[0];	
	myLongitude = longitude[0];
	myDistance = "distance-calculation1";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance2').click(function() {
	myLatitude = latitude[1];	
	myLongitude = longitude[1];
	myDistance = "distance-calculation2";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance3').click(function() {
	myLatitude = latitude[2];	
	myLongitude = longitude[2];
	myDistance = "distance-calculation3";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance4').click(function() {
	myLatitude = latitude[3];	
	myLongitude = longitude[3];
	myDistance = "distance-calculation4";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance5').click(function() {
	myLatitude = latitude[4];	
	myLongitude = longitude[4];
	myDistance = "distance-calculation5";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance6').click(function() {
	myLatitude = latitude[5];	
	myLongitude = longitude[5];
	myDistance = "distance-calculation6";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance7').click(function() {
	myLatitude = latitude[6];	
	myLongitude = longitude[6];
	myDistance = "distance-calculation7";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

$('#distance8').click(function() {
	myLatitude = latitude[7];	
	myLongitude = longitude[7];
	myDistance = "distance-calculation8";
	getLocation();
$('.distance-image').slideToggle('swing');	
});

$('#distance9').click(function() {
	myLatitude = latitude[8];	
	myLongitude = longitude[8];
	myDistance = "distance-calculation9";
	getLocation();
	$('.distance-image').slideToggle('swing');
});

///////////////////////////
// Confirmation Screens //
/////////////////////////

// 'are you sure' screens for found it and show me options 
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
		
		featureState = storedState;
		featureState[0] = 1;
	
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); //
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
		
		featureState = storedState;
		featureState[1] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
		
		featureState = storedState;
		featureState[2] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
		
		featureState = storedState;
		featureState[3] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
        $('#encourage').html('Too easy for you?');

		featureState = storedState;
		featureState[4] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
		
		featureState = storedState;
		featureState[5] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
        $('#encourage').html("Pretty cool, huh?");
		
		featureState = storedState;
		featureState[6] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
		
		featureState = storedState;
		featureState[7] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
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
		
		featureState = storedState;
		featureState[8] = 1;												 
		
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState)); 
    }
    
});

///////////////////////////////////
// SHOW ME FROM THE CLUE SCREEN //
/////////////////////////////////

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
        $('#encourage').html('Too easy for you?');
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
        $('#encourage').html("Pretty cool, huh?");
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

///////////////////////////
// FAVOURITING FEATURES //
/////////////////////////
// edits by Rob

var numberOfFav = 0; // variable to determine the number of favourited items

// favourite Feature 1
$('#favourite-toggle-1').click(function() {
	if (storedState[9]==0 || storedState == null){
		$('#favourite-no-fill-1').hide();
		$('#favourite-fill-1').show(); // show the filled heart to indicate this has been favourited
		$('#fav-feature1').show(); // add feature 1 to favourites list
		numberOfFav++; // add one to number of favourites
		noFav();
		featureState = storedState;
		featureState[9] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-1').hide();
		$('#favourite-no-fill-1').show();
		$('#fav-feature1').hide(); // hide feature 1 from favourites list
		numberOfFav--; // subtract one from number of favourites
		noFav(); // run no favourites function to see if there are now 0 favourites, if there are none, the function will show the 'no favourites' div
		featureState = storedState;
		featureState[9] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 2
$('#favourite-toggle-2').click(function() {
	if (storedState[10]==0 || storedState == null){
		$('#favourite-no-fill-2').hide();
		$('#favourite-fill-2').show(); 
		$('#fav-feature2').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[10] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-2').hide();
		$('#favourite-no-fill-2').show();
		$('#fav-feature2').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[10] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 3
$('#favourite-toggle-3').click(function() {
	if (storedState[11]==0 || storedState == null){
		$('#favourite-no-fill-3').hide();
		$('#favourite-fill-3').show(); 
		$('#fav-feature3').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[11] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-3').hide();
		$('#favourite-no-fill-3').show();
		$('#fav-feature3').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[11] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 4
$('#favourite-toggle-4').click(function() {
	if (storedState[12]==0 || storedState == null){
		$('#favourite-no-fill-4').hide();
		$('#favourite-fill-4').show(); 
		$('#fav-feature4').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[12] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-4').hide();
		$('#favourite-no-fill-4').show();
		$('#fav-feature4').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[12] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 5
$('#favourite-toggle-5').click(function() {
	if (storedState[13]==0 || storedState == null){
		$('#favourite-no-fill-5').hide();
		$('#favourite-fill-5').show(); 
		$('#fav-feature5').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[13] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-5').hide();
		$('#favourite-no-fill-5').show();
		$('#fav-feature5').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[13] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 6
$('#favourite-toggle-6').click(function() {
	if (storedState[14]==0 || storedState == null){
		$('#favourite-no-fill-6').hide();
		$('#favourite-fill-6').show(); 
		$('#fav-feature6').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[14] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-6').hide();
		$('#favourite-no-fill-6').show();
		$('#fav-feature6').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[14] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 7
$('#favourite-toggle-7').click(function() {
	if (storedState[15]==0 || storedState == null){
		$('#favourite-no-fill-7').hide();
		$('#favourite-fill-7').show(); 
		$('#fav-feature7').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[15] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-7').hide();
		$('#favourite-no-fill-7').show();
		$('#fav-feature7').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[15] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 8
$('#favourite-toggle-8').click(function() {
	if (storedState[16]==0 || storedState == null){
		$('#favourite-no-fill-8').hide();
		$('#favourite-fill-8').show(); 
		$('#fav-feature8').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[16] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-8').hide();
		$('#favourite-no-fill-8').show();
		$('#fav-feature8').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[16] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
});

// favourite Feature 9
$('#favourite-toggle-9').click(function() {
	if (storedState[17]==0 || storedState == null){
		$('#favourite-no-fill-9').hide();
		$('#favourite-fill-9').show(); 
		$('#fav-feature9').show(); 
		numberOfFav++; 
		noFav();
		featureState = storedState;
		featureState[17] = 1;
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
	else {
		$('#favourite-fill-9').hide();
		$('#favourite-no-fill-9').show();
		$('#fav-feature9').hide(); 
		numberOfFav--; 
		noFav(); 
		featureState = storedState;
		featureState[17] = 0; 
		localStorage.setItem("FeaturesFound", JSON.stringify(featureState));
	}
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

////////////////////////////////////////
// CLOSE FEATURES FOUND PAGE using x //
//////////////////////////////////////

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

/////////////////
// REFERENCES //
///////////////
/*
(1) Benoitpointet.(2014).jquery-scrollsnap-plugin. Github. Retrieved 16 May 2017, from https://github.com/benoitpointet/jquery-scrollsnap-plugin	
(2) GeoDataSource.com (2015). Sample Codes (JavaScript). GeoDataSource. Retrieved 16 May 2017, from http://www.geodatasource.com/developers/javascript
*/


