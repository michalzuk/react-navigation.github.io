"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[49810],{41524:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=r(85893),i=r(11151);const a={id:"screen",title:"Screen",sidebar_label:"Screen"},t=void 0,o={id:"screen",title:"Screen",description:"Screen components are used to configure various aspects of screens inside a navigator.",source:"@site/versioned_docs/version-7.x/screen.md",sourceDirName:".",slug:"/screen",permalink:"/docs/7.x/screen",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/screen.md",tags:[],version:"7.x",frontMatter:{id:"screen",title:"Screen",sidebar_label:"Screen"},sidebar:"docs",previous:{title:"Group",permalink:"/docs/7.x/group"},next:{title:"Options for screens",permalink:"/docs/7.x/screen-options"}},c={},d=[{value:"Props",id:"props",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"<code>initialParams</code>",id:"initialparams",level:3},{value:"<code>getId</code>",id:"getid",level:3},{value:"<code>component</code>",id:"component",level:3},{value:"<code>getComponent</code>",id:"getcomponent",level:3},{value:"<code>children</code>",id:"children",level:3},{value:"<code>navigationKey</code>",id:"navigationkey",level:3},{value:"<code>listeners</code>",id:"listeners",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Screen"})," components are used to configure various aspects of screens inside a navigator."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Screen"})," is returned from a ",(0,s.jsx)(n.code,{children:"createXNavigator"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After creating the navigator, it can be used as children of the ",(0,s.jsx)(n.code,{children:"Navigator"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n'})}),"\n",(0,s.jsx)(n.p,{children:"You need to provide at least a name and a component to render for each screen."}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsx)(n.p,{children:"The name to use for the screen. It accepts a string:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Profile" component={ProfileScreen} />\n'})}),"\n",(0,s.jsx)(n.p,{children:"This name is used to navigate to the screen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"navigation.navigate('Profile');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is also used for the ",(0,s.jsx)(n.code,{children:"name"})," property in the ",(0,s.jsx)(n.a,{href:"/docs/7.x/route-prop",children:(0,s.jsx)(n.code,{children:"route"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"While it is supported, we recommend to avoid spaces or special characters in screen names and keep them simple."}),"\n",(0,s.jsx)(n.h3,{id:"options",children:(0,s.jsx)(n.code,{children:"options"})}),"\n",(0,s.jsx)(n.p,{children:"Options to configure how the screen gets presented in the navigator. It accepts either an object or a function returning an object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  name=\"Profile\"\n  component={ProfileScreen}\n  options={{\n    title: 'Awesome app',\n  }}\n/>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you pass a function, it'll receive the ",(0,s.jsx)(n.a,{href:"/docs/7.x/route-prop",children:(0,s.jsx)(n.code,{children:"route"})})," and ",(0,s.jsx)(n.a,{href:"/docs/7.x/navigation-prop",children:(0,s.jsx)(n.code,{children:"navigation"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Profile"\n  component={ProfileScreen}\n  options={({ route, navigation }) => ({\n    title: route.params.userId,\n  })}\n/>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/7.x/screen-options",children:"Options for screens"})," for more details and examples."]}),"\n",(0,s.jsx)(n.h3,{id:"initialparams",children:(0,s.jsx)(n.code,{children:"initialParams"})}),"\n",(0,s.jsxs)(n.p,{children:["Initial params to use for the screen. If a screen is used as ",(0,s.jsx)(n.code,{children:"initialRouteName"}),", it'll contain the params from ",(0,s.jsx)(n.code,{children:"initialParams"}),". If you navigate to a new screen, the params passed are shallow merged with the initial params."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Details"\n  component={DetailsScreen}\n  initialParams={{ itemId: 42 }}\n/>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"getid",children:(0,s.jsx)(n.code,{children:"getId"})}),"\n",(0,s.jsx)(n.p,{children:"Callback to return an unique ID to use for the screen. It receives an object with the route params:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Profile"\n  component={ProfileScreen}\n  getId={({ params }) => params.userId}\n/>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"navigate('ScreenName', params)"})," updates the current screen if the screen name matches, otherwise adds a new screen in a stack navigator. So if you're on ",(0,s.jsx)(n.code,{children:"ScreenName"})," and navigate to ",(0,s.jsx)(n.code,{children:"ScreenName"})," again, it won't add a new screen even if the params are different - it'll update the current screen with the new params instead:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Let's say you're on `Home` screen\n// Then you navigate to `Profile` screen with `userId: 1`\nnavigation.navigate('Profile', { userId: 1 });\n\n// Now the stack will have: `Home` -> `Profile` with `userId: 1`\n\n// Then you navigate to `Profile` screen again with `userId: 2`\nnavigation.navigate('Profile', { userId: 2 });\n\n// The stack will now have: `Home` -> `Profile` with `userId: 2`\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you specify ",(0,s.jsx)(n.code,{children:"getId"})," and it doesn't return ",(0,s.jsx)(n.code,{children:"undefined"}),", the screen is identified by both the screen name and the returned ID. Which means that if you're on ",(0,s.jsx)(n.code,{children:"ScreenName"})," and navigate to ",(0,s.jsx)(n.code,{children:"ScreenName"})," again with different params - and return a different ID from the ",(0,s.jsx)(n.code,{children:"getId"})," callback, it'll add a new screen to the stack:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Let's say you're on `Home` screen\n// Then you navigate to `Profile` screen with `userId: 1`\nnavigation.navigate('Profile', { userId: 1 });\n\n// Now the stack will have: `Home` -> `Profile` with `userId: 1`\n\n// Then you navigate to `Profile` screen again with `userId: 2`\nnavigation.navigate('Profile', { userId: 2 });\n\n// The stack will now have: `Home` -> `Profile` with `userId: 1` -> `Profile` with `userId: 2`\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"getId"})," callback can also be used to ensure that the screen with the same ID doesn't appear multiple times in the stack:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Let's say you have a stack with the screens: `Home` -> `Profile` with `userId: 1` -> `Settings`\n// Then you navigate to `Profile` screen with `userId: 1` again\nnavigation.navigate('Profile', { userId: 1 });\n\n// Now the stack will have: `Home` -> `Profile` with `userId: 1`\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above examples, ",(0,s.jsx)(n.code,{children:"params.userId"})," is used as an ID, subsequent navigation to the screen with the same ",(0,s.jsx)(n.code,{children:"userId"})," will navigate to the existing screen instead of adding a new one to the stack. If the navigation was with a different ",(0,s.jsx)(n.code,{children:"userId"}),", then it'll add a new screen."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"getId"})," is specified in a tab or drawer navigator, the screen will remount if the ID changes."]}),"\n",(0,s.jsx)(n.h3,{id:"component",children:(0,s.jsx)(n.code,{children:"component"})}),"\n",(0,s.jsx)(n.p,{children:"The React Component to render for the screen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Profile" component={ProfileScreen} />\n'})}),"\n",(0,s.jsx)(n.h3,{id:"getcomponent",children:(0,s.jsx)(n.code,{children:"getComponent"})}),"\n",(0,s.jsx)(n.p,{children:"Callback to return the React Component to render for the screen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  name=\"Profile\"\n  getComponent={() => require('./ProfileScreen').default}\n/>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can use this approach instead of the ",(0,s.jsx)(n.code,{children:"component"})," prop if you want the ",(0,s.jsx)(n.code,{children:"ProfileScreen"})," module to be lazily evaluated when needed. This is especially useful when using ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/docs/ram-bundles-inline-requires",children:"ram bundles"})," to improve initial load."]}),"\n",(0,s.jsx)(n.h3,{id:"children",children:(0,s.jsx)(n.code,{children:"children"})}),"\n",(0,s.jsx)(n.p,{children:"Render callback to return React Element to use for the screen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Profile">\n  {(props) => <ProfileScreen {...props} />}\n</Stack.Screen>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can use this approach instead of the ",(0,s.jsx)(n.code,{children:"component"})," prop if you need to pass additional props. Though we recommend using ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/context.html",children:"React context"})," for passing data instead."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactmemo",children:(0,s.jsx)(n.code,{children:"React.memo"})})," or ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent",children:(0,s.jsx)(n.code,{children:"React.PureComponent"})})," for your screen components to avoid performance issues."]})}),"\n",(0,s.jsx)(n.h3,{id:"navigationkey",children:(0,s.jsx)(n.code,{children:"navigationKey"})}),"\n",(0,s.jsx)(n.p,{children:"Optional key for this screen. This doesn't need to be unique. If the key changes, existing screens with this name will be removed (if used in a stack navigator) or reset (if used in a tab or drawer navigator)."}),"\n",(0,s.jsx)(n.p,{children:"This can be useful when we have some screens which we want to be removed or reset when the condition changes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"<Stack.Screen\n  navigationKey={isSignedIn ? 'user' : 'guest'}\n  name=\"Profile\"\n  component={ProfileScreen}\n/>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"listeners",children:(0,s.jsx)(n.code,{children:"listeners"})}),"\n",(0,s.jsxs)(n.p,{children:["Event listeners to subscribe to. See ",(0,s.jsxs)(n.a,{href:"/docs/7.x/navigation-events#listeners-prop-on-screen",children:[(0,s.jsx)(n.code,{children:"listeners"})," prop on ",(0,s.jsx)(n.code,{children:"Screen"})]})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var s=r(67294);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);