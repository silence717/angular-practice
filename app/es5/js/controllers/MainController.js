/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
        $scope.fiveDay = data;
    });
}]);
