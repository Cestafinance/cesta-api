const { COINGECKO_ID : CoingeckoIds }  = require("./coingekcoIds");

module.exports.ASSET_DISTRIBUTION = {
    cestaAXA: {
        AVAX: { percent: 50, tokenId: CoingeckoIds.AVAX },
        JOE: { percent: 22.5, tokenId: CoingeckoIds.JOE },
        PNG: { percent: 22.5, tokenId: CoingeckoIds.PNG },
        LYD: { percent: 5, tokenId: CoingeckoIds.LYD },
    },
    cestaAXS: {
        JOE: { percent: 40, tokenId: CoingeckoIds.JOE },
        PNG: { percent: 5, tokenId: CoingeckoIds.PNG },
        LYD: { percent: 5, tokenId: CoingeckoIds.LYD },
        USDT: { percent: 5, tokenId: CoingeckoIds.USDT },
        USDC: { percent: 40, tokenId: CoingeckoIds.USDC},
        DAI: { percent: 5, tokenId: CoingeckoIds.DAI },
    },
    cestaASA: {
        AVAX: { percent: 50, tokenId: CoingeckoIds.AVAX},
        DAI: { percent: 25, tokenId: CoingeckoIds.DAI },
        USDC: { percent: 22.5, tokenId: CoingeckoIds.USDC },
        USDT: { percent: 2.5, tokenId: CoingeckoIds.USDT },
    },
    cestaA2S: {
        DAI: { percent: 33.33, tokenId: CoingeckoIds.DAI },
        USDT: { percent: 33.33, tokenId: CoingeckoIds.USDT },
        USDC: { percent: 33.33, tokenId: CoingeckoIds.USDC },
    }
}
