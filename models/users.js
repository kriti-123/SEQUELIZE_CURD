const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull:false
  },
  address:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  empId:{
    type:DataTypes.STRING,
    allowNull:false,
  }
}, {
  tableName:'users',
  createdAt:false,
  updatedAt:false
});

console.log(User === sequelize.models.User); 
module.exports = User;