'use strict'

var jsxRuntime = require('react/jsx-runtime')
var react = require('react')
var react$1 = require('@headlessui/react')
var outline = require('@heroicons/react/outline')

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

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    }
  return __assign.apply(this, arguments)
}

function __rest(s, e) {
  var t = {}
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]]
    }
  return t
}

var e = [],
  t = []
function n(n, r) {
  if (n && 'undefined' != typeof document) {
    var a,
      s = !0 === r.prepend ? 'prepend' : 'append',
      d = !0 === r.singleTag,
      i =
        'string' == typeof r.container
          ? document.querySelector(r.container)
          : document.getElementsByTagName('head')[0]
    if (d) {
      var u = e.indexOf(i)
      ;-1 === u && ((u = e.push(i) - 1), (t[u] = {})),
        (a = t[u] && t[u][s] ? t[u][s] : (t[u][s] = c()))
    } else a = c()
    65279 === n.charCodeAt(0) && (n = n.substring(1)),
      a.styleSheet ? (a.styleSheet.cssText += n) : a.appendChild(document.createTextNode(n))
  }
  function c() {
    var e = document.createElement('style')
    if ((e.setAttribute('type', 'text/css'), r.attributes))
      for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++)
        e.setAttribute(t[n], r.attributes[t[n]])
    var a = 'prepend' === s ? 'afterbegin' : 'beforeend'
    return i.insertAdjacentElement(a, e), e
  }
}

var css$2 =
  ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n"
n(css$2, {})

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
  var _b = _a.primary,
    primary = _b === void 0 ? false : _b,
    _c = _a.size,
    size = _c === void 0 ? 'medium' : _c,
    backgroundColor = _a.backgroundColor,
    label = _a.label,
    props = __rest(_a, ['primary', 'size', 'backgroundColor', 'label'])
  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return jsxRuntime.jsx(
    'button',
    __assign(
      {
        type: 'button',
        className: ['storybook-button', 'storybook-button--'.concat(size), mode].join(' '),
        style: { backgroundColor: backgroundColor },
      },
      props,
      { children: label }
    )
  )
}

var css$1 =
  ".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton+button {\n  margin-left: 10px;\n}\n\n.welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}"
n(css$1, {})

var Header = function (_a) {
  var user = _a.user,
    onLogin = _a.onLogin,
    onLogout = _a.onLogout,
    onCreateAccount = _a.onCreateAccount
  return jsxRuntime.jsx('header', {
    children: jsxRuntime.jsxs(
      'div',
      __assign(
        { className: 'wrapper' },
        {
          children: [
            jsxRuntime.jsxs('div', {
              children: [
                jsxRuntime.jsx(
                  'svg',
                  __assign(
                    {
                      width: '32',
                      height: '32',
                      viewBox: '0 0 32 32',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                    {
                      children: jsxRuntime.jsxs(
                        'g',
                        __assign(
                          { fill: 'none', fillRule: 'evenodd' },
                          {
                            children: [
                              jsxRuntime.jsx('path', {
                                d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                                fill: '#FFF',
                              }),
                              jsxRuntime.jsx('path', {
                                d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                                fill: '#555AB9',
                              }),
                              jsxRuntime.jsx('path', {
                                d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                                fill: '#91BAF8',
                              }),
                            ],
                          }
                        )
                      ),
                    }
                  )
                ),
                jsxRuntime.jsx('h1', { children: 'Hello world!' }),
              ],
            }),
            jsxRuntime.jsx('div', {
              children: user
                ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
                    children: [
                      jsxRuntime.jsxs(
                        'span',
                        __assign(
                          { className: 'welcome' },
                          {
                            children: [
                              'Welcome, ',
                              jsxRuntime.jsx('b', { children: user.name }),
                              '!',
                            ],
                          }
                        )
                      ),
                      jsxRuntime.jsx(Button, {
                        size: 'small',
                        onClick: onLogout,
                        label: 'Log out',
                      }),
                    ],
                  })
                : jsxRuntime.jsxs(jsxRuntime.Fragment, {
                    children: [
                      jsxRuntime.jsx(Button, { size: 'small', onClick: onLogin, label: 'Log in' }),
                      jsxRuntime.jsx(Button, {
                        primary: true,
                        size: 'small',
                        onClick: onCreateAccount,
                        label: 'Sign up',
                      }),
                    ],
                  }),
            }),
          ],
        }
      )
    ),
  })
}

