/***
 * Services
 */
var pawsServices = angular.module('pawsServices', ['ngRoute', 'ngResource']);

/***
 * Controllers
 */
var pawsControllers = angular.module('pawsControllers', ['pawsServices']);

pawsControllers.controller('pawsHome', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;
    $scope.data.animal='';
    $scope.data.breed='';
    $scope.data.animalSize='';
    $scope.data.age='';
    $scope.data.gender='';
    $scope.data.animalOptions='';
}]);

pawsControllers.controller('pawsAnimal', ['$scope', '$routeParams', '$http', 'Data',
function($scope, $routeParams, $http, Data) {
    $scope.data=Data;

}]);

pawsControllers.controller('pawsBreed', ['$scope', '$routeParams', '$location', '$http', 'Data',
function($scope, $routeParams, $location, $http, Data) {
    $scope.data=Data;
    if($scope.data.animal && 0 < $scope.data.animal.length)
    {
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
     }
     else
     {
         var animalSize = '/app/size';
         $location.path(animalSize);
     }
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

pawsControllers.controller('pawsResult', ['$scope', '$routeParams', '$location', '$http', 'Data',
function($scope, $routeParams, $location, $http, Data) {
    $scope.data=Data;
    if($scope.data.humanLocation && 0 < $scope.data.humanLocation.length)
    {
        var url = 'http://api.petfinder.com/pet.find?key='+$scope.data.key;
        if($scope.data.animal && 0 < $scope.data.animal.length)
        {
            url = url + '&animal='+$scope.data.animal;
        }
        if($scope.data.animalBreed && 0 < $scope.data.animalBreed.length)
        {
            url = url + '&breed='+$scope.data.animalBreed;
        }
        if($scope.data.animalSize && 0 < $scope.data.animalSize.length)
        {
            url = url + '&size='+$scope.data.animalSize;
        }
        if($scope.data.age && 0 < $scope.data.age.length)
        {
            url = url + '&age='+$scope.data.age;
        }
        if($scope.data.gender && 0 < $scope.data.gender.length)
        {
            url = url + '&sex='+$scope.data.gender;
        }
        if($scope.data.offset && 0 < $scope.data.offset.length)
        {
            url = url + '&offset='+$scope.data.offset;
        }
        url = url + '&location='+$scope.data.humanLocation;
        url = url +'&count=1&output=full&format=json';
         $.ajax({
             type : 'GET',
             data : {},
             url : url+'&callback=?' ,
             dataType: 'json',
             success : function(data) {
                 console.log(data.petfinder.pets.pet);
                 $scope.data.result = data.petfinder.pets.pet;
                 $scope.$apply();
             },
             error : function(request,error)
             {
                 alert("Request: "+JSON.stringify(request));
             }
         });
     }
     else {
         var location = '/app/location';
         $location.path(location);
     }
}]);
