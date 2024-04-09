function reverseString(words){
    let stringArray = '';
    for(let i = words.length - 1; i >=0 ;i--){
        const char = words.charAt(i)
        // stringArray.push(char)
        stringArray = stringArray + char;
    }
    return stringArray;
}

const word = "KHATRI"

const result = reverseString(word);
console.log(result)