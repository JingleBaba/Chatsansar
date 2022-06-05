//import dependencies
import React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';
import { StatusBar, Image, StyleSheet} from 'react-native';
import { Audio } from 'expo-av';

//remove console error for touchStart
console.reportErrorsAsExceptions = false;

//add additional permission when required
const requiredPermissions = [
 Audio.requestPermissionsAsync(), //sound
 Camera.requestCameraPermissionsAsync(), //camera
 Camera.requestMicrophonePermissionsAsync() //mic
]

//wait till all the permission are either granted or rejected.
const checkAndTriggerPermission = async () => {
  for(const permission of requiredPermissions) {
    await permission;
  }
}

export default () => {
  const [permissions, setPermissions] = useState(false);
  const [isLoaded, setLoader] = useState(false);
  useEffect (() => {
    (async () => {
      const data = await checkAndTriggerPermission();
      setPermissions(true)
     })();
  },[])

  return (
    <>
      <StatusBar hidden = {false} /> 
          {!isLoaded && (<Image source={require('./assets/icon.png')}
          style= {styles.loading}/>)}
      <WebView onLoad = {() => {setLoader(true)}} source={{ uri: 'https://kiwi.chatsansar.com/' }} />
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    marginTop: '8%'
  },
});



