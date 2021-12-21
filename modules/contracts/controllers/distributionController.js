const { getAssetDistribution: processAssetComposition } = require("../utils/distribution-util");

module.exports = () => {

    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const {
        models: Schemas
    } = imports.mongoose

    const getAssetComposition = async(symbol) => {
        let assetComposition = await Schemas.asset_composition.find({
            symbol
        }).lean();

        return assetComposition;
    }

    const distributionHandler = async (strategyId, minInfo = true) => {
        // Min Info : Returns only coingecko url, percentage, color, label, link, percent, token id
        
        let result = [];
        try {
            if(strategyId === undefined || strategyId === "") {
                throw(`Missing strategy id`);
            }

            let assetComposition = await getAssetComposition(strategyId);

            if(assetComposition !== null && assetComposition !== undefined && assetComposition.length > 0) {
                result = await processAssetComposition(assetComposition[0]);
            }

            return result;

        } catch (err) {
            console.error(`Error in distributionHandler(): `, err);
        } 
    }


    return {
        distributionHandler
    }

}
