import listTem from './list.jade'
import listCtrl from './list.controller'
export default angular.module('app.list', [])
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('list', {
      parent: 'app',
      url:'/list',
      template: listTem,
      controller: listCtrl
    })
  })
  .name