/**
 * Created by kdehbi on 14/04/2016.
 */
calculatorApp.controller('CalcController',
    //this function will be the controller itself
    //controller's responsability is the create the scope
    //we will pass empty $scope & the controller will populate this scope with the model
    function CalcController($scope){
        $scope.calcObject = {
            factor1: 0,
            factor2: 0
        };

		//this will create function that we can call with getSum(firstVariable,secondVariable)
		//this function will return the sum of the two variables
        $scope.getSum = function(f1,f2)
        {
            return f1+f2;
        }
        
        //this will create function that we can call with getDiff(firstVariable,secondVariable)
		//this function will return the difference of the two variables
        $scope.getDiff = function(f1,f2)
        {
            return Math.abs(f1-f2);
        }
    });