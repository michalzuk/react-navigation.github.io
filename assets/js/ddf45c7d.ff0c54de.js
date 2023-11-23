"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[80321],{47050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151);const i={id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},c=void 0,o={id:"screen-tracking",title:"Screen tracking",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK.",source:"@site/versioned_docs/version-1.x/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/docs/1.x/screen-tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/screen-tracking.md",tags:[],version:"1.x",frontMatter:{id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},sidebar:"docs",previous:{title:"Deep linking",permalink:"/docs/1.x/deep-linking"},next:{title:"Redux integration",permalink:"/docs/1.x/redux-integration"}},s={},d=[{value:"Screen tracking with Redux",id:"screen-tracking-with-redux",level:3},{value:"Create Redux store and apply the above middleware",id:"create-redux-store-and-apply-the-above-middleware",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK."}),"\n",(0,r.jsxs)(n.p,{children:["When using built-in navigation container, we can use ",(0,r.jsx)(n.code,{children:"onNavigationStateChange"})," to track the screen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\n// gets the current screen from navigation state\nfunction getCurrentRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getCurrentRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = StackNavigator(AppRouteConfigs);\n\nexport default () => (\n  <AppNavigator\n    onNavigationStateChange={(prevState, currentState) => {\n      const currentScreen = getCurrentRouteName(currentState);\n      const prevScreen = getCurrentRouteName(prevState);\n\n      if (prevScreen !== currentScreen) {\n        // the line below uses the Google Analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        tracker.trackScreenView(currentScreen);\n      }\n    }}\n  />\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"screen-tracking-with-redux",children:"Screen tracking with Redux"}),"\n",(0,r.jsxs)(n.p,{children:["When using Redux, we can write a Redux middleware to track the screen. For this purpose,\nwe will reuse ",(0,r.jsx)(n.code,{children:"getCurrentRouteName"})," from the previous section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { NavigationActions } from 'react-navigation';\nimport { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\nconst screenTracking = ({ getState }) => next => (action) => {\n  if (\n    action.type !== NavigationActions.NAVIGATE\n    && action.type !== NavigationActions.BACK\n  ) {\n    return next(action);\n  }\n\n  const currentScreen = getCurrentRouteName(getState().navigation);\n  const result = next(action);\n  const nextScreen = getCurrentRouteName(getState().navigation);\n  if (nextScreen !== currentScreen) {\n    // the line below uses the Google Analytics tracker\n    // change the tracker here to use other Mobile analytics SDK.\n    tracker.trackScreenView(nextScreen);\n  }\n  return result;\n};\n\nexport default screenTracking;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-redux-store-and-apply-the-above-middleware",children:"Create Redux store and apply the above middleware"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"screenTracking"})," middleware can be applied to the store during its creation. See ",(0,r.jsx)(n.a,{href:"/docs/1.x/redux-integration",children:"Redux Integration"})," for details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const store = createStore(\n  combineReducers({\n    navigation: navigationReducer,\n    ...\n  }),\n  applyMiddleware(\n    screenTracking,\n    ...\n    ),\n);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const a={},i=r.createContext(a);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);