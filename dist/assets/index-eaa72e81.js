function a(t){return t!=null&&typeof t=="object"&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE}function r(t){var e;if(!a(t))return!1;const n=(e=t.ownerDocument.defaultView)!=null?e:window;return t instanceof n.HTMLElement}function v(t){var e,n;return(n=(e=o(t))==null?void 0:e.defaultView)!=null?n:window}function o(t){return a(t)?t.ownerDocument:document}function g(t){return o(t).activeElement}var u=t=>t.hasAttribute("tabindex"),b=t=>u(t)&&t.tabIndex===-1;function l(t){return!!t.getAttribute("disabled")||!!t.getAttribute("aria-disabled")}function s(t){return t.parentElement&&s(t.parentElement)?!0:t.hidden}function c(t){const e=t.getAttribute("contenteditable");return e!=="false"&&e!=null}function d(t){if(!r(t)||s(t)||l(t))return!1;const{localName:e}=t;if(["input","select","textarea","button"].indexOf(e)>=0)return!0;const i={a:()=>t.hasAttribute("href"),audio:()=>t.hasAttribute("controls"),video:()=>t.hasAttribute("controls")};return e in i?i[e]():c(t)?!0:u(t)}function w(t){return t?r(t)&&d(t)&&!b(t):!1}var f=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],E=f.join(),h=t=>t.offsetWidth>0&&t.offsetHeight>0;function A(t){const e=Array.from(t.querySelectorAll(E));return e.unshift(t),e.filter(n=>d(n)&&h(n))}export{g as a,v as b,A as g,w as i};
