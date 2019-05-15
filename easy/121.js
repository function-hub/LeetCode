// 时间复杂度 O(n2) 空间复杂度 O(1)
var maxProfit = function(prices) {
  let result = 0;
  for (let a = 0; a < prices.length; a++) {
    for (let b = a + 1; b < prices.length; b++) {
      const c = prices[b] - prices[a];
      if (c > 0 && c > result) {
        result = c;
      }
    }
  }
  return result;
};

//时间复杂度 O(n) 空间复杂度 O(1)

var maxProfit = function(prices) {
  let maxPrice = 0;
  let minPrice = Number.MAX_VALUE;
  for (let b = 0; b < prices.length; b++) {
    if (prices[b] < minPrice) {
      minPrice = prices[b];
    } else if (prices[b] - minPrice > maxPrice) {
      maxPrice = prices[b] - minPrice;
    }
  }
  return maxPrice;
};
