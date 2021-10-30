const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./Back/config");
const messageRoutes = require("./Back/routes/messages");
const userRoutes = require("./Back/routes/users");
const PORT = process.env.PORT || 5000;

// configuration of routes

// configuration of mongoose
mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB!!!");
  // const FakeDb = require("./Back/fake-db");
  // const fakeDb = new FakeDb();
  // fakeDb.seedDb();
  // console.log("Database Created!!!");
});

app.options("*", cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/users", userRoutes);

// how to listen and what PORT
app.listen(PORT, () => console.log("App is running!"));
