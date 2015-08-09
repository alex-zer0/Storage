'use strict';

/**
 * @ngdoc function
 * @name StorageApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the StorageApp
 */
angular.module('StorageApp')
  .controller('ModalCtrl', ['$scope', '$modalInstance', '$timeout', '$location',
    function ($scope, $modalInstance, $timeout, $location) {

      $scope.cancel = function () {
        $modalInstance.close();
        if ($scope.message.header === 'Failed!') {
          $location.hash('products-list');
        }
      };

      $timeout(function () {
        $modalInstance.close();
        if ($scope.message.header === 'Failed!') {
          $location.hash('products-list');
        }
      }, 3000)

  }]);
