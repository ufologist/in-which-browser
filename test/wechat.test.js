import {
    isWechatWebview,
    getWechatVersion
} from '../src/wechat.js';

var wechatUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/1.02.1907300 MicroMessenger/6.7.3 Language/zh_CN webview/';
var browserUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

describe('wechat', function() {
    test('isWechatWebview', function() {
        expect(isWechatWebview(wechatUa)).toBe(true);
        expect(isWechatWebview(browserUa)).toBe(false);
    });

    test('getWechatVersion', function() {
        expect(getWechatVersion(wechatUa)).toBe('6.7.3');
        expect(getWechatVersion(browserUa)).toBe('');
    });
});