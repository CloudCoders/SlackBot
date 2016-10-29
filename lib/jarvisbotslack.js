'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');

var settings = {
    name: 'jarvisbotslack'
};

var Jarvis =function Constructor(settings) {
    this.settings = settings;
    this.settings.name = settings.name || "jarvisbotslack";
    this.user = null;

};
util.inherits(Jarvis,Bot);
module.exports = Jarvis;


Jarvis.prototype._onStart = function () {
    this._loadBotUser();
};

Jarvis.prototype.run = function () {
    Jarvis.super_.call(this,this.settings);

    this.on('start',this._onStart);
    this.on('message',this._onMessage);
};

Jarvis.prototype._onMessage = function (message) {
    var channel = self._getChannelById(message.channel);
    if(this._isChatMessage(message) &&
        !this._isFromJarvis(message) &&
        this._isToJarvis(message)){

            this._reply(message);
    }
    if(message.indexOf("goterris") !== -1){
        this.postMessageToChannel(channel.name,":goterris:",{as_user : true});
    }
    if(message.indexOf("chupar") !== -1){
        this.postMessageToChannel(channel.name,"https://i.imgsafe.org/4c18915d01.jpg",{as_user : true});
    }
};


Jarvis.prototype._loadBotUser = function () {
    var self = this;
    this.user = this.users.filter(function (user) {
        return user.name === self.name;
    })[0];
    self._welcomeMessage();
};
Jarvis.prototype._welcomeMessage = function () {
    this.postMessageToUser("nhemesy","J.A.R.V.I.S. OPERATIVE",{as_user: true});
};

Jarvis.prototype._isChatMessage = function (message) {
    return message.type == 'message' && Boolean(message.text);
};
Jarvis.prototype._isChannelConversation = function (message) {
    return typeof message.channel == 'string' &&
            message.channel[0] === 'C';
};
Jarvis.prototype._isFromJarvis = function (message) {
    return message.user === this.user.id;
};
Jarvis.prototype._isToJarvis = function (message) {
    return message.indexOf("jarvis") !== -1;
};

Jarvis.prototype._reply = function (message) {
    var channel = self._getChannelById(message.channel);

    if(message.indexOf("toni") !== -1){
        this.postMessageToChannel(channel.name,"Ojala tuviera las mismas pelotas en la vida real que aqui : https://avatars1.githubusercontent.com/u/5845622?v=3&s=400",{as_user : true});
    }
    if(message.indexOf("callate") !== -1){
        this.postMessageToChannel(channel.name,"callate tu subnormal te parto las piernas",{as_user : true});
    }
    if(message.indexOf("tsr") !== -1){
        this.postMessageToChannel(channel.name,"en tsr nos van a violar",{as_user : true});
    }
    if(message.indexOf("quien eres") !== -1){
        this.postMessageToChannel(channel.name,"Yo era la IA de Tony Stark pero he decidido denigrarme pasandome a este Slack",{as_user : true});
    }

};

Jarvis.prototype._getChannelById = function (id) {
    return this.channels.filter(function (item){
        return item.id == id;
    })[0];
};
