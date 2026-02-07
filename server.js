require("dotenv").config();

const app = require("./app")

const connectDB = require("./src/config/db")

connectDB();

app.listen(process.env.PORT,()=>
    console.log(`Server start on ${process.env.PORT}`)
)