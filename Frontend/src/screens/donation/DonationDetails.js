/**
 * This is the Post compoenets of the application
 * User can Create a Post using their post details
 */
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Feather';
import Background from '../../components/session/Background';
import TextInput from '../../components/posts/TextInput';
import SubmitButton from '../../components/posts/SubmitButton';
import DatePickerButton from '../../components/posts/DatePickerButton';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function DonationDetails({navigation}) {
  const Navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [place, setPlace] = useState({value: '', error: ''});
  const [description, setDescription] = useState({value: '', error: ''});
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateConfirm = dates => {
    setDate(dates);
    hideDatePicker();
  };

  // This function call when the user click submit button
  const onPostPressed = () => {
    // Create constant object to pass value to backend
    const data = {
      place: place.value,
      description: description.value,
      date: date,
    };
    console.log(data);
    //Call POST method to validate user crenditals form backend and get reponse
    axios
      .post('http://192.168.43.153:5000/donation/add', data)
      .then(function (response) {
        if (response.data.success) {
          alert('Donation Created Success');
          setTimeout(() => {
            Navigation.navigate('Sessions');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert('Donation Creation Fail');
      });
  };

  return (
    <Background>
      <Text style={styles.header}>Donation Details</Text>
      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../../assets/images/dd2.png')}
            />
          </View>
        </View>

        <TextInput
          label="Place Of Donation"
          returnKeyType="next"
          value={place.value}
          onChangeText={text => setPlace({value: text, error: ''})}
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
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
          value={description.value}
          onChangeText={text => setDescription({value: text, error: ''})}
        />

        <SubmitButton mode="contained" color="#6495ed" onPress={onPostPressed}>
          Donate
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
    justifyContent: 'center',
    width: 740,
    alignSelf: 'center',
    
  },
  card: {
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 25,
    width: '115%',
    height: '95%',
    marginVertical: 0,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container: {
    alignSelf: 'center',
    margin: 2,
    flex: 1,
    width: 350,
    overflow: 'hidden', // for hide the not important parts from circle
    margin: 10,
    height: 200,
  },
  background: {
    // this shape is a circle
    // border borderRadius same as width and height
    // borderRadius: 400,
    width: 535,
    height: 600,
    marginLeft: -100, // reposition the circle inside parent view
    position: 'absolute',
    bottom: 5, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
  },
  image: {
    height: 200, // same width and height for the container
    width: 380,
    position: 'absolute', // position it in circle
    bottom: 5, // position it in circle
    marginLeft: 100, // center it in main view same value as marginLeft for circle but positive
  },
});
