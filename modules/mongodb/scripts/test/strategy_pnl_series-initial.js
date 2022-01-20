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
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph,
                showOnGraph: true,
                tokenId: "ethereum"
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
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
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH",// series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
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
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
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
                chainlink: "0x86d67c3D38D2bCeE722E601025C25a575021c6EA",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "avalanche",
                chainlink: "0x31CF013A08c6Ac228C94551d535d5BAfE19c602a",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    }
])