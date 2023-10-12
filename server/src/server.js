const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const server = express();

server.name = 'API'; 
  
 server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 
 server.use(bodyParser.json({ limit: '50mb' })); 
 server.use(cookieParser()); 
 server.use(morgan('dev')); 
 server.use((req, res, next) => { 
   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from 
   res.header('Access-Control-Allow-Credentials', 'true'); 
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH'); 
   next(); 
 });
server.use(cors());

server.use(router);

module.exports = server;
