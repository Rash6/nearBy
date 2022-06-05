const express = require("express");
const router = express.Router();
const Restaurant = require("../models/RestaurantsModel");

router.get("/", async (req, res) => {
    try {
        const restaurant = await Restaurant.find().lean().exec();
        return res.status(200).send({ "restaurant": restaurant });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        return res.status(201).send({ "restaurant": restaurant });
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports=router;