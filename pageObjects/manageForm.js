let EC      = protractor.ExpectedConditions;

var exec    = require('child_process').exec;
let run     = require('../lib/runtimeutility');
let cLib     = require('../lib/commonLib');

let childFormloc = 0;


let manageForm =  function(){

    //Locators
    let welcomeMessage      = '//h1/b';
    let manageForm          = "(//span[contains(text(), '{0}')])[1]";  
    let createNewForm       = "//a[contains(text(), '{0}')]";
    let tools               = "//div[@id='toolboxcontainer']//following-sibling::span[contains(text(), '{0}')]";
    let toolsDataTable      = "//table[contains(@id,'formadminGridDataTable')]//following-sibling::th/span[contains(text(), '{0}')]";  
    // let formTitle        = "//h2[contains(text(), 'Type Title Here')]";
    let formTitle           = "(//input[@name='Title'])[1]";
    // let formTitle        = "h2[data-bind='jeditable: Title, jeditableOptions: {}, click: $parent.activateForm']";           
    let save                = "//button[text()=' Save']";
    let target              = "//div[text()='Main Content']/parent::div//following-sibling::div[@class='canvas drop-container flltoolcontainer ui-sortable']";
    let publish             = "(//button[text()=' Publish'])[1]";
    let searchTitle         = "(//input[@placeholder='Search Title'])[1]";
    let searchResult        = "(//div[text()='{0}']/parent::td/../td/div[@class='menu-tool kgCellText print-form-control whitespacenormal'])[2]"     
    let update              = "(//button[text()=' Update'])[1]";
    let formControl         = "//input[contains(@class='form-control')]";
    let publishInvisible    = "//button[contains(text(),'Publish') and @style='display: none;']";
    let needHelp            = "//div[text()='Need help?']";
    let titleText           = "h2[contains(text(), 'Type Title Here221')]";
    let peoplePicker        = "//div[@class='input-group']/input[@placeholder= 'Search...']";
    let fieldProperties     = "//fieldset/legend[contains(text(), 'Field Properties')]";
    let viewFieldsPP        = "//label[contains(text(), '{0}')]/../div//following-sibling::input";
    let viewFieldsTB        = "(//label[contains(text(), '{0}')]/../select)[1]";
    let selectOption        = "(//label[contains(text(), '{0}')]/../select/option[contains(text(),'{1}')])[1]";
    let selectOptionLookUp  = "(//label[contains(text(), '{0}')]/../select/option[(text()='{1}')])[1]";   
    let peoplePickerVal     = "//div[contains(text(), '{0}')]/div/div[contains(text(), '{1}')]";
    let dataEntryTextBox    = "//h4[contains(text(), '{0}')]/..//label[contains(text(), 'Text box')]/../input";
    let dataEntryTextArea   = "//h4[contains(text(), '{0}')]/..//label[contains(text(), 'Text Area')]/../p/textarea";
    let dataEntryData       = "//div[contains(text(), '{0}')]";
    // let dataEntryButton     = "(//span[contains(text(), '{0}')])[1]";
    let dataEntryButton     = "//h4[contains(text(), '{0}')]/..//span[contains(text(), '{1}')]";
    let dataEntryEdit       = "(//span[contains(@title, 'Edit')]/a)[1]";
    let deleteConfirm       = "//button[contains(text(), 'Yes, I want to delete')]";
    let manageFormButton    = "(//button[contains(text(), '{0}')])[1]";
    let dltConfirmManageForm = "//button[contains(text(), 'Delete the')]";
    let noData              = "//tr/td[contains(text(), 'No data available in table')]";
    let inputProperty       = "//label[contains(text(), '{0}')]/../input";
    let addColumn           = "//div[text()='Main Content']/parent::div//following-sibling::div[@class='canvas drop-container flltoolcontainer ui-sortable']/../../../div/a/i";
    let checkboxSelection   = "(//label/span[contains(text(), '{0}')]/../input)[1]";
    let checkboxSelectionPP = "//div[contains(@class, 'peoplepicker')]/div/label/span[contains(text(), '{0}')]/../input";
    let checkboxSelectionCF = "//div[contains(@class, 'childform')]/div/label/span[contains(text(), '{0}')]/../input";
    let btnSearchResult     = "(//td/div[contains(text(),'{0}')]/..//..//nobr/a[contains(text(), '{1}')])[1]";
    let keyField            = "//label[contains(text(), '{0}')]/../div/ul/li/input";
    let selectKeyField      = "//div[contains(@class, 'select2-result-label')]/span[contains(text(), '{0}')]";
    let optionsInput        = "//label[contains(text(), '{0}')]/../div/input"; 
    let optionRemove        = "//label[contains(text(), 'Options')]/../div/span[contains(text(), '{0}')]/span";   
    let quickCreateItem     = "//button[@title='Quick Create Record']";
    let errSummary          = "(//h4[contains(text(), '{0}')]/..//div[contains(@id, 'fllErrorSummaryContainer')])[1]";
    let errMessage          = "//h4[contains(text(), '{0}')]/..//label[contains(text(), '{1}')]/../div[@class='error alert-danger']";
    let noErrMessage        = "//label[contains(text(), 'Text box')]/../div[@style='display: none;']";
    let formFullTitle       = "//h4[contains(text(), '{0}')]/..//h1[contains(@id, 'formFullTitle')]";
    let dropdownValues      = "//h4[contains(text(), '{0}')]/..//label[contains(text(), '{1}')]/../select/option";
    let radio               = "//label[contains(text(), '{0}')]/../div/div/div/label/span[contains(text(), '{1}')]/../input";
    let radioValues         = "//h4[contains(text(), '{0}')]/..//label[contains(text(), '{1}')]/../div/div/div/label/span";
    let charLeft            = "//h4[contains(text(), '{0}')]/..//div[@class='chars-left']";
    let multiSelInput       = "//h4[contains(text(), '{0}')]/..//label[text()='{1}']/../div/ul/li/input";
    let multiSelOption      = "//h4[contains(text(), '{0}')]/..//label[text()='{1}']/../select/option[contains(text(), '{2}')]";
    let checkboxSelDataEntry= "//label[text()='{0}']/../div/div/div/label/input[@value='{1}']";
    let email               = "(//label[contains(text(), '{0}')]/../div/input)[1]";
    let dateInput           = "//label[contains(text(), '{0}')]/../div/input";
    let dateSel             = "//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_' and contains(@style,'display: block;')]//following-sibling::div[@class='xdsoft_calendar']/table/tbody/tr[2]/td[2]";
    let hyperlink           = "//label[text()='{0}']/../p/div//following-sibling::span[@class='cke_toolgroup']/a";
    let enterURL            = "//table[not(contains(@style, 'hidden')) and @class='cke_dialog cke_browser_webkit cke_ltr']//div[text()='Link']/../table[@class='cke_dialog_contents']//following-sibling::div/../label[text()='URL']/../div/div/input";
    let ok                  = "//table[not(contains(@style, 'hidden')) and @class='cke_dialog cke_browser_webkit cke_ltr']//div[text()='{0}']/..//table[@class='cke_dialog_ui_hbox cke_dialog_footer_buttons']/tbody/tr/td/a[@title='OK']";
    let htmlLinkImg         = "//div[not(contains(@style, 'display: none')) and contains(@class, 'HTMLEditor')]//a[@title='Image']";
    let htmlLink            = "//label[text()='{0}']/../p/textarea";
    let tabName             = "//table[not(contains(@style, 'visibility: hidden'))]//div[contains(text(), 'Image Properties')]//../following-sibling::div/a[contains(text(), '{0}')]";
    let fileInput           = 'input[type="file"]';
    let sendToServer        = "//table[not(contains(@style, 'visibility: hidden'))]//div[contains(text(), 'Image Properties')]//..//following-sibling::table//a[@title='Send it to the Server']";
    let previewImg          = "//table[not(contains(@style, 'visibility: hidden'))]//div[contains(text(), 'Image Properties')]//..//img[contains(@id, 'previewImage')]";
    let getFileName         = "//div/span[@data-bind='fileDownload:Value']";
    let selectField         = "//label[contains(text(), '{0}')]/..//div/input[@placeholder]";
    let activeSelection     = "//table[@class='display stripe fllSelectorGrid dataTable no-footer DTTT_selectable']//tr[contains(@class,'active')]";
    let checkboxAll         = "//table[contains(@style, 'display')]//tr[@class='rowhead']/th/input[@type='checkbox']";
    let button              = "//button[contains(text(),'{0}')]";
    let firstRow            = "//table[@class='display stripe fllSelectorGrid dataTable no-footer DTTT_selectable']//tbody/tr[1]";
    let chooseTabName       = "//li/a[contains(text(), '{0}')]";
    let headers             = "//label[text()='{0}']//..//tr[1]/th[@class='print-formheader-control-text ui-state-default sorting']";
    let chooseHeaders       = "//table/thead/tr[1]/th[@aria-controls]/br/..";
    let selectedHeaders     = "//table[not(@id)]//tr/th[contains(@aria-controls, 'lookupfieldformSelectedGrid')]";

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
    let titleTextEle        =  element(by.css(titleText));    
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
    let waitForToolsLoad     = element(by.xpath(tools.format("Advanced Tools"))); 
    let waitForToolsExpand   = "//div[@id='toolboxcontainer']//span[contains(text(), '{0}')]/../../../../div[@class='panel-collapse collapse in']";
    let addColumnEle         = element(by.xpath(addColumn)); 
    let waitForChildForm     = $("table[class='display stripe flldatatable recordlistdatatable nowrap dataTable no-footer']");
    let childWindow          = $("div[class='tab-pane active ui-tabs-panel ui-corner-bottom ui-widget-content']");
    let fromBuilder          = element(by.xpath("//form[@id='main-formFormBuilder']"));   
    let childFormPage        = element(by.xpath("//div[contains(@aria-describedby, 'formentrycontainer') and contains(@style, 'absolute')]"));   

    this.validateWelcomeMessage = async function(){
        return await cLib.getText(welcomeMessage, welcomeMessageEle);    
    };

    this.tabClick = async function(name){
        let elem   =  element(by.xpath(manageForm.format(name))); 
        await cLib.click(name, elem); 
        await cLib.waitForElementLoad("ManageFormPage", waitFormManageFmPage);
    };

    this.selectFormTools = async function(name){
        await cLib.waitForElementLoad("BasicToolsoad", waitForToolsLoad);
        await browser.sleep(5000);
        let elem   =  element(by.xpath(tools.format(name))); 
        await cLib.click(name, elem);
        let elem1 = element(by.xpath(waitForToolsExpand.format(name)));   
        await cLib.waitForElementLoad("ToolsExpand", elem1); 
    };

    this.buttonClick_anchor = async function(name){
        let elem   =  element(by.xpath(createNewForm.format(name))); 
        await cLib.click(name, elem);    
    };

    this.buttonClick_anchor_child = async function(name){       
        await browser.sleep(10000);
        browser.executeScript("window.scrollTo(0,10000)");
        // await cLib.waitForElementLoad("ChildForm", waitForChildForm);  
        let elem   =  element(by.xpath(createNewForm.format(name))); 
        await cLib.click(name, elem); 
    };

    this.buttonClick = async function(name){
        let str = "$(\"button:contains('OK')\").click()";
        await browser.executeScript(str); 
    };

    this.buttonSearchresults = async function(title, buttonName){
        let elem   =  element(by.xpath(btnSearchResult.format(title, buttonName))); 
        await browser.sleep(5000);
        await cLib.click(buttonName, elem); 
    };

    this.enterTitle = async function(val){
        // await browser.sleep(10000);
        // await cLib.waitForElementLoad("BasicToolsoad", waitForToolsLoad);
        await cLib.enterText(formTitle, formTitleEle, val);
        // await cLib.click(formTitle, formTitleEle);  
        // await browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).perform();
        // await browser.actions().sendKeys(val + protractor.Key.ENTER).perform();
    };

    this.clickSave = async function(){
        if (cLib.isElementPresent(saveEle)){
            await cLib.click(save, saveEle);
            await browser.sleep(10000);
            await cLib.waitForElementLoad("Update", updateEle);
        } else{
            
        }
        
    };

    this.dragAndDrop = async function(sourceName){
        let elem   =  element(by.xpath(manageForm.format(sourceName))); 
        browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        await cLib.dragAndDrop(sourceName, elem, targetEle);    
    }; 

    this.clickPublish = async function(){
        await cLib.click(publish, publishEle); 
        await browser.sleep(10000);
        await cLib.waitForElementLoad("BasicToolsoad", waitForToolsLoad);
    };

    this.searchFormTitle = async function(val){
        await cLib.enterText(searchTitle, searchTitleEle, val); 
        let elem   =  element(by.xpath("(//table[@id='formbuilderadmingrid']/tbody/tr[@role='row'])[1]"));     
        await cLib.waitForElementLoad("Search Results", elem);
    };

    this.validateSearchResultsStatus = async function(val){
        let elem   =  element(by.xpath(searchResult.format(val))); 
        return await cLib.getText(searchResult, elem);    
    };

    this.selectPropertyPeoplePicker = async function () {
        await cLib.click(peoplePicker, peoplePickerEle); 
        await cLib.waitForElementLoad(fieldProperties, fieldPropertiesEle);
    };

    this.selectPeoplePicker = async function (labelName) {
        await browser.sleep(1000);
        let elem   =  element(by.xpath(viewFieldsPP.format(labelName))); 
        await cLib.click(labelName, elem);         
    };

    this.selectInputBox = async function (labelName) {
        await browser.sleep(1000);
        let elem   =  element(by.xpath(viewFieldsTB.format(labelName))); 
        await cLib.click(labelName, elem);         
    };

    this.selectOption = async function (labelName, option) {
        let elem1   =  element(by.xpath(selectOption.format(labelName, option))); 
        await cLib.click(option, elem1); 
        await browser.sleep(2000);
    };    

    this.selectLookUp = async function (labelName) {
        await browser.sleep(1000);
        let elem   =  element(by.xpath(viewFieldsTB.format(labelName))); 
        await cLib.click(labelName, elem);         
    };
    
    this.selectOptionLookUp = async function (labelName, option) {
        let elem1   =  element(by.xpath(selectOptionLookUp.format(labelName, option))); 
        await cLib.click(option, elem1); 
        await browser.sleep(2000);
    };    

    this.elementPresent = async function (name) {
        await browser.sleep(5000);
        await cLib.waitForElementLoad("DataEntryPage", waitForDataEntryPage);        
        let elem   =  element(by.xpath(toolsDataTable.format(name))); 
        return await cLib.isElementPresent(elem); 
    }; 

    this.elementPresentPeoplePicker = async function (label, fieldName) {
        await browser.sleep(3000);
        let elem   =  element(by.xpath(peoplePickerVal.format(label, fieldName))); 
        return await cLib.isElementPresent(elem); 
    };

    this.clickUpdate = async function(){
        await cLib.click(update, updateEle); 
        await browser.sleep(10000);
        await cLib.waitForElementLoad("Update", updateEle);
        await cLib.waitForElementLoad("BasicToolsoad", waitForToolsLoad);
    };

    this.enterTextBox = async function(form, val){
        let elem   =  element(by.xpath(dataEntryTextBox.format(form))); 
        // browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        await cLib.enterText("dataEntryTextBox", elem, val);        
    };

    this.enterTextArea = async function(form, val){
        let elem   =  element(by.xpath(dataEntryTextArea.format(form))); 
        await cLib.enterText("dataEntryTextArea", elem, val);        
    };

    this.clickDataEntryButton = async function(formName, button){
        let elem   =  element(by.xpath(dataEntryButton.format(formName, button))); 
        await cLib.click(button, elem); 
        await browser.sleep(10000);
        await cLib.waitForElementLoad("PageLoad", elem);        
    };

    this.waitForChildForm = async function(){
        let elem   =  element(by.xpath(dataEntryButton.format("ParentForm", "Update"))); 
        await cLib.waitForElementLoad("DataEntryPageLoad", elem);   
        browser.executeScript("window.scrollTo(0,10000)");
        await cLib.waitForElementLoad("ChildForm", waitForChildForm);  
        browser.executeScript("window.scrollTo(0,0);");
        childFormloc    =  await cLib.getLocation(waitForChildForm);
    };

    this.clickBackDataEntry = async function(formName, button){
        let backElem   =  element(by.xpath(dataEntryButton.format(formName, button))); 
        await cLib.click("Back", backElem); 
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

    this.clickDataEntryDelete = async function(formTitle, button){
        let elem   =  element(by.xpath(dataEntryButton.format(formTitle, button))); 
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
        await browser.sleep(10000);
        await cLib.waitForElementLoad("ManageFormPage", waitFormManageFmPage);
        return await cLib.isElementPresent(noDataEle); 
    };  
    
    this.enterDataFieldProperty = async function(label, val){
        let elem   =  element(by.xpath(inputProperty.format(label))); 
        await cLib.enterText(label, elem, val);        
    };

    this.addColumn = async function(){
        await cLib.click(addColumn, addColumnEle);    
    };

    this.checkBoxSelection = async function(label){
        let elem   =  element(by.xpath(checkboxSelection.format(label))); 
        await cLib.click(label, elem);    
    };

    this.checkBoxSelectionPP = async function(label){
        let elem   =  element(by.xpath(checkboxSelectionPP.format(label))); 
        await cLib.click(label, elem);    
    };

    this.checkBoxSelectionCF = async function(label){
        let elem   =  element(by.xpath(checkboxSelectionCF.format(label))); 
        await cLib.click(label, elem);    
    };    
    
    this.enterKeyField = async function(label, val){
        let elem   =  element(by.xpath(keyField.format(label))); 
        await cLib.enterText(label, elem, val);
        await browser.sleep(2000);
        let elem1   =  element(by.xpath(selectKeyField.format(val))); 
        await cLib.click(val, elem1);       
    };

    this.removeOptions = async function(val){
        let elem   =  element(by.xpath(optionRemove.format(val))); 
        await cLib.click(val, elem);    
    };

    this.enterOptions = async function(val){
        let label = "Options"
        let elem   =  element(by.xpath(optionsInput.format(label))); 
        await cLib.enterOptions(label, elem, val);
        let elem1   =  element(by.xpath("//label[contains(text(), 'Options')]")); 
        await cLib.click(label, elem1);        
    };

    this.quickNewItemButtonPresent = async function () {
        let elem   =  element(by.xpath(quickCreateItem)); 
        return await cLib.isElementPresent(elem); 
    };  

    this.getSummaryErrorMessage = async function(title){
        let elem   =  element(by.xpath(errSummary.format(title))); 
        return await cLib.getText("Summary Error", elem);    
    };

    this.getErrorMessage = async function(title, label){
        let elem   =  element(by.xpath(errMessage.format(title, label)));
        browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        return await cLib.getText(label, elem);    
    };

    this.noErrorMessagePresent = async function (label) {        
        let elem   =  element(by.xpath(noErrMessage.format(label))); 
        return await cLib.isElementPresent(elem); 
    }; 

    this.getFormFullTitle = async function(title){
        let elem   =  element(by.xpath(formFullTitle.format(title))); 
        return await cLib.getText("FullformTitle", elem);    
    };

    this.getDropdownValues = async function(formTitle, label){
        let elem1   =  element(by.xpath(dataEntryButton.format(formTitle, "Update"))); 
        await cLib.waitForElementLoad("PageLoad", elem1);        

        let elem   =  element.all(by.xpath(dropdownValues.format(formTitle, label)));           
        let allOptions = await elem.map(async function (option) {                   
                  return await cLib.getText("FullformTitle", option);
            });
            return await (allOptions);
    };

    this.getDefaultSelectionDropdown = async function(val){
        let str = "return $(\"select[id*='" + val + "']\").val()";
        return await browser.executeScript(str);        
    };

    this.getRadioButtonValues = async function(formTitle, label){
        let elem1   =  element(by.xpath(dataEntryButton.format(formTitle, "Update"))); 
        await cLib.waitForElementLoad("PageLoad", elem1);        

        let elem   =  element.all(by.xpath(radioValues.format(formTitle, label)));           
        let allOptions = await elem.map(async function (option) {                   
                  return await cLib.getText("FullformTitle", option);
            });
            return await (allOptions);
    };

    this.getRadioSelected = async function(labelName, option){
        let elem  =  element(by.xpath(radio.format(labelName, option))); 
        return await cLib.isRadioButtonSelected(elem);    
    };

    this.getCharLeft = async function(form){
        let elem   =  element(by.xpath(charLeft.format(form))); 
        return await cLib.getText("TextArea", elem);    
    };

    this.selectMultiSelect = async function (title, labelName) {
        await browser.sleep(1000);
        let elem   =  element(by.xpath(multiSelInput.format(title, labelName))); 
        await cLib.click(labelName, elem);         
    };    
    
    this.enterOptionsMultiSelect = async function(title, labelName, option){
        let options = option.split(",");
        for (let i = 0; i < options.length; i++) {
            let elem   =  element(by.xpath(multiSelOption.format(title, labelName, options[i]))); 
            await cLib.click(option, elem); 
        }
        browser.sleep(5000);
     }; 

     this.enterOptionsMultiSelectTag = async function(title, option, label){
        let elem   =  element(by.xpath(multiSelInput.format(title, label))); 
        await cLib.enterOptions(label, elem, option);
        await cLib.click("ErrorMessage", elem);      
    };

    this.selectCheckBox = async function (option, label) {
        let elem   =  element(by.xpath(checkboxSelDataEntry.format(label, option)));
        let str = "$(\"input[value='" + option + "']\").click()";
        browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        browser.executeScript(str);        
    };

    this.enterEmail = async function(label, val){
        let elem   =  element(by.xpath(email.format(label)));   
        await cLib.enterText(email, elem, val);                 
    };

    this.dateSelect = async function(label){
        let elem   =  element(by.xpath(dateInput.format(label))); 
        await cLib.click(label, elem);  
        await browser.sleep(500);
        let elem1   =  element(by.xpath(dateSel)); 
        await cLib.click(dateSel, elem1);  
        await browser.sleep(500);
        await cLib.click(label, elem);  
    };

    this.getDate = async function(label){
        let str = "return $(\"input[id*='" + label + "']\").val()";
        return await browser.executeScript(str); 
    };    

    this.selectHyperlink = async function (labelName) {
        let elem   =  element(by.xpath(hyperlink.format(labelName))); 
        await cLib.click(labelName, elem);         
    };

    this.enterURL = async function (val) {
        let elem   =  element(by.xpath(enterURL)); 
        await cLib.enterText("URL", elem, val); 
        let elem1   =  element(by.xpath(ok.format("Link"))); 
        await cLib.click("OK", elem1);                   
    };

    this.getURL = async function () {
        let elem = element(by.xpath("//body/p/a"));
        // await browser.switchTo().frame(element(by.tagName('iframe')).getWebElement(1));
        await browser.switchTo().frame(element(by.xpath('(//iframe)[1]')).getWebElement(1));
        let url = await elem.getAttribute("href");
        await browser.switchTo().defaultContent();  
        return url;
    };   

    this.clickHTMLEditor = async function (labelName) {
        // let elem   =  element(by.xpath(htmlLink.format(labelName)));
        let elem  = $("p[class='fllhtmleditorcontainer htmleditor']>div>p"); 
        await cLib.click(labelName, elem); 
        let elem1   =  element(by.xpath(htmlLinkImg)); 
        await cLib.click("linkImg", elem1); 
    };

    this.uploadFileHTMLEditor = async function (val) {
        await browser.sleep(2000);
        let elem   =  element(by.xpath(tabName.format("Upload")));
        await cLib.waitForElementLoad("Upload", elem);        
        let str  = "$(\"a[title='Upload']\")[0].click()";     
        browser.executeScript(str);
        // await cLib.click("UploadTabClick", elem); 
        await browser.switchTo().frame(element(by.xpath('//iframe[@title="Send it to the Server"]')).getWebElement(2));  
        await $(fileInput).sendKeys(val);
        await browser.switchTo().defaultContent();  
        let elem2   =  element(by.xpath(sendToServer));
        await cLib.click("SendToServer", elem2); 
        let elem3   =  element(by.xpath(tabName.format("Image Info")));
        await cLib.waitForElementLoad("Image Info", elem3);  
        // let str1 = "return $(\"table:not([style*='visibility: hidden'])[class='cke_dialog cke_browser_webkit cke_ltr'] input\").val()";
        // let str1 = "return  $(\"table input\").val()";       
        // let expectedImg = await browser.executeScript(str1); 
        // await console.log("expectedImg11111--->", expectedImg);
        // return expectedImg;              
    };    

    this.getImageInfo = async function () {
        await browser.sleep(2000);
        let elem3   =  element(by.xpath(tabName.format("Image Info")));
        await cLib.waitForElementLoad("Image Info", elem3); 
        let elem4   =  element(by.xpath(previewImg));
        return await elem4.getAttribute("src");    
    };   

    this.getImageHTMLEditor = async function () {
        let elem1   =  element(by.xpath(ok.format("Image Properties"))); 
        browser.executeScript("arguments[0].scrollIntoView(true);", elem1);
        await cLib.click("OK", elem1);
        // let elem = $("div[role='dialog'][style='display: none;']");
        // await cLib.waitForElementLoad("Dialog", elem); 
        return await $("p[class='fllhtmleditorcontainer htmleditor']>div>p>img").getAttribute("src");   
    };   

    this.fileUpload = async function (val) {
        await $(fileInput).sendKeys(val);
    };    
    
    this.getFileName = async function () {
        let elem   =  element(by.xpath(getFileName));
        return await cLib.getText("FileUpload", elem);    
    }; 

    this.selectField = async function (labelName) {
        let elem =  element(by.xpath(selectField.format(labelName)));
        browser.executeScript("window.scrollTo(0,0)");
        // browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        // await cLib.waitForElementLoad("LookUp", elem); 
        // let size = await browser.manage().window().getSize();
        // console.log("Browser width----->", size.width)
        // console.log("Browser Height----->", size.height)
        // let y = size.height;
        let loc    =  await cLib.getLocation(elem);
        let y = childFormloc.y-300
        if(labelName=="People Picker"){
            y = y-100;
        }
        console.log("childFormloc----->", childFormloc.y)
        console.log("document----->", y)
        let str = "window.scrollBy(" + loc.x + "," + y + ");"
        await browser.sleep(2000);
        await browser.executeScript(str);
        await browser.sleep(2000);
        await cLib.click(labelName, elem);  
    };

    this.selectFieldChild = async function (labelName) {
        let elem =  element(by.xpath(selectField.format(labelName)));
        await cLib.click(labelName, elem);  
    };

    this.selectALL = async function () {
        await browser.sleep(5000);
        await cLib.waitForElementLoad("childWindow", childWindow);        
        let elem = $("th > input[type='checkbox");
        await cLib.waitForElementLoad("Dialog", elem); 
        let str = "$(\"th > input[type='checkbox']\").click()";
        await browser.executeScript(str);         
    };

    this.getActiveCount = async function () {
        await browser.sleep(3000);
        let elem   =  element.all(by.xpath(activeSelection));           
        return await elem.count();       
    };

    this.deselectAll = async function (count) {
        for (let i = 1; i <= count; i++) {
            let str = "(//table[@class='display stripe fllSelectorGrid dataTable no-footer DTTT_selectable']//tr[contains(@class,'active')])[1]";
            let elem   =  element(by.xpath(str)); 
            await cLib.click(str, elem); 
        }
    };

    this.selectRow = async function () {
        let elem   =  element(by.xpath(firstRow)); 
        await cLib.click(firstRow, elem);
    };

    this.getUserIDChooseItems = async function () {
        let elem   =  element(by.xpath("//table[@class='display stripe fllSelectorGrid dataTable no-footer DTTT_selectable']//tr[contains(@class,'active')]/td[2]/div"));
        return await cLib.getText("UserID", elem);    
    }; 

    this.navigateTab = async function (val) {
        let elem   =  element(by.xpath(chooseTabName.format(val))); 
        await cLib.click(val, elem); 
    };   
    
    this.getUserIDSelectedItems = async function () {
        let elem   =  element(by.xpath("//table[@class='display stripe fllSelectorGrid no-footer DTTT_selectable dataTable']//tr[contains(@class,'active')]/td[1]/div"));
        return await cLib.getText("UserID", elem);    
    }; 

    this.getUserIDForm = async function (lable, title) {
        let str;
        if(title=="ParentForm"){
            str = "//label[text()='{0}']//..//tr[contains(@class,'odd')]/td[2]/div";
        }
        else{
            str = "//label[text()='{0}']//..//tr[contains(@class,'odd')]/td[1]/div";
        }
        let elem   =  element(by.xpath(str.format(lable)));
        // await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        return await cLib.getText("UserID", elem);    
    }; 

    this.buttonPresentInForm = async function () {
        let elem   =  $("button[title='Delete All Selected Items']");
        // await browser.executeScript("arguments[0].scrollIntoView(true);", elem);
        return await cLib.isElementPresent(elem); 
    };

    this.getHeaders = async function(lable){
        let elem   =  element.all(by.xpath(headers.format(lable)));    
        let allOptions = await elem.map(async function (option) {                   
                  return await cLib.getText("Headers", option);
            });
            return await (allOptions);
    };

    this.getHeadersChooseItems = async function(){
        let elem   =  element.all(by.xpath(chooseHeaders));           
        let allOptions = await elem.map(async function (option) {                   
                  return await cLib.getText("ChooseHeaders", option);
            });
            return await (allOptions);
    };  
    
    this.getHeadersSelected = async function(){
        let elem   =  element.all(by.xpath(selectedHeaders));           
        let allOptions = await elem.map(async function (option) {                   
                  return await cLib.getText("SelectedHeaders", option);
            });
            return await (allOptions);
    };

    this.clickFinalUpdateButton = async function(formName, button){
        let elem   =  element(by.xpath(dataEntryButton.format(formName, button))); 
        await cLib.click(button, elem); 
        await browser.sleep(10000);
        // let elem1   =  element(by.xpath(dataEntryButton.format("ParentForm", button))); 
        // await cLib.waitForElementLoad("PageLoad", elem1);        
    };

    this.waitFormBuilder = async function(){
        await cLib.waitForElementLoad("formFormBuilder", fromBuilder);       
    };

    this.waitForDataEntrySummaryPage = async function(){
        await cLib.waitForElementLoad("DataEntrySummaryPage", waitForDataEntryPage);
    };

    this.waitForChildFormPage = async function(){
        await cLib.waitForElementLoad("ChildFormPage", childFormPage);
    };

    this.waitForParentFormPage = async function(){
        await cLib.waitForElementLoad("ChildForm", waitForChildForm);  
    };
    
    this.waitForFormUpdate = async function(){
        await cLib.waitForElementLoad("Update", updateEle);
    };
    
};

module.exports = new manageForm();