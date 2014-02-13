var path = require('path');

function configConnector(config, opts) {
    config.connector = {
        single: true
    };
    return {
        name: 'connector'
    }
}

function configCubes(config, opts) {
    config.cubes = {
        engines: {
            entity: {
                name: 'tingodb',
                file: path.join(opts.datadir, 'cubes', 'entity.db')
            },
            blob: {
                name: 'filesystem',
                path: path.join(opts.datadir, 'cubes', 'blob')
            }
        },
        cachedir: path.join(opts.datadir, 'cubes', 'cache')
    };
    return {
        name: 'cubes',
        dirs: [
            config.cubes.engines.blob.path,
            config.cubes.cachedir
        ]
    };
}

function configAmbience(config, opts) {
    return { name: 'ambience' };
}

function configGovernor(config, opts) {
    return { name: 'governor' };
}

function configLauncher(config, opts) {
    return { name: 'launcher' };
}

module.exports = [
    configConnector,
    configCubes,
    configAmbience,
    configGovernor,
    configLauncher,
];
