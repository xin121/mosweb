$("img").lazyload({
	threshold: 100,
	failurelimit: 10
})

$('.proTitle').hover(function() {
	$(this).addClass('active').siblings().removeClass('active');
	var index = $('.hd .proTitle').index(this);
	$('.bd .bdList').eq(index).addClass('active').siblings().removeClass('active');
})

$('.case-box').hover(function() {
	var _this = $(this);
	_this.addClass('active').siblings().removeClass('active');

	var str = _this.children('img').attr('src');
	var subStr = new RegExp('nor'); //创建正则表达式对象
	var result = str.replace(subStr, "prs");
	_this.children('img').attr('src', result);

	_this.siblings().children('img').each(function() {
		var sibImg = $(this).attr('src');
		var sibStr = new RegExp('prs');
		var sibResult = sibImg.replace(sibStr, "nor");
		$(this).attr('src', sibResult);
	})

	if(str.indexOf('prs') > 0) return;
	var maxStr = new RegExp('nor|prs');
	var maxResult = str.replace(maxStr, "bg");
	$('.case-bg img').attr('src', maxResult).addClass('fadeIn');
	
}, function() {
	$('.case-bg img').removeClass('fadeIn');
})


$('.minImg a img').hover(function() {
	$(this).parents('a').addClass('active').siblings().removeClass('active');
	$('.maxImg img').attr('src', $(this).attr("src"));
	if($(this).attr("data-text") == '') {
		$('.maxImg p').addClass('hidden');
	} else {
		$('.maxImg p').removeClass('hidden');
		$('.maxImg p').text($(this).attr("data-text"));
	}

})


$('.secList').hover(function() {
	$(this).addClass('active').children('.bg-color').removeClass('hidden');
}, function() {
	$(this).removeClass('active').children('.bg-color').addClass('hidden');
})
//获取年
var date = new Date,
	year = date.getFullYear();
$(".beizhu span").text(year);

//导航
var setTime;
$('.sub-li').hover(function() {
	$(this).addClass('sub-active').siblings('.sub-li').removeClass('sub-active');
}, function() {
	var _this = $(this);
	setTime = setTimeout(function() {
		_this.removeClass('sub-active');
	}, 50)
})


$('.sub-nav').hover(function() {
	clearTimeout(setTime);
	$(this).parent('.sub-li').addClass('sub-active');
})