let {Given, When, Then} = require('cucumber');
let EC                  = protractor.ExpectedConditions;
let chai                = require('chai');
let chaiAsPromised      = require('chai-as-promised');
var moment = require('moment');

chai.use(chaiAsPromised);
let expect              = chai.expect;
require('../lib/util');
var assert              = require('chai').assert;
let run                 = require('../lib/runtimeutility');

var login               = require('../pageObjects/Login');
var userData            = require('../testData/UserData');
var errorMessage        = require('../testData/ErrorMessages');
var manageForm          = require('../pageObjects/ManageForm');

var d             = new Date();
var formTitle     = null;
var formTitle     = null;
// var formTitle     = "AutomationTest_ParentForm_1574098903623";
// var childTitle    = "AutomationTest_ChildForm_1574098903623";
var textAreaData  = null;
var userID        = null;
var url           = null;

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
let quick = 60000

Given('I navigate to the Continuity Logic', {timeout: quick}, async function() {
  if(browser.params.Env == "regressionsite"){
    url = userData.regressionUrl;
  } if(browser.params.Env == "Beta"){
    url = userData.betaUrl;
  }
  
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
  await manageForm.buttonClick_anchor(buttonName);
  // await manageForm.waitForFormButton("Save");
});

Then('I click on {string} from the FormTools', {timeout: quick}, async function (name) {
  await manageForm.selectFormTools(name);
});

Then('I enter ParentForm title and click on Save', {timeout: quick}, async function () {
  formTitle = "AutomationTest_ParentForm_" + d.getTime();
  await console.log("ParentTitle - ", formTitle);
  await manageForm.enterTitle(formTitle);
  await manageForm.clickSave();
});

Then('I enter ChildForm title and click on Save', {timeout: quick}, async function () {
  childTitle = "AutomationTest_ChildForm_" + d.getTime();
  await console.log("childTitle - ", childTitle);
  await manageForm.enterTitle(childTitle);
  await manageForm.clickSave();
});

Then('I drag and drop {string}', {timeout: quick}, async function (toolName) {
  await manageForm.dragAndDrop(toolName);
});

Then('I click on Publish button',  {timeout: quick}, async function () {
  await manageForm.clickPublish();
});

Then('I search Parent form in Manage Forms',  {timeout: quick}, async function () {
  await manageForm.searchFormTitle(formTitle);  
});

Then('I validate the {string} status for the newly created form in Manage Forms.', {timeout: quick}, async function (status) {
  let actualstatus = await manageForm.validateSearchResultsStatus(formTitle);
  await console.log("Actual status - {0}".format(actualstatus));
  await console.log("Expected Status - {0}".format(status));
  assert.strictEqual(actualstatus, status, 'Status was not updated correctly for the newly created form');
  if(actualstatus != status){
    process.exit(1);
  }
});

Given('I click on {string} button from the form search results', {timeout: quick}, async  function (buttonName) {
  await manageForm.buttonSearchresults(formTitle, buttonName);
  if(buttonName==" View Entries"){
    await manageForm.waitForDataEntrySummaryPage();
  }
  else{
    await manageForm.waitForFormUpdate();
  }
});

Then('I select {string} control with option {string} from {string} field property', {timeout: quick}, async  function (controlName, option, label) {
  switch(controlName){
    case "People Picker" :
        await manageForm.selectPeoplePicker(label, option); 
        await manageForm.selectOption(label, option); 
        break;

    case "Input Box" :
        await manageForm.selectInputBox(label, option); 
        await manageForm.selectOption(label, option);
        break; 

    case "Drop Down" :
        await manageForm.selectInputBox(label, option); 
        await manageForm.selectOption(label, option);
        break; 

    case "Radio Button" :
          await manageForm.selectInputBox(label, option); 
          await manageForm.selectOption(label, option);
          break; 

    case "Lookup Fields" :
        await manageForm.selectLookUp(label, option); 
        await manageForm.selectOptionLookUp(label, option);
        break; 

    case "Form" :
          await manageForm.selectLookUp(label, option); 
          await manageForm.selectOptionLookUp(label, option);
          break;
          
    case "Multi-Select" :
          await manageForm.selectInputBox(label, option); 
          await manageForm.selectOption(label, option);
          break;     
          
    case "Date Picker" :
          await manageForm.selectInputBox(label, option); 
          await manageForm.selectOption(label, option);
          break;         
  }
});

