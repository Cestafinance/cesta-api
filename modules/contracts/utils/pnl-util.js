const { COINGECKO_ID: CoingeckoIds } = require("../constants/distribution/coingekcoIds");
 
const processPerformanceData = (datas, strategyId, sinceInception = false) => {
    try {
        if (!datas || datas === undefined || datas.length <= 0) {
            throw (`Datas is undefined or empty in processPerformanceData.`);
        }
        if (!strategyId || strategyId === undefined || strategyId === "") {
            throw (`Strategy Type is not defined`);
        }

        // To get which series in 
        // const contracts = contractHelper.getContractsFromDomain();
        // const pnlSeries = contracts.farmer[strategyId].pnl;
        const pnlSeries = [
            {db: "lp", tokenId: ""},
            {db: "btc", tokenId: CoingeckoIds.BTC},
            {db: "eth", tokenId: CoingeckoIds.ETH},
        ];

        if(sinceInception) {
            datas.forEach(data => {
                pnlSeries.forEach(series => {
                    const seriesName = `${series.db}_performance`;
                    data[seriesName] = data[seriesName] * 100
                });
                delete data._id;
            });
        } else {
            const firstData = datas[0];
            const basePrices = {};
            pnlSeries.forEach(series => {
                const propertyName = (series.db === "lp")
                    ? "lp_token_price_usd"
                    : `${series.db}_price`;
                basePrices[series.db] = firstData[propertyName]
                    ? firstData[propertyName]
                    : 0;
            })

            datas.forEach((data) => {
                // If base price is zero, to set base price as first non-zero lp price
                if (parseFloat(basePrices["lp"]) === 0 &&
                    parseFloat(data["lp_token_price_usd"]) !== 0
                ) {
                    basePrices["lp"] = data["lp_token_price_usd"];
                }

                pnlSeries.forEach(series => {
                    const seriesName = series.db;
                    const propertyName = (seriesName === "lp")
                        ? "lp_token_price_usd"
                        : `${seriesName}_price`;
                    const performanceName = `${seriesName}_performance`;

                    data[performanceName] = calculatePerformance(
                        basePrices[seriesName],
                        data[propertyName]
                    ) * 100
                });

                delete data._id;
            });
        }
        return datas;
    } catch (err) {
        console.error(`Error in processPerformanceData(): `, err);
        return datas;
    }
}

const calculateStrategyPNL = async (datas) => {
    let pnl = 0;

    try {
        if (!datas || datas === undefined || datas.length <= 0) {
            throw (`Missing datas for calculation.`);
        }

        const lastDataIndex = datas.length - 1;
        let basePrice = datas[0]["lp_token_price_usd"];

        if (parseFloat(basePrice) === 0) {
            // Looking for the next non-zero lp price in datas array
            const data = datas.find(r => parseFloat(r["lp_token_price_usd"]) !== 0);
            basePrice = data !== undefined && data["lp_token_price_usd"]
                ? data["lp_token_price_usd"]
                : 0;
        }

        pnl = calculatePerformance(
            basePrice,
            datas[lastDataIndex]["lp_token_price_usd"]
        ) * 100;

    } catch (err) {
        console.error(`[performance/handler] Error in calculatePNL(): ${err}`);
    } finally {
        return pnl;
    }
}

const calculatePerformance = (initial, current) => {
    if (initial == 0) {
        return 0;
    } else {
        let performance = (current / initial - 1);
        return performance;
    }
}

module.exports = {
    calculatePerformance,
    calculateStrategyPNL,
    processPerformanceData
}