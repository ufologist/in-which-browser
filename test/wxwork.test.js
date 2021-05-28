import {
    isWxworkWebview,
    getWxworkVersion
} from '../src/wxwork.js';

var wxworkUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 wxwork/2.2.0 MicroMessenger/6.3.2';
var browserUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

describe('wxwork', function() {
    test('isWxworkWebview', function() {
        expect(isWxworkWebview(wxworkUa)).toBe(true);
        expect(isWxworkWebview(browserUa)).toBe(false);
    });

    test('getWxworkVersion', function() {
        expect(getWxworkVersion(wxworkUa)).toBe('2.2.0');
        expect(getWxworkVersion(browserUa)).toBe('');
    });
});