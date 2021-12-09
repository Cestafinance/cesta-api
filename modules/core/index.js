module.exports = (options, imports, register) => {

    const express =  require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path');

    const swaggerUi = require("swagger-ui-express");
    const swaggerDocument = require("./swagger.json");

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(cors());

    const port = options.port || 5000;

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api/v1/contracts', imports.contactRoutes);

    app.get('/api/health', (req, res) => {
        res.send({success: true});
    });

    register(null, {app: app});

    const server = app.listen( port, () => {
        console.log('Listening on port ' + server.address().port);
    })
};
