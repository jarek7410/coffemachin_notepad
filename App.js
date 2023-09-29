import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import React from "react";
import {styles} from "./components/styles";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainPart} from "./components/MainPart";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
    <SafeAreaProvider style={{justifyContent:"flex-start",width:"100%",height:"100%"}}>
        <MainPart/>
    </SafeAreaProvider>
    <StatusBar style="auto" />
    </View>
  );
}