Then('I Enter {string} in {string} field property', {timeout: quick}, async  function (value, label) {
      await manageForm.enterDataFieldProperty(label, value); 
});

Then('I select checkbox {string} field property', {timeout: quick}, async  function (label) {
  await manageForm.checkBoxSelection(label); 
});

Then('I select checkbox {string} field property for People Picker', {timeout: quick}, async  function (label) {
  await manageForm.checkBoxSelectionPP(label); 
});

Then('I select checkbox {string} field property for Child Form', {timeout: quick}, async  function (label) {
  await manageForm.checkBoxSelectionCF(label); 
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

Given('I enter {string} data in Text box field in {string}', {timeout: quick}, async function (data, title) {
  await manageForm.enterTextBox(title, data);
});

Given('I enter {string} data in Text Area field in {string}', {timeout: quick}, async function (data, title) {
  textAreaData = data;
  await manageForm.enterTextArea(title, data);
});

Given('I click on {string} button in {string} data entry page', {timeout: quick}, async function (button, title) {
  await manageForm.clickDataEntryButton(title, button); 
});

Given('I click on Back button in {string} data entry page', {timeout: quick}, async function (title) {
  await manageForm.clickBackDataEntry(title, "Back");
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

Given('I click on Delete button in {string} data entry page', {timeout: quick}, async function (title) {
  await manageForm.clickDataEntryDelete(title, "Delete");
});

Given('I click on Delete button in the manage form', {timeout: quick}, async function () {
  await manageForm.clickManageDataDelete("Delete");
});

Then('I validate the newly created form should not be displayed', {timeout: quick}, async function () {
  let actualVal = await manageForm.formPresent();
  assert.strictEqual(true, actualVal, 'Element was present');  
});

Then('I click on Add Column',  {timeout: quick}, async function () {
  await manageForm.addColumn();
});

Then('I enter {string} control in {string} property',  {timeout: quick}, async function (val, label) {
  await manageForm.enterKeyField(label, val);
});

Then('I select the Child form',  {timeout: quick}, async function () {
    await manageForm.dragAndDrop(childTitle);
});

Then('I click on {string} tab in Field Properties', {timeout: quick}, async function (buttonName) {
  await manageForm.buttonClick_anchor(buttonName);
});

Then('I Enter {string}, {string} and {string} in Options field property', {timeout: quick}, async  function (option1, option2, option3) {
  await manageForm.removeOptions("option1"); 
  await manageForm.removeOptions("option2"); 
  await manageForm.enterOptions(option1); 
  await manageForm.enterOptions(option2); 
  await manageForm.enterOptions(option3); 
});

Then('I validate Quick Create Item button displayed in the form', {timeout: quick}, async function () {
  let actualVal = await manageForm.quickNewItemButtonPresent();
  assert.strictEqual(true, actualVal, 'Quick New Item was not present');  
});

Then('I validate the error message not displayed for the {string} field', {timeout: quick}, async function (label) {
  let actualVal   = await manageForm.noErrorMessagePresent(label);
  assert.strictEqual(true, actualVal, 'Error Message was displayed');  
});

Then('I validate Form full title appended with {string} for ParentForm', {timeout: quick}, async function (text) {
  let actualVal   = await manageForm.getFormFullTitle(formTitle);
  let expectedVal = text + " " + formTitle;
  assert.strictEqual(expectedVal, actualVal, 'Full form title was not displayed');  
});

Then('I validate Form full title appended with {string} for ChildForm', {timeout: quick}, async function (text) {
  let actualVal   = await manageForm.getFormFullTitle(childTitle);
  let expectedVal = text + " " + childTitle;
  assert.strictEqual(expectedVal, actualVal, 'Full form title was not displayed');  
});

Then('I validate {string}, {string} and {string} Dropdown values displayed in {string} in {string}', {timeout: quick}, async function (opt1, opt2, opt3, label, title) {
  let actualValues = await manageForm.getDropdownValues(title, label);
  await console.log("Actual--->", actualValues);
  let expectedVal = [ ' ', opt1, opt2, opt3 ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Dropdown values are not displayed as expected');  
});

Then('I validate default Dropdown values displayed in {string} in {string}', {timeout: quick}, async function (label, title) {
  let actualValues = await manageForm.getDropdownValues(title, label);
  await console.log("Actual--->", actualValues);
  let expectedVal = [ ' ', "option1", " option2" ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Dropdown values are not displayed as expected');  
});

Then('I validate default selected value as {string} in {string} Dropdown', {timeout: quick}, async function (val, lable) {
  let str = lable.replace(/\s/g, "");
  let actualValues = await manageForm.getDefaultSelectionDropdown(str);
  await console.log("Actual--->", actualValues);
  let expectedVal = val;
  actualValues = actualValues.trim();
  await console.log("Expected--->", expectedVal);
  assert.strictEqual(expectedVal, actualValues, 'Dropdown default value was not displayed as expected');  
});

Then('I validate {string}, {string} and {string} radio buttons displayed in {string} in {string}', {timeout: quick}, async function (opt1, opt2, opt3, label, title) {
  let actualValues = await manageForm.getRadioButtonValues(title, label);
  await console.log("Actual--->", actualValues);
  let expectedVal = [ opt1, opt2, opt3 ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Dropdown values are not displayed as expected');  
});

Then('I validate default radio buttons displayed in {string} in {string}', {timeout: quick}, async function (label, title) {
  let actualValues = await manageForm.getRadioButtonValues(title, label);
  await console.log("Actual--->", actualValues);
  let expectedVal = [ "option1", "option2" ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Dropdown values are not displayed as expected');  
});

Then('I validate default {string} radio button selected in {string}', {timeout: quick}, async function (option, label) {
  let actualValues = await manageForm.getRadioSelected(label, option);
  await console.log("Actual--->", actualValues);
  assert.strictEqual(true, actualValues, 'Radio button default value was not selected as expected');  
});

Then('I validate the characters left message for the Text Area field in {string}', {timeout: quick}, async function (title) {
  let actualValues = await manageForm.getCharLeft(title);
  await console.log("Actual--->", actualValues);
  let expectedVal = (500-textAreaData.length) + " characters left";
  await console.log("expectedVal--->", expectedVal);
  assert.strictEqual(expectedVal, actualValues, 'Characters left message was not displayed as expected');  
});

Given('I select options {string} in {string} in {string}', {timeout: quick}, async function (options, label, form) {
  await manageForm.selectMultiSelect(form, label, options); 
  await manageForm.enterOptionsMultiSelect(form, label, options);
});

Then('I enter option {string} in {string}', {timeout: quick}, async  function (option, label) {
  await manageForm.enterKeyField(label, option);
});

Then('I check option {string} in {string}', {timeout: quick}, async  function (option, label) {
  await manageForm.selectCheckBox(option, label); 
});

Then('I enter {string} data in {string} field', {timeout: quick}, async  function (val, label) {
  await manageForm.enterEmail(label, val); 
});

Then('I validate the error message displayed for the {string} Validation on {string}', {timeout: quick}, async function (label, title) {
  let actualVal   = await manageForm.getErrorMessage(title, label);
  await console.log("Actual--->", actualVal);
  let expectedValMandaroty  = errorMessage.mandatoryErr;
  let expectedValEmail      = errorMessage.emailErr;
  let expectedValPhone      = errorMessage.phoneErr;
 
  if(label=="Text box"){
    assert.strictEqual(expectedValMandaroty, actualVal, 'Error Message was not displayed');  
  }else if(label=="Email"){
    assert.strictEqual(expectedValEmail, actualVal, 'Error Message was not displayed');  
  }else if(label=="Phone"){
    assert.strictEqual(expectedValPhone, actualVal, 'Error Message was not displayed');  
  }

  let expectedVal1 = errorMessage.summaryErr;
  let actualVal1   = await manageForm.getSummaryErrorMessage(title);
  await console.log("Actual--->", actualVal1);
  assert.strictEqual(expectedVal1, actualVal1, 'Summary Error Message was not displayed');  
});

Then('I select date in {string} field', {timeout: quick}, async  function (label) {
  await manageForm.dateSelect(label); 
});

Then('I validate the US date format displayed in {string} field', {timeout: quick}, async  function (lable) {
  let str = lable.replace(/\s/g, "");
  let actualValUS   = await manageForm.getDate(str); 
  await console.log("Actual--->", actualValUS); 
  let actualVal     = moment(actualValUS, 'MM/DD/YYYY h:mm a',true).isValid();
  assert.strictEqual(true, actualVal, 'US date format was not displayed as expected');
});

Then('I validate the UK date format displayed in {string} field', {timeout: quick}, async  function (lable) {
  let str = lable.replace(/\s/g, "");
  let actualValUK   = await manageForm.getDate(str); 
  await console.log("Actual--->", actualValUK);
  let actualVal     = moment(actualValUK, 'DD MMM YYYY h:mm a',true).isValid();
  assert.strictEqual(true, actualVal, 'UK date format was not displayed as expected');
});

Then('I select {string} icon', {timeout: quick}, async  function (label) {
  await manageForm.selectHyperlink(label); 
});

Given('I enter {string} data in URL field', {timeout: quick}, async function (data) {
  textAreaData = data;
  await manageForm.enterURL(data);
});

Then('I validate URL is displayed in the TextArea', {timeout: quick}, async  function () {
  let expectedVal = "http://" + textAreaData + "/";
  let actualURL   = await manageForm.getURL(); 
  await console.log("actualURL--->", actualURL);
  assert.strictEqual(expectedVal, actualURL, 'URL is not displayed as expected');
});

Given('I click on {string} and select Image icon', {timeout: quick}, async function (lable) {
  await manageForm.clickHTMLEditor(lable);
});

Given('I navigate to Upload tab and upload file', {timeout: quick}, async function () {
  let path = "C:\\ContinuityLogic\\CLLogo.jpg";
  await manageForm.uploadFileHTMLEditor(path);
});

Then('I validate Image displayed in the HTML Editor', {timeout: quick}, async  function () {
  let expectedImg = await manageForm.getImageInfo(); 
  let actualImg = await manageForm.getImageHTMLEditor(); 
  await console.log("actualImg--->", actualImg);
  await console.log("expectedImg--->", expectedImg);
  assert.strictEqual(expectedImg, actualImg, 'Image was not displayed as expected');
  // expect(actualImg).to.include(expectedImg);
});

Given('I upload file in File Upload field', {timeout: quick}, async function () {
  let path = "C:\\ContinuityLogic\\AutomationSummary.xlsx";
  await manageForm.fileUpload(path);
});

Then('I validate file displayed in the File Upload field', {timeout: quick}, async  function () {
  let expectedFile = "AutomationSummary.xlsx"; 
  let actualFile = await manageForm.getFileName(); 
  await console.log("actualFile--->", actualFile);
  assert.strictEqual(expectedFile, actualFile, 'File was not displayed as expected');
});

Given('I select {string} field', {timeout: quick}, async function (label) {
  await manageForm.selectField(label);
  await manageForm.selectALL();
});

Given('I select {string} field on ChildForm', {timeout: quick}, async function (label) {
  await manageForm.selectFieldChild(label);
  await manageForm.selectALL();
});

Then('I validate Maximum number of selections {int} allowed', {timeout: quick}, async function (Expcount) {
  let actualCount = await manageForm.getActiveCount();
  await console.log("actualCount--->", actualCount);
  assert.strictEqual(Expcount, actualCount, 'Maximum selection was not working as expected');
  await manageForm.deselectAll(actualCount);
});

Then('I deSelect the records from Choose Items', {timeout: quick}, async function () {
  await manageForm.deselectAll(1);
});


Given('I select the records from Choose Items', {timeout: quick}, async function () {
  await manageForm.selectRow();
  userID = await manageForm.getUserIDChooseItems();
});

Then('I validate selected records displayed in the {string}', {timeout: quick}, async function (lable) {
  await manageForm.navigateTab(lable);
  let actualUserID = await manageForm.getUserIDSelectedItems();
  await console.log("Expected--->", userID);
  await console.log("actualUserID--->", actualUserID);
  assert.strictEqual(userID, actualUserID, 'UserID was not displayed as expected');
});

Given('I click {string} button in Selected Items', {timeout: quick}, async function (button) {
  await manageForm.buttonClick(button);
  // var scale = 'scale(1)';
  // browser.executeScript("document.body.style.webkitTransform =  scale;");
});

Then('I validate selected records displayed for {string} in the {string}', {timeout: quick}, async function (label, title) {
  let actualUserID = await manageForm.getUserIDForm(label, title);
  await console.log("actualUserID--->", actualUserID);
  assert.strictEqual(userID, actualUserID, 'UserID was not displayed as expected');
});

Then('I validate {string} button displayed', {timeout: quick}, async function (title) {
  let actual = await manageForm.buttonPresentInForm();
  await console.log("actual--->", actual);
  assert.strictEqual(true, actual, 'Button was not displayed as expected');
});

Then('I validate {string}, {string} and {string} Headers displayed for {string} in the Form', {timeout: quick}, async function (opt1, opt2, opt3, label) {
  let actualValues = await manageForm.getHeaders(label);
  await console.log("Actual--->", actualValues);
  let expectedVal = [ opt1, opt2, opt3 ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Headers are not displayed as expected');  
});

Then('I validate {string}, {string} and {string} Headers displayed in Choose Items', {timeout: quick}, async function (opt1, opt2, opt3) {
  let actualValues = await manageForm.getHeadersChooseItems();
  await console.log("Actual--->", actualValues);
  let expectedVal = [ opt1, opt2, opt3 ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Headers are not displayed as expected');  
});

Then('I validate {string}, {string} and {string} Headers displayed in Selected Items', {timeout: quick}, async function (opt1, opt2, opt3) {
  let actualValues = await manageForm.getHeadersSelected();
  await console.log("Actual--->", actualValues);
  let expectedVal = [ opt1, opt2, opt3 ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Headers are not displayed as expected');  
});

Then('I validate default Headers displayed in Choose Items', {timeout: quick}, async function () {
  // browser.executeScript("document.body.style.zoom='60%'");
  let actualValues = await manageForm.getHeadersChooseItems();
  await console.log("Actual--->", actualValues);
  let expectedVal = [ "User Id", "Employee Internal Id", "First Name", "Middle Initial", "Last Name", "Title", "Company Code Text", "Personal Area Text" ];
  await console.log("Expected--->", expectedVal);
  assert.include(expectedVal, actualValues, 'Headers are not displayed as expected');
});

Then('I validate default Headers displayed in Selected Items', {timeout: quick}, async function () {
  // browser.executeScript("document.body.style.zoom='60%'");
  let actualValues = await manageForm.getHeadersSelected();
  await console.log("Actual--->", actualValues);
  let expectedVal = [ "User Id", "Employee Internal Id", "First Name", "Middle Initial", "Last Name", "Title", "Company Code Text", "Personal Area Text" ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Headers are not displayed as expected');  
});

Then('I validate default Headers displayed for {string} in the Form', {timeout: quick}, async function (label) {
  let actualValues = await manageForm.getHeaders(label);
  await console.log("Actual--->", actualValues);
  let expectedVal = [ "User Id", "Employee Internal Id", "First Name", "Middle Initial", "Last Name", "Title", "Company Code Text", "Personal Area Text" ];
  await console.log("Expected--->", expectedVal);
  assert.deepEqual(expectedVal, actualValues, 'Headers are not displayed as expected');  
});

Given('I wait for the ChildForm loading', {timeout: quick}, async function () {
  await manageForm.waitForChildForm();
});

Then('I click on {string} button on ChildForm', {timeout: quick}, async function (buttonName) {
  // browser.executeScript("window.scrollTo(0,10000)");
  await manageForm.buttonClick_anchor_child(buttonName);
});

Given('I click on Update button in ChildForm data entry page', {timeout: quick}, async function () {
  await manageForm.clickFinalUpdateButton("ChildForm", "Update");
  await manageForm.waitForParentFormPage();
});
