import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {
  const [data, setData] = useState([])
  useEffect(() => {
     fetchGet();
  }, []);

  const fetchGet = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1',
        'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
      }
    };

    fetch('https://weed-strain1.p.rapidapi.com/?ordering=-strain', options)
      .then(response => response.json())
      .then(response => {
        console.log(response),
          setData(response)
      })
      .catch(err => console.error(err));
  }

  // const params = ()=>{
  //   navigation.navigate("Info", {data})
  // }


  return (
    <View>
    <View style={{}}>

      <Text style={{fontSize: 50, marginLeft: 25, color:"#32cd32" }}>WEEDCINORY</Text>
    </View>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View 
          style={{backgroundColor:"#a0d6b4",
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
          <TouchableOpacity onPress={()=>navigation.navigate("Info", item)}>
            <Image key={item.index} style={{
              borderRadius:30,
              width: 300,
              height: 300,
              resizeMode: 'contain',
              margin: 10
            }}

              source={{ uri: item.imgThumb }}
            />
           
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "black" }}>Type: {item.strain}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>StrainType: {item.strainType}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>THC: {item.thc}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>Cbd: {item.cbd}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>Good Effects: {item.goodEffects}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>Side Effects: {item.sideEffects}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>Climate: {item.climate}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>Indoor YieldInGramsMax: {item.indoorYieldInGramsMax}</Text>
            <Text style={{ fontSize: 22, margin: 10, borderBottomColor: "#000000" }}>Outdoor YieldInGramsMax: {item.outdoorYieldInGramsMax}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* <Button
        onPress={() => navigation.navigate("Home")}
        title="click Home"
      ></Button> */}
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
export default Profile