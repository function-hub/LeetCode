/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 递归 +

var twoSum = function(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (sum === target) {
        if (numbers[i] <= numbers[j]) {
          result = [i + 1, j + 1];
        } else {
          result = [j + 1, i + 1];
        }
        return;
      }
    }
  }
  return result;
};

var twoSumOptimize = function(numbers, target) {
  let first = 0,
    last = numbers.length - 1;
  while (numbers[first] + numbers[last] != target) {
    if (numbers[first] + numbers[last] > target) {
      last--;
    } else {
      first++;
    }
  }
  return [first + 1, last + 1];
};

twoSum([2, 3, 4], 6);
