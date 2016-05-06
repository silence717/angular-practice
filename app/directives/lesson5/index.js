/**
 * @description [为指令添加自己单独的scope]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive5App', [])
    .controller('Controller', ($scope) => {
        $scope.naomi = { name: 'silence', address: 'beijing China' };
        $scope.igor = { name: 'hailey', address: 'xian China' };
        console.log($scope);
})
    .directive('myCustomer', () => {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-iso.html'
        };
    })
    .name;

/**
 * Best Practice: Use the scope option to create isolate scopes
 * when making components that you want to reuse throughout your app.
 * 需要搞清楚 scope:true 和 scope:{} 的含义
 * scope:true 产生一个子作用域 (child scope)
 * scope:{} 产生一个隔离作用域 (isolated scope)
 *
 */