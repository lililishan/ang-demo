import navTemplate from './nav.jade'
import navCtrl from './nav.controller'
import './nav.styl'
export default angular.module('app.nav', [])
    .component('appNav',{
        template: navTemplate,
        controller: navCtrl,
        bindings: {
            navData: '<'
        },
        controllerAs: 'vm'
    })
    .name
