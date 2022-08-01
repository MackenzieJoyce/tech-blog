const { Model, Datatypes, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_entry: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
)

module.exports = Post
