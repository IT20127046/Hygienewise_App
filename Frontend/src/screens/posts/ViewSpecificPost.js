/**
 * This is the Post compoenets of the application
 * User can Create a Post using their post details
 */
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Background from '../../components/posts/Background';
import Icon from 'react-native-vector-icons/Feather';
import SubmitButton from '../../components/posts/SubmitButton';
import {StyleSheet, Text, Image, View} from 'react-native';

export default function UpdatePost({route}) {
  const Navigation = useNavigation();

  const postID = route.params.postId;
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);

  // This function call when the user click submit button
  const onPressUpdate = () => {
    alert('Post Saved Success');
    setTimeout(() => {
      Navigation.navigate('SavedPosts');
    }, 2000);
  };

  return (
    <Background>
      <Text style={styles.header}>{title}</Text>
      <View style={[styles.card, styles.shadowProp]}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../../assets/images/img4.png')}
            />
          </View>
        </View>
        <Text style={styles.body}>{description}</Text>
        <SubmitButton mode="contained" color="#6495ed" onPress={onPressUpdate}>
          <Icon name="bookmark" size={20} fontWeight="bold" color="white">
            &nbsp;Save
          </Icon>
        </SubmitButton>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -10,
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
  body: {
    fontSize: 20,
    marginTop: 10,
    bottom: 5,
  },
});
