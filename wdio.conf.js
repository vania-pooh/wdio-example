const path = require('path');

exports.config = {
    runner: 'local',
    // protocol: 'https',
    hostname: 'localhost', // Host
    // port: 4444, //Port
    user: '', // Username
    key: '', // Password
    specs: [
        'tests/**/*js'
    ],
    maxInstances: 1,
    capabilities: [
      {browserName: 'chrome', 'selenoid:options': {enableVNC: true, enableVideo: true}}
    ],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeSession: function (config, capabilities, specs) {
        // set session name on the fly for Selenoid UI with spec file name
        capabilities['selenoid:options'].name = path.basename(specs[0]).replace(".js", "");
    },
};
