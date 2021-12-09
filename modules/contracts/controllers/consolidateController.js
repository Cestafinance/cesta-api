const { getAssetDistribution } = require("../utils/distribution-util");

module.exports = () => {
    const module = require('../config/module');
    
    const { getStrategies } = require("../controllers/contractController")();
    const { getLatestTVL } = require("../controllers/tvlController")();
    const { pnlHandler } = require("../controllers/pnlController")();

    const imports = module.getImports();
    const options = module.getOptions();

    const {
        models: Schemas
    } = imports.mongoose

    const findAllTvls = async(strategyIds) => {
        const tvls = {};
        await Promise.all(
            strategyIds.map(async(s) => {
                let tvl = await getLatestTVL(s);
                tvls[s] = tvl[0]? tvl[0].tvl : 0;
            })
        ) 

        return tvls;
    }

    const findAllPnls = async(strategyIds) => {
        const pnls = {};
        await Promise.all(
            strategyIds.map(async(s) => {
                const pnl = await pnlHandler(s);
                pnls[s] = pnl;
            })
        ); 
    
        return pnls;
    }

    const findAllAssetDistribution = async(strategyIds) => {
        const distributions = {};
        await Promise.all(
            strategyIds.map(async(s) => {
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