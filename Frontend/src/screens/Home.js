/**
 * This is Home screen of the application
 */

import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, ScrollView, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

  const [userToken, setUserToken] = useState([]);
  const [user_id, setUser_id] = useState("");
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    handleLoggedUser();
  }, [])

  // Get logged user details -> loggedUserData: { 'user_id': '', 'userID': '', userName: '' }
  const handleLoggedUser = async () => {

    // Get user data from AsyncStorage
    const userData = await AsyncStorage.getItem('loggedUserData');  

    // Pass userData JSON object to array
    const userDataArray = JSON.parse(userData);

    setUserToken(userDataArray);
    setUser_id(userDataArray.user_id);
    setUserID(userDataArray.userID);
    setUserName(userDataArray.userName);
  }

  const handleLogout = () => {
    AsyncStorage.removeItem('AccessToken'); 
    alert("User Logout")
    setTimeout(()=>{
      navigation.navigate("Login");
    }, 2000)
  }


  return (

<ScrollView style={styles.scrollVew} >

  <Text> -- Logged User -- </Text>

  <Text>User ID - {userToken.userID}</Text>
  <Text>User Name - {userToken.userName}</Text>

  <Button title="Logout" onPress={handleLogout}/>
      <Card style={styles.card}>
        <ImageBackground source={require('../assets/images/Hygienewise-Logo.png')} style={{ width: 200, height: 200, alignSelf: "center" }} />
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("Posts")}>
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Posts" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("Complaints")}>
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Complaints" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
 

      <Card style={styles.card} onPress={() => navigation.navigate("SelectSession")}>

        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>

          <Card.Title title="Sessions and Donations" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("HygieneTrackerMenu")} >
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Hygiene Tracker" subtitle="Maintain your hygiene habits" />
        </ImageBackground>
      </Card>
      <Text/>
    </ScrollView>

    
    
  );

  
}



const styles = StyleSheet.create({
  scrollVew: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 20,
  }
});