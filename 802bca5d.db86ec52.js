(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(0),n(426)),i={title:"3.0 release candidate",author:"Brent Vatne",author_url:"https://twitter.com/notbrent",author_title:"Core Team",author_image_url:"https://avatars0.githubusercontent.com/u/90494?s=200&v=4",tags:["release","announcement"]},c={permalink:"/blog/2018/11/01/react-navigation-3.0-rc",source:"@site/blog/2018-11-01-react-navigation-3.0-rc.md",description:"We are excited to announce the release candidate of version 3.0 today!",date:"2018-11-01T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"announcement",permalink:"/blog/tags/announcement"}],title:"3.0 release candidate",readingTime:7.97,truncated:!0,prevItem:{title:"React Navigation 3.0",permalink:"/blog/2018/11/17/react-navigation-3.0"},nextItem:{title:"React Navigation 2.0",permalink:"/blog/2018/05/07/react-navigation-2.0"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are excited to announce the release candidate of version 3.0 today!"),Object(o.b)("p",null,"This is the first release where React Navigation depends on a native module outside of React Native core: it now depends on react-native-gesture-handler. This library provides an excellent set of primitives for leveraging the operating systems\u2019 native gesture APIs and has enabled us to fix a variety of issues with stack and drawer navigators. React Navigation also depends on react-native-screens, but you don\u2019t need to install the native module if you prefer not to use it (we have a blog post coming soon that will explain what react-native-screens is and why you may want to use it, or you can watch ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Z0Jl1KCWiag"}),"this talk")," by the author of the library)."))}s.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);