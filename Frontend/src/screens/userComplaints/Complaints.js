import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground,ScrollView} from 'react-native';
import { Card } from 'react-native-paper';

export default function Complaints() {

  const Navigation = useNavigation();

  return (

    <ScrollView style={styles.scrollView} >
      <Text />
      <Card style={styles.card} onPress={() => Navigation.navigate("SelectComplaintType")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Add New Complaint" subtitle="Add New Complaint" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => Navigation.navigate("ViewComplaints")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="View Complaints" subtitle="View Complaints" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => Navigation.navigate("MyComplaints")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="My Complaints" subtitle="My Complaints" />
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
