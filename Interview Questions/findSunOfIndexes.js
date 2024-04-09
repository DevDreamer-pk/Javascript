
// Find sub-array / indexes with given sum 

function findSum(array,totalSum){
    let result = []
    let Initial;
    let end;

    for ( index = 0; index < array.length; index++) {
        let currentSum = array[index];
        if(currentSum == totalSum){           
            return "Total sum found on index :", +index;
        } else {
            for ( j = index +1; j < array.length; j++) {
                const element = array[j];
                currentSum = currentSum + element;
                if (currentSum== totalSum) {
                    Initial = index;
                    end = j;
                    for (Initial ; Initial <= j; Initial++) {
                        const element = array[Initial];
                        result.push(element);
                        
                    }
                    console.log('Result ',result)
                    return `Sum found betweem indexes ${index} and ${j}.`;
                }
                
            }
        }

    }

    return result;
}

const arr = [2,3,4,5,6,8]
const totalSum = 11;

const answer = findSum(arr,totalSum);
console.log(answer)