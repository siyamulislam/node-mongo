const express = require('express')
const app = express()
const port = 3000
const cors= require('cors')
var bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());

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
app.post('/addUser',(req,res)=>{
  const user = req.body
  user.id=87
  console.log(user);
  res.send(user)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})