var express = require("express");


var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listen to port 5000
app.listen(5000, function () {
  console.log('Dev app listening on port 5000!');
});