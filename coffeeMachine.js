function coffeeMachine(coffeeType) {
    let answer;
    //Write your code here
    let coffee = coffeeType.toLowerCase();
    
    switch(coffee){
            
        case "regular": 
		answer= "$2.50"
        break;
        
        case "latte": 
		answer= "$3.50"
        break;
            
        case "cappuccino": 
		answer= "$4.00"
        break;
            
        case "espresso": 
		answer= "$2.50"
        break;
        
        default:
            answer="Enter Valid Coffee Type";
    }
return answer;
}

let coffeeType = "REGULAR";

let price= coffeeMachine(coffeeType);
console.log(price);

