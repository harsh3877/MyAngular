(function (){
    'use strict';

    angular.module("LunchCalculator",[])

    .controller('LunchCheckController', initialiseProgram);

    initialiseProgram.$inject =['$scope', '$filter'];    

    function initialiseProgram($scope, $filter){
        $scope.LuchList='';
        // $scope.LunchNumber=0;
        $scope.LunchMsg='';


        $scope.CheckMyLunch = function(){
        $scope.LunchNumber=0;
           if(!$scope.LuchList){
            $scope.LunchMsg = 'Please enter data first';
               return;
           }

            var item = $scope.LuchList.split(",");

            for(var checkVal=0; checkVal<item.length; checkVal++){
                if(item[checkVal]==''){
                    $scope.LunchMsg='we do NOT consider and empty item';
                    return;
                }else{
                   $scope.LunchNumber++;
                    
                }
            }

            if($scope.LunchNumber<=3){
                $scope.LunchMsg='Enjoy!';
            }else{
                $scope.LunchMsg='Too much!';
            }

        }

    }
})();