const express = require("express");
const app = express();
const RestaurantsController = require("./controllers/RestaurantsController");
const NeighbourController = require("./controllers/NeighbourController");
app.use(express.json());

app.use("/restaurant", RestaurantsController);
app.use("/neighbour", NeighbourController);

module.exports = app;