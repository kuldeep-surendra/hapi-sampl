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

exports.createUser = function(userParams, callback){
  models.user.create({
    email: userParams.email,
    password: userParams.password,
    phone: userParams.phone,
    username: userParams.username
  })
  .then(() => {
    callback(null, 'Success');
  })
  .catch(() => {
    callback('Failed', null);
  })
}
