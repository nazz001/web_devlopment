const express=require("express")
const app=express()


const port=3000
app.get('/',(req,res)=>{
    res.json({message:"welcome to the devlopment"})
})

app.get("/home",(req,res)=>{
    res.status(200).send("good boy and bad boy")
})

const post_tours=(req,res)=>
{
    console.log(req.params)
    id=Number(req.params.id)
    console.log(id)
    if(id==5)
        res.status(404).json({status:"404 not found",tours:"fails"})
    else
        res.status(200).json({status:"success",data:5})



}
app.post("/home/:id?", post_tours)

app.listen(port,()=>{
    console.log("server is running")
})