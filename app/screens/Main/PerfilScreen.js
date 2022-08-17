import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert } from "react-native";
import React from 'react'

export default function PerfilScreen(props) {
  const { navigation } = props;

  const salir = () => {
    navigation.navigate("Login");
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={salir}
        style={styles.button}
      ><Text>Salir</Text></Pressable>
    </View>
  )
};
const styles = StyleSheet.create({
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
  title: {
    marginBottom: 50,
},
})