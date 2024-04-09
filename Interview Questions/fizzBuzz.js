function fizzBuzz() {
    
    let result =[]

    for (let i = 1; i <= 30; i++) {
        // const element = array[i];
        if(i % 15 ==0){
            result.push("fizzbuzz")
        }
        else if(i % 2 == 0){
            result.push("fizz")
        }
        else if(i % 5 ==0){
            result.push("buzz")
        }

        else result.push(i)
    }
    return result;
}

// const array = [3,4,6,4,6,7,9]

const answer = fizzBuzz();
console.log(answer)