import homeTemplate from './home.jade'
import homeCtrl from './home.controller'
export default angular.module('app.home', [])
    .config(($stateProvider) => {
        'ngInject'
        $stateProvider
            .state('home', {
                parent: 'app',
                url: '/homeIndex',
                // params: {
                //     isNew: null
                // },
                component: 'dashboard'
            })
            .state('detail', {
                parent: 'app',
                url: '/homeIndex/detail',
                component: 'chartDetail'
            })


    })
    .component('dashboard', {
        template: homeTemplate,
        controller: homeCtrl
    })
    .name