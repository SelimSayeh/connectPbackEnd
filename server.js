const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const userRoute = require("./routes/User");
const addressRoute = require("./routes/Address");

const userController = require("./controllers/userController");
const addressController = require("./controllers/addressController");

mongoose.connect(
  "mongodb+srv://test:bBEfdWBnqsykSxvk@cluster0.crp9tgd.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database connection established");
});

const app = express();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}  `);
});

app.use("/api/user", userRoute);
app.use("/api/address", addressRoute);
