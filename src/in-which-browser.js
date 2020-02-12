import Detect from './zepto-detect.js';

import {
    isWechatWebview,
    getWechatVersion
} from './wechat.js';

import isWeappWebview from './weapp.js';

// UA
var ua = window.navigator.userAgent;
var platform = window.navigator.platform;

// Zepto detect
var result = new Detect(ua, platform);

// extends
result.browser.wechat = isWechatWebview(ua);
result.browser.wechatVersion = getWechatVersion(ua);
result.browser.weapp = isWeappWebview(ua);

export default result;