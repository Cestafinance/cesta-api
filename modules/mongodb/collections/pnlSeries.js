const { Schema, model } = require('mongoose');

const StrategyPnlSeries = new Schema({
    symbol: {
        type: String
    },
    series: [{
        db: {
            type: String
        },
        network: {
            type: String
        },
        chainlink: {
            type: String
        },
        decimals: {
            type: Number
        },
        name: {
            type: String
        },
        showOnGraph: {
            type: Boolean
        }
    }]
});

module.exports = model('strategy_pnl_series', StrategyPnlSeries, 'strategy_pnl_series');