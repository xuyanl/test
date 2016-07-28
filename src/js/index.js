    
$(function(){
        //banner图片轮播
        var $banner_pic = $('.banner_pic');
        var $ul_pic = $('.ul_pic');
        var $button = $banner_pic.find('a');
        var index = 0;
        var imgs = $ul_pic.find('li');
        var timer;
        show();
        $banner_pic.on('mouseleave',function(){
            timer = setInterval(foucs,3000);

        }).trigger('mouseleave');
        $banner_pic.on('mouseover',function(){
            clearInterval(timer);
        });
        // 点击左右按钮实现图片跳转
        
        $('.prev').on('click',function(){
            index--;
            show();
        });
        $('.next').on('click',function(){
            index++;
            show();
        })
        $('.sl_nav span').on('click',function(){
            index=$(this).index();
            show();
        })
        function foucs(){
			//
            index++;
            show();
        };
        function show(){
			if(index<0){
                index=imgs.length-1;
            }else if(index>imgs.length-1){
                index=0;
            }
            imgs.eq(index).animate({opacity:1}).siblings().animate({opacity:0});
            $('.sl_nav span').eq(index).addClass('select').siblings().removeClass();

        };


        //顶部导航
       /* $(window).on('scroll',function(){
                var scrollTop = $(window).scrollTop();
                // 1>滚动距离大于600，显示楼层导航，小于600时隐藏
                if(scrollTop > 600){
                    $('.search_top').fadeIn('slow');//600
                }else{
                    $('.search_top').fadeOut('fast');//200
                }*/
        

        //楼梯和顶部导航显示隐藏

        var $nav = $('.floor_nav');
        var $floor = $('.main .floors');

            // 2）滚动
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();
            // 1>滚动距离大于600，显示楼层导航，小于600时隐藏
            if(scrollTop > 600){
                $nav.fadeIn('slow');//600
                //顶部导航显示
                $('.search_top').slideDown('slow');
            }else{
                $nav.fadeOut('fast');//200
                //顶部导航隐藏
                $('.search_top').slideUp('fast');
            }

            // 2>滚动到某一楼层时，高亮显示导航对应楼层
            // 得到当前楼层的index值
            $floor.each(function(idx,ele){
                if(scrollTop >= $(ele).offset().top && scrollTop < $(ele).offset().top + $(ele).outerHeight()/2){
                    $nav.find('li').not('.floor_nav_last').removeClass('hover').eq(idx).addClass('hover');

                    // 退出循环
                    return false;
                }
            });
        });
            
            // 3）点击楼层导航，跳转到相应楼层
            $nav.on('click','li',function(){
                var index = $(this).index();
                var top;
                if($(this).hasClass('floor_nav_last')){
                    top = 0;
                }else{
                    top = $floor.eq(index).offset().top;
                }
                // $(window).scrollTop(top);
                $('html,body').animate({scrollTop:top});
            });

			//楼层图片轮播
			var first,second,three,four,five,six,seven,eight;
			
			$('.floor_first').find('ul').on('mouseenter',function(){
				clearInterval(first);
			}).on('mouseleave',function(){
				first = setInterval(function(){lunbo("first")},3000);
			}).trigger('mouseleave');

			$('.floor_second').find('ul').on('mouseenter',function(){
				clearInterval(second);
			}).on('mouseleave',function(){
				second = setInterval(function(){lunbo("second")},3000);
			}).trigger('mouseleave');

			$('.floor_three').find('ul').on('mouseenter',function(){
				clearInterval(three);
			}).on('mouseleave',function(){
				three = setInterval(function(){lunbo("three")},3000);
			}).trigger('mouseleave');

			$('.floor_four').find('ul').on('mouseenter',function(){
				clearInterval(four);
			}).on('mouseleave',function(){
				four = setInterval(function(){lunbo("four")},3000);
			}).trigger('mouseleave');

			$('.floor_five').find('ul').on('mouseenter',function(){
				clearInterval(five);
			}).on('mouseleave',function(){
				five = setInterval(function(){lunbo("five")},3000);
			}).trigger('mouseleave');

			$('.floor_six').find('ul').on('mouseenter',function(){
				clearInterval(six);
			}).on('mouseleave',function(){
				six = setInterval(function(){lunbo("six")},3000);
			}).trigger('mouseleave');

			$('.floor_seven').find('ul').on('mouseenter',function(){
				clearInterval(seven);
			}).on('mouseleave',function(){
				seven = setInterval(function(){lunbo("seven")},3000);
			}).trigger('mouseleave');

			$('.floor_eight').find('ul').on('mouseenter',function(){
				clearInterval(eight);
			}).on('mouseleave',function(){
				eight = setInterval(function(){lunbo("eight")},3000);
			}).trigger('mouseleave');
			
			
			
			
		
			function lunbo(className){
				var clas = className;
				var $ul = $(".floor_"+className).find('.goods_left').find('ul');
           		$ul.animate({marginLeft:-306},function(){
       				$ul.find('li').first().insertAfter($ul.find('li').last());
					$ul.css('marginLeft',0);
        		})
       		};



			//鼠标移入时给变margin-top
			
			var $dl = $('.banner .banner_right').find('.life').find('dl');
			$dl.on('mouseenter',function(){
				$(this).find('dt').animate({marginTop:-1000},10,function(){
					$(this).animate({marginTop:0});
					
				})
			})


			//鼠标移入楼层图片
            $('.floor_goods').find('a').on('mouseenter',function(){
                $(this).find('img').animate({marginLeft:-10})
            }).on('mouseleave',function(){
                $(this).find('img').animate({marginLeft:0})
            })
			
    });
	
