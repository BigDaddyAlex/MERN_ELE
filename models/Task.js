const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Task = mongoose.model('task',TaskSchema);