"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class traveltip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      traveltip.belongsTo(models.user);
    }
  }
  traveltip.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "traveltip",
    }
  );
  return traveltip;
};
