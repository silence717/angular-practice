/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
app.directive('appInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'appInfo.html'
    }
});