import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button, ScrollView} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton  from '../../components/form/SubmitButton';
import ImageButton from '../../components/posts/ImagePickerButton';
import Icon from 'react-native-vector-icons/Feather';

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
            Add New Complaint
          </Text>
        </View>

      

      <FormBackground>

      <Icon name="image" size={100} color="#6495ed"></Icon>

      <ImageButton
          mode="contained"
          color="#dfdfdf"
          onPress={onSelectImage}>
          <Icon name="image" size={20} fontWeight="bold" color="black">
            &nbsp;Choose Photo
          </Icon>
        </ImageButton>

        <TextInput
          label="Place"
          returnKeyType="next"
          value={place}
          onChangeText={text => setPlace(text)}
          textContentType="text"
        />

        <TextInput
          label="Date"
          returnKeyType="next"
          value={date}
          onChangeText={text => setDate(text)}
          textContentType="text"
        />

        <SubmitButton mode="contained" color="#6495ed" onPress={onPressNext}>
        Next
      </SubmitButton>

    <Text/>
      </FormBackground>
    </View>
    </ScrollView>
    
  )
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