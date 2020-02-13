import Detect from '../src/zepto-detect.js';

describe('zepto-detect', function() {
    test('detect', function() {
        var $ = new Detect(window.navigator.userAgent, window.navigator.platform);

        expect($.os.phone).toBeDefined();
        expect($.browser.version).toBeDefined();
    });
});