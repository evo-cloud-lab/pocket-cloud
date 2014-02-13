var Class = require('js-class'),
    path  = require('path'),
    http  = require('http'),
    express = require('express');

var Api = Class({
    constructor: function (env) {
        this.env = env;
        var app = express();
        app.use(express.static(path.join(__dirname, '..', 'www')));
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(app.router);

        this.app = app;
        this.server = http.createServer(app);
    },

    start: function (done) {
        var args = [this.env.port];
        this.env.host && args.push(this.env.host);
        args.push(done);
        this.server.listen.apply(this.server, args);
    }
});

module.exports = Api;
