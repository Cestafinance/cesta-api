const {Schema, model} = require('mongoose');
const Double = require('@mongoosejs/double');
const Strategies = new Schema({
    name: {
        type: String
    },
    symbol: {
        type: String
    },
    vaultAddress: {
        type: String
    },
    decimals: {
        type: Number
    },
    ROI: {
      type: Double
    },
    feeDecimals: {
        type: Number
    },
    address: {
        type: String
    },
    abi: [Object],
    risk: {
        type: String
    },
    type: {
        type: String
    },
    infoLink: {
        type: String
    },
    strategyName: {
        type: String
    },
    info: {
        type: String
    },
    description: {
        type: String
    },
    priceId: {
        type: String
    },
    isPopularItem: {
        type: Boolean
    },
    happyHourEnabled: {
        type: Boolean
    },
    isDepositEnabled: {
        type: Boolean
    },
    isWithdrawEnabled: {
        type: Boolean
    },
    performanceId: {
        type: String
    },
    logoFormat: {
        type: String
    },
    group: {
        type: String
    },
    tvlKey: {
        type: String
    },
    network: {
        type: String
    },
    coinsAccepted: {
        type: String
    },
    erc20addresses: [
        String
    ],
    tokens: [String],
    vaultInfo: {
        name: {
            type: String
        },
        address: {
            type: String
        },
        symbol: {
            type: String
        },
        abi: [Object]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('strategies', Strategies);




