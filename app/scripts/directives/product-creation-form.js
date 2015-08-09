'use strict';

/**
 * @ngdoc directive
 * @name StorageApp.filter:commentForm
 * @description
 * # commentForm
 */
angular.module('StorageApp')
  .directive('productCreationForm', function ( apiService, $modal ) {
    return {
      templateUrl: 'views/product-creation-form.html',
      restrict: 'E',
      replace: true,
      link: function( scope ) {
        scope.product = {
          title: '',
          description: '',
          price: ''
        };

        scope.addProduct = function() {

          if (scope.product.title && scope.product.description) {
            var product;
            var modalScope;

            product = {
              title: scope.product.title,
              description: scope.product.description,
              price: scope.product.price
            };
            modalScope = scope.$new();

            if (apiService.addProduct(product)) {
              modalScope.message = {
                header: 'Congratulations!',
                body: 'Product has been added to Storage.'
              };
              $modal.open({
                animation: true,
                scope: modalScope,
                controller: 'ModalCtrl',
                templateUrl: 'views/modal-template.html'
              });
            }
          }

        }
      }
    };
  });
