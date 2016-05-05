/**
 * @description [ngRouter demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-05
 */
import angular from 'angular';
import ngRoute from 'angular-route';

export default angular
    .module('ngRouteExample', [ngRoute])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/newEvent', {
            templateUrl: './tpl/newEvent.html'
        })
        .when('/eventList', {
            templateUrl: './tpl/eventList.html'
        })
        .otherwise({
            redirectTo: '/eventList'
        })
    })
    .name;