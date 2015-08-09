'use strict';

/**
 * @ngdoc function
 * @name StorageApp.controller:ProductsListCtrl
 * @description
 * # ProductsListCtrl
 * Controller of the StorageApp
 */
angular.module('StorageApp')
  .controller('ProductsListCtrl', ['$scope', 'products', '$filter', function ($scope, products, $filter) {

    function updateProductsList() {
      $scope.products = $filter('searchProducts')(products, $scope.searchText);
    }

    $scope.products = angular.copy(products);
    $scope.searchText = '';

    $scope.$watch('searchText', updateProductsList);

  }]);
