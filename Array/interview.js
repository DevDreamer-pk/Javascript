function getAlphabetValues(word) {
    // Define an array to store the values of alphabets
    var alphabetValues = [];
    word = word.toUpperCase()
    let sum= 0;
    
    // Initial values for A and B
    var A = 0;
    var B = 1;
    
    // Loop through the alphabets from A to Z
    for (var i = 0; i < 26; i++) {
        // Calculate the value of the current alphabet
        var value = (i === 0) ? A : ((i === 1) ? B : alphabetValues[i - 1] + alphabetValues[i - 2]);
        
        // Store the value in the array
        alphabetValues.push(value);
    }
    
    // Return the array containing alphabet values
    // return alphabetValues;
    // for (var i = 0; i < 26; i++) {
    //     var alphabet = String.fromCharCode(65 + i); // Convert index to alphabet
    //     // console.log(alphabet + ": " + alphabetValues[i]);
    //     if(alphabet == "M"){

    //     }
    // }
    

    for(let i= 0 ; i < word.length; i++){
        const char = word.charAt(i);
        var index = char.charCodeAt(0) - 'A'.charCodeAt(0)
        // console.log(char + ": " + alphabetValues[index]); 
        sum = sum + alphabetValues[index];
    }
    return sum;
}

// Call the function to get the values of A to Z
const result = getAlphabetValues("MAN");
console.log(result);

// Display the values

