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
import React, {useState} from 'react'
import { resetPassword } from '../firebase/Auth';
import { Entypo } from '@expo/vector-icons';

export default function Password(props) {
    const [email,setEmail] = useState('');

    async function handlePassword(){
       if (!email) {
        Alert.alert('Email missing')
       }else{
        try {
            resetPassword(email)
        } catch (error) {
            Alert.alert(error.message)
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
                <Text style={styles.title}>Email</Text>
                
                <TextInput 
                onChangeText={(t) => setEmail(t)}
                style={styles.input} placeholder='Enter email address' />
                <Text style={styles.title}>Password</Text>

                <TouchableOpacity 
                onPress={handlePassword}
                style={styles.button}>
                    <Text style={styles.buttonText}>Reset password</Text>
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