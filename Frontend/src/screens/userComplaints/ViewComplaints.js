import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../api/BaseURL.const';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
  ImageBackground,
  Alert 
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import TextInput from '../../components/form/TextInput';
import FormBackground from '../../components/form/FormBackground';
import TextArea from '../../components/form/TextArea';
import SubmitButton from '../../components/form/SubmitButton';

export default function ViewComplaints() {
    const Navigation = useNavigation();

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    retriveComplaints();
  }, []);

  const retriveComplaints = () => {
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


  const onViewComplaint = (complaint) => {

    const complaintData = {
        complaintID: complaint._id,
        title: complaint.title,
        description: complaint.description,
        imageName: complaint.imageName,
        imagePlace: complaint.imagePlace,
        imageDate: complaint.imageDate
    }

    Navigation.navigate('ViewSpecificComplaint', complaintData);
  }

  const onEditComplaint = (complaint) => {
    const complaintData = {
        complaintID: complaint._id,
        title: complaint.title,
        description: complaint.description,
        imagePlace: complaint.imagePlace,
        imageDate: complaint.imageDate
    }

    Navigation.navigate('EditComplaint', complaintData);
  }
  
  const onEDeleteComplaint = (id) => {

    Alert.alert(
        "Are You Sure?",
        "Are you sure to delete this complaint?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => deleteComplaint(id) }
        ]
      );

    

  }

  const deleteComplaint = (id) => {
    axios
    .delete(BASE_URL + `complaint/delete/${id}`)
    .then(function (res) {
      if (res.data.success) {
        alert("Delete Successfull");
        setTimeout(()=>{
            retriveComplaints();
        }, 1000)
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
          <Text style={{fontSize: 20, color: '#ffffff'}}>
            View Complaints
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          {complaints.map((complaint, index) => {
            return (
              <View style={styles.complaintViewDiv}>
                <View style={styles.fixToText}>
                  <View style={{width: 150}}>
                    <Image source={require('../../assets/images/img2.png')} style={styles.previewImage} />
                  </View>
                  <View style={{width: 100}}>
                    <View>
                      <Text style={{fontSize: 18}}>{complaint.title}</Text>
                      <View style={styles.fixToButton}>
                        <View style={{ margin: 5}}><Button title='View' color="#6495ed" onPress={()=> onViewComplaint(complaint)} style={{ width: 100, fontSize: 12}}/></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <Text/>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
  },
  complaintViewDiv: {
    backgroundColor: '#F8F6F0',
    shadowColor: '#6495ed',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    minHeight: 150,
    padding: 20,
    margin: 10,
    borderRadius: 10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
  },
  fixToButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  complaintImage: {
    height: 100,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
  },
  previewImage: {
    height: 100,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10
  },
});
