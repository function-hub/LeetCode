/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        const obj = {}
        for (let j = 0; i < nums.leng - 1; j++) {
            obj.sum = nums[i] + nums[j + 1];
            obj.first = i;
            obj.second = j + 1;
            arr.push(obj);
        }
    }
};

var fourSum = function (nums, target) {
    const results = [];
    let sum = 0;
    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                for (let d = c + 1; d < nums.length; d++) {
                    sum = nums[a] + nums[b] + nums[c] + nums[d]
                    if (sum === target) {
                        console.log(sum, a, b, c, d);
                        results.push([nums[a], nums[b], nums[c], nums[d]]);
                    }
                }
            }
        }
    }
    return results;
}

const test = [1, 0, -1, 0, -2, 2];
console.log(fourSum(test, 0));