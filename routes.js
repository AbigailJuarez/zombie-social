var express=require("express");
var Zombie=require ("./models/zombie");
//var Equipament=require("./models/equipament");

//var acl=require("express-acl");

var passport=require("passport");

var router=express.Router();

//router.use(acl.authorize);

router.get("/",(req,res,next)=>{
   Zombie.find()
    .sort({createAt:"descending"})
    .exec((err,ringo)=>{
        if(err){
            return next(err);
        }
        res.render("index",{ringo:ringo});
    });
});

router.get("/signup",(req,res,next)=>{
    res.render("signup")
});

router.get("/ringo",(req,res)=>{
    res.render("ringo");
});

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});

router.get("/contacto",(req,res)=>{
    res.render("contacto");
});

router.get("/trabajo",(req,res)=>{
    res.render("trabajo");
});


function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        next();
    }else{
        req.flash("info","necesitas iniciar sesion para poder ver esta seccion");
        res.redirect("/login");
    }
}

module.exports=router;