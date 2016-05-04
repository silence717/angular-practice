/**
 * @description [$parse service demo]
 * @author [silence_yfang@126.com]
 * @date  2016-05-04
 */
import angular from 'angular';

export default angular
    .module('parseApp' , [])
    .controller('Controller', ['$parse',function($parse) {

        let fn = $parse('1+2');
        this.result = fn();

        let getter = $parse('event.name');

        let context1 = {
            event: {
                name: 'test1'
            }
        };
        let context2 = {
            event: {
                name: 'test2'
            }
        };

        this.context1 = getter(context1);
        this.context2 = getter(context2);
        this.coverContext = getter(context2, context1);
    }])
    .name;
