require('dotenv').config()
const libExpress = require('express')
const libPath = require('path')
const logger = require('./utils/logger')
const hbs = require('hbs');

//initialization of app
const app = libExpress()
app.set('view engine', 'hbs');
//json data incoming
app.use(libExpress.json())
// tell where partials are 
hbs.registerPartials(libPath.join(__dirname, 'views', 'partials'));
//log the request
app.use(require('./middlewares/middlewareRequestReader'))
//configure static files
app.use(libExpress.static(libPath.join(__dirname,"public")))
//api route
app.use('/api',require('./routers/api'))
//ui route
app.use(require('./routers/ui'))
//start the server
app.listen(process.env.PORT,()=>{
    logger(`Server Started At Port ${process.env.PORT}`,"success")
})