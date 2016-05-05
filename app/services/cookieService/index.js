/**
 * @description [angular cookie service demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-05
 */
import angular from 'angular';
import cookie from 'angular-cookies';

export default angular
    .module('cookieApp', [cookie])
    .controller('cookieController', ['$cookies', function ($cookies) {
        let vm = this;

        vm.setCookie = function () {
            $cookies.put('favorite', 'travelling');
        };

        vm.getCookie = function () {
            console.log('my favorite:' + $cookies.get('favorite'));
        };

        vm.removeCookie = function () {
            $cookies.remove('favorite');
        }
    }])
    .name;
