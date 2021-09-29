const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    cod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type:DataTypes.FLOAT,
    },
  }, {
    timestamps: false // PARA QUE NO MUESTRE EN CONSOLA CUANDO ENTRA O SALE
  });
};
