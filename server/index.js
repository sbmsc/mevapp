const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/post");
app.use("/api/posts", posts);

//HANDLE PRODUCTION
if (process.env.NODE_ENV === "production") {
  //static folder
  console.log("checkpoint");
  app.use(express.static(__dirname + "/public/"));

  //handle spa
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//port
app.set("port", process.env.PORT || 5000);

// Start node server
app.listen(app.get("port"), function() {
  console.log("Node server is running on port " + app.get("port"));
});
