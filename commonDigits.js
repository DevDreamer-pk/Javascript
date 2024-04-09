function commonDigits(num1, num2) {
    let result =false;
    let num1digits = num1.toString().length;
    let num2digits = num2.toString().length;
    if(num1digits == num2digits){
        result=true;
    }

    return result;
}

let num1 = 29;
let num2 = 34;

let equal = commonDigits(num1, num2);
console.log(equal);

