const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--start-maximized');
const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();



async function TestProject() {
  try {
    await driver.get("https://staging.community.fabric.microsoft.com/t5/user/loginpage");

    let name = await driver.findElement(By.name("login"));
    let password = await driver.findElement(By.name("password"));

    await name.sendKeys('SmartConX_Test');
    await password.sendKeys('A!s2d3f4');
    await driver.findElement(By.name("form_0")).submit();
    await driver.sleep(2000)

    let dropdown = await driver.findElement(By.className("lia-js-menu-opener default-menu-option lia-js-click-menu lia-link-navigation"));// This is class Name of anchor tag element, in ui it with name of goto dropdown
    await dropdown.click();

    let desktop = await driver.findElement(By.className("board-dropdown-item lia-board-rd-discussion1")); // clicking on the desktop option
    await desktop.click();

    let newMessageBtn = await driver.findElement(By.partialLinkText("New Message"));
    await driver.sleep(2000)
    await newMessageBtn.click();

    //let text on subject //
    let date = new Date();

    let subject = await driver.findElement(By.name("subject"));
    await subject.sendKeys(`Subject Test By Srikanth-${date}`);
    // await driver.sleep(2000);
    //

    //body //

    let iframeDiv = await driver.findElement(By.id("mceu_40"));
    let iframeEl = await iframeDiv.findElement(By.tagName("iframe"));
    await driver.switchTo().frame(iframeEl);

    const pElement = await driver.findElement(By.tagName('p'));
    await pElement.sendKeys(`Body Testing by Srikanth ${date}`)
    // await driver.sleep(2000);
    await driver.switchTo().defaultContent();

    //body //

    //label//
    const labelList = await driver.findElement(By.id('list_0'));

    const generalCommentOption = await labelList.findElement(By.xpath(".//a[contains(text(), 'General Comment')]"));

    await generalCommentOption.click();

    // Add "General Comment" label to selected labels

    const selectedLabelInput = await driver.findElement(By.id('lia-labels'))
    await selectedLabelInput.sendKeys('')
    //label//

    //submitbtn//
    let submitBtn = await driver.findElement(By.id("submitContext_1"));
    await submitBtn.click();

    await driver.sleep(3000);
    // //submitbtn//

    //selecting Communities//
    await driver.executeScript("window.scrollTo(0, 0)");
    let selectCommunity = await driver.findElement(By.className("selected-values"));

    await selectCommunity.click();
    await driver.sleep(2000);


    const dropul = await driver.findElement(By.className("commnity-panel"));

    const checkboxes = await dropul.findElements(By.css('.check-box'));
    for (let i = 0; i < 4; i++) {
      await checkboxes[i].click();
    }

    await driver.sleep(1000);

    let syndicateBtn = await driver.findElement(By.id("btn-post"));
    await syndicateBtn.click();

    await driver.sleep(2000);

    let proccedBtn = await driver.findElement(By.id('btn-proceed'));
    await proccedBtn.click();

    await driver.sleep(4000);

    const RequestOkBtn = await driver.findElement(By.className("btn-ok alert-popup-close lia-button lia-button-primary")); //close1
    await RequestOkBtn.click(); //btn-ok alert-popup-close lia-button lia-button-primary

    await driver.sleep(10000)

    let statusBtn = await driver.findElement(By.id("btn-status"));
    await statusBtn.click();

    await driver.sleep(2000);

    //closing status button 
    await driver.sleep(10000);
    const closeButton = await driver.findElement(By.css('.status-close'));
    await closeButton.click();
    //

    //press status for 2nd time-refresh//
    await driver.navigate().refresh();
    let statusBtn1 = await driver.findElement(By.id("btn-status"));
    await statusBtn1.click();
    await driver.sleep(4000);
    ///

    await driver.wait(until.elementLocated(By.id('tblHTML')));

    // Find all the rows in the table body
    const rows = await driver.findElements(By.css('#tblHTML tbody tr'));
    const targetId = [];

    // Iterate through each row
    for (let row of rows) {
      // Find the status cell in each row
      const statusCell = await row.findElement(By.xpath('.//td[2]'));

      // Get the status text
      const statusText = await statusCell.getText();


      // Check if the status is successful
      if (statusText.trim() === 'COMPLETED') {
        await driver.sleep(2000)
        const targetMessageIdLink = await row.findElement(By.xpath('.//td[4]/a'));
        await driver.executeScript("arguments[0].scrollIntoViewIfNeeded();", targetMessageIdLink);
        const targetIDLink = await targetMessageIdLink.getAttribute('href');
        targetId.push(targetIDLink);
        await driver.sleep(3000)
      }
    }

    const OtherCommunity = async(Url) => {
      try {
        // await driver.get("https://powerusers-staging.microsoft.com/t5/ICS-Forums/Subject-Test-By-Srikanth-Wed-Jun-07-2023-16-12-51-GMT-0530-India/td-p/98257");
        await driver.get(Url);

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
          await password.sendKeys("@Ss8919313994");
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
        console.log("URL completed successfully. Moving to the next URL")
      }
    }

    for (const Url of targetId) {
      if (Url.startsWith("https://staging.community.fabric.microsoft")){
        continue;
      }
      await OtherCommunity(Url);
    }
    await driver.sleep(2000);
  }

  finally {
    console.log("testing Over")
  }
}

TestProject();