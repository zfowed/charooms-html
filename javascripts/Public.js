/* 
* @Author: sublime text
* @Date:   2015-09-30 13:10:12
* @Last Modified by:   sublime text
* @Last Modified time: 2015-10-02 09:11:29
*/

$(document).ready(function(){








// -------------------------登录页面---------------------------------------------------

	// 登录按钮

	$('#login').click(function(event) {

		var userName = $('.login input').val(); // 用户昵称
		var userPortrait = $('.login img').attr('portrait_id'); // 用户头像id
		if(userName=='') { // 如果不填昵称就给 "User" + ID
			userName = 'User' + 21275;
		}

		window.location.href ='index.html'; // 页面跳转
	});
























// ------------------------选择聊天室页面-----------------------------------------------

	// 用户信息提交

	$('#userinfo_sub').click(function(event) {
		var userName = $('.rooms .user_name input').val(); // 用户昵称
		var userPortrait = $('.rooms .user_portrait img').attr('portrait_id'); // 用户头像id
		if(userName=='') { // 如果不填用户昵称，就是以前的昵称
			userName = $('.rooms .user_name input').attr('placeholder');
		}


		// 下面是测试用的代码


		$('.userinfo a b').text(userName); // 修改标题栏的用户昵称
		$('.rooms .user_name input').val(''); // 昵称输入框清空
		$('.rooms .user_name input').attr('placeholder', userName); // 昵称输入框默认显示用户昵称
		$('.topnavlist .popover').not($(this).next('.popover')).removeClass('show'); // 关掉用户面板
		$('.clapboard').addClass('hidden'); // 关掉模糊背景
	});

	// 设置主题


	$('.theme img').click(function(event) {
		var theme_id = $(this).attr('theme_id');
		$('.clapboard').click(); // 关掉用户模糊背景




		// 下面是测试用的代码


		$('body').css('background-image', 'url(images/theme/' + theme_id + '_bg.jpg)'); // 设置背景
	});






















// --------------------聊天室内页面----------------------------------------------------

	// 发送图片

	$('.imgFileBtn').change(function(event) {


		var str = '<img src="images/chatimg/' + '1/201503/agafsdfeaef.jpg' +'" />'

		sends_message('绿巨人', 1, str); // sends_message(昵称,头像id,聊天内容);


		// 滚动条滚到最下面
		$('.scrollbar-macosx.scroll-content.scroll-scrolly_visible').animate({
			scrollTop: $('.scrollbar-macosx.scroll-content.scroll-scrolly_visible').prop('scrollHeight')
		}, 500);
	});

	// 发送消息
	
	$('.text input').focus();
	$('#subxx').click(function(event) {
		var str = $('.text input').val(); // 获取聊天内容
		str = str.replace(/\</g,'&lt;');
		str = str.replace(/\>/g,'&gt;');
		str = str.replace(/\n/g,'<br/>');
		str = str.replace(/\[em_([0-9]*)\]/g,'<img src="images/face/$1.gif" alt="" />');
		if(str!='') {

			sends_message('绿巨人', 1, str); // sends_message(昵称,头像id,聊天内容);


			// 滚动条滚到最下面
			$('.scrollbar-macosx.scroll-content.scroll-scrolly_visible').animate({
				scrollTop: $('.scrollbar-macosx.scroll-content.scroll-scrolly_visible').prop('scrollHeight')
			}, 500);

		}
		$('.text input').val(''); // 清空输入框
		$('.text input').focus(); // 输入框获取焦点
	});





























// -----下边的代码不用管---------------------------------------



	jQuery('.scrollbar-macosx').scrollbar();
	$('.topnavlist li a').click(function(event) {
		$('.topnavlist .popover').not($(this).next('.popover')).removeClass('show');
		$(this).next('.popover').toggleClass('show');
		if($(this).next('.popover').attr('class')!='popover fade bottom in') {
			$('.clapboard').removeClass('hidden');
		}else{
			$('.clapboard').click();
		}
	});
	$('.clapboard').click(function(event) {
		$('.topnavlist .popover').removeClass('show');
		$(this).addClass('hidden');
		$('.user_portrait img').attr('portrait_id', $('.user_portrait img').attr('ptimg'));
		$('.user_portrait img').attr('src', 'images/user/' + $('.user_portrait img').attr('ptimg') + '.png');
		$('.select_portrait img').removeClass('t');
		$('.select_portrait img').eq($('.user_portrait img').attr('ptimg')-1).addClass('t');
		$('.rooms .user_name input').val('');
	});
	$('.select_portrait img').hover(function() {
		var portrait_id = $(this).attr('portrait_id');
		$('.user_portrait img').attr('src', 'images/user/' + portrait_id + '.png');
	}, function() {
		var t_id = $('.user_portrait img').attr('portrait_id');
		$('.user_portrait img').attr('src', 'images/user/' + t_id + '.png');
	});
	$('.select_portrait img').click(function(event) {
		var portrait_id = $(this).attr('portrait_id');
		$('.user_portrait img').attr('portrait_id', portrait_id);
		$('.select_portrait img').removeClass('t');
		$(this).addClass('t');
	});
	$('.face_btn,.faces').hover(function() {
		$('.faces').addClass('show');
	}, function() {
		$('.faces').removeClass('show');
	});
	$('.faces img').click(function(event) {
		if($(this).attr('alt')!='') {
			$('.text input').val($('.text input').val() + '[em_' + $(this).attr('alt') + ']');
		}
		$('.faces').removeClass('show');
		$('.text input').focus();
	});
	$('.imgFileico').click(function(event) {
		$('.imgFileBtn').click();
	});
	function sends_message (userName, userPortrait, message) {
		if(message!='') {
			$('.main .chat_info').html($('.main .chat_info').html() + '<li class="right"><img src="images/user/' + userPortrait + '.png" alt=""><b>' + userName + '</b><i>09:15</i><div class="aaa">' + message  +'</div></li>');
		}
	}
	$('.text input').keypress(function(e) { 
		if (e.which == 13){
			$('#subxx').click();
		}
	});
});
