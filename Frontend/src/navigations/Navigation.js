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
import UserComplaints from '../screens/userComplaints/Complaints';
import SelectComplaintType from '../screens/userComplaints/SelectComplaintType';
import AddComplaintDetails from '../screens/userComplaints/AddComplaintDetails';
import Posts from '../screens/Posts'
import DailyTasksMainPage from '../screens/hygieneTracker/dailyTasks/MainPage';
import ChallengesMainPage from '../screens/hygieneTracker/challenges/MainPage';
import OtherTasksMainPage from '../screens/hygieneTracker/otherTasks/MainPage';
import AddSessions from '../screens/sessions/AddSession';
import AddImageToComplaint from '../screens/userComplaints/AddImage';
import ViewSessions from '../screens/sessions/ViewSession';


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
        <Stack.Screen
          options={{title: "Sessions"}}
          name="Sessions"
          component={AddSessions}
        />


        <Stack.Screen
          options={{title: "User Complaints"}}
          name="Complaints"
          component={UserComplaints}
        />
        <Stack.Screen
          options={{title: "Add New Complaint"}}
          name="SelectComplaintType"
          component={SelectComplaintType}
        />
        <Stack.Screen
          options={{title: "Add New Complaint"}}
          name="AddComplaintDetails"
          component={AddComplaintDetails}
        />
         <Stack.Screen
          options={{title: ""}}
          name="ViewAllSessions"
          component={ViewSessions}
        />
        <Stack.Screen

          options={{title: ""}}
          name="Sessions"
          component={AddSessions}

          options={{title: "Add New Complaint"}}
          name="AddImageToComplaint"
          component={AddImageToComplaint}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
