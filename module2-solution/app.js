(function (){
    'use strict';

    angular.module("ShoppingListCheckOff",[])

    .controller('ToBuyController', ToBuyController )
    .controller('AlreadyBoughtController', AlreadyBoughtController )
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    ToBuyController.$inject =['ShoppingListCheckOffService'];    

    function ToBuyController (ShoppingListCheckOffService){
        var toBuy=this;
        toBuy.toBuyItem = ShoppingListCheckOffService.items;
        //console.log( toBuy.toBuyItem);

        toBuy.addItemtoBought = function(index){
            ShoppingListCheckOffService.addItemtoBoughtService(index);
        }
    }


    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
       var alredyBought = this;

       alredyBought.baughtItem = ShoppingListCheckOffService.getBoughtItems();
    }

    //ShoppingListCheckOffService.$inject=['$http']
    function ShoppingListCheckOffService(){
        var service = this;
        
        service.items = [
           {name:"cookies", quantity:"10"},
           {name:"pizza", quantity:"1"},
           {name:"peanuts", quantity:"100"},
           {name:"biscuits", quantity:"20"},
           {name:"banana", quantity:"5"}
       ];

   

    service.baughtItem=[];

       service.addItemtoBoughtService = function(index){
            service.baughtItem.push(service.items[index]);
            service.items.splice(index, 1);
            console.log(service.baughtItem);
        }

    service.getBoughtItems = function(){
        return service.baughtItem;
    }
       
    }
})();