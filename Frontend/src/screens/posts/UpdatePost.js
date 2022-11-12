/**
 * This is the Post compoenets of the application
 * User can Create a Post using their post details
 */
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Background from '../../components/posts/Background';
import TextInput from '../../components/posts/TextInput';
import SubmitButton from '../../components/posts/SubmitButton';

import {StyleSheet, Text, Image, View} from 'react-native';

export default function UpdatePost({route}) {
  const Navigation = useNavigation();

  const postID = route.params.postId;

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  // const [date, setDate] = useState('');

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

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // This function call when the user click submit button
  const onPressUpdate = () => {
    console.log(postID)
    // Create constant object to pass value to backend
    if (title.value === '') {
      alert('Please input title');
    } else if (description.value == '') {
      alert('Please input description');
    } else {
      const data = {
        title: title,
        description: description,
        // publishDate: date,
        // publishTime: time,
      };
      //Call POST method to validate user crenditals form backend and get reponse
      axios
        .put(`http://172.18.12.241:5000/post/update/${postID}`, data)
        .then(function (res) {
          if (res.data.success) {
            alert('Success');
            setTimeout(() => {
              Navigation.navigate('ViewPostList');
            }, 2000);
          }
        })
        .catch(function (error) {
          alert('Fail' + error);
        });
    }
  };

  return (
    <Background>
      <Text style={styles.header}></Text>

      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../../assets/images/img4.png')}
            />
          </View>
        </View>

        {/* <ImageButton
           mode="contained"
           color="#dfdfdf"
           onPress={handelChoosePhoto}>
           <Icon name="image" size={20} fontWeight="bold" color="black">
             &nbsp;Choose Photo
           </Icon>
         </ImageButton> */}

        <TextInput
          label="Post Title"
          returnKeyType="next"
          value={title}
          onChangeText={text => setTitle(text)}
        />

        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={text => setDescription(text)}
        />

        {/* <View style={styles.parent}>
          <DatePickerButton
          style={styles.button}
            mode="contained"
            color="#dfdfdf"
            onPress={showDatePicker}>
            <Icon name="calendar" size={20} fontWeight="bold" color="black">
              &nbsp;Published Date
            </Icon>
          </DatePickerButton>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </View> */}

        <SubmitButton mode="contained" color="#6495ed" onPress={onPressUpdate}>
          Update
        </SubmitButton>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -100,
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
    height: '100%',
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
    margin: 2,
    flex: 1,
    width: 350,
    overflow: 'hidden', // for hide the not important parts from circle
    margin: 10,
    height: 200,
  },
  background: {
    // this shape is a circle
    borderRadius: 400, // border borderRadius same as width and height
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
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 5,
    marginHorizontal: 0,
    color: '#ffffff',
  },
});
