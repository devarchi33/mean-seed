angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

		.when('/kakao/api', {
			templateUrl: 'views/kakao.html',
			controller: 'KakaoController'	
		})

		.when('/kakao/kakaolinkdemo.html', {
			templateUrl: 'views/kakaolinkdemo.html',
			controller: 'KakaoController'	
		})

		.when('/test', {
			templateUrl: 'views/test.html',
			controller: 'TestController'	
		});

	$locationProvider.html5Mode(true);

}]);