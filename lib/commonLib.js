let EC     = protractor.ExpectedConditions;
let run    = require('../lib/runtimeutility');
let cLib     = require('../lib/commonLib');

let commonLib =  function(){
    this.click = async function (locator, elem) {  
	try {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to Click the Element as {0} was not present".format(locator));
        await elem.click();
    }catch(e) {
        console.log(e);
        console.log("ERROR ---->Unable to Click the Element as {0} was not present".format(locator));
      }       
    };

    this.enterText = async function (locator, elem, value) {
        try{
            await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to enter the text as {0} is not present".format(locator));       
            await elem.clear().sendKeys(value);
       }
       catch(e) {
        console.log(e);
        console.log("ERROR ----> {0} was not present".format(locator));
      }  
    };

    this.enterOptions = async function (locator, elem, value) {
        try{
            await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to enter the text as {0} is not present".format(locator));       
            await elem.sendKeys(value);            
       }
       catch(e) {
        console.log(e);
        console.log("ERROR ----> {0} was not present".format(locator));
      }  
    };

    this.getText = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem)),  30000, "Unable to get the text as {0} is not present".format(locator));
        return await elem.getText();   
    };

    this.waitForElementLoad = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 30000, "Unable to wait for load the element as {0} is not present".format(locator));
    };

    // this.dragAndDrop = async function (locator, elem, target) {
    //     await browser.wait(EC.and(EC.visibilityOf(elem)),  20000, "{0} is not present".format(locator));
    //     await browser.actions().dragAndDrop(elem, target).build().perform();
    //     // await browser.actions().mouseDown(elem).mouseMove(target).mouseUp().perform();
    //     await browser.sleep(20000);
    // }

    this.dragAndDrop = async function (srcLocator, elem, destination) {
        await browser.wait(EC.and(EC.visibilityOf(elem)),  30000, "{0} is not present".format(srcLocator));
        await browser.actions().mouseMove(elem).perform();
        await browser.actions().mouseDown(elem).perform();
        await browser.actions().mouseMove( destination ).perform();
        await browser.actions().mouseUp().perform();
        await browser.sleep(5000);
    };

    this.isElementPresent = async function (elem) {
        try{
            return await elem.isPresent();
        }catch(e){
            return false;
        };        
    };

    this.isRadioButtonSelected = async function (elem) {
        try{
            return await elem.isSelected();
        }catch(e){
            return false;
        };        
    };

    this.getLocation = async function(scrollToElement) {
        return await scrollToElement.getLocation();       
    };
}

module.exports = new commonLib();