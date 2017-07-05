// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  chromeDriver: './node_modules/webdriver-manager/selenium/chromedriver_2.30',
  allScriptsTimeout: 11000,
  specs: [
    './cucumber/**/*.feature',
    // './e2e/**/*.e2e-spec.ts'
  ],
  cucumberOpts: {
    require: ['./cucumber/**/*.steps.ts'],
    tags: [],
    strict: true,
    format: ["pretty"],
    dryRun: false,
    compiler: []
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 4,
    chromeOptions: {
      args: [ '--headless', '--disable-gpu', '--window-size=800x600' ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
