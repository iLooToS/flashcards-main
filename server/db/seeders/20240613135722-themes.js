"use strict";
const arrThemes = [
  {
    theme: "Cartoons",
    startQuestion: 1,
  },
  {
    theme: "Fruits and vegetables",
    startQuestion: 8,
  },
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes", arrThemes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
