import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Modal, Pressable, TextInput, NativeModules } from "react-native";
import React from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import Ionicons from "@expo/vector-icons/Ionicons";


const HomeScreen = () => {
  /*const productList = [
    {
      productName: 'Mouse',
      description: 'Mouse Inalámbrico',
      price: 46,
    },
    {
      productName: 'Mouse',
      description: 'Mouse Inalámbrico',
      price: 46,
    }
  ]*/
  const [productList, setProductList] = React.useState([]);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");

  React.useEffect(() => {
    let list = [];

    async function getProducts() {

      const querySnapshot = await getDocs(collection(db, "products"));

      querySnapshot.forEach((doc) => {
        list.push(doc.data());
        console.log(doc.id, " => ", doc.data());

      });
      setProductList(list);
    }
    getProducts();
  }, [])

  const editProduct = async() => {
    if (!name || !description || !price) {
      Alert.alert("Todos los campos son obligatorios");
    } else {
      const docRef = doc(db, "products", id);

      await updateDoc(docRef, {
        productName: name,
        description: description,
        price: price
      });
      //Recargar la pantalla
      NativeModules.DevSettings.reload();
    }
  }

  const deleteProduct = async() => {
    await deleteDoc(doc(db, "products", id));
    NativeModules.DevSettings.reload();
  }


  const renderItem = ({ item }) => (
    <View style={styles.item} key={item.id}>
      <View style={styles.img}>
        <Image
          style={styles.imageProduct}
          source={require('../../../assets/item.png')}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.textName}>{item.productName}</Text>
        <Text style={styles.textDescription}>{item.description}</Text>
        <Text style={styles.textPrice}>$ {item.price}</Text>
      </View>
      <View style={styles.iconView}>
        <Ionicons name={"pencil"} size={30} style={styles.icon}
          onPress={function openEditModal() {
            setModalEdit(true);
            setId(item.id);
            setName(item.productName);
            setDescription(item.description);
            setPrice(item.price);
          }}
        />
        <Ionicons name={"cart"} size={30} style={styles.icon} />

      </View>
    </View>
  )

  return (
    //Scroll
    <SafeAreaView style={styles.container}>
      {
        productList.length > 0 ? (
          <FlatList
            //Quemar los datos
            data={productList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.textNoProducts}>No existen productos</Text>
        )
      }
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
            <Text style={styles.modalText}>Editar Producto</Text>
            <Text style={styles.modalText}>Id: {id}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setName(value)}
              value={name}
              placeholder="Nombre del producto"
            />
            <TextInput
              style={styles.textArea}
              onChangeText={(value) => setDescription(value)}
              value={description}
              placeholder="Descripción"
              multiline
              numberOfLines={3}
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setPrice(value)}
              value={price}
              placeholder="$ Precio"
              keyboardType='decimal-pad'
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalEdit(!modalEdit)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonEdit]}
                onPress={editProduct}
              >
                <Text style={styles.textStyle}>Editar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={deleteProduct}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default HomeScreen;

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
