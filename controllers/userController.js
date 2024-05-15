module.exports = {
    
        getUser :(req,res)=>{
            
           return res.send ({
                message : "getting user",
                data: req.body
            })  
        },

        createUser :(req,res)=>{
            const newUser = req.body
            return res.send ({
                message: "creating a new user",
                data : newUser
            })
        },
        updateUser :(req,res)=>{
           const updatedUserData = req.body;
           const userId = req.body.id;

            return res.send({
                message: `user with ${userId} Updated Successfully`,
                data : updatedUserData
            })
        },
        deleteUser : (req, res)=>{
            const deletedUserData = req.body;
           const userId = 2;

            return res.send({
                message : `user with Id = ${userId} deleted Successfully`,
                data : deletedUserData
            })
        }
    }
