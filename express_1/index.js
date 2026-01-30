const express=require("express")
const app=express()


const port=3000
app.get('/',(req,res)=>{
    res.json({message:"welcome to the devlopment"})
})

app.get("/home",(req,res)=>{
    res.status(200).send("good boy and bad boy")
})
// // Lec 54 creating parameter
app.post("/home/:id?",(req,res)=>
{
    console.log(req.params)
    id=Number(req.params.id)
    console.log(id)
    if(id==5)
        res.status(404).json({status:"404 not found",tours:"fails"})
    else
        res.status(200).json({status:"success",data:5})

    // res.status(302).send("good bod and bad boy")
})

app.listen(port,()=>{
    console.log("server is running")
})