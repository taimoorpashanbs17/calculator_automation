exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4445/wd/hub/',
    capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },
    framework: 'jasmine',
    specs: ['./specs/**/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(20000);
    }
};