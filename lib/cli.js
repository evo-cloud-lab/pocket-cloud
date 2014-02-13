var Class  = require('js-class'),
    elements = require('evo-elements'),
    CliBase = elements.Cli,
    Config  = elements.Config,
    Logger  = elements.Logger;

var Cli = Class(CliBase, {
    constructor: function () {
        CliBase.prototype.constructor.call(this, 'pcloud');
        this.services = components.services;
        this.logdir = '/var/log/cloud';
        this.rundir = '/var/run/cloud';
        this.datdir = '/var/lib/cloud';
        this.cfgdir = '/etc/cloud.d';

        this.options
            .option('logdir', {
                type: 'string',
                default: this.logdir,
                help: 'Directory for log files',
                callback: function (val) {
                    this.logdir = val;
                }.bind(this)
            })
            .option('loglevel', {
                type: 'string',
                default: 'notice',
                help: 'Set log level with --logdir specified',
                callback: function (val) {
                    this.loglevel = val;
                }.bind(this)
            })
            .option('rundir', {
                type: 'string',
                default: this.rundir,
                help: 'Directory for runtime files',
                callback: function (val) {
                    this.rundir = val;
                }.bind(this)
            })
            .option('datadir', {
                type: 'string',
                default: this.datdir,
                help: 'Directory for data files',
                callback: function (val) {
                    this.datdir = val;
                }.bind(this)
            })
            .option('confdir', {
                type: 'string',
                default: this.cfgdir,
                help: 'Directory for configuration files',
                callback: function (val) {
                    this.cfgdir = val;
                }.bind(this)
            })
        ;
    }
});

module.exports = Cli;
