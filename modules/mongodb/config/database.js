
require('dotenv').config();

module.exports = {
    host: process.env.DB_HOST,
    extendedUrl: process.env.DB_EXTEND_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};