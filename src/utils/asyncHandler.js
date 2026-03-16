const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}



export {asyncHandler}







/*
This is also a asyncHandler just like above.
Both have same in functionality but different in structure.
We write this in "try-catch" formate but above in 
above we write using "Promises".
*/



/*
Process to convert a normal function to a highOrder function
          ⇩


const asyncHandler = () => {}
const asyncHandler = (func) => {() =>{}} // simply we remove curly  braces and 
                                          //make func to call another func
const asyncHandler = (func) => async () => {} 
*/



// const asyncHandler = (fn) => async (req, res, next) =>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }