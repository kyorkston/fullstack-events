'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Event;
};
