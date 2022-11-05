/**
 * This is Home screen of the application
 */

import React from 'react';
import { Text, ImageBackground, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home({ navigation }) {

  return (
    <ScrollView style={{
      backgroundColor: 'white',
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      padding: 10,
    }} >
      <Card>
        <ImageBackground source={require('../assets/images/Hygienewise-Logo.png')} style={{ width: 200, height: 200, alignSelf: "center" }} />
      </Card>
      <Card onPress={() => navigation.navigate("Posts")}>
        <ImageBackground source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Posts" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Text />
      <Card onPress={() => navigation.navigate("Home")}>
        <ImageBackground source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Complaints" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Text />
      <Card onPress={() => navigation.navigate("Home")}>
        <ImageBackground source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Sessions and Donations" subtitle="Subtitle or description" />
        </ImageBackground>
      </Card>
      <Text />
      <Card onPress={() => navigation.navigate("HygieneTrackerMenu")} >
        <ImageBackground source={require('../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 120 }}>
          <Card.Title title="Hygiene Tracker" subtitle="Maintain your hygiene habits" />
        </ImageBackground>
      </Card>
      <Text/>
    </ScrollView>
  );
}



