/**
 * Copyright 2014 -
 * Licensed under the Academic Free License version 3.0
 * http://opensource.org/licenses/AFL-3.0
 * 
 * Authors: Stephanie Olson
 */

(function() {
  var app = angular.module('pizzaPoacher', ['store-directives']);

  app.controller('StoreController', function(){
    var store = this;
    store.items = [];
    
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
