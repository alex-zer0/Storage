'use strict';

/**
 * @ngdoc overview
 * @name StorageApp
 * @description
 * # StorageApp
 *
 * Main module of the application.
 */
angular
  .module('StorageApp', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider) {

    $stateProvider
      .state('products-list', {
        controller: 'ProductsListCtrl',
        templateUrl: "views/products.html",
        resolve: {
          products: function( apiService ) {
            return apiService.getProducts();
          }
        }
      })
      .state('product', {
        controller: 'ProductCtrl',
        templateUrl: "views/product.html",
        params: {
          'id': 1
        },
        resolve: {
          product: function( apiService, $stateParams ) {
            return apiService.getProduct($stateParams.id);
          }
        }
      })
      .state('product-creation', {
        controller: 'ProductCreationCtrl',
        templateUrl: "views/product-creation.html"
      });

  }).run(function($location, $state, $rootScope, apiService) {

    $rootScope.$on('$locationChangeStart', function () {
      var result = apiService.getStateByHash($location.hash());
      $state.go(result.state, {
        id: result.id
      })
    });

  });
