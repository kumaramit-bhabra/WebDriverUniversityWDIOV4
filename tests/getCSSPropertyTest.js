describe("Validate the extraction of properties associated withcss element",function(){
    it("extract the property of text box", function(){
        browser.url('https://www.adactin.com/HotelApp/');
        browser.pause(2000);
        var cssProperty = $('//input[@name ="username"]');
        var divCarousalHeight = cssProperty.getCssProperty('text-rendering');
        console.log(divCarousalHeight);

    });
});