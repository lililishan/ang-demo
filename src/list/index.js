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
  .directive('ngFocus',[function() {
    let FOCUS_CLASS = 'ng-focused'
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs,ctrl) {
        ctrl.$focused = false
        element.bind('focus', function(evt) {
          element.addClass(FOCUS_CLASS)
          scope.$apply(function() {
            ctrl.$focused = true
          })
        }).bind('blur', function(evt) {
          scope.removeClass(FOCUS_CLASS)
          scope.$apply(function() {
            ctrl.$focused = false
          })
        })
      }
    }
  }])
  .name