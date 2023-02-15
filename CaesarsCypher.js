// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). 
// It should return an encrypted string.

let string = 'Hello my name is George'
let rotation = 3

function cypherMaker(s, k){
    // Just to ensure proper variables are entered
    if (typeof(s) != 'string' || typeof(k) != 'number'){
        console.log('Please ensure the first variable is a string and the second is an integer');
    };

    // These are used as reference points for the character codes
    const lowestUpper = 'A'.charCodeAt();
    const highestUpper = 'Z'.charCodeAt();
    const lowestLower = 'a'.charCodeAt();
    const highestLower = 'z'.charCodeAt();

    let cypher = '';

    // looping through the string
    for (i = 0; i < s.length; i++){

        // Identifying the code for both the original character and the rotated character
        let x =  s.charCodeAt(i);
        let y = s.charCodeAt(i) + k;

        // Checking if UPPERCASE
        if (x >= lowestUpper && x <= highestUpper){
            // If the character code is outside the bounds of uppercase letters, reducing the code by 26 until contained within the bounds
            if (x <= highestUpper && y > highestUpper){
                while (y > highestUpper){
                    y = y - 26;
                };
            }
            // Adding the character to the cypher
            cypher = cypher + String.fromCharCode(y);
        }
        // Repeating for lowercase
        else if (x >= lowestLower && x <= highestLower){
            if (x <= highestLower && y > highestLower){
                while (y > highestLower){
                    y = y - 26;
                };
            }
            cypher = cypher + String.fromCharCode(y);
        }
        // Catching punctuation
        else {
            cypher = cypher + String.fromCharCode(s.charCodeAt(i));
        }
    };

    console.log(cypher);
    return cypher;
}

cypherMaker(string, rotation)