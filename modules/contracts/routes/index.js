module.exports = (imports,options) => {

    const express = require('express');

    const controller = require('../controllers');

    const getContractRoutes = () => {

        const router = express.Router();

        router.get('/stable/coins', async (req, res) => {
            try {

                let {network = 'fuji'} = req.query;

                let markets = await controller.contract.getStableCoins(network);

                res.send(markets);

            } catch (Err) {
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        });

        router.get('/strategies/list', async (req, res) => {
            try {

                let {network = 'fuji'} = req.query;

                let markets = await controller.contract.getStrategies(network);

                res.send(markets);

            } catch (Err) {
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        });

        return router;

    };

    return {
        getContractRoutes
    }

};
