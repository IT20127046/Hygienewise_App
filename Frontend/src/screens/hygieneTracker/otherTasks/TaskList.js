import React from 'react'
import axios from 'axios'
import { Divider, List } from 'react-native-paper'
import { TouchableOpacity, View } from 'react-native'

/**
 * This component is used to display the list of other tasks.
 */

export default function TaskList() {
  const [otherTasks, setOtherTasks] = React.useState([])
  const id = "6363813ab4af9dcf571763fc"

  React.useEffect(() => {
    // Get the list of other tasks from the database.
    axios.get(`http://192.168.1.103:5000/userTasks/getByUserID/${id}`)
      .then(response => {
        if (response.data.success) {
          setOtherTasks(response.data.existingRecord.otherTasks)
        }
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
      {otherTasks.map((item, index) => {
        return (
          <View key={index}>
            <List.Item
              title={item.taskName}
              titleStyle={{ color: 'black', fontSize: 20 }}
              description={item.taskDescription}
              descriptionStyle={{ color: 'gray', fontSize: 15 }}
              left={props =>
                <TouchableOpacity onPress={markAsDone(item)}>
                  <List.Icon {...props} icon="checkbox-blank-circle" color="lightgray" />
                </TouchableOpacity>
              }
              right={props =>
                <TouchableOpacity onPress={removeTask(item)}>
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
