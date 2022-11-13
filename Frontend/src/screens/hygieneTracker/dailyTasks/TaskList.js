import React from 'react'
import axios from 'axios'
import { Divider, List } from 'react-native-paper'
import { Alert, TouchableOpacity, View } from 'react-native'
import { BASE_URL } from '../../../api/BaseURL.const'
import AsyncStorage from '@react-native-async-storage/async-storage';

/** 
 * This is for displaying the daily tasks of the current logged in user
 */

export default function TaskList({ navigation }) {
  const [dailyTasks, setDailyTasks] = React.useState([])
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
    //console.log("userID: " + id);
  }

  React.useEffect(() => {
    handleLoggedUser();

    axios.get(BASE_URL + `userTasks/getByUserID/${id}`)
      .then(response => {
        if (response.data.success) {
          setDailyTasks(response.data.existingRecord.dailyTasks)
          setUserTaskId(response.data.existingRecord._id)
        }
        //console.log(dailyTasks)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  // To mark a task as completed
  const markAsDone = (item) => {
    console.log("Mark as done: ", item)
    let len = item.completion.length;
    if (item.completion[len - 1] !== today) {
      for (let i = 0; i < dailyTasks.length; i++) {
        if (item.id === dailyTasks[i].id) {
          dailyTasks[i].completion.push(today);
        }
      }
      axios.patch(BASE_URL + `userTasks/update/${userTaskId}`, {
        dailyTasks: dailyTasks
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

  // To delete a task
  const removeTask = (selectedTaskId) => {

    console.log("Remove task: ", selectedTaskId)
    // new array with the selected task removed
    let newDailyTasksList = dailyTasks.filter((task) => task.id !== selectedTaskId)
    //console.log('newList', newDailyTasksList)
    axios.patch(BASE_URL + `userTasks/update/${userTaskId}`, {
      dailyTasks: newDailyTasksList
    }).then(response => {
      if (response.data.success) {
        axios.delete(BASE_URL + `task/delete/${selectedTaskId}`)
          .then(response => {
            if (response.data.success) {
              setDailyTasks(newDailyTasksList)
              Alert.alert("Task deleted successfully")
            }
          }
          ).catch(error => {
            console.log("Error in removing task", error)
          })
      }
    }).catch(error => {
      console.log("Error in updating daily tasks", error)
    }).finally(() => {
    })
  }

  return (
    <List.Section>
      {dailyTasks.map((item, index) => {
        return (
          <View key={index}>
            <List.Item
              title={item.taskName}
              titleStyle={{ color: 'black', fontSize: 20 }}
              description={item.taskDescription}
              descriptionStyle={{ color: 'gray', fontSize: 15 }}
              left={() =>
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
              right={() =>
                <TouchableOpacity onPress={
                  () => {
                    removeTask(item.id)
                  }
                }>
                  <List.Icon icon="close-circle" color="lightgray" />
                </TouchableOpacity>
              }
            >
            </List.Item>
            <Divider />
          </View>
        )
      })}
    </List.Section>
  )
}
