const mongoose = require("mongoose");
const neighbourSchema = new mongoose.Schema({
    name: { type: String, required: true },
    geometry: {
        type: {
            type: String,
            enum: ['Polygon'],
            required: true
        },
        coordinates: {
            type: [[[Number]]],
            required: true
        }
    }
});

const Neighbour = mongoose.model("neighbour", neighbourSchema);
module.exports = Neighbour;