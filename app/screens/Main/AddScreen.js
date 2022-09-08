import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground } from "react-native";
import * as RN from 'react-native';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Add() {

  const [newItem, setNewItem] = React.useState({
    emoji: '',
    name: '',
    price: 0,
    cantid: 0,
    isSold: false,
    createdAt: new Date(),
  })

  const onSend = async () => {
    const docRef = await addDoc(collection(db, 'products'), newItem);
  }
  const image = { uri: "https://i.pinimg.com/564x/03/ca/a8/03caa8b3006b06f652f1d6ef44d3b845.jpg" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} alignItems='center'>

        <RN.Text style={styles.title}>     Agregar un producto</RN.Text>
        <RN.TextInput
          onChangeText={(text) => setNewItem({ ...newItem, emoji: text })}
          style={styles.emoji}
          placeholder='URL'

        />

        <RN.TextInput
          onChangeText={(text) => setNewItem({ ...newItem, name: text })}
          style={styles.inputContainer}
          placeholder='Nombre del Producto'
        />
        <RN.TextInput
          onChangeText={(text) => setNewItem({ ...newItem, price: text })}
          style={styles.inputContainer}
          placeholder='$ Precio'
        />
        <RN.TextInput
          onChangeText={(Number) => setNewItem({ ...newItem, cantid: Number })}
          style={styles.inputContainer}
          placeholder='Cantidad'
        />
        
        <Pressable style={styles.button} onPress={onSend}>

          <Text style={styles.label} >Crear Producto</Text>

        </Pressable>
      </ImageBackground>

    </View>
  )
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#f8f8ff',
    fontSize: 30,
  },
  inputContainer: {
    marginTop: 20,
    borderWidth: 1,
    width: 360,
    height: 40,
    borderRadius: 10,
    borderColor: "#ffd700",
    padding: 10,
    backgroundColor: "#fdf5e6"


  },
  emoji: {
    marginTop: 20,
    borderWidth: 1,
    width: 360,
    height: 40,
    borderRadius: 10,
    borderColor: "#ffd700",
    padding: 10,
    backgroundColor: "#fdf5e6"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#ffd700",
    borderRadius: 7,
    width: 360,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  }})