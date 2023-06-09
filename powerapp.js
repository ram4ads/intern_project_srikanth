
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--start-maximized');
const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();

async function Test2(Id) {
    try {
        // await driver.get("https://powerusers-staging.microsoft.com/t5/ICS-Forums/Subject-Test-By-Srikanth-Wed-Jun-07-2023-16-12-51-GMT-0530-India/td-p/98257");
        await driver.get('Id');

        await driver.sleep(2000);

        const replyButton = await driver.findElement(By.xpath("//span[contains(@class, 'message-reply')]/a"));
        await replyButton.click();

        // const startingCommentReplay = await driver.findElement(By.id("link_24"));
        // // await driver.executeScript("arguments[0].scrollIntoView()", startingCommentReplay);
        // await startingCommentReplay.click();
        // await driver.sleep(5000);

        const pageTitle = await driver.getTitle();
        console.log('Page Title:', pageTitle);


        if (pageTitle === "Sign in to your account") {
            await driver.wait(until.elementLocated(By.css('input[name="loginfmt"]')));

            const email = await driver.findElement(By.css('input[name="loginfmt"]'));
            await email.sendKeys("srikanthb@italentdigital.com");

            const nextBtn = await driver.findElement(By.id('idSIButton9'));
            await nextBtn.click();
            await driver.sleep(2000);


            await driver.wait(until.elementLocated(By.css('input[name="passwd"]')));

            const password = await driver.findElement(By.css('input[name="passwd"]'));
            await password.sendKeys("");
            await driver.sleep(1000);

            const submitBtn = await driver.findElement(By.id('idSIButton9'));
            await submitBtn.click();
            await driver.sleep(2000);

        }

        await driver.sleep(10000);
        const yesbtn = await driver.findElement(By.id('idSIButton9'));
        await yesbtn.click();


        const afterLoginPageTitle = await driver.getTitle();
        console.log('Page Title:', afterLoginPageTitle);

        if (afterLoginPageTitle === "Complete your Profile - Power Platform Community") {
            const username = await driver.findElement(By.id("lia-login"));
            await username.sendKeys('srikanth');
            await driver.sleep(2000);

            const clickCheckBox = await driver.findElement(By.id('lia-userAcceptsTermsOfService'));
            await clickCheckBox.click();
            await driver.sleep(2000);

            const submitBtn = await driver.findElement(By.id('submitContext_0'));
            await submitBtn.click();
            await driver.sleep(2000);
        }

        // enter Message in subject //
        await driver.sleep(2000);
        const iframeDiv1 = await driver.findElement(By.id("mceu_38"));
        const iframe1 = await iframeDiv1.findElement(By.tagName("iframe"));
        await driver.switchTo().frame(iframe1);

        const pEl = await driver.findElement(By.tagName('p'));
        await pEl.sendKeys("Test By Srikanth In PAC");
        await driver.switchTo().defaultContent();
        //

        const submitBtnInPAC = await driver.findElement(By.id("submitContext_1"));
        await submitBtnInPAC.click();
        await driver.sleep(3000);

        await driver.sleep(3000);
        // const commentReplay = await driver.findElement(By.id("link_24"));
        const replyElements = await driver.findElements(By.css('[aria-label="Reply to comment"]'));
        const lastReplyElement = replyElements[replyElements.length - 1];
        await lastReplyElement.click();


        await driver.sleep(2000);
        const iframeDiv2 = await driver.findElement(By.id("mceu_70"));
        const iframe2 = await iframeDiv2.findElement(By.tagName('iframe'));
        await driver.switchTo().frame(iframe2);

        const pElememt = await driver.findElement(By.tagName('p'));
        const date = new Date();
        await pElememt.sendKeys(`Testing on ${date}`);
        await driver.sleep(2000);
        await driver.switchTo().defaultContent();

        await driver.sleep(2000);
        const finalReply = await driver.findElement(By.css('input[name="submitContext_0"]'));
        await finalReply.click();

    }
    finally {

    }
}

Test2();

module.exports = Test2;