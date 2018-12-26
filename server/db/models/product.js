'use strict'
const Sequelize = require('sequelize');
const db = require('../db')


const Product = db.define('products', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['buttler'],
    validate: {
      notEmpty: true
    }
  },
  shortDescription: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  fullDescription: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  ratingTotals: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: [0, 0, 0, 0]
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['http://fillmurray.com/140/200']
  }


})

module.exports = Product;
