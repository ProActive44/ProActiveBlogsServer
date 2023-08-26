import express from 'express'
import cors from 'cors' 
import connection from "./config/db.js"
import signupRouter from './routes/signup.Router.js';
import loginRouter from './routes/login.Router.js';
import dotenv from 'dotenv'
dotenv.config();

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
