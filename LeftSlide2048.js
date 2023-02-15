// 2048 is a game where you need to slide numbered tiles (natural powers of 2) up, down, left or right on a square grid to combine them in a tile with the number 2048.

// The sliding procedure is described by the following rules:

// Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid.
// If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided.
// If more than one variant of merging is possible, move direction shows one that will take effect.
// Tile cannot merge with another tile more than one time.
// Sliding is done almost the same for each direction and for each row/column of the grid, so your task is to implement only the left slide for a single row.

test = [2,2,2,0]
test2 = [2, 2, 4, 4, 8, 8]
test3 = [0, 2, 0, 2, 4]
test4 = [0, 0, 2, 0]
test5 = [8,2,2,4]

function leftSlide(arr){
    // Identifying the original length of the array to put back in the 0s
    let len = arr.length;
    let new_arr = [];

    // Iterating through the array and removing 0s
    for (var i = arr.length - 1; i >= 0; i--){
        if (arr[i] === 0){
            arr.splice(i, 1);
        };
    };

    // Reversing the array so that when elements are removed the iteration can still occur
    const reversed = arr.reverse();
    // Iterating through the array and if the values at indexs one apart are the same, combining and adding to a new array
    for (var j = reversed.length-1; j >= 0; j--){
        if (!reversed[j]){
            continue;
        }
        // If they are the same value combine, add to the new array and remove from the original array
        else if (reversed[j] === reversed[j-1]){
                new_arr.push(reversed[j] + reversed[j-1]);
                reversed.splice(j,1);
                reversed.splice(j-1,1);
            }
        // Otherwise add to the new array and remove from the original array
        else {
                new_arr.push(reversed[j]);
                reversed.splice(j,1);
            }
         };
    // Readding the 0s
    while (new_arr.length < len){
        new_arr.push(0);
    };
    
    console.log(new_arr);
    return new_arr;
}

leftSlide(test)
leftSlide(test2)
leftSlide(test3)
leftSlide(test4)
leftSlide(test5)