describe("Testing of different methods associated with the elements",function(){
    it("check the validation of isExisting method",function()
    {
        /* 
        isExisting(selector or element)
        Method return true / false if the element is existing or not irrespective of the fact 
        wherther it's visible on the page or not
        */

        browser.url('/Hidden-Elements/index.html');
        var isExisting = browser.isExisting('#not-displayed');
        expect(isExisting).to.equal(true);
        console.log(isExisting);
        console.log(browser.isExisting('#visibility-hidden'));
        console.log(browser.isExisting('#zero-opacity'));
        console.log(browser.isExisting('h1'));
        console.log(browser.isExisting('#h2'));
    });

    it("check the validation of isVisible method",function()
    {
        /* 
        isVisible(selector or element)
        Method return true / false if the element is visible on the page or not. For the elements 
        which are hidden it will return false.
        */

        browser.url('/Hidden-Elements/index.html');
        var isExisting = browser.isVisible('#not-displayed'); // this is a hidden element
        expect(isExisting).to.equal(false);
        console.log(isExisting);
        console.log(browser.isVisible('#visibility-hidden'));  // this is a hidden element
        console.log(browser.isVisible('#zero-opacity'));  // this is a hidden element
        console.log(browser.isVisible('h1')); //This is visible on the page
        console.log(browser.isVisible('#h2')); // This is not present on the page
    });

    it("check validation of hasFocus method",function()
    {
        /* 
        hasFocus(selector or element)
        Method return true / false if the element has focus or not.
        */
    
        browser.url('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        var checkBox1 = $('#checkboxes label:nth-of-type(1) [type]');
        checkBox1.click();
        var state = checkBox1.hasFocus();
        expect(state).to.be.true;
        

        var checkBox3  = $('#checkboxes label:nth-child(5) [type]'); 
        var checkBox3Focus = checkBox3.hasFocus();
        expect(checkBox3Focus).to.be.false;
    });

    it("check the validation of isEnabled method", function(){

        /*
        isEnabled() method returns true or false if element being present is enabled or not.
        Please note that this method will throw an error if element/selector is not present
        in the DOM.
        */
        browser.url('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        var lettuce = $('//input[@value="lettuce"]');
        console.log(lettuce.isEnabled());
        expect(lettuce.isEnabled()).to.be.true;

        var cabbage = $('//input[@value="cabbage"]');
        console.log(cabbage.isEnabled());

        var dropdwnOrange = $('//option[@value="orange"]');
        console.log(dropdwnOrange.isEnabled()); 

        var dropdwnGrape = $('//option[@value="grape"]');
        console.log(dropdwnGrape.isEnabled()); 

        var checkboxoption2 = $('//input[@value="option-2"]');
        console.log(checkboxoption2.isEnabled());
        expect(checkboxoption2.isEnabled()).to.equal(true);
    
        var radiobttnYellow = $('//input[@value="blue"]');
        console.log(radiobttnYellow.isEnabled());
    });

    it("Validate the behavior of isSelected",function(){
    /*
    isSelected() returns true or false whether or not an <option> or 
    <input> element of type checkbox or radio is currently selected. if the element is not existing
    it will throw an error
    */
        browser.url('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        
        var lettuce = $('//input[@value="lettuce"]');
        console.log(lettuce.isSelected());
        expect(lettuce.isSelected()).to.be.false;

        var cabbage = $('//input[@value="cabbage"]');
        console.log(cabbage.isSelected());

        var dropdwnGrape = $('//option[@value="grape"]');
        console.log(dropdwnGrape.isSelected()); 

        var dropdwnGrape = $('//option[@value="grape"]');
        console.log(dropdwnGrape.isSelected()); 

        var checkboxoption2 = $('//input[@value="option-3"]');
        console.log(checkboxoption2.isSelected());
        expect(checkboxoption2.isSelected()).to.equal(true);
    
        var radiobttnYellow = $('//input[@value="blue"]');
        console.log(radiobttnYellow.isSelected());

    });

    it("check the validation of isVisibleWithinViewPort method",function()
    {
        /* 
        isVisibleWithinViewport(selector or element)
        Method return true / false if the element is visible and within the view port. For the 
        elements which are hidden and not existing it will return false.
        */
 
        browser.url('/Hidden-Elements/index.html');
        browser.windowHandleMaximize();
        browser.pause(3000);
        var isExisting = browser.isVisibleWithinViewport('#not-displayed'); // this is a hidden element
        expect(isExisting).to.equal(false);
        console.log(isExisting);
        console.log(browser.isVisibleWithinViewport('#visibility-hidden'));  // this is a hidden element
        console.log(browser.isVisibleWithinViewport('#zero-opacity'));  // this is a hidden element
        console.log(browser.isVisibleWithinViewport('h1')); //This is visible on the page
        console.log(browser.isVisibleWithinViewport('#h2')); // This is not present on the page
    });

    it("check the behaviour of wait for Text method",function(){
        /*
        waitForText() it will wait for an element for a specified time in ms to have 
        the text/content
        */
        this.timeout(30000);
        browser.url('http://www.webdriveruniversity.com/Accordion/index.html');
        browser.windowHandleMaximize();
        var waitForText = $('//p[@id = "hidden-text"]');
        console.log('Current text is  ##' +waitForText.getText());

        while(waitForText.getText()!='LOADING COMPLETE.')
        {
            browser.pause(1000);
        }
        console.log('Current text after pause is   ##' +waitForText.getText());

    });

    it("check the behaviour of waitForExists and waitForVisiable method", function(){
    
        browser.url('http://www.webdriveruniversity.com/Ajax-Loader/index.html');
        browser.windowHandleMaximize();
        var clickMeBttn = $('//p[text()="CLICK ME!"]');
        clickMeBttn.waitForExist(2000,false);
        
        browser.waitForVisible('//p[text()="CLICK ME!"]',2000,false);
    
    });

    it("check the behaviour of wait Until for Text method",function(){
        /*
        waitUntil() it will wait for an element for a specified time in ms to have 
        the text/content
        */
       
        browser.url('http://www.webdriveruniversity.com/Accordion/index.html');
        browser.windowHandleMaximize();
        this.timeout(30000);
        var waitUntil = $('//p[@id = "hidden-text"]');
        
        waitUntil.waitUntil(function(){
            return waitUntil.getText() === 'LOADING COMPLETE.'
        }, 10000, 'Expected Text to be difference' );
    });

    it.only("check the behaviour of waitForValue Until for Text method",function(){
        /*
        waitForValue() it will wait for an element for a specified time in ms to have 
        a value or any text
        */
       
        browser.url('http://www.webdriveruniversity.com/Accordion/index.html');
        browser.windowHandleMaximize();
        this.timeout(30000);
        var waitForValueIdt = '//p[@id = "hidden-text"]';
        console.log(browser.waitForValue(waitForValueIdt));   
    });

});