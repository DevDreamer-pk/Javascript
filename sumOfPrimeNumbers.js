function sumOfPrimeNumbers(limit) {
    let answer = 0;
    
   //Write your code below
      
      for(let i = 2; i<=limit; i++){
          let isPrime=true;
          for(let j =2; j<=Math.sqrt(i); j++){
              if(i % j == 0){
                  isPrime=false;
                 break;
              }
          }
          if(isPrime){
          answer =answer + i;
              }
      }
    return answer
  }
  
  let limit = 50;
  let sum =sumOfPrimeNumbers(limit);
  console.log(sum);

  