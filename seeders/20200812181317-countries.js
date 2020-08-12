"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "countries",
      [
        {
          name: "Bahamas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Japan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iceland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("countries", null, {});
  },
};
