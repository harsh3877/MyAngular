(function (){
    'use strict';

    angular.module("NarrowItDownApp",[])

    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .constant('BaseUrl','https://davids-restaurant.herokuapp.com')
    .directive('foundItems',foundItems)


    function foundItems(){
        var ddo = {
            templateUrl : 'found-items.html',
            scope:{
               items:'<',
               onRemove:'='
            }
        }

        return ddo;
    }
    
    NarrowItDownController.$inject =['MenuSearchService'];    

    function NarrowItDownController(MenuSearchService){
        var ndc=this;
      ndc.found=[];
        ndc.filterDown = function(searchMe){
            ndc.found=[];
            if(!searchMe){
                console.log('Enter Data');
                return;
            }
            var promise = MenuSearchService.getMatchedMenuItems(searchMe);
            
            promise.then(function(response){
                var data = response.data;
                 data.menu_items.forEach((x)=>{
                    if(x.description.includes(searchMe)){
                        ndc.found.push(x);
                    }
                 })
                 console.log(ndc.found);
            })
            .catch(function(errMsg){
                console.log('Something went wrong');
            })
           
            ndc.removeItem = function(index){
                ndc.found.splice(index, 1);
            }
            

        }
    }


   

    MenuSearchService.$inject=['$http','BaseUrl']

    function MenuSearchService($http,BaseUrl){
        var service = this;
        service.getMatchedMenuItems = function(searchMe){
            var response = $http({
                method:'GET',
                url:(BaseUrl+'/menu_items.json')
            })
           
            return response;
        }

       
       
    }
})();