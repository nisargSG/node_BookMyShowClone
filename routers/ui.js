const uiRouter = require('express').Router()

uiRouter.get("/",(req,res,next)=>{

    if(req.cookies.jwt_token){
        next()
    }
    else{
        res.redirect("/login")
    }

},(req,res)=>{

    res.render("dashboard")
})

uiRouter.get("/login",(req,res)=>{
    res.render("login")
})



module.exports = uiRouter