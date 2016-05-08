/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
app.directive('installApp', function(){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'installApp.html',
        link: function(scope, element, attrs) {
            scope.buttonText = 'Install',
                scope.installed = false,
                scope.download = function() {
                    element.toggleClass('btn-active');
                    if(scope.installed) {
                        scope.buttonText = 'Installed';
                        scope.installed = false;
                    } else {
                        scope.buttonText = 'Uninstalled';
                        scope.installed = true
                    }
                }
        }
    }
});