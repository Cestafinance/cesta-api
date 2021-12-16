const { COINGECKO_ID : CoingeckoIds } = require("./coingekcoIds");

const TOKEN_CHART_COLOR = {
    [CoingeckoIds.BTC]: "#F7931A",
    [CoingeckoIds.ETH]: "#D7DBEC",
    [CoingeckoIds.USDT]: "#26A17B",
    [CoingeckoIds.USDC]: "#2775CA",
    [CoingeckoIds.DAI]: "#F8BD60",
    [CoingeckoIds.TUSD]: "#2B2E7F",
    [CoingeckoIds.MATIC]: "#8247E5",
    [CoingeckoIds.DOGE]: "#C25E33",
    [CoingeckoIds.BNB]: "#F3DF2F",
    [CoingeckoIds.AVAX]: "#E84142",
    [CoingeckoIds.PNG]: "#FF5700",
    [CoingeckoIds.LYD]: "#FFC71A",
    [CoingeckoIds.JOE]: "#FF5E5D",
}

const BACKUP_CHART_COLOR = [
    "#07F2C3",
    "#4BDFFF",
    "#07F249",
    "#C3F207",
    "#F20707",
    "#F24E07",
    "#F22307",
    "#F207A2",
    "#C307F2",
    "#6007F2"
];

module.exports = {
    TOKEN_CHART_COLOR,
    BACKUP_CHART_COLOR
}