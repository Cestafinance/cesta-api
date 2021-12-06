const { calculateStrategyPNL } = require("../utils/pnl-util");
const { getAssetDistribution } = require("../utils/distribution-util");

module.exports = () => {
    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const {
        models: Schemas
    } = imports.mongoose

    // TODO: Duplicated function in contract controller
    // Should import from there
    const getStrategies = async (network) => {
        let strategy = await Schemas.strategies.find({
            network
        }).lean();

        return strategy;
    }

    const findAllTvls = async(strategyIds) => {
        const tvls = {};
        await Promise.all(
            strategyIds.map(async(s) => {
                // TODO: Duplicated function in tvl controller 
                let collectionName = `${s}_tvl`;
                let tvl = await Schemas[collectionName]
                    .find({})
                    .limit(1)
                    .sort('-timestamp')
                    .lean();
        
                tvls[s] = tvl[0]?.tvl;
            })
        ) 

        return tvls;
    }

    const findAllPnls = async(strategyIds) => {
        const pnls = {};
        await Promise.all(
            strategyIds.map(async(s) => {
                // TODO: Duplicated function in tvl controller 
                const collectionName = `${s}_performance`;
                const data = await Schemas[collectionName]
                    .find({})
                    .lean();
                
                let pnl = 0;
                if(data.length > 0) {
                   pnl = await calculateStrategyPNL(data);
                }
              
                pnls[s] = pnl;
            })
        ); 
    
        return pnls;
    }

    const findAllAssetDistribution = async(strategyIds) => {
        const distributions = {};
        await Promise.all(
            strategyIds.map(async(s) => {
                // TODO: Duplicated function in tvl controller 
                const distribution = await getAssetDistribution(s);
                distributions[s] = distribution;
            })
        ); 
    
        return distributions;
    }

    const consolidateHandler = async(network) => {
        let result = {};
        try {
            if(network === undefined || network === null || network === "") {
                throw(`Network is undefined`);
            }

            // TODO: Add valid network checking

            const strategies = await getStrategies(network);
            if(strategies.length <= 0) {
                return result;
            }

            const symbols = strategies.map(s => s.symbol);

            const [tvls, pnls, distributions] = await Promise.all([
                findAllTvls(symbols),
                findAllPnls(symbols),
                findAllAssetDistribution(symbols)
            ]);
        

            symbols.forEach(s => {
                const object =  {
                    pnl: pnls[s] ?? 0,
                    tvl: tvls[s] ?? 0,
                    distribution: distributions[s] ?? []
                }
                result[s] = object;
            })

            return result;
            
        } catch (err) {
            console.error(`Error in consolidateHandler(): `, err);
        }
    }


    return {
        consolidateHandler
    } 

}