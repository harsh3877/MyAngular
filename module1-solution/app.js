(function (){
    'use strict';

    angular.module("LunchCalculator",[])

    .controller('LunchCheckController', initialiseProgram);

    initialiseProgram.$inject =['$scope', '$filter'];    

    function initialiseProgram($scope, $filter){
        $scope.LuchList='';
        $scope.LunchMsg='';


        $scope.CheckMyLunch = function(){
        $scope.LunchNumber=0;
           if(!$scope.LuchList){
            $scope.msgcolor='red';
            $scope.LunchMsg = 'Please enter data first';
               return;
           }

            var item = $scope.LuchList.split(",");

            for(var checkVal=0; checkVal<item.length; checkVal++){
                if(item[checkVal]==''){
                    $scope.msgcolor='red';
                    $scope.LunchMsg='we do NOT consider an empty item';
                    return;
                }else{
                   $scope.LunchNumber++;
                    
                }
            }

            if($scope.LunchNumber<=3){
                $scope.msgcolor='green';
                $scope.LunchMsg='Enjoy!';
            }else{
                $scope.msgcolor='green';
                $scope.LunchMsg='Too much!';
            }

            $scope.ClearMyLunch = function(){
                $scope.LuchList='';
                $scope.LunchMsg='';
                $scope.msgcolor='';
            }

        }

    }
})();