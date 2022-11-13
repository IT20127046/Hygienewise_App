/**
 * This is the Post compoenets of the application
 * User can Create a Post using their post details
 */
import {React, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/posts/Button';
import {BASE_URL} from '../../api/BaseURL.const';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';

export default function SavedPosts() {
  const Navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrivePosts();
  }, []);

  const retrivePosts = () => {
    axios
      .get(BASE_URL + 'post/getAll')
      .then(function (res) {
        if (res.data.success) {
          setPosts(res.data.exsitingpost);
        }
      })
      .catch(function (error) {
        alert('Fail' + error);
      });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/gradientBackground.png')}
      style={styles.imageBackground}>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center'}}>
            {posts.map((post, index) => {
              return (
                <View style={styles.postViewDiv}>
                  <Text style={styles.header}>{post.title}</Text>

                  <View style={{width: 150}}>
                    <ImageBackground
                      style={styles.image}
                      source={require('../../assets/images/img6.png')}
                    />
                  </View>
                  <Text style={styles.body}>{post.description}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  postViewDiv: {
    backgroundColor: '#ffffff',
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
    margin: 20,
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
    marginTop: 30,
  },
  postImage: {
    height: 200,
    width: '230%',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 5,
  },
  image: {
    width: 320,
    height: 200,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    fontSize: 20,
    marginTop: 10,
    bottom: 5,
  },
});
