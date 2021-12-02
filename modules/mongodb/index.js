module.exports = (options, imports, register) => {

    const mongoose = require('mongoose');
    const fs = require('fs');

    const schemas = require('./collections');

    const databaseConfig = require('./config/database.json')[options.environment || 'development'];

    mongoose.connect(`mongodb://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}/${databaseConfig.database}${databaseConfig.extendedUrl}`, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        // sslCA: fs.readFileSync(`${__dirname}/config/rds-combined-ca-bundle.pem`)
    })
        .then((response) => {
            console.log('Connected to mongodb');
        })
        .catch((Err) => {
            console.log('Error Connecting to mongo db');
        });

    register(null, {
        mongoose: mongoose
    })

}