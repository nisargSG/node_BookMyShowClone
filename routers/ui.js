const uiRouter = require('express').Router()

const libJWT = require('jsonwebtoken');


uiRouter.get("/",async (req,res,next)=>{

    if(req.cookies.jwt_token){

        //verify cookie value - tokenvalid ????
        try{
            const user = await libJWT.verify(req.cookies.jwt_token,process.env.JWT_SECRET_KEY);
            next()
        }
        catch(e){
            res.redirect("/login")
        }

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