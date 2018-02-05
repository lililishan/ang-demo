import 'angular'
import 'angular-ui-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import 'jquery'
// import 'particles.js'

/*模块注入*/
import appTemplate from "./app.jade"

import common from'./commons'
import nav from "./nav"
import home from "./home"
import list from "./list"
import sctrlllist from './scrolllist'

import './index.styl'

console.log(Array.from('hello'))
console.log(`
 ____ 
|  _  \\
| |_) |
|____ /

`)

angular.module('demoApp', ['ui.router',common, nav, home, list, sctrlllist])

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
// particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

