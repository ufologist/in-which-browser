/**
 * Is it Wxwork webview
 * 
 * @param {string} ua 
 * @return {boolean}
 * @see https://open.work.weixin.qq.com/api/doc/90000/90139/90315#%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E7%9A%84UA
 */
export function isWxworkWebview(ua) {
    return /wxwork/i.test(ua);
}

/**
 * Get wxwork version
 * 
 * @param {string} ua 
 * @return {string} e.g.: 2.2.0 or empty string
 */
export function getWxworkVersion(ua) {
    var wxworkVersionResult = ua.match(/\bwxwork\/([\d.]+)/i);
    return wxworkVersionResult ? wxworkVersionResult[1] : '';
}