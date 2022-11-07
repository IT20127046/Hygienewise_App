import axios from 'axios'
import React from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Button, Dialog, Divider, List, Paragraph, Portal } from 'react-native-paper'
import CalenderViewSummary from '../../../components/hygieneTracker/CalenderView'

export default function OtherTasksListForSummary() {

  const [otherTasks, setOtherTasks] = React.useState([])
  const id = "6363813ab4af9dcf571763fc"

  const [visible, setVisible] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState("");

  const showDialog = () => {
    setVisible(true);
  }
  const hideDialog = () => {
    setVisible(false);
    setSelectedTask("");
  }

  React.useEffect(() => {
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

  if (visible) {
    return (
      <Portal.Host>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Summary</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{selectedTask}</Paragraph>
          </Dialog.Content>
          <Dialog.ScrollArea>
            <ScrollView>
              <CalenderViewSummary />
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={hideDialog} color="#5CB3FF">Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal.Host>
    );
  }

  return (
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={{ width: '100%', height: '100%' }}>
      <List.Section>
        {otherTasks.map((item, index) => {
          return (
            <View key={index}>
              <List.Item
                title={item.taskName}
                titleStyle={{ color: 'black', fontSize: 20 }}
                description={item.taskDescription}
                descriptionStyle={{ color: 'gray' }}
                right={props => <List.Icon {...props} icon="chevron-right" color="black" />}
                onPress={
                  () => {
                    showDialog();
                    setSelectedTask(item.taskName);
                  }
                }
              />
              <Divider />
            </View>
          )
        })}
      </List.Section>
    </ImageBackground>
  )
}
