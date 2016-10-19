var isShow = false;
$(function() {
	$('.to-top').click(function(e) {
		$('body').animate({
			scrollTop: 0
		}, 500, function() {
		});
	})
});

$(window).scroll(function(e) {
	var ScrollTop = $('body').scrollTop(),
	      toTop = $('.to-top');
	if (!isShow&& ScrollTop > 200) {
		isShow = true;
		toTop.show().addClass('enter');// 显示按钮和动画

		setTimeout(function() { //移除动画属性
			toTop.removeClass('enter');
		}, 200);
	} else if (isShow && ScrollTop < 200) {
		isShow = false;
		toTop.addClass('leave');//显示动画
		setTimeout(function() {//移除动画属性并隐藏
			toTop.removeClass('leave').hide();
		}, 200);
	}
});
