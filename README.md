# Cesta app -nodejs
nodejs application for fetching data. 

Before start to application, please ensure all the collection under `mongodb/scripts` are insert into database. Note that scripts under `mongodb/scripts/test` are for test environment.

###### Strategy PNL Series
Used to control chart series for each strategy, example data： 
```
{
    symbol: "cestaAXA", // symbol of strategy vault
    series: [
        {
            db: "eth", // eth or btc or lp, used to form attribute name in pnl data
            network: "ethereum", // network type (ethereum & kovan , value = ethereum, avalanche & fuji, value = avalanche)
            chainlink: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419", // address for chainlink 
            decimals: 18, // decimals from chainlink contract
            name: "CESTA AXA", // Series name to be displayed on chart
            showOnGraph: true, // Show series on chart, set as false, if want to hide from graph
            tokenId: "ethereum", // use to get chart color at backend, use token's Coingecko ID.
        }
    ]
}
```
If want to add more token for chart comparison, just add the token detail into series array.
