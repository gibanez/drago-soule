var App = angular.module('DragoApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);


App.service('BaseService', BaseService);
App.service('ClientService', ClientService);
App.controller('MainCtrl', MainCtrl);
App.controller('ClientCtrl', ClientCtrl);

App.config(function($routeProvider, $locationProvider, $mdIconProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/app/view/main.html',
            controller: 'MainCtrl'
        })
        .when('/cliente', {
            templateUrl: 'js/app/view/client.html',
            controller: 'ClientCtrl'
        });

    $mdIconProvider
        .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
        .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
        .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);

    // configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode(true);
});
