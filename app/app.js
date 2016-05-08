/**
 * @description [统一注入]
 * @author [silence_yfang@126.com]
 * @date  2016-04-21
 */
// service部分
// import parseService from './services/parseService';
// import timeoutService from './services/timeoutService';
// import filterService from './services/filterService';
// import cookieService from './services/cookieService';
//
// // directives 部分
// import directive1 from './directives/lesson1';
// import directive2 from './directives/lesson2';
// import directive3 from './directives/lesson3';
// import directive4 from './directives/lesson4';
// import directive5 from './directives/lesson5';
// import directive6 from './directives/lesson6';
// import directive7 from './directives/lesson7';
// import directive8 from './directives/lesson8';
// import directive9 from './directives/lesson9';
// import directive10 from './directives/lesson10';
// import directive11 from './directives/lesson11';
//
//
// // router 部分
// import routerOne from './router/lesson1';


var app = angular.module('esDemoApp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'es5/view/home.html'
    })
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'es5/view/photo.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

