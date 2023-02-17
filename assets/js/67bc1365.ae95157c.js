"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[47284],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?o.createElement(d,i(i({ref:t},h),{},{components:n})):o.createElement(d,i({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41627:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"themes",title:"Themes",sidebar_label:"Themes"},l=void 0,c={unversionedId:"themes",id:"version-4.x/themes",isDocsHomePage:!1,title:"Themes",description:"Providing a light theme and a dark theme is a nice way to let your users adjust the appearance of your app depending on the time of day or their preference. It also signals that you are a hip app developer that keeps up with the trends of the day.",source:"@site/versioned_docs/version-4.x/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/4.x/themes",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/themes.md",tags:[],version:"4.x",frontMatter:{id:"themes",title:"Themes",sidebar_label:"Themes"},sidebar:"version-4.x-docs",previous:{title:"Screen tracking for analytics",permalink:"/docs/4.x/screen-tracking"},next:{title:"State persistence",permalink:"/docs/4.x/state-persistence"}},h=[{value:"Using the operating system preferences",id:"using-the-operating-system-preferences",children:[],level:2},{value:"Using the currently selected theme",id:"using-the-currently-selected-theme",children:[{value:"Using default theme colors",id:"using-default-theme-colors",children:[],level:3},{value:"Default themed components",id:"default-themed-components",children:[],level:3}],level:2},{value:"Built-in themes inside <code>navigationOptions</code>",id:"built-in-themes-inside-navigationoptions",children:[],level:2},{value:"Built-in themes inside static navigator configuration",id:"built-in-themes-inside-static-navigator-configuration",children:[],level:2},{value:"Themes inside <code>navigationOptions</code>",id:"themes-inside-navigationoptions",children:[],level:2},{value:"Theming tabs and other similar navigators",id:"theming-tabs-and-other-similar-navigators",children:[],level:2}],p={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Providing a light theme and a dark theme is a nice way to let your users adjust the appearance of your app depending on the time of day or their preference. It also signals that you are a hip app developer that keeps up with the trends of the day."),(0,r.kt)("h1",{id:"built-in-themes"},"Built-in themes"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: support for built-in themes requires react-navigation@>=3.12.0!")),(0,r.kt)("p",null,"As operating systems add built-in support for light and dark modes, supporting dark mode is less about keeping hip to trends and more about conforming to the average user expectations for how apps should work. In order to provide support for light and dark mode in a way that is reasonably consistent with the OS defaults, these themes are built in to React Navigation. You can pass in a ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," prop to your app container component in order to switch between light and dark mode, and the value of that ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," prop can come from whichever API you use to detect user preferences for dark mode, or in the case of older operating system versions, from a custom configuration within your app UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let Navigation = createAppContainer(RootStack);\n\n// `theme` can be `light` or `dark`. It defaults to `light` if not specified.\nexport default () => <Navigation theme="light" />;\n')),(0,r.kt)("p",null,"This will take care of styling the stack navigator, bottom tab navigator, and drawer navigator for you. React Navigation also provides several tools to help you make your customizations of those navigators and the screens within the navigators support both themes too."),(0,r.kt)("h2",{id:"using-the-operating-system-preferences"},"Using the operating system preferences"),(0,r.kt)("p",null,"At the time of writing, ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," does not currently support detecting the operating system color scheme preferences in the core (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/26172"},"you can follow this pull request"),"). Until it is part of core and you have updated to the version that includes it, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-appearance"),"."),(0,r.kt)("p",null,"You will need iOS 13 to actually be able to toggle dark mode through system settings."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: if you use the Expo managed workflow, this requires SDK 35+")),(0,r.kt)("p",null,"First, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-appearance"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/react-native-appearance"},"Follow the instructions in the README"),"."),(0,r.kt)("p",null,"Once you've installed it, set your root component up as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { AppearanceProvider, useColorScheme } from 'react-native-appearance';\n\n// Other navigation code goes here...\nlet Navigation = createAppContainer(RootStack);\n\nexport default () => {\n  let theme = useColorScheme();\n\n  return (\n    <AppearanceProvider>\n      <Navigation theme={theme} />\n    </AppearanceProvider>\n  )\n}\n")),(0,r.kt)("p",null,"If the version of React Native you are using doesn't support hooks yet, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance.addChangeListener(cb)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance.getColorScheme()")," functions as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/react-native-appearance#usage"},"usage section of the README"),"."),(0,r.kt)("p",null,"See a full working example of theme integration in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/theme-example"},"react-navigation/theme-example"),"."),(0,r.kt)("h2",{id:"using-the-currently-selected-theme"},"Using the currently selected theme"),(0,r.kt)("p",null,"Two tools are available to gain access to the theme in any component that descends from the app navigation container: ",(0,r.kt)("inlineCode",{parentName:"p"},"useTheme")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeContext"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useTheme")," is a simple custom hook that returns the theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { useTheme } from 'react-navigation';\n\n// Black background and white text in light theme, inverted on dark theme\nfunction MyButton() {\n  let theme = useTheme();\n\n  return (\n    <TouchableOpacity\n      style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}\n    >\n      <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>\n        Button!\n      </Text>\n    </TouchableOpacity>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ThemeContext")," lets you access the theme using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeContext.Consumer")," pattern or with ",(0,r.kt)("inlineCode",{parentName:"p"},"static contextType"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeContext } from 'react-navigation';\n\nfunction MyButton() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => (\n        <TouchableOpacity\n          style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n          <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>Button!</Text>\n        </TouchableOpacity>\n      )}\n    </ThemeContext.Consumer>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeContext } from 'react-navigation';\n\nclass MyButton extends React.Component {\n  static contextType = ThemeContext;\n\n  render() {\n    const theme = this.context;\n    return (\n      <TouchableOpacity\n        style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}\n      >\n        <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>\n          Button!\n        </Text>\n      </TouchableOpacity>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"using-default-theme-colors"},"Using default theme colors"),(0,r.kt)("p",null,"There is a small but perhaps useful list of colors that are used to style navigators according to the theme. This list of colors is exported under ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeColors"),". See the TypeScript definition for a full list of colors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeColors, useTheme } from 'react-navigation';\n\nfunction MyButton() {\n  let theme = useTheme();\n  let colors = ThemeColors[theme];\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>\n      <Text style={{ color: colors.label }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n")),(0,r.kt)("h3",{id:"default-themed-components"},"Default themed components"),(0,r.kt)("p",null,"Several components have defaults that are biased to a specific theme. ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),", for example, defaults to black. ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusBar")," defaults to dark text. React Navigation provides themed alternatives to these."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { Themed } from 'react-navigation';\n\nfunction MyButton() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>\n        <Themed.Text>Button!</Themed.Text>\n      </TouchableOpacity>\n      <Themed.StatusBar />\n    </View>\n  );\n}\n")),(0,r.kt)("h2",{id:"built-in-themes-inside-navigationoptions"},"Built-in themes inside ",(0,r.kt)("inlineCode",{parentName:"h2"},"navigationOptions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  ThemeColors,\n  createAppContainer,\n  createStackNavigator,\n} from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = ({ theme }) => {\n    return {\n      title: 'Home',\n      headerLeft: () => (\n        <Button\n          color={theme === 'dark' ? 'white' : 'blue'}\n          title=\"Press me\"\n          onPress={() => alert('success!')}\n        />\n      ),\n    };\n  };\n\n  render() {\n    // etc...\n  }\n}\n")),(0,r.kt)("h2",{id:"built-in-themes-inside-static-navigator-configuration"},"Built-in themes inside static navigator configuration"),(0,r.kt)("p",null,"Colors that are specified within the static configuration options for a navigator can now be specified as objects with ",(0,r.kt)("inlineCode",{parentName:"p"},"light")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dark")," keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let Tabs = createBottomTabNavigator(\n  {\n    /* routes */\n  },\n  {\n    tabBarOptions: {\n      activeTintColor: {\n        light: '#000',\n        dark: '#fff',\n      },\n      inactiveTintColor: {\n        light: 'rgba(0,0,0,0.2)',\n        dark: 'rgba(255,255,255,0.2)',\n      },\n    },\n  }\n);\n")),(0,r.kt)("p",null,"The old format still works too, but colors specified in the following way will not adapt to themes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let Tabs = createBottomTabNavigator(\n  {\n    /* routes */\n  },\n  {\n    tabBarOptions: {\n      activeTintColor: '#000',\n      inactiveTintColor: 'rgba(0,0,0,0.2)',\n    },\n  }\n);\n")),(0,r.kt)("h1",{id:"custom-themes-using-react-context"},"Custom themes using React context"),(0,r.kt)("p",null,"You may want more control than what you're given with just the built-in themes. In this case, you can build your own themes entirely from scratch."),(0,r.kt)("p",null,"Building custom themes into an app with React Navigation is not too much different than a React app without it; the main differences are that you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," in order to update style properties controlled by ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions"),", and when style properties are controlled in navigator configuration we'll need to take another approach. First we're going to recap how you would theme a React app without React Navigation, then we will dive deeper into these differences. Additionally, this guide assumes that you are already comfortable with React Navigation, in particular how to use and configure navigators."),(0,r.kt)("p",null,'React\'s context API allows you to share state from an ancestor component to any of its descendants without explicitly passing the value through layers and layers of components ("prop drilling"). This is a useful tool in order to build themes because we can define the theme at the root of the app, and then access it from anywhere else and re-render every themed component whenever the theme changes. If you are not familiar with how to use context already, you might want to read the ',(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React documentation")," for it before continuing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\nimport { Text, TouchableOpacity, View } from 'react-native';\n\nconst ThemeContext = React.createContext(null);\nconst ThemeConstants = {\n  light: {\n    backgroundColor: '#fff',\n    fontColor: '#000',\n  },\n  dark: {\n    backgroundColor: '#000',\n    fontColor: '#fff',\n  },\n};\n\nexport default class AppContainer extends React.Component {\n  state = {\n    theme: 'light',\n  };\n\n  toggleTheme = () => {\n    this.setState(({ theme }) => ({\n      theme: theme === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  render() {\n    return (\n      <ThemeContext.Provider\n        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}\n      >\n        <HomeScreen />\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <ThemedView\n        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}\n      >\n        <ThemeContext.Consumer>\n          {({ toggleTheme }) => (\n            <ThemedButton title=\"Toggle theme\" onPress={toggleTheme} />\n          )}\n        </ThemeContext.Consumer>\n      </ThemedView>\n    );\n  }\n}\n\nclass ThemedButton extends React.Component {\n  render() {\n    let { title, ...props } = this.props;\n    return (\n      <TouchableOpacity {...props}>\n        <ThemeContext.Consumer>\n          {({ theme }) => (\n            <Text style={{ color: ThemeConstants[theme].fontColor }}>\n              {title}\n            </Text>\n          )}\n        </ThemeContext.Consumer>\n      </TouchableOpacity>\n    );\n  }\n}\n\nclass ThemedView extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme }) => (\n          <View\n            {...this.props}\n            style={[\n              this.props.style,\n              { backgroundColor: ThemeConstants[theme].backgroundColor },\n            ]}\n          />\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Okay, that's a lot of code. There isn't much going on here aside from passing the theme around through context and then pulling it out of context when we need it inside of themed component. Themed components like ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemedView")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemedButton")," are useful to help you avoid constantly repeating theme context related boilerplate."),(0,r.kt)("h2",{id:"themes-inside-navigationoptions"},"Themes inside ",(0,r.kt)("inlineCode",{parentName:"h2"},"navigationOptions")),(0,r.kt)("p",null,"A regrettable limitation of the current implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," is that we are unable to access React context for use in properties such as ",(0,r.kt)("inlineCode",{parentName:"p"},"headerStyle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTintColor"),". We can and should use them in properties that access React components, for example in ",(0,r.kt)("inlineCode",{parentName:"p"},"headerRight")," we could provide a component like ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemedHeaderButton"),". To apply the theme to other properties we need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { \n  createAppContainer,\n  createStackNavigator,\n  ThemeContext\n} from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = ({ screenProps }) => {\n    let currentTheme = ThemeConstants[screenProps.theme];\n\n    return {\n      title: 'Home',\n      headerTintColor: currentTheme.fontColor,\n      headerStyle: { backgroundColor: currentTheme.backgroundColor },\n    };\n  };\n\n  render() {\n    return (\n      <ThemedView\n        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}\n      >\n        <ThemeContext.Consumer>\n          {({ toggleTheme }) => (\n            <ThemedButton title=\"Toggle theme\" onPress={toggleTheme} />\n          )}\n        </ThemeContext.Consumer>\n      </ThemedView>\n    );\n  }\n}\n\nconst Stack = createStackNavigator({ Home: HomeScreen });\nconst Navigation = createAppContainer(Stack);\n\nexport default class AppContainer extends React.Component {\n  state = {\n    theme: 'light',\n  };\n\n  toggleTheme = () => {\n    this.setState(({ theme }) => ({\n      theme: theme === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  render() {\n    return (\n      <ThemeContext.Provider\n        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}\n      >\n        <Navigation screenProps={{ theme: this.state.theme }} />\n      </ThemeContext.Provider>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Success! The stack header style now updates when the theme changes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: in the future we would like to deprecate ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," and move entirely over to React context. For now, ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," is the best way to do that, and when this changes it will be easy to migrate.")),(0,r.kt)("h2",{id:"theming-tabs-and-other-similar-navigators"},"Theming tabs and other similar navigators"),(0,r.kt)("p",null,"Some navigators may have their styles configured in the navigator configuration object when they are initialized. While it may be best to update these navigators so that they can be configured more easily through ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions"),", as long as they allow us to override the UI that they render with our own component and give us access to the default component, we can work with them just fine. We'll look at how to theme a bottom tab navigator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  createAppContainer,\n  createStackNavigator,\n  createBottomTabNavigator,\n  BottomTabBar,\n  ThemeContext\n} from 'react-navigation';\n\nconst ThemeConstants = {\n  light: {\n    backgroundColor: '#fff',\n    fontColor: '#000',\n    activeTintColor: 'blue',\n    inactiveTintColor: '#ccc',\n  },\n  dark: {\n    backgroundColor: '#000',\n    fontColor: '#fff',\n    activeTintColor: '#fff',\n    inactiveTintColor: '#888',\n  },\n};\n\n// Notice how we override the `activeTintColor`, `inactiveTintColor` and\n// `backgroundColor` of the tab bar with our theme styles.\nclass ThemedBottomTabBar extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme }) => (\n          <BottomTabBar\n            {...this.props}\n            activeTintColor={ThemeConstants[theme].activeTintColor}\n            inactiveTintColor={ThemeConstants[theme].inactiveTintColor}\n            style={{\n              backgroundColor: ThemeConstants[theme].backgroundColor,\n            }}\n          />\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n\nconst Stack = createStackNavigator({ Home: HomeScreen });\nconst Tabs = createBottomTabNavigator(\n  { Stack },\n  { tabBarComponent: ThemedBottomTabBar }\n);\nconst Navigation = createAppContainer(Tabs);\n\n// And the rest of the code goes here...\n")),(0,r.kt)("p",null,"You will likely want to go a bit further than we detailed in this guide, such as change the status bar color depending on the theme and customize the border color for the header and tab bar as well. You can see all of the above code plus some more changes to make it more complete in ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/themes-example"},"this Snack"),"."),(0,r.kt)("p",null,"I never said it was easy, but this about covers what you need to know to be able to theme an app that uses React Navigation. Good luck, remember me when you're a billionaire."))}m.isMDXComponent=!0}}]);