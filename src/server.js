import express from "express"
import listEndpoints from "express-list-endpoints";
import {errorHandler} from "./middlewares/error/handler.js"
const { PORT } = process.env //Import PORT = 3001 from env


//Here we import out router which consists of a method for each of our C.R.U.D operations
//To use this import we reference filesRouter, 
//also when importing from another file we can name it anything we want

import filesRouter from  './service/files/router.js'//this handles our request to the server

const server = express();
//env variables change once changes everywhere

//(req,res,next) = handler
// server.get('/', (req, res, next)=>{
//     //res.setheader allows us to change the content-type
//     res.setHeader('Content-type', 'text/html') // Changes content type to html
//     res.send('<h1> HELLO </h1>') //returns html and maps to the D.O.M
// })

//to use our router, we use the server.use method and reference our import
server.use('/files',filesRouter)
const endpoints = listEndpoints(server)
server.use(errorHandler)
server.listen(PORT, () => console.log('Server is running on port', PORT))

server.on('error',(error) => console.log('Server is not running due to :' , error))

console.table(endpoints)