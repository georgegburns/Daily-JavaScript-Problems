// Write a function that receives an array of x integers and returns an array of x integers in the Nth term of a quadratic number sequence (where x is the length of the incoming array). 
// Your function should return the continuation of the quadratic sequence of the length equal to the length of the given array.

// Examples
// quadSequence([48, 65, 84]) ➞ [105, 128, 153]

// quadSequence([0, 1, 6, 15, 28]) ➞ [45, 66, 91, 120, 153]

// quadSequence([9, 20, 33, 48]) ➞ [65, 84, 105, 128]

function quadSequence(arr){
    // a function to calculate the differences between numbers in an array
    function diffs(arr){
        return arr
          .slice(1)
          .map((num, i) => num - arr[i]);
      }
    
    // Nth term rule of a quadratic sequence is an^2 + bn + c

    // a is equal to the 2nd level differences between the quadratic sequence divided by 2
    let a = diffs(diffs(arr))[0]/2;

    // b is equal to the difference between a sequence of the original sequence minus the new an^2 sequence 
    let anpow_arr = [];
    // Starting i at 1 as n can't equal 0
    for (var i = 1; i < arr.length + 1; i ++){
        let x = a * Math.pow(i,2);
        // Minus 1 to get correct index based on i
        let y = arr[i-1] - x;
        anpow_arr.push(y);
    }

    // Using function diffs to get b
    let b = diffs(anpow_arr)[0];

    // c is equal to the difference between an^2 and bn at any given point in the sequence
    let anpow_bn_array = []
    for (var i = 1; i < arr.length + 1; i++){
        let x = b * i;
        let y = anpow_arr[i-1] - x;
        anpow_bn_array.push(y);
    }

    let c = anpow_bn_array[0];

    // to get the continuation of the quadratic sequence up to + the length of the original array
    let dist = arr.length * 2;

    let new_arr = [];
    for (var i = arr.length + 1; i < dist + 1; i ++){
        let quad = (a * Math.pow(i,2)) + (b * i) + c;
        new_arr.push(quad);
    }

    console.log(new_arr);
    return new_arr;
}

const test = [48, 65, 84];
const test2 = [0, 1, 6, 15, 28];
const test3 = [9, 20, 33, 48];

quadSequence(test);
quadSequence(test2);
quadSequence(test3);