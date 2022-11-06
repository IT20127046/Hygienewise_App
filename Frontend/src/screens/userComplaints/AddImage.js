import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton  from '../../components/form/SubmitButton';

export default function AddImage({route}) {
    const Navigation = useNavigation();

    const title = route.params.title;
    const description = route.params.description;
    const [imageName, setImageName] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');

  return (
    <View>
      <Text>Form</Text>

      <FormBackground>
        <TextInput
          label="Place"
          returnKeyType="next"
          value={place}
          onChangeText={text => setPlace(text)}
          textContentType="text"
        />

        <TextArea
          label="Date"
          returnKeyType="next"
          value={date}
          onChangeText={text => setDate(text)}
          textContentType="text"
        />

        <SubmitButton mode="contained" color="#6495ed">
        Next
      </SubmitButton>

      </FormBackground>
    </View>
  )
}
