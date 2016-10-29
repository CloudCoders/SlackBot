'use strict';


var Jarvis = require('../lib/jarvis');

var token = process.env.BOT_API_KEY;
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var jarvis = new Jarvis({
    token: token,
    dbPath: dbPath,
    name: name
});

jarvis.run();