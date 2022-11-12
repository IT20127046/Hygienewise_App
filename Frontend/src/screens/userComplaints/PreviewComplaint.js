import {React, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/BaseURL.const';
import {useNavigation} from '@react-navigation/native';
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

export default function PreviewComplaint({route}) {
  const Navigation = useNavigation();

  const title = route.params.title;
  const description = route.params.description;
  const imageName = route.params.imageName;
  const place = route.params.place;
  const date = route.params.date;

  const onSubmitComplaint = () => {
    const data = {
      title: title,
      description: description,
      imageName: 'imageName xx',
      imagePlace: place,
      imageDate: date,
    };
    
    axios
      .post(BASE_URL + 'complaint/add', data)
      .then(function (response) {
        if (response.data.success) {
          alert('Complaint Send Successfull');
          setTimeout(() => {
            Navigation.navigate('Complaints');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  };

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
            Preview Complaint
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.priviewDiv}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.compalintTitle}>{title}</Text>

              <Image
                source={require('../../assets/images/img2.png')}
                style={styles.previewImage}
              />
            </View>

            <View>
              <Text style={styles.complaintDesc}>{description}</Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <SubmitButton
            mode="contained"
            color="#6495ed"
            onPress={onSubmitComplaint}
            style={{width: '80%'}}>
            Send 
          </SubmitButton>
        </View>
      </View>
    </ScrollView>
  );
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
  previewImage: {
    height: 100,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
  },
  priviewDiv: {
    backgroundColor: '#F8F6F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    minHeight: 400,
    padding: 20,
    margin: 10,
  },
  compalintTitle: {
    fontSize: 24,
    color: '#6495ed',
    marginBottom: 10,
  },
  complaintDesc: {
    fontSize: 14,
    marginTop: 10,
  },
});
