angular.module('KakaoCtrl', []).controller('KakaoController', function($scope, $http) {

	$scope.tagline = 'Kakao Controller!';

	$scope.kakaoLogin = function() {
        console.log("scope : ");
    	console.log($scope);

    	var access_token = Kakao.Auth.getAccessToken();
    	console.log("access_token : " + access_token);
    	var refresh_token = Kakao.Auth.getRefreshToken();
    	console.log("refresh_token : " + refresh_token);

    };

    $scope.kakaoLogout = function() {
        Kakao.Auth.logout();

    	var access_token = Kakao.Auth.getAccessToken();
    	console.log("access_token : " + access_token);
    	var refresh_token = Kakao.Auth.getRefreshToken();
    	console.log("refresh_token : " + refresh_token);

		alert("이용해 주셔서 갑사합니다.");
		
		var out = "";
		document.getElementById("id01").innerHTML = out;
	    document.getElementById("id01").style.display="block";
    };

});