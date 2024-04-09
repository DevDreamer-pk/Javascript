function febonacciSequence(word){
    let arrStore = []
    let A=0
    let B=1 

    for (let i = 0 ; i < 26; i ++){
        let value = i==0 ? A : i==1 ? B : arrStore[i-1]+ arrStore[i-2]
        arrStore.push(value)
    }
    // return arrStore;

    // for (let i = 0; i < 26; i++){
    //     const alphabet = String.fromCharCode(65 +i);
    //     console.log( alphabet +" :" + arrStore[i])
    // }

    let sum = 0;

    for (let i = 0; i < word.length; i++){
        const char = word.charAt(i);
        const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
        let num = arrStore[index];
        sum = sum + num;
    }

    return sum;


}

const result = febonacciSequence("MAN");
console.log(result);