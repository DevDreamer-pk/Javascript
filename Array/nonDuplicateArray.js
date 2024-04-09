//complete the function mergeArray
//Do not alter the starter code.
arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    //Implemet your function here
  let mergedArray = arr1.concat(arr2);

  // Create a Set to store unique elements while preserving order
  let uniqueSet = new Set(mergedArray);

  // Convert the Set back to an array
  let uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
      
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]