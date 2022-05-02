'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".storybook-button{border:0;border-radius:3em;cursor:pointer;display:inline-block;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;line-height:1}.storybook-button--primary{background-color:#1ea7fd;color:#fff}.storybook-button--secondary{background-color:initial;box-shadow:inset 0 0 0 1px #00000026;color:#333}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}";
styleInject(css_248z$2,{"insertAt":"top"});

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (jsxRuntime.jsx("button", __assign({ type: "button", className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '), style: { backgroundColor: backgroundColor } }, props, { children: label })));
};

var css_248z$1 = ".wrapper{align-items:center;border-bottom:1px solid #0000001a;display:flex;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;justify-content:space-between;padding:15px 20px}h1,svg{display:inline-block;vertical-align:top}h1{font-size:20px;font-weight:900;line-height:1;margin:6px 0 6px 10px}button+button{margin-left:10px}.welcome{color:#333;font-size:14px;margin-right:10px}";
styleInject(css_248z$1,{"insertAt":"top"});

var Header = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (jsxRuntime.jsx("header", { children: jsxRuntime.jsxs("div", __assign({ className: "wrapper" }, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsxs("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: [jsxRuntime.jsx("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }), jsxRuntime.jsx("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }), jsxRuntime.jsx("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" })] })) })), jsxRuntime.jsx("h1", __assign({ className: "text-3xl font-bold underline bg-red-600 text-yellow-300" }, { children: "Hello world!" }))] }), jsxRuntime.jsx("div", { children: user ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("span", __assign({ className: "welcome" }, { children: ["Welcome, ", jsxRuntime.jsx("b", { children: user.name }), "!"] })), jsxRuntime.jsx(Button, { size: "small", onClick: onLogout, label: "Log out" })] })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Button, { size: "small", onClick: onLogin, label: "Log in" }), jsxRuntime.jsx(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })] })) })] })) }));
};

var css_248z = "section{color:#333;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:24px;margin:0 auto;max-width:600px;padding:48px 20px}section h2{display:inline-block;font-size:32px;font-weight:900;line-height:1;margin:0 0 4px;vertical-align:top}section p{margin:1em 0}section a{color:#1ea7fd;text-decoration:none}section ul{margin:1em 0;padding-left:30px}section li{margin-bottom:8px}section .tip{background:#e7fdd8;border-radius:1em;color:#66bf3c;display:inline-block;font-size:11px;font-weight:700;line-height:12px;margin-right:10px;padding:4px 12px;vertical-align:top}section .tip-wrapper{font-size:13px;line-height:20px;margin-bottom:40px;margin-top:40px}section .tip-wrapper svg{display:inline-block;height:12px;margin-right:4px;margin-top:3px;vertical-align:top;width:12px}section .tip-wrapper svg path{fill:#1ea7fd}";
styleInject(css_248z,{"insertAt":"top"});

var Page = function () {
    var _a = React__default["default"].useState(), user = _a[0], setUser = _a[1];
    return (jsxRuntime.jsxs("article", { children: [jsxRuntime.jsx(Header, { user: user, onLogin: function () { return setUser({ name: 'Jane Doe' }); }, onLogout: function () { return setUser(undefined); }, onCreateAccount: function () { return setUser({ name: 'Jane Doe' }); } }), jsxRuntime.jsxs("section", __assign({ className: 'bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg' }, { children: [jsxRuntime.jsx("h2", { children: "Pages in Storybook" }), jsxRuntime.jsxs("p", { children: ["We recommend building UIs with a", ' ', jsxRuntime.jsx("a", __assign({ href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" }, { children: jsxRuntime.jsx("strong", { children: "component-driven" }) })), ' ', "process starting with atomic components and ending with pages."] }), jsxRuntime.jsx("p", { children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:" }), jsxRuntime.jsxs("ul", { children: [jsxRuntime.jsx("li", { children: "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories" }), jsxRuntime.jsx("li", { children: "Assemble data in the page component from your services. You can mock these services out using Storybook." })] }), jsxRuntime.jsxs("p", { children: ["Get a guided tutorial on component-driven development at", ' ', jsxRuntime.jsx("a", __assign({ href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer" }, { children: "Storybook tutorials" })), ". Read more in the", ' ', jsxRuntime.jsx("a", __assign({ href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, { children: "docs" })), "."] }), jsxRuntime.jsxs("div", __assign({ className: "tip-wrapper" }, { children: [jsxRuntime.jsx("span", __assign({ className: "tip" }, { children: "Tip" })), " Adjust the width of the canvas with the", ' ', jsxRuntime.jsx("svg", __assign({ width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: jsxRuntime.jsx("path", { d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z", id: "a", fill: "#999" }) })) })), "Viewports addon in the toolbar"] }))] }))] }));
};

var returnLibrary = function () {
    return {
        Header: Header,
        Button: Button,
        Page: Page
        // you can add here other components that you want to export
    };
};
var index = returnLibrary();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

module.exports = index;
