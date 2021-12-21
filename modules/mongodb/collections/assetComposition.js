const {Schema, model} = require('mongoose');

const AssetComposition = new Schema({
    symbol: {
        type: String
    },
    composition: Object,
});

module.exports = model('asset_composition', AssetComposition, 'asset_composition');