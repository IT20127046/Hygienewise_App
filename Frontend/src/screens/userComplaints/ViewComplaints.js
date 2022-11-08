import {React, useEffect, useState} from 'react';
import axios from 'axios';
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
      .get('http://192.168.56.1:5000/complaint/getAll')
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
    .delete(`http://192.168.56.1:5000/complaint/delete/${id}`)
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
    <ScrollView>
      <View>
        <Text>My Complaints</Text>
        <View style={{alignItems: 'center'}}>
          {complaints.map((complaint, index) => {
            return (
              <View style={styles.complaintViewDiv}>
                <View style={styles.fixToText}>
                  <View style={{width: 150}}>
                    <ImageBackground style={styles.complaintImage} />
                  </View>
                  <View style={{width: 100}}>
                    <View>
                      <Text>{complaint.title}</Text>
                      <View style={styles.fixToButton}>
                        <View style={{ margin: 5}}><Button title='View' color="#6495ed" onPress={()=> onViewComplaint(complaint)} style={{ width: 100, fontSize: 12}}/></View>
                        <View style={{ margin: 5}}><Button title='E' color="#6495ed"    onPress={()=> onEditComplaint(complaint)} style={{ width: 100, fontSize: 12}}/></View>
                        <View style={{ margin: 5}}><Button title='D' color="#6495ed"    onPress={()=> onEDeleteComplaint(complaint._id)}style={{ width: 100, fontSize: 12}}/></View>   
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  complaintViewDiv: {
    backgroundColor: '#ffffff',
    shadowColor: '#6495ed',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    minHeight: 150,
    padding: 20,
    margin: 10,
    borderColor: '#6495ed',
    borderWidth: 2,
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
});
