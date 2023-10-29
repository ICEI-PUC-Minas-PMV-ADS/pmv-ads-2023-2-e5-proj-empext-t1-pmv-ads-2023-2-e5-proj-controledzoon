// registro.js

// Exporte uma função que cria e retorna o modelo de registro

const createUserModel = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    nome_tutor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nome_animal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endereço: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CPF: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sexo_animal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teste_rapido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teste_sorologico: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}

export default createUserModel
