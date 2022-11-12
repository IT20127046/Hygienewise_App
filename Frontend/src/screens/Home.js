/**
 * This is Home screen of the application
 */

 import React, { useEffect, useState } from 'react';
 import { Text, ImageBackground, ScrollView, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
 import { Card } from 'react-native-paper';
 import {NavigationContainer} from '@react-navigation/native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 import BottomPanel from '../components/BottomPanel';
 
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
 <View>
 <ScrollView style={styles.scrollVew} >
 
 <View style={styles.fixToText}>
   <View style={{ marginTop: 10 }}>
       <Text style={styles.userNameTitle}> Hello {userToken.userName} </Text>
   </View>
   <View>
       <TouchableOpacity style={styles.userAccBtn} onPress={handleLogout}>
       </TouchableOpacity>
   </View>
     
 </View>
 
     <Card style={styles.card}>
       <ImageBackground source={require('../assets/images/Hygienewise-Logo.png')} style={{ width: 150, height: 150, alignSelf: "center" }} />
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
 
 
     <Card style={styles.card} onPress={() => navigation.navigate("SubMenu")}>
 
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
 
   <BottomPanel/>
 
 </View>
 
     
     
   );
 
   
 }
 
 
 
 const styles = StyleSheet.create({
   scrollVew: {
     backgroundColor: 'white',
     
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
   },
   userNameBackground: {
     backgroundColor: '#6495ed',
     borderRadius: 10
   },
   userNameTitle: {
     fontSize: 20,
     color: '#ffffff',
     padding: 10
   },
   fixToText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginLeft: 10,
     marginRight: 10,
     textAlign: 'justify',
     backgroundColor: '#6495ed',
     borderRadius: 10,
   },
   userAccBtn: {
     width: 50,
     height: 50,
     backgroundColor: '#ffffff',
     margin: 10,
     borderRadius: 40
   }
 });