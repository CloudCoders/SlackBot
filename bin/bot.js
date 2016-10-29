'use strict';


var Jarvis = require('../lib/jarvisbotslack');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

var jarvis = new Jarvis({
    token: token,
    name: name
});

jarvis.run();