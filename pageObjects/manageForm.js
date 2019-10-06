let EC      = protractor.ExpectedConditions;
var exec    = require('child_process').exec;
let run     = require('../lib/runtimeutility');
let cLib     = require('../lib/commonLib');


let manageForm =  function(){

    //Locators
    let welcomeMessage    = '//h1/b';

    //Elements
    let welcomeMessageEle   =  element(by.xpath(welcomeMessage));
        
    this.validateWelcomeMessage = async function(){
            return await cLib.getText(welcomeMessage, welcomeMessageEle);    
        };
};

module.exports = new manageForm();
