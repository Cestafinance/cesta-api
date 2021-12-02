const path = require('path');

const envPath = path.join(__dirname, '.env');
require('dotenv').config({path: envPath});

module.exports = [
    {
        packagePath: './modules/core',
        port: process.env.PORT
    },
    {
        packagePath: './modules/mongodb',
        environment: process.env.NODE_ENV
    },
    {
        packagePath: './modules/contracts'
    }
];

