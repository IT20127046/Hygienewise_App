import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, ImageBackground} from 'react-native';
import { Card } from 'react-native-paper';

export default function SelectComplaintType() {

    const Navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView} >
      <Text />
      <Card style={styles.card} onPress={() => Navigation.navigate("AddComplaintDetails")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Community Complaint" subtitle="Community Complaint" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => Navigation.navigate("SelectComplaintPerson")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Complaint to Authorized Person" subtitle="Complaint to Authorized Person" />
        </ImageBackground>
      </Card>
  </ScrollView>

  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 20,
  },
  imageBackground: { 
    width: '100%', 
    height: 150
  }
  });
  
