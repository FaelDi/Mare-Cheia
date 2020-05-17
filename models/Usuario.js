module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario", {
          nome: { type: DataType.STRING, allowNull: false },
          email: { type: DataType.STRING, allowNull: false },
          senha: { type: DataType.STRING, allowNull: false },
          celular: { type: DataType.STRING, allowNull: false },
          cpf: { type: DataType.STRING, allowNull: false }
    }, {
      tableName: 'usuario',
      timestamps: false
    })  
    return Usuario;
  }