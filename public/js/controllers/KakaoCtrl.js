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

    $scope.kakaoGetUserInfo = function() {
        Kakao.API.request({
            url: '/v1/user/me',
            success: function(res) {
              // alert(JSON.stringify(res));
              var arr = res;
              console.log(arr);
              console.log("id : " + arr.id);
              console.log("properties : ");
              console.log(arr.properties);
              var arr2 = arr.properties;
              console.log("nickname : " + arr2.nickname);
              console.log("thumnail_image : " + arr2.thumbnail_image);
              
              var out = "<table>";

              out += "<tr><td>" +
              arr.id +
              "</td></tr><tr><td>" +
              arr2.nickname +
              "</td></tr><tr><td>" +
              "<img src= '" + arr2.thumbnail_image + "' />" +
              "</td></tr>";
              out += "</table>"
              document.getElementById("id01").innerHTML = out;

              document.getElementById("id01").style.display="block";

              // window.onload = setTimeout("location.href='http://skyfly33.dothome.co.kr/kakao/kakaologindemo2.html'",3000);
            },
            fail: function(error) {
              alert(JSON.stringify(error))
            }
            // persistAccessToken: false
            // persistRefreshToken: 'true'
        });
    };

});