'use strict';

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(
      models.post,
      { foreignKey: 'userId' }
    );
    user.hasMany(
      models.comment,
      { foreignKey: 'userId' }
    );
  };
  return user;
};
