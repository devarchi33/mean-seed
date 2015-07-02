angular.module('KakaoCtrl', []).controller('KakaoController', function($scope, $http) {

	$scope.tagline = 'Kakao Controller!';

	$scope.kakaoLogin = function() {
        console.log("scope : ");
    	console.log($scope);
    	
    };

});