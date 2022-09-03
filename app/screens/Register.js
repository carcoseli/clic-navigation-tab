import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../config/firebase";

export default function Register(props) {
    const { navigate } = props.navigation;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const image = { uri: "https://i.pinimg.com/564x/1c/5b/76/1c5b765c84ee64adc6ba0d2706db7916.jpg" };

    const registrar = () => {

        if (!email) {
            Alert.alert("Correo electronico es requerido");
        } else if (!password) {
            Alert.alert("Contraseña es requerido");
        } else if (password.length < 6) {
            Alert.alert("Contraseña requiere 6 o mas caracteres");
        } else {

            createUserWithEmailAndPassword(authentication, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    Alert.alert("Usuario creado correctamente");
                    // ...
                    navigate('Login');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    Alert.alert(errorCode + errorMessage);
                });
        }
        console.log(props);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.title}>                   Por un Ecuador mas verde y limpio</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={(value) => setEmail(value)}
                value={email}
                alignItems='center'
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />
            <Pressable
                onPress={registrar}
                style={styles.button}
            >
                <Text style={styles.textButton}>Registrar</Text>
            </Pressable>
            <Text onPress={() => navigate("Login")}
                style={styles.link} >                  ¿Ya tienes una cuenta?</Text>
            </ImageBackground>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#adff2f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 350,
        height: 300,
        marginTop: 0,
        marginBottom: 0,
        
    },
    title: {
        marginBottom: 5,
        color:'#f5fffa'
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        width: 360,
        height: 40,
        borderRadius: 20,
        borderColor: "#0000cd",
        padding: 10,
        backgroundColor:"#fdf5e6"
        

    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#7b68ee",
        borderRadius: 7,
        width: 360,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        alignItems:"center",
        fontSize: 22,
        
    },
    link: {
        marginTop: 20,
        color: "#02CCFF",
        fontWeight: "bold",
        fontSize: 18
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    
    

});
