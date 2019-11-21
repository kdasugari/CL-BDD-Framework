let reporter = require('cucumber-html-reporter');

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    // directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    capabilities: {
      browserName : 'chrome',
      marionette : true,
      acceptSslCerts : true,
      'goog:chromeOptions': {
        w3c: false
        }
  },
    SELENIUM_PROMISE_MANAGER: false,
    specs: [
      'features/*.feature'
    ],

    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    cucumberOpts: {
      require: './stepDefinitions/*.js',
        //    require: [
        //     './stepDefinitions/*.js',
        //     './support/*.js'
        // ],
      tags: [ '@Sanity1', '@Test', '@Demo' ],
      // tags: '@Test',
      format: 'json:./report/cucumber_report.json',
      failFast: true,
      profile: false,
      'no-source': true
    },

    onComplete: function () {
      let options = {
        brandTitle: 'ContinuityLogic',
        theme: 'bootstrap',
        jsonFile: './report/cucumber_report.json',
        output: './report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        // scenarioTimestamp: true,
        launchReport: true,
        storeScreenshots: true,
        screenshotsDirectory: 'screenshots/',
        metadata: {
          "App Version": "0.3.2",
          "Test Environment": "BETA",
          "Browser": "Chrome  74.0.3729.131",
          "Platform": "Windows10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
      };
        reporter.generate(options);
    },
    params: {
        Env : 'regressionsite',
        glob: __dirname,
  }
};