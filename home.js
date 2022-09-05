import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home=({navigation})=> {
  return (
    <View>
 <Text>Test Profiledddddddddddddddddddddddddddd</Text>
 <Button 
 onPress={()=>navigation.navigate("Home")}
  title="click Home"
 ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home