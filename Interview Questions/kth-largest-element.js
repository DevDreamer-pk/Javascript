function largestValue(arr, k){
    let largerNumber = [];
    for (i = 0; i < arr.length-1 ; i++){
        for(let j=0 ; j< arr.length ; j++){
            if(arr[j]> arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }     
    }
    // return arr;

    if(k){
        let ele = arr[arr.length -k] 
        largerNumber.push(ele);     
    }
    return largerNumber
}

const arr = [4,3,5,2,6,7]
const k = 5;

const result = largestValue(arr,k);
console.log(result);


// kth largest value , largest value in an array , smallest element in an array


// function sort(arr) {
//     let result = []
//     for(let i = 0 ; i<= arr.length -1 ; i++) {
//         for( let j=0 ; j<= arr.length -1 ; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]= arr[j+1]
//                 arr[j+1]= temp
//             }
//         }
//     }
    
//     for(let i = 0 ; i<= arr.length -1 ; i++) {
//         if( i == 0) {
//             result.push(arr[i])
//         }
//         if( i == arr.length -1) {
//             result.push(arr[i])
//         }
        
//     }
//     return result;
// }

// let arr= [2,5,7,4,3,9]

// const answer = sort(arr)
// console.log(answer)