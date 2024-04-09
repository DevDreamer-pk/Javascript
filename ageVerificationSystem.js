function checkEligibility(age) {
    let answer;
    //Write your code here
    if(age>=18){
        answer = "granted";
    } else{
        answer = "denied";
    }
    return answer;
}
 
let age = 22;
let access = checkEligibility(age);
console.log(access);

