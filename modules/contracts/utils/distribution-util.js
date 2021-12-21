const {TOKEN_CHART_COLOR, BACKUP_CHART_COLOR } = require("../constants/distribution/chartColors");
const { COINGECKO_URL } = require("../constants/distribution/coingekcoIds");

const getAssetDistribution = async(assetComposition) => {
    let index = 0;
    const compositions = assetComposition.composition;

    result = compositions.map(c => {
        // Build coingecko url
        const token = c;
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
            label: token.name,
            link: coingeckoURL,
            color: chartColor
        }
    })

    return result;
    
}

module.exports = {
    getAssetDistribution
}