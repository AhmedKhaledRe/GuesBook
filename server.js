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
  // console.log("Connected to MongoDB!!!");
  // const FakeDb = require("./Back/fake-db");
  // const fakeDb = new FakeDb();
  // fakeDb.seedDb();
  // console.log("Database Created!!!");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/users", userRoutes);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Front", "build", "index.html"));
  });
}

// how to listen and what PORT
app.listen(PORT, () => console.log("App is running!"));
