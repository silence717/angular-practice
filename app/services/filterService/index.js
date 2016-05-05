/**
 * @description [angular $filter service demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-04
 */
import angular from 'angular';

export default angular
    .module('filterApp', [])
    .controller('filterController',
        function filterController(durationsFilter) {
            let vm = this;
            vm.data = {};

            vm.data.duration1 = durationsFilter(1);
            vm.data.duration2 = durationsFilter(2);
            vm.data.duration3 = durationsFilter(3);
            vm.data.duration4 = durationsFilter(4);
        }
    )
    .filter('durations', function () {
        return function (duration) {
            switch (duration) {
                case 1:
                    return 'Half hour';
                case 2:
                    return 'One hour';
                case 3:
                    return 'Half Day';
                case 4:
                    return 'Full Day';
            }
        }
    })
    .name;