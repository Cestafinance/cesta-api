module.exports = () => {
    const module = require('../config/module');
    const imports = module.getImports();
    const options = module.getOptions();

    const {
        models: Schemas
    } = imports.mongoose;

    const getStrategySeries = async(symbol) => {
        try { 
            let strategies = await Schemas["strategy_pnl_series"].find({ symbol }).lean();
            return strategies;
        } catch (err) { 
            console.error(`Error in getStrategySeries() : `, err);
        }
    }

    return { 
        getStrategySeries
    }
}