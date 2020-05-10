import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends React.Component {

  setStoreData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('saving data, key : ' + key + ' value : ' + value)
    } catch (error) {
      // Error saving data
      console.log('error saving data : ' + error)
    }
  };

  removeStoreData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('remove data, key : ' + key)
    } catch (error) {
      // Error saving data
      console.log('error remove data : ' + error)
    }
  };

  getStoreData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        //console.log('retrieving data : ' + value);
        //alert(value)
        return value
      } else {
        console.log('read data error')
      }
    } catch (error) {
      // Error retrieving data
      console.log('read data error')
    }
  };

  saveStorage = () => {
    this.setStoreData("@key", { username: "bash", password: "1234567890" })
  }

  readStorage = () => {
    //this.getStoreData("@key")
    //this.getStoreData("@key").then(result => { alert('value : ' + result) })
    //this.getStoreData("@key").then(result => { console.log('read value : ' + result) })
    this.getStoreData("@key").then(result => {
      let jsonObject = JSON.parse(result)
      console.log('username : ' + jsonObject.username + ' , password : ' + jsonObject.password)
    })
  }

  deleteStorage = () => {
    this.removeStoreData("@key")
  }

  render() {
    let { view, btn, textBtn } = styles;
    return (
      <View style={view}>
        <TouchableOpacity style={btn} onPress={this.saveStorage}>
          <Text style={textBtn}>Save KEY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn} onPress={this.readStorage}>
          <Text style={textBtn}>Read KEY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn} onPress={this.deleteStorage}>
          <Text style={textBtn}>Delete KEY</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 50,
    width: '40%',
    backgroundColor: '#0075c4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  textBtn: {
    color: 'white',
    fontSize: 18
  }
})
