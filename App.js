import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from "./src/screens/splashscreen";
import InitialLauchScreen from './src/screens/initialLauchScreen';
import SignUp from './src/screens/signupScreen';
import EmailScreen from './src/screens/EmailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feeds from './src/screens/feedsScreen';

const Stack = createStackNavigator();
function shouldHeaderShown(route) {
  const routeName = route.state?route.state.routes[route.state.index].name:"home";

    switch (routeName) {
      case 'home':
        
        return false;
    
      default:
        break;
    }
}
 
export const getHeaderTitle = (route)=>{
  
  const routeName = route.state?route.state.routes[route.state.index]:{name:"home"};
  
  switch (routeName['name']) {
    case "home":
      return "Home"
      case 'search':
        return 'Search' ;;
      case 'media':
        return 'Media'; 
        case 'like':
          return 'Like';   
          case 'profile':
            return 'Profile'; 
    default:
      break;
  }
}

export default function App() {
  let x =1;
  // console.log("x vali us",x);
 
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{gestureEnabled:true,gestureDirection:"horizontal",cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}>
      <Stack.Screen name="feed"
        options={({ route }) => ({ title: getHeaderTitle(route),headerTitleStyle:{alignSelf:"center"},
        headerRight:()=><MaterialCommunityIcons name="send" size={24} color="black" style={{paddingRight:10}} />,
        headerLeft:()=><MaterialCommunityIcons name="camera-outline" size={24} color="black" style={{paddingLeft:10}} />,
        // headerShown:shouldHeaderShown(route)
       })}
        //  options={({ route }) => ({ title: getHeaderTitle(route) }),{headerTitleStyle:{alignSelf:"center"},
        //  headerRight:()=><MaterialCommunityIcons name="send" size={24} color="black" style={{paddingRight:10}} />,
        //  headerLeft:()=><MaterialCommunityIcons name="camera-outline" size={24} color="black" style={{paddingLeft:10}} />}}
         
         component={Feeds} />
         <Stack.Screen name="signup" component={SignUp} />
        
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
