import React from 'react'
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import axios from 'axios'

/**
 * Menu screen for the Hygiene tracker
 */

export default function Menu({ navigation }) {

  const id = "6363813ab4af9dcf571763fc"

  React.useEffect(() => {
    // if the current user does not have userTask record, create one
    axios.get(`http://192.168.1.103:5000/userTasks/getByUserID/${id}`).then(function (response) {
      if (response.data.success) {
        if (response.data.existingRecord === null) {
          axios.post('http://192.168.1.103:5000/userTasks/add', {
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
    <ScrollView style={styles.scrollView} >
      <Text />
      <Card style={styles.card} onPress={() => navigation.navigate("DailyTasksMainPage")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Daily Tasks" subtitle="Complete your daily tasks" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("ChallengesMainPage")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Challenges" subtitle="Complete challenges to earn points" />
        </ImageBackground>
      </Card>
      <Card style={styles.card} onPress={() => navigation.navigate("OtherTasksMainPage")}>
        <ImageBackground borderRadius={20} source={require('../../assets/images/MenuBackground.jpg')} style={styles.imageBackground}>
          <Card.Title title="Other Tasks" subtitle="Complete your other tasks" />
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
    height: 200 
  }
});
