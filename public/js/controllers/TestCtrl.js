angular.module('TestCtrl', []).controller('TestController', function($scope, $http) {

$http.get('/contactlist').success(function(response){
	console.log('TestCtrl(browser log) : I received the data requested!');
	$scope.contactlist = response;
});

	console.log('This is test controller!');

    $scope.tagline = 'This is test page!';

    // person1 = {
    // 	name : "DonghoonLee",
    // 	email : "skyfly33727@gamil.com",
    // 	number : "010-2057-5000"
    // };

    // person2 = {
    // 	name : "RoseKim",
    // 	email : "rosekm92@iruen.com",
    // 	number : "010-2057-6000"
    // };

    // person3 = {
    // 	name : "YwSon",
    // 	email : "sonyw@iruen.com",
    // 	number : "010-2057-7000"
    // };

    // var contactlist = [person1, person2, person3];
    // $scope.contactlist = contactlist;

});
