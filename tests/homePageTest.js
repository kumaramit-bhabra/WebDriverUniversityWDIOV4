describe("Contact Us Functionality",function(){
    it("Click on Contact Us link from home page and it should open up new page", function(){
        
        browser.url('./');
        var contactUslink = $('//h1[contains(text(),"CONTACT US")]');
        contactUslink.click();
        var currentTabId = browser.getCurrentTabId();
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        var contactUsTitle = browser.getTitle();
        expect(contactUsTitle).to.equal("WebDriver | Contact Us");    
    });

});