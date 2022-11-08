import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

    const [uri, setUri] = useState('');

    const onSelectImage = () => {
      const options = {
        storageOptions: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: true
      };

      launchImageLibrary(options, res => {
        console.log('Response =', res);
        if(res.didCancel){
          console.log('Cancel');
        }
        else if(res.error){
          console.log('Error');
        }
        else if(res.customButton){
          console.log('Custom Button');
        }else{
          //const source = {uri: 'data:image/jpeg;base64,' + res.base64};
          setImageName(res.assets.fileName);
        }
      })
    }

    const onPressNext = () => {

      const data = {
          title: title,
          description: description,
          imageName: imageName,
          place: place,
          date: date
      }
  
      Navigation.navigate("PreviewComplaint", data)
    }

  return (
    <View>
      <Text>Form</Text>

      <Button title={'Select Image'} onPress={onSelectImage}/>

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

        <SubmitButton mode="contained" color="#6495ed" onPress={onPressNext}>
        Next
      </SubmitButton>

      </FormBackground>
    </View>
  )
}
