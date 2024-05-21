
console.log("upper Left Triangle")
function upperLeftTriangle(n){
    //loop through each row
    for(let i = 0 ; i< n ; i ++){
        let row= '';
        //loop through each column
        for(let j=0 ; j< n-i; j++){
            row = row + '* '
        }
        console.log(row);
    }
}

upperLeftTriangle(5)

console.log("lower Left Triangle")



function lowerLeftTriangle(n){
    //loop through each row
    for(let i = 1 ; i<= n ; i ++){
        let row= '';
        //loop through each column
        for(let j=0 ; j< i; j++){
            row = row + '* '
        }
        console.log(row);
    }
}

lowerLeftTriangle(5)

console.log("lower Right Triangle")


function lowerRightTriangle(n){
    //loop through each row
    for(let i = 1 ; i<= n ; i++){
        let row= '';
        //loop through each column
        for(let j=0 ; j< n-i; j++){
            row = row + ' '
        }
        for(let k=0 ; k< i; k++){
            row = row + '*'
        }
        console.log(row);
    }
}

lowerRightTriangle(5)

console.log("upper Right Triangle")

function upperRightTriangle(n){
    //loop through each row
    for(let i = 0 ; i<= n ; i ++){
        let row= '';
        //loop through each column
        for(let j=0 ; j < i; j++){
            row = row + ' '
        }
        for(let k=0 ; k< n-i; k++){
            row = row + '*'
        }
        console.log(row);
    }
}

upperRightTriangle(5)

console.log("print Diamond Pattern")

function printDiamondPattern(n) {
    // Upper half of the diamond
    for (let i = 1; i <= n; i++) {
        let row = '';
        // Add spaces
        for (let j = 0; j < n - i; j++) {
            row += ' ';
        }
        // Add asterisks
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }

    // Lower half of the diamond
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        // Add spaces
        for (let j = 0; j < n - i; j++) {
            row += ' ';
        }
        // Add asterisks
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

// Example usage: print a diamond pattern with 5 rows
printDiamondPattern(5);


