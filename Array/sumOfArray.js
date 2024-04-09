function sumOfArray(arr){
    let sum = 0;
    
    for (let i =0; i < arr.length; i++){
        let num = arr[i];
        if(num % 2 ==0 && num % 5 !==0){
            sum = sum + num;
        }
    } 	
    
    return sum;
}
const arr = [1,6,8,3,5,20,10];
console.log(sumOfArray(arr))