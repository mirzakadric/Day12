// Only change code below this line

function myRecursion(arr, n){
    var sum = 0;
    for (i = 0; i < n; i++){
        sum += arr[i];
    }
    return sum;
}

// Only change code above this line

console.log(myRecursion([1], 0));  // Change this line
console.log(myRecursion([1, 2, 3, 4], 2));  // Change this line
console.log(myRecursion([1, 2, 3, 4], 3));  // Change this line
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5));  // Change this line
module.exports = myRecursion;