import React from 'react'
import axios from 'axios'
import { Divider, List } from 'react-native-paper'
import { Alert, TouchableOpacity, View } from 'react-native'
import { BASE_URL } from '../../../api/BaseURL.const'
import AsyncStorage from '@react-native-async-storage/async-storage';

/** 
 * This is for displaying the daily tasks of the current logged in user
 */

export default function TaskList() {
  const [dailyTasks, setDailyTasks] = React.useState([])
  const [id, setId] = React.useState("")
  const [userTaskId, setUserTaskId] = React.useState("")

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
  const markAsDone = (selectedTaskId) => {
    console.log("Mark as done: ", selectedTaskId)
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
                    markAsDone(item.id)
                  }
                }>
                  <List.Icon icon="checkbox-blank-circle" color="lightgray" />
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
