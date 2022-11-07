import axios from 'axios';
import React from 'react'
import { Alert, ScrollView, Text, ImageBackground, View, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

/**
 * To add a new daily task 
 */

export default function AddNewDailyTask({ navigation }) {
  const [userId, setUserId] = React.useState({ value: "6363813ab4af9dcf571763fc", error: "" });               // To store the userID of the current logged in user
  const [taskName, setTaskName] = React.useState({ value: "", error: "" });                                   // To store the name of the new daily task
  const [taskType, setTaskType] = React.useState({ value: "Daily", error: "" });                              // To store the type of the task
  const [taskDescription, setTaskDescription] = React.useState({ value: "", error: "" });                     // To store the description of the new daily task
  const [userTasksList, setUserTasksList] = React.useState({ value: {}, error: "" });                         // To store the userTasksList of the current logged in user

  React.useEffect(() => {
    axios.get(`http://192.168.1.103:5000/userTasks/getByUserID/${userId.value}`).then(function (response) {   // To get the userTasksList of the current logged in user
      if (response.data.success && response.data.existingRecord !== null) {
        setUserTasksList({ value: response.data.existingRecord, error: "" });                                 // To set the userTasksList of the current logged in user
      }
    }).catch(function (error) {                                                                               // To handle the error
      console.log(error); 
    })
  }, []);

  // To add a new daily task
  const onSubmit = () => {                                                                                    
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
    else if (userId.value === "") {
      setUserId({ ...userId, error: "User Id is invalid" });
      Alert.alert("User Id is invalid. Please try again");
    }
    else if (taskName.value !== "" && taskDescription.value !== "" && taskType.value !== "" && userId.value !== "") {
      isValid = true;
    }

    // Data to be sent to the backend
    const data = {
      userId: userId.value,
      taskName: taskName.value,
      taskType: taskType.value,
      taskDescription: taskDescription.value
    }

    // validate input fields
    if (isValid) {
      // insert task to tasks collection
      axios.post('http://192.168.1.103:5000/task/add', data).then(function (response) {
        if (response.data.success) {
          // update task in the userTasks collection

          axios.patch(`http://192.168.1.103:5000/userTasks/update/${userTasksList.value._id}`, {
            dailyTasks: [...userTasksList.value.dailyTasks, { id: response.data._id, userId: userId.value, taskName: taskName.value, taskType: taskType.value, taskDescription: taskDescription.value }]
          }).then(function (response1) {
            console.log(response1.data);
            if (response1.data.success) {
              console.log("User Task List Updated Successfully");
              Alert.alert("Task Added Successfully");
              navigation.navigate('HygieneTrackerMenu');
            }
          }).catch(function (error1) {

            // delete task from tasks collection if the task is not added to userTasks collection
            axios.delete(`http://192.168.1.103:5000/task/delete/${response.data._id}`).then(function (response2) {
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
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <View style={styles.viewForText}>
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
  viewForText: {
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
})