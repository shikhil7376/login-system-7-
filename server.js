const express=require('express')
const path=require('path')
const session=require("express-session")
const{v4:uuidv4}=require("uuid")
const nocache=require('nocache')
const router=require('./router')

const app=express();
   
const port=process.env.PORT||3001;

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use(nocache())

//load static assets
app.use(express.static(path.join(__dirname,'public')))

app.use(session({
    secret: 'tjtryrjtfyjyrytj',
    resave: false,
    saveUninitialized: true
}))

app.use('/',router)

//home route




app.listen(port,()=>console.log("server running on http://localhost:" + port))