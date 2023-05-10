const express = require("express");
const app = express();
const Restaurant = require("../models/index");
const db = require("../db/connection");

app.set("json spaces", 2);
app.use(express.json());
//TODO: Create your GET Request Route Below:

app.get("/restaurants", async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
});
app.get("/restaurants/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);
    res.json(restaurant);
  } catch (error) {
    next(error);
  }
});
app.post("/restaurants", async (req, res, next) => {
  try {
    const { name, location, cuisine } = req.body;
    await Restaurant.create({ name, location, cuisine });
    res.send("Restaurant was successfuly added.");
  } catch (error) {
    next(error);
  }
});

app.put("/restaurants/:id", async (req, res, next) => {
  const { id } = req.params;
  const restaurant = await Restaurant.findByPk(id);
  if (restaurant) {
    const { name, location, cuisine } = req.body;
  }
  res.send("Okay");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
