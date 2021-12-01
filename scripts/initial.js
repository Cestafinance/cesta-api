// Mainnet Contracts
db.vault_categories.insertMany([
    {
        name: 'expert',
        network: "ethereum",
        contract_address: '0x8fe826cc1225b03aa06477ad5af745aed5fe7066',
        symbol: 'daoCDV',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'degen',
        network: "ethereum",
        contract_address: '0x2d9a136cf87d599628bcbdfb6c4fe75acd2a0aa8',
        symbol: 'daoELO',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'degen',
        network: "ethereum",
        contract_address: '0x2ad9f8d4c24652ea9f8a954f7e1fdb50a3be1dfd',
        symbol: 'daoCUB',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "ethereum",
        contract_address: '0x742a85daf742ca0213b06fdae449434e0448691e',
        symbol: 'daoSTO',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "polygon",
        contract_address: '0x3db93e95c9881bc7d9f2c845ce12e97130ebf5f2',
        symbol: 'daoMPT',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'basic',
        network: "ethereum",
        contract_address: '0x5b3ae8b672a753906b1592d44741f71fbd05ba8c',
        symbol: 'daoMVF',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'expert',
        network: "ethereum",
        contract_address: '0xcc6c417e991e810477b486d992faaca1b7440e76',
        symbol: 'daoCDV2',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "ethereum",
        contract_address: '0xd0b14644b0f91239075ed8a415769c4e20d37cf9',
        symbol: 'daoSTO2',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    // { name: 'advance', network:"avalanche", contract_address: '0x0b0e5b52e14152308f9f952ff19c67ebeb7560bb', symbol: 'daoAXA', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    // { name: 'advance', network:"avalanche", contract_address: '0xdf9fc6774937bf42602be1f80ab3da8a0b2a8594', symbol: 'daoAXS', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    // { name: 'advance', network:"avalanche", contract_address: '0x0d79f121fd1eb213e5dbde11edbe7744ecb51352', symbol: 'daoASA', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    // { name: 'advance', network:"avalanche", contract_address: '	0x89d6fd8ba3eaf76687cf7b3d10f914cc445eaec1', symbol: 'daoA2S', deposit: true, withdraw: true, depositMessage: '', withdrawMessage: ''},
    {
        name: 'degen',
        network: "bsc",
        contract_address: '0x5e5d75c2d1eec055e8c824c6c4763b59d5c7f065',
        symbol: 'daoDEGEN',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    }, // Update this later
    {
        name: 'advance',
        network: "bsc",
        contract_address: '0xb9e35635084b8b198f4bf4ee787d5949b46338f1',
        symbol: 'daoSAFU',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "ethereum",
        contract_address: '0xae6637a2e583295654989adcfb3221691bb490ef',
        symbol: 'daoTAS',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
]);

db.stake_pool.insertMany([
    {
        name: 'vipDVG',
        label: 'vipDVG LP',
        contract_address: '', // TODO: Update to mainnet address
        status: 'A',
        pid: '7',
        category: 'Basic',
        tokenId: 'xDVG',
        symbol: 'xDVG',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'ETH<->DVG',
        label: 'Uniswap DVG-ETH LP',
        contract_address: '', // TODO: Update to mainnet address
        status: 'A',
        pid: '8',
        category: 'Basic',
        tokenId: 'ethDVG',
        symbol: 'ethDVG',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'daoCDV',
        label: 'DAO Citadel LP',
        contract_address: '0x8fe826cc1225b03aa06477ad5af745aed5fe7066',
        status: 'A',
        pid: '9',
        category: 'Expert',
        tokenId: 'ethereum',
        symbol: 'daoCDV',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: "daoSTO",
        label: "DAO FAANG Stonk",
        contract_address: '0x742a85daf742ca0213b06fdae449434e0448691e',
        status: 'A',
        pid: '3',
        category: 'Advance',
        tokenId: 'tether',
        symbol: 'daoSTO',
        startBlock: 12770000,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    }
]);

db.daomine_pool.insertMany([
    {
        name: 'vipDVD',
        label: 'vipDVD LP',
        contract_address: '0x4bb18f377a9d2dd62a6af7d78f6e7673e0e0f648', // TODO: Update to mainnet address
        status: 'A',
        pid: '0',
        category: 'Basic',
        tokenId: 'xDVD',
        symbol: 'xDVD',
        startBlock: 26524610,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
]);

// Testnet Contracts
db.vault_categories.insertMany([
    {
        name: 'advance',
        network: "avalanche",
        contract_address: '0xe1964bdd447ee6f0ee2bc734f1043eba35444cfc',
        symbol: 'daoAXA',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "avalanche",
        contract_address: '0x849dbe4417e03534cb15f48c996219fc07b69008',
        symbol: 'daoAXS',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "avalanche",
        contract_address: '0x67ab7059b33e5958a6a2fd5c2270dd1d3cb617d5',
        symbol: 'daoASA',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    },
    {
        name: 'advance',
        network: "avalanche",
        contract_address: '	0xd4878232c5967924472f62b45df2e43a5acd6507',
        symbol: 'daoA2S',
        deposit: true,
        withdraw: true,
        depositMessage: '',
        withdrawMessage: ''
    }
]);

db.xdvg_token.insert({
    name: 'USDT',
    contract_address: '0x07de306FF27a2B630B1141956844eB1552B956B5'
});

db.stake_pool.insertMany([
    {
        name: 'vipDVG',
        label: 'vipDVG LP',
        contract_address: '0x3aa8e8b6d3562a1e7acb0dddd02b27896c00c424',
        status: 'A',
        pid: '7',
        category: 'Basic',
        tokenId: 'xDVG',
        symbol: 'xDVG',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'ETH<->DVG',
        label: 'Uniswap DVG-ETH LP',
        contract_address: '0x0a15e37442e2a41a3a51a9eff7fe1dce0e96f0bb',
        status: 'A',
        pid: '8',
        category: 'Basic',
        tokenId: 'ethDVG',
        symbol: 'ethDVG',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: 'daoCDV',
        label: 'DAO Citadel LP',
        contract_address: '0x626c25ca5b86277f395c0e40dbdf51f2a302ab43',
        status: 'A',
        pid: '9',
        category: 'Expert',
        tokenId: 'ethereum',
        symbol: 'daoCDV',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
    {
        name: "daoSTO",
        label: "DAO FAANG Stonk LP",
        contract_address: '0xd6af81e5288be43137debf969d7f2c03482c8cc1',
        status: 'A',
        pid: '11',
        category: 'Advance',
        tokenId: 'tether',
        symbol: 'daoSTO',
        startBlock: 25721857,
        deposit: false,
        withdraw: true,
        emergencyWithdraw: true,
    },
]);

db.daomine_pool.insertMany([
    {
        name: 'vipDVD',
        label: 'vipDVD LP',
        contract_address: '0x4bb18f377a9d2dd62a6af7d78f6e7673e0e0f648',
        status: 'A',
        pid: '0',
        category: 'Basic',
        tokenId: 'xDVD',
        symbol: 'xDVD',
        startBlock: 26524610,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
    {
        name: 'daoCDV',
        label: 'DAO Citadel LP',
        contract_address: '0x626c25ca5b86277f395c0e40dbdf51f2a302ab43',
        status: 'A',
        pid: '2',
        category: 'Expert',
        tokenId: 'ethereum',
        symbol: 'daoCDV',
        startBlock: 26670259,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
    {
        name: 'daoSTO',
        label: 'DAO FAANG Stonk LP',
        contract_address: '0xd6af81e5288be43137debf969d7f2c03482c8cc1',
        status: 'A',
        pid: '3',
        category: 'Advance',
        tokenId: 'tether',
        symbol: 'daoSTO',
        startBlock: 26670264,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
    {
        name: 'ETH<->DVD',
        label: 'Uniswap DVD-ETH LP',
        contract_address: '0xf8098e1a33e5445322171c0acf785bd35def54fa',
        status: 'A',
        pid: '4',
        category: 'Basic',
        tokenId: 'ethDVD',
        symbol: 'ethDVD',
        startBlock: 26678186,
        deposit: true,
        withdraw: true,
        emergencyWithdraw: false,
        compound: true,
        harvest: true,
    },
]);


db.special_event.insertMany([
    {startTime: 1622390400000, endTime: 1622444400000, threshold: 3000},
    {startTime: 1622538000000, endTime: 1622541600000, threshold: 5000},
    {startTime: 1622538900000, endTime: 1622540400000, threshold: 7000},
    {startTime: 1622542200000, endTime: 1622543400000, threshold: 6000},
    {startTime: 1622606400000, endTime: 1622610000000, threshold: 3000}
]);

db.tokens.insertMany([
    {tokenId: 'huobi-token', symbol: 'HBTC'},
    {tokenId: 'ethereum', symbol: 'ETH'},
    {tokenId: 'wrapped-bitcoin', symbol: 'WBTC'},
    {tokenId: 'defipulse-index', symbol: 'DPI'},
    {tokenId: 'dai', symbol: 'DAI'},
    {tokenId: 'mirrored-facebook', symbol: 'MFB'},
    {tokenId: 'mirrored-amazon', symbol: 'MAMZN'},
    {tokenId: 'mirrored-apple', symbol: 'MAAPL'},
    {tokenId: 'mirrored-netflix', symbol: 'MNFLX'},
    {tokenId: 'mirrored-google', symbol: 'MGOOGL'},
    {tokenId: 'terrausd', symbol: 'UST'},
    {tokenId: 'rendoge', symbol: 'RENDOGE'},
    {tokenId: 'matic-network', symbol: 'MATIC'},
    {tokenId: 'aave', symbol: 'AAVE'},
    {tokenId: 'sushi', symbol: 'SUSHI'},
    {tokenId: 'axie-infinity', symbol: 'AXS'},
    {tokenId: 'injective-protocol', symbol: 'INJ'},
    {tokenId: 'alchemix', symbol: 'ALCX'},
    {tokenId: 'mirrored-tesla', symbol: 'MTSLA'},
    {tokenId: 'bitcoin', symbol: 'BTC'},
    {tokenId: 'tether', symbol: 'USDT'},
    {tokenId: 'aave-dai', symbol: 'ADAI'},
    {tokenId: 'aave-usdc', symbol: 'AUSDC'},
    {tokenId: 'aave-usdt', symbol: 'AUSDT'},
    {tokenId: 'tether', symbol: 'USDT'},
    {tokenId: 'smooth-love-potion', symbol: 'SLP'},
    {tokenId: 'illuvium', symbol: 'ILV'},
    {tokenId: 'aavegotchi', symbol: 'GHST'},
    {tokenId: 'revv', symbol: 'REVV'},
    {tokenId: 'metaverse-index', symbol: 'MVI'},
    {tokenId: 'mirrored-microsoft', symbol: 'MMSFT'}, // TODO:Remember to add this for DaoStonks
    {tokenId: 'mirrored-twitter', symbol: 'MTWTR'}, // TODO:Remember to add this for DaoStonks
]);

db.airdrop.insertMany([
    {address: "", amount: "", signature: ""}
]);

db.airdrop_event.insertMany([
    {address: "0xbcf5cef54bca1b0591ee487bac567e7182bf8c7d", active: true}
]);

// script to update currencies property for each strategy
// testnet
db.vault_categories.updateMany(
    {network: "ethereum"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0x07de306ff27a2b630b1141956844eb1552b956b5",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

db.vault_categories.updateMany(
    {network: "polygon"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0xbd21a10f619be90d6066c941b04e340841f1f989",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0x2058a9d7613eee744279e3856ef0eada5fcbaa7e",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

db.vault_categories.updateMany(
    {network: "bsc"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0x64544969ed7ebf5f083679233325356ebe738930",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

db.vault_categories.updateMany(
    {network: "avalanche"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0xE01A4D7de190f60F86b683661F67f79F134E0582",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

// Mainnet
db.vault_categories.updateMany(
    {network: "ethereum"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

db.vault_categories.updateMany(
    {network: "polygon"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

db.vault_categories.updateMany(
    {network: "bsc"},
    {
        $set: {
            currencies: [
                {
                    label: "USDT",
                    address: "0x55d398326f99059fF775485246999027B3197955",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 0
                },
                {
                    label: "USDC",
                    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 1
                },
                {
                    label: "DAI",
                    address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
                    enabledDeposit: true,
                    enabledWithdraw: true,
                    tokenIndex: 2
                },
            ]
        }
    }
);

// db.vault_categories.updateMany(
// 	{ network: "avalanche" },
// 	{ $set: {
// 		currencies: [
// 			{ label: "USDT", address: "0xE01A4D7de190f60F86b683661F67f79F134E0582", enabledDeposit: true, enabledWithdraw: true, tokenIndex: 0 },
// 			{ label: "USDC", address: "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38", enabledDeposit: true, enabledWithdraw: true, tokenIndex: 1 },
// 			{ label: "DAI", address: "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c", enabledDeposit: true, enabledWithdraw: true, tokenIndex: 2 },
// 		]
// 	}}
// );

db.stableCoins.insertMany([
    {
        "name": "Tether USD",
        "symbol": "USDT",
        "address": "0x07de306ff27a2b630b1141956844eb1552b956b5",
        "network": "kovan",
        "decimals": 6,
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_upgradedAddress",
                        "type": "address"
                    }
                ],
                "name": "deprecate",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "deprecated",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_evilUser",
                        "type": "address"
                    }
                ],
                "name": "addBlackList",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "upgradedAddress",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balances",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "maximumFee",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "_totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "unpause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_maker",
                        "type": "address"
                    }
                ],
                "name": "getBlackListStatus",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    },
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "allowed",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "who",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newBasisPoints",
                        "type": "uint256"
                    },
                    {
                        "name": "newMaxFee",
                        "type": "uint256"
                    }
                ],
                "name": "setParams",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "issue",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "redeem",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "remaining",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "basisPointsRate",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "isBlackListed",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_clearedUser",
                        "type": "address"
                    }
                ],
                "name": "removeBlackList",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "MAX_UINT",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_blackListedUser",
                        "type": "address"
                    }
                ],
                "name": "destroyBlackFunds",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_initialSupply",
                        "type": "uint256"
                    },
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "name": "_decimals",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Issue",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Redeem",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "newAddress",
                        "type": "address"
                    }
                ],
                "name": "Deprecate",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "feeBasisPoints",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "maxFee",
                        "type": "uint256"
                    }
                ],
                "name": "Params",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_blackListedUser",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint256"
                    }
                ],
                "name": "DestroyedBlackFunds",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "AddedBlackList",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "RemovedBlackList",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Pause",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [],
                "name": "Unpause",
                "type": "event"
            }
        ]
    },
    {
        "name": "USD Coin",
        "symbol": "USDC",
        "address": "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
        "network": "kovan",
        "decimals": 6,
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_initialAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_tokenName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint8",
                        "name": "_decimalUnits",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "_tokenSymbol",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "allocateTo",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    },
    {
        "name": "Dai Stablecoin",
        "symbol": "DAI",
        "address": "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
        "network": "kovan",
        "decimals": 18,
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "chainId_",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "guy",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": true,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes4",
                        "name": "sig",
                        "type": "bytes4"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "usr",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "arg1",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "arg2",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "LogNote",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "DOMAIN_SEPARATOR",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "PERMIT_TYPEHASH",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "usr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "usr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "guy",
                        "type": "address"
                    }
                ],
                "name": "deny",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "usr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "move",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "nonces",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "expiry",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "allowed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                    }
                ],
                "name": "permit",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "usr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "pull",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "usr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "push",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "guy",
                        "type": "address"
                    }
                ],
                "name": "rely",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "version",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "wards",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
]);

