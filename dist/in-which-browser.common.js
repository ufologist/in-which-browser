'use strict';

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
// https://github.com/madrobby/zepto/blob/601372ac4e3f98d502c707bf841589fbc48a3a7d/src/detect.js
function detect(ua, platform) {
  var os = this.os = {},
      browser = this.browser = {},
      webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
      android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
      osx = !!ua.match(/\(Macintosh\; Intel /),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      win = /Win\d{2}|Windows/.test(platform),
      wp = ua.match(/Windows Phone ([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/),
      firefoxos = ua.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
      ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
      webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
      safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/); // Todo: clean this up with a better OS/browser seperation:
  // - discern (more) between multiple browsers on android
  // - decide if kindle fire in silk mode is android or not
  // - Firefox on Android doesn't specify the Android version
  // - possibly devide in os, device and browser hashes

  if (browser.webkit = !!webkit) browser.version = webkit[1];
  if (android) os.android = true, os.version = android[2];
  if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
  if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
  if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
  if (wp) os.wp = true, os.version = wp[1];
  if (webos) os.webos = true, os.version = webos[2];
  if (touchpad) os.touchpad = true;
  if (blackberry) os.blackberry = true, os.version = blackberry[2];
  if (bb10) os.bb10 = true, os.version = bb10[2];
  if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
  if (playbook) browser.playbook = true;
  if (kindle) os.kindle = true, os.version = kindle[1];
  if (silk) browser.silk = true, browser.version = silk[1];
  if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
  if (chrome) browser.chrome = true, browser.version = chrome[1];
  if (firefox) browser.firefox = true, browser.version = firefox[1];
  if (firefoxos) os.firefoxos = true, os.version = firefoxos[1];
  if (ie) browser.ie = true, browser.version = ie[1];

  if (safari && (osx || os.ios || win)) {
    browser.safari = true;
    if (!os.ios) browser.version = safari[1];
  }

  if (webview) browser.webview = true;
  os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));
  os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));
}

/**
 * Is it wechat webview
 * 
 * @param {string} ua 
 * @return {boolean}
 * @see https://developers.weixin.qq.com/doc/offiaccount/WiFi_via_WeChat/WiFi_Hardware_Authentication_Protocol_Interface_Description.html
 */
function isWechatWebview(ua) {
  return /micromessenger/i.test(ua);
}
/**
 * Get wechat version
 * 
 * @param {string} ua 
 * @return {string} e.g.: 6.7.3 or empty string
 */

function getWechatVersion(ua) {
  var wechatVersionResult = ua.match(/\bmicromessenger\/([\d.]+)/i);
  return wechatVersionResult ? wechatVersionResult[1] : '';
}

/**
 * Is it Wxwork webview
 * 
 * @param {string} ua 
 * @return {boolean}
 * @see https://open.work.weixin.qq.com/api/doc/90000/90139/90315#%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E7%9A%84UA
 */
function isWxworkWebview(ua) {
  return /wxwork/i.test(ua);
}
/**
 * Get wxwork version
 * 
 * @param {string} ua 
 * @return {string} e.g.: 2.2.0 or empty string
 */

function getWxworkVersion(ua) {
  var wxworkVersionResult = ua.match(/\bwxwork\/([\d.]+)/i);
  return wxworkVersionResult ? wxworkVersionResult[1] : '';
}

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
function isWeappWebview(ua) {
  return /miniprogram/i.test(ua) || window.__wxjs_environment === 'miniprogram';
}

var ua = window.navigator.userAgent;
var platform = window.navigator.platform; // Zepto detect

var $ = new detect(ua, platform); // extends

$.browser.wechat = isWechatWebview(ua);
$.browser.wechatVersion = getWechatVersion(ua);
$.browser.weapp = isWeappWebview(ua);
$.browser.wxwork = isWxworkWebview(ua);
$.browser.wxworkVersion = getWxworkVersion(ua);

module.exports = $;
