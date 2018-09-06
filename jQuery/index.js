$(document).ready(function($){

	//登录页面显示
	$('#top_col').click(function(){
		loginlayer();
		
		$('#login_enroll').click(function(){
			console.log(1);
			loginclose();
			enrolllayer();
		});	
		$('#enroll_login').click(function(){
			enrollclose();
			loginlayer();
		});	
		$('#layer_close').click(function(){
			loginclose();
		});
	});

    //注册页面显示
	$('#top_zhuce').click(function(){
		enrolllayer();
		
		$('#enroll_login').click(function(){
			enrollclose();
			loginlayer();
		});
		$('#login_enroll').click(function(){
			console.log(1);
			loginclose();
			enrolllayer();
		});	
		$('#enroll_close').click(function(){
			enrollclose();
		});
	});

	//登录页面显示函数
	function loginlayer(){
		$('#layer_mask').show();
		$('#layer_pop').show();
		$('#layer_content').show();
	}

	//注册页面显示函数
	function enrolllayer(){
		$('#layer_mask').show();
		$('#layer_pop').show();	
		$('#layer_zhuce').show();
	}

	//登录页面关闭函数
	function loginclose(){
		$('#layer_mask').hide();
		$('#layer_pop').hide();
		$('#layer_content').hide();
	}

	//注册页面关闭函数
	function enrollclose(){
		$('#layer_mask').hide();
		$('#layer_pop').hide();
		$('#layer_zhuce').hide();
	}

	//登录表单验证
	$('#login_rgnub').blur(function(){
		var username=$("input[name='username']").val();
		if(isNaN(username) && username.length!=11)
			console.log(1);
			$('#login_word_1').css('visibility','visible');
	});
	$('#login_rgpas').blur(function(){
		var password=$("input[name='password']").val();
		if(password.length>=11 || password.length<=5)
			console.log(4);
			$('#login_word_2').css('visibility','visible');
	});
	$('#enroll_rgnub').blur(function(){
		var username=$("input[name='username']").val();
		if(isNaN(username) && username.length!=11)
			console.log(3);
			$('#login_word_3').css('visibility','visible');
	});
	$('#pas_text').blur(function(){
		var password=$("input[name='text']").val();
		if(password.length!=4)
			console.log(4);
			$('#login_word_4').css('visibility','visible');
	});



	
});