var css =
  '/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.translate-y-4 {\n  --tw-translate-y: 1rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.rounded-b {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n.bg-cyan-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 182 212 / var(--tw-bg-opacity));\n}\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}\n.p-8 {\n  padding: 2rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-5 {\n  padding-top: 1.25rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.leading-6 {\n  line-height: 1.5rem;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-cyan-500\\/50 {\n  --tw-shadow-color: rgb(6 182 212 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.hover\\:bg-red-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.focus\\:z-10:focus {\n  z-index: 10;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-red-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity));\n}\n.focus\\:ring-indigo-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));\n}\n.focus\\:ring-blue-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:border-gray-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(107 114 128 / var(--tw-border-opacity));\n  }\n\n  .dark\\:bg-blue-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n\n  .dark\\:text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }\n\n  .dark\\:hover\\:bg-blue-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:bg-gray-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:hover\\:text-white:hover {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n\n  .dark\\:focus\\:ring-blue-800:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));\n  }\n\n  .dark\\:focus\\:ring-gray-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));\n  }\n}\n@media (min-width: 640px) {\n\n  .sm\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .sm\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .sm\\:ml-4 {\n    margin-left: 1rem;\n  }\n\n  .sm\\:ml-3 {\n    margin-left: 0.75rem;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .sm\\:w-full {\n    width: 100%;\n  }\n\n  .sm\\:w-10 {\n    width: 2.5rem;\n  }\n\n  .sm\\:w-auto {\n    width: auto;\n  }\n\n  .sm\\:max-w-lg {\n    max-width: 32rem;\n  }\n\n  .sm\\:translate-y-0 {\n    --tw-translate-y: 0px;\n    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .sm\\:scale-95 {\n    --tw-scale-x: .95;\n    --tw-scale-y: .95;\n    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .sm\\:scale-100 {\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .sm\\:flex-row-reverse {\n    flex-direction: row-reverse;\n  }\n\n  .sm\\:items-start {\n    align-items: flex-start;\n  }\n\n  .sm\\:items-center {\n    align-items: center;\n  }\n\n  .sm\\:p-0 {\n    padding: 0px;\n  }\n\n  .sm\\:p-6 {\n    padding: 1.5rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:pb-4 {\n    padding-bottom: 1rem;\n  }\n\n  .sm\\:text-left {\n    text-align: left;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n\n  .md\\:h-full {\n    height: 100%;\n  }\n\n  .md\\:h-auto {\n    height: auto;\n  }\n}'
n(css, {})

var Card = function (_a) {
  _a.user
  return jsxRuntime.jsxs(
    'div',
    __assign(
      { className: 'w-full bg-white rounded-md shadow text-xs' },
      {
        children: [
          jsxRuntime.jsx(
            'div',
            __assign(
              { className: 'border-b border-gray-200 border-solid px-8 py-5 font-bold' },
              { children: 'header\u30C6\u30AD\u30B9\u30C8' }
            )
          ),
          jsxRuntime.jsx(
            'div',
            __assign({ className: 'p-8' }, { children: 'body\u30C6\u30AD\u30B9\u30C8' })
          ),
        ],
      }
    )
  )
}

