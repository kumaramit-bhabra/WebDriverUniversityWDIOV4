var contactUsPage = require("../pageObjects/ContactUs_Page.js");

beforeEach(function()
{
    browser.url('/Contact-Us/contactus.html');
    browser.windowHandleMaximize();
})

describe("Validate Contact Us Page functionality", function(done){

    //Centralized location of selectors

        function setFirstName(firstName)
        {
             return contactUsPage.firstName.setValue(firstName);
        }

        function setLastName(lastName)
        {
            return contactUsPage.lastName.setValue(lastName);
        }

        function setEmailAddress(emailAddress)
        {
            return contactUsPage.emailAddress.setValue(emailAddress);  
        }

        function setComments(comments)
        {
            return contactUsPage.message.setValue(comments);   
        }

        function submitBttnClick()
        {
            return contactUsPage.submitBttn.click();
        }

        function confirmSuccessfulSubmission()
        {
        console.log(contactUsPage.successfullConfirmation.isVisible());
        expect(contactUsPage.successfullConfirmation.isVisible(),"Message element is not getting displayed").to.be.true;
        var text = contactUsPage.successfullConfirmation.getText();
        expect(text,"Message is not correct").to.equal("Thank You for your Message!"); 
        }

        function unSuccessfulSubmission()
        {
            var text = contactUsPage.errorMessage.getText();
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