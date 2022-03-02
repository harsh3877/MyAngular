(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item']
function ItemDetailController(item,) {
   var itemDetail = this;
  itemDetail.name = item.menu_items;
  // console.log(itemDetail.name);
}

})();
