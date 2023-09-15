import { useState, useLayoutEffect, useContext } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Auth } from "../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import { logOut } from "../firebase/Auth";

export default function Home(props){
    const [data,setData] = useState(null);

    const { isLoggedIn, auth } = useContext(Auth);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: isLoggedIn ? () => <AntDesign onPress={() => Alert.alert('Do you want to log out?','You are going to log out.',[
              {
                text:'Yes',
                onPress:() => logOut()
              },
              {
                text:'No'
              }
            ])} style={{marginRight:10}} name="logout" size={24} color="black" />: () => <Text onPress={() => props.navigation.navigate('Signup')}>Sign Up</Text>
        })
    },[props.navigation,isLoggedIn])
  
    let apiURl = 'http://localhost:4444'
  
    async function fetchDataFromServer(){
      try {
        let dataRaw = await fetch(`${apiURl}/data`);
        let data = await dataRaw.json();
        setData(data)
      } catch (error) {
        Alert.alert(error.message)
      }
    }
  
    async function sendData(){
       await fetch(`${apiURl}/clientData`,{
        headers:{
          'Content-Type':'Application/json'
        },
        method:'POST',
        body:JSON.stringify({ message:'Hi from client - front-end' })
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  
    return (
      <View>
        <Text>{data?.text}</Text>
        <Button title='Fetch Data' onPress={fetchDataFromServer} />
        <Button title='Send Data' onPress={sendData} />
      </View>
    )
  }