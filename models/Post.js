const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Creates the Post model
class Post extends Model {}

// Fields /columns for post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_genre: {
      type: DataTypes.STRING,
<<<<<<< HEAD
      allowNull: false,
=======
      allowNull: false, 
>>>>>>> 992898664041822da34864275b17f6bf6405dc32
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
module.exports = Post;
