import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './signupScreen';
import EmailScreen from './EmailScreen';
import HomeTab from '../appTabNavigators/homeTab';
import SearchTab from '../appTabNavigators/searchTab';
import MediaTab from '../appTabNavigators/mediaTab';
import LikeTab from '../appTabNavigators/likeTab';
import ProfileTab from '../appTabNavigators/profileTab';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import FeedComponent from '../component/FeedComponent';

const Tab = createBottomTabNavigator();
const HomeStack  =createStackNavigator();

const HomeStackNavigation = ({navigation,route})=>{
    console.log("route state",route.state);
    // thi is for hide the parent header
        // if (route.state) {
        //         navigation.setOptions({
        //             tabBarVisible:route.state.index>0?false:true
        //         })
        // }
        return(
            <HomeStack.Navigator >
                <HomeStack.Screen name="Home" component={FeedComponent} />
                <HomeStack.Screen name="detail" component={DetailScreen} />

            </HomeStack.Navigator>
        )
}
const DetailScreen = (props)=>{
   return( <View>
        <Text>Detail Screen</Text>
    </View>
   )
}

const Feeds = ()=>{

    // // for set title of header by dyanmic navigatino changed
    // navigation.setOptions({headerTitle:getHeaderTitle (route)})

    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              } else if (route.name === 'search') {
                iconName = focused ? 'ios-search' : 'ios-search';
              } else if(route.name==='setting'){
                  iconName=focused?'ios-settings':'ios-settings'
              } else if(route.name==='like'){
                iconName=focused?'ios-thumbs-up':'ios-thumbs-up';
              }else if(route.name==="profile"){
                iconName=focused?'ios-contact': 'ios-contact'
              }else if(route.name==="media"){
                iconName=focused?'ios-videocam':'ios-videocam';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="home"  component={HomeStackNavigation} />
          <Tab.Screen name="search" component={SearchTab} />
          <Tab.Screen name="media" component={MediaTab} />
          <Tab.Screen name="like" component={LikeTab} />
          <Tab.Screen name="profile" component={ProfileTab} />
        </Tab.Navigator>
      
    )
}

export default Feeds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
 })
