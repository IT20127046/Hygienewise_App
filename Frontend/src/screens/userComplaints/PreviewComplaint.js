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
      title:title,
      description:description,
      imageName: "imageName xx",
      imagePlace:place,
      imageDate:date,
    }

    console.log(data);

    axios.post(BASE_URL + 'complaint/add', data)
      .then(function (response) {
        if (response.data.success) {
          alert('Success');
          setTimeout(() => {
            Navigation.navigate('Complaints');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  }

  return (
    <ScrollView>
      <View>
        <Text>Preview</Text>

        <View style={{alignItems: 'center'}}>
        <View style={styles.priviewDiv}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.compalintTitle}>{title}</Text>

                <Image source={'../../assets/images/MenuBackground.jpg'} style={styles.previewImage} />
            </View>

            <View>
                <Text style={styles.complaintDesc}>{description}</Text>
            </View>
        </View>
        </View>

        <View style={{alignItems: 'center'}}>
        <SubmitButton mode="contained" color="#6495ed" onPress={onSubmitComplaint} style={{ width: '80%' }}>
        Next
      </SubmitButton>
        </View>

        
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  previewImage: {
    height: 100,
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
  },
  priviewDiv: {
    backgroundColor: '#ffffff',
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
    margin: 10
  },
  compalintTitle: {
    fontSize: 24,
    color: '#6495ed',
    marginBottom: 10
  },
  complaintDesc: {
    fontSize: 14,
    marginTop: 10,
  }
});
