// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('db831e72d4093199ddd7954e27a2f91b');

function loginWithKakao() {
	// 카카오 로그인 버튼을 생성합니다.
	Kakao.Auth.login({
	    success: function(authObj) {
	      // 로그인 성공시, API를 호출합니다.
	      console.log("authObj : ");
	      console.log(authObj);

	      Kakao.Auth.setAccessToken(authObj.access_token, true);
	      console.log("access_token : " + authObj.access_token);
	      Kakao.Auth.setRefreshToken(authObj.refresh_token, true);
	      console.log("refresh_token : " + authObj.refresh_token);

	 	  alert("로그인에 성공 하였습니다!");
		},
		fail: function(err) {
			console.log(err);
		}
	});
};