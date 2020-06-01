 describe("Webdriverio Page should have a title",()=>{
     it("Should be `WebdriverIO · Next-gen browser and mobile automation test framework for Node.js`",()=>{
         browser.url("https://webdriver.io/")
         let title=browser.getTitle()

         let titleText=$('title')
         expect(title).to.equal("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js")
     })
 })