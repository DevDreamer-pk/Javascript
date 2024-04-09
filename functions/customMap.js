function main() {
    const array = [2, 4, 6, 2, 7, 8];
    //Write your code here.
    //Create your higher order functiomn here with the name customMap with takes two parameter array and a callback function.
    //The function should return an array
    //Do not modify any other code.
    function squar(num){
	return num*num;
     }
    
    function customMap(array,callbackFn){
        let modifiedArray = [];
        for(let element of array){
            const store = callbackFn(element);
            modifiedArray.push(store);
        }
        return modifiedArray;
    }
    let result = customMap(array,squar);
    console.log(result);
    
    return customMap;
  }
main()

