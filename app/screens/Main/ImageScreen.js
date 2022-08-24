import React, {useState} from "react";
import { View, Text, Button, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";


const ImageScreen = () =>{

    const [image, setImage]= useState('https://via.placeholder.com/200')

    const selectImage = () =>{

        const options={
            title:"Seleccionar una imagen",
            storageOptions: {
                skipBackup: true,
                path: 'images',
        }
    }

    launchImageLibrary(options, response=>{
        if(response.errorCode){
            console.log(response.errorMessage)
        }else if(response.didCancel){
            console.log('El usuario cancelo la seleccion')
        }else{
            const path = response.assets[0].uri
            setImage(path)
        }
    })

}
    return(
        <View>
                <Button
                title='SELECCIONAR IMAGEN'
                onPress={selectImage}
                />

                <Image
                style={{
                    alignSelf: 'center',
                    height:200,
                    width:200,
                }}
                source={{uri:image}}
                />
            </View>
    )
}

export default ImageScreen
