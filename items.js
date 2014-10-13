/**
 * Copyright 2014 -
 * Licensed under the Academic Free License version 3.0
 * http://opensource.org/licenses/AFL-3.0
 * 
 * Authors: Stephanie Olson
 */

(function(){
    var app = angular.module('store-directives', []);

    app.directive("itemDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "item-description.html"
      };
    });

    app.directive("itemReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "item-reviews.html"
      };
    });

    app.directive("itemSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "item-specs.html"
      };
    });

    app.directive("itemTabs", function() {
      return {
        restrict: "E",
        templateUrl: "item-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("itemGallery", function() {
      return {
        restrict: "E",
        templateUrl: "item-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });
  })();
