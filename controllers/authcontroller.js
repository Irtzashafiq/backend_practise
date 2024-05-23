const obj = {

    login : (req,res)=>{
        return res.send ({
            message : "Logged In",
            data : req.query
        });
    },

    logout : (req,res)=>{
        return res.send({
            message : "Logged Out",
            data : req.body
        });
    },
    
}

module.exports = obj;