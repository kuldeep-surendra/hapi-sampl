var models = require('../models');

exports.createUser = (req, h) => {

  const userInfo = {
    email: req.payload.email,
    password: req.payload.password,
    phone: req.payload.phone,
    username: req.payload.username
  };

  return models.user.create(userInfo).then((userInfo) => {

     return { message: "User created successfully", user: userInfo };

  }).catch((err) => {

    return { err: err };

  });
}
