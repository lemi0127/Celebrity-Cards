angular.module('Booya')

.controller('DetailsCtrl', function($scope, $routeParams, Info){
    $scope.infoId = $routeParams.infoID;
    $scope.info= {}
    
    //  $http({method:'GET', url:'data/info.json'})
    Info.getOne($scope.infoId)
    .then(function(response){
        //success
        var info = response.data.info;
        info.forEach(function(i){
            if(i.id == $routeParams.infoID){
                $scope.info = i;
            }
        });
        
    }, function(response){
        //error
        
    });
});