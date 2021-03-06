/**
 * @description [angular directive lesson1 使用template创建模板]
 * @author [silence_yfang@126.com]
 * @date  2016-05-04
 */
import angular from 'angular';

export default angular
    .module('directive1App', [])
    .controller('Controller', function ($scope) {
        $scope.customer = {
            name: 'silence',
            address: 'xian China'
        }
    })
    .directive('myCustomer' , function () {
        return {
            template: `Name: {{customer.name}}  Address: {{customer.address}}`,
            restrict: 'ECA'
        };
    })
    .name;