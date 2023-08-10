const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const signupRouter = require("./routes/signup.Router");
const loginRouter = require("./routes/login.Router");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Server has started on ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
