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
