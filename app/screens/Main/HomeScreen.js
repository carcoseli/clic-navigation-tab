import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen(props) {
  const { navigate } = props.navigation;
  //Hooks de estado
  const [productList, setProductList] = useState([]);
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [modalEdit, setModalEdit] = useState(false);

  //Hooks de efecto: ayuda a visualizar lo primero de la app
  useEffect(() => {
    let list = [];

    async function getProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
        console.log(doc.id, "=>", doc.data());
      });
      setProductList(list);
    }
    getProducts();
  }, []);

  const editProduct = async () => {
    const productRef = doc(db, "products", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(productRef, {
      productName: productName,
      description: description,
      price: price,
    });
    Alert.alert("Producto modificado");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <View style={styles.img}>
          <Image
            style={styles.imageProduct}
            source={require("../../../assets/caja.png")}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.textName}>{item.productName}</Text>
          <Text style={styles.textDescription}>{item.description}</Text>
          <Text style={styles.textPrice}>${item.price}</Text>
        </View>

        <View style={styles.iconView}>
          <Ionicons
            name="pencil-outline"
            size={30}
            style={styles.icon}
            onPress={function openEditModal() {
              setModalEdit(true);
              setId(item.id);
              setProductName(item.productName);
              setDescription(item.description);
              setPrice(item.price);
            }}
          ></Ionicons>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {productList.length > 0 ? (
        <FlatList
          data={productList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.textNoProducts}>No existen productos</Text>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEdit}
        onRequestClose={() => {
          setModalEdit(!modalEdit);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar producto</Text>
            <Text style={styles.modalText}>id: {id}</Text>
            <TextInput
              style={styles.textName}
              onChangeText={(value) => setProductName(value)}
              value={productName}
              placeholder="Nombre del producto"
            ></TextInput>
            <TextInput
              style={styles.textDescription}
              onChangeText={(value) => setDescription(value)}
              value={description}
              placeholder="Descripción"
              multiline
              numberOfLines={3}
            ></TextInput>
            <TextInput
              keyboardType="numeric"
              style={styles.textPrice}
              onChangeText={(value) => setPrice(value)}
              value={price}
              placeholder="$ Precio"
            ></TextInput>

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalEdit(!modalEdit)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonEdit]}
                onPress={() => {
                  editProduct();
                }}
              >
                <Text style={styles.textStyle}>Editar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    width: 360,
    height: 100,
    borderRadius: 5,
  },
  img: {
    width: "30%",
  },
  info: {
    width: "50%",
  },
  iconView: {
    width: "20%",
    padding: 10,
  },
  imageProduct: {
    width: 80,
    height: 70,
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 15,
  },
  textPrice: {
    fontSize: 20,
    textAlign: "right",
    color: "#02CCFF",
    fontWeight: "bold",
    width: 80,
  },
  textNoProducts: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  icon: {
    color: "#02CCFF",
    marginLeft: 20,
    padding: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: 300,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonEdit: {
    backgroundColor: "#02CCFF",
    marginLeft: 10,
  },
  buttonDelete: {
    backgroundColor: "#CB4335",
    marginLeft: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    marginTop: 10,
    borderWidth: 2,
    width: 340,
    height: 50,
    borderRadius: 5,
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
  modalButtons: {
    flexDirection: "row",
    marginTop: 5,
  },
});
