function discountCalculator(totalAmount) {
    let answer;
    //Write your code below
    if(totalAmount>=100){
        let discount = (totalAmount/100)*10;
        answer = totalAmount-discount;
    } else if(totalAmount<=99.99 && totalAmount >0 ){
        let discount = (totalAmount/100)*5;
        answer = totalAmount-discount;
    }
return answer
}

let totalAmount= 200;

let discounted = discountCalculator(totalAmount);
console.log(discounted);
