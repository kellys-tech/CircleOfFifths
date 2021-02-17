const { toInteger } = require("lodash");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Scales schema
const ScalesSchema = new Schema({
    sharp: {
        type: Array,
    },
    flat: {
        type: Array,
    },
    flatScore: {
        type: Number,
    },
    sharpScore: {
        type: Number,
    },
    userId: {
        type: Number,
    }
});

//create variable for schema
const Scales = mongoose.model("Scales", ScalesSchema);

module.exports = Scales;
