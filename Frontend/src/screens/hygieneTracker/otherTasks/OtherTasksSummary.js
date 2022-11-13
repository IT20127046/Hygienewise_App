import axios from 'axios'
import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Dialog, Divider, List, Paragraph, Portal } from 'react-native-paper'
import { BASE_URL } from '../../../api/BaseURL.const'
import CalenderViewSummary from '../../../components/hygieneTracker/CalenderView'
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * This component is used to display the list of other tasks to view the summary
 */

export default function OtherTasksListForSummary() {

  const [otherTasks, setOtherTasks] = React.useState([])
  const [id, setId] = React.useState("")

  // Get logged user details -> loggedUserData: { 'user_id' }
  const handleLoggedUser = async () => {

    // Get user data from AsyncStorage
    const userData = await AsyncStorage.getItem('loggedUserData');

    // Pass userData JSON object to array
    const userDataArray = JSON.parse(userData);

    setId(userDataArray.user_id);
  }

  // This state is used to display the dialog box.
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
    handleLoggedUser();
    axios.get(BASE_URL + `userTasks/getByUserID/${id}`)
      .then(response => {
        if (response.data.success) {
          setOtherTasks(response.data.existingRecord.otherTasks)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  // to render the dialog box with the selected task details and calender
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
    <ImageBackground source={require('../../../assets/images/gradientBackground.png')} style={styles.imageBackground}>
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

const styles = StyleSheet.create({
  imageBackground: { 
    width: '100%', 
    height: '100%' 
  }
})