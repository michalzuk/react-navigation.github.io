"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[9987],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,d=u["".concat(s,".").concat(g)]||u[g]||l[g]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78293:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return l},default:function(){return g}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],p={title:"Using React Navigation 5 with UI Kitten",author:"Artur Yorsh",author_url:"https://twitter.com/artyorsh",author_title:"UI Kitten Team",author_image_url:"https://avatars0.githubusercontent.com/u/10753921?s=200&v=4",tags:["tutorial","ui-kitten"]},s=void 0,c={permalink:"/blog/2019/11/04/using-react-navigation-5-with-ui-kitten",source:"@site/blog/2019-11-04-using-react-navigation-5-with-ui-kitten.md",title:"Using React Navigation 5 with UI Kitten",description:"This is a guest post by the UI Kitten team. If you like this guide, checkout UI Kitten for more!",date:"2019-11-04T00:00:00.000Z",formattedDate:"November 4, 2019",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"ui-kitten",permalink:"/blog/tags/ui-kitten"}],readingTime:11.695,truncated:!0,authors:[{name:"Artur Yorsh",title:"UI Kitten Team",url:"https://twitter.com/artyorsh",imageURL:"https://avatars0.githubusercontent.com/u/10753921?s=200&v=4"}],prevItem:{title:"React Navigation v5 + React Native Paper = \u2764\ufe0f",permalink:"/blog/2020/01/29/using-react-navigation-5-with-react-native-paper"},nextItem:{title:"React Navigation meets native",permalink:"/blog/2019/10/17/react-navigation-native"}},m={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Getting started",id:"getting-started",children:[{value:"Step 1. Authentication flow",id:"step-1-authentication-flow",children:[],level:3},{value:"Step 2. Top tabs",id:"step-2-top-tabs",children:[],level:3},{value:"Step 3. Bottom tabs",id:"step-3-bottom-tabs",children:[],level:3},{value:"Step 4. Drawer menu",id:"step-4-drawer-menu",children:[],level:3},{value:"TypeScript",id:"typescript",children:[],level:3},{value:"Useful links",id:"useful-links",children:[],level:3}],level:2}],u={toc:l};function g(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a guest post by the ",(0,r.kt)("a",{parentName:"p",href:"http://akveo.github.io/react-native-ui-kitten"},"UI Kitten")," team. If you like this guide, checkout UI Kitten for more!\nIn this blog post, we'll show a step-by-step guide on using React Navigation 5 with UI Kitten."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The new React Navigation comes with several significant improvements such as ",(0,r.kt)("a",{parentName:"p",href:"https://blog.expo.io/re-writing-react-navigation-stack-db6a376522b1"},"improving animation performance")," with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},"gesture-handler")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"reanimated")," libraries. What's more, it was migrated to TypeScript for improving the quality of your code base with type checking and more. But the biggest update is migrating to component-based API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://eva.design"},"Eva Design System")," is a customizable Design System that is easy to adapt to your brand. It provides Mobile and Web component libraries and allows businesses to quickly create beautiful unique branding themes. The React Native realization of Eva Design System includes ",(0,r.kt)("a",{parentName:"p",href:"http://akveo.github.io/react-native-ui-kitten"},"UI Kitten"),", React Native framework for building modern cross-platform mobile applications."),(0,r.kt)("p",null,"The UI Kitten team started actively using React Navigation alpha and we're proud to announce the full compatibility to the new React Navigation API. In this guide, we won't consider how to implement all of the boilerplate stuff like auth screens. Instead, we will learn how to navigate between screens using Drawer, Bottom Tabs, Top Tabs, and Stack navigators to build a TODO-App. Furthermore, we'll demonstrate using React Navigation with UI Kitten components."),(0,r.kt)("img",{src:"/assets/blog/using-react-navigation-5-with-ui-kitten/overview.gif",height:"480"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"React Navigation 5 is nothing else rather than simplifying navigation structure in your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createStackNavigator } from '@react-navigation/stack';\n\nconst Stack = createStackNavigator();\n\nexport const AuthNavigator = (): React.ReactElement => (\n  <Stack.Navigator headerMode='none'>\n    <Stack.Screen name='Sign In' component={SignInScreen}/>\n    <Stack.Screen name='Sign Up' component={SignUpScreen}/>\n  </Stack.Navigator>\n);\n")),(0,r.kt)("p",null,"To create a navigator, you import ",(0,r.kt)("inlineCode",{parentName:"p"},"createXNavigator")," function from the navigator package of your choice and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," components from the value it returns."),(0,r.kt)("p",null,"Unlike the previous React Navigation versions, all the screens used inside a navigator are passed as child elements with wrapping it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," component. If you need to set up additional navigator configuration like configuration of the header, you can simply pass corresponding props directly to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," component."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Clone the project from GitHub. It contains all the required source code for the initial setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/artyorsh/react-navigation-ex-demo\n")),(0,r.kt)("h3",{id:"step-1-authentication-flow"},"Step 1. Authentication flow"),(0,r.kt)("p",null,"Assuming that your app users will need to authorize before getting to the home screen, we will need to create both Authentication and Home navigators. Then we're going to combine it with simple stack navigation and pick the initial screen depending on the user authorization status."),(0,r.kt)("p",null,"Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/auth.navigator.tsx"},"./src/navigation/auth.navigator.tsx`")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { AppRoute } from './app-routes';\nimport { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../scenes/auth';\n\nconst Stack = createStackNavigator();\n\nexport const AuthNavigator = (): React.ReactElement => (\n  <Stack.Navigator headerMode='none'>\n    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen}/>\n    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen}/>\n    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen}/>\n  </Stack.Navigator>\n);\n")),(0,r.kt)("p",null,"In this example, we're using a ",(0,r.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," function to create simple stack navigation between Sign In, Sign Up and Reset Password screens. Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack Navigator")," we mean the default navigation behavior between screens: with slide-from-right animation on iOS, and slide-in-top on Android."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/app.navigator.tsx"},"./src/navigation/app.navigator.tsx")," file and replace the placeholder screen with Auth Navigator. This will make authentication screens to be the starter point of your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { AuthNavigator } from './auth.navigator';\nimport { AppRoute } from './app-routes';\n\nconst Stack = createStackNavigator();\n\nexport const AppNavigator = (): React.ReactElement => (\n  <Stack.Navigator headerMode='none'>\n    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>\n  </Stack.Navigator>\n);\n")),(0,r.kt)("img",{src:"/assets/blog/using-react-navigation-5-with-ui-kitten/stack-navigator.gif",height:"420"}),(0,r.kt)("h3",{id:"step-2-top-tabs"},"Step 2. Top tabs"),(0,r.kt)("p",null,"Say, our app has both in-progress and finished tasks. So, you should separate them to avoid a mess. Here you can make it with two tabs on the home screen. To do this, we need to have three screens: two for tabs and one master screen for navigation management between tabs. Unlike the Stack Navigator component, the Top Tabs ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," has a special prop for the component to control navigation between tabs\u200a-\u200a",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar"),". We will use it to configure the tab bar with UI Kitten components."),(0,r.kt)("p",null,"Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/todo.navigator.tsx"},"./src/navigation/todo.navigator.tsx`")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\nimport { AppRoute } from './app-routes';\nimport { TodoTabBar, TodoInProgressScreen, TodoDoneScreen } from '../scenes/todo';\nimport { DoneAllIcon, GridIcon } from '../assets/icons';\n\nconst TopTab = createMaterialTopTabNavigator();\n\nexport const TodoNavigator = (): React.ReactElement => (\n  <TopTab.Navigator tabBar={props => <TodoTabBar {...props} />}>\n    <TopTab.Screen\n      name={AppRoute.TODO_IN_PROGRESS}\n      component={TodoInProgressScreen}\n      options={{ title: 'IN PROGRESS', tabBarIcon: GridIcon }}\n    />\n    <TopTab.Screen\n      name={AppRoute.TODO_DONE}\n      component={TodoDoneScreen}\n      options={{ title: 'DONE', tabBarIcon: DoneAllIcon }}\n    />\n  </TopTab.Navigator>\n);\n")),(0,r.kt)("p",null,"The code above will enable you to navigate with gestures between ",(0,r.kt)("inlineCode",{parentName:"p"},"In Progress")," screen and ",(0,r.kt)("inlineCode",{parentName:"p"},"Done")," screen, but not set up the Tab Bar. Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/scenes/todo/todo-tab-bar.component.tsx"},"./src/scenes/todo/todo-tab-bar.component.tsx")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { TabBar, Tab, Divider, TabElement } from '@ui-kitten/components';\nimport { SafeAreaLayout, SaveAreaInset, SafeAreaLayoutElement } from '../../components/safe-area-layout.component';\nimport { Toolbar } from '../../components/toolbar.component';\n\nexport const TodoTabBar = (props): SafeAreaLayoutElement => {\n\n  const onTabSelect = (index: number): void => {\n    const selectedTabRoute: string = props.state.routeNames[index];\n    props.navigation.navigate(selectedTabRoute);\n  };\n\n  const createNavigationTabForRoute = (route): TabElement => {\n    const { options } = props.descriptors[route.key];\n    return (\n      <Tab\n        key={route.key}\n        title={options.title}\n        icon={options.tabBarIcon}\n      />\n    );\n  };\n\n  return (\n    <SafeAreaLayout insets={SaveAreaInset.TOP}>\n      <Toolbar title='React Navigation Ex \ud83d\udc31'/>\n      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>\n        {props.state.routes.map(createNavigationTabForRoute)}\n      </TabBar>\n      <Divider/>\n    </SafeAreaLayout>\n  );\n};\n")),(0,r.kt)("p",null,"With the code above we render ",(0,r.kt)("inlineCode",{parentName:"p"},"TabBar")," component with two tabs inside: one per each screen inside ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoNavigator"),". Then, we use the React Navigation state to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onSelect")," props to navigate between screens. So, when the user taps one of the tabs, the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabBar")," component calls ",(0,r.kt)("inlineCode",{parentName:"p"},"onTabSelect")," function and this is the place where we need to navigate to the corresponding route."),(0,r.kt)("p",null,"Finally, open ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/app.navigator.tsx"},"app.navigator.tsx")," file and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoNavigator")," as a Home screen. Now you're able to navigate the home screen with todo tabs after sign in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { AuthNavigator } from './auth.navigator';\nimport { TodoNavigator } from './todo.navigator';\nimport { AppRoute } from './app-routes';\n\nconst Stack = createStackNavigator();\n\nexport const AppNavigator = (props): React.ReactElement => (\n  <Stack.Navigator {...props} headerMode='none'>\n    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>\n    <Stack.Screen name={AppRoute.HOME} component={TodoNavigator}/>\n  </Stack.Navigator>\n);\n")),(0,r.kt)("img",{src:"/assets/blog/using-react-navigation-5-with-ui-kitten/material-top-tab-navigator.gif",height:"480"}),(0,r.kt)("h3",{id:"step-3-bottom-tabs"},"Step 3. Bottom tabs"),(0,r.kt)("p",null,"Sometimes you may want your app to contain tabs at the bottom. Here is the main semantic difference regarding the tabs at the top: while they should represent the content of the same type, the bottom tabs could be used to show any content of your application. This is where we're going to use ",(0,r.kt)("inlineCode",{parentName:"p"},"createBottomTabNavigator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomNavigation"),"."),(0,r.kt)("p",null,"Let's start by creating another navigator for the second tab. The first one will be used for Todo screens. Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/profile.navigator.tsx"},"./src/navigation/profile.navigator.tsx")," file and paste the following code:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { AppRoute } from './app-routes';\nimport { ProfileScreen } from '../scenes/profile';\n\nconst Stack = createStackNavigator();\n\nexport const ProfileNavigator = (): React.ReactElement => (\n  <Stack.Navigator headerMode='none'>\n    <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen}/>\n  </Stack.Navigator>\n);\n")),(0,r.kt)("p",null,"This will add a simple stack navigator, just like we did it for authentication flow."),(0,r.kt)("p",null,"Now we need to somehow connect ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoNavigator")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileNavigator"),"\xa0. The implementation is as simple as creating a navigator for top tabs. Thanks to React Navigation, we have totally the same API for this. Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/home.navigator.tsx"},"./src/navigation/home.navigator.tsx")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { TodoNavigator } from './todo.navigator';\nimport { ProfileNavigator } from './profile.navigator';\nimport { AppRoute } from './app-routes';\nimport { HomeTabBar } from '../scenes/home';\nimport { LayoutIcon, PersonIcon } from '../assets/icons';\n\nconst BottomTab = createBottomTabNavigator();\n\nexport const HomeNavigator = (): React.ReactElement => (\n  <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>\n    <BottomTab.Screen\n      name={AppRoute.TODO}\n      component={TodoNavigator}\n      options={{ title: 'TODO', tabBarIcon: LayoutIcon }}\n    />\n    <BottomTab.Screen\n      name={AppRoute.PROFILE}\n      component={ProfileNavigator}\n      options={{ title: 'PROFILE', tabBarIcon: PersonIcon }}\n    />\n  </BottomTab.Navigator>\n);\n")),(0,r.kt)("p",null,"Just like in the case with tabs at the top, we also need to make a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar"),". Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/scenes/home/home-tab-bar.component.tsx"},"./src/scenes/home/home-tab-bar.component.tsx")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { BottomNavigation, BottomNavigationTab, Divider, BottomNavigationTabElement } from '@ui-kitten/components';\nimport { SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset } from '../../components/safe-area-layout.component';\n\nexport const HomeTabBar = (props): SafeAreaLayoutElement => {\n\n  const onSelect = (index: number): void => {\n    const selectedTabRoute: string = props.state.routeNames[index];\n    props.navigation.navigate(selectedTabRoute);\n  };\n\n  const createNavigationTabForRoute = (route): BottomNavigationTabElement => {\n    const { options } = props.descriptors[route.key];\n    return (\n      <BottomNavigationTab\n        key={route.key}\n        title={options.title}\n        icon={options.tabBarIcon}\n      />\n    );\n  };\n\n  return (\n    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>\n      <Divider/>\n      <BottomNavigation\n        appearance='noIndicator'\n        selectedIndex={props.state.index}\n        onSelect={onSelect}>\n        {props.state.routes.map(createNavigationTabForRoute)}\n      </BottomNavigation>\n    </SafeAreaLayout>\n  );\n};\n")),(0,r.kt)("p",null,"Using the code above we render ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomNavigation")," component with two tabs inside: one per each screen inside ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeNavigator"),". We use the React Navigation state to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onSelect")," props to navigate between screens. So, when the user taps one of the tabs, the ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomNavigation")," component calls ",(0,r.kt)("inlineCode",{parentName:"p"},"onSelect")," function. Well, this is the place where we need to navigate to the corresponding route."),(0,r.kt)("p",null,"Then, open ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/app.navigator.tsx"},"app.navigator.tsx")," file and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoNavigator")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeNavigator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { AuthNavigator } from './auth.navigator';\nimport { HomeNavigator } from './home.navigator';\nimport { AppRoute } from './app-routes';\n\nconst Stack = createStackNavigator();\n\nexport const AppNavigator = (props): React.ReactElement => (\n  <Stack.Navigator {...props} headerMode='none'>\n    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>\n    <Stack.Screen name={AppRoute.HOME} component={HomeNavigator}/>\n  </Stack.Navigator>\n);\n")),(0,r.kt)("img",{src:"/assets/blog/using-react-navigation-5-with-ui-kitten/bottom-tab-navigator.gif",height:"480"}),(0,r.kt)("h3",{id:"step-4-drawer-menu"},"Step 4. Drawer menu"),(0,r.kt)("p",null,"At the final stage of this guide, we will describe how to create the drawer navigation. While the top and bottom tabs can be used to present the main product features, a drawer menu can be also used to direct a user to legal information about it, or simply contain quick actions like a logout."),(0,r.kt)("p",null,"Usually, the drawer menu is available in app on the home screen, so let's add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeNavigator"),". Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/home.navigator.tsx"},"./src/navigation/home.navigator.tsx")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { TodoNavigator } from './todo.navigator';\nimport { ProfileNavigator } from './profile.navigator';\nimport { AppRoute } from './app-routes';\nimport { HomeTabBar, HomeDrawer, AboutScreen } from '../scenes/home';\nimport { HomeIcon, InfoIcon, LayoutIcon, PersonIcon } from '../assets/icons';\n\nconst Drawer = createDrawerNavigator();\nconst BottomTab = createBottomTabNavigator();\n\nconst HomeBottomNavigator = (): React.ReactElement => (\n  <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>\n    <BottomTab.Screen\n      name={AppRoute.TODO}\n      component={TodoNavigator}\n      options={{ title: 'TODO', tabBarIcon: LayoutIcon }}\n    />\n    <BottomTab.Screen\n      name={AppRoute.PROFILE}\n      component={ProfileNavigator}\n      options={{ title: 'PROFILE', tabBarIcon: PersonIcon }}\n    />\n  </BottomTab.Navigator>\n);\n\nexport const HomeNavigator = (): React.ReactElement => (\n  <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>\n    <Drawer.Screen\n      name={AppRoute.HOME}\n      component={HomeBottomNavigator}\n      options={{ title: 'Home', drawerIcon: HomeIcon }}\n    />\n    <Drawer.Screen\n      name={AppRoute.ABOUT}\n      component={AboutScreen}\n      options={{ title: 'About', drawerIcon: InfoIcon }}\n    />\n  </Drawer.Navigator>\n);\n")),(0,r.kt)("p",null,"In this example, we've implemented a Drawer Navigator with ",(0,r.kt)("inlineCode",{parentName:"p"},"createDrawerNavigator")," and used it to display on the Home screen. We have also added ",(0,r.kt)("inlineCode",{parentName:"p"},"AboutScreen")," to demonstrate navigation directly from the Drawer menu."),(0,r.kt)("p",null,"Just like Top/Bottom tab navigators, the drawer navigator also has a special property for declaring custom drawer view. Use a ",(0,r.kt)("inlineCode",{parentName:"p"},"drawerContent")," property to pass the custom view to the navigator. Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/scenes/home/home-drawer.component.tsx"},"./src/scenes/home/home-drawer.component.tsx")," file and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Drawer, DrawerItem, DrawerElement DrawerItemElement } from '@ui-kitten/components';\nimport { SafeAreaLayout, SaveAreaInset } from '../../components/safe-area-layout.component';\n\nexport const HomeDrawer = (props): DrawerElement => {\n\n  const onItemSelect = (index: IndexPath): void => {\n    const selectedTabRoute: string = props.state.routeNames[index.row];\n    props.navigation.navigate(selectedTabRoute);\n    props.navigation.closeDrawer();\n  };\n\n  const createDrawerItemForRoute = (route, index: number): DrawerItemElement => {\n    const { options } = props.descriptors[route.key];\n    return (\n      <DrawerItem\n        key={index}\n        title={route.name}\n        accessoryLeft={options.drawerIcon}\n      />\n    );\n  };\n\n  return (\n    <SafeAreaLayout insets={SaveAreaInset.TOP}>\n      <Drawer\n        data={props.state.routes.map(createNavigationItemForRoute)}\n        onSelect={onMenuItemSelect}\n      />\n    </SafeAreaLayout>\n  );\n};\n")),(0,r.kt)("p",null,"Due to the use of this code, we render ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawer")," component with two actions inside: one for navigating to legal information screen and one for performing a user logout. Then, we pass ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," prop to display our actions and ",(0,r.kt)("inlineCode",{parentName:"p"},"onSelect")," prop to handle it. So, when the user taps the action, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Drawer")," component calls ",(0,r.kt)("inlineCode",{parentName:"p"},"onMenuItemSelect")," function and this is the place where we need to handle it.`"),(0,r.kt)("p",null,"The next thing to do is to modify the Todo tab bar by adding a menu icon to open a drawer. Open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/scenes/todo/todo-tab-bar.component.tsx"},"./src/scenes/todo/todo-tab-bar.component.tsx")," file and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { TabBar, Tab, Divider, TabElement } from '@ui-kitten/components';\nimport { SafeAreaLayout, SaveAreaInset, SafeAreaLayoutElement } from '../../components/safe-area-layout.component';\nimport { Toolbar } from '../../components/toolbar.component';\nimport { MenuIcon } from '../../assets/icons';\n\nexport const TodoTabBar = (props): SafeAreaLayoutElement => {\n\n  const onTabSelect = (index: number): void => {\n    const selectedTabRoute: string = props.state.routeNames[index];\n    props.navigation.navigate(selectedTabRoute);\n  };\n\n  const createNavigationTabForRoute = (route): TabElement => {\n    const { options } = props.descriptors[route.key];\n    return (\n      <Tab\n        key={route.key}\n        title={options.title}\n        icon={options.tabBarIcon}\n      />\n    );\n  };\n\n  return (\n    <SafeAreaLayout insets={SaveAreaInset.TOP}>\n      <Toolbar\n        title='React Navigation Ex \ud83d\udc31'\n        backIcon={MenuIcon}\n        onBackPress={props.navigation.toggleDrawer}\n      />\n      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>\n        {props.state.routes.map(createNavigationTabForRoute)}\n      </TabBar>\n      <Divider/>\n    </SafeAreaLayout>\n  );\n};\n")),(0,r.kt)("img",{src:"/assets/blog/using-react-navigation-5-with-ui-kitten/drawer-navigator.gif",height:"420"}),(0,r.kt)("h3",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"The new React Navigation has great TypeScript support and exports type definitions for navigators and custom navigation components. Sometimes you may want to type-check the params you're passing when navigating between routes. You also may want to make autocomplete work when working with navigation props.\xa0"),(0,r.kt)("p",null,"Let's add some type definitions for Auth screens. For this purpose, open\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/blob/complete-exmaples/src/navigation/auth.navigator.tsx"},"./src/navigation/auth.navigator.tsx")," and paste the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { RouteProp } from '@react-navigation/core';\nimport { StackNavigationProp } from '@react-navigation/stack';\nimport { AppRoute } from './app-routes';\n\ntype AuthNavigatorParams = {\n  [AppRoute.SIGN_IN]: undefined;\n  [AppRoute.SIGN_UP]: undefined;\n  [AppRoute.RESET_PASSWORD]: undefined;\n}\n\nexport interface SignInScreenProps {\n  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;\n  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;\n}\n\nexport interface SignUpScreenProps {\n  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_UP>;\n  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_UP>;\n}\n\nexport interface ResetPasswordScreenProps {\n  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;\n  route: RouteProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;\n}\n")),(0,r.kt)("p",null,"Now you can modify props of Auth screens props by adding types to make your autocomplete and IntelliSense work. For more complex examples, consider reading ",(0,r.kt)("a",{parentName:"p",href:"/docs/typescript"},"type-checking")," doc or reviewing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artyorsh/react-navigation-ex-demo/tree/complete-exmaples"},"complete demo application sources"),"."),(0,r.kt)("img",{src:"/assets/blog/using-react-navigation-5-with-ui-kitten/typescript.gif"}),(0,r.kt)("h3",{id:"useful-links"},"Useful links"),(0,r.kt)("p",null,"By the links below, you can find a lot of useful information about UI Kitten and React Navigation 5. The demo application may contain more complex examples. Also, by referring to the app built by the React Navigation team, you can find plenty of useful examples too."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/artyorsh/react-navigation-ex-demo/tree/complete-examples"},"Demo App by UI Kitten team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/tree/main/example"},"Demo App by React Navigation team")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.expo.io/announcing-react-navigation-5-0-bd9e5d45569e"},"React Navigation 5 Highlights")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://akveo.github.io/react-native-ui-kitten/"},"UI Kitten Documentation"))))}g.isMDXComponent=!0}}]);