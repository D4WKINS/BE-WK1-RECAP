import {Router} from "express"
import create from "http-errors"

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
router.get('/',(req, res, next) => {
    try{
        // res.setHeader("Content-type","text/html")
        res.send("GET ALL FILES")

    }
    catch(error){

    }
})

//Create blog post
router.post('/',(req, res, next) => { 
    try{
        res.send("CREATE NEW FILES")
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
router.delete('/:id',(req,res,next) => {
    try{
        const error = createError(401,'Please login to view this page')
        if(error){
            next(error)//  adding parameter to handler.js
        }
        res.send("DELETE SINGLE FILE")
    }
    catch(error){

    }
})

export default router