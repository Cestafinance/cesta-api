db.asset_composition.insertMany([
    {
        symbol: "cestaAXA",
        composition: [
            { percent: 50, tokenId: "avalanche-2", name: "AVAX" },
            { percent: 22.5, tokenId: "joe", name: "JOE" },
            { percent: 22.5, tokenId: "pangolin", name: "PNG" },
            { percent: 5, tokenId: "lydia-finance", name: 'LYD'},
        ]
    },
    {
        symbol: "cestaAXS",
        composition: [
            { percent: 30, tokenId: "joe", name: "JOE" },
            { percent: 15, tokenId: "pangolin", name: "PNG" },
            { percent: 5, tokenId: "lydia-finance", name: 'LYD'},
            { percent: 30, tokenId: "tether", name: "USDT" },
            { percent: 15, tokenId: "usd-coin", name: "USDC" },
            { percent: 5, tokenId: "dai", name: 'DAI'},
        ]
    },
    {
        symbol: "cestaASA",
        composition: [
            { percent: 50, tokenId: "avalanche-2", name: "AVAX" },
            { percent: 2.5, tokenId: "tether", name: "USDT" },
            { percent: 22.5, tokenId: "usd-coin", name: "USDC" },
            { percent: 25, tokenId: "dai", name: 'DAI'},
        ]
    },
    {
        symbol: "cestaA2S",
        composition: [
            { percent: 33, tokenId: "tether", name: "USDT" },
            { percent: 33, tokenId: "usd-coin", name: "USDC" },
            { percent: 33, tokenId: "dai", name: 'DAI'},
        ]
    }
])