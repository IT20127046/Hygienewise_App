import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton  from '../../components/form/SubmitButton';

export default function AddComplaintDetails() {
  const Navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onPressNext = () => {

    const data = {
        title: title,
        description: description
    }

    Navigation.navigate("AddImageToComplaint", data)
  }

  return (
    <View>
      <Text>Form</Text>

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

        <SubmitButton mode="contained" color="#6495ed" onPress={onPressNext}>
        Next
      </SubmitButton>

      </FormBackground>
    </View>
  );
}
