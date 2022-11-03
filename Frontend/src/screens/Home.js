/**
 * This is Home screnn of the application
 */
 import React from 'react';
 import {useNavigation} from '@react-navigation/native';
 import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
 
 export default function Home({navigation}) {
   const Navigation = useNavigation();
 
   return (
     <View>
       <Text></Text>
       <Text>Hello Home!</Text>
       <Button title='posts' onPress={()=>{ Navigation.navigate('Posts');}}/>

  
       <Text></Text>
     </View>
   );
 }
 