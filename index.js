const express = require('express')
const app = express()
const port = 3000
const cors= require('cors')
app.use(cors());

const users= ["Asad","Manik","Graps",'karim']
//get
app.get('/', (req, res) => {
  res.send('Hello World! 2')
});
app.get('/fruit/banana',(req,res)=>{
  res.send({fruit:'Banana',quantity:100,price:10});
})
app.get('/user/:id',(req,res)=>{
  const id=req.params.id;
  const name=users[id];
  console.log(req.query);
  res.send({id,name});
})

//post 
app.post('/addUser',(res,req)=>{
  console.log('post req sent');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})