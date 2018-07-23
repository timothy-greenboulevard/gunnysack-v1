'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', {
      uid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      reward_point: {
        type: Sequelize.INTEGER
      },
      created_on: {
        type: Sequelize.DATE
      },
      last_login: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('account');
  }
};