// Complete the genrateID function
//Do not alter the starter code
function generateID(startValue){
    //Implement Your function here
        let count = startValue;
        return function(){      
            return `A_2023_${count++}`
            
        };
    }
    
    const func = generateID(99);
    console.log(func());//Output : A_2023_99
    console.log(func()); // Output: A_2023_100