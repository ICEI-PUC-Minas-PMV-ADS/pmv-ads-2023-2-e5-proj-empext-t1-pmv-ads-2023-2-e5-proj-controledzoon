// registro.js

// Exporte uma função que cria e retorna o modelo de registro

const createUserModel = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirmarSenha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default createUserModel;
