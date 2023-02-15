// Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale).

// Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

// Generate 3 capital letters from the surname, if it has:

// At least 3 consonants then the first three consonants are used. (Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).

// Generate 3 capital letters from the name, if it has:

// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).

// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

let test = [{
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
  },
  {
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
  },
  {
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
  }];


function fiscalCode(arr){
    // Lookup list of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Lookup dict of months
    const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

    for (let x = 0; x < arr.length; x++){
        let code = '';

        // Surname
        let surnameVowels = [];

        // Generating the first 3 letters from the surname
        for (let i = 0; i < arr[x].surname.length; i++) {
            // Separating out vowels based on whether they are included in the already defined list
            if (vowels.includes(arr[x].surname[i].toLowerCase())){
                surnameVowels.push(arr[x].surname[i].toUpperCase());
            }
            // Adding the consonants to the code
            else {
                if (code.length == 3){
                    break;
                }
                code = code + arr[x].surname[i].toUpperCase();
            }
        };

        // If the length of the code isn't 3, iterating through the vowels and adding them
        if (code.length < 3) {
            for (let i = 0; i < surnameVowels.length; i++){
                if (code.length == 3){
                    break;
                };
                code = code + surnameVowels[i];
            };
        };

        // If the length of the code still isn't 3, adding X
        if (code.length < 3) {
            code = code + "X"
        };

        //Name
        let nameVowels = [];
        let nameConsonants = [];

        // Generating the 2nd set of 3 characters from the name
        for (let i = 0; i < arr[x].name.length; i++) {
            // Separating out vowels based on whether they are included in the already defined list
            if (vowels.includes(arr[x].name[i].toLowerCase())){
                nameVowels.push(arr[x].name[i].toUpperCase());
            }
            // Adding the consonants to the another list
            else {
                nameConsonants.push(arr[x].name[i].toUpperCase());
            }
        };

        // If exactly 3 consonants then adding those 3 in order
        if (nameConsonants.length == 3){
            for (let i = 0; i < nameConsonants.length; i++){
                code = code + nameConsonants[i];
            };
        }
        // If more than 3 consonants then adding the 1st, 3rd and 4th indexed consonant
        else if (nameConsonants.length > 3) {
            let temp = nameConsonants[0] + nameConsonants[2] + nameConsonants[3];
            code = code + temp;
        }
        // Else adding all the consonants
        else {
            for (let i = 0; i < nameConsonants.length; i++){
                code = code + nameConsonants[i];
            };
        }

        // If code length is below 6 then adding vowels
        if (code.length < 6){
            for (let i = 0; i< nameVowels.length; i++){
                if (code.length == 6){
                    break;
                };
                code = code + nameVowels[i];
            };
        };

        // If code length is still below 6 then adding X
        if (code.length < 6){
            code = code + "X";
        };

        //D.O.B and gender
        // Slicing the last two numbers from the D.O.B
        code = code + arr[x].dob.slice(-2);

        // Splitting the D.O.B and extracting the month and day
        let month = arr[x].dob.split('/')[1];
        let day = arr[x].dob.split('/')[0];

        // Adding the respective value from the months lookup array using the month as the key
        code = code + months[month.toString()];

        // Separating depending on gender
        if (arr[x].gender == 'M'){
            // If length is > 2 then adding 0 to start
            if (day.length < 2){
                code = code + ('0' + day);
            }
            // Otherwise adding day without changing
            else{
                code = code + day;
            }
        }
        else {
            // If female adding 40 to the day and then adding
            day = parseInt(day) + 40;
            code = code + day;
        };

        console.log(code);
    }
}

fiscalCode(test);