(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyinfoController', MyinfoController)
   
    MyinfoController.$inject = ['$http', 'ApiPath'];
    function MyinfoController($http, ApiPath) {
      var $ctrl = this;
      var data = JSON.parse(localStorage.getItem('FavItemAndData'));
      $ctrl.dataPresent=data;

      $ctrl.basePath='https://desiserver.herokuapp.com'
      if(data){
        $http({
          method:'GET',
          url:(ApiPath + '/menu_items.json?category='+data[0].favItem)
          }).then(function(res){
              
              $ctrl.name=data[0].name;
              $ctrl.lname=data[0].lname;
              $ctrl.email=data[0].email;
              $ctrl.phone=data[0].phone;
              $ctrl.Items = res.data.menu_items;
              console.log(res.data.menu_items)
          
           
          
          })
      }
     
     
    }


    
    })();