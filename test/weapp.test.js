import isWeappWebview from '../src/weapp.js';

var wechatUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/1.02.1907300 MicroMessenger/6.7.3 Language/zh_CN webview/100_10 webdebugger miniprogramhtmlwebview miniProgram port/13133';
var browserUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

describe('weapp', function() {
    test('isWeappWebview', function() {
        expect(isWeappWebview(wechatUa)).toBe(true);
        expect(isWeappWebview(browserUa)).toBe(false);
    });
});