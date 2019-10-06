let EC     = protractor.ExpectedConditions;
var lg     = require('./Login');
let run    = require('../lib/runtimeutility');
let cLib   = require('../lib/commonLib');

let login =  function(){

    //Locators
    let userName    = 'input[id=UserName]';
    let password    = 'input[id=Password]';
    let button      = 'button[type="submit"]';

    //Elements
    let userNameEle   = $(userName);
    let passwordEle   = $(password);
    let buttonEle     = $(button);

        this.launchApp = async function (url) {
            await console.log("Launching url - {0}".format(url))
            await browser.waitForAngularEnabled(false)
            await browser.get(url); 
            // await browser.driver.manage().window().maximize();
        }

        this.loginToApp = async function (un, pw) {
            await cLib.enterText(userName, userNameEle, un);
            await cLib.enterText(password, passwordEle, pw);
            await cLib.click(button, buttonEle);
        }
}

module.exports = new login();