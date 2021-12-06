module.exports = () => {
    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const {
        models: Schemas
    } = imports.mongoose

    const getLatestTVL = async(strategyId) => {
        let collectionName = `${strategyId}_tvl`;
        let tvl = await Schemas[collectionName]
            .find({})
            .limit(1)
            .sort('-timestamp')
            .lean();

        return tvl;
    }

    const findTvlsWithTimestamp = async(strategyId, startTime, endTime) => {
        let collectionName = `${strategyId}_tvl`;

        let searchCriteria = {}; // Find all TVLs
    
        if(startTime !== undefined && endTime !== undefined) {
            searchCriteria.timestamp = { $lte: endTime, $gte : startTime }
        } else if (startTime !== undefined) {
            searchCriteria.timestamp = { $gte : startTime }
        } else if (endTime !== undefined) {
            searchCriteria.timestamp = { $lte: endTime }
        }

        let tvls = await Schemas[collectionName]
            .find(searchCriteria)
            .lean();
        tvls = tvls.map(t => {
            delete t._id;
            return t;
        })

        return tvls;
    }

    const getLatestTotalTVL = async() => {
        let totalTvl = await Schemas["total_tvl"]
            .find({})
            .limit(1)
            .sort('-timestamp')
            .lean();
        totalTvl = totalTvl.map(t => { 
                delete t._id;
                return t
        })

        return totalTvl[0];
    }

    return {
        getLatestTVL,
        getLatestTotalTVL,
        findTvlsWithTimestamp
    } 
}