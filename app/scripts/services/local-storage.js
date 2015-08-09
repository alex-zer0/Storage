'use strict';

/**
 * @ngdoc function
 * @name StorageApp.services:localStorage
 * @description
 * # localStorage
 * Service of the StorageApp
 */

angular.module('StorageApp')
  .factory('localStorage', ['$window', function ($window) {

    var service = {
      set: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key) {
        if ($window.localStorage[key]) {
          return JSON.parse($window.localStorage[key]);
        }
        return [];
      }
    };
    return service;

  }]);
