// JavaScript Document


// Loading Screen Caitlin

// hiding loading div
setTimeout (function() {
	$(".hiding").fadeOut("slow"); 
}, 5000); // <-- time in milliseconds
	  

	  
// 	showing user onboarding screen using fadeIn
$(function(){

	$(".showingnextscreen").hide(); // hide div before it can fade in 
  
	setTimeout (function() {
		$(".showingnextscreen").fadeIn("slow"); 
	}, 5500);
	
});