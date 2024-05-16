const joi = require("joi")

const getUserSchema = joi.object().keys({
    email : joi.string().email().required(),
    password : joi.string().min(8).max(15).required()
})

const createUserSchema = joi.object().keys({
    firstName : joi.string(),
    lastName : joi.string(),
    email : joi.string().email().required(),
    password : joi.string().min(8).max(15).required()
})

const updateUserSchema = joi.object().keys({
    email : joi.string().email().required(),
    password : joi.string().min(8).max(15).required()
})
const deleteUserSchema = joi.object().keys({
    email : joi.string().email().required(),
    password : joi.string().min(8).max(15).required()
})

module.exports = {
    
        getUser : async (req,res)=>{
            try{
                const validate = await getUserSchema.validateAsync(req.query);
           return res.send ({
                message : "getting user",
                data: validate
            })  
        }catch(error){
            return res.send({
                message : error.message 
            })
        }
        },

        createUser : async(req,res)=>{
            
            
            try{
                const validate = await createUserSchema.validateAsync(req.body);
            return res.send ({
                message: "creating a new user",
                data : validate
            })
        }catch(error){
            return res.send({
                message : error.message
            })
        }
        },
        updateUser :async(req,res)=>{
    
            try{
                const validate =await updateUserSchema.validateAsync(req.body)
            return res.send({
                message: `user Updated Successfully`,
                data : validate
            })
        }catch(error){
            res.send({
                message : error.message
            })
        }
        },
        deleteUser : async(req, res)=>{

          
            try{
                const validate =await deleteUserSchema.validateAsync(req.query)
            return res.send({
                message : `user deleted Successfully`,
                data : validate
            })
        }catch(error){
            res.send({
                message :error.message
            })
        }
        }
    }
