// Mainnet
// symbol = strategy vault symbol
// series = array of graph lines
// db = price property name in db , btc_price or eth_price 
// network = chainlink contract network, kovan & ethereum = ethereum, polygon & mumbai = polygon, avalanche & fuji = avalanche , bsc test & bsc main = bsc
// chainlink = chainlink address
// decimals = decimals from chainlink address
// name = series label on the frontend graph

db.strategy_pnl_series.insertMany([
    {
        symbol: 'cestaAXA',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA AXA",
                showOnGraph: true,
                tokenId: ""
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph,
                showOnGraph: true,
                tokenId: "ethereum"
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin"
            }
        ]
    },
    {
        symbol: 'cestaAXS',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA AXS",
                showOnGraph: true,
                tokenId: ""
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH",// series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'cestaASA',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA ASA",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    },
    {
        symbol: 'cestaA2S',
        series: [
            {
                db: 'lp', 
                network: "avalanche",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA A2S",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "avalanche",
                chainlink: "0x976B3D034E162d8bD72D6b9C989d545b839003b0",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    }
])