/**
 * This is Home screen of the application
 */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import SubmitButton from '../components/auth/SubmitButton';
import Logo from '../components/auth/Logo';
import Background from '../components/auth/Background';

export default function Home({ navigation }) {
  const Navigation = useNavigation();

  return (
    <ScrollView>
      <Background>
        <Text /><Text /><Logo /><Text />
        <SubmitButton mode="contained" color="#6495ed" onPress={() => navigation.navigate("Home")}>Posts</SubmitButton><Text /><Text />
        <SubmitButton mode="contained" color="#6495ed" onPress={() => navigation.navigate("Home")}>Complaints</SubmitButton><Text /><Text />
        <SubmitButton mode="contained" color="#6495ed" onPress={() => navigation.navigate("Home")}>Sessions and Donations</SubmitButton><Text /><Text />
        <SubmitButton mode="contained" color="#6495ed" onPress={() => navigation.navigate("HygieneTrackerMenu")}>Hygiene Tracker</SubmitButton><Text /><Text />
        <Text></Text>
      </Background>
    </ScrollView>
  );
}
