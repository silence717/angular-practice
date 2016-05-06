/**
 * @description [directive transclude demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive7App', [])
    .controller('Controller', ($scope) => {
        $scope.name = 'silence';
    })
    .directive('myDialog', () => {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'my-dialog.html'
        };
    })
    .name;
/**
 * transclude makes the contents of a directive with this option
 * have access to the scope outside of the directive rather than inside.
 *
 */

