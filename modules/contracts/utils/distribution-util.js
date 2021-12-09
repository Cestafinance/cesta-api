const {ASSET_DISTRIBUTION} = require("../constants/distribution/index");
const {TOKEN_CHART_COLOR, BACKUP_CHART_COLOR } = require("../constants/distribution/chartColors");
const { COINGECKO_URL } = require("../constants/distribution/coingekcoIds");

const getAssetDistribution = async(strategyId) => {
    // strategyId = strategyId.toUpperCase();
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
    
}

module.exports = {
    getAssetDistribution
}