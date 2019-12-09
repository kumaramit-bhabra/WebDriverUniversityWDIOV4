beforeEach(function()
{
    browser.url('/Contact-Us/contactus.html');
    browser.windowHandleMaximize();
})

describe("Validate Contact Us Page functionality", function(done){

    //Centralized location of selectors

        var firstNameTextBox = '//input[@name="first_name"]';
        var lastNameTextBox = '//input[@name="last_name"]';
        var emailAddressTextBox ='//input[@name="email"]';
        var commentsTextBox ='//textarea[@name="message"]';
        var resetBttn = '//input[@type="reset"]';
        var submitBttn = '//input[@type="submit"]';
        var msgElement = '//h1[contains(text(),"Thank You for your Message!")]';
        var errorTxt = 'body';

        function setFirstName(firstName)
        {
             return browser.setValue(firstNameTextBox,firstName);
        }

        function setLastName(lastName)
        {
            return browser.setValue(lastNameTextBox,lastName);
        }

        function setEmailAddress(emailAddress)
        {
            return browser.setValue(emailAddressTextBox,emailAddress);   
        }

        function setComments(comments)
        {
            return browser.setValue(commentsTextBox,comments);    
        }

        function submitBttnClick()
        {
            return browser.click(submitBttn);
        }

        function confirmSuccessfulSubmission()
        {
        console.log(browser.isVisible(msgElement));
        expect(browser.isVisible(msgElement),"Message element is not getting displayed").to.be.true;
        var text = browser.getText(msgElement);
        expect(text,"Message is not correct").to.equal("Thank You for your Message!"); 
        }

        function unSuccessfulSubmission()
        {
            var text = browser.getText(errorTxt);
            expect(text, "Error message is incorrect").to.contain("Error");
        }

    it("Welcome message is displayed if the user fills up all the information & press Submit",function(done){
    
        setFirstName("Kumar Amit");
        setLastName("Bhabra");
        setEmailAddress("amitxyz@yahoo.com");
        setComments("Postive Test");
        submitBttnClick();
        confirmSuccessfulSubmission();
    });

    it("An error message is being displayed if information is missing",function(done){
        
        setFirstName("Kumar Amit");
        setLastName("Bhabra");
        submitBttnClick();
        unSuccessfulSubmission();
    });
});