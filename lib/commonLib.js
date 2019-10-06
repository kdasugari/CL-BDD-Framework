let EC          = protractor.ExpectedConditions;

let commonLib =  function(){
    this.click = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 10000, "Unable to Click the Element as {0} was not present".format(locator));
        await elem.click();
    }

    this.enterText = async function (locator, elem, value) {
        await browser.wait(EC.and(EC.visibilityOf(elem), EC.elementToBeClickable(elem)), 10000, "Unable to enter the text as {0} is not present".format(locator));
        await elem.sendKeys(value);
    }

    this.getText = async function (locator, elem) {
        await browser.wait(EC.and(EC.visibilityOf(elem)),  10000, "Unable to get the text as {0} is not present".format(locator));
        return await elem.getText();   
    }

    this.dragAndDrop = async function (locator, elem, target) {
        await browser.wait(EC.and(EC.visibilityOf(elem)),  10000, "{0} is not present".format(locator));
        await browser.actions().dragAndDrop(elem, target).perform();
    }
}

module.exports = new commonLib();