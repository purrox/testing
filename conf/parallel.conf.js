exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'carlossalas3',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'RioU4beQVCGZPEDVrTMa',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_test',
    build: 'webdriver-browserstack'
  },

  capabilities: [{
    browser: 'Chrome',
    name: 'single_test',
    build: 'webdriver-browserstack',
    os:'Windows'
  },
    {
      browser: 'Chrome',
      name: 'single_test',
      build: 'webdriver-browserstack',
      os:'OSX'
    }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
    timeout: 200000
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

