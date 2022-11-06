import React from 'react'
import { Text, ScrollView, ImageBackground } from 'react-native'
import { Card } from 'react-native-paper';
import axios from 'axios'

/**
 * Menu screen for the Hygiene tracker
 */

export default function Menu({ navigation }) {

  const id = "6363813ab4af9dcf571763fc"

  React.useEffect(() => {
    axios.get(`http://192.168.1.102:5000/userTasks/getByUserID/${id}`).then(function (response) {
      //console.log(response.data);
      if (response.data.success) {
        if (response.data.existingRecord === null) {
          axios.post('http://192.168.1.102:5000/userTasks/add', {
            userId: id,
            dailyTasks: [],
            challenges: [],
            otherTasks: [],
            completedDailyTasks: [],
            completedChallenges: [],
            completedOtherTasks: [],
          }).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.log(error);
          }
          )
        }
      }
    }).catch(function (error) {
      console.log(error);
    })
  }, []);

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
