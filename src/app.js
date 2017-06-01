import 'angular'
import 'angular-ui-router'

/*模块注入*/
import nav from "./nav/index"
import home from "./home/index"
import appTemplate from "./app"
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
                alert(1)
            },
        })
        $urlRouterProvider.when('', '/homeIndex')
    })
    .config(($qProvider) => {
        'ngInject'

        $qProvider.errorOnUnhandledRejections(false)
    })


