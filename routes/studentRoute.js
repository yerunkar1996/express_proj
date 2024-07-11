const express = require('express')

const router = express.Router();
const studentModel = require('../model/studentModel')

router.get('/getRoute',(req,res)=>{
    res.send("Hello from student route!")
})

router.get('/getData',(req,res)=>{
    studentModel.find().then((mdbData)=>{
        console.log(mdbData)
        res.send(mdbData)
    }).catch(err=>{console.log(err)})
})

module.exports = router