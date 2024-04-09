function findTheNumber(arr,ele) {
    let answer = -1;
    let count = 0;
    
    for(let i =0; i < arr.length; i++){
        let num = arr[i];
        if(num == ele){
            let index = arr.indexOf(num);
            answer = index;
        }
    }
 
    return answer;
}

let arr=[23,43,67,89,62,29];
let ele = 62;
let findNum = findTheNumber(arr,ele);
console.log(findNum);