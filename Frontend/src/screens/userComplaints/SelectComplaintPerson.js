import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SelectList} from 'react-native-dropdown-select-list';
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

export default function SelectComplaintPerson() {
  const Navigation = useNavigation();

  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'Sri Lanka Police'},
    {key: '2', value: 'National Water Supply and Drainage Board'},
    {key: '3', value: 'Central Environmental Authority'},
    {key: '4', value: 'Forest Department'},
    {key: '5', value: 'Ministry of Health'},
  ];

  const onPressNext = () => {
    const data = {
      authorizedPerson: selected,
    };

    Navigation.navigate('AddComplaintDetails', data);
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

        <View style={styles.formBackground}>
          <View style={{alignItems: 'center'}}>
            <Icon name="user" size={100} color="#6495ed"></Icon>
          </View>

          <Text />

          <SelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
          />

          <Text />
          <SubmitButton mode="contained" color="#6495ed" onPress={onPressNext}>
            Next
          </SubmitButton>

          <Text />
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
  formBackground: {
    backgroundColor: '#F8F6F0',
    margin: 10,
    padding: 20,
    width: '100%',
    maxWidth: 340,

    borderRadius: 20,
  },
});
