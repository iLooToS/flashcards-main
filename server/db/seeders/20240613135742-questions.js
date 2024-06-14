"use strict";
const arrQuestions = [
  {
    theme_id: 1,
    question: "Начнем с разминки. Это...",
    answer: "Миньоны",
    img: "/img/minions.webp",
  },
  {
    theme_id: 1,
    question: "Заснеженный город из мультфильма...",
    answer: "Леди и бродяга",
    img: "/img/lediandbrodaga.webp",
  },
  {
    theme_id: 1,
    question: "Это листья у алтаря в...",
    answer: "Тайна Коко",
    img: "/img/koko.webp",
  },
  {
    theme_id: 1,
    question: "А эта пустыня из...",
    answer: "Приключения Вуди и его друзей",
    img: "/img/vudi.jpg",
  },
  {
    theme_id: 1,
    question: "А это кадр из...",
    answer: "Принцесса Мононоке",
    img: "/img/mononoke.jpg",
  },
  {
    theme_id: 1,
    question: "Показывали по тв",
    answer: "Приключения Джеки Чана",
    img: "/img/djekichan.jpg",
  },
  {
    theme_id: 1,
    question: "Мы каждую пятницу перед проектами...",
    answer: "Тутенштейн",
    img: "/img/tytenshten.png",
  },
  { theme_id: 2, question: "How many?", answer: "nooo", img: "" },
  { theme_id: 2, question: "Prosto vopros?", answer: "da", img: "" },
  { theme_id: 2, question: "Vtoroa vopros?", answer: "eshe ras", img: "" },
  { theme_id: 2, question: "Tretiq vopros?", answer: "opat no", img: "" },
  { theme_id: 2, question: "The end?", answer: "of corse", img: "" },
  { theme_id: 2, question: "The end?", answer: "of corse", img: "" },
  { theme_id: 2, question: "The end?", answer: "of corse", img: "" },
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
