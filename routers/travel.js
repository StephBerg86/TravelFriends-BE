const { Router } = require("express");
const Traveltip = require("../models").traveltip;
const Country = require("../models").country;
const User = require("../models").user;
const auth = require("../auth/middleware");

const router = new Router();

router.get("/traveltip", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const tips = await Traveltip.findAndCountAll({
    limit,
    offset,
    include: [Country, User],
  });
  res.status(200).send({ message: "ok", tips });
});

router.get("/countries", async (req, res) => {
  const country = await Country.findAll();
  res.status(200).send({ message: "ok", country });
});

router.get("/traveltip/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "TraveltipId is not a number" });
  }

  const tip = await Traveltip.findByPk(id, {
    include: [Country, User],
  });

  if (tip === null) {
    return res.status(404).send({ message: "Travel tip not found" });
  }

  res.status(200).send({ message: "ok", tip });
});

router.post("/traveltip", async (req, res) => {
  const { title, description, category, countryId, image, userId } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .send({ message: "A travel tip must have a name and a description" });
  }

  const tip = await Traveltip.create({
    title,
    description,
    category,
    countryId,
    image,
    userId,
  });

  return res.status(201).send({ message: "Travel tip created", tip });
});

router.patch("/traveltip/:id", auth, async (req, res) => {
  const tip = await Traveltip.findByPk(req.params.id);
  if (!tip.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this tip" });
  }

  const { title, description, category, image } = req.body;

  await tip.update({ title, description, category, image });

  return res.status(200).send({ tip });
});

router.delete("/traveltip/:Id", auth, async (req, res, next) => {
  try {
    const tipId = parseInt(req.params.Id);
    const tip = await Traveltip.findByPk(tipId);
    if (!tip) {
      res.status(404).send("Travel tip not found");
    } else {
      tip.destroy();
    }
  } catch (e) {
    next(e);
  }
  return res.status(200).send("deleted");
});

module.exports = router;
