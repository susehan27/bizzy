const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    taskType: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    taskDuration: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);
