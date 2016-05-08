/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */


directive11App.directive('appInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'appInfo.html'
    }
});