const express = require('express')
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



const sum = require('./add');
// app.set('port', (process.env.PORT || 5000))
// app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

let userList = []


app.post('/add', function(req,res) {

    const {first,second} = req.body
    total = sum(first,second) 
   res.json({
    status:true,
    total:total
   })
  })


  app.post('/createuser', function(req,res) {

    const {name,age} = req.body
    userList.push(req.body)
    res.json({
        status:true,
        data:userList
    })
  })


  app.post('/updateuser', function(req,res) {

    const {name,age} = req.body
    let oldUser = [...userList];
    let userindex = userList.findIndex(x=>x.name == name);
    let userDetails = oldUser[userindex];
    userList = [{...userDetails}]

    res.json({
        status:true,
        data:userList
    })
  })


  

  app.get('/getuser', function(req,res) {
    res.json({
        status:true,
        total:userList
    })
  })

app.listen(5000, function() {
  console.log("Node app is running at localhost:" + 5000)
})