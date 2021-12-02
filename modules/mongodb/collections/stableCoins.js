const {Schema, model} = require('mongoose');
const Double = require('@mongoosejs/double');


const StableCoins = new Schema({
    name: {
        type: String
    },
    symbol: {
        type: String
    },
    address: {
        type: String
    },
    network: {
        type: String
    },
    decimals: {
        type: Number
    },
    abi: [Object],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('stable_coins', StableCoins);




