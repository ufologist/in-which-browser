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
var $ = new Detect(ua, platform);

// extends
$.browser.wechat = isWechatWebview(ua);
$.browser.wechatVersion = getWechatVersion(ua);
$.browser.weapp = isWeappWebview(ua);

export default $;