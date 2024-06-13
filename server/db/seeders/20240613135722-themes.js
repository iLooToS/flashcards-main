"use strict";
const arrThemes = [
  {
    theme: " Тема 1",
  },
  {
    theme: " Тема 2",
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
