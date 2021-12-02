const fs = require('fs');
const path = require('path');

const modelPath = __dirname;

const schemas = {};
fs
    .readdirSync(modelPath)
    .filter((file) =>  {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file) =>  {
        let model = require(path.join(modelPath, file));
        schemas[model.name] = model;
    });

module.exports = schemas;