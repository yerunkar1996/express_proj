let getLogin = (req,res)=>{
    res.render('login',{title:"Login Page"})
    console.log(req.session.user, req.session.pass)
}

let postlogin = function(req,res){
    let data = req.body

    req.session.user = data.Username
    req.session.pass = data.Password
    console.log(data)
    res.redirect('/login')
}

module.exports = {
    getLogin,
    postlogin
}