"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[64222],{86739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),a=t(11151);const s={},r="Animating elements between screens",o={id:"shared-element-transitions",title:"Animating elements between screens",description:"This guide covers how to animate elements between screens. This feature is known as a Shared Element Transition and it's implemented in the @react-navigation/native-stack with React Native Reanimated.",source:"@site/versioned_docs/version-6.x/shared-element-transitions.md",sourceDirName:".",slug:"/shared-element-transitions",permalink:"/docs/shared-element-transitions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/shared-element-transitions.md",tags:[],version:"6.x",frontMatter:{},sidebar:"docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/custom-android-back-button-handling"},next:{title:"Preventing going back",permalink:"/docs/preventing-going-back"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Minimal example",id:"minimal-example",level:2},{value:"Customizing the transition",id:"customizing-the-transition",level:2},{value:"Reference",id:"reference",level:2},{value:"Alternatives",id:"alternatives",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"animating-elements-between-screens",children:"Animating elements between screens"}),"\n",(0,i.jsxs)(n.p,{children:["This guide covers how to animate elements between screens. This feature is known as a ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions",children:"Shared Element Transition"})," and it's implemented in the ",(0,i.jsx)(n.a,{href:"/docs/native-stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})})," with ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/",children:"React Native Reanimated"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"As of writing this guide, Shared Element Transitions are considered an experimental feature not recommended for production use."})}),"\n",(0,i.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,i.jsx)("source",{src:"/assets/shared-element-transitions/shared-element-transitions.mp4"})}),"\n",(0,i.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsx)(n.p,{children:"Before continuing this guide make sure your app meets these criteria:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You are using ",(0,i.jsx)(n.a,{href:"/docs/native-stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})}),". The Shared Element Transitions feature isn't supported in JS-based ",(0,i.jsx)(n.a,{href:"/docs/stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/stack"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You have ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started",children:(0,i.jsx)(n.code,{children:"react-native-reanimated"})})," ",(0,i.jsx)(n.strong,{children:"v3.0.0 or higher"})," installed and configured."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"minimal-example",children:"Minimal example"}),"\n",(0,i.jsx)(n.p,{children:"To create a shared transition:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"Animated"})," components imported from ",(0,i.jsx)(n.code,{children:"react-native-reanimated"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Assign the same ",(0,i.jsx)(n.code,{children:"sharedTransitionTag"})," to elements on different screens."]}),"\n",(0,i.jsx)(n.li,{children:"Navigate between screens. The transition will start automatically."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import * as React from 'react';\nimport { View, Button, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nimport Animated from 'react-native-reanimated';\n\n// highlight-next-line\nconst Stack = createNativeStackNavigator();\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={styles.container}>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n      <Animated.Image\n        source={{ uri: 'https://picsum.photos/id/39/200' }}\n        style={{ width: 300, height: 300 }}\n        // highlight-next-line\n        sharedTransitionTag=\"tag\"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen({ navigation }) {\n  return (\n    <View style={styles.container}>\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n      <Animated.Image\n        source={{ uri: 'https://picsum.photos/id/39/200' }}\n        style={{ width: 100, height: 100 }}\n        // highlight-next-line\n        sharedTransitionTag=\"tag\"\n      />\n    </View>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Details\" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sharedTransitionTag"})," is a string that has to be unique in the context of a single screen, but has to match elements between screens. This prop allows Reanimated to identify and animate the elements, similarly to the ",(0,i.jsx)(n.a,{href:"https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",children:(0,i.jsx)(n.code,{children:"key"})})," property, which tells React which element in the list is which."]}),"\n",(0,i.jsx)(n.h2,{id:"customizing-the-transition",children:"Customizing the transition"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the transition animates the ",(0,i.jsx)(n.code,{children:"width"}),", ",(0,i.jsx)(n.code,{children:"height"}),", ",(0,i.jsx)(n.code,{children:"originX"}),", ",(0,i.jsx)(n.code,{children:"originY"})," and ",(0,i.jsx)(n.code,{children:"transform"})," properties using ",(0,i.jsx)(n.code,{children:"withTiming"})," with a 500 ms duration. You can easily customize ",(0,i.jsx)(n.code,{children:"width"}),", ",(0,i.jsx)(n.code,{children:"height"}),", ",(0,i.jsx)(n.code,{children:"originX"}),", and ",(0,i.jsx)(n.code,{children:"originY"})," props. Customizing ",(0,i.jsx)(n.code,{children:"transform"})," is also possible but it's far beyond the scope of this guide."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Custom SharedTransition API is not finalized and might change in a future release."})}),"\n",(0,i.jsxs)(n.p,{children:["To customize the transition you need to pass all the properties besides ",(0,i.jsx)(n.code,{children:"transform"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { SharedTransition } from 'react-native-reanimated';\n\nconst customTransition = SharedTransition.custom((values) => {\n  'worklet';\n  return {\n    height: withSpring(values.targetHeight),\n    width: withSpring(values.targetWidth),\n    originX: withSpring(values.targetOriginX),\n    originY: withSpring(values.targetOriginY),\n  };\n});\n\nfunction HomeScreen() {\n  return (\n    <Animated.Image\n      style={{ width: 300, height: 300 }}\n      sharedTransitionTag=\"tag\"\n      // highlight-next-line\n      sharedTransitionStyle={customTransition} // add this to both elements on both screens\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.p,{children:["You can find a full Shared Element Transitions reference in the ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview/",children:"React Native Reanimated documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use ",(0,i.jsx)(n.a,{href:"https://github.com/IjzerenHein/react-native-shared-element",children:(0,i.jsx)(n.code,{children:"react-native-shared-element"})})," library with a ",(0,i.jsx)(n.a,{href:"https://github.com/IjzerenHein/react-navigation-shared-element",children:"React Navigation binding"})," which implements Shared Element Transitions in a JS-based ",(0,i.jsx)(n.code,{children:"@react-navigation/stack"})," navigator. This solution, however, isn't actively maintained."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/wix/react-native-navigation",children:(0,i.jsx)(n.code,{children:"react-native-navigation"})})," also comes with support for Shared Element Transitions. You can read more about it ",(0,i.jsx)(n.a,{href:"https://wix.github.io/react-native-navigation/docs/style-animations#shared-element-transitions",children:"here"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);