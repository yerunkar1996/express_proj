// node -v
// npm -v
// npm init
// npm i express
// npm i -g nodemon
// npm install
// npm i mongoose

const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

// npm i cors
const cors = require('cors')
app.use(cors())


// set Template Engine
// npm i ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// body-parser
// npm i body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// MongoDB Database
const mongoose = require('mongoose')
// connection method  --- Atlas server
mongoose.connect('mongodb+srv://root:root@cluster0.rjiuf.mongodb.net/nprDB?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection establish successfully!")
}).catch((err)=>{console.log(err)})


app.get('/', (req,res)=>{
    res.send("<h2>Hello</h2>")
})

// app.get('/Home', (req,res)=>{
//     data = fs.readFileSync('./views/index.html').toString()
//     console.log(data)
//     res.send(data)
// })

// app.post('/addData', (req,res)=>{
//     res.send('<h2>Add Data to Database</h2>')
// })

// app.put('/UpdateData', (req,res)=>{
//     res.send('<h2>Data Updated!</h2>')
// })

// app.delete('/deleteData', (req,res)=>{
//     res.send('<h2>delete Data from Database</h2>')
// })





//Router Module declaration
const studentRoute = require('./routes/studentRoute')
app.use('/routeModule',studentRoute)


// API Creation -- using MongoDB atlas
const studentModel = require('./model/studentModel')
//GET API
app.get('/getDetails',(req,res)=>{
    studentModel.find().then((mdbData)=>{
        console.log(mdbData)
        res.send(mdbData)
    }).catch(err=>{console.log(err)})
})


//Delete API
app.delete('/Details', (req,res)=>{
    studentModel.deleteOne({Name:req.query.name}).then((data)=>{
        res.send(data)
    }).catch((err)=>{res.json({message:"404! Error"+err})})
})


//Post API
app.post('/addData', (req,res)=>{
    const newData = new studentModel({
        _id: new mongoose.Types.ObjectId,
        Name : req.query.Name,
        Email : req.query.Email, 
        MobileNo :req.query.MobileNo,
        Place : req.query.Place 
    })
    newData.save().then((data)=>{
        res.send(data)
    }).catch(err =>{
        console.log(err)
    })
})


// ///Routes  --- url building
// app.get('/Home',(req,res)=>{
//     res.send('Home')
// })

// // //Dynamic Routes
// app.get('/product/:prodName', (req,res)=>{
//     res.send(req.params.prodName)
// })


// Update API
app.put('/updateData/:SName', (req,res)=>{
    Name= req.params.SName
    studentModel.updateOne({Name:Name},{
        $set:{
            Email:req.query.mail,
            Age:req.query.age
        }
    }).then((data)=>{
        res.send(data)
    }).catch(err=>{console.log(err)})
})



// // Use Mysql with Ejs 
const ejsCrud = require('./routes/crudAppejs')
app.use('/crud',ejsCrud)


// Session and cookies
//npm i express-session
//npm i --save cookie-parser

const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(session({
    secret:"this is my node app",
    resave: false,
    saveUninitialized: true,
}))

app.use(cookieParser())

app.get('/setSession/:name/:age',(req,res)=>{
    req.session.user = req.params.name
    req.session.age = req.params.age
    res.send('set session '+req.session.user)
})


const loginController = require('./controllers/loginController')
app.get('/login', loginController.getLogin)


app.post('/postLogin', loginController.postlogin)



// cookieParser
app.get('/setCookies/:Name',(req,res)=>{
    res.cookie("User",req.params.Name, {maxAge: 10000}).send(req.params.Name+" User has logged In")
})

app.get('/getCookies',(req,res)=>{
    res.send(req.cookies.User+" this is cookie value")
    console.log(req.cookies.User)
})


app.listen(3000, ()=>{
    console.log('server is running on port http://localhost:3000/')
})