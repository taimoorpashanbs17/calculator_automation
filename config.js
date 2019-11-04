exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/**/*.js'],
  capabilities: {
    browserName: 'chrome', 
    chromeOptions: {
      args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage','start-maximized']
    }
  },
};

