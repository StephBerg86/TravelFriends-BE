"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Stephanie",
          email: "Steph@test.nl",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          image:
            "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/69910964_3719992764694294_1826466700950721444_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=4tnnlPuy3fUAX89cRPp&_nc_ht=scontent-amt2-1.xx&oh=93f82b6ce49c25fceac84d8d442222b6&oe=5F629716",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peter",
          email: "peter@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          image:
            "https://images.pexels.com/photos/1250426/pexels-photo-1250426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kim",
          email: "kim@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          image:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
