class ContactUs_Page {
    get firstName() {
        return $('//input[@name="first_name"]');
    }

    get lastName() {
        return $('//input[@name="last_name"]');
    }

    get emailAddress() {
        return $('//input[@name="email"]');
    }

    get message() {
        return $('//textarea[@name="message"]');
    }

    get submitBttn() {
        return $('//input[@type="submit"]');
    }

    get successfullConfirmation() {
        return $('//h1[contains(text(),"Thank You for your Message!")]');
    }

    get errorMessage() {
        return $('body');
    }

    setFirstName(firstName) {
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName) {
        return this.lastName.setValue(lastName);
    }

    setEmailAddress(emailAddress) {
        return this.emailAddress.setValue(emailAddress);
    }

    setComments(comments) {
        return this.message.setValue(comments);
    }

    submitBttnClick() {
        return this.submitBttn.click();
    }

    submitAllInformationForContactUs(firstN, lastN, emailID, comments) {
        if (firstN) {
            this.firstName.setValue(firstN);
        }
        if (lastN) {
            this.lastName.setValue(lastN);
        }
        if (emailID) {
            this.emailAddress.setValue(emailID);
        }
        if (comments) {
            this.message.setValue(comments);
        }
    }
    confirmSuccessfulSubmission() {
        console.log(this.successfullConfirmation.isVisible());
        expect(this.successfullConfirmation.isVisible(), "Message element is not getting displayed").to.be.true;
        var text = this.successfullConfirmation.getText();
        expect(text, "Message is not correct").to.equal("Thank You for your Message12!");
    }

    unSuccessfulSubmission() {
        var text = this.errorMessage.getText();
        expect(text, "Error message is incorrect").to.contain("Error");
    }

}
module.exports = new ContactUs_Page();