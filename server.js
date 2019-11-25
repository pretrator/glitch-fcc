// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api", function(request, response) {
    response.send("Chall raha hai bhosadike")
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port ");
});
