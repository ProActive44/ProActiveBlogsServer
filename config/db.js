import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser : true
  })
  .then((res) => console.log("Database connected."))
  .catch((err) => console.log("Failed to connect database", err));


export default connection;
