import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../config/firebase";

export default function Login({ navigation }) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const image = { uri: "https://i.pinimg.com/564x/1c/5b/76/1c5b765c84ee64adc6ba0d2706db7916.jpg" };

    const login = () => {
        //aqui realiza la implementacion de firebase

            signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
        
                navigation.navigate('Main');
                Alert.alert("Acceso permitido");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Gmail o contraseña incorrecto");
            });
        
            





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
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                value={password}
            />
            <Pressable
                onPress={login}
                style={styles.button}
            >
                <Text style={styles.textButton}>Iniciar Sesión</Text>
            </Pressable>
            <Text onPress={() => navigation.navigate("Register")}
                style={styles.link}>                      Deseas Registrate?</Text>
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
        backgroundColor: "#008000",
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
        fontSize: 18,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});