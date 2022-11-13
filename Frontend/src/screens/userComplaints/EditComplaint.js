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
          alert('Updated Successfull');
          setTimeout(() => {
            Navigation.navigate('MyComplaints');
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
          <Text style={{fontSize: 20, color: '#ffffff'}}>Update Complaint</Text>
        </View>

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

          <SubmitButton
            mode="contained"
            color="#6495ed"
            onPress={onPressUpdate}>
            Update
          </SubmitButton>
          <Text />
        </FormBackground>
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
});
