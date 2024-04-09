// function reverseArray(arr) {
//     let result = [];
//     for(i = arr.length -1 ; i>=0 ; i--){
//         result.push(arr[i]);
//     }
//     return result
// }

// const arr = [3,4,5,6,7,8,9]
// const reversedArray = reverseArray(arr);
// console.log(reversedArray);



function reverse(arr){ 
    
    for(let i=0, j =arr.length-1 ; i<j; i++,j--){
        temp = arr[i];
        arr[i]= arr[j];
        arr[j]=temp
    }

    return arr;
}
const arr = [3,4,5,6,7,8,9]
const reverseArr = reverse(arr)
console.log(reverseArr)