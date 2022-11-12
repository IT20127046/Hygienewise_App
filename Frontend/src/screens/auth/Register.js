import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { userRegister } from '../../api/UserApi';
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

export default function Register() {

    const Navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('4488');

    const onPressRegister = () => {
        userRegister({
            userID: userID,
            userName: userName,
            password: password
          }).then((result)=>{
            if(result.data.status){
      
              alert('Registration Success');
                setTimeout(() => {
                  Navigation.navigate('Login');
                }, 2000);
            }else{
              alert('Registration Fail');
            }
          }).catch(error=>{
            console.log(error);
          })
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
            User Register
          </Text>
        </View>

        <FormBackground>
          <Icon name="user" size={100} color="#6495ed"></Icon>
          <Text />
          <TextInput
            label="User Name"
            returnKeyType="next"
            value={userName}
            onChangeText={text => setUserName(text)}
            textContentType="text"
          />

          <TextInput
            label="Password"
            returnKeyType="next"
            value={password}
            onChangeText={text => setPassword(text)}
            textContentType="password"
          />

          <SubmitButton mode="contained" color="#6495ed" onPress={onPressRegister}>
            Register
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
