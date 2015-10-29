angular.module('Booya')

.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:infoID', {
        templateUrl:'templates/details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo:'/'});
});