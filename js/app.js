
	var pawsApp = angular.module("pawsApp", ['ngRoute', 'ngResource', 'pawsServices', 'pawsControllers']);

	pawsApp.controller('mainController',
	function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
	});

	pawsApp.config(function($routeProvider) {
	  	$routeProvider
		  	.when('/app/home', {
		    	templateUrl: './js/components/paws/home.tpl.html'
		  	})
			.when('/app/animal', {
			templateUrl: './js/components/paws/form/pawsFormAnimal.tpl.html'
			})
			.when('/app/breed', {
			templateUrl: './js/components/paws/form/pawsFormBreed.tpl.html'
			})
			.when('/app/size', {
			templateUrl: './js/components/paws/form/pawsFormSize.tpl.html'
			})
			.when('/app/gender', {
			templateUrl: './js/components/paws/form/pawsFormGender.tpl.html'
			})
			.when('/app/age', {
			templateUrl: './js/components/paws/form/pawsFormAge.tpl.html'
			})
			.when('/app/options', {
			templateUrl: './js/components/paws/form/pawsFormOptions.tpl.html'
			})
			.when('/app/location', {
			templateUrl: './js/components/paws/form/pawsFormLocation.tpl.html'
			})
			.when('/app/result', {
			templateUrl: './js/components/paws/form/pawsResult.tpl.html'
			})
			.when('/app/random', {
			templateUrl: './js/components/paws/form/randomResult.tpl.html'
			})
		  	.otherwise({
	        	templateUrl: './js/components/paws/home.tpl.html'
			});
	});

	pawsApp.factory('Data', function () {
	  return { message: "I'm data to keep paws linked" };
	});
