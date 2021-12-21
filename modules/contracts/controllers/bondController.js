module.exports = () => {

    const module = require('../config/module');
    const imports = module.getImports();

    const {
        models: Schemas
    } = imports.mongoose

    const findBonds = async(network) => {
        let bonds = await Schemas.bonds.find({
            network
        }).lean();

        return bonds;
    }

    return {
        findBonds
    }

}
