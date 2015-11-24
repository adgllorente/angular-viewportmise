'use strict';

angular.module('app', [
  'angular-viewportmise'
]);

angular.module('app')
  .controller('mainCtrl', mainCtrl)
  .controller('testCtrl', testCtrl);

/********************************************
 * MAIN AND TEST CONTROLLERS (FOR TESTING)
 *******************************************/
function mainCtrl($scope, $q, $timeout) {
  var i = 50;

  $scope.iterator = [];
  while (i--) {
    $scope.iterator.push(i);
  }

  $scope.getChannels = function() {
    var deferred = $q.defer();

    $timeout(function() {
      $scope.channel = 'Test content';

      deferred.resolve();
    }, 500);

    return deferred.promise;
  };
}

function testCtrl($scope, $timeout, $q) {
  $scope.getTestData = function() {
    var deferred = $q.defer();

    $timeout(function() {
      $scope.data = 'Test data ' + new Date();

      deferred.resolve();
    }, 500);

    return deferred.promise;
  };
}
