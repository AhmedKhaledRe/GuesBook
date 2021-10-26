const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./Back/config");

// configuration of mongoose
mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB!!!");
  const FakeDb = require("./Back/fake-db");
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

// configuration of PORT
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

// how to listen and what PORT
app.listen(PORT, () => console.log("App is running!"));
