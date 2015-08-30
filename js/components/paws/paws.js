/***
 * Services
 */
var pawsServices = angular.module('pawsServices', ['ngRoute', 'ngResource']);

/***
 * Controllers
 */
var pawsControllers = angular.module('pawsControllers', ['pawsServices']);

pawsControllers.controller('pawsAnimal', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsBreed', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;
        var url = 'http://api.petfinder.com/breed.list?key='+$scope.data.key+'&animal='+$scope.data.animal+'&output=full&format=json';
         $.ajax({
             type : 'GET',
             data : {},
             url : url+'&callback=?' ,
             dataType: 'json',
             success : function(data) {
                 $scope.data.breeds=data.petfinder.breeds.breed;
                 $scope.$apply();
             },
             error : function(request,error)
             {
                 alert("Request: "+JSON.stringify(request));
             }
         });
}]);

pawsControllers.controller('pawsSize', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsGender', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsAge', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsOptions', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsAnimal', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsLocation', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);
