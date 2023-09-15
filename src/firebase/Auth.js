import { Alert } from 'react-native';
import './config';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut 
} from 'firebase/auth';

export async function createUser(name,email,password){
    try {
        createUserWithEmailAndPassword(getAuth(),email,password)
        .then(() => {
            Alert.alert('success')
        })
        .catch((err) => {
            Alert.alert(err.message)
        })
        // save name into mongodb
    } catch (error) {
        Alert.alert(error.message)
    }
}

export async function loginUser(email,password){
    try {
        signInWithEmailAndPassword(getAuth(),email,password)
        .then(() => {
            Alert.alert('success')
        })
        .catch((err) => {
            Alert.alert(err.message)
        })
    } catch (error) {
        Alert.alert(error.message)
    }
}

export async function resetPassword(email){
    try {
        sendPasswordResetEmail(getAuth(),email)
        .then(() => {
            Alert.alert('Password reset instructions have been emailed.')
        })
        .catch((err) => {
            Alert.alert(err.message)
        })
    } catch (error) {
        Alert.alert(error.message)
    }
}

export async function logOut(){
    try {
        signOut(getAuth())
        .then(() => {
            Alert.alert('Logout success')
        })
        .catch((err) => {
            Alert.alert(err.message)
        })
    } catch (error) {
        Alert.alert(error.message)
    }
}