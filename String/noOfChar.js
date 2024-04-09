
function noOfChar(str){
    let count = 0;
    let charToFind = 'e';
    for(let i=0 ; i<str.length; i++){
        let char = str.charAt(i);
        if(char === charToFind){
            count = count + 1;
        }
    }
    
    return count;
}

let str = 'Paramjeet is the good coder';
console.log(noOfChar(str))