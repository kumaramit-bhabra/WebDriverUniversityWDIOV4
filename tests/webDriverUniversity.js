describe("Validdate the WebDriver University HomePage", function () {
    it.skip("Check the title of the page", function (done) {
        
            browser.url('/');
            browser.click('#login-portal');
            var title = browser.getTitle();
            //assert.equal(title, 'WebDriverUniversity.com');
            expect(title).to.equal('WebDriverUniversity.com');
            title.should.equal('WebDriverUniversity.com');
            console.log('Title is ' + title);
            console.log("hello World amit")
            browser.pause(3000);    
    })
});