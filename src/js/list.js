	


	//鼠标移入显示左侧菜单
	$(function(){
		$('.nav_left').on("mouseenter",function(){
			$(this).find('.banner_content').css('display','block');
		}).on("mouseleave",function(){
			$(this).find('.banner_content').css('display','none');
		})
	})