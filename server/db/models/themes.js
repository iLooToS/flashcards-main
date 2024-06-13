"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Themes extends Model {
    static associate({ Questions }) {
      this.hasMany(Questions, { foreignKey: "theme_id" });
    }
  }
  Themes.init(
    {
      theme: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Themes",
    }
  );
  return Themes;
};