db.strategies.insertMany([
    {
        "name": "DAO DAO AVAX DEX indexfarm",
        "symbol": "daoAXA",
        "vaultAddress": "0xe1964bdd447ee6f0ee2bc734f1043eba35444cfc",
        "decimals": 18,
        "feeDecimals": 18,
        "address": "",
        "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "risk": "Advance",
        "type": "daoAXA",
        "infoLink": "https://daoventures.gitbook.io/daoventures/products/strategies/dao-citadel-vault",
        "strategyName": "DAO AVAX DEX indexfarm: USDT USDC DAI",
        "info": "Yield farm with top Avalanche decentralised exchange tokens.",
        "description": "Invest in the top three Avalanche DEXs (Trader Joe, Pangolin Exchange and Lydia Finance) which will be paired with AVAX for additional yield farming.",
        "priceId": "daoAXA_price",
        "isPopularItem": false,
        "happyHourEnabled": false,
        "isDepositEnabled": true,
        "isWithdrawEnabled": true,
        "performanceId": "daoAXA",
        "logoFormat": "png",
        "group": "Advance",
        "tvlKey": "daoAXA_tvl",
        "network": "fuji",
        "coinsAccepted": "USDT/USDC/DAI",
        "erc20addresses": [
            "0xE01A4D7de190f60F86b683661F67f79F134E0582",
            "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
            "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c"
        ],
        "tokens": ["USDT", "USDC", "DAI"],
        "vaultInfo": {
            "name": "DAO Vault AXA",
            "address": "0xe1964bdd447ee6f0ee2bc734f1043eba35444cfc",
            "symbol": "daoAXA",
            "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        }
    },
    {
        "name": "DAO AVAX DEX-Stablecoin indexfarm",
        "symbol": "daoAXS",
        "vaultAddress": "0x849dbe4417e03534cb15f48c996219fc07b69008",
        "decimals": 18,
        "feeDecimals": 18,
        "address": "",
        "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "risk": "Advance",
        "type": "daoAXS",
        "infoLink": "https://daoventures.gitbook.io/daoventures/products/strategies/dao-citadel-vault",
        "strategyName": "DAO AVAX DEX-Stablecoin indexfarm: USDT USDC DAI",
        "info": "Pairing top Avalanche decentralised exchange tokens with stablecoin for reduced volatility",
        "description": "Pairing stablecoins with Avalanche DEX tokens (Trader Joe, Pangolin Exchange and Lydia Finance) to reduce volatility while still enjoying incentivised yield farming rewards.",
        "priceId": "daoAXS_price",
        "isPopularItem": false,
        "happyHourEnabled": false,
        "isDepositEnabled": true,
        "isWithdrawEnabled": true,
        "performanceId": "daoAXS",
        "logoFormat": "svg",
        "group": "Advance",
        "tvlKey": "daoAXS_tvl",
        "network": "fuji",
        "coinsAccepted": "USDT/USDC/DAI",
        "erc20addresses": [
            "0xE01A4D7de190f60F86b683661F67f79F134E0582",
            "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
            "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c"
        ],
        "tokens": ["USDT", "USDC", "DAI"],
        "vaultInfo": {
            "name": "DAO Vault AXS",
            "address": "0x849dbe4417e03534cb15f48c996219fc07b69008",
            "symbol": "daoAXS",
            "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        },
    },
    {
        "name": "DAO AVAX farm",
        "symbol": "daoASA",
        "vaultAddress": "0x67ab7059b33e5958a6a2fd5c2270dd1d3cb617d5",
        "decimals": 18,
        "feeDecimals": 18,
        "address": "",
        "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "risk": "Advance",
        "type": "daoASA",
        "infoLink": "https://daoventures.gitbook.io/daoventures/products/strategies/dao-citadel-vault",
        "strategyName": "DAO AVAX farm: USDT USDC DAI",
        "info": "Invest in the Avalanche chain with lowered volatility and additional yield farming.",
        "description": "Pure AVAX-stablecoin yield farming on DEXs to ride the growth of the Avalanche ecosystem.",
        "priceId": "daoASA_price",
        "isPopularItem": false,
        "happyHourEnabled": false,
        "isDepositEnabled": true,
        "isWithdrawEnabled": true,
        "performanceId": "daoASA",
        "logoFormat": "svg",
        "group": "Advance",
        "tvlKey": "daoASA_tvl",
        "network": "fuji",
        "coinsAccepted": "USDT/USDC/DAI",
        "erc20addresses": [
            "0xE01A4D7de190f60F86b683661F67f79F134E0582",
            "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
            "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c"
        ],
        "tokens": ["USDT", "USDC", "DAI"],
        "vaultInfo": {
            "name": "DAO Vault ASA",
            "address": "0x67ab7059b33e5958a6a2fd5c2270dd1d3cb617d5",
            "symbol": "daoASA",
            "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        },
    },
    {
        "name": "DAO AVAX Stablecoin Farm",
        "symbol": "daoA2S",
        "vaultAddress": "0xd4878232c5967924472f62b45df2e43a5acd6507",
        "decimals": 18,
        "feeDecimals": 18,
        "address": "",
        "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        "risk": "Advance",
        "type": "daoA2S",
        "infoLink": "https://daoventures.gitbook.io/daoventures/products/strategies/dao-citadel-vault",
        "strategyName": "DAO AVAX Stablecoin Farm: USDT USDC DAI",
        "info": "Minimise risks by farming pure stablecoin pairs on Avalanche.",
        "description": "Leverages many of the yield farming incentives provided on the Avalanche ecosystem while minimising the volatility risks with pure stablecoin-stablecoin pairs.",
        "priceId": "daoA2S_price",
        "isPopularItem": false,
        "happyHourEnabled": false,
        "isDepositEnabled": true,
        "isWithdrawEnabled": true,
        "performanceId": "daoA2S",
        "logoFormat": "svg",
        "group": "Advance",
        "tvlKey": "daoA2S_tvl",
        "network": "fuji",
        "coinsAccepted": "USDT/USDC/DAI",
        "erc20addresses": [
            "0xE01A4D7de190f60F86b683661F67f79F134E0582",
            "0xA6cFCa9EB181728082D35419B58Ba7eE4c9c8d38",
            "0x3bc22AA42FF61fC2D01E87c2Fa4268D0334b1a4c"
        ],
        "tokens": ["USDT", "USDC", "DAI"],
        "vaultInfo": {
            "name": "DAO Vault A2S",
            "address": "0xd4878232c5967924472f62b45df2e43a5acd6507",
            "symbol": "daoA2S",
            "abi": [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtDeposit","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenDeposit","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newCommunityWallet","type":"address"},{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"amtWithdraw","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenWithdraw","type":"address"},{"indexed":false,"internalType":"uint256","name":"shareBurned","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllPoolInUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"ticker","type":"string"},{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"},{"internalType":"address","name":"_strategy","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasuryWallet","type":"address"},{"internalType":"address","name":"_communityWallet","type":"address"},{"internalType":"address","name":"_admin","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"share","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"},{"internalType":"uint256[]","name":"amountsOutMin","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        },
    }
]);
