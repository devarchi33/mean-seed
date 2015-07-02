angular.module('KakaoCtrl', []).controller('KakaoController', function($scope, $http) {

	$scope.tagline = 'Kakao Controller!';

	$scope.kakaoLogin = function() {
        console.log("scope : ");
    	console.log($scope);

    	Kakao.init('db831e72d4093199ddd7954e27a2f91b');

  		var kakaoLoginBtnCreator = Kakao.Auth.createLoginButton;

	    // 카카오 로그인 버튼을 생성합니다.
	    kakaoLoginBtnCreator({
	        success: function(authObj) {
	          alert(JSON.stringify(authObj));
	        },
	        fail: function(err) {
	          alert(JSON.stringify(err))
	        }
        });    	
    };

});