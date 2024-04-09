function Composite(number) {
    let answer = false;
  
    if (number <= 1) {
      answer = false; // 0 and 1 are not considered composite numbers
    } else {
      let factorCount = 0;
      
      for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
          factorCount += 1;
  
          if (factorCount > 2) {
            answer = true;
            break;
          }
        }
      }
    }
    
    return answer;
  }
  
  let number = 7;
  let compo = Composite(number);
  console.log(compo);