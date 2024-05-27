function findVowels(word) {
    const vowels= 'aeiou'
    let result =[]
    let count = 0
    for(let i = 0 ; i<= word.length -1 ; i++) {
        let char = word.charAt(i)
        if( vowels.includes(char)) {
            result.push(char)
        }
            
    }
    
    return result.length;
}

let word = 'prabhjot'

const answer = findVowels(word)
console.log(answer)