const {Schema, model} = require('mongoose');
const Double = require('@mongoosejs/double');

const TotalTVL = new Schema({
    value: {
        type: Double
    },
    timestamp: {
        type: Number,
    },
    date: {
        type: Date
    }
});

module.exports = model('total_tvl', TotalTVL, 'total_tvl');