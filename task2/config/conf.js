exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec/*.spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    },

    // onComplete : function () { DOESNT WORK
    //     browser.close();
    // },

    // onPrepare: function () {
    //     browser.waitForAngularEnabled(false); DOESNT WORK
    // }
};