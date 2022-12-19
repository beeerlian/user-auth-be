const controller = require("../controllers")


module.exports = function (app) {
       app.get('/user', controller.user.getAll)
       app.get('/user/:id', controller.user.get)
       // app.get('/user/:id/price', controller.user.calculatePrice)
       app.post('/login', controller.user.login)
       app.post('/register', controller.user.register)
}


