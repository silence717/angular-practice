/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */

function HeroDetailController() {
    var ctrl = this;

    ctrl.update = function(prop, value) {
        ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
    };
}

angular.module('heroApp').component('heroDetail', {
    templateUrl: 'heroDetail.html',
    controller: HeroDetailController,
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    }
});