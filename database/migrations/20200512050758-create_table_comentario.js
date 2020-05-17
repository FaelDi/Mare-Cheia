'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('comentario', {
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
      },
      fk_postagem: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'postagem',
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
   return queryInterface.dropTable('comentario');
  }
};
