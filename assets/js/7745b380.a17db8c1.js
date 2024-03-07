"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[22531],{26988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var o=n(85893),a=n(11151);const i={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},s=void 0,r={id:"header-buttons",title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-6.x/header-buttons.md",sourceDirName:".",slug:"/header-buttons",permalink:"/docs/header-buttons",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/header-buttons.md",tags:[],version:"6.x",frontMatter:{id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},sidebar:"docs",previous:{title:"Configuring the header bar",permalink:"/docs/headers"},next:{title:"Nesting navigators",permalink:"/docs/nesting-navigators"}},c={},h=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",level:2},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",level:2},{value:"Customizing the back button",id:"customizing-the-back-button",level:2},{value:"Overriding the back button",id:"overriding-the-back-button",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."}),"\n",(0,o.jsx)(t.h2,{id:"adding-a-button-to-the-header",children:"Adding a button to the header"}),"\n",(0,o.jsx)(t.p,{children:"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."}),"\n",(0,o.jsx)("samp",{id:"simple-header-button",children:"header button"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={{\n          headerTitle: (props) => <LogoTitle {...props} />,\n          headerRight: () => (\n            <Button\n              onPress={() => alert(\'This is a button!\')}\n              title="Info"\n              color="#fff"\n            />\n          ),\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Header button",src:n(64875).Z+"",width:"300",height:"649"})}),"\n",(0,o.jsxs)(t.p,{children:["When we define our button this way, the ",(0,o.jsx)(t.code,{children:"this"})," variable in ",(0,o.jsx)(t.code,{children:"options"})," is ",(0,o.jsx)(t.em,{children:"not"})," the ",(0,o.jsx)(t.code,{children:"HomeScreen"})," instance, so you can't call ",(0,o.jsx)(t.code,{children:"setState"})," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83d\udca1 Please note that a community-developed library for rendering buttons in the header with the correct styling is available: ",(0,o.jsx)(t.a,{href:"https://github.com/vonovak/react-navigation-header-buttons",children:"react-navigation-header-buttons"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"header-interaction-with-its-screen-component",children:"Header interaction with its screen component"}),"\n",(0,o.jsxs)(t.p,{children:["In some cases, components in the header need to interact with the screen component. For this use case, we need to use ",(0,o.jsx)(t.code,{children:"navigation.setOptions"})," to update our options. By using ",(0,o.jsx)(t.code,{children:"navigation.setOptions"})," inside the screen component, we get access to screen's props, state, context etc."]}),"\n",(0,o.jsx)("samp",{id:"header-interaction",children:"header interaction"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={({ navigation, route }) => ({\n          headerTitle: (props) => <LogoTitle {...props} />,\n          // Add a placeholder button without the `onPress` to avoid flicker\n          headerRight: () => (\n            <Button title="Update count" />\n          ),\n        })}\n      />\n    </Stack.Navigator>\n  );\n}\n\nfunction HomeScreen({ navigation }) {\n  const [count, setCount] = React.useState(0);\n\n  React.useEffect(() => {\n    // Use `setOptions` to update the button that we previously specified\n    // Now the button includes an `onPress` handler to update the count\n    navigation.setOptions({\n      headerRight: () => (\n        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />\n      ),\n    });\n  }, [navigation]);\n\n  return <Text>Count: {count}</Text>;\n}\n'})}),"\n",(0,o.jsx)("div",{style:{display:"flex",margin:"16px 0"},children:(0,o.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"280px"},children:(0,o.jsx)("source",{src:"/assets/headers/header-update-screen.mov"})})}),"\n",(0,o.jsxs)(t.p,{children:["Here we update the ",(0,o.jsx)(t.code,{children:"headerRight"})," with a button with ",(0,o.jsx)(t.code,{children:"onPress"})," handler that has access to the component's state and can update it."]}),"\n",(0,o.jsx)(t.h2,{id:"customizing-the-back-button",children:"Customizing the back button"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"createNativeStackNavigator"}),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".']}),"\n",(0,o.jsxs)(t.p,{children:["You can change the label behavior with ",(0,o.jsx)(t.code,{children:"headerBackTitle"})," and style it with ",(0,o.jsx)(t.code,{children:"headerBackTitleStyle"})," (",(0,o.jsx)(t.a,{href:"/docs/native-stack-navigator#headerbacktitle",children:"read more"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["To customize the back button image, you can use ",(0,o.jsx)(t.code,{children:"headerBackImageSource"})," (",(0,o.jsx)(t.a,{href:"/docs/native-stack-navigator#headerbackimagesource",children:"read more"}),")."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<Stack.Navigator>\n  <Stack.Screen \n    name="Home" \n    component={HomeScreen}\n  />\n  <Stack.Screen \n  name="Details" \n  component={DetailsScreen} \n  options={\n    {\n      headerBackTitle: \'Custom Back\',\n      headerBackTitleStyle: {fontSize: 30}\n    }}\n  />\n</Stack.Navigator>\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Header custom back",src:n(71626).Z+"",width:"300",height:"649"})}),"\n",(0,o.jsx)(t.h2,{id:"overriding-the-back-button",children:"Overriding the back button"}),"\n",(0,o.jsx)(t.p,{children:"The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen \u2014 in other words, the back button will be rendered whenever there is more than one screen in the stack."}),"\n",(0,o.jsxs)(t.p,{children:["Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the ",(0,o.jsx)(t.code,{children:"headerLeft"})," option to a React Element that will be rendered, just as we did with ",(0,o.jsx)(t.code,{children:"headerRight"}),". Alternatively, the ",(0,o.jsx)(t.code,{children:"headerLeft"})," option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the ",(0,o.jsx)(t.a,{href:"/docs/native-stack-navigator#headerleft",children:"api reference"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You can set buttons in the header through the ",(0,o.jsx)(t.code,{children:"headerLeft"})," and ",(0,o.jsx)(t.code,{children:"headerRight"})," properties in ",(0,o.jsx)(t.code,{children:"options"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The back button is fully customizable with ",(0,o.jsx)(t.code,{children:"headerLeft"}),", but if you just want to change the title or image, there are other ",(0,o.jsx)(t.code,{children:"options"})," for that \u2014 ",(0,o.jsx)(t.code,{children:"headerBackTitle"}),", ",(0,o.jsx)(t.code,{children:"headerBackTitleStyle"}),", and ",(0,o.jsx)(t.code,{children:"headerBackImageSource"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["You can use a callback for the options prop to access ",(0,o.jsx)(t.code,{children:"navigation"})," and ",(0,o.jsx)(t.code,{children:"route"})," objects."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},71626:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/header-back-custom-b6e16e7836a7b6ce663b6a5867041aa8.png"},64875:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/header-button-9b3901a2e3d562d52d8252610df6db8c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(67294);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);