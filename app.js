var express= require("express");
var app = express();

app.use(express.static("public"));
 
app.get("/", function(req, res){
   res.render("home.ejs") 
});
 
 












app.listen(process.env.PORT ,process.env.ID ,function(){
     console.log("you are connected");
 })