function leapYear(year) {
    let answer;
   //Write your code here
    if(year % 4 ==0){
        if(year % 400 ==0){
            answer= true;
        }else{
                if(year % 100 ==0){
            	answer= false;
            }else {
                answer= true;
            }
        }
    } else{
        answer= false;
    }
return answer
}

let year= 2013;
let leap = leapYear(year);
console.log(leap);
