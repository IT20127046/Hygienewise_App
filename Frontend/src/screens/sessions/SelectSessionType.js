import React from 'react'
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import axios from 'axios'

/**
 * Menu screen for the Hygiene tracker
 */

export default function SelectSession({ navigation }) {


  return (
    <ScrollView style={styles.scrollView} >
      <Text />
      <Card style={styles.card} onPress={() => navigation.navigate("ViewAllSessions")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="All Session" subtitle="View All Awareness Sessions" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("Sessions")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Add New Session" subtitle="Add a new session to the system" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("ListOfDonation")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="My Sessions" subtitle="View My Sessions" />
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
    height:150
  },
  imageBackground: { 
    width: '100%', 
    height: 150 
  }
});
