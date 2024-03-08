"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[23258],{92591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(85893),s=t(11151);const o={id:"preventing-going-back",title:"Preventing going back",sidebar_label:"Preventing going back"},r=void 0,a={id:"preventing-going-back",title:"Preventing going back",description:"Sometimes you may want to prevent the user from leaving a screen, for example, if there are unsaved changes, you might want to show a confirmation dialog. You can achieve it by using the beforeRemove event.",source:"@site/versioned_docs/version-6.x/preventing-going-back.md",sourceDirName:".",slug:"/preventing-going-back",permalink:"/docs/preventing-going-back",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/preventing-going-back.md",tags:[],version:"6.x",frontMatter:{id:"preventing-going-back",title:"Preventing going back",sidebar_label:"Preventing going back"},sidebar:"docs",previous:{title:"Animating elements between screens",permalink:"/docs/shared-element-transitions"},next:{title:"Call a function when focused screen changes",permalink:"/docs/function-after-focusing-screen"}},c={},d=[{value:"Limitations",id:"limitations",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Sometimes you may want to prevent the user from leaving a screen, for example, if there are unsaved changes, you might want to show a confirmation dialog. You can achieve it by using the ",(0,i.jsx)(n.code,{children:"beforeRemove"})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["The event listener receives the ",(0,i.jsx)(n.code,{children:"action"})," that triggered it. You can dispatch this action again after confirmation, or check the action object to determine what to do."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)("samp",{id:"prevent-going-back"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function EditText({ navigation }) {\n  const [text, setText] = React.useState('');\n  const hasUnsavedChanges = Boolean(text);\n\n  React.useEffect(\n    () =>\n      navigation.addListener('beforeRemove', (e) => {\n        if (!hasUnsavedChanges) {\n          // If we don't have unsaved changes, then we don't need to do anything\n          return;\n        }\n\n        // Prevent default behavior of leaving the screen\n        e.preventDefault();\n\n        // Prompt the user before leaving the screen\n        Alert.alert(\n          'Discard changes?',\n          'You have unsaved changes. Are you sure to discard them and leave the screen?',\n          [\n            { text: \"Don't leave\", style: 'cancel', onPress: () => {} },\n            {\n              text: 'Discard',\n              style: 'destructive',\n              // If the user confirmed, then we dispatch the action we blocked earlier\n              // This will continue the action that had triggered the removal of the screen\n              onPress: () => navigation.dispatch(e.data.action),\n            },\n          ]\n        );\n      }),\n    [navigation, hasUnsavedChanges]\n  );\n\n  return (\n    <TextInput\n      value={text}\n      placeholder=\"Type something\u2026\"\n      onChangeText={setText}\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,i.jsx)("source",{src:"/assets/behavior/prevent-closing.mp4"})}),"\n",(0,i.jsx)(n.p,{children:"Previously, the way to do this was to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Override back button in header"}),"\n",(0,i.jsx)(n.li,{children:"Disable back swipe gesture"}),"\n",(0,i.jsx)(n.li,{children:"Override system back button/gesture on Android"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However, this approach has many important differences in addition to being less code:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It's not coupled to any specific buttons, going back from custom buttons will trigger it as well"}),"\n",(0,i.jsx)(n.li,{children:"It's not coupled to any specific actions, any action that removes the route from state will trigger it"}),"\n",(0,i.jsx)(n.li,{children:"It works across nested navigators, e.g. if the screen is being removed due to an action in parent navigator"}),"\n",(0,i.jsx)(n.li,{children:"User can still swipe back in the stack navigator, however, the swipe will be cancelled if the event was prevented"}),"\n",(0,i.jsx)(n.li,{children:"It's possible to continue the same action that triggered the event"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.p,{children:["There are couple of limitations to be aware of when using the ",(0,i.jsx)(n.code,{children:"beforeRemove"})," event. The event is ",(0,i.jsx)(n.strong,{children:"only"})," triggered whenever a screen is being removed due to a navigation state change. For example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The user pressed back button on a screen in a stack."}),"\n",(0,i.jsx)(n.li,{children:"The user performed a swipe back gesture."}),"\n",(0,i.jsxs)(n.li,{children:["Some action such as ",(0,i.jsx)(n.code,{children:"pop"})," or ",(0,i.jsx)(n.code,{children:"reset"})," was dispatched which removes the screen from the state."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This event is ",(0,i.jsx)(n.strong,{children:"not"})," triggered when a screen is being unfocused but not removed. For example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The user pushed a new screen on top of the screen with the listener in a stack."}),"\n",(0,i.jsx)(n.li,{children:"The user navigated from one tab/drawer screen to another tab/drawer screen."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The event is also ",(0,i.jsx)(n.strong,{children:"not"})," triggered when the user is exiting the screen due to actions not controlled by the navigation state:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The user closes the app (e.g. by pressing the back button on the home screen, closing the tab in the browser, closing it from app switcher etc.). You can additionally use ",(0,i.jsx)(n.a,{href:"https://reactnative.dev/docs/backhandler",children:(0,i.jsx)(n.code,{children:"hardwareBackPress"})})," event on Android, ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/web/api/window/beforeunload_event",children:(0,i.jsx)(n.code,{children:"beforeunload"})})," event on Web etc. to handle some of these cases."]}),"\n",(0,i.jsx)(n.li,{children:"A screen gets unmounted due to conditional rendering, or due to a parent component being unmounted."}),"\n",(0,i.jsxs)(n.li,{children:["A screen gets unmounted due to usage of ",(0,i.jsx)(n.code,{children:"unmountOnBlur"})," options with ",(0,i.jsx)(n.a,{href:"/docs/bottom-tab-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})}),", ",(0,i.jsx)(n.a,{href:"/docs/drawer-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/drawer"})})," etc."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the above scenarios, this feature also doesn't work properly with ",(0,i.jsx)(n.a,{href:"/docs/native-stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})}),". To make this work, you need to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Disable the swipe gesture for the screen (",(0,i.jsx)(n.code,{children:"gestureEnabled: false"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Override the native back button in the header with a custom back button (",(0,i.jsx)(n.code,{children:"headerLeft: (props) => <CustomBackButton {...props} />"}),")."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);