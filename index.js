const path = require('path');
const architect = require('architect');

const configPath = path.join(__dirname,'modules.js');
const config = architect.loadConfig(configPath);

architect.createApp(config, (err, app) =>{
    if(err) throw err;
    console.log('App ready');
});
