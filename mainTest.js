// npm init
// npm i express
// npm i -g nodemon

const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Rest API
app.get('',(req,res)=>{
    res.send("Hello Welcome")
})


// Database connect
// npm i mongoose
mongoose.connect("mongodb+srv://root:root@cluster0.rjiuf.mongodb.net/nprDB?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected!")
}).catch((err)=>{
    console.log(err)
})


port = 8080
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})