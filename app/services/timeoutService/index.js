/**
 * @description [$timeout service demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-04
 */
var angular = require('angular');

var app = angular.module('timeoutApp' , []);

app.run(function ($timeout) {
    var timer = $timeout(function () {
        console.log('执行$timeout回调.');
        return 'angular';
    }, 1000);

    timer.then(function (data) {
        console.log('========');
        console.log(data);
    }, function (data) {
        console.log('*********');
        console.log(data);
    });

    $timeout.cancel(timer);

});