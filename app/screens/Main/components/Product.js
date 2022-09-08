import * as React from 'react';
import * as RN from 'react-native';
import { db } from '../../../config/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

export default function Product({
    id,
    emoji,
    name,
    price,
    cantid,
    isSold,
}) {

    const onDelete = () => {
        const docRef = doc(db, 'products', id);
        deleteDoc(docRef);
    }
    const countries = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
    ];

    const onEdit = () => {
        const docRef = doc(db, 'products', id);
        updateDoc(docRef, {
            isSold: true,
        });
    }

    return (
        <RN.View style={styles.productContainer}>
            <RN.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RN.Image style={{ width: 150, height: 150 }}
                    source={{ uri: emoji }} />
                <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
            </RN.View>
            <RN.Text style={styles.name}>{name}</RN.Text>
            <RN.Text style={styles.price}>${price}</RN.Text>
            <RN.Text style={styles.cantid}>cantidad:{cantid}</RN.Text>
            

            {isSold ? (
                <RN.TouchableOpacity
                    style={[styles.button, { backgroundColor: 'gray' }]}>
                    <RN.Text style={styles.buttonText}>Agotado</RN.Text>
                </RN.TouchableOpacity>
            )
                : (
                    <RN.TouchableOpacity
                        onPress={onEdit}
                        style={styles.button}>
                        <RN.Text style={styles.buttonText}>Comprar</RN.Text>
                    </RN.TouchableOpacity>
                )}

        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,

    },
    emoji: {
        fontSize: 100,
        textAlign: 'center'
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    cantid: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    Image: {
        alignItems: 'center'
    },
    dropdown2BtnTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#444',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
    dropdown2RowTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
});