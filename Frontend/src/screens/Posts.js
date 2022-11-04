/**
 * This is the Post compoenets of the application
 * User can Create a Post using their post details
 */
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Feather';
import Background from '../components/posts/Background';
import TextInput from '../components/posts/TextInput';
import SubmitButton from '../components/posts/SubmitButton';
import DatePickerButton from '../components/posts/DatePickerButton';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Posts() {
  const Navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  //  const [titleemail, setEmail] = useState({value: '', error: ''});
  //  const [password, setPassword] = useState({value: '', error: ''});

  //  // This function call when the user click login button
  //  const onLoginPressed = () => {
  //    // Create constant object to pass value to backend
  //    const data = {
  //      userID: email.value,
  //      password: password.value,
  //    };

  //    //Call POST method to validate user crenditals form backend and get reponse
  //    axios
  //      .post('http://172.18.12.241:5000/user/login', data)
  //      .then(function (response) {
  //        if (response.data.success) {
  //          alert('Login Success');
  //          setTimeout(() => {
  //            Navigation.navigate('Home');
  //          }, 2000);
  //        }
  //      })
  //      .catch(function (error) {
  //        alert('Login Fail');
  //      });
  //  };

  return (
    <Background>
      <Text style={styles.header}>Create New Post</Text>

      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../assets/images/CreatePost.jpg')}
            />
          </View>
        </View>

        <TextInput
          label="Post Title"
          returnKeyType="next"
          //  value={email.value}
          onChangeText={text => setTitle({value: text, error: ''})}
        />

        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
          //  value={password.value}
          onChangeText={text => setDescription({value: text, error: ''})}
          secureTextEntry
        />
        <View style={styles.parent}>
          <DatePickerButton
            mode="contained"
            color="#dfdfdf"
            onPress={showDatePicker}>
            <Icon name="calendar" size={20} fontWeight="bold" color="black">
              &nbsp;Date
            </Icon>
          </DatePickerButton>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <DatePickerButton
            mode="contained"
            color="#dfdfdf"
            onPress={showDatePicker}>
            <Icon name="clock" size={20} fontWeight="bold" color="black">
              &nbsp;Time
            </Icon>
          </DatePickerButton>
        </View>
        <SubmitButton mode="contained" color="#6495ed">
          Submit
        </SubmitButton>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 8,
    marginTop: -60,
    bottom: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 25,
    width: '115%',
    marginVertical: 3,
    borderWidth: 1,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    alignSelf: 'center',
    marginTop: 5,
    flex: 1,
    width: 380,
    overflow: 'hidden', // for hide the not important parts from circle
    margin: 10,
    height: 200,
  },
  background: {
    // this shape is a circle
    borderRadius: 400, // border borderRadius same as width and height
    width: 600,
    height: 600,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 200, // same width and height for the container
    width: 370,
    position: 'absolute', // position it in circle
    bottom: 5, // position it in circle
    marginLeft: 105, // center it in main view same value as marginLeft for circle but positive
  },
});
