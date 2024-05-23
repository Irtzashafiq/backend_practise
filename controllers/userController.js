const joi = require("joi");
const userService = require("../services/userService");

const getUserSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(8).max(15).required(),
});

const createUserSchema = joi.object().keys({
  userName: joi.string().alphanum().max(20).required(),
  password: joi.string().min(8).max(15).required(),
  confirmPassword: joi.ref("password"),
});

const updateUserSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(15).required(),
});
const deleteUserSchema = joi.object().keys({
  userId: joi.string(),
});

module.exports = {
  getUser: async (req, res) => {
    try {
      const validate = await getUserSchema.validateAsync(req.query);

      return res.send({
        message: "getting user",
        data: validate,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validate);

      if (user.error) {
        return res.send({
          error: (user.error),
        });
      }
      return res.send({
        message: "creating a new user",
        data: user.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      return res.send({
        message: `user Updated Successfully`,
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      return res.send({
        message: `user deleted Successfully`,
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  getAllUsers : async (req, res)=>{
    try {
       const users =  await userService.getAllUsers();
       if (users.error) {
        return res.send({
            error: error.message
        })
       }
       return res.send({
        response : users.response
       })
      } catch (error) {
        res.send({
          message: error.message,
        });
  }
}
};
