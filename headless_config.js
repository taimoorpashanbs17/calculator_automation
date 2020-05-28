process.env.CHROME_BIN = process.env.CHROME_BIN || require('puppeteer').executablePath();

exports.config = {
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