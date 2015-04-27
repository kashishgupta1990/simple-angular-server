'use strict';

angular.module('demoApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            console.log('assad');
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise('/');

            //Define State Route
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeCtrl'
                })
                .state('aboutus', {
                    url: '/aboutus',
                    templateUrl: 'app/aboutus/aboutus.html',
                    controller: 'AboutUsCtrl'
                })
        }]);
