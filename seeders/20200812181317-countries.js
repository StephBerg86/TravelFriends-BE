"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "countries",
      [
        {
          name: "Argentina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Australia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bahamas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cuba",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "China",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Denmark",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dominican Republic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ecuador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ethiopia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fiji",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Finland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Germany",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guatemala",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Haiti",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honduras",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iceland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Japan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jamaica",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kenya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kuwait",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luxembourg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Malaysia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mexico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Namibia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "New Zealand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peru",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Philippines",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Singapore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "South Afrika",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thailand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tanzania",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "United Kingdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "United States",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vietnam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zimbabwe",
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
