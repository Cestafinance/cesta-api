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
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA AXA",
                showOnGraph: true,
                tokenId: ""
            },
            {
                db: 'eth', 
                network: "ethereum", 
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph,
                showOnGraph: true,
                tokenId: "ethereum"
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
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
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA AXS",
                showOnGraph: true,
                tokenId: ""
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH",// series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
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
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA ASA",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
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
                network: "ethereum",
                chainlink: "", 
                decimals: 18, 
                name: "CESTA A2S",
                showOnGraph: true,
                tokenId: "" 
            },
            {
                db: 'eth', 
                network: "ethereum",
                chainlink: "0x9326BFA02ADD2366b30bacB125260Af641031331",
                decimals: 8, // decimals from chainlink contract
                name: "ETH", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "ethereum" 
            },
            {
                db: 'btc', // refer to lp_token_price_usd in collection data
                network: "ethereum",
                chainlink: "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e",
                decimals: 8, // decimals from chainlink contract
                name: "BTC", // series label on the frontend graph
                showOnGraph: true,
                tokenId: "bitcoin" 
            }
        ]
    }
])