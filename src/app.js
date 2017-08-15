import 'angular'
import 'angular-ui-router'

// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import 'jquery'

/*模块注入*/
import appTemplate from "./app.jade"

import nav from "./nav"
import home from "./home"
import list from "./list"

// import commons from'./commons'
import './index.styl'

console.log(Array.from('hello'))
console.log(`
 ____ 
|  _  \\
| |_) |
|____ /

`)

angular.module('demoApp', ['ui.router', nav, home, list])

    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject'


        $stateProvider.state('app', {
            abstract: true,
            template: appTemplate,
            controller:function(){
                'ngInject'
                console.log(Array.from('abcdef'))
            },
        })
        $urlRouterProvider.when('', '/app')
        
    })
    .config(($qProvider) => {
        'ngInject'

        $qProvider.errorOnUnhandledRejections(false)
    })
    // .config = {
    //     autoHideScrollbar: false,
    //     theme: 'light',
    //     advanced:{
    //         updateOnContentResize: true
    //     },
    //         setHeight: 200,
    //         scrollInertia: 0
    // }


