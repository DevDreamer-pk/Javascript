function lastDigit(num1, num2){
    let result = false;
	let check_num1 = num1 % 10;
    let check_num2 = num2 % 10;
    if(check_num1 === check_num2){
        result=true;
    }
    return result;
}

let num1 = 29;
let num2 = 34;

let equal = lastDigit(num1, num2);
console.log(equal);