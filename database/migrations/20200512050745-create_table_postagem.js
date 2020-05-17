'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('postagem', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo: { type: Sequelize.STRING, allowNull: false },
      subtitulo: { type: Sequelize.STRING, allowNull: false },
      corpo: { type: Sequelize.STRING, allowNull: false },
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
      },
      fk_categoria: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'categoria',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('postagem');
  }
};
