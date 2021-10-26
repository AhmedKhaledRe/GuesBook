const express = require("express");
const bodyParser = require("body-parser");

// configuration of PORT
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

// how to listen and what PORT
app.listen(PORT, () => console.log("App is running!"));
