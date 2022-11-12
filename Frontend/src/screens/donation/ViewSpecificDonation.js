import {React, useEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather';
import Background from '../../components/session/Background';
import TextInput from '../../components/posts/TextInput';
import SubmitButton from '../../components/posts/SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {BASE_URL} from '../../api/BaseURL.const';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';

export default function ViewSpecificDonation({route}) {
  const Navigation = useNavigation();

  const place = route.params.place;
  const description = route.params.description;
  const date = route.params.date;

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

        <TextInput label="Session Title" returnKeyType="next" value={place} />

        <TextInput label="Date" value={date} />

        <TextInput
          label="Description"
          multiline={true}
          numberOfLines={4}
          value={description}
        />
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
    borderRadius: 400,
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
