/**
 * @description [angular directive,使用templateUrl引入]
 * @author [fang.yang@shuyun.com]
 * @date  2016-05-04
 */
import angular from 'angular';

export default angular
    .module('directive2App', [])
    .controller('Controller', function ($scope) {
        $scope.customer = {
            name: 'silence',
            address: 'xian China'
        }
    })
    .directive('myCustomer' , function () {
        return {
            templateUrl: 'my-customer.html',
            restrict: 'ECA'
        };
    })
    .name;