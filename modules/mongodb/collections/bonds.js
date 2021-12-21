const {Schema, model} = require('mongoose');

const Bonds = new Schema({
    symbol: {
        type: String
    },
    label: {
        type: String
    },
    address: {
        type: String
    },
    network: {
        type: String
    },
    tokenAddress: {
        type: String
    },
    tokenName: {
        type: String
    },
    isLpBond: {
        type: Boolean
    },
    lpUrl: {
        type: String
    },
    abi: [Object],
    tokenAbi: [Object],
})

module.exports = model('bonds', Bonds);