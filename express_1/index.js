const express=require("express")
const app=express()
const morgan = require('morgan');
// lec 59 now we want to creat middleware in order to do this 
app.use(express.json())
app.use(morgan('dev'))
app.use((req,res,next)=>
{
    console.log("hello from middle ware")
    next()
})
// now i want to add in request at what time this request come
app.use((req,res,next)=>
{
    req.requestTime=new Date().toISOString()
    next()
})

const port=3000
app.get('/',(req,res)=>{
    res.json({message:"welcome to the devlopment"})
})

app.get("/home",(req,res)=>{
    res.status(200).send("good boy and bad boy")
})

// If because of some reason some middle where terminat that request next
// middle where not be called because that cycle will already been finshed

const post_tours=(req,res)=>
{
    console.log(req.params)
    id=Number(req.params.id)
    console.log(id)
    console.log(req.requestTime)
    if(id==5)
        res.status(404).json({status:"404 not found",tours:"fails"})
    else
        res.status(200).json({status:"success",data:5})



}
app.post("/home/:id?", post_tours)

app.listen(port,()=>{
    console.log("server is running")
})