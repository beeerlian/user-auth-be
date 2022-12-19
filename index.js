const express = require('express');
const bodyParser = require('body-parser');
const appRoute = require('./routes');
const db = require('./models')
const cors = require("cors");
require('dotenv').config()
//sequilize
db.sequelize.authenticate().then(() => {
       console.log('Connected to database');
       db.sequelize.sync({ forced: true }).then(() => {
              console.log('Synced to database');

       }).catch((err) => {
              console.log(`Failed to sync database : ${err}`);
       });
}).catch((err) => {
       console.log(`Failed connect to database : ${err}`);
});

//express
var corsOptions = {
       origin: "http://0.0.0.0/"
};
const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

appRoute(app)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
       console.log(`Server running at http://${HOST}:${PORT}/`);
});