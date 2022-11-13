import React from 'react'
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import axios from 'axios'
import { BASE_URL } from '../../api/BaseURL.const';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Menu screen for the Hygiene tracker
 */

export default function Menu({ navigation }) {

  const [id, setId] = React.useState("")

  // Get logged user details -> loggedUserData: { 'user_id' }
  const handleLoggedUser = async () => {

    // Get user data from AsyncStorage
    const userData = await AsyncStorage.getItem('loggedUserData');

    // Pass userData JSON object to array
    const userDataArray = JSON.parse(userData);

    setId(userDataArray.user_id);
  }

  React.useEffect(() => {
    handleLoggedUser();
    // if the current user does not have userTask record, create one
    axios.get(`${BASE_URL}userTasks/getByUserID/${id}`).then(function (response) {
      if (response.data.success) {
        if (response.data.existingRecord === null) {
          axios.post(`${BASE_URL}userTasks/add`, {
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
  }, [id]);

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
