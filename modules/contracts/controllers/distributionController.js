const { getAssetDistribution } = require("../utils/distribution-util");

module.exports = () => {

    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const distributionHandler = async (strategyId, minInfo = true) => {
        // Min Info : Returns only coingecko url, percentage, color, label, link, percent, token id
        
        let result = [];
        try {
            if(strategyId === undefined || strategyId === "") {
                throw(`Missing strategy id`);
            }
           
            result = await getAssetDistribution(strategyId);

            return result;

        } catch (err) {
            console.error(`Error in distributionHandler(): `, err);
        } 
    }


    return {
        distributionHandler
    }

}
