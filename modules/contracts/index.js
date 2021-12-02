'use strict';

module.exports = (options, imports, register) => {

    const moduleConfig = require('./config/module');

    moduleConfig.setOptions(options);
    moduleConfig.setImports(imports);

    const routes = require('./routes')(imports,options);

    register(null, {
        contactRoutes: routes.getContractRoutes()
    })

};
