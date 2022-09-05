import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import Profile from './Profile';

const Home=({ navigation })=> {
  return (
    <View style={styles.imageWrapper}>
    <StatusBar
backgroundColor="red"
/>
    <ImageBackground style={styles.imageWrapper} source={{
      uri: 'https://wallpaperaccess.com/full/1985009.png',
    }}>
    <View style={styles.centerText}>
 <Text style={styles.textcolor}>GOD BLESS</Text>
 <Text style={styles.textcolor}>THE <Text style={styles.textcolorGreen}>GREEN</Text></Text>
 <View style={styles.button}>

  <Button style={{ color: "white"}}
  onPress={()=>navigation.navigate("Profile")}
  title="click Here"
  color= "green"
 ></Button> 
 </View>
 </View>
    </ImageBackground>
</View>
  );
}

const styles = StyleSheet.create({
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
},
imageWrapper: {
  height: 750,
  width: 550,
  overflow : "hidden"
},
centerText:{
flex:1,
alignItems:'start',
justifyContent:"center",
marginLeft: 30
},
textcolor:{
fontSize:47,
margin: 7,
color:"white",
},
textcolorGreen:{
  fontSize:70,
  margin: 7,
  color:"#32cd32",
  },
  button:{
borderWidth: 3,
padding: 10,
borderColor: '#32cd32',
margin: 7,
marginTop: 30,
borderRadius: 30,
backgroundColor: 'white',
marginLeft: 95,
color:"White",
  }
});
export default Home