(function (){
    'use strict';

    angular.module("MenuApp",[])
    .controller('MenuCategoryContoller', MenuCategoryContoller)
    .service('MenuCategoryService', MenuCategoryService)
    .constant('BaseUrl','https://davids-restaurant.herokuapp.com')
    .directive('listItemDirective',ListItemDirective)
    .directive('listItems',ListItems)


    function ListItems(){
        var ddo = {
            templateUrl : 'listItem.html'
        }

        return ddo;
    }

    function ListItemDirective(){
        var ddo = {
            template:' (<a href="" ng-click="menu.logMenuItems(items.short_name)">{{ items.short_name}}</a>) of {{items.name}}'
        }

        return ddo;
    }
    MenuCategoryContoller.$inject =["MenuCategoryService"]; 
    
    function MenuCategoryContoller(MenuCategoryService){
       var menu = this;
        console.log('run');
       var promise = MenuCategoryService.getMenuCategory();

       promise.then(function(response){
           menu.categories = response.data;
       })
       .catch(function(errMsg){
           console.log('Something went wrong');
       })

       menu.logMenuItems = function(shortName){
           var promise = MenuCategoryService.getMenuForCategory(shortName)

           promise.then(function(response){
            console.log(response.data)
           })
           .catch(function(){
               console.log('something went wrong')
           })
       }
    }
    
    

    MenuCategoryService.$inject=['$http','BaseUrl'];
    
    function MenuCategoryService($http,BaseUrl){
        var service = this;

        var listItems = [];

       service.getMenuCategory = function(){
           var response = $http({
               method:'GET',
               url:(BaseUrl+'/categories.json')
           })

           return response;
       }

       service.getMenuForCategory = function(shortName){
        var response = $http({
            method:'GET',
            url:(BaseUrl+'/menu_items.json'),
            params:{category:shortName}
        })

        return response;
       }
    }

   

   

   
})();