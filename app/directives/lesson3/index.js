/**
 * @description [templateUrl params: element and attr]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive3App', [])
    .controller('Controller', function ($scope) {
        $scope.customer = {
            name: 'silence',
            address: 'xian China'
        }
    })
    .directive('myCustomer' , function () {
        return {
            templateUrl: function (elem, attr) {
                return 'customer-' + attr.type + '.html';
            }
        };
    })
    .name;