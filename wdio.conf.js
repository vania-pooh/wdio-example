exports.config = {
    runner: 'local',
    //protocol: 'https',
    hostname: 'localhost', // Host
    //port: 4444, //Port
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
    reporters: ['dot','spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
