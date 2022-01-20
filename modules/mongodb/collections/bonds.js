const {Schema, model} = require('mongoose');

const Bonds = new Schema({
    name: {
        type: String
    },
    displayName: {
        type: String
    },
    bondToken: {
        type: String
    },
    reserveContractAbi: [Object],
    network: {
        type: String
    },
    isLp: {
        type: Boolean
    },
    lpUrl: {
        type: String
    },
    networkAddrs: {
        type: Object
    }, 
    bondContractABI: [Object],
    token: {
        type: Object
    }
})

module.exports = model('bonds', Bonds);