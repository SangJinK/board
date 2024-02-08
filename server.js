const express = require('express');
const session = require('express-session');
const app = express();
const server = require("http").createServer(app);
server.listen(8080,()=>{
    console.log("server start");
});
app.use(express.static("build"));
const dotenv = require('dotenv');

const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'mypj',
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'build/index.html');
});

   
