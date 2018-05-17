'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    content: DataTypes.TEXT
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return post;
};
