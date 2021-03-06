// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
        })

        // nerds page that will use the NerdController
        // .when('/nerds', {
        //     templateUrl: 'views/nerd.html',
        //     controller: 'NerdController'
        // });

    $locationProvider.html5Mode(true);

}]);