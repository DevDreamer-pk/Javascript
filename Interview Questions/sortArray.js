function sortArray(arr){
    // let resultArray = [];
    for (i = 0; i < arr.length-1; i++){
        for (let j = 0 ; j< arr.length-1 ; j++){
            if(arr[j] > arr[j+1] ){
                
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
            
        }
    }
    return arr;
}

const arr = [8,4,3,5,2,6,7]

const result = sortArray(arr);
console.log(result);



// function selectionSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }

// const arr = [8, 4, 3, 5, 2, 6, 7];
// const result = selectionSort(arr);
// console.log(result); // Output: [2, 3, 4, 5, 6, 7, 8]
