$(function() {
	var length = $('.moerSec .secList').length;
	var objwidth = $('.moerSec .secList').width();
	var clickFalse = false;
	var clickPverFalse = false;
	$('.moerSec').css('width', objwidth * length);
	$('.next-btn').click(function() {
		x = $(".moerSec").position();
		var baseLeft = x.left;
		var objLeft = baseLeft - objwidth;
		var clickNext = (Math.abs(parseInt(objLeft)) < (objwidth * length - objwidth * 4) || Math.abs(parseInt(objLeft)) == (objwidth * length - objwidth * 4))
		if(clickNext && !clickFalse) {
			$(".moerSec").animate({
				left: objLeft
			});
		} else {
			if(objLeft != (-280)) {
				clickFalse = true;
				$('.pver-btn').click();
			} else {
				clickFalse = false;
				$(".moerSec").animate({
					left: objLeft
				});
			}
		}

	})
	$('.pver-btn').click(function() {
		x = $(".moerSec").position();
		var baseLeft = x.left;
		var objLeft = baseLeft + objwidth;
		if(baseLeft != 0 && !clickPverFalse) {
			$(".moerSec").animate({
				left: objLeft
			});
		} else {
			if(baseLeft == 0 || Math.abs(parseInt(objLeft)) != (objwidth * length - objwidth * 4 - 280)) {
				$('.next-btn').click();
				clickPverFalse = true;
			} else if(baseLeft != 0) {
				clickPverFalse = false;
				$(".moerSec").animate({
					left: objLeft
				});
			}
		}

	})
})