'use strict';

/**
 * @ngdoc function
 * @name StorageApp.services:apiService
 * @description
 * # apiService
 * Service of the StorageApp
 */

angular.module('StorageApp')
  .service('apiService', ['localStorage', function (localStorage) {

    var service = {
      addProduct: function (product) {
        var products = localStorage.getObject('products');
        product.id = products.length + 1;
        products.push(product);
        localStorage.setObject('products', products);
        return true;
      },
      getProducts: function () {
        return localStorage.getObject('products');
      },
      getProduct: function (id) {
        var products = localStorage.getObject('products');
        return products[id - 1];
      },
      getStateByHash: function (hash) {
        var result = {
          state: 'products-list',
          id: ''
        };
        if (hash.indexOf('product_') > -1) {
          result.id = hash.replace('product_', '');
          result.state = 'product';
        }
        if (hash === 'product-creation') {
          result = {
            state: hash,
            id: ''
          }
        }
        return result;
      }
    };
    return service;

  }]);
