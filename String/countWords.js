function countWords(str) {
    let count = 0;
    let words = str.trim().split(" ");
    for(let i = 0 ; i< words.length ;i++){      
         count = count + 1;
   	}
    return count;
  }

let str = "Paramjeet is a ninja coder";
let result = countWords(str);
console.log(result);
