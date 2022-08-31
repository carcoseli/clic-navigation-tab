import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, Modal } from 'react-native'
import React, { useEffect, useState} from 'react'
import { collection, getDocs } from "firebase/firestore"; //Import de ..Primeros pasos con Cloud Firestore
import { db } from '../../config/firebase';
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-gesture-handler';
 
export default function HomeScreen() {
 
    //Para creacion de productos
    //Hooks de estado
    const [productList, setProductList] = useState([]);
    const [id, setId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [modalEdit, setmodalEdit] = useState(false);
 
    //Hooks de efecto: ayuda a visualizar lo primero de la app
    useEffect(() => { //--> useEffectSnippet
      let list = []; //creo un array para capturar productos
 
      // Ojo, si en la funiocn esta await, debemos poner async, haciendolo ascincrono
      async function getProducts() {
        const querySnapshot = await getDocs(collection(db, "Products")); //"nombre de la tabla"
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
          console.log(doc.id, "=>", doc.data());
        });
        setProductList(list);
      }
      getProducts();
 
    }, [])
 
 
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item} key={item.id}>
 
          <View style={styles.img}>
            <Image
              style={styles.imageProduct}
              source={require('../../../assets/item.png')}
            />
          </View>
 
          <View style={styles.info}>
            <Text style={styles.textName}>{item.productName}</Text>
            <Text style={styles.textDescription}>{item.productDescription}</Text>
            <Text style={styles.textPrice}>${item.productPrice}</Text>
          </View>

          <View style={styles.iconView}>
            <Ionicons name="create-outline" size={30} style={styles.icon} onPress={function openEditModal(){
              setmodalEdit(true);
              setId(item.id);
              setProductDescription(item.productDescription);
              setProductName(item.setProductName);
              setProductPrice(item.setProductPrice)
            }}></Ionicons>
          </View>
 
        </View>
      )
    }
 
 
    return (
      <SafeAreaView style={styles.container}>
        { //para colocar codigo de JS lo ponemos dentro de llaves {}
          //generamoss funcion ternearia: if else...
          productList.length > 0 ? (
            <FlatList
              data={productList}
              renderItem={renderItem}
              keyExtractor={item => item.id} //identificaro de producto
            />
          ) : (
            <Text style={styles.textNOproducts}>No existen productos</Text>
          )
        }
        <Modal style={styles.modalView} animationType='slide' transparent={true} visible={modalEdit} onRequestClose={()=>{setmodalEdit}} >
          <View style={styles.centerView}></View>
          <View style={styles.modaView}>
            <Text style={styles.modalText}>Editar producto</Text>
            <Text style={styles.modalText}>id:{id} </Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setProductName(value)}
              value={productName}
              placeholder="Nombre del producto"
            ></TextInput>
            <TextInput
              style={styles.textArea}
              onChangeText={(value) => setProductDescription(value)}
              value={productDescription}
              placeholder="Descripción"
              multiline
              numberOfLines={3}
            ></TextInput>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setProductPrice(value)}
              value={productPrice}
              placeholder="$ Precio"
            ></TextInput>
          </View>
        </Modal>


      </SafeAreaView>
    )
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#c2c2c2",
      alignItems: "center",
      justifyContent: 'center',
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: "#fff",
      padding: 10,
      marginTop: 10,
      width: 360,
      height: 100,
      borderRadius: 5
    },
    img: {
      width: "30%"
    },
    info: {
      width: "50%"
    },
    iconView: {
      width: "20%",
      padding: 10
    },
    imageProduct: {
      width: 80,
      height: 70
    },
    textName: {
      fontSize: 18,
      fontWeight: "bold"
    },
    textDescription: {
      fontSize: 15,
    },
    textPrice: {
      fontSize: 20,
      textAlign: "right",
      color: "#02CCFF",
      fontWeight: "bold"
    },
    textNoProducts: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: "bold"
    },
    icon: {
      color: "#02CCFF",
      marginLeft: 20,
      padding: 1
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      marginTop: 10
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    buttonEdit: {
      backgroundColor: "#02CCFF",
      marginLeft: 10
    },
    buttonDelete: {
      backgroundColor: "#CB4335",
      marginLeft: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
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
    modalButtons: {
      flexDirection: "row",
      marginTop: 5,
  
    }
  
  });