import axios from 'axios';
import React from 'react'
import { Alert, ScrollView, Text, ImageBackground, View, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { BASE_URL } from '../../../api/BaseURL.const'
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * This component is used to add a new other task.
 */

export default function AddNewOtherTask({ navigation }) {
  const [userId, setUserId] = React.useState("");               // To store the userID of the current logged in user
  const [taskName, setTaskName] = React.useState({ value: "", error: "" });
  const [taskType, setTaskType] = React.useState({ value: "Other", error: "" });
  const [taskDescription, setTaskDescription] = React.useState({ value: "", error: "" });
  const [userTasksList, setUserTasksList] = React.useState({ value: {}, error: "" });

  // Get logged user details -> loggedUserData: { 'user_id' }
  const handleLoggedUser = async () => {

    // Get user data from AsyncStorage
    const userData = await AsyncStorage.getItem('loggedUserData');

    // Pass userData JSON object to array
    const userDataArray = JSON.parse(userData);

    setUserId(userDataArray.user_id);
  }

  React.useEffect(() => {
    handleLoggedUser();
    axios.get(BASE_URL + `userTasks/getByUserID/${userId}`).then(function (response) {
      if (response.data.success && response.data.existingRecord !== null) {
        setUserTasksList({ value: response.data.existingRecord, error: "" });
      }
    }).catch(function (error) {
      console.log(error);
    })
  }, [userId]);

  // This function is used to add a new other task when the user clicks the "Add" button.
  const onSubmit = () => {
    // validate the input
    let isValid = false;

    if (taskName.value === "") {
      setTaskName({ ...taskName, error: "Task Name is required" });
      Alert.alert("Task Name is required");
    }
    else if (taskDescription.value === "") {
      setTaskDescription({ ...taskDescription, error: "Task Description is required" });
      Alert.alert("Task Description is required");
    }
    else if (taskType.value === "") {
      setTaskType({ ...taskType, error: "Task Type is invalid" });
      Alert.alert("Task Type is invalid. Please try again later");
    }
    else if (userId === "") {
      Alert.alert("User Id is invalid. Please try again");
    }
    else if (taskName.value !== "" && taskDescription.value !== "" && taskType.value !== "" && userId !== "") {
      isValid = true;
    }

    const data = {
      userId: userId,
      taskName: taskName.value,
      taskType: taskType.value,
      taskDescription: taskDescription.value,
    }

    // If the user enters valid data, the new task is added to the database.
    if (isValid) {
      // insert task to tasks collection
      axios.post(BASE_URL + `task/add`, data).then(function (response) {
        if (response.data.success) {
          // update task in the userTasks collection

          axios.patch(BASE_URL + `userTasks/update/${userTasksList.value._id}`, {
            otherTasks: [...userTasksList.value.otherTasks, { id: response.data._id, userId: userId, taskName: taskName.value, taskType: taskType.value, taskDescription: taskDescription.value, completion: [""] }]
          }).then(function (response1) {
            console.log(response1.data);
            if (response1.data.success) {
              console.log("User Task List Updated Successfully");
              Alert.alert("Task Added Successfully");
              navigation.navigate('HygieneTrackerMenu');
            }
          }).catch(function (error1) {

            // delete task from tasks collection if the task is not added to userTasks collection
            axios.delete(BASE_URL + `task/delete/${response.data._id}`).then(function (response2) {
              console.log(response2.data);
              if (response2.data.success) {
                console.log("Task Deleted Successfully");
                //Alert.alert("Task Deleted Successfully");
              }
            }).catch(function (error) {
              console.log(error);
            })
            console.log(error1);
            Alert.alert("Task Added Failed");
          })
        }
      }).catch(function (error2) {
        Alert.alert("Task Added Failed");
      });
    }
  }

  return (
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={styles.imageBackground}>
      <ScrollView>
        <View style={styles.viewForTextInput}>
          <TextInput
            theme={{ colors: { primary: '#6495ed', underlineColor: 'transparent', } }}
            style={styles.textInput}
            mode='outlined'
            underlineColor="transparent"
            label="Task Name"
            returnKeyType="next"
            value={taskName.value}
            onChangeText={text => setTaskName({ value: text, error: '' })}
          />
          <Text />
          <TextInput
            theme={{ colors: { primary: '#6495ed', underlineColor: 'transparent', } }}
            style={styles.textInput}
            mode='outlined'
            underlineColor="transparent"
            label="Task Description"
            returnKeyType="next"
            value={taskDescription.value}
            onChangeText={text => setTaskDescription({ value: text, error: '' })}
          />
        </View>
      </ScrollView>
      <View style={styles.viewForButton}>
        <Button mode='contained' color='#5CB3FF' onPress={onSubmit}>Add</Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  viewForTextInput: {
    flexDirection: 'column',
    padding: 20,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  viewForButton: {
    flexDirection: 'column',
    padding: 20,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    bottom: 0,
  },
  textInput: {
    backgroundColor: 'white'
  }
});