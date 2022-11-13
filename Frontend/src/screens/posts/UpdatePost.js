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
import {BASE_URL} from '../../api/BaseURL.const';
import {StyleSheet, Image, View} from 'react-native';

export default function UpdatePost({route}) {
  const Navigation = useNavigation();

  const postID = route.params.postId;
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);

  // This function call when the user click submit button
  const onPressUpdate = () => {
    console.log(postID);
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
        .put(BASE_URL + `post/update/${postID}`, data)
        .then(function (res) {
          if (res.data.success) {
            alert('Success');
            setTimeout(() => {
              Navigation.navigate('PostMain');
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
      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../../assets/images/img5.png')}
            />
          </View>
        </View>

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
    borderRadius: 0, // border borderRadius same as width and height
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
