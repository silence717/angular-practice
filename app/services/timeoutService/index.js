/**
 * @description [$timeout service demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-04
 */
import angular from 'angular';

export default angular
    .module('timeoutApp' , [])
    .controller('timeoutController',
        function TimeoutController($scope, $timeout) {
            let $promise = $timeout(function () {
                $scope.name = 'silence';
            }, 1000);
    })
    .run(function ($timeout) {
        let timer = $timeout(function () {
            console.log('执行$timeout回调.');
            return 'angular';
        }, 1000);

        timer.then(function (data) {
            console.log(data);
        }, function (data) {
            console.log(data);
        });
    // $timeout.cancel(timer);
    })
    .name;