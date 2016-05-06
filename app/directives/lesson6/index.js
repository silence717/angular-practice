/**
 * @description [angular directive link]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive6App', [])
    .controller('Controller', ($scope) => {
        $scope.format = 'yyyy-MM-dd hh:mm:ss';
    })
    .directive('myCurrentTime', ($interval, dateFilter) => {
        function link(scope, element, attrs) {
            let format,
                timer;

            timer = $interval(() => {
                updateTime();
            }, 1000);

            function updateTime() {
                element.text(dateFilter(new Date(), format));
            }

            scope.$watch(attrs.myCurrentTime, (value) => {
                format = value;
                updateTime();
            });

            element.on('$destroy', () => {
                $interval.cancel(timer);
            });
        }
        return {
            link: link
        }
    })
    .name;

/**
 * Best Practice: Directives should clean up after themselves.
 * You can use element.on('$destroy', ...) or scope.$on('$destroy', ...)
 * to run a clean-up function when the directive is removed.
 */