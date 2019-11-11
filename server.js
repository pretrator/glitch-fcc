// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/timestamp/:date_string", function(request, response) {
  let k = request.params.date_string;
  let dat = 0;
  if (k.length == 0) {
    dat = new Date();
  } else {
    try {
      dat = new Date(k);
      let resp = {
        unix: dat.getTime(),
        utc: dat.toUTCString()
      };
      response.send(resp);
    } catch(err) {
      response.send("{'error' : 'Invalid Date' }");
    }
  }
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
