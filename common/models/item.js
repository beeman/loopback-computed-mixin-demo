module.exports = function (Item) {

  // Determine read only value by verifying the status
  Item.computedReadonly = function computedReadonly(item) {
    return item.status === 'archived';
  };

  // Return the time when the item was requested
  Item.computedRequestedAt = function computedRequestedAt() {
    return new Date();
  };

  // Return a random number between 1 and 10
  Item.computedRandom = function computedRandom() {
    return Math.floor(Math.random() * 10) + 1
  };

};
