var models = require('../models');

exports.userInfo = function(tableData){
  var accountMock = {};
  if(tableData == 'Veer') {
    accountMock = {
      "username": "Ashish",
      "age": 45,
      "gender": "male"
    }
  }
  return accountMock;
}

// module.exports.createUser = (userParams, callback) => {
//   models.user.create({
//     email: userParams.email,
//     password: userParams.password,
//     phone: userParams.phone,
//     username: userParams.username
//   })
//   .then(() => {
//     callback(null, 'Success');
//   })
//   .catch(() => {
//     callback('Failed', null);
//   })
// }

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
