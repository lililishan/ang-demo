import listTem from './list.jade'
import listCtrl from './list.controller'
import './list.styl'
export default angular.module('app.list', [])
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('list', {
      parent: 'app',
      url:'/list',
      template: listTem,
      controller: listCtrl,
      controllerAs: 'vm'
    })
  })
  .name