# in-which-browser

[![NPM version][npm-image]][npm-url] [![Build Status][ci-status-image]][ci-status-url] [![Coverage Status][coverage-status-image]][coverage-status-url] [![Known Vulnerabilities][vulnerabilities-status-image]][vulnerabilities-status-url] [![changelog][changelog-image]][changelog-url] [![license][license-image]][license-url]

[vulnerabilities-status-image]: https://snyk.io/test/npm/in-which-browser/badge.svg
[vulnerabilities-status-url]: https://snyk.io/test/npm/in-which-browser
[ci-status-image]: https://travis-ci.org/ufologist/in-which-browser.svg?branch=master
[ci-status-url]: https://travis-ci.org/ufologist/in-which-browser
[coverage-status-image]: https://coveralls.io/repos/github/ufologist/in-which-browser/badge.svg?branch=master
[coverage-status-url]: https://coveralls.io/github/ufologist/in-which-browser
[npm-image]: https://img.shields.io/npm/v/in-which-browser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/in-which-browser
[license-image]: https://img.shields.io/github/license/ufologist/in-which-browser.svg
[license-url]: https://github.com/ufologist/in-which-browser/blob/master/LICENSE
[changelog-image]: https://img.shields.io/badge/CHANGE-LOG-blue.svg?style=flat-square
[changelog-url]: https://github.com/ufologist/in-which-browser/blob/master/CHANGELOG.md

[![npm-image](https://nodei.co/npm/in-which-browser.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/in-which-browser)

Detect browser user agent
- [Zepto.js Detect methods](https://zeptojs.com/#detect)
  - `inWhichBrowser.os`
  - `inWhichBrowser.browser`
- extends
  - `inWhichBrowser.browser.wechat`
  - `inWhichBrowser.browser.wechatVersion`
  - `inWhichBrowser.browser.weapp`

## Example

```javascript
import inWhichBrowser from 'in-which-browser';

console.log(inWhichBrowser.os.ios);
console.log(inWhichBrowser.os.android);

console.log(inWhichBrowser.browser.wechat);
console.log(inWhichBrowser.browser.wechatVersion);
console.log(inWhichBrowser.browser.weapp);
```

## APIDoc

* [ESDoc](https://doc.esdoc.org/github.com/ufologist/in-which-browser/)

## 为什么造轮子

找了很多库都不太好使, 想到 `Zepto` 其实已经很成熟了, 因此"抽取"了它的 `detect` 模块, 再扩展自己的需求

例如
* [detector](https://github.com/hotoo/detector)
* [bowser](https://github.com/lancedikson/bowser)
* [UAParser.js](https://github.com/faisalman/ua-parser-js)