import React from 'react'
import { Text, ScrollView, ImageBackground, Image } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import SubmitButton from '../../components/auth/SubmitButton'

/**
 * Menu screen for the Hygiene tracker
 */

export default function Menu({ navigation }) {

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
      <Text />
      <Card onPress={() => navigation.navigate("DailyTasksMainPage")}>
        <ImageBackground source={require('../../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 200 }}>
          <Card.Title title="Daily Tasks" subtitle="Complete your daily tasks" />
        </ImageBackground>
      </Card>
      <Text />
      <Card onPress={() => navigation.navigate("ChallengesMainPage")}>
        <ImageBackground source={require('../../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 200 }}>
          <Card.Title title="Challenges" subtitle="Complete challenges to earn points" />
        </ImageBackground>
      </Card>
      <Text />
      <Card onPress={() => navigation.navigate("OtherTasksMainPage")}>
        <ImageBackground source={require('../../assets/images/MenuBackground.jpg')} style={{ width: '100%', height: 200 }}>
          <Card.Title title="Other Tasks" subtitle="Complete your other tasks" />
        </ImageBackground>
      </Card>
    </ScrollView>
  )
}
