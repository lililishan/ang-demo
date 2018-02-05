
import scroListTemp from './list.jade'
import scroListCtrl from './ctrl'
import './style'



export default angular.module('app.scrolllist', [])
  .config(($stateProvider) => {
    'ngInject'
    $stateProvider.state('slist', {
      parent: 'app',
      url: '/scrollList',
      component: 'scrollList'
    })
  })
  .component('scrollList', {
    template: scroListTemp,
    controller: scroListCtrl,
    controllerAs: 'vm'
  })
  .name