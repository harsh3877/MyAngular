(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$q', '$timeout', '$http']
function ShoppingListService($q, $timeout,$http) {
  var service = this;

  // List of shopping items
  var items = [];
  var Listitems = [];

 
  var response = $http({
    method:'GET',
    url:('https://davids-restaurant.herokuapp.com/categories.json')
}).then(function(res){
  items=res.data;
  
})
  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
   
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 2000);
   
    return deferred.promise;
  };

  service.getCatItem = function(a){
    var response = $http({
      method:'GET',
      url:('https://davids-restaurant.herokuapp.com/categories.json')
  }).then(function(res){
    items=res.data;
   
    var response = $http({
      method:'GET',
      url:('https://davids-restaurant.herokuapp.com/menu_items.json?category='+items[a.itemId].short_name)
      }).then(function(res){
        Listitems=res.data;
      })
  })

        
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(Listitems);
    }, 2000);
   
    return deferred.promise;
    
  }
}

})();
