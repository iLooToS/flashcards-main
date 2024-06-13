"use strict";
const arrQuestions = [
  { theme_id: 1, question: "Кого Колобок встретил вторым?", answer: "Заяц" },
  { theme_id: 1, question: "Что измеряется в м/с²?", answer: " Ускорение" },
  { theme_id: 1, question: "what?", answer: "to" },
  { theme_id: 1, question: "Where all?", answer: "this" },
  { theme_id: 1, question: "How are you?", answer: "good" },
  { theme_id: 2, question: "How many?", answer: "nooo" },
  { theme_id: 2, question: "Prosto vopros?", answer: "da" },
  { theme_id: 2, question: "Vtoroa vopros?", answer: "eshe ras" },
  { theme_id: 2, question: "Tretiq vopros?", answer: "opat no" },
  { theme_id: 2, question: "The end?", answer: "of corse" },
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", arrQuestions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