var Modal = function (_a) {
  var label = _a.label
  __rest(_a, ['label'])
  var _b = react.useState(true),
    open = _b[0],
    setOpen = _b[1]
  var cancelButtonRef = react.useRef(null)
  return jsxRuntime.jsx(
    react$1.Transition.Root,
    __assign(
      { show: open, as: react.Fragment },
      {
        children: jsxRuntime.jsxs(
          react$1.Dialog,
          __assign(
            {
              as: 'div',
              className: 'relative z-10',
              initialFocus: cancelButtonRef,
              onClose: setOpen,
            },
            {
              children: [
                jsxRuntime.jsx(
                  react$1.Transition.Child,
                  __assign(
                    {
                      as: react.Fragment,
                      enter: 'ease-out duration-300',
                      enterFrom: 'opacity-0',
                      enterTo: 'opacity-100',
                      leave: 'ease-in duration-200',
                      leaveFrom: 'opacity-100',
                      leaveTo: 'opacity-0',
                    },
                    {
                      children: jsxRuntime.jsx('div', {
                        className: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
                      }),
                    }
                  )
                ),
                jsxRuntime.jsx(
                  'div',
                  __assign(
                    { className: 'fixed z-10 inset-0 overflow-y-auto' },
                    {
                      children: jsxRuntime.jsx(
                        'div',
                        __assign(
                          {
                            className:
                              'flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0',
                          },
                          {
                            children: jsxRuntime.jsx(
                              react$1.Transition.Child,
                              __assign(
                                {
                                  as: react.Fragment,
                                  enter: 'ease-out duration-300',
                                  enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                                  enterTo: 'opacity-100 translate-y-0 sm:scale-100',
                                  leave: 'ease-in duration-200',
                                  leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
                                  leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
                                },
                                {
                                  children: jsxRuntime.jsxs(
                                    react$1.Dialog.Panel,
                                    __assign(
                                      {
                                        className:
                                          'relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full',
                                      },
                                      {
                                        children: [
                                          jsxRuntime.jsx(
                                            'div',
                                            __assign(
                                              {
                                                className: 'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
                                              },
                                              {
                                                children: jsxRuntime.jsxs(
                                                  'div',
                                                  __assign(
                                                    { className: 'sm:flex sm:items-start' },
                                                    {
                                                      children: [
                                                        jsxRuntime.jsx(
                                                          'div',
                                                          __assign(
                                                            {
                                                              className:
                                                                'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10',
                                                            },
                                                            {
                                                              children: jsxRuntime.jsx(
                                                                outline.ExclamationIcon,
                                                                {
                                                                  className: 'h-6 w-6 text-red-600',
                                                                  'aria-hidden': 'true',
                                                                }
                                                              ),
                                                            }
                                                          )
                                                        ),
                                                        jsxRuntime.jsxs(
                                                          'div',
                                                          __assign(
                                                            {
                                                              className:
                                                                'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left',
                                                            },
                                                            {
                                                              children: [
                                                                jsxRuntime.jsx(
                                                                  react$1.Dialog.Title,
                                                                  __assign(
                                                                    {
                                                                      as: 'h3',
                                                                      className:
                                                                        'text-lg leading-6 font-medium text-gray-900',
                                                                    },
                                                                    {
                                                                      children:
                                                                        'Deactivate account',
                                                                    }
                                                                  )
                                                                ),
                                                                jsxRuntime.jsx(
                                                                  'div',
                                                                  __assign(
                                                                    { className: 'mt-2' },
                                                                    {
                                                                      children: jsxRuntime.jsx(
                                                                        'p',
                                                                        __assign(
                                                                          {
                                                                            className:
                                                                              'text-sm text-gray-500',
                                                                          },
                                                                          { children: label }
                                                                        )
                                                                      ),
                                                                    }
                                                                  )
                                                                ),
                                                              ],
                                                            }
                                                          )
                                                        ),
                                                      ],
                                                    }
                                                  )
                                                ),
                                              }
                                            )
                                          ),
                                          jsxRuntime.jsxs(
                                            'div',
                                            __assign(
                                              {
                                                className:
                                                  'bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse',
                                              },
                                              {
                                                children: [
                                                  jsxRuntime.jsx(
                                                    'button',
                                                    __assign(
                                                      {
                                                        type: 'button',
                                                        className:
                                                          'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm',
                                                        onClick: function () {
                                                          return setOpen(false)
                                                        },
                                                      },
                                                      { children: 'Deactivate' }
                                                    )
                                                  ),
                                                  jsxRuntime.jsx(
                                                    'button',
                                                    __assign(
                                                      {
                                                        type: 'button',
                                                        className:
                                                          'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm',
                                                        onClick: function () {
                                                          return setOpen(false)
                                                        },
                                                        ref: cancelButtonRef,
                                                      },
                                                      { children: 'Cancel' }
                                                    )
                                                  ),
                                                ],
                                              }
                                            )
                                          ),
                                        ],
                                      }
                                    )
                                  ),
                                }
                              )
                            ),
                          }
                        )
                      ),
                    }
                  )
                ),
              ],
            }
          )
        ),
      }
    )
  )
}

var Test = function (_a) {
  _a.user
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx('p', {
      children: '\u30B3\u30E1\u30F3\u30C8\u30A2\u30A6\u30C8\u3057\u3066\u307E\u3059',
    }),
  })
}

var returnLibrary = function () {
  return {
    Header: Header,
    Button: Button,
    Card: Card,
    Modal: Modal,
    Test: Test,
    // you can add here other components that you want to export
  }
}
var index = returnLibrary()
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

module.exports = index
