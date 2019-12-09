beforeEach(function()
{
    browser.url('/Contact-Us/contactus.html');
})

afterEach(function(){
    //browser.close();
})

describe("Validate Contact Us Page functionality", function(){
    it("Welcome message is displayed if the user fills up all the information & press Submit",function(done){
        
        var firstNameTextBox = $('//input[@name="first_name"]');
        var lastNameTextBox = $('//input[@name="last_name"]');
        var emailAddressTextBox = $('//input[@name="email"]');
        var commentsTextBox = $('//textarea[@name="message"]');
        var resetBttn = $('//input[@type="reset"]');
        var submitBttn = $('//input[@type="submit"]');

        firstNameTextBox.setValue("Kumar Amit");
        lastNameTextBox.setValue("Bhabra");
        emailAddressTextBox.setValue("amitxyz@yahoo.com");
        commentsTextBox.setValue("Postive Test");

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
        
        browser.setValue('//input[@name="first_name"]','Kumar Amit');
        browser.setValue('//input[@name="last_name"]',"Bhabra");
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