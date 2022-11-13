import React from 'react'
import axios from 'axios'
import { Divider, List } from 'react-native-paper'
import { Alert, TouchableOpacity, View } from 'react-native'
import { BASE_URL } from '../../../api/BaseURL.const'
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * This component is used to display the list of other tasks.
 */

export default function TaskList() {
  const [otherTasks, setOtherTasks] = React.useState([])
  const [id, setId] = React.useState("")
  const [userTaskId, setUserTaskId] = React.useState("")
  const today = new Date().toLocaleDateString();

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
    // Get the list of other tasks from the database.
    axios.get(BASE_URL + `userTasks/getByUserID/${id}`)
      .then(response => {
        if (response.data.success) {
          setOtherTasks(response.data.existingRecord.otherTasks)
          setUserTaskId(response.data.existingRecord._id)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  const markAsDone = (item) => {
    console.log("Mark as done: ", item)
    let len = item.completion.length;
    if (item.completion[len - 1] !== today) {
      for (let i = 0; i < otherTasks.length; i++) {
        if (item.id === otherTasks[i].id) {
          otherTasks[i].completion.push(today);
        }
      }
      axios.patch(BASE_URL + `userTasks/update/${userTaskId}`, {
        otherTasks: otherTasks
      })
        .then(response => {
          if (response.data.success) {
            Alert.alert("Task marked as done!")
            navigation.navigate("HygieneTrackerMenu")
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  const removeTask = (selectedTaskId) => {
    console.log("Remove task: ", selectedTaskId)
    // new array with the selected task removed
    let newOtherTasksList = otherTasks.filter((task) => task.id !== selectedTaskId)
    axios.patch(BASE_URL + `userTasks/update/${userTaskId}`, {
      otherTasks: newOtherTasksList
    }).then(response => {
      if (response.data.success) {
        axios.delete(BASE_URL + `task/delete/${selectedTaskId}`)
          .then(response => {
            if (response.data.success) {
              setOtherTasks(newOtherTasksList)
              Alert.alert("Task deleted successfully")
            }
          })
          .catch(error => {
            console.log('Error in removing task', error)
          })
      }
    }
    ).catch(error => {
      console.log('Error in updating daily tasks', error)
    })
  }

  return (
    <List.Section>
      {otherTasks.map((item, index) => {
        return (
          <View key={index}>
            <List.Item
              title={item.taskName}
              titleStyle={{ color: 'black', fontSize: 20 }}
              description={item.taskDescription}
              descriptionStyle={{ color: 'gray', fontSize: 15 }}
              left={props =>
                <TouchableOpacity onPress={
                  () => {
                    markAsDone(item)
                  }
                }>
                  {item.completion.map((item1, index1) => {
                    let completionArrayLen = item.completion.length;
                    if (index1 === completionArrayLen - 1 && item1 === today) {
                      return (
                        <List.Icon icon="check-circle" color="green" />
                      )
                    }
                    else if (index1 === completionArrayLen - 1 && item1 !== today) {
                      return (
                        <List.Icon icon="circle-outline" color="black" />
                      )
                    }
                  })
                  }
                </TouchableOpacity>
              }
              right={props =>
                <TouchableOpacity onPress={
                  () => {
                    removeTask(item.id)
                  }
                }>
                  <List.Icon {...props} icon="close-circle" color="lightgray" />
                </TouchableOpacity>
              }
            />
            <Divider />
          </View>
        )
      })}
    </List.Section>
  )
}
