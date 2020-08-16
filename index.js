const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const travelRouter = require("./routers/travel");
//const authMiddleWare = require("./auth/middleware");

const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.use("/", authRouter);
app.use("/", travelRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
