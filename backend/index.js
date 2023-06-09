const express = require('express')
const connecttion = require("./db/db")
require("dotenv").config();
const authRouter = require('./router/authRouter')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/auth", authRouter);

app.get('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await connecttion;
  console.log("Server started on http://localhost:8080");
});