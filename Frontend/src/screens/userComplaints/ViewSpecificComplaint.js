import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/BaseURL.const';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton from '../../components/form/SubmitButton';

export default function ViewSpecificComplaint({route}) {
  const Navigation = useNavigation();

  const [complaints, setComplaints] = useState([]);
  const complaintID = route.params.complaintID;
  const title = route.params.title;
  const description = route.params.description;
  const imageName = route.params.imageName;
  const imagePlace = route.params.imagePlace;
  const imageDate = route.params.imageDate;

  const [user_id, setUser_id] = useState("");
  const [userName, setUserName] = useState("");

  const [userResponse, setUserResponse] = useState([]);
  const [responseForm, setResponseForm] = useState(false);
  const [response, setResponse] = useState('');
  const [isArray, setIsArray] = useState(true);

  useEffect(() => {

    handleLoggedUser();

    retriveComplaint();

    retriveUserResponse();
  }, []);

  const retriveComplaint = () => {
    axios
      .get(BASE_URL + 'complaint/getAll')
      .then(function (res) {
        if (res.data.success) {
          setComplaints(res.data.exsitingComplaint);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  }

  const retriveUserResponse = () => {
    axios
      .get(BASE_URL + `userResponse/getAll`)
      .then(function (res) {
        if (res.data.success) {
          if(res.data.exsitingUserResponses === 0){
            setIsArray(false);
          }
          setUserResponse(res.data.exsitingUserResponses);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  }

  const handleLoggedUser = async () => {

    // Get user data from AsyncStorage
    const userData = await AsyncStorage.getItem('loggedUserData');  

    // Pass userData JSON object to array
    const userDataArray = JSON.parse(userData);

    setUser_id(userDataArray.user_id);
    setUserName(userDataArray.userName);
  }

  const onPressResponse = () => {
    setResponseForm(true);
  };

  const onPressSendResponse = () => {
    const data = {
      userID: user_id,
      userName: userName,
      complaintID: complaintID,
      reponse: response
    }

    axios
      .post(BASE_URL + 'userResponse/add', data)
      .then(function (response) {
        if (response.data.success) {
          alert("Response Send Successfull");
          retriveComplaint();
          retriveUserResponse();
          setResponseForm(false);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <View
          style={{
            backgroundColor: '#6495ed',
            padding: 8,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#ffffff'}}>View Complaint</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.priviewDiv}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.compalintTitle}>{title}</Text>

              <Image
                source={require('../../assets/images/img2.png')}
                style={styles.previewImage}
              />
            </View>

            <View>
              <Text style={styles.complaintDesc}>{description}</Text>
            </View>
          </View>

          <View style={{width: '80%'}}>
            <SubmitButton
              mode="contained"
              color="#6495ed"
              onPress={onPressResponse}>
              Send Response
            </SubmitButton>
          </View>

          <View>
            {responseForm ? (
              <View style={{alignItems: 'center'}}>
                <View style={styles.reponseDiv}>
                  <View>
                    <TextInput
                      label="Title"
                      returnKeyType="next"
                      value={response}
                      onChangeText={text => setResponse(text)}
                      textContentType="text"
                    />
                  </View>
                  <View style={{width: '80%', alignItems: 'center'}}>
                    <SubmitButton
                      mode="contained"
                      color="#6495ed"
                      onPress={onPressSendResponse}>
                      Send Response
                    </SubmitButton>
                  </View>
                </View>
              </View>
            ) : (
              <View></View>
            )}
          </View>

          <View>
          <View style={{alignItems: 'center'}}>
                <View style={styles.reponseDiv}>
                  {isArray ? <View>
                    {userResponse.map((response, index)=>{
              return(
                <View style={{borderRadius: 10, padding: 8, backgroundColor: '#ffffff', margin: 8}}>
                  <Text style={{fontSize: 18}}>{response.reponse}</Text>
                  <Text style={{fontSize: 15}}> By - {response.userName}</Text>
                  <Text/>
                </View>
              )
            })}
                  </View> : <View></View>}
                
                  </View>
                  </View>
            
          </View>

          <Text />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  previewImage: {
    height: 100,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
  },
  priviewDiv: {
    backgroundColor: '#F8F6F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    minHeight: 400,
    padding: 20,
    margin: 10,
  },
  reponseDiv: {
    backgroundColor: '#F8F6F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: '80%',
    minHeight: 20,
    padding: 20,
    margin: 10,
  },
  compalintTitle: {
    fontSize: 24,
    color: '#6495ed',
    marginBottom: 10,
  },
  complaintDesc: {
    fontSize: 14,
    marginTop: 10,
  },
});
