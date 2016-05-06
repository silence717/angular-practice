/**
 * @description [使用指令绑定自己的行为]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive8App', [])
    .controller('Controller', ($scope, $timeout) => {
        $scope.name = 'silence';
        $scope.messages = '';
        $scope.hideDialog = (message) => {
            $scope.messages = message;
            $scope.dialogIsHidden = true;
            $timeout(() => {
                $scope.messages = '';
                $scope.dialogIsHidden = false;
            }, 2000);
        }
    })
    .directive('myDialog' , () => {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                'close': '&onClose'
            },
            templateUrl: 'my-dialog-close.html'
        }
    })
    .name;

/**
 * Best Practice: use &attr in the scope option
 * when you want your directive to expose an API for binding to behaviors.
 */
