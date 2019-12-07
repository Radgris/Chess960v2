const express = require('express');
const routes = require("./routes/userRoutes.js");
const cors = require('cors');

var app = express();
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
var  port = process.env.PORT || 3000;

routes(app);

var server = app.listen(8080, function () {
    console.log("app running on port.", server.address().port);
});