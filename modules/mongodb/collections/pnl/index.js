const {Schema, model, Model} = require('mongoose');
const Double = require('@mongoosejs/double');
const strategies = require('../../util/index');

const Pnl = new Schema({
    date: {
        type: Date
    },
    time_stamp: {
        type: Number
    },
    block: {
        type: Number
    },
    total_supply: {
        type: String
    },
    total_pool_usd: {
        type: String
    },
    lp_token_price_usd: {
        type: String
    },
    lp_inception_price: {
        type: String
    },
    lp_performance: {
        type: String
    },
    btc_price: {
        type: String 
    },
    btc_inception_price: {
        type: String
    },
    btc_performance: {
        type: String
    },
    eth_price: {
        type: String 
    },
    eth_inception_price: {
        type: String
    },
    eth_performance: {
        type: String
    }
})

const pnlModels = strategies.map((s) => {
    const collectionName = `${s}_performance`;
    return model(collectionName, Pnl, collectionName);
})

module.exports = pnlModels;