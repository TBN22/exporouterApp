import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Countries from '../src/screens/countries';
import Cities from '../src/screens/cities';

import MCommIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../src/screens/home';
import Chat from '../src/screens/chat';
import Map from '../src/screens/map';
import Settings from '../src/screens/settings';
import Profile from '../src/screens/profile';
import {ProfileContextProvider} from '../src/context/profilecontext';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    StatusBar.setBackgroundColor('blue');
    StatusBar.setHidden(false);
  }, []);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="countries" component={Countries} />
    //     <Stack.Screen name="cities" component={Cities} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ProfileContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              tabBarIcon: ({color, size}) => (
                <MCommIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="chat"
            component={Chat}
            options={{
              title: 'Chat',
              tabBarIcon: ({color, size}) => (
                <MCommIcons name="chat" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="map"
            component={Map}
            options={{
              title: 'Map',
              tabBarIcon: ({color, size}) => (
                <MCommIcons name="google-maps" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="settings"
            component={Settings}
            options={{
              title: 'Settings',
              tabBarIcon: ({color, size}) => (
                <MCommIcons name="account-settings" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              title: 'Profile',
              tabBarIcon: ({color, size}) => (
                <MCommIcons name="account-settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ProfileContextProvider>
  );
}

export default App;
