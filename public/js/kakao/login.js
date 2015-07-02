// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('db831e72d4093199ddd7954e27a2f91b');

// 카카오 로그인 버튼을 생성합니다.
Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    lang: 'en',
 	size: 'small',
	    success: function(authObj) {
    	 	alert(JSON.stringify(authObj));
    	},
    	fail: function(err) {
      		alert(JSON.stringify(err))
    	}
});