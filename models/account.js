'use strict';
module.exports = (sequelize, DataTypes) => {
  var account = sequelize.define('account', {
    uid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    reward_point: DataTypes.INTEGER,
    created_on: DataTypes.DATE,
    last_login: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  account.associate = function(models) {
    // associations can be defined here
  };
  return account;
};