// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('db831e72d4093199ddd7954e27a2f91b');

function loginWithKakao() {
	// 카카오 로그인 버튼을 생성합니다.
	Kakao.Auth.login({
	    success: function(authObj) {
	    	var authObj = JSON.stringify(authObj);
		 	console.log(authObj);
		},
		fail: function(err) {
			console.log(err);
		}
	});
};