let arr = [1, 2, 5, 4, 7, 6, 7, 1];
function findDuplicate(arr) {
    let result = [];
    let count = {};

    for(let i =0; i<arr.length; i++){
        let num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
        if(count[num] == 2){
            result.push(num);
        }
    }
    return result;
}

console.log(findDuplicate(arr))