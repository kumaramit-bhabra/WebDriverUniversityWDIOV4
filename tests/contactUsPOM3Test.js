var contactUsPage = require("../pageObjects/ContactUs_Page.js");

beforeEach(function()
{
    browser.url('/Contact-Us/contactus.html');
    browser.windowHandleMaximize();
})

describe("Validate Contact Us Page functionality", function(done){

    it("Welcome message is displayed if the user fills up all the information & press Submit",function(done){
    
        /*contactUsPage.setFirstName("Kumar Amit");
        contactUsPage.setLastName("Bhabra");
        contactUsPage.setEmailAddress("amitxyz@yahoo.com");
        contactUsPage.setComments("Postive Test");*/
        contactUsPage.submitAllInformationForContactUs("Kumar Amit","Bhabra","amitxyz@yahoo.com","Postive Test");
        contactUsPage.submitBttnClick();
        contactUsPage.confirmSuccessfulSubmission();
    });

    it("An error message is being displayed if information is missing",function(done){
        
        contactUsPage.setFirstName("Kumar Amit");
        contactUsPage.setLastName("Bhabra");
        contactUsPage.submitBttnClick();
        contactUsPage.unSuccessfulSubmission();
    });
});