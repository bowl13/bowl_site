$(document).ready(function(){
	function playslider(){
	        //$('#bg_01').fadeIn(800).delay(2000).fadeOut(2000);
	        
	        $('#bg_02').fadeIn(800).delay(3000).fadeOut(2000);
	        
	        $('#bg_03').delay(2000).fadeIn(800).delay(3000).fadeOut(2000, playslider);
	}   
	playslider();
});	