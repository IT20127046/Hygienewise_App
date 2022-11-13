import {React, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton from '../../components/form/SubmitButton';
import Background from '../../components/userComplaint/Background';
import Icon from 'react-native-vector-icons/AntDesign';

export default function UserProfile() {

    const Navigation = useNavigation();

    const [userID, setUserID] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(()=>{
        handleLoggedUser();
      }, [])

    const handleLoggedUser = async () => {
 
        // Get user data from AsyncStorage
        const userData = await AsyncStorage.getItem('loggedUserData');  
    
        // Pass userData JSON object to array
        const userDataArray = JSON.parse(userData);
    
        setUserID(userDataArray.userID);
        setUserName(userDataArray.userName);
      }

    const handleLogout = () => {
        AsyncStorage.removeItem('AccessToken'); 
        alert("User Logout")
        setTimeout(()=>{
            Navigation.navigate("Login");
        }, 2000)
      }

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View
          style={{
            backgroundColor: '#6495ed',
            padding: 8,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#ffffff'}}>
            My Profile
          </Text>
        </View>

        <FormBackground>
          <Icon name="user" size={100} color="#6495ed"></Icon>
          <Text/>

          <Text style={{fontSize: 18}}>User ID - {userID}</Text>
          <Text/>
          <Text style={{fontSize: 18}}>User Name - {userName}</Text>
          <Text/>
         
          <SubmitButton mode="contained" color="#6495ed" onPress={handleLogout}>
            Logout
          </SubmitButton>

          <Text />
        </FormBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      padding: 10,
    },
  });
