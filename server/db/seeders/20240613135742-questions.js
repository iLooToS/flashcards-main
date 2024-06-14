"use strict";
const arrQuestions = [
  {
    theme_id: 1,
    question: "Начнем с разминки. Это...",
    answer: "Миньоны",
    img: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1534769694/asmzsd79ygkm8caukoit.png",
  },
  {
    theme_id: 1,
    question: "Заснеженный город из мультфильма...",
    answer: "Леди и бродяга",
    img: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1534834127/sapxtl1ivvcvhzcde3jd.jpg",
  },
  {
    theme_id: 1,
    question: "Это листья у алтаря в...",
    answer: "Тайна Коко",
    img: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1534837676/zuy4qc6rtexaph0uczxi.jpg",
  },
  {
    theme_id: 1,
    question: "А эта пустыня из...",
    answer: "Алладин",
    img: "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1534834192/e4upvj6nj5isosrbsywo.jpg",
  },
  {
    theme_id: 1,
    question: "А это кадр из...",
    answer: "Принцесса Мононоке",
    img: "https://yehe.asia/upload/iblock/9c9/9c9a3b8af02bb9f7f77b56ee897e65c2.jpg",
  },

  {
    theme_id: 1,
    question: "А это кадр из...",
    answer: " Мононоке",
    img: "https://yehe.asia/upload/iblock/9c9/9c9a3b8af02bb9f7f77b56ee897e65c2.jpg",
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
