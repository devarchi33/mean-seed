angular.module('KakaoCtrl', []).controller('KakaoController', function($scope, $http) {

	$scope.tagline = 'Kakao Controller!';

    var refresh = function() {
        $http.get('/').success(function(response){
            console.log('refresh!!');
            $scope.kakao = response;
        });
    };

    $scope.kakaoSave = function(userInfo) {
        console.log("scope : ");
        console.log(userInfo);
        $http.post('/kakaousersave', $scope.userInfo).success(function(response) {
            console.log("response : ");
            console.log(response);
            refresh();
        });
    };

    $scope.kakaoUpdate = function() {

    };

    $scope.kakaoDelete = function() {

    };

    $scope.kakaoLogout = function() {
        Kakao.Auth.setAccessToken("");
        Kakao.Auth.setRefreshToken("");
        var access_token = Kakao.Auth.getAccessToken();
        console.log("access_token : " + access_token);
        var refresh_token = Kakao.Auth.getRefreshToken();
        console.log("refresh_token : " + refresh_token);

        Kakao.Auth.logout();        

        alert("이용해 주셔서 갑사합니다.");

        window.onload = setTimeout("location.href='http://localhost:8080/'");
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
                $scope.userInfo = {
                    "id" : arr.id,
                    "nickname" : arr2.nickname,
                    "thumbnail_image" : arr2.thumbnail_image,
                    "profile_image" : arr2.profile_image
                }

                refresh();
            },
            fail: function(error) {
              alert("먼저 로그인 해주세요.");
            }
            // persistAccessToken: false
            // persistRefreshToken: 'true'
        });
    };

    $scope.getKakaoUserList = function() {
        $http.get('/kakaouserlist').success(function(response){
            console.log('KakaoCtrl(browser log) : I received the data requested!');
            $scope.kakaouserlist = response;
            refresh();
        });
    };
});