/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
function HeroListController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.list = [
        {
            name: 'Superman',
            location: ''
        },
        {
            name: 'Batman',
            location: 'Wayne Manor'
        }
    ];

    ctrl.updateHero = function(hero, prop, value) {
        hero[prop] = value;
    };

    ctrl.deleteHero = function(hero) {
        var idx = ctrl.list.indexOf(hero);
        if (idx >= 0) {
            ctrl.list.splice(idx, 1);
        }
    };
}

angular.module('heroApp').component('heroList', {
    templateUrl: 'heroList.html',
    controller: HeroListController
});