let {Given, When, Then} = require('cucumber');
let EC                  = protractor.ExpectedConditions;
let chai                = require('chai');
let chaiAsPromised      = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect              = chai.expect;
require('../lib/util');
var assert              = require('chai').assert;
let run                 = require('../lib/runtimeutility');

var login               = require('../pageObjects/Login');
var userData            = require('../testData/UserData');
var manageForm          = require('../pageObjects/manageForm');

var d = new Date();
var title = "AutomationTestForm_" + d.getTime();

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
let quick = 60000

Given('I navigate to the Continuity Logic', async function() {
  let url = userData.regressionUrl;
  // let url = browser.params.baseURL;
  await login.launchApp(url);
});

When('I submit username and password', {timeout: quick}, async function() {
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

Then('I validate {string} Home page is displayed', {timeout: quick}, async function (title) {
  let actualVal = await login.getTitle();
  assert.strictEqual(actualVal, title, 'Welcome Message is not properly displayed');
});

Then('I click on {string} on the left menu', {timeout: quick}, async function (tabName) {
  await manageForm.tabClick(tabName);
});

Then('I click on {string} button', {timeout: quick}, async function (buttonName) {
  await manageForm.buttonClick(buttonName);
});

Then('I click on {string} from the FormTools', {timeout: quick}, async function (name) {
  await manageForm.selectFormTools(name);
  await browser.sleep(5000);
});

Then('I enter form title and click on Save', {timeout: quick}, async function () {
  await manageForm.enterTitle(title);
  await manageForm.clickSave();
});

Then('I drag and drop {string}', {timeout: quick}, async function (toolName) {
  await manageForm.dragAndDrop(toolName);
});

Then('I click on Publish button',  {timeout: quick}, async function () {
  await manageForm.clickPublish();
});

Then('I search the form in Manage Forms',  {timeout: quick}, async function () {
  await manageForm.searchFormTitle(title);  
});

Then('I validate the {string} status for the newly created form in Manage Forms.', {timeout: quick}, async function (status) {
  let actualstatus = await manageForm.validateSearchResultsStatus(title);
  await console.log("Actual status - {0}".format(actualstatus));
  await console.log("Expected Status - {0}".format(status));
  assert.strictEqual(actualstatus, status, 'Status was not updated correctly for the newly created form');
});

Given('I click on {string} button from the form search results', {timeout: quick}, async  function (buttonName) {
  await manageForm.buttonClick(buttonName);
});

Then('I select {string} from {string} field property', {timeout: quick}, async  function (option, label) {
  await manageForm.selectOption(label, option); 
});

Then('I validate {string} control displayed in the form', {timeout: quick}, async function (name) {
  let actualVal = await manageForm.elementPresent(name);
  await console.log("Actual status - {0}".format(actualVal));
  assert.strictEqual(true, actualVal, 'Element was not present');  
});

Then('I validate {string} control with option {string} displayed in the form', {timeout: quick}, async function (string, string2) {
  let actualVal = await manageForm.elementPresentPeoplePicker(string, string2);
  await console.log("Actual status - {0}".format(actualVal));
  assert.strictEqual(true, actualVal,  'Element was not present'); 
});

Then('I click on Update button',  {timeout: quick}, async function () {
  await manageForm.clickUpdate();
});

Given('I enter {string} data in Text box field', {timeout: quick}, async function (data) {
  await manageForm.enterTextBox(data);
});

Given('I enter {string} data in Text Area field', {timeout: quick}, async function (data) {
  await manageForm.enterTextArea(data);
});

Given('I click on {string} button in data entry page', {timeout: quick}, async function (button) {
  await manageForm.clickDataEntryButton(button);
});

Then('I validate {string} data displayed in the DataTable', {timeout: quick}, async function (data) {
  let actualVal = await manageForm.dataPresent(data);
  assert.strictEqual(true, actualVal, 'Element was not present');  
});

Given('I click on edit for update the data', {timeout: quick}, async function () {
  await manageForm.dataEditClick();
});

Then('I validate {string} data should not be displayed in the DataTable', {timeout: quick}, async function (data) {
  let actualVal = await manageForm.dataPresent(data);
  assert.strictEqual(false, actualVal, 'Element was present');  
});

Given('I click on Delete button in data entry page', {timeout: quick}, async function () {
  await manageForm.clickDataEntryDelete("Delete");
});

Given('I click on Delete button in the manage form', {timeout: quick}, async function () {
  await manageForm.clickManageDataDelete("Delete");
});

Then('I validate the newly created form should not be displayed', {timeout: quick}, async function () {
  let actualVal = await manageForm.formPresent();
  assert.strictEqual(true, actualVal, 'Element was present');  
});


