import React from 'react'
import axios from 'axios'
import { Divider, List } from 'react-native-paper'
import { View } from 'react-native'

export default function TaskList() {
  const [otherTasks, setOtherTasks] = React.useState([])
  const id = "6363813ab4af9dcf571763fc"

  React.useEffect(() => {
    axios.get(`http://192.168.1.103:5000/userTasks/getByUserID/${id}`)
      .then(response => {
        if (response.data.success) {
          setOtherTasks(response.data.existingRecord.otherTasks)
        }
        //console.log(otherTasks)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
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
              left={props => <List.Icon {...props} icon="checkbox-blank-circle" color="lightgray" />}
              right={props => <List.Icon {...props} icon="close-circle" color="lightgray" />}
            />
            <Divider />
          </View>
        )
      })}
    </List.Section>
  )
}
