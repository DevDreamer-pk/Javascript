function count(arr){
    let count = {};
    let result = [];
    for(i=0; i < arr.length; i++){
        const num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
        if(count[num]== 2){
            result.push(num);
        }
    }
    return result;
}

const arr = [2,3,4,5,4,6,7]

const result = count(arr);
console.log(result);