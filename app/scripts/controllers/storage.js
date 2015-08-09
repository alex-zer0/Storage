'use strict';

/**
 * @ngdoc function
 * @name StorageApp.controller:StorageCtrl
 * @description
 * # StorageCtrl
 * Controller of the StorageApp
 */
angular.module('StorageApp')
  .controller('StorageCtrl',['$scope', 'pageSettings', function ($scope, pageSettings) {
    $scope.pageSettings = pageSettings;
  }]);
