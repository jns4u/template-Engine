var express=require("express"),
    app = express();

app.set("view engine","jade");
app.set("views", __dirname +"/templates");

app.get("/",function(req,res){
 res.render("SimpleJade");
});

app.listen(3000,function(){
 console.log("front end server started at port 3000");
});
    
