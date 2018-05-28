
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

  .factory('notify', ["$window","$timeout",function(win, timeout) {
    var msgs = []
    return function(msg) {
      msgs.push(msg)
      if(msgs.length == 3) {
        timeout(function() {
          win.alert(msgs.join("\n"))
          msgs = []
        }, 10)
      }
    }
  }])
  .name