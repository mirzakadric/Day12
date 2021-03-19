// Only change code below this line

function sumFibonacci(num){
    var firstN = 0;
    var iter = 1;
    var res = 0;
    while (iter <= num) {
        if (iter % 2 !== 0) {
            res += iter;
        }
        iter += firstN;
        firstN = iter - firstN;
    }
    if (res == 2){
        return res-1;
    }

  return res;
}

// Only change code above this line

console.log(sumFibonacci(1));  // Change this line
console.log(sumFibonacci(10));  // Change this line
console.log(sumFibonacci(20));  // Change this line
console.log(sumFibonacci(4));  // Change this line
console.log(sumFibonacci(-5));  // Change this line
module.exports = sumFibonacci;