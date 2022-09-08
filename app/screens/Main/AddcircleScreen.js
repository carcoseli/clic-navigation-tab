import { View, Text, StyleSheet, TextInput, Pressable,Alert,Button } from 'react-native'
import React from 'react'
import { idGenerator } from '../../utlis/idGenerator';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../config/firebase';


export default function AddcircleScreen() {
  /*definimos los hooks de estados*/
  const [productName, setProductName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(null);

  const createProduct=async()=>{
    if (!productName) {
      Alert.alert("Todos los campos son obigatorios");
    } else {
      
      const id=idGenerator(10);
      await setDoc (doc(db, "product",id), {
        id:id,
        productName:productName,
        description:description,
        price:price,
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear productos</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setProductName(value)}
        value={productName}
        placeholder="Nombre del producto"
      />
      <TextInput
        style={styles.textArea}
        onChangeText={(value) => setDescription(value)}
        value={description}
        placeholder="Descripción del producto"
        multiline
        numberOfLines={3}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPrice(value)}
        value={price}
        placeholder="Precio del producto"
      />
      <Pressable onPress={createProduct} style={styles.button}>

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
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    marginTop: 10,
    borderWidth: 2,
    width: 340,
    height: 50,
    borderRadius: 5,
    borderColor: '#02CCFF',
    padding: 10,

  },

  textArea: {
    marginTop: 10,
    borderWidth: 2,
    width: 340,
    height: 100,
    borderRadius: 5,
    borderColor: '#02CCFF',
    padding: 10,

  },

  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#02CCFF',
    borderRadius: 5,
    width: 340,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },


})