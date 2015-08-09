'use strict';

/**
 * @ngdoc filter
 * @name StorageApp.filter:searchProducts
 * @description
 * # searchProducts
 */
angular.module('StorageApp')
  .filter('searchProducts', function () {
    return function( input, text ) {
      var result = [];
      text = angular.lowercase(text);

      if (input) {
        input.forEach(function (item) {
          if (angular.lowercase(item.title).indexOf(text) > -1 || angular.lowercase(item.description).indexOf(text) > -1
            || angular.lowercase(item.price).indexOf(text) > -1) {
            result.push(item);
          }
        })
        return result;
      }

      return input;
    };
  });
