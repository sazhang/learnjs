let coins = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

module.exports = {
  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    if (coinType in coins) {
      return coins[coinType];
    } else {
      throw new Error('Unrecognized coin ' + coinType);
    }
  },

  convertToChange: function(amount) {
    let change = [];
    if (amount === 0) {
      return change;
    }
    let remainingChange = amount;
    const coinValues = Object.values(coins);
    let idx = Object.keys(coins).length - 1;
    while (remainingChange > 0) {
      let currentCoinVal = coinValues[idx];
      if (remainingChange - currentCoinVal >= 0) {
        const coinType = Object.keys(coins).find(key => coins[key] === currentCoinVal);
        change.push(coinType);
        remainingChange -= currentCoinVal;
      } else {
        if (idx === 0) {
          continue;
        } else {
          idx--;
        }
      }
    }
    return change;
  }
};