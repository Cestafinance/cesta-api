const {Schema, model, Model} = require('mongoose');
const Double = require('@mongoosejs/double');
const strategies = require('../../util/index');

const Tvl = new Schema({
    tvl: {
        type: Double
    },
    timestamp: {
        type: Number
    }
})

const tvlModels = strategies.map((s) => {
    const collectionName = `${s}_tvl`;
    return model(collectionName, Tvl, collectionName);
})

module.exports = tvlModels;