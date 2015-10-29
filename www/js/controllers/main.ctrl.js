angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Info) {
    //fetch all the data from the JSON file and display it
    $scope.allData;
    
  //  $http({method:'GET', url:'data/info.json'})
    Info.getAll()
    .then(function(response){
        //success
        $scope.allData = response.data;
        console.log($scope.allData);
    }, function(response){
        //error
        
    });
});