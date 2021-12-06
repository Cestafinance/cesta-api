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

        router.get('/strategies/distribution', async(req,res) => {
            try {
                let { id } = req.query;

                if(id === undefined) {
                    throw (`Strategy ID is missing`);
                }

                let distribution = await controller.distribution.getAssetDistribution(id);

                res.send(distribution);
                 
            } catch(err) {
                console.error(`Error in /strategies/distribution: `, err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        router.get('/strategies/pnl', async(req,res) => {
            try {
                let { id, day } = req.query;

                if(id === undefined) {
                    throw (`Strategy ID is missing`);
                }

                let pnl = await controller.pnl.pnlHandler(id, day);
               
                res.send({pnl});

            } catch(err) {
                console.error(`Error in /strategies/pnl: `, err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        router.get('/strategies/performance', async(req,res) => {
            try {
                let { id, day } = req.query;

                if(id === undefined) {
                    throw (`Strategy ID is missing`);
                }

                let performance = await controller.pnl.performanceHandler(id, day);
               
                res.send(performance);

            } catch(err) {
                console.error(`Error in /strategies/performance: `, err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        router.get('/strategies/chart/:day', async(req,res) => {
            try {
                let { id } = req.query;
                let { day } = req.params;

                if(id === undefined) {
                    throw (`Strategy ID is missing`);
                }

                if(day === undefined) {
                    throw (`Days is missing`);
                }

                let chartData = await controller.pnl.chartHandler(id, day);
               
                res.send(chartData);

            } catch(err) {
                console.error(`Error in /strategies/chart/:day: `, err);
                res.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        })

        return router;

    };


    return {
        getContractRoutes,
    }

};
