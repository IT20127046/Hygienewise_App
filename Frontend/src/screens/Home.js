/**
 * This is Home screen of the application
 */

import React from 'react';
import { Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home({ navigation }) {

  return (
    <ScrollView style={styles.scrollVew} >
      <Card style={styles.card}>
        <ImageBackground source={require('../assets/images/Hygienewise-Logo.png')} style={{ width: 200, height: 200, alignSelf: "center" }} />
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("Posts")}>
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Posts" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("Complaints")}>
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Complaints" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>

      <Text />
      <Card onPress={() => navigation.navigate("MySessions")}>
        <ImageBackground source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>

      <Card style={styles.card} onPress={() => navigation.navigate("ViewAllSessions")}>
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>

          <Card.Title title="Sessions and Donations" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("HygieneTrackerMenu")} >
        <ImageBackground borderRadius={20} source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Hygiene Tracker" subtitle="Maintain your hygiene habits" />
        </ImageBackground>
      </Card>
      <Text/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollVew: {
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
  }
});