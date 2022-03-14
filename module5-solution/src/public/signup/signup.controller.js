(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['menuCategories'];

    function SignupController(menuCategories) {
      var $ctrl = this;
      $ctrl.msgResponse=false
      $ctrl.msg='';
    var localItem=[];
    localItem=menuCategories;
      console.log(localItem);

      $ctrl.saveData = function(){
          var c=0;
          var dataToPass=[];
        $ctrl.msgResponse=true

        if(!$ctrl.name || !$ctrl.lname || !$ctrl.pn || !$ctrl.email || !$ctrl || !$ctrl.shortName){
            alert('Some Field is empty');
            return false;
        }

        localItem.forEach((x)=>{
            if(x.short_name==$ctrl.shortName){
                $ctrl.msg='Found Item ---> with name:' + x.name;
                console.log(x)
                c=1;
                dataToPass.push({
                  name:  $ctrl.name,
                  lname:  $ctrl.lname,
                  email:  $ctrl.email,
                  phone:  $ctrl.pn,
                  favItem:$ctrl.shortName
                })
                localStorage.setItem('FavItemAndData',JSON.stringify(dataToPass))
                alert("Data Saved")
                return false;
            }
       })

        if(c!=1){
            $ctrl.msg='No such menu number exists' 
        }


      }
    }
    
    
    })();
    