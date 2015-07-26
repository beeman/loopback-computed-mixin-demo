module.exports = function (app) {

  var items = [{
    name: 'Item1',
    status: 'new'
  }, {
    name: 'Item2',
    status: 'new'
  }, {
    name: 'Item3',
    status: 'archived'
  }];

  app.models.Item.create(items);
};
