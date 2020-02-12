import Detect from './zepto-detect.js';

import {
    isWechatWebview,
    getWechatVersion
} from './wechat.js';

import isWeappWebview from './weapp.js';

var ua = window.navigator.userAgent;
var platform = window.navigator.platform;

var result = new Detect(ua, platform);

result.browser.wechat = isWechatWebview(ua);
result.browser.wechatVersion = getWechatVersion(ua);
result.browser.weapp = isWeappWebview(ua);

export default result;