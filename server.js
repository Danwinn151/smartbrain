
const express = require("express");
const bodyParser = require('body-parser')
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const { response } = require("express");


const register = require('./controllers/Register')
const signin = require('./controllers/Signin')
const profile = require('./controllers/profile')
const image = require("./controllers/image")


const app = express();

const db = knex({
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      port : '5432',
      user : 'postgres',
      password : 'ADENIRAN',
      database : 'smartbraindatabase'
    }
  });


app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, resp) => {
    resp.json(database.users)
})

app.post("/signin", (req, resp) => {signin.HandlerSignin(req, resp, db, bcrypt)})
app.post('/register',(req, resp) => { register.handleRegister(req, resp, db, bcrypt)})
app.get("/profile/:id",(req, resp) => {profile.handlerProfile(req, resp, db      )})
app.put('/image',(req, resp) => {image.handlerImage(req, resp, db)})

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
//   });
  
  // Load hash from your password DB.
//   bcrypt.compare("bacon", hash, function(err, res) {
//       // res == true
//   });
//   bcrypt.compare("veggies", hash, function(err, res) {
//       // res = false
//   });p 

app.listen(3000, () => {
    console.log("browser is running in localhost:3000")
})
// app.use(bodyParser.urlencoded({extended :false}));
// app.use(bodyParser.json())
// app.get("/:id", (request, response) => {
//     console.log(request.body);
//     //request.query
//      //request.params
//       //request.header
//     response.send("just testing");
// })


// app.get('/profile', (req, resp) => {
//       resp.send("getting profile");
// })


// app.get('/:id', (req, resp) => {
//   console.log(req.body)
//    console.log(req.query)
//    console.log(req.params)

//     resp.status(404).send("not found");
// })

// app.post('/user', (req, resp) => {
//     //  const user ={
//     //     name:"daniel",
//     //     password: "love"
//     //  }
//     resp.send("success");
// })

// app.put("/", (request, response) => {  
//     console.log(request.body)
//     response.send("invalid link")
// })
// app.listen(3002)


