import React, { useState } from "react";
import { Dimensions, View, Button, Text, StyleSheet, Image, TextInput, Pressable, Alert, ImageBackground, TouchableOpacity } from "react-native";
import * as RN from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import { mapStyle } from './mapStyle'




export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <RN.ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.inicio}>
                <RN.Text style={styles.title}>Quienes Somos</RN.Text>
                <RN.Text style={styles.textSomos}>
                    Somos un vivero artesanal con varios años de experiencia nos dedicamos al cultivo y venta de plantas ornamentales, frutales, medicinales, forestales, macetas, abonos orgánicos, colocación de césped, diseño y decoración de jardines.</RN.Text>
                <RN.Text style={styles.textSomos}>
                    Vivero Orquídeas del Ilalo dispone de un local cautivante, amplio y propicio para el desarrollo de su ecológica actividad.
                </RN.Text>
                <RN.Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/logohome.png')}
                />

                <RN.Text style={styles.title}>Plantas Frutales</RN.Text>
                <RN.Text style={styles.textSomos}>Se define como árboles frutales o plantas frutales, a todas aquellas plantas con flores que producen una fruta que se consumen.</RN.Text>
                <RN.Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/frut.png')}
                />
                <RN.Text style={styles.title}>Plantas Ornamentales</RN.Text>
                <RN.Text style={styles.textSomos}>Aquella que se cultiva y se comercializa con propósitos decorativos por sus características estéticas</RN.Text>
                <RN.Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/ornam.jpg')}
                />
                <RN.Text style={styles.title}>Plantas Medicinales</RN.Text>
                <RN.Text style={styles.textSomos}>Aquellas plantas que pueden utilizarse enteras o por partes específicas para tratar enfermedades de personas.</RN.Text>
                <RN.Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/medic.png')}
                />
                <RN.Text style={styles.title}>Por un Ecuador mas verde.</RN.Text>
                <RN.Text style={styles.title}>Localizacion                Telefonos</RN.Text>
                <RN.Text style={styles.textSomos}>
                    --Ruta Viva                                                 +593 86770803
                    --Quito 170157                                          +593 39137992
                    --0.210793, -78.457627

                </RN.Text>
                <RN.Text style={styles.title}>Email</RN.Text>
                <RN.Text style={styles.textSomos}>
                    henrydavidllulluna1ba@gmail.com                                        anibal1744@gmail.com


                </RN.Text>

                <MapView
                    customMapStyle={mapStyle}
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: -0.210755,
                        longitude: -78.457612,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003,
                    }}

                    mapType="standard"
                >
                    <Marker
                        coordinate={{
                            latitude: -0.210755,
                            longitude: -78.45761
                        }}
                        title="Vivero Orequideas del Ilalo"
                        description="Abierto de 7:00 am - 17:30 pm"  
                    />

                </MapView>
            </RN.ScrollView>
            <TouchableOpacity
                style={styles.lok}
            >
                <View >
                    <Image
                        style={styles.icoWhatsapp}
                        source={require('../../../assets/Ico-Whatsapp.png')}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );

};

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaf4cb'
    },
    icoWhatsapp: {
        width: 150,
        height: 150,
    },
    lok: {
        position: 'absolute',
        bottom: 0,
        right: 0

    },

    title: {
        marginBottom: 5,
        color: '#808000',

        height: 50,
        marginTop: 0,
        width: 360,
        padding: 12,
        borderColor: "#90ee90",
        borderRadius: 20,
        fontSize: 22
    },
    textSomos: {
        width: 340,
        backgroundColor: '#eaf4cb',
        borderColor: "#00ffff",
        borderRadius: 0,
        marginTop: 5,
        alignSelf: 'center'

    },

    image: {
        flex: 1,
        justifyContent: "center"
    },
    tinyLogo: {
        width: 150,
        height: 160,
        marginTop: 20,
        marginBottom: 0,
        alignSelf: 'center',
        borderRadius: 200,

    },
    mapStyle: {
        width: Dimensions.get('window'),
        height: Dimensions.get('window'),
        width: 250,
        height: 500,
        alignSelf: 'center',

    },
});