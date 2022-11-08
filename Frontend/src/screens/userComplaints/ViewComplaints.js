import {React, useState} from 'react';
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
} from 'react-native';

import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton from '../../components/form/SubmitButton';

export default function ViewComplaints() {
  return (
    <ScrollView>
      <View>
        <Text>My Complaints</Text>
        </View>
    </ScrollView>
  )
}
