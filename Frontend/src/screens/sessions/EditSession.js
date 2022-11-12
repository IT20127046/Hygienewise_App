import {React, useEffect, useState} from 'react';
import axios from 'axios';
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

export default function EditSession({route}) {
  const Navigation = useNavigation();

  const sessionID = route.params.sessionID;

  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [date, setDate] = useState(route.params.date);
  const [link, setLink] = useState(route.params.link);

  const onPressUpdate = () => {
    const data = {
      title: title,
      description: description,
     date:date,
     link:link
    };

    axios
      .put(`http://192.168.43.153:5000/session/update/${sessionID}`, data)
      .then(function (res) {
        if (res.data.success) {
          alert('Successfully Updated');
          setTimeout(() => {
            Navigation.navigate('MySessions');
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

<TextInput
        label="Date"
        returnKeyType="next"
        value={date}
        onChangeText={text => setDate(text)}
        textContentType="text"
      />



      <TextInput
        label="Link"
        returnKeyType="next"
        value={link}
        onChangeText={text => setLink(text)}
        textContentType="text"
      />


<TextArea
        label="Description"
        returnKeyType="next"
        value={description}
        onChangeText={text => setDescription(text)}
        textContentType="text"
      />

      

      <SubmitButton mode="contained" color="#6495ed" onPress={onPressUpdate}>
        Update
      </SubmitButton>
    </FormBackground>
  );
}
