exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './examples/run-parallel-test/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,

  commonCapabilities: {
    project: "First WebdriverIO iOS Project",
    build: 'Webdriverio iOS Parallel',
    name: 'parallel_test',
    app: process.env.BROWSERSTACK_APP_ID,  // no fallback here — fail fast if not set
    'browserstack.debug': true
  },

  capabilities: [
    {
      device: "iPhone 11 Pro",
      os_version: "13"
    },
    {
      device: "iPhone 11 Pro Max",
      os_version: "13"
    }
  ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};

// Merge common capabilities into each capability
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) {
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
  }
});
