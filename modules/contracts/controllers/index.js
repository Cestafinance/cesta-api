const fs = require('fs');

const actions = {};

fs
    .readdirSync(__dirname)
    .filter((file) =>  {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file) =>  {
        let name = file.replace('.js', '');
        actions[name.replace('Controller','')] = require('./' + file)();
    });

module.exports = actions;

