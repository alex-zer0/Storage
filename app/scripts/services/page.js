'use strict';

/**
 * @ngdoc function
 * @name StorageApp.services:pageSettings
 * @description
 * # pageSettings
 * Service of the StorageApp
 */

angular.module('StorageApp')
  .service('pageSettings', function() {

    var service = {
      title: 'Storage Application',
      description: 'Add/view application, represented storage.'
    };
    return service;

  });
