beforeEach(function()
{
    browser.url('https://www.adactin.com/HotelApp/');
})

browser.addCommand("enterCredentials",function enterCrdentials(userName, password)
{
browser.setValue('//input[@name ="username"]',userName);
browser.setValue('//input[@name ="password"]',password);
})

describe("Login Functionality",function(){
    it("Operator is able to login via valid u/n and password",function(){
        browser.enterCredentials('amit14nov','MNB597');
        browser.click('//input[@name ="login"]');
    });
})
