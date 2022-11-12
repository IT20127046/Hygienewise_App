import React from 'react'
import axios from 'axios'
import { Divider, List } from 'react-native-paper'
import { TouchableOpacity, View } from 'react-native'

/** 
 * This is for displaying the daily tasks of the current logged in user
 */

export default function TaskList() {
  const [dailyTasks, setDailyTasks] = React.useState([])
  const id = "6363813ab4af9dcf571763fc"

  React.useEffect(() => {
    axios.get(`http://192.168.1.103:5000/userTasks/getByUserID/${id}`)
      .then(response => {
        if (response.data.success) {
          setDailyTasks(response.data.existingRecord.dailyTasks)
        }
        //console.log(dailyTasks)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const markAsDone = (task) => {
    //console.log("Mark as done: ", task)
  }

  const removeTask = (task) => {
    //console.log("Remove task: ", task)
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
                <TouchableOpacity onPress={markAsDone(item._id)}>
                  <List.Icon  icon="checkbox-blank-circle" color="lightgray" />
                </TouchableOpacity>
              }
              right={() =>
                <TouchableOpacity onPress={removeTask(item._id)}>
                  <List.Icon icon="close-circle" color="lightgray"/>
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
