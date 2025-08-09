/**
 * @param {number} x
 * @return {boolean}
 */
let num = 121;

var isPalindrome = function (x) {

    let d = 0;
    let n = x;
    let sum = 0;
    if (x < 0) {
        return false
    }


    while (n > 0) {
        d = n % 10;
        sum = sum * 10 + d;
        n = Math.floor(n / 10);

    }

    if (sum == x) {
        return true
    }
    else {
        return false
    }

};

let revers = isPalindrome(num);
console.log(revers)
