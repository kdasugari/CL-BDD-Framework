let EC      = protractor.ExpectedConditions;
var exec    = require('child_process').exec;
let run     = require('../lib/runtimeutility');
let cLib     = require('../lib/commonLib');

let manageForm =  function(){

    //Locators
    let welcomeMessage      = '//h1/b';
    let manageForm          = "(//span[contains(text(), '{0}')])[1]";  
    let createNewForm       = "//a[contains(text(), '{0}')]";
    let tools               = "(//span[contains(text(), '{0}')])[1]";  
    // let formTitle        = "//h2[contains(text(), 'Type Title Here')]";
    let formTitle           = "(//input[@name='Title'])[1]";
    // let formTitle        = "h2[data-bind='jeditable: Title, jeditableOptions: {}, click: $parent.activateForm']";           
    let save                = "//button[text()=' Save']";
    let target              = "//div[text()='Main Content']/parent::div//following-sibling::div[@class='canvas drop-container flltoolcontainer ui-sortable']";
    let publish             = "(//button[text()=' Publish'])[1]";
    let searchTitle         = "//input[@placeholder='Search Title']";
    let searchResult        = "(//div[text()='{0}']/parent::td/../td/div[@class='menu-tool kgCellText print-form-control whitespacenormal'])[2]"     
    let update              = "(//button[text()=' Update'])[1]";
    let formControl         = "//input[contains(@class='form-control')]";
    let publishInvisible    = "//button[contains(text(),'Publish') and @style='display: none;']";
    let needHelp            = "//div[text()='Need help?']";
    let titleText           = "h2[contains(text(), 'Type Title Here221')]";
    let peoplePicker        = "//div[@class='input-group']/input[@placeholder= 'Search...']";
    let fieldProperties     = "//fieldset/legend[contains(text(), 'Field Properties')]";
    let viewFields          = "//label[contains(text(), '{0}')]/../div//following-sibling::input";
    let selectOption        = "//label[contains(text(), '{0}')]/../select/option[text()='{1}']";
    let peoplePickerVal     = "//div[contains(text(), '{0}')]/div/div[contains(text(), '{1}')]";
    let dataEntryTextBox    = "(//label[contains(text(), 'Text box')]/../input)[1]";
    let dataEntryTextArea   = "(//label[contains(text(), 'Text Area')]/../p/textarea)[1]";
    let dataEntryData       = "//div[contains(text(), '{0}')]";
    let dataEntryButton     = "(//span[contains(text(), '{0}')])[1]";
    let dataEntryEdit       = "(//span[contains(@title, 'Edit')]/a)[1]";
    let deleteConfirm       = "//button[contains(text(), 'Yes, I want to delete')]";
    let manageFormButton    = "(//button[contains(text(), '{0}')])[1]";
    let dltConfirmManageForm = "//button[contains(text(), 'Delete the')]";
    let noData              = "//tr/td[contains(text(), 'No data available in table')]";


    //Elements
    let welcomeMessageEle   =  element(by.xpath(welcomeMessage));
    let formTitleEle        =  element(by.xpath(formTitle));
    // let formTitleEle   = $(formTitle);
    let saveEle             =  element(by.xpath(save));
    let targetEle           =  element(by.xpath(target));
    let publishEle          =  element(by.xpath(publish));
    let searchTitleEle      =  element(by.xpath(searchTitle));
    let updateEle           =  element(by.xpath(update));
    let formControlEle      =  element(by.xpath(formControl));
    let publishInvisibleEle =  element(by.xpath(publishInvisible));
    let needHelpEle         =  element(by.xpath(needHelp));
    let titleTextEle        =  element(by.xpath(titleText));    
    let peoplePickerEle     =  element(by.xpath(peoplePicker));
    let fieldPropertiesEle  =  element(by.xpath(fieldProperties));
    let dataEntryTextBoxEle =  element(by.xpath(dataEntryTextBox));
    let dataEntryTextAreaEle =  element(by.xpath(dataEntryTextArea));
    let dataEntryEditEle     =  element(by.xpath(dataEntryEdit));
    let deleteConfirmEle     =  element(by.xpath(deleteConfirm));
    let dltConfirmManageFormEle      =  element(by.xpath(dltConfirmManageForm));
    let noDataEle                    =  element(by.xpath(noData));

    var waitFormManageFmPage = element(by.xpath(createNewForm.format("Create New Form"))); 
    var waitForDataEntryPage = element(by.xpath(createNewForm.format("Create New Item"))); 
    let waitForToolsLoad     =  element(by.xpath(tools.format("Basic Tools"))); 


    this.validateWelcomeMessage = async function(){
        return await cLib.getText(welcomeMessage, welcomeMessageEle);    
    };

    this.tabClick = async function(name){
        let elem   =  element(by.xpath(manageForm.format(name))); 
        await cLib.click(name, elem);    
    };

    this.selectFormTools = async function(name){
        let elem   =  element(by.xpath(tools.format(name))); 
        await cLib.click(name, elem);    
    };

    this.buttonClick = async function(name){
        let elem   =  element(by.xpath(createNewForm.format(name))); 
        await cLib.click(name, elem);    
    };

    this.enterTitle = async function(val){
        await console.log("FormName - {0}".format(val));
        await cLib.enterText(formTitle, formTitleEle, val);
        // await cLib.click(formTitle, formTitleEle);  
        // await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).perform();
        // await browser.actions().sendKeys(val + protractor.Key.ENTER).perform();
    };

    this.clickSave = async function(){
        await cLib.click(save, saveEle);
        await cLib.waitForElementLoad(publish, publishEle);
    };

    this.dragAndDrop = async function(sourceName){
        let elem   =  element(by.xpath(manageForm.format(sourceName))); 
        await cLib.dragAndDrop(sourceName, elem, targetEle);    
    }; 

    this.clickPublish = async function(){
        await cLib.click(publish, publishEle); 
        await browser.sleep(10000);
        await cLib.waitForElementLoad("BasicToolsoad", waitForToolsLoad);
    };

    this.searchFormTitle = async function(val){
        await cLib.enterText(searchTitle, searchTitleEle, val);    
    };

    this.validateSearchResultsStatus = async function(val){
        let elem   =  element(by.xpath(searchResult.format(val))); 
        return await cLib.getText(searchResult, elem);    
    };

    this.selectPropertyPeoplePicker = async function () {
        await cLib.click(peoplePicker, peoplePickerEle); 
        await cLib.waitForElementLoad(fieldProperties, fieldPropertiesEle);
    };

    this.selectOption = async function (labelName, option) {
        await browser.sleep(1000);
        let elem   =  element(by.xpath(viewFields.format(labelName))); 
        await cLib.click(labelName, elem); 
        let elem1   =  element(by.xpath(selectOption.format(labelName, option))); 
        await cLib.click(option, elem1); 
        await browser.sleep(2000);
    };

    this.elementPresent = async function (name) {
        await browser.sleep(3000);
        await cLib.waitForElementLoad("DataEntryPage", waitForDataEntryPage);
        let elem   =  element(by.xpath(tools.format(name))); 
        return await cLib.isElementPresent(elem); 
    }; 

    this.elementPresentPeoplePicker = async function (label, fieldName) {
        await browser.sleep(3000);
        let elem   =  element(by.xpath(peoplePickerVal.format(label, fieldName))); 
        return await cLib.isElementPresent(elem); 
    };

    this.clickUpdate = async function(){
        await cLib.click(update, updateEle); 
        await browser.sleep(5000);
        await cLib.waitForElementLoad("BasicToolsoad", waitForToolsLoad);
    };

    this.enterTextBox = async function(val){
        await cLib.enterText(dataEntryTextBox, dataEntryTextBoxEle, val);        
    };

    this.enterTextArea = async function(val){
        await cLib.enterText(dataEntryTextArea, dataEntryTextAreaEle, val);        
    };

    this.clickDataEntryButton = async function(button){
        let elem   =  element(by.xpath(dataEntryButton.format(button))); 
        await cLib.click(button, elem); 
        await browser.sleep(5000);
        await cLib.waitForElementLoad("PageLoad", elem);
        let backElem   =  element(by.xpath(dataEntryButton.format("Back"))); 
        await cLib.click(button, backElem); 
        await cLib.waitForElementLoad("DataEntryPage", waitForDataEntryPage);
    };

    this.dataPresent = async function (name) {
        await browser.sleep(5000);
        await cLib.waitForElementLoad("DataEntryPage", waitForDataEntryPage);
        let elem   =  element(by.xpath(dataEntryData.format(name))); 
        return await cLib.isElementPresent(elem); 
    };  
    
    this.dataEditClick = async function () {
        await cLib.waitForElementLoad("DataEntryPage", waitForDataEntryPage);
        await cLib.click(dataEntryEdit, dataEntryEditEle); 
    }; 

    this.clickDataEntryDelete = async function(button){
        let elem   =  element(by.xpath(dataEntryButton.format(button))); 
        await cLib.click(button, elem); 
        await browser.sleep(5000);
        await cLib.click(deleteConfirm, deleteConfirmEle); 
        await cLib.waitForElementLoad("DataEntryPage", waitForDataEntryPage);
    };

    this.clickManageDataDelete = async function(button){
        let elem   =  element(by.xpath(manageFormButton.format(button))); 
        await cLib.click(button, elem); 
        await browser.sleep(5000);
        await cLib.click(dltConfirmManageForm, dltConfirmManageFormEle); 
        await cLib.waitForElementLoad("ManageFormPage", waitFormManageFmPage);
    };

    this.formPresent = async function () {
        await browser.sleep(5000);
        return await cLib.isElementPresent(noDataEle); 
    };  
    
    
};

module.exports = new manageForm();