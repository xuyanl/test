
$(function(){
	//用户名//表单验证
	var $register = $('.register');
	$register.find('.username').blur(function(){
		var username = $('.username').val();
		var span = $('<span><img src="../css/img/error.png"/>用户名不能为空！</span>');
		if(/^\s*$/.test(username)){
			if($('.username').next("span")){
				$('.username').next().remove('span');
				$('.username').after(span).addClass(".spanImg");
			}
			return false;
		}
		if(!/^\s*$/.test(username)){
			$('.username').next().remove('span');
		}
		var span1 = $('<span><img src="../css/img/error.png"/>用户名格式错误，请重新输入</span>');
		if(!/^\w{6,20}$/.test(username)){
			var span1 = $('<span><img src="../css/img/error.png"/>用户名格式错误，请重新输入</span>');
			$('.username').after(span1);
			return false;
		}
		if(/^\w{6,20}$/.test(username)){
			$('.username').next().remove('span');
		}
	});	
	//邮箱
	$('.email').blur(function(){
		var email = $('#email').val();
		var span = $('<span><img src="../css/img/error.png"/>您输入的邮箱不合法!</span>');
		if(!/^\w[\w\-\.]*@[0-9a-zA-Z\-]{2,}\.[a-zA-Z]{2,}$/.test(email)){
			if($('.email').next('span')){
				$('.email').next('span').remove('span');
				$('.email').after(span).addClass(".spanImg");
			}
			return false;
		}
		if(/^\w[\w\-\.]*@[0-9a-zA-Z\-]{2,}\.[a-zA-Z]{2,}$/.test(email)){
			$('.email').next().remove('span');
		}
	});
	//手机号
	$('.mobile').blur(function(){
		var phone = $('.mobile').val();
		var span = $('<span><img src="../css/img/error.png"/>您输入的手机号不合法!</span>');
		if(!/^1[34578]\d{9}$/.test(phone)){
			if($('.mobile').next('span')){
				$('.mobile').next('span').remove();
				$('.mobile').after(span).addClass(".spanImg");
			}
			return false;
		}
		if(/^1[34578]\d{9}$/.test(phone)){
			$('.mobile').next().remove('span');
		}
	});
	//密码
	/*var password = $('.password').val();
	$('.password').blur(function(){
		var password = $('.password').val();
		if(/^\S{1,}$/.test(password)){
			var span = $('<span>密码不能包含空格!</span>');
			$('.password').after(span);
			return false;
		}
		if(!/^\S{1,}$/.test(password)){
			$('.password').next().remove('span');
		}
	});
	//密码验证
	$('.confir').blur(function(){
		var confirm_pwd = $('confir').val();
		console.log(password);
		if(confirm_pwd != password){
			var span = $('<span>两次输入密码不一致</span>');
			$('confir').after(span);
			return false;
		}
		if(confirm_pwd == password){
			$('confir').next().remove('span');
		}
	})*/
	$(".reg").on("click",function(){
		var $user = $('.username').val();
		var $psw = $(".password").val();
		var $obj = {name:$user,password:$psw};
		document.cookie = "user=" + JSON.stringify($obj)+";path=/";
		console.log(document.cookie);
	});
	
	
});
