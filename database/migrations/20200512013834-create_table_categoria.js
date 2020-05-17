'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('categoria', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: { type: Sequelize.STRING, allowNull: false },
      // createdAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false
      // },
      // updatedAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false
      // },
      fk_usuario: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('categoria');
  }
};
