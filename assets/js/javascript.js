$(window).on("load",function(){
	$("#loading").fadeOut("slow");
	$("#content").fadeIn("slow",function(){
		$('.welcome').fadeIn("slow");
	});
});
// UNTUK SCROLL MENU
var menu = 0;
function homeclick(){
	if($(window).scrollTop() >0){
	   $('html, body').animate({
	      scrollTop: $("#homediv").offset().top
	  }, 1000);
	}
   	menu = 0;
}


function productclick(){
	if(menu !=2){
		if($(window).scrollTop() >= $(window).height()){
		   $('html, body').animate({
		      scrollTop: $("#productdiv").offset().top
		  }, 1000);
		}
		else{
			$('html, body').animate({
		      scrollTop: $("#productdiv").offset().top-56
		  }, 1000);
		}
	}
	else if($(window).scrollTop() > $(window).height()*2||$(window).scrollTop() < $(window).height()*2){
   		if($(window).scrollTop() >= $(window).height()){
	   		$('html, body').animate({
	      		scrollTop: $("#productdiv").offset().top
	  		}, 1000);
	   	}
	   	else{
	   		$('html, body').animate({
	      		scrollTop: $("#productdiv").offset().top-56
	  		}, 1000);
	   	}
   	}
	menu = 2;
};
function featureclidk(){
	if(menu != 3){
		if($(window).scrollTop() >= $(window).height()){
	   		$('html, body').animate({
	      		scrollTop: $("#featurediv").offset().top
	 		}, 1000);
		}
		else{
	   		$('html, body').animate({
	      		scrollTop: $("#featurediv").offset().top-56
	 		}, 1000);
		}
	}

	else if($(window).scrollTop() > $(window).height()*3||$(window).scrollTop() < $(window).height()*3){
   		if($(window).scrollTop() >= $(window).height()){
	   		$('html, body').animate({
	      		scrollTop: $("#featurediv").offset().top
	  		}, 1000);
	   	}
	   	else{
	   		$('html, body').animate({
	      		scrollTop: $("#featurediv").offset().top-56
	  		}, 1000);
	   	}
   	}
	menu = 3;
};

function contactclick(){
	if(menu != 5){
		if($(window).scrollTop() >= $(window).height()){
	   		$('html, body').animate({
	      		scrollTop: $("#contactdiv").offset().top
	  		}, 1000);
		}
		else{
	   		$('html, body').animate({
	      		scrollTop: $("#contactdiv").offset().top-56
	  		}, 1000);
		}
	}
	else if($(window).scrollTop() > $(window).height()*5||$(window).scrollTop() < $(window).height()*5){
   		if($(window).scrollTop() >= $(window).height()){
	   		$('html, body').animate({
	      		scrollTop: $("#contactdiv").offset().top
	  		}, 1000);
	   	}
	   	else{
	   		$('html, body').animate({
	      		scrollTop: $("#contactdiv").offset().top-56
	  		}, 1000);
	   	}
   	}
	menu = 5;
};
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
function sendmail(){
	$('.err-name').text('');
	$('.err-phone').text('');
	$('.err-email').text('');
	$('.err-message').text('');
	var err = 0;
	if($('.name-txt').val().length==0){
		$('.err-name').text('*(REQUIRED)');
		err=1;
	}
	if($('.phone-txt').val().length!=0){
		if(!$.isNumeric($('.phone-txt').val())){
			$('.err-phone').text('*(MUST BE NUMBER)');
			err=1;
		}
	}
	if($('.email-txt').val().length==0){
		$('.err-email').text('*(REQUIRED)');
		err=1;
	}
	else if(!isValidEmailAddress($('.email-txt').val())){
		$('.err-email').text('*(EMAIL IS NOT VALID)');
		err=1;
	}
	if($('.message-txt').val().length==0){
		$('.err-message').text('*(REQUIRED)');
		err=1;
	}
	if(err==0){
		$.ajax({
	       url:'mail',
	       type: 'POST',
	       data:{
	       			'name' : $('.name-txt').val(),
	       			'phone' : $('.phone-txt').val(),
	       			'email' : $('.email-txt').val(),
	       			'message' : $('.message-txt').val()
	       		},
	       success: function(data){
	        	var json = $.parseJSON(data);
	        	if(json.errormail){
	        		alert(json.mail);
	        	}
	        	else if(json.error){
	        		alert('Something is suspicious');
	        	}
	        	else if(!json.error){
					$('.err-name').text('');
					$('.err-phone').text('');
					$('.err-email').text('');
					$('.err-message').text('');
					$('.name-txt').val('');
	       			$('.phone-txt').val('');
	       			$('.email-txt').val('');
	       			$('.message-txt').val('');
	        		alert(json.text);
	        	}
	       }
	   });
	}
}

$(document).ready(function(){
	$(window).ready(function(){
		$('.facebookButton').click(function(){
			window.open("https://www.facebook.com/boscaupvc/");
		});
		$('.instagramButton').click(function(){
			window.open("https://www.instagram.com/boscaupvc/");
		});
		// UNTUK NAVBAR FIX TOP
		if ($(window).scrollTop() >= $(window).height()) {
	      $('#navbar').addClass('fixed-top');
	    }

	    if ($(window).scrollTop() < $(window).height()) {
	      $('#navbar').removeClass('fixed-top');
	    }

		// UNTUK ICON SOSMED HOVER
		$(".facebook").mouseover(function (e) {    
		    $(this).attr("src", $(this).attr("src").replace("facebook", "fhover"));
		}).mouseout(function (e) {
		    $(this).attr("src", $(this).attr("src").replace("fhover", "facebook"));
		});
		$(".twitter").mouseover(function (e) {    
		    $(this).attr("src", $(this).attr("src").replace("twitter", "thover"));
		}).mouseout(function (e) {
		    $(this).attr("src", $(this).attr("src").replace("thover", "twitter"));
		});
		$(".instagram").mouseover(function (e) {    
		    $(this).attr("src", $(this).attr("src").replace("instagram", "ihover"));
		}).mouseout(function (e) {
		    $(this).attr("src", $(this).attr("src").replace("ihover", "instagram"));
		});
	});
	$(window).resize(function() {
	    $('.fulldiv').css('min-height',$(window).height());
	});
	$(window).trigger('resize');
	$(window).scroll(function () {
	    if ($(window).scrollTop() >= $(window).height()) {
	      $('#navbar').addClass('fixed-top');
	    }

	    if ($(window).scrollTop() < $(window).height()) {
	      $('#navbar').removeClass('fixed-top');
	    }
	});

});