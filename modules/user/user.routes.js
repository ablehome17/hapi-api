const UserController = require("./user.controller");
const Joi = require("joi");

module.exports = [
  {
    path: "/api/users/signup",
    method: "POST",
    config: {
      handler: UserController.signup,
      validate: {
        payload: Joi.object().keys({
          email: Joi.string().required(),
          password: Joi.string().required()
        })
      },
      description: "User can create new Account",
      tags: ["api"],
      notes: "Return a sign up response"
    }
  }
];
