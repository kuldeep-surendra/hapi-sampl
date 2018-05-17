'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    content: DataTypes.TEXT
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return comment;
};
