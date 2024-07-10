const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Asset = sequelize.define('Asset', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('in stock', 'issued', 'scrapped'),
    defaultValue: 'in stock',
  },
});

module.exports = Asset;
