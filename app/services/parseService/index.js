/**
 * @description [$parse service demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-04
 */
var angular = require('angular');

var app = angular.module('parseApp' , []);

app.controller('Controller', ['$scope', '$compile', '$parse',function($scope, $compile, $parse) {

    var fn = $parse('1+2');
    console.log(fn());

    var getter = $parse('event.name');

    var context1 = {event: {name: 'test1'}};
    var context2 = {event: {name: 'test2'}};

    console.log(getter(context1));
    console.log(getter(context2));
    console.log(getter(context2, context1));
}]);
