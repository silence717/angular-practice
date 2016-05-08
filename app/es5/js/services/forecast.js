/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
app.factory('forecast', ['$http', function($http) {
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
    .success(function(data) {
        return data;
    })
    .error(function(err) {
        return err;
    });
}]);
