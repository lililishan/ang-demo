import 'angular'
import 'angular-ui-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

/*模块注入*/
import appTemplate from "./app.jade"

import nav from "./nav"
import home from "./home"

// import commons from'./commons'
import './index.styl'

console.log(Array.from('hello'))
console.log(`
 ____ 
|  _  \\
| |_) |
|____ /

`)

angular.module('demoApp', ['ui.router', nav, home])

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


