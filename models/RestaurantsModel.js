const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});
const Restaurant= mongoose.model("restaurant", restaurantSchema);
module.exports = Restaurant;