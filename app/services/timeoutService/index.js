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

            let vm = this;

            let timer = $timeout(function () {
                return 'silence';
            }, 2000);

            timer.then(function (data) {
                vm.name = data;
            }, function () {
                vm.name = 'no name';
            });

            vm.cancel = function () {
                $timeout.cancel(timer);
            }
    })
    .name;