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

        router.get('/strategies/tvl', async(req,res) => {
            try {
                let { id } = req.query;

                let tvl = await controller.tvl.getLatestTVL(id);

                if(tvl?.length>0) {
                    delete tvl[0]._id;
                }

                res.send(tvl[0]);
                 
            } catch(err) {
                console.error(err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        router.get('/strategies/tvl/list', async(req,res) => {
            try {
                let { startTime, endTime, id } = req.query;

                let tvls = await controller.tvl.findTvlsWithTimestamp(id, startTime, endTime);
                res.send(tvls);
                 
            } catch(err) {
                console.error(`Error in /strategies/tvl/:strategyId/list`, err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        router.get('/strategies/tvl/total', async(req,res) => {
            try {
                let total = await controller.tvl.getLatestTotalTVL(strategyId);
                res.send(total);
                 
            } catch(err) {
                console.error(`Error in /strategies/tvl/total`, err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        // router.get('/strategies/distribution', async(req,res) => {
        //     try {
        //         let { id } = req.query;

        //         if(id === undefined) {
        //             throw (`Strategy ID is missing`);
        //         }

        //         let distribution = await controller.distribution.getStrategyAssetDistribution(id);

        //         res.send(distribution);
                 
        //     } catch(err) {
        //         console.error(`Error in /strategies/distribution: `, err);
        //         res.status(500).send({
        //             message: 'Internal Server Error'
        //         })
        //     }
        // })

        return router;

    };


    return {
        getContractRoutes,
    }

};
