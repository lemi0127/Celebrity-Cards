angular.module('Booya')
.factory('Info', function InfoFactory($http){
        return {
         
         getAll: function(){ 
            return $http({
                    method:'GET',
                    url:'data/info.json'
                });
         },
         getOne: function(id){ 
            return $http({
                    method:'GET',
                    url:'data/info.json'
                });
            }
    }
        
});