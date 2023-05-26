import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default function App() {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.AUDIO_RECORDING,
      Permissions.MEDIA_LIBRARY
    );
    if (status !== 'granted') {
      console.log('Camera, microphone, and file upload permissions not granted!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://metachat.chatsansar.com/' }}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        style={styles.webview}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  }
});
