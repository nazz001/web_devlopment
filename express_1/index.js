const express=require("express")
const app=express()

const port=3000
app.get('/',(req,res)=>{
    res.json({message:"welcome to the devlopment"})
})

app.get("/home",(req,res)=>{
    res.status(200).send("good boy and bad boy")
})

app.listen(port,()=>{
    console.log("server is running")
})