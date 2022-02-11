(function (){
    'use strict';

    angular.module("NameCalculator",[])

    .controller('NameCalculatorController', function($scope, $filter){
        $scope.name='';
       
        $scope.upperCaseMe = function(){
            var upCase = $filter('uppercase')
            $scope.name = upCase($scope.name);
        }

    });
})();