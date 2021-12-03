const fs = require('fs');
const path = require('path');
const tvls = require('./tvl/index');

const modelPath = __dirname;

const schemas = {};
fs
    .readdirSync(modelPath)
    .filter((file) =>  {
        return (file.indexOf(".") !== 0) && (file.indexOf(".") !== -1) && (file !== "index.js");
    })
    .forEach((file) =>  {
        let model = require(path.join(modelPath, file));
        schemas[model.name] = model;
    });

// Add TVLs into schemas
tvls.forEach((tvl) => {
    schemas[tvl.name] = tvl;
})

module.exports = schemas;