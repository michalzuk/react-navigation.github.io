"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[71725],{55607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(85893),i=t(11151),o=t(74866),s=t(85162);const r={id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},c=void 0,l={id:"navigation-lifecycle",title:"Navigation lifecycle",description:"In a previous section, we worked with a stack navigator that has two screens (Home and Details) and learned how to use navigation.navigate('RouteName') to navigate between the routes.",source:"@site/versioned_docs/version-7.x/navigation-lifecycle.md",sourceDirName:".",slug:"/navigation-lifecycle",permalink:"/docs/7.x/navigation-lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigation-lifecycle.md",tags:[],version:"7.x",frontMatter:{id:"navigation-lifecycle",title:"Navigation lifecycle",sidebar_label:"Navigation lifecycle"},sidebar:"docs",previous:{title:"Nesting navigators",permalink:"/docs/7.x/nesting-navigators"},next:{title:"Next steps",permalink:"/docs/7.x/next-steps"}},u={},d=[{value:"Example scenario",id:"example-scenario",level:2},{value:"React Navigation lifecycle events",id:"react-navigation-lifecycle-events",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In a previous section, we worked with a stack navigator that has two screens (",(0,a.jsx)(n.code,{children:"Home"})," and ",(0,a.jsx)(n.code,{children:"Details"}),") and learned how to use ",(0,a.jsx)(n.code,{children:"navigation.navigate('RouteName')"})," to navigate between the routes."]}),"\n",(0,a.jsxs)(n.p,{children:["An important question in this context is: what happens with ",(0,a.jsx)(n.code,{children:"Home"})," when we navigate away from it, or when we come back to it? How does a route find out that a user is leaving it or coming back to it?"]}),"\n",(0,a.jsxs)(n.p,{children:["If you are coming to react-navigation from a web background, you may assume that when user navigates from route ",(0,a.jsx)(n.code,{children:"A"})," to route ",(0,a.jsx)(n.code,{children:"B"}),", ",(0,a.jsx)(n.code,{children:"A"})," will unmount (its ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," is called) and ",(0,a.jsx)(n.code,{children:"A"})," will mount again when user comes back to it. While these React lifecycle methods are still valid and are used in react-navigation, their usage differs from the web. This is driven by more complex needs of mobile navigation."]}),"\n",(0,a.jsx)(n.h2,{id:"example-scenario",children:"Example scenario"}),"\n",(0,a.jsxs)(n.p,{children:["Consider a stack navigator with screens A and B. After navigating to A, its ",(0,a.jsx)(n.code,{children:"componentDidMount"})," is called. When pushing B, its ",(0,a.jsx)(n.code,{children:"componentDidMount"})," is also called, but A remains mounted on the stack and its ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," is therefore not called."]}),"\n",(0,a.jsxs)(n.p,{children:["When going back from B to A, ",(0,a.jsx)(n.code,{children:"componentWillUnmount"})," of B is called, but ",(0,a.jsx)(n.code,{children:"componentDidMount"})," of A is not because A remained mounted the whole time."]}),"\n",(0,a.jsx)(n.p,{children:"Similar results can be observed (in combination) with other navigators as well. Consider a tab navigator with two tabs, where each tab is a stack navigator:"}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const SettingsStack = createStackNavigator({\n  Settings: SettingsScreen,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Home: HomeScreen,\n  Details: DetailsScreen,\n});\n\nconst MyTabs = createBottomTabNavigator({\n  First: SettingsStack,\n  Second: HomeStack,\n});\n\n\nconst Navigation = createStaticNavigation(MyTabs);\n\nfunction App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsxs)(s.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsx)("samp",{id:"navigation-lifecycle"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'function App() {\n  return (\n    <NavigationContainer>\n      <Tab.Navigator>\n        <Tab.Screen name="First">\n          {() => (\n            <SettingsStack.Navigator>\n              <SettingsStack.Screen\n                name="Settings"\n                component={SettingsScreen}\n              />\n              <SettingsStack.Screen name="Profile" component={ProfileScreen} />\n            </SettingsStack.Navigator>\n          )}\n        </Tab.Screen>\n        <Tab.Screen name="Second">\n          {() => (\n            <HomeStack.Navigator>\n              <HomeStack.Screen name="Home" component={HomeScreen} />\n              <HomeStack.Screen name="Details" component={DetailsScreen} />\n            </HomeStack.Navigator>\n          )}\n        </Tab.Screen>\n      </Tab.Navigator>\n    </NavigationContainer>\n  );\n}\n'})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["We start on the ",(0,a.jsx)(n.code,{children:"HomeScreen"})," and navigate to ",(0,a.jsx)(n.code,{children:"DetailsScreen"}),". Then we use the tab bar to switch to the ",(0,a.jsx)(n.code,{children:"SettingsScreen"})," and navigate to ",(0,a.jsx)(n.code,{children:"ProfileScreen"}),". After this sequence of operations is done, all 4 of the screens are mounted! If you use the tab bar to switch back to the ",(0,a.jsx)(n.code,{children:"HomeStack"}),", you'll notice you'll be presented with the ",(0,a.jsx)(n.code,{children:"DetailsScreen"})," - the navigation state of the ",(0,a.jsx)(n.code,{children:"HomeStack"})," has been preserved!"]}),"\n",(0,a.jsx)(n.h2,{id:"react-navigation-lifecycle-events",children:"React Navigation lifecycle events"}),"\n",(0,a.jsx)(n.p,{children:'Now that we understand how React lifecycle methods work in React Navigation, let\'s answer the question we asked at the beginning: "How do we find out that a user is leaving (blur) it or coming back to it (focus)?"'}),"\n",(0,a.jsxs)(n.p,{children:["React Navigation emits events to screen components that subscribe to them. We can listen to ",(0,a.jsx)(n.code,{children:"focus"})," and ",(0,a.jsx)(n.code,{children:"blur"})," events to know when a screen comes into focus or goes out of focus respectively."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)("samp",{id:"focus-and-blur"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // Screen was focused\n      // Do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-events",children:"Navigation events"})," for more details on the available events and the API usage."]}),"\n",(0,a.jsxs)(n.p,{children:["Instead of adding event listeners manually, we can use the ",(0,a.jsx)(n.a,{href:"/docs/7.x/use-focus-effect",children:(0,a.jsx)(n.code,{children:"useFocusEffect"})})," hook to perform side effects. It's like React's ",(0,a.jsx)(n.code,{children:"useEffect"})," hook, but it ties into the navigation lifecycle."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)("samp",{id:"use-focus-effect"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile() {\n  useFocusEffect(\n    React.useCallback(() => {\n      // Do something when the screen is focused\n\n      return () => {\n        // Do something when the screen is unfocused\n        // Useful for cleanup functions\n      };\n    }, [])\n  );\n\n  return <ProfileContent />;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to render different things based on if the screen is focused or not, you can use the ",(0,a.jsx)(n.a,{href:"/docs/7.x/use-is-focused",children:(0,a.jsx)(n.code,{children:"useIsFocused"})})," hook which returns a boolean indicating whether the screen is focused."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["While React's lifecycle methods are still valid, React Navigation adds more events that you can subscribe to through the ",(0,a.jsx)(n.code,{children:"navigation"})," object."]}),"\n",(0,a.jsxs)(n.li,{children:["You may also use the ",(0,a.jsx)(n.code,{children:"useFocusEffect"})," or ",(0,a.jsx)(n.code,{children:"useIsFocused"})," hooks."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(86010);const i={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),i=t(86010),o=t(12466),s=t(16550),r=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[s,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=a.find((e=>e.default)))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[l,d]=m({queryString:t,groupId:i}),[v,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,o]=(0,u.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),p=(()=>{const e=null!=l?l:v;return f({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=r[t].value;i!==a&&(l(n),s(i))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,i.Z)("tabs__item",p.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",p.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);