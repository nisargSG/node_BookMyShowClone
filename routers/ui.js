const uiRouter = require('express').Router()

uiRouter.get("/",(req,res)=>{
    res.render("index")
})



module.exports = uiRouter