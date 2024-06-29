require('dotenv').config()
const libExpress = require('express')
const libPath = require('path')
const logger = require('./utils/logger')

//initialization of app
const app = libExpress()

//configure static files
app.use(libExpress.static(libPath.join(__dirname,"public")))

app.use(require('./middlewares/middlewareRequestReader'))

//api route
app.use('api',require('./routers/api'))

//ui route
app.use(require('./routers/ui'))




app.listen(process.env.PORT,()=>{
    logger(`Server Started At Port ${process.env.PORT}`,"success")
})