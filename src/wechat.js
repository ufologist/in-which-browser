/**
 * Is it wechat webview
 * 
 * @param {string} ua 
 * @return {boolean}
 * @see https://developers.weixin.qq.com/doc/offiaccount/WiFi_via_WeChat/WiFi_Hardware_Authentication_Protocol_Interface_Description.html
 */
export function isWechatWebview(ua) {
    return /micromessenger/i.test(ua);
}

/**
 * Get wechat version
 * 
 * @param {string} ua 
 * @return {string} e.g.: 6.7.3 or empty string
 */
export function getWechatVersion(ua) {
    var wechatVersionResult = ua.match(/\bmicromessenger\/([\d.]+)/i);
    return wechatVersionResult ? wechatVersionResult[1] : '';
}