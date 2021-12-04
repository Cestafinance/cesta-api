const { ASSET_DISTRIBUTION } = require("../constants/distribution/index");
const { COINGECKO_URL } = require("../constants/distribution/coingekcoIds");
const { TOKEN_CHART_COLOR, BACKUP_CHART_COLOR } = require("../constants/distribution/chartColors");

module.exports = () => {

    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const getAssetDistribution = async (strategyId, minInfo = true) => {
        // Min Info : Returns only coingecko url, percentage, color, label, link, percent, token id
        
        let result = [];
        try {
            if(strategyId === undefined || strategyId === "") {
                throw(`Missing strategy id`);
            }
            strategyId = strategyId.toUpperCase();

            const tokens = ASSET_DISTRIBUTION[strategyId];
            if(tokens === undefined) {
                throw(`Assets for ${strategyId} is undefined.`);
            } 

            let index = 0;
            result = Object.keys(tokens).map(key => {
                // Build coingecko url
                const token = tokens[key];

                const coingeckoId = token.tokenId;
                const coingeckoURL = `${COINGECKO_URL}${coingeckoId}`;

                // Get chart color
                let chartColor = TOKEN_CHART_COLOR[coingeckoId];
                if(chartColor === undefined) {
                    chartColor = BACKUP_CHART_COLOR[index];
                    index ++;
                }

                return {
                    ...{...token}, 
                    label: key,
                    link: coingeckoURL,
                    color: chartColor
                }
            });
            

            return result;

        } catch (err) {
            console.error(`Error in getAssetDistribution(): `, err);
        } 
    }


    return {
        getAssetDistribution
    }

}
