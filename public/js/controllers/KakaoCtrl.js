angular.module('KakaoCtrl', []).controller('KakaoController', function($scope, $http) {

	$scope.tagline = 'Kakao Controller!';

    var refresh = function() {
        $http.get('/').success(function(response){
            console.log('get UserInfo!!');
            $scope = response;
        });
    };

    $scope.kakaoSave = function() {

    };

    $scope.kakaoUpdate = function() {

    };

    $scope.kakaoDelete = function() {

    };

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

    $scope.kakaoGetUserInfo = function() {
        Kakao.API.request({
            url: '/v1/user/me',
            success: function(res) {
              var arr = res;
              console.log(arr);
              console.log("id : " + arr.id);
              console.log("properties : ");
              console.log(arr.properties);
              var arr2 = arr.properties;
              console.log("nickname : " + arr2.nickname);
              console.log("thumnail_image : " + arr2.thumbnail_image);

              $scope.userId = arr.id;
              $scope.userNinckName = arr2.nickname;
              $scope.userThumbnail = arr2.thumbnail_image;
              $scope.userProfileImage = arr2.profile_image;

              refresh();
            },
            fail: function(error) {
              alert(JSON.stringify(error))
            }
            // persistAccessToken: false
            // persistRefreshToken: 'true'
        });
    };

    $scope.kakaoGetUserList = function() {
        Kakao.API.request({
            url: 'https://kapi.kakao.com/v1/user/ids',
            success: function(res) {
              alert("사용자 목록 가져오기!");
            },
            fail: function(error) {
              alert(JSON.stringify(error))
            }
            // persistAccessToken: false
            // persistRefreshToken: 'true'
        });
    };

});