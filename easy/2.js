// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

var reverse = function (x) {
    const targetStr = x;
    const strLength = x.length - 1;
    const arr = [];
    for (let i = 0; i <= Math.ceil(strLength / 2); i++) {
        const temp = targetStr[i];
        const temp2 = targetStr[strLength - i];
        arr[i] = temp2;
        arr[strLength - i] = temp;
    }
    return +arr.toString().replace(/,/g, '');
};

console.log(reverse('12345678'));