import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView  } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Info=({ navigation })=> {
   const route = useRoute()
//  console.warn(route.params)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ScrollView >
    <View  style={{backgroundColor:"#a0d6b4",
           margin:30, 
           flex:1, 
           alignItems:"center", 
           justifyContent: "center", 
           borderRadius:30,   
           borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 20,}}>
  <Image  style={{
              width: 300,
              height: 300,
              borderWidth: 2,
              resizeMode: 'contain',
              margin: 8
            }}

               source={{ uri: route.params.imgThumb }}
            />
           
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "black" }}>type: {route.params.id}</Text>
             <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>strainType: {route.params.strainType}</Text> 
             <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>THC: {route.params.thc}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>cbd: {route.params.cbd}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>goodEffects: {route.params.goodEffects}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>sideEffects: {route.params.sideEffects}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>climate: {route.params.climate}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>indoorYieldInGramsMax: {route.params.indoorYieldInGramsMax}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>outdoorYieldInGramsMax: {route.params.outdoorYieldInGramsMax}</Text> 
  <Button 
  onPress={()=>navigation.navigate("Profile")}
  title="back home"
 ></Button> 
 </View>
 </ScrollView>
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
export default Info