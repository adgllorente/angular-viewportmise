'use strict';

angular.module('angular-viewportmise', [
  'angular-inview'
]);

angular.module('angular-viewportmise')
  .directive('vpm', vpmDrct);

function vpmDrct() {
  return {
    template: '<div data-ng-transclude class="vpm" ' +
      'data-in-view="load($inview)"></div>',
    restrict: 'A',
    scope: {
      loadOnViewport: '=',
      loader: '='
    },
    transclude: true,
    replace: true,
    link: function(scope, element) {
      var clearGetDataWatcher;

      /**
       * Executes data loader and set classes depending on the status into
       * the CSS.
       */
      function _execLoader() {
        if (scope.loader) {
          scope.loader()
            .then(function() {
              element.removeClass('vpm-error');
              element.addClass('vpm-loaded');
            })
            .catch(function() {
              element.removeClass('vpm-loaded');
              element.addClass('vpm-error');
            })
            .finally(function() {
              element.removeClass('vpm-loading');
              scope.loader = null;
            });
        }
      }

      clearGetDataWatcher = scope.$watch('loader', function() {
        if (angular.isFunction(scope.loader)) {
          element.addClass('vpm-loading');
          clearGetDataWatcher();
        }
      });

      if (scope.loadOnViewport) {
        scope.load = function(inview) {
          if (inview) {
            _execLoader();
          }
        };
      } else {
        _execLoader();
      }
    }
  };
}
