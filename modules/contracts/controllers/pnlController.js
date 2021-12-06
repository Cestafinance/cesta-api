const dateTimeHelper = require("../utils/datetime-util");
const { calculateStrategyPNL, processPerformanceData, processChartData } = require("../utils/pnl-util");

module.exports = () => {
    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const {
        models: Schemas
    } = imports.mongoose

    const findData = async (strategyId, days) => {
        const collectionName = `${strategyId}_performance`;
        let searchCriteria = {};

        if (days !== undefined && days !== -1) {
            searchCriteria = {
                time_stamp: { $gte: days }
            }
        }

        const data = await Schemas[collectionName]
            .find(searchCriteria)
            .lean();

        return data;
    }

    // Returns only the PNL value
    const pnlHandler = async (strategyId, days) => {
        let pnl = 0;

        if (days !== undefined && !dateTimeHelper.validTimePeriod.includes(days)) {
            throw (`Days should be 1y, 6m, 30d, 7d, 1d or empty (all).`);
        }

        if (strategyId === undefined) {
            throw (`Missing strategy id.`)
        }

        try {
            const startTime = dateTimeHelper.getStartTimeFromParameter(days);
            const data = await findData(strategyId, startTime);

            if (!data || data === undefined || data?.length <= 0) {
                console.error(`No performance data found for strategy ${strategyId}`);
                return 0;
            }

            // Return PNL since inception
            if (startTime === -1) {
                return data[data.length - 1]["lp_performance"] * 100
            }

            // Calculate PNL based on fetched result, for days !== since inception
            pnl = await calculateStrategyPNL(data);

            return pnl;

        } catch (err) {
            console.error(`Error in pnlHandler(): `, err);
            return pnl;
        }
    }

    // Returns pnl data object with price and pnl
    const performanceHandler = async (strategyId, days) => {
        let result = [];

        if (days !== undefined && !dateTimeHelper.validTimePeriod.includes(days)) {
            throw (`Days should be 1y, 6m, 30d, 7d, 1d or empty (all).`);
        }

        if (strategyId === undefined) {
            throw (`Missing strategy id.`)
        }

        try {
            const startTime = dateTimeHelper.getStartTimeFromParameter(days);
            const sinceInception = (startTime === -1);
            const data = await findData(strategyId, startTime);

            if (!data || data === undefined || data?.length <= 0) {
                return result;
            }

            // Process PNL data
            result = processPerformanceData(data, strategyId, sinceInception);

            return result;

        } catch (err) {
            console.error(`Error in performanceHandler(): `, err);
            return result;
        }
    }

    const chartHandler = async(strategyId, days) => {
        let result = [];
        let finalResult = { performanceHistory: 0, chartData: result };

        if (!dateTimeHelper.validTimePeriod.includes(days)) {
            throw (`Days should be 1y, 6m, 30d, 7d, 1d or empty (all).`);
        }

        if (strategyId === undefined) {
            throw (`Missing strategy id.`)
        }

        try { 
            const startTime = dateTimeHelper.getStartTimeFromParameter(days);
            const data =  await findData(strategyId, startTime);

            if(data !== undefined && data?.length > 0) {
                const historicalData  = processPerformanceData(data, strategyId);
                const pnl = await calculateStrategyPNL(data);
                result = processChartData(historicalData, strategyId);

                finalResult = {
                    performanceHistory: pnl,
                    chartData: result
                };
            }
            
            return finalResult;
            
        } catch (err) {
            console.error(`Error in getChartData(): `, err);
            return finalResult;
        }
    }

    return {
        pnlHandler,
        performanceHandler,
        chartHandler
    }

}
