const controller = require("../controllers")


module.exports = function (app) {
       app.get('/item', controller.item.getAll);
       app.post('/item', controller.item.create);
       app.get('/item/:id', controller.item.get);
       app.put('/item/:id', controller.item.update);
       app.delete('/item/:id', controller.item.delete);
}
