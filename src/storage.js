import AsyncStorage from '@react-native-community/async-storage'

const setStoreData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('saving data, key : ' + key + ' value : ' + value)
    } catch (error) {
        // Error saving data
        console.log('error saving data : ' + error)
    }
}

const removeStoreData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('remove data, key : ' + key)
    } catch (error) {
        // Error saving data
        console.log('error remove data : ' + error)
    }
}

const getStoreData = async (key) => {
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
}

const saveStorage = () => {
    setStoreData("@key", { username: "bash", password: "1234567890" })
}

const readStorage = () => {
    //this.getStoreData("@key")
    //this.getStoreData("@key").then(result => { alert('value : ' + result) })
    //this.getStoreData("@key").then(result => { console.log('read value : ' + result) })
    getStoreData("@key").then(result => {
        let jsonObject = JSON.parse(result)
        console.log('username : ' + jsonObject.username + ' , password : ' + jsonObject.password)
    })
}

const deleteStorage = () => {
    //console.log('deleteStorage in key : ' + key)
    removeStoreData("@key")
}

const _saveStorage = (key, obj) => {
    setStoreData(key, obj)
}

const _readStorage = (key) => {
    getStoreData(key).then(result => {
        let jsonObject = JSON.parse(result)
        console.log('username : ' + jsonObject.username + ' , password : ' + jsonObject.password)
    })
}

const _deleteStorage = (key) => {
    //console.log('deleteStorage in key : ' + key)
    removeStoreData(key)
}


export { _saveStorage, _readStorage, _deleteStorage, } 