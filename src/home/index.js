import homeTemplate from './home.jade'
import homeCtrl from './home.controller'
import detailTem from './detail.jade'
import './home.styl'
export default angular.module('app.home', [])
    .config(($stateProvider) => {
        'ngInject'
        $stateProvider
            .state('home', {
                parent: 'app',
                url: '/app',
                // params: {
                //     isNew: null
                // },
                template: homeTemplate,
                controller: homeCtrl
            })
            .state('detail', {
                parent: 'app',
                url: '/homeIndex/detail',
                template: detailTem
            })


    })

    .name