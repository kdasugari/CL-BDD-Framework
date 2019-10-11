let EC     = protractor.ExpectedConditions;
let run    = require('../lib/runtimeutility');
let cLib     = require('../lib/commonLib');

let commonLib =  function(){
    this.click = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), run.slow, "Unable to Click the Element as {0} was not present".format(locator));
        await elem.click();
    };

    this.enterText = async function (locator, elem, value) {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), run.slow, "Unable to enter the text as {0} is not present".format(locator));
        await elem.clear().sendKeys(value);
    };

    this.getText = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem)),  run.slow, "Unable to get the text as {0} is not present".format(locator));
        return await elem.getText();   
    };

    this.waitForElementLoad = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), run.slow, "Unable to enter the text as {0} is not present".format(locator));
    };

    // this.dragAndDrop = async function (locator, elem, target) {
    //     await browser.wait(EC.and(EC.visibilityOf(elem)),  10000, "{0} is not present".format(locator));
    //     await browser.actions().dragAndDrop(elem, target).build().perform();
    //     // await browser.actions().mouseDown(elem).mouseMove(target).mouseUp().perform();
    //     await browser.sleep(10000);
    // }

    this.dragAndDrop = async function (srcLocator, elem, destination) {
        await browser.wait(EC.and(EC.visibilityOf(elem)),  run.slow, "{0} is not present".format(srcLocator));
        await browser.actions().mouseMove(elem).perform();
        await browser.actions().mouseDown(elem).perform();
        await browser.actions().mouseMove( destination ).perform();
        await browser.actions().mouseUp().perform();
        await browser.sleep(10000);
    };

    this.isElementPresent = async function (elem) {
        try{
            return await elem.isPresent();
        }catch(e){
            return false;
        };        
    };
}

module.exports = new commonLib();