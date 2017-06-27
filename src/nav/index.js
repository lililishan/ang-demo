import navTemplate from './nav.jade'
import navCtrl from './nav.controller'
import './nav'
export default angular.module('app.nav', [])
    .component('appNav',{
        template: navTemplate,
        controller: navCtrl,
        bindings: {
            navData: '<'
        }
    })
    .name
