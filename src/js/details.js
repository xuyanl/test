
	$(function(){
		//鼠标移入显示左侧菜单
		$('.nav_left').on("mouseenter",function(){
			$(this).find('.banner_content').css('display','block');
		}).on("mouseleave",function(){
			$(this).find('.banner_content').css('display','none');
		});


		//点击切换图片
		var $ul = $('.product_show').find('.small_show').find('ul');
		$('.product_show').find('.small_show').find('a').on('click',function(){
			if($(this).hasClass('left_scr')){
				$ul.css('marginLeft',0);
			}
			else if($(this).hasClass('right_scr')){
				$ul.css('marginLeft',-120);
			}
		})

		//鼠标移入小图切换大图
		var $small_show = $('.product_show').find('.show_left').find('.small_show');
		$small_show.find('.items').find('ul').find('li').on('mouseenter',function(){
			var $src = $(this).find('img').attr('src');
			$small_show.prev().find('.big_show img').attr('src',$src);
			$small_show.prev().find('.show_prv img').attr('src',$src);
		});


		//更多活动
		var $activity = $('.product_show').find('.show_center').find('.activity');
		$activity.find('.more_act').on('mouseenter',function(){
			$(this).next('.act_none').fadeIn('fast');
		}).next('.act_none').on('click','a',function(){
			$(this).parent().css('display','none');
		});


		//点击选择购买数量
		var cont = parseInt($activity.next('.sele').find('.numb').find('input').val());
		$activity.next('.sele').find('.numb').find('.btn_add').on('click',function(){
				cont = cont+1;
				$(this).prev('input').val(cont);
		}).next('.btn_down').on('click',function(){
			if(cont>1){
				cont = cont-1;
				$(this).prevAll('input').val(cont);
			}
		});

		//放大镜
		var $bigshow = $('.product_show').find('.big_show');//放正常图片的div
		var $img = $bigshow.find('img');//正常图片；
		var $drag = $bigshow.find('.drag');//遮罩层;
		var $showprv = $bigshow.next('.show_prv');//放大镜的div;
		var $showimg = $showprv.find('img');//放大镜图片；
		multiple = $showprv.width()/$drag.width();
		
		
		$bigshow.on('mousemove',function(e){
			//console.log(e.pageX,e.pageY);
			$drag.css('display','block');
			$showprv.css('display','block');
			//获取坐标
			var iX = e.pageX - $(this).offset().left - $drag.width()/2;
		   		iY = e.pageY - $(this).offset().top - $drag.height()/2;	
		   		MaxX = $(this).width()-$drag.width(),
		   		MaxY = $(this).height()-$drag.height();
		   		//console.log(iX,iY)
		   	iX = iX > 0 ? iX : 0;
		   	iX = iX < MaxX ? iX : MaxX;
		   	iY = iY > 0 ? iY : 0;
		   	iY = iY < MaxY ? iY : MaxY;	
		   	$drag.css({left:iX,top:iY});   		
		   	$showimg.css({left:-iX*multiple,top:-iY*multiple});
		})
	})
	
