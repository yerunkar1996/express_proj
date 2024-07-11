///Mysql  Database connection
// npm i mysql2
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "nprDB"
})
console.log("Mysql database connection establish")
// connection.query("use nprDB",(err,result)=>{
//     if(err){console.log(err)}
//     else{
//         console.log("Database connected to nprDB")
//     }
// })


const express = require('express')

const router = express.Router()

//GET API -- MYSQL
router.get('/dashboard', (req,res)=>{
    connection.query('select * from users order by id ASC;', (err, result)=>{
        if(err){
            console.log(err)
            res.status(404).send(err)
        }
        else{
            console.log(result)
            // res.send(result)
            res.render('home', {title: "Home Page from ejs", data: result})
        }
    })
})

//POST API -- 
// Get Template
router.get('/addDetails',(req,res)=>{
    res.render('addDetails')
})


router.post('/addDetails',(req,res)=>{
    let data = req.body
    console.log(data)
    connection.query(
        `insert into users values(${data.id},
            '${data.Name}', 
             ${data.age}, 
             ${data.mobileNo}, 
             '${data.Place}')`,
        (err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(result)
                res.redirect('/crud/dashboard')
            }
        }
    )
})


// delete API
router.get('/deleteData/:name', (req,res)=>{
    let data = req.params.name
    connection.query(
        `delete from users where Name='${data}'`, 
        (err,result)=>{
            if(err){
                console.log(err)
            res.status(404).send(err)
        }
        else{
            console.log(data +" data has been delete", result)
            res.redirect('/crud/dashboard')
        }
        }
    )
})




//PUT API
// get Update Template
router.get('/updateData/:id', (req,res)=>{
    let data = req.params.id
    connection.query(`select * from users where id=${data}`,
    (err,result)=>{
        if(err){
            console.log(err)
            res.status(404).send(err)
        }
        else{
            res.render('updateDetails', {data:result})
        }
    })
    
})


router.post('/updateData', (req,res)=>{
    let data = req.body
    connection.query(
        `update users set age=${data.age}, Place='${data.Place}' where id=${data.id}`,
        (err,result)=>{
            if(err){
                console.log(err)
                res.status(404).send(err)
            }
            else{
                res.redirect('/crud/dashboard')
            }
        }
        )
})


module.exports = router