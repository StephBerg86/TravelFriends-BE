"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "traveltips",
      [
        {
          title: "Swimming with pigs at the Bahamas",
          description:
            "One thing your should really do when you are in the Bahamas is swimming with pigs. They are really cute and so cool!",
          image:
            "https://www.traveller.com.au/content/dam/images/h/1/d/x/8/t/image.related.articleLeadwide.620x349.h1dx19.png/1556590216359.jpg",
          category: "to do",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          countryId: 3,
        },
        {
          title: "Visit the golden temple",
          description:
            "When you are in Kyoto you have to visit Kinkaku-ji, the golden temple. It is amazing!",
          image:
            "https://res.cloudinary.com/https-www-isango-com/image/upload/f_auto/t_m_Prod/v7682/far%20east/japan/kyoto/31092.jpg",
          category: "to do",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          countryId: 19,
        },
        {
          title: "Eat Feijoada in Sao Paulo",
          description:
            "If you want to tast the real, traditional, Brazilian food, you have to try Feijoada. It is a dish with rice, black beans, meat and more. So delicious!",
          image:
            "https://media.king5.com/assets/KING/images/1ef0c7c7-6928-42b9-9cba-4c74c5fee07b/1ef0c7c7-6928-42b9-9cba-4c74c5fee07b_1920x1080.jpg",
          category: "to eat",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          countryId: 4,
        },
        {
          title: "Conch salad at the Bahamas",
          description:
            "If you like seafood, conch salad is the best. You can buy it on the streets and it is super fresh.",
          image:
            "https://www.riu.com/blog/wp-content/uploads/2016/06/Ensalada-tropical-de-caracol.jpg",
          category: "to eat",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          countryId: 3,
        },
        {
          title: "Sleep in a capsule",
          description:
            "If you are in Japan, you should really go to a capsule hotel. I've stayed in nine hours in Tokyo and it was a great experience.",
          image:
            "https://i.pinimg.com/originals/5a/80/6c/5a806cb1bfd44eb84cc50a1c8a7ce49a.jpg",
          category: "to stay",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          countryId: 19,
        },
        {
          title: "Sleep in your rooftoptent in Iceland",
          description:
            "In wintertime it can be a bit cold so I recommend this for the summer period. But sleep in your rooftoptent. You can stop at the most amazing spots and see the northern lights if you are lucky!",
          image:
            "https://booking.caren.is/Images/22/Screen%20Shot%202017-05-29%20at%2015.03.36.png",
          category: "to stay",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          countryId: 17,
        },
        {
          title: "Visit the most beautiful cenotes",
          description:
            "Yucatan is famous for it's cenotes. There are a lot and some of them are hidden. One of the most beutiful cenotes I've been to is Cenote Suytun. If you go in the morning or on a rainy day, you have the cenote to yourself.",
          image:
            "https://digitaltravelcouple.com/wp-content/uploads/2020/07/cenote-suytun-valladolid-1024x576.jpg",
          category: "to do",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          countryId: 26,
        },
        {
          title: "Alma bar Isla Holbox",
          description:
            "The best place for a cocktail on Isla Holbox. You can enjoy an amazing view while swimming in the pool or drinking a cocktail.",
          image:
            "https://cdn.easy-rez.com/production/hotels/336cd3b3c89d5fe2a6db13e69e6f7358/public/.crops/alma_bar/alma_bar_12.jpg_1121x468.2147239263803_0-308.4049079754601.jpg",
          category: "to eat",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
          countryId: 26,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("traveltips", null, {});
  },
};
