import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Form } from "react-native";
import TabNavigation from "../navigation/TabNavigation";
//Import para inicio de sesion
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { autentication } from "../config/FireBase";

export default function Login(props) {
    const {navigation} = props.navigation;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


//Clase para ingresar validando los usuarios y las contraseñas

    const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.title}>Compra Fácil y Rápido</Text>
            <Form onSub>
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={(value) => setEmail(value)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />
            </Form>
            
            <Pressable
                onPress={login}
                style={styles.button}
            >
                <Text style={styles.textButton}>Iniciar Sesión</Text>
            </Pressable>
            <Text onPress={() => navigation.navigate("Register")} 
            style={styles.link}>¿No tienes una cuenta?</Text>
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
    tinyLogo: {
        width: 250,
        height: 125,
        marginTop: 100,
        marginBottom: 30,
    },
    title:{
        marginBottom: 50,
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 20,
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