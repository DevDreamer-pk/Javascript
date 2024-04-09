function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
    let answer;
    //Write your code here
    // answer = principalAmount * ((1 + (annualInterestRate / 1)) ** numberOfYears);
    let result = principalAmount;

    for (let i = 0; i < numberOfYears; i++) {
        result = result * (1 + annualInterestRate);
    }
    answer = result;

    return answer;
}

let principalAmount = 500;
let annualInterestRate = 0.08;
let numberOfYears = 5;

let interest = compoundInterest(
    principalAmount,
    annualInterestRate,
    numberOfYears
);
console.log(interest);
