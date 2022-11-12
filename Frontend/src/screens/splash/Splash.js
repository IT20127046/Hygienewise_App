/**
 * This components used to display small loading page
 */
 import {useNavigation} from '@react-navigation/native';
 import {React, useState, useEffect} from 'react';
 import {Image, View} from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 
 export default function Splash() {
   const [isGo, setIsGo] = useState(true);
   const Navigation = useNavigation();
 
   useEffect(() => {
     if (isGo == true) {
       setTimeout(() => {
         handleUserToken();
         setIsGo(false);
       }, 3000);
     }
   }, []);
 
   const handleUserToken = async () => {
     const userToken = await AsyncStorage.getItem('AccessToken');
 
     if(!userToken){
       Navigation.replace('Login');
     }else{
       Navigation.replace('Home');
     }
   }
 
   return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
       <Image
         source={require('../../assets/images/SplashImg1.png')}
         style={{width: '100%', height: '100%', margin: 0, padding: 0}}
       />
     </View>
   );
 }