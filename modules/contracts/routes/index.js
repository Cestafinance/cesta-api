module.exports = (imports,options) => {

    const express = require('express');

    const controller = require('../controllers');

    const getContractRoutes = () => {

        const router = express.Router();

        router.get('/list/all', async (req, res) => {
            try {

                let {network = 'kovan'} = req.query;

                let markets = await controller.contract.getAllMarkets(network);

                res.send(markets);

            } catch (Err) {
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })


        return router;

    };

    return {
        getContractRoutes
    }

};
