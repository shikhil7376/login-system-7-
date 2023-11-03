var express=require("express");
var router=express.Router()
const credential={
    email:"admin@gmail.com",
    password:"admin123"
}

router.get('/',(req,res)=>{ 
    if(req.session.user){
        res.redirect('/dashboard')
    }
    else
    res.render('base', { title: "Login system" })
})



//login user

router.post('/login',(req,res)=>{
   // console.log(req.body);
    if(req.body.email==credential.email && req.body.password==credential.password){
        req.session.user = req.body.email 
      res.redirect('/dashboard')

    // res.end("Login Succesful...!")
    }else{
        res.render('base',{title:"Express",errmsg:"invalid credentials"}) 
    }
})
//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user: req.session.user })
    }else{
        res.redirect('/')
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send("error")
        }else{
           res.render('base',{title:"Express",logout:"logout Succesfully...!"}) 
        }
    })
})


module.exports=router



