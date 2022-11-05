/**
 * This handle all the navigation of the application
 * @react-navigation/native package used for handle navigation
 *
 * @name - name of the link to navigation in application
 * @component - name of the component imported by given path
 * @initialRouteName - that component start beginning of the starting application
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/splash/Splash';
import LoginScreen from '../screens/auth/Login';

import HygieneTrackerMenu from '../screens/hygieneTracker/Menu';

import Posts from '../screens/Posts'
import DailyTasksMainPage from '../screens/hygieneTracker/dailyTasks/MainPage';
import ChallengesMainPage from '../screens/hygieneTracker/challenges/MainPage';
import OtherTasksMainPage from '../screens/hygieneTracker/otherTasks/MainPage';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{ headerBackVisible: false, title: 'Dashboard' }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: "Hygiene Tracker Menu" }}
          name="HygieneTrackerMenu"
          component={HygieneTrackerMenu}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Posts"
          component={Posts}
        />
        <Stack.Screen
          options={{ title: "Daily Tasks" }}
          name="DailyTasksMainPage"
          component={DailyTasksMainPage}
        />
        <Stack.Screen
          options={{ title: "Challenges" }}
          name="ChallengesMainPage"
          component={ChallengesMainPage}
        />
        <Stack.Screen
          options={{ title: "Other Tasks" }}
          name="OtherTasksMainPage"
          component={OtherTasksMainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
