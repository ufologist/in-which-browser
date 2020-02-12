/**
 * Is it weapp webview
 * 
 * 1. 在网页内可通过window.__wxjs_environment变量判断是否在小程序环境，建议在WeixinJSBridgeReady回调中使用，也可以使用JSSDK 1.3.2提供的getEnv接口。
 * 2. 从微信7.0.0开始，可以通过判断userAgent中包含miniProgram字样来判断小程序web-view环境
 * 
 * @param {string} ua 
 * @return {boolean}
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
export default function isWeappWebview(ua) {
    return /miniprogram/i.test(ua) || window.__wxjs_environment === 'miniprogram';
}