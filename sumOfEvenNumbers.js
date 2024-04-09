function sumOfEvenNumbers(limit) {

    let result = 0;
    let sum= 0;
    for(let i = 1; i<=limit; i++){
         if(i % 2 == 0){
             sum = sum+i;
             result= sum;
         }
    }
    return result;
  }
  
let limit = 6;
let sum = sumOfEvenNumbers(limit);
console.log(sum)