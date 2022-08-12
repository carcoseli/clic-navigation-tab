import { View, Text ,TextInput, Image, StyleSheet,Pressable,NativeModules, Alert} from 'react-native';
import React, { useState } from "react";
import { idGenerator } from '../../../utils/IdGenerator';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../config/firebase';

export default function AddScreen() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);

  const createProduct=async()=>{
    if(!productName || !description || !price){
      Alert.alert('ERROR - Campos vacíos')
    } else {
      const id =idGenerator(10);
      await setDoc(doc(db, "products", id), {
        id:id,
        productName: productName,
        description: description,
        price: price
      });
      Alert.alert('Creación correcta');
      //NativeModules.DevSettings.reload(); //recargar la pantalla
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Producto</Text>
      <TextInput
      style={styles.input}
      onChangeText={(value) => setProductName(value)}
      value={productName}
      placeholder="Nombre del producto"
      ></TextInput>
      <TextInput
      style={styles.textArea}
      onChangeText={(value) => setDescription(value)}
      value={description}
      placeholder="Descripción"
      multiline
      numberOfLines={3}
      ></TextInput>
      <TextInput
      style={styles.input}
      onChangeText={(value) => setPrice(value)}
      value={price}
      placeholder="$ Precio"
      ></TextInput>
      <Image
      style={styles.image}
      source={require('../../../assets/product.png')}
      ></Image>

      <Pressable onPress={() => createProduct()}style={styles.button}>
        <Text style={styles.label}>Crear Producto</Text>
      </Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize:20,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom: 10,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    width: 340,
    height: 50,
    borderRadius: 5,
    borderColor: "#02CCFF",
    padding: 10,
  },
  textArea: {
    marginTop: 10,
    borderWidth: 1,
    width: 340,
    height: 100,
    borderRadius: 5,
    borderColor: "#02CCFF",
    padding: 10,
  },
  image:{
    width: 180,
    height: 180,
  },
  button: {
    marginTop: 20,
    //marginBottom: 30,
    padding: 10,
    backgroundColor: "#02CCFF",
    borderRadius: 5,
    width: 340,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
