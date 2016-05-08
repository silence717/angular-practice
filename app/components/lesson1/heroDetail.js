/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-08
 */
function HeroDetailController() {

}

app.component('heroDetail', {
    templateUrl: 'heroDetail.html',
    controller: HeroDetailController,
    bindings: {
        hero: '<'
    },
    scope: {
        hero : {
            name : 'silence'
        }
    }
});