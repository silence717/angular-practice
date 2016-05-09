/**
 * @description [es5 demo 主入口文件]
 * @author [silence_yfang@126.com]
 * @date  2016-05-09
 */
var app = angular.module('es5DemoApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        controller: 'HomeController',
        templateUrl: 'view/home.html'
    })
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'view/photo.html'
    })
    .when('/forecast', {
        controller: 'AppInfoController',
        templateUrl: 'view/app.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
});
