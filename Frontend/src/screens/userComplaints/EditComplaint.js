import {React, useEffect, useState} from 'react';
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
  ImageBackground,
} from 'react-native';

import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton from '../../components/form/SubmitButton';

export default function EditComplaint({route}) {
  const Navigation = useNavigation();

  const complaintID = route.params.complaintID;

  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [imagePlace, setImagePlace] = useState(route.params.imagePlace);
  const [imageDate, setImageDate] = useState(route.params.imageDate);

  const onPressUpdate = () => {
    const data = {
      title: title,
      description: description,
      imagePlace: imagePlace,
      imageDate: imageDate,
    };

    axios
      .put(BASE_URL + `complaint/update/${complaintID}`, data)
      .then(function (res) {
        if (res.data.success) {
          alert('Success');
          setTimeout(() => {
            Navigation.navigate('ViewComplaints');
          }, 2000);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  };

  return (
    <FormBackground>
      <TextInput
        label="Title"
        returnKeyType="next"
        value={title}
        onChangeText={text => setTitle(text)}
        textContentType="text"
      />

      <TextArea
        label="Description"
        returnKeyType="next"
        value={description}
        onChangeText={text => setDescription(text)}
        textContentType="text"
      />

      <TextInput
        label="Image Place"
        returnKeyType="next"
        value={imagePlace}
        onChangeText={text => setImagePlace(text)}
        textContentType="text"
      />

      <TextInput
        label="Image Date"
        returnKeyType="next"
        value={imageDate}
        onChangeText={text => setImageDate(text)}
        textContentType="text"
      />

      <SubmitButton mode="contained" color="#6495ed" onPress={onPressUpdate}>
        Update
      </SubmitButton>
    </FormBackground>
  );
}
