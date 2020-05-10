import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { _saveStorage, _readStorage, _deleteStorage, } from './src/storage'

const key = "@key"
const username = "bash"
const password = "pass123098"

export default class App extends React.Component {

  saveKey = () => { _saveStorage(key, { username: username, password: password }) }
  readKey = () => { _readStorage(key) }
  dellKey = () => { _deleteStorage(key) }


  render() {
    let { view, btn, textBtn } = styles;
    return (
      <View style={view}>
        <TouchableOpacity style={btn} onPress={this.saveKey}>
          <Text style={textBtn}>Save KEY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn} onPress={this.readKey}>
          <Text style={textBtn}>Read KEY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn} onPress={this.dellKey}>
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
