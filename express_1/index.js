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




const getAlluser = (req, res) => {
  res.status(500).json({
    status: 'server error',
    data: { message: 'route is not yet defined' }
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: 'server error',
    data: { message: 'route is not yet defined' }
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'server error',
    data: { message: 'route is not yet defined' }
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'server error',
    data: { message: 'route is not yet defined' }
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'server error',
    data: { message: 'route is not yet defined' }
  });
};
app
  .route('/api/v1/users')
  .get(getAlluser)
  .post(createUser)
  .delete(deleteUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser);







app.listen(port,()=>{
    console.log("server is running")
})