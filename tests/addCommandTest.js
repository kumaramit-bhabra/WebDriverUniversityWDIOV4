beforeEach(function()
{
    browser.url('/Contact-Us/contactus.html');
})

browser.addCommand('enterContactUsDetails', function enterContactUsDetails(firstName, lastName, email, comments)
{
if(firstName)
browser.setValue('//input[@name="first_name"]',firstName);

if(lastName)
browser.setValue('//input[@name="last_name"]',lastName);

if(email)
browser.setValue('//input[@name="email"]',email);

if(comments)
browser.setValue('//textarea[@name="message"]',comments);
})

describe("Validate Contact Us Page functionality", function(){
    it("Welcome message is displayed if the user fills up all the information & press Submit",function(done){
        
        var resetBttn = $('//input[@type="reset"]');
        var submitBttn = $('//input[@type="submit"]');
        browser.enterContactUsDetails('Kumar Amit', 'Bhabra', 'amitxyz@yahoo.com', 'Postive Test');
        submitBttn.click();

        //To Validate the welcome message
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        var welcomeMsgTitle = browser.getTitle();
        console.log(welcomeMsgTitle);

        var msgElement = $('//h1[contains(text(),"Thank You for your Message!")]');
        console.log(msgElement.isVisible());
        expect(msgElement.isVisible(),"Message is not getting displayed").to.be.true;
        var text = msgElement.getText();
        expect(text).to.equal("Thank You for your Message!");  
    });

    it("An error message is being displayed if information is missing",function(done){
        
        browser.enterContactUsDetails('Kumar Amit', 'Bhabra', null, null);
        browser.click('//input[@type="submit"]');
        
        //To Validate the error message
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        var welcomeMsgTitle = browser.getTitle();
        console.log(welcomeMsgTitle);

        var text = browser.getText('body');
        expect(text).to.contain("Error");

    });
});