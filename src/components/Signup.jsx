import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    StyleSheet,
    Alert
 } from 'react-native'
import React, { useState } from 'react'
import { createUser } from '../firebase/Auth';

export default function Signup(props) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function handleSignup(){
        if (!name || !email || !password) {
            Alert.alert('Fill out the form please!')
        }else{
            try {
                createUser(name,email,password)
            } catch (error) {
                Alert.alert(error.message,`Something went wrong. Do you want to try again?`,[
                    {
                        text:'YES',
                        onPress:() => Alert.alert('You clicked YES')
                    },
                    {
                        text:'NO',
                        onPress:() => Alert.alert('You clicked NO')
                    }
                ])
            }
        }
    }

    function navigate(){
        props.navigation.navigate('Login')
    }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
    >
        <TouchableWithoutFeedback 
        style={styles.container}
        onPress={Keyboard.dismiss}>
            <View style={styles.form}>
                <Text style={styles.title}>Name</Text>
                <TextInput 
                onChangeText={(text) => setName(text)}
                style={styles.input} placeholder='Enter your name' />
                <Text style={styles.title}>Email</Text>
                <TextInput 
                 onChangeText={(text) => setEmail(text)}
                style={styles.input} placeholder='Enter email address' />
                <Text style={styles.title}>Password</Text>
                <TextInput 
                 onChangeText={(text) => setPassword(text)}
                style={styles.input} placeholder='Enter password' />
                <TouchableOpacity 
                onPress={handleSignup}
                style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text onPress={navigate} style={[styles.title,{textAlign:'center'}]}>Need to login?</Text>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    form:{
        padding:30,
        flexDirection:'column',
        gap:10
    },
    title:{
        fontSize:20
    },
    input:{
        borderWidth:0.3,
        padding:15
    },
    button:{
        backgroundColor:'blue',
        padding:20
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})