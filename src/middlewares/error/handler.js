export const errorHandler = (err,req,res,next) =>{
    // if the response status is === err.code or 500
    //Send an error message to the console
    res.status(err.status || 500).send({ message:err.message || 'Something went wrong' })
}