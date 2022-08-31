import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import TabNavigation from "../navigation/TabNavigation";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { authentication } from "../config/firebase";

export default function Login(props) {
  const { navigate } = props.navigation;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [activo, setActivo] = useState(false);

  const [activeUserEmail,SeActiveUserEmail]=useState('');

  /*
  userStatus();
  if(activo){*/
    const login = () => {
      if (!email) {
        Alert.alert("Correo electrónico es requerido");
      } else if (!password) {
        Alert.alert("La contraseña es requerida");
      } else {
        
        signInWithEmailAndPassword(authentication, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
            Alert.alert("Ingreso exitoso");
            setEmail("");
            setPassword("");  
            navigate("Main");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode=='auth/user-not-found'){
              Alert.alert('Usuario no encotrado');
            }else if(errorCode=='auth/wrong-password'){
              Alert.alert('Contraseña incorrecta');
            }
  
            
            // ..
          });
      }
    };

    
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.title}>Compra Fácil y Rápido</Text>
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
      <Pressable onPress={login} style={styles.button}>
        <Text style={styles.textButton}>Iniciar Sesión</Text>
      </Pressable>
      <Text onPress={() => navigate("Register")} style={styles.link}>
        ¿No tienes una cuenta?
      </Text>
    </View>
  );/*
  }else{
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/logo.png")}
        />
        <Pressable onPress={()=>{navigate("Main")}} style={styles.button2}>
          <Text style={styles.textButton}>Continuar como {activeUserEmail}</Text>
        </Pressable>
        <Text onPress={() => closeSession()} style={styles.link}>
        Cerrar Sesión
      </Text>
      </View>
    );
  }
 /* function userStatus(){
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        console.log("Activo:",user.email);
        navigate("Main");
        SeActiveUserEmail(user.email);
      } else {
        console.log("No activo");
        setActivo(true);
      }
    });

  }
  function  closeSession(){
    authentication.signOut()
    .then(function(){
      console.log("Sesión Cerrada");
    })
    .catch(function(error){
      console.log(error);
    })
    navigate("Login");
  }*/


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: 'center',
  },
  tinyLogo: {
    width: 250,
    height: 125,
    marginTop: 100,
    marginBottom: 30,
  },
  title: {
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
  button2: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
    backgroundColor: "#02CCFF",
    borderRadius: 7,
    width: 200,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  
  link: {
    marginTop: 20,
    color: "#02CCFF",
    fontWeight: "bold",
  },
});
