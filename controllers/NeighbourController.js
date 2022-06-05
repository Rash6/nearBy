const express = require("express");
const router = express.Router();
const Neighbour = require("../models/NeighbourModel");

router.get("/", async (req, res) => {
    try {
        const neighbour = await Neighbour.find().lean().exec();
        return res.status(200).send({ "neighbour": neighbour });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const neighbour = await Neighbour.create(req.body);
        return res.status(201).send({ "neighbour": neighbour });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;