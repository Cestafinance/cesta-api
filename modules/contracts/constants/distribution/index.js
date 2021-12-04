const { COINGECKO_ID : CoingeckoIds }  = require("./coingekcoIds");

module.exports.ASSET_DISTRIBUTION = {
    DAOAXA: {
        AVAX: { percent: 50, tokenId: CoingeckoIds.AVAX },
        JOE: { percent: 22.5, tokenId: CoingeckoIds.JOE },
        PNG: { percent: 22.5, tokenId: CoingeckoIds.PNG },
        LYD: { percent: 5, tokenId: CoingeckoIds.LYD },
    },
    DAOAXS: {
        JOE: { percent: 40, tokenId: CoingeckoIds.JOE },
        PNG: { percent: 5, tokenId: CoingeckoIds.PNG },
        LYD: { percent: 5, tokenId: CoingeckoIds.LYD },
        USDT: { percent: 5, tokenId: CoingeckoIds.USDT },
        USDC: { percent: 40, tokenId: CoingeckoIds.USDC},
        DAI: { percent: 5, tokenId: CoingeckoIds.DAI },
    },
    DAOASA: {
        AVAX: { percent: 50, tokenId: CoingeckoIds.AVAX},
        DAI: { percent: 25, tokenId: CoingeckoIds.DAI },
        USDC: { percent: 22.5, tokenId: CoingeckoIds.USDC },
        USDT: { percent: 2.5, tokenId: CoingeckoIds.USDT },
    },
    DAOA2S: {
        DAI: { percent: 33.33, tokenId: CoingeckoIds.DAI },
        USDT: { percent: 33.33, tokenId: CoingeckoIds.USDT },
        USDC: { percent: 33.33, tokenId: CoingeckoIds.USDC },
    }
}
