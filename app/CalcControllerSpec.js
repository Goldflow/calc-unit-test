'use strict';

//1. we will learn here how to test controllers
//by convention you take the same name as the name of the javascript file which functions you want to test and add Spec
//Spec stands for Specification or specificatie om aan te duiden wat er precies moet getest worden
//let's create a test that verifies that the output of the getSum property is correct

  

//2. we start with the describe function, which will describe what kind of test we are doing
//and the way in jasmine we group our tests;
//describe takes in two parameters:
//first is title or name
//second is the callback function, in which we will write the actual tests
describe('CalcController', function () {
    //3. inside this function we write the tests that go in an it() function
    //the idea is that the sentence of the testname starts with "it"
    //e.g.: it() should return true to make the test pass
	
	var createController, scope;
   
   //7.beforeEach runs before each test inside that describe
    // > beforeEach gaat zoals de naam het zelf zegt, altijd geexecute worden voor het start van iedere test
    // binnen describe functie, willen we soms meerdere testen uitvoeren,
    // die telkens dezelfde onderdelen gebruiken, om die niet telkens te moeten laden gebruiken we de beforeEach functie
    beforeEach(
        //8. function module() is not specific to Jasmine but to Angular testing
        // zoals je kan zien in onze karma config file, gaat karma ook telkens angular-mocks library laden
        // en kunnen we dus de module() functie aanroepen
        // de module() functe laat ons toe makkelijk de angular modules in te laden tijdens testing
        //deze neemt 1 parameter: naam van onze module > look at app.js file
    module('myApp')); //nu hebben we toegang tot de CalcController, echter die moeten we ook nog laden
    
 
 
    //9. loading the controller constructor
    beforeEach(
        //inject function part of Angular
        //inject functie verwacht een callback functie als parameter
        inject(//10. deze callback functie
            function($rootScope, $controller){
                scope = $rootScope.$new();
				
                createController = function(){
					return $controller( 
				'CalcController', {'$scope': scope}); 
				};
				
        }));
	
	it('should be defined', function() {
		var controller = createController();
		expect(controller).toBeTruthy();
	})
    
    it('should return the sum of the two passed parameters calculated with getSum(factor1,factor2)',
         //4. make a habit of writing long names, it's good to have a good description of what the test does
         function (){
			 //11.
			 var controller = createController();
              
             //5. in here comes the actual test
             // to check wether our testresult equals our expected result we use the function expect()
             // dus we gaan kijken of onze functie, het te verwachten resultaat heeft met de toBe functie

			 //6. now we we want the initialize the getSum method from our controller, that lives in our module
             //>  nu willen we die functie oproepen van onze controller die binnen de app module zit
             //daarvoor gaan we de juiste modules moeten laden, dat gaan we doen in de beforeEach functie
           
			expect(scope.getSum(3,4)).toBe(3+4);
         }
    );

    
});