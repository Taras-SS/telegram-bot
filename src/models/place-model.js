const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    contacts: {
        type: String
    }
})

mongoose.model('Places', PlaceSchema);
