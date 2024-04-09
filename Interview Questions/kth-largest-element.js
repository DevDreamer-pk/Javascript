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