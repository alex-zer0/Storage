'use strict';

/**
 * @ngdoc function
 * @name StorageApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the StorageApp
 */
angular.module('StorageApp')
  .controller('ProductCtrl', ['$scope', 'product', '$modal', function ($scope, product, $modal) {
    $scope.product = product;

    if (angular.isUndefined($scope.product)) {
      var modalScope = $scope.$new();
      modalScope.message = {
        header: 'Failed!',
        body: 'Product doesn\'t exist!'
      }
      $modal.open({
        animation: true,
        scope: modalScope,
        controller: 'ModalCtrl',
        templateUrl: 'views/modal-template.html'
      });
    }
  }]);
