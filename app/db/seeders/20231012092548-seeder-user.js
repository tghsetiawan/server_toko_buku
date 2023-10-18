"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync("rahasia", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "teguh",
          email: "admin@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "setiawan",
          email: "admin@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
