const { COINGECKO_ID: CoingeckoIds } = require("../constants/distribution/coingekcoIds");
const { TOKEN_CHART_COLOR, BACKUP_CHART_COLOR} = require("../constants/distribution/chartColors");
const dateTimeHelper = require("../utils/datetime-util");

const processPerformanceData = (datas, strategyId, pnlSeries, sinceInception = false) => {
    try {
        if (!datas || datas === undefined || datas.length <= 0) {
            throw (`Datas is undefined or empty in processPerformanceData.`);
        }
        if (!strategyId || strategyId === undefined || strategyId === "") {
            throw (`Strategy Type is not defined`);
        }

        // To filter series which is set to show on graph
        pnlSeries = pnlSeries.filter(p => p.showOnGraph);

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

// Chart Data
const processChartData = (apys, strategyId, series) => {
    const result = [];
    const apyAttributes = getApyAttributeNameByStrategy(strategyId);

    // Array item added into the result: [seriesName, [[timestamp, apy], [timestamp, apy]]]
    // First item in array item: series name, example: citadelApy, represent a line in line chart
    // Second item in array item: series data, Array of [timestamp, apy]
    // Third item in array item: series color
    let chartColorIndex = 0; // Used to randomize chart color

    series = series.filter(s => s.showOnGraph);  // Filter for series which allow to show on the site

    series.forEach(attributes => { 
        let chartColor = TOKEN_CHART_COLOR[attributes.tokenId];
        if(chartColor === undefined) {
            chartColor = BACKUP_CHART_COLOR[chartColorIndex];
            chartColorIndex++;
        }
        result.push([attributes.name, [], chartColor]) 
    });

    
    apys.forEach(data => {
        const date = dateTimeHelper.toMillisecondsTimestamp(data["date"]);
       
        series.map((a, index) => {
            const attributeName = `${a.db}_performance`;
            // Add APY into data, etf strategies or yearn aprs require to multiply by 100 for percentage
            const apy = (attributeName === "aprs") 
                ? data[attributeName] * 100 
                : data[attributeName];
            result[index][1].push([date, +parseFloat(apy).toFixed(4)]); // "+" apy as number instead of string
        });
    });

    return result;
} 

 // TODO: Change this
 const getApyAttributeNameByStrategy = (strategyType) => {
    strategyType = strategyType.toLowerCase();
    switch(strategyType) {
        case "cestaaxa":
            return [
                { seriesName: "Cesta AXA", attributeName: "lp_performance", tokenId: ""},
                { seriesName: "BTC", attributeName: "btc_performance", tokenId: CoingeckoIds.BTC },
                { seriesName: "ETH", attributeName: "eth_performance", tokenId: CoingeckoIds.ETH },
            ];
        case "cestaaxs":
            return [
                { seriesName: "Cesta AXS", attributeName: "lp_performance", tokenId: ""},
                { seriesName: "BTC", attributeName: "btc_performance", tokenId: CoingeckoIds.BTC },
                { seriesName: "ETH", attributeName: "eth_performance", tokenId: CoingeckoIds.ETH },
            ];
        case "cestaasa":
            return [
                { seriesName: "Cesta ASA", attributeName: "lp_performance", tokenId: ""},
                { seriesName: "BTC", attributeName: "btc_performance", tokenId: CoingeckoIds.BTC },
                { seriesName: "ETH", attributeName: "eth_performance", tokenId: CoingeckoIds.ETH },
            ];
        case "cestaa2s":
            return [
                { seriesName: "Cesta A2S", attributeName: "lp_performance", tokenId: ""},
                { seriesName: "BTC", attributeName: "btc_performance", tokenId: CoingeckoIds.BTC },
                { seriesName: "ETH", attributeName: "eth_performance", tokenId: CoingeckoIds.ETH },
            ];
        default: 
            return [];
    }
}

module.exports = {
    calculatePerformance,
    calculateStrategyPNL,
    processPerformanceData,
    processChartData,
    getApyAttributeNameByStrategy
}