// Tap code is a way to communicate messages via a series of taps (or knocks) for each letter in the message. Letters are arranged in a 5x5 polybius square, with the letter "K" being moved to the space with "C".

//    1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
// Each letter is translated by tapping out the row and column number that the letter appears in, leaving a short pause in-between. If we use "." for each tap, and a single space to denote the pause:

// text = "break"

// "B" = (1, 2) = ". .."
// "R" = (4, 2) = ".... .."
// "E" = (1, 5) = ". ....."
// "A" = (1, 1) = ". ."
// "K" = (1, 3) = ". ..."
// Another space is added between the groups of taps for each letter to give the final code:

// "break" = ". .. .... .. . ..... . . . ..."
// Write a function that returns the tap code if given a word, or returns the translated word (in lower case) if given the tap code. When translating from tap-code, default to the letter "c" if the tap-code ". ..." is found.

function tapCode(str){
    // A 3D array to be used as a lookup to generate the . and converts . to letter
    const polybius = [['A','B','C','D','E'],
                    ['F','G','H','I','J'],
                    ['L','M','N','O','P'],
                    ['Q','R','S','T','U'],
                    ['V','W','X','Y','Z']]
    
    let tap = '.'

    let new_str = ''

    // To check if the input is .
    if (str.includes('.')){
        // Split the input by spaces so that every 2 indexes of the array are coordinates
        let arr = str.split(' ');
        // Iterate through the new array
        for (let i = 0; i < arr.length; i++){
            // If the index is even, get coordinates
            if (i % 2 === 0){
                // Locate coordinates by the length - 1 (due to 0 indexing)
                let coordV = arr[i].length - 1;
                let coordH = arr[i+1].length - 1;
                // Locate the letter by using the coordinates as indexes in the lookup array
                letter = polybius[coordV][coordH];
                // Add the letter to the output
                new_str = new_str + letter;
            }
            // If odd, continue
            continue;
        }
        
    } 
    // Else input is a word
    else {
        // Iterating through the word to get each letter
        for (let j = 0; j < str.length; j++){
            // Iterating through the 3D array to locate the row and column the letter is contained in
            for (let x = 0; x < polybius.length; x++){
                if (polybius[x].includes(str[j].toUpperCase())){
                    // First taps are the row index + 1
                    let multi1 = x+1;
                    let first = '.'.repeat(multi1);
                    // Second taps are the column index + 1
                    let multi2 = polybius[x].indexOf(str[j].toUpperCase()) + 1;
                    let second = '.'.repeat(multi2);
                    // Concatenating the string of . for that letter
                    new_str = new_str + first + ' ' + second + ' ';
                }
                // Catch for K
                else if (str[j].toLowerCase() === 'k') {
                    new_str = new_str + '.' + ' ' + '...' + ' ';
                    break;
                }
            };
        };
    };
    // Removing any leftover whitespace
    new_str = new_str.trimEnd();
    console.log(new_str);
    return new_str.toLowerCase();
}

let test = '. ... . . .... ....'
let test2 = 'George'

tapCode(test)
tapCode(test2)