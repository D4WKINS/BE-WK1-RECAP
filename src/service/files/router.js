import {Router} from "express"

import createError from "http-errors"

import {readFile,writeFile} from "../../utilities/file-utils.js"

const router = Router()
//routers are like mini apps
//they are used to perform many operations
//each method has to meet specific request requirements
//before it is triggered via postman
//e.g in postman , create blog post has the "POST method"
//anytime a request is made using the post method 
// this router will be executed

//router must be exported
// const blog = {
// }

//Get all blog post's
router.get("/", async (req, res, next) => {
    try{
        const files = await readFile("files.json")
        res.send(files)
    }
    catch(error){
    }
})

//Create blog post
router.post('/', async(req, res, next) => { 
    try{
        const files = await writeFile ("files.json",req.body) // the request body will be sent as content to readFile
        res.send(files)
    }
    catch(error){

    }
})

//Get single blog post
router.get('/:id',(req, res, next) => {
    try{
        res.send("GET SINGLE FILES")
    }
    catch(error){

    }
})

//Edit blog post
router.put('/:id',(req,res,next) => {
    try{
        res.send("UPDATE SINGLE FILE")
    }
    catch(error){

    }
})

//Delete blog post
router.delete('/:id', (req,res,next) => {
    try{
            //can only send 1 error at once
    }
    catch (err){
        const error = createError(
            err.status || 500, 
            err.message || "Cant delete file"
            );
            next(error)//  Sending parameter to handler.js
    }
})

export default router
