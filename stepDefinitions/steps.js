let {Given, When, Then} = require('cucumber');
let EC                  = protractor.ExpectedConditions;
let chai                = require('chai');
let chaiAsPromised      = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect              = chai.expect;
require('../lib/util');
var assert              = require('chai').assert;
var login               = require('../pageObjects/Login');
var userData            = require('../testData/UserData');
var manageForm          = require('../pageObjects/manageForm');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
let quick = 60000

Given('I go to application', async function() {
  let url = userData.regressionUrl;
  // let url = browser.params.baseURL;
  await login.launchApp(url);
});

When('I login with credentials', {timeout: quick}, async function() {
  let username = userData.userName;
  let password = userData.Password;
  await login.loginToApp(username, password);
});

Then('I validate user has been successfully access to the application.',  {timeout: quick}, async function () {
  let actualVal = await manageForm.validateWelcomeMessage();
  let expected  = "Welcome to the Business Continuity Planning tool.";
  await console.log("Actual Message - {0}".format(actualVal))
  await console.log("Expected Message - {0}".format(expected))
  assert.strictEqual(actualVal, expected, 'Welcome Message is not properly displayed');
});