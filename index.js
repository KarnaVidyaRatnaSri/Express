var express=require("express");
const app=express();
const port=1200;
app.get("/",(req,res)=>{
    res.send("hello All");
});
app.listen(port,()=>{
    console.log('server is running on ${port}');
});
