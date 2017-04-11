/**
 * Main AngularJS Web Application
 */
var app = angular.module('myApp', ['ngRoute', 'angularFileUpload', 'thumbs', 'fblindSimpleImageGallery']);

/**
 * Configure the Routes
 */
'use strict';
app.config(function ($stateProvider, $urlRouterProvider, $compileProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/partials/home.html',
                controller: 'siteController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/partials/login.html',
                controller: 'loginController'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/partials/about.html',
                controller: 'siteController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/partials/contact.html',
                controller: 'siteController'
            })
            .state('pricing', {
                url: '/pricing',
                templateUrl: 'views/partials/contact.html',
                controller: 'siteController'
            })
});
app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider

                .when("/services", {templateUrl: "views/partials/services.html", controller: "siteController"})
                .when("/work", {templateUrl: "views/partials/work.html", controller: "siteController"})
                .when("/demo", {templateUrl: "views/partials/demo.html", controller: "demoController"})
                .when("/slider", {templateUrl: "views/partials/slider.html", controller: "siteController"})
                .when("/uploads", {templateUrl: "views/partials/uploads.html", controller: "uploadsController"})
                .when("/listing", {templateUrl: "views/partials/listing.html", controller: "listingController"})
                .otherwise("/404", {templateUrl: "views/partials/404.html", controller: "siteController"});
        $httpProvider.interceptors.push('authInterceptor');
    }]);
