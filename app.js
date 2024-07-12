require('dotenv').config()
const libExpress = require('express')
const libPath = require('path')
const logger = require('./utils/logger')
const hbs = require('hbs');
const {connectDB} = require('./utils/db')
const libCookieParser = require('cookie-parser');

//initialization of app
const app = libExpress()

//configuration hbs
app.set('view engine', 'hbs');
hbs.registerPartials(libPath.join(__dirname, 'views', 'partials'));

//log the request
app.use(require('./middlewares/middlewareRequestReader'))
//json data incoming
app.use(libExpress.json())
//allow cookies
app.use(libCookieParser())
//configure static files
app.use(libExpress.static(libPath.join(__dirname,"public")))
//api route
app.use('/api',require('./routers/api'))
//ui route
app.use(require('./routers/ui'))
//start the server
app.listen(process.env.PORT,()=>{
    logger(`Server Started At Port ${process.env.PORT}`,"success")
    //connect db to connect with databse
    connectDB()
})