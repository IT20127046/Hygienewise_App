import {React, useState} from 'react';
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
import Background from '../../components/userComplaint/Background';
import Icon from 'react-native-vector-icons/AntDesign';

export default function AddComplaintDetails({navigation}) {
  const Navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onPressNext = () => {

    if(title.length == 0){
      alert("Plases Enter the Title");
    }else if(description.length == 0){
      alert("Plases Enter the Description");
    }else {
      const data = {
        title: title,
        description: description,
      };
  
      Navigation.navigate('AddImageToComplaint', data);
    }
   
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
            Add New Complaint
          </Text>
        </View>

        <FormBackground>
          <Icon name="questioncircleo" size={100} color="#6495ed"></Icon>
          <Text />
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
