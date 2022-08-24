import {View, Text, Pressable, StyleSheet, firebase} from 'react-native'
import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signOutUser} from "firebase/auth";


export default function UserProfile(){

const salir  = () =>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      })
}

    return(
        
        <View>
            <Pressable onPress={salir} style={styles.button}>
                <Text style={styles.textButton}>Cerrar Sesion</Text>
            </Pressable>
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        fontSize:20,
        fontWeight: 'bold',
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        width: 340,
        height: 50,
        borderRadius: 15,
        borderColor: "#02CCFF",
        padding: 10,
    },
    textArea: {
        marginTop: 10,
        borderWidth: 2,
        width: 340,
        height: 100,
        borderRadius: 5,
        borderColor: "#02CCFF",
        padding: 10,
    },
    button: {
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        backgroundColor: "#02CCFF",
        borderRadius: 7,
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
