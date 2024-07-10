const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const Employee = require('./employee');
const Asset = require('./asset');
const Category = require('./category');

// Define relationships
Asset.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Asset, { foreignKey: 'categoryId' });

module.exports = { sequelize, Employee, Asset, Category };
