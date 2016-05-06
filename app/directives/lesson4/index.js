/**
 * @description [directive 多个controller使用]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive4App', [])
    .controller('NaomiController', ($scope) => {
        $scope.customer = {
            name: 'hailey',
            address: 'xian China'
        }
    })
    .controller('IgorController', ($scope) => {
        $scope.customer = {
            name: 'silence',
            address: 'beijing  China'
        }
    })
    .directive('myCustomer', () => ({templateUrl: 'my-customer.html'}))
    .name;

/**
 * 无法做到inside scope 和 outside scope分离
 */