import inWhichBrowser from '../src/in-which-browser.js';

describe('in-which-browser', function() {
    test('zepto', function() {
        expect(inWhichBrowser.os.phone).toBeDefined();
        expect(inWhichBrowser.browser.version).toBeDefined();
    });

    test('extends', function() {
        expect(inWhichBrowser.browser.wechat).toBeDefined();
        expect(inWhichBrowser.browser.wechatVersion).toBeDefined();
        expect(inWhichBrowser.browser.weapp).toBeDefined();
    });
});