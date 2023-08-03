const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Contact = sequelize.define('Contact', {
  permanentddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tempAddress: {
    type: DataTypes.STRING,
    allowNull:false
  }
}, {
  tableName:'contact',
  createdAt:false,
  updatedAt:false
});

console.log(Contact === sequelize.models.Contact); 
module.exports = Contact